import React, { useContext } from "react";

import Container from "../UI/Container/Container";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";
import styles from "./Home.module.css";

const Home = () => {
  const ctx = useContext(AuthContext);
  return (
    <main>
      <Container>
        <Card className={styles.card}>
          <h2>Welcome, you are loggIn Now!!</h2>
          <Button className={styles.btn} onClick={ctx.onLogOut}>
            log out
          </Button>
        </Card>
      </Container>
    </main>
  );
};

export default Home;
