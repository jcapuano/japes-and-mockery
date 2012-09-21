define(['models/property', 'validations/order'],
function(Property, validations) {
	return function Order(id, code, poNumber, status, customer, plannerContact, billToCustomer, billToAddress, 
    						payFromCustomer, payFromAddress, deliveryAddress, deliveryContact, deliveryInstructions, 
                            requestedDate, deliveryDate, items, subTotal, tax, grandTotal) {
                            
	    this.id = new Property(id, validations.id);
	    this.code = new Property(code, validations.code);
	    this.poNumber = new Property(poNumber, validations.poNumber);
	    this.status = new Property(status, validations.status);
	    this.customer = new Property(customer, validations.customer);										// Customer
	    this.plannerContact = new Property(plannerContact, validations.plannerContact);						// Contact
	    this.billToCustomer = new Property(billToCustomer, validations.billToCustomer);						// Customer
	    this.billToAddress = new Property(billToAddress, validations.billToAddress);						// Address
	    this.payFromCustomer = new Property(payFromCustomer, validations.payFromCustomer);					// Customer
	    this.payFromAddress = new Property(payFromAddress, validations.payFromAddress);						// Address
	    this.deliveryAddress = new Property(deliveryAddress, validations.deliveryAddress);					// Address
	    this.deliveryContact = new Property(deliveryContact, validations.deliveryContact);					// Contact
	    this.deliveryInstructions = new Property(deliveryInstructions, validations.deliveryInstructions);
	    this.requestedDate = new Property(requestedDate, validations.requestedDate);						// Date
	    this.deliveryDate = new Property(deliveryDate, validations.deliveryDate);							// Date
	    this.items = new Property(items, validations.items);												// collection of OrderLine
	    this.subTotal = new Property(subTotal, validations.subTotal);
	    this.tax = new Property(tax, validations.tax);
	    this.grandTotal = new Property(grandTotal, validations.grandTotal);
    }
});