import { getInitials } from '@utils/helpers';
import { AvatarSize } from '@components/avatar';

type AvatarInitialsProps = {
  name: string | undefined;
  size?: AvatarSize;
};

const AvatarInitials = ({ name, size = AvatarSize.Small }: AvatarInitialsProps) => (
  <div
    className={`w-24 h-24 p-1 rounded-full ring-2 ring-cyan-400 dark:ring-cyan-400 flex justify-center items-center text-cyan-400 ${
      size === AvatarSize.Small ? 'w-24 h-24' : 'w-48 h-48'
    }`}
  >
    {getInitials(name)}
  </div>
);

export default AvatarInitials;
