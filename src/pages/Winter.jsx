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
} from "../data/winter";

const Winter = ({ isDarkMode }) => {
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
          {winterState === "intro" && (
            <Introduction introductionList={introductionList} season="winter" />
          )}
          {winterState === "activity" && (
            <Activity
              festivalActivityList={festivalActivityList}
              foodActivityList={foodActivityList}
              season="winter"
            />
          )}
          {winterState === "tip" && <Tip tipList={tipList} season="winter" />}
          {winterState === "gallery" && (
            <Gallery
              JejuGalleryList={JejuGalleryList}
              SeoulGalleryList={SeoulGalleryList}
              BusanGalleryList={BusanGalleryList}
            />
          )}
          {winterState === "board" && <Board springPostData={winterPostData} />}
        </div>
      </div>
    </div>
  );
};

export default Winter;
