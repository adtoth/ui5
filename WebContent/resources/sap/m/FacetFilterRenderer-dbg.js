/*
* @copyright
*/

jQuery.sap.declare("sap.m.FacetFilterRenderer");

/**
 * @class FacetFilter renderer. 
 * @static
 */
sap.m.FacetFilterRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.FacetFilterRenderer.render = function(oRm, oControl){ 
	
	// Return immediately if control is invisible
	if (!oControl.getVisible()) {
		return;
	}

	switch (oControl.getType()) {

	case sap.m.FacetFilterType.Simple:
		sap.m.FacetFilterRenderer.renderSimpleFlow(oRm, oControl);
		break;

	case sap.m.FacetFilterType.Light:
		sap.m.FacetFilterRenderer.renderSummaryBar(oRm, oControl);
		break;
	}
};

/**
 * 
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.FacetFilterRenderer.renderSimpleFlow = function(oRm, oControl) {
	
	oRm.write("<div");
	oRm.writeControlData(oControl);		
	oRm.addClass("sapMFF");
	
	if(oControl.getShowSummaryBar()) {
		
		oRm.write(">");
		sap.m.FacetFilterRenderer.renderSummaryBar(oRm, oControl);
	} else {
		
		if (oControl._lastScrolling) { 
			
			oRm.addClass("sapMFFScrolling");
		} else {
			
			oRm.addClass("sapMFFNoScrolling");
		}		
		
		if(oControl.getShowReset()) {		
			
			oRm.addClass("sapMFFResetSpacer");
		}
		oRm.writeClasses();
		oRm.write(">");		
		
		
		if (sap.ui.Device.system.desktop) {
			oRm.renderControl(oControl._getScrollingArrow("left"));
		}		
		
		// Render the div for the carousel
		oRm.write("<div");
		oRm.writeAttribute("id", oControl.getId() + "-head");
		oRm.writeControlData(oControl);
		oRm.addClass("sapMFFHead");
		oRm.writeClasses();
		oRm.write(">");	
		
		var aLists = oControl._getSequencedLists();
		for(var i=0; i < aLists.length; i++) {
			
			oRm.renderControl(oControl._getButtonForList(aLists[i]));
			if (oControl.getShowPersonalization()) {
				
				oRm.renderControl(oControl._getFacetRemoveIcon(aLists[i]));
			}			
		}
		
		if (oControl.getShowPersonalization()) {
			oRm.renderControl(oControl.getAggregation("addFacetButton"));
		}		
		oRm.write("</div>"); // Close carousel div
		
		if (sap.ui.Device.system.desktop) {
			oRm.renderControl(oControl._getScrollingArrow("right"));
		}	
		
		if(oControl.getShowReset()) {
			
			oRm.write("<div");
			oRm.addClass("sapMFFResetDiv");
			oRm.writeClasses();
			oRm.write(">");
			oRm.renderControl(oControl.getAggregation("resetButton"));
			oRm.write("</div>");
		}				
	}
	oRm.write("</div>");
};


/**
 * 
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.FacetFilterRenderer.renderSummaryBar = function(oRm, oControl) {

	// We cannot just render the toolbar without the parent div.  Otherwise it is
	// not possible to switch type from light to simple.
	oRm.write("<div");
	oRm.writeControlData(oControl);		
	oRm.addClass("sapMFF");
	oRm.writeClasses();
	oRm.write(">");		
	var oSummaryBar = oControl.getAggregation("summaryBar");
	oRm.renderControl(oSummaryBar);
	oRm.write("</div>");
};
