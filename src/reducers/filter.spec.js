import reducer, * as duck from './filter';

describe('Filter Actions', () => {
  it('should create set filter', () => {
    const payload = { foo: 123 };
    const action = duck.setFilter(payload);
    expect(action.type).toEqual(duck.FILTER_SET);
    expect(action.payload).toEqual(payload);
  });

  it('should create clear filter', () => {
    const action = duck.clearFilter();
    expect(action.type).toEqual(duck.FILTER_CLEAR);
  });
});

describe('Filter Selectors', () => {
  it('should getCurrentFilter work properly', () => {
    expect(duck.getCurrentFilter({ filter: { foo: 'bar' } })).toEqual({
      foo: 'bar',
    });
  });
  it('should getCurrentFilterName work properly', () => {
    expect(duck.getCurrentFilterName({ filter: { name: 'foo' } })).toEqual(
      'foo',
    );
  });
});

describe('Filter Reducer', () => {
  it('returns a state object', () => {
    const result = reducer(undefined, { type: 'ANYTHING' });
    expect(result).toBeDefined();
    expect(result).toEqual({});
  });

  it('should set filter', () => {
    const startState = { foo: 'bar' };
    const expectedState = { foo: 'foo', foobar: 123 };
    const action = {
      type: 'FILTER_SET',
      payload: { foo: 'foo', foobar: 123 },
    };
    const result = reducer(startState, action);
    expect(result).toEqual(expectedState);
  });
});
