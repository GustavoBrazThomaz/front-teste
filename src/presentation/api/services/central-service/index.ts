import { API } from "@config/API";
import { CentralTableType, CentralType } from "../../../types/central-types";
import { getCentralsParams } from "./types";
import { getModels } from "../models-service";
import { ModelType } from "../../../types/model-types";
import { sortItemsByModelName } from "./utils/sort-items-by-model-name";
import { searchCentralByName } from "./utils/search-central-by-name";

// Normalmente eu faria dessa forma que está abaixo,
// porém o json-server não está retornando como deveria, então fiz os filtros manualmente :)

// const query = new URLSearchParams();
// if (params.sortBy) query.append("_sort", params.sortBy);
// if (params.order) query.append("_order", params.order);

export async function getCentrals(params: getCentralsParams) {
  const centralsResponse = await API.get("/centrals");
  const modelsResponse = await API.get("/models");

  const allCentrals: CentralType[] = centralsResponse.data;
  const allModels: ModelType[] = modelsResponse.data;

  let filteredCentrals = [...allCentrals];
  if (params.search && params.searchType) {
    const searchTerm = params.search.toLowerCase();

    if (params.searchType === "name") {
      filteredCentrals = filteredCentrals.filter((central) =>
        central.name.toLowerCase().includes(searchTerm)
      );
    }

    if (params.searchType === "model") {
      const matchingModelIds = allModels
        .filter((model) => model.name.toLowerCase().includes(searchTerm))
        .map((model) => model.id);

      filteredCentrals = filteredCentrals.filter((central) =>
        matchingModelIds.includes(central.modelId)
      );
    }
  }

  if (params.sortBy) {
    if (params.sortBy === "modelName") {
      filteredCentrals.sort((a, b) => {
        const modelA = allModels.find((m) => m.id === a.modelId);
        const modelB = allModels.find((m) => m.id === b.modelId);
        const nameA = modelA?.name.toLowerCase() || "";
        const nameB = modelB?.name.toLowerCase() || "";
        const comparison = nameA.localeCompare(nameB);
        return params.order === "asc" ? comparison : -comparison;
      });
    } else {
      filteredCentrals.sort((a, b) => {
        const propA = a[params.sortBy as keyof CentralType];
        const propB = b[params.sortBy as keyof CentralType];
        if (typeof propA === "string" && typeof propB === "string") {
          const comparison = propA.localeCompare(propB);
          return params.order === "asc" ? comparison : -comparison;
        }
        return 0;
      });
    }
  }

  const page = Number(params.page ?? 0);
  const limit = Number(params.limit ?? 10);
  const start = page * limit;
  const end = start + limit;
  const paginatedCentrals = filteredCentrals.slice(start, end);

  const centrals = paginatedCentrals.map((item) => {
    const model = allModels.find((m) => m.id === item.modelId);
    return {
      id: item.id,
      name: item.name,
      modelName: model?.name || "Modelo desconhecido",
      mac: item.mac,
    };
  });

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
