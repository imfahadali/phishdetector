import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Analytics from "./pages/Dashboard/Analytics";
import Profile from "./pages/Profile";
import ManageSites from "./pages/Form/ManageSites";
import Tables from "./pages/Tables";
import Settings from "./pages/Settings";
import Chart from "./pages/Chart";
import SignIn from "./pages/Authentication/SignIn";
import SignUp from "./pages/Authentication/SignUp";
import useToken from "./hooks/useToken";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [register, setRegister] = useState(false);

  const { token, setToken } = useToken("");
  // const { state } = useContext(UserContext);

  const preloader = document.getElementById("preloader");

  if (preloader) {
    setTimeout(() => {
      preloader.style.display = "none";
      setLoading(false);
    }, 2000);
  }

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  // if (!state.token) {
  //   return register ? (
  //     <Register setRegister={setRegister} />
  //   ) : (
  //     <Login setRegister={setRegister} />
  //   );
  // }

  return (
    !loading && (
      <>
        <Routes>
          <Route
            exact
            path="/"
            element={token ? <Chart /> : <Navigate to="/auth/signin" />}
          />
          <Route
            path="/tables"
            element={token ? <Tables /> : <Navigate to="/auth/signin" />}
          />
          {/* <Route path='/settings' element={<Settings />} />
          <Route path='/chart' element={<Chart />} /> */}

          <Route path="/auth/signin" element={<SignIn />} />
          <Route path="/auth/signup" element={<SignUp />} />
        </Routes>
      </>
    )
  );
};

export default App;
