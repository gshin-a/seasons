const festivalList = [
  "Jinhae Cherry Blossom Festival",
  "Yeouido Spring Flower Festival",
  "400 Years of Injeolmi Festival",
  "Goyang International Flower Festival",
  "Jeju Wildfire Festival",
  "Goryeo Mountain Azalea Festival",
  "Jeju Canola Flower Festival",
  "Seocheon Camellia Flower Webfoot Octopus Festival",
  "Changwon Sea squirt Festival",
  "Gwangyang Plum Blossom Festival",
];

const foodList = [
  "Soy Sauce Marinated Crab",
  "Wild vegetable bibimbap",
  "Hwajeon",
  "Bindaetteok",
  "Rice with thistle",
  "Naenginamul",
  "Eggplant greens",
  "Fish pancake",
  "Raw octopus",
  "Braised mackerel",
];

const ActivityContent = ({ type, contentList }) => {
  return (
    <div className={`activity-content activity-content-${type}`}>
      <div className="activity-content-up-left">
        <div className="activity-content-1">
          <div className="activity-content-1-image">{contentList[0]}</div>
        </div>
        <div className="activity-content-up-right">
          <div className="activity-content-2">
            <div className="activity-content-2-image">{contentList[1]}</div>
          </div>
          <div className="activity-content-3">
            <div className="activity-content-3-image">{contentList[2]}</div>
          </div>
          <div className="activity-content-4">
            <div className="activity-content-4-image">{contentList[3]}</div>
          </div>
          <div className="activity-content-5">
            <div className="activity-content-5-image">{contentList[4]}</div>
          </div>
        </div>
      </div>
      <div className="activity-content-down-left">
        <div className="activity-content-down-right">
          <div className="activity-content-6">
            <div className="activity-content-6-image">{contentList[5]}</div>
          </div>
          <div className="activity-content-7">
            <div className="activity-content-7-image">{contentList[6]}</div>
          </div>
          <div className="activity-content-8">
            <div className="activity-content-8-image">{contentList[7]}</div>
          </div>
          <div className="activity-content-9">
            <div className="activity-content-9-image">{contentList[8]}</div>
          </div>
        </div>
        <div className="activity-content-10">
          <div className="activity-content-10-image">{contentList[9]}</div>
        </div>
      </div>
    </div>
  );
};

const Activity = () => {
  return (
    <div className="activity">
      <h1>Festival</h1>
      <ActivityContent type="festival" contentList={festivalList} />
      <h1>Food</h1>
      <ActivityContent type="food" contentList={foodList} />
    </div>
  );
};

export default Activity;