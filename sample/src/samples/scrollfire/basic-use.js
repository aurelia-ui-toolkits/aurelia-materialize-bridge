export class BasicUse {
  attached() {
    let options = [ ];
    let self = this;
    // $('[md-scrollfire-target]', $('.scrollfire-container')).each((i, el)=> {
    //   options.push({
    //     selector: `.scrollfire-container [md-scrollfire-target]:nth-of-type(${i + 1})`,
    //     callback: self.firstTarget
    //   });
    // });
    // $('.scrollfire-container').children().each((i, el) => {
    //   if ($(el).has('[md-scrollfire-target]')) {
    //     options.push({
    //       selector: `.scrollfire-container [md-scrollfire-target]:nth-of-type(${i + 1})`,
    //       callback: self.firstTarget
    //     });
    //   }
    // });
    // Materialize.scrollFire(options);
  }
  firstTarget() {
    console.log('scrollfire #1');
  }
  secondTarget() {
    console.log('scrollfire #2');
  }
}
