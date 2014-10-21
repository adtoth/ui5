jQuery.sap.require("sap.ui.demo.myFiori.util.Formatter");
sap.ui.controller("sap.ui.demo.myFiori.view.Master", {

	handleBevetelezesPress : function (evt) {
		var context = evt.getSource().getBindingContext();
		this.nav.to("bevetMaster", context);
	},
	
	handleSzallitasiPress : function (evt) {
		var context = evt.getSource().getBindingContext();
		this.nav.to("szallitasiMaster", context);
	},

});