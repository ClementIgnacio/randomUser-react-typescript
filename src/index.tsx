import App from "./components/AppComponent";
import { StrictMode } from "react";
import { UsersProvider } from "./context/UsersContext";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement ? rootElement : new HTMLElement());

root.render(
  <StrictMode>
    <UsersProvider>
      <App />
    </UsersProvider>
  </StrictMode>
);
