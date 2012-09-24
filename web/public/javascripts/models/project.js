define(['models/property', 'models/validation'],
function(Property, validations) {
	return function Project(id, code, description, status, customer, contacts, deliveryaddress, 
    						product, quantity, estimatecost, estimatedate) {
	    this.id = new Property(id);
	    this.code = new Property(name, [
        	new validation.Validation('required'),
        	new validation.Validation('alphanum'),
        	new validation.Validation('min', 1),
        	new validation.Validation('max', 20),
        	new validation.Validation('unique', 'http://server:port/projects/:code')
        ]);
	    this.description = new Property(description, [
        	new validation.Validation('optional'),
        	new validation.Validation('alphanum'),
        	new validation.Validation('min', 0),
        	new validation.Validation('max', 255)
        ]);
	    this.status = new Property(status, [
        	new validation.Validation('required')
            /* let the view handle this by presenting only valid choices 
        	new validation.Validation('in', ['Open', 'Closed', 'Pending', 'Ordered'])
            */          
        ]);
        // Customer
	    this.customer = new Property(customer, [
        	new validation.Validation('required')
        ]);			
        // collection of Contact
	    this.contacts = new Property(contacts, [
        	new validation.Validation('optional')
        ]);		
        // Address
	    this.deliveryAddress = new Property(deliveryAddress, [
        	new validation.Validation('required')
        ]);	
        // Product
        this.product = new Property(product, [
        	new validation.Validation('required')
        ]);			
        this.quantity = new Property(quantity, [
        	new validation.Validation('required'),
        	new validation.Validation('numeric'),
        	new validation.Validation('greaterthan', 0)
		]);
        this.estimateCost = new Property(estimatecost, [
        	new validation.Validation('required'),
        	new validation.Validation('numeric'),
        	new validation.Validation('greaterthan', 0)
		]);
        // Date
        this.estimateDate = new Property(estimatedate, [
        	new validation.Validation('required'),
        	new validation.Validation('datetime')
		]);	
    };
});
