import { computedFrom } from 'aurelia-framework';

export class BasicUse {
  labelValue;

  @computedFrom('fileInput.files');
  get selectedFile() {
    return this.fileInput.files.length > 0 ? this.fileInput.files[0] : '';
  }

  filesChanged(e) {
    console.log('-- files changed', e.detail.files);
  }
}
