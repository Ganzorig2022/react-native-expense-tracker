import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';

// type Props = { expenses; expensesPeriod };
const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2021-03-25'),
  },
  {
    id: 'e2',
    description: 'A pair of shirts',
    amount: 69.99,
    date: new Date('2021-03-25'),
  },
  {
    id: 'e3',
    description: 'A pair of shirts',
    amount: 69.99,
    date: new Date('2021-03-25'),
  },
];

const ExpensesOutput = ({ expenses, expensesPeriod }: Expenses) => {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({});
