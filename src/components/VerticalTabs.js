import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Tabs, Tab, Box } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    height: props => props.height || 224,
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.down('xs')]: {
      height: props => (props.height || 224) - 40,
    },
  },
  tabs: {
    minWidth: '30%',
    width: '30%',
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  tabRoot: {
    margin: 0,
    padding: 0,
  },
  tabWrapped: {
    fontSize: 12,
  },
}));

const TabPanel = ({ children, value, index, ...restProps }) => (
  <Box
    role="tabpanel"
    hidden={value !== index}
    id={`vertical-tabpanel-${index}`}
    aria-labelledby={`vertical-tab-${index}`}
    {...restProps}
  >
    {value === index && (
      <Box
        p={1}
        style={{
          height: '100%',
          overflowX: 'auto',
        }}
      >
        {children}
      </Box>
    )}
  </Box>
);

const a11yProps = index => ({
  id: `vertical-tab-${index}`,
  'aria-controls': `vertical-tabpanel-${index}`,
});

const VerticalTabs = ({ TabPanelProps, dataProps, ...rest }) => {
  const classes = useStyles(rest);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  return (
    <Box className={classes.root}>
      <Tabs
        orientation='vertical'
        variant='scrollable'
        value={value}
        onChange={handleChange}
        aria-label='Vertical tabs example'
        className={classes.tabs}
      >
        {Object.keys(dataProps).map((k, i) => {
          const item = dataProps[k];

          return (
            <Tab
              key={k}
              label={item.title ? item.title : (
                <Box key={k} p={1} width={'100%'}>
                  <Skeleton animation={false} />
                  <Skeleton animation='wave' />
                </Box>
              )}
              classes={{
                root: classes.tabRoot,
                wrapped: classes.tabWrapped,
              }}
              wrapped
              {...a11yProps(i)}
            />
          );
        })}
      </Tabs>

      {Object.keys(dataProps).map((k, i) => {
        const item = dataProps[k];

        return (
          <TabPanel
            key={k}
            value={value}
            index={i}
          >
            {item.title ? (
              <TabPanelProps.component
                {...item}
              />
            ) : (
              <Box p={1} width={210} height={180}>
                <Skeleton style={{ marginBottom: 10 }} />
                <Skeleton />
                <Skeleton animation={false} />
                <Skeleton animation='wave' width={'80%'} />
                <Skeleton animation='wave' width={'70%'} />
              </Box>
            )}
          </TabPanel>
        );
      })}
    </Box>
  );
}

export default VerticalTabs;
