import { EntityType } from 'types';

const Entity = ({ players }: { players: EntityType[] }) => {
  return (
    <div>
      {players.map((player, index) => (
        <div key={index} className="flex gap-4 items-center my-4">
          <div className="w-24 h-24 overflow-hidden border border-cyan-400 rounded-full">
            {player?.images && player.images[0]?.variantTypeId === 15 ? (
              <img
                src={`https://www.livesport.cz/res/image/data/${player?.images[0]?.path}`}
                alt={player.name}
                className="object-cover w-full h-full"
              />
            ) : null}
          </div>
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              {player.name}
            </span>
          </h1>
        </div>
      ))}
    </div>
  );
};

export default Entity;
