import { z } from "zod";

export const centralFormSchema = z.object({
  name: z.string().min(1, "Esse campo é obrigatório"),
  mac: z.string().min(15, "Insira um Mac válido"),
  modelId: z.string().nonempty("Esse campo é obrigatório").default(""),
});

export type centralFormType = z.infer<typeof centralFormSchema>;
