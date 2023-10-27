export const getInitials = (name: string): string => {
  const parts = name?.split(' ');
  const initials = parts.map((part) => part.charAt(0).toUpperCase());
  return initials.join('');
};
