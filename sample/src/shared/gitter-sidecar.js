import {inject} from 'aurelia-dependency-injection';
import {bindable} from 'aurelia-framework';

@inject(Element)
export class GitterSidecar {

  @bindable room;
  @bindable autoLoad = false;

  constructor(element) {
    this.element = element;
  }

  attached() {
    if (!window.gitter) {
      throw new Error('Gitter sidecar is not loaded');
    }

    this.initialize();
  }

  initialize() {
    this.chat = new window.gitter.Chat({
      room: this.room,
      targetElement: this.element
    });

    if (this.autoLoad === true) {
      this.toggleChat(true);
    }
  }

  toggleChat(bool) {
    if (!this.chat) {
      throw new Error('Chat is not initialized');
    }

    this.chat.toggleChat(bool);
  }

  detached() {
    this.chat.destroy();
  }
}
