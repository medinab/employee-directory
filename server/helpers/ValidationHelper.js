
class ValidationHelper {

	validateStringField(object, fieldName) {
		if (!object[fieldName] || new String(object[fieldName]).trim().length == 0) {
			throw new Error(`Invalid ${fieldName}`);
		}
	}

}

module.exports = new ValidationHelper();