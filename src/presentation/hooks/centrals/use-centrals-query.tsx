import { getCentrals } from "@infra/http/adapters/central-adapters/get-centrals";
import { getCentralsParams } from "@infra/http/adapters/central-adapters/types";
import { useQuery } from "@tanstack/react-query";

export const useCentralsQuery = (params: getCentralsParams) => {
  const query = useQuery({
    queryKey: ["centrals", { ...params }],
    queryFn: () => getCentrals(params),
  });

  return { ...query };
};
