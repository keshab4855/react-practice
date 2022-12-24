import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = ({ addExpenseHandler }) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    addExpenseHandler(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm
        saveExpenseDataHandler={saveExpenseDataHandler}
      ></ExpenseForm>
    </div>
  );
};

export default NewExpense;
