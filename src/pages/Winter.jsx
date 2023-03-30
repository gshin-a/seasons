import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import { WinterIntroduction } from "../components/Introduction";
import Activity from "../components/Activity";
import Tip from "../components/Tip";
import Gallery from "../components/Gallery";
import Board from "../components/Board";
import { useParams } from "react-router-dom";
import {
  festivalActivityList,
  foodActivityList,
  tipList,
} from "../data/winter";

const Winter = ({ isDarkMode, setIsDarkMode }) => {
  const { state } = useParams();
  const [winterState, setWinterState] = useState(state ? state : "intro");
  const [winterPostData, setWinterPostData] = useState([]);

  useEffect(() => {
    setWinterState(state);
  }, [state]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setWinterPostData(res));
  }, []);

  return (
    <div className={"winter" + (isDarkMode ? " darkmode" : "")}>
      <div className="subpage-content">
        <div className="subpage-maincontent">
          {winterState === "intro" && <WinterIntroduction />}
          {winterState === "activity" && (
            <Activity
              festivalActivityList={festivalActivityList}
              foodActivityList={foodActivityList}
              season="winter"
            />
          )}
          {winterState === "tip" && <Tip tipList={tipList} season="winter" />}
          {winterState === "gallery" && <Gallery />}
          {winterState === "board" && <Board springPostData={winterPostData} />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Winter;
