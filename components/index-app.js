import {customElement} from '@polymer/decorators';
import {PolymerElement, html} from '@polymer/polymer';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/effects/waterfall.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/hardware-icons.js';
import '@polymer/iron-icons/image-icons.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-item/paper-icon-item.js';
import '@polymer/paper-listbox/paper-listbox.js';
import './listing-page.js';
import './google-analytics.js';
import './markdown-page.js';
import './style-module.js';

@customElement('index-app')
class IndexApp extends PolymerElement {
  setDefaultRoute() {
    if (!this.route.path) {
      this.set('route.path', '/' + this.pages[0].page);
    }
  }
  onActivate(e) {
    this.selected = this.$.pages.itemForElement(e.detail.item);
    this.tail = '';  // For when the same item is clicked again.
  }

  static get template() {
    return html`
      <style include="style-module">
        app-drawer {
          text-align: center;
          --app-drawer-content-container: {
            background-color: var(--bg-color);
          }
        }
        app-drawer img {
          border-radius: 75px;
          margin: 10px;
        }

        paper-listbox {
          --paper-listbox-background-color: var(--bg-color);
          --paper-listbox-color: var(--fore-color);
        }
        paper-icon-item {
          cursor: pointer;
          --paper-item-selected: {
            background-color: var(--link-color);
          };
        }

        app-header-layout {
          max-width: 1000px;
        }
        app-header {
          background-color: var(--bg-color);
        }
        app-drawer-layout:not([narrow]) paper-icon-button[drawer-toggle] {
          display: none;
        }
        paper-icon-button {
          float: right;
        }
      </style>
      <app-location route="{{route}}" use-hash-as-path></app-location>
      <app-route route="{{route}}" pattern="/:value" data="{{page}}" tail="{{tail}}"></app-route>
      <google-analytics path="[[route.path]]"></google-analytics>

      <iron-ajax auto url="/content/pages.json" handle-as="json" last-response="{{pages}}" on-response="setDefaultRoute"></iron-ajax>

      <app-drawer-layout>
        <app-drawer id="drawer" slot="drawer" opened="{{opened}}">
          <img src="/images/ericdingle.jpg" width="150" height="150">
          <paper-listbox attr-for-selected="page" selected="{{page.value}}" on-iron-activate="onActivate">
            <template is="dom-repeat" id="pages" items="{{pages}}">
              <paper-icon-item page="{{item.page}}" drawer-toggle>
                <iron-icon icon="{{item.icon}}" slot="item-icon"></iron-icon>{{item.title}}
              </paper-icon-item>
            </template>
          </paper-listbox>
        </app-drawer>
        <app-header-layout>
          <app-header slot="header" effects="waterfall" fixed>
            <paper-icon-button icon="menu" drawer-toggle></paper-icon-button>
            <h1>Eric Dingle</h1>
            <p>With programming my mind I flex.</p>
          </app-header>
          <iron-pages attr-for-selected="path" selected="[[route.path]]" selected-attribute="visible" fallback-selection="[[route.path]]">
            <listing-page title="[[selected.title]]" path="/[[page.value]]"></listing-page>
            <markdown-page path="[[route.path]]"></markdown-page>
          </iron-pages>
        </app-header>
      </app-drawer-layout>
    `;
  }
}
