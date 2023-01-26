import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ExpensesOutput from '../components/ExpensesOutput';

const AllExpenses = () => {
  return <ExpensesOutput expensesPeriod='Total' />;
};

export default AllExpenses;
