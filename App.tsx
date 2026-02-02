
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';

function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <HomeScreen />
      <ProfileScreen />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                // Takes up the full screen height
    backgroundColor: '#fff', // White background
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center',     // Centers content horizontally
  },
});

export default App;
