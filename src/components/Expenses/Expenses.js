import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';
import ExpenseFilter from './ExpensesFilter';
import Card from '../UI/Card';
import { useState } from 'react';
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2023');
  const saveExpenseYearHandler = enteredExpenseYear => {
    setFilteredYear(enteredExpenseYear);
  };
  const filteredExpenses = props.items.filter(
    el => el.date.getFullYear() === +filteredYear
  );
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selectedYear={filteredYear}
          onSaveExpenseYear={saveExpenseYearHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
