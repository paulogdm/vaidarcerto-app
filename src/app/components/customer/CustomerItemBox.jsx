import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Link,
  Box,
} from '@material-ui/core';

import { useCustomerStyles } from '~/assets/styles/customer';
import { itHasLength } from '~/modules/utils/objects';

import { WithAvatar, AvatarIndicator } from '~/components/customer/AvatarBox';
import TitleBox, { TitleIndicator } from '~/components/customer/TitleBox';
import PrimaryTextBox, { PrimaryTextIndicator } from '~/components/customer/PrimaryTextBox';

const CustomerItemBox = props => {
  const { dataObj, thumbProps, onHandleClick, ...rest } = props;
  const classes = useCustomerStyles();

  return (
    <>
      {!itHasLength(dataObj) ? (
        <Box
          display='flex'
          width='100%'
          className={classes.itemContent}
        >
          {!rest.noAvatar && <AvatarIndicator dimensions={thumbProps} />}

          <Box
            display='flex'
            flexDirection='column'
            width='100%'
          >
            <TitleIndicator />
            {!rest.noPrimaryText && <PrimaryTextIndicator />}
          </Box>
        </Box>
      ) : (
        <Box
          display='flex'
          alignItems='flex-start'
          component={Link}
          underline='none'
          onClick={event => onHandleClick(event, dataObj)}
          className={clsx(classes.headerLink, classes.itemContent)}
        >
          {!rest.noAvatar && (
            <Box mr={1}>
              <WithAvatar
                {...dataObj}
                dimensions={thumbProps}
              />
            </Box>
          )}
          <Box>
            <TitleBox
              styleProps={rest.titleProps}
              title={dataObj.title}
              hasPrimaryText={!rest.noPrimaryText}
            />
            {!rest.noPrimaryText && <PrimaryTextBox primaryText={dataObj.primaryText} />}
          </Box>
        </Box>
      )}
    </>
  );
}

CustomerItemBox.propTypes = {
  dataObj: PropTypes.object,
  thumbProps: PropTypes.object,
  onHandleClick: PropTypes.func.isRequired,
  noAvatar: PropTypes.bool,
  noPrimaryText: PropTypes.bool,
  titleProps: PropTypes.object,
}

export default CustomerItemBox;
