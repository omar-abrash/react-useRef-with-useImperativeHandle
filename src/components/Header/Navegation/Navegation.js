import React, { useContext } from "react";
import AuthContext from "../../../store/auth-context";

import Button from "../../UI/Button/Button";
import styles from "./Navegation.module.css";

const Navegation = () => {
  const ctx = useContext(AuthContext);

  return (
    <nav className={styles.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">User</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <Button className={styles.btn} onClick={ctx.onLogOut}>
              Log out
            </Button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navegation;
