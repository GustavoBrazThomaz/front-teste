import { CentralEntity } from "@domain/entities/central-entity";
import { API } from "@infra/http/client";

export async function putCentral(central: CentralEntity) {
  await API.put(`/centrals/${central.id}`, central);
  return central;
}
