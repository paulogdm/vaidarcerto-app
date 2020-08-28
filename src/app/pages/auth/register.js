import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import NumberFormat from 'react-number-format';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Typography,
  Paper,
  Button,
  InputAdornment,
} from '@material-ui/core';
import { Skeleton, Autocomplete } from '@material-ui/lab';

import { cleanDigits } from '~/modules/utils/strings';
import { itHasLength } from '~/modules/utils/objects';

import fetchCategories from '~/services/api/get-categories';
import fetchPost from '~/services/api/get-post';
import fetchGlobals from '~/services/api/global-settings';
import createAd from '~/services/api/customers/create';

import Layout from '~/components/Layout';
import Header from '~/components/Header';
import TextField from '~/components/form/TextField';
import Footer from '~/components/Footer';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(1),
    padding: theme.spacing(3),
  },
  alignRight: {
    alignSelf: 'flex-end',
    textAlign: 'right',
  },
  inputRoot: {
    paddingTop: theme.spacing(1.5),
  },
  labelToInputSpaces: {
    marginTop: 0,
    [theme.breakpoints.down('xs')]: {
      marginTop: 30,
    },
  },
  chipRoot: {
    margin: theme.spacing(0.5),
  },
}));

const DynamicSnackbar = dynamic(() => import('~/components/Snackbar'));

const hasValue = (arr, key, prop) =>
  (arr[key] && arr[key][prop]) && arr[key][prop].length > 0 ? arr[key][prop] : false;

const DigitsOnlyCustom = ({ inputRef, ...other }) => (
  <NumberFormat
    {...other}
    format={other.format}
    mask="_"
  />
);

const CharsCountAdortment = ({ obj, ...other }) => (
  <InputAdornment
    {...other}
  >
    {obj.value && obj.value.length || 0}
    {'/'}
    {obj.lengthDesired.max}
  </InputAdornment>
);

const PageContent = props => {
  const {
    fields,
    requiredFieldsLabel,
    submitLabel,
    errorMessage,
    successMessage,
    analysisMessage,
  } = props;

  const [values, setValues] = useState(fields);
  const [formErrors, setFormErrors] = useState({});
  const [isSending, setSending] = useState(false);
  const [isAlertOpened, setOpenAlert] = useState(false);
  const [isBlockedButton, setBlockedButton] = useState(false);
  const [alertMessage, setAlertMessage] = useState({});

  const classes = useStyles();

  const handleChange = (event) => {
    const newObj = {
      [event.target.name]: {
        ...values[event.target.name],
        value: event.target.value,
      },
    };

    setValues({
      ...values,
      ...newObj,
    });
  };

  const onFormErrors = (newObj) => {
    setFormErrors(newObj);
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();

    const newObjValues = {};
    const newObjErrors = {};

    // Checking for type of inputs..
    Object.keys(values).map(kI => {
      if (hasValue(values, kI, 'value')) {
        let _tempValue = values[kI].value;

        if (values[kI].type === 'tel') {
          _tempValue = cleanDigits(values[kI].value)
          if (!_tempValue)
            newObjErrors[kI] = { unclean : true };
        }

        // In case there's a value after all, try to check its length..
        if (_tempValue.length < values[kI].lengthDesired.min) {
          newObjErrors[kI] = { notMin : true };
        } else if (_tempValue.length > values[kI].lengthDesired.max) {
          newObjErrors[kI] = { exceedMax : true };
        } else {
          newObjValues[kI] = _tempValue;
        }

      // In case it doesn't has a value but it's a required field..
      } else if (values[kI].required) {
        newObjErrors[kI] = { required : true };
      }

      return kI;
    });

    // check for any errors...
    if (Object.keys(newObjErrors).length > 0) {
      onFormErrors(newObjErrors);
    } else {
      onFormErrors({});
      setSending(true);
      setBlockedButton(true);

      setOpenAlert(true);
      setAlertMessage({ type: 'info', text: 'Loading...' });

      // Submit the form data...
      createAd({
        body: JSON.stringify(newObjValues),
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then(result => setAlertMessage({ type: 'success', text: successMessage }))
        .catch(err => setAlertMessage({ type: 'error', text: errorMessage }))
        .finally(() => {
          setSending(false);
          setBlockedButton(false);
        });
    }
  };

  const handleClose = () => {
    setOpenAlert(false);
    setBlockedButton(false);
  }

  const {
    title,
    primaryText,
    secondaryText,
    inCharge,
    idCard,
    phone,
    email,
    category,
    address,
    placeLink,
    whatsApp,
    telegram,
  } = values;

  return (
    <Box component='main'>
      {(!alertMessage || alertMessage.type !== 'success') && (
        <Box className={clsx(classes.root, classes.alignRight)}>
          <Typography
            variant='subtitle2'
            gutterBottom
          >
            {requiredFieldsLabel}
          </Typography>

          <Box className={classes.root}>
            <Box
              display='flex'
              width='100%'
            >
              <TextField
                id='title'
                name='title'
                error={Boolean(formErrors.title)}
                label={title.titleLabel}
                onChange={handleChange}
                helperText={title.titleInfo}
                placeholder={title.placeholder}
                fullWidth
                margin='dense'
                required={title.required}
                shrink
                inputProps={{
                  maxLength: title.lengthDesired.max,
                }}
                InputEndAdornment={
                  <CharsCountAdortment obj={title} />
                }
              />

              <TextField
                id='primaryText'
                name='primaryText'
                error={Boolean(formErrors.primaryText)}
                label={primaryText.titleLabel}
                onChange={handleChange}
                placeholder={primaryText.placeholder}
                helperText={primaryText.titleInfo}
                fullWidth
                margin='dense'
                required={primaryText.required}
                shrink
                inputProps={{
                  maxLength: primaryText.lengthDesired.max,
                }}
                InputEndAdornment={
                  <CharsCountAdortment obj={primaryText} />
                }
              />
            </Box>

            <Box
              display='flex'
              mt={1}
              width='100%'
            >
              <TextField
                id='secondaryText'
                name='secondaryText'
                error={Boolean(formErrors.secondaryText)}
                label={secondaryText.titleLabel}
                onChange={handleChange}
                style={{ width: '100%' }}
                placeholder={secondaryText.titleInfo}
                multiline
                rows={2}
                rowsMax={4}
                required={secondaryText.required}
                helperText={secondaryText.titleInfo}
                margin='normal'
                shrink
                inputProps={{
                  maxLength: secondaryText.lengthDesired.max,
                }}
                InputEndAdornment={
                  <CharsCountAdortment obj={secondaryText} />
                }
              />
            </Box>

            <Box
              display='flex'
              mt={1}
              width='100%'
            >
              <TextField
                id='inCharge'
                name='inCharge'
                error={Boolean(formErrors.inCharge)}
                label={inCharge.titleLabel}
                onChange={handleChange}
                style={{ width: '50%' }}
                required={inCharge.required}
                margin='normal'
                shrink
                inputProps={{
                  maxLength: inCharge.lengthDesired.max,
                }}
                InputEndAdornment={
                  <CharsCountAdortment obj={inCharge} />
                }
              />

              <TextField
                id='idCard'
                name='idCard'
                error={Boolean(formErrors.idCard)}
                label={idCard.titleLabel}
                onChange={handleChange}
                style={{ width: '50%' }}
                required={idCard.required}
                helperText={idCard.titleInfo}
                margin='normal'
                shrink
                inputProps={{
                  maxLength: idCard.lengthDesired.max,
                }}
                InputEndAdornment={
                  <CharsCountAdortment obj={idCard} />
                }
              />
            </Box>

            <Box
              display='flex'
              width='100%'
            >
              <TextField
                id='phone'
                name='phone'
                error={Boolean(formErrors.phone)}
                label={phone.titleLabel}
                onChange={handleChange}
                style={{ width: '50%' }}
                helperText={phone.titleInfo}
                required={phone.required}
                type={phone.type}
                margin='normal'
                required={phone.required}
                shrink
                InputProps={{
                  inputComponent: DigitsOnlyCustom,
                  inputProps: {
                    format: phone.format,
                    allowEmptyFormatting: phone.showMask,
                  },
                }}
              />

              <TextField
                id='email'
                name='email'
                error={Boolean(formErrors.email)}
                label={email.titleLabel}
                onChange={handleChange}
                style={{ width: '50%' }}
                helperText={email.titleInfo}
                type='email'
                required={email.required}
                margin='normal'
                shrink
                inputProps={{
                  maxLength: email.lengthDesired.max,
                }}
                InputEndAdornment={
                  <CharsCountAdortment obj={email} />
                }
              />
            </Box>

            <Box
              display='flex'
              mt={1}
              width='100%'
            >
              <Autocomplete
                id='category'
                multiple
                size='small'
                classes={{
                  inputRoot: classes.inputRoot,
                }}
                onChange={(event, newValue) => {
                  setValues({
                    ...values,
                    category: {
                      ...values.category,
                      value: newValue,
                    }
                  });
                }}
                style={{ display: 'flex', width: '100%' }}
                options={category.categoriesList}
                defaultValue={category.defaultValues}
                filterSelectedOptions
                ChipProps={{
                  size: 'medium',
                  classes: {
                    root: classes.chipRoot,
                  }
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant='standard'
                    name='category'
                    error={Boolean(formErrors.category)}
                    label={category.titleLabel}
                    placeholder={category.placeholder}
                    margin='normal'
                    helperText={category.titleInfo}
                    shrink
                  />
                )}
              />
            </Box>

            <Box
              display='flex'
              mt={1}
              width='100%'
            >
              <TextField
                id='address'
                name='address'
                error={Boolean(formErrors.address)}
                label={address.titleLabel}
                onChange={handleChange}
                style={{ width: '50%' }}
                helperText={address.titleInfo}
                margin='dense'
                shrink
                inputProps={{
                  maxLength: address.lengthDesired.max,
                }}
                InputEndAdornment={
                  <CharsCountAdortment obj={address} />
                }
              />

              <TextField
                id='placeLink'
                name='placeLink'
                error={Boolean(formErrors.placeLink)}
                onChange={handleChange}
                label={placeLink.titleLabel}
                style={{ width: '50%' }}
                helperText={placeLink.titleInfo}
                margin='dense'
                shrink
                inputProps={{
                  maxLength: placeLink.lengthDesired.max,
                }}
                InputEndAdornment={
                  <CharsCountAdortment obj={placeLink} />
                }
              />
            </Box>

            <Box
              display='flex'
              my={2}
              width='100%'
            >
              <TextField
                id='whatsApp'
                name='whatsApp'
                error={Boolean(formErrors.whatsApp)}
                label={whatsApp.titleLabel}
                onChange={handleChange}
                style={{ width: '50%' }}
                type={whatsApp.type}
                helperText={whatsApp.titleInfo}
                margin='normal'
                required={whatsApp.required}
                shrink
                InputProps={{
                  inputComponent: DigitsOnlyCustom,
                  inputProps: {
                    format: whatsApp.format,
                    allowEmptyFormatting: whatsApp.showMask,
                    className: classes.labelToInputSpaces,
                  },
                }}
              />

              <TextField
                id='telegram'
                name='telegram'
                error={Boolean(formErrors.telegram)}
                label={telegram.titleLabel}
                onChange={handleChange}
                style={{ width: '50%' }}
                placeholder={telegram.username}
                helperText={telegram.titleInfo}
                margin='normal'
                shrink
                inputProps={{
                  maxLength: telegram.lengthDesired.max,
                }}
                InputEndAdornment={
                  <CharsCountAdortment obj={telegram} />
                }
              />
            </Box>
          </Box>

          <Button
            variant='contained'
            color='primary'
            className={classes.alignRight}
            style={{ margin: 20, width: 200 }}
            onClick={onHandleSubmit}
            disabled={isBlockedButton}
          >
            {submitLabel}
          </Button>
        </Box>
      )}

      <DynamicSnackbar
        open={isAlertOpened}
        onClose={handleClose}
        messageClass={alertMessage !== null && alertMessage.type || 'info'}
        message={alertMessage !== null && alertMessage.text}
      />

      {(alertMessage && alertMessage.type === 'success') && (
        <Box
          className={classes.root}
          justifyContent='center'
          p={4}
          minHeight={200}
          width='100%'
        >
          <Typography variant='subtitle1'>
            {analysisMessage}
          </Typography>
        </Box>
      )}
    </Box>
  );
}

const AuthRegister = props => {
  const { page, seoProps, isNotFound, ...rest } = props;
  const router = useRouter();
  const [categoriesList, setCategories] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [pageOptions, setPageOptions] = useState(page);
  const classes = useStyles();

  useEffect(() => {
    if (!Boolean(isNotFound)) {
      fetchCategories()
        .then(result => setCategories(result))
        .catch(err => {
          console.error('Fetching categories list: ', err);
          setCategories([]);
        })
        .finally(() => setLoading(false));
    }
  }, [isNotFound]);

  useEffect(() => {
    if (itHasLength(categoriesList)) {
      const { fields, requiredFieldsLabel, submitLabel, ...pageRest } = page;

      // Define a new property to `category`..
      fields.category.categoriesList = categoriesList.tagsList;

      const globalLabels = {
        fields,
        requiredFieldsLabel,
        submitLabel,
        errorMessage: pageRest.errorMessage,
        successMessage: pageRest.successMessage,
        analysisMessage: pageRest.analysisMessage,
      };

      const pageOptions = {
        globalLabels,
        title: pageRest.title,
        slug: pageRest.slug,
      }

      setPageOptions(pageOptions);
    }
  }, [router.query, categoriesList]);

  if (!itHasLength(pageOptions) || isNotFound) {
    return <p>The Register page you're looking for was not found.</p>
  }

  return (
    <Layout
      {...props}
      routerProps={router}
      seoProps={seoProps}
    >
      <Header router={router} {...props} />

      <Paper
        elevation={3}
        className={classes.paper}
      >
        {(itHasLength(pageOptions) && itHasLength(pageOptions.globalLabels))
          ? (
            <PageContent {...pageOptions.globalLabels} />
          ) : (
            <Box className={clsx(classes.root, classes.alignRight)}>
              <Box
                display='flex'
                alignSelf='flex-end'
                width='90%'
              >
                <Skeleton variant='text' width={'100%'} height={50} />
              </Box>

              <Box
                display='flex'
                flexDirection='column'
                mt={2}
                width='100%'
              >
                <Box pb={1} w={'50%'}>
                  <Skeleton variant='rect' height={30} />
                  <Skeleton variant='rect' height={30} />
                </Box>

                <Box pb={1} w={'50%'}>
                  <Skeleton variant='rect' height={30} />
                  <Skeleton variant='rect' height={30} />
                </Box>

                <Skeleton variant='rect' animation='wave' height={30} />
                <Skeleton variant='rect' height={30} />
                <Skeleton variant='rect' height={30} />
              </Box>
            </Box>
          )}
      </Paper>

      <Footer router={router} {...props} />
    </Layout>
  );
}

export const getServerSideProps = async ({ query }) => {
  const globalsResponse = await fetchGlobals();

  const dataProps = {
    isNotFound: false,
  };
  const slugQuery = 'auth/register';
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
  };
}

export default AuthRegister;
