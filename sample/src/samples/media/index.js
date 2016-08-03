import { useView } from 'aurelia-framework';

@useView('shared/showcase.html')
export class Index {
  configureRouter(config, router) {
    config.title = 'Media';
    config.map([
      { route: ['', 'box'], moduleId: './box', nav: true, title: 'Material Box (basic)' },
      { route: 'box-caption', moduleId: './box-caption', nav: true, title: 'Material Box (caption)' },
      { route: 'slider', moduleId: './slider', nav: true, title: 'Slider' },
      { route: 'slider-fullscreen', moduleId: './slider-fullscreen', nav: true, title: 'Slider (fullscreen)' },
      { route: 'slider-api', moduleId: './slider-api', nav: true, title: 'Slider (API)' },
      { route: 'slider-options', moduleId: './slider-options', nav: true, title: 'Slider (Options)' },
      { route: 'carousel', moduleId: './carousel', nav: true, title: 'Carousel (basic)' },
      { route: 'carousel-slider', moduleId: './carousel-slider', nav: true, title: 'Carousel (slider)' },
      { route: 'carousel-special', moduleId: './carousel-special', nav: true, title: 'Carousel (Special)' }
    ]);

    this.router = router;
  }
}
