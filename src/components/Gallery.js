const JejuGalleryList = [
  {
    id: 1,
    imgSrc: process.env.PUBLIC_URL + `/assets/gallery-content-jeju-1.jpg`,
    description: "Dolhareubang in Jeju Island",
  },
  {
    id: 2,
    imgSrc: process.env.PUBLIC_URL + `/assets/gallery-content-jeju-2.jpg`,
    description: "Jeju tourist attractions that you can't miss this spring",
  },
  {
    id: 3,
    imgSrc: process.env.PUBLIC_URL + `/assets/gallery-content-jeju-3.jpg`,
    description:
      "Jeju, where spring has come first, is in full bloom with cherry blossoms and rape flowers",
  },
  {
    id: 4,
    imgSrc: process.env.PUBLIC_URL + `/assets/gallery-content-jeju-4.jpg`,
    description: "7 reasons why you should travel to Jeju in April",
  },
  {
    id: 5,
    imgSrc: process.env.PUBLIC_URL + `/assets/gallery-content-jeju-5.jpg`,
    description: "Jeju Spring Full of Flower Scent",
  },
  {
    id: 6,
    imgSrc: process.env.PUBLIC_URL + `/assets/gallery-content-jeju-6.jpg`,
    description:
      "Recommended trekking course to feel the spring of Hallasan Mountain",
  },
];

const SeoulGalleryList = [
  {
    id: 1,
    imgSrc: process.env.PUBLIC_URL + `/assets/gallery-content-seoul-1.jpg`,
    description: "a two-legged spring outing in Seoul",
  },
  {
    id: 2,
    imgSrc: process.env.PUBLIC_URL + `/assets/gallery-content-seoul-2.jpg`,
    description: "Seoul Spring Date. Best 5 for couples",
  },
  {
    id: 3,
    imgSrc: process.env.PUBLIC_URL + `/assets/gallery-content-seoul-3.jpg`,
    description: "Places to go for a walk in Seoul's spring",
  },
  {
    id: 4,
    imgSrc: process.env.PUBLIC_URL + `/assets/gallery-content-seoul-4.jpg`,
    description:
      "This is the spring picnic in Seoul, the spring scenery of Seoul Forest",
  },
  {
    id: 5,
    imgSrc: process.env.PUBLIC_URL + `/assets/gallery-content-seoul-5.jpg`,
    description: "Enjoy Spring Flowers at Seoul Land!",
  },
  {
    id: 6,
    imgSrc: process.env.PUBLIC_URL + `/assets/gallery-content-seoul-6.jpg`,
    description: "Namsan Tower, a good place to go on a spring trip in Seoul",
  },
];

const BusanGalleryList = [
  {
    id: 1,
    imgSrc: process.env.PUBLIC_URL + `/assets/gallery-content-busan-1.jpg`,
    description:
      "It's already spring in Busan! Let's go to the plum blossom destination",
  },
  {
    id: 2,
    imgSrc: process.env.PUBLIC_URL + `/assets/gallery-content-busan-2.jpg`,
    description: "Spring in Daishin Park with Cherry Blossoms",
  },
  {
    id: 3,
    imgSrc: process.env.PUBLIC_URL + `/assets/gallery-content-busan-3.jpg`,
    description: "Spring Sunrise at Hwangnyeongsan Mountain in Busan",
  },
  {
    id: 4,
    imgSrc: process.env.PUBLIC_URL + `/assets/gallery-content-busan-4.jpg`,
    description: "a spring flower trip to Busan",
  },
  {
    id: 5,
    imgSrc: process.env.PUBLIC_URL + `/assets/gallery-content-busan-5.jpg`,
    description: "Spring in Busan",
  },
  {
    id: 6,
    imgSrc: process.env.PUBLIC_URL + `/assets/gallery-content-busan-6.jpg`,
    description: "Let's go to Busan in spring",
  },
];

const GalleryItemContent = ({ imgSrc, description }) => {
  return (
    <div className="gallery-item-content">
      <img src={imgSrc} alt="gallery item content" />
      <div className="gallery-description">{description}</div>
    </div>
  );
};

const GalleryItem = ({ title, type, galleryList }) => {
  return (
    <div className="gallery-item">
      <h2>{title}</h2>
      <div className="gallery-item-wrapper">
        <button
          className={`gallery-item-left-button gallery-item-left-button-${type}`}
          onClick={(e) => {
            document.querySelector(
              `.gallery-item-right-button-${type}`
            ).style.visibility = "visible";

            const contentWidth = document.querySelector(
              ".gallery-item-content"
            ).offsetWidth;

            let currentMargin = document.querySelector(`.gallery-items-${type}`)
              .style.marginLeft;
            const newMargin =
              parseInt(contentWidth) + parseInt(currentMargin.slice(0, -2));

            document.querySelector(
              `.gallery-items-${type}`
            ).style.marginLeft = `${newMargin}px`;
            if (parseInt(currentMargin.slice(0, -2)) < contentWidth) {
              e.target.visibility = "hidden";
            }

            currentMargin = document.querySelector(`.gallery-items-${type}`)
              .style.marginLeft;

            if (parseInt(currentMargin.slice(0, -2)) >= 0) {
              e.target.style.visibility = "hidden";
            }
          }}
        >
          &lt;
        </button>
        <div className="gallery-items-visible">
          <div className={"gallery-items" + ` gallery-items-${type}`}>
            {galleryList.map((it) => (
              <GalleryItemContent
                key={it.id}
                imgSrc={it.imgSrc}
                description={it.description}
              />
            ))}
          </div>
        </div>
        <button
          className={`gallery-item-right-button gallery-item-right-button-${type}`}
          onClick={(e) => {
            document.querySelector(
              `.gallery-item-left-button-${type}`
            ).style.visibility = "visible";

            const contentWidth = document.querySelector(
              ".gallery-item-content"
            ).offsetWidth;

            const totalWidth = galleryList.length * contentWidth;

            const visibleWidth = document.querySelector(
              ".gallery-items-visible"
            ).offsetWidth;

            let currentMargin = document.querySelector(`.gallery-items-${type}`)
              .style.marginLeft;

            if (currentMargin.length < 1) {
              document.querySelector(
                `.gallery-items-${type}`
              ).style.marginLeft = `-${contentWidth}px`;
            } else {
              const newMargin =
                parseInt(currentMargin.slice(0, -2)) - parseInt(contentWidth);

              document.querySelector(
                `.gallery-items-${type}`
              ).style.marginLeft = `${newMargin}px`;
            }

            currentMargin = document.querySelector(`.gallery-items-${type}`)
              .style.marginLeft;
            if (
              totalWidth - Math.abs(currentMargin.slice(0, -2)) <
              visibleWidth
            ) {
              e.target.style.visibility = "hidden";
            }
          }}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

const Gallery = () => {
  return (
    <div className="gallery">
      <GalleryItem title="Jeju Island" type={1} galleryList={JejuGalleryList} />
      <GalleryItem title="Seoul" type={2} galleryList={SeoulGalleryList} />
      <GalleryItem title="Busan" type={3} galleryList={BusanGalleryList} />
    </div>
  );
};

export default Gallery;
