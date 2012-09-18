define([
	'models/orderModel',
	'models/orderLineModel',
	'models/customerModel',
	'models/accountModel',
	'models/addressModel',
	'models/contactModel',
	'models/communicationModel'
    ],
function(Order, OrderLine, Customer, Account, Address, Contact, Communication) {
	
    //-----------------------------
    // PRIVATE
    //-----------------------------
	function makeOrder(o) {
        
        if (o) {
    		var order = new Order();
            
		    order.id = o.id;
		    order.code = o.code;
		    order.poNumber = o.poNumber;
		    order.status = o.status;
		    order.customer = makeCustomer(o.customer);
		    order.plannerContact = makeContact(o.plannerContact);
		    order.billToCustomer = makeCustomer(o.billToCustomer);
		    order.billToAddress = makeAddress(o.billToAddress);
		    order.payFromCustomer = makeCustomer(o.payFromCustomer);
		    order.payFromAddress = makeAddress(o.payFromAddress);
		    order.deliveryAddress = makeAddress(o.deliveryAddress);
		    order.deliveryContact = makeContact(o.deliveryContact);
		    order.deliveryInstructions = o.deliveryInstructions;
		    order.requestedDate = new Date(o.requestedDate);
		    order.deliveryDate = new Date(o.deliveryDate);
		    order.items = makeOrderLines(o.items);
		    order.subTotal = o.subTotal;
		    order.tax = o.tax;
		    order.grandTotal = o.grandTotal;
        
	        return order;
		}
        return null;            
    };

    function makeCustomer(c) {
    	if (c) {
	    	var customer = new Customer();
	        
		    customer.id = c.id;
		    customer.name = c.name;
		    customer.description = c.description;
		    customer.locations = makeAddresses(c.locations);
		    customer.contacts = makeContacts(c.contacts);
		    customer.account = makeAccount(c.account);
		    customer.status = c.status;
	        
	        return customer;
		}
		return null;
    };
    
    function makeAccount(a) {
    	if (a) {
	    	var account = new Account();
	        
		    account.id = a.id;
		    account.number = a.number;
		    account.paymentterms = a.paymentterms;
		    account.creditcode = a.creditcode;
		    account.creditlimit = a.creditlimit;
	        
	        return account;
        }
        return null;
    };
    
    function makeContacts(l) {
    	return _.map(l, function(c) {
        	return makeContact(c);
        });
    };
    
    function makeContact(c) {
		if (c) {        	
	    	var contact = new Contact();
	        
	        contact.id = c.id;
	        contact.name = c.name;
	        contact.title = c.title;
	        contact.addresses = makeAddresses(c.addresses);
	        contact.communications = makeCommunications(c.communications);
	        
	        return contact;	
		}
        return null;            
    };
    
    function makeAddresses(l) {
    	return _.map(l, function(a) {
        	return makeAddress(a);
        });
    };
    
    function makeAddress(a) {
    	if (a) {
	    	var address = new Address();
	        
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
	        
	        return address;
        }
        return null;
    };
    
    function makeCommunications(l) {
    	return _.map(l, function(c) {
        	return makeCommunication(c);
        });
    };
    
    function makeCommunication(c) {
    	if (c) {
	    	var communication = new Communication();
	        
		    communication.id = c.id;
		    communication.type = c.type;
		    communication.value	= c.value;
	        
	        return communication;
        }
        return null;
    };
    
    function makeOrderLines(l) {
    	return _.map(l, function(ol) {
        	return makeOrderLine(ol);
        });
    };
    
    function makeOrderLine(ol) {
    	if (ol) {
	    	var orderline = new OrderLine();
	        
		    orderline.id = ol.id;
		    orderline.code = ol.code;
		    orderline.description = ol.description;
		    orderline.quantity = ol.quantity;
		    orderline.unitPrice = ol.unitPrice;
		    orderline.tax = ol.tax;
		    orderline.total = ol.total;
		    orderline.specialInstructions = ol.specialInstructions;
	        
	        return orderline;
        }
        return null;
    };
    
    //-----------------------------
    // PUBLIC
    //-----------------------------
	return {
    
    	build: function(data) {
    		return _.map(data, function(d) {
            	return makeOrder(d);
            });
        },
        
        noop: null
    };
});