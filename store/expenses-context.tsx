import { createContext, useReducer, ReactNode } from 'react';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date().toDateString(),
  },
  {
    id: 'e2',
    description: 'A pair of shirts',
    amount: 69.99,
    date: new Date().toDateString(),
  },
  {
    id: 'e3',
    description: 'A pair of shirts',
    amount: 29.99,
    date: new Date().toDateString(),
  },
];

//1) a type for CONTEXT
type ExpensesContextType = {
  expenses: ExpensesType[];
  addExpense: ({ description, amount, date }: AddExpenseType) => void;
  updateExpense: (
    id: string,
    { description, amount, date }: AddExpenseType
  ) => void;
  deleteExpense: (id: string) => void;
};

//2) An interface for ACTION
interface ExpenseActionType {
  type: string;
  payload: any;
}

//=============1) CREATING CONTEXT==========
export const ExpensesContext = createContext<ExpensesContextType>({
  expenses: [],
  addExpense: () => {},
  updateExpense: () => {},
  deleteExpense: () => {},
});

//============2) CREATING REDUCER==========
// action ==> TYPE & VALUE for state
// state ==> comes from initial state
function expensesReducer(state: ExpensesType[], action: ExpenseActionType) {
  const { type, payload } = action;

  switch (type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [...state, { ...payload, id: id }];
    case 'UPDATE':
      //1) find index
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === payload.id
      );
      //2) find the array element
      const updatableExpense = state[updatableExpenseIndex];
      //3) update it to main array
      const updatedItem = { ...updatableExpense, ...payload.data };
      //4)
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      //5) updated final array
      return updatedExpenses;
    case 'DELETE':
      return state.filter((expense) => expense.id !== payload);
    default:
      return state;
  }
}

type Props = {
  children: ReactNode;
};

const ExpensesContextProvider = ({ children }: Props) => {
  //initial state ==> DUMMY_EXPENSES
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  const addExpense = (expenseData: AddExpenseType) => {
    dispatch({ type: 'ADD', payload: expenseData });
  };
  const updateExpense = (id: string, expenseData: AddExpenseType) => {
    dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } });
  };
  const deleteExpense = (id: string) => {
    dispatch({ type: 'DELETE', payload: id });
  };

  const value: ExpensesContextType = {
    expenses: expensesState,
    addExpense,
    updateExpense,
    deleteExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesContextProvider;
