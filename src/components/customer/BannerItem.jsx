import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Paper, Box } from '@material-ui/core';

import { useCustomerStyles } from '~/assets/styles/customer';
import { itHasLength } from '~/modules/utils/objects';

import { WithAvatar, AvatarIndicator } from '~/components/customer/AvatarBox';

const BannerItem = (props) => {
  const { dataObj, thumbProps, ...restProps } = props;
  const classes = useCustomerStyles();

  return (
    <Paper className={clsx(classes.paper, classes.bgPaper)}>
      {!itHasLength(dataObj) ? (
        <Box className={classes.spacing}>
          <AvatarIndicator dimensions={thumbProps} />
        </Box>
      ) : (
        <Box
          display='flex'
          justifyContent='center'
          className={clsx(classes.spacing, classes.headerLink)}
        >
          <WithAvatar
            {...restProps}
            title={dataObj.title}
            imageSrc={dataObj.image}
            dimensions={thumbProps}
            imgProps={{
              // @TODO Send it to sentry.io
              onError: ({ target }) => console.error('Avatar fetching error.', target),
            }}
          />
        </Box>
      )}
    </Paper>
  );
}

BannerItem.propTypes = {
  className: PropTypes.object,
  dataObj: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
  }),
  thumbProps: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  square: PropTypes.bool,
}

export default BannerItem;
