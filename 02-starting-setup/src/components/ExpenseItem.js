import './ExpenceItem.css'

const ExpenseItem = () => {
  return (
    <div className = "expense-item">
      <div>May 1 2024</div>
      <div className = "expense-item__description">
        <h2>Car Insurance</h2>
        <div className = "expense-item__price">$290.65</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
