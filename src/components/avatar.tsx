export enum AvatarSize {
  Small = 's',
  Large = 'l',
}

type AvatarProps = {
  name: string;
  imagePath: string;
  size?: AvatarSize;
};

const Avatar = ({ name, imagePath: path, size = AvatarSize.Small }: AvatarProps) => {
  return (
    <img
      className={`p-1 rounded-full ring-2 ring-cyan-400 dark:ring-cyan-400
      ${size === AvatarSize.Small ? 'w-24 h-24' : 'w-48 h-48'}`}
      src={`https://www.livesport.cz/res/image/data/${path}`}
      alt={name}
    />
  );
};

export default Avatar;
