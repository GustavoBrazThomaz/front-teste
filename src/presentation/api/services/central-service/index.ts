import { API } from "@config/API";
import { CentralTableType, CentralType } from "../../../types/central-types";
import { getCentralsParams } from "./types";
import { getModels } from "../models-service";
import { ModelType } from "../../../types/model-types";
import { sortItemsByModelName } from "./utils/sort-items-by-model-name";
import { searchCentralByName } from "./utils/search-central-by-name";

export async function getCentrals(params: getCentralsParams) {
  const query = new URLSearchParams();

  query.append("name_like", `${params.search}`);

  if (params.page + 1) query.append("_page", (params.page + 1).toString());
  if (params.limit) query.append("_per_page", params.limit.toString());
  if (params.sortBy) query.append("_sort", params.sortBy);
  if (params.order) query.append("_order", params.order);

  let centralResponse: CentralType[] = [];
  let models: ModelType[] = [];

  if (params.searchType === "name" && params.search) {
    models = await getModels();
    centralResponse = await searchCentralByName(params.search);
  }

  if (params.sortBy === "modelName") {
    const sortedCentrals = await sortItemsByModelName({ order: params.order });
    models = sortedCentrals.models;
    const page = Number(params.page + 1);
    const limit = Number(params.limit ?? 10);
    const start = (page - 1) * limit;
    const end = start + limit;
    const paginatedCentrals = sortedCentrals.centrals.slice(start, end);
    centralResponse = paginatedCentrals;
  }

  if (params.sortBy !== "modelName" && params.searchType !== "name") {
    models = await getModels();
    const { data: response } = await API.get(`/centrals?${query.toString()}`);
    centralResponse = response.data;
  }

  const centrals: CentralTableType[] = centralResponse.map(
    (item: CentralType) => {
      const model = models.find((model) => model.id === item.modelId);
      return {
        id: item.id,
        name: item.name,
        modelName: model?.name || "Modelo desconhecido",
        mac: item.mac,
      };
    }
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
