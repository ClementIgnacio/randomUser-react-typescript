import { useEffect, useContext, useCallback } from "react";
import User from "../models/User";
import { UsersContext } from "../context/UsersContext";
import { UserInterface } from "../models/User/UserInterface";
import { RANDOM_USER_BASE_URL } from "../utils/api";

interface ReturnType {
  users: UserInterface[];
  fetchRandomUsers: Function;
}

interface PropsType {
  init: boolean;
}

/**
 * Hook de gestion des utilisateurs
 */
export default (options: PropsType = { init: false }): ReturnType => {
  const { users, setUsers } = useContext(UsersContext);

  /**
   * Méthode permettant l'obtention de users
   * @param {number} nbResults[3] Le nombre de résultats à chercher
   */
  const fetchRandomUsers = useCallback(
    (nbResults: number = 3) =>
      fetch(`${RANDOM_USER_BASE_URL}/?results=${nbResults}`).then((response) =>
        response.json().then((data) => {
          const newUsers = data.results.map(
            (user: UserInterface) => new User(user)
          );
          setUsers(newUsers);
        })
      ),
    [setUsers]
  );

  /**
   *  Mise à jour initiale de la variable users
   */
  useEffect(() => {
    if (users.length === 0 && options?.init === true) {
      fetchRandomUsers(3);
    }
  }, [users, options, fetchRandomUsers]);

  return { users, fetchRandomUsers };
};
