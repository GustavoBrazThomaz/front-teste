import { z } from "zod";

export const searchCentralSchema = z.object({
  search: z.string(),
  searchType: z.enum(["name", "model"]).default("name"),
});

export type searchCentralType = z.infer<typeof searchCentralSchema>;
