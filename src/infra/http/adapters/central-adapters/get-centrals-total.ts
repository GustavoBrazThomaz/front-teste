import { API } from "@infra/http/client";

export async function getCentralsTotal() {
  const { data } = await API.get("/centrals");
  return data.length;
}
