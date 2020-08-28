import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Popper from '@material-ui/core/Popper';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles((theme) => ({
  paper: {
    border: '1px solid',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}));

const SocialShareButton = props => {
  const { children } = props;

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const isOpen = Boolean(anchorEl);
  const buttonId = isOpen ? 'simple-popper' : undefined;

  return (
    <Box>
      <IconButton
        aria-label="Share to social"
        aria-describedby={buttonId}
        onClick={handleClick}
      >
        <ShareIcon />
      </IconButton>

      <Popper id={buttonId} open={isOpen} anchorEl={anchorEl}>
        <div className={classes.paper}>
          {children}
        </div>
      </Popper>
    </Box>
  );
}

export default SocialShareButton;
