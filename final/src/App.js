import Table from "./components/Table";

function App() {
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-orange-500", score: 5 },
    { name: "Grapes", color: "bg-orange-500", score: 5 },
    { name: "lime", color: "bg-orange-500", score: 5 },
    { name: "Banana", color: "bg-orange-500", score: 5 },
  ];
  return (
    <div>
      <Table data={data}></Table>
    </div>
  );
}

export default App;
