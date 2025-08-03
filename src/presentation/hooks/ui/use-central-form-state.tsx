import { zodResolver } from "@hookform/resolvers/zod";
import { useCentralStore } from "@stores/use-central-store";
import { useQueryClient } from "@tanstack/react-query";
import {
  centralFormSchema,
  centralFormType,
} from "@ui/central-form-modal/schema";
import { useForm } from "react-hook-form";
import { useCentralMutation } from "../centrals/use-central-mutation";

export const useCentralFormState = (centralId?: string) => {
  const { toggleCentralModal } = useCentralStore();
  const hasId = !!centralId;
  const methods = useForm<centralFormType>({
    resolver: zodResolver(centralFormSchema),
    mode: "onSubmit",
  });
  const { reset } = methods;
  const { newCentral, updateCentral } = useCentralMutation();
  const queryClient = useQueryClient();

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

    if (hasId && centralId) {
      updateCentral.mutate(
        {
          id: centralId,
          ...centralForm,
        },
        {
          onSuccess(_, variables) {
            queryClient.setQueryData(["central", centralId], () => {
              return variables;
            });
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

  return { submitForm, hasId, methods, handleClose };
};
