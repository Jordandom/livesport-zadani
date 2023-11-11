import { DefaultFilter } from 'store/filter-store';
import { useResultsQuery } from 'utils/data-fetching/hooks';

// This component is for testing purposes only. It's not used in the app.
const TestResultsComponent = () => {
  const { data, isPending } = useResultsQuery({
    query: DefaultFilter.Query,
    typeIds: DefaultFilter.TypeIds,
  });

  return (
    <>
      {isPending && <div data-cy="loading">Loading...</div>}
      {data && <div data-cy="data">{JSON.stringify(data)}</div>}
    </>
  );
};

export default TestResultsComponent;
