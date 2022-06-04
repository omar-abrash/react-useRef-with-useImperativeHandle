import React, { useContext } from "react";

import Header from "./components/Header/Header";
import LogInForm from "./components/LogInForm/LogInForm";
import Home from "./components/Home/Home";
import AuthContext from "./store/auth-context";

function App() {
  const ctx = useContext(AuthContext);

  return (
    <React.Fragment>
      <Header />
      {!ctx.isLoggedIn && <LogInForm />}
      {ctx.isLoggedIn && <Home />}
    </React.Fragment>
  );
}

export default App;
