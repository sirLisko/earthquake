import React, { useState, useEffect } from 'react';
import { getEvents } from 'utils/earthquakeAPI';

import Filter from 'components/Filter';
import Events from 'components/Events';

function App() {
  const [events, setEvents] = useState();
  const [filter, setFilter] = useState({});
  const [error, setError] = useState();
  useEffect(() => {
    async function fetchEvents() {
      try {
        const events = await getEvents();
        setEvents(events);
        setError(false);
      } catch {
        setError(true);
      }
    }
    fetchEvents();
  }, []);

  const filteredEvents = filter.value
    ? events.filter(
        event => event.properties[filter.name].toString() === filter.value,
      )
    : events;

  if (!events) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Uops! An error occurred with the APIs</div>;
  }

  return (
    <div>
      <Filter name="mag" setFilter={setFilter} filter={filter} />
      <Filter name="magType" setFilter={setFilter} filter={filter} />
      <button onClick={() => setFilter({})} type="submit">
        clear filter
      </button>
      <Events events={filteredEvents} />
    </div>
  );
}

export default App;
