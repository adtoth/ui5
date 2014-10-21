/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
 
jQuery.sap.declare("sap.m.CarouselRenderer");

/**
 * @class Carousel renderer. 
 * @static
 */
sap.m.CarouselRenderer = {
};

/**
 * Renders the Carousel's HTML, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.CarouselRenderer.render = function(rm, oCarousel){ 
	// Return immediately if control is invisible or if there are no pages to be rendered
	if (!oCarousel.getVisible()) {
		return;
	}
	

	//Outer carousel div
	rm.write("<div");
	rm.writeControlData(oCarousel);

	rm.addStyle("width", oCarousel.getWidth());
	rm.addStyle("height", oCarousel.getHeight());
	rm.writeStyles();
	
	rm.addClass("sapMCrsl");
	//'sapMCrslFluid' is originally from mobify-carousel
	rm.addClass("sapMCrslFluid");
	
	
	// add all classes (also custom classes) to carousel tag
	rm.writeClasses();
	
	var sTooltip = oCarousel.getTooltip_AsString();
	if (sTooltip) {
		rm.writeAttributeEscaped("title", sTooltip);
	}
	
	rm.write(">");
	
	var aPages = oCarousel.getPages();
	var iPageCount = aPages.length;
	var sPageIndicatorPlacement = oCarousel.getShowPageIndicator() ? 
		oCarousel.getPageIndicatorPlacement() : null; 
	
	
	//visual indicator
	if(sPageIndicatorPlacement === sap.m.PlacementType.Top) {
		this._renderPageIndicator(rm, iPageCount);
	}
	
	//inner carousel div
	rm.write("<div class='sapMCrslInner'>");
	//do housekeeping
	oCarousel._cleanUpScrollContainer();
	
	var fnRenderPage = function(oPage, iIndex) {
		//item div
		rm.write("<div class='sapMCrslItem");
		if(sPageIndicatorPlacement === sap.m.PlacementType.Bottom) {
			rm.write(" sapMCrslBottomOffset");
		}
		rm.write("'>");
			//Invisible element which is used to determine when desktop keyboard navigation
			//has reached the FIRST focusable element of a page and went beyond. In that case, the controller
			//will focus the last focusable element of the previous page
			rm.write("<span class='sapMCrslFirstFE' pageIndex=\"" + iIndex + "\" tabIndex=\"0\"/>");
			rm.renderControl(oCarousel._createScrollContainer(oPage, iIndex));
			//Invisible element which is used to determine when desktop keyboard navigation
			//has reached the LAST focusable element of a page and went beyond. In that case, the controller
			//will focus the first focusable element of the next page
			rm.write("<span class='sapMCrslLastFE' pageIndex=\"" + iIndex + "\" tabIndex=\"0\"/>");
		rm.write("</div>");	
	};
	
	//Render Pages
	aPages.forEach(fnRenderPage);
	
	
	rm.write("</div>");	
	//inner div ends
	
	
	if (sap.ui.Device.system.desktop && iPageCount > 1) {
		//heads up controls for desktop browsers
		rm.write("<div class='sapMCrslControls sapMCrslHud'>");
			rm.write("<a class='sapMCrslPrev' href='#' data-slide='prev' tabIndex=1><div class='sapMCrslHudInner'>");
			rm.renderControl(oCarousel._getNavigationArrow('left'));
			rm.write("</div></a>");
			
			rm.write("<a class='sapMCrslNext' href='#' data-slide='next' tabIndex=1><div class='sapMCrslHudInner'>");
			rm.renderControl(oCarousel._getNavigationArrow('right'));
			rm.write("</div></a>");
		rm.write("</div>");
	}
	
	
	//visual indicator
	if(sPageIndicatorPlacement === sap.m.PlacementType.Bottom) {
		this._renderPageIndicator(rm, iPageCount, true);
	}
	rm.write("</div>");	
	
	//page-wrap ends
};


/**
 * Renders the page indicator, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param aPages array of controls to be rendered
 * @private
 */
sap.m.CarouselRenderer._renderPageIndicator = function(rm, iPageCount, bBottom){
	//page indicator div
	rm.write("<div class='sapMCrslControls sapMCrslBulleted" + 
			(bBottom ? " sapMCrslBottomOffset" : "") +
			"'>");
	for ( var i = 1; i <= iPageCount; i++) {
		//item span
		rm.write("<span data-slide=" + i + ">" + i + "</span>");
	}
	rm.write("</div>");	
};



