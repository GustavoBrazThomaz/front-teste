import { API } from "@config/API";
import { CentralType } from "../../../../types/central-types";

export async function searchCentralByName(searchName: string) {
  const allCentrals = await API.get("/centrals");

  const searchedCentrals = allCentrals.data.filter((central: CentralType) => {
    const centralName = central.name.toLowerCase();
    const search = searchName.toLowerCase();
    return centralName.includes(search);
  });

  return searchedCentrals;
}
