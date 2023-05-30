import GalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';

const GalleryList = ({ images }) => {
  return (
    <>
      <ul className={css.ImageGallery}>
        {images.map(({ id, webformatURL, user, largeImageURL }) => (
          <GalleryItem
            id={id}
            key={id}
            webformatURL={webformatURL}
            user={user}
            largeImageURL={largeImageURL}
          />
        ))}
      </ul>
    </>
  );
};

export default GalleryList;

GalleryList.propTypes = {
  images: PropTypes.array.isRequired,
};
