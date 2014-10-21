/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.IconTabHeader.
jQuery.sap.declare("sap.m.IconTabHeader");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new IconTabHeader.
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
 * <li>{@link #getShowSelection showSelection} : boolean (default: true)</li>
 * <li>{@link #getSelectedKey selectedKey} : string</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.m.IconTab[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.IconTabHeader#event:select select} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * This control display a number of iconTabFilters and Separators. If the available horizontal space is exceeded, it will allow for scrolling horziontally to show all items.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.22.5
 *
 * @constructor   
 * @public
 * @name sap.m.IconTabHeader
 */
sap.ui.core.Control.extend("sap.m.IconTabHeader", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"showSelection" : {type : "boolean", group : "Misc", defaultValue : true, deprecated: true},
		"selectedKey" : {type : "string", group : "Data", defaultValue : null},
		"visible" : {type : "boolean", group : "Behavior", defaultValue : true}
	},
	aggregations : {
    	"items" : {type : "sap.m.IconTab", multiple : true, singularName : "item"}
	},
	events : {
		"select" : {}
	}
}});


/**
 * Creates a new subclass of class sap.m.IconTabHeader with name <code>sClassName</code> 
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
 * @name sap.m.IconTabHeader.extend
 * @function
 */

sap.m.IconTabHeader.M_EVENTS = {'select':'select'};


/**
 * Getter for property <code>showSelection</code>.
 * Defines whether the current selection should be visualized.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showSelection</code>
 * @public
 * @deprecated Since version 1.15.0. 
 * Regarding to changes of this control this property is not needed anymore.
 * @name sap.m.IconTabHeader#getShowSelection
 * @function
 */

/**
 * Setter for property <code>showSelection</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowSelection  new value for property <code>showSelection</code>
 * @return {sap.m.IconTabHeader} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.15.0. 
 * Regarding to changes of this control this property is not needed anymore.
 * @name sap.m.IconTabHeader#setShowSelection
 * @function
 */


/**
 * Getter for property <code>selectedKey</code>.
 * Key of the selected item.
 * 
 * If the key has no corresponding aggregated item, no changes will apply.
 * If duplicate keys exists the first item matching the key is used.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>selectedKey</code>
 * @public
 * @since 1.15.0
 * @name sap.m.IconTabHeader#getSelectedKey
 * @function
 */

/**
 * Setter for property <code>selectedKey</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sSelectedKey  new value for property <code>selectedKey</code>
 * @return {sap.m.IconTabHeader} <code>this</code> to allow method chaining
 * @public
 * @since 1.15.0
 * @name sap.m.IconTabHeader#setSelectedKey
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * Invisible controls are not rendered.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @since 1.15.0
 * @name sap.m.IconTabHeader#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.IconTabHeader} <code>this</code> to allow method chaining
 * @public
 * @since 1.15.0
 * @name sap.m.IconTabHeader#setVisible
 * @function
 */


/**
 * Getter for aggregation <code>items</code>.<br/>
 * The items displayed in the IconTabBar
 * 
 * @return {sap.m.IconTab[]}
 * @public
 * @name sap.m.IconTabHeader#getItems
 * @function
 */


/**
 * Inserts a item into the aggregation named <code>items</code>.
 *
 * @param {sap.m.IconTab}
 *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the item should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the item is inserted at 
 *             the last position        
 * @return {sap.m.IconTabHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.IconTabHeader#insertItem
 * @function
 */

/**
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 *
 * @param {sap.m.IconTab}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.m.IconTabHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.IconTabHeader#addItem
 * @function
 */

/**
 * Removes an item from the aggregation named <code>items</code>.
 *
 * @param {int | string | sap.m.IconTab} vItem the item to remove or its index or id
 * @return {sap.m.IconTab} the removed item or null
 * @public
 * @name sap.m.IconTabHeader#removeItem
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.m.IconTab[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.m.IconTabHeader#removeAllItems
 * @function
 */

/**
 * Checks for the provided <code>sap.m.IconTab</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.m.IconTab}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.m.IconTabHeader#indexOfItem
 * @function
 */
	

/**
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.m.IconTabHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.IconTabHeader#destroyItems
 * @function
 */


/**
 * This event will be fired when an item is selected. 
 *
 * @name sap.m.IconTabHeader#select
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.m.IconTabFilter} oControlEvent.getParameters.item The selected item.
 * @param {string} oControlEvent.getParameters.key The key of the selected item.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'select' event of this <code>sap.m.IconTabHeader</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.IconTabHeader</code>.<br/> itself. 
 *  
 * This event will be fired when an item is selected. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.IconTabHeader</code>.<br/> itself.
 *
 * @return {sap.m.IconTabHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.IconTabHeader#attachSelect
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'select' event of this <code>sap.m.IconTabHeader</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.IconTabHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.IconTabHeader#detachSelect
 * @function
 */

/**
 * Fire event select to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'item' of type <code>sap.m.IconTabFilter</code> The selected item.</li>
 * <li>'key' of type <code>string</code> The key of the selected item.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.IconTabHeader} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.IconTabHeader#fireSelect
 * @function
 */


// Start of sap\m\IconTabHeader.js
jQuery.sap.require("sap.ui.core.delegate.ItemNavigation");
jQuery.sap.require("sap.ui.core.EnabledPropagator");
sap.ui.core.EnabledPropagator.apply(sap.m.IconTabHeader.prototype, [true]);

sap.m.IconTabHeader.SCROLL_STEP = 264; // how many pixels to scroll with every overflow arrow click

// When to create a scroll delegate:
sap.m.IconTabHeader.prototype._bDoScroll = !sap.ui.Device.system.desktop || (sap.ui.Device.os.windows && sap.ui.Device.os.version === 8);

/**
 * Init
 */
sap.m.IconTabHeader.prototype.init = function() {
	this._bPreviousScrollForward = false; // remember the item overflow state
	this._bPreviousScrollBack = false;
	this._iCurrentScrollLeft = 0;
	this._bRtl = sap.ui.getCore().getConfiguration().getRTL();

	this.startScrollX = 0;
	this.startTouchX = 0;
	this._scrollable = null;

	this._aTabKeys = [];

	// Initialize the ItemNavigation
	this._oItemNavigation = new sap.ui.core.delegate.ItemNavigation().setCycling(false);
	this.addDelegate(this._oItemNavigation);

	if (this._bDoScroll) {
		jQuery.sap.require("sap.ui.core.delegate.ScrollEnablement");
		this._oScroller = new sap.ui.core.delegate.ScrollEnablement(this, this.getId() + "-head", {
			horizontal: true,
			vertical: false,
			nonTouchScrolling: true
		});
	}

};

/**
 * Exit
 */
sap.m.IconTabHeader.prototype.exit = function() {
	if (this._oArrowLeft) {
		this._oArrowLeft.destroy();
	}
	if (this._oArrowRight) {
		this._oArrowRight.destroy();
	}

	if (this._oItemNavigation) {
		this.removeDelegate(this._oItemNavigation);
		this._oItemNavigation.destroy();
		delete this._oItemNavigation;
	}

	if (this._oScroller){
		this._oScroller.destroy();
		this._oScroller = null;
	}

	if (this._sResizeListenerId) {
		sap.ui.core.ResizeHandler.deregister(this._sResizeListenerId);
		this._sResizeListenerId = null;
	}
	if (this._aTabKeys) {
		this._aTabKeys = null;
	}
};

/**
 * Before Rendering
 */
sap.m.IconTabHeader.prototype.onBeforeRendering = function() {
	var aItems = this.getItems(),
		sSelectedKey = this.getSelectedKey(),
		i = 0;

	if (this._sResizeListenerId) {
		sap.ui.core.ResizeHandler.deregister(this._sResizeListenerId);
		this._sResizeListenerId = null;
	}

	if (aItems.length > 0) {
		if (!this.oSelectedItem || sSelectedKey && sSelectedKey !== this.oSelectedItem.getKey()) {
			if (sSelectedKey) {
				// selected key was specified by API: set oSelectedItem to the item specified by key
				for (; i < aItems.length; i++) {
					if (!(aItems[i] instanceof sap.m.IconTabSeparator) && aItems[i].getKey() === sSelectedKey) {
						this.oSelectedItem = aItems[i];
						break;
					}
				}
			}

			// no key and no item, we set the first visible item as selected if container is not explicitly set to collapsed
			if (!this.oSelectedItem && this.getParent() instanceof sap.m.IconTabBar && this.getParent().getExpanded()) {
				for (i = 0; i < aItems.length; i++) { // tab item
					if (!(aItems[i] instanceof sap.m.IconTabSeparator) && aItems[i].getVisible()) {
						this.oSelectedItem = aItems[i];
						break;
					}
				}
			}
		}

		//in case the selected tab is not visible anymore and the content is expanded, the selected tab will change to the first visible tab
		if (this.oSelectedItem && !this.oSelectedItem.getVisible() && this.getParent() instanceof sap.m.IconTabBar && this.getParent().getExpanded()) {
			for (i = 0; i < aItems.length; i++) { // tab item
				if (!(aItems[i] instanceof sap.m.IconTabSeparator) && aItems[i].getVisible()) {
					this.oSelectedItem = aItems[i];
					break;
				}
			}
		}

		if (this.oSelectedItem) {
			this.setProperty("selectedKey", this.oSelectedItem.getKey(), true);
		}
	}
};

sap.m.IconTabHeader.prototype.invalidate = function() {
	if (this.getParent() instanceof sap.m.IconTabBar && !this.getParent()._bHideHeader) {
		// invalidate IconTabBar when the header is attached to it 
		this.getParent().invalidate();
	} else {
		// invalidate just the header when it is detached (IconTabFilter will do the magic for content invalidation)
		sap.ui.core.Control.prototype.invalidate.apply(this, arguments);
	}
};

/**
 * Sets the selected item based on key
 * @overwrite
 * @public
 * @param {string} sKey the key of the item to be selected
 * @return {sap.m.IconTabHeader} this pointer for chaining
 */
sap.m.IconTabHeader.prototype.setSelectedKey = function (sKey) {
	var aItems = this.getItems(),
		i = 0;

	// adjust UI and internal variables if already rendered (otherwise taken care by onBeforeRendering)
	if (this.$().length) {
		for (; i < aItems.length; i++) {
			if (!(aItems[i] instanceof sap.m.IconTabSeparator) && aItems[i].getKey() === sKey) {
				this.setSelectedItem(aItems[i], true);
				break;
			}
		}
	}

	// set internal property
	this.setProperty("selectedKey", sKey, true);
	return this;
};

/*
 * Sets the selected item, updates the UI, and fires the select event
 * @private
 * @param {sap.m.IconTabFilter} oItem the item to be selected
 * @return {sap.m.IconTabHeader} this pointer for chaining
 */
sap.m.IconTabHeader.prototype.setSelectedItem = function(oItem, bAPIchange) {

	if (!oItem || !oItem.getEnabled()) {
		return this;
	}

	if (this.oSelectedItem && this.oSelectedItem.getVisible() && (this.getParent() instanceof sap.m.IconTabBar && this.getParent().getExpandable() || this.oSelectedItem !== oItem )) {
		this.oSelectedItem.$().removeClass("sapMITBSelected");
	}

	if (oItem.getVisible()) {
		//click on already selected item leads to expanding/collapsing of the content (if expandable enabled)
		if (this.oSelectedItem === oItem) {
			//if content is not expandable nothing should happen otherwise content will be expanded/collapsed
			if (this.getParent() instanceof sap.m.IconTabBar && this.getParent().getExpandable()) {
				this.getParent()._toggleExpandCollapse();
			}
		//click on other item leads to showing the right content of this item
		} else {
			// set new item
			this.oSelectedItem = oItem;
			this.setProperty("selectedKey", this.oSelectedItem.getKey(), true);

			//if the IconTabBar is not expandable and the content not expanded (which means content can never be expanded), we do not need
			//to visualize the selection and we do not need to render the content
			if (this.getParent() instanceof sap.m.IconTabBar && (this.getParent().getExpandable() || this.getParent().getExpanded())) {
				// add selected styles
				this.oSelectedItem.$().addClass("sapMITBSelected");
	
				//if item has own content, this content is shown
				var oSelectedItemContent = this.oSelectedItem.getContent();
				if (oSelectedItemContent.length > 0) {
					this.getParent()._rerenderContent(oSelectedItemContent);
				//if item has not own content, general content of the icontabbar is shown
				} else {
					this.getParent()._rerenderContent(this.getParent().getContent());
				}
				//if content is not expanded, content will be expanded (first click on item always leads to expanding the right content)
				if (this.getParent().getExpandable() && !this.getParent().getExpanded()) {
					this.getParent()._toggleExpandCollapse(true);
				}
			}
		}

		// scroll to item if out of viewport
		if (this.oSelectedItem.$().length > 0) {
			this._scrollIntoView(oItem, 500);
		} else {
			this._scrollAfterRendering = true;
		}
	}

	var sSelectedKey = this.oSelectedItem.getKey();
	this.oSelectedItem = oItem;
	this.setProperty("selectedKey", sSelectedKey, true);

	if (!bAPIchange) {
		// fire event on iconTabBar
		if (this.getParent() instanceof sap.m.IconTabBar) {
			this.getParent().fireSelect({
				selectedItem: this.oSelectedItem,
				selectedKey: sSelectedKey,
				item: this.oSelectedItem,
				key: sSelectedKey
			});
		} else {
			// fire event on header
			this.fireSelect({
				selectedItem: this.oSelectedItem,
				selectedKey: sSelectedKey,
				item: this.oSelectedItem,
				key: sSelectedKey
			});
		}
	}
	return this;
};

/**
 * return first visible item, which is needed for correct arrow calculation
 */
sap.m.IconTabHeader.prototype._getFirstVisibleItem = function(aItems) {
	for (var i = 0; i < aItems.length; i++) {
		if (aItems[i].getVisible()) {
			return aItems[i];
		}
	}
	
	return null;
};

/**
 * afterRendering
 */
sap.m.IconTabHeader.prototype.onAfterRendering = function() {
	var oHeadDomRef = this.getDomRef("head"),
		$bar = this.$();

	// initialize scrolling
	if (this._oScroller) {
		this._oScroller.setIconTabBar(this, jQuery.proxy(this._afterIscroll, this), jQuery.proxy(this._scrollPreparation, this));
	}

	if (this.oSelectedItem && this.getParent() instanceof sap.m.IconTabBar && this.getParent().getExpanded()) {
		this.oSelectedItem.$().addClass("sapMITBSelected");
	}

	if (this._bDoScroll) {
		jQuery.sap.delayedCall(350, this, "_checkOverflow", [oHeadDomRef, $bar]);
	}

	// reset scroll state after re-rendering for non-touch devices (iScroll will handle this internally)
	if (this._iCurrentScrollLeft !== 0 && !this._bDoScroll) {
		oHeadDomRef.scrollLeft = this._iCurrentScrollLeft;
	}

	// scroll to selected item if it is out of screen and we render the control the first time
	if (this.oSelectedItem) {
		if (!this._bDoThisOnlyOnce) {
			jQuery.sap.delayedCall(1000, this, "_scrollIntoView", [this.oSelectedItem, 0]); // needs some delay to have correct position info
			this._bDoThisOnlyOnce = true;
		} else if (this._scrollAfterRendering) {
			this._scrollIntoView(this.oSelectedItem, 500); 
			this._scrollAfterRendering = false;
		}
	}

	//use ItemNavigation for keyboardHandling
	var aItems = this.getItems();
	var aTabDomRefs = [];
	var iSelectedDomIndex = -1;
	var that = this;

	// find a collection of all tabs
	aItems.forEach(function(oItem) {
		if (oItem instanceof sap.m.IconTabFilter) {
			var oItemDomRef = that.getFocusDomRef(oItem);
			jQuery(oItemDomRef).attr("tabindex", "-1");
			aTabDomRefs.push(oItemDomRef);
			if (that === this.oSelectedItem) {
				iSelectedDomIndex = aTabDomRefs.indexOf(oItem);
			}
		}
	});

	//Initialize the ItemNavigation
	if (!this._oItemNavigation) {
		this._oItemNavigation = new sap.ui.core.delegate.ItemNavigation();
		this.addDelegate(this._oItemNavigation);
	}

	//Reinitialize the ItemNavigation after rendering
	this._oItemNavigation.setRootDomRef(oHeadDomRef);
	this._oItemNavigation.setItemDomRefs(aTabDomRefs);
	this._oItemNavigation.setSelectedIndex(iSelectedDomIndex);


	//listen to resize
	this._sResizeListenerId = sap.ui.core.ResizeHandler.register(this.getDomRef(),  jQuery.proxy(this._fnResize, this));

};

/**
 * Destroys the item aggregation.
 */
sap.m.IconTabHeader.prototype.destroyItems = function() {
	this.oSelectedItem = null;
	this._aTabKeys = [];
	this.destroyAggregation("items");
};

sap.m.IconTabHeader.prototype.addItem = function(oItem) {
	if (!(oItem instanceof sap.m.IconTabSeparator)) {
		var sKey = oItem.getKey();
		//check if key is a duplicate
		if(this._aTabKeys.indexOf(sKey) !== -1) {
			jQuery.sap.log.warning("sap.m.IconTabHeader: duplicate key '" + sKey +"' inside the IconTabFilter. Please use unique keys.");
		}
		this._aTabKeys.push(sKey);
	}
	this.addAggregation("items", oItem);
};

sap.m.IconTabHeader.prototype.insertItem = function(oItem, iIndex) {
	if (!(oItem instanceof sap.m.IconTabSeparator)) {
		var sKey = oItem.getKey();
		//check if key is a duplicate
		if(this._aTabKeys.indexOf(sKey) !== -1) {
			jQuery.sap.log.warning("sap.m.IconTabHeader: duplicate key '" + sKey +"' inside the IconTabFilter. Please use unique keys.");
		}
		this._aTabKeys.push(sKey);
	}
	this.insertAggregation("items", oItem, iIndex);
};

sap.m.IconTabHeader.prototype.removeAllItems = function() {
	this._aTabKeys = [];
	this.removeAllAggregation("items");
};

sap.m.IconTabHeader.prototype.removeItem = function(oItem) {
	// Make sure we have the actual Item and not just an ID
	oItem = this.removeAggregation("items", oItem);
	
	if (oItem && !(oItem instanceof sap.m.IconTabSeparator)) {
		var sKey = oItem.getKey();
		this._aTabKeys.splice(this._aTabKeys.indexOf(sKey) , 1);
	}
	
	// Return the original value from removeAggregation
	return oItem;
};


/**
 * Checks if all tabs are textOnly version.
 * @private
 * @returns true if all tabs are textOnly version, otherwise false
 */
sap.m.IconTabHeader.prototype._checkTextOnly = function(aItems) {
	if (aItems.length > 0) {
		for (var i = 0; i < aItems.length; i++) {
			if (!(aItems[i] instanceof sap.m.IconTabSeparator)) {
				if (aItems[i].getIcon()) {
					this._bTextOnly = false;
					return false;
				}
			}
		}
	}
	this._bTextOnly = true;
	return true;
};

/**
 * Checks if all tabs are noText version.
 * @private
 * @returns true if all tabs are noText version, otherwise false
 */
sap.m.IconTabHeader.prototype._checkNoText = function(aItems) {
	if (aItems.length > 0) {
		for (var i = 0; i < aItems.length; i++) {
			if (!(aItems[i] instanceof sap.m.IconTabSeparator)) {
				if (aItems[i].getText().length > 0) {
					return false;
				}
			}
		}
	}
	return true;
};

/**
 * Checks if scrolling is needed.
 * @private
 * @returns true if scrolling is needed, otherwise false
 */
sap.m.IconTabHeader.prototype._checkScrolling = function(oHead, $bar) {
	var bScrolling = false;

	if (this._bDoScroll) { //iScroll is used, therefore we need other calculation then in desktop mode
		var domScrollCont = this.getDomRef("scrollContainer");
		var domHead = this.getDomRef("head");
		if (domHead.offsetWidth > domScrollCont.offsetWidth) {
			bScrolling = true;
		}
	} else { //desktop mode
		//check if there are more tabs as displayed
		if (oHead) {
			if (oHead.scrollWidth > oHead.clientWidth) {
				//scrolling possible
				bScrolling = true;
			}
		}
	}

	if (this._scrollable !== bScrolling) {
		$bar.toggleClass("sapMITBScrollable", bScrolling);
		$bar.toggleClass("sapMITBNotScrollable", !bScrolling);
		this._scrollable = bScrolling;
	}

	return bScrolling;
};

/**
 * Gets the icon of the requested arrow (left/right).
 * @private
 * @param sName left or right
 * @returns icon of the requested arrow
 */
sap.m.IconTabHeader.prototype._getScrollingArrow = function(sName) {
	var mProperties = {
		src : "sap-icon://navigation-" + sName + "-arrow"
	};
	var aCssClassesToAddLeft = ["sapMITBArrowScroll", "sapMITBArrowScrollLeft"];
	var aCssClassesToAddRight = ["sapMITBArrowScroll", "sapMITBArrowScrollRight"];
	
	if (sName === "left") {
		if (!this._oArrowLeft) {
			this._oArrowLeft = sap.m.ImageHelper.getImageControl(this.getId() + "-arrowScrollLeft", this._oArrowLeft, this, mProperties, aCssClassesToAddLeft);
		}
		return this._oArrowLeft;
	}
	if (sName === "right") {
		if (!this._oArrowRight) {
			this._oArrowRight = sap.m.ImageHelper.getImageControl(this.getId() + "-arrowScrollRight", this._oArrowRight, this, mProperties, aCssClassesToAddRight);
		}
		return this._oArrowRight;
	}
};

/**
 * Changes the state of the scroll arrows depending on whether they are required due to overflow.
 *
 * @param oListDomRef the ul tag containing the items
 * @param of_back the backward scroll arrow
 * @param of_fw the forward scroll arrow
 * @private
 */
sap.m.IconTabHeader.prototype._checkOverflow = function(oBarHead, $bar) {

	if (this._checkScrolling(oBarHead, $bar) && oBarHead) {
		// check whether scrolling to the left is possible
		var bScrollBack = false;
		var bScrollForward = false;

		if (this._bDoScroll) { //ScrollEnablement is used, therefore we need other calculation then in desktop mode
			var domScrollCont = this.getDomRef("scrollContainer");
			var domHead = this.getDomRef("head");
			if (this._oScroller.getScrollLeft() > 0) {
				bScrollBack = true;
			}
			if ((this._oScroller.getScrollLeft() + domScrollCont.offsetWidth) < domHead.offsetWidth) {
				bScrollForward = true;
			}

		} else { //desktop mode
			var iScrollLeft = oBarHead.scrollLeft;
			var realWidth = oBarHead.scrollWidth;
			var availableWidth = oBarHead.clientWidth;

			if (Math.abs(realWidth-availableWidth) == 1){ // Avoid rounding issues see CSN 1316630 2013
				realWidth = availableWidth;
			}

			if (!this._bRtl) {   // normal LTR mode
				if (iScrollLeft > 0) {
					bScrollBack = true;
				}
				if ((realWidth > availableWidth) && (iScrollLeft + availableWidth < realWidth)) {
					bScrollForward = true;
				}
			} else {  // RTL mode
				var $List = jQuery(oBarHead);
				if ($List.scrollLeftRTL() > 0) {
					bScrollForward = true;
				}
				if ($List.scrollRightRTL() > 0) {
					bScrollBack = true;
				}
			}
		}

		// only do DOM changes if the state changed to avoid periodic application of identical values
		if ((bScrollForward != this._bPreviousScrollForward) || (bScrollBack != this._bPreviousScrollBack)) {
			this._bPreviousScrollForward = bScrollForward;
			this._bPreviousScrollBack = bScrollBack;
			$bar.toggleClass("sapMITBScrollBack", bScrollBack);
			$bar.toggleClass("sapMITBNoScrollBack", !bScrollBack);
			$bar.toggleClass("sapMITBScrollForward", bScrollForward);
			$bar.toggleClass("sapMITBNoScrollForward", !bScrollForward);
		}
	}
};

/**
 * Handles the activation of the tabs and arrows.
 * @private
 */
sap.m.IconTabHeader.prototype._handleActivation = function(oEvent) {
	var sTargetId = oEvent.target.id,
		oControl = oEvent.srcControl,
		sControlId;

	var $sTargetId = jQuery.sap.byId(sTargetId);
	if (jQuery.inArray(this.$("content")[0], $sTargetId.parents()) > -1) {
		//do nothing because element is inside content
	} else {
		if (sTargetId) {
			var sId = this.getId();

			// For items: do not navigate away! Stay on the page and handle the click in-place. Right-click + "Open in new Tab" still works.
			// For scroll buttons: Prevent IE from firing beforeunload event -> see CSN 4378288 2012
			oEvent.preventDefault();

			//on mobile devices click on arrows has no effect
			if (sTargetId == sId + "-arrowScrollLeft" && sap.ui.Device.system.desktop) {
				if (sap.ui.Device.os.windows && sap.ui.Device.os.version === 8) {
					//combi devices with windows 8 should also scroll on click on arrows
					//need to use iscroll
					var iScrollLeft = this._oScroller.getScrollLeft() - sap.m.IconTabHeader.SCROLL_STEP;
					if (iScrollLeft < 0) {
						iScrollLeft = 0;
					}
					// execute manual scrolling with iScroll's scrollTo method (delayedCall 0 is needed for positioning glitch)
					this._scrollPreparation();
					jQuery.sap.delayedCall(0, this._oScroller, "scrollTo", [iScrollLeft, 0, 500]);
					jQuery.sap.delayedCall(500, this, "_afterIscroll");
				} else {
					// scroll back/left button
					this._scroll(-sap.m.IconTabHeader.SCROLL_STEP, 500);
				}

			} else if (sTargetId == sId + "-arrowScrollRight" && sap.ui.Device.system.desktop) {
				if (sap.ui.Device.os.windows && sap.ui.Device.os.version === 8) {
					//combi devices with windows 8 should also scroll on click on arrows
					//need to use iscroll
					var iScrollLeft = this._oScroller.getScrollLeft() + sap.m.IconTabHeader.SCROLL_STEP;
					var iContainerWidth = this.$("scrollContainer").width();
					var iHeadWidth = this.$("head").width();
					if (iScrollLeft > (iHeadWidth - iContainerWidth)) {
						iScrollLeft = iHeadWidth - iContainerWidth;
					}
					// execute manual scrolling with iScroll's scrollTo method (delayedCall 0 is needed for positioning glitch)
					this._scrollPreparation();
					jQuery.sap.delayedCall(0, this._oScroller, "scrollTo", [iScrollLeft, 0, 500]);
					jQuery.sap.delayedCall(500, this, "_afterIscroll");
				} else {
					// scroll forward/right button
					this._scroll(sap.m.IconTabHeader.SCROLL_STEP, 500);
				}

			} else {
				// should be one of the items - select it
				if (oControl instanceof sap.ui.core.Icon || oControl instanceof sap.m.Image) { 
					// click on icon: fetch filter instead
					sControlId = oEvent.srcControl.getId().replace("-icon", "");
					oControl = sap.ui.getCore().byId(sControlId);
					if (!(oControl instanceof sap.m.IconTabSeparator)) {
						this.setSelectedItem(oControl);
					}
				}
				// select item if it is an iconTab but not a separator
				else if (oControl.getMetadata().isInstanceOf("sap.m.IconTab") && !(oControl instanceof sap.m.IconTabSeparator)) {
					//for tabs with showAll property true, click on whole area leads to selection, for text only version only clicking on text itself (not count)
					if (oControl.getShowAll() || this._bTextOnly && sTargetId === oControl.getId() + "-text") {
						this.setSelectedItem(oControl);
					}
				}
			}
		}
		else {
			//no target id, so we have to check if showAll is set, because clicking on the number then also leads to selecting the item
			if (oControl.getMetadata().isInstanceOf("sap.m.IconTab") && !(oControl instanceof sap.m.IconTabSeparator) && oControl.getShowAll()) {
				this.setSelectedItem(oControl);
			}
		}
	}
};

/*
 * Scrolls to the item passed as parameter if it is not (fully) visible
 * If the item is to the left of the viewport it will be put leftmost.
 * If the item is to the right of the viewport it will be put rightmost.
 * @param {sap.m.IconTabFilter} oItem The item to be scrolled into view
 * @param {int} iDuration The duration of the animation effect
 * @private
 * @return {sap.m.IconTabHeader} this pointer for chaining
 */ 
sap.m.IconTabHeader.prototype._scrollIntoView = function(oItem, iDuration) {
	var $item = oItem.$(),
	oHeadDomRef,
	iScrollLeft,
	iNewScrollLeft,
	iContainerWidth;

	if ($item.length > 0) {
		var iItemWidth = $item.outerWidth();
		var iItemPosLeft = $item.position().left;

		// switch based on scrolling mode
		if (this._bDoScroll) { // ScrollEnablement
			iScrollLeft = this._oScroller.getScrollLeft();
			iContainerWidth = this.$("scrollContainer").width();
			iNewScrollLeft = 0;

			// check if item is outside of viewport
			if (iItemPosLeft - iScrollLeft < 0 || iItemPosLeft - iScrollLeft > iContainerWidth - iItemWidth) {		
				if (iItemPosLeft - iScrollLeft < 0) { // left side: make this the first item
					iNewScrollLeft += iItemPosLeft;
				} else { // right side: make this the last item
					iNewScrollLeft += iItemPosLeft + iItemWidth - iContainerWidth;
				}

				// execute manual scrolling with scrollTo method (delayedCall 0 is needed for positioning glitch)
				this._scrollPreparation();
				jQuery.sap.delayedCall(0, this._oScroller, "scrollTo", [iNewScrollLeft, 0, iDuration]);
				jQuery.sap.delayedCall(iDuration, this, "_afterIscroll");
			}
		} else { // desktop scrolling with jQuery
			oHeadDomRef = this.getDomRef("head");
			iScrollLeft = oHeadDomRef.scrollLeft;
			iContainerWidth = $item.parent().width();
			iNewScrollLeft = iScrollLeft;		

			// check if item is outside of viewport
			if (iItemPosLeft < 0 || iItemPosLeft > iContainerWidth - iItemWidth) { 
				if (iItemPosLeft < 0) { // left side: make this the first item
					iNewScrollLeft += iItemPosLeft;
				} else { // right side: make this the last item
					iNewScrollLeft += iItemPosLeft + iItemWidth - iContainerWidth;
				}

				// execute scrolling
				this._scrollPreparation();
				jQuery(oHeadDomRef).stop(true, true).animate({scrollLeft: iNewScrollLeft}, iDuration, jQuery.proxy(this._adjustAndShowArrow, this));
			}
		}
		// store current scroll state to set it after rerendering
		this._iCurrentScrollLeft = iNewScrollLeft;
	}

	return this;
};

/*
 * Scrolls the items if possible, using an animation.
 *
 * @param iDelta how far to scroll
 * @param iDuration how long to scroll (ms)
 * @private
 */
sap.m.IconTabHeader.prototype._scroll = function(iDelta, iDuration) {
	this._scrollPreparation();

	var oDomRef = this.getDomRef("head");
	var iScrollLeft = oDomRef.scrollLeft;
	if (!!!sap.ui.Device.browser.internet_explorer && this._bRtl) {
		iDelta = -iDelta;
	} // RTL lives in the negative space
	var iScrollTarget = iScrollLeft+iDelta;
	jQuery(oDomRef).stop(true, true).animate({scrollLeft: iScrollTarget}, iDuration, jQuery.proxy(this._adjustAndShowArrow, this));
	this._iCurrentScrollLeft = iScrollTarget;
};

/**
 * Adjusts the arrow position and shows the arrow.
 * @private
 */
sap.m.IconTabHeader.prototype._adjustAndShowArrow = function() {
	this._$bar && this._$bar.toggleClass("sapMITBScrolling", false);
	this._$bar = null;
	//update the arrows on desktop
	if (sap.ui.Device.system.desktop) {
		this._checkOverflow(this.getDomRef("head"), this.$());
	}
};

/**
 * Scroll preparation.
 * @private
 */
sap.m.IconTabHeader.prototype._scrollPreparation = function() {
	if (!this._$bar){
		this._$bar = this.$().toggleClass("sapMITBScrolling", true);
	}
};

/**
 * After iscroll.
 * @private
*/
sap.m.IconTabHeader.prototype._afterIscroll = function() {
	var oHead = this.getDomRef("head");
	this._checkOverflow(oHead, this.$());
	this._adjustAndShowArrow();
};

/**
 * Resize  handling.
 * @private
*/
sap.m.IconTabHeader.prototype._fnResize = function() {
	var oHead = this.getDomRef("head");
	this._checkOverflow(oHead, this.$());
};

/** 
 * @overwrite
 */
//overwritten method, returns for most cases the iconDomRef, if the given tab has no icon, the textDomRef is returned.
sap.m.IconTabHeader.prototype.getFocusDomRef = function (oFocusTab) {
	
	var oTab = oFocusTab || this.oSelectedItem;

	if (!oTab) {
		return null;
	}

	if (!this._bTextOnly) {
		if (oTab.getShowAll()) {
			return oTab.getDomRef();
		}
		return oTab.getDomRef("icon");
	}
	return oTab.getDomRef("text");
};

sap.m.IconTabHeader.prototype.applyFocusInfo = function (oFocusInfo) {
	//sets the focus depending on the used IconTabFilter
	if (oFocusInfo.focusDomRef) {
		jQuery(oFocusInfo.focusDomRef).focus();
	}
};

/* =========================================================== */
/*           begin: event handlers                             */
/* =========================================================== */

/**
 * Initializes scrolling on the IconTabHeader. 
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.m.IconTabHeader.prototype.ontouchstart = function(oEvent) {
	var oTargetTouch = oEvent.targetTouches[0];

	// store & init touch state
	this._iActiveTouch = oTargetTouch.identifier;
	this._iTouchStartPageX = oTargetTouch.pageX;
	this._iTouchDragX = 0;
};

/**
 * Sets an internal flag if horizontal drag was executed.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.m.IconTabHeader.prototype.ontouchmove = function(oEvent) {
	var oTouch = sap.m.touch.find(oEvent.changedTouches, this._iActiveTouch);

	// check for valid changes 
	if (!oTouch || oTouch.pageX === this._iTouchStartPageX) {
		return;
	}

	// sum up movement to determine in touchend event if selection should be executed
	this._iTouchDragX += Math.abs(this._iTouchStartPageX - oTouch.pageX); 
	this._iTouchStartPageX = oTouch.pageX;
};

/**
 * Handles touch end and events and trigger selection if bar was not dragged.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.m.IconTabHeader.prototype.ontouchend = function(oEvent) {
	// suppress selection if there ware a drag (moved more than 20px)
	if (this._iTouchDragX > 5 || oEvent.isMarked()) {
		return;
	}
	// 
	this._handleActivation(oEvent);
};


/**
 * Handle the touch cancel event.
 *
 * @param {jQuery.EventObject} oEvent The event object
 * @private
 */
sap.m.IconTabHeader.prototype.ontouchcancel = sap.m.IconTabHeader.prototype.ontouchend;

/**
 * Keyboard navigation event when the user presses Enter or Space.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.m.IconTabHeader.prototype.onsapselect = function(oEvent) {
	this._handleActivation(oEvent);
};


/* =========================================================== */
/*           end: event handlers                               */
/* =========================================================== */
