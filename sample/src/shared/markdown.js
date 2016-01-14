import {bindable, noView, inject, customElement} from 'aurelia-framework';
import 'showdown';
import 'google/code-prettify/loader/run_prettify';
import 'showdown-prettify';
import {Loader}  from 'aurelia-loader';

@customElement('au-markdown')
@noView
@inject(Element, Loader)
export class AuMarkdown {

  @bindable url;

  constructor(element, loader) {
    this.element = element;
    this.loader = loader;
    this.converter = new showdown.Converter({extensions: ['prettify']});
  }

  urlChanged() {
    if (this.url) {
      this.loader.loadText(this.url)
      .then(text => {
        this.element.innerHTML = this.converter.makeHtml(text);
        PR.prettyPrint();
      }).then(() => {
        let event = new CustomEvent('loaded', {
          bubbles: true
        });
        this.element.dispatchEvent(event);
      });
    } else {
      this.element.innerHTML = '';
    }
  }
}
