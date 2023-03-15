import { z } from "zod";

export const reposSchema = z
  .object({
    owner: z.string(),
    repo: z.string(),
    link: z.string(),
    description: z.string(),
    image: z.string(),
    language: z.string(),
    languageColor: z.string(),
    stars: z.number(),
    forks: z.number(),
  })
  .array();

export type RepoType = z.infer<typeof reposSchema>[number];
