// import { useState } from "react";
import "./App.css";
// import DataDisplay from "./components/DataDisplay";
// import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
// import InputForm from "./components/InputForm";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  // const [tableData, setTableData] = useState("");
  // const handleOnSubmit = (insertedData) => {
  //   const inserts = { ...insertedData };
  //   setTableData(inserts);
  //   return;
  // };
  const addExpenseHandler = (expense) => {
    console.log("In APp");
    console.log(expense);
  };
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <NewExpense addExpenseHandler={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses}></Expenses>
      {/* <InputForm handleOnSubmit={handleOnSubmit}></InputForm>
      <DataDisplay tableData={tableData}></DataDisplay> */}
    </div>
  );
}

export default App;
