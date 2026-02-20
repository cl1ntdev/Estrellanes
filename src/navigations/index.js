
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './MainNav';
import AuthNav from './auth/AuthNav';
export default function AppNav() {
  return (
    <NavigationContainer>
      <AuthNav />
    </NavigationContainer>
  )
}