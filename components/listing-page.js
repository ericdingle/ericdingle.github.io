import {customElement} from '@polymer/decorators';
import {PolymerElement, html} from '@polymer/polymer';
import '@polymer/iron-ajax/iron-ajax.js';
import './style-module.js'

@customElement('listing-page')
class ListingPage extends PolymerElement {
  static get properties() { return {
    title: String,
    path: String
  }}

  static get template() {
    return html`
      <style include="style-module">
        span { float: right; }
      </style>
      <iron-ajax auto url="/content[[path]]/listing.json" handle-as="json" last-response="{{listing}}"></iron-ajax>
      <div>
        <h2>[[title]]</h2>
        <template is="dom-repeat" items="[[listing]]">
          <p>
            <template is="dom-if" if="[[item.date]]">
              <span>[[item.date]]</span>
            </template>
            <a href="#/[[item.path]]">[[item.title]]</a>
            <template is="dom-if" if="[[item.snippet]]">
              &nbsp;- [[item.snippet]]
            </template>
          </p>
        </template>
      </div>
    `;
  }
}
