import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  let expenses = [
    {
      date: new Date(),
      expenseTitle: "Car",
      expenseAmount: 200,
    },
    {
      date: new Date(),
      expenseTitle: "Bike",
      expenseAmount: 20,
    },
    {
      date: new Date(),
      expenseTitle: "Mobile",
      expenseAmount: 2,
    },
    {
      date: new Date(),
      expenseTitle: "bottle",
      expenseAmount: 2,
    },
  ];
  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />;
    </div>
  );
}

export default App;
