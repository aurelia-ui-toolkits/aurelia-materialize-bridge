export class Multiple {
  selectedFiles;

  filesChanged(e) {
    console.log('-- files changed', e.detail.files);
  }
}
