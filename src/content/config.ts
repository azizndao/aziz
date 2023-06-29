import { defineCollection, z } from "astro:content";

export const baseSchema = z
  .object({
    title: z.string(),
    description: z.string(),
    type: z.literal("base").optional().default("base"),
    date: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    updatedDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
    index: z.number().optional(),
    i18nReady: z.boolean().default(false),
    draft: z.boolean().default(false),
  })
  .strict();

const blog = defineCollection({
  schema: baseSchema.extend({
    type: z.literal("blog").optional().default("blog"),
    tags: z.array(z.string()),
    description: z.string(),
    cover: z.string().optional(),
    author: z.string().optional().default("Abdou Aziz Ndao"),
    category: z.string(),
  }),
});

export const pythonSchema = baseSchema.extend({
  type: z.literal("python"),
});

export const flutterSchema = baseSchema.extend({
  type: z.literal("flutter"),
});

const courses = defineCollection({
  schema: z.union([pythonSchema, flutterSchema]),
});

export const collections = { courses, blog };
