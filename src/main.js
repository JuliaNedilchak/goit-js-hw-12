import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import axios from 'axios';
import 'simplelightbox/dist/simple-lightbox.min.css';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
loader.style.display = 'none';
form.addEventListener('submit', onFormSubmit);
function onFormSubmit(e) {
  e.preventDefault();
  const name = e.target.elements.text.value;
  getImages(name);

  form.reset();
}

async function getImages(imageName) {
  const BASE_URL = 'https://pixabay.com/api/';
  const params = `?key=42244412-4baf4dd8f3efd9c6d484c6d30&q=${imageName}&image_type=photo&orientation=horizontal&safesearch=true`;

  const url = BASE_URL + params;
  loader.style.display = 'block';
  const res = await axios.get(url);

  try {
    const images = await res;
    if (images.hits.length === 0) {
      gallery.innerHTML = '';
      loader.style.display = 'none';

      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    } else {
      loader.style.display = 'none';
      const markup = images.hits
        .map(image => {
          return `<li class="item"> <a class="gallery-link" href="${image.largeImageURL}">
    <img
      class="gallery-image"
     
      src="${image.webformatURL}"
      
      alt="${image.tags}"
    />
  </a><ul class="list">
  <li class="group"><p class="desc">likes<span class="amount">${image.likes}</span></p></li>
  <li class="group"><p class="desc">views<span class="amount"> ${image.views}</span></p></li>
  <li class="group"><p class="desc">comments<span class="amount"> ${image.comments}</span></p></li>
  <li class="group"><p class="desc">downloads<span class="amount"> ${image.downloads}</span></p></li>
  </ul>
  </li>`;
        })
        .join('');

      gallery.innerHTML = markup;
    }
    const lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
    lightbox.refresh();
  } catch (error) {
    toastError(`Error: ${error}`);
    throw error;
  }
  return;
}
