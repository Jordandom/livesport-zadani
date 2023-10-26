import Entity from '@components/entity';
import Filter from '@components/filter';
import { useAllResultsQuery } from '@utils/data-fetching/hooks';
import { useState } from 'react';
import { EntityType } from 'types';

const Results = () => {
  const [filter, setFilter] = useState({
    sportIds: '1,2,3,4,5,6,7,8',
    typeIds: '1,2,3',
    q: 'aa',
  });

  const { data, isPending, error } = useAllResultsQuery(filter);

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

  if (isPending) return <p>Loading...</p>;

  if (error) console.log('🚀 ~ file: App.tsx:12 ~ App ~ error', error);

  console.log('🚀 ~ file: App.tsx:6 ~ App ~ data:', data);
  return (
    <div className="">
      <Filter setFilter={setFilter} />
      <div>
        {Object.keys(groupedData).map((sport) => (
          <div key={sport}>
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
                {sport}
              </span>
            </h1>
            <Entity players={groupedData[sport]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;
