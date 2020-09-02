import React from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Grid from '@material-ui/core/Grid';

import { itHasLength } from '~/modules/utils/objects';
import fetchPost from '~/services/api/get-post';
import fetchGlobals from '~/services/api/global-settings';

import Layout from '~/components/Layout';
import Header from '~/components/Header';
import Footer from '~/components/Footer';

const CustomersList = dynamic(() =>
  import('~/components/customer/CustomersList')
);

const Tag = props => {
  const { page, seoProps, isNotFound, ...rest } = props;
  const router = useRouter();
  const querySlug = router.query.slug;

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

      <Grid container>
        <Grid container item xs={12} sm={6}>
          <CustomersList
            filterProps={{ category: querySlug }}
            sectionTitle={`Anunciantes relacionados com "${querySlug}"`}
          />
        </Grid>
      </Grid>

      <Footer router={router} {...props} />
    </Layout>
  );
}

export const getServerSideProps = async ({ query, ...rest }) => {
  const globalsResponse = await fetchGlobals();

  const dataProps = {
    isNotFound: false,
  };
  const slugQuery = '/tag/[slug]';
  const queryOptions = {
    label: 'slug',
    value: slugQuery,
  };
  const page = await fetchPost(queryOptions);
  if (!itHasLength(page)) {
    dataProps.isNotFound = true;
  } else {
    const seoProps = {
      title: page.title.replace('{tag}', query.slug),
      description: page.description.replace('{tag}', query.slug),
    };

    dataProps.seoProps = seoProps;
  }

  return {
    props: {
      ...globalsResponse,
      ...dataProps,
      page,
    },
  };
}

export default Tag;
