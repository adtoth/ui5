jQuery.sap.require("multiple_tab_app2.resources.utils.utility");

/**
 * First Application View - this is the application's starting point. It builds the application window.   
 */
sap.ui.jsview("multiple_tab_app2.resources.newView1", {

      getControllerName : function() {
         return "multiple_tab_app2.resources.newView1";
    	 
      },
      
      createContent : function(oController) {
		 oShell = oController.createShell();		
       	oShell.attachWorksetItemSelected(oController.handleContentChange);
       	return oShell;
       	
      }, 

	  
      
});
