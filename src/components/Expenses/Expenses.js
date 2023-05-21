import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
function Expenses(prors) {
  return (
    <Card className="expenses">
      <ExpenseItem data={prors.expenses[0]} />
      <ExpenseItem data={prors.expenses[1]} />
      <ExpenseItem data={prors.expenses[2]} />
      <ExpenseItem data={prors.expenses[3]} />
    </Card>
  );
}

export default Expenses;
