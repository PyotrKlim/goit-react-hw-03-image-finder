import { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
  handalKeyDown = e => {
    if (e.key === 'Escape') {
      this.props.switchModal();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handalKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handalKeyDown);
  }

  render() {
    return createPortal(
      <div className={css.Overlay} onClick={this.props.switchModal}>
        <div className={css.Modal}>
          <img
            src={this.props.largeImageURL}
            alt={this.props.user}
            className={css.Modal}
          />
        </div>
      </div>,
      modalRoot
    );
  }
}
export default Modal;

Modal.propTypes = {
  largeImageURL: PropTypes.string,
  user: PropTypes.string.isRequired,
  switchModal: PropTypes.func.isRequired,
};
