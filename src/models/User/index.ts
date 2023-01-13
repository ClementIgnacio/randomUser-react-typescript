import {
  LocationInterface,
  PictureInterface,
  UserInterface,
  UserNameInterface,
  CoordinatesInterface,
  StreetInterface,
  TimeZoneInterface
} from "./UserInterface";

class UserName {
  first: string;
  last: string;
  title: string;

  constructor(userName: UserNameInterface) {
    this.first = userName.first;
    this.last = userName.last;
    this.title = userName.title;
  }

  /**
   * Méthode permettant la concaténation de nom/prenom
   * @return {String} Le nom et le prénom
   */
  getName = (): string => {
    return `${this.first} ${this.last}`;
  };
}

class Picture {
  large: string;
  medium: string;
  thumbnail: string;

  constructor(picture: PictureInterface) {
    this.large = picture.large;
    this.medium = picture.medium;
    this.thumbnail = picture.thumbnail;
  }
}

class Coordinates {
  latitude: number;
  longitude: number;

  constructor(coordinates: CoordinatesInterface) {
    this.latitude = coordinates.latitude;
    this.longitude = coordinates.longitude;
  }
}

class Street {
  number: number;
  name: string;

  constructor(street: StreetInterface) {
    this.number = street.number;
    this.name = street.name;
  }
}

class TimeZone {
  offset: number;
  description: string;

  constructor(timezone: TimeZoneInterface) {
    this.offset = timezone.offset;
    this.description = timezone.description;
  }
}

class Location {
  street: StreetInterface;
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: CoordinatesInterface;
  timezone: TimeZoneInterface;

  constructor(location: LocationInterface) {
    this.street = new Street(location.street);
    this.city = location.city;
    this.state = location.state;
    this.country = location.country;
    this.postcode = location.postcode;
    this.coordinates = new Coordinates(location.coordinates);
    this.timezone = new TimeZone(location.timezone);
  }
}

export default class User {
  gender: string;
  name: UserNameInterface;
  email: string;
  picture: PictureInterface;
  location: LocationInterface;

  constructor(user: UserInterface) {
    this.gender = user.gender;
    this.name = new UserName(user.name);
    this.email = user.email;
    this.picture = new Picture(user.picture);
    this.location = new Location(user.location);
  }
}
