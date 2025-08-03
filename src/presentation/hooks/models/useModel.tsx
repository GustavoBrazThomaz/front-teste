import { useQuery } from "@tanstack/react-query";
import { SelectOption } from "@components/core/select/types";
import { getModels } from "@infra/http/adapters/models-adapters/get-models";

export const useModelsQuery = () => {
  const models = useQuery({
    queryKey: ["models"],
    queryFn: getModels,
  });

  const modelsSelectOptions = (): SelectOption[] => {
    const { data } = models;
    if (!data) return [];
    const modelSelectOptions = data.map((item) => {
      return { label: item.name, value: item.id };
    });
    return modelSelectOptions;
  };

  return { ...models, modelsSelectOptions };
};
