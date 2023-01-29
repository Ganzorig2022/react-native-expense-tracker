import { StyleSheet, Text, TextInput, View } from 'react-native';
import CustomInput from './CustomInput';
import { useState } from 'react';
import CustomButton from '../ui/CustomButton';

type Props = {
  submitButtonLabel: string;
  onSubmit: (props: AddExpenseType) => void;
  onCancel: () => void;
};

const ExpenseForm = ({ submitButtonLabel, onSubmit, onCancel }: Props) => {
  const [inputValues, setInputValues] = useState({
    amount: '12.99',
    date: '2023-01-10',
    description: 'add your description',
  });

  const inputChangedHandler = (inputName: string, enteredValue: string) => {
    console.log(enteredValue);
    setInputValues((prev) => {
      return { ...prev, [inputName]: enteredValue };
    });
  };

  const submitHandler = () => {
    const { amount, date, description } = inputValues;
    const expenseData = {
      amount: +amount,
      date,
      description,
    };

    onSubmit(expenseData);
  };

  return (
    <View className='flex-col justify-center'>
      <View className='flex items-center justify-center'>
        <Text className='text-white text-2xl m-8 font-bold'>Your Expense</Text>
      </View>
      <CustomInput
        label='Amount'
        keyboardType='decimal-pad'
        onChangeText={inputChangedHandler.bind(this, 'amount')}
        value={inputValues.amount}
      />
      <CustomInput
        label='Date'
        placeholder='YYYY-MM-DD'
        maxLength={10}
        onChangeText={inputChangedHandler.bind(this, 'date')}
        value={inputValues.date}
        multiline={true}
      />
      <CustomInput
        label='Description'
        onChangeText={inputChangedHandler.bind(this, 'description')}
        multiline={true}
        value={inputValues.description}
        // autocorrect={false}
      />
      <View className='flex-row justify-center items-center'>
        <CustomButton
          mode={'flat'}
          onPress={onCancel}
          style={styles.customButton}
        >
          Cancel
        </CustomButton>
        <CustomButton style={styles.customButton} onPress={submitHandler}>
          {submitButtonLabel}
        </CustomButton>
      </View>
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  customButton: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
