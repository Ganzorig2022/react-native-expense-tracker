interface ExpensesType {
  id: string;
  description: string;
  amount: number;
  date: string;
}
interface AddExpenseType {
  description: string;
  amount: number;
  date: string;
}

type RootStackParamList = {
  ManageExpense: { expenseId: string };
  RecentExpenses: undefined;
  ExpensesOverview: undefined;
};
