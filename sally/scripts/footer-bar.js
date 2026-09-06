(function() {

const template = document.createElement('template');
template.innerHTML = `
  <style>
  :host {
    background-color: #000;
    display: block;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 600;
    padding: 10px 125px;
    text-align: right;
  }
  :host, a {
    color: #fff;
  }
  a {
    text-decoration: none;
  }
  </style>
  <a href="https://www.facebook.com/Sally-MacGregor-Studio-197088460707081">facebook</a> |
  <a href="https://www.instagram.com/sally.macgregor">instagram</a>
`;

class FooterBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('footer-bar', FooterBar);

})();
