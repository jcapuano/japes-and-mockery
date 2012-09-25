require(["application", "utils/logger"], 
function(app, logger) {
    $(function() {
    	// required modules loaded
        logger.info("Running application");
        app.run('#/');
    });
});