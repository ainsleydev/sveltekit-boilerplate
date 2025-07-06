/**
 * Generates an alphanumeric random string.
 *
 * @param {number} length
 * @returns {string}
 */
export const generateRandomString = (length: number): string => {
	let result = '';
	while (result.length < length) {
		result += (Math.random() + 1).toString(36).substring(2);
	}
	return result.substring(0, length);
};
