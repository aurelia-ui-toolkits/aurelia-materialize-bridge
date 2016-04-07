import { computedFrom } from 'aurelia-framework';

export class Multiple {
  labelValue;

  @computedFrom('fileInput.files');
  get selectedFiles() {
    return [].slice.call(this.fileInput.files);
  }
}
