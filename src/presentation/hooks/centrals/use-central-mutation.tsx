import { useCentralStore } from "@stores/use-central-store";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { deleteCentralById } from "@infra/http/adapters/central-adapters/delete-central";
import { postCentral } from "@infra/http/adapters/central-adapters/post-central";
import { putCentral } from "@infra/http/adapters/central-adapters/put-central";
import { CentralEntity } from "@domain/entities/central-entity";
import { toast } from "react-toastify";
import { UndoDeleteToast } from "@ui/undo-delete-toast";
import { useCentralsQueryParams } from "./use-central-query-params";

export const useCentralMutation = () => {
  const queryClient = useQueryClient();
  const queryParams = useCentralsQueryParams();
  const { incCentralsTotal, descCentralsTotal } = useCentralStore();

  const newCentral = useMutation({
    mutationKey: ["central", "create"],
    mutationFn: postCentral,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["centrals", { ...queryParams }],
      });
      incCentralsTotal();
      toast.success("Central criada com sucesso");
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  const updateCentral = useMutation({
    mutationKey: ["central", "update"],
    mutationFn: putCentral,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["centrals", { ...queryParams }],
      });
      toast.success("Central atualizada com sucesso");
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  const deleteCentral = useMutation({
    mutationKey: ["central", "delete"],
    mutationFn: deleteCentralById,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["centrals", { ...queryParams }],
      });
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  const handleDeleteCentral = (id: string) => {
    let undo = false;
    descCentralsTotal();
    const cachedCentralsData = queryClient.getQueryData([
      "centrals",
      { ...queryParams },
    ]);

    queryClient.setQueryData(
      ["centrals", { ...queryParams }],
      (cached: CentralEntity[]) =>
        cached.filter((central: CentralEntity) => central.id !== id)
    );

    toast.error(
      <UndoDeleteToast
        onUndo={() => {
          undo = true;
          queryClient.setQueryData(
            ["centrals", { ...queryParams }],
            cachedCentralsData
          );
          incCentralsTotal();
        }}
      />,
      {
        position: "bottom-right",
        autoClose: 2000,
        closeButton: false,
        closeOnClick: false,
        onClose: () => {
          if (!undo) deleteCentral.mutate(id);
        },
      }
    );
  };

  return { newCentral, updateCentral, deleteCentral, handleDeleteCentral };
};
