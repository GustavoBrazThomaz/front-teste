import { ModelEntity } from "@domain/entities/model-entity";
import { API } from "@infra/http/client";

export async function getModels(): Promise<ModelEntity[]> {
  const { data } = await API.get("/models");
  const models = data.map((item: ModelEntity) => {
    return {
      id: item.id,
      name: item.name,
    };
  });
  return models;
}
