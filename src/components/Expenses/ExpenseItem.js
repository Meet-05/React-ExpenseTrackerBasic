import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  //useState returns a value and a function which is used to rerender the component in which it was registered.
  //to change the value , we need to call the funciton which rerenders the component .

  const [title, setTitle] = useState(props.title);
  console.log("rendered");
  const clickHandler = () => {
    setTitle("Updated");
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
        <button onClick={clickHandler}> Add</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
