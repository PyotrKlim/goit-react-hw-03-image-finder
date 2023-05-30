import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import GalleryList from './ImageGallery/ImageGallery';
import css from './styles.css';
import * as ImageService from '../service/image-service';
import Button from './Button/Button';
import Loader from './Loader/Loader';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    isLoading: false,
    error: '',
    totalImages: 0,
  };

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      try {
        this.setState({ isLoading: true, error: '' });
        const data = await ImageService.getImages(query, page);

        this.setState(prevState => {
          return {
            images: [...prevState.images, ...data.hits],
            totalImages: data.totalHits,
          };
        });
      } catch (error) {
        this.setState({ error: 'Something went wrong' });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  getQuery = query => {
    if (query === this.state.query) {
      alert('Change request');
      return;
    }
    this.setState({ query, images: [], page: 1, totalImages: 0 });
  };

  pagePlus = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  render() {
    const { images, error, totalImages, isLoading } = this.state;
    const showButton = images.length !== totalImages && !isLoading;

    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.getQuery} />
        {isLoading && <Loader />}
        {images.length > 0 && <GalleryList images={images} />}
        {error && <p>{error}</p>}
        {showButton && <Button onClick={this.pagePlus} />}
      </div>
    );
  }
}
