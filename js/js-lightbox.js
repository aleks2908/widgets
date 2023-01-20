const gallery = document.querySelector(".gallery");

let markup = '';

for (let i = 1; i < 73; i += 1){
  markup += `<a class="gallery__item" href="./img/${i}.jpg">
      <img class="gallery__image" src="./img/${i}.jpg" loading="lazy" alt="" /></a>`;
}

gallery.innerHTML = markup;

new SimpleLightbox(".gallery a", {
  // captionsData: "alt",
  // captionDelay: 250,
});
