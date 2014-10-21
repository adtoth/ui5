/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides class sap.ui.model.odata.ODataPropertyBinding
sap.ui.define(['jquery.sap.global', 'sap/ui/model/PropertyBinding'],
	function(jQuery, PropertyBinding) {
	"use strict";


	/**
	 *
	 * @class
	 * Property binding implementation for oData format
	 *
	 * @param {sap.ui.model.Model} oModel
	 * @param {string} sPath
	 * @param {sap.ui.model.Context} oContext
	 * @param {object} [mParameters]
	 * 
	 * @name sap.ui.model.odata.ODataPropertyBinding
	 * @extends sap.ui.model.PropertyBinding
	 */
	var ODataPropertyBinding = PropertyBinding.extend("sap.ui.model.odata.ODataPropertyBinding", /** @lends sap.ui.model.odata.ODataPropertyBinding.prototype */ {
		
		constructor : function(oModel, sPath, oContext, mParameters){
			PropertyBinding.apply(this, arguments);
		
			this.oValue = this._getValue();
		}
	
	});
	
	/**
	 * Creates a new subclass of class sap.ui.model.odata.ODataPropertyBinding with name <code>sClassName</code> 
	 * and enriches it with the information contained in <code>oClassInfo</code>.
	 * 
	 * For a detailed description of <code>oClassInfo</code> or <code>FNMetaImpl</code> 
	 * see {@link sap.ui.base.Object.extend Object.extend}.
	 *   
	 * @param {string} sClassName name of the class to be created
	 * @param {object} [oClassInfo] object literal with informations about the class  
	 * @param {function} [FNMetaImpl] alternative constructor for a metadata object
	 * @return {function} the created class / constructor function
	 * @public
	 * @static
	 * @name sap.ui.model.odata.ODataPropertyBinding.extend
	 * @function
	 */
	
	/**
	 * Initialize the binding. The message should be called when creating a binding.
	 * If metadata is not yet available, do nothing, method will be called again when
	 * metadata is loaded.
	 * 
	 * @protected
	 * @name sap.ui.model.Binding#initialize
	 * @function
	 */
	ODataPropertyBinding.prototype.initialize = function() {
		if (this.oModel.oMetadata.isLoaded()) {
			this.checkUpdate(true);
		}
	};
	
	/**
	 * Returns the current value of the bound target
	 * @return {object} the current value of the bound target
	 * @protected
	 * @name sap.ui.model.odata.ODataPropertyBinding#getValue
	 * @function
	 */
	ODataPropertyBinding.prototype.getValue = function(){
		return this.oValue;
	};
	
	/**
	 * Returns the current value of the bound target (incl. re-evaluation)
	 * @return {object} the current value of the bound target
	 * @name sap.ui.model.odata.ODataPropertyBinding#_getValue
	 * @function
	 */
	ODataPropertyBinding.prototype._getValue = function(){
		return this.oModel._getObject(this.sPath, this.oContext);
	};
	
	/**
	 * @see sap.ui.model.PropertyBinding.prototype.setValue
	 * @name sap.ui.model.odata.ODataPropertyBinding#setValue
	 * @function
	 */
	ODataPropertyBinding.prototype.setValue = function(oValue){
		if (this.oValue != oValue){
			//the binding value will be updated by the model. The model calls checkupdate on all bindings after updating its value.
			if (!this.oModel.setProperty(this.sPath, oValue, this.oContext)) {
				this._fireChange();
			}
		}
	};
	
	/**
	 * Setter for context
	 * @name sap.ui.model.odata.ODataPropertyBinding#setContext
	 * @function
	 */
	ODataPropertyBinding.prototype.setContext = function(oContext) {
		if (this.oContext != oContext) {
			this.oContext = oContext;
			if (this.isRelative()) {
				this.checkUpdate();
			}
		}
	};
	
	/**
	 * Check whether this Binding would provide new values and in case it changed,
	 * inform interested parties about this.
	 * 
	 * @param {boolean} force no cache true/false: Default = false
	 * 
	 * @name sap.ui.model.odata.ODataPropertyBinding#checkUpdate
	 * @function
	 */
	ODataPropertyBinding.prototype.checkUpdate = function(bForceUpdate){
		var oValue = this._getValue();
		if(oValue !== this.oValue || bForceUpdate) {// optimize for not firing the events when unneeded
			this.oValue = oValue;
			this._fireChange({reason: sap.ui.model.ChangeReason.Change});
		}
	};

	return ODataPropertyBinding;

}, /* bExport= */ true);
