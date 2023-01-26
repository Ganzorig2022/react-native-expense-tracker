import { StyleSheet, Text, FlatList } from 'react-native';

const ExpensesList = ({ expenses }: any) => {
  console.log(expenses);
  return (
    <FlatList
      data={expenses}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Text>{item}</Text>}
    />
  );
};

export default ExpensesList;

const styles = StyleSheet.create({});
