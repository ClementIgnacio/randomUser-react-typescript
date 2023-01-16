import "./styles.css";
import UsersComponent from "../UsersComponent";
import HeaderComponent from "../HeaderComponent";

/**
 * Composant principal de l'application
 */
export default function App () {
  return (
    <div className="App">
      <HeaderComponent />
      <UsersComponent />
    </div>
  );
};
