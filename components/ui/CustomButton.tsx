import { StyleSheet, Pressable, Text, View } from 'react-native';
import { ReactNode } from 'react';
import { GlobalStyles } from '../../constants/styles';

type Props = {
  children: ReactNode;
  onPress: () => void;
  mode?: string;
  style?: { [key: string]: string | number };
};

const CustomButton = ({ children, onPress, mode, style }: Props) => {
  return (
    <View style={style}>
      <Pressable onPress={onPress}>
        <View
          className={`rounded-md p-2 bg-primary500 ${
            mode === 'flat' && 'bg-transparent'
          }`}
        >
          <Text
            className={`text-white text-center ${
              mode === 'flat' && 'text-primary200'
            }`}
          >
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 4,
  },
});
