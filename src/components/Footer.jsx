import { useState } from "react";

const Footer = () => {
  const [imageSrcHidden, setImageSrcHidden] = useState(true);

  return (
    <footer className="footer">
      <p>Copyright © 2023 Four Seasons. All rights reserved.</p>
      <address>Contact me. ghshin@mobiliverse.com </address>
      <div className="footer-github">
        <a href="https://github.com/gshin-a">
          Click here to visit the creator's GitHub
        </a>
      </div>
      <button
        className="footer-image-button"
        onClick={() => setImageSrcHidden(!imageSrcHidden)}
      >
        Click here to see the source of the images used on this website
      </button>
      <div
        className={
          "footer-image-source" + (imageSrcHidden ? " image-hidden" : "")
        }
      >
        <a href="https://kr.freepik.com/free-photo/pink-tree_11306591.htm?query=%ED%95%9C%EA%B5%AD%20%EB%B4%84#from_view=detail_alsolike">
          작가 tawatchai07
        </a>{" "}
        출처 Freepik
        <br />
        <a href="https://pixabay.com/ko//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5131925">
          Pixabay
        </a>
        로부터 입수된{" "}
        <a href="https://pixabay.com/ko/users/김경복-15418216/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5131925">
          경복 김
        </a>
        님의 이미지 입니다.
        <br />
        <a href="https://kr.freepik.com/free-photo/gyeongbokgung-palace-with-cherry-blossom-in-spring-korea_11306352.htm#query=%ED%95%9C%EA%B5%AD%20%EB%B4%84&position=40&from_view=search&track=ais">
          작가 tawatchai07
        </a>{" "}
        출처 Freepik
        <br />
        <a href="https://kr.freepik.com/free-photo/autumn-in-gyeongbokgung-palace-south-korea_11600449.htm#query=%ED%95%9C%EA%B5%AD%20%EB%B4%84&position=39&from_view=search&track=ais">
          작가 tawatchai07
        </a>{" "}
        출처 Freepik
        <br />
        <a href="https://pixabay.com/ko//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3381419">
          Pixabay
        </a>
        로부터 입수된{" "}
        <a href="https://pixabay.com/ko/users/kimdaejeung-7703165/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3381419">
          dae jeung kim
        </a>
        님의 이미지 입니다.
        <br />
        <a href="https://www.freepik.com/free-photo/baekyangsa-temple-falling-snow-naejangsan-mountain-winter-with-snow-famous-mountain-korea-winter-landscape_11599660.htm#query=korea%20winter&position=37&from_view=search&track=ais">
          Image by tawatchai07
        </a>{" "}
        on Freepik
        <br />
        <a href="https://www.freepik.com/free-photo/roof-jeonju-traditional-korean-village-covered-with-snow-jeonju-hanok-village-winter-south-korea_11599676.htm#query=korea%20winter&position=0&from_view=search&track=ais">
          Image by tawatchai07
        </a>{" "}
        on Freepik
        <br />
        <a href="https://pixabay.com/ko//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1950544">
          Pixabay
        </a>
        로부터 입수된{" "}
        <a href="https://pixabay.com/ko/users/hachiyuuki-4175582/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1950544">
          Hachiyuuki
        </a>
        님의 이미지 입니다.
        <br />
        <a href="https://pixabay.com/ko//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5132776">
          Pixabay
        </a>
        로부터 입수된{" "}
        <a href="https://pixabay.com/ko/users/joodan-16368173/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5132776">
          Dan Joo
        </a>
        님의 이미지 입니다.
        <br />
        <a href="https://pixabay.com/ko//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2385624">
          Pixabay
        </a>
        로부터 입수된{" "}
        <a href="https://pixabay.com/ko/users/2481277-2481277/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2385624">
          hongwon jun
        </a>
        님의 이미지 입니다.
        <br />
        <a href="https://pixabay.com/ko//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4839388">
          Pixabay
        </a>
        로부터 입수된{" "}
        <a href="https://pixabay.com/ko/users/chulmin1700-15022416/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4839388">
          chulmin park
        </a>
        님의 이미지 입니다.
      </div>
    </footer>
  );
};

export default Footer;
