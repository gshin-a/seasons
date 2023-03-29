import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AutumnIntroduction } from "../components/Introduction";
import Activity from "./../components/Activity";
import Tip from "./../components/Tip";
import Gallery from "./../components/Gallery";
import Board from "./../components/Board";
import Hamburger, { HamburgerSidebar } from "../components/Hamburger";
import { useParams } from "react-router-dom";
import { festivalActivityList, foodActivityList } from "../data/autumn";

const Autumn = ({ isDarkMode, setIsDarkMode }) => {
  const { state } = useParams();
  const [autumnState, setAutumnState] = useState(state ? state : "intro");
  const [autumnPostData, setAutumnPostData] = useState([]);
  const [openSidebar, setSidebar] = useState(false);

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
      <Header
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        type="autumn"
      />
      {openSidebar ? (
        <HamburgerSidebar handleHamburgerClose={() => setSidebar(false)} />
      ) : (
        <Hamburger handleHamburgerOpen={() => setSidebar(true)} />
      )}
      <div className="subpage-content">
        <div className="subpage-maincontent">
          {autumnState === "intro" && <AutumnIntroduction />}
          {autumnState === "activity" && (
            <Activity
              festivalActivityList={festivalActivityList}
              foodActivityList={foodActivityList}
              season="autumn"
            />
          )}
          {autumnState === "tip" && <Tip />}
          {autumnState === "gallery" && <Gallery />}
          {autumnState === "board" && <Board springPostData={autumnPostData} />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Autumn;
