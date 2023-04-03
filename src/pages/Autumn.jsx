import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Introduction from "../components/Introduction";
import Activity from "./../components/Activity";
import Tip from "./../components/Tip";
import Gallery from "./../components/Gallery";
import Board from "./../components/Board";
import { useParams } from "react-router-dom";
import {
  introductionList,
  festivalActivityList,
  foodActivityList,
  tipList,
} from "../data/autumn";

const Autumn = ({ isDarkMode }) => {
  const { state } = useParams();
  const [autumnState, setAutumnState] = useState(state ? state : "intro");
  const [autumnPostData, setAutumnPostData] = useState([]);

  useEffect(() => {
    setAutumnState(state);
  }, [state]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setAutumnPostData(res));
  }, []);

  return (
    <div className={"autumn" + (isDarkMode ? " darkmode" : "")}>
      <div className="subpage-content">
        <div className="subpage-maincontent">
          {autumnState === "intro" && (
            <Introduction introductionList={introductionList} season="autumn" />
          )}
          {autumnState === "activity" && (
            <Activity
              festivalActivityList={festivalActivityList}
              foodActivityList={foodActivityList}
              season="autumn"
            />
          )}
          {autumnState === "tip" && <Tip tipList={tipList} season="autumn" />}
          {autumnState === "gallery" && <Gallery />}
          {autumnState === "board" && <Board springPostData={autumnPostData} />}
        </div>
      </div>
    </div>
  );
};

export default Autumn;
