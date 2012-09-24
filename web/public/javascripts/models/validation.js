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

    var jqvalidations = {
    	required: function(value) {
        	return {required: true};
	    },
		optional: function(value) {
        	return {required: false};
	    },
		alphanum: function(value) {
        	return {alphanumeric: true};
	    },
		alpha: function(value) {
        	return {lettersonly: true};
	    },
		numeric: function(value) {
        	return {number: true};
	    },
		unique: function(value,t,v) {
        	return {
            	remote: {
	            	type: 'get',
	                url: value,
	                dataType: 'json',
                    message: "Value must be unique"
				}
            };
	    },
		min: function(value) {
        	return {min: value};
	    },
		max: function(value) {
        	return {max: value};
	    },
		minlength: function(value) {
        	return {minlength: value};
	    },
		maxlength: function(value) {
        	return {maxlength: value};
	    },
        /* gotta work this one out
        bytype: function(value, types, type) {
        	var validation = _.find(types, function(e) {
            	return e.type === type;
            });
            if (validation) {
            	return validation.rule.jqvalidation(value, type);
            }
            return true;
        },
        */
		regex: function(value) {
            return {pattern: value};
	    },
        none: null
    };
    
    var validation = {
    	/*
         * Model Validation object
         *
         */
	    Validation: function(rule, value) {
		    this.rule = rule;
		    this.value = value;
	        
	        this.validationmessage = ""; // what to do, what to do...
	        this.isValid = function(v, t) {
	        	var vm = validations[this.rule];
	        	if (vm) {
	            	return vm(v, this.value, t);
	            }
	            return true;
	        };
	        
	        this.viewValidation = function(t) {
            	// find jquery validation mapping
	        	var vm = jqvalidations[this.rule];
	        	if (vm) {
	            	return vm(this.value, t);
	            }
	            return null;
	        };
	    },
        
    	/*
         * View/Model Validation object
         *
         */
        ViewValidation: function(view, validations) {
        	this.view = view;
            this.validations = validations;
        },
        
    	/*
         * Set model validations on a view
         *
         */
        SetViewValidations: function(view, viewvalidations) {
            $(view).validate({debug: true});
        
        	_.each(viewvalidations, function(viewval) {
	        	var vv = {};
                var vm = {};
	            _.each(viewval.validations, function(validation) {
	            	var vvs = validation.viewValidation();
	            	_.each(vvs, function(value, key) {
	            		vv[key] = value;
                        if (value.message) {
                        	vm[key] = value.message;
                        }
					});                       
	            });
                vv['messages'] = vm;
	            
                // jquery validation
	            $(viewval.view).rules("add", vv);
            });
        }
    };
    
    return validation;
});
