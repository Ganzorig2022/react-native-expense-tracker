import { StyleSheet, Text, TextInput, View } from 'react-native';
import type { ReturnKeyType, KeyboardType } from 'react-native';
import React from 'react';

type Props = {
  label: string;
  placeholder?: string;
  keyboardType?: KeyboardType;
  maxLength?: number;
  onChangeText: (enteredValue: string) => void;
  multiline?: boolean;
  value: string;
  // autocorrect?: boolean;
};

const CustomInput = ({
  placeholder,
  label,
  keyboardType,
  maxLength,
  onChangeText,
  multiline,
  value,
}: Props) => {
  return (
    <View className='my-1 mx-4'>
      <Text className='text-[12px] text-primary100 mb-1'>{label}</Text>
      <TextInput
        keyboardType={keyboardType}
        placeholder={placeholder}
        maxLength={maxLength}
        onChangeText={onChangeText}
        multiline={multiline}
        // autocorrect={autocorrect}
        className='bg-primary100 p-[6px] rounded-md text-lg text-primary700'
        value={value}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({});
