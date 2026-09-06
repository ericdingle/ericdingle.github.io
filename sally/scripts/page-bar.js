(function() {

const template = document.createElement('template');
template.innerHTML = `
  <style>
  :host {
    background-color: #eef1f6;
    display: block;
    font-family: Montserrat;
    font-size: 40px;
    font-weight: 500;
    padding: 50px 0;
    text-align: center;
  }
  </style>
  <slot></slot>
`;

class PageBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('page-bar', PageBar);

})();
