import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

export const useCustomerStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  spacing: {
    margin: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(0.5),
    maxWidth: '100%',
    width: '100%',
  },
  bgPaper: {
    backgroundColor: theme.palette.background.default,
  },
  announcementHeader: {
    padding: 10,
    width: '100%',
  },
  headerLink: {
    color: grey[800],
    '&:hover': {
      color: grey[700],
      cursor: 'pointer',
    },
  },
  itemContent: {
    padding: theme.spacing(0.5),
    width: '100%',
    border: `solid 1px ${grey[200]}`,
  },
}));
