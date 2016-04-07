import { computedFrom } from 'aurelia-framework';

export class BasicUse {
  labelValue;

  @computedFrom('fileInput.files');
  get selectedFile() {
    return this.fileInput.files.length > 0 ? this.fileInput.files[0] : '';
  }
}
