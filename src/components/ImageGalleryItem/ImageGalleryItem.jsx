import { Component } from 'react';
import Modal from 'components/Modal/Modal';
import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

class GalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    if (this.state.showModal === true) {
      this.setState({ showModal: false });
      return;
    }
    this.setState({ showModal: true });
  };

  render() {
    const { webformatURL, user, largeImageURL } = this.props;
    return (
      <li className={css.ImageGalleryItem}>
        <img
          onClick={this.toggleModal}
          src={webformatURL}
          alt={user}
          className={css.ImageGalleryItemImage}
        />
        {this.state.showModal && (
          <Modal
            largeImageURL={largeImageURL}
            user={user}
            switchModal={this.toggleModal}
          />
        )}
      </li>
    );
  }
}

export default GalleryItem;

GalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
