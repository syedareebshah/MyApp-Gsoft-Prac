import React from 'react';
import Navigation from './src/config/Navigation';
import { Provider as PaperProvider} from 'react-native-paper';
import { theme } from './src/config/theme-paper';







const App = () => {

  return (
    <PaperProvider theme={theme}>
    <Navigation />
    </PaperProvider>
  )
};



export default App;
