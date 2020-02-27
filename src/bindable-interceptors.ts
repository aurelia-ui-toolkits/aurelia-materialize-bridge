export function toBoolean(val: unknown): unknown {
	if (val === undefined) {
		return undefined;
	}
	else if (val === null) {
		return null;
	}
	else {
		return (val || val === '') && val !== 'false' ? true : false;
	}
}
