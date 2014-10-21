jQuery.sap.require("sap.ui.demo.myFiori.util.Formatter");
sap.ui.controller("sap.ui.demo.myFiori.view.bevetMaster", {

	handleListItemPress : function(evt) {
		var context = evt.getSource().getBindingContext();
		this.nav.to("bevetDetail", context);
	},

	handleNavButtonPress : function(evt) {
		this.nav.back("Master");
	},

	handleSearch : function(evt) {

		// create model filter
		var filters = [];
		var query = evt.getParameter("query");
		if (query && query.length > 0) {
			var filter = new sap.ui.model.Filter("BPId",
					sap.ui.model.FilterOperator.Contains, query);
			filters.push(filter);
		}

		// update list binding
		var list = this.getView().byId("list");
		var binding = list.getBinding("items");
		binding.filter(filters);
	},

	handleListSelect : function(evt) {
		var context = evt.getParameter("listItem").getBindingContext();
		this.nav.to("bevetDetail", context);
	},

	handleGroup : function(evt) {

		// compute sorters
		var sorters = [];
		var item = evt.getParameter("selectedItem");
		var key = (item) ? item.getKey() : null;
		if ("LifecycleStatus" === key) {
			sap.ui.demo.myFiori.util.Grouper.bundle = this.getView().getModel(
					"i18n").getResourceBundle();
			var grouper = sap.ui.demo.myFiori.util.Grouper[key];
			sorters.push(new sap.ui.model.Sorter(key, true, grouper));
		}

		// update binding
		var list = this.getView().byId("list");
		var oBinding = list.getBinding("items");
		oBinding.sort(sorters);
	},

	scan : function(evt) {

		var foundItems = 0;
		console.log('scanning');

		var scanner = cordova.require("cordova/plugin/BarcodeScanner");

		scanner.scan(function(result) {

			var data = oModel.getProperty(a.sPath + "/Item");
			for (var i = 0; i < data.length; i++) {
				if (oModel.getProperty(a.sPath + "/Item" + "/" + i
						+ "/ProductID") === result.text) {
					sap.m.MessageToast.show("Confirmed");
					oModel.setProperty(a.sPath + "/Items" + "/" + i
							+ "/Pick up status", 'K');
					foundItems++;
				}

				else
					sap.m.MessageToast.show("Not Confirmed");
			}

		}, function(error) {
			console.log("Scanning failed: ", error);
		});

	},
	
	scan_debug : function(evt) {
		var a = evt.getSource().getBindingContext();
		var data = sap.ui.getCore().getModel().getProperty("Item(2)");
		alert(data);
	
		//sap.ui.getCore().getModel().setProperty(a.sPath + "/To","Updatelt Cim2");
		//sap.ui.getCore().getModel().submitChanges();
		//sap.ui.getCore().getModel().updateBindings(true);
		//sap.ui.getCore().getModel().forceNoCache(true);
		//data = sap.ui.getCore().getModel().getProperty(a.sPath + "/To");
		//alert(data);
		//var data = sap.ui.getCore().getModel();
		//alert(data);
		/*for ( var i = 0; i < data.length; i++) {
			if (oModel.getProperty(a.sPath + "/Item" + "/"
					+ i + "/ProductID") === result.text) {
				sap.m.MessageToast.show("Confirmed");
				oModel.setProperty(a.sPath + "/Items" + "/"
						+ i + "/Pick up status", 'K');
				foundItems++;
			}

			else
				sap.m.MessageToast.show("Not Confirmed");
		} 
*/
},

});