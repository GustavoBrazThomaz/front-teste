import { API } from "@infra/http/client";
import { getCentralsParams } from "./types";
import { CentralEntity } from "@domain/entities/central-entity";
import { ModelEntity } from "@domain/entities/model-entity";

// Normalmente eu faria dessa forma que está abaixo,
// porém o json-server não está retornando como deveria, então fiz os filtros manualmente :)

// const query = new URLSearchParams();
// if (params.sortBy) query.append("_sort", params.sortBy);
// if (params.order) query.append("_order", params.order);

export async function getCentrals(params: getCentralsParams) {
  const centralsResponse = await API.get("/centrals");
  const modelsResponse = await API.get("/models");

  const allCentrals: CentralEntity[] = centralsResponse.data;
  const allModels: ModelEntity[] = modelsResponse.data;

  let filteredCentrals = [...allCentrals];
  if (params.search) {
    const searchTerm = params.search.toLowerCase();

    filteredCentrals = filteredCentrals.filter((central) =>
      central.name.toLowerCase().includes(searchTerm)
    );
  }

  if (params.models && params.models.length > 0) {
    filteredCentrals = filteredCentrals.filter((central) =>
      params.models?.includes(central.modelId)
    );
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
        const propA = a[params.sortBy as keyof CentralEntity];
        const propB = b[params.sortBy as keyof CentralEntity];
        if (typeof propA === "string" && typeof propB === "string") {
          const comparison = propA.localeCompare(propB);
          return params.order === "asc" ? comparison : -comparison;
        }
        return 0;
      });
    }
  }

  let paginatedCentrals = filteredCentrals;

  if (params.limit) {
    const page = Number(params.page ?? 0);
    const limit = params.limit ?? undefined;
    const start = page * limit;
    const end = start + limit;
    paginatedCentrals = filteredCentrals.slice(start, end);
  }

  const centrals = paginatedCentrals.map((item) => {
    const model = allModels.find((m) => m.id === item.modelId);
    return {
      id: item.id,
      name: item.name,
      modelName: model?.name || "Modelo desconhecido",
      mac: item.mac,
    };
  });
  await new Promise((resolve) => setTimeout(resolve, 200));
  return centrals;
}
