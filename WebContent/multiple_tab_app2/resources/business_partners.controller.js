sap.ui.controller("multiple_tab_app2.resources.business_partners", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf multiple_tab_app2.resources.business_partners
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
				
		
		this.displayBusinesspartner(oModel);
},
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf multiple_tab_app2.resources.business_partners
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf multiple_tab_app2.resources.business_partners
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf multiple_tab_app2.resources.business_partners
*/
//	onExit: function() {
//
//	}
	
	displayBusinesspartner:function(oModel){		
		var oTable = sap.ui.getCore().byId("ID_BusinessPartnerTable");
		oTable.setModel(oModel);
		oTable.bindRows("/BusinessPartners");		
	},
	
	 onPressGetbp_details:function(oEvent){		 
			
		 var view = sap.ui.getCore().byId("ID_bp_details");
			//alert("megint");	
			if (view == undefined){
				//alert("lefutottam");
				var view = sap.ui.view({id:"ID_bp_details", viewName:"multiple_tab_app2.resources.bp_details", type:sap.ui.core.mvc.ViewType.JS});	
			};					
			view.getController().loadContent(this.getBindingContext());
		},

});