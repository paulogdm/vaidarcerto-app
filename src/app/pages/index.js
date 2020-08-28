import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { Grid, Typography } from '@material-ui/core';
import AnnouncementOutlinedIcon from '@material-ui/icons/AnnouncementOutlined';

import { itHasLength } from '~/modules/utils/objects';

import fetchPost from '~/services/api/get-post';
import fetchGlobals from '~/services/api/global-settings';

import { useCustomerStyles } from '~/assets/styles/customer';
import Layout from '~/components/Layout';
import Header from '~/components/Header';
import {
  GoldAd,
  PremiumAd,
  PlatinumAd,
} from '~/components/ads/BodyAds';
import Footer from '~/components/Footer';

const DynamicSegmentsList = dynamic(() =>
  import('~/components/SegmentList')
);

const CustomersList = dynamic(() =>
  import('~/components/customer/CustomersList')
);

const goldMocked = [
  { title: 'Gold 01 - Banner', image: '' },
  { title: 'Gold 02 - Banner', image: '' },
]

const premiumMocked = [
  {
    title: 'Premium 01 - Anúncio',
    image: '',
  },
  {
    title: 'Premium 02 - Anúncio',
    image: '',
  },
];

const platinumMocked = [
  {
    title: 'Platinum 01 - Anúncio',
    primaryText: 'Frase marcante da sua empresa',
    image: '',
  },
  {
    title: 'Platinum 02 - Anúncio',
    primaryText: 'Frase marcante da sua empresa',
    image: '',
  },
];

const Home = props => {
  const { page, seoProps, isNotFound, ...rest } = props;
  const router = useRouter();
  const classes = useCustomerStyles();

  if (isNotFound) {
    return <p>The page you're looking for was not found.</p>
  }

  return (
    <Layout
      {...rest}
      routerProps={router}
      seoProps={seoProps}
    >
      <Header router={router} {...props} />

      <DynamicSegmentsList
        routerProps={router}
      />

      <Grid
        container
        alignItems='flex-start'
      >
        <Grid container item xs={12} sm={8}>
          <Grid
            container
            direction='row'
            spacing={1}
            item
            xs={12}
            className={classes.announcementHeader}
          >
            <AnnouncementOutlinedIcon />

            <Typography
              variant='subtitle1'
              gutterBottom
            >
              Anunciantes que acreditam no nosso trabalho
            </Typography>
          </Grid>

          <Grid container spacing={1} item xs={12}>
            <Grid
              container
              spacing={1}
              item
              xs={12}
            >
              {Object.keys(goldMocked).map((k, i) => (
                <Grid key={k} item xs>
                  <GoldAd
                    itemProps={goldMocked[k]}
                    thumbDimensions={{
                      width: 240,
                      height: 140,
                    }}
                    square
                  />
                </Grid>
              ))}
            </Grid>

            <Grid
              container
              direction='column'
              spacing={1}
              item
              xs={12}
            >
              {Object.keys(premiumMocked).map((k, i) => (
                <Grid key={k} item xs>
                  <PremiumAd
                    key={k}
                    itemProps={premiumMocked[k]}
                    thumbDimensions={{
                      width: 60,
                      height: 60,
                    }}
                  />
                </Grid>
              ))}
            </Grid>

            <Grid container spacing={1} item xs={12}>
              {Object.keys(platinumMocked).map((k, i) => (
                <Grid key={k} item xs>
                  <PlatinumAd
                    key={k}
                    itemProps={platinumMocked[k]}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <Grid container item xs={12} sm={4}>
          <CustomersList
            sectionTitle='Anunciantes trabalhando por você'
            noAvatar
          />
        </Grid>
      </Grid>

      <Footer router={router} {...props} />
    </Layout>
  );
}

export const getStaticProps = async (context) => {
  const { req, res, query, ...rest } = context;

  const globalsResponse = await fetchGlobals();

  const dataProps = {
    isNotFound: false,
  };
  const slugQuery = '/';
  const queryOptions = {
    label: 'slug',
    value: slugQuery,
  };
  const page = await fetchPost(queryOptions);
  if (!itHasLength(page)) {
    dataProps.isNotFound = true;
  } else {
    const seoProps = {
      title: page.title,
      description: page.description,
    };

    dataProps.seoProps = seoProps;
  }

  return {
    props: {
      ...globalsResponse,
      ...dataProps,
      page,
    },
    revalidate: 300,
  };
}

export default Home;
