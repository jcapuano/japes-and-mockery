var Order = require('../models/orderModel.js'), 
	OrderLine = require('../models/orderLineModel.js'), 
    Customer = require('../models/customerModel.js'), 
    Account = require('../models/accountModel.js'), 
    Address = require('../models/addressModel.js'), 
    Contact = require('../models/contactModel.js'), 
    Communication = require('../models/communicationModel.js');
    
//-----------------------------
// PRIVATE
//-----------------------------
function buildOrder(o) {
	
	log("--------------------------");
	log("Build Order");
    log(o);
    
	var order = new Order();
    order.id = o.id;
    order.code = o.code;
    order.poNumber = o.poNumber;
    order.status = o.status;
    order.customer = buildCustomer(o.customer);
    order.plannerContact = buildContact(o.plannerContact);
    order.billToCustomer = buildCustomer(o.billToCustomer);
    order.billToAddress = buildAddress(o.billToAddress);
    order.payFromCustomer = buildCustomer(o.payFromCustomer);
    order.payFromAddress = buildAddress(o.payFromAddress);
    order.deliveryAddress = buildAddress(o.deliveryAddress);
    order.deliveryContact = buildContact(o.deliveryContact);
    order.deliveryInstructions = o.deliveryInstructions;
    order.requestedDate = new Date(o.requestedDate);
    order.deliveryDate = new Date(o.deliveryDate);
    order.items = buildOrderLines(o.items);
    order.subTotal = o.subTotal;
    order.tax = o.tax;
    order.grandTotal = o.grandTotal;
    
	log("--------------------------");
    
    return order;
};

function buildCustomer(c) {
	log("--------------------------");
	log("Build Customer from");
	log(c);

	var customer = new Customer();
    if (c) {
	    customer.id = c.id;
	    customer.name = c.name;
	    customer.description = c.description;
	    customer.locations = buildAddresses(c.locations);
	    customer.contacts = buildContacts(c.contacts);
	    customer.account = buildAccount(c.account);
	    customer.status = c.status;
    }
    
	log("--------------------------");
    
    return customer;
};

function buildAccount(a) {
	log("--------------------------");
	log("Build Account from");
	log(a);
    
	var account = new Account();
    
    if (a) {
	    account.id = a.id;
    	account.number = a.number;
	    account.paymentterms = a.paymentterms;
    	account.creditcode = a.creditcode;
	    account.creditlimit = a.creditlimit;
	}        
    
	log("--------------------------");
    
    return account;
};

function buildContacts(l) {
	var contacts = [];
    if (l != null && l.length > 0) {
    	for (var i=0; i<l.length; i++) {
        	contacts.push(buildContact(l[i]));
        }
    }
    return contacts;
};

function buildContact(c) {
	log("--------------------------");
	log("Build Contact from");
	log(c);
    
	var contact = new Contact();
    
    if (c) {
	    contact.id = c.id;
    	contact.name = c.name;
	    contact.title = c.title;
	    contact.addresses = buildAddresses(c.addresses);
    	contact.communications = buildCommunications(c.communications);
    }
    
	log("--------------------------");
    
    return contact;	
};

function buildAddresses(l) {
	var addresses = [];
    if (l != null && l.length > 0) {
    	for (var i=0; i<l.length; i++) {
        	addresses.push(buildAddress(l[i]));
        }
    }
    return addresses;
};

function buildAddress(a) {
	log("--------------------------");
	log("Build Address from");
	log(a);
    
	var address = new Address();
    
    if (a) {
	    address.id = a.id;
	    address.type = a.type;
	    address.line1 = a.line1;
	    address.line2 = a.line2;
	    address.line3 = a.line3;
	    address.line4 = a.line4;
	    address.line5 = a.line5;
	    address.city = a.city;
	    address.state = a.state;
	    address.country = a.country;
	    address.postalcode = a.postalcode;
	}        
    
	log("--------------------------");
    
    return address;
};

function buildCommunications(l) {
	var communications = [];
    if (l != null && l.length > 0) {
    	for (var i=0; i<l.length; i++) {
        	communications.push(buildCommunication(l[i]));
        }
    }
    return communications;
};

function buildCommunication(c) {
	log("--------------------------");
	log("Build Communication from");
	log(c);
    
	var communication = new Communication();
    
    if (c) {
	    communication.id = c.id;
    	communication.type = c.type;
	    communication.value	= c.value;
    }
    
	log("--------------------------");
    
    return communication;
};

function buildOrderLines(l) {
	var orderlines = [];
    if (l != null && l.length > 0) {
    	for (var i=0; i<l.length; i++) {
        	orderlines.push(buildOrderLine(l[i]));
        }
    }
    return orderlines;
};

function buildOrderLine(ol) {
	log("--------------------------");
	log("Build Order Line from");
	log(ol);
    
	var orderline = new OrderLine();
    
    if (ol) {
	    orderline.id = ol.id;
	    orderline.code = ol.code;
	    orderline.description = ol.description;
	    orderline.quantity = ol.quantity;
	    orderline.unitPrice = ol.unitPrice;
	    orderline.tax = ol.tax;
	    orderline.total = ol.total;
	    orderline.specialInstructions = ol.specialInstructions;
    }
    
	log("--------------------------");
    
    return orderline;
};

function log(m) {
	//console.log(m);
};

//-----------------------------
// PUBLIC
//-----------------------------
var OrderBuilder = {

	build: function(data) {
    	var orders = [];
        
		log("<<<<<<<<<<<<<<<<<<<<");
		log("Building Orders");
        
        if (data && data.length > 0) {
        	for (var i=0; i<data.length; i++) {
            	orders.push(buildOrder(data[i]));
            }
        }
        
		log("<<<<<<<<<<<<<<<<<<<<");
        
        return orders;
    },
    
    stringify: function(orders) {
        return JSON.stringify(orders);
    },
    
    parse: function(orders) {
        return JSON.parse(orders);
    },
    
    noop: null
};

module.exports = OrderBuilder;
