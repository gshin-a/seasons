const Sidebar = ({ springState, setSpringState, setOpenSidebar }) => {
  return (
    <div>
      <button
        className="sidebar-close-button"
        onClick={() => setOpenSidebar(false)}
      >
        close sidebar
      </button>
      <div className="left-sidebar">
        <ul>
          <li>
            <button
              className={springState === "intro" ? "curlocation" : ""}
              onClick={() => {
                setSpringState("intro");
                window.scroll(0, 0);
              }}
            >
              Introduction to Spring
            </button>
          </li>
          <li>
            <button
              className={springState === "activity" ? "curlocation" : ""}
              onClick={() => {
                setSpringState("activity");
                window.scroll(0, 0);
              }}
            >
              Spring Activities
            </button>
          </li>
          <li>
            <button
              className={springState === "tip" ? "curlocation" : ""}
              onClick={() => {
                setSpringState("tip");
                window.scroll(0, 0);
              }}
            >
              Tips for Spring
            </button>
          </li>
          <li>
            <button
              className={springState === "gallery" ? "curlocation" : ""}
              onClick={() => {
                setSpringState("gallery");
                window.scroll(0, 0);
              }}
            >
              Spring Photo gallery
            </button>
          </li>
          <li>
            <button
              className={springState === "board" ? "curlocation" : ""}
              onClick={() => {
                setSpringState("board");
                window.scroll(0, 0);
              }}
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
