import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  deleteCentralById,
  getCentralById,
  getCentrals,
  postCentral,
  putCentral,
} from "../services/central-service";
import { CentralTableType } from "../../types/central-types";

export const useGetCentrals = () => {
  const query = useQuery<CentralTableType[]>({
    queryKey: ["fetchCentrals"],
    queryFn: getCentrals,
  });

  return { ...query };
};

export const useGetCentralById = (id: string, enabled: boolean = false) => {
  const query = useQuery({
    queryKey: ["fetchCentralById", id],
    queryFn: async () => {
      const response = await getCentralById(id);
      return response;
    },
    enabled,
  });

  return { ...query };
};

export const useCentral = () => {
  const queryClient = useQueryClient();

  const newCentral = useMutation({
    mutationKey: ["newCentral"],
    mutationFn: postCentral,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["fetchCentrals"],
      });
    },
  });

  const updateCentral = useMutation({
    mutationKey: ["updateCentral"],
    mutationFn: putCentral,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["fetchCentrals"],
      });
    },
  });

  const deleteCentral = useMutation({
    mutationKey: ["deleteCentral"],
    mutationFn: deleteCentralById,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["fetchCentrals"],
      });
    },
  });

  return { newCentral, updateCentral, deleteCentral };
};
