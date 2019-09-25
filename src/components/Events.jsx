import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import theme from 'styles/theme';

import { getCurrentFilter } from 'reducers/filter';
import { filterEvents } from 'utils/events';

const Events = ({ events }) => {
  const filter = useSelector(getCurrentFilter);
  const filteredEvents = filterEvents(events, filter);
  if (filteredEvents.length === 0) {
    return <div>Not found!</div>;
  }
  return (
    <table style={{ border: `1px solid ${theme.colors.gray_light}` }}>
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
    </table>
  );
};

export default Events;

Events.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string }))
    .isRequired,
};
