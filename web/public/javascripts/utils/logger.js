define(["utils/diagnostics"],
function(diag) {
	var logger;
 
    return logger = (logger || new diag.Logger(new diag.ConsoleLogProvider()));
});    