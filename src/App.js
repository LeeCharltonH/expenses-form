import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "New Sofa",
    amount: 850,
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
  {
    id: "e5",
    title: "New Chair",
    amount: 225,
    date: new Date(2020, 1, 19),
  },
  {
    id: "e6",
    title: "Games Console",
    amount: 550,
    date: new Date(2022, 1, 28),
  },
  {
    id: "e7",
    title: "A Book",
    amount: 10,
    date: new Date(2019, 3, 11),
  },
  {
    id: "e8",
    title: "Stationery",
    amount: 18,
    date: new Date(2019, 9, 22),
  },
  {
    id: "e1",
    title: "New Lamp",
    amount: 125,
    date: new Date(2020, 4, 19),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const newExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...expenses];
    });
  };

  return (
    <div>
      <NewExpense onNewExpense={newExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
