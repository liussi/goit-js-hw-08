import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";


import { galleryItems } from './gallery-items';

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const markup = galleryItems.map(({preview, original, description}) => `<li class="gallery__item">
<a class="gallery__link" onclick="return false" href="${original}">
   <img class="gallery__image" src="${preview}" alt="${description}"  />
</a>
</li>
`);
galleryEl.insertAdjacentHTML('beforeend', markup.join(''));

let lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay : 250,
 });