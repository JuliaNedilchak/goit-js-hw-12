import axios from 'axios';
import { pageNumber } from '../main';
import { imageName } from '../main';
import { amountPerPage } from '../main';
export async function getImages() {
  axios.defaults.baseURL = 'https://pixabay.com/api/';

  const response = await axios.get('', {
    params: {
      key: '42244412-4baf4dd8f3efd9c6d484c6d30',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      q: imageName,
      page: pageNumber,
      per_page: amountPerPage,
    },
  });
  return response.data;
}
