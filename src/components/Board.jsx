import { useEffect, useState } from "react";

const BoardItem = ({ postnumber, title, user, content }) => {
  const [openItem, setOpenItem] = useState(false);

  return (
    <div className="board-item" onClick={() => setOpenItem(!openItem)}>
      <div className="board-item-post">
        <div className="board-item-post-postnumber">No. {postnumber}</div>
        <div className="board-item-post-title">{title}</div>
        <div className="board-item-post-user">user {user}</div>
      </div>
      <div
        className={
          "board-item-content" + (openItem ? " board-item-content-display" : "")
        }
      >
        {content}
      </div>
    </div>
  );
};

const Board = ({ springPostData }) => {
  const [searchInput, setSearchInput] = useState("");
  const [filter, setFilter] = useState("");
  const [sortType, setSortType] = useState("latest");
  const [sortedData, setSortedData] = useState(springPostData);

  const latestSort = (a, b) => {
    return b.id - a.id;
  };

  const oldestSort = (a, b) => {
    return a.id - b.id;
  };

  useEffect(() => {
    let sortFunc = latestSort;
    if (sortType && sortType === "oldest") sortFunc = oldestSort;
    const sortedData = [...springPostData].sort(sortFunc);
    setSortedData(sortedData);
  }, [springPostData, sortType]);

  if (sortedData.length <= 0) return;

  return (
    <div className="board">
      <div className="board-search">
        <div className="board-inputwrapper">
          <input
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput}
          />
          <button
            className="board-input-resetbutton"
            onClick={() => {
              setSearchInput("");
            }}
          >
            X
          </button>
        </div>
        <button
          className="board-search-button"
          onClick={() => setFilter(searchInput)}
        >
          search
        </button>
        <button
          className="board-reset-button"
          onClick={() => {
            setFilter("");
            setSearchInput("");
          }}
        >
          reset
        </button>
        <select
          className="board-select"
          onChange={(e) => {
            setSortType(e.target.value);
            console.log("input select");
          }}
        >
          <option value="latest">latest</option>
          <option value="oldest">oldest</option>
        </select>
      </div>
      {sortedData.map(
        ({ id, title, userId, body }) =>
          title.indexOf(filter) !== -1 && (
            <BoardItem
              key={id}
              postnumber={id}
              title={title}
              user={userId}
              content={body}
            />
          )
      )}
    </div>
  );
};

export default Board;
