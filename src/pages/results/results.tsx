import Entity from '@components/entity';
import Filter from '@components/filter';
import Loading from '@components/loading';
import { useFilterQuery, useFilterTypeIds } from '@store/filter-store';
import { useResultDetailActions } from '@store/results-detail-store';
import { useResultsQuery } from '@utils/data-fetching/hooks';
import { substituteRouteParams } from '@utils/helpers';
import { RoutePaths } from '@utils/routing/route-paths';
import { Link } from 'react-router-dom';
import { EntityType } from 'types';

const Results = () => {
  const query = useFilterQuery();
  const typeIds = useFilterTypeIds();
  const { setName, setDefaultCountry, setImage } = useResultDetailActions();

  const { data, isPending, error } = useResultsQuery({ query, typeIds });

  const handleEntityClick = (entity: EntityType) => {
    setName(entity.name);
    setDefaultCountry(entity.defaultCountry.name);
    setImage(entity.images[0]?.variantTypeId === 15 ? entity.images[0]?.path : '');
  };

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
            <div className="flex flex-col gap-4" key={sport}>
              <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
                  {sport}
                </span>
              </h1>
              {groupedData[sport].map((entity) => (
                <Link
                  key={entity.id}
                  to={`${substituteRouteParams(RoutePaths.ResultsDetail, {
                    entityId: entity.id,
                  })}`}
                  onClick={() => handleEntityClick(entity)}
                >
                  <Entity entity={entity} />
                </Link>
              ))}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Results;
