import { StyleSheet, Text, FlatList } from 'react-native';
import ExpensesItem from './ExpensesItem';

type Props = {
  expenses: Expenses[];
};

const ExpensesList = ({ expenses }: Props) => {
  return (
    <FlatList
      data={expenses}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ExpensesItem {...item} />}
    />
  );
};

export default ExpensesList;
