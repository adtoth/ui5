/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.unified.FileUploader.
jQuery.sap.declare("sap.ui.unified.FileUploader");
jQuery.sap.require("sap.ui.unified.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new FileUploader.
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
 * <li>{@link #getValue value} : string (default: '')</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getUploadUrl uploadUrl} : sap.ui.core.URI (default: '')</li>
 * <li>{@link #getName name} : string</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '')</li>
 * <li>{@link #getUploadOnChange uploadOnChange} : boolean (default: false)</li>
 * <li>{@link #getAdditionalData additionalData} : string</li>
 * <li>{@link #getSameFilenameAllowed sameFilenameAllowed} : boolean (default: false)</li>
 * <li>{@link #getButtonText buttonText} : string</li>
 * <li>{@link #getFileType fileType} : string[]</li>
 * <li>{@link #getMultiple multiple} : boolean (default: false)</li>
 * <li>{@link #getMaximumFileSize maximumFileSize} : float</li>
 * <li>{@link #getMimeType mimeType} : string[]</li>
 * <li>{@link #getSendXHR sendXHR} : boolean (default: false)</li>
 * <li>{@link #getPlaceholder placeholder} : string</li>
 * <li>{@link #getStyle style} : string</li>
 * <li>{@link #getButtonOnly buttonOnly} : boolean (default: false)</li>
 * <li>{@link #getUseMultipart useMultipart} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getParameters parameters} : sap.ui.unified.FileUploaderParameter[]</li>
 * <li>{@link #getHeaderParameters headerParameters} : sap.ui.unified.FileUploaderParameter[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.unified.FileUploader#event:change change} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.unified.FileUploader#event:uploadComplete uploadComplete} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.unified.FileUploader#event:typeMissmatch typeMissmatch} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.unified.FileUploader#event:fileSizeExceed fileSizeExceed} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.unified.FileUploader#event:fileAllowed fileAllowed} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * The framework generates an input field and a button with text "Browse ...". The API supports features such as on change uploads (the upload starts immediately after a file has been selected), file uploads with explicit calls, adjustable control sizes, text display after uploads, or tooltips containing complete file paths.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.22.5
 *
 * @constructor   
 * @public
 * @name sap.ui.unified.FileUploader
 */
sap.ui.core.Control.extend("sap.ui.unified.FileUploader", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"upload"
	],

	// ---- control specific ----
	library : "sap.ui.unified",
	properties : {
		"value" : {type : "string", group : "Data", defaultValue : ''},
		"enabled" : {type : "boolean", group : "Behavior", defaultValue : true},
		"visible" : {type : "boolean", group : "Behavior", defaultValue : true},
		"uploadUrl" : {type : "sap.ui.core.URI", group : "Data", defaultValue : ''},
		"name" : {type : "string", group : "Data", defaultValue : null},
		"width" : {type : "sap.ui.core.CSSSize", group : "Misc", defaultValue : ''},
		"uploadOnChange" : {type : "boolean", group : "Behavior", defaultValue : false},
		"additionalData" : {type : "string", group : "Data", defaultValue : null},
		"sameFilenameAllowed" : {type : "boolean", group : "Behavior", defaultValue : false},
		"buttonText" : {type : "string", group : "Misc", defaultValue : null},
		"fileType" : {type : "string[]", group : "Data", defaultValue : null},
		"multiple" : {type : "boolean", group : "Behavior", defaultValue : false},
		"maximumFileSize" : {type : "float", group : "Data", defaultValue : null},
		"mimeType" : {type : "string[]", group : "Data", defaultValue : null},
		"sendXHR" : {type : "boolean", group : "Behavior", defaultValue : false},
		"placeholder" : {type : "string", group : "Appearance", defaultValue : null},
		"style" : {type : "string", group : "Appearance", defaultValue : null},
		"buttonOnly" : {type : "boolean", group : "Appearance", defaultValue : false},
		"useMultipart" : {type : "boolean", group : "Behavior", defaultValue : true}
	},
	aggregations : {
    	"parameters" : {type : "sap.ui.unified.FileUploaderParameter", multiple : true, singularName : "parameter"}, 
    	"headerParameters" : {type : "sap.ui.unified.FileUploaderParameter", multiple : true, singularName : "headerParameter"}
	},
	events : {
		"change" : {}, 
		"uploadComplete" : {}, 
		"typeMissmatch" : {}, 
		"fileSizeExceed" : {}, 
		"fileAllowed" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.unified.FileUploader with name <code>sClassName</code> 
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
 * @name sap.ui.unified.FileUploader.extend
 * @function
 */

sap.ui.unified.FileUploader.M_EVENTS = {'change':'change','uploadComplete':'uploadComplete','typeMissmatch':'typeMissmatch','fileSizeExceed':'fileSizeExceed','fileAllowed':'fileAllowed'};


/**
 * Getter for property <code>value</code>.
 * Value of the path for file upload.
 *
 * Default value is <code>''</code>
 *
 * @return {string} the value of property <code>value</code>
 * @public
 * @name sap.ui.unified.FileUploader#getValue
 * @function
 */

/**
 * Setter for property <code>value</code>.
 *
 * Default value is <code>''</code> 
 *
 * @param {string} sValue  new value for property <code>value</code>
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.FileUploader#setValue
 * @function
 */


/**
 * Getter for property <code>enabled</code>.
 * Disabled controls have different colors, depending on customer settings.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * @name sap.ui.unified.FileUploader#getEnabled
 * @function
 */

/**
 * Setter for property <code>enabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.FileUploader#setEnabled
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
 * @name sap.ui.unified.FileUploader#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.FileUploader#setVisible
 * @function
 */


/**
 * Getter for property <code>uploadUrl</code>.
 * Used when URL address is on a remote server.
 *
 * Default value is <code>''</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>uploadUrl</code>
 * @public
 * @name sap.ui.unified.FileUploader#getUploadUrl
 * @function
 */

/**
 * Setter for property <code>uploadUrl</code>.
 *
 * Default value is <code>''</code> 
 *
 * @param {sap.ui.core.URI} sUploadUrl  new value for property <code>uploadUrl</code>
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.FileUploader#setUploadUrl
 * @function
 */


/**
 * Getter for property <code>name</code>.
 * Unique control name for identification on the server side after sending data to the server.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>name</code>
 * @public
 * @name sap.ui.unified.FileUploader#getName
 * @function
 */

/**
 * Setter for property <code>name</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sName  new value for property <code>name</code>
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.FileUploader#setName
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * Specifies the displayed control width.
 *
 * Default value is <code>''</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.ui.unified.FileUploader#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>''</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.FileUploader#setWidth
 * @function
 */


/**
 * Getter for property <code>uploadOnChange</code>.
 * If set to "true", the upload immediately starts after file selection. With the default setting, the upload needs to be explicitly triggered.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>uploadOnChange</code>
 * @public
 * @name sap.ui.unified.FileUploader#getUploadOnChange
 * @function
 */

/**
 * Setter for property <code>uploadOnChange</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bUploadOnChange  new value for property <code>uploadOnChange</code>
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.FileUploader#setUploadOnChange
 * @function
 */


/**
 * Getter for property <code>additionalData</code>.
 * Additional data that is sent to the back end service. Data will be transmitted as value of a hidden input where the name is derived from the name property with suffix -data.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>additionalData</code>
 * @public
 * @name sap.ui.unified.FileUploader#getAdditionalData
 * @function
 */

/**
 * Setter for property <code>additionalData</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sAdditionalData  new value for property <code>additionalData</code>
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.FileUploader#setAdditionalData
 * @function
 */


/**
 * Getter for property <code>sameFilenameAllowed</code>.
 * If the FileUploader is configured to upload the file directly after the file is selected it is not allowed to upload a file with the same name again. If a user should be allowed to upload a file with the same name again this parameter has to be "true". A typical use case would be if the files have different paths.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>sameFilenameAllowed</code>
 * @public
 * @name sap.ui.unified.FileUploader#getSameFilenameAllowed
 * @function
 */

/**
 * Setter for property <code>sameFilenameAllowed</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bSameFilenameAllowed  new value for property <code>sameFilenameAllowed</code>
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.FileUploader#setSameFilenameAllowed
 * @function
 */


/**
 * Getter for property <code>buttonText</code>.
 * The Button text can be overwritten using this property.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>buttonText</code>
 * @public
 * @name sap.ui.unified.FileUploader#getButtonText
 * @function
 */

/**
 * Setter for property <code>buttonText</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sButtonText  new value for property <code>buttonText</code>
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.FileUploader#setButtonText
 * @function
 */


/**
 * Getter for property <code>fileType</code>.
 * The chosen files will be checked against an array of file types. This property can be defined as a array of file endings to be checked against. If at least one file does not fit the file type restriction the upload is prevented. Example: fileType: "jpg,png,txt".
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string[]} the value of property <code>fileType</code>
 * @public
 * @name sap.ui.unified.FileUploader#getFileType
 * @function
 */

/**
 * Setter for property <code>fileType</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string[]} aFileType  new value for property <code>fileType</code>
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.FileUploader#setFileType
 * @function
 */


/**
 * Getter for property <code>multiple</code>.
 * Allows multiple files to be chosen and uploaded from the same folder. This property is not supported by Internet Explorer 8 and 9.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>multiple</code>
 * @public
 * @name sap.ui.unified.FileUploader#getMultiple
 * @function
 */

/**
 * Setter for property <code>multiple</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bMultiple  new value for property <code>multiple</code>
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.FileUploader#setMultiple
 * @function
 */


/**
 * Getter for property <code>maximumFileSize</code>.
 * A file size limit in megabytes which prevents the upload if at least one file exceeds it. This property is not supported by Internet Explorer 8 and 9.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {float} the value of property <code>maximumFileSize</code>
 * @public
 * @name sap.ui.unified.FileUploader#getMaximumFileSize
 * @function
 */

/**
 * Setter for property <code>maximumFileSize</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {float} fMaximumFileSize  new value for property <code>maximumFileSize</code>
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.FileUploader#setMaximumFileSize
 * @function
 */


/**
 * Getter for property <code>mimeType</code>.
 * The chosen files will be checked against an array of mime types. This property can be defined as a array of mime types to be checked against. If at least one file does not fit the mime type restriction the upload is prevented. This property is not supported by Internet Explorer 8 and 9. Example: fileType: "image,text". It is also possible to be more specific and set "image/png".
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string[]} the value of property <code>mimeType</code>
 * @public
 * @name sap.ui.unified.FileUploader#getMimeType
 * @function
 */

/**
 * Setter for property <code>mimeType</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string[]} aMimeType  new value for property <code>mimeType</code>
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.FileUploader#setMimeType
 * @function
 */


/**
 * Getter for property <code>sendXHR</code>.
 * If set to "true", the request will be sent as XHR request instead of a form submit. This property is not supported by Internet Explorer 8 and 9.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>sendXHR</code>
 * @public
 * @name sap.ui.unified.FileUploader#getSendXHR
 * @function
 */

/**
 * Setter for property <code>sendXHR</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bSendXHR  new value for property <code>sendXHR</code>
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.FileUploader#setSendXHR
 * @function
 */


/**
 * Getter for property <code>placeholder</code>.
 * Placeholder for the text field.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>placeholder</code>
 * @public
 * @name sap.ui.unified.FileUploader#getPlaceholder
 * @function
 */

/**
 * Setter for property <code>placeholder</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sPlaceholder  new value for property <code>placeholder</code>
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.FileUploader#setPlaceholder
 * @function
 */


/**
 * Getter for property <code>style</code>.
 * Style of the button. "Accept", "Reject", or "Emphasized" is allowed.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>style</code>
 * @public
 * @name sap.ui.unified.FileUploader#getStyle
 * @function
 */

/**
 * Setter for property <code>style</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sStyle  new value for property <code>style</code>
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.FileUploader#setStyle
 * @function
 */


/**
 * Getter for property <code>buttonOnly</code>.
 * If set to "true", the FileUploader will be rendered as Button only, without showing the InputField.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>buttonOnly</code>
 * @public
 * @name sap.ui.unified.FileUploader#getButtonOnly
 * @function
 */

/**
 * Setter for property <code>buttonOnly</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bButtonOnly  new value for property <code>buttonOnly</code>
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.FileUploader#setButtonOnly
 * @function
 */


/**
 * Getter for property <code>useMultipart</code>.
 * If set to "false", the request will be sent as file only request instead of a multipart/form-data request. Only one file could be uploaded using this type of request. Required for sending such a request is to set the property "sendXHR" to "true". This property is not supported by Internet Explorer 8 and 9.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>useMultipart</code>
 * @public
 * @name sap.ui.unified.FileUploader#getUseMultipart
 * @function
 */

/**
 * Setter for property <code>useMultipart</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bUseMultipart  new value for property <code>useMultipart</code>
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.FileUploader#setUseMultipart
 * @function
 */


/**
 * Getter for aggregation <code>parameters</code>.<br/>
 * The parameters for the FileUploader which are rendered as a hidden inputfield.
 * 
 * @return {sap.ui.unified.FileUploaderParameter[]}
 * @public
 * @since 1.12.2
 * @name sap.ui.unified.FileUploader#getParameters
 * @function
 */


/**
 * Inserts a parameter into the aggregation named <code>parameters</code>.
 *
 * @param {sap.ui.unified.FileUploaderParameter}
 *          oParameter the parameter to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the parameter should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the parameter is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the parameter is inserted at 
 *             the last position        
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * @since 1.12.2
 * @name sap.ui.unified.FileUploader#insertParameter
 * @function
 */

/**
 * Adds some parameter <code>oParameter</code> 
 * to the aggregation named <code>parameters</code>.
 *
 * @param {sap.ui.unified.FileUploaderParameter}
 *            oParameter the parameter to add; if empty, nothing is inserted
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * @since 1.12.2
 * @name sap.ui.unified.FileUploader#addParameter
 * @function
 */

/**
 * Removes an parameter from the aggregation named <code>parameters</code>.
 *
 * @param {int | string | sap.ui.unified.FileUploaderParameter} vParameter the parameter to remove or its index or id
 * @return {sap.ui.unified.FileUploaderParameter} the removed parameter or null
 * @public
 * @since 1.12.2
 * @name sap.ui.unified.FileUploader#removeParameter
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>parameters</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.unified.FileUploaderParameter[]} an array of the removed elements (might be empty)
 * @public
 * @since 1.12.2
 * @name sap.ui.unified.FileUploader#removeAllParameters
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.unified.FileUploaderParameter</code> in the aggregation named <code>parameters</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.unified.FileUploaderParameter}
 *            oParameter the parameter whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @since 1.12.2
 * @name sap.ui.unified.FileUploader#indexOfParameter
 * @function
 */
	

/**
 * Destroys all the parameters in the aggregation 
 * named <code>parameters</code>.
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * @since 1.12.2
 * @name sap.ui.unified.FileUploader#destroyParameters
 * @function
 */


/**
 * Getter for aggregation <code>headerParameters</code>.<br/>
 * The header parameters for the FileUploader which are only submitted with XHR requests. Header parameters are not supported by Internet Explorer 8 and 9.
 * 
 * @return {sap.ui.unified.FileUploaderParameter[]}
 * @public
 * @name sap.ui.unified.FileUploader#getHeaderParameters
 * @function
 */


/**
 * Inserts a headerParameter into the aggregation named <code>headerParameters</code>.
 *
 * @param {sap.ui.unified.FileUploaderParameter}
 *          oHeaderParameter the headerParameter to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the headerParameter should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the headerParameter is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the headerParameter is inserted at 
 *             the last position        
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.FileUploader#insertHeaderParameter
 * @function
 */

/**
 * Adds some headerParameter <code>oHeaderParameter</code> 
 * to the aggregation named <code>headerParameters</code>.
 *
 * @param {sap.ui.unified.FileUploaderParameter}
 *            oHeaderParameter the headerParameter to add; if empty, nothing is inserted
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.FileUploader#addHeaderParameter
 * @function
 */

/**
 * Removes an headerParameter from the aggregation named <code>headerParameters</code>.
 *
 * @param {int | string | sap.ui.unified.FileUploaderParameter} vHeaderParameter the headerParameter to remove or its index or id
 * @return {sap.ui.unified.FileUploaderParameter} the removed headerParameter or null
 * @public
 * @name sap.ui.unified.FileUploader#removeHeaderParameter
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>headerParameters</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.unified.FileUploaderParameter[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.unified.FileUploader#removeAllHeaderParameters
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.unified.FileUploaderParameter</code> in the aggregation named <code>headerParameters</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.unified.FileUploaderParameter}
 *            oHeaderParameter the headerParameter whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.unified.FileUploader#indexOfHeaderParameter
 * @function
 */
	

/**
 * Destroys all the headerParameters in the aggregation 
 * named <code>headerParameters</code>.
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.FileUploader#destroyHeaderParameters
 * @function
 */


/**
 * Event is fired when the value of the file path has been changed. 
 *
 * @name sap.ui.unified.FileUploader#change
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.newValue New file path value.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'change' event of this <code>sap.ui.unified.FileUploader</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.unified.FileUploader</code>.<br/> itself. 
 *  
 * Event is fired when the value of the file path has been changed. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.FileUploader</code>.<br/> itself.
 *
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.FileUploader#attachChange
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'change' event of this <code>sap.ui.unified.FileUploader</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.FileUploader#detachChange
 * @function
 */

/**
 * Fire event change to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'newValue' of type <code>string</code> New file path value.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.unified.FileUploader#fireChange
 * @function
 */


/**
 * Event is fired when the upload of the file is completed. However this covers only the client side of the Upload process and does not give any success status from the server. 
 *
 * @name sap.ui.unified.FileUploader#uploadComplete
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.response Response message which comes from the server. On the server side this response has to be put within the &quot;body&quot; tags of the response document of the iFrame. It can consist of a return code and an optional message. This does not work in cross-domain scenarios.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'uploadComplete' event of this <code>sap.ui.unified.FileUploader</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.unified.FileUploader</code>.<br/> itself. 
 *  
 * Event is fired when the upload of the file is completed. However this covers only the client side of the Upload process and does not give any success status from the server. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.FileUploader</code>.<br/> itself.
 *
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.FileUploader#attachUploadComplete
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'uploadComplete' event of this <code>sap.ui.unified.FileUploader</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.FileUploader#detachUploadComplete
 * @function
 */

/**
 * Fire event uploadComplete to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'response' of type <code>string</code> Response message which comes from the server. On the server side this response has to be put within the &quot;body&quot; tags of the response document of the iFrame. It can consist of a return code and an optional message. This does not work in cross-domain scenarios.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.unified.FileUploader#fireUploadComplete
 * @function
 */


/**
 * Event is fired when the type of a file does not match the mimeType or fileType property. 
 *
 * @name sap.ui.unified.FileUploader#typeMissmatch
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.fileName The name of a file to be uploaded.
 * @param {string} oControlEvent.getParameters.fileType The file ending of a file to be uploaded.
 * @param {string} oControlEvent.getParameters.mimeType The MIME type of a file to be uploaded.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'typeMissmatch' event of this <code>sap.ui.unified.FileUploader</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.unified.FileUploader</code>.<br/> itself. 
 *  
 * Event is fired when the type of a file does not match the mimeType or fileType property. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.FileUploader</code>.<br/> itself.
 *
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.FileUploader#attachTypeMissmatch
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'typeMissmatch' event of this <code>sap.ui.unified.FileUploader</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.FileUploader#detachTypeMissmatch
 * @function
 */

/**
 * Fire event typeMissmatch to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'fileName' of type <code>string</code> The name of a file to be uploaded.</li>
 * <li>'fileType' of type <code>string</code> The file ending of a file to be uploaded.</li>
 * <li>'mimeType' of type <code>string</code> The MIME type of a file to be uploaded.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.unified.FileUploader#fireTypeMissmatch
 * @function
 */


/**
 * Event is fired when the size of a file is above the maximumFileSize property. 
 *
 * @name sap.ui.unified.FileUploader#fileSizeExceed
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.fileName The name of a file to be uploaded.
 * @param {string} oControlEvent.getParameters.fileSize The size in MB of a file to be uploaded.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'fileSizeExceed' event of this <code>sap.ui.unified.FileUploader</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.unified.FileUploader</code>.<br/> itself. 
 *  
 * Event is fired when the size of a file is above the maximumFileSize property. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.FileUploader</code>.<br/> itself.
 *
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.FileUploader#attachFileSizeExceed
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'fileSizeExceed' event of this <code>sap.ui.unified.FileUploader</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.FileUploader#detachFileSizeExceed
 * @function
 */

/**
 * Fire event fileSizeExceed to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'fileName' of type <code>string</code> The name of a file to be uploaded.</li>
 * <li>'fileSize' of type <code>string</code> The size in MB of a file to be uploaded.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.unified.FileUploader#fireFileSizeExceed
 * @function
 */


/**
 * Event is fired when the file is allowed for upload on client side. 
 *
 * @name sap.ui.unified.FileUploader#fileAllowed
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'fileAllowed' event of this <code>sap.ui.unified.FileUploader</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.unified.FileUploader</code>.<br/> itself. 
 *  
 * Event is fired when the file is allowed for upload on client side. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.FileUploader</code>.<br/> itself.
 *
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.FileUploader#attachFileAllowed
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'fileAllowed' event of this <code>sap.ui.unified.FileUploader</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.FileUploader#detachFileAllowed
 * @function
 */

/**
 * Fire event fileAllowed to attached listeners.
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.unified.FileUploader} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.unified.FileUploader#fireFileAllowed
 * @function
 */


/**
 * Starts the upload (as defined by uploadUrl)
 *
 * @name sap.ui.unified.FileUploader.prototype.upload
 * @function

 * @type void
 * @public
 */


// Start of sap\ui\unified\FileUploader.js
/**
 * Initializes the control.
 * It is called from the constructor.
 * @private
 */
sap.ui.unified.FileUploader.prototype.init = function(){

	// works fine with applySettings() after init() - most things are done in onAfterRendering
	// IE8 should render a native file uploader and the SAPUI5 controls should be exactly behind
	if (!!sap.ui.Device.browser.internet_explorer && sap.ui.Device.browser.version == 8) {
		this.oFilePath = new sap.ui.commons.TextField(this.getId() + "-fu_input",
													{width: "225px"});
	} else {
		this.oFilePath = sap.ui.unified.FileUploaderHelper.createTextField(this.getId() + "-fu_input");
	}
	this.oFilePath.setParent(this);
	if (this.getButtonText()) {
		var sButtonText = this.getButtonText();
	} else {
		var sButtonText = this.getBrowseText();
	}

	if (!!sap.ui.Device.browser.internet_explorer && sap.ui.Device.browser.version == 8) {
		this.oBrowse = new sap.ui.commons.Button({enabled : this.getEnabled(),
													text: sButtonText,
													width: "0px",
													height: "0px"});
	} else {
		this.oBrowse = sap.ui.unified.FileUploaderHelper.createButton();
	}
	this.oBrowse.setParent(this);
	this.oFileUpload = null;

//	var that = this;
//	var oDelegate = {
//		onfocusin : function(){
//			var jFO = jQuery.sap.byId(that.getId() + "-fu");
//			if(jFO.length > 0){
//				jFO[0].focus();
//			}
//		}
//	};
//	this.oFilePath.addDelegate(oDelegate);
//	this.oBrowse.addDelegate(oDelegate);

};

sap.ui.unified.FileUploader.prototype.getIdForLabel = function () {
	return this.oBrowse.getId();
};

/**
 * Terminates the control when it has been destroyed.
 * @private
 */
sap.ui.unified.FileUploader.prototype.exit = function(){

	// destroy the nested controls
	this.oFilePath.destroy();
	this.oBrowse.destroy();

	// remove the IFRAME
	if (this.oIFrameRef) {
		jQuery(this.oIFrameRef).unbind();
		sap.ui.getCore().getStaticAreaRef().removeChild(this.oIFrameRef);
		this.oIFrameRef = null;
	}

};

/**
 * Clean up event listeners before rendering
 * @private
 */
sap.ui.unified.FileUploader.prototype.onBeforeRendering = function() {

	this._runOnce = false;

	if (this.getButtonText()) {
		this.oBrowse.setText(this.getButtonText());
	} else {
		this.oBrowse.setText(this.getBrowseText());
	}

	// store the file uploader outside in the static area
	var oStaticArea = sap.ui.getCore().getStaticAreaRef();
	jQuery(this.oFileUpload).appendTo(oStaticArea);

	// unbind the custom event handlers in case of IE8
	jQuery(this.oFileUpload).unbind();

};

/**
 * Prepare the upload processing, establish the change handler for the
 * pure html input object.
 * @private
 */
sap.ui.unified.FileUploader.prototype.onAfterRendering = function() {

	// prepare the file upload control and the upload iframe
	this.prepareFileUploadAndIFrame();

	// event listener registration for change event in IE8 because the change
	// event is not bubbling for IE8 => so we do this for all browsers!
	jQuery(this.oFileUpload).change(jQuery.proxy(this.handlechange, this));

	// IE8 should render a native file uploader and don't need the witdh calculation
	if ((!!sap.ui.Device.browser.internet_explorer && sap.ui.Device.browser.version <= 8)) {
		this.oBrowse.getDomRef().style.padding = "0px";
		this.oBrowse.getDomRef().style.visibility = "hidden";
		this.oFilePath.getDomRef().style.height = "20px";
		this.oFilePath.getDomRef().style.visibility = "hidden";
		jQuery(this.oFilePath.getDomRef()).removeClass('sapUiTfBrd');
	} else {
		this.oFilePath.$().attr("tabindex", "-1");
		// in case of IE9 we prevent the browse button from being focused because the
		// native file uploader requires the focus for catching the keyboard events
		if ((!!sap.ui.Device.browser.internet_explorer && sap.ui.Device.browser.version == 9)) {
			this.oBrowse.$().attr("tabindex", "-1");
		}
		// calculation of the width of the overlay for the original file upload
		// !!!sap.ui.Device.browser.internet_explorer check: only for non IE browsers since there we need
		// the button in front of the fileuploader
		if (this.getWidth()) {

			if (!this._runOnce) {
				this._runOnce = true;
				jQuery.sap.delayedCall(50, this, function(){
					this.onAfterRendering();
				});
			} else {
				if(this.getButtonOnly()) {
					this.oBrowse.getDomRef().style.width = this.getWidth();
				} else {
					// Recalculate the textfield width...
					this._resizeDomElements();
				}
			}
		}
	}
};

/**
 * Returns the DOM element that should be focused when focus is set onto the control.
 */
sap.ui.unified.FileUploader.prototype.getFocusDomRef = function() {
	return this.$("fu").get(0);
};

sap.ui.unified.FileUploader.prototype._resizeDomElements = function() {
	var sId = this.getId();
	this._oBrowseDomRef = this.oBrowse.getDomRef();
	var $b = jQuery(this._oBrowseDomRef);
	var _buttonWidth = $b.parent().outerWidth(true);
	this._oFilePathDomRef = this.oFilePath.getDomRef();
	var oDomRef = this._oFilePathDomRef;
	var sWidth = this.getWidth();

	if (sWidth.substr(-1) == "%") {
		// Special case - if the width is not in px, we only change the top element

		// Resize all elements from the input field up to the control element itself.
		while (oDomRef.id != sId) {
			oDomRef.style.width = "100%";
			oDomRef = oDomRef.parentNode;
		}

		oDomRef.style.width = sWidth;
	} else {
		oDomRef.style.width = sWidth;

		// Now make sure the field including the button has the correct size
		var $fp = jQuery(this._oFilePathDomRef);
		var _newWidth = $fp.outerWidth() - _buttonWidth;
		if (_newWidth < 0) {
			this.oFilePath.getDomRef().style.width = "0px";
			if (!!!sap.ui.Device.browser.internet_explorer) {
				this.oFileUpload.style.width = $b.outerWidth(true);
			}
		} else {
			this.oFilePath.getDomRef().style.width = _newWidth + "px";
		}
	}
}

sap.ui.unified.FileUploader.prototype.onresize = function() {
	this.onAfterRendering();
}

sap.ui.unified.FileUploader.prototype.onThemeChanged = function() {
	this.onAfterRendering();
}

sap.ui.unified.FileUploader.prototype.setEnabled = function(bEnabled){
	this.setProperty("enabled", bEnabled, true);
	this.oFilePath.setEnabled(bEnabled);
	this.oBrowse.setEnabled(bEnabled);
	if (bEnabled) {
		this.$("fu").removeAttr('disabled');
	} else {
		this.$("fu").attr('disabled', 'disabled');
	}
	return this;
};


sap.ui.unified.FileUploader.prototype.setUploadUrl = function(sValue, bFireEvent) {
	this.setProperty("uploadUrl", sValue, true);
	var $uploadForm = this.$("fu_form");
	$uploadForm.attr("action", this.getUploadUrl());
	return this;
};

sap.ui.unified.FileUploader.prototype.setPlaceholder = function(sPlaceholder) {
	this.setProperty("placeholder", sPlaceholder, true);
	this.oFilePath.setPlaceholder(sPlaceholder);
	return this;
};

sap.ui.unified.FileUploader.prototype.setStyle = function(sStyle) {
	this.setProperty("style", sStyle, true);
	if (this.oBrowse.setType) {
		this.oBrowse.setType(sStyle);
	} else {
		if (sStyle == "Emphasized") {
			sStyle = "Emph";
		}
		this.oBrowse.setStyle(sStyle);
	}
	return this;
};

sap.ui.unified.FileUploader.prototype.setValue = function(sValue, bFireEvent) {
	var oldValue = this.getValue();
	if((oldValue != sValue) || this.getSameFilenameAllowed()) {
		// only upload when a valid value is set
		var bUpload = this.getUploadOnChange() && sValue;
		// when we do not upload we re-render (cause some browsers don't like
		// to change the value of file uploader INPUT elements)
		this.setProperty("value", sValue, bUpload);
		if (this.oFilePath) {
			this.oFilePath.setValue(sValue);
			if (!(!!sap.ui.Device.browser.internet_explorer && sap.ui.Device.browser.version == 8) && this.oFilePath.getFocusDomRef()) {
				this.oFilePath.getFocusDomRef().focus();
			}
		}
		var oForm = this.getDomRef("fu_form");
		if (this.oFileUpload && /* is visible: */ oForm && !sValue) {
			// some browsers do not allow to clear the value of the fileuploader control
			// therefore we utilize the form and reset the values inside this form and
			// apply the additionalData again afterwards
			oForm.reset();
			if (sap.ui.Device.browser.chrome) {
				// Chrome needs the value to be cleared this way since the form reset leads
				// to showing the old value while nothing is uploaded. This specifically 
				// happens when the focus changes due to the change event in between.
				this.getDomRef("fu_input").value = "";
			}
			this.$("fu_data").val(this.getAdditionalData());
		}
		// only fire event when triggered by user interaction
		if (bFireEvent) {
			this.fireChange({id:this.getId(), newValue:sValue});
		}
		if (bUpload) {
			this.upload();
		}
	}
	return this;
};

sap.ui.unified.FileUploader.prototype.onmouseover = function () {
	jQuery(this.oBrowse.getDomRef()).addClass('sapUiBtnStdHover');
};

sap.ui.unified.FileUploader.prototype.onmouseout = function () {
	jQuery(this.oBrowse.getDomRef()).removeClass('sapUiBtnStdHover');
};

sap.ui.unified.FileUploader.prototype.onfocusin = function () {
	jQuery(this.oBrowse.getDomRef()).addClass('sapUiBtnStdHover');
};

sap.ui.unified.FileUploader.prototype.onfocusout = function () {
	jQuery(this.oBrowse.getDomRef()).removeClass('sapUiBtnStdHover');
};

sap.ui.unified.FileUploader.prototype.setAdditionalData = function(sAdditionalData) {
	// set the additional data in the hidden input
	this.setProperty("additionalData", sAdditionalData, true);
	var oAdditionalData = this.getDomRef("fu_data");
	if (oAdditionalData) {
		var sAdditionalData = this.getAdditionalData() || "";
		oAdditionalData.value = sAdditionalData;
	}
	return this;
};

sap.ui.unified.FileUploader.prototype.upload = function() {

	var uploadForm = this.getDomRef("fu_form");

	try {
		if (uploadForm) {
			this._bUploading = true;
			if (this.getSendXHR() && window.File) {
				var oFiles = jQuery.sap.domById(this.getId() + "-fu").files;
				if (oFiles.length > 0) {
					var xhr = new window.XMLHttpRequest();
					xhr.open("POST", this.getUploadUrl(), true);
					if (this.getHeaderParameters()) {
						var oHeaderParams = this.getHeaderParameters();
						for (var i = 0; i < oHeaderParams.length; i++) {
							var sHeader = oHeaderParams[i].getName();
							var sValue = oHeaderParams[i].getValue();
							xhr.setRequestHeader(sHeader, sValue);
						}
					}
					if (this.getUseMultipart()) {
						var formData = new window.FormData();
						var name = jQuery.sap.domById(this.getId() + "-fu").name;
						for (var i = 0; i < oFiles.length; i++) {
							formData.append(name, oFiles[i]);
						}
						formData.append("_charset_", "UTF-8");
						var data = jQuery.sap.domById(this.getId() + "-fu_data").name;
						if (this.getAdditionalData()) {
							var sData = this.getAdditionalData();
							formData.append(data, sData);
						} else {
							formData.append(data, "");
						}
						if (this.getParameters()) {
							var oParams = this.getParameters();
							for (var i = 0; i < oParams.length; i++) {
								var sName = oParams[i].getName();
								var sValue = oParams[i].getValue();
								formData.append(sName, sValue);
							}
						}
						xhr.send(formData);
					} else {
						xhr.send(oFiles[0]);
					}
					var that = this;
					xhr.onreadystatechange = function() {
						if (xhr.readyState == 4) {
							var sResponse;
							sResponse = xhr.responseXML.documentElement.textContent;
							that.fireUploadComplete({"response": sResponse});
							that._bUploading = false;
						}
					}
					this._bUploading = false;
				}
			} else {
				uploadForm.submit();
			}
			jQuery.sap.log.info("File uploading to " + this.getUploadUrl());
			if (this.getSameFilenameAllowed() && this.getUploadOnChange()) {
				this.setValue("", true);
			}
		}
	} catch(oException) {
		jQuery.sap.log.error("File upload failed:\n" + oException.message);
	}
};

sap.ui.unified.FileUploader.prototype.onkeypress = function(oEvent) {
	this.onkeydown(oEvent);
};

sap.ui.unified.FileUploader.prototype.onclick = function(oEvent) {
	if (this.getSameFilenameAllowed()) {
		this.setValue("", true);
	}
};

//
//Event Handling
//
sap.ui.unified.FileUploader.prototype.onkeydown = function(oEvent) {
	if (!this.getEnabled()) {
		return;
	}
	if (this.getSameFilenameAllowed()) {
		this.setValue("", true);
	}
	var iKeyCode = oEvent.keyCode,
		eKC = jQuery.sap.KeyCodes;
	if (iKeyCode == eKC.DELETE || iKeyCode == eKC.BACKSPACE) {
		if (this.oFileUpload) {
			this.setValue("", true);
		}
	} else if (iKeyCode == eKC.SPACE || iKeyCode == eKC.ENTER) {
		// this does not work for IE9 and downwards! TODO: check with IE10/11
		// consider to always put the focus on the hidden file uploader
		// and let the fileuploader manager the keyboard interaction
		if (!(!!sap.ui.Device.browser.internet_explorer && sap.ui.Device.browser.version <= 9) && this.oFileUpload) {
			this.oFileUpload.click();
			oEvent.preventDefault();
			oEvent.stopPropagation();
		}
	} else if (iKeyCode != eKC.TAB &&
				iKeyCode != eKC.SHIFT &&
				iKeyCode != eKC.F6) {
		oEvent.preventDefault();
		oEvent.stopPropagation();
	}
};

sap.ui.unified.FileUploader.prototype.handlechange = function(oEvent) {
	if (this.oFileUpload && this.getEnabled()) {

		var fMaxSize = this.getMaximumFileSize();
		var sFileType = this.getFileType();
		var sMimeType = this.getMimeType();
		var sFileString = '';

		if (window.File) {
			var oFiles = oEvent.target.files;

			for (var i = 0; i < oFiles.length; i++) {
				var iCount = i + 1;
				var sName = oFiles[i].name;
				var sType = oFiles[i].type;
				if (!sType) {
					sType = "unknown";
				}
				var fSize = ((oFiles[i].size/1024)/1024);
				if (fMaxSize && (fSize > fMaxSize)) {
					jQuery.sap.log.info("File: " + sName + " is of size " + fSize + " MB which exceeds the file size limit of " + fMaxSize + " MB.");
					this.fireFileSizeExceed({
						fileName:sName,
						fileSize:fSize
					});
					return;
				}
				if (sMimeType) {
					var bWrongMime = true;
					var aMimeCheck = sMimeType.split(",");
					for (var j = 0; j < aMimeCheck.length; j++) {
						if (sType.match(aMimeCheck[j])) {
							bWrongMime = false;
						}
					}
					if (bWrongMime) {
						jQuery.sap.log.info("File: " + sName + " is of type " + sType + " .Allowed types are: "  + sMimeType + ".");
						this.fireTypeMissmatch({
							fileName:sName,
							fileType:sType
						});
						return;
					}
				}
				if (sFileType) {
					var bWrongType = true;
					var aTypeCheck = sFileType.split(",");
					var iIdx = sName.lastIndexOf(".");
					var sFileEnding = sName.substring(iIdx + 1);
					for (var k = 0; k < aTypeCheck.length; k++) {
						if (sFileEnding == aTypeCheck[k]) {
							bWrongType = false;
						}
					}
					if (bWrongType) {
						jQuery.sap.log.info("File: " + sName + " is of type " + sFileEnding + " .Allowed types are: "  + sFileType + ".");
						this.fireTypeMissmatch({
							fileName:sName,
							fileType:sFileEnding
						});
						return;
					}
				}
				sFileString = sFileString + '"' + oFiles[i].name + '" ';
			}
			if (sFileString) {
				this.fireFileAllowed();
			}
		} else if (sFileType) {
			var bWrongType = true;
			var aTypeCheck = sFileType.split(",");
			var sName = this.oFileUpload.value || "";
			var iIdx = sName.lastIndexOf(".");
			var sFileEnding = sName.substring(iIdx + 1);
			for (var k = 0; k < aTypeCheck.length; k++) {
				if (sFileEnding == aTypeCheck[k]) {
					bWrongType = false;
				}
			}
			if (bWrongType) {
				jQuery.sap.log.info("File: " + sName + " is of type " + sFileEnding + " .Allowed types are: "  + sFileType + ".");
				this.fireTypeMissmatch({
					fileName:sName,
					fileType:sFileEnding
				});
				return;
			}
			if (sName) {
				this.fireFileAllowed();
			}
		}

		// due to new security mechanism modern browsers simply
		// append a fakepath in front of the filename instead of
		// returning the filename only - we strip this path now
		var sValue = this.oFileUpload.value || "";
		var iIndex = sValue.lastIndexOf("\\");
		if (iIndex >= 0) {
			sValue = sValue.substring(iIndex + 1);
		}
		if (this.getMultiple() && !sap.ui.Device.browser.internet_explorer) {
			sValue = sFileString;
		}

		//sValue has to be filled to avoid clearing the FilePath by pressing cancel
		if (sValue || sap.ui.Device.browser.chrome) { // in Chrome the file path has to be cleared as the upload will be avoided
			this.setValue(sValue, true);
		}
	}
};

//
//	Private
//
/**
 * Helper to retrieve the I18N texts for a button
 * @private
 */
sap.ui.unified.FileUploader.prototype.getBrowseText = function() {
	var rb = sap.ui.getCore().getLibraryResourceBundle("sap.ui.unified");
	var sText = undefined;
	if (rb) {
		sText = rb.getText("FILEUPLOAD_BROWSE");
	}
	return sText ? sText : "Browse...";
};

/**
 * Setter for property <code>value</code>.<br/>
 * Default value is: <code>''</code><br/><br/>
 * @param sValue {string}
 * @private
 * @deprecated the value now is the short value (filename only)!
 */
sap.ui.unified.FileUploader.prototype.getShortenValue = function() {
	return this.getValue();
};

/**
 * Prepares the hidden IFrame for uploading the file (in static area).
 * @private
 */
sap.ui.unified.FileUploader.prototype.prepareFileUploadAndIFrame = function() {

	if (!this.oFileUpload) {

		// create the file uploader markup
		var aFileUpload = [];
		aFileUpload.push('<input ');
		aFileUpload.push('type="file" ');
		if (this.getName()) {
			if (this.getMultiple() && !sap.ui.Device.browser.internet_explorer) {
				aFileUpload.push('name="' + this.getName() + '[]" ');
			} else {
				aFileUpload.push('name="' + this.getName() + '" ');
			}
		} else {
			if (this.getMultiple() && !sap.ui.Device.browser.internet_explorer) {
				aFileUpload.push('name="' + this.getId() + '[]" ');
			} else {
				aFileUpload.push('name="' + this.getId() + '" ');
			}
		}
		aFileUpload.push('id="' + this.getId() + '-fu" ');
		if (!(!!sap.ui.Device.browser.internet_explorer && sap.ui.Device.browser.version == 8)) {
			// for IE9 the file uploader itself gets the focus to make sure that the
			// keyboard interaction works and there is no security issue - unfortunately
			// this has the negative side effect that 2 tabs are required.
			if (!(!!sap.ui.Device.browser.internet_explorer && sap.ui.Device.browser.version == 9)) {
				aFileUpload.push('tabindex="-1" ');
			}
			aFileUpload.push('size="1" ');
		}
		if (this.getTooltip_AsString() ) {
			aFileUpload.push('title="' + jQuery.sap.escapeHTML(this.getTooltip_AsString()) + '" ');
		} else if (this.getTooltip() ) {
			// object tooltip, do nothing - tooltip will be displayed
		} else if (this.getValue() != "") {
			// only if there is no tooltip, then set value as fallback
			aFileUpload.push('title="' + jQuery.sap.escapeHTML(this.getValue()) + '" ');
		}
		if (!this.getEnabled()) {
			aFileUpload.push('disabled="disabled" ');
		}
		if (this.getMultiple() && !sap.ui.Device.browser.internet_explorer) {
			aFileUpload.push('multiple ');
		}
		aFileUpload.push('>');

		// add it into the control markup
		this.oFileUpload = jQuery(aFileUpload.join("")).prependTo(this.$().find(".sapUiFupInputMask")).get(0);

	} else {

		// move the file uploader from the static area to the control markup
		jQuery(this.oFileUpload).prependTo(this.$().find(".sapUiFupInputMask"));

	}

	if (!this.oIFrameRef) {

		// create the upload iframe
		var uploadForm = this.getDomRef("fu_form");
		var oIFrameRef = document.createElement("iframe");
		oIFrameRef.style.display = "none";
		oIFrameRef.src = "javascript:''";
		oIFrameRef.id = this.sId + "-frame";
		sap.ui.getCore().getStaticAreaRef().appendChild(oIFrameRef);
		oIFrameRef.contentWindow.name = this.sId + "-frame";

		// sink the load event of the upload iframe
		var that = this;
		this._bUploading = false; // flag for uploading (because of IE8 to make sure that complete is only triggered after upload)
		jQuery(oIFrameRef).load(function(oEvent) {
			if (that._bUploading) {
				jQuery.sap.log.info("File uploaded to " + that.getUploadUrl());
				var sResponse;
				try {
					sResponse = that.oIFrameRef.contentDocument.body.innerHTML;
				} catch (ex) {
					// in case of cross-domain submit we get a permission denied exception
					// when we try to access the body of the IFrame document
				}
				that.fireUploadComplete({"response": sResponse});
				that._bUploading = false;
			}
		});

		// keep the reference
		this.oIFrameRef = oIFrameRef;

	}
};
