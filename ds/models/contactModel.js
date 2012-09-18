function Contact() {
    this.id = 0;
    this.name = "";
    this.title = "";
    this.addresses = [];      // collection of Address
    this.communications = []; // collection of Communication
}

module.exports = Contact;
