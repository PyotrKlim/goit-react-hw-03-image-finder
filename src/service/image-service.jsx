import axios from 'axios';

const API_KEY = '32425151-8581e247cf8f5cbfa3d104b42';
axios.defaults.baseURL = 'https://pixabay.com/api';

export const getImages = async (query, page) => {
  const params = {
    q: query,
    page,
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  };

  const response = await axios.get('/', {
    params,
  });

  return response.data;
};
