import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import styled from '@emotion/styled/macro';

import { setFilter, getCurrentFilterName } from 'reducers/filter';
import { StyledButton } from 'styles/basic';
import theme from 'styles/theme';

const StyledInput = styled.input`
  font-size: 1rem;
  -webkit-border-radius: 0;
  -webkit-appearance: none;
  border: 0;
  border-bottom: 2px solid ${theme.colors.accent};
  padding: 0.5rem 1rem;
  margin: 0 0 1re;
  background: #f2f2f2;
`;

const Filter = ({ name }) => {
  const dispatch = useDispatch();
  const filterSelected = useSelector(getCurrentFilterName);
  const [value, setValue] = useState('');
  useEffect(() => {
    filterSelected !== name && setValue('');
  }, [filterSelected, name]);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        dispatch(setFilter({ name, value }));
      }}
    >
      <StyledInput
        type="text"
        value={value}
        placeholder={`set ${name}`}
        onChange={({ target }) => setValue(target.value)}
      />
      <StyledButton type="submit">set</StyledButton>
    </form>
  );
};

export default Filter;

Filter.propTypes = {
  name: PropTypes.string.isRequired,
};
