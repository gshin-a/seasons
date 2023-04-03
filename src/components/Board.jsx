import { useState } from "react";

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
  const [filter, setFilter] = useState("");

  return (
    <div className="board">
      <div className="board-search">
        Search{" "}
        <div className="board-inputwrapper">
          <input onChange={(e) => setFilter(e.target.value)} value={filter} />
          <button
            className="board-input-resetbutton"
            onClick={() => {
              setFilter("");
            }}
          >
            X
          </button>
        </div>
      </div>
      {springPostData.map(
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
