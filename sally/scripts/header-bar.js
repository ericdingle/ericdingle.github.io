(function() {

const template = document.createElement('template');
template.innerHTML = `
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet"/>
  <style>
  #contact, #nav {
    display: flex;
    justify-content: space-between;
  }
  a {
    text-decoration: none;
  }

  #contact {
    background-color: #000;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 600;
    padding: 10px 125px;
  }
  #contact, #contact a {
    color: #fff;
  }
  #contact span {
    font-size: 14px;
    vertical-align: middle;
  }
  #contact span.flip {
    transform: scaleX(-1);
  }

  #nav {
    align-items: center;
    padding: 15px 125px;
  }
  #nav a {
    color: #000;
  }
  #nav .left {
    font-family: Open Sans;
    font-size: 36px;
    font-weight: 600;
  }
  #nav .right {
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 600;
  }
  #nav .right a {
    margin: 0 10px;
  }
  #nav a.highlight {
    color: #53939C;
  }
  </style>
  <div id="contact">
    <div>
      <span class="material-symbols-outlined flip">phone_enabled</span> 403-217-1054
      &nbsp;&nbsp;&nbsp;
      <span class="material-symbols-outlined">mail</span> sallymacgregor@shaw.ca
    </div>
    <div>
      <a href="https://www.facebook.com/Sally-MacGregor-Studio-197088460707081">facebook</a> |
      <a href="https://www.instagram.com/sally.macgregor">instagram</a>
    </div>
  </div>
  <div id="nav">
    <div class="left">
      <a href="index.html">sally macgregor studio</a>
    </div>
    <div class="right">
      <a id="home" href="index.html">Home</a>
      <a id="bio" href="bio.html">Biography</a>
      <a id="gallery" href="gallery.html">Gallery</a>
      <a id="shows" href="shows.html">Shows</a>
      <a id="purchase" href="purchase.html">Purchase</a>
    </div>
  </div>
`;

class HeaderBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    const node = this.shadowRoot.querySelector(`#${this.getAttribute('page')}`);
    if (node) {
      node.className = 'highlight';
    }
  }
}

customElements.define('header-bar', HeaderBar);

})();
