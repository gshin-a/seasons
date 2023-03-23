import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Introduction from "../components/Introduction";
import Activity from "./../components/Activity";
import Tip from "./../components/Tip";
import Gallery from "./../components/Gallery";
import Board from "./../components/Board";
import Sidebar from "../components/Sidebar";

const Spring = ({ isDarkMode, setIsDarkMode }) => {
  const [springState, setSpringState] = useState("intro");
  const [springPostData, setSpringPostData] = useState([]);

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
      {/* sidebar는 component에 넣어서 재사용가능할듯. `${type}-left-sidebar` 이런 식으로 사용하면 됨 */}
      <div className="spring-content">
        <Sidebar springState={springState} setSpringState={setSpringState} />
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
