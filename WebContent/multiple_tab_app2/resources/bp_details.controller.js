sap.ui.controller("multiple_tab_app2.resources.bp_details", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf multiple_tab_app2.resources.bp_details
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf multiple_tab_app2.resources.bp_details
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf multiple_tab_app2.resources.bp_details
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf multiple_tab_app2.resources.bp_details
*/
//	onExit: function() {
//
//	}
	
	loadContent:function(oContext){
		var sFirstDetailContext = this.setBusinesspartnerDetails(oContext);
		this.setSalesorderList(sFirstDetailContext);
		
		var oOverlaycontainer = sap.ui.getCore().byId("ID_bp_detailsBp_sales_listOverlay");

		if(!oOverlaycontainer.isOpen()){
			oOverlaycontainer.open();
		}
		
	},

	/**
	 * Updates the details panel with business data obtained after an OData call to the SAP NetWeaver Gateway system.
	 * @param oContext - the OData context of the previous view 
	 */
	setBusinesspartnerDetails:function(oContext){
		 
		var oModel  = sap.ui.getCore().byId("ID_BusinessPartnerTable").getModel();
		var sNewContext = "";
		oModel.read("",oContext,[],false,
				function(oData,response){
					sap.ui.getCore().byId("ID_bp_detailsBp_sales_list_BusinessPartner_BusinessPartnerID").setText(oData["BusinessPartnerID"]);
					sap.ui.getCore().byId("ID_bp_detailsBp_sales_list_BusinessPartner_Role").setText(oData["Role"]);
					sap.ui.getCore().byId("ID_bp_detailsBp_sales_list_BusinessPartner_PhoneNumber").setText(oData["PhoneNumber"]);
					sap.ui.getCore().byId("ID_bp_detailsBp_sales_list_BusinessPartner_CompanyName").setText(oData["CompanyName"]);
					sap.ui.getCore().byId("ID_bp_detailsBp_sales_list_BusinessPartner_LegalForm").setText(oData["LegalForm"]);
					sap.ui.getCore().byId("ID_bp_detailsBp_sales_list_BusinessPartner_Country").setText(oData["Country"]);
					var sContext = response.data.__metadata.uri;
					sNewContext = sContext.substring(sContext.lastIndexOf("/") + 1);
				},
				function(error){
					if (error.response != undefined ){
							displayError({message: error.message, statusCode: error.response.statusCode , statusText: error.response.statusText, requestUri: error.response.requestUri});
					}
					else if (error.message != undefined){
							alert(oBundle.getText("MESSAGE") + " " + error.message);
					}
					else{
							alert(oBundle.getText("GENERAL_ERROR_MESSAGE"));
					}
				});
		return sNewContext;
	},

	/**
	 * Updates the Table panel with business data obtained after an Odata call to SAP NetWeaver Gateway.
	 * @param oContext - the OData context of the previous view 
	 */
	setSalesorderList:function(oContext){

		var sListContext  = "/" + oContext + "/" + "SalesOrders";

		var oCurrOverlayTable = sap.ui.getCore().byId("ID_SalesOrderTable_1");
		var oModel  = sap.ui.getCore().byId("ID_BusinessPartnerTable").getModel();

		oCurrOverlayTable.setModel(oModel);
		oCurrOverlayTable.bindRows(sListContext);
	},


});