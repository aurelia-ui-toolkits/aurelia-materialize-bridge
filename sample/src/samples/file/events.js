import { computedFrom } from 'aurelia-framework';

export class Multiple {
  labelValue;

  @computedFrom('fileInput.files');
  get selectedFiles() {
    return [].slice.call(this.fileInput.files);
  }

  filesChanged(e) {
    let files = [];
    [].forEach.call(e.detail.files, file => {
      files.push(`${file.name} (${file.size} bytes)`);
    });
    this.logger.log(`files changed ${files.join(', ')}`);
  }
}
