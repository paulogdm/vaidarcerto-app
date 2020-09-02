import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { Skeleton } from '@material-ui/lab';

export const PrimaryTextIndicator = () => (
  <Skeleton
    animation='wave'
    width='80%'
    height={10}
  />
);

const WithPrimaryText = ({ primaryText }) => (
  <Typography
    variant="body2"
    color="textSecondary"
    gutterBottom
  >
    {primaryText}
  </Typography>
);

WithPrimaryText.propTypes = {
  primaryText: PropTypes.string.isRequired,
}

export default WithPrimaryText;
