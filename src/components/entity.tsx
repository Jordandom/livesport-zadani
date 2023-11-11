import Avatar from 'components/avatar';
import AvatarInitials from 'components/avatar-initials';
import Text from 'components/text';
import { EntityType } from 'types';

const Entity = ({ entity }: { entity: EntityType }) => {
  return (
    <div className="my-4 flex items-center gap-4">
      {entity?.images && entity.images[0]?.variantTypeId === 15 ? (
        <Avatar name={entity?.name} imagePath={entity.images[0]?.path} />
      ) : (
        <AvatarInitials name={entity?.name} />
      )}
      <Text text={entity?.name} />
    </div>
  );
};

export default Entity;
