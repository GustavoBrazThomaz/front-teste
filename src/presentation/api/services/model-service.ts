import { API } from "@config/API";
import { ModelType } from "../../types/model-types";

export async function getModels(): Promise<ModelType[]> {
  const { data } = await API.get("/models");
  const models = data.map((item: ModelType) => {
    return {
      id: item.id,
      name: item.name,
    };
  });

  return models;
}

export async function getModelById(id: string): Promise<ModelType> {
  const { data } = await API.get(`/models/${id}`);
  return {
    id: data.id,
    name: data.name,
  };
}
