## 1 - navigation.navigate typescript error

> https://stackoverflow.com/questions/68779417/navigation-navigatehome-showing-some-error-in-typescript

````
type Nav = {
  navigate: (value: string) => void;
}

const navigation = useNavigation<Nav>()

function foo() {
    navigation.navigate('ManageExpense', {
      expenseId: id,
    });
}
```
````
