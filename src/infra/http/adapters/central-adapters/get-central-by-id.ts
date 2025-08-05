import { axiosErrorResolver } from "@helpers/axiosErrorResolver";
import { API } from "@infra/http/client";

export async function getCentralById(id: string) {
  try {
    const { data } = await API.get(`/centrals/${id}`);
    return {
      id: data.id,
      name: data.name,
      modelId: data.modelId,
      mac: data.mac,
    };
  } catch (error) {
    axiosErrorResolver(error);
  }
}
