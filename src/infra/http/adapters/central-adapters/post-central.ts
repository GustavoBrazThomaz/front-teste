import { CentralEntity } from "@domain/entities/central-entity";
import { axiosErrorResolver } from "@helpers/axiosErrorResolver";
import { API } from "@infra/http/client";

export async function postCentral(central: Omit<CentralEntity, "id">) {
  try {
    const newCentral = { ...central, id: crypto.randomUUID() };
    await API.post("/centrals", newCentral);
    return newCentral;
  } catch (error) {
    axiosErrorResolver(error);
  }
}
