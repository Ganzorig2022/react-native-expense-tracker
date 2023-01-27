import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface Props {
  expenses: Expenses[];
  periodName: string;
}

const ExpensesSummary = ({ expenses, periodName }: Props) => {
  const expensesSum = expenses.reduce((sum, expense) => {
    return (sum += expense.amount);
  }, 0);
  return (
    <View>
      <Text>{periodName}</Text>
      <Text>$ {expensesSum?.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({});
