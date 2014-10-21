/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.StandardListItem.
jQuery.sap.declare("sap.m.StandardListItem");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.m.ListItemBase");


/**
 * Constructor for a new StandardListItem.
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
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getDescription description} : string</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getIconInset iconInset} : boolean (default: true)</li>
 * <li>{@link #getIconDensityAware iconDensityAware} : boolean (default: true)</li>
 * <li>{@link #getActiveIcon activeIcon} : sap.ui.core.URI</li>
 * <li>{@link #getInfo info} : string</li>
 * <li>{@link #getInfoState infoState} : sap.ui.core.ValueState (default: sap.ui.core.ValueState.None)</li>
 * <li>{@link #getAdaptTitleSize adaptTitleSize} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 *
 * 
 * In addition, all settings applicable to the base type {@link sap.m.ListItemBase#constructor sap.m.ListItemBase}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * The StandardListItem is a list item providing image, titel and description.
 * @extends sap.m.ListItemBase
 *
 * @author SAP AG 
 * @version 1.22.5
 *
 * @constructor   
 * @public
 * @name sap.m.StandardListItem
 */
sap.m.ListItemBase.extend("sap.m.StandardListItem", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"title" : {type : "string", group : "Misc", defaultValue : null},
		"description" : {type : "string", group : "Misc", defaultValue : null},
		"icon" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : null},
		"iconInset" : {type : "boolean", group : "Appearance", defaultValue : true},
		"iconDensityAware" : {type : "boolean", group : "Misc", defaultValue : true},
		"activeIcon" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : null},
		"info" : {type : "string", group : "Misc", defaultValue : null},
		"infoState" : {type : "sap.ui.core.ValueState", group : "Misc", defaultValue : sap.ui.core.ValueState.None},
		"adaptTitleSize" : {type : "boolean", group : "Appearance", defaultValue : true}
	}
}});


/**
 * Creates a new subclass of class sap.m.StandardListItem with name <code>sClassName</code> 
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
 * @name sap.m.StandardListItem.extend
 * @function
 */


/**
 * Getter for property <code>title</code>.
 * List item text
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * @name sap.m.StandardListItem#getTitle
 * @function
 */

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.m.StandardListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.StandardListItem#setTitle
 * @function
 */


/**
 * Getter for property <code>description</code>.
 * Description
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>description</code>
 * @public
 * @name sap.m.StandardListItem#getDescription
 * @function
 */

/**
 * Setter for property <code>description</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sDescription  new value for property <code>description</code>
 * @return {sap.m.StandardListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.StandardListItem#setDescription
 * @function
 */


/**
 * Getter for property <code>icon</code>.
 * List item icon
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * @name sap.m.StandardListItem#getIcon
 * @function
 */

/**
 * Setter for property <code>icon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.m.StandardListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.StandardListItem#setIcon
 * @function
 */


/**
 * Getter for property <code>iconInset</code>.
 * If false image will not be shown as embedded icon. Instead it will take the full height of the listitem.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>iconInset</code>
 * @public
 * @name sap.m.StandardListItem#getIconInset
 * @function
 */

/**
 * Setter for property <code>iconInset</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bIconInset  new value for property <code>iconInset</code>
 * @return {sap.m.StandardListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.StandardListItem#setIconInset
 * @function
 */


/**
 * Getter for property <code>iconDensityAware</code>.
 * By default, this is set to true but then one or more requests are sent trying to get the density perfect version of image if this version of image doesn't exist on the server.
 * 
 * If bandwidth is the key for the application, set this value to false.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>iconDensityAware</code>
 * @public
 * @name sap.m.StandardListItem#getIconDensityAware
 * @function
 */

/**
 * Setter for property <code>iconDensityAware</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bIconDensityAware  new value for property <code>iconDensityAware</code>
 * @return {sap.m.StandardListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.StandardListItem#setIconDensityAware
 * @function
 */


/**
 * Getter for property <code>activeIcon</code>.
 * List item active icon
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>activeIcon</code>
 * @public
 * @name sap.m.StandardListItem#getActiveIcon
 * @function
 */

/**
 * Setter for property <code>activeIcon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sActiveIcon  new value for property <code>activeIcon</code>
 * @return {sap.m.StandardListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.StandardListItem#setActiveIcon
 * @function
 */


/**
 * Getter for property <code>info</code>.
 * Info text shown on the right side of the description.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>info</code>
 * @public
 * @name sap.m.StandardListItem#getInfo
 * @function
 */

/**
 * Setter for property <code>info</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sInfo  new value for property <code>info</code>
 * @return {sap.m.StandardListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.StandardListItem#setInfo
 * @function
 */


/**
 * Getter for property <code>infoState</code>.
 * Info state defines the color of the info text. E.g. Error, Warning, Success...
 *
 * Default value is <code>None</code>
 *
 * @return {sap.ui.core.ValueState} the value of property <code>infoState</code>
 * @public
 * @name sap.m.StandardListItem#getInfoState
 * @function
 */

/**
 * Setter for property <code>infoState</code>.
 *
 * Default value is <code>None</code> 
 *
 * @param {sap.ui.core.ValueState} oInfoState  new value for property <code>infoState</code>
 * @return {sap.m.StandardListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.StandardListItem#setInfoState
 * @function
 */


/**
 * Getter for property <code>adaptTitleSize</code>.
 * By default the title size adapts to the available space and gets bigger if the description is empty. If you have list items with and without description this results in titles with different sizes. In this cases it can be better to switch the size adaption off with setting this property to "false".
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>adaptTitleSize</code>
 * @public
 * @since 1.16.3
 * @name sap.m.StandardListItem#getAdaptTitleSize
 * @function
 */

/**
 * Setter for property <code>adaptTitleSize</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bAdaptTitleSize  new value for property <code>adaptTitleSize</code>
 * @return {sap.m.StandardListItem} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.3
 * @name sap.m.StandardListItem#setAdaptTitleSize
 * @function
 */


// Start of sap\m\StandardListItem.js
jQuery.sap.require("sap.ui.core.EnabledPropagator");
jQuery.sap.require("sap.ui.core.IconPool");

sap.m.StandardListItem.prototype.exit = function() {
	if (this._image) {
		this._image.destroy();
	}

	sap.m.ListItemBase.prototype.exit.apply(this, arguments);
};


/**
 * @private
 */
sap.m.StandardListItem.prototype._getImage = function(sImgId, sImgStyle, sSrc, bIconDensityAware) {
	var oImage = this._image;

	if (oImage) {
		oImage.setSrc(sSrc);
		if (oImage instanceof sap.m.Image) {
			oImage.setDensityAware(bIconDensityAware);
		}
	} else {
		oImage = sap.ui.core.IconPool.createControlByURI({
			id: sImgId,
			src : sSrc,
			densityAware : bIconDensityAware
		}, sap.m.Image).setParent(this, null, true);
	}

	if (oImage instanceof sap.m.Image) {
		oImage.addStyleClass(sImgStyle, true);
	} else {
		oImage.addStyleClass(sImgStyle + "Icon", true);
	}

	return (this._image = oImage);
};

// overwrite base method to hook into the active handling
sap.m.StandardListItem.prototype._activeHandlingInheritor = function() {
	var oImage = sap.ui.getCore().byId(this.getId() + "-img");
	if (oImage instanceof sap.ui.core.Icon) {
		oImage.$().toggleClass("sapMSLIIconActive", this._active);
	}

	if (oImage && this.getActiveIcon()) {
		oImage.setSrc(this.getActiveIcon());
	}
};

// overwrite base method to hook into the inactive handling
sap.m.StandardListItem.prototype._inactiveHandlingInheritor = function() {
	var oImage = sap.ui.getCore().byId(this.getId() + "-img");
	if (oImage instanceof sap.ui.core.Icon) {
		oImage.$().toggleClass("sapMSLIIconActive", this._active);
	}

	if (oImage) {
		oImage.setSrc(this.getIcon());
	}
};