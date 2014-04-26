sap.ui.jsview("multiple_tab_app2.resources.business_partners", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf multiple_tab_app2.resources.business_partners
	 */
	getControllerName : function() {
		return "multiple_tab_app2.resources.business_partners";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf multiple_tab_app2.resources.business_partners
	 */
	createContent : function(oController) {
		oShell.addContent(this.createBusinesspartnerTable());
	},

	createBusinesspartnerTable : function() {
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

		var oTable = new sap.ui.table.Table("ID_BusinessPartnerTable", {
			visibleRowCount : 20,
			selectionMode : sap.ui.table.SelectionMode.None
		});

		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : oBundle.getText("BUSINESSPARTNER_BUSINESSPARTNERID")
			}),
			template : new sap.ui.commons.Link().bindProperty("text",
					"BusinessPartnerID").attachPress(
					this.getController().onPressGetbp_details),
			sortProperty : "BusinessPartnerID",
			filterProperty : "BusinessPartnerID"
		}));

		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : oBundle.getText("BUSINESSPARTNER_COMPANYNAME")
			}),
			template : new sap.ui.commons.TextView().bindProperty("text",
					"CompanyName"),
			sortProperty : "CompanyName",
			filterProperty : "CompanyName"
		}));

		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : oBundle.getText("BUSINESSPARTNER_COUNTRY")
			}),
			template : new sap.ui.commons.TextView().bindProperty("text",
					"Country"),
			sortProperty : "Country",
			filterProperty : "Country"
		}));
		return oTable;
	},

});
