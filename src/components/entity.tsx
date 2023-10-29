import { EntityType } from 'types';
import Avatar from '@components/avatar';
import Text from '@components/text';
import AvatarInitials from '@components/avatar-initials';

const Entity = ({ entity }: { entity: EntityType }) => {
  return (
    <div className="flex gap-4 items-center my-4">
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
