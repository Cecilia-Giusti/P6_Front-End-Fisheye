/* eslint-disable no-unused-vars */

/**Constructor Pattern - Pour les médias images
 * @constructor
 * @param {object} data - Un média image
 */
class MediaImg {
  constructor(data) {
    this._photographerId = data.photographerId;
    this._title = data.title;
    this._media = data.image;
    this._likes = data.likes;
    this._id = data.id;
  }

  get photographerId() {
    return this._photographerId;
  }

  get title() {
    return this._title;
  }

  get media() {
    const picture = `
    <img 
      role="link" 
      tabindex="0" 
      src="assets/medias/${this._media}" 
      alt="${this._title}, closeup view" 
      data-id="${this._id}"
      loading="lazy"
      />`;
    return picture;
  }

  get likes() {
    return this._likes;
  }
}
