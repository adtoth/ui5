/*
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides TablePersoDialog
jQuery.sap.declare("sap.m.TablePersoDialog");
jQuery.sap.require("sap.ui.base.ManagedObject");
jQuery.sap.require("sap.m.InputListItem");
jQuery.sap.require("sap.m.Dialog");
jQuery.sap.require("sap.m.List");
jQuery.sap.require("sap.m.Toolbar");
jQuery.sap.require("sap.m.Button");


/**
 * The TablePersoDialog can be used to display and allow modification of personalization settings relating to a Table. It displays the columns of the table that it refers to by using
 * <ul><li>The result of calling sap.m.TablePersoProvider's 'getCaption' callback if it is implemented and delivers a non-null value for a column</li>
 * <li>the column header control's 'text' property if no caption property is available</li>
 * <li>the column header control's 'title' property if neither 'text' nor 'caption' property are available</li>
 * <li>the column id is displayed as last fallback, if none of the above is at hand. In that case, a warning is logged. </li></ul>
 *
 * @param {string}
 *			[sId] optional id for the new control; generated automatically if
 *			no non-empty id is given Note: this can be omitted, no matter
 *			whether <code>mSettings</code> will be given or not!
 * @param {object}
 *			[mSettings] optional map/JSON-object with initial settings for the
 *			new component instance
 * @public
 *
 * @class Table Personalization Dialog
 * @extends sap.ui.base.ManagedObject
 * @author SAP
 * @version 1.22.5
 * @name sap.m.TablePersoDialog
 */
sap.ui.base.ManagedObject.extend("sap.m.TablePersoDialog", /** @lends sap.m.TablePersoDialog */

{
	constructor : function(sId, mSettings) {

		sap.ui.base.ManagedObject.apply(this, arguments);

	},

	metadata : {
		properties: {
			"contentWidth": {type: "sap.ui.core.CSSSize"},
			"contentHeight": {type: "sap.ui.core.CSSSize", since: "1.22"}, 
			"persoMap": {type: "object"},
			"columnInfoCallback": {type: "object", since: "1.22"},
			"initialColumnState": {type: "object", since: "1.22"},
			"hasGrouping": {type: "boolean", since: "1.22"},
			"showSelectAll": {type: "boolean", since: "1.22"},
			"showResetAll": {type: "boolean", since: "1.22"},
		},
		aggregations: {
			"persoService": {
				type: "Object",
				multiple: false
			}
		},
		associations: {
			"persoDialogFor": sap.m.Table
		},
		events: {
			confirm: {},
			cancel: {}
		},
		library: "sap.m"
	}

});




/**
 * Initializes the TablePersoDialog instance after creation.
 *
 * @function
 * @name sap.m.TablePeroDialog.prototype.init
 * @protected
 */
sap.m.TablePersoDialog.prototype.init = function() {
	var that = this,
		iLiveChangeTimer = 0;

	// Resource bundle, for texts
	this._oRb = sap.ui.getCore().getLibraryResourceBundle("sap.m");

	// To store the column settings
	this._oP13nModel = new sap.ui.model.json.JSONModel();
	// Make sure that model can contain more than the 100 entries
	// it may contain by default
	this._oP13nModel.setSizeLimit(Number.MAX_VALUE);
	
	this._fnUpdateCheckBoxes = jQuery.proxy(function(oEvent) {
		var bSelected = oEvent.getParameter('selected'),
			oData = this._oP13nModel.getData();
		if(oEvent.getSource().getParent().getParent() == this._oSelectAllHeader){
			//'Select All' checkbox has been changed
			oData.aColumns.forEach(function(oColumn) {
				oColumn.visible = bSelected;
			});
		} else {
			//One of the list checkboxes has been modified
			//Update the state of the 'Select All' checkbox
			var bSelectAll = !oData.aColumns.some(function(oColumn) {
					return !oColumn.visible;
				}
			);
			oData.aHeaders[0].visible = bSelectAll;
		}
		//call setData to trigger update of bound controls
		this._oP13nModel.setData(oData);
	}, this);
	

	// Template for list inside the dialog - 1 item per column
	this._oColumnItemTemplate = new sap.m.InputListItem({
		label: "{Personalization>text}",
		content: new sap.m.CheckBox({
			selected: "{Personalization>visible}",
			select: this._fnUpdateCheckBoxes
		}),
	}).addStyleClass("sapMPersoDialogLI");
	
	// Template for fixed header list inside the dialog
	this._oHeaderItemTemplate = new sap.m.InputListItem({
		label: "{Personalization>text}",
		content: new sap.m.CheckBox({
			selected: "{Personalization>visible}",
			select: this._fnUpdateCheckBoxes
		}),
	}).addStyleClass("sapMPersoDialogLI").addStyleClass("sapMPersoDialogLIHeader");

	//Button definition for sorting of the table content(up/down)
	this._oButtonUp = new sap.m.Button({
					icon: "sap-icon://arrow-top",
					enabled: false,
					press: function(oEvent) {
						that._moveItem(-1);
					}
	});
	
	this._oButtonDown = new sap.m.Button({
					icon: "sap-icon://arrow-bottom",
					enabled: false,
					press: function(oEvent) {
						  that._moveItem(1);
					}
	});
	
	this._fnHandleResize = function() {
		//check if dialog is rendered
		var $dialogCont = jQuery("#" + that._oDialog.getId() + "-cont");
		if($dialogCont.children().length > 0 && that._oSelectAllHeader.$().length > 0) {
			var iContentHeight = $dialogCont.children()[0].clientHeight;
			var iHeaderHeight = that.getShowSelectAll() ? that._oSelectAllHeader.$()[0].clientHeight : 0;
			that._oScrollContainer.setHeight((iContentHeight - iHeaderHeight) + 'px');
		}
	};
	
	this._fnUpdateArrowButtons = function() {
		
		//Initialisation of the enabled property 
		var bButtonDownEnabled = true,
			bButtonUpEnabled = true,
			sValue = that._oSearchField.getValue(),
			iItemCount = that._oList.getItems().length;
		if(!!sValue || that._oList.getSelectedItems().length === 0){
			//Disable buttons if search filters the list or if list is empty
			bButtonUpEnabled = false;
			bButtonDownEnabled = false;
		} else {
			//data available (1 or more items)
			if (that._oList.getItems()[0].getSelected()) {
				//first item selected: disable button "arrow top"
				bButtonUpEnabled = false;
			};
			if (that._oList.getItems()[iItemCount-1].getSelected()){
				//last item selected: disable button "arrow bottom"
				bButtonDownEnabled = false;
			};
		}
		
		that._oButtonUp.setEnabled(bButtonUpEnabled);
		that._oButtonDown.setEnabled(bButtonDownEnabled);
	};
	
	this._fnAfterListRendering = function(oEvent) {
		//find all checkboxes in the list
		var aItems = oEvent.srcControl.$().find('.sapMCb'),
			iItemsLength = aItems.length;
		//'forEach' does not work
		for(var i=0; i<iItemsLength; i++) {
			var $checkBox = jQuery(aItems[i]).parent(),
				aSiblings = $checkBox.siblings(),
				$label = aSiblings.length == 1 ? jQuery(aSiblings[0]) : null;
			
			if($label) {
				$checkBox = $checkBox.detach();
				$checkBox[0].className = 'sapMLIBSelectM';
				$checkBox.insertBefore($label);
			}
			
		}
	};
	
	this._oList =  new sap.m.List({
		includeItemInSelection: true,
		noDataText: this._oRb.getText('PERSODIALOG_NO_DATA'),
		mode: sap.m.ListMode.SingleSelectMaster,
		select: this._fnUpdateArrowButtons,
	});
	
	this._oSelectAllHeader =  new sap.m.List({
		includeItemInSelection: true,
		mode: sap.m.ListMode.None,
	});
	
	this._oList.addDelegate({onAfterRendering : this._fnAfterListRendering});
	this._oSelectAllHeader.addDelegate({onAfterRendering : this._fnAfterListRendering});
	
	this._oSearchField = new sap.m.SearchField(this.getId() + "-searchField", {
		width: "100%",
		liveChange: function (oEvent) {
			var sValue = oEvent.getSource().getValue(),
				iDelay = (sValue ? 300 : 0); // no delay if value is empty

			// execute search after user stops typing for 300ms
			clearTimeout(iLiveChangeTimer);
			if (iDelay) {
				iLiveChangeTimer = setTimeout(function () {
					that._executeSearch();
				}, iDelay);
			} else {
				that._executeSearch();
			}
		},
		// execute the standard search
		search: function (oEvent) {
			that._executeSearch();
		}
	});
	
	this._oScrollContainer = new sap.m.ScrollContainer({
		horizontal: false,
		vertical: true,
		content:[this._oList],
		width:'100%',
	});
	
	this._resetAllButton = new sap.m.Button({
		icon: "sap-icon://undo",
		tooltip: this._oRb.getText('PERSODIALOG_UNDO'),
		press : function () {
			that._resetAll();
		}
	});
	
	this._oSelectAllToolbar = new sap.m.Toolbar({ 
		active: true,
		design : sap.m.ToolbarDesign.Transparent,
		content: [this._oSelectAllHeader, this._resetAllButton]
	}).addStyleClass("sapMPersoDialogFixedBar");;
	
	this._oDialog = new sap.m.Dialog({
		title : this._oRb.getText("PERSODIALOG_COLUMNS_TITLE"),
		stretch: sap.ui.Device.system.phone,
		horizontalScrolling: false,
		verticalScrolling: false,
		content : [ this._oSelectAllToolbar, this._oScrollContainer],
		subHeader : new sap.m.Toolbar({
			active : true,
			content: [ this._oButtonUp, this._oButtonDown, this._oSearchField ]
		}),
		leftButton : new sap.m.Button({
			text : this._oRb.getText("PERSODIALOG_OK"),
			press : function () {
				that._oDialog.close();
				that._oSearchField.setValue("");
				that._oSelectAllToolbar.setVisible(true);
				sap.ui.Device.resize.detachHandler(that._fnHandleResize);
				that.fireConfirm();
			}
		}),
		rightButton : new sap.m.Button({
			text: this._oRb.getText("PERSODIALOG_CANCEL"),
			press: function () {
				that._oDialog.close();
				that._oSearchField.setValue("");
				that._oSelectAllToolbar.setVisible(true);
				sap.ui.Device.resize.detachHandler(that._fnHandleResize);
				that.fireCancel();
			}
		})
	}).addStyleClass("sapMPersoDialog");
	
};

/**
 * Returns the personalizations made. Currently supports
 * a 'columns' property which holds an array of settings,
 * one element per column in the associated table. The element
 * contains column-specific information as follows: id: column id;
 * order: new order; text: the column's header text that was displayed
 * in the dialog; visible: visibility (true or false).
 *
 * @return object personalizationData
 * @public
 */
sap.m.TablePersoDialog.prototype.retrievePersonalizations = function () {
	return this._oP13nModel.getData();
};

/**
 * Sets the content of the dialog, being list items representing
 * the associated table's column settings, and opens the dialog
 * @public
 */
sap.m.TablePersoDialog.prototype.open = function () {
	var aSorter = null;
	if(this.getHasGrouping()) {
		aSorter = [new sap.ui.model.Sorter('group', false, true)];
	}
	// Get the associated Table's column info and set it into the Personalization model
	this._readCurrentSettingsFromTable();

	this._oDialog.setModel(this._oP13nModel, "Personalization");
	this._oList.bindAggregation("items", {
		path: "Personalization>/aColumns", 
		sorter: aSorter, 
		template: this._oColumnItemTemplate
	});
	this._oSelectAllHeader.bindAggregation("items", {
		path: "Personalization>/aHeaders", 
		template: this._oHeaderItemTemplate
	});
	
	//Update 'Move' button's state
	this._fnUpdateArrowButtons.call(this);

	// Now show the dialog
	this._oDialog.open();
	
	this._fnHandleResize.call(this);
	sap.ui.Device.resize.attachHandler(this._fnHandleResize);
};


sap.m.TablePersoDialog.prototype.setContentHeight = function(sHeight) {
	this.setProperty("contentHeight", sHeight, true);
	this._oDialog.setContentHeight(sHeight);
	return this;
};

sap.m.TablePersoDialog.prototype.setContentWidth = function(sWidth) {
	this.setProperty("contentWidth", sWidth, true);
	this._oDialog.setContentWidth(sWidth);
	return this;
};

/**
 * Destroys the control
 * @private
 */
sap.m.TablePersoDialog.prototype.exit = function () {
	this._oRb = null;
	this._oP13nModel = null;

	if (this._oColumnItemTemplate) {
		this._oColumnItemTemplate.destroy();
		this._oColumnItemTemplate = null;
	}
	
	if (this._oHeaderItemTemplate) {
		this._oHeaderItemTemplate.destroy();
		this._oHeaderItemTemplate = null;
	}
	
	if (this._oSelectAllHeader) {
		this._oSelectAllHeader.destroy();
		this._oSelectAllHeader = null;
	}
	
	if (this._oList) {
		this._oList.destroy();
		this._oList = null;
	}
	
	if (this._oSearchField) {
		this._oSearchField.destroy();
		this._oSearchField = null;
	}
	
	if (this._oScrollContainer) {
		this._oScrollContainer.destroy();
		this._oScrollContainer = null;
	}

	if (this._oDialog) {
		this._oDialog.destroy();
		this._oDialog = null;
	}
	
	if(this._oButtonDown){
		this._oButtonDown.destroy();
		this._oButtonDown = null;
	}
	if(this._oButtonUp){
		this._oButtonUp.destroy();
		this._oButtonUp = null;
	}
};

/* =========================================================== */
/*           begin: internal methods                           */
/* =========================================================== */

/**
* Turn column visibility and order back to initial state (state before table
* was personalized)
* @private
*/
sap.m.TablePersoDialog.prototype._resetAll = function () {
	if(this.getInitialColumnState()) {
		//Deep copy of Initial Data, otherwise initial data will be changed
		//and can only be used once to restore the initial state
		
		var aInitialStateCopy = jQuery.extend(true, [], this.getInitialColumnState()),
		    that = this;
		
		//CSN 0120061532 0001380609 2014
		//Make sure that captions are not replaced by column id's. This my be the case if
		//initalStateCopy has been created too early
		if(!!this._mColumnCaptions) {
			aInitialStateCopy.forEach(
				function(oColumn) {
					oColumn.text = that._mColumnCaptions[oColumn.id];
			});
		}
		
		this._oP13nModel.getData().aColumns = aInitialStateCopy;
		
		this._oP13nModel.getData().aHeaders[0].visible = !this.getInitialColumnState().some(function(oColumn) {
			return !oColumn.visible;
		});
		
		this._oP13nModel.updateBindings();
	}
};



/**
 * Moves an item up or down, swapping it with the neighbour.
 * Does this in the bound model.
 * @private
 * @param {int} iDirection the move direction (-1 up, 1 down)
 */
sap.m.TablePersoDialog.prototype._moveItem = function (iDirection) {

	// Abort if nothing selected
	var oSelectedItem = this._oList.getSelectedItem();
	if (! oSelectedItem) return;

	// The items themselves
	var oData = this._oP13nModel.getData();

	// Get array index of selected item
	var item = oSelectedItem.getBindingContext("Personalization").getPath().split("/").pop() * 1;

	// Get array index of item to swap with
	var swap = item + iDirection;

	// Abort if out of bounds
	if ( swap < 0 || swap >= oData.aColumns.length ) return;

	// Do the swap
	var temp = oData.aColumns[swap];
	oData.aColumns[swap] = oData.aColumns[item];
	//Make sure the order member is adapted as well!
	oData.aColumns[swap].order = swap;
	oData.aColumns[item] = temp;
	//Make sure the order member is adapted as well!
	oData.aColumns[item].order = item;

	// Remove selection before binding
	this._oList.removeSelections(true);

	//call setData to trigger update of bound controls
	this._oP13nModel.updateBindings();
	
	// Switch the selected item
	var oSwapItem = this._oList.getItems()[swap];
	this._oList.setSelectedItem(oSwapItem, true);
	
	// Scroll to selected item
	// Make sure that item is selected so 'oSwapItem.$()' 
	// is not empty
	sap.ui.getCore().applyChanges();
	// swapItem need to be rendered, otherwise we can not
	// perform the necessary calculations
	if(!!oSwapItem.getDomRef()) {
		var iElementOffset =  oSwapItem.$().position().top,
			//this is the minimal height that should be visible from the selected element
		    //18 means 18px which corresponds to 3em
			iMinHeight=18,
			iViewPortHeight = this._oScrollContainer.$().height(),
			iViewPortStart = this._oScrollContainer.$().offset().top - this._oList.$().offset().top,
			iViewPortEnd = iViewPortStart + iViewPortHeight;
		
		if(iElementOffset < iViewPortStart ) {
			//selected element is above or below visible viewport
			//scroll page up
			this._oScrollContainer.scrollTo(0, Math.max(0, iViewPortStart - iViewPortHeight + iMinHeight));
		} else if(iElementOffset + iMinHeight > iViewPortEnd){
			//selected element is above or below visible viewport
			//scroll down a page (this is the height of the scroll container)
			this._oScrollContainer.scrollTo(0, iElementOffset);
		}
		// otherwise, element is within the scroll container's viewport, so no action is necessary 
	}
	
	this._fnUpdateArrowButtons.call(this);
	
};


/**
 * Reads current column settings from the table and stores in the model
 * @private
 */
sap.m.TablePersoDialog.prototype._readCurrentSettingsFromTable = function() {
	var oTable = sap.ui.getCore().byId(this.getPersoDialogFor()),
		that = this,
		aCurrentColumns = this.getColumnInfoCallback().call(this, oTable, this.getPersoMap(), this.getPersoService());
	this._oP13nModel.setData({ aColumns : aCurrentColumns, aHeaders : [{
		text : this._oRb.getText("PERSODIALOG_SELECT_ALL"),
		visible : !aCurrentColumns.some(function(oColumn) {
				return !oColumn.visible;
			}
		),
		id: this.getId() + '_SelectAll'
	}] });
	
	//Remember column captions, needed for 'Reset All'
	this._mColumnCaptions = {};
	aCurrentColumns.forEach(
			function(oColumn) { 
				that._mColumnCaptions[oColumn.id] = oColumn.text; 
	});
};

/**
 * Filters the columns list with the given sValue
 * @private
 */
sap.m.TablePersoDialog.prototype._executeSearch = function () {
	var sValue = this._oSearchField.getValue(),
		oFilter = new sap.ui.model.Filter("text", sap.ui.model.FilterOperator.Contains, sValue),
		oBinding = this._oList.getBinding("items");
	
	this._oSelectAllToolbar.setVisible(!sValue && this.getShowSelectAll());
	oBinding.filter([oFilter]);
	this._fnUpdateArrowButtons.call(this);
	return this;
};

/**
 * Reflector for the TablePersoDialog's Dialog's hasGrouping property.
 * @public
 */
sap.m.TablePersoDialog.prototype.setHasGrouping = function (bHasGrouping) {
	this.setProperty("hasGrouping", bHasGrouping, true);
	var oBar = this._oDialog.getSubHeader();
	if(!bHasGrouping) {
		if(oBar.getContent().length === 1) {
			//Only search field is displayed, add up- and down
			//buttons
			oBar.insertContent(this._oButtonDown, 0);
			oBar.insertContent(this._oButtonUp, 0);
		}
	} else {
		oBar.removeContent(this._oButtonUp);
		oBar.removeContent(this._oButtonDown);
	}
	return this;
};

/**
 * Reflector for the TablePersoDialog's Dialog's showSelectAll property.
 * @public
 */
sap.m.TablePersoDialog.prototype.setShowSelectAll = function (bShowSelectAll) {
	this.setProperty("showSelectAll", bShowSelectAll, true);
	this._oSelectAllToolbar.setVisible(bShowSelectAll);
	//Need to recalculate content height now
	this._fnHandleResize.call(this);
	return this;
};

/**
 * Reflector for the TablePersoDialog's Dialog's showResetAll property.
 * @public
 */
sap.m.TablePersoDialog.prototype.setShowResetAll = function (bShowResetAll) {
	this.setProperty("showResetAll", bShowResetAll, true);
	this._resetAllButton.setVisible(bShowResetAll);
	return this;
};



