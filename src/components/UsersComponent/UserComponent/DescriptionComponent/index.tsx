import "./style.css";

import { UserInterface, UserNameInterface } from "../../../../models/User/UserInterface";

const getName = ({ first, last }: UserNameInterface) => `${first} ${last}`

/**
 * Composant dédié à l'affichage du description de l'utilisateur
 */
export default function UserDescription(user: UserInterface) {
  return (
    <div id="UserComponent-Description">
      <div className="description">
        <img src={`${user.picture.large}`} alt={getName(user.name)} />
        <h4>{getName(user.name)}</h4>
        <small>{user.email}</small>
      </div>
      <button>Connect</button>
    </div>
  );
};
