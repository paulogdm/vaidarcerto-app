import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import itemsData from '../mocks/items-data';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: '50ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

const BusinessItemsList = props => {
  const history = useHistory();
  const classes = useStyles();

  const handleItemDataProps = (event, item) => {
    history.push({
      pathname: `/b/${item.slug}`,
      state: item,
    });
  }

  return (
    <List className={classes.root}>
      {itemsData.map((item, kI) => (
        <React.Fragment key={kI}>
          {(kI > 0) && <Divider variant="inset" component="li" />}

          <ListItem
            alignItems="flex-start"
            button
            onClick={event => handleItemDataProps(event, item)}
          >
            <ListItemAvatar>
              <Avatar
                variant="square"
                alt={item.title}
                src={`/static/images/avatar/${item.image}`}
                style={{
                  marginRight: 5,
                  width: 80,
                  height: 60,
                }}
              />
            </ListItemAvatar>

            <ListItemText
              primary={item.title}
              secondary={
                <React.Fragment>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                  >
                    {item.primaryText}
                  </Typography>

                  {/* Description below of subtitle */}
                  <Typography
                    component="span"
                    variant="subtitle2"
                  >
                    {item.secondaryText.spanTwo}
                  </Typography>

                  <Box>
                    {item.category.map((categ, kC) => (
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
        </React.Fragment>
      ))}
    </List>
  );
}

export default BusinessItemsList;
