/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.TableSelectDialog.
jQuery.sap.declare("sap.m.TableSelectDialog");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new TableSelectDialog.
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
 * <li>{@link #getNoDataText noDataText} : string</li>
 * <li>{@link #getMultiSelect multiSelect} : boolean (default: false)</li>
 * <li>{@link #getGrowingThreshold growingThreshold} : int</li>
 * <li>{@link #getContentWidth contentWidth} : sap.ui.core.CSSSize</li>
 * <li>{@link #getRememberSelections rememberSelections} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} <strong>(default aggregation)</strong> : sap.m.ColumnListItem[]</li>
 * <li>{@link #getColumns columns} : sap.m.Column[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.TableSelectDialog#event:confirm confirm} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.TableSelectDialog#event:search search} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.TableSelectDialog#event:liveChange liveChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.TableSelectDialog#event:cancel cancel} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * A TableSelectDialog provides you a easier way to create a dialog that contains a list with grouping and search functionality.
 * The Table used in a SelectDialog is a Table with Columns. After selecting an item, the dialog will be closed and a callback function will return the item being selected.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.22.5
 *
 * @constructor   
 * @public
 * @since 1.16
 * @name sap.m.TableSelectDialog
 */
sap.ui.core.Control.extend("sap.m.TableSelectDialog", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"open"
	],

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"title" : {type : "string", group : "Appearance", defaultValue : null},
		"noDataText" : {type : "string", group : "Appearance", defaultValue : null},
		"multiSelect" : {type : "boolean", group : "Dimension", defaultValue : false},
		"growingThreshold" : {type : "int", group : "Misc", defaultValue : null},
		"contentWidth" : {type : "sap.ui.core.CSSSize", group : "Appearance", defaultValue : null},
		"rememberSelections" : {type : "boolean", group : "Behavior", defaultValue : false}
	},
	defaultAggregation : "items",
	aggregations : {
    	"items" : {type : "sap.m.ColumnListItem", multiple : true, singularName : "item", bindable : "bindable"}, 
    	"_dialog" : {type : "sap.ui.core.Control", multiple : false, visibility : "hidden"}, 
    	"columns" : {type : "sap.m.Column", multiple : true, singularName : "column", bindable : "bindable"}
	},
	events : {
		"confirm" : {}, 
		"search" : {}, 
		"liveChange" : {}, 
		"cancel" : {}
	}
}});


/**
 * Creates a new subclass of class sap.m.TableSelectDialog with name <code>sClassName</code> 
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
 * @name sap.m.TableSelectDialog.extend
 * @function
 */

sap.m.TableSelectDialog.M_EVENTS = {'confirm':'confirm','search':'search','liveChange':'liveChange','cancel':'cancel'};


/**
 * Getter for property <code>title</code>.
 * The title text appears in the dialog header.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * @name sap.m.TableSelectDialog#getTitle
 * @function
 */

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.m.TableSelectDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TableSelectDialog#setTitle
 * @function
 */


/**
 * Getter for property <code>noDataText</code>.
 * This is the text shown when the table has no data.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>noDataText</code>
 * @public
 * @name sap.m.TableSelectDialog#getNoDataText
 * @function
 */

/**
 * Setter for property <code>noDataText</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sNoDataText  new value for property <code>noDataText</code>
 * @return {sap.m.TableSelectDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TableSelectDialog#setNoDataText
 * @function
 */


/**
 * Getter for property <code>multiSelect</code>.
 * If on, the user can select several options from the table.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>multiSelect</code>
 * @public
 * @name sap.m.TableSelectDialog#getMultiSelect
 * @function
 */

/**
 * Setter for property <code>multiSelect</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bMultiSelect  new value for property <code>multiSelect</code>
 * @return {sap.m.TableSelectDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TableSelectDialog#setMultiSelect
 * @function
 */


/**
 * Getter for property <code>growingThreshold</code>.
 * Number of items initially displayed in the table
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {int} the value of property <code>growingThreshold</code>
 * @public
 * @name sap.m.TableSelectDialog#getGrowingThreshold
 * @function
 */

/**
 * Setter for property <code>growingThreshold</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {int} iGrowingThreshold  new value for property <code>growingThreshold</code>
 * @return {sap.m.TableSelectDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TableSelectDialog#setGrowingThreshold
 * @function
 */


/**
 * Getter for property <code>contentWidth</code>.
 * The content width of the inner dialog. See dialog documentation for more details.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>contentWidth</code>
 * @public
 * @since 1.18
 * @name sap.m.TableSelectDialog#getContentWidth
 * @function
 */

/**
 * Setter for property <code>contentWidth</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sContentWidth  new value for property <code>contentWidth</code>
 * @return {sap.m.TableSelectDialog} <code>this</code> to allow method chaining
 * @public
 * @since 1.18
 * @name sap.m.TableSelectDialog#setContentWidth
 * @function
 */


/**
 * Getter for property <code>rememberSelections</code>.
 * This flag controls whether the dialog clears the selection or not. When the dialog is opened multiple times in the same context to allow for corrections of previous user inputs, set this flag to "true". When the dialog should reset the selection to allow for a new selection each time set it to "false"
 * Note: This property must be set before the dialog is opened to have an effect.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>rememberSelections</code>
 * @public
 * @since 1.18
 * @name sap.m.TableSelectDialog#getRememberSelections
 * @function
 */

/**
 * Setter for property <code>rememberSelections</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bRememberSelections  new value for property <code>rememberSelections</code>
 * @return {sap.m.TableSelectDialog} <code>this</code> to allow method chaining
 * @public
 * @since 1.18
 * @name sap.m.TableSelectDialog#setRememberSelections
 * @function
 */


/**
 * Getter for aggregation <code>items</code>.<br/>
 * The items of the table.
 * 
 * <strong>Note</strong>: this is the default aggregation for TableSelectDialog.
 * @return {sap.m.ColumnListItem[]}
 * @public
 * @name sap.m.TableSelectDialog#getItems
 * @function
 */


/**
 * Inserts a item into the aggregation named <code>items</code>.
 *
 * @param {sap.m.ColumnListItem}
 *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the item should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the item is inserted at 
 *             the last position        
 * @return {sap.m.TableSelectDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TableSelectDialog#insertItem
 * @function
 */

/**
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 *
 * @param {sap.m.ColumnListItem}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.m.TableSelectDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TableSelectDialog#addItem
 * @function
 */

/**
 * Removes an item from the aggregation named <code>items</code>.
 *
 * @param {int | string | sap.m.ColumnListItem} vItem the item to remove or its index or id
 * @return {sap.m.ColumnListItem} the removed item or null
 * @public
 * @name sap.m.TableSelectDialog#removeItem
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.m.ColumnListItem[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.m.TableSelectDialog#removeAllItems
 * @function
 */

/**
 * Checks for the provided <code>sap.m.ColumnListItem</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.m.ColumnListItem}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.m.TableSelectDialog#indexOfItem
 * @function
 */
	

/**
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.m.TableSelectDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TableSelectDialog#destroyItems
 * @function
 */


/**
 * Binder for aggregation <code>items</code>.
 *
 * @param {string} sPath path to a list in the model 
 * @param {sap.ui.core.Element} oTemplate the control template for this aggregation
 * @param {sap.ui.model.Sorter} oSorter the initial sort order (optional)
 * @param {array} aFilters the predefined filters for this aggregation (optional)
 * @return {sap.m.TableSelectDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TableSelectDialog#bindItems
 * @function
 */

/**
 * Unbinder for aggregation <code>items</code>.
 *
 * @return {sap.m.TableSelectDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TableSelectDialog#unbindItems
 * @function
 */


/**
 * Getter for aggregation <code>columns</code>.<br/>
 * The columns bindings.
 * 
 * @return {sap.m.Column[]}
 * @public
 * @name sap.m.TableSelectDialog#getColumns
 * @function
 */


/**
 * Inserts a column into the aggregation named <code>columns</code>.
 *
 * @param {sap.m.Column}
 *          oColumn the column to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the column should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the column is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the column is inserted at 
 *             the last position        
 * @return {sap.m.TableSelectDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TableSelectDialog#insertColumn
 * @function
 */

/**
 * Adds some column <code>oColumn</code> 
 * to the aggregation named <code>columns</code>.
 *
 * @param {sap.m.Column}
 *            oColumn the column to add; if empty, nothing is inserted
 * @return {sap.m.TableSelectDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TableSelectDialog#addColumn
 * @function
 */

/**
 * Removes an column from the aggregation named <code>columns</code>.
 *
 * @param {int | string | sap.m.Column} vColumn the column to remove or its index or id
 * @return {sap.m.Column} the removed column or null
 * @public
 * @name sap.m.TableSelectDialog#removeColumn
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>columns</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.m.Column[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.m.TableSelectDialog#removeAllColumns
 * @function
 */

/**
 * Checks for the provided <code>sap.m.Column</code> in the aggregation named <code>columns</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.m.Column}
 *            oColumn the column whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.m.TableSelectDialog#indexOfColumn
 * @function
 */
	

/**
 * Destroys all the columns in the aggregation 
 * named <code>columns</code>.
 * @return {sap.m.TableSelectDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TableSelectDialog#destroyColumns
 * @function
 */


/**
 * Binder for aggregation <code>columns</code>.
 *
 * @param {string} sPath path to a list in the model 
 * @param {sap.ui.core.Element} oTemplate the control template for this aggregation
 * @param {sap.ui.model.Sorter} oSorter the initial sort order (optional)
 * @param {array} aFilters the predefined filters for this aggregation (optional)
 * @return {sap.m.TableSelectDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TableSelectDialog#bindColumns
 * @function
 */

/**
 * Unbinder for aggregation <code>columns</code>.
 *
 * @return {sap.m.TableSelectDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TableSelectDialog#unbindColumns
 * @function
 */


/**
 * This event will be fired when the dialog is confirmed by selecting an item in single selection mode or by pressing the confirmation button in multi selection mode . The items being selected are returned as event parameters. 
 *
 * @name sap.m.TableSelectDialog#confirm
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.m.StandardListItem} oControlEvent.getParameters.selectedItem Returns the selected list item. When no item is selected, "null" is returned. When multi-selection is enabled and multiple items are selected, only the first selected item is returned.
 * @param {sap.m.StandardListItem[]} oControlEvent.getParameters.selectedItems Returns an array containing the visible selected list items. If no items are selected, an empty array is returned.
 * @param {string} oControlEvent.getParameters.selectedContexts Returns the binding contexts of the selected items including the non-visible items.
 *         Note: In contrast to the parameter "selectedItems", this parameter will also include the selected but NOT visible items (e.g. due to list filtering). An empty array will be set for this parameter if no Databinding is used.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'confirm' event of this <code>sap.m.TableSelectDialog</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.TableSelectDialog</code>.<br/> itself. 
 *  
 * This event will be fired when the dialog is confirmed by selecting an item in single selection mode or by pressing the confirmation button in multi selection mode . The items being selected are returned as event parameters. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.TableSelectDialog</code>.<br/> itself.
 *
 * @return {sap.m.TableSelectDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TableSelectDialog#attachConfirm
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'confirm' event of this <code>sap.m.TableSelectDialog</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.TableSelectDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TableSelectDialog#detachConfirm
 * @function
 */

/**
 * Fire event confirm to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'selectedItem' of type <code>sap.m.StandardListItem</code> Returns the selected list item. When no item is selected, "null" is returned. When multi-selection is enabled and multiple items are selected, only the first selected item is returned.</li>
 * <li>'selectedItems' of type <code>sap.m.StandardListItem[]</code> Returns an array containing the visible selected list items. If no items are selected, an empty array is returned.</li>
 * <li>'selectedContexts' of type <code>string</code> Returns the binding contexts of the selected items including the non-visible items. 
Note: In contrast to the parameter "selectedItems", this parameter will also include the selected but NOT visible items (e.g. due to list filtering). An empty array will be set for this parameter if no Databinding is used.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.TableSelectDialog} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.TableSelectDialog#fireConfirm
 * @function
 */


/**
 * Fired when the search button has been clicked on dialog. 
 *
 * @name sap.m.TableSelectDialog#search
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.value The value entered in the search field.
 * @param {any} oControlEvent.getParameters.itemsBinding The Items binding of the Table Select Dialog. It will only be available if the items aggregation is bound to a model.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'search' event of this <code>sap.m.TableSelectDialog</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.TableSelectDialog</code>.<br/> itself. 
 *  
 * Fired when the search button has been clicked on dialog. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.TableSelectDialog</code>.<br/> itself.
 *
 * @return {sap.m.TableSelectDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TableSelectDialog#attachSearch
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'search' event of this <code>sap.m.TableSelectDialog</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.TableSelectDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TableSelectDialog#detachSearch
 * @function
 */

/**
 * Fire event search to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'value' of type <code>string</code> The value entered in the search field.</li>
 * <li>'itemsBinding' of type <code>any</code> The Items binding of the Table Select Dialog. It will only be available if the items aggregation is bound to a model.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.TableSelectDialog} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.TableSelectDialog#fireSearch
 * @function
 */


/**
 * This event is fired when the value of the search field is changed by a user - e.g. at each key press. 
 *
 * @name sap.m.TableSelectDialog#liveChange
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.value The value entered in the search field.
 * @param {any} oControlEvent.getParameters.itemsBinding The Items binding of the Table Select Dialog. It will only be available if the items aggregation is bound to a model.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'liveChange' event of this <code>sap.m.TableSelectDialog</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.TableSelectDialog</code>.<br/> itself. 
 *  
 * This event is fired when the value of the search field is changed by a user - e.g. at each key press. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.TableSelectDialog</code>.<br/> itself.
 *
 * @return {sap.m.TableSelectDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TableSelectDialog#attachLiveChange
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'liveChange' event of this <code>sap.m.TableSelectDialog</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.TableSelectDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TableSelectDialog#detachLiveChange
 * @function
 */

/**
 * Fire event liveChange to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'value' of type <code>string</code> The value entered in the search field.</li>
 * <li>'itemsBinding' of type <code>any</code> The Items binding of the Table Select Dialog. It will only be available if the items aggregation is bound to a model.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.TableSelectDialog} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.TableSelectDialog#fireLiveChange
 * @function
 */


/**
 * This event will be fired when the cancel button is clicked 
 *
 * @name sap.m.TableSelectDialog#cancel
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'cancel' event of this <code>sap.m.TableSelectDialog</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.TableSelectDialog</code>.<br/> itself. 
 *  
 * This event will be fired when the cancel button is clicked 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.TableSelectDialog</code>.<br/> itself.
 *
 * @return {sap.m.TableSelectDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TableSelectDialog#attachCancel
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'cancel' event of this <code>sap.m.TableSelectDialog</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.TableSelectDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TableSelectDialog#detachCancel
 * @function
 */

/**
 * Fire event cancel to attached listeners.
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.TableSelectDialog} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.TableSelectDialog#fireCancel
 * @function
 */


/**
 * Opens the table select dialog.
 *
 * @name sap.m.TableSelectDialog.prototype.open
 * @function
 * @param {string} 
 *         sSearchValue
 *         Value for the search. The table will be automatically trigger the search event if value if this parameter is set.

 * @type sap.m.TableSelectDialog
 * @public
 */


// Start of sap\m\TableSelectDialog.js
/*!
 * @copyright@
 */

jQuery.sap.require("sap.m.Button");
jQuery.sap.require("sap.m.Dialog");
jQuery.sap.require("sap.m.Table");
jQuery.sap.require("sap.m.SearchField");

/* =========================================================== */
/*           begin: API methods                                */
/* =========================================================== */

/**
 * Initializes the control
 * @private
 */
sap.m.TableSelectDialog.prototype.init = function () {
	var that = this,
		iLiveChangeTimer = 0,
		fnResetAfterClose = null;

	fnResetAfterClose = function () {
		that._oSelectedItem = that._oTable.getSelectedItem();
		that._aSelectedItems = that._oTable.getSelectedItems();

		that._oDialog.detachAfterClose(fnResetAfterClose);
		that._fireConfirmAndUpdateSelection();
	};

	this._bAppendedToUIArea = false;
	this._bInitBusy = false;
	this._bFirstRender = true;
	this._oRb = sap.ui.getCore().getLibraryResourceBundle("sap.m");

	// store a reference to the table for binding management
	this._oTable = new sap.m.Table(this.getId() + "-table", {
		growing: true,
		growingScrollToLoad: true,
		mode: sap.m.ListMode.SingleSelectMaster,
		infoToolbar: new sap.m.Toolbar({
			visible: false,
			active: false,
			content: [
				new sap.m.Label({
					text: this._oRb.getText("TABLESELECTDIALOG_SELECTEDITEMS", [0])
				})
			]
		}),
		selectionChange: function (oEvent) {
			if (that._oDialog) {
				if (!that.getMultiSelect()) { 
					// attach the reset function to afterClose to hide the dialog changes from the end user 
					that._oDialog.attachAfterClose(fnResetAfterClose);
					that._oDialog.close();
				} else {
					// update the selection label
					that._updateSelectionIndicator();
				}
			}
		}
	});
	this._table = this._oTable; // for downward compatibility

	// store a reference to the busyIndicator to display when data is currently loaded by a service
	this._oBusyIndicator = new sap.m.BusyIndicator(this.getId() + "-busyIndicator").addStyleClass("sapMTableSelectDialogBusyIndicator", true);

	// store a reference to the searchField for filtering
	this._oSearchField = new sap.m.SearchField(this.getId() + "-searchField", {
		width: "100%",
		liveChange: function (oEvent) {
			var sValue = oEvent.getSource().getValue(),
			iDelay = (sValue ? 300 : 0); // no delay if value is empty

			// execute search after user stopped typing for 300ms
			clearTimeout(iLiveChangeTimer);
			if (iDelay) {
				iLiveChangeTimer = setTimeout(function () {
					that._executeSearch(sValue, "liveChange");
				}, iDelay);
			} else {
				that._executeSearch(sValue, "liveChange");
			}
		},
		search: function (oEvent) {
			that._executeSearch(oEvent.getSource().getValue(), "search");
		}
	});
	this._searchField = this._oSearchField; // for downward compatibility

	// store a reference to the subheader for hiding it when data loads
	this._oSubHeader = new sap.m.Bar(this.getId() + "-subHeader", {
		contentMiddle: [
			this._searchField
		]
	});

	// store a reference to the internal dialog 
	this._oDialog = new sap.m.Dialog(this.getId() + "-dialog", {
		stretch: sap.ui.Device.system.phone,
		contentHeight: "2000px",
		subHeader: this._oSubHeader,
		content: [this._oBusyIndicator, this._oTable],
		leftButton: this._getCancelButton()
	});
	this._dialog = this._oDialog; // for downward compatibility

	//CSN# 3863876/2013: ESC key should also cancel dialog, not only close it
	var fnDialogEscape = this._oDialog.onsapescape;
	this._oDialog.onsapescape = function(oEvent) {
		// call original escape function of the dialog
		if(fnDialogEscape) {
			fnDialogEscape.call(that._oDialog, oEvent);
		}
		// execute cancel action
		that._onCancel();
	};

	// internally set top and bottom margin of the dialog to 8rem respectively
	// CSN# 333642/2014: in base theme the parameter sapUiFontSize is "medium", implement a fallback
	this._oDialog._iVMargin = 8 * (parseInt(sap.ui.core.theming.Parameters.get("sapUiFontSize"), 10) || 16); //128

	// helper variables for search update behaviour
	this._sSearchFieldValue = "";

	// flags to control the busy indicator behaviour because the growing table will always show the no data text when updating
	this._bFirstRequest = true; // to only show the busy indicator for the first request when the dialog has been openend
	this._iTableUpdateRequested = 0; // to only show the busy indicator when we initiated the change
};

/**
 * Destroys the control
 * @private
 */
sap.m.TableSelectDialog.prototype.exit = function () {
	// internal variables
	this._oTable = null;
	this._oSearchField = null;
	this._oSubHeader = null;
	this._oBusyIndicator = null;
	this._sSearchFieldValue = null;
	this._iTableUpdateRequested = null;
	this._bFirstRequest = false;
	this._bInitBusy = false;
	this._bFirstRender = false;

	if (this._oDialog) {
		this._oDialog.destroy();
		this._oDialog = null;
	}

	if (this._oOkButton) { 
		this._oOkButton.destroy();
		this._oOkButton = null;
	}

	// selections
	this._oSelectedItem = null;
	this._aSelectedItems = null;
	this._aInitiallySelectedItems = null;

	// compatibility
	this._table = null; 
	this._searchField = null;
	this._dialog = null;
};

/*
* Is called after renderer is finished to show the busy state
* @overwrite
* @protected
* @returns {this} this pointer for chaining
*/
sap.m.TableSelectDialog.prototype.onAfterRendering = function () {
	if (this._bInitBusy && this._bFirstRender) {
		this._setBusy(true);
		this._bInitBusy = false;
		this._bFirstRender = false;
	}

	return this;
};

/*
* Invalidates the dialog instead of this control (we don't have a renderer)
* @overwrite
* @protected
* @returns {this} this pointer for chaining
*/
sap.m.TableSelectDialog.prototype.invalidate = function () {
	// CSN #80686/2014: only invalidate inner dialog if call does not come from inside
	if (this._oDialog && (!arguments[0] || arguments[0] && arguments[0].getId() !== this.getId() + "-dialog")) {
		this._oDialog.invalidate(arguments);
	} else {
		sap.ui.core.Control.prototype.invalidate.apply(this, arguments);
	}

	return this;
};

/**
* Opens the internal dialog with a searchfield and a table.
* @public
* @param {string} sValue Value for the table search.
* @returns {this} <code>this</code> to allow method chaining
*/
sap.m.TableSelectDialog.prototype.open = function (sSearchValue) {
	if (!this.getParent() && !this._bAppendedToUIArea) {
		var oStatic = sap.ui.getCore().getStaticAreaRef();
		oStatic = sap.ui.getCore().getUIArea(oStatic);
		oStatic.addContent(this, true);
		this._bAppendedToUIArea = true;
	}

	// reset internal variables
	this._bFirstRequest = true;

	// set search field value
	this._oSearchField.setValue(sSearchValue);

	// open the dialog
	this._oDialog.open();

	// open dialog with busy state if a list update is still in progress
	if (this._bInitBusy) {
		this._setBusy(true);
	}

	// store the current selection for the cancel event
	this._aInitiallySelectedItems = this._oTable.getSelectedItems();

	// refresh the selection indicator to be in sync with the model
	this._updateSelectionIndicator();

	//now return the control for chaining
	return this;
};

/**
* Sets the growing threshold to the internal table
* @public
* @param {int} iValue Value for the table's growing threshold.
* @returns {this} this pointer for chaining
*/
sap.m.TableSelectDialog.prototype.setGrowingThreshold = function (iValue) {
	this._oTable.setGrowingThreshold(iValue);
	this.setProperty("growingThreshold", iValue, true);

	return this;
};

/**
 * Enable/Disable multi selection mode.
 * @overwrite
 * @public
 * @param {boole} bMulti flag for multi selection mode
 * @returns {this} this pointer for chaining
 */
sap.m.TableSelectDialog.prototype.setMultiSelect = function (bMulti) {
	this.setProperty("multiSelect", bMulti, true);
	if (bMulti) {
		this._oTable.setMode(sap.m.ListMode.MultiSelect); 
		this._oTable.setIncludeItemInSelection(true);
		this._oDialog.setRightButton(this._getCancelButton());
		this._oDialog.setLeftButton(this._getOkButton());
	} else {
		this._oTable.setMode(sap.m.ListMode.SingleSelectMaster); 
		this._oDialog.setLeftButton(this._getCancelButton());
	}

	return this;
};

/**
 * Set the title of the internal dialog
 * @overwrite
 * @public
 * @param {string} sTitle the title text for the dialog
 * @returns {this} this pointer for chaining
 */
sap.m.TableSelectDialog.prototype.setTitle = function (sTitle) {
	this.setProperty("title", sTitle, true);
	this._oDialog.setTitle(sTitle);

	return this;
};

/**
 * Set the no data text of the internal table
 * @overwrite
 * @public
 * @param {string} sNoDataText the no data text for the table
 */
sap.m.TableSelectDialog.prototype.setNoDataText = function (sNoDataText) {
	this._oTable.setNoDataText(sNoDataText);

	return this;
};

/**
 * Reflector for the internal List's no data text property
 * @overwrite
 * @public
 * @returns {string} the current no data text
 */
sap.m.TableSelectDialog.prototype.getNoDataText = function () {
	return this._oTable.getNoDataText();
};

/**
 * Reflector for the internal Dialog's contentWidth property
 * @overwrite
 * @public
 * @returns {sap.ui.core.CSSSize} sWidth the content width of the internal dialog
 */
sap.m.TableSelectDialog.prototype.getContentWidth = function () {
	return this._oDialog.getContentWidth();
};

/**
 * Reflector for the internal Dialog's contentWidth property
 * @param {sap.ui.core.CSSSize} sWidth the new content width value for the dialog
 * @public
 * @overwrite
* @returns {this} this pointer for chaining
 */
sap.m.TableSelectDialog.prototype.setContentWidth = function (sWidth) {
	this._oDialog.setContentWidth(sWidth);

	return this;
};

/**
 * Forward method to the inner dialog: addStyleClass
 * @public
 * @override
 * @returns {this} this pointer for chaining
 */
sap.m.TableSelectDialog.prototype.addStyleClass = function () {
	this._oDialog.addStyleClass.apply(this._oDialog, arguments);
	return this;
};

/**
 * Forward method to the inner dialog: removeStyleClass
 * @public
 * @override
 * @returns {this} this pointer for chaining
 */
sap.m.TableSelectDialog.prototype.removeStyleClass = function () {
	this._oDialog.removeStyleClass.apply(this._oDialog, arguments);
	return this;
};

/**
 * Forward method to the inner dialog: toggleStyleClass
 * @public
 * @override
 * @returns {this} this pointer for chaining
 */
sap.m.TableSelectDialog.prototype.toggleStyleClass = function () {
	this._oDialog.toggleStyleClass.apply(this._oDialog, arguments);
	return this;
};

/**
 * Forward method to the inner dialog: hasStyleClass
 * @public
 * @override
 * @returns {boolean} true if the class is set, false otherwise
 */
sap.m.TableSelectDialog.prototype.hasStyleClass = function () {
	return this._oDialog.hasStyleClass.apply(this._oDialog, arguments);
};

/**
 * Forward method to the inner dialog: getDomRef
 * @public
 * @override
 * @return {Element} The Element's DOM Element sub DOM Element or null
 */
sap.m.TableSelectDialog.prototype.getDomRef = function () {
	if(this._oDialog) {
		return this._oDialog.getDomRef.apply(this._oDialog, arguments);
	} else {
		return null;
	}
};

/* =========================================================== */
/*           begin: forward aggregation  methods to table      */
/* =========================================================== */

/*
 * Set the model for the internal table AND the current control so that 
 * both controls can be used with data binding
 * @overwrite
 * @public
 * @param {sap.ui.Model} oModel the model that holds the data for the table
 * @param {string} sName the optional model name
 * @returns {this} this pointer for chaining
 */
sap.m.TableSelectDialog.prototype._setModel = sap.m.TableSelectDialog.prototype.setModel;
sap.m.TableSelectDialog.prototype.setModel = function (oModel, sModelName) {
	var aArgs = Array.prototype.slice.call(arguments);

	// reset busy mode if model was changed
	this._setBusy(false);
	this._bInitBusy = false;

	// we made a request in this control, so we update the counter
	this._iTableUpdateRequested += 1;

	// attach events to listen to model updates and show/hide a busy indicator
	this._oTable.attachUpdateStarted(this._updateStarted, this);
	this._oTable.attachUpdateFinished(this._updateFinished, this);

	// pass the model to the table and also to the local control to allow binding of own properties
	this._oTable.setModel(oModel, sModelName);
	sap.m.TableSelectDialog.prototype._setModel.apply(this, aArgs);

	// reset the selection label when setting the model
	this._updateSelectionIndicator();

	return this;
};

/*
 * Forwards a function call to a managed object based on the aggregation name.
 * If the name is items, it will be forwarded to the table, otherwise called locally
 * @private
 * @param {string} sFunctionName the name of the function to be called
 * @param {string} sAggregationName the name of the aggregation asociated
 * @returns {mixed} the return type of the called function
 */
sap.m.TableSelectDialog.prototype._callMethodInManagedObject = function (sFunctionName, sAggregationName) {
	var aArgs = Array.prototype.slice.call(arguments);

	if (sAggregationName === "items") {
		// apply to the internal table
		return this._oTable[sFunctionName].apply(this._oTable, aArgs.slice(1));
	} else if (sAggregationName === "columns") {
		// apply to the internal table
		return this._oTable[sFunctionName].apply(this._oTable, aArgs.slice(1));
	} else {
		// apply to this control
		return sap.ui.base.ManagedObject.prototype[sFunctionName].apply(this, aArgs.slice(1));
	}
};

/**
 * Forwards aggregations with the name of items or columns to the internal table.
 * @overwrite
 * @public
 * @param {string} sAggregationName the name for the binding
 * @param {object} oBindingInfo the configuration parameters for the binding
 * @returns {this} this pointer for chaining
 */
sap.m.TableSelectDialog.prototype.bindAggregation = function () {
	var args = Array.prototype.slice.call(arguments);

	// propagate the bind aggregation function to list
	this._callMethodInManagedObject.apply(this, ["bindAggregation"].concat(args));
	return this;
};

sap.m.TableSelectDialog.prototype.validateAggregation = function (sAggregationName, oObject, bMultiple) {
	return this._callMethodInManagedObject("validateAggregation", sAggregationName, oObject, bMultiple);
};

sap.m.TableSelectDialog.prototype.setAggregation = function (sAggregationName, oObject, bSuppressInvalidate) {
	this._callMethodInManagedObject("setAggregation", sAggregationName, oObject, bSuppressInvalidate);
	return this;
};

sap.m.TableSelectDialog.prototype.getAggregation = function (sAggregationName, oDefaultForCreation) {
	return this._callMethodInManagedObject("getAggregation", sAggregationName, oDefaultForCreation);
};

sap.m.TableSelectDialog.prototype.indexOfAggregation = function (sAggregationName, oObject) {
	return this._callMethodInManagedObject("indexOfAggregation", sAggregationName, oObject);
};

sap.m.TableSelectDialog.prototype.insertAggregation = function (sAggregationName, oObject, iIndex, bSuppressInvalidate) {
	this._callMethodInManagedObject("insertAggregation", sAggregationName, oObject, iIndex, bSuppressInvalidate);
	return this;
};

sap.m.TableSelectDialog.prototype.addAggregation = function (sAggregationName, oObject, bSuppressInvalidate) {
	this._callMethodInManagedObject("addAggregation", sAggregationName, oObject, bSuppressInvalidate);
	return this;
};

sap.m.TableSelectDialog.prototype.removeAggregation = function (sAggregationName, oObject, bSuppressInvalidate) {
	this._callMethodInManagedObject("removeAggregation", sAggregationName, oObject, bSuppressInvalidate);
	return this;
};

sap.m.TableSelectDialog.prototype.removeAllAggregation = function (sAggregationName, bSuppressInvalidate) {
	return this._callMethodInManagedObject("removeAllAggregation", sAggregationName, bSuppressInvalidate);
};

sap.m.TableSelectDialog.prototype.destroyAggregation = function (sAggregationName, bSuppressInvalidate) {
	this._callMethodInManagedObject("destroyAggregation", sAggregationName, bSuppressInvalidate);
	return this;
};

sap.m.TableSelectDialog.prototype.getBinding = function (sAggregationName) {
	return this._callMethodInManagedObject("getBinding", sAggregationName);
};

sap.m.TableSelectDialog.prototype.getBindingInfo = function (sAggregationName) {
	return this._callMethodInManagedObject("getBindingInfo", sAggregationName);
};

sap.m.TableSelectDialog.prototype.getBindingPath = function (sAggregationName) {
	return this._callMethodInManagedObject("getBindingPath", sAggregationName);
};

sap.m.TableSelectDialog.prototype.getBindingContext = function (sModelName) {
	return this._oTable.getBindingContext(sModelName);
};

/*
 * Set the binding context for the internal table AND the current control so that 
 * both controls can be used with the context
 * @overwrite
 * @public
 * @param {sap.ui.model.Context} oContext the new context 
 * @param {string} sModelName the optional model name
 * @returns {this} this pointer for chaining
 */
sap.m.TableSelectDialog.prototype._setBindingContext = sap.m.TableSelectDialog.prototype.setBindingContext;
sap.m.TableSelectDialog.prototype.setBindingContext = function (oContext, sModelName) {
	var args = Array.prototype.slice.call(arguments);

	// pass the model to the list and also to the local control to allow binding of own properties
	this._oTable.setBindingContext(oContext, sModelName);
	sap.m.TableSelectDialog.prototype._setBindingContext.apply(this, args);

	return this;
};

/* =========================================================== */
/*           end: forward aggregation  methods to table       */
/* =========================================================== */

/* =========================================================== */
/*           begin: internal methods and properties            */
/* =========================================================== */

/*
 * Fires the search event on the internal when dialog is opened. 
 * This function is also called whenever a search event on the searchfield is triggered 
 * @private
 * @param {string} sValue the new Search value or undefined if called by management functions
 * @param {string} sEventType the search field event type that has been called (liveChange / search)
 * @returns {this} this pointer for chaining
 */
sap.m.TableSelectDialog.prototype._executeSearch = function (sValue, sEventType) {
	var oTable = this._oTable,
		oBinding = (oTable ? oTable.getBinding("items") : undefined),
		bSearchValueDifferent = (this._sSearchFieldValue !== sValue); // to prevent unwanted duplicate requests

	// fire either the Search event or the liveChange event when dialog is opened.
	// 1) when the clear icon is called then both liveChange and search events are fired but we only want to process the first one
	// 2) when a livechange has been triggered by typing we don't want the next search event to be processed (typing + enter or typing + search button)
	if (this._oDialog.isOpen() && ((bSearchValueDifferent && sEventType === "liveChange") || sEventType === "search")) {
		// set the internal value to the passed value to check if the same value has already been filtered (happens when clear is called, it fires liveChange and change events)
		this._sSearchFieldValue = sValue;

		// only set when the binding has already been executed
		// only set when the binding has already been executed
		if (oBinding) {
			// we made another request in this control, so we update the counter
			this._iTableUpdateRequested += 1;
			if (sEventType === "search") {
				// fire the search so the data can be updated externally
				this.fireSearch({value: sValue, itemsBinding: oBinding});
			} else if (sEventType === "liveChange") {
				// fire the liveChange so the data can be updated externally						  
				this.fireLiveChange({value: sValue, itemsBinding: oBinding});
			}
		} else {
			// no binding, just fire the event for manual filtering
			if (sEventType === "search") {
				// fire the search so the data can be updated externally
				this.fireSearch({value: sValue});
			} else if (sEventType === "liveChange") {
				// fire the liveChange so the data can be updated externally						  
				this.fireLiveChange({value: sValue});
			}
		}
	}

	return this;
};

/*
 * Internal function that shows/hides a local busy indicator and hides/shows the list
 * based on the parameter flag. For the first request, the search field is also hidden.
 * @private
 * @param {boolean} bBusy flag (true = show, false = hide)
 */
sap.m.TableSelectDialog.prototype._setBusy = function (bBusy) {
	if (this._iTableUpdateRequested) { // check if the event was caused by our control
		if (bBusy) {
			if (this._bFirstRequest) { // also hide the header bar for the first request
				this._oSubHeader.$().css('display', 'none');
			}
			this._oTable.addStyleClass('sapMSelectDialogListHide');
			this._oBusyIndicator.$().css('display', 'inline-block');
		} else {
			if (this._bFirstRequest) { // also show the header bar again for the first request
				this._oSubHeader.$().css('display', 'block');
				this._bFirstRequest = false;
			}
			this._oTable.removeStyleClass('sapMSelectDialogListHide');
			this._oBusyIndicator.$().css('display', 'none');
		}
	}
};

/*
 * Event function that is called when the model sent a request to update the data.
 * It shows a busy indicator and hides searchField and list in the dialog. 
 * @private
 * @param {jQuery.EventObject} oEvent The event object
 */
sap.m.TableSelectDialog.prototype._updateStarted = function (oEvent) {
	if (this.getModel() && this.getModel() instanceof sap.ui.model.odata.ODataModel) {
		if (this._oDialog.isOpen() && this._iTableUpdateRequested) {
			// only set busy mode when we have an oData model
			this._setBusy(true);
		} else {
			this._bInitBusy = true;
		}
	}
};

/*
 * Event function that is called when the model request is finished.
 * It hides the busy indicator and shows searchField and list in the dialog. 
 * @private
 * @param {jQuery.EventObject} oEvent The event object
 */
sap.m.TableSelectDialog.prototype._updateFinished = function (oEvent) {
	this._updateSelectionIndicator();
	// only reset busy mode when we have an oData model
	if (this.getModel() && this.getModel() instanceof sap.ui.model.odata.ODataModel) {
		this._setBusy(false);
		this._bInitBusy = false;
	}

	// we received a request (from this or from another control) so set the counter to 0
	this._iTableUpdateRequested = 0;
};

/*
 * Lazy load the ok button if needed for MultiSelect mode
 * @private
 * @return {sap.m.Button} the button
 */
sap.m.TableSelectDialog.prototype._getOkButton = function () {
	var that = this,
		fnOKAfterClose = null;

	fnOKAfterClose = function () {
			that._oSelectedItem = that._oTable.getSelectedItem();
			that._aSelectedItems = that._oTable.getSelectedItems();

			that._oDialog.detachAfterClose(fnOKAfterClose);
			that._fireConfirmAndUpdateSelection();
		};

	if (!this._oOkButton) {
		this._oOkButton = new sap.m.Button(this.getId() + "-ok", {
			text: this._oRb.getText("MSGBOX_OK"),
			press: function () {
				// attach the reset function to afterClose to hide the dialog changes from the end user 
				that._oDialog.attachAfterClose(fnOKAfterClose);
				that._oDialog.close();
			}
		});
	}	
	return this._oOkButton;
};

/*
 * Lazy load the cancel button
 * @private
 * @return {sap.m.Button} the button
 */
sap.m.TableSelectDialog.prototype._getCancelButton = function () {
	var that = this;

	if (!this._oCancelButton) {
		this._oCancelButton = new sap.m.Button(this.getId() + "-cancel", {
			text: this._oRb.getText("MSGBOX_CANCEL"),
			press: function () {
				that._onCancel();
			}
		});
	}	
	return this._oCancelButton;
};

/*
 * Internal event handler for the cancel button and ESC key
 * @private
 */
sap.m.TableSelectDialog.prototype._onCancel = function (oEvent) {
	var that = this,
		fnAfterClose = null;

	fnAfterClose = function () {
		// reset internal selection values
		that._oSelectedItem = null;
		that._aSelectedItems = [];
		that._sSearchFieldValue = null;

		// detach this function
		that._oDialog.detachAfterClose(fnAfterClose);

		// fire cancel event
		that.fireCancel();

		// reset selection
		that._resetSelection();
	};

	// attach the reset function to afterClose to hide the dialog changes from the end user 
	this._oDialog.attachAfterClose(fnAfterClose);
	this._oDialog.close();
};

/*
 * Internal function to update the selection indicator bar
 * @private
 */
sap.m.TableSelectDialog.prototype._updateSelectionIndicator = function () {
	var iSelectedContexts = this._oTable.getSelectedContexts(true).length,
		oInfoBar = this._oTable.getInfoToolbar();

	// update the selection label
	oInfoBar.setVisible(!!iSelectedContexts);
	oInfoBar.getContent()[0].setText(this._oRb.getText("TABLESELECTDIALOG_SELECTEDITEMS", [iSelectedContexts]));
};

/*
 * Internal function to fire the confirm event and to update the selection of the table.
 * The function is called on pressing ok and on close in single select mode 
 * @private
 */
sap.m.TableSelectDialog.prototype._fireConfirmAndUpdateSelection = function () {
	// fire confirm event with current selection
	this.fireConfirm({
		selectedItem: this._oSelectedItem,
		selectedItems: this._aSelectedItems,
		selectedContexts: this._oTable.getSelectedContexts(true)
	});
	this._updateSelection();
};

/*
 * Internal function to remove/keep the table selection based on property "rememberSelection"
 * @private
 */
sap.m.TableSelectDialog.prototype._updateSelection = function () {
	// cleanup old selection on close to allow reuse of dialog
	// due to the delayed call (dialog onAfterClose) the control could be already destroyed
	if (!this.getRememberSelections() && !this.bIsDestroyed) {
		this._oTable.removeSelections(true);
		delete this._oSelectedItem;
		delete this._aSelectedItems;
	}
};

/*
 * Internal function to reset the selection to the items that were selected when the dialog was opened
 * @private
 */
sap.m.TableSelectDialog.prototype._resetSelection = function () {
	var i = 0;

	// due to the delayed call (dialog onAfterClose) the control could be already destroyed
	if (!this.bIsDestroyed) {
		this._oTable.removeSelections();
		for(; i < this._aInitiallySelectedItems.length; i++) {
			this._oTable.setSelectedItem(this._aInitiallySelectedItems[i]);		
		}
	}
};

/* =========================================================== */
/*           end: internal methods                             */
/* =========================================================== */
