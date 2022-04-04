export function notNullOrEmpty(value) {
	if (value == undefined || value === '' || value == null) {
		return false;
	} else {
		return true;
	}
}

export function isValidNumeric(value) {
	if (notNullOrEmpty(value)) {
		return !isNaN(value);
	} else {
		return false;
	}
}
