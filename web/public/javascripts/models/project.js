define(['models/property', 'validations/project'],
function(property, validations) {
	return function Project(id, code, description, status, customer, contacts, deliveryaddress, 
    						product, quantity, estimatecost, estimatedate) {
	    this.id = new property(id, validations.id);
	    this.code = new property(name, validations.code);
	    this.description = new property(description, validations.description);
	    this.status = new property(status, validations.status);
	    this.customer = new property(customer, validations.customer);			// Customer
	    this.contacts = new property(contacts, validations.contacts);		// collection of Contact
	    this.deliveryAddress = new property(deliveryAddress, validations.deliveryAddress);	// Address
        this.product = new property(product, validations.product);			// Product
        this.quantity = new property(quantity, validations.quantity);
        this.estimateCost = new property(estimatecost, validations.estimateCost);
        this.estimateDate = new property(estimatedate, validations.estimateDate);	// Date
    }
});
