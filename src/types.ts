type Gender = {
  id: number;
  name: string;
};

type Type = {
  id: number;
  name: string;
};

type ParticipantType = {
  id: number;
  name: string;
};

type Sport = {
  id: number;
  name: string;
};

type FavouriteKey = {
  web: string;
  portable: string;
};

type Country = {
  id: number;
  name: string;
};

export type Image = {
  path: string;
  usageId: number;
  variantTypeId: number;
};

export type EntityType = {
  id: string;
  url: string;
  gender: Gender;
  name: string;
  type: Type;
  participantTypes: ParticipantType[];
  sport: Sport;
  favouriteKey: FavouriteKey;
  flagId?: null | string; // Assuming flagId can be a string or null based on given data
  defaultCountry: Country;
  images: Image[];
  teams?: null; // Assuming it can only be null based on given data
  defaultTournament?: null; // Assuming it can only be null based on given data
  superTemplate?: null; // Assuming it can only be null based on given data
};
