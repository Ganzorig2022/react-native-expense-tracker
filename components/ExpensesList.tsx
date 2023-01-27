import { StyleSheet, Text, FlatList } from 'react-native';

type Props = {
  expenses: Expenses[];
};

const ExpensesList = ({ expenses }: Props) => {
  return (
    <FlatList
      data={expenses}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Text>{item.id}</Text>}
    />
  );
};

export default ExpensesList;
