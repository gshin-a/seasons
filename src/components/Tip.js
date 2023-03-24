const TipContent = ({ imgNum, title, description, link }) => {
  return (
    <div className="tip-content">
      <img
        src={process.env.PUBLIC_URL + `/assets/tip-content-${imgNum}.jpg`}
        alt={title}
      />
      <div className="tip-content-text">
        <h4>{title}</h4>
        <div>{description}</div>
        <a href={link}>&raquo; Learn more</a>
      </div>
    </div>
  );
};

const Tip = () => {
  return (
    <div className="tip">
      <TipContent
        imgNum={1}
        title="Pack accordingly"
        description="Korean spring weather unpredictable. Pack layers, bring umbrella or
          rain jacket for frequent rain."
        link="https://www.selectiveasia.com/south-korea-holidays/weather"
      />
      <TipContent
        imgNum={2}
        title="Enjoy the cherry blossoms"
        description="Korea's cherry blossoms bloom in late March to early April. Find them in parks and streets. Bring a camera and enjoy the scenery."
        link="https://blog.trazy.com/korea-cherry-blossom-forecast/"
      />
      <TipContent
        imgNum={5}
        title="Prepare for allergies"
        description="Spring in Korea can also bring a lot of pollen and dust, which may trigger allergies in some people. Consider bringing allergy medication."
        link="https://koreabyme.com/seasonal-allergies-in-korea-the-ultimate-guide/"
      />
      <TipContent
        imgNum={3}
        title="Try spring food"
        description="Experience Korean culture with spring dishes only available in season. Try local cuisine."
        link="https://korea.stripes.com/community-news/popular-spring-foods-korea"
      />
      <TipContent
        imgNum={4}
        title="Visit early"
        description="Spring is a popular season for tourists in Korea, so it's best to visit popular tourist destinations early in the day to avoid crowds and long lines."
        link="https://theculturetrip.com/asia/south-korea/articles/the-most-beautiful-places-to-visit-in-south-korea-in-the-spring/"
      />
      <TipContent
        imgNum={6}
        title="Participate in outdoor activities"
        description="Enjoy outdoor activities like hiking, cycling, and picnicking in Korean parks and riverside areas during warm spring"
        link="https://english.visitkorea.or.kr/enu/ATR/SI_EN_3_6.jsp?cid=1992017"
      />
      <TipContent
        imgNum={7}
        title="Try local spring fruits"
        description="Spring is a great season for fresh fruits in Korea, such as strawberries. Try visiting a local market to try some of fresh produce."
        link="https://blog.onedaykorea.com/seasonal-korean-fruits-you-should-try/"
      />
      <TipContent
        imgNum={8}
        title="Attend festivals and events"
        description="Spring in Korea is a season for various festivals and events. There are blossom festivals, temple stay, and traditional cultural performances."
        link="https://blog.trazy.com/korea-spring-festivals-in-april/"
      />
    </div>
  );
};

export default Tip;
