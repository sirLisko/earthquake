import React from 'react';

import Filter from 'components/Filter';
import ClearFilter from 'components/ClearFilter';

const ControlBar = () => (
  <div>
    <Filter name="mag" />
    <Filter name="magType" />
    <ClearFilter />
  </div>
);

export default ControlBar;
