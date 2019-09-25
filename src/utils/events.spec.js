import { filterEvents } from './events';

describe('Events util', () => {
  const events = [
    {
      id: '123',
      properties: { mag: '1', place: 'foo', maagType: 'foo' },
    },
    {
      id: '111',
      properties: { mag: '999', place: 'foo', maagType: 'qwe' },
    },
    {
      id: '321',
      properties: { mag: '01', place: 'foobar', maagType: 'bar' },
    },
  ];

  it('should filter properly', () => {
    const filteredEvents = filterEvents(events, {
      name: 'place',
      value: 'foo',
    });
    expect(filteredEvents).toMatchSnapshot();
    expect(filteredEvents.length).toBe(2);
  });
});
