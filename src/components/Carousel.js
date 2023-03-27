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

const carouselStateList = {
  0: " carousel-image-spring-visible",
  1: " carousel-image-summer-visible",
  2: " carousel-image-autumn-visible",
  3: "",
};

const Carousel = ({ isDarkMode }) => {
  const [carouselState, setCarouselState] = useState(carouselStateList[0]);
  const [autoslide, setAutoslide] = useState(true);

  const handleCarousel = (imgNum) => {
    setCarouselState(carouselStateList[imgNum]);
  };

  useEffect(() => {
    if (autoslide) {
      let i = 0;
      const showCarousel = setInterval(() => {
        handleCarousel(i);
        if (i === 3) i = 0;
        else i++;
      }, 4000);
      return () => clearInterval(showCarousel);
    }
  }, [autoslide]);

  return (
    <div className={"carousel" + (isDarkMode ? " carousel-darkmode" : "")}>
      <div className={"carousel-image-spring" + carouselState}>
        <CarouselButton
          handleCarousel={handleCarousel}
          setAutoslide={setAutoslide}
          autoslide={autoslide}
        />
      </div>
      <div className={"carousel-image-summer" + carouselState}>
        <CarouselButton
          handleCarousel={handleCarousel}
          setAutoslide={setAutoslide}
          autoslide={autoslide}
        />
      </div>
      <div className={"carousel-image-autumn" + carouselState}>
        <CarouselButton
          handleCarousel={handleCarousel}
          setAutoslide={setAutoslide}
          autoslide={autoslide}
        />
      </div>
      <div className={"carousel-image-winter" + carouselState}>
        <CarouselButton
          handleCarousel={handleCarousel}
          setAutoslide={setAutoslide}
          autoslide={autoslide}
        />
      </div>
    </div>
  );
};

export default Carousel;
