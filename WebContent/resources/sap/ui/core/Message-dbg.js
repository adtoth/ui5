/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.core.Message.
sap.ui.define(['./library','./Element','./theming/Parameters'], function() {
	"use strict";


/**
 * Constructor for a new Message.
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
 * <li>{@link #getText text} : string</li>
 * <li>{@link #getTimestamp timestamp} : string</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getLevel level} : sap.ui.core.MessageType (default: sap.ui.core.MessageType.None)</li>
 * <li>{@link #getReadOnly readOnly} : boolean (default: false)</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * This element used to provide messages. Rendering must be done within the control that uses this kind of element.
 * 
 * Its default level is none.
 * @extends sap.ui.core.Element
 *
 * @author SAP AG 
 * @version 1.22.5
 *
 * @constructor   
 * @public
 * @name sap.ui.core.Message
 */
sap.ui.core.Element.extend("sap.ui.core.Message", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"getDefaultIcon"
	],

	// ---- control specific ----
	library : "sap.ui.core",
	properties : {
		"text" : {type : "string", group : "Misc", defaultValue : null},
		"timestamp" : {type : "string", group : "Misc", defaultValue : null},
		"icon" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : null},
		"level" : {type : "sap.ui.core.MessageType", group : "Misc", defaultValue : sap.ui.core.MessageType.None},
		"readOnly" : {type : "boolean", group : "Misc", defaultValue : false}
	}
}});


/**
 * Creates a new subclass of class sap.ui.core.Message with name <code>sClassName</code> 
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
 * @name sap.ui.core.Message.extend
 * @function
 */


/**
 * Getter for property <code>text</code>.
 * Message text
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>text</code>
 * @public
 * @name sap.ui.core.Message#getText
 * @function
 */

/**
 * Setter for property <code>text</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.ui.core.Message} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.core.Message#setText
 * @function
 */


/**
 * Getter for property <code>timestamp</code>.
 * Message's timestamp. It is just a simple String that will be used without any transformation. So the application that uses messages needs to format the timestamp to its own needs.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>timestamp</code>
 * @public
 * @name sap.ui.core.Message#getTimestamp
 * @function
 */

/**
 * Setter for property <code>timestamp</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTimestamp  new value for property <code>timestamp</code>
 * @return {sap.ui.core.Message} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.core.Message#setTimestamp
 * @function
 */


/**
 * Getter for property <code>icon</code>.
 * A possible icon URI of the message
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * @name sap.ui.core.Message#getIcon
 * @function
 */

/**
 * Setter for property <code>icon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.ui.core.Message} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.core.Message#setIcon
 * @function
 */


/**
 * Getter for property <code>level</code>.
 * Setting the message's level.
 *
 * Default value is <code>sap.ui.core.MessageType.None</code>
 *
 * @return {sap.ui.core.MessageType} the value of property <code>level</code>
 * @public
 * @name sap.ui.core.Message#getLevel
 * @function
 */

/**
 * Setter for property <code>level</code>.
 *
 * Default value is <code>sap.ui.core.MessageType.None</code> 
 *
 * @param {sap.ui.core.MessageType} oLevel  new value for property <code>level</code>
 * @return {sap.ui.core.Message} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.core.Message#setLevel
 * @function
 */


/**
 * Getter for property <code>readOnly</code>.
 * Determines whether the message should be read only. This helps the application to handle a message a different way if the application differentiates between read-only and common messages.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>readOnly</code>
 * @public
 * @since 1.19.0
 * @name sap.ui.core.Message#getReadOnly
 * @function
 */

/**
 * Setter for property <code>readOnly</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bReadOnly  new value for property <code>readOnly</code>
 * @return {sap.ui.core.Message} <code>this</code> to allow method chaining
 * @public
 * @since 1.19.0
 * @name sap.ui.core.Message#setReadOnly
 * @function
 */


/**
 * Returns the icon's default URI depending on given size. There are default icons for messages available that can be used this way. If no parameter is given the size will be 16x16 per default. If larger icons are needed the parameter "32x32" might be given.
 *
 * @name sap.ui.core.Message.prototype.getDefaultIcon
 * @function
 * @param {string} 
 *         sSize
 *         If parameter is not set the default icon's size will be 16x16. If parameter is set to "32x32" the icon size will be 32x32.

 * @type sap.ui.core.URI
 * @public
 */


// Start of sap/ui/core/Message.js
/**
 * This file defines behavior for the control,
 */
sap.ui.core.Message.prototype.getDefaultIcon = function(sSize) {
	var sModulePath = jQuery.sap.getModulePath("sap.ui.core", '/');
	var sTheme = "themes/" + sap.ui.getCore().getConfiguration().getTheme();

	var sImagesPath = "/img/message/";
	if (sSize && sSize == "32x32") {
		sImagesPath += "32x32/";
	} else {
		sImagesPath += "16x16/";
	}
	var sUrl = "";

	switch (this.getProperty("level")) {
	case sap.ui.core.MessageType.Error:
		sUrl = sModulePath + sTheme + sImagesPath + "Message_Icon_Error.png";
		break;

	case sap.ui.core.MessageType.Information:
		sUrl = sModulePath + sTheme + sImagesPath
				+ "Message_Icon_Information.png";
		break;

	case sap.ui.core.MessageType.Warning:
		sUrl = sModulePath + sTheme + sImagesPath + "Message_Icon_Warning.png";
		break;

	case sap.ui.core.MessageType.Success:
		sUrl = sModulePath + sTheme + sImagesPath + "Message_Icon_Success.png";
		break;

	case sap.ui.core.MessageType.None:
	default:
		sUrl = this.getProperty("icon");
		break;
	}

	return sUrl;
};

/**
 * See sap.ui.core.Message.compare
 * @public
 */
sap.ui.core.Message.prototype.compareByType = function(oOther) {
	sap.ui.core.Message.compareByType(this, oOther);
};

/**
 * Compares a given message with <strong>this</strong> message. The types of
 * {sap.ui.core.MessageType} is ordered from "Error" > "Warning" > "Success" >
 * "Information" > "None".
 * 
 * @static
 * @public
 * @param {sap.ui.core.Message}
 *            a message to compare with
 * @return {sap.ui.core.int} returns <strong>0</strong> if both messages are at
 *         the same level. <strong>-1</strong> if <strong>this</strong>
 *         message has a lower level. <strong>1</strong> if <strong>this</strong>
 *         message has a higher level.
 */
sap.ui.core.Message.compareByType = function(oMessage1, oMessage2) {
	if (!oMessage1 && !oMessage2) {
		return 0;
	}
	if (oMessage1 && !oMessage2) {
		return 1;
	}
	if (!oMessage1 && oMessage2) {
		return -1;
	}

	var sLvl1 = oMessage1.getLevel();
	var sLvl2 = oMessage2.getLevel();
	var t = sap.ui.core.MessageType;

	if (sLvl1 === sLvl2) {
		return 0;
	}

	switch (sLvl1) {
	case t.Error:
		return 1;

	case t.Warning:
		return sLvl2 === t.Error ? -1 : 1;

	case t.Success:
		return sLvl2 === t.Error || sLvl2 === t.Warning ? -1 : 1;

	case t.Information:
		return sLvl2 === t.None ? 1 : -1;

	case t.None:
		return -1;

	default:
		jQuery.sap.log.error("Comparison error", this);
		return 0;
	}
};

	return sap.ui.core.Message;

}, /* bExport = */ true);
