import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = ({ expenses }) => {
  //   console.log(expenses.title);
  //   const expenseDate = new Date();
  //   let day = expenseDate.getDate();
  //   let month = expenseDate.getMonth() + 1;
  //   let year = expenseDate.getFullYear();
  //   let currentDate = `${day}-${month}-${year}`;
  //   const expenseYear = expenseDate.getFullYear();

  //   const expenseTitle = "Car Insurance ";
  //   const expnseAmount = "112$";
  return (
    <div className="expense-item">
      <div>{expenses.date}</div>
      <div className="expense-item__description">
        <h2>{expenses.title}</h2>
        <div className="expense-item__price">{expenses.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
