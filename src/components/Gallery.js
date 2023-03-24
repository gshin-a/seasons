const galleryList = [
  {
    imgSrc: process.env.PUBLIC_URL + `/assets/gallery-content-1.jpg`,
    description: "한줄소개1",
  },
  {
    imgSrc: process.env.PUBLIC_URL + `/assets/gallery-content-2.jpg`,
    description: "한줄소개2",
  },
  {
    imgSrc: process.env.PUBLIC_URL + `/assets/gallery-content-3.jpg`,
    description: "한줄소개3",
  },
  {
    imgSrc: process.env.PUBLIC_URL + `/assets/gallery-content-4.jpg`,
    description: "한줄소개4",
  },
  {
    imgSrc: process.env.PUBLIC_URL + `/assets/gallery-content-5.jpg`,
    description: "한줄소개5",
  },
  {
    imgSrc: process.env.PUBLIC_URL + `/assets/gallery-content-6.jpg`,
    description: "한줄소개6",
  },
  {
    imgSrc: process.env.PUBLIC_URL + `/assets/gallery-content-7.jpg`,
    description: "한줄소개7",
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

const GalleryItem = ({ title, type }) => {
  return (
    <div className="gallery-item">
      <h2>{title}</h2>
      <div className="gallery-item-wrapper">
        <button
          onClick={() => {
            const contentWidth = document.querySelector(
              ".gallery-item-content"
            ).offsetWidth;

            let currentMargin = document.querySelector(`.gallery-items-${type}`)
              .style.marginLeft;

            if (currentMargin.length < 1 || currentMargin === "0px") {
              console.log("이미지가 없습니다.");
            } else {
              const newMargin =
                parseInt(contentWidth) + parseInt(currentMargin.slice(0, -2));

              document.querySelector(
                `.gallery-items-${type}`
              ).style.marginLeft = `${newMargin}px`;
              console.log(
                "현재 marginLeft: " +
                  document.querySelector(`.gallery-items-${type}`).style
                    .marginLeft
              );
            }
          }}
        >
          &lt;
        </button>
        <div className="gallery-items-visible">
          <div className={"gallery-items" + ` gallery-items-${type}`}>
            {galleryList.map((it) => (
              <GalleryItemContent
                imgSrc={it.imgSrc}
                description={it.description}
              />
            ))}
          </div>
        </div>
        <button
          onClick={() => {
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
            console.log(
              "현재 marginLeft: " +
                document.querySelector(`.gallery-items-${type}`).style
                  .marginLeft
            );

            currentMargin = document.querySelector(`.gallery-items-${type}`)
              .style.marginLeft;
            console.log(totalWidth - Math.abs(currentMargin.slice(0, -2)));
            if (
              totalWidth - Math.abs(currentMargin.slice(0, -2)) <
              visibleWidth
            ) {
              console.log("이미지 끝");
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
      <GalleryItem title="제주도" type={1} />
      <GalleryItem title="서울" type={2} />
      <GalleryItem title="부산" type={3} />
    </div>
  );
};

export default Gallery;
