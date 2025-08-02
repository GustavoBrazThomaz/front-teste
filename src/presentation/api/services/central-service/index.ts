import { API } from "@config/API";
import { CentralTableType, CentralType } from "../../../types/central-types";
import { getCentralsParams } from "./types";

export async function getCentrals(params: getCentralsParams) {
  const query = new URLSearchParams();

  if (params.name) query.append("name_like", params.name);
  // if (params.model) query.append("model_like", params.model);
  console.log(params.page);

  if (params.page + 1) query.append("_page", (params.page + 1).toString());
  if (params.limit) query.append("_per_page", params.limit.toString());
  if (params.sortBy) query.append("_sort", params.sortBy);
  if (params.order) query.append("_order", params.order);

  const { data: response } = await API.get(`/centrals?${query.toString()}`);

  const centrals: CentralTableType[] = await Promise.all(
    response.data.map(async (item: CentralType) => {
      const { data: model } = await API.get(`/models/${item.modelId}`);
      return {
        id: item.id,
        name: item.name,
        modelName: model.name,
        mac: item.mac,
      };
    })
  );

  return centrals;
}

export async function getCentralsTotal() {
  const { data } = await API.get("/centrals");
  return data.length;
}

export async function getCentralById(id: string): Promise<CentralType> {
  const { data } = await API.get(`/centrals/${id}`);
  return {
    id: data.id,
    name: data.name,
    modelId: data.modelId,
    mac: data.mac,
  };
}

export async function postCentral(central: Omit<CentralType, "id">) {
  const newCentral = { ...central, id: crypto.randomUUID() };
  await API.post("/centrals", newCentral);
  return newCentral;
}

export async function putCentral(central: CentralType) {
  await API.put(`/centrals/${central.id}`, central);
  return central;
}

export async function deleteCentralById(id: string) {
  await API.delete(`/centrals/${id}`);
}

export async function checkMacExists(mac: string): Promise<boolean> {
  const { data } = await API.get("/centrals");
  return data.some((central: CentralType) => central.mac === mac);
}
