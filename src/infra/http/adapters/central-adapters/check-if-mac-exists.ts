import { CentralType } from "@domain/entities/central-entity";
import { API } from "@infra/http/client";

export async function checkIfMacExists(mac: string): Promise<boolean> {
  const { data } = await API.get("/centrals");
  return data.some((central: CentralType) => central.mac === mac);
}
