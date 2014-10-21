/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

jQuery.sap.declare("sap.m.MessageToast");
jQuery.sap.require("sap.ui.core.Popup");
jQuery.sap.require("sap.m.InstanceManager");

/**
 * @class
 * A message toast notification offers simple feedback about an operation in a pop-up.
 * Toasts automatically disappear after a timeout and will never receive focus in order
 * to be unobtrusive as possible.
 * Toasts appears close the bottom of the screen, centered horizontally, but you can change
 * this position which is not dependent on the default values of the position settings.
 * The default position applies as long as the application does not do any position setting.
 * Position settings are "my", "at", "of" and "offset".
 *
 * Beware that only one message toast can be shown at a time in the same place.
 * If you want to have multiple message toasts visible at the same time, you need to position
 * the message toasts in different places.
 * This positioning needs to be handled in the application logic.
 *
 * Message toast example:
 *
 * <pre>
 * sap.m.MessageToast.show("This message should appear in the message toast", {
 *     duration: 3000,                  // default
 *     width: "15em",                   // default
 *     my: "center bottom",             // default
 *     at: "center bottom",             // default
 *     of: window,                      // default
 *     offset: "0 0",                   // default
 *     collision: "fit fit"             // default
 *     onClose: null,                   // default
 *     autoClose: true,                 // default
 *     animationTimingFunction: "ease", // default
 *     animationDuration: 1000,         // default
 *     closeOnBrowserNavigation: true   // default
 * });
 * </pre>
 *
 * @author SAP AG
 * @since 1.9.2
 *
 * @static
 * @public
 * @name sap.m.MessageToast
 */
sap.m.MessageToast = {};

/* =========================================================== */
/* Internal methods and properties                             */
/* =========================================================== */

sap.m.MessageToast._OFFSET = "0 -64";

sap.m.MessageToast._CSSCLASS = "sapMMessageToast";

sap.m.MessageToast._mSettings = {
	duration: 3000,
	width: "15em",
	my: "center bottom",
	at: "center bottom",
	of: document.defaultView,
	offset: "0 0",
	collision: "fit fit",
	onClose: null,
	animationTimingFunction: "ease",
	animationDuration: 1000,
	autoClose: true,
	closeOnBrowserNavigation: true
};

sap.m.MessageToast._aPopups = [];

sap.m.MessageToast._iOpenedPopups = 0;

sap.m.MessageToast._bBoundedEvents = false;

sap.m.MessageToast._validateSettings = function(mSettings) {

	// duration
	this._isFiniteInteger(mSettings.duration);

	// width
	this._validateWidth(mSettings.width);

	// my
	this._validateDockPosition(mSettings.my);

	// at
	this._validateDockPosition(mSettings.at);

	// of
	this._validateOf(mSettings.of);

	// offset
	this._validateOffset(mSettings.offset);

	// collision
	this._validateCollision(mSettings.collision);

	// onClose
	this._validateOnClose(mSettings.onClose);

	// autoClose
	this._validateAutoClose(mSettings.autoClose);

	// animationTimingFunction
	this._validateAnimationTimingFunction(mSettings.animationTimingFunction);

	// animationDuration
	this._isFiniteInteger(mSettings.animationDuration);
};

sap.m.MessageToast._isFiniteInteger = function(iNumber) {
	if (typeof iNumber !== "number" || !isFinite(iNumber) || !(Math.floor(iNumber) === iNumber) || iNumber <= 0) {
		jQuery.sap.log.error('"iNumber" needs to be a finite positive nonzero integer on ' + this + "._isFiniteInteger");
	}
};

sap.m.MessageToast._validateWidth = function(sWidth) {
	if (!sap.ui.core.CSSSize.isValid(sWidth)) {
		jQuery.sap.log.error(sWidth + ' is not of type ' + '"sap.ui.core.CSSSize" for property "width" on ' + this + "._validateWidth");
	}
};

sap.m.MessageToast._validateDockPosition = function(sDock) {
	if (!sap.ui.core.Dock.isValid(sDock)) {
		jQuery.sap.log.error('"' + sDock + '"' + ' is not of type ' + '"sap.ui.core.Popup.Dock" on ' + this + "._validateDockPosition");
	}
};

sap.m.MessageToast._validateOf = function(vElement) {
	if (!(vElement instanceof jQuery) &&
		!jQuery.isWindow(vElement) &&
		!(vElement && vElement.nodeType === 1) &&
		!(vElement instanceof sap.ui.core.Control)) {

		jQuery.sap.log.error('"of" needs to be an instance of sap.ui.core.Control or an Element or a jQuery object or the window on ' + this + "._validateOf");
	}
};

sap.m.MessageToast._validateOffset = function(sOffset) {
	if (typeof sOffset !== "string") {
		jQuery.sap.log.error(sOffset + ' is of type ' + typeof sOffset + ', expected "string" for property "offset" on ' + this + "._validateOffset");
	}
};

sap.m.MessageToast._validateCollision = function(sCollision) {
	var rValidCollisions = /^(fit|flip|none|flipfit|flipflip|flip flip|flip fit|fitflip|fitfit|fit fit|fit flip)$/i;

	if (!rValidCollisions.test(sCollision)) {
		jQuery.sap.log.error('"collision" needs to be a single value “fit”, “flip”, or “none”, or a pair for horizontal and vertical e.g. "fit flip”, "fit none", "flipfit" on ' + this + "._validateOffset");
	}
};

sap.m.MessageToast._validateOnClose = function(fn) {
	if (typeof fn !== "function" && fn !== null) {
		jQuery.sap.log.error('"onClose" should be a function or null on ' + this + "._validateOnClose");
	}
};

sap.m.MessageToast._validateAutoClose = function(b) {
	if (typeof b !== "boolean") {
		jQuery.sap.log.error('"autoClose" should be a boolean on ' + this + "._validateAutoClose");
	}
};

sap.m.MessageToast._validateAnimationTimingFunction = function(sTimingFunction) {
	var rValidTimingFn = /^(ease|linear|ease-in|ease-out|ease-in-out)$/i;

	if (!rValidTimingFn.test(sTimingFunction)) {
		jQuery.sap.log.error('"animationTimingFunction" should be a string, expected values: ' + "ease, linear, ease-in, ease-out, ease-in-out on " + this + "._validateAnimationTimingFunction");
	}
};

sap.m.MessageToast._hasDefaulPosition = function(mOptions) {
	for (var aPositionOptions = ["my", "at", "of", "offset"], i = 0; i < aPositionOptions.length; i++) {
		if (mOptions[aPositionOptions[i]] !== undefined) {
			return false;
		}
	}

	return true;
};

sap.m.MessageToast._createHTMLMarkup = function(mSettings) {
	var oMessageToastDomRef = document.createElement("div");

	oMessageToastDomRef.style.width = mSettings.width;
	oMessageToastDomRef.className = sap.m.MessageToast._CSSCLASS;
	oMessageToastDomRef.appendChild(document.createTextNode(mSettings.message));

	return oMessageToastDomRef;
};

sap.m.MessageToast._normalizeOptions = function(mOptions) {
	if (mOptions) {

		// if no position options are provided
		if (this._hasDefaulPosition(mOptions)) {

			// change the default offset
			mOptions.offset = this._OFFSET;
		}

		// if the document object is provided as an option, replace it with the window object,
		// the message toast should be showed relative to the visual viewport instead to the layout viewport
		if (mOptions.of && mOptions.of.nodeType === 9) {
			mOptions.of = document.defaultView;
		}
	} else {

		mOptions = {

			// if no options are provided, change the default offset
			offset: this._OFFSET
		};
	}

	return mOptions;
};

/* =========================================================== */
/* Event handlers                                              */
/* =========================================================== */

sap.m.MessageToast._handleResizeEvent = function() {

	if (sap.ui.Device.system.phone || sap.ui.Device.system.tablet) {
		this._resetPosition(this._aPopups);
	}

	jQuery.sap.delayedCall(0, this, "_applyPositions", [this._aPopups]);
};

sap.m.MessageToast._handleMouseDownEvent = function(oEvent) {

	if (oEvent.isMarked("delayedMouseEvent")) {
		return;
	}

	this._aPopups.forEach(function(oPopup) {
		oPopup && oPopup.getAutoClose() && oPopup.close();
	});
};

sap.m.MessageToast._resetPosition = function(aPopups) {
	for (var i = 0, oMessageToastDomRef; i < aPopups.length; i++) {
		oMessageToastDomRef = aPopups[i] && aPopups[i].getContent();

		if (oMessageToastDomRef) {
			oMessageToastDomRef.style.visibility = "hidden";
			oMessageToastDomRef.style.left = 0;
		}
	};
};

sap.m.MessageToast._applyPositions = function(aPopups) {
	for (var i = 0, oPopup, mPosition; i < aPopups.length; i++) {
		oPopup = aPopups[i];
		if (oPopup) {
			mPosition = oPopup._oPosition;	// TODO _oPosition is a private property

			if (sap.ui.Device.system.phone || sap.ui.Device.system.tablet) {
				jQuery.sap.delayedCall(0, this, "_applyPosition", [oPopup, mPosition]);
			} else {
				oPopup.setPosition(mPosition.my, mPosition.at, mPosition.of, mPosition.offset);
			}
		}
	}
};

sap.m.MessageToast._applyPosition = function(oPopup, mPosition) {
	var mPosition = mPosition || oPopup._oPosition,
		oMessageToastDomRef = oPopup.getContent();

	oPopup.setPosition(mPosition.my, mPosition.at, mPosition.of, mPosition.offset);
	oMessageToastDomRef.style.visibility = "visible";
};

sap.m.MessageToast._setCloseAnimation = function($MessageToastDomRef, iDuration, fnClose, mSettings) {
	var sCssTransition = "opacity " + mSettings.animationTimingFunction + " " + mSettings.animationDuration + "ms",
		sTransitionEnd = "webkitTransitionEnd." + sap.m.MessageToast._CSSCLASS + " transitionend." + sap.m.MessageToast._CSSCLASS;

	if (mSettings.animationDuration > 0) {
		$MessageToastDomRef[0].style.webkitTransition = sCssTransition;
		$MessageToastDomRef[0].style.transition = sCssTransition;
		$MessageToastDomRef[0].style.opacity = 0;

		$MessageToastDomRef.on(sTransitionEnd, function handleMTTransitionEnd() {

			// unbound the event handler after its first invocation
			$MessageToastDomRef.off(sTransitionEnd);

			// handleMTClosed() function is called
			fnClose();
		});
	} else {
		fnClose();
	}
};

/* =========================================================== */
/* API methods                                                 */
/* =========================================================== */

/**
 * Creates and displays a simple message toast notification message with the given text, and optionally other options.
 *
 * The only mandatory parameter is <code>sMessage</code>.
 *
 * @param {string} sMessage The message to be displayed.
 * @param {object} [mOptions] Optionally other options.
 * @param {int} [mOptions.duration=3000] Time in milliseconds before the close animation starts. Needs to be a finite positive nonzero integer.
 * @param {sap.ui.core.CSSSize} [mOptions.width='15em'] The width of the message toast, this value can be provided in %, em, px and all possible CSS measures.
 * @param {sap.ui.core.Popup.Dock} [mOptions.my='center bottom'] Specifies which point of the message toast should be aligned.
 * @param {sap.ui.core.Popup.Dock} [mOptions.at='center bottom'] Specifies the point of the reference element to which the message toast should be aligned.
 * @param {sap.ui.core.Control|Element|jQuery|Window|undefined} [mOptions.of=window] Specifies the reference element to which the message toast should be aligned, by default it is aligned to the browser visual viewport.
 * @param {string} [mOptions.offset='0 0'] The offset relative to the docking point, specified as a string with space-separated pixel values (e.g. "0 10" to move the message toast 10 pixels to the right).
 * @param {string} [mOptions.collision='fit fit'] Specifies how the position of the message toast should be adjusted in case it overflows the screen in some direction. Possible values “fit”, “flip”, “none”, or a pair for horizontal and vertical e.g. "fit flip”, "fit none".
 * @param {function} [mOptions.onClose=null] Function to be called when the message toast closes.
 * @param {boolean} [mOptions.autoClose=true] Specify whether the message toast should close as soon as the end user touches the screen.
 * @param {string} [mOptions.animationTimingFunction='ease'] Describes how the close animation will progress. Possible values "ease", "linear", "ease-in", "ease-out", "ease-in-out". This feature is not supported in android and ie9 browsers.
 * @param {int} [mOptions.animationDuration=1000] Time in milliseconds that the close animation takes to complete. Needs to be a finite positive integer. For not animation set to 0. This feature is not supported in android and ie9 browsers.
 * @param {boolean} [mOptions.closeOnBrowserNavigation=true] Whether the message toast closes on browser navigation.
 *
 * @type void
 * @public
 * @name sap.m.MessageToast.show
 * @function
 */
sap.m.MessageToast.show = function(sMessage, mOptions) {
	var self = this,
		mSettings = jQuery.extend({}, this._mSettings, { message: sMessage }),
		oPopup = new sap.ui.core.Popup(),
		handleMTClosed,
		iPos,
		oMessageToastDomRef;

	mOptions = this._normalizeOptions(mOptions);

	// merge mOptions into mSettings
	jQuery.extend(mSettings, mOptions);

	// validate all settings
	this._validateSettings(mSettings);

	// create the message toast HTML markup
	oMessageToastDomRef = this._createHTMLMarkup(mSettings);

	// save this pop-up instance and the position,
	// to be used inside fnMTAttachClosed closure
	iPos = this._aPopups.push(oPopup) - 1;

	// sets the content of the pop-up
	oPopup.setContent(oMessageToastDomRef);

	// sets the position of the pop-up
	oPopup.setPosition(mSettings.my, mSettings.at, mSettings.of, mSettings.offset, mSettings.collision);

	if (jQuery.support.cssTransitions) {

		// sets the animation functions to use for opening and closing the message toast
		// note: this custom animations are using CSS3 transitions
		oPopup.setAnimations(function fnMessageToastOpen($MessageToast, iDuration, fnOpened) {
			fnOpened();
		}, function fnMessageToastClose($MessageToastDomRef, iDuration, fnClose) {
			self._setCloseAnimation($MessageToastDomRef, iDuration, fnClose, mSettings);
		});
	}

	// no shadow
	oPopup.setShadow(false);

	//
	oPopup.setAutoClose(mSettings.autoClose);

	if (mSettings.closeOnBrowserNavigation) {

		// add the pop-up instance to the InstanceManager to handle browser back navigation
		sap.m.InstanceManager.addPopoverInstance(oPopup);
	}

	// do not bind if already bound
	if (!this._bBoundedEvents) {

		// bind to the resize event to handle orientation change and resize events
		jQuery(window).on("resize." + sap.m.MessageToast._CSSCLASS, jQuery.proxy(this._handleResizeEvent, this));
		jQuery(document).on("mousedown." + sap.m.MessageToast._CSSCLASS, jQuery.proxy(this._handleMouseDownEvent, this));

		this._bBoundedEvents = true;
	}

	// opens the popup's content at the position specified via #setPosition
	oPopup.open();
	this._iOpenedPopups++;

	// attach event handler fnFunction to the "closed" event
	oPopup.attachClosed(function handleMTClosed() {
		sap.m.InstanceManager.removePopoverInstance(self._aPopups[iPos]);
		jQuery(self._aPopups[iPos].getContent()).remove();
		self._aPopups[iPos].detachClosed(handleMTClosed);
		self._aPopups[iPos].destroy();
		self._aPopups[iPos] = null;
		self._iOpenedPopups--;

		if (self._iOpenedPopups === 0) {
			self._aPopups = [];
			jQuery(window).off("resize." + sap.m.MessageToast._CSSCLASS);
			jQuery(document).off("mousedown." + sap.m.MessageToast._CSSCLASS);

			self._bBoundedEvents = false;
		}

		if (typeof mSettings.onClose === "function") {
			mSettings.onClose.call(self);
		}
	});

	// close the message toast
	jQuery.sap.delayedCall(mSettings.duration, oPopup, "close");
};

sap.m.MessageToast.toString = function() {
	return "sap.m.MessageToast";
};