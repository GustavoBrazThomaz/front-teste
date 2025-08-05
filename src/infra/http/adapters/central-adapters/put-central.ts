import { CentralEntity } from "@domain/entities/central-entity";
import { axiosErrorResolver } from "@helpers/axiosErrorResolver";
import { API } from "@infra/http/client";

export async function putCentral(central: CentralEntity) {
  try {
    await API.put(`/centrals/${central.id}`, central);
    return central;
  } catch (error) {
    axiosErrorResolver(error);
  }
}
