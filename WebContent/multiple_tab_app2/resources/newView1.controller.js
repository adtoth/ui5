sap.ui.controller("multiple_tab_app2.resources.newView1", {
	

	/**
	 * Called when a controller is instantiated and its View controls (if available) are already created.
	 * Can be used to modify the View before it is displayed, to bind event handlers, and to do other one-time initializations.
	 */
	onInit: function() {
		
		jQuery.sap.require("multiple_tab_app2.resources.utils.connectivity");
		
		var oModel = new sap.ui.model.odata.ODataModel(serviceUrl,true);
		sap.ui.getCore().setModel(oModel);
		
//		oModel.attachRequestCompleted(function(oEvent){
			
//		});
		
		oModel.attachRequestFailed(function(oEvent){
			displayError({
				message: oEvent.getParameter("message"),
				responseText:oEvent.getParameter("responseText"), 
				statusCode:oEvent.getParameter("statusCode"), 
				statusText:oEvent.getParameter("statusText")
			});
		});


		oModel.attachParseError(function(oEvent){
			displayError({
				message: oEvent.getParameter("message"),
				responseText:oEvent.getParameter("responseText"), 
				statusCode:oEvent.getParameter("statusCode"), 
				statusText:oEvent.getParameter("statusText")
			});
		});

//		oModel.attachRequestSent(function(){

//		});	
		//if(aKey == "wi_business_partners"){			
			var view = sap.ui.getCore().byId("ID_business_partners");
			if (view == undefined){
				view = sap.ui.view({id:"ID_business_partners", viewName:"multiple_tab_app2.resources.business_partners", type:sap.ui.core.mvc.ViewType.JS});
			oShell.addContent(view);
			
		};
					
		//}	
		
//		var oEntry = {};
//		oEntry.Name = "IPad";
//		oEntry.Price = "499$";
//		oModel.create('/Products', oEntry, null, function(){
//		 		alert("Create successful");
//		 	},function(){
//				alert("Create failed");});
		

		
	},
	
	/**
	 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
	 * (NOT before the first rendering! onInit() is used for that one!).
	 */
//	onBeforeRendering: function() {

//	},


	/**
	 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 */
//	onAfterRendering: function() {

//	},


	/**
	 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
	 */
//	onExit: function() {

//	}	
	
	
	handleContentChange:function(oEvent){
		this.removeContent(view);
		var aKey = oEvent.getParameter("key");
	 if(aKey == "wi_sales_orders"){
		 oShell.destroyContent()
		var view = sap.ui.view({id:"ID_sales_orders", viewName:"multiple_tab_app2.resources.sales_orders", type:sap.ui.core.mvc.ViewType.JS});			
			oShell.addContent(view);
	 }
	 else if(aKey == "wi_business_partners"){
		 	oShell.destroyContent();
			var view = sap.ui.view({id:"ID2_business_partners", viewName:"multiple_tab_app2.resources.business_partners", type:sap.ui.core.mvc.ViewType.JS});
			oShell.addContent(view);
					
		}
	 
		
	},
	
    createShell:function(oController){
        
  	  var oShell = sap.ui.ux3.Shell("ID_BusinessPartnerShell",{
  	      appIcon: "images/SAPLogo.gif",
  		  appTitle: oBundle.getText("APP_TITLE"),
  		  showLogoutButton:false,
  		  showSearchTool: true,
  		  showInspectorTool: false,
  		  showFeederTool: false,
  		  worksetItems: [
  		                 new sap.ui.ux3.NavigationItem({
  		                	 key: "wi_business_partners",
  		                	 text: "Business Partners",
  		                 }),
  		                 new sap.ui.ux3.NavigationItem({
  		                	 key: "wi_sales_orders",
  		                	 text: "Sales Orders",
  		                 })    		                 
  		                 ],   

  	  });  
  	  
  	 return oShell;
    },
	
	/**
	 * Open the next navigation view in response to a user click.
	 * @param oEvent
	 */

});
