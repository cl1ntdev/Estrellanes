import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import { ROUTES } from '../utils';

const MainNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.HOME}>
      <Stack.Screen name={ROUTES.HOME} component={HomeScreen} />
      <Stack.Screen name={ROUTES.PROFILE} component={ProfileScreen} />
    </Stack.Navigator>
  )
}

export default function AppNav() {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  )
}