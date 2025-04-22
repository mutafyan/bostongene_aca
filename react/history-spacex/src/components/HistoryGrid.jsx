import HistoryCard from "./HistoryCard";
import "../App.css";
const HistoryGrid = ({ events = [] }) => {
  return (
    <div className="grid-container">
      {events.map(({ id, event_date_utc, ...rest }) => (
        <HistoryCard key={id} date={event_date_utc} {...rest} />
      ))}
    </div>
  );
};

export default HistoryGrid;
