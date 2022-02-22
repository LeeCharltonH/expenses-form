import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpenseChart";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");
  const items = props.items;
  const filterHandler = (selectedOption) => {
    setSelectedYear(selectedOption);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === selectedYear}
  );


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={selectedYear} filter={filterHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
