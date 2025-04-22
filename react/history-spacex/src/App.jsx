import { useEffect, useState } from "react";
import "./App.css";
import { getData } from "./api/api";
import HistoryGrid from "./components/HistoryGrid";

const App = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await getData();
        console.log(res);
        if (res) setEvents(res);
      };
      fetchData();
    } catch (e) {
      setError("Sorry, something went wrong " + error);
    }
  }, []);

  return (
    <div>
      <h1>SpaceX History</h1>
      {error ? <strong color="red">{error}</strong > : <HistoryGrid events={events} /> }
    </div>
  );
};

export default App;
