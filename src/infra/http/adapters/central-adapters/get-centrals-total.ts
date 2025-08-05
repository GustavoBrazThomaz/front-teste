import { axiosErrorResolver } from "@helpers/axiosErrorResolver";
import { API } from "@infra/http/client";

export async function getCentralsTotal() {
  try {
    const { data } = await API.get("/centrals");
    await new Promise((resolve) => setTimeout(resolve, 200));
    return data.length;
  } catch (error) {
    axiosErrorResolver(error);
  }
}
