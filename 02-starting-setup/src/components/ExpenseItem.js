import './ExpenceItem.css'

const ExpenseItem = () => {
  const expenseTitle = 'Home Rent'
  const expenseAmount = 450.54;
  const expenseDate = new Date(2012 , 2 , 1)

  return (
    <div className = "expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className = "expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className = "expense-item__price">${expenseAmount}</div>

      </div>
    </div>
  );
};

export default ExpenseItem;
