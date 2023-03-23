const BoardItem = ({ postnumber, title, user }) => {
  return (
    <div className="board-item">
      <div className="board-item-postnumber">{postnumber}</div>
      <div className="board-item-title">{title}</div>
      <div className="board-item-user">{user}</div>
    </div>
  );
};

const Board = ({ springPostData }) => {
  return (
    <div className="board">
      {springPostData.map((e) => (
        <BoardItem postnumber={e.id} title={e.title} user={e.userId} />
      ))}
    </div>
  );
};

export default Board;
