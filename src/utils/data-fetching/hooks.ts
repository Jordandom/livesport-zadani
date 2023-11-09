import { useQuery } from '@tanstack/react-query';

export type Filters = {
  sportIds?: string;
  typeIds?: string;
  query?: string;
};

const BASE_URL =
  'https://s.livesport.services/api/v2/search?lang-id=1&project-id=602&project-type-id=1&sport-ids=1,2,3,4,5,6,7,8,9';

/**
 * Builds query parameters for a URL based on the given filters.
 * @param params - The filters to use for building the query parameters.
 * @returns A string representation of the query parameters.
 */
const buildQueryParams = (params: Filters) => {
  const urlParams = new URLSearchParams();

  const { typeIds, query } = params;

  if (typeIds) {
    urlParams.append('type-ids', typeIds);
  }
  if (query) {
    urlParams.append('q', query);
  }

  return urlParams.toString();
};

/**
 * Fetches data from the specified URL using the GET method and returns the parsed JSON response.
 * @param {Object} options - The options object.
 * @param {string} options.url - The URL to fetch data from.
 * @returns {Promise<unknown>} - A promise that resolves to the parsed JSON response.
 */
async function fetcher({ url }: { url: string }) {
  const response = await fetch(`${BASE_URL}&${url}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const results = await response.json();
  return results;
}

/**
 * Custom hook to fetch results data based on provided filters.
 * @param resultsArguments - The filters to be applied to the results query.
 * @returns The results query object.
 */
export const useResultsQuery = (resultsArguments: Filters) => {
  return useQuery({
    queryKey: ['results', resultsArguments],
    queryFn: async () => {
      return fetcher({
        url: `${buildQueryParams(resultsArguments)}`,
      });
    },
  });
};
