import { API } from "@config/API";
import { ModelType } from "../../../types/model-types";
import { getModelsParams } from "./types";

export async function getModels(
  params?: getModelsParams
): Promise<ModelType[]> {
  const query = new URLSearchParams();

  if (params) {
    if (params.sortBy) query.append("_sort", params.sortBy);
    if (params.order) query.append("_order", params.order);
  }

  const { data } = await API.get(`/models?${query}`);
  const models = data.map((item: ModelType) => {
    return {
      id: item.id,
      name: item.name,
    };
  });

  console.log(models);

  return models;
}
