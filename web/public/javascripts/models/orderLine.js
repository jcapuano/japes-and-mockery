define(['models/property', 'models/validation'],
function(Property, validation) {
	return function OrderLine(id, code, description, quantity, unitPrice, tax, total, specialInstructions) {
	    this.id = Property(id);
	    this.code = Property(code, [
        	new validation.Validation('required'),
        	new validation.Validation('alphanum'),
        	new validation.Validation('min', 1),
        	new validation.Validation('max', 20)
        ]);
	    this.description = Property(description, [
        	new validation.Validation('optional'),
        	new validation.Validation('alphanum'),
        	new validation.Validation('min', 0),
        	new validation.Validation('max', 255)
        ]);
	    this.quantity = Property(quantity, [
        	new validation.Validation('required'),
        	new validation.Validation('numeric'),
        	new validation.Validation('greaterthan', 0)
		]);
	    this.unitPrice = Property(unitPrice, [
        	new validation.Validation('optional'),
        	new validation.Validation('numeric'),
        	new validation.Validation('greaterthan', 0)
		]);
	    this.tax = Property(tax, [
        	new validation.Validation('optional'),
        	new validation.Validation('numeric'),
        	new validation.Validation('greaterthanequal', 0)
		]);
	    this.total = Property(total, [
        	new validation.Validation('optional'),
        	new validation.Validation('numeric'),
        	new validation.Validation('greaterthan', 0)
		]);
	    this.specialInstructions = Property(specialInstructions, [
        	new validation.Validation('optional'),
        	new validation.Validation('alphanum'),
        	new validation.Validation('min', 0),
        	new validation.Validation('max', 1000)
        ]);
    };
});
