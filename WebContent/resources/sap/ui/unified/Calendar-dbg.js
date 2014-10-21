/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.unified.Calendar.
jQuery.sap.declare("sap.ui.unified.Calendar");
jQuery.sap.require("sap.ui.unified.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new Calendar.
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
 * <li>{@link #getIntervalSelection intervalSelection} : boolean (default: false)</li>
 * <li>{@link #getSingleSelection singleSelection} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getSelectedDates selectedDates} : sap.ui.unified.DateRange[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.unified.Calendar#event:select select} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.unified.Calendar#event:cancel cancel} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Basic Calendar.
 * This calendar ist used for DatePickers
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.22.5
 *
 * @constructor   
 * @public
 * @since 1.22.0
 * @name sap.ui.unified.Calendar
 */
sap.ui.core.Control.extend("sap.ui.unified.Calendar", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"focusDate"
	],

	// ---- control specific ----
	library : "sap.ui.unified",
	properties : {
		"intervalSelection" : {type : "boolean", group : "Misc", defaultValue : false},
		"singleSelection" : {type : "boolean", group : "Misc", defaultValue : true}
	},
	aggregations : {
    	"selectedDates" : {type : "sap.ui.unified.DateRange", multiple : true, singularName : "selectedDate"}
	},
	events : {
		"select" : {}, 
		"cancel" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.unified.Calendar with name <code>sClassName</code> 
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
 * @name sap.ui.unified.Calendar.extend
 * @function
 */

sap.ui.unified.Calendar.M_EVENTS = {'select':'select','cancel':'cancel'};


/**
 * Getter for property <code>intervalSelection</code>.
 * If set, interval selection is allowed
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>intervalSelection</code>
 * @public
 * @name sap.ui.unified.Calendar#getIntervalSelection
 * @function
 */

/**
 * Setter for property <code>intervalSelection</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bIntervalSelection  new value for property <code>intervalSelection</code>
 * @return {sap.ui.unified.Calendar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.Calendar#setIntervalSelection
 * @function
 */


/**
 * Getter for property <code>singleSelection</code>.
 * If set, only a single date or interval, if intervalSelection is enabled, can be selected
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>singleSelection</code>
 * @public
 * @name sap.ui.unified.Calendar#getSingleSelection
 * @function
 */

/**
 * Setter for property <code>singleSelection</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bSingleSelection  new value for property <code>singleSelection</code>
 * @return {sap.ui.unified.Calendar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.Calendar#setSingleSelection
 * @function
 */


/**
 * Getter for aggregation <code>selectedDates</code>.<br/>
 * Date Ranges for selected dates of the DatePicker
 * 
 * @return {sap.ui.unified.DateRange[]}
 * @public
 * @name sap.ui.unified.Calendar#getSelectedDates
 * @function
 */


/**
 * Inserts a selectedDate into the aggregation named <code>selectedDates</code>.
 *
 * @param {sap.ui.unified.DateRange}
 *          oSelectedDate the selectedDate to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the selectedDate should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the selectedDate is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the selectedDate is inserted at 
 *             the last position        
 * @return {sap.ui.unified.Calendar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.Calendar#insertSelectedDate
 * @function
 */

/**
 * Adds some selectedDate <code>oSelectedDate</code> 
 * to the aggregation named <code>selectedDates</code>.
 *
 * @param {sap.ui.unified.DateRange}
 *            oSelectedDate the selectedDate to add; if empty, nothing is inserted
 * @return {sap.ui.unified.Calendar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.Calendar#addSelectedDate
 * @function
 */

/**
 * Removes an selectedDate from the aggregation named <code>selectedDates</code>.
 *
 * @param {int | string | sap.ui.unified.DateRange} vSelectedDate the selectedDate to remove or its index or id
 * @return {sap.ui.unified.DateRange} the removed selectedDate or null
 * @public
 * @name sap.ui.unified.Calendar#removeSelectedDate
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>selectedDates</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.unified.DateRange[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.unified.Calendar#removeAllSelectedDates
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.unified.DateRange</code> in the aggregation named <code>selectedDates</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.unified.DateRange}
 *            oSelectedDate the selectedDate whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.unified.Calendar#indexOfSelectedDate
 * @function
 */
	

/**
 * Destroys all the selectedDates in the aggregation 
 * named <code>selectedDates</code>.
 * @return {sap.ui.unified.Calendar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.Calendar#destroySelectedDates
 * @function
 */


/**
 * Date selection changed 
 *
 * @name sap.ui.unified.Calendar#select
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'select' event of this <code>sap.ui.unified.Calendar</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.unified.Calendar</code>.<br/> itself. 
 *  
 * Date selection changed 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.Calendar</code>.<br/> itself.
 *
 * @return {sap.ui.unified.Calendar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.Calendar#attachSelect
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'select' event of this <code>sap.ui.unified.Calendar</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.unified.Calendar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.Calendar#detachSelect
 * @function
 */

/**
 * Fire event select to attached listeners.
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.unified.Calendar} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.unified.Calendar#fireSelect
 * @function
 */


/**
 * Date selection was cancelled 
 *
 * @name sap.ui.unified.Calendar#cancel
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'cancel' event of this <code>sap.ui.unified.Calendar</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.unified.Calendar</code>.<br/> itself. 
 *  
 * Date selection was cancelled 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.Calendar</code>.<br/> itself.
 *
 * @return {sap.ui.unified.Calendar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.Calendar#attachCancel
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'cancel' event of this <code>sap.ui.unified.Calendar</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.unified.Calendar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.Calendar#detachCancel
 * @function
 */

/**
 * Fire event cancel to attached listeners.
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.unified.Calendar} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.unified.Calendar#fireCancel
 * @function
 */


/**
 * Sets the focused date of the calendar.
 *
 * @name sap.ui.unified.Calendar.prototype.focusDate
 * @function
 * @param {object} 
 *         oDate
 *         JavaScript date object for focused date.

 * @type void
 * @public
 */


// Start of sap\ui\unified\Calendar.js
jQuery.sap.require("sap.ui.core.LocaleData");
jQuery.sap.require("sap.ui.core.delegate.ItemNavigation");
jQuery.sap.require("sap.ui.model.type.Date");

/*
 * There are different modes (stored in this._iMode)
 * The standard is 0, that means a calendar showing a calendar with the days of one month.
 * If 1 a month picker is shown.
 * if 2 a year picker is shown.
 */

(function() {

	sap.ui.unified.Calendar.prototype.init = function(){

		this._mouseMoveProxy = jQuery.proxy(this._handleMouseMove, this);

		this._iMode = 0; // days are shown

		this._oFormatYyyymmdd = sap.ui.core.format.DateFormat.getInstance({pattern: "yyyyMMdd"});

	};

//	sap.ui.unified.Calendar.prototype.onBeforeRendering = function(){
//	};

	sap.ui.unified.Calendar.prototype.onAfterRendering = function(){

		var that = this;

		_initItemNavigation(that);

		// check if day names and month names are too big -> use smaller ones
		_checkNamesLength(that);

	};

	// overwrite invalidate to recognize changes on selectedDates
	sap.ui.unified.Calendar.prototype.invalidate = function(oOrigin) {

		var that = this;
		_determineFocusedDate(that);

		if(!oOrigin || !(oOrigin instanceof sap.ui.unified.DateRange)){
			sap.ui.core.Control.prototype.invalidate.apply(this, arguments);
		}else{
			// DateRange changed -> only rerender days
			if (this.getDomRef() && this._iMode == 0) {
				_renderMonth(that);
			}
		}

	};

	/**
	 * sets the locale for the DatePicker
	 * only for internal use
	 * @param {string} sLocale  new value for <code>locale</code>
	 * @private
	 */
	sap.ui.unified.Calendar.prototype.setLocale = function(sLocale){

			if (this._sLocale != sLocale) {
				this._sLocale = sLocale;
				this._oLocaleData = undefined;
				this.invalidate();
			}

			return this;

	};

	/**
	 * gets the used locale for the DatePicker
	 * only for internal use
	 * @return {string} sLocale
	 * @private
	 */
	sap.ui.unified.Calendar.prototype.getLocale = function(){

			if (!this._sLocale) {
				this._sLocale = sap.ui.getCore().getConfiguration().getFormatSettings().getFormatLocale().toString();
			}

			return this._sLocale;

	};

	sap.ui.unified.Calendar.prototype._getFocusedDate = function(){

		if (!this._oFocusedDate) {
			var that = this;
			_determineFocusedDate(that);
		}

		return this._oFocusedDate;

	};

	sap.ui.unified.Calendar.prototype._setFocusedDate = function(oDate){

		this._oFocusedDate = new Date(oDate.getTime());
		this._oFocusedDate.setHours(0, 0, 0, 0);

	};

	sap.ui.unified.Calendar.prototype.focusDate = function(oDate){

		if (oDate && (!this._oFocusedDate || this._oFocusedDate.getTime() != oDate.getTime())) {
			this._setFocusedDate(oDate);

			if (this.getDomRef() && this._iMode == 0) {
				var that = this;
				_renderMonth(that);
			}
		}

	};

	/**
	 * sets the Popup mode
	 * e.G. Tab-chain should not leave calendar
	 * only for internal use
	 * @param {boolean} bPoupupMode <code>PopupMode</code>
	 * @private
	 */
	sap.ui.unified.Calendar.prototype.setPopupMode = function(bPoupupMode){

		this._bPoupupMode = bPoupupMode;

	};

	/*
	 * gets localeData for used locale
	 * if no locale is given use rendered one
	 */
	sap.ui.unified.Calendar.prototype._getLocaleData = function(){

		if (!this._oLocaleData) {
			var sLocale = this.getLocale();
			var oLocale = new sap.ui.core.Locale(sLocale);
			this._oLocaleData = sap.ui.core.LocaleData.getInstance(oLocale);
		}

		return this._oLocaleData;

	};

	sap.ui.unified.Calendar.prototype.onclick = function(oEvent){

		if (oEvent.isMarked("delayedMouseEvent") ) {
			return;
		}

		var that = this;
		var oFocusedDate = this._getFocusedDate();

		if (jQuery.sap.containsOrEquals(this.getDomRef("next"), oEvent.target)) {
			switch (this._iMode) {
			case 0: // day picker
				oFocusedDate.setMonth(oFocusedDate.getMonth()+1, 1);
				_renderMonth(that);
				break;

			case 1: // month picker
				oFocusedDate.setFullYear(oFocusedDate.getFullYear()+1);
				this.$("year").text(oFocusedDate.getFullYear());
				break;

			case 2: // year picker
				_updateYears(that, true, this._oItemNavigation.getFocusedIndex());
				break;
			}
		} else if (jQuery.sap.containsOrEquals(this.getDomRef("prev"), oEvent.target)) {
			switch (this._iMode) {
			case 0: // day picker
				oFocusedDate.setDate(1);
				oFocusedDate.setDate(oFocusedDate.getDate()-1);
				_renderMonth(that);
				break;

			case 1: // month picker
				oFocusedDate.setFullYear(oFocusedDate.getFullYear()-1);
				this.$("year").text(oFocusedDate.getFullYear());
				break;

			case 2: // year picker
				_updateYears(that, false, this._oItemNavigation.getFocusedIndex());
				break;
			}
		} else if (oEvent.target.id == this.getId()+"-month") {
			if (this._iMode != 1) {
				_showMonthPicker(that);
			}else {
				_hideMonthPicker(that);
			}
		} else if (oEvent.target.id == this.getId()+"-year") {
			if (this._iMode != 2) {
				_showYearPicker(that);
			}else {
				_hideYearPicker(that);
			}
		} else if (oEvent.target.id == this.getId()+"-cancel") {
			this.onsapescape(oEvent);
		}

	};

	sap.ui.unified.Calendar.prototype._handleMouseMove = function(oEvent){

		if (!this.$().is(":visible")) {
			// calendar was closed -> remove mousemove handler
			jQuery(window.document).unbind('mousemove', this._mouseMoveProxy);
			this._bMouseMove = undefined;
		}

		var $Target = jQuery(oEvent.target);

		if ($Target.hasClass("sapUiCalDayNum")) {
			$Target = $Target.parent();
		}

		if ($Target.hasClass("sapUiCalDay")) {
			var oFocusedDate = this._getFocusedDate();
			var oOldFocusedDate = new Date(oFocusedDate.getTime());
			oFocusedDate = this._oFormatYyyymmdd.parse($Target.attr("data-sap-day"));
			this._setFocusedDate(oFocusedDate);

			if (oFocusedDate.getTime() != oOldFocusedDate.getTime()) {
				var that = this;
				if ($Target.hasClass("sapUiCalDayOtherMonth")) {
					// in other month -> change month
					_renderMonth(that);
				}else {
					_selectDay(that, new Date(oFocusedDate.getTime()), false, true);
					this._bMoveChange = true;
				}

			}
		}

	};

	sap.ui.unified.Calendar.prototype.onmouseup = function(oEvent){

		if (this._bMouseMove) {
			jQuery(window.document).unbind('mousemove', this._mouseMoveProxy);
			this._bMouseMove = undefined;

			// focus now selected day
			var oFocusedDate = this._getFocusedDate();
			var aDomRefs = this.$("days").children(".sapUiCalDay");

			for ( var i = 0; i < aDomRefs.length; i++) {
				var $DomRef = jQuery(aDomRefs[i]);
				if (!$DomRef.hasClass("sapUiCalDayOtherMonth")) {
					if ($DomRef.attr("data-sap-day") == this._oFormatYyyymmdd.format(oFocusedDate)) {
						$DomRef.focus();
						break;
					}
				}
			}

			if (this._bMoveChange) {
				// selection was changed -> make it final
				var that = this;
				_selectDay(that, new Date(oFocusedDate.getTime()));
				this._bMoveChange = false;
				_fireSelect(that);
			}
		}

	};
/*
	sap.ui.unified.Calendar.prototype.onswipeleft = function(oEvent) {

		var that = this;
		var oFocusedDate = this._getFocusedDate();

		oFocusedDate.setMonth(oFocusedDate.getMonth()+1, 1);
		_renderMonth(that);

	};

	sap.ui.unified.Calendar.prototype.onswiperight = function(oEvent) {

		var that = this;
		var oFocusedDate = this._getFocusedDate();

		oFocusedDate.setDate(1);
		oFocusedDate.setDate(oFocusedDate.getDate()-1);
		_renderMonth(that);

	};
*/
	sap.ui.unified.Calendar.prototype.onsapselect = function(oEvent){

		// focused item must be selected
		var that = this;
		var iIndex = 0;

		switch (this._iMode) {
		case 0: // day picker
			if (jQuery.sap.containsOrEquals(this.getDomRef("days"), oEvent.target)) {
				_selectDay(that, new Date(this._getFocusedDate().getTime()));
				_fireSelect(that);
			}
			break;

		case 1: // month picker
			if (jQuery.sap.containsOrEquals(this.getDomRef("months"), oEvent.target)) {
				iIndex = this._oItemNavigation.getFocusedIndex();
				_selectMonth(that, iIndex);
			}
			break;

		case 2: // year picker
			if (jQuery.sap.containsOrEquals(this.getDomRef("years"), oEvent.target)) {
				iIndex = this._oItemNavigation.getFocusedIndex();
				_selectYear(that, iIndex);
			}
			break;
		}

		//to prevent bubbling into input field if in DatePicker
		oEvent.stopPropagation();
		oEvent.preventDefault();

	};

	sap.ui.unified.Calendar.prototype.onsapselectmodifiers = function(oEvent){

//		// focused item must be selected
//		var that = this;
//		_selectDay(that, new Date(this._getFocusedDate().getTime()), oEvent.shiftKey);
//		_fireSelect(that)
//
//		//to prevent bubbling into input field if in DatePicker
//		oEvent.stopPropagation();
//		oEvent.preventDefault();
		this.onsapselect(oEvent);

	};

	sap.ui.unified.Calendar.prototype.onsapescape = function(oEvent){

		var that = this;

		switch (this._iMode) {
		case 0: // day picker
			this.fireCancel();
			break;

		case 1: // month picker
			_hideMonthPicker(that);
			break;

		case 2: // year picker
			_hideYearPicker(that);
			break;
		}

	};

	sap.ui.unified.Calendar.prototype.onsappageupmodifiers = function(oEvent){

		// not handled by ItemNavigation
		// go one year back
		var oFocusedDate = this._getFocusedDate();
		var that = this;
		var iYear = oFocusedDate.getFullYear();

		oFocusedDate.setFullYear(iYear-1);
		_renderMonth(that);

		// cancel the event otherwise the browser select some text
		oEvent.preventDefault();

	};

	sap.ui.unified.Calendar.prototype.onsappagedownmodifiers = function(oEvent){

		// not handled by ItemNavigation
		// go one year forward
		var oFocusedDate = this._getFocusedDate();
		var that = this;
		var iYear = oFocusedDate.getFullYear();

		oFocusedDate.setFullYear(iYear+1);
		_renderMonth(that);

		// cancel the event otherwise the browser select some text
		oEvent.preventDefault();

	};

	sap.ui.unified.Calendar.prototype.onsaptabnext = function(oEvent){

		// if tab was pressed on a day it should jump to the month and then to the year button

		if (jQuery.sap.containsOrEquals(this.getDomRef("days"), oEvent.target) ||
		    jQuery.sap.containsOrEquals(this.getDomRef("months"), oEvent.target) ||
		    jQuery.sap.containsOrEquals(this.getDomRef("years"), oEvent.target)) {
			// tab from a day
			jQuery.sap.focus(this.getDomRef("month"));

			if (!this._bPoupupMode) {
				// remove Tabindex from day - to break cycle
				jQuery(this._oItemNavigation.getItemDomRefs()[this._oItemNavigation.getFocusedIndex()]).attr("tabindex", "-1");
			}

			oEvent.preventDefault();
		}else if(oEvent.target.id == this.getId()+"-month"){
			jQuery.sap.focus(this.getDomRef("year"));

			oEvent.preventDefault();
		}

	};

	sap.ui.unified.Calendar.prototype.onsaptabprevious = function(oEvent){

		if(oEvent.target.id == this.getId()+"-month"){
			// remove Tabindex from day - to break cycle
			this._oItemNavigation.focusItem(this._oItemNavigation.getFocusedIndex());

			oEvent.preventDefault();
		}else if(oEvent.target.id == this.getId()+"-year"){
			jQuery.sap.focus(this.getDomRef("month"));

			oEvent.preventDefault();
		}

	};

	/*
	 * Checks if a date is selected and what kind of selected
	 * @return {int} iSelected 0: not selected; 1: single day selected, 2: interval start, 3: interval end, 4: interval between
	 * @private
	 */
	sap.ui.unified.Calendar.prototype._checkDateSelected = function(oDate){

		jQuery.sap.assert(oDate instanceof Date, "Date must be a JavaScript date object");

		var iSelected = 0;
		var aSelectedDates = this.getSelectedDates();

		for ( var i = 0; i < aSelectedDates.length; i++) {
			// initalize the time part of the start and end time
			var oRange = aSelectedDates[i];
			var oTmpDate = oRange.getStartDate();
			var oStartDate = undefined;
			var oStartTimeStamp = 0;
			if (oTmpDate) {
				oStartDate = new Date (oTmpDate.getTime());
				oStartDate.setHours(0, 0, 0, 0);
				oStartTimeStamp = oStartDate.getTime();
			}
			var oEndDate = undefined;
			var oEndTimeStamp = 0;
			var oTimeStamp = oDate.getTime();
			if (this.getIntervalSelection()) {
				oTmpDate = oRange.getEndDate();
				if (oTmpDate) {
					oEndDate = new Date (oTmpDate.getTime());
					oEndDate.setHours(0, 0, 0, 0);
					oEndTimeStamp = oEndDate.getTime();
				}
			}

			if (oTimeStamp == oStartTimeStamp && !oEndDate ) {
				iSelected = 1; // single day selected
				break;
			}else if (oTimeStamp == oStartTimeStamp && oEndDate ) {
				iSelected = 2; // interval start
				if (oEndDate && oTimeStamp == oEndTimeStamp) {
					// one day interval
					iSelected = 5;
				}
				break;
			}else if (oEndDate && oTimeStamp == oEndTimeStamp) {
				iSelected = 3; // interval end
				break;
			}else if (oEndDate && oTimeStamp > oStartTimeStamp && oTimeStamp < oEndTimeStamp) {
				iSelected = 4; // interval between
				break;
			}

			if (this.getSingleSelection()) {
				// if single selection only check the first range
				break;
			}
		}

		return iSelected;

	};

	function _handleAfterFocus(oControlEvent){

		var iIndex = oControlEvent.getParameter("index");
		var oEvent = oControlEvent.getParameter("event");

		if (!oEvent) {
			return; // happens if focus is set via ItemNavigation.focusItem directly
		}

		var that = this;

		if (this._iMode == 0) {
			// day picker

			var aDomRefs = this.$("days").children(".sapUiCalDay");
			var oFocusedDate = this._getFocusedDate();

			// find out what day was focused
			var $DomRef = jQuery(aDomRefs[iIndex]);
			if ($DomRef.hasClass("sapUiCalDayOtherMonth")) {
				if (oEvent.type == "saphomemodifiers" && (oEvent.metaKey || oEvent.ctrlKey)) {
					// on ctrl+home key focus first day of month
					oFocusedDate.setDate(1);
					for ( var i = 0; i < aDomRefs.length; i++) {
						var $DomRefDay = jQuery(aDomRefs[i]);
						if (this._oFormatYyyymmdd.parse($DomRefDay.attr("data-sap-day")).getDate() == 1) {
							this._oItemNavigation.focusItem(i);
							break;
						}
					}
				} else if(oEvent.type == "sapendmodifiers" && (oEvent.metaKey || oEvent.ctrlKey)) {
					// on ctrl+end key focus last day of month
					for ( var i = aDomRefs.length-1; i > 0 ; i--) {
						var $DomRefDay = jQuery(aDomRefs[i]);
						if (!$DomRefDay.hasClass("sapUiCalDayOtherMonth")) {
							oFocusedDate = this._oFormatYyyymmdd.parse($DomRefDay.attr("data-sap-day"));
							this._setFocusedDate(oFocusedDate);
							this._oItemNavigation.focusItem(i);
							break;
						}
					}
				} else {
					// switch to the requested month and focus the chosen day
					oFocusedDate = this._oFormatYyyymmdd.parse($DomRef.attr("data-sap-day"));
					this._setFocusedDate(oFocusedDate);
					_renderMonth(that);
				}
			}else {
				// day in current month focused
				if (!jQuery(oEvent.target).hasClass("sapUiCalWeekNum")) {
					// not if clicked on week number
					oFocusedDate = this._oFormatYyyymmdd.parse($DomRef.attr("data-sap-day"));
					this._setFocusedDate(oFocusedDate);
				}
			}
		}

		if (oEvent.type == "mousedown") {
			// as no click event is fired in some cases, e.g. if month is changed (because of changing DOM) select the day on mousedown
			_handleMousedown(that, oEvent, oFocusedDate, iIndex)
		}

	};

	function _handleFocusAgain(oControlEvent){

		var iIndex = oControlEvent.getParameter("index");
		var oEvent = oControlEvent.getParameter("event");

		if (!oEvent) {
			return; // happens if focus is set via ItemNavigation.focusItem directly
		}

		if (oEvent.type == "mousedown") {
			// as no click event is fired in some cases, e.g. if month is changed (because of changing DOM) select the day on mousedown
			var that = this;
			var oFocusedDate = this._getFocusedDate();
			_handleMousedown(that, oEvent, oFocusedDate, iIndex)
		}

	};

	function _handleMousedown(oThis, oEvent, oFocusedDate, iIndex){

			switch (oThis._iMode) {
			case 0: // day picker
				_selectDay(oThis, new Date(oFocusedDate.getTime()), oEvent.shiftKey);
				_fireSelect(oThis);
				if (oThis.getIntervalSelection() && oThis.$().is(":visible")) {
					// if calendar was closed in select event, do not add mousemove handler
					jQuery(window.document).bind('mousemove', oThis._mouseMoveProxy);
					oThis._bMouseMove = true;
				}
				break;

			case 1: // month picker
				_selectMonth(oThis, iIndex);
				break;

			case 2: // year picker
				_selectYear(oThis, iIndex);
				break;
			}
			oEvent.preventDefault(); // to prevent focus set outside of DatePicker
			oEvent.setMark("cancelAutoClose");

	};

	function _handleBorderReached(oControlEvent){

		var iIndex = oControlEvent.getParameter("index");
		var oEvent = oControlEvent.getParameter("event");
		var iMonth = 0;
		var oFocusedDate = this._getFocusedDate();

		if (oEvent.type) {
			var that = this;

			switch (this._iMode) {
			case 0: // day picker
				switch (oEvent.type) {
				case "sapnext":
				case "sapnextmodifieres":
					// last day in month reached
					if (oEvent.keyCode == jQuery.sap.KeyCodes.ARROW_DOWN) {
						//goto same day next week
						oFocusedDate.setDate(oFocusedDate.getDate()+7);
					} else {
						//go to next day
						oFocusedDate.setDate(oFocusedDate.getDate()+1);
					}
					break;

				case "sapprevious":
				case "sappreviousmodifieres":
					// first day in month reached
					if (oEvent.keyCode == jQuery.sap.KeyCodes.ARROW_UP) {
						//goto same day previous week
						oFocusedDate.setDate(oFocusedDate.getDate()-7);
					} else {
						//go to previous day
						oFocusedDate.setDate(oFocusedDate.getDate()-1);
					}
					break;

				case "sappagedown":
					// go to same day next month
					iMonth = oFocusedDate.getMonth()+1;
					oFocusedDate.setMonth(iMonth);
					// but if the day don't exist in this month, go to last day of the month
					if (iMonth%12 != oFocusedDate.getMonth()) {
						while (iMonth != oFocusedDate.getMonth()) {
							oFocusedDate.setDate(oFocusedDate.getDate()-1);
						}
					}
					break;

				case "sappageup":
					// go to same day next month
					iMonth = oFocusedDate.getMonth()-1;
					oFocusedDate.setMonth(iMonth);
					if (iMonth < 0) {
						iMonth = 11;
					}
					// but if the day don't exist in this month, go to last day of the month
					if (iMonth != oFocusedDate.getMonth()) {
						while (iMonth != oFocusedDate.getMonth()) {
							oFocusedDate.setDate(oFocusedDate.getDate()-1);
						}
					}
					break;

				default:
					break;
				}

				_renderMonth(that);
				break;

			case 1: // month picker
				break;

			case 2: // year picker
				switch (oEvent.type) {
				case "sapnext":
				case "sapnextmodifieres":
					if (oEvent.keyCode == jQuery.sap.KeyCodes.ARROW_DOWN) {
						//same column in first row of next group
						_updateYears(that, true, this._oItemNavigation.getFocusedIndex() - 16);
					} else {
						// first year in next group
						_updateYears(that, true, 0);
					}
					break;

				case "sapprevious":
				case "sappreviousmodifieres":
					if (oEvent.keyCode == jQuery.sap.KeyCodes.ARROW_UP) {
						//same column in last row of previous group
						_updateYears(that, false, 16 + this._oItemNavigation.getFocusedIndex());
					} else {
						// last year in previous group
						_updateYears(that, false, 19);
					}
					break;

				case "sappagedown":
					// same index in next group
					_updateYears(that, true, this._oItemNavigation.getFocusedIndex());
					break;

				case "sappageup":
					// same index in previous group
					_updateYears(that, false, this._oItemNavigation.getFocusedIndex());
					break;

				default:
					break;
				}
				break;
			}
		}

	};

	function _initItemNavigation(oThis){

		var oDate = oThis._getFocusedDate();
		var sYyyymmdd = oThis._oFormatYyyymmdd.format(oDate);
		var aDomRefs = [];
		var iIndex = 0;
		var iColumns = 0;
		var bNoColumnChange = false;
		var bCycling = true;

		switch (oThis._iMode) {
		case 0: // day picker
			var iDay = oDate.getDate();
			aDomRefs = oThis.$("days").children(".sapUiCalDay");

			for ( var i = 0; i < aDomRefs.length; i++) {
				var $DomRef = jQuery(aDomRefs[i]);
				if ($DomRef.attr("data-sap-day") == sYyyymmdd) {
					iIndex = i;
				}
			}

			iColumns = 7;
			bNoColumnChange = true;
			bCycling = false;

			break;

		case 1: // month picker
			aDomRefs = oThis.$("months").children(".sapUiCalMonth");
			iIndex = oDate.getMonth();

			iColumns = 3;

			break;

		case 2: // year picker
			aDomRefs = oThis.$("years").children(".sapUiCalYear");
			iIndex = 10;

			iColumns = 4;
			bNoColumnChange = true;
			bCycling = false;

			break;
		}


		if (!oThis._oItemNavigation) {
			oThis._oItemNavigation = new sap.ui.core.delegate.ItemNavigation();
			oThis._oItemNavigation.attachEvent(sap.ui.core.delegate.ItemNavigation.Events.AfterFocus, _handleAfterFocus, oThis);
			oThis._oItemNavigation.attachEvent(sap.ui.core.delegate.ItemNavigation.Events.FocusAgain, _handleFocusAgain, oThis);
			oThis._oItemNavigation.attachEvent(sap.ui.core.delegate.ItemNavigation.Events.BorderReached, _handleBorderReached, oThis);
			oThis.addDelegate(oThis._oItemNavigation);
			oThis._oItemNavigation.setHomeEndColumnMode(true, true);
		}
		oThis._oItemNavigation.setRootDomRef(oThis.getDomRef());
		oThis._oItemNavigation.setItemDomRefs(aDomRefs);
		oThis._oItemNavigation.setCycling(bCycling);
		oThis._oItemNavigation.setColumns(iColumns, bNoColumnChange);
		oThis._oItemNavigation.setFocusedIndex(iIndex);
		oThis._oItemNavigation.setPageSize(aDomRefs.length); // to make sure that pageup/down goes out of month

	};

	function _renderMonth(oThis){

		var oDate = oThis._getFocusedDate();
		var $Container = oThis.$("days");

		if ($Container.length > 0) {
			var oRm = sap.ui.getCore().createRenderManager();
			oThis.getRenderer().renderDays(oRm, oThis, oDate);
			oRm.flush($Container[0]);
			oRm.destroy();
		}

		// fire internal event for DatePicker for with number of rendered days. If Calendar becomes larger maybe popup must change position
		oThis.fireEvent("_renderMonth", {days: $Container.children(".sapUiCalDay").length})

		// change month and year
		var aMonthNames = [];
		if (oThis._bLongMonth || !oThis._bNamesLengthChecked) {
			aMonthNames = oThis._getLocaleData().getMonthsStandAlone("wide");
		} else {
			aMonthNames = oThis._getLocaleData().getMonthsStandAlone("abbreviated");
		}
		oThis.$("month").text(aMonthNames[oDate.getMonth()]);
		oThis.$("year").text(oDate.getFullYear());

		_initItemNavigation(oThis);
		oThis._oItemNavigation.focusItem(oThis._oItemNavigation.getFocusedIndex());

	};

	function _selectDay(oThis, oDate, bIntervalEnd, bMove){

		var aSelectedDates = oThis.getSelectedDates();
		var oDateRange;
		var oFocusedDate = oThis._getFocusedDate();
		var aDomRefs = oThis.$("days").children(".sapUiCalDay");

		if (oThis.getSingleSelection()) {
			var oStartDate = undefined;
			if (aSelectedDates.length > 0) {
				oDateRange = aSelectedDates[0];
				oStartDate = oDateRange.getStartDate();
				if (oStartDate) {
					oStartDate = new Date (oStartDate.getTime());
					oStartDate.setHours(0, 0, 0, 0);
				}
			} else{
				oDateRange = new sap.ui.unified.DateRange();
				oThis.addAggregation("selectedDates", oDateRange, true); // no re-rendering
			}

			if (oThis.getIntervalSelection()/* && bIntervalEnd*/ && (!oDateRange.getEndDate() || bMove) && oStartDate) {
				// single interval selection
				var oEndDate = undefined;
				if (oDate.getTime() < oStartDate.getTime()) {
					oEndDate= oStartDate;
					oStartDate = new Date(oDate.getTime());
					if (!bMove) {
						// in move mode do not set date. this bring broblems if on backward move the start date would be cahnged
						oDateRange.setProperty("startDate", oStartDate, true); // no-rerendering
						oDateRange.setProperty("endDate", oEndDate, true); // no-rerendering
					}
				}else if (oDate.getTime() >= oStartDate.getTime()) {
					// single day ranges are allowed
					oEndDate = new Date(oDate.getTime());
					if (!bMove) {
						oDateRange.setProperty("endDate", oEndDate, true); // no-rerendering
					}
				}

				var oDay;
				var iDay = 0;
				for ( var i = 0; i < aDomRefs.length; i++) {
					var $DomRef = jQuery(aDomRefs[i]);
					oDay = oThis._oFormatYyyymmdd.parse($DomRef.attr("data-sap-day"));

					if (oDay.getTime() == oStartDate.getTime()) {
						$DomRef.addClass("sapUiCalDaySelStart");
						$DomRef.addClass("sapUiCalDaySel");
							if (oEndDate && oDay.getTime() == oEndDate.getTime()) {
								// start day and end day are the same
								$DomRef.addClass("sapUiCalDaySelEnd");
							}
					}else if (oEndDate && oDay.getTime() > oStartDate.getTime() && oDay.getTime() < oEndDate.getTime()) {
						$DomRef.addClass("sapUiCalDaySel");
						$DomRef.addClass("sapUiCalDaySelBetween");
					}else if (oEndDate && oDay.getTime() == oEndDate.getTime()) {
						$DomRef.addClass("sapUiCalDaySelEnd");
						$DomRef.addClass("sapUiCalDaySel");
					}else{
						if ($DomRef.hasClass("sapUiCalDaySel")){
							$DomRef.removeClass("sapUiCalDaySel");
						}
						if ($DomRef.hasClass("sapUiCalDaySelStart")){
								$DomRef.removeClass("sapUiCalDaySelStart");
						}else if ($DomRef.hasClass("sapUiCalDaySelBetween")){
								$DomRef.removeClass("sapUiCalDaySelBetween");
						}else if ($DomRef.hasClass("sapUiCalDaySelEnd")){
								$DomRef.removeClass("sapUiCalDaySelEnd");
						}
					}
				}
			} else {
				// single day selection or start a new interval
				var sYyyymmdd = oThis._oFormatYyyymmdd.format(oDate);
				for ( var i = 0; i < aDomRefs.length; i++) {
					var $DomRef = jQuery(aDomRefs[i]);
					if (!$DomRef.hasClass("sapUiCalDayOtherMonth") && $DomRef.attr("data-sap-day") == sYyyymmdd) {
						$DomRef.addClass("sapUiCalDaySel");
					}else if ($DomRef.hasClass("sapUiCalDaySel")/*oOldDate && parseInt($DomRef.attr("data-sap-day")) == oOldDate.getDate()*/){
							$DomRef.removeClass("sapUiCalDaySel");
					}
					if ($DomRef.hasClass("sapUiCalDaySelStart")){
							$DomRef.removeClass("sapUiCalDaySelStart");
					}else if ($DomRef.hasClass("sapUiCalDaySelBetween")){
							$DomRef.removeClass("sapUiCalDaySelBetween");
					}else if ($DomRef.hasClass("sapUiCalDaySelEnd")){
							$DomRef.removeClass("sapUiCalDaySelEnd");
					}
				}
				oDateRange.setProperty("startDate", new Date(oDate.getTime()), true); // no-rerendering
				oDateRange.setProperty("endDate", undefined, true); // no-rerendering
			}
		} else {
			// multiple selection
			if (oThis.getIntervalSelection()) {
				throw new Error("Calender don't support multiple interval selection");

			} else {
				var iSelected = oThis._checkDateSelected(oDate);
				if (iSelected > 0) {
					// already selected - deselect
					for ( var i = 0; i < aSelectedDates.length; i++) {
						if (aSelectedDates[i].getStartDate() && oDate.getTime() == aSelectedDates[i].getStartDate().getTime()) {
							oThis.removeAggregation("selectedDates", i, true); // no re-rendering
							break;
						}
					}
				}else{
					// not selected -> select
					oDateRange = new sap.ui.unified.DateRange({startDate: new Date(oDate.getTime())});
					oThis.addAggregation("selectedDates", oDateRange, true); // no re-rendering
				}
				var sYyyymmdd = oThis._oFormatYyyymmdd.format(oDate);
				for ( var i = 0; i < aDomRefs.length; i++) {
					var $DomRef = jQuery(aDomRefs[i]);
					if (!$DomRef.hasClass("sapUiCalDayOtherMonth") && $DomRef.attr("data-sap-day") == sYyyymmdd) {
						if (iSelected > 0) {
							$DomRef.removeClass("sapUiCalDaySel");
						}else {
							$DomRef.addClass("sapUiCalDaySel");
						}
					}
				}
			}
		}

	};

	function _determineFocusedDate(oThis){

		var aSelectedDates = oThis.getSelectedDates();
		if (aSelectedDates && aSelectedDates[0] && aSelectedDates[0].getStartDate()) {
			// selected dates are provided -> use first one to focus
			oThis._oFocusedDate = new Date(aSelectedDates[0].getStartDate().getTime());
		} else {
			// use current date
			oThis._oFocusedDate = new Date();
		}
		// initalize the time part of date
		oThis._oFocusedDate.setHours(0, 0, 0, 0);

	};

	function _showMonthPicker(oThis){

		if (oThis._iMode == 2) {
			_hideYearPicker(oThis);
		}

		var oDate = oThis._getFocusedDate();
		var oRm = sap.ui.getCore().createRenderManager();
		var $Container = oThis.$();

		oThis.getRenderer().renderMonthPicker(oRm, oThis, oDate);
		oRm.flush($Container[0], false, true); // insert it
		oRm.destroy();

		// disable prev and next button
//		oThis.$("prev").attr("disabled", "disabled").addClass("sapUiCalDsbl");
//		oThis.$("next").attr("disabled", "disabled").addClass("sapUiCalDsbl");

		oThis._iMode = 1;

		// remove tabindex from focused day
		jQuery(oThis._oItemNavigation.getItemDomRefs()[oThis._oItemNavigation.getFocusedIndex()]).attr("tabindex", "-1");

		_initItemNavigation(oThis);
		jQuery.sap.focus(oThis._oItemNavigation.getItemDomRefs()[oThis._oItemNavigation.getFocusedIndex()]);

	};

	function _hideMonthPicker(oThis){

		oThis.$("months").remove();
		oThis._iMode = 0;
		_initItemNavigation(oThis);
		jQuery.sap.focus(oThis._oItemNavigation.getItemDomRefs()[oThis._oItemNavigation.getFocusedIndex()]);

		// enable prev and next button
//		oThis.$("prev").removeAttr("disabled").removeClass("sapUiCalDsbl");
//		oThis.$("next").removeAttr("disabled").removeClass("sapUiCalDsbl");

	};

	function _selectMonth(oThis, iMonth){

		var oFocusedDate = oThis._getFocusedDate();
		oFocusedDate.setMonth(iMonth);

		if (iMonth != oFocusedDate.getMonth() ) {
			// day did not exost in this month (e.g. 31) -> go to last day of month
			var iDay = oFocusedDate.getDate();
			oFocusedDate.setDate(0);
		}

		_renderMonth(oThis);

		_hideMonthPicker(oThis);

	};

	function _showYearPicker(oThis){

		if (oThis._iMode == 1) {
			_hideMonthPicker(oThis);
		}

		var oDate = oThis._getFocusedDate();
		var oRm = sap.ui.getCore().createRenderManager();
		var $Container = oThis.$();

		oThis.getRenderer().renderYearPicker(oRm, oThis, oDate);
		oRm.flush($Container[0], false, true); // insert it
		oRm.destroy();

		// check special case if only 4 weeks are displayed (e.g. February 2021) -> top padding must be removed
		var aDomRefs = oThis.$("days").children(".sapUiCalDay");
		if (aDomRefs.length == 28) {
			oThis.$("years").addClass("sapUiCalYearNoTop");
		}

		oThis._iMode = 2;

		// remove tabindex from focused day
		jQuery(oThis._oItemNavigation.getItemDomRefs()[oThis._oItemNavigation.getFocusedIndex()]).attr("tabindex", "-1");

		_initItemNavigation(oThis);
		jQuery.sap.focus(oThis._oItemNavigation.getItemDomRefs()[oThis._oItemNavigation.getFocusedIndex()]);

	};

	function _hideYearPicker(oThis){

		oThis.$("years").remove();
		oThis._iMode = 0;
		_initItemNavigation(oThis);
		jQuery.sap.focus(oThis._oItemNavigation.getItemDomRefs()[oThis._oItemNavigation.getFocusedIndex()]);

	};

	function _selectYear(oThis, iIndex){

		var oFocusedDate = oThis._getFocusedDate();
		var aDomRefs = oThis.$("years").children(".sapUiCalYear");
		var sYear = jQuery(aDomRefs[iIndex]).text();
		oFocusedDate.setFullYear(sYear);

		_renderMonth(oThis);

		_hideYearPicker(oThis);

	};

	function _updateYears(oThis, bForward, iSelectedIndex){

		var aDomRefs = oThis.$("years").children(".sapUiCalYear");
		var iFirstYear = parseInt(jQuery(aDomRefs[0]).text());
		var oFocusedDate = oThis._getFocusedDate();
		var sCurrentYear = oFocusedDate.getFullYear().toString();

		if (bForward) {
			iFirstYear = iFirstYear + 20;
		} else {
			iFirstYear = iFirstYear - 20;
		}

		var iYear = iFirstYear;
		for ( var i = 0; i < aDomRefs.length; i++) {
			var $DomRef = jQuery(aDomRefs[i]);
			$DomRef.attr("id", oThis.getId() + "-y" + iYear);
			$DomRef.text(iYear);
			if ($DomRef.hasClass("sapUiCalYearSel") && $DomRef.text() != sCurrentYear) {
				$DomRef.removeClass("sapUiCalYearSel");
			} else if (!$DomRef.hasClass("sapUiCalYearSel") && $DomRef.text() == sCurrentYear){
				$DomRef.addClass("sapUiCalYearSel");
			}
			iYear++;
		}

		oThis._oItemNavigation.focusItem(iSelectedIndex);

	};

	function _checkNamesLength(oThis){


		if(!oThis._bNamesLengthChecked){
			// only once - cannot change by rerendering - only by theme change

			// check day names
			var aWeekHeaders = oThis.$().children(".sapUiCalWH");
			var bTooLong = false;

			for ( var i = 0; i < aWeekHeaders.length; i++) {
				var oWeekDay = aWeekHeaders[i];
				if (oWeekDay.clientWidth < oWeekDay.scrollWidth) {
					bTooLong = true;
					break;
				}
			}

			if (bTooLong) {
				oThis._bLongWeekDays = false;
				var oLocaleData = oThis._getLocaleData();
				var iFirstDayOfWeek = oLocaleData.getFirstDayOfWeek();
				var aDayNames = oLocaleData.getDaysStandAlone("narrow");
				for ( i = 0; i < aDayNames.length; i++) {
					var oWeekDay = aWeekHeaders[i];
					jQuery(oWeekDay).text(aDayNames[(i+iFirstDayOfWeek)%7]);
				}
			} else{
				oThis._bLongWeekDays = true;
			}

			// check month names
			_showMonthPicker(oThis);

			var aMonths = oThis.$("months").children();
			bTooLong = false;
			for ( i = 0; i < aMonths.length; i++) {
				var oMonth = aMonths[i];
				if (oMonth.clientWidth < oMonth.scrollWidth) {
					bTooLong = true;
					break;
				}
			}
			if (bTooLong) {
				oThis._bLongMonth = false;
				if (!oLocaleData) {
					oLocaleData = oThis._getLocaleData();
				}
				// cahnge month name on button but not chnage month picker, becuase it is hided again
				var aMonthNames = oLocaleData.getMonthsStandAlone("abbreviated");
				var oDate = oThis._getFocusedDate();
				oThis.$("month").text(aMonthNames[oDate.getMonth()]);
			} else{
				oThis._bLongMonth = true;
			}

			_hideMonthPicker(oThis);

			oThis._bNamesLengthChecked = true;
		}

	};

	function _fireSelect(oThis){

		if (oThis._bMouseMove) {
			// detach mouse move handler because calendar might be losed in select event handler
			jQuery(window.document).unbind('mousemove', oThis._mouseMoveProxy);
			oThis._bMouseMove = undefined;
		}

		oThis.fireSelect();

	};

}());