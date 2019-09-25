const { REACT_APP_EARTHQUAKE_API_EVENT } = process.env;

const START_TIME = '2014-01-01';
const END_TIME = '2014-01-02';

export const getEvents = text =>
  fetch(
    `${REACT_APP_EARTHQUAKE_API_EVENT}&starttime=${START_TIME}&endtime=${END_TIME}`,
  )
    .then(response => response.json())
    .then(({ features }) => features);

export default {
  getEvents,
};
