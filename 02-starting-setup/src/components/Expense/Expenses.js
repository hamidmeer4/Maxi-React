import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filterExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filterYear;
  })

  return (
    <div>
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onChangeFilter={filterChangeHandler}
      />

      {/* the 4th approach is variale storing  */}

 {/* {expensesContent} */}
<ExpensesChart expenses = {filterExpenses}/>
<ExpensesList items= {filterExpenses}/>


{/* 2nd approach using &&  and third way is ?  */}
      {/* {filterExpenses.length === 0 && <p>No Expenses Found</p>}
      
      {filterExpenses.length > 0 && filterExpenses.map((expense) => (
        <ExpenseItem
          key = {expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))
      }  */}

      {/* 1 way  */}
      {/* {filterExpenses.map((expense) => (
        <ExpenseItem
          key = {expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))} */}
    </Card>
    </div>
  );
}

export default Expenses;
