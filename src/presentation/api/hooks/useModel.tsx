import { useQuery } from "@tanstack/react-query";
import { getModels } from "../services/models-service";
import { SelectOption } from "@components/core/select/types";

export const useGetModels = () => {
  const models = useQuery({
    queryKey: ["fetchModels"],
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
