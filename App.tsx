import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Navigation from './src/config/Navigation';
import { ThemeProvider } from './src/config/theme-context';
import Card from './src/screens/Card';
import Login from './src/screens/Login/Login';




const App = () => {

  return (
    <ThemeProvider>
    <Login />
    </ThemeProvider>
  )
};

const styles = StyleSheet.create({

});

export default App;
