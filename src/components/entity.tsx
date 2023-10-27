import { getInitials } from '@utils/helpers';
import { EntityType } from 'types';

const Entity = ({ entities }: { entities: EntityType[] }) => {
  return (
    <div>
      {entities.map((entity, index) => (
        <div key={index} className="flex gap-4 items-center my-4">
          {entity?.images && entity.images[0]?.variantTypeId === 15 ? (
            <img
              className="w-24 h-24 p-1 rounded-full ring-2 ring-cyan-400 dark:ring-cyan-400"
              src={`https://www.livesport.cz/res/image/data/${entity?.images[0]?.path}`}
              alt={entity.name}
            />
          ) : (
            <div className="w-24 h-24 p-1 rounded-full ring-2 ring-cyan-400 dark:ring-cyan-400 flex justify-center items-center text-cyan-400">
              {getInitials(entity.name)}
            </div>
          )}
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              {entity.name}
            </span>
          </h1>
        </div>
      ))}
    </div>
  );
};

export default Entity;
