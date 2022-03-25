// Classe pour créer une page
class MediaCard {
  constructor(media) {
    this._media = media;
  }

  // Méthode pour la création d'une carte dans la galerie d'un photographe
  createMediaCard() {
    const $wrapper = document.createElement("article");
    //const photographerName = ;
    const picture = `assets/medias/${this._media.media}`;

    const photographerCard = `
      <img src="${picture}" alt="${this._media.title}" />
      <div class="section-gallery_content">
        <h3>${this._media.title}</h3>
        <p>${this._media.likes}  <i class="fas fa-heart fa-lg"></i></p> 
      </div>
            `;
    $wrapper.innerHTML = photographerCard;
    return $wrapper;
  }
}
