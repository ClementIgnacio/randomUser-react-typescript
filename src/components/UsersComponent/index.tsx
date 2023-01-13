import "./style.css";
import UserComponent from "./UserComponent";
import { useState } from "react";
import useUsers from "../../hooks/useUsers";

/**
 * Composant dédié à l'affichage des utilisateurs
 */
export default () => {
  const [active, setActive] = useState<number>(1);
  const { users } = useUsers({ init: true });

  /**
   * Méthode permettant de modifier la carte active
   */
  const setActiveCard = (index: number): void => {
    setActive(index);
  };

  return (
    <div id="UsersComponent" className="cards">
      {users.map((user, index) => (
        <UserComponent
          user={user}
          active={index === active}
          index={index}
          key={index}
          setActiveCard={setActiveCard}
        />
      ))}
    </div>
  );
};
