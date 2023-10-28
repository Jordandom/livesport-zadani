import Entity from '@components/entity';
import Filter from '@components/filter';
import Loading from '@components/loading';
import { useFilterQuery, useFilterTypeIds } from '@store/store';
import { useAllResultsQuery } from '@utils/data-fetching/hooks';
import { EntityType } from 'types';

const Results = () => {
  const query = useFilterQuery();
  const typeIds = useFilterTypeIds();

  const { data, isPending, error } = useAllResultsQuery({ query, typeIds });

  function groupBySport(data: EntityType[]) {
    return data?.reduce(
      (acc, item) => {
        const sportName = item.sport.name;
        if (!acc[sportName]) {
          acc[sportName] = [];
        }
        acc[sportName].push(item);
        return acc;
      },
      {} as { [key: string]: EntityType[] }
    );
  }

  const groupedData = groupBySport(data);

  if (error) console.log('🚀 ~ file: App.tsx:12 ~ App ~ error', error);

  return (
    <div className="flex flex-col gap-4">
      <Filter />
      {isPending ? (
        <Loading />
      ) : (
        <>
          {Object.keys(groupedData).map((sport) => (
            <div key={sport}>
              <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
                  {sport}
                </span>
              </h1>
              <Entity entities={groupedData[sport]} />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Results;
