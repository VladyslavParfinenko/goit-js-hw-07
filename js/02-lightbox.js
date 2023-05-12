import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');


const createItem = ({preview,original,description}) => `<li class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</li>`;



const createGallery = galleryItems.map(createItem).join("");

gallery.insertAdjacentHTML("beforeend",createGallery);
console.log(galleryItems);




const lightbox  = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,  
  });
console.log(lightbox);