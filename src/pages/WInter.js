import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { WinterIntroduction } from "../components/Introduction";
import Activity from "../components/Activity";
import Tip from "../components/Tip";
import Gallery from "../components/Gallery";
import Board from "../components/Board";
import Hamburger, { HamburgerSidebar } from "../components/Hamburger";
import { useParams } from "react-router-dom";
import { festivalActivityList, foodActivityList } from "../data/spring";

const Winter = ({ isDarkMode, setIsDarkMode }) => {
  const { state } = useParams();
  const [winterState, setWinterState] = useState(state ? state : "intro");
  const [winterPostData, setWinterPostData] = useState([]);
  const [openSidebar, setSidebar] = useState(false);

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
      <Header
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        type="winter"
      />
      {openSidebar ? (
        <HamburgerSidebar handleHamburgerClose={() => setSidebar(false)} />
      ) : (
        <Hamburger handleHamburgerOpen={() => setSidebar(true)} />
      )}
      <div className="subpage-content">
        <div className="subpage-maincontent">
          {winterState === "intro" && <WinterIntroduction />}
          {winterState === "activity" && (
            <Activity
              festivalActivityList={festivalActivityList}
              foodActivityList={foodActivityList}
            />
          )}
          {winterState === "tip" && <Tip />}
          {winterState === "gallery" && <Gallery />}
          {winterState === "board" && <Board springPostData={winterPostData} />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Winter;
