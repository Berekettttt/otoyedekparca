import React from 'react';
import { AppProvider } from './AppContext';
import Navigator from './Navigator'; 

const App = () => {
  return (
    <AppProvider>
      <Navigator />
    </AppProvider>
  );
};

export default App;