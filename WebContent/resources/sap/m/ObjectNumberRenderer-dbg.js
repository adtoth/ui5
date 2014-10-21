/*
 * @copyright
 */

jQuery.sap.declare("sap.m.ObjectNumberRenderer");

/**
 * @class ObjectNumber renderer. 
 * @static
 */
sap.m.ObjectNumberRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.ObjectNumberRenderer.render = function(oRm, oON){
	// return immediately if control is invisible
	if (!oON.getVisible()) {
		return;
	}

	// write the HTML into the render manager
	oRm.write("<div"); // Number begins
	oRm.writeControlData(oON);
	oRm.addClass("sapMObjectNumber");
	if (oON.getEmphasized()) {
		oRm.addClass("sapMObjectNumberEmph");
	}
	oRm.addClass(oON._sCSSPrefixObjNumberStatus + oON.getState());
	oRm.writeClasses();
	oRm.write(">");

	oRm.write("<span"); // Number text begins
	oRm.addClass("sapMObjectNumberText");
	oRm.writeClasses();
	oRm.write(">");
	oRm.writeEscaped(oON.getNumber()); 
	oRm.write("</span>"); // Number text ends

	oRm.write("<span"); // Number unit begins
	oRm.addClass("sapMObjectNumberUnit");
	oRm.writeClasses();
	oRm.write(">");
	
	var unit = oON.getUnit();
	if(!unit){
		unit = oON.getNumberUnit(); 
	}
	oRm.writeEscaped(unit);		
	oRm.write("</span>"); // Number unit ends

	oRm.write("</div>"); // Number ends
};
