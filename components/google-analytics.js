import {customElement} from '@polymer/decorators';
import {PolymerElement, html} from '@polymer/polymer';

@customElement('google-analytics')
class GoogleAnalytics extends PolymerElement {
  static get properties() { return {
    path: {
      type: String,
      observer: 'pathChanged'
    }
  }}

  connectedCallback() {
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-83209989-2', 'auto');
  }

  pathChanged(path) {
    if (path) {
      ga('send', 'pageview', path);
    }
  }
}