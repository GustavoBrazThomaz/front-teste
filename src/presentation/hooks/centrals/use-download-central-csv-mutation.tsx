import { downloadCsv } from "@components/utils/services/downloadCsv";
import { getCentrals } from "@infra/http/adapters/central-adapters/get-centrals";
import { getCentralsParams } from "@infra/http/adapters/central-adapters/types";
import { CentralTableType } from "@pages/central/types";
import { useMutation } from "@tanstack/react-query";
import { format } from "date-fns";

export const useDownloadCentralCsvMutation = (params: getCentralsParams) => {
  const downloadCentralCsv = useMutation({
    mutationKey: ["centrals", "csv", { ...params, limit: undefined }],
    mutationFn: () => getCentrals({ ...params, limit: undefined }),
    onSuccess: (data: CentralTableType[]) => {
      const dataToCsv = data.map((item) => {
        return {
          Nome: item.name,
          MAC: item.mac,
          Modelo: item.modelName,
        };
      });

      downloadCsv(dataToCsv, format(new Date(), "dd-MM-yyyy"));
    },
  });

  return { downloadCentralCsv };
};
