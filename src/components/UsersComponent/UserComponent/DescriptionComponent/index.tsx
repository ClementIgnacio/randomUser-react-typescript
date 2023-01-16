import "./style.css";

import { UserInterface } from "../../../../models/User/UserInterface";

/**
 * Composant dédié à l'affichage du description de l'utilisateur
 */
export default function UserDescription (user: UserInterface) {
  return (
    <div id="UserComponent-Description">
      <div className="description">
        <img src={`${user.picture.large}`} alt={user.name.getName()} />
        <h4>{user.name.getName()}</h4>
        <small>{user.email}</small>
      </div>
      <button>Connect</button>
    </div>
  );
};
