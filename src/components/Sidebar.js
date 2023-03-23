const Sidebar = ({ springState, setSpringState, setOpenSidebar }) => {
  return (
    <div>
      <button onClick={() => setOpenSidebar(false)}>close</button>
      <div className="left-sidebar">
        <ul>
          <li>
            <button
              className={springState === "intro" ? "curlocation" : ""}
              onClick={() => setSpringState("intro")}
            >
              Introduction to Spring
            </button>
          </li>
          <li>
            <button
              className={springState === "activity" ? "curlocation" : ""}
              onClick={() => setSpringState("activity")}
            >
              Spring Activities
            </button>
          </li>
          <li>
            <button
              className={springState === "tip" ? "curlocation" : ""}
              onClick={() => setSpringState("tip")}
            >
              Tips for Spring
            </button>
          </li>
          <li>
            <button
              className={springState === "gallery" ? "curlocation" : ""}
              onClick={() => setSpringState("gallery")}
            >
              Spring Photo gallery
            </button>
          </li>
          <li>
            <button
              className={springState === "board" ? "curlocation" : ""}
              onClick={() => setSpringState("board")}
            >
              Spring Bulletin board
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
