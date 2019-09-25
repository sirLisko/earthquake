import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { setFilter, getCurrentFilterName } from 'reducers/filter';

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
      <input
        type="text"
        value={value}
        placeholder={`set ${name}`}
        onChange={({ target }) => setValue(target.value)}
      />
      <button type="submit">set</button>
    </form>
  );
};

export default Filter;

Filter.propTypes = {
  name: PropTypes.string.isRequired,
};
