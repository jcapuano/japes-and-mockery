define(function() {
	var diag = {
		LogEntry: function() {
        	"use strict";
	        if (!(this instanceof diag.LogEntry)) {
	        	return new diag.LogEntry();
			}
		    this.module = "";
		    this.level = "";
		    this.dataTime = undefined;
		    this.applicationId = "";
		    this.message = "";
		    this.error = undefined;
		},
        
		Logger: function(provider) {
		    "use strict";
		    //support multiple appenders
		    if (!(this instanceof diag.Logger)) {
		        return new diag.Logger(provider);
		    }
            var _provider = provider;
	        
		    function log(entry, lvl) {
		        var temp;
		        if (!(entry instanceof diag.LogEntry)) {
		            temp = new diag.LogEntry();
		            temp.message = entry;
		        } else {
		            temp = entry;
		        }
		        temp.level = lvl;
		        temp.dateTime = new Date().getTime();
		        _provider.log(temp);
		    }
	        
		    this.trace = function (entry) {
		        log(entry, "TRACE");
		    };
		    this.debug = function (entry) {
		        log(entry, "DEBUG");
		    };
		    this.info = function (entry) {
		        log(entry, "INFO");
		    };
		    this.warn = function (entry) {
		        log(entry, "WARN");
		    };
		    this.error = function (entry) {
		        log(entry, "ERROR");
		    };
		    this.fatal = function (entry) {
		        log(entry, "FATAL");
		    };
		},

		ConsoleLogProvider: function() {
	    	"use strict";
		    if (!(this instanceof diag.ConsoleLogProvider)) {
		        return new diag.ConsoleLogProvider();
		    }

            this.log = function (entry) {
			    //test for console.log,  test for nulls and format text

			    var date = new Date(entry.dateTime).toString();
			    var appId = entry.applicationId;
			    var module = entry.module;
			    var message = entry.message;
			    var space = " ";

			    var logStr = date + space + appId + space + module + space + message + space;
			    if (!(entry.error === undefined)) {
			        logStr = logStr + entry.error.name + space + entry.error.message;
			    }
			    if (typeof console == 'object') {
			        switch (entry.level.toUpperCase()) {
			            case "TRACE":
			                console.trace(logStr);
			            case "INFO":
			                console.info(logStr);
			                break;
			            case "WARN":
			                console.warn(logStr);
			                break;
			            case "ERROR":
			                console.error(logStr);
			                break;
			            case "FATAL":
			                console.error(logStr);
			                break;
			            default:
			                console.log(logStr);
			        }
			    }
			}
		},
        
        noop: null            
    };
    
    return diag;
});    