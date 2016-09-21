export class Carousel {
  images = [];

  attached() {
    this.images = [
      { url: 'http://lorempixel.com/250/250/nature/1' },
      { url: 'http://lorempixel.com/250/250/nature/2' },
      { url: 'http://lorempixel.com/250/250/nature/3' },
      { url: 'http://lorempixel.com/250/250/nature/4' }
    ];
  }

  addImage() {
    let nextImage = this.images.length + 1;
    this.images.push({ url: `http://lorempixel.com/250/250/nature/${nextImage}`});
  }
}
