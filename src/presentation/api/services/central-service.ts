import { API } from "@config/API";
import { CentralTableType, CentralType } from "../../types/central-types";

export async function getCentrals() {
  const { data } = await API.get("/centrals");
  const centrals: CentralTableType[] = await Promise.all(
    data.map(async (item: CentralType) => {
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
