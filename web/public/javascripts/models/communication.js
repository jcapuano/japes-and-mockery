define(['models/property', 'validations/communication'],
function(property, validations) {
	return function Communication(id, type, value) {
	    this.id = new property(id, validations.id);
	    this.type = new property(type, validations.type);
	    this.value = new property(value, validations.value);
    }
});
