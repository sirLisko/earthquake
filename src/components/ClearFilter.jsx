import React from 'react';
import { useDispatch } from 'react-redux';

import { clearFilter } from 'reducers/filter';

import { StyledButton } from 'styles/basic';

const ClearFilter = () => {
  const dispatch = useDispatch();
  return (
    <StyledButton onClick={() => dispatch(clearFilter())} type="submit">
      clear filter
    </StyledButton>
  );
};

export default ClearFilter;
