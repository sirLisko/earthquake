import { getEvents } from './earthquakeAPI';

it('should fetch earthquake events', done => {
  const fakeResponse = {
    features: { foo: 'bar' },
  };

  fetch.mockResponseOnce(JSON.stringify(fakeResponse));
  getEvents('foo').then(features => {
    expect(features).toEqual({ foo: 'bar' });
    done();
  });
});
