import { checkIfMacExists } from "@infra/http/adapters/central-adapters/check-if-mac-exists";
import { z } from "zod";

export const centralFormSchema = z
  .object({
    name: z.string().min(1, "Esse campo é obrigatório"),
    mac: z.string().min(15, "Insira um endereço MAC válido").toUpperCase(),
    modelId: z.string().nonempty("Esse campo é obrigatório").default(""),
    originalMac: z.string().optional(),
  })
  .superRefine(async (data, context) => {
    const { mac, originalMac } = data;
    if (mac !== originalMac) {
      const isMacAvailable = await checkIfMacExists(mac);
      if (isMacAvailable) {
        context.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["mac"],
          message: "Esse endereço MAC já está em uso",
        });
      }
    }
  });

export type centralFormType = z.infer<typeof centralFormSchema>;
