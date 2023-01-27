import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useContext } from 'react';
import IconButton from '../components/ui/IconButton';
import { GlobalStyles } from '../constants/styles';
import CustomButton from '../components/ui/CustomButton';
import { ExpensesContext } from '../store/expenses-context';

// nested object parameters type definition
type Props = {
  route: { params: { expenseId: string } };
  navigation: any;
};

const ManageExpense = ({ route, navigation }: Props['navigation']) => {
  const expensesCTX = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId; //convert string to boolean TRUE

  useEffect(() => {
    //https://reactnavigation.org/docs/navigation-prop/
    //https://reactnavigation.org/docs/headers/#updating-options-with-setoptions
    //setOptions - update the screen's options
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  const deleteExpenseHandler = () => {
    expensesCTX.deleteExpense(editedExpenseId);
    navigation.goBack();
  };

  //go back to previous page
  const cancelHandler = () => {
    navigation.goBack();
  };

  //update or add expense
  const confirmHandler = () => {
    if (isEditing) {
      expensesCTX.updateExpense(editedExpenseId, {
        description: 'Test!!!',
        amount: 12.99,
        date: '2023-01-27',
      });
    } else {
      expensesCTX.addExpense({
        description: 'Test',
        amount: 12.99,
        date: '2023-01-27',
      });
    }

    navigation.goBack();
  };

  return (
    <View className='flex-1 p-6 bg-primary800'>
      <View className='flex-row justify-center items-center'>
        <CustomButton
          mode={'flat'}
          onPress={cancelHandler}
          style={styles.customButton}
        >
          Cancel
        </CustomButton>
        <CustomButton style={styles.customButton} onPress={confirmHandler}>
          {isEditing ? 'Update' : 'Add'}
        </CustomButton>
      </View>
      {isEditing && (
        <View className=' mt-4 pt-2 border-t-[1px] border-t-primary200 items-center'>
          <IconButton
            icon='trash'
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  customButton: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
