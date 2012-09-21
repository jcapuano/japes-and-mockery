define(function() {
	return function Property(value, validations) {
	    this.value = value;
	    this.validations = validations || [];	// collection of validation
        
        this.validate = function() {
        	return _.all(a.line1.validations, function(validation) {
            	return validation.isvalid(this.value);
            });
        };
    }
});
