(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, global['is-numeric-string'] = factory());
}(this, (function () { 'use strict';

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

	return isNumericString;

})));
