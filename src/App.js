import { useContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DarkModeContext } from "./context/darkmodeContext";
import Ads from "./pages/ads/Ads";
import Home from "./pages/home/Home";
import Logout from "./pages/logout/Logout";
import New from "./pages/new/New";
import Notifications from "./pages/notifications/Notifications";
import Profile from "./pages/profile/Profile";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import "./style/darkmode.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Loginn from "./pages/login/Loginn";
import store from "./Redux/store";
import { Provider } from "react-redux";
import Chart from "./Components/Searcher/Chart";
import Login from "./pages/login/Login";

// App Component
const App = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user"))); // pour convertir string vers un objet

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, [localStorage.getItem("user")]);

  return (
    <Provider store={store}>
      <div className={darkMode ? "app darkmode" : "app"}>
        {user ? (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/annonceur" element={<Single />} />
              <Route path="/chercheur" element={<New />} />
              <Route path="/ads" element={<Ads />} />
              <Route path="/notification" element={<Notifications />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="*" element={<Profile />} />
            </Routes>
          </BrowserRouter>
        ) : (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="*" element={<Login />} />
            </Routes>
          </BrowserRouter>
        )}
      </div>
    </Provider>
  );
};

export default App;
