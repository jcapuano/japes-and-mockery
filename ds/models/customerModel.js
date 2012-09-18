function Customer() {
    this.id = 0;
    this.name = "";
    this.description = "";
    this.locations = [];      // collection of Address
    this.contacts = [];       // collection of Contact
    this.account = null;      // Account
    this.status = "";
}

module.exports = Customer;
