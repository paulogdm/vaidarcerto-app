import React from 'react';
import dynamic from 'next/dynamic';
import { connectHits } from 'react-instantsearch-dom';

import {
  List,
  Divider,
} from '@material-ui/core';

const DynamicCustomListItem = dynamic(() => import('./components/CustomListItem'));

const CustomHits = ({ hits }) => (
  <List style={{ width: '100%' }}>
    {Object.values(hits).map((hit, kI) => (
      <React.Fragment key={kI}>
        {(kI > 0) && <Divider variant="inset" component="li" />}

        <DynamicCustomListItem {...hit} />
      </React.Fragment>
    ))}
  </List>
);

const ConnectedHits = connectHits(CustomHits);

export default ConnectedHits;
