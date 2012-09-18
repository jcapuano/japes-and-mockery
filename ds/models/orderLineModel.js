function OrderLine() {
    this.id = 0;
    this.code = "";
    this.description = "";
    this.quantity = 0.0;
    this.unitPrice = 0.0;
    this.tax = 0.0;
    this.total = 0.0;
    this.specialInstructions = "";
}

module.exports = OrderLine;
