import Carousel from "../components/Carousel";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { MainContent1, MainContent2 } from "./../components/MainContents";

const springText = `Spring in Korea (Mar-May) is a beautiful season with blooming flowers
as the main attraction. Parks and scenic areas become popular
destinations for people to enjoy the stunning flowers. Cherry blossoms
are one of the most famous springtime events in Korea, but other
flowers such as azaleas, forsythias, and magnolias also bloom. It's a
great time for outdoor activities like hiking, as many trails are
lined with these beautiful flowers. Spring in Korea is a perfect
season for picnics and walks in the park.`;

const summerText = `Summer in Korea (June-August) is hot and humid, but it's also a fun and lively season. Many beaches and water parks open during this time, offering relief from the heat. Summer is also the season of many festivals, including the Boryeong Mud Festival and the Busan International Film Festival. Korean cuisine also shines in the summer, with dishes like naengmyeon (cold buckwheat noodles) and samgyetang (chicken soup with ginseng) being popular. However, it's important to stay hydrated and protect yourself from the sun while enjoying the summer activities.`;

const autumnText = `Autumn in Korea (September to November) is a season of mild weather and vibrant foliage. It's the perfect time for outdoor activities like hiking, biking, and walking. Visitors can enjoy stunning views of colorful foliage while hiking through national parks like Seoraksan, Naejangsan, and Bukhansan. Autumn is also known for delicious seasonal foods like Korean chestnuts, sweet potatoes, pumpkins, and persimmons. Experience the beauty of nature and traditional Korean culture in autumn in Korea.`;

const winterText = `Winter in Korea (Dec-Feb) offers a unique and unforgettable experience for foreigners. With temperatures dropping below zero, visitors can expect to see snow-covered landscapes and enjoy various winter activities such as skiing, snowboarding, and ice-skating. The country celebrates various winter festivals, including Seoul Lantern Festival and Daegwallyeong Snow Flower Festival. Visitors can also indulge in delicious winter foods like hotteok and tteokbokki. It's important to prepare for the cold weather by dressing warmly and taking necessary precautions to stay safe in icy conditions.`;

const Home = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <div className={"home" + (isDarkMode ? " home-darkmode" : "")}>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Carousel />
      <MainContent1
        text={springText}
        imgSrc={[
          process.env.PUBLIC_URL + "/assets/maincontent-spring-1.jpg",
          process.env.PUBLIC_URL + "/assets/maincontent-spring-2.jpg",
          process.env.PUBLIC_URL + "/assets/maincontent-spring-3.jpg",
        ]}
        season="spring"
      />
      <MainContent2
        text={summerText}
        imgSrc={[
          process.env.PUBLIC_URL + "/assets/maincontent-summer-1.jpg",
          process.env.PUBLIC_URL + "/assets/maincontent-summer-2.jpg",
          process.env.PUBLIC_URL + "/assets/maincontent-summer-3.jpg",
        ]}
        season="summer"
      />
      <MainContent1
        text={autumnText}
        imgSrc={[
          process.env.PUBLIC_URL + "/assets/maincontent-autumn-1.jpg",
          process.env.PUBLIC_URL + "/assets/maincontent-autumn-2.jpg",
          process.env.PUBLIC_URL + "/assets/maincontent-autumn-3.jpg",
        ]}
        season="autumn"
      />
      <MainContent2
        text={winterText}
        imgSrc={[
          process.env.PUBLIC_URL + "/assets/maincontent-winter-1.jpg",
          process.env.PUBLIC_URL + "/assets/maincontent-winter-2.jpg",
          process.env.PUBLIC_URL + "/assets/maincontent-winter-3.jpg",
        ]}
        season="winter"
      />
      <Footer />
    </div>
  );
};

export default Home;