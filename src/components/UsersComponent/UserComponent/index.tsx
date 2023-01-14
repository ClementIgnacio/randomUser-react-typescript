import "./style.css";
import { UserInterface } from "../../../models/User/UserInterface";
import DescriptionComponent from "./DescriptionComponent";
import { MouseEvent } from "react";

interface PropsType {
  user: UserInterface;
  active: boolean;
  index: number;
  setActiveCard: (index: number) => void;
}

/**
 * Composant dédié à l'affichage d'un utilisateur
 */
export default function UserCard({ user, active, index, setActiveCard }: PropsType) {
  /**
   * Handler associé à un click sur une carte
   * @param {MouseEvent:<HTMLDivElement>} event L'événement
   */
  const handleClick = (event: MouseEvent<HTMLDivElement>): void => {
    event.preventDefault();
    setActiveCard(index);
  };

  return (
    <div
      id="UserComponent-User"
      className={`card ${active ? "active" : ""}`}
      onClick={handleClick}
    >
      <DescriptionComponent {...user} />
    </div>
  );
};
