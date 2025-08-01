import { API } from "@config/api";
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
