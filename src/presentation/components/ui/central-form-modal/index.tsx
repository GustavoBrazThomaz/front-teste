"use client";
import { Modal } from "@components/core/modal";
import { useCentralStore } from "@stores/use-central-store";
import * as styles from "./styles/central-form-modal.css";
import { Input } from "@components/core/input";
import { Select } from "@components/core/select/Select";
import { Button } from "@components/core/button";
import { FormItem } from "@components/core/form-item";
import { useForm } from "react-hook-form";
import { SelectOption } from "@components/core/select/types";
import { InputMask } from "@react-input/mask";
import { zodResolver } from "@hookform/resolvers/zod";
import { centralFormSchema, centralFormType } from "./schema";
import { useCentral, useGetCentralById } from "../../../api/hooks/useCentral";
import { useEffect } from "react";
import { useGetModels } from "../../../api/hooks/useModel";
import { useQueryClient } from "@tanstack/react-query";

export const CentralFormModal = () => {
  const { toggleCentralModal, centralModal } = useCentralStore();
  const hasId = !!centralModal.id;
  const title = hasId ? "Editar central" : "Criar nova central";
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<centralFormType>({
    resolver: zodResolver(centralFormSchema),
    mode: "onSubmit",
  });

  const { data, isLoading } = useGetCentralById(
    centralModal.id as string,
    hasId
  );
  const { modelsSelectOptions } = useGetModels();
  const { newCentral, updateCentral } = useCentral();
  const queryClient = useQueryClient();

  const options = modelsSelectOptions();

  useEffect(() => {
    if (data && hasId) {
      reset({
        name: data.name,
        mac: data.mac,
        modelId: data.modelId,
        originalMac: data.mac,
      });
    }
  }, [data]);

  const handleClose = () => {
    toggleCentralModal();
    reset({
      name: "",
      mac: "",
      modelId: "",
      originalMac: undefined,
    });
  };

  const submitForm = async (form: centralFormType) => {
    const { name, modelId, mac } = form;
    const centralForm = {
      name,
      mac,
      modelId: modelId,
    };

    if (hasId && centralModal.id) {
      updateCentral.mutate(
        {
          id: centralModal.id,
          ...centralForm,
        },
        {
          onSuccess(_, variables) {
            queryClient.setQueryData(
              ["fetchCentralById", centralModal.id],
              () => {
                return variables;
              }
            );
            handleClose();
          },
        }
      );
      return;
    }

    newCentral.mutate(centralForm, {
      onSuccess() {
        handleClose();
      },
    });
  };

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
                placeholder="Exemplo"
                fullWidth
                autoFocus={false}
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
                options={options}
                defaultValue={data?.modelId ? String(data.modelId) : undefined}
                onChange={(event) => {
                  const valueChoose = event as SelectOption;
                  setValue("modelId", valueChoose.value);
                }}
                placeholder="Selecionar Modelo"
              />
            </FormItem>

            <Modal.Actions>
              <Button type="button" onClick={handleClose} variants="danger">
                Cancelar
              </Button>
              <Button type="submit" variants="primary">
                Salvar
              </Button>
            </Modal.Actions>
          </Modal.Content>
        </form>
      </Modal.Body>
    </Modal.Root>
  );
};
