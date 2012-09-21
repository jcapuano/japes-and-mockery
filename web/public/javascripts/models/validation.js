define(function() {
    var validations = {
    	required: function(value) {
	    },
		optional: function(value) {
	    },
		alphanum: function(value) {
	    },
		alpha: function(value) {
	    },
		numeric: function(value) {
	    },
		unique: function(value) {
	    },
		min: function(value, minvalue) {
	    },
		max: function(value, maxvalue) {
	    },
        bytype: function(value, types, type) {
        	var validation = _.find(types, function(e) {
            	return e.type === type;
            });
            if (validation) {
            	return validation.rule.isvalid(value, type);
            }
            return true;
        },
		regex: function(value, pattern) {
        	var re = new RegExp(pattern);
            return re.test(value);
	    },
        none: null
    };

	return function Validation(rule, value) {
	    this.rule = rule;
	    this.value = value;
        
        this.validationmessage = ""; // what to do, what to do...
        this.isvalid = function(v, t) {
        	var vm = validations[this.rule];
        	if (vm) {
            	return vm(v, this.value, t);
            }
            return true;
        };
    }
});
