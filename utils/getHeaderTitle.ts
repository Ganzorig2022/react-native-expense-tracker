import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

type Props = {
  route: string;
};
export default function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'RecentExpenses';

  switch (routeName) {
    case 'RecentExpenses':
      return 'Recent';
    case 'AllExpenses':
      return 'All';
  }
}
