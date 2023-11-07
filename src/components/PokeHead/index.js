import React from "react";
import styles from "./PokeHead.module.css";
import { Button } from "../Button";

export const PokeHead = (props) => {
  console.log(props);
  return (
    <div className={styles.content}>
      <p className={styles.title}>Pokedex</p>
      <Button
        color="success"
        size="medium"
        title="Start Game"
        weight="bold"
        onClick={props.sayHello }
      >
        Gonder
      </Button>
    </div>
  );
};
