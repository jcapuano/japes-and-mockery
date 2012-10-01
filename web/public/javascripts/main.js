require.config({
	paths: {
    	//"socket.io": "http://localhost:4242/socket.io/socket.io.min",
        //"jquery-ui.min": "http://ajax.aspnetcdn.com/ajax/jquery.ui/1.8.23/jquery-ui.min"//,
        //"jquery.dataTables.min": "http://ajax.aspnetcdn.com/ajax/jquery.dataTables/1.9.1/jquery.dataTables.min"
    },
	shim: {
    	'underscore': { attach: '_' },
    	//'jquery-ui.min': ['jquery'],
    	//'jquery.dataTables.min': ['jquery'],
    	'jquery.validate.min': ['jquery'],
    	'additional-methods.min': ['jquery.validate.min'],
    	'jquery.json-2.3.min': ['jquery'],
    	'jquery.history': {
        	deps: ['jquery'],
            attach: 'History'
        },
    	'amplify': { attach: 'amplify' },
    	'handlebars-1.0.rc.1': { 	
        	deps: ['jquery'],
        	attach: 'Handlebars'
		},
    	'socket.io.min': { 	
        	attach: 'io'
		}
    }
});

require(["lib/underscore", 
		//"jquery-ui.min", "jquery.dataTables.min", 
        "lib/jquery.validate.min", "lib/additional-methods.min", 
        "lib/jquery.json-2.3.min", "lib/jquery.history", 
		"lib/amplify", "lib/handlebars-1.0.rc.1", "lib/socket.io.min",
        "application", "utils/logger"], 
function(_, /*jqui, jqdt, */jqv, jqva, jqjson, jqhist, amp, hb, sio, Application, logger) {
    $(function() {
    	// required modules loaded
        logger.info("Running application");
        var app = new Application();
        app.run();
    });
});