import { axiosErrorResolver } from "@helpers/axiosErrorResolver";
import { API } from "@infra/http/client";

export async function deleteCentralById(id: string) {
  try {
    const response = await API.delete(`/centrals/${id}`);
    return response;
  } catch (error) {
    axiosErrorResolver(error);
  }
}
