import { useState, useEffect } from "react";
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
  JejuGalleryList,
  SeoulGalleryList,
  BusanGalleryList,
} from "../data/summer";

const Summer = ({ isDarkMode }) => {
  const { state } = useParams();
  const [summerState, setSummerState] = useState(state ? state : "intro");
  const [summerPostData, setsummerPostData] = useState([]);

  useEffect(() => {
    setSummerState(state);
  }, [state]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setsummerPostData(res));
  }, []);

  return (
    <div className={"summer" + (isDarkMode ? " darkmode" : "")}>
      <div className="subpage-content">
        <div className="subpage-maincontent">
          {summerState === "intro" && (
            <Introduction introductionList={introductionList} season="summer" />
          )}
          {summerState === "activity" && (
            <Activity
              festivalActivityList={festivalActivityList}
              foodActivityList={foodActivityList}
              season="summer"
            />
          )}
          {summerState === "tip" && <Tip tipList={tipList} season="summer" />}
          {summerState === "gallery" && (
            <Gallery
              JejuGalleryList={JejuGalleryList}
              SeoulGalleryList={SeoulGalleryList}
              BusanGalleryList={BusanGalleryList}
            />
          )}
          {summerState === "board" && <Board springPostData={summerPostData} />}
        </div>
      </div>
    </div>
  );
};

export default Summer;
