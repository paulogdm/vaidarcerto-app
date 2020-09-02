import React from 'react';

import {
  ListItemAvatar,
  Avatar,
} from '@material-ui/core';

const CustomItemAvatar = ({ title }) => (
  <ListItemAvatar>
    <Avatar
      variant="square"
      style={{
        marginRight: 5,
        width: 80,
        height: 60,
      }}
    >
      {title}
    </Avatar>
  </ListItemAvatar>
);

export default CustomItemAvatar;
