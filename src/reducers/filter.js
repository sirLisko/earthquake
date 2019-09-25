const initState = {};

export const FILTER_SET = 'FILTER_SET';
export const FILTER_CLEAR = 'FILTER_CLEAR';

export const setFilter = data => ({
  type: FILTER_SET,
  payload: data,
});

export const clearFilter = data => ({
  type: FILTER_CLEAR,
});

export const getCurrentFilter = state => state.filter;
export const getCurrentFilterName = state => state.filter.name;

export default (state = initState, action) => {
  switch (action.type) {
    case FILTER_CLEAR:
      return {};
    case FILTER_SET:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
