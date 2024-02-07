

const { createContext, useContext, useState } = require('react');



const AppContext = createContext(undefined);

const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const value = {
    cart,
    setCart,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

module.exports = { AppProvider, useAppContext };
