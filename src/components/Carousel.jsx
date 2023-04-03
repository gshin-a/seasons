import { useEffect, useState } from "react";
import { seasonList } from "../data/header";

const CarouselButton = ({ handleCarousel, setAutoslide }) => {
  return (
    <div
      className={"carousel-button"}
      onMouseEnter={() => {
        setAutoslide(false);
      }}
      onMouseLeave={() => {
        setAutoslide(true);
      }}
    >
      <div className="carousel-button-wrapper">
        {seasonList.map((season, idx) => (
          <button
            key={season}
            onClick={() => {
              handleCarousel(idx);
            }}
          >
            {season.charAt(0).toUpperCase() + season.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

const delay = (s) => {
  return new Promise((res) => {
    setTimeout(() => {
      res();
    }, s * 1000);
  });
};

const Carousel = ({ isDarkMode }) => {
  const [curImg, setCurImg] = useState(0);
  const [autoslide, setAutoslide] = useState(true);

  const handleCarousel = async (imgNum) => {
    const imageWrapper = document.querySelector(".carousel-image-wrapper");
    const carouselButton = document.querySelector(".carousel-button-wrapper");
    setCurImg(imgNum);
    if (curImg < imgNum) {
      carouselButton.style.pointerEvents = "none";
      carouselButton.style.opacity = "0.5";
      imageWrapper.style.transition = "left 2s ease";
      imageWrapper.style.left = `-${imgNum * 100}vw`;

      await delay(2);
      carouselButton.style.pointerEvents = "all";
      carouselButton.style.opacity = "1";
    } else if (curImg > imgNum) {
      carouselButton.style.pointerEvents = "none";
      carouselButton.style.opacity = "0.5";

      imageWrapper.style.transition = "left 2s ease";
      imageWrapper.style.left = `-${(imgNum + 4) * 100}vw`;

      await delay(2);
      imageWrapper.style.transition = "none";
      imageWrapper.style.left = `-${imgNum * 100}vw`;

      carouselButton.style.pointerEvents = "all";
      carouselButton.style.opacity = "1";
    } else {
      return;
    }
  };

  const autoHandleCarousel = async (imgNum) => {
    const imageWrapper = document.querySelector(".carousel-image-wrapper");
    if (imgNum !== 0) {
      imageWrapper.style.transition = "left 2s ease";
      imageWrapper.style.left = `-${imgNum * 100}vw`;
    } else {
      imageWrapper.style.transition = "left 2s ease";
      imageWrapper.style.left = `-400vw`;
      await delay(2);
      imageWrapper.style.transition = "none";
      imageWrapper.style.left = `0vw`;
    }
  };

  useEffect(() => {
    if (autoslide) {
      const carouselButton = document.querySelector(".carousel-button-wrapper");

      carouselButton.style.pointerEvents = "none";
      carouselButton.style.opacity = 0.5;
      let i = curImg !== 3 ? curImg + 1 : 0;
      const showCarousel = setInterval(() => {
        autoHandleCarousel(i);
        setCurImg(i);
        if (i === 3) i = 0;
        else i++;
      }, 3000);
      return () => {
        clearInterval(showCarousel);
        carouselButton.style.pointerEvents = "all";
        carouselButton.style.opacity = "1";
      };
    }
  }, [autoslide]);

  return (
    <div className={"carousel" + (isDarkMode ? " carousel-darkmode" : "")}>
      {!autoslide && (
        <div className="carousel-button-autoslide">auto slide off..</div>
      )}
      <CarouselButton
        handleCarousel={handleCarousel}
        setAutoslide={setAutoslide}
        autoslide={autoslide}
      />
      <div className="carousel-image-wrapper">
        <div className={"carousel-image-spring"}></div>
        <div className={"carousel-image-summer"}></div>
        <div className={"carousel-image-autumn"}></div>
        <div className={"carousel-image-winter"}></div>
        <div className={"carousel-image-fake-spring"}></div>
        <div className={"carousel-image-fake-summer"}></div>
        <div className={"carousel-image-fake-autumn"}></div>
        <div className={"carousel-image-fake-winter"}></div>
      </div>
    </div>
  );
};

export default Carousel;
