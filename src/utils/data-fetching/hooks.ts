import { useQuery } from '@tanstack/react-query';

export type Filters = {
  sportIds?: string;
  typeIds?: string;
  query?: string;
};

const BASE_URL =
  'https://s.livesport.services/api/v2/search?lang-id=1&project-id=602&project-type-id=1&sport-ids=1,2,3,4,5,6,7,8,9';

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
