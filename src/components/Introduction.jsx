import { useNavigate } from "react-router-dom";

const Introduction = ({ introductionList, season }) => {
  const navigate = useNavigate();
  return (
    <div className="intro">
      {introductionList.map(({ id, title, description }, idx) => (
        <div key={id} className="intro-section">
          {idx === 0 ? <h1>{title}</h1> : <h2>{title}</h2>}
          <div style={{ whiteSpace: "pre-line" }}>{description}</div>
          {idx === 3 && (
            <button onClick={() => navigate("/spring/activity")}>
              &raquo; look into more about{" "}
              {season.charAt(0).toUpperCase() + season.slice(1)} Festival and
              Events
            </button>
          )}
          {idx === 4 && (
            <button onClick={() => navigate("/spring/activity")}>
              &raquo; look into more about{" "}
              {season.charAt(0).toUpperCase() + season.slice(1)} Food and
              Cuisine
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Introduction;
