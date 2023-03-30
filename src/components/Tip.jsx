const TipContent = ({ season, imgNum, title, description, link }) => {
  return (
    <div className="tip-content">
      <img
        src={
          process.env.PUBLIC_URL + `/assets/tip-content-${season}-${imgNum}.jpg`
        }
        alt={title}
      />
      <div className="tip-content-text">
        <h4>{title}</h4>
        <div>{description}</div>
        <a href={link}>&raquo; Learn more</a>
      </div>
    </div>
  );
};

const Tip = ({ tipList, season }) => {
  return (
    <div className="tip">
      {tipList.map((e) => (
        <TipContent
          key={e.imgNum}
          season={season}
          imgNum={e.imgNum}
          title={e.title}
          description={e.description}
          link={e.link}
        />
      ))}
    </div>
  );
};

export default Tip;
