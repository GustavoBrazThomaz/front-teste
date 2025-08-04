"use client";
import { Button } from "@components/core/button";
import { FormItem } from "@components/core/form-item";
import { Input } from "@components/core/input";
import { Modal } from "@components/core/modal";
import { Select } from "@components/core/select/Select";
import { SelectOption } from "@components/core/select/types";
import { InputMask } from "@react-input/mask";
import { useCentralStore } from "@stores/use-central-store";
import { useEffect } from "react";
import { useCentralByIdQuery } from "../../hooks/centrals/use-central-by-id-query";
import { useModelsQuery } from "../../hooks/models/use-models-query";
import { useCentralFormState } from "../../hooks/ui/use-central-form-state";
import * as styles from "./styles/central-form-modal.css";

export const CentralFormModal = () => {
  const { centralModal } = useCentralStore();
  const { methods, submitForm, handleClose, hasId } = useCentralFormState(
    centralModal.id
  );
  const { data, isLoading } = useCentralByIdQuery(
    centralModal.id as string,
    !!centralModal.id
  );
  const { modelsSelectOptions } = useModelsQuery();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = methods;

  const title = hasId ? "Editar central" : "Criar nova central";

  useEffect(() => {
    if (data && hasId) {
      reset({
        name: data.name,
        mac: data.mac,
        modelId: data.modelId,
        originalMac: data.mac,
      });
    }
  }, [data, hasId, reset]);

  if (hasId) {
    if (isLoading) return <p>Loading</p>;
    if (!data) return <p>Error</p>;
  }

  return (
    <Modal.Root open={centralModal.open} onOpenChange={handleClose}>
      <Modal.Body className={styles.centralFormModalBodyStyle}>
        <form onSubmit={handleSubmit(submitForm)}>
          <Modal.Content title={title} className={styles.centralFormModalStyle}>
            <FormItem label="Nome da central" error={errors.name?.message}>
              <Input
                {...register("name")}
                placeholder="Nova central"
                fullWidth
                autoFocus={false}
                autoComplete="off"
              />
            </FormItem>

            <FormItem label="Endereço Mac" error={errors.mac?.message}>
              <InputMask
                {...register("mac")}
                component={Input}
                fullWidth
                placeholder="00:00:00:00:00"
                className={styles.macInputStyle}
                mask="**:**:**:**:**:**"
                replacement={{ "*": /\w/ }}
              />
            </FormItem>

            <FormItem label="Modelos" error={errors.modelId?.message}>
              <Select
                options={modelsSelectOptions}
                defaultValue={data?.modelId ? String(data.modelId) : undefined}
                onChange={(event) => {
                  const valueChoose = event as SelectOption;
                  setValue("modelId", valueChoose.value);
                }}
                placeholder="Selecionar Modelo"
              />
            </FormItem>

            <Modal.Actions>
              <Button type="button" onClick={handleClose} variant="danger">
                Cancelar
              </Button>
              <Button type="submit" variant="primary">
                Salvar
              </Button>
            </Modal.Actions>
          </Modal.Content>
        </form>
      </Modal.Body>
    </Modal.Root>
  );
};
