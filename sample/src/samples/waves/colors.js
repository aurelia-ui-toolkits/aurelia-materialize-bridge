export class Colors {
  constructor() {
    this.tabs = [];
    this.tabs.push({ isActive: true,  title: 'html' });
    this.tabs.push({ title: 'css' });
  }
  attached() {
    // $('ul.tabs').tabs();
  }
}
