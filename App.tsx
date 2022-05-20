import React from 'react';
import Navigation from './src/config/Navigation';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './src/config/theme-paper';
import { Provider } from 'react-redux';
import { store } from './src/store/store';

const App = () => {
  
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <Navigation />
      </PaperProvider>
    </Provider>
  )
};

export default App;
