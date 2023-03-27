import Carousel from "../components/Carousel";
import Header from "../components/Header";
import Hamburger from "../components/Hamburger";
import Footer from "../components/Footer";
import { MainContent1, MainContent2 } from "./../components/MainContents";
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

const Home = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <div className={"home" + (isDarkMode ? " home-darkmode" : "")}>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Hamburger />
      <Carousel />
      <MainContent1 text={springText} imgSrc={springImgSrc} season="spring" />
      <MainContent2 text={summerText} imgSrc={summerImgSrc} season="summer" />
      <MainContent1 text={autumnText} imgSrc={autumnImgSrc} season="autumn" />
      <MainContent2 text={winterText} imgSrc={winterImgSrc} season="winter" />
      <Footer />
    </div>
  );
};

export default Home;
