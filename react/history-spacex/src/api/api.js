// {
//   id: 1,
//   title: "Falcon 1 Makes History",
//   event_date_utc: "2008-09-28T23:15:00Z",
//   event_date_unix: 1222643700,
//   flight_number: 4,
//   details:
//     "Falcon 1 becomes the first privately developed liquid fuel rocket to reach Earth orbit.",
//   links: {
//     reddit: null,
//     article: "http://www.spacex.com/news/2013/02/11/flight-4-launch-update-0",
//     wikipedia: "https://en.wikipedia.org/wiki/Falcon_1",
//   },
// };
const BASE_URL = "https://api.spacexdata.com/v3/history";

export const getData = async () => {
  try {
    const res = await fetch(BASE_URL);
    const resJson = await res.json();
    if (resJson) {
      return resJson;
    } else {
      return null;
    }
  } catch (e) {
    console.log(e.message);
    throw e;
  }
};
