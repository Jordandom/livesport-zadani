import { useQuery } from '@tanstack/react-query';

export type Filters = {
  sportIds?: string;
  typeIds?: string;
  query?: string;
};

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
  const response = await fetch(`${import.meta.env.VITE_APP_BASE_URL}&${url}`, {
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
