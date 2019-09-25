import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled/macro';

import { getEvents } from 'utils/earthquakeAPI';

import ControlBar from 'components/ControlBar';
import Events from 'components/Events';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => {
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
    <StyledContainer>
      <h1>Earthquake events</h1>
      <ControlBar />
      <Events events={events} />
    </StyledContainer>
  );
};

export default App;
