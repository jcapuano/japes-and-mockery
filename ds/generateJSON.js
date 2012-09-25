var Order = require('./models/orderModel.js'), 
	OrderLine = require('./models/orderLineModel.js'), 
    Customer = require('./models/customerModel.js'), 
    Account = require('./models/accountModel.js'), 
    Address = require('./models/addressModel.js'), 
    Contact = require('./models/contactModel.js'), 
    Communication = require('./models/communicationModel.js');
var fs = require('fs');    

var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var words = [
'Mauris', 'mauris', 'ante,', 'blandit', 'et,', 'ultrices', 'a,', 'suscipit', 'eget,', 'quam', 'Integer', 'ut', 'neque', 'Vivamus', 'nisi', 'metus,', 'molestie', 'vel,', 'gravida', 'in,', 'condimentum', 'sit', 'amet,', 'nunc', 'Nam', 'a', 'nibh', 'Donec', 'suscipit', 'eros', 'Nam', 'mi', 'Proin', 'viverra', 'leo', 'ut', 'odio', 'Curabitur', 'malesuada', 'Vestibulum', 'a', 'velit', 'eu', 'ante', 'scelerisque', 'vulputate',
'Sed', 'non', 'urna', 'Donec', 'et', 'ante', 'Phasellus', 'eu', 'ligula', 'Vestibulum', 'sit', 'amet', 'purus', 'Vivamus', 'hendrerit,', 'dolor', 'at', 'aliquet', 'laoreet,', 'mauris', 'turpis', 'porttitor', 'velit,', 'faucibus', 'interdum', 'tellus', 'libero', 'ac', 'justo', 'Vivamus', 'non', 'quam', 'In', 'suscipit', 'faucibus', 'urna',
'Nam', 'enim', 'risus,', 'molestie', 'et,', 'porta', 'ac,', 'aliquam', 'ac,', 'risus', 'Quisque', 'lobortis', 'Phasellus', 'pellentesque', 'purus', 'in', 'massa', 'Aenean', 'in', 'pede', 'Phasellus', 'ac', 'libero', 'ac', 'tellus', 'pellentesque', 'semper', 'Sed', 'ac', 'felis', 'Sed', 'commodo,', 'magna', 'quis', 'lacinia', 'ornare,', 'quam', 'ante', 'aliquam', 'nisi,', 'eu', 'iaculis', 'leo', 'purus', 'venenatis', 'dui',
'Cras', 'dictum', 'Pellentesque', 'habitant', 'morbi', 'tristique', 'senectus', 'et', 'netus', 'et', 'malesuada', 'fames', 'ac', 'turpis', 'egestas', 'Vestibulum', 'ante', 'ipsum', 'primis', 'in', 'faucibus', 'orci', 'luctus', 'et', 'ultrices', 'posuere', 'cubilia', 'Curae;', 'Aenean', 'lacinia', 'mauris', 'vel', 'est',
'Suspendisse', 'eu', 'nisl', 'Nullam', 'ut', 'libero', 'Integer', 'dignissim', 'consequat', 'lectus', 'Class', 'aptent', 'taciti', 'sociosqu', 'ad', 'litora', 'torquent', 'per', 'conubia', 'nostra,', 'per', 'inceptos', 'himenaeos'
];
    
//-------------------------------------------------------------------
// Makers
//-------------------------------------------------------------------
    
function generateOrders(count) {
	console.log("Generating " + count + " orders");
    
    var filename = './data/mockOrders' + count + '.js';
    console.log("Writing Orders file " + filename);
    
    fs.writeFileSync(filename, "define(function() { return [");
	for (var i=0; i<count; i++) {
    	var order = makeOrder(i);
    	fs.appendFileSync(filename, JSON.stringify(order));
        if (i+1 < count)
    		fs.appendFileSync(filename, ",");
    }
    fs.appendFileSync(filename, "]; });");
};

function generateCustomers(count) {
	console.log("Generating " + count + " customers");
    
    var filename = './data/mockCustomers' + count + '.js';
    console.log("Writing Customers file " + filename);
    
    fs.writeFileSync(filename, "define(function() { return [");
	for (var i=0; i<count; i++) {
    	var customer = makeCustomer(i);
    	fs.appendFileSync(filename, JSON.stringify(customer));
        if (i+1 < count)
    		fs.appendFileSync(filename, ",");
    }
    fs.appendFileSync(filename, "]; });");
};

function generateContacts(count) {
	console.log("Generating " + count + " contacts");
    
    var filename = './data/mockContacts' + count + '.js';
    console.log("Writing Contacts file " + filename);
    
    fs.writeFileSync(filename, "define(function() { return [");
	for (var i=0; i<count; i++) {
    	var contact = makeContact(i);
    	fs.appendFileSync(filename, JSON.stringify(contact));
        if (i+1 < count)
    		fs.appendFileSync(filename, ",");
    }
    fs.appendFileSync(filename, "]; });");
};


function makeOrder(id) {
	console.log("Generating Order for ID " + id);
	var order = new Order();
    order.id = id;
    
    order.code = randomCode();
    order.poNumber = randomNumber();
    order.status = randomOneOf(['Open', 'Closed', 'Pending', 'Ordered']);
    order.customer = makeCustomer();         // Customer
    order.plannerContact = makeContact();   // Contact
    order.billToCustomer = makeCustomer();   // Customer
    order.billToAddress = makeAddress();    // Address
    order.payFromCustomer = makeCustomer();  // Customer
    order.payFromAddress = makeAddress();   // Address
    order.deliveryAddress = makeAddress();  // Address
    order.deliveryContact = makeContact();  // Contact
    order.deliveryInstructions = "";
    order.requestedDate = makeDate(5);    // Date
    order.deliveryDate = makeDate(10);     // Date
    order.items = makeOrderLines();              // collection of OrderLine
    order.subTotal = randomDecimal();
    order.tax = randomDecimal();
    order.grandTotal = randomDecimal();    
    
    return order;
};

function makeCustomer(id) {
	if (id) {
		console.log("Generating Customer for ID " + id);
    }
    else {
    	id = randomID();
    }
	var customer = new Customer();
    customer.id = id;
    customer.code = randomCode();
    customer.description = randomText();
    customer.locations = makeAddresses();
    customer.contacts = makeContacts();
    customer.account = makeAccount();
    customer.status = randomOneOf(['Open', 'Closed', 'Hold']);
    return customer;
};

function makeAccount() {
	var account = new Account();
    account.id = randomID();
	account.number = randomDigits(10);
    account.paymentterms = randomOneOf(['Cash', 'Credit', 'PORequired']);
	account.creditcode = randomOneOf(['Open', 'Closed', 'Hold']);
    account.creditlimit = randomDecimal(0, 50000, 2);
    return account;
};

function makeContacts(count) {
	count = count || randomInt(0, 5);
	var contacts = [];
    while (count-- > 0) {
    	contacts.push(makeContact());
    }
    return contacts;
};

function makeContact(id) {
	if (id) {
		console.log("Generating Contact for ID " + id);
    }
    else {
    	id = randomID();
    }

	var contact = new Contact();
    contact.id = id;
	contact.name = randomText(2);
    contact.title = randomWord(15);
    contact.addresses = makeAddresses();
	contact.communications = makeCommunications();
    
    return contact;	
};

function makeAddresses(count) {
	count = count || randomInt(0, 5);
	var addresses = [];
    while (count-- > 0) {
    	addresses.push(makeAddress());
    }
    return addresses;
};

function makeAddress() {
	var address = new Address();
    address.id = randomID();
    address.type = randomOneOf(['Main', 'Billing', 'Shipping', 'Other']);
    address.line1 = randomDigits(4) + " " + randomText(3);
    address.line2 = randomText(3);
    address.line3 = randomText(3);
    address.line4 = randomText(3);
    address.line5 = randomText(3);
    address.city = randomWord(10);
    address.state = randomWord(5);
    address.country = randomWord(3);
    address.postalcode = randomDigits(5);
    
    return address;
};

function makeCommunications(count) {
	count = count || randomInt(0, 5);
	var communications = [];
    while (count-- > 0) {
    	communications.push(makeCommunication());
    }
    return communications;
};

function makeCommunication() {
	var communication = new Communication();
    communication.id = randomID();
	communication.type = randomOneOf(['Office Phone', 'Mobile Phone', 'Office Fax', 'Email', 'Twitter', 'Other']);
    if (communication.type.indexOf("Phone") > 0 || communication.type.indexOf("Fax") > 0) {
    	communication.value	= randomPhone();
	}
    else if (communication.type.indexOf("Phone") > 0 || communication.type.indexOf("Fax") > 0) {
    	communication.value	= randomEmail();
    }
    else {
    	communication.value	= randomText();
    }
    return communication;
};

function makeOrderLines(count) {
	count = count || randomInt(1, 5);
	var orderlines = [];
    while (count-- > 0) {
        orderlines.push(makeOrderLine());
    }
    return orderlines;
};

function makeOrderLine() {
	var orderline = new OrderLine();
    orderline.id = randomID();
    orderline.code = randomCode();
    orderline.description = randomText();
    orderline.quantity = randomDecimal();
    orderline.unitPrice = randomDecimal();
    orderline.tax = randomDecimal();
    orderline.total = randomDecimal;
    orderline.specialInstructions = randomText(10);
    
    return orderline;
};

//-------------------------------------------------------------------
// Helpers
//-------------------------------------------------------------------

function makeDate(days) {
	days = days || 1;
    var day = randomInt(0, days);
	var d = new Date();
    var t = d.getDate() + day;
    d.setDate(t);
    return d;
};

function randomCode(size) { 
	size = size || 20;
	return randomWord(randomInt(1, size));
};

function randomText(size) { 
	size = size || 5;
	var text = "";
    while (size-- > 0) {
    	if (text.length > 0) {
        	text += " ";
        }
    	text += randomWord();
    }
    return text;
};

function randomPhone() { 
	return "(" + randomDigits(3, 1, 9) + ") " +
    				  randomDigits(3, 1, 9) + " - " + 
    				  randomDigits(4, 1, 9);
};

function randomEmail() { 
	return randomWord(randomInt(1, 25)) + "@" + 
    		randomWord(randomInt(1, 25)) + ".com";
};

function randomNumber(size) {
	size = size || 20;
	return randomDigits(randomInt(1, size), 1, 9);
};

function randomID() {
	return randomInt(1, 99999);
};

function randomWord(size) { 
	/*
	size = size || 10;
	var word = "";
    while (size-- > 0) {
    	word += randomLetter();
    }
    return word;
    */
    return randomOneOf(words);
};

function randomDigits(size, low, high) { 
	size = size || 3;
    low = low || 1;
    high = high || 9;
	var number = "";
    while (size-- > 0) {
    	number += randomInt(low, high).toString();
    }
    return number;
};

function randomLetter() {
	return letters.charAt(randomInt(0, letters.length-1));
};

function randomInt(low, high) {
	return Math.floor(Math.random()*(high-low+1)) + low;
};

function randomDecimal(low, high, precision) {
	low = low || 0;
    high = high | 1000;
    precsion = precision || 2;
	var p = Math.pow(10, precision);
    var d = (Math.random()*(high-low+1)) + low;
	return Math.ceil(d * p) / p
    	
};

function randomOneOf(list) {    
    return list[randomInt(0, list.length-1)]; 
};

//-------------------------------------------------------------------
// main entry point
//-------------------------------------------------------------------
try {
	console.log('Creating Mock JSON');
    var model = process.argv.length > 2 ? process.argv[2] : 'order';
    var count = process.argv.length > 3 ? parseInt(process.argv[3]) : 10;

    var makers = {
    	order: generateOrders,
    	customer: generateCustomers,
    	contact: generateContacts
    };
    
    makers[model](count);
    
	console.log('Done');
    
    
} catch (ex) {
	console.log('Error in creating Mock JSON: ' + ex);
}
