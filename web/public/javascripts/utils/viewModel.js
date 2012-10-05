define(["models/validation"],
function(Validation) {
	function View(selector, fields) {
    	this.selector = selector;
        this.fields = fields || [];
    };
    
    View.prototype.connect = function() {
    	/*
    	var validations = _.map(this.fields, function(field) {
        	return field.property.viewValidations(field.selector);
        });
        */
        var validations = [];
        _.each(this.fields, function(field) {
        	if (field.selector) {
            	var vv = field.property.viewValidations(field.selector);
                if (vv) {
                	validations.push(vv);
				}                    
            }
        });
        
    	Validation.SetViewValidations(this.selector, validations);
        
        return this;
    };
    
    View.prototype.set = function() {
        _.each(this.fields, function(field) {
        	field.set();
        });
        return this;
    };
    
    View.prototype.get = function() {
        _.each(this.fields, function(field) {
        	field.get();
        });
        return this;
    };

    function Field(selector, property, type) {
    	this.selector = selector;
        this.property = property;
        this.type = type;
    };
    
    Field.prototype.get = function() {
    	if (this.selector) {
        	var e = $(this.selector)
			var val = (this.type == 'text') ? e.text() : e.val();
            
            this.property(val);
        }
        return this;
    };

    Field.prototype.set = function() {
    	if (this.selector) {
        	var e = $(this.selector);
            var val = this.property();
            if (this.type == 'text') {
            	e.text(val);
            }
            else {
            	e.val(val);
            }
        }
        return this;
    };
    
	var ViewModel = {
    	View: View,
        Field: Field
    
    };
    return ViewModel;
});


