import "./App.css";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AuthState from "./auth/state/AuthState";
import RouteConfig from "./route/config/RouteConfig";
import PageLayout from "./components/page_layout/PageLayout";
import NavBar from "./components/nav_bar/NavBar";

const pages = new Map([
  ["Home", "/"],
  ["About", "/about"],
  ["Dashboard", "/dashboard"],
  ["Statistic", "/statistic"],
]);

function App() {
  const [user, setUser] = useState({
    username: "guest",
    role: "guest",
  });

  return (
    <BrowserRouter>
      <AuthState.Provider value={{ user, setUser }}>
        <PageLayout
          navbar={<NavBar logo="MyApp" pages={pages} user={user} />}
          mainBody={<RouteConfig />}
        />
      </AuthState.Provider>
    </BrowserRouter>
  );
}

export default App;
