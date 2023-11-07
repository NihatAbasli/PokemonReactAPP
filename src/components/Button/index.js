import React from "react";
import styles from "./Button.module.css";
export const Button = (props) => {
  const {
    color = "danger",
    size = "medium",
    children,
    title,
    weight = "regular",
    onClick,
  } = props;
  return (
    <button
      onClick={onClick}
      className={` ${styles.btn} ${styles[weight]} ${styles[color]}  ${styles[size]} `}
    >
      {children || title}
    </button>
  );
};
