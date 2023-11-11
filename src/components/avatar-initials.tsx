import { AvatarSize } from 'components/avatar';
import { getInitials } from 'utils/helpers';

type AvatarInitialsProps = {
  name: string | undefined;
  size?: AvatarSize;
};

const AvatarInitials = ({
  name,
  size = AvatarSize.Small,
}: AvatarInitialsProps) => (
  <div
    className={`flex h-24 w-24 items-center justify-center rounded-full p-1 text-cyan-400 ring-2 ring-cyan-400 dark:ring-cyan-400 ${
      size === AvatarSize.Small ? 'h-24 w-24' : 'h-48 w-48'
    }`}
  >
    {getInitials(name)}
  </div>
);

export default AvatarInitials;
