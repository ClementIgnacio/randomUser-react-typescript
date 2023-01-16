export interface UserInterface {
  gender: string;
  name: UserNameInterface;
  location: LocationInterface;
  email: string;
  picture: PictureInterface;
}

export type UserNameInterface = {
  title: string;
  first: string;
  last: string;
};

export type StreetInterface = {
  number: number;
  name: string;
};

export type CoordinatesInterface = {
  latitude: number;
  longitude: number;
};

export type TimeZoneInterface = {
  offset: number;
  description: string;
};

export type LocationInterface = {
  street: StreetInterface;
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: CoordinatesInterface;
  timezone: TimeZoneInterface;
};

export type PictureInterface = {
  large: string;
  medium: string;
  thumbnail: string;
};
