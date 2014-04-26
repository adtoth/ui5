sap.ui.jsview("multiple_tab_app2.resources.sales_orders", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf multiple_tab_app2.resources.sales_orders
	*/ 
	
	getControllerName : function() {
		return "multiple_tab_app2.resources.sales_orders";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf multiple_tab_app2.sales_order
	*/ 
	createContent : function(oController) {
		oShell.removeAllContent();
		oShell.addContent(this.createSalesorderTable());		
		},
	
	createSalesorderTable:function(){
	      
    	var oTable = new sap.ui.table.Table("ID_SalesOrderTable", {
    		visibleRowCount  : 15,
    		//showNoData: false,
  			selectionMode: sap.ui.table.SelectionMode.None
  		});
    	
 
     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("SALESORDER_SALESORDERID")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "SalesOrderID"),
			sortProperty: "SalesOrderID",
			filterProperty: "SalesOrderID"
 		}));

     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("SALESORDER_BUSINESSPARTNERID")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "BusinessPartnerID"),
			sortProperty: "BusinessPartnerID",
			filterProperty: "BusinessPartnerID"
 		}));

     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("SALESORDER_CUSTOMERNAME")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "CustomerName"),
			sortProperty: "CustomerName",
			filterProperty: "CustomerName"
 		}));

     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("SALESORDER_NOTE")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "Note"),
			sortProperty: "Note",
			filterProperty: "Note"
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
 		return oTable;   		
      },

});
