export class MdToastService {
  removeAll() {
    Materialize.Toast.removeAll();
  }

  show(message, displayLength, className?) {
    return new Promise((resolve, reject) => {
      Materialize.toast(message, displayLength, className, () => {
        resolve();
      });
    });
  }
}
