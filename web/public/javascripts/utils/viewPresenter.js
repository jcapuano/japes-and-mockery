// View Presentation
define(function() {
	var handlebars_cache = {};
    
	function handlebars(view, data, partials, name) {
    	var fn = handlebars_cache[name];
        if (!fn) {
			fn = handlebars_cache[name] = Handlebars.compile(view);
		}
        
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
            	deferreds.push($.get(self.viewpath + view, function(data) {
                	var name = view.replace(/\.[^/.]+$/, "");
                    Handlebars.registerPartial(name, data);
                	self.views[name] = data;
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
