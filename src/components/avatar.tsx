export enum AvatarSize {
  Small = 's',
  Large = 'l',
}

type AvatarProps = {
  name: string | undefined;
  imagePath: string | undefined;
  size?: AvatarSize;
};

const Avatar = ({
  name,
  imagePath: path,
  size = AvatarSize.Small,
}: AvatarProps) => {
  return (
    <img
      className={`rounded-full p-1 ring-2 ring-cyan-400 dark:ring-cyan-400
      ${size === AvatarSize.Small ? 'h-24 w-24' : 'h-48 w-48'}`}
      src={`https://www.livesport.cz/res/image/data/${path}`}
      alt={name}
    />
  );
};

export default Avatar;
