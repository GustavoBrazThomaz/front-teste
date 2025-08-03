import { getCentralById } from "@infra/http/adapters/central-adapters/get-central-by-id";
import { useQuery } from "@tanstack/react-query";

export const useCentralByIdQuery = (id: string, enabled: boolean = false) => {
  const query = useQuery({
    queryKey: ["central", id],
    queryFn: async () => {
      const response = await getCentralById(id);
      return response;
    },
    enabled,
  });

  return { ...query };
};
