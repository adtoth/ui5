/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.layout.Splitter.
jQuery.sap.declare("sap.ui.layout.Splitter");
jQuery.sap.require("sap.ui.layout.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new Splitter.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * 
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 *
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getOrientation orientation} : sap.ui.core.Orientation (default: sap.ui.core.Orientation.Horizontal)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: '100%')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContentAreas contentAreas} <strong>(default aggregation)</strong> : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.layout.Splitter#event:resize resize} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * 
 * A layout that contains several content areas. The content that is added to the splitter should contain LayoutData of the type SplitterLayoutData that defines its size and size contraints.
 * 
 * By adding or changing SplitterLayoutData to the controls that make up the content areas, the size can be changed programatically. Additionally the contents can be made non-resizable individually and a minimal size (in px) can be set.
 * 
 * The orientation of the splitter can be set to horizontal (default) or vertical. All content areas of the splitter will be arranged in that way. In order to split vertically and horizontally at the same time, Splitters need to be nested.
 * 
 * The splitter bars can be focused to enable resizing of the content areas via keyboard. The contents size can be manipulated when the splitter bar is focused and Shift-Left/Down/Right/Up are pressed. When Shift-Home/End are pressed, the contents are set their minimum or maximum size (keep in mind though, that resizing an auto-size content-area next to another auto-size one might lead to the effect that the former does not take its maximum size but only the maximum size before recalculating auto sizes).
 * 
 * The splitter bars used for resizing the contents by the user can be set to different widths (or heights in vertical mode) and the splitter will automatically resize the other contents accordingly. In case the splitter bar is resized after the splitter has rendered, a manual resize has to be triggered by invoking triggerResize() on the Splitter.
 * 
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.22.5
 *
 * @constructor   
 * @public
 * @since 1.22.0
 * @experimental Since version 1.22.0. 
 * API is not yet finished and might change completely
 * @name sap.ui.layout.Splitter
 */
sap.ui.core.Control.extend("sap.ui.layout.Splitter", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.layout",
	properties : {
		"orientation" : {type : "sap.ui.core.Orientation", group : "Behavior", defaultValue : sap.ui.core.Orientation.Horizontal},
		"width" : {type : "sap.ui.core.CSSSize", group : "Appearance", defaultValue : '100%'},
		"height" : {type : "sap.ui.core.CSSSize", group : "Appearance", defaultValue : '100%'}
	},
	defaultAggregation : "contentAreas",
	aggregations : {
    	"contentAreas" : {type : "sap.ui.core.Control", multiple : true, singularName : "contentArea"}
	},
	events : {
		"resize" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.layout.Splitter with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * @name sap.ui.layout.Splitter.extend
 * @function
 */

sap.ui.layout.Splitter.M_EVENTS = {'resize':'resize'};


/**
 * Getter for property <code>orientation</code>.
 * Whether to split the contents horizontally (default) or vertically.
 *
 * Default value is <code>Horizontal</code>
 *
 * @return {sap.ui.core.Orientation} the value of property <code>orientation</code>
 * @public
 * @name sap.ui.layout.Splitter#getOrientation
 * @function
 */

/**
 * Setter for property <code>orientation</code>.
 *
 * Default value is <code>Horizontal</code> 
 *
 * @param {sap.ui.core.Orientation} oOrientation  new value for property <code>orientation</code>
 * @return {sap.ui.layout.Splitter} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.Splitter#setOrientation
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * The width of the control
 *
 * Default value is <code>100%</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.ui.layout.Splitter#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>100%</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.layout.Splitter} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.Splitter#setWidth
 * @function
 */


/**
 * Getter for property <code>height</code>.
 * The height of the control
 *
 * Default value is <code>100%</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * @name sap.ui.layout.Splitter#getHeight
 * @function
 */

/**
 * Setter for property <code>height</code>.
 *
 * Default value is <code>100%</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.ui.layout.Splitter} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.Splitter#setHeight
 * @function
 */


/**
 * Getter for aggregation <code>contentAreas</code>.<br/>
 * The content areas to be split. The control will show n-1 splitter bars between n controls in this aggregation.
 * 
 * <strong>Note</strong>: this is the default aggregation for Splitter.
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.ui.layout.Splitter#getContentAreas
 * @function
 */


/**
 * Inserts a contentArea into the aggregation named <code>contentAreas</code>.
 *
 * @param {sap.ui.core.Control}
 *          oContentArea the contentArea to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the contentArea should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the contentArea is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the contentArea is inserted at 
 *             the last position        
 * @return {sap.ui.layout.Splitter} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.Splitter#insertContentArea
 * @function
 */

/**
 * Adds some contentArea <code>oContentArea</code> 
 * to the aggregation named <code>contentAreas</code>.
 *
 * @param {sap.ui.core.Control}
 *            oContentArea the contentArea to add; if empty, nothing is inserted
 * @return {sap.ui.layout.Splitter} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.Splitter#addContentArea
 * @function
 */

/**
 * Removes an contentArea from the aggregation named <code>contentAreas</code>.
 *
 * @param {int | string | sap.ui.core.Control} vContentArea the contentArea to remove or its index or id
 * @return {sap.ui.core.Control} the removed contentArea or null
 * @public
 * @name sap.ui.layout.Splitter#removeContentArea
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>contentAreas</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.layout.Splitter#removeAllContentAreas
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>contentAreas</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oContentArea the contentArea whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.layout.Splitter#indexOfContentArea
 * @function
 */
	

/**
 * Destroys all the contentAreas in the aggregation 
 * named <code>contentAreas</code>.
 * @return {sap.ui.layout.Splitter} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.Splitter#destroyContentAreas
 * @function
 */


/**
 * Event is fired when contents are resized. 
 *
 * @name sap.ui.layout.Splitter#resize
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.id The ID of the splitter control. The splitter control can also be accessed by calling getSource() on the event.
 * @param {int[]} oControlEvent.getParameters.oldSizes An array of values representing the old (pixel-)sizes of the splitter contents
 * @param {int[]} oControlEvent.getParameters.newSizes An array of values representing the new (pixel-)sizes of the splitter contents
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'resize' event of this <code>sap.ui.layout.Splitter</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.layout.Splitter</code>.<br/> itself. 
 *  
 * Event is fired when contents are resized. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.layout.Splitter</code>.<br/> itself.
 *
 * @return {sap.ui.layout.Splitter} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.Splitter#attachResize
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'resize' event of this <code>sap.ui.layout.Splitter</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.layout.Splitter} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.Splitter#detachResize
 * @function
 */

/**
 * Fire event resize to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'id' of type <code>string</code> The ID of the splitter control. The splitter control can also be accessed by calling getSource() on the event.</li>
 * <li>'oldSizes' of type <code>int[]</code> An array of values representing the old (pixel-)sizes of the splitter contents</li>
 * <li>'newSizes' of type <code>int[]</code> An array of values representing the new (pixel-)sizes of the splitter contents</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.layout.Splitter} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.layout.Splitter#fireResize
 * @function
 */


// Start of sap\ui\layout\Splitter.js
(function(window, undefined) {
"use strict";

// "Hidden" resource bundle instance
var oResourceBundle = sap.ui.getCore().getLibraryResourceBundle("sap.ui.layout");

//////////////////////////////////////// "Static" Properties ///////////////////////////////////////


////////////////////////////////////////// Public Methods //////////////////////////////////////////

sap.ui.layout.Splitter.prototype.init = function() {
	this._needsInvalidation = false;
	this._liveResize        = true;
	this._keyboardEnabled   = true;
	this._bHorizontal       = true;
	this._calculatedSizes   = [];
	this._move              = {};
	
	// Context bound method for easy (de-)registering at the ResizeHandler
	this._resizeCallback    = this._delayedResize.bind(this);
	this._resizeHandlerId   = null;
	this.enableAutoResize();
	
	// Bound versions for event handler registration
	this._boundBarMoveEnd   = this._onBarMoveEnd.bind(this);
	this._boundBarMove      = this._onBarMove.bind(this);
	
	// Switch resizing parameters based on orientation - this must be done to initialize the values
	this._switchOrientation();
	
	// Create bound listener functions for keyboard event handling
	this._keyListeners = {
		increase : this._onKeyboardResize.bind(this, "inc"),
		decrease : this._onKeyboardResize.bind(this, "dec"),
		max      : this._onKeyboardResize.bind(this, "max"),
		min      : this._onKeyboardResize.bind(this, "min")
	};
	this._enableKeyboardListeners();
	
};

sap.ui.layout.Splitter.prototype.exit = function() {
	this.disableAutoResize();
	delete this._resizeCallback;

	delete this._boundBarMoveEnd;
	delete this._boundBarMove;
	
	delete this._$SplitterOverlay;
	delete this._$SplitterOverlayBar;
};

/**
 * This method  triggers a resize on the Splitter - meaning it forces the Splitter to recalculate
 * all sizes.
 * This method should only be used in rare cases, for example when the CSS that defines the sizes
 * of the splitter bars changes without triggering a rerendering of the splitter.
 * 
 * @param [bool] forceDirectly Do not delay the resize, trigger it right now. (default=false)
 * @public
 */
sap.ui.layout.Splitter.prototype.triggerResize = function(forceDirectly) {
	forceDirectly ? this._resize() : this._delayedResize();
};

//////////////////////////////////////// "Protected" Methods ///////////////////////////////////////

/**
 * Returns the current actual content sizes as pixel value - these values can change with every 
 * resize.
 * 
 * @returns [Number[]]
 * @protected
 * @deprecated This method is declared as protected in order to assess the need for this feature. It is declared as deprecated because the API might change in case the need for this is high enough to make it part of the official Splitter interface
 */
sap.ui.layout.Splitter.prototype.getCalculatedSizes = function() {
	return this._calculatedSizes;
};

/**
 * Enables the resize handler for this control, this leads to an automatic resize of
 * the contents whenever the control changes its size. The resize handler is enabled
 * in every control instance by default.
 * For performance reasons this behavior can be disabled by calling disableAutoResize()
 * 
 * @protected
 * @deprecated This method is declared as protected in order to assess the need for this feature. It is declared as deprecated because the API might change in case the need for this is high enough to make it part of the official Splitter interface
 */
sap.ui.layout.Splitter.prototype.enableAutoResize = function() {
	var that = this;
	sap.ui.getCore().attachInit(function() {
		that._resizeHandlerId = sap.ui.core.ResizeHandler.register(that, that._resizeCallback);
	});
	
	this._delayedResize();
};

/**
 * Disables the resize handler for this control, this leads to an automatic resize of
 * the contents whenever the control changes its size. The resize handler is enabled
 * in every control instance by default.
 * For performance reasons this behavior can be disabled by calling disableAutoResize()
 * 
 * @protected
 * @deprecated This method is declared as protected in order to assess the need for this feature. It is declared as deprecated because the API might change in case the need for this is high enough to make it part of the official Splitter interface
 */
sap.ui.layout.Splitter.prototype.disableAutoResize = function() {
	sap.ui.core.ResizeHandler.deregister(this._resizeHandlerId);
};

/**
 * Enables recalculation and resize of the splitter contents while dragging the splitter bar.
 * This means that the contents are resized several times per second when moving the splitter bar.
 * 
 * @protected
 * @deprecated This method is declared as protected in order to assess the need for this feature. It is declared as deprecated because the API might change in case the need for this is high enough to make it part of the official Splitter interface
 */
sap.ui.layout.Splitter.prototype.enableLiveResize = function() {
	this._liveResize = true;
	this.$().toggleClass("sapUiLoSplitterAnimated", false);
};

/**
 * Disables recalculation and resize of the splitter contents while dragging the splitter bar.
 * This means that the contents are resized only once after moving the splitter bar.
 * 
 * @protected
 * @deprecated This method is declared as protected in order to assess the need for this feature. It is declared as deprecated because the API might change in case the need for this is high enough to make it part of the official Splitter interface
 */
sap.ui.layout.Splitter.prototype.disableLiveResize = function() {
	this._liveResize = false;
	this.$().toggleClass("sapUiLoSplitterAnimated", true);
};

/**
 * Enables the resizing of the Splitter contents via keyboard. This makes the Splitter bars
 * focussable elements.
 * 
 * @protected
 */
sap.ui.layout.Splitter.prototype.enableKeyboardSupport = function() {
	// TODO: Decide whether to move this functionality to a property.
	var $Bars = this.$().find(".sapUiLoSplitterBar");
	$Bars.attr("tabindex", "0");
	this._enableKeyboardListeners();
};

/**
 * Disables the resizing of the Splitter contents via keyboard. This changes the Splitter bars
 * to non-focussable elements.
 * 
 * @protected
 */
sap.ui.layout.Splitter.prototype.disableKeyboardSupport = function() {
	// TODO: Decide whether to move this functionality to a property.
	var $Bars = this.$().find(".sapUiLoSplitterBar");
	$Bars.attr("tabindex", "-1");
	this._disableKeyboardListeners();
};




////////////////////////////////////////// onEvent Methods /////////////////////////////////////////

sap.ui.layout.Splitter.prototype.onBeforeRendering = function() {
	this._switchOrientation();
};

/**
 * After Rendering, this method is called, it can be used to manipulate the DOM which has already 
 * been written. Its main function is to move the previously rendered DOM from the hidden area to 
 * the main splitter area and apply correct sizing.
 */
sap.ui.layout.Splitter.prototype.onAfterRendering = function() {
	// Create overlay DOM element for resizing
	this._$SplitterOverlay = this.$("overlay");
	this._$SplitterOverlayBar = this.$("overlayBar");
	this._$SplitterOverlay.detach();
	
	// Calculate and apply correct sizes to the Splitter contents 
	this._resize();
};

/**
 * When one or several of the child controls change their layoutData, the Splitter must 
 * recalculate the sizes of its content areas.
 * 
 * @private
 */
sap.ui.layout.Splitter.prototype.onLayoutDataChange = function() {
	this._delayedResize();
};

/**
 * Starts the resize of splitter contents (when the bar is moved by touch)
 * 
 * @private
 */
sap.ui.layout.Splitter.prototype.ontouchstart = function(oJEv) {
	if (this._ignoreTouch) {
		return;
	}
	
	var sId = this.getId();
	if (!oJEv.target.id || oJEv.target.id.indexOf(sId + "-splitbar") != 0) {
		// The clicked element was not one of my splitter bars
		return;
	}
	
	if (!oJEv.changedTouches || !oJEv.changedTouches[0]) {
		// No touch in event 
		return;
	}
	
	this._ignoreMouse = true;
	this._onBarMoveStart(oJEv.changedTouches[0], true);
};

/**
 * Starts the resize of splitter contents (when the bar is moved by mouse)
 * 
 * @private
 */
sap.ui.layout.Splitter.prototype.onmousedown = function(oJEv) {
	if (this._ignoreMouse) {
		return;
	}
	
	var sId = this.getId();
	if (!oJEv.target.id || oJEv.target.id.indexOf(sId + "-splitbar") != 0) {
		// The clicked element was not one of my splitter bars
		return;
	}
	
	this._ignoreTouch = true;
	this._onBarMoveStart(oJEv);
};


/**
 * Starts a resize (for touch and click)
 * 
 * @private
 */
sap.ui.layout.Splitter.prototype._onBarMoveStart = function(oJEv, bTouch) {
	var sId = this.getId();
	
	var iPos = oJEv[this._moveCord];
	var iBar = parseInt(oJEv.target.id.substr((sId + "-splitbar-").length));
	var $Bar = jQuery(oJEv.target);
	var mCalcSizes = this.getCalculatedSizes();
	var iBarSize = this._bHorizontal ?  $Bar.innerWidth() : $Bar.innerHeight();
	
	var aContentAreas = this.getContentAreas();
	var oLd1   = aContentAreas[iBar].getLayoutData();
	var oLd2   = aContentAreas[iBar + 1].getLayoutData();
	
	if (!oLd1.getResizable() || !oLd2.getResizable()) {
		// One of the contentAreas is not resizable, do not resize
		// Also: disallow text-marking behavior when not moving bar
		_preventTextSelection(bTouch);
		return;
	}
	
	// Calculate relative starting position of the bar for virtual bar placement
	var iRelStart = 0 - iBarSize;
	for (var i = 0; i <= iBar; ++i) {
		iRelStart += mCalcSizes[i] + iBarSize;
	}
	
	this._move = {
		// Start coordinate
		start : iPos,
		// Relative starting position of the bar
		relStart : iRelStart,
		// The number of the bar that is moved
		barNum : iBar,
		// The splitter bar that is moved
		bar : jQuery(oJEv.target),
		// The content sizes for fast resize bound calculation
		c1Size : mCalcSizes[iBar],
		c1MinSize : oLd1 ? parseInt(oLd1.getMinSize(), 10) : 0,
		c2Size : mCalcSizes[iBar + 1],
		c2MinSize : oLd2 ? parseInt(oLd2.getMinSize(), 10) : 0
	};
	
	// Event handlers use bound handler methods - see init()
	if (bTouch) {
		// this._ignoreMouse = true; // Ignore mouse-events until touch is done 
		document.addEventListener("touchend",  this._boundBarMoveEnd);
		document.addEventListener("touchmove", this._boundBarMove);
	} else {
		document.addEventListener("mouseup",   this._boundBarMoveEnd);
		document.addEventListener("mousemove", this._boundBarMove);
	}
	
	this._$SplitterOverlay.css("display", "block"); // Needed because it is set to none in renderer
	this._$SplitterOverlay.appendTo(this.getDomRef());
	this._$SplitterOverlayBar.css(this._sizeDirNot, "");
	this._move["bar"].css("visibility", "hidden");
	this._onBarMove(oJEv);
};

sap.ui.layout.Splitter.prototype._onBarMove = function(oJEv) {
	if (oJEv.preventDefault) { oJEv.preventDefault(); } // Do not select text
	
	var oEvent = oJEv;
	if (oJEv.changedTouches && oJEv.changedTouches[0]) {
		// Touch me baby!
		oEvent = oJEv.changedTouches[0];
	}
	
	var iPos = oEvent[this._moveCord];
	var iDelta = (iPos - this._move.start);
	
	var c1NewSize = this._move.c1Size + iDelta;
	var c2NewSize = this._move.c2Size - iDelta;
	
	
	var bInBounds = (
		    c1NewSize >= 0
		 && c2NewSize >= 0
		 && c1NewSize >= this._move.c1MinSize
		 && c2NewSize >= this._move.c2MinSize
	);
	
	// Move virtual splitter bar
	if (bInBounds) {
		this._$SplitterOverlayBar.css(this._sizeDir, this._move.relStart + iDelta);
		
		if (this._liveResize) {
			this._resizeContents(
				/* left content number:    */ this._move["barNum"],
				/* number of pixels:       */ 0 - (this._move["start"] - oEvent[this._moveCord]),
				/* also change layoutData: */ false
			);
		}
	}
	
};


/**
 * Ends the resize of splitter contents (when the bar is moved)
 * 
 * @private
 */
sap.ui.layout.Splitter.prototype._onBarMoveEnd = function(oJEv) {
	this._ignoreMouse = false;
	this._ignoreTouch = false;
	
	var oEvent = oJEv;
	if (oJEv.changedTouches && oJEv.changedTouches[0]) {
		// Touch me baby!
		oEvent = oJEv.changedTouches[0];
	}
	
	var iPos = oEvent[this._moveCord];
	
	this._resizeContents(
		/* left content number:    */ this._move["barNum"],
		/* number of pixels:       */ 0 - (this._move["start"] - iPos),
		/* also change layoutData: */ true
	);
	
	// Remove resizing overlay
	this._move["bar"].css("visibility", "");
	this._$SplitterOverlay.css("display", ""); // Remove?
	this._$SplitterOverlay.detach();

	// Uses bound handler methods - see init()
	document.removeEventListener("mouseup",   this._boundBarMoveEnd);
	document.removeEventListener("mousemove", this._boundBarMove);
	document.removeEventListener("touchend",  this._boundBarMoveEnd);
	document.removeEventListener("touchmove", this._boundBarMove);
	
	jQuery.sap.focus(this._move.bar);
};

/**
 * Resizes the contents after a bar has been moved
 * 
 * @param iLefContent Number of the first (left) content that is resized
 * @param iPixels     Number of pixels to increase the first and decrease the second content
 * @param bFinal      Whether this is the final position (sets the size in the layoutData of the 
 *                    content areas)
 */
sap.ui.layout.Splitter.prototype._resizeContents = function(iLeftContent, iPixels, bFinal) {
	if (isNaN(iPixels)) {
		console.warn("Splitter: Received invalid resizing values - resize aborted.");
		return;
	}
	
	var aContentAreas = this.getContentAreas();
	var oLd1   = aContentAreas[iLeftContent].getLayoutData();
	var oLd2   = aContentAreas[iLeftContent + 1].getLayoutData();
	
	var sSize1 = oLd1.getSize();
	var sSize2 = oLd2.getSize();
	
	var $Cnt1 = this.$("content-" + iLeftContent);
	var $Cnt2 = this.$("content-" + (iLeftContent + 1));
	
	var iNewSize1 = this._move.c1Size + iPixels;
	var iNewSize2 = this._move.c2Size - iPixels;
	var iMinSize1 = parseInt(oLd1.getMinSize(), 10);
	var iMinSize2 = parseInt(oLd2.getMinSize(), 10);
	
	// Adhere to size constraints
	if (iNewSize1 < iMinSize1) {
		var iDiff = iMinSize1 - iNewSize1;
		iPixels += iDiff;
		iNewSize1 = iMinSize1;
		iNewSize2 -= iDiff;
	} else if (iNewSize2 < iMinSize2) {
		var iDiff = iMinSize2 - iNewSize2;
		iPixels -= iDiff;
		iNewSize2 = iMinSize2;
		iNewSize1 -= iDiff;
	}
	
	if (bFinal) {
		// Resize finished, set layout data in content areas
		if (sSize1 === "auto" && sSize2 !== "auto") {
			// First pane has auto size - only change size of second pane
			oLd2.setSize(iNewSize2 + "px"); 
		} else if (sSize1 !== "auto" && sSize2 === "auto") {
			// Second pane has auto size - only change size of first pane
			oLd1.setSize(iNewSize1 + "px"); 
		} else {
			// TODO: What do we do if both are "auto"?
			oLd1.setSize(iNewSize1 + "px"); 
			oLd2.setSize(iNewSize2 + "px"); 
		}
	} else {
		// Live-Resize, resize contents in Dom
		$Cnt1.css(this._sizeType, iNewSize1 + "px");
		$Cnt2.css(this._sizeType, iNewSize2 + "px");
	}
	
	// TODO: When resizing everything gets absolute sizes - %-values should resize to % etc.
};


////////////////////////////////////////// Private Methods /////////////////////////////////////////

/**
 * Resizes as soon as the current stack is done. Can be used in cases where several resize-relevant
 * actions are done in a loop to make sure only one resize calculation is done at the end.
 *
 * @private
 */
sap.ui.layout.Splitter.prototype._delayedResize = function() {
	// If we are not rendered, we do not need to resize since resizing is done after rendering
	if (this.getDomRef()) {
		jQuery.sap.clearDelayedCall(this._resizeTimeout);
		jQuery.sap.delayedCall(0, this, this._resize, []);
	}
};

/**
 * Recalculates the content sizes and manipulates the DOM accordingly.
 *
 * @private
 */
sap.ui.layout.Splitter.prototype._resize = function() {
	// Save calculated sizes to be able to tell whether a resize occurred
	var oldCalculatedSizes = this.getCalculatedSizes();
	this._recalculateSizes();
	var newCalculatedSizes = this.getCalculatedSizes();
	
	var aContentAreas = this.getContentAreas();
	var bLastContentResizable = true;
	for (var i = 0; i < aContentAreas.length; ++i) {
		var $Content = this.$("content-" + i);
		var oContent = aContentAreas[i];
		
		$Content.css(this._sizeType, newCalculatedSizes[i] + "px");
		$Content.css(this._sizeTypeNot, ""); // Remove other sizes.
		// TODO: Remove all wrong sizes when switching orientation instead of here?

		// Check whether bar should be movable
		var oLd = oContent.getLayoutData();
		var bContentResizable = oLd && oLd.getResizable();
		if (i > 0) {
			var bResizable = bContentResizable && bLastContentResizable;
			var $Bar = this.$("splitbar-" + (i - 1));
			$Bar.toggleClass("sapUiLoSplitterNoResize", !bResizable);
			$Bar.attr("tabindex", bResizable && this._keyboardEnabled ? "0" : "-1");
			$Bar.attr("title", bResizable ? this._getText("SPLITTER_MOVE") : "");
		}
		bLastContentResizable = bContentResizable;
	}
	
	// In case something was resized, change sizes and fire resize event
	if (_sizeArraysDiffer(oldCalculatedSizes, newCalculatedSizes)) {
		this.fireResize({
			oldSizes : oldCalculatedSizes,
			newSizes : newCalculatedSizes
		});
	}
};

/**
 * Recalculates the content sizes in three steps:
 *  1. Searches for all absolute values ("px") and deducts them from the available space.
 *  2. Searches for all percent values and interprets them as % of the available space after step 1
 *  3. Divides the rest of the space uniformly between all contents with "auto" size values
 * 
 * @private
 */
sap.ui.layout.Splitter.prototype._recalculateSizes = function() {
	// TODO: (?) Use maxSize value from layoutData
	
	var $Splitter = this.$();
	var $firstBar = this.$("splitbar-0");
	
	
	// Read all content sizes from the layout data
	var aSizes = [];
	var aContentAreas = this.getContentAreas();
	for (var i = 0; i < aContentAreas.length; ++i) {
		var oLayoutData = aContentAreas[i].getLayoutData();
		var sSize = oLayoutData ? oLayoutData.getSize() : "auto";
		
		aSizes.push(sSize);
	}
	
	this._calculatedSizes = [];
	
	var iFullSize      = this._bHorizontal ? $Splitter.innerWidth() : $Splitter.innerHeight();
	var iBarSize       = this._bHorizontal ? $firstBar.innerWidth() : $firstBar.innerHeight();
	var iSplitters     = aSizes.length - 1;
	var iAvailableSize = iFullSize - (iSplitters * iBarSize);
	
	var aAutosizeIdx = [];
	var aAutoMinsizeIdx = [];
	var aPercentsizeIdx = [];
	
	// Remove fixed sizes from available size
	for (var i = 0; i < aSizes.length; ++i) {
		var sSize = aSizes[i];
		var iSize;
		
		if (sSize.indexOf("px") > -1) {
			// Pixel based Value - deduct it from available size
			iSize = parseInt(sSize);
			iAvailableSize -= iSize;
			this._calculatedSizes[i] = iSize;
		} else if (sSize.indexOf("%") > -1) {
			aPercentsizeIdx.push(i);
		} else if (aSizes[i] == "auto") {
			var oLayoutData = aContentAreas[i].getLayoutData();
			if (oLayoutData && parseInt(oLayoutData.getMinSize(), 10) != 0) {
				aAutoMinsizeIdx.push(i);
			} else {
				aAutosizeIdx.push(i);
			}
		} else {
			jQuery.sap.log.error("Illegal size value: " + aSizes[i]);
		}
	}
	
	var bWarnSize = false; // Warn about sizes being too big for the available space
	
	// If more than the available size if assigned to fixed width content, the rest will get no
	// space at all
	if (iAvailableSize < 0) { bWarnSize = true; iAvailableSize = 0; }
	
	// Now calculate % of the available space
	var iRest = iAvailableSize;
	var iPercentSizes = aPercentsizeIdx.length;
	for (var i = 0; i < iPercentSizes; ++i) {
		var idx = aPercentsizeIdx[i];
		// Percent based Value - deduct it from available size
		var iColSize = Math.floor(parseFloat(aSizes[idx]) / 100 * iAvailableSize, 0);
		iAvailableSize -= iColSize;
		this._calculatedSizes[idx] = iColSize;
		iRest -= iColSize;
	}
	iAvailableSize = iRest;
	
	if (iAvailableSize < 0) { bWarnSize = true; iAvailableSize = 0; }
	
	// Calculate auto sizes
	var iColSize = Math.round(iAvailableSize / (aAutoMinsizeIdx.length + aAutosizeIdx.length), 0);

	// First calculate auto-sizes with a minSize constraint
	var iAutoMinSizes = aAutoMinsizeIdx.length;
	for (var i = 0; i < iAutoMinSizes; ++i) {
		var idx = aAutoMinsizeIdx[i];
		var iMinSize = parseInt(aContentAreas[idx].getLayoutData().getMinSize(), 10);
		if (iMinSize > iColSize) {
			this._calculatedSizes[idx] = iMinSize;
			iAvailableSize -= iMinSize;
		} else {
			this._calculatedSizes[idx] = iColSize;
			iAvailableSize -= iColSize;
		}
	}
	
	if (iAvailableSize < 0) { bWarnSize = true; iAvailableSize = 0; }

	// Now calculate "auto"-sizes
	iRest = iAvailableSize;
	var iAutoSizes = aAutosizeIdx.length;
	iColSize = Math.round(iAvailableSize / iAutoSizes, 0);
	for (var i = 0; i < iAutoSizes; ++i) {
		var idx = aAutosizeIdx[i];
		this._calculatedSizes[idx] = iColSize;
		iRest -= iColSize;
		if (i == iAutoSizes - 1 && iRest != 0) {
			// In case of rounding errors, change the last auto-size column
			this._calculatedSizes[idx] += iRest;
		}
	}
	
	if (bWarnSize) {
		// TODO: Decide if the warning should be kept - might spam the console but on the other
		//       hand it might make analyzing of splitter bugs easier, since we can just ask 
		//       developers if there was a warning on the console if the splitter looks weird in
		//       their application.
		jQuery.sap.log.warning(
			"The set sizes and minimal sizes of the splitter contents are bigger than the " +
			"available space in the UI."
		);
	}
};

/**
 * Stores the respective values that differ when resizing the splitter in horizontal vs. vertical
 * mode
 * 
 * @private
 */
sap.ui.layout.Splitter.prototype._switchOrientation = function() {
	this._bHorizontal = this.getOrientation() === sap.ui.core.Orientation.Horizontal;
	if (this._bHorizontal) {
		this._moveCord    = "pageX";
		this._sizeType    = "width";
		this._sizeTypeNot = "height";
		this._sizeDir     = "left";
		this._sizeDirNot  = "top";
	} else {
		this._moveCord    = "pageY";
		this._sizeType    = "height";
		this._sizeTypeNot = "width";
		this._sizeDir     = "top";
		this._sizeDirNot  = "left";
	}

	var $This = this.$();
	$This.toggleClass("sapUiLoSplitterH", this._bHorizontal);
	$This.toggleClass("sapUiLoSplitterV", !this._bHorizontal);
};

/**
 * Handles events that are generated from the keyboard that should trigger a resize (on the 
 * Splitter bars).
 * 
 * @param sType
 * @param oEvent
 */
sap.ui.layout.Splitter.prototype._onKeyboardResize = function(sType, oEvent) {
	var sBarId = this.getId() + "-splitbar-";
	if (!oEvent || !oEvent.target || !oEvent.target.id || oEvent.target.id.indexOf(sBarId) !== 0) {
		return;
	}

	var iStepSize = 20;
	var iBigStep  = 999999;

	var iBar = parseInt(oEvent.target.id.substr(sBarId.length));
	var mCalcSizes = this.getCalculatedSizes();
	// TODO: These two lines are incomprehensible magic - find better solution
	this._move.c1Size = mCalcSizes[iBar];
	this._move.c2Size = mCalcSizes[iBar + 1];
	
	var iStep = 0;
	switch (sType) {
		case "inc":
			iStep = iStepSize;
			break;
			
		case "dec":
			iStep = 0 - iStepSize;
			break;
			
		case "max":
			iStep = iBigStep;
			break;
			
		case "min":
			iStep = 0 - iBigStep;
			break;
	}

	this._resizeContents(iBar, iStep, true);
};

/**
 * Connects the keyboard event listeners so resizing via keyboard will be possible
 */
sap.ui.layout.Splitter.prototype._enableKeyboardListeners = function() {
	this.onsapincreasemodifiers = this._keyListeners.increase;
	this.onsapdecreasemodifiers = this._keyListeners.decrease;
	this.onsapendmodifiers      = this._keyListeners.max;
	this.onsaphomemodifiers     = this._keyListeners.min;
	
	this._keyboardEnabled = true;
	
	// TODO: implement sapskipforward and sapskipback for navigating between content areas
};

/**
 * Disconnects the keyboard event listeners so resizing via keyboard will not be possible anymore
 */
sap.ui.layout.Splitter.prototype._disableKeyboardListeners = function() {
	delete this.onsapincreasemodifiers;
	delete this.onsapdecreasemodifiers;
	delete this.onsapendmodifiers;
	delete this.onsaphomemodifiers;
	
	this._keyboardEnabled = false;
};

/**
 * Gets the text for the given key from the current resourcebundle 
 * 
 * @param sKey text key to look for in the resource bundle
 * @param aArgs additional arguments
 * @returns {string}
 * @private
 */
sap.ui.layout.Splitter.prototype._getText = function(sKey, aArgs) {
	return (oResourceBundle ? oResourceBundle.getText(sKey, aArgs) : sKey);
};


///////////////////////////////////////// Hidden Functions /////////////////////////////////////////

/**
 * Compares two (simple, one-dimensional) arrays. If all values are the same, false is returned - 
 * If values differ or at least one of the values is no array, true is returned.
 * 
 * @private
 */
function _sizeArraysDiffer(aSizes1, aSizes2) {
	if (aSizes1 === aSizes2) {
		// The same thing. No difference.
		return false;
	}
	
	if (!aSizes1 || !aSizes2 || aSizes1.length === undefined || aSizes2.length === undefined) {
		// At lease one of the two is not an array
		return true;
	}
	
	if (aSizes1.length != aSizes2.length) {
		return true;
	}
	
	for (var i = 0; i < aSizes1.length; ++i) {
		if (aSizes1[i] !== aSizes2[i]) {
			return true;
		}
	}
	
	return false;
}

/**
 * Prevents the selection of text while the mouse is moving when pressed
 * 
 * @returns
 */
function _preventTextSelection(bTouch) {
	var fnPreventSelection = function(oEvent) {
		oEvent.preventDefault();
	};
	var fnAllowSelection = null;
	fnAllowSelection = function() {
		document.removeEventListener("touchend",  fnAllowSelection);
		document.removeEventListener("touchmove", fnPreventSelection);
		document.removeEventListener("mouseup",   fnAllowSelection);
		document.removeEventListener("mousemove", fnPreventSelection);
	};
	
	if (bTouch) {
		this._ignoreMouse = true; // Ignore mouse-events until touch is done 
		document.addEventListener("touchend",  fnAllowSelection);
		document.addEventListener("touchmove", fnPreventSelection);
	} else {
		document.addEventListener("mouseup",   fnAllowSelection);
		document.addEventListener("mousemove", fnPreventSelection);
	}
}

/**
 * Makes sure the LayoutData for the given control is set and compatible.
 * 
 * @private
 */
function _ensureLayoutData(oContent) {
	var oLd = oContent.getLayoutData();
	// Make sure LayoutData is set on the content
	// TODO: There should be a better way to verify that it's the correct type of LayoutData
	//       But this approach has the advantage that "compatible" LayoutData can be used.
	if (oLd && (!oLd.getResizable || !oLd.getSize || !oLd.getMinSize)) {
		jQuery.sap.log.warning(
			"Content \""+ oContent.getId() +"\" for the Splitter contained wrong LayoutData. " +
			"The LayoutData has been replaced with default values."
		);
		oLd = null;
	}
	if (!oLd) {
		oContent.setLayoutData(new sap.ui.layout.SplitterLayoutData());
	}
}


/**
 * @private
 */
sap.ui.layout.Splitter.prototype._dbg = function(sMessage, iLevel) {
	if (typeof(this._debugLog) === "function") {
		this._debugLog.apply(this, arguments);
	}
};

//////////////////////////////////////// Overridden Methods ////////////////////////////////////////


sap.ui.layout.Splitter.prototype.invalidate = function(oOrigin) {
	var bForce =
		// In case the content invalidates and bubbles up (for example an invisible button being
		// shown), we need to rerender
		// TODO: Render only the contentArea where the invalidate originated from
		(oOrigin && this.indexOfContentArea(oOrigin) != -1)
	
		// CustomData that needs to be updated in the DOM has been set on the splitter
		// TODO: Programatically write CustomData on this control to the DOM
	 || (oOrigin && oOrigin instanceof sap.ui.core.CustomData && oOrigin.getWriteToDom())
	
		// We do not know where the invalidate originated from. We will pretty much have to rerender
	 || (oOrigin === undefined)
	;
	
	// Only really invalidate/rerender if needed
	if (bForce || this._needsInvalidation) {
		this._needsInvalidation = false;
		sap.ui.core.Control.prototype.invalidate.apply(this, arguments);
	}
};

    //////////////////////////////////// Property "orientation" ///////////////////////////////////

sap.ui.layout.Splitter.prototype.setOrientation = function(sOrientation) {
	var vReturn = this.setProperty("orientation", sOrientation, true);
	
	this._switchOrientation();
	this._resize();
	
	return vReturn;
};


    ///////////////////////////////////// Property "width" ///////////////////////////////

sap.ui.layout.Splitter.prototype.setWidth = function(sWidth) {
	// Do not invalidate for size change
	this.setProperty("width", sWidth, true);
	// Set validated width on control
	this.$().css("width", this.getProperty("width"));
	return this;
};

    ///////////////////////////////////// Property "height" ///////////////////////////////

sap.ui.layout.Splitter.prototype.setHeight = function(sHeight) {
	// Do not invalidate for size change
	this.setProperty("height", sHeight, true);
	// Set validated height on control
	this.$().css("height", this.getProperty("height"));
	return this;
};

    //////////////////////////////////////// Event "xxx" ///////////////////////////////////////

    ///////////////////////////////////// Aggregation "contents" ///////////////////////////////

sap.ui.layout.Splitter.prototype.addContentArea = function(oContent) {
	this._needsInvalidation = true;
	_ensureLayoutData(oContent);
	return this.addAggregation("contentAreas", oContent);
};

sap.ui.layout.Splitter.prototype.removeContentArea = function(oContent) {
	this._needsInvalidation = true;
	return this.removeAggregation("contentAreas", oContent);
};

sap.ui.layout.Splitter.prototype.removeAllContentArea = function() {
	this._needsInvalidation = true;
	return this.destroyAllAggregation("contentAreas");
};

sap.ui.layout.Splitter.prototype.destroyContentArea = function() {
	this._needsInvalidation = true;
	return this.destroyAggregation("contentAreas");
};

sap.ui.layout.Splitter.prototype.insertContentArea = function(oContent, iIndex) {
	this._needsInvalidation = true;
	_ensureLayoutData(oContent);
	return this.insertAggregation("contentAreas", oContent, iIndex);
};

    ///////////////////////////////////// Association "xxx" ////////////////////////////////////


})(window);
