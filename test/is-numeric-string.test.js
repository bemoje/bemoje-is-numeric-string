import isNumericString from '../src/is-numeric-string'

describe('isNumericString', () => {
	test('works', () => {
		expect(isNumericString('a')).toBe(false)
		expect(isNumericString(Infinity.toString())).toBe(false)
		expect(isNumericString(NaN.toString())).toBe(false)
		expect(isNumericString(Number.NaN.toString())).toBe(false)
		expect(isNumericString(5)).toBe(false)
		expect(isNumericString('.5')).toBe(true)
		expect(isNumericString('0.5')).toBe(true)
		expect(isNumericString('1')).toBe(true)
		expect(isNumericString('0')).toBe(true)
		expect(isNumericString('12')).toBe(true)
	})
})
