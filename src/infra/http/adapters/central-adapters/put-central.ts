import { CentralType } from "@domain/entities/central-entity";
import { API } from "@infra/http/client";

export async function putCentral(central: CentralType) {
  await API.put(`/centrals/${central.id}`, central);
  return central;
}
