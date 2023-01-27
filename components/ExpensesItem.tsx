import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

type Props = { id: string; description: string; amount: number; date: string };
type Nav = {
  navigate: (value: string, ...args: any) => void;
};

const ExpensesItem = ({ id, description, amount, date }: Props) => {
  const navigation = useNavigation<Nav>();

  // go to <ManageExpense/> page
  const expensePressHandler = () => {
    navigation.navigate('ManageExpense', {
      expenseId: id,
    });
  };

  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View className='p-3 mt-2 bg-orange-500 flex flex-row justify-between rounded-md z-10 shadow-md'>
        <View>
          <Text className='text-lg font-bold mb-1'>{description}</Text>
          <Text className='text-primary50'>{date}</Text>
        </View>
        <View className='py-3 px-1 bg-white justify-center items-center rounded'>
          <Text className='text-primary500 font-bold px-2'>{amount}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpensesItem;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
});
