import "../App.css";
const HistoryCard = ({ title = "", details = "", date, links }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>
        <strong>{new Date(date).toLocaleDateString()}</strong>
      </p>
      <p>{details.length > 200 ? details.slice(0, 200) + "..." : details}</p>
      <div className="links">
        {links.article && (
          <a href={links.article} target="_blank">
            Read article
          </a>
        )}
        {links.wikipedia && (
          <a href={links.wikipedia} target="_blank">
            Wiki
          </a>
        )}
        {links.reddit && (
          <a href={links.reddit} target="_blank">
            Reddit
          </a>
        )}
      </div>
    </div>
  );
};

export default HistoryCard;
