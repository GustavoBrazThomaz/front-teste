import { CentralEntity } from "@domain/entities/central-entity";
import { axiosErrorResolver } from "@helpers/axiosErrorResolver";
import { API } from "@infra/http/client";

export async function checkIfMacExists(mac: string) {
  try {
    const { data } = await API.get("/centrals");
    return data.some((central: CentralEntity) => central.mac === mac);
  } catch (error) {
    axiosErrorResolver(error);
  }
}
