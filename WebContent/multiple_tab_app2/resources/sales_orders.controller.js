sap.ui.controller("multiple_tab_app2.resources.sales_orders", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf multiple_tab_app2.resources.sales_orders
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
				
		
		this.displaySalesorders(oModel);

		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf multiple_tab_app2.sales_order
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf multiple_tab_app2.sales_order
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf multiple_tab_app2.sales_order
*/
//	onExit: function() {
//
//	}
	
	displaySalesorders:function(oModel){
		var oTable = sap.ui.getCore().byId("ID_SalesOrderTable");
		oTable.setModel(oModel);
		oTable.bindRows("/SalesOrders");
	},
	
	

});