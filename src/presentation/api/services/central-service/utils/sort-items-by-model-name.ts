import { API } from "@config/API";
import { getModels } from "../../models-service";
import { CentralType } from "../../../../types/central-types";
import { ModelType } from "../../../../types/model-types";

export async function sortItemsByModelName({
  order,
}: {
  order: "asc" | "desc" | undefined;
}): Promise<{ centrals: CentralType[]; models: ModelType[] }> {
  const allCentrals = await API.get("/centrals");
  console.log(order);

  const models = await getModels({
    order: order,
    sortBy: "name",
  });

  const modelOrderMap = new Map(
    models.map((model, index) => [model.id, index])
  );

  let sortedCentrals = [];

  if (order === "asc") {
    sortedCentrals = allCentrals.data.sort(
      (a: { modelId: string }, b: { modelId: string }) => {
        const aOrder = modelOrderMap.get(a.modelId) ?? Infinity;
        const bOrder = modelOrderMap.get(b.modelId) ?? Infinity;
        return aOrder - bOrder;
      }
    );
  }

  if (order === "desc") {
    sortedCentrals = allCentrals.data.sort(
      (a: { modelId: string }, b: { modelId: string }) => {
        const aOrder = modelOrderMap.get(a.modelId) ?? Infinity;
        const bOrder = modelOrderMap.get(b.modelId) ?? Infinity;
        return bOrder - aOrder;
      }
    );
  }

  return { centrals: sortedCentrals, models: models };
}
