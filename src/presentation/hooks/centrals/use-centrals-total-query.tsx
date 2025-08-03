import { getCentralsTotal } from "@infra/http/adapters/central-adapters/get-centrals-total";
import { useQuery } from "@tanstack/react-query";

export const useCentralsTotalQuery = () => {
  const query = useQuery({
    queryKey: ["centrals", "total"],
    queryFn: getCentralsTotal,
  });

  return { ...query };
};
