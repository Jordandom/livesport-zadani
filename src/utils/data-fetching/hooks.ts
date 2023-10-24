import { useQuery } from '@tanstack/react-query';
import { z } from 'zod';
import { AllResultsResponse, allResultsSchema } from './schema-types';

export type Filters = {
  sportIds?: string;
  typeIds?: string;
  q?: string;
};

const buildQueryParams = (params: Filters) => {
  const urlParams = new URLSearchParams();

  const { sportIds, typeIds, q } = params;

  if (sportIds) {
    urlParams.append('sport-ids', sportIds);
  }

  if (typeIds) {
    urlParams.append('type-ids', typeIds);
  }
  if (q) {
    urlParams.append('q', q);
  }

  return urlParams.toString();
};

async function fetcher<TSchemaData extends z.ZodRawShape, TSchema extends z.ZodObject<TSchemaData>>({
  url,
  schema,
}: {
  url: string;
  schema: z.ZodArray<TSchema>;
}) {
  const response = await fetch(`${import.meta.env.VITE_APP_BASE_URL}&${url}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const results = await response.json();
  return schema.parse(results) as z.infer<TSchema>[];
}

export const useAllResultsQuery = (resultsArguments: Filters) => {
  return useQuery<AllResultsResponse>({
    queryKey: ['allResults', resultsArguments],
    queryFn: async () => {
      return fetcher({
        url: `${buildQueryParams(resultsArguments)}`,
        schema: allResultsSchema,
      });
    },
  });
};

// export const useAllResultsQuery = (resultsArguments?: Filters) => {
//   return useQuery<AllResultsResponse>({
//     queryKey: ['allResults', resultsArguments],
//     queryFn: async () => {
//       return fetcher({
//         // url: `${buildQueryParams(resultsArguments)}`,
//         schema: allResultsSchema,
//       });
//     },
//   });
// };

// All sports
// https://s.livesport.services/api/v2/search?lang-id=1&project-id=602&project-type-id=1&sport-ids=1,2,3,4,5,6,7,8,9&type-ids=1,2,3,4&q=aa
// Mandatory params
// https://s.livesport.services/api/v2/search?lang-id=1&project-id=602&project-type-id=1&q=aa
// Football
// https://s.livesport.services/api/v2/search?lang-id=1&project-id=602&project-type-id=1&sport-ids=1&q=aa
// Djokovic Novak
// // https://s.livesport.services/api/v2/search?lang-id=1&project-id=602&project-type-id=1&q=Djokovic%20Novak&sport-ids=2&type-ids=3
