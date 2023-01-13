import useUsers from "../../hooks/useUsers";
import "./style.css";

/**
 * Composant dédié au Header
 */
export default () => {
  const { fetchRandomUsers } = useUsers();

  return (
    <div id="HeaderComponent">
      <button onClick={() => fetchRandomUsers()}>Reload</button>
    </div>
  );
};
