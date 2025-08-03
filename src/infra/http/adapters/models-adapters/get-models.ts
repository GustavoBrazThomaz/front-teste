import { API } from "@infra/http/client";
import { ModelType } from "@domain/entities/model-entity";

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
