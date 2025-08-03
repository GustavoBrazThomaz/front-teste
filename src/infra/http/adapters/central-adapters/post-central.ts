import { CentralEntity } from "@domain/entities/central-entity";
import { API } from "@infra/http/client";

export async function postCentral(central: Omit<CentralEntity, "id">) {
  const newCentral = { ...central, id: crypto.randomUUID() };
  await API.post("/centrals", newCentral);
  return newCentral;
}
