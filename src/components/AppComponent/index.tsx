import "./styles.css";
import UsersComponent from "../UsersComponent";
import HeaderComponent from "../HeaderComponent";

/**
 * Composant principal de l'application
 */
export default () => {
  return (
    <div className="App">
      <HeaderComponent />
      <UsersComponent />
    </div>
  );
};
