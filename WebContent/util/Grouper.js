jQuery.sap.declare("sap.ui.demo.myFiori.util.Grouper");

sap.ui.demo.myFiori.util.Grouper = {

	bundle : null, // somebody has to set this

	PicType : function (oContext) {
		var status = oContext.getProperty("PicType");
		var text = sap.ui.demo.myFiori.util.Grouper.bundle.getText("StatusText" + status, "?");
		return {
			key: status,
			text: text
		};
	},
	
	SzallitasStatus : function (oContext) {
		var status = oContext.getProperty("SzallitasStatus");
		var text = sap.ui.demo.myFiori.util.Grouper.bundle.getText("StatusText" + status, "?");
		return {
			key: status,
			text: text
		};
	}
	

};