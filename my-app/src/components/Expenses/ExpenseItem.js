import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import { useState } from "react";

const ExpenseItem = (expenses) => {
  const [title, setTitle] = useState(expenses.title);

  const handleOnClick = (e) => {
    setTitle("Updated");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={expenses.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${expenses.amount}</div>
      </div>
      <button onClick={handleOnClick}>Chnage title</button>
    </Card>
  );
};

export default ExpenseItem;
