## 1 - navigation.navigate typescript error

> https://stackoverflow.com/questions/68779417/navigation-navigatehome-showing-some-error-in-typescript

```
type Nav = {
  //2 parameter bga uchraas...
  navigate: (value: string, ...args: any) => void;
}

const navigation = useNavigation<Nav>()

function foo() {

    navigation.navigate('ManageExpense', {
      expenseId: id,
    });
}
```

## 2 - Nested Object Parameter Type Definition

> https://stackoverflow.com/questions/44503409/destructuring-nested-objects-as-function-parameters

// nested object parameters type definition
type Props = { route: { params: { expenseId: string } } };

## 3 - Type '({ route, navigation }: Props) => JSX.Element' is not assignable to type 'ScreenComponentType<ParamListBase,

> https://reactnavigation.org/docs/typescript

> https://blog.jscrambler.com/getting-started-with-react-navigation-v6-and-typescript-in-react-native

1. "/App.tsx" dr "Stack.Screen"--n "component={ManageExpense}" dr aldaa garaw.
2. "/screens/ManageExpense.tsx" dr ":Props['navitaion'] gj bichseneer arilaw.

```function ProfileScreen({ route, navigation }: Props) {
  // ...
}
```

> You can get the types for navigation and route from the Props type as follows:

```
type ProfileScreenNavigationProp = Props['navigation'];

type ProfileScreenRouteProp = Props['route'];
```

## 4 - Argument of type 'string' is not assignable to parameter of type 'never'.ts(2345)
