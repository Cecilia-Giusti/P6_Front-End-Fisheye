// Classe pour créer une page
class MediaCard {
  constructor(media, likes, likeSubject) {
    this._media = media;
    this._count = media.likes;
    this.likeSubject = likeSubject;

    this.$wrapper = document.createElement("article");
  }

  likeButton() {
    const that = this;

    let numberLikes = this._count;

    this.$wrapper
      .querySelector(".like-btn")
      .addEventListener("click", function () {
        if (this.parentNode.classList.contains("liked")) {
          console.log(this.parentNode.firstChild);

          this.parentNode.classList.remove("liked");
          numberLikes -= 1;
          this.parentNode.firstChild.innerHTML = numberLikes;
        } else {
          this.parentNode.classList.add("liked");
          numberLikes += 1;
          this.parentNode.firstChild.innerHTML = numberLikes;
        }
      });
  }

  // Méthode pour la création d'une carte dans la galerie d'un photographe
  createMediaCard() {
    const photographerCard = `
    ${this._media.media}
    <div class="section-gallery_content">
      <h3>${this._media.title}</h3>
      <p><span class="like-count">${this._count} </span> <i class="fas fa-heart fa-lg like-btn"></i></p> 
    </div>
    `;
    this.$wrapper.innerHTML = photographerCard;
    this.likeButton();
    return this.$wrapper;
  }
}
