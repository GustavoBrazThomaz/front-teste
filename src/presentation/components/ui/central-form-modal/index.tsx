import { Modal } from "@components/core/modal";
import { useCentralStore } from "@stores/useCentralStore";
import * as styles from "./styles/central-form-modal.css";
import { Input } from "@components/core/input";
import { Select } from "@components/core/select/Select";
import { Button } from "@components/core/button";
import { FormItem } from "@components/core/form-item";
import { useForm } from "react-hook-form";
import { SelectOption } from "@components/core/select/types";
import { InputMask, useMask } from "@react-input/mask";

export const CentralFormModal = () => {
  const { incTotalCentral, toggleCentralModal, centralModal } =
    useCentralStore();
  const hasId = !!centralModal.id;
  const titleText = hasId ? "Editar central" : "Criar nova central";
  const { register, handleSubmit, setValue } = useForm();

  const submitForm = (form: any) => {
    console.log(form);
  };

  return (
    <Modal.Root
      open={centralModal.open}
      onOpenChange={() => toggleCentralModal()}
    >
      <Modal.Body>
        <form onSubmit={handleSubmit(submitForm)}>
          <Modal.Content
            title={titleText}
            className={styles.centralFormModalStyle}
          >
            <FormItem label="Nome da central">
              <Input {...register("name")} placeholder="Exemplo" fullWidth />
            </FormItem>

            <FormItem label="Endereço Mac">
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

            <FormItem label="Modelos">
              <Select
                options={[
                  {
                    value: "1",
                    label: "AMT 4010",
                  },
                  {
                    value: "2",
                    label: "AMT 4010 SMART",
                  },
                  {
                    value: "3",
                    label: "AMT 2018",
                  },
                  {
                    value: "4",
                    label: "AMT 2018 E/EG",
                  },
                  {
                    value: "5",
                    label: "AMT 1000",
                  },
                  {
                    value: "6",
                    label: "AMT 8000",
                  },
                ]}
                onChange={(event) => {
                  const valueChoose = event as SelectOption;
                  setValue("modelId", valueChoose.value);
                }}
                placeholder="Selecionar Modelo"
              />
            </FormItem>

            <Modal.Actions>
              <Button
                type="button"
                onClick={() => toggleCentralModal()}
                variants="danger"
              >
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
