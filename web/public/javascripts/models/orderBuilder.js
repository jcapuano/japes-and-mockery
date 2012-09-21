define([
	'models/order',
	'models/orderLine',
	'models/customer',
	'models/account',
	'models/address',
	'models/contact',
	'models/communication'
    ],
function(Order, OrderLine, Customer, Account, Address, Contact, Communication) {
	
    //-----------------------------
    // PRIVATE
    //-----------------------------
	function buildOrder(o) {
        
        if (o) {
        	return new Order(o.id, o.code, o.poNumber, o.status, buildCustomer(o.customer), buildContact(o.plannerContact), 
            						buildCustomer(o.billToCustomer), buildAddress(o.billToAddress), 
                                    buildCustomer(o.payFromCustomer), buildAddress(o.payFromAddress), 
                                    buildAddress(o.deliveryAddress), buildContact(o.deliveryContact), 
                                    o.deliveryInstructions, new Date(o.requestedDate), new Date(o.deliveryDate), 
                                    buildOrderLines(o.items), o.subTotal, o.tax, o.grandTotal);
		}
        return null;            
    };

    function buildCustomer(c) {
    	if (c) {
        	return new Customer(c.id, c.name, c.description, buildAddresses(c.locations), 
            					buildContacts(c.contacts), buildAccount(c.account), c.status);
		}
		return null;
    };
    
    function buildAccount(a) {
    	if (a) {
        	return new Account(a.id, a.number, a.paymentterms, a.creditcode, a.creditlimit);
        }
        return null;
    };
    
    function buildContacts(l) {
    	return _.map(l, function(c) {
        	return buildContact(c);
        });
    };
    
    function buildContact(c) {
		if (c) {        	
        	return new Contact(c.id, c.name, c.title, buildAddresses(c.addresses), buildCommunications(c.communications));
		}
        return null;            
    };
    
    function buildAddresses(l) {
    	return _.map(l, function(a) {
        	return buildAddress(a);
        });
    };
    
    function buildAddress(a) {
    	if (a) {
        	return new Address(a.id, a.type, a.line1, a.line2, a.line3, a.line4, a.line5, a.city, a.state, a.country, a.postalcode);
        }
        return null;
    };
    
    function buildCommunications(l) {
    	return _.map(l, function(c) {
        	return buildCommunication(c);
        });
    };
    
    function buildCommunication(c) {
    	if (c) {
        	return new Communication(c.id, c.type, c.value);
        }
        return null;
    };
    
    function buildOrderLines(l) {
    	return _.map(l, function(ol) {
        	return buildOrderLine(ol);
        });
    };
    
    function buildOrderLine(ol) {
    	if (ol) {
        	return new OrderLine(ol.id, ol.code, ol.description, ol.quantity, ol.unitPrice, ol.tax, ol.total, ol.specialInstructions);
        }
        return null;
    };
    
    //-----------------------------
    // PUBLIC
    //-----------------------------
	return {
    
    	build: function(data) {
    		return _.map(data, function(d) {
            	return buildOrder(d);
            });
        },
        
        noop: null
    };
});