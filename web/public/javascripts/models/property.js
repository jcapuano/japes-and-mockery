define(function() {
	return function Property(v, validations) {
    	var value = v;
	    function property() {
	        if (arguments.length > 0) {
	            // Write
				value = arguments[0];
	            return this; // Permits chained assignments
	        }
	        else {
	            // Read
	            return value;
	        }
	    }
        
        property.validations = validations || [];	// collection of validation
        property.validate = function() {
        	return _.all(this.validations, function(validation) {
            	return validation.isvalid(this.value);
            });
        };
        
        return property;
    };
});
