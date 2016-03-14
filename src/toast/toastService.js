export class MdToastService {
  show(message: string, displayLength: int, className?: string) {
    return new Promise((resolve, reject) => {
      Materialize.toast(message, displayLength, className, () => {
        resolve();
      });
    });
  }
}
