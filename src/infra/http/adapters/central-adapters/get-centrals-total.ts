import { API } from "@infra/http/client";

export async function getCentralsTotal() {
  const { data } = await API.get("/centrals");
  await new Promise((resolve) => setTimeout(resolve, 200));
  return data.length;
}
