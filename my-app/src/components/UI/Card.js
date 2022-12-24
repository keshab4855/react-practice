import React from "react";
import "./Card.css";

const Card = (expenses) => {
  const classes = "card " + expenses.className;
  return <div className={classes}>{expenses.children}</div>;
};

export default Card;
