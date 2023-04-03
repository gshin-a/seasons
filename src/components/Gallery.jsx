import { useState } from "react";

const GalleryItemContent = ({ imgSrc, description }) => {
  const [openDetail, setOpenDetail] = useState(false);

  return (
    <div
      className="gallery-item-content"
      onClick={() => setOpenDetail(!openDetail)}
    >
      <img src={imgSrc} alt="gallery item content" />
      <div className="gallery-description">{description}</div>
      <div>
        {openDetail && (
          <div className="gallery-item-content-detail">
            <img src={imgSrc} alt="gallery item content" />
            <div>{description}</div>
          </div>
        )}
      </div>
    </div>
  );
};

const GalleryItemLeftButton = ({ type }) => {
  return (
    <button
      className={`gallery-item-left-button gallery-item-left-button-${type}`}
      onClick={(e) => {
        document.querySelector(
          `.gallery-item-right-button-${type}`
        ).style.pointerEvents = "all";
        document.querySelector(
          `.gallery-item-right-button-${type}`
        ).style.opacity = "1";

        const contentWidth = document.querySelector(
          ".gallery-item-content"
        ).offsetWidth;

        let currentMargin = document.querySelector(`.gallery-items-${type}`)
          .style.marginLeft;
        const newMargin =
          parseInt(contentWidth) + parseInt(currentMargin.slice(0, -2)) + 10;

        document.querySelector(
          `.gallery-items-${type}`
        ).style.marginLeft = `${newMargin}px`;

        currentMargin = document.querySelector(`.gallery-items-${type}`).style
          .marginLeft;

        if (parseInt(currentMargin.slice(0, -2)) >= 0) {
          e.target.style.pointerEvents = "none";
          e.target.style.opacity = "0.5";
        }
      }}
    >
      &lt;
    </button>
  );
};

const GalleryItemRightButton = ({ type }) => {
  return (
    <button
      className={`gallery-item-right-button gallery-item-right-button-${type}`}
      onClick={(e) => {
        document.querySelector(
          `.gallery-item-left-button-${type}`
        ).style.pointerEvents = "all";
        document.querySelector(
          `.gallery-item-left-button-${type}`
        ).style.opacity = "1";

        const contentWidth = document.querySelector(
          ".gallery-item-content"
        ).offsetWidth;

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
            parseInt(currentMargin.slice(0, -2)) - parseInt(contentWidth) - 10;

          document.querySelector(
            `.gallery-items-${type}`
          ).style.marginLeft = `${newMargin}px`;
        }

        currentMargin = document.querySelector(`.gallery-items-${type}`).style
          .marginLeft;

        const totalWidth = document.querySelector(".gallery-items").offsetWidth;

        if (
          totalWidth - Math.abs(currentMargin.slice(0, -2)) - visibleWidth <=
          0
        ) {
          e.target.style.pointerEvents = "none";
          e.target.style.opacity = "0.5";
        }
      }}
    >
      &gt;
    </button>
  );
};

const GalleryItem = ({ title, type, galleryList }) => {
  return (
    <div className="gallery-item">
      <h2>{title}</h2>
      <div className="gallery-item-wrapper">
        <GalleryItemLeftButton type={type} />
        <div className="gallery-items-visible">
          <div className={`gallery-items gallery-items-${type}`}>
            {galleryList.map(({ id, imgSrc, description }) => (
              <GalleryItemContent
                key={id}
                imgSrc={imgSrc}
                description={description}
              />
            ))}
          </div>
        </div>
        <GalleryItemRightButton
          type={type}
          galleryLength={galleryList.length}
        />
      </div>
    </div>
  );
};

const Gallery = ({ JejuGalleryList, SeoulGalleryList, BusanGalleryList }) => {
  return (
    <div className="gallery">
      <GalleryItem title="Jeju Island" type={1} galleryList={JejuGalleryList} />
      <GalleryItem title="Seoul" type={2} galleryList={SeoulGalleryList} />
      <GalleryItem title="Busan" type={3} galleryList={BusanGalleryList} />
    </div>
  );
};

export default Gallery;
