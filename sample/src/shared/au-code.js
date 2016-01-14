import {inject, bindable, noView, customElement, processContent, TargetInstruction} from 'aurelia-framework';
import prism from 'prism';
import 'prism/themes/prism.css!';
import {Loader}  from 'aurelia-loader';

@processContent((compiler, resources, element, instruction) => {
  parseCode(element, resources, instruction);
  return true;
})
@customElement('au-code')
@noView
@inject(Element, TargetInstruction, Loader)
export class AuCode {

  @bindable language;
  @bindable url;

  constructor(element, targetInstruction, loader) {
    this.element = element;
    this.loader = loader;
    this.html = targetInstruction.behaviorInstructions[0].html;
  }

  urlChanged() {
    if (this.url) {
      this.loader.loadText(this.url)
      .then(text => {
        this.html = text;
        this.render();
      });
    } else {
      this.html = '';
      this.render();
    }
  }

  attached() {
    this.render();
  }

  render() {
    jQuery('pre', this.element).remove();
    let pre = document.createElement('pre');
    this.element.appendChild(pre);
    pre.innerHTML = prism.highlight(this.html, Prism.languages[this.language]);
  }
}

function parseCode(element, resources, instruction) {
  instruction.html = dedent(decodeHtml(element.innerHTML));
}

function decodeHtml(html) {
  let txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
}

function dedent(str) {
  let match = str.match(/^[ \t]*(?=\S)/gm);
  if (!match) return str;

  let indent = Math.min.apply(Math, match.map(function(el) {
    return el.length;
  }));

  let re = new RegExp('^[ \\t]{' + indent + '}', 'gm');
  return indent > 0 ? str.replace(re, '') : str;
}
