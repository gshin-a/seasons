import Carousel from "../components/Carousel";
import { MainContent1, MainContent2 } from "../components/MainContents";
import {
  springText,
  summerText,
  autumnText,
  winterText,
  springImgSrc,
  summerImgSrc,
  autumnImgSrc,
  winterImgSrc,
} from "../data/home";

const Home = ({ isDarkMode }) => {
  return (
    <div className={"home" + (isDarkMode ? " home-darkmode" : "")}>
      <Carousel />
      <MainContent1 text={springText} imgSrc={springImgSrc} season="spring" />
      <MainContent2 text={summerText} imgSrc={summerImgSrc} season="summer" />
      <MainContent1 text={autumnText} imgSrc={autumnImgSrc} season="autumn" />
      <MainContent2 text={winterText} imgSrc={winterImgSrc} season="winter" />
    </div>
  );
};

export default Home;
