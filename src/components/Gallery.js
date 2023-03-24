const JejuGalleryList = [
  {
    id: 1,
    imgSrc: process.env.PUBLIC_URL + `/assets/gallery-content-1.jpg`,
    description: "한줄소개1",
  },
  {
    id: 2,
    imgSrc: process.env.PUBLIC_URL + `/assets/gallery-content-2.jpg`,
    description: "한줄소개2",
  },
  {
    id: 3,
    imgSrc: process.env.PUBLIC_URL + `/assets/gallery-content-3.jpg`,
    description: "한줄소개3",
  },
  {
    id: 4,
    imgSrc: process.env.PUBLIC_URL + `/assets/gallery-content-4.jpg`,
    description: "한줄소개4",
  },
  {
    id: 5,
    imgSrc: process.env.PUBLIC_URL + `/assets/gallery-content-5.jpg`,
    description: "한줄소개5",
  },
  {
    id: 6,
    imgSrc: process.env.PUBLIC_URL + `/assets/gallery-content-6.jpg`,
    description: "한줄소개6",
  },
];

const SeoulGalleryList = [
  {
    id: 1,
    imgSrc: process.env.PUBLIC_URL + `/assets/gallery-content-1.jpg`,
    description: "한줄소개1",
  },
  {
    id: 2,
    imgSrc: process.env.PUBLIC_URL + `/assets/gallery-content-2.jpg`,
    description: "한줄소개2",
  },
  {
    id: 3,
    imgSrc: process.env.PUBLIC_URL + `/assets/gallery-content-3.jpg`,
    description: "한줄소개3",
  },
  {
    id: 4,
    imgSrc: process.env.PUBLIC_URL + `/assets/gallery-content-4.jpg`,
    description: "한줄소개4",
  },
  {
    id: 5,
    imgSrc: process.env.PUBLIC_URL + `/assets/gallery-content-5.jpg`,
    description: "한줄소개5",
  },
  {
    id: 6,
    imgSrc: process.env.PUBLIC_URL + `/assets/gallery-content-6.jpg`,
    description: "한줄소개6",
  },
];

const BusanGalleryList = [
  {
    id: 1,
    imgSrc: process.env.PUBLIC_URL + `/assets/gallery-content-1.jpg`,
    description: "한줄소개1",
  },
  {
    id: 2,
    imgSrc: process.env.PUBLIC_URL + `/assets/gallery-content-2.jpg`,
    description: "한줄소개2",
  },
  {
    id: 3,
    imgSrc: process.env.PUBLIC_URL + `/assets/gallery-content-3.jpg`,
    description: "한줄소개3",
  },
  {
    id: 4,
    imgSrc: process.env.PUBLIC_URL + `/assets/gallery-content-4.jpg`,
    description: "한줄소개4",
  },
  {
    id: 5,
    imgSrc: process.env.PUBLIC_URL + `/assets/gallery-content-5.jpg`,
    description: "한줄소개5",
  },
  {
    id: 6,
    imgSrc: process.env.PUBLIC_URL + `/assets/gallery-content-6.jpg`,
    description: "한줄소개6",
  },
];

const GalleryItemContent = ({ imgSrc, description }) => {
  return (
    <div className="gallery-item-content">
      <img src={imgSrc} alt="gallery item content" />
      <div>{description}</div>
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

            console.log(currentMargin.slice(0, -2));
            console.log(parseInt(currentMargin.slice(0, -2)));
            console.log(contentWidth);
            console.log(parseInt(currentMargin.slice(0, -2)) < contentWidth);
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
          className={`gallery-item-right-button-${type}`}
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
              totalWidth - Math.abs(currentMargin.slice(0, -2)) - contentWidth <
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
      <GalleryItem title="제주도" type={1} galleryList={JejuGalleryList} />
      <GalleryItem title="서울" type={2} galleryList={SeoulGalleryList} />
      <GalleryItem title="부산" type={3} galleryList={BusanGalleryList} />
    </div>
  );
};

export default Gallery;
