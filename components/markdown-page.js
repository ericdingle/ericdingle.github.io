import {customElement} from '@polymer/decorators';
import {PolymerElement, html} from '@polymer/polymer';
import '@polymer/marked-element';
import './building-projects-header.js';
import './style-module.js';

@customElement('markdown-page')
class MarkdownPage extends PolymerElement {
  static get properties() { return {
    path: String,
    visible: {
      type: Boolean,
      observer: 'visibleChanged'
    }
  }}

  visibleChanged(visible) {
    if (visible) {
      this.source = '/content' + this.path + '.md';
    }
  }

  static get template() {
    return html`
      <style include="style-module"></style>
      <marked-element disable-remote-sanitization>
        <div slot="markdown-html"></div>
        <script type="text/markdown" src$="[[source]]"></script>
      </marked-element>
    `
  }
}
