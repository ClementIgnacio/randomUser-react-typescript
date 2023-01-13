import { createContext, ReactElement, ReactNode, useState } from "react";
import { UserInterface } from "../models/User/UserInterface";
import { UsersContextInterface } from "./Interfaces";

/**
 * Les valeurs par défaut du contexte
 */
const defaultValue: UsersContextInterface = {
  users: [],
  setUsers: () => {}
};

export const UsersContext = createContext(defaultValue);

/**
 * Provider des utilisateurs, permettant de rassembler les données à un seul endroit
 */
export const UsersProvider = ({
  children
}: {
  children: ReactNode;
}): ReactElement => {
  const [users, setUsers] = useState<UserInterface[]>([]);

  const value: UsersContextInterface = {
    users: users,
    setUsers: setUsers
  };

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
};
