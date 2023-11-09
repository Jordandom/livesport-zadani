import Avatar, { AvatarSize } from '@components/avatar';
import AvatarInitials from '@components/avatar-initials';
import Heading from '@components/heading';
import Text from '@components/text';
import { RoutePaths } from '@utils/routing/route-paths';
import { useNavigate, useParams } from 'react-router-dom';

const ResultsDetail = () => {
  const navigate = useNavigate();

  const { entityName, entityImage, entityCountry } = useParams<{
    entityName: string;
    entityImage: string;
    entityCountry: string;
  }>();

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
          {entityImage !== 'null' ? (
            <Avatar name={entityName} imagePath={entityImage} size={AvatarSize.Large} />
          ) : (
            <AvatarInitials name={entityName} size={AvatarSize.Large} />
          )}
          <Text text={entityName} />
        </div>
        <Heading title={entityCountry} />
      </div>
    </>
  );
};

export default ResultsDetail;
