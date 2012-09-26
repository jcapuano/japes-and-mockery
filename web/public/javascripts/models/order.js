define(['models/property', 'models/validation'],
function(Property, validation) {
	return function Order(id, code, poNumber, status, customer, plannerContact, billToCustomer, billToAddress, 
    						payFromCustomer, payFromAddress, deliveryAddress, deliveryContact, deliveryInstructions, 
                            requestedDate, deliveryDate, items, subTotal, tax, grandTotal) {
                            
	    this.id = Property(id);
	    this.code = Property(code, [
        	new validation.Validation('required'),
        	new validation.Validation('alphanum'),
        	new validation.Validation('minlength', 1),
        	new validation.Validation('maxlength', 20),
        	new validation.Validation('unique', 'http://localhost:4343/order/CodeIsUnique')
        ]);
	    this.poNumber = Property(poNumber, [
        	new validation.Validation('optional'),
        	new validation.Validation('alphanum'),
        	new validation.Validation('minlength', 1),
        	new validation.Validation('maxlength', 20)
        ]);
	    this.status = Property(status, [
        	new validation.Validation('required')
            /* let the view handle this by presenting only valid choices 
        	new validation.Validation('in', ['Open', 'Closed', 'Pending', 'Ordered'])
            */          
        ]);
        // Customer
	    this.customer = Property(customer, [
        	new validation.Validation('required')
        ]);										
        // Contact
	    this.plannerContact = Property(plannerContact, [
        	new validation.Validation('optional')
        ]);						
        // Customer
	    this.billToCustomer = Property(billToCustomer, [
        	new validation.Validation('optional')
        ]);						
        // Address
	    this.billToAddress = Property(billToAddress, [
        	new validation.Validation('optional')
        ]);						
        // Customer
	    this.payFromCustomer = Property(payFromCustomer, [
        	new validation.Validation('optional')
        ]);					
        // Address
	    this.payFromAddress = Property(payFromAddress, [
        	new validation.Validation('optional')
        ]);						
        // Address
	    this.deliveryAddress = Property(deliveryAddress, [
        	new validation.Validation('required')
        ]);					
        // Contact
	    this.deliveryContact = Property(deliveryContact, [
        	new validation.Validation('optional')
        ]);					
	    this.deliveryInstructions = Property(deliveryInstructions, [
        	new validation.Validation('optional'),
        	new validation.Validation('alphanum'),
        	new validation.Validation('min', 1),
        	new validation.Validation('max', 255)
        ]);
        // Date
	    this.requestedDate = Property(requestedDate, [
        	new validation.Validation('required'),
        	new validation.Validation('datetime')
        ]);						
        // Date
	    this.deliveryDate = Property(deliveryDate, [
        	new validation.Validation('required'),
        	new validation.Validation('datetime')
        ]);							
        // collection of OrderLine
	    this.items = Property(items, [
        	new validation.Validation('required'),
        	new validation.Validation('minlength', 1),
        	new validation.Validation('maxlength', 9999)
        ]);												
	    this.subTotal = Property(subTotal, [
        	new validation.Validation('optional'),
        	new validation.Validation('numeric'),
        	new validation.Validation('greaterthan', 0)
		]);
	    this.tax = Property(tax, [
        	new validation.Validation('optional'),
        	new validation.Validation('numeric'),
        	new validation.Validation('greaterthanequal', 0)
		]);
	    this.grandTotal = Property(grandTotal, [
        	new validation.Validation('optional'),
        	new validation.Validation('numeric'),
        	new validation.Validation('greaterthan', 0)
		]);
    };
});