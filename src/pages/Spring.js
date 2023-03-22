import Header from "../components/Header";

const Spring = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <div className="spring">
      <Header
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        type="spring"
      />
      {/* sidebar는 component에 넣어서 재사용가능할듯. `${type}-left-sidebar` 이런 식으로 사용하면 됨 */}
      <div className="spring-content">
        <div className="spring-left-sidebar">
          <ul>
            <li>Introduction to Spring</li>
            <li>Spring Activities</li>
            <li>Tips for Spring</li>
            <li>Spring Photo gallery</li>
            <li>Spring Bulletin board</li>
          </ul>
        </div>
        <div className="spring-maincontent">maincontent</div>
      </div>
    </div>
  );
};

export default Spring;
