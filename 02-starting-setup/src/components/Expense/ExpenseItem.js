import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {

//  const handleClick = () => {
//   setTitle('Updatedddd!!!')
//   // console.log(title)
//  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      {/* <button onClick={handleClick}>click me </button> */}
    </Card>
  );
}

export default ExpenseItem;
