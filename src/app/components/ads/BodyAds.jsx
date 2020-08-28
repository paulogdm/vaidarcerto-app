import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import Paper from '@material-ui/core/Paper';

import { handleLinkClick } from '~/modules/utils/utils-nextjs';

import { useCustomerStyles } from '~/assets/styles/customer';

const CustomerItemBox = dynamic(() =>
  import('~/components/customer/CustomerItemBox')
);

const BannerItemBox = dynamic(() =>
  import('~/components/customer/BannerItem')
);

export const GoldAd = ({ itemProps, thumbDimensions, ...rest }) => (
  <BannerItemBox
    {...rest}
    dataObj={itemProps}
    thumbProps={thumbDimensions}
  />
);

GoldAd.defaultProps = {
  itemProps: {},
  thumbDimensions: {
    width: 100,
    height: 100,
  },
  square: false,
}

GoldAd.propTypes = {
  itemProps: PropTypes.object.isRequired,
  thumbDimensions: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  square: PropTypes.bool,
}

export const PremiumAd = ({ itemProps, thumbDimensions, ...rest }) => {
  const classes = useCustomerStyles();

  return (
    <Paper key={rest.key} className={classes.paper}>
      <CustomerItemBox
        dataObj={itemProps}
        thumbProps={thumbDimensions}
        noPrimaryText
        titleProps={{
          // styles ....
        }}
        onHandleClick={event =>
          handleLinkClick(event, '/b/[slug]', `/b/${itemProps.slug}`)
        }
      />
    </Paper>
  );
}

PremiumAd.propTypes = {
  itemProps: PropTypes.object.isRequired,
  thumbDimensions: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
}

export const PlatinumAd = ({ itemProps, ...rest }) => {
  const classes = useCustomerStyles();

  return (
    <Paper key={rest.key} className={classes.paper}>
      <CustomerItemBox
        dataObj={itemProps}
        onHandleClick={event =>
          handleLinkClick(event, '/b/[slug]', `/b/${itemProps.slug}`)
        }
      />
    </Paper>
  );
}

PlatinumAd.propTypes = {
  itemProps: PropTypes.object.isRequired,
}
