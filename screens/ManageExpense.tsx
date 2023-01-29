import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useContext } from 'react';
import IconButton from '../components/ui/IconButton';
import { GlobalStyles } from '../constants/styles';
import CustomButton from '../components/ui/CustomButton';
import { ExpensesContext } from '../store/expenses-context';
import ExpenseForm from '../components/ManageExpense/ExpenseForm';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type ManageExpenseProps = NativeStackScreenProps<
  RootStackParamList,
  'ManageExpense'
>;

const ManageExpense = ({ route, navigation }: ManageExpenseProps) => {
  const expensesCTX = useContext(ExpensesContext);
  // route ==> {name:'', params:{expenseId:''}} geh met object irne.

  const editedExpenseId = route.params?.expenseId; //undefined or 'id'

  const isEditing = !!editedExpenseId; //convert undefined to FALSE, if defined then TRUE

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
  const confirmHandler = (expenseData: AddExpenseType) => {
    if (isEditing) {
      expensesCTX.updateExpense(editedExpenseId, expenseData);
    } else {
      expensesCTX.addExpense(expenseData);
    }

    navigation.goBack();
  };

  return (
    <View className='flex-1 p-6 bg-primary800'>
      <ExpenseForm
        submitButtonLabel={isEditing ? 'Update' : 'Add'}
        onSubmit={confirmHandler}
        onCancel={cancelHandler}
      />

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
