import React from "react";

import Navegation from "./Navegation/Navegation";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Logo</h1>
      <Navegation />
    </header>
  );
};

export default Header;
