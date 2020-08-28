import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Skeleton } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  titleRoot: {
    marginTop: theme.spacing(0.5),
    fontWeight: 600,
    lineHeight: 1.5,
  },
}));

export const TitleIndicator = () =>
  <Skeleton width='100%' />

const WithTitle = ({ title, hasPrimaryText, styleProps }) => {
  const classes = useStyles();

  return (
    <Typography
      variant={hasPrimaryText ? 'overline' : 'h5'}
      className={classes.titleRoot}
      style={styleProps}
    >
      {title}
    </Typography>
  );
}

WithTitle.propTypes = {
  title: PropTypes.string.isRequired,
  hasPrimaryText: PropTypes.bool,
  styleProps: PropTypes.object,
}

export default WithTitle;
