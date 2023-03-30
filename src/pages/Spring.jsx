import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { SpringIntroduction } from "../components/Introduction";
import Activity from "../components/Activity";
import Tip from "../components/Tip";
import Gallery from "../components/Gallery";
import Board from "../components/Board";
import Hamburger, { HamburgerSidebar } from "../components/Hamburger";
import { useParams } from "react-router-dom";
import {
  festivalActivityList,
  foodActivityList,
  tipList,
} from "../data/spring";

const Spring = ({ isDarkMode, setIsDarkMode }) => {
  const { state } = useParams();
  const [springState, setSpringState] = useState(state ? state : "intro");
  const [springPostData, setSpringPostData] = useState([]);
  const [openSidebar, setSidebar] = useState(false);

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
      <Header
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        type="spring"
      />
      {openSidebar ? (
        <HamburgerSidebar handleHamburgerClose={() => setSidebar(false)} />
      ) : (
        <Hamburger handleHamburgerOpen={() => setSidebar(true)} />
      )}
      <div className="subpage-content">
        <div className="subpage-maincontent">
          {springState === "intro" && <SpringIntroduction />}
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
