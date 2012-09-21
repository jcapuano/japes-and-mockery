define(['models/property', 'validations/orderline'],
function(property, validations) {
	return function OrderLine(id, code, description, quantity, unitPrice, tax, total, specialInstructions) {
	    this.id = new property(id, validations.id);
	    this.code = new property(name, validations.code);
	    this.description = new property(description, validations.description);
	    this.quantity = new property(quantity, validations.quantity);
	    this.unitPrice = new property(unitPrice, validations.unitPrice);
	    this.tax = new property(tax, validations.tax);
	    this.total = new property(total, validations.total);
	    this.specialInstructions = new property(specialInstructions, validations.specialInstructions);
    }
});
