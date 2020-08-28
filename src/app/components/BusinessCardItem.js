import React, { useState } from 'react';
import dynamic from 'next/dynamic';

import { makeStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import {
  Place as PlaceIcon,
  Phone as PhoneIcon,
} from '@material-ui/icons';
import {
  Snackbar,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Avatar,
  Typography,
  Box,
  Divider,
} from '@material-ui/core';
import { Alert as MuiAlert } from '@material-ui/lab';

import getConfig from '~/config';

const DynamicMarkdown = dynamic(() => import('react-markdown'));
const DynamicTagsBox = dynamic(() => import('./TagsBox'));
const DynamicCardActions = dynamic(() => import('./CustomCardActions'));

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  media: {
    height: 0,
    paddingTop: '45%', // 1:9
    backgroundSize: 'contain',
    [theme.breakpoints.down('xs')]: {
      height: 180,
    },
  },
  avatar: {
    backgroundColor: red[500],
  },
  content: {},
  mTop: {
    marginTop: 10,
  },
  mBottom: {
    marginBottom: 10,
  },
  pTop: {
    paddingTop: 10,
  },
  pBottom: {
    paddingBottom: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  spaceRight: {
    marginRight: 2,
  },
  smallSpacer: {
    margin: 2,
  },
}));

const Alert = props =>
  <MuiAlert elevation={6} variant="filled" {...props} />;

const configLabels = {
  phone: 'Telefone:',
  copyLink: 'Copiar link',
  commercialText: 'Gostaria de mais informações sobre ',
};

const hasValue = address =>
  (address !== undefined && address !== null && address.length > 0);

const BusinessCardItem = props => {
  const { item, router } = props;
  const globalSettings = getConfig.globalSettings;
  const [isAlertOpened, setAlertOpened] = useState(false);

  const classes = useStyles();

  const handleAlertClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setAlertOpened(false);
  }

  return (
    <React.Fragment>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {item.title.charAt(0)}
            </Avatar>
          }
          title={item.title}
          subheader={item.primaryText}
        />

        {(Boolean(item.hasLogo) && String(item.image) !== null) && (
          <CardMedia
            className={classes.media}
            image={item.image}
            title={item.title}
          />
        )}

        <CardContent className={classes.content}>
          <Typography
            className={classes.mBottom}
            variant="body2"
            color="textSecondary"
            component="div"
          >
            <DynamicMarkdown source={item.secondaryText} />
          </Typography>

          <Divider />

          <Box mt={1}>
            {hasValue(item.address) && (
              <Box display="flex">
                <Typography display="inline" className={classes.spaceRight}>
                  <PlaceIcon color="action" fontSize="small" />
                </Typography>

                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="span"
                >
                  {item.address}
                </Typography>
              </Box>
            )}

            {(typeof item.phone !== 'undefined') && (
              <Box
                display="flex"
                className={classes.mBottom}
              >
                <Typography display="inline" className={classes.spaceRight}>
                  <PhoneIcon color="action" fontSize="small" />
                </Typography>

                <Typography
                  className={classes.bold}
                  variant="body2"
                  color="textSecondary"
                  component="span"
                >
                  {configLabels.phone}
                </Typography>

                <div className={classes.smallSpacer} />

                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="span"
                >
                  {item.phone}
                </Typography>
              </Box>
            )}
          </Box>

          <DynamicTagsBox
            dataObj={item}
            route={{
              pathname: '/tag/[slug]',
              href: '/tag/{param}',
            }}
          />

          <Snackbar
            open={isAlertOpened}
            autoHideDuration={3000}
            onClose={handleAlertClose}
          >
            <Alert
              onClose={handleAlertClose}
              severity="success"
            >
              Link copied
            </Alert>
          </Snackbar>
        </CardContent>

        {Boolean(globalSettings !== null) && (
          <DynamicCardActions
            globalSettings={globalSettings}
            routerProps={router}
            itemProps={item}
            commercialText={configLabels.commercialText + item.category.join(', ')}
            handleAlertOpened={setAlertOpened}
            labels={configLabels}
          />
        )}
      </Card>
    </React.Fragment>
  );
}

export default BusinessCardItem;
