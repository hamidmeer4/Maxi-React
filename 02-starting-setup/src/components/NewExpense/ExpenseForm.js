import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    const [enterTitle, setEnterTitle] = useState('')
    const [enterAmount, setEnterAmount] = useState('')
    const [enterDate, setEnterDate] = useState('')

  const titleChangeHandler = (e) => {
    setEnterTitle(e.target.value);
    console.log(e.target.value)
  };
  const amountChangeHandler = (e) => {
    setEnterAmount(e.target.value);
    console.log(e.target.value)
  };
  const dateChangeHandler = (e) => {
  setEnterDate(e.target.value);
  console.log(e.target.value)
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/* Now we add event in our project  */}
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            onChange={dateChangeHandler}
            min="2020-01-01"
            max="2024-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
