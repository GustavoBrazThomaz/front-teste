import { API } from "@infra/http/client";

export async function deleteCentralById(id: string) {
  await API.delete(`/centrals/${id}`);
}
