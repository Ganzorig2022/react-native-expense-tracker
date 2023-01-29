import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';

type Props = {
  expenses: ExpensesType[];
  expensesPeriod: string;
};

//imported from
// "/screens/AllExpenses.tsx"
// "/screens/RecentExpenses.tsx"
const ExpensesOutput = ({ expenses, expensesPeriod }: Props) => {
  return (
    <View className='p-6 bg-primary700 flex-1'>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      <ExpensesList expenses={expenses} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({});
