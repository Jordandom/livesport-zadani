import Entity from 'components/entity';
import Filter from 'components/filter';
import Heading from 'components/heading';
import Loading from 'components/loading';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { useFilterQuery, useFilterTypeIds } from 'store/filter-store';
import { EntityType } from 'types';
import { useResultsQuery } from 'utils/data-fetching/hooks';
import { replaceSlashWithDash, substituteRouteParams } from 'utils/helpers';
import { RoutePaths } from 'utils/routing/route-paths';

type SportGrouping = {
  [sportName: string]: EntityType[];
};

const Results = () => {
  const query = useFilterQuery();
  const typeIds = useFilterTypeIds();

  const { data, isPending, error, refetch } = useResultsQuery({
    query,
    typeIds,
  });

  const groupBySport = (data: EntityType[]): SportGrouping => {
    return data?.reduce<SportGrouping>((acc, item) => {
      const sportName = item.sport.name;
      if (!acc[sportName]) {
        acc[sportName] = [];
      }
      acc[sportName].push(item);
      return acc;
    }, {});
  };

  const groupedData = groupBySport(data);

  if (error)
    toast.error('Něco se pokazilo, zkuste to prosím znovu.', {
      position: 'top-center',
      action: {
        label: 'Obnovit',
        onClick: () => refetch(),
      },
    });

  return (
    <div className="flex flex-col gap-4">
      <Filter />
      {data?.length === 0 && (
        <div className="flex items-center justify-center">
          <Heading title="Žádné výsledky" />
        </div>
      )}
      {isPending ? (
        <Loading />
      ) : (
        <>
          {Object.keys(groupedData).map((sport) => (
            <div className="flex flex-col gap-4" key={sport}>
              <Heading title={sport} />
              {groupedData[sport].map((entity) => (
                <Link
                  key={entity.id}
                  to={`${substituteRouteParams(RoutePaths.ResultsDetail, {
                    entityId: entity.id,
                    entityName: replaceSlashWithDash(entity.name),
                    entityImage:
                      entity.images[0]?.variantTypeId === 15
                        ? entity.images[0]?.path
                        : 'null',
                    entityCountry: entity.defaultCountry.name,
                  })}`}
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
