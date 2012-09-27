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

	var viewPresenter = {
    	
        viewselector: '#content',
    
    	viewpath: '/views/',
        
    	views: {},
        
        load: function(names, callback) {
        	
            var deferreds = [],
            self = this;

            $.each(names, function(index, name) {
            	deferreds.push($.get(self.viewpath + name, function(data) {
                	self.views[name] = data;
				}));
			});
            
            $.when.apply(null, deferreds).done(callback);
		},

        // Get view by name from hash of preloaded views
        get: function(view, data, partials, name) {
        	if (typeof name == 'undefined')  { name = view; }
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
        	var html = this.get(view, data, partials, name);
        	$(selector).html(html);
		}
	};
    
    return viewPresenter;
});    
