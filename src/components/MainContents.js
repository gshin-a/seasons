import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const MainContent1 = ({ text, imgSrc }) => {
  const navigate = useNavigate();
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
    <div className="maincontent">
      <div className="maincontent1-left">
        <div className="maincontent1-left-article">{text}</div>
        <button
          className="maincontent1-left-button"
          onClick={() => navigate("/spring")}
        >
          &raquo; go to spring
        </button>
      </div>
      <div className="maincontent1-right">
        <img src={imgSrc[imgSrcNumState]} alt="Korea" />
        <div className="maincontent1-right-button">
          <button
            className={imgSrcNumState < 1 ? "button-hidden" : ""}
            onClick={handlePrevImgSrc}
          >
            &laquo; prev
          </button>

          <button
            className={
              imgSrcNumState > imgSrc.length - 2 ? "button-hidden" : ""
            }
            onClick={handleNextImgSrc}
          >
            next &raquo;
          </button>
        </div>
      </div>
    </div>
  );
};

export const MainContent2 = ({ text, imgSrc }) => {
  return (
    <div className="maincontent">
      <div className="maincontent2-left">
        <img src={imgSrc} alt="Korea" />
      </div>
      <div className="maincontent2-right">
        <div className="maincontent2-right-article">{text}</div>
      </div>
    </div>
  );
};

MainContent1.defaultProps = {
  imgSrc: [],
};
