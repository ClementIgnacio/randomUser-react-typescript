import { useEffect, useContext, useCallback } from "react";
import { UsersContext } from "../context/UsersContext";
import { UserInterface } from "../models/User/UserInterface";
import { RANDOM_USER_BASE_URL } from "../utils/api";

interface UseUsersOptions {
  init?: boolean;
}

/**
 * Hook de gestion des utilisateurs
 */
export default function useUsers(options: UseUsersOptions = { init: false }) {
  const { users, setUsers } = useContext(UsersContext);

/**
 * Méthode permettant l'obtention de users
 * @param {number} nbResults[3] Le nombre de résultats à chercher
 */
const fetchRandomUsers = useCallback(
  async (nbResults: number = 3) => {
    const url = new URL(RANDOM_USER_BASE_URL)
    url.searchParams.set('results', nbResults.toString())
    const response = await fetch(url.toString())
    const users: UserInterface[] = (await response.json()).results

    setUsers(users)
  },
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
