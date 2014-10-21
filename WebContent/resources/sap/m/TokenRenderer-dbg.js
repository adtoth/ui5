/*!

* SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.

*/
jQuery.sap.declare("sap.m.TokenRenderer");

/**
 * @class Token renderer. 
 * @static
 */
sap.m.TokenRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.TokenRenderer.render = function(oRm, oControl){ 
	// write the HTML into the render manager
	oRm.write("<div tabindex=\"-1\"");
	oRm.writeControlData(oControl);
	oRm.addClass("sapMToken");
	oRm.writeClasses();
	oRm.write(">");

	sap.m.TokenRenderer._renderInnerControl(oRm, oControl);
	
	if (oControl.getEditable()){
		oRm.renderControl(oControl._deleteIcon);
	}	
	
	oRm.write("</div>");
};

/**
 * Renders the inner HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.TokenRenderer._renderInnerControl = function(oRm, oControl){
	oRm.write("<span class=\"sapMTokenText\">");
	var title = oControl.getText();
	if (title) {
		oRm.writeEscaped(title);
	}
	oRm.write("</span>");
};
