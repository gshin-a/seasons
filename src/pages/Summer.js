import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { SummerIntroduction } from "../components/Introduction";
import Activity from "./../components/Activity";
import Tip from "./../components/Tip";
import Gallery from "./../components/Gallery";
import Board from "./../components/Board";
import Hamburger, { HamburgerSidebar } from "../components/Hamburger";
import { useParams } from "react-router-dom";
import { festivalActivityList, foodActivityList } from "../data/spring";

const Summer = ({ isDarkMode, setIsDarkMode }) => {
  const { state } = useParams();
  const [summerState, setSummerState] = useState(state ? state : "intro");
  const [summerPostData, setsummerPostData] = useState([]);
  const [openSidebar, setSidebar] = useState(false);

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
      <Header
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        type="summer"
      />
      {openSidebar ? (
        <HamburgerSidebar handleHamburgerClose={() => setSidebar(false)} />
      ) : (
        <Hamburger handleHamburgerOpen={() => setSidebar(true)} />
      )}
      <div className="subpage-content">
        <div className="subpage-maincontent">
          {summerState === "intro" && <SummerIntroduction />}
          {summerState === "activity" && (
            <Activity
              festivalActivityList={festivalActivityList}
              foodActivityList={foodActivityList}
            />
          )}
          {summerState === "tip" && <Tip />}
          {summerState === "gallery" && <Gallery />}
          {summerState === "board" && <Board springPostData={summerPostData} />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Summer;
