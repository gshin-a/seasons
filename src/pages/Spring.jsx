import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Introduction from "../components/Introduction";
import Activity from "../components/Activity";
import Tip from "../components/Tip";
import Gallery from "../components/Gallery";
import Board from "../components/Board";
import { useParams } from "react-router-dom";
import {
  introductionList,
  festivalActivityList,
  foodActivityList,
  tipList,
} from "../data/spring";

const Spring = ({ isDarkMode }) => {
  const { state } = useParams();
  const [springState, setSpringState] = useState(state ? state : "intro");
  const [springPostData, setSpringPostData] = useState([]);

  useEffect(() => {
    setSpringState(state);
  }, [state]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setSpringPostData(res));
  }, []);

  return (
    <div className={"spring" + (isDarkMode ? " darkmode" : "")}>
      <div className="subpage-content">
        <div className="subpage-maincontent">
          {springState === "intro" && (
            <Introduction introductionList={introductionList} season="spring" />
          )}
          {springState === "activity" && (
            <Activity
              festivalActivityList={festivalActivityList}
              foodActivityList={foodActivityList}
              season="spring"
            />
          )}
          {springState === "tip" && <Tip tipList={tipList} season="spring" />}
          {springState === "gallery" && <Gallery />}
          {springState === "board" && <Board springPostData={springPostData} />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Spring;
