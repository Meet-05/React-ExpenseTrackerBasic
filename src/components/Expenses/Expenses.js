import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

function Expenses(props) {
  return (
    <div>
      <Card className="expenses">
        <ExpenseItem
          title={props.items[0].expenseTitle}
          date={props.items[0].date}
          amount={props.items[0].expenseTitle}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[1].expenseTitle}
          date={props.items[1].date}
          amount={props.items[1].expenseTitle}
        ></ExpenseItem>
      </Card>
    </div>
  );
}
export default Expenses;
