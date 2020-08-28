import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Grid from '@material-ui/core/Grid';

import { itHasLength } from '~/modules/utils/objects';
import { getStorageMedia } from '~/modules/firebase/services';
import fetchCustomer from '~/services/api/get-customer';
import fetchGlobals from '~/services/api/global-settings';

import Layout from '~/components/Layout';
import Header from '~/components/Header';
import Footer from '~/components/Footer';

const DynamicBusinessCardItem = dynamic(() =>
  import('~/components/BusinessCardItem')
);

const CustomersList = dynamic(() =>
  import('~/components/customer/CustomersList')
);

const getSeoProps = (props) => ({
  title: props.title,
  description: props.primaryText,
  imageGraph: props.hasLogo ? props.image : null,
  twitterCardType: 'summary_large_image',
});

const Customer = props => {
  const { customer, isNotFound, ...rest } = props;
  const [customerData, setCustomerData] = useState({
    data: customer,
    status: 'finished',
    error: null,
  });
  const seoProps = getSeoProps(customerData.data);
  const router = useRouter();

  const onHandleCustomer = newState => {
    setCustomerData(prevState => ({
      ...prevState,
      ...newState,
    }));
  }

  useEffect(() => {
    const slugQuery = router.query.slug;
    if ((customerData.data.slug !== slugQuery) && customerData.status !== 'fetching') {
      onHandleCustomer({ status: 'fetching' });

      const queryOptions = {
        label: 'slug',
        value: slugQuery,
      };
      const customersRef = fetchCustomer(queryOptions)
        .then(data => onHandleCustomer({ data }))
        .catch(err => {
          const errorMsg = 'Error getting customer data.';
          onHandleCustomer({ error: errorMsg });
          // @TODO send `err` to sentry.io
          console.error(errorMsg, err);
        })
        .finally(() => onHandleCustomer({ status: 'finished' }));

      return () => customersRef;
    }
  }, [router]);

  if (isNotFound) {
    return <p>The Ad you're looking for is not found.</p>
  }

  return (
    <Layout
      {...rest}
      routerProps={router}
      seoProps={seoProps}
    >
      <Header router={router} {...props} />

      <Grid container spacing={1} alignItems='flex-start'>
        <Grid container item xs={12} sm={8}>
          <DynamicBusinessCardItem
            item={customerData.data}
            router={router}
          />
        </Grid>

        <Grid container item xs={12} sm={4}>
          <CustomersList
            filterProps={{
              category: customerData.data,
            }}
            sectionTitle='Conteúdo relacionado para você'
            noAvatar
          />
        </Grid>
      </Grid>

      <Footer router={router} {...props} />
    </Layout>
  );
}

export const getServerSideProps = async ({ query }) => {
  const globalsResponse = await fetchGlobals();

  const dataProps = {
    isNotFound: false,
  };
  const slugQuery = query.slug;
  const queryOptions = {
    label: 'slug',
    value: slugQuery,
  };
  const customer = await fetchCustomer(queryOptions);
  if (!itHasLength(customer)) {
    dataProps.isNotFound = true;
  } else {
    if (customer.hasLogo && customer.image !== null) {
      const fetchedImage = await getStorageMedia('ads', customer.image);
      if (fetchedImage) {
        customer.image = fetchedImage;
      }
    }
  }

  return {
    props: {
      ...globalsResponse,
      ...dataProps,
      customer,
    },
  };
}

export default Customer;
