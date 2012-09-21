define(['models/property', 'validations/product'],
function(property, validations) {
	return function Product(id, code, description) {
	    this.id = new property(id, validations.id);
	    this.code = new property(name, validations.code);
	    this.description = new property(description, validations.description);
    }
});
