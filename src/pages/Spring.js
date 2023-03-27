import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Introduction from "../components/Introduction";
import Activity from "./../components/Activity";
import Tip from "./../components/Tip";
import Gallery from "./../components/Gallery";
import Board from "./../components/Board";
import Hamburger from "../components/Hamburger";
import { useParams } from "react-router-dom";

const Spring = ({ isDarkMode, setIsDarkMode }) => {
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
    <div className={"spring" + (isDarkMode ? " spring-darkmode" : "")}>
      <Header
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        type="spring"
      />
      <Hamburger />
      <div className="spring-content">
        <div className="spring-maincontent">
          {springState === "intro" && (
            <Introduction setSpringState={setSpringState} />
          )}
          {springState === "activity" && <Activity />}
          {springState === "tip" && <Tip />}
          {springState === "gallery" && <Gallery />}
          {springState === "board" && <Board springPostData={springPostData} />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Spring;
