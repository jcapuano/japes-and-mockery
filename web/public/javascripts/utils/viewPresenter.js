// View Presentation
define(function() {
	Handlebars.registerHelper('include', function(template, options){
	  // Find the partial in question.
	  var partial = Handlebars.partials[template];
      var fn = handlebars_template(partial, template);
	   
	  // Build the new context; if we don't include `this` we get functionality
	  // similar to {% include ... with ... only %} in Django.
	  //var context = _.extend({}, this, options.hash);
	  var context = _.extend({}, options.hash);
	   
       var html = fn(context);
	  // Render, marked as safe so it isn't escaped.
	  return new Handlebars.SafeString(html);
	});

	var handlebars_cache = {};
    
	function handlebars_template(view, name) {
    	var fn = handlebars_cache[name];
        if (!fn) {
			fn = handlebars_cache[name] = Handlebars.compile(view);
		}
        return fn;
    };
    
	function handlebars(view, data, partials, name) {
    	var fn = handlebars_template(view, name);
        
        data     = $.extend({}, data);
        partials = $.extend({}, data.partials, partials);
        
        return fn(data, {"partials":partials});
    };

    function assemblePartials(views) {
    	var partials = {};
        
        _.each(views, function(value, key) {
        	partials[key] = value;
        });
        
        return partials;
    };
    
	var viewPresenter = {
    	
        viewselector: '#content',
    
    	viewpath: '',//'/views/',
        
    	views: {},
        
        load: function(views, callback) {
        	
            var deferreds = [],
            self = this;

            $.each(views, function(index, view) {
            	deferreds.push($.ajax({
                	url: self.viewpath + view,
                    dataType: 'html',
                    success: function(data) {
                		var name = view.replace(/\.[^/.]+$/, "");
	                    Handlebars.registerPartial(name, data);
    	            	self.views[name] = data;
					}
                }));
			});
            
            $.when.apply(null, deferreds).done(callback);
		},

        // Get view by name from hash of preloaded views
        get: function(view, data, partials, name) {
        	if (typeof name == 'undefined') { 
            	name = view.replace(/\.[^/.]+$/, "");
			}
            var v = this.views[name];
            if (v) {
            	return handlebars(v, data, partials, name);
			}
            return '';
		},
        
        // Get view by name from hash of preloaded views
        show: function(view, data, partials, name, selector) {
        	selector = selector || this.viewselector;
        	$(selector).empty();
        	var html = this.get(view, data, partials || assemblePartials(this.views), name);
        	$(selector).html(html);
		}
	};
    
    return viewPresenter;
});    
