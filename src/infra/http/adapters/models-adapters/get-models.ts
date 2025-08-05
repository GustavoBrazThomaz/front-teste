import { ModelEntity } from "@domain/entities/model-entity";
import { axiosErrorResolver } from "@helpers/axiosErrorResolver";
import { API } from "@infra/http/client";

export async function getModels() {
  try {
    const { data } = await API.get("/models");
    const models = data.map((item: ModelEntity) => {
      return {
        id: item.id,
        name: item.name,
      };
    });
    return models;
  } catch (error) {
    axiosErrorResolver(error);
  }
}
