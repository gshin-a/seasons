import { useEffect, useState } from "react";

const CarouselButton = ({ handleCarousel, setAutoslide, autoslide }) => {
  return (
    <div className={"carousel-button"}>
      <button
        className="carousel-button-autoslide"
        onClick={() => {
          setAutoslide(!autoslide);
        }}
      >
        {autoslide ? "auto slide off" : "auto slide on"}
      </button>
      <button
        onClick={() => {
          handleCarousel(0);
        }}
      >
        Spring
      </button>
      <button
        onClick={() => {
          handleCarousel(1);
        }}
      >
        Summer
      </button>
      <button
        onClick={() => {
          handleCarousel(2);
        }}
      >
        Autumn
      </button>
      <button
        onClick={() => {
          handleCarousel(3);
        }}
      >
        Winter
      </button>
    </div>
  );
};

const delay = (res) => {
  return new Promise((res) => {
    setTimeout(() => {
      res();
    }, 2000);
  });
};

const Carousel = ({ isDarkMode }) => {
  const [curImg, setCurImg] = useState(0);
  const [autoslide, setAutoslide] = useState(true);

  const handleCarousel = async (imgNum) => {
    let newCurImg = imgNum;
    if (curImg < imgNum) {
      document.querySelector(".carousel-image-wrapper").style.transition =
        "margin 2s ease";
      document.querySelector(".carousel-image-wrapper").style.marginLeft = `-${
        imgNum * 100
      }vw`;
      newCurImg = imgNum;
    } else if (curImg > imgNum) {
      document.querySelector(".carousel-image-wrapper").style.transition =
        "margin 2s ease";
      document.querySelector(".carousel-image-wrapper").style.marginLeft = `-${
        (imgNum + 4) * 100
      }vw`;
      newCurImg = imgNum + 4;
    } else {
      console.log("같은 이미지입니다.");
      return;
    }

    await delay();
    if (newCurImg >= 4) {
      document.querySelector(".carousel-image-wrapper").style.transition =
        "none";
      document.querySelector(".carousel-image-wrapper").style.marginLeft = `-${
        (newCurImg - 4) * 100
      }vw`;
      newCurImg = newCurImg - 4;
    }
    setCurImg(newCurImg);
  };

  const autoHandleCarousel = async (imgNum) => {
    if (imgNum !== 0) {
      document.querySelector(".carousel-image-wrapper").style.transition =
        "margin 2s ease";
      document.querySelector(".carousel-image-wrapper").style.marginLeft = `-${
        imgNum * 100
      }vw`;
    } else {
      document.querySelector(".carousel-image-wrapper").style.transition =
        "margin 2s ease";
      document.querySelector(
        ".carousel-image-wrapper"
      ).style.marginLeft = `-400vw`;
      await delay();
      document.querySelector(".carousel-image-wrapper").style.transition =
        "none";
      document.querySelector(
        ".carousel-image-wrapper"
      ).style.marginLeft = `0vw`;
    }
  };

  useEffect(() => {
    if (autoslide) {
      handleCarousel(0);
      let i = 1;
      const showCarousel = setInterval(() => {
        autoHandleCarousel(i);
        setCurImg(i);
        if (i === 3) i = 0;
        else i++;
      }, 3000);
      return () => clearInterval(showCarousel);
    }
  }, [autoslide]);

  return (
    <div className={"carousel" + (isDarkMode ? " carousel-darkmode" : "")}>
      <div className="carousel-image-wrapper">
        <div className={"carousel-image-spring"}>
          <CarouselButton
            handleCarousel={handleCarousel}
            setAutoslide={setAutoslide}
            autoslide={autoslide}
          />
        </div>
        <div className={"carousel-image-summer"}>
          <CarouselButton
            handleCarousel={handleCarousel}
            setAutoslide={setAutoslide}
            autoslide={autoslide}
          />
        </div>
        <div className={"carousel-image-autumn"}>
          <CarouselButton
            handleCarousel={handleCarousel}
            setAutoslide={setAutoslide}
            autoslide={autoslide}
          />
        </div>
        <div className={"carousel-image-winter"}>
          <CarouselButton
            handleCarousel={handleCarousel}
            setAutoslide={setAutoslide}
            autoslide={autoslide}
          />
        </div>
        <div className={"carousel-image-fake-spring"}>
          <CarouselButton
            handleCarousel={handleCarousel}
            setAutoslide={setAutoslide}
            autoslide={autoslide}
          />
        </div>
        <div className={"carousel-image-fake-summer"}>
          <CarouselButton
            handleCarousel={handleCarousel}
            setAutoslide={setAutoslide}
            autoslide={autoslide}
          />
        </div>
        <div className={"carousel-image-fake-autumn"}>
          <CarouselButton
            handleCarousel={handleCarousel}
            setAutoslide={setAutoslide}
            autoslide={autoslide}
          />
        </div>
        <div className={"carousel-image-fake-winter"}>
          <CarouselButton
            handleCarousel={handleCarousel}
            setAutoslide={setAutoslide}
            autoslide={autoslide}
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
