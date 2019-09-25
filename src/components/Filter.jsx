import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Filter = ({ name, setFilter, filter }) => {
  const [value, setValue] = useState('');
  useEffect(() => {
    filter.name !== name && setValue('');
  }, [filter.name, name]);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        setFilter({ name, value });
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
  setFilter: PropTypes.func.isRequired,
  filter: PropTypes.shape({ name: PropTypes.string }).isRequired,
};
