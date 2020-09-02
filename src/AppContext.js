import { createContext, useState } from 'react';

export const AppContext = createContext({
  customers: [],
  customer: {},
});

const AppProvider = ({ children }) => {
  const [customers, setCustomers] = useState([]);
  const [customer, setCustomer] = useState({});

  const handleCustomers = items => {
    setCustomers(items);
  };

  const handleCustomer = item => {
    setCustomer(item);
  };

  const appValues = {
    customers,
    customer,
    handleCustomers,
    handleCustomer,
  };

  return (
    <AppContext.Provider value={appValues}>
      {children}
    </AppContext.Provider>
  );
}

export { AppProvider };

export default AppContext;
