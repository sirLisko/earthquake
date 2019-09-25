import React, { useState, useEffect } from 'react';

import { getEvents } from 'utils/earthquakeAPI';

import ControlBar from 'components/ControlBar';
import Events from 'components/Events';

function App() {
  const [events, setEvents] = useState();
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

  if (!events) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Uops! An error occurred with the APIs</div>;
  }

  return (
    <div>
      <ControlBar />
      <Events events={events} />
    </div>
  );
}

export default App;
