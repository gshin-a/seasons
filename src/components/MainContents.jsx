import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useScrollFadeIn from "../hooks/useScrollFadeIn";

const MainContentImageCarousel = ({ imgSrc, type }) => {
  const [imgSrcNumState, setImgSrcNumState] = useState(0);

  const handlePrevImgSrc = () => {
    const nextImgNum = imgSrcNumState - 1;
    setImgSrcNumState(nextImgNum);
  };

  const handleNextImgSrc = () => {
    const nextImgNum = imgSrcNumState + 1;
    setImgSrcNumState(nextImgNum);
  };

  return (
    <div className={type === 1 ? "maincontent1-right" : "maincontent2-left"}>
      <img src={imgSrc[imgSrcNumState]} alt="Korea" />
      <div
        className={
          type === 1 ? "maincontent1-right-button" : "maincontent2-left-button"
        }
      >
        <button
          className={imgSrcNumState < 1 ? "button-disable" : ""}
          onClick={handlePrevImgSrc}
        >
          &laquo; prev
        </button>

        <button
          className={imgSrcNumState > imgSrc.length - 2 ? "button-disable" : ""}
          onClick={handleNextImgSrc}
        >
          next &raquo;
        </button>
      </div>
    </div>
  );
};

export const MainContent1 = ({ text, imgSrc, season }) => {
  const animatedItem = useScrollFadeIn();
  const navigate = useNavigate();

  return (
    <div className="maincontent">
      <div className="maincontent1-left" {...animatedItem}>
        <div className="maincontent1-left-article">{text}</div>
        <button
          className="maincontent1-left-button"
          onClick={() => navigate(`/${season}/intro`)}
        >
          &raquo; go to {season}
        </button>
      </div>
      <MainContentImageCarousel imgSrc={imgSrc} type={1} />
    </div>
  );
};

export const MainContent2 = ({ text, imgSrc, season }) => {
  const animatedItem = useScrollFadeIn();
  const navigate = useNavigate();
  return (
    <div className="maincontent2">
      <MainContentImageCarousel imgSrc={imgSrc} type={2} />
      <div className="maincontent2-right" {...animatedItem}>
        <div className="maincontent2-right-article">{text}</div>
        <button
          className="maincontent2-right-button"
          onClick={() => navigate(`/${season}/intro`)}
        >
          &raquo; go to {season}
        </button>
      </div>
    </div>
  );
};

MainContent1.defaultProps = {
  imgSrc: [],
};

MainContent2.defaultProps = {
  imgSrc: [],
};
