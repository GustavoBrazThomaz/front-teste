import { useQuery } from "@tanstack/react-query";
import { getModels } from "@infra/http/adapters/models-adapters/get-models";
import { useMemo } from "react";

export const useModelsQuery = () => {
  const models = useQuery({
    queryKey: ["models"],
    queryFn: getModels,
  });

  const modelsSelectOptions = useMemo(() => {
    const { data } = models;
    if (!data) return [];
    return data.map((item) => ({ label: item.name, value: item.id }));
  }, [models.data]);

  return { ...models, modelsSelectOptions };
};
