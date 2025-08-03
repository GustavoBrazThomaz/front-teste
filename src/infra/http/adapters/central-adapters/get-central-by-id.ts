import { CentralType } from "@domain/entities/central-entity";
import { API } from "@infra/http/client";

export async function getCentralById(id: string): Promise<CentralType> {
  const { data } = await API.get(`/centrals/${id}`);
  return {
    id: data.id,
    name: data.name,
    modelId: data.modelId,
    mac: data.mac,
  };
}
