if (!String.prototype.padStart) {
	String.prototype.padStart = function padStart(targetLength: number, padString: string) {
		// tslint:disable-next-line:no-bitwise
		targetLength = targetLength >> 0; // truncate if number or convert non-number to 0;
		padString = String((typeof padString !== "undefined" ? padString : " "));
		if (this.length > targetLength) {
			return String(this);
		}
		else {
			targetLength = targetLength - this.length;
			if (targetLength > padString.length) {
				padString += padString.repeat(targetLength / padString.length); // append to original to ensure we are longer than needed
			}
			return padString.slice(0, targetLength) + String(this);
		}
	};
}
