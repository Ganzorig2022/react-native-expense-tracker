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
    date: new Date().toDateString(),
  },
  {
    id: 'e2',
    description: 'A pair of shirts',
    amount: 69.99,
    date: new Date().toDateString(),
  },
  {
    id: 'e3',
    description: 'A pair of shirts',
    amount: 29.99,
    date: new Date().toDateString(),
  },
  {
    id: 'e4',
    description: 'A pair of shirts',
    amount: 19.99,
    date: new Date().toDateString(),
  },
  {
    id: 'e5',
    description: 'A pair of shirts',
    amount: 39.99,
    date: new Date().toDateString(),
  },
  {
    id: 'e6',
    description: 'A pair of shirts',
    amount: 39.99,
    date: new Date().toDateString(),
  },
  {
    id: 'e7',
    description: 'A pair of shirts',
    amount: 39.99,
    date: new Date().toDateString(),
  },
  {
    id: 'e8',
    description: 'A pair of shirts',
    amount: 39.99,
    date: new Date().toDateString(),
  },
  {
    id: 'e9',
    description: 'A pair of shirts',
    amount: 29.99,
    date: new Date().toDateString(),
  },
];

type Props = {
  expensesPeriod: string;
};

const ExpensesOutput = ({ expensesPeriod }: Props) => {
  return (
    <View className='p-6 bg-primary700 flex-1'>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({});
