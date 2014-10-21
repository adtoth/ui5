jQuery.sap.require("sap.m.MessageBox");
jQuery.sap.require("sap.m.MessageToast");
jQuery.sap.require("sap.ui.demo.myFiori.util.Formatter");
sap.ui
		.controller(
				"sap.ui.demo.myFiori.view.bevetDetail",
				{

					handleNavButtonPress : function(evt) {
						this.nav.back("bevetMaster");
					},

					/*scan : function(evt) {

						
						var foundItems = 0;
						console.log('scanning');

						var scanner = cordova.require("cordova/plugin/BarcodeScanner");

						scanner.scan(function(result) {
							var a = evt.getSource().getBindingContext();
							var data = sap.ui.getCore().getModel().getProperty(a.sPath + "/Item");
							alert(data.length);
							for ( var i = 0; i < data.length; i++) {
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

						}, function(error) {
							console.log("Scanning failed: ", error);
						});

					},*/
					
					scan_debug : function(evt) {
							var a = evt.getSource().getBindingContext();
							var b = this.getView().getBindingContext();
							var data = sap.ui.getCore().getModel().getProperty(a.sPath +  "?$expand=Items",b,true);
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
					
					close : function(evt) {
						var a = evt.getSource().getBindingContext();
						var data = sap.ui.getCore().getModel().getProperty(a.sPath);
						if(data == 'R'){
							sap.m.MessageToast.show("Már le van zárva!");
						}
						else {
							sap.ui.getCore().getModel().setProperty(a.sPath + "/SzallitasStatus", 'R');
							sap.ui.getCore().getModel().submitChanges();
							sap.ui.getCore().getModel().updateBindings(true);
							sap.ui.getCore().getModel().forceNoCache(true);
							sap.m.MessageToast.show("Lezárva");
						}
					}

				});