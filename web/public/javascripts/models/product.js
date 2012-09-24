define(['models/property', 'models/validation'],
function(Property, validations) {
	return function Product(id, code, description) {
	    this.id = new Property(id);
	    this.code = new Property(name, [
        	new validation.Validation('required'),
        	new validation.Validation('alphanum'),
        	new validation.Validation('min', 1),
        	new validation.Validation('max', 20),
        	new validation.Validation('unique', 'http://server:port/products/:code')
        ]);
	    this.description = new Property(description, [
        	new validation.Validation('optional'),
        	new validation.Validation('alphanum'),
        	new validation.Validation('min', 0),
        	new validation.Validation('max', 255)
        ]);
    };
});
