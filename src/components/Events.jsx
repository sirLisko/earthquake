import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import styled from '@emotion/styled/macro';

import theme from 'styles/theme';

import { getCurrentFilter } from 'reducers/filter';
import { filterEvents } from 'utils/events';

const StyledTable = styled.table`
  width: 100%;
  max-width: 700px;
  padding: 0;
  margin: 2.5em 0;
  border-top: 5px solid ${theme.colors.accent};
  border-left: 2px solid ${theme.colors.accent};
  background: #f9f9f9;
  td,
  th {
    border-right: 2px solid ${theme.colors.accent};
    border-bottom: 2px solid ${theme.colors.accent};
    padding: 0.75em;
  }
  th {
    text-align: left;
  }
`;

const Events = ({ events }) => {
  const filter = useSelector(getCurrentFilter);
  const filteredEvents = filterEvents(events, filter);
  if (filteredEvents.length === 0) {
    return <div>Not found!</div>;
  }
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Id</th>
          <th>Place</th>
          <th>Mag</th>
          <th>MagType</th>
        </tr>
      </thead>
      <tbody>
        {filteredEvents.map(({ id, properties: { mag, place, magType } }) => (
          <tr key={id}>
            <td>{id}</td>
            <td>{place}</td>
            <td>{mag}</td>
            <td>{magType}</td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Events;

Events.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string }))
    .isRequired,
};
