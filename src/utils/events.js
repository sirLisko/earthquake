export const filterEvents = (events, filter) =>
  filter.value
    ? events.filter(
        event => event.properties[filter.name].toString() === filter.value,
      )
    : events;

export default { filterEvents };
