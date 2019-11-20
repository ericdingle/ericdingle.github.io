import {customElement} from '@polymer/decorators';
import {PolymerElement, html} from '@polymer/polymer';
import './style-module.js';

@customElement('building-projects-header')
class BuildingProjectsHeader extends PolymerElement {
  static get properties() { return {
    'imgurImageId': String,
    'imgurAlbumId': String,
    'redditCommentId': String
  }}

  static get template() {
    return html`
      <style include="style-module"></style>
      <p><img src="//i.imgur.com/[[imgurImageId]]m.jpg"/></p>
      <p>
        Links:
        <a href="//imgur.com/a/[[imgurAlbumId]]">Imgur album</a>,
        <a href="//reddit.com/r/DIY/comments/[[redditCommentId]]">Reddit DIY thread</a>
      </p>
    `;
  }
}
