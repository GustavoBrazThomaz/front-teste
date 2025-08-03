import { useCentralStore } from "@stores/use-central-store";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { deleteCentralById } from "@infra/http/adapters/central-adapters/delete-central";
import { postCentral } from "@infra/http/adapters/central-adapters/post-central";
import { putCentral } from "@infra/http/adapters/central-adapters/put-central";

export const useCentralMutation = () => {
  const queryClient = useQueryClient();
  const { incTotalCentral, descTotalCentral } = useCentralStore();

  const searchParams = useSearchParams();
  const queryParams = {
    page: Number(searchParams.get("page") || "0"),
    limit: Number(searchParams.get("items_per_page") || "10"),
  };

  const newCentral = useMutation({
    mutationKey: ["central", "create"],
    mutationFn: postCentral,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["centrals", { ...queryParams }],
      });
      incTotalCentral();
    },
  });

  const updateCentral = useMutation({
    mutationKey: ["central", "update"],
    mutationFn: putCentral,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["centrals", { ...queryParams }],
      });
    },
  });

  const deleteCentral = useMutation({
    mutationKey: ["central", "delete"],
    mutationFn: deleteCentralById,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["centrals", { ...queryParams }],
      });
      descTotalCentral();
    },
  });

  return { newCentral, updateCentral, deleteCentral };
};
