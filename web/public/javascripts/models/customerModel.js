define(function() {
	return function() {
	    this.id = 0;
	    this.name = "";
	    this.description = "";
	    this.locations = [];      // collection of Address
	    this.contacts = [];       // collection of Contact
	    this.account = null;      // Account
	    this.status = "";
    }
});
