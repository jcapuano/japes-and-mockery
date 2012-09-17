define(function() {
	return function() {
	    id: 0,
	    code: "",
	    poNumber: "",
	    status: "",
	    customer: null,         // Customer
	    plannerContact: null,   // Contact
	    billToCustomer: null,   // Customer
	    billToAddress: null,    // Address
	    payFromCustomer: null,  // Customer
	    payFromAddress: null,   // Address
	    deliveryAddress: null,  // Address
	    deliveryContact: null,  // Contact
	    deliveryInstructions: "",
	    requestedDate: null,    // Date
	    deliveryDate: null,     // Date
	    items: [],              // collection of OrderLine
	    subTotal: 0.0,
	    tax: 0.0,
	    grandTotal: 0.0
    }
});