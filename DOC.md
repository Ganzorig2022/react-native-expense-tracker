## 1

```bash
npx create-expo-app --template
```

## 2 - REACT NATIVE NAGIVATION

> https://reactnavigation.org/docs/getting-started/

1. Installing

```bash
npm install @react-navigation/native
```

```bash
npx expo install react-native-screens react-native-safe-area-context
```

2. Installing NAVIGATOR STACK
   > https://reactnavigation.org/docs/native-stack-navigator

```bash
npm install @react-navigation/native-stack
```

3. Installing Bottom Tabs

   > https://reactnavigation.org/docs/bottom-tab-navigator

```bash
npm install @react-navigation/bottom-tabs
```

https://www.reddit.com/r/reactjs/comments/otqyq4/how_to_type_array_of_object_prop/

4. "/components/ExpensesItem.tsx" dotor ali neg list item dr darhad "navigation.navigate('ManageExpense') huudas ruu vserne.
5. navigation dr type error zaawal DEBUGGING.md-aas vzne vv.

## MANAGE EXPENSE PAGE

1. "/components/ExpensesItem.tsx" dotor ali neg list item dr darhad "navigation.navigate('ManageExpense', {id})-eer ene huudsand irne.
2. Props-ooroo damjuulsan ID, 'ManageExpense"-ee awna.
3. Dynamic-aar "ManageExpense" title-aa soliw.

```navigation.setOptions({
     title: isEditing ? 'Edit Expense' : 'Add Expense',
   });
```
