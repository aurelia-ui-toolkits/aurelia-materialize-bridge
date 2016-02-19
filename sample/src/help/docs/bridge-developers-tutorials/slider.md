<br>

### 5. Slider
<br>

This wrapper encapsulates the Materialize [slider control](http://materializecss.com/media.html#slider), ensuring that it behaves as a standard Aurelia component. See how the Aurelia application uses this component **[here](#/samples/media/slider)**.
<br>

File `slider.js`
<br>
```javascript
import { bindable, customElement, inlineView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('md-slider')
@inject(Element)
@inlineView(`
  <template class="slider">
  <require from="./slider.css"></require>
  <ul class="slides">
    <content select="li"></content>
  </ul>
  </template>
`)
export class MdSlider {
  @bindable() mdFillContainer = false;
  @bindable() mdHeight = 400;
  @bindable() mdIndicators = true;
  @bindable() mdInterval = 6000;
  @bindable() mdTransition = 500;

  constructor(element) {
    this.element = element;
  }

  attached() {
    if (getBooleanFromAttributeValue(this.mdFillContainer)) {
      this.element.classList.add('fullscreen');
    }
    // $(this.element).slider({full_width: true});
    $(this.element).slider({
      height: parseInt(this.mdHeight, 10),
      indicators: getBooleanFromAttributeValue(this.mdIndicators),
      interval: parseInt(this.mdInterval, 10),
      transition: parseInt(this.mdTransition, 10)
    });
  }

  pause() {
    $(this.element).slider('pause');
  }

  start() {
    $(this.element).slider('start');
  }

  next() {
    $(this.element).slider('next');
  }

  prev() {
    $(this.element).slider('prev');
  }
}

```
<br>

File `slide.js`
<br>
```javascript
import { bindable, containerless, customElement, inlineView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';

@customElement('md-slide')
@inject(Element)
@containerless()
@inlineView(`
  <template>
  <li>
    <img src.bind="img" />
    <div class="caption" ref="caption">
      <content></content>
    </div>
  </li>
  </template>
`)
export class MdSlide {
  @bindable() captionAlign = 'left';
  @bindable() img;

  constructor(element) {
    this.element = element;
  }

  attached() {
    if (this.captionAlign) {
      let align = `${this.captionAlign}-align`;
      this.caption.classList.add(align);
    }
  }

  detached() {
    if (this.captionAlign) {
      let align = `${this.captionAlign}-align`;
      this.caption.classList.remove(align);
    }
  }
}

```

<br>
* * *
#### Next page: &nbsp;&nbsp; [Collapsible component](#/help/docs/bridge_developers_tutorials/6._collapsible_component)
