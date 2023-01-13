import { UserInterface } from "../models/User/UserInterface";

export interface UsersContextInterface {
  users: UserInterface[];
  setUsers: Function;
}
