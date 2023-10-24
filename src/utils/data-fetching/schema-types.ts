import { z } from 'zod';

const participantTypeSchema = z.object({
  id: z.number(),
  name: z.string(),
});

const teamSchema = z.object({
  id: z.string(),
  name: z.string(),
  kind: z.string(),
  participantType: participantTypeSchema,
});

const imageSchema = z.object({
  path: z.string(),
  usageId: z.number(),
  variantTypeId: z.number(),
});

const defaultCountrySchema = z.object({
  id: z.number(),
  name: z.string(),
});

const sportSchema = z.object({
  id: z.number(),
  name: z.string(),
});

const favoriteKeySchema = z.object({
  web: z.string().nullable(),
  portable: z.string().nullable(),
});

const superTemplateSchema = z.unknown();

export const allResultsResponseSchema = z.object({
  id: z.string(),
  url: z.string(),
  gender: participantTypeSchema,
  name: z.string(),
  type: participantTypeSchema,
  participantTypes: z.array(participantTypeSchema),
  sport: sportSchema,
  favouriteKey: favoriteKeySchema,
  flagId: z.string().nullable(),
  defaultCountry: defaultCountrySchema,
  images: z.array(imageSchema),
  teams: z.array(teamSchema).nullable(),
  defaultTournament: z.unknown(),
  superTemplate: superTemplateSchema,
});

// Create an array containing the allResultsResponseSchema
export const allResultsSchema = z.array(allResultsResponseSchema);

export type AllResultsResponse = z.infer<typeof allResultsSchema>;
