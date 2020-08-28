import React from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import fetch from 'node-fetch';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import {
  Box,
  Card,
} from '@material-ui/core';

import Layout from '~/components/Layout';
import Header from '~/components/Header';
import Footer from '~/components/Footer';

import config from '~/config';
import pageOptions from '~/modules/pageOptions/covid-19';
import fetchGlobals from '~/services/api/global-settings';

const useStyles = makeStyles(theme => ({
  containerCards: {
    width: '100%',
    alignItems: 'inherit',
    '@media (max-width: 640px)': {
      // flexDirection: 'column',
      display: 'block',
      textAlign: 'center',
    },
  },
  cardTotal: {
    overflow: 'hidden',
    position: 'relative',
    margin: 10,
    padding: 16,
    width: 'calc(50% - 20px)',
    minWidth: 300,
    border: 'solid 1px #dbe9f5',
    borderRadius: 16,
    boxShadow: '0 4px 6px 0 rgba(31, 70, 88, .04)',
    '@media (max-width: 640px)': {
      margin: '0 8px 10px',
      width: '96%',
      maxWidth: '96%',
      minWidth: '96%',
      textAlign: 'center',
    },
    '@media (max-width: 480px)': {
      margin: '0 5px 10px',
      width: 'calc(100% - 10px)',
      maxWidth: 'calc(100% - 10px) ',
      minWidth: 'calc(100% - 10px) ',
    },
  },
  width_30: {
    width: 'calc(33% - 20px)',
    maxWidth: 'calc(33% - 20px)',
  },
  width_50: {
    width: 'calc(50% - 20px)',
    maxWidth: 'calc(50% - 20px)',
  },
  width_70: {
    width: 'calc(70% - 20px)',
  },
  width_full: {
    width: 'calc(100% - 20px)',
    maxWidth: 'calc(100% - 20px)',
    minWidth: 'calc(100% - 20px)',
  },
  height_384: {
    height: 'calc(384px - 10px)',
  },
  noPadding: {
    padding: '0px 0px 16px',
  },
}));

const DynamicPanelInfo = dynamic(() => import('~/components/covid-19/PanelInfo'));
const DynamicGeneralData = dynamic(() => import('~/components/covid-19/GeneralData'));
const DynamicRegionalData = dynamic(() => import('~/components/covid-19/RegionalData'));
const DynamicCasesAroundUs = dynamic(() => import('~/components/covid-19/CasesAroundUs'));
const DynamicDailyResults = dynamic(() => import('~/components/covid-19/DailyResults'));
const DynamicWeeklyResults = dynamic(() => import('~/components/covid-19/WeeklyResults'));
const DynamicAccumulatedData = dynamic(() => import('~/components/covid-19/AccumulatedData'));

const Covid19 = props => {
  const {
    fetchedGeneralData,
    fetchedRegionalData,
    fetchedMapa,
    fetchedDailyData,
    fetchedWeeklyData,
    fetchedAccumulatedData,
    seoProps,
  } = props;

  const router = useRouter();

  const globalLabels = pageOptions.globalLabels;
  const globalSettings = pageOptions.globalSettings;
  const generalDataResults = fetchedGeneralData.results || null;
  const lastDayGeneralData = generalDataResults
    ? generalDataResults[generalDataResults.length - 1]
    : null;

  const regionalDataResults = fetchedRegionalData.results;

  const mapaResults = fetchedMapa.results;
  const selectedRegionsAround = mapaResults && mapaResults.length
    ? mapaResults.filter(item => globalSettings.regionsAroundUs.includes(item.objectId))
    : null;

  const dailyResults = fetchedDailyData.results;
  const weeklyResults = fetchedWeeklyData.results;
  const accumulatedResults = fetchedAccumulatedData.results;

  const classes = useStyles();

  return (
    <Layout
      {...props}
      hasLayoutAdjusts={true}
      routerProps={router}
      seoProps={seoProps}
    >
      <Header router={router} {...props} />

      {typeof lastDayGeneralData === "object" && (
        <DynamicPanelInfo
          {...lastDayGeneralData}
          labels={globalLabels}
          settings={globalSettings}
        />
      )}

      {typeof generalDataResults === "object" && (
        <DynamicGeneralData
          {...lastDayGeneralData}
          labels={globalLabels}
          hasLayoutAdjusts={true}
        />
      )}

      <Box
        display='flex'
        justifyContent='space-between'
        className={classes.containerCards}
      >
        <Card
          className={clsx(classes.cardTotal, classes.width_30, classes.noPadding)}
        >
          {typeof regionalDataResults === "object" && (
            <DynamicRegionalData
              data={regionalDataResults}
              labels={globalLabels}
              settings={globalSettings}
            />
          )}
        </Card>

        <Card
          className={clsx(classes.cardTotal, classes.width_70, classes.noPadding)}
        >
          {selectedRegionsAround !== null && (
            <DynamicCasesAroundUs
              data={selectedRegionsAround}
              labels={globalLabels}
            />
          )}
        </Card>
      </Box>

      <Box
        display='flex'
        justifyContent='space-between'
        className={classes.containerCards}
      >
        <Card
          className={clsx(classes.cardTotal, classes.width_50, classes.height_384, classes.noPadding)}
        >
          {typeof dailyResults === "object" && (
            <DynamicDailyResults
              data={dailyResults}
              labels={globalLabels}
            />
          )}
        </Card>

        <Card
          className={clsx(classes.cardTotal, classes.width_50, classes.height_384, classes.noPadding)}
        >
          {typeof weeklyResults === "object" && (
            <DynamicWeeklyResults
              data={weeklyResults}
              labels={globalLabels}
            />
          )}
        </Card>
      </Box>

      <Box
        display='flex'
        justifyContent='space-between'
        className={classes.containerCards}
      >
        <Card
          className={clsx(classes.cardTotal, classes.width_full, classes.height_384, classes.noPadding)}
        >
          {typeof accumulatedResults === "object" && (
            <DynamicAccumulatedData
              data={accumulatedResults}
              labels={globalLabels}
            />
          )}
        </Card>
      </Box>

      <Footer router={router} {...props} />
    </Layout>
  );
}

const runApi = async props => {
  const { uri, headers } = props;
  const reqOptions = {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  };

  // Call an external API endpoint to get data.
  const reqData = await fetch(uri, reqOptions);
  const fetchedData = await reqData.json();

  return fetchedData;
}

const fetchAccumulatedData = async props => {
  const options = {
    uri: props.uri + '/PortalAcumulo',
    headers: props.headers,
  }

  const fetchedData = await runApi(options);
  console.log('Accumulated data was fetched.');

  return fetchedData;
}

const fetchGeneralData = async props => {
  const options = {
    uri: props.uri + '/PortalGeral',
    headers: props.headers,
  }
  const fetchedData = await runApi(options);
  console.log('General data was fetched.');

  return fetchedData;
}

const fetchRegionalData = async props => {
  const options = {
    uri: props.uri + '/PortalRegiao',
    headers: props.headers,
  }

  const fetchedData = await runApi(options);
  console.log('Regional data was fetched.');

  return fetchedData;
}

const fetchMapa = async props => {
  const options = {
    uri: props.uri + '/PortalMapa',
    headers: props.headers,
  }

  const fetchedData = await runApi(options);
  console.log('Mapa data was fetched.');

  return fetchedData;
}

const fetchWeeklyData = async props => {
  const options = {
    uri: props.uri + '/PortalSemana',
    headers: props.headers,
  }

  const fetchedData = await runApi(options);
  console.log('Weekly data was fetched.');

  return fetchedData;
}

const fetchDailyData = async props => {
  const options = {
    uri: props.uri + '/PortalDias',
    headers: props.headers,
  }

  const fetchedData = await runApi(options);
  console.log('Daily data was fetched.');

  return fetchedData;
}

// This function gets called at build time
export const getServerSideProps = async () => {
  const covid19Config = config.covid19;
  const govBRprops = {
    uri: covid19Config.govBRuri,
    headers: {
      'x-parse-application-id': covid19Config.govBRappId,
    },
  };

  const fetchedGeneralData = await fetchGeneralData(govBRprops);
  const fetchedRegionalData = await fetchRegionalData(govBRprops);
  const fetchedMapa = await fetchMapa(govBRprops);
  const fetchedDailyData = await fetchDailyData(govBRprops);
  const fetchedWeeklyData = await fetchWeeklyData(govBRprops);
  const fetchedAccumulatedData = await fetchAccumulatedData(govBRprops);

  // Fetching globals data from database.
  const globalsResponse = await fetchGlobals();

  const dataProps = {
    isNotFound: false,
  };

  const page = {};

  const seoProps = {
    title: pageOptions.name,
  };

  dataProps.seoProps = seoProps;

  // By returning { props: posts }, the components
  // will receive `posts` as a prop at build time
  return {
    props: {
      fetchedGeneralData,
      fetchedRegionalData,
      fetchedMapa,
      fetchedDailyData,
      fetchedWeeklyData,
      fetchedAccumulatedData,
      ...globalsResponse,
      ...dataProps,
      page,
    },
  }
}

export default Covid19;
