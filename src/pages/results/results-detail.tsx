import Avatar, { AvatarSize } from 'components/avatar';
import AvatarInitials from 'components/avatar-initials';
import Heading from 'components/heading';
import Text from 'components/text';
import { useNavigate, useParams } from 'react-router-dom';
import { RoutePaths } from 'utils/routing/route-paths';

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
        className="mb-2 mr-2 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
      >
        Zpět
      </button>
      <div className="flex flex-col gap-4">
        <div className="my-4 flex items-center gap-4">
          {entityImage !== 'null' ? (
            <Avatar
              name={entityName}
              imagePath={entityImage}
              size={AvatarSize.Large}
            />
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
