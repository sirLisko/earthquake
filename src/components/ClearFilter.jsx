import React from 'react';
import { useDispatch } from 'react-redux';

import { clearFilter } from 'reducers/filter';

const ClearFilter = () => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(clearFilter())} type="submit">
      clear filter
    </button>
  );
};

export default ClearFilter;
