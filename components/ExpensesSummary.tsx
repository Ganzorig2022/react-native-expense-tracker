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
    <View className='p-2 bg-primary50 flex-row justify-between items-center rounded-md'>
      <Text className='text-xs text-primary400'>{periodName}</Text>
      <Text className='text-base font-bold text-primary500'>
        $ {expensesSum?.toFixed(2)}
      </Text>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({});
