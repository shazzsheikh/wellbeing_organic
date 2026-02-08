import React from 'react';
import { StatusBar, useColorScheme, ScrollView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/naviagtion/AppNavigator'; // Ensure the file './src/navigation/AppNavigator.tsx' exists and is correctly named
import Header from './src/components/Header';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <Header />
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
})
