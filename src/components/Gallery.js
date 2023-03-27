import {
  JejuGalleryList,
  SeoulGalleryList,
  BusanGalleryList,
} from "../data/spring";

const GalleryItemContent = ({ imgSrc, description }) => {
  return (
    <div className="gallery-item-content">
      <img src={imgSrc} alt="gallery item content" />
      <div className="gallery-description">{description}</div>
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

        currentMargin = document.querySelector(`.gallery-items-${type}`).style
          .marginLeft;

        if (parseInt(currentMargin.slice(0, -2)) >= 0) {
          e.target.style.visibility = "hidden";
        }
      }}
    >
      &lt;
    </button>
  );
};

const GalleryItemRightButton = ({ type, galleryLength }) => {
  return (
    <button
      className={`gallery-item-right-button gallery-item-right-button-${type}`}
      onClick={(e) => {
        document.querySelector(
          `.gallery-item-left-button-${type}`
        ).style.visibility = "visible";

        const contentWidth = document.querySelector(
          ".gallery-item-content"
        ).offsetWidth;

        const totalWidth = galleryLength * contentWidth;

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

        currentMargin = document.querySelector(`.gallery-items-${type}`).style
          .marginLeft;

        if (
          totalWidth - Math.abs(currentMargin.slice(0, -2)) - visibleWidth <=
          0
        ) {
          e.target.style.visibility = "hidden";
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
        <GalleryItemRightButton
          type={type}
          galleryLength={galleryList.length}
        />
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
