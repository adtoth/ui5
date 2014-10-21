/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.core.tmpl.TemplateControl.
sap.ui.define(['sap/ui/core/library','sap/ui/core/Control','./DOMElement','./DOMAttribute','sap/ui/core/DeclarativeSupport'], function() {
	"use strict";


/**
 * Constructor for a new tmpl/TemplateControl.
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
 * <li>{@link #getContext context} : object</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getTemplate template} : string | sap.ui.core.tmpl.Template</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.core.tmpl.TemplateControl#event:afterRendering afterRendering} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.core.tmpl.TemplateControl#event:beforeRendering beforeRendering} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * This is the base class for all template controls. Template controls are declared based on templates.
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.22.5
 *
 * @constructor   
 * @public
 * @experimental Since version 1.15. 
 * The templating might be changed in future versions.
 * @name sap.ui.core.tmpl.TemplateControl
 */
sap.ui.core.Control.extend("sap.ui.core.tmpl.TemplateControl", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.core",
	properties : {
		"context" : {type : "object", group : "Data", defaultValue : null}
	},
	aggregations : {
    	"controls" : {type : "sap.ui.core.Control", multiple : true, singularName : "control", visibility : "hidden"}
	},
	associations : {
		"template" : {type : "sap.ui.core.tmpl.Template", multiple : false}
	},
	events : {
		"afterRendering" : {}, 
		"beforeRendering" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.core.tmpl.TemplateControl with name <code>sClassName</code> 
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
 * @name sap.ui.core.tmpl.TemplateControl.extend
 * @function
 */

sap.ui.core.tmpl.TemplateControl.M_EVENTS = {'afterRendering':'afterRendering','beforeRendering':'beforeRendering'};


/**
 * Getter for property <code>context</code>.
 * The context is a data object. It can be used for default template expressions. A change of the context object leads to a re-rendering whereas a change of a nested property of the context object doesn't. By default the context is an empty object.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {object} the value of property <code>context</code>
 * @public
 * @name sap.ui.core.tmpl.TemplateControl#getContext
 * @function
 */

/**
 * Setter for property <code>context</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {object} oContext  new value for property <code>context</code>
 * @return {sap.ui.core.tmpl.TemplateControl} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.core.tmpl.TemplateControl#setContext
 * @function
 */


/**
 * The template on which the template control is based on.
 *
 * @return {string} Id of the element which is the current target of the <code>template</code> association, or null
 * @public
 * @name sap.ui.core.tmpl.TemplateControl#getTemplate
 * @function
 */

/**
 * The template on which the template control is based on.
 *
 * @param {string | sap.ui.core.tmpl.Template} vTemplate 
 *    Id of an element which becomes the new target of this <code>template</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.ui.core.tmpl.TemplateControl} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.core.tmpl.TemplateControl#setTemplate
 * @function
 */


	
/**
 * Fired when the Template Control has been (re-)rendered and its HTML is present in the DOM. 
 *
 * @name sap.ui.core.tmpl.TemplateControl#afterRendering
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'afterRendering' event of this <code>sap.ui.core.tmpl.TemplateControl</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.core.tmpl.TemplateControl</code>.<br/> itself. 
 *  
 * Fired when the Template Control has been (re-)rendered and its HTML is present in the DOM. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.core.tmpl.TemplateControl</code>.<br/> itself.
 *
 * @return {sap.ui.core.tmpl.TemplateControl} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.core.tmpl.TemplateControl#attachAfterRendering
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'afterRendering' event of this <code>sap.ui.core.tmpl.TemplateControl</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.core.tmpl.TemplateControl} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.core.tmpl.TemplateControl#detachAfterRendering
 * @function
 */

/**
 * Fire event afterRendering to attached listeners.
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.core.tmpl.TemplateControl} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.core.tmpl.TemplateControl#fireAfterRendering
 * @function
 */


/**
 * Fired before this Template Control is re-rendered. Use to unbind event handlers from HTML elements etc. 
 *
 * @name sap.ui.core.tmpl.TemplateControl#beforeRendering
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'beforeRendering' event of this <code>sap.ui.core.tmpl.TemplateControl</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.core.tmpl.TemplateControl</code>.<br/> itself. 
 *  
 * Fired before this Template Control is re-rendered. Use to unbind event handlers from HTML elements etc. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.core.tmpl.TemplateControl</code>.<br/> itself.
 *
 * @return {sap.ui.core.tmpl.TemplateControl} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.core.tmpl.TemplateControl#attachBeforeRendering
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'beforeRendering' event of this <code>sap.ui.core.tmpl.TemplateControl</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.core.tmpl.TemplateControl} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.core.tmpl.TemplateControl#detachBeforeRendering
 * @function
 */

/**
 * Fire event beforeRendering to attached listeners.
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.core.tmpl.TemplateControl} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.core.tmpl.TemplateControl#fireBeforeRendering
 * @function
 */


// Start of sap/ui/core/tmpl/TemplateControl.js


/*
 * Initialization of the sap.ui.core.tmpl.TemplateControl
 */
sap.ui.core.tmpl.TemplateControl.prototype.init = function() {
		
	// list of binding informations to cleanup once the 
	// control is destroyed or re-rendering happens
	this._aBindingInfos = [];
	
};


/**
 * checks whether the control is inline or not
 * 
 * @return {boolean} flag, whether to control is inline or not
 * @protected
 */
sap.ui.core.tmpl.TemplateControl.prototype.isInline = function() {
	// in case of inline templates the ID of the UIArea root node is the same 
	// like the ID for the current template control (this can only be the case 
	// for inline templates)
	var bInline = false;
	if (this.getParent() instanceof sap.ui.core.UIArea && 
	    jQuery(this.getParent().getRootNode()).attr("id") === this.getId()) {
	  bInline = true;
	}
	return bInline;
};


/*
 * Overridden to remove the old content for inline templates and clean up the
 * old UIArea which is in the "nirvana" now 
 */
sap.ui.core.tmpl.TemplateControl.prototype.placeAt = function(oRef, oPosition) {
	// in case of placing an inline template somewhere else on the screen
	// we remove the content and destroy the UIArea's content
	// TODO: how to destroy the UIArea itself?
	var bInline = this.isInline();
	var $this = this.$(),
	    oUIArea = this.getUIArea();
	sap.ui.core.Control.prototype.placeAt.apply(this, arguments);
	if (bInline && $this.length === 1) {
		$this.remove();
		oUIArea.destroyContent();
	}
};

/**
 * Returns the instance specific renderer for an anoymous template control.
 * 
 * @return {function} the instance specific renderer function
 * @protected
 */
sap.ui.core.tmpl.TemplateControl.prototype.getTemplateRenderer = function() {
	return this.fnRenderer; 
};


/**
 * Sets the instance specific renderer for an anoymous template control.
 * 
 * @param {function} fnRenderer the instance specific renderer function
 * @return {sap.ui.core.tmpl.Template} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.core.tmpl.TemplateControl.prototype.setTemplateRenderer = function(fnRenderer) {
	this.fnRenderer = fnRenderer;
	return this; 
};


/**
 * cleanup of the controls and bindings
 * @private 
 */
sap.ui.core.tmpl.TemplateControl.prototype._cleanup = function() {

	// destroy the controls
	this.destroyAggregation("controls");
	
	// cleanup the bindings
	if (this._aBindingInfos) {
		var that = this;
		jQuery.each(this._aBindingInfos, function(iIndex, oBindingInfo) {
			that.getModel(oBindingInfo.model).removeBinding(oBindingInfo.binding);
		});
		this._aBindingInfos = [];
	}
	
};
 
/**
 * compile the declarative markup
 * @private 
 */
sap.ui.core.tmpl.TemplateControl.prototype._compile = function() {
	var oTemplate = sap.ui.getCore().byId(this.getTemplate()),
	    bDeclarativeSupport = oTemplate && oTemplate.getDeclarativeSupport();
	if (bDeclarativeSupport) {
		var that = this;
		setTimeout(function() {
			sap.ui.core.DeclarativeSupport.compile(that.getDomRef());
		});
	}
};
 
/*
 * cleanup of the controls and bindings 
 */
sap.ui.core.tmpl.TemplateControl.prototype.exit = function() {
	this._cleanup();
};
 
/*
 * cleanup of the  controls and bindings 
 */
sap.ui.core.tmpl.TemplateControl.prototype.onBeforeRendering = function() {
	this.fireBeforeRendering();
	this._cleanup();
};		
		
		
/*
 * parse nested controls which have been added via markup 
 */
sap.ui.core.tmpl.TemplateControl.prototype.onAfterRendering = function() {
	this.fireAfterRendering();
};
		

/*
 * get notified when the model changes, ...
 */		
sap.ui.core.tmpl.TemplateControl.prototype.updateBindings = function(bUpdateAll, sModelName) {
	sap.ui.base.ManagedObject.prototype.updateBindings.apply(this, arguments);
	// invalidate once the element is rendered 
	if (this.getDomRef()) {
		this.invalidate();
	}
};
		

/**
 * Creates a pseudo binding for a value to get notified once the value 
 * changes to invalidate the control and trigger a re-rendering.
 * 
 * @param {string} sPath the binding path
 * @param {string} sModelFunc the name of the model function
 * @return {any} the value of the path (typically an array)
 * @private 
 */		
sap.ui.core.tmpl.TemplateControl.prototype.bind = function(sPath, sType) {

	// parse the path and create the binding
	var oPathInfo = sap.ui.core.tmpl.Template.parsePath(sPath),
	    oModel = this.getModel(oPathInfo.model),
	    sPath = oPathInfo.path,
	    sModelFunc = sType ? "bind" + jQuery.sap.charToUpperCase(sType) : "bindProperty",
	    oBinding = oModel && oModel[sModelFunc](sPath),
	    that = this;

	// attach a change handler (if the binding exists)
	if (oBinding) {
		oBinding.attachChange(function() {
			jQuery.sap.log.debug("TemplateControl#" + that.getId() + ": " + sType + " binding changed for path \"" + sPath + "\"");
			that.invalidate();
		});
	}
	
	// store the binding info for later cleanup
	this._aBindingInfos.push({
		binding: oBinding,
		path: oPathInfo.path,
		model: oPathInfo.model
	});
	
	// return the external formatted value for the property
	return oBinding;

};
		
		
		
/**
 * Creates a pseudo binding for a property to get notified once the property 
 * changes to invalidate the control and trigger a re-rendering.
 * 
 * @param {string} sPath the binding path
 * @return {any} the value of the path
 * @protected 
 */		
sap.ui.core.tmpl.TemplateControl.prototype.bindProp = function(sPath) {
	var oBinding = this.bind(sPath, "property");
	return oBinding && oBinding.getExternalValue();
};
		
		
/**
 * Creates a pseudo binding for a aggregation to get notified once the property 
 * changes to invalidate the control and trigger a re-rendering.
 * 
 * @param {string} sPath the binding path
 * @return {any} the value of the path
 * @protected 
 */		
sap.ui.core.tmpl.TemplateControl.prototype.bindList = function(sPath) {
	var oBinding = this.bind(sPath, "list"),
	    oModel = oBinding && oBinding.getModel(),
	    sPath = oBinding && oBinding.getPath();
	return oBinding && oModel.getProperty(sPath);
};
		
		
/**
 * compiles (creates and registers) a new DOM element
 * 
 * @param {object} mSettings the settings for the new DOM element
 * @param {string} [sParentPath] the parent path for the DOM element
 * @param {boolean} [bDoNotAdd] if true, then the control will not be 
 *          added to the _controls aggregation
 * @return {sap.ui.core.Control} new DOM element instance 
 * 
 * @protected
 */
sap.ui.core.tmpl.TemplateControl.prototype.createDOMElement = function(mSettings, sParentPath, bDoNotAdd) {
	var oElement = new sap.ui.core.tmpl.DOMElement(mSettings);
	if (sParentPath) {
		// set the context for the DOM element
		oElement.bindElement(sParentPath);
	}
	if (!bDoNotAdd) {
		this.addAggregation("controls", oElement);
	}
	return oElement;
};
		
		
/**
 * compiles (creates and registers) a new control
 * 
 * @param {object} mSettings the settings for the new control
 * @param {string} [sParentPath] the parent path for the control
 * @param {boolean} [bDoNotAdd] if true, then the control will not be 
 *          added to the _controls aggregation
 * @return {sap.ui.core.Control} new control instance 
 * 
 * @protected
 */
sap.ui.core.tmpl.TemplateControl.prototype.createControl = function(mSettings, sParentPath, bDoNotAdd, oView) {
	// sap.ui.core.Element.create doesn't work because there is no type 
	// conversion for the values done (would be the better approach)
	var mHTMLSettings = {};
	jQuery.each(mSettings, function(sKey, oValue) {
		mHTMLSettings["data-" + jQuery.sap.hyphen(sKey)] = oValue;
	});
	var $control = jQuery("<div/>", mHTMLSettings);
	var oControl = sap.ui.core.DeclarativeSupport._createControl($control.get(0), oView);
	if (sParentPath) {
		// set the context for the control
		oControl.bindElement(sParentPath);
	}
	if (!bDoNotAdd) {
		this.addAggregation("controls", oControl);
	}
	return oControl;
};

	return sap.ui.core.tmpl.TemplateControl;

}, /* bExport = */ true);
