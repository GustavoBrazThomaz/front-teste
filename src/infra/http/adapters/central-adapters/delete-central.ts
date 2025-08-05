import { axiosErrorResolver } from "@helpers/axiosErrorResolver";
import { API } from "@infra/http/client";

export async function deleteCentralById(id: string) {
  try {
    await API.delete(`/centrals/${id}`);
  } catch (error) {
    axiosErrorResolver(error);
  }
}
