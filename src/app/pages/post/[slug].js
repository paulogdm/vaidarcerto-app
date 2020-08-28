import React from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
} from '@material-ui/core';

import { itHasLength } from '~/modules/utils/objects';

import fetchPost from '~/services/api/get-post';
import fetchGlobals from '~/services/api/global-settings';

import Layout from '~/components/Layout';
import Header from '~/components/Header';
import Footer from '~/components/Footer';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(0.5, 2),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(0.5),
    },
  },
}));

const DynamicMarkdown = dynamic(() => import('react-markdown'));

const PostCardItem = props => {
  const { title, slug, primaryText, secondaryText } = props;

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        title={title}
        subheader={primaryText}
      />

      <CardContent className={classes.content}>
        <Typography
          component='div'
          className={classes.mBottom}
          variant="body2"
          color="textSecondary"
        >
          {secondaryText.spanOne}
        </Typography>

        <Typography
          className={classes.mBottom}
          variant="body2"
          color="textSecondary"
          component="div"
        >
          <DynamicMarkdown source={secondaryText.spanTwo} />
        </Typography>
      </CardContent>
    </Card>
  );
}

const PostItem = props => {
  const { page, seoProps, isNotFound, ...rest } = props;
  const router = useRouter();

  if (isNotFound) {
    return <p>The Ad you're looking for is not found.</p>
  }

  return (
    <Layout
      {...rest}
      routerProps={router}
      seoProps={seoProps}
    >
      <Header router={router} {...rest} />

      <PostCardItem {...page} />

      <Footer router={router} {...rest} />
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
  const page = await fetchPost(queryOptions);
  if (!itHasLength(page)) {
    dataProps.isNotFound = true;
  } else {
    const seoProps = {
      title: page.title,
      description: page.primaryText,
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

export default PostItem;
