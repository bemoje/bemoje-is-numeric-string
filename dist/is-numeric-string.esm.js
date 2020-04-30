/**
 * Determine whether a value is a numeric string.
 * @param {*} value - The value
 * @returns {boolean}
 */
function isNumericString(value) {
	if (typeof value === 'string' && value.trim() !== '') {
		return Number.isFinite(+value)
	}

	return false
}

export default isNumericString;
