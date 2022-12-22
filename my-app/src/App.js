import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: "date",
    },
    { id: "e2", title: "New TV", amount: 799.49, date: "date" },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: "date",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: "date",
    },
  ];
  // console.log(expenses);
  return (
    <div className="App">
      <ExpenseItem expenses={expenses[0]}></ExpenseItem>
      <ExpenseItem expenses={expenses[1]}></ExpenseItem>
      <ExpenseItem expenses={expenses[2]}></ExpenseItem>
    </div>
  );
}

export default App;
