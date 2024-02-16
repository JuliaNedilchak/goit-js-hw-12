import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadButton = document.querySelector('.load');

export let imageName = null;
export let pageNumber = 1;
export const amountPerPage = 15;
let totalResult = 0;

import { getImages } from './js/pixabay-api';

loader.style.display = 'none';
loadButton.style.display = 'none';
form.addEventListener('submit', onFormSubmit);
async function onFormSubmit(e) {
  e.preventDefault();
  const name = e.target.elements.text.value;
  imageName = name;
  loader.style.display = 'block';
  pageNumber = 1;
  const images = await getImages(name);
  totalResult = images.totalHits;
  if (images.hits.length === 0) {
    gallery.innerHTML = '';
    loader.style.display = 'none';
    loadButton.style.display = 'none';
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
    loadButton.style.display = 'block';
  }

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
  lightbox.refresh();
  checkButtonStatus();
  form.reset();
}
loadButton.addEventListener('click', loadMoreClick);

async function loadMoreClick() {
  pageNumber += 1;
  loader.style.display = 'block';

  const images = await getImages();

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

  gallery.insertAdjacentHTML('beforeend', markup);
  scrollAnotherGroup();
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });

  lightbox.refresh();

  checkButtonStatus();
  form.reset();
}
function checkButtonStatus() {
  const maxPages = Math.ceil(totalResult / amountPerPage);
  const isLastPage = maxPages === pageNumber;
  if (isLastPage) {
    loadButton.style.display = 'none';
    iziToast.error({
      message: "We're sorry, but you've reached the end of search results.",
    });
  }
}
function scrollAnotherGroup() {
  const galleryItemHeight = gallery
    .querySelector('.item')
    .getBoundingClientRect().height;

  window.scrollBy({
    top: galleryItemHeight * 2,
    behavior: 'smooth',
    left: 0,
  });
}
