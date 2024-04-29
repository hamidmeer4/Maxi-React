import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterAmount, setEnterAmount] = useState("");
  const [enterDate, setEnterDate] = useState("");

  // now we use Object for multiple state

  //   const [enterInputUser, setenterUserInput] = useState({
  //     enterTitle: "",
  //     enterAmount: "",
  //     enterDate: "",
  //   });

  const titleChangeHandler = (e) => {
    setEnterTitle(e.target.value);
    console.log(e.target.value);

    // for multiple state

    // first way
    // setenterUserInput({
    //   ...enterInputUser,
    //   enterTitle: e.target.value,
    // });

    // or
    // second way

    // setenterUserInput((prevInput) => {
    //     return {
    //         ...prevInput,
    //         enterAmount : e.target.value
    //     }
    // })
  };

  const amountChangeHandler = (e) => {
    setEnterAmount(e.target.value);
    console.log(e.target.value);

    //   2  setenterUserInput({
    //         ...enterInputUser,
    //         enterAmount : e.target.value
    //     })
  };
  const dateChangeHandler = (e) => {
    setEnterDate(e.target.value);
    console.log(e.target.value);

    // 2 setenterUserInput({
    //     ...enterInputUser,
    //     enterDate : e.target.value
    // })
  };

  //   alternative  way a handler function

  // const inputChangeHandler = (identifier,value) => {

  //   if(identifier === 'title') {
  //       setEnterTitle(value)
  //   }
  //   else if(identifier === 'date') {
  //       setEnterDate(value)
  //   }
  //   else {
  //       setEnterAmount(value)
  //   }
  // }

  const submitHandler = (e) => {
    e.preventDefault();

    //  creating a object for state here

    const expenseData = {
      title: enterTitle,
      amount: enterAmount,
      date: new Date(enterDate),
    };
    console.log(expenseData);
    setEnterTitle("");
    setEnterAmount("");
    setEnterDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/* Now we add event in our project  */}
          <input type="text" value={enterTitle} onChange={titleChangeHandler} />

          {/* alternative way to create handler function  */}
          {/* <input type="text" onChange = {(e) => inputChangeHandler('title',e.target.value) }> */}
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enterAmount}
            onChange={amountChangeHandler}
            // alternative way to create handler function
            // {(e) => inputChangeHandler('title',e.target.value)
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enterDate}
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
