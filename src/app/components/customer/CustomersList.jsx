import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import {
  Grid,
  Typography,
  Button,
  Divider,
  Box,
} from '@material-ui/core';

import { mockArrayData } from '~/modules/utils/objects';

import { useCustomerStyles } from '~/assets/styles/customer';
import CustomerItemBox from '~/components/customer/CustomerItemBox';

const CustomersListCallback = dynamic(() =>
  import('~/components/callbacks/CustomersListCallback')
);

const ItemGrid = (props) => {
  const { itemProps, handleCustomerProps, handleLinkClickProps, ...rest } = props;
  const classes = useCustomerStyles();

  return (
    <Grid
      key={rest.key}
      container
      item
      className={classes.paper}
    >
      <CustomerItemBox
        noAvatar={rest.noAvatar}
        dataObj={itemProps}
        onHandleClick={event => {
          handleCustomerProps(itemProps);
          handleLinkClickProps(event, '/b/[slug]', `/b/${itemProps.slug}`);
        }}
      />
    </Grid>
  );
}

const CustomersList = props => {
  const { sectionTitle, filterProps, ...restProps } = props;
  const classes = useCustomerStyles();

  return (
    <>
      <CustomersListCallback filterBy={filterProps}>
        {({ dataProps, ...callbackRest }) => (
          <Grid
            container
            direction='column'
            item
            xs={12}
          >
            <Grid item xs>
              <Typography
                variant='subtitle2'
                color='secondary'
              >
                {sectionTitle}
              </Typography>
            </Grid>

            <Grid
              container
              item
              xs={12}
            >
              {Object.keys(dataProps.status === 'fetching' ? mockArrayData(5) : dataProps.data)
                .map((k, i) => (
                  <ItemGrid
                    key={k}
                    {...restProps}
                    itemProps={dataProps.data[k]}
                    {...callbackRest}
                  />
                ))
              }
            </Grid>

            <Grid item xs className={classes.spacing}>
              <Divider variant='fullWidth' />

              <Box pt={1}>
                <Button
                  variant='outlined'
                  color='primary'
                  size='small'
                  fullWidth
                >
                  Ver mais serviços
                </Button>
              </Box>
            </Grid>
          </Grid>
        )}
      </CustomersListCallback>
    </>
  );
}

CustomersList.propTypes = {
  sectionTitle: PropTypes.string,
  noAvatar: PropTypes.bool,
};

export default CustomersList;
