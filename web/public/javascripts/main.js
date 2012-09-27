require(["application", "utils/logger"], 
function(Application, logger) {
    $(function() {
    	// required modules loaded
        logger.info("Running application");
        var app = new Application();
        app.run();
    });
});