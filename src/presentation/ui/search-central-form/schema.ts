import { z } from "zod";

export const searchCentralSchema = z.object({
  search: z.string(),
});

export type searchCentralType = z.infer<typeof searchCentralSchema>;
