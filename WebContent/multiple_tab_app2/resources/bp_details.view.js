sap.ui.jsview("multiple_tab_app2.resources.bp_details", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf multiple_tab_app2.resources.bp_details
	*/ 
	getControllerName : function() {
		return "multiple_tab_app2.resources.bp_details";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf multiple_tab_app2.resources.bp_details
	*/ 
	createContent : function(oController) {
		this.createOverlayContainer();
	},
	
	createOverlayContainer:function(){
		// workaround for Chrome change
		if (!!sap.ui.Device.browser.webkit && !document.width) {
		    jQuery.sap.require("sap.ui.core.ScrollBar");
		     var fnOrg = sap.ui.core.ScrollBar.prototype.onAfterRendering;
		     sap.ui.core.ScrollBar.prototype.onAfterRendering = function() {
		         document.width = window.outerWidth;
		         fnOrg.apply(this, arguments);
		         document.width = undefined;
		     };
		}
		var oOverlayContainer = new sap.ui.ux3.OverlayContainer("ID_bp_detailsBp_sales_listOverlay",{openButtonVisible:false});
		oOverlayContainer.addContent(this.createDetailBusinesspartner());
		oOverlayContainer.addContent(this.createListSalesorder());
	
		return oOverlayContainer;

	},

	/**
	 * Returns a panel with the user-selected name-value properties.  
	 * @returns {sap.ui.commons.Panel}
	 */
	createDetailBusinesspartner:function(){
	
		var oPanel = new sap.ui.commons.Panel({
			width: "100%",
			height: "30%",
			text:oBundle.getText("BUSINESSPARTNER__DETAILS_TITLE"),
			showCollapseIcon: false,
			areaDesign: sap.ui.commons.enums.AreaDesign.Plain
		});

		var oMatrix = new sap.ui.commons.layout.MatrixLayout({
			layoutFixed: true,
			width: '100%', 
			widths:["10%", "90%"], 
			columns: 2
		});
		oMatrix.createRow(
					new sap.ui.commons.Label({text: oBundle.getText("BUSINESSPARTNER_BUSINESSPARTNERID"), design:sap.ui.commons.LabelDesign.Bold }),
					new sap.ui.commons.TextView("ID_bp_detailsBp_sales_list_BusinessPartner_BusinessPartnerID",{editable:false })
		);
		oMatrix.createRow(
					new sap.ui.commons.Label({text: oBundle.getText("BUSINESSPARTNER_ROLE"), design:sap.ui.commons.LabelDesign.Bold }),
					new sap.ui.commons.TextView("ID_bp_detailsBp_sales_list_BusinessPartner_Role",{editable:false })
		);
		oMatrix.createRow(
					new sap.ui.commons.Label({text: oBundle.getText("BUSINESSPARTNER_PHONENUMBER"), design:sap.ui.commons.LabelDesign.Bold }),
					new sap.ui.commons.TextView("ID_bp_detailsBp_sales_list_BusinessPartner_PhoneNumber",{editable:false })
		);
		oMatrix.createRow(
					new sap.ui.commons.Label({text: oBundle.getText("BUSINESSPARTNER_COMPANYNAME"), design:sap.ui.commons.LabelDesign.Bold }),
					new sap.ui.commons.TextView("ID_bp_detailsBp_sales_list_BusinessPartner_CompanyName",{editable:false })
		);
		oMatrix.createRow(
					new sap.ui.commons.Label({text: oBundle.getText("BUSINESSPARTNER_LEGALFORM"), design:sap.ui.commons.LabelDesign.Bold }),
					new sap.ui.commons.TextView("ID_bp_detailsBp_sales_list_BusinessPartner_LegalForm",{editable:false })
		);
		oMatrix.createRow(
					new sap.ui.commons.Label({text: oBundle.getText("BUSINESSPARTNER_COUNTRY"), design:sap.ui.commons.LabelDesign.Bold }),
					new sap.ui.commons.TextView("ID_bp_detailsBp_sales_list_BusinessPartner_Country",{editable:false })
		);

		oPanel.addContent(oMatrix);
		return oPanel;
	},
	
	/**
	 * Option to extend the bottom panel using the navigation bar. This way the user can navigate to siblings associations. 
	 * This is not currently used.
	 */
/*	createNavigationBar:function(){
		var oNavigationItem1 = new sap.ui.ux3.NavigationItem({key:"key1", text:"Text..."});
		var oNavigationBar = new sap.ui.ux3.NavigationBar({
			items:[oNavigationItem1],
			selectedItem:oNavigationItem1
		});

		return oNavigationBar;
	},
*/

	/**
	 * Returns a panel with a table including columns based on the user's selections.
	 * @returns {sap.ui.commons.Panel}
	 */
	createListSalesorder:function(){

		var oTable = sap.ui.getCore().byId("ID_SalesOrderTable_1");
		if(oTable == undefined){
			var oTable = new sap.ui.table.Table("ID_SalesOrderTable_1", {
				visibleRowCount  : 20,
				selectionMode: sap.ui.table.SelectionMode.None
			});

      	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("SALESORDER_SALESORDERID")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "SalesOrderID"),
			sortProperty: "SalesOrderID",
			filterProperty: "SalesOrderID"
 		}));
     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("SALESORDER_NETSUM")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "NetSum"),
			sortProperty: "NetSum",
			filterProperty: "NetSum"
 		}));
     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("SALESORDER_CREATEDAT")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "CreatedAt",new sap.ui.model.type.DateTime({style: "medium"})),
			sortProperty: "CreatedAt",
			filterProperty: "CreatedAt"
 		}));
     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("SALESORDER_TOTALSUM")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "TotalSum"),
			sortProperty: "TotalSum",
			filterProperty: "TotalSum"
 		}));
     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("SALESORDER_STATUS")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "Status"),
			sortProperty: "Status",
			filterProperty: "Status"
 		}));
     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("SALESORDER_CUSTOMERNAME")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "CustomerName"),
			sortProperty: "CustomerName",
			filterProperty: "CustomerName"
 		}));
     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("SALESORDER_BUSINESSPARTNERID")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "BusinessPartnerID"),
			sortProperty: "BusinessPartnerID",
			filterProperty: "BusinessPartnerID"
 		}));
 		
		}
		var oTablePanel = new sap.ui.commons.Panel({
			width: "100%",
			text: oBundle.getText("SALESORDER__LIST_TITLE"),  
			showCollapseIcon: false
		});

		oTablePanel.addContent(oTable); 

		return oTablePanel;

	},
	

});
