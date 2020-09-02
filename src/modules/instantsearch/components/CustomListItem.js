import React from 'react';
import dynamic from 'next/dynamic';

import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  ListItem,
  ListItemText,
  Typography,
  Chip,
} from '@material-ui/core';

import { itHasLength } from '../../utils/objects';

import Link from '../../../components/Link';

const useStyles = makeStyles(theme => ({
  listItemLink: {
    display: 'flex',

    '&:hover': {
      textDecoration: 'none',
      backgroundColor: theme.palette.grey[100],
      color: theme.palette.text.primary,
    },
  },
}));

const DynamicCustomItemAvatar = dynamic(() => import('./CustomListItemAvatar'));

const CustomListItem = props => {
  const { title, slug, primaryText, category } = props;

  const classes = useStyles();

  return (
    <ListItem
      alignItems="flex-start"
      component={React.forwardRef((props, myRef) => (
        <Link
          {...props}
          ref={myRef}
          href='/b/[slug]'
          as={`/b/${slug}`}
          color='inherit'
          className={classes.listItemLink}
        />
      ))}
    >
      <DynamicCustomItemAvatar title={title.charAt(0)} />

      <ListItemText
        primary={title}
        secondary={
          <React.Fragment>
            <Typography
              variant="body2"
              color="textSecondary"
            >
              {primaryText}
            </Typography>

            <Box>
              {itHasLength(category) && Object.values(category).map((categ, kC) => (
                <React.Fragment key={kC}>
                  <Chip
                    size="small"
                    className={classes.chip}
                    component="span"
                    label={categ}
                  />
                </React.Fragment>
              ))}
            </Box>
          </React.Fragment>
        }
        secondaryTypographyProps={{
          component: "div"
        }}
      />
    </ListItem>
  );
}

export default CustomListItem;
