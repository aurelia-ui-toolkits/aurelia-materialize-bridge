export class BasicUse {
  selectedFile;

  filesChanged(e) {
    console.log('-- files changed', e.detail.files);
  }
}
