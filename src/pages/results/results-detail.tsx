import { useResultDetailName, useResultDetailImage, useResultDetailDefaultCountry } from '@store/results-detail-store';
import { getInitials } from '@utils/helpers';
import { RoutePaths } from '@utils/routing/route-paths';
import { useNavigate } from 'react-router-dom';

const ResultsDetail = () => {
  const navigate = useNavigate();
  const name = useResultDetailName();
  const image = useResultDetailImage();
  const country = useResultDetailDefaultCountry();

  return (
    <>
      <button
        onClick={() => navigate(RoutePaths.Results)}
        type="button"
        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Zpět
      </button>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center my-4">
          {image ? (
            <img
              className="w-48 h-48 p-1 rounded-full ring-2 ring-cyan-400 dark:ring-cyan-400"
              src={`https://www.livesport.cz/res/image/data/${image}`}
              alt={name}
            />
          ) : (
            <div className="w-48 h-48 p-1 rounded-full ring-2 ring-cyan-400 dark:ring-cyan-400 flex justify-center items-center text-cyan-400">
              {getInitials(name)}
            </div>
          )}
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{name}</span>
          </h1>
        </div>
        <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
            {country}
          </span>
        </h1>
      </div>
    </>
  );
};

export default ResultsDetail;
