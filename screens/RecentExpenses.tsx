import { StyleSheet, Text, View } from 'react-native';
import { useContext } from 'react';
import ExpensesOutput from '../components/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';

const RecentExpenses = () => {
  const expensesCTX = useContext(ExpensesContext);

  const recentExpenses = expensesCTX.expenses.filter((expense) => {
    const today = new Date().toDateString();
  });

  return (
    <ExpensesOutput
      expenses={expensesCTX.expenses}
      expensesPeriod='Last 7 days'
    />
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({});
