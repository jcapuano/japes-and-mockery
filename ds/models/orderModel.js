function Order() {
    this.id = 0;
    this.code = "";
    this.poNumber = "";
    this.status = "";
    this.customer = null;         // Customer
    this.plannerContact = null;   // Contact
    this.billToCustomer = null;   // Customer
    this.billToAddress = null;    // Address
    this.payFromCustomer = null;  // Customer
    this.payFromAddress = null;   // Address
    this.deliveryAddress = null;  // Address
    this.deliveryContact = null;  // Contact
    this.deliveryInstructions = "";
    this.requestedDate = null;    // Date
    this.deliveryDate = null;     // Date
    this.items = [];              // collection of OrderLine
    this.subTotal = 0.0;
    this.tax = 0.0;
    this.grandTotal = 0.0;
};

Order.prototype.validate = function() {
	return this.id != 0;
};


module.exports = Order;
