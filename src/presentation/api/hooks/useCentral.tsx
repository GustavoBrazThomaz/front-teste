import { useQuery } from "@tanstack/react-query";
import { getCentrals } from "../services/central-service";

export const useGetCentrals = () => {
  const query = useQuery({
    queryKey: ["fetchCentrals"],
    queryFn: getCentrals,
  });

  return { ...query };
};
