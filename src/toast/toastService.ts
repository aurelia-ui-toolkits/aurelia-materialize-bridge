declare var Materialize: any;

export class MdToastService {
	removeAll() {
		Materialize.Toast.removeAll();
	}

	show(message: string, displayLength: number, className?: string) {
		return new Promise((resolve, reject) => {
			const toastInstance = Materialize.toast(message, displayLength, className, () => {
				resolve(toastInstance);
			});
		});
	}
}
