import React, { useEffect, useState, useContext } from 'react';
import Paper from '@material-ui/core/Paper';

import { useCustomerStyles } from '~/assets/styles/customer';
import { handleLinkClick } from '~/modules/utils/utils-nextjs';
import fetchCustomers from '~/services/api/get-customers';
import AppContext from '~/AppContext';

const CustomersListCallback = props => {
  const { filterBy, children: Component } = props;
  const { customers, handleCustomers, handleCustomer } = useContext(AppContext);
  const [itemsData, setItemsData] = useState({
    data: customers,
    status: 'fetching',
    error: null,
  });
  const classes = useCustomerStyles();

  const onHandleCustomers = newState => {
    setItemsData(prevState => ({
      ...prevState,
      ...newState,
    }));
  }

  useEffect(() => {
    const customersRef = fetchCustomers(filterBy)
      .then(data => {
        handleCustomers(data);
        onHandleCustomers({ data });
      })
      .catch(err => {
        const errorMsg = 'Error getting documents for customers.';
        handleCustomers({ error: errorMsg });
        // @TODO send `err` to sentry.io
        console.error(errorMsg, err);
      })
      .finally(() => onHandleCustomers({ status: 'finished' }));

    return () => customersRef;
  }, [filterBy]);

  return (
    <>
      <Paper className={classes.paper}>
        <Component
          dataProps={itemsData}
          handleCustomerProps={handleCustomer}
          handleLinkClickProps={handleLinkClick}
        />
      </Paper>
    </>
  );
}

export default CustomersListCallback;
