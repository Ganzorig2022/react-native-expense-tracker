import { StyleSheet, Text, View } from 'react-native';
import { useContext } from 'react';
import ExpensesOutput from '../components/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';

const AllExpenses = () => {
  const expensesCTX = useContext(ExpensesContext);

  return (
    <ExpensesOutput expenses={expensesCTX.expenses} expensesPeriod='Total' />
  );
};

export default AllExpenses;
