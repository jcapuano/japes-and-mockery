define(["models/validation"],
function(Validation) {
	function is_object(mixed_var) {
	    if (Object.prototype.toString.call(mixed_var) === '[object Array]') {
	        return false;
	    }
	    return mixed_var !== null && typeof mixed_var == 'object';
	};

	function is_string(mixed_var) {
	    return (typeof(mixed_var) == 'string');
	};

	function is_numeric(mixed_var) {
	    return (typeof(mixed_var) === 'number' || typeof(mixed_var) === 'string') && mixed_var !== '' && !isNaN(mixed_var);
	};
    
	function is_float(mixed_var) {
	    return +mixed_var === mixed_var && !!(mixed_var % 1);
	};

	function is_int(mixed_var) {
	    return mixed_var === +mixed_var && isFinite(mixed_var) && !(mixed_var % 1);
	};
    
	function is_date(mixed_var) {
	    return mixed_var && mixed_var.getMonth && mixed_var.getMonth.call;
	};
    
    var Property = function(val, validatns, fmt) {
    	var value = val;
        var format = fmt;
        var validations = validatns || [];	// collection of Validation
        
	    function property() {
	        if (arguments.length > 0) {
	            // Write
               	var w = arguments[0];
				if (w && is_string(w) && format) {
                	if (is_float(value)) {
                    	w = Globalize.parseFloat(w);
                    }
                    else if (is_int(value)) {
                    	w = Globalize.parseInt(w);
                    }
                    else if (is_date(value)) {
                    	w = Globalize.parseDate(w);
                    }
                }                	
				value = w;
	            return this; // Permits chained assignments
	        }
	        else {
	            // Read
                if (format && (is_numeric(value) || is_date(value))) {
                	return Globalize.format(value, format);
                }
                return value;
	        }
	    };
        
		property.value = val;//is_object(val) ? val : null;
        
	    property.validate = function() {
	    	return _.all(validations, function(validation) {
	        	return Validation.isvalid(this.value);
	        });
	    };
	        
		property.viewValidations = function(view) {
	    	if (validations && validations.length > 0) {
	        	return new Validation.ViewValidation(view, validations);
			}
	        return null;                
		};
        
        return property;
    };
    
    
    return Property;
});
