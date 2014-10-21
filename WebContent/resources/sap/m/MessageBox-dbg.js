/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides class sap.m.MessageBox
jQuery.sap.declare("sap.m.MessageBox");
jQuery.sap.require("sap.m.Button");
jQuery.sap.require("sap.m.Dialog");
jQuery.sap.require("sap.m.Text");
jQuery.sap.require("sap.ui.core.IconPool");
jQuery.sap.require("sap.ui.core.theming.Parameters");

/**
 * @class Provides easier methods to create sap.m.Dialog with type sap.m.DialogType.Message, such as standard alerts, 
 * confirmation dialogs, or arbitrary message dialogs.
 *
 * As <code>MessageBox</code> is a static class, a <code>jQuery.sap.require("sap.m.MessageBox");</code> statement
 * must be explicitly executed before the class can be used. Example:
 * <pre>
 *   jQuery.sap.require("sap.m.MessageBox");
 *   sap.m.MessageBox.show(
 *       "This message should appear in the message box.", {
 *           icon: sap.m.MessageBox.Icon.INFORMATION,
 *           title: "My message box title",
 *           actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
 *           onClose: function(oAction) { / * do something * / }
 *       }
 *	 );
 * </pre>
 *
 * @static
 * @public
 * @since 1.21.2
 */
sap.m.MessageBox = {};

sap.m.MessageBox._bOneDesign = (sap.ui.core.theming.Parameters.get("sapMPlatformDependent") !== "true");

sap.m.MessageBox._rb = sap.ui.getCore().getLibraryResourceBundle("sap.m");

/**
 * @class Enumeration of supported actions in a MessageBox.
 *
 * Each action is represented as a button in the message box. The values of this enumeration are used for both,
 * specifying the set of allowed actions as well as reporting back the user choice.
 * @static
 * @public
 */
sap.m.MessageBox.Action = {

  /**
   * Adds an "Ok" button to the message box.
   * @public
   */
  OK : "OK",

  /**
   * Adds a "Cancel" button to the message box.
   * @public
   */
  CANCEL : "CANCEL",

  /**
   * Adds a "Yes" button to the message box.
   * @public
   */
  YES : "YES",

  /**
   * Adds a "No" button to the message box.
   * @public
   */
  NO : "NO",

  /**
   * Adds an "Abort" button to the message box.
   * @public
   */
  ABORT : "ABORT",

  /**
   * Adds a "Retry" button to the message box.
   * @public
   */
  RETRY : "RETRY",

  /**
   * Adds an "Ignore" button to the message box.
   * @public
   */
  IGNORE : "IGNORE",

  /**
   * Adds a "Close" button to the message box.
   * @public
   */
  CLOSE : "CLOSE",
	  
  /**
   * Adds a "Delete" button to the message box.
   * @public
   */
  DELETE : "DELETE"
};

/**
 * @class Enumeration of the pre-defined icons that can be used in a MessageBox.
 * @static
 * @public
 */
sap.m.MessageBox.Icon = {

  /**
   * Shows no icon in the message box.
   * @public
   */
  NONE : undefined,
  /**
   * Shows the information icon in the message box.
   * @public
   */
  INFORMATION : "INFORMATION",

  /**
   * Shows the warning icon in the message box.
   * @public
   */
  WARNING : "WARNING",

  /**
   * Shows the error icon in the message box.
   * @public
   */
  ERROR : "ERROR",

  /**
   * Shows the success icon in the message box.
   * @public
   */
  SUCCESS : "SUCCESS",

  /**
   * Shows the question icon in the message box.
   * @public
   */
  QUESTION : "QUESTION"
};

(function() {
	var Action = sap.m.MessageBox.Action,
		Icon = sap.m.MessageBox.Icon,
		mClasses = {
				"INFORMATION": "sapMMessageBoxInfo",
				"WARNING": "sapMMessageBoxWarning",
				"ERROR": "sapMMessageBoxError",
				"SUCCESS": "sapMMessageBoxSuccess",
				"QUESTION": "sapMMessageBoxQuestion"
			},
		sURLBase,
		mIcons;
	
		if(sap.m.MessageBox._bOneDesign){
			mIcons = {
				"INFORMATION": sap.ui.core.IconPool.getIconURI("hint"),
				"WARNING": sap.ui.core.IconPool.getIconURI("warning2"),
				"ERROR": sap.ui.core.IconPool.getIconURI("alert"),
				"SUCCESS": sap.ui.core.IconPool.getIconURI("accept"),
				"QUESTION": sap.ui.core.IconPool.getIconURI("incident")
			};
		}else{
			sURLBase = jQuery.sap.getModulePath("sap.m", "/") + "themes/" 
				+ sap.ui.getCore().getConfiguration().getTheme()
				+ "/img/messagebox/";
			mIcons = {
				"INFORMATION": sURLBase + "info.png",
				"WARNING": sURLBase + "warning.png",
				"ERROR": sURLBase + "error.png",
				"SUCCESS": sURLBase + "success.png",
				"QUESTION": sURLBase + "question.png"
			};
		}

	/**
	 * Creates and displays a sap.m.Dialog with type sap.m.DialogType.Message with the given text and buttons, and optionally other parts.
	 * After the user has tapped a button, the <code>onClose</code> function is invoked when given.
	 *
	 * The only mandatory parameter is <code>sMessage</code>.
	 * 
	 * <pre>
	 * sap.m.MessageBox.show("This message should appear in the message box", {
	 *     icon: sap.m.MessageBox.Icon.NONE,      // default
	 *     title: "",                             // default
	 *     actions: sap.m.MessageBox.Action.OK    // default
	 *     onClose: null                          // default
	 *     styleClass: ""                         // default
	 * });
	 * </pre>
	 *
	 * The created dialog is executed asynchronously. When it has been created and registered for rendering,
	 * this function returns without waiting for a user reaction.
	 *
	 * When applications have to react on the users choice, they have to provide a callback function and
	 * postpone any reaction on the user choice until that callback is triggered.
	 *
	 * The signature of the callback is
	 *
	 *   function (oAction);
	 *
	 * where <code>oAction</code> is the button that the user has tapped. For example, when the user has pressed the close button,
	 * a sap.m.MessageBox.Action.Close is returned.
	 *
	 * @param {string} sMessage The message to be displayed.
	 * @param {object} [mOptions] Optionally other options.
	 * @param {sap.m.MessageBox.Icon} [mOptions.icon] The icon to be displayed.
	 * @param {string} [mOptions.title] The title of the message box.
	 * @param {sap.m.MessageBox.Action|sap.m.MessageBox.Action[]|string|string[]} [mOptions.actions=sap.m.MessageBox.Action.OK] Either a single action, or an array of two actions.
	 *      If no action(s) are given, the single action MessageBox.Action.OK is taken as a default for the parameter. From UI5 version 1.21, more than 2 actions are supported.
	 *      For the former versions, if more than two actions are given, only the first two actions are taken. Custom action string(s) can be provided, and then the translation
	 *      of custom action string(s) needs to be done by the application.
	 * @param {function} [mOptions.onClose] Function to be called when the user taps a button or closes the message box.
	 * @param {string} [mOptions.id] ID to be used for the dialog. Intended for test scenarios, not recommended for productive apps
	 * @param {string} [mOptions.styleClass] Added since version 1.21.2. CSS style class which is added to the dialog's root DOM node. The compact design can be activated by setting this to "sapUiSizeCompact"
	 * @public
	 */
	sap.m.MessageBox.show = function(sMessage, mOptions) {
		var oDialog, oResult = null, that = this, aButtons = [], i,
			sIcon, sTitle, vActions, fnCallback, sDialogId, sClass,
			mDefaults = {
				id: sap.ui.core.ElementMetadata.uid("mbox")
			};

		if (typeof mOptions === "string" || arguments.length > 2) {
			// Old API compatibility
			// oIcon, sTitle, vActions, fnCallback, sDialogId, sStyleClass
			sIcon = arguments[1];
			sTitle = arguments[2];
			vActions = arguments[3];
			fnCallback = arguments[4];
			sDialogId = arguments[5];
			sClass = arguments[6];
			mOptions = {
				icon: sIcon,
				title: sTitle,
				actions: vActions,
				onClose: fnCallback,
				id: sDialogId,
				styleClass: sClass
			};
		}

		mOptions = jQuery.extend({}, mDefaults, mOptions);

		// normalize the vActions array
		if(typeof mOptions.actions !== "undefined" && !jQuery.isArray(mOptions.actions)) {
			mOptions.actions = [mOptions.actions];
		}
		if(!mOptions.actions || mOptions.actions.length === 0) {
			mOptions.actions = [Action.OK];
		}

		/** creates a button for the given action */
		function button(sAction) {
			var sKey = "MSGBOX_"+ sAction,
				sText = that._rb.getText(sKey);

			//not from defined actions
			if(sKey === sText){
				sText = sAction;
			}

			var	oButton = new sap.m.Button({
				id: sap.ui.core.ElementMetadata.uid("mbox-btn-"),
				text: sText || sAction,
				press: function () {
					oResult = sAction;
					oDialog.close();
				}
			});
			return oButton;
		}

		for (i = 0 ; i < mOptions.actions.length ; i++) {
			aButtons.push(button(mOptions.actions[i]));
		}

		function onclose() {
			if(typeof mOptions.onClose === "function") {
				mOptions.onClose(oResult);
			}
			oDialog.detachAfterClose(onclose);
			oDialog.destroy();
		}

		oDialog = new sap.m.Dialog({
			id: mOptions.id,
			type: sap.m.DialogType.Message,
			title: mOptions.title,
			icon: mIcons[mOptions.icon],
			content: new sap.m.Text({
				text: sMessage
			}).addStyleClass("sapMMsgBoxText"),
			afterClose: onclose
		});

		if (aButtons.length > 2) {
			for (i = 0 ; i < aButtons.length ; i++) {
				oDialog.addButton(aButtons[i]);
			}
		} else {
			oDialog.setBeginButton(aButtons[0]);
			if (aButtons[1]) {
				oDialog.setEndButton(aButtons[1]);
			}
		}

		if (mClasses[mOptions.icon]) {
			oDialog.addStyleClass(mClasses[mOptions.icon]);
		}

		if (mOptions.styleClass) {
			oDialog.addStyleClass(mOptions.styleClass);
		}

		oDialog.open();
	};

	/**
	 * Displays an alert dialog with the given message and an OK button (no icons).
	 * 
	 * <pre>
	 * sap.m.MessageBox.alert("This message should appear in the alert", {
	 *     title: "Alert",                        // default
	 *     onClose: null,                         // default
	 *     styleClass: ""                         // default
	 * });
	 * </pre>
	 * 
	 * If a callback is given, it is called after the alert dialog has been closed
	 * by the user via the OK button. The callback is called with the following signature:
	 *
	 * <pre>
	 *   function (oAction)
	 * </pre>
	 * 
	 * where <code>oAction</code> can be either sap.m.MessageBox.Action.OK when the alert dialog is closed by tapping on the OK button 
	 * 	or null when the alert dialog is closed by calling <code>sap.m.InstanceManager.closeAllDialogs()</code>.
	 *
	 * The alert dialog opened by this method is processed asynchronously.
	 * Applications have to use the <code>fnCallback</code> to continue work after the
	 * user closed the alert dialog.
	 *
	 * @param {string} sMessage Message to be displayed in the alert dialog
	 * @param {object} [mOptions] Optionally other options
	 * @param {function} [mOptions.onClose] callback function to be called when the user closes the dialog
	 * @param {string} [mOptions.title='Alert'] Title to be displayed in the alert dialog
	 * @param {string} [mOptions.id] ID to be used for the alert dialog. Intended for test scenarios, not recommended for productive apps
	 * @param {string} [mOptions.styleClass] Added since version 1.21.2. CSS style class which is added to the alert dialog's root DOM node. The compact design can be activated by setting this to "sapUiSizeCompact"
	 * @public
	 */
	sap.m.MessageBox.alert = function(sMessage, mOptions) {
		var mDefaults = {
				icon: Icon.NONE,
				title: this._rb.getText("MSGBOX_TITLE_ALERT"),
				actions: Action.OK,
				id: sap.ui.core.ElementMetadata.uid("alert")
			}, fnCallback, sTitle, sDialogId, sStyleClass;

		if (typeof mOptions === "function" || arguments.length > 2) {
			// Old API Compatibility
			// fnCallback, sTitle, sDialogId, sStyleClass
			fnCallback = arguments[1];
			sTitle = arguments[2];
			sDialogId = arguments[3];
			sStyleClass = arguments[4];
			mOptions = {
				onClose: fnCallback,
				title: sTitle,
				id: sDialogId,
				styleClass: sStyleClass
			};
		}

		mOptions = jQuery.extend({}, mDefaults, mOptions);

		return sap.m.MessageBox.show(sMessage, mOptions);
	};

	/**
	 * Displays a confirmation dialog with the given message, a QUESTION icon, an OK button
	 * and a Cancel button. If a callback is given, it is called after the confirmation box 
	 * has been closed by the user via one of the buttons.
	 * 
	 * <pre>
	 * sap.m.MessageBox.confirm("This message should appear in the confirm", {
	 *     title: "Confirm",                      // default
	 *     onClose: null                          // default
	 *     styleClass: ""                         // default
	 * });
	 * </pre>
	 * 
	 * The callback is called with the following signature
	 *
	 * <pre>
	 *   function(oAction)
	 * </pre>
	 *
	 * where oAction is set by one of the following three values:
	 * 1. sap.m.MessageBox.Action.OK: OK (confirmed) button is tapped.
	 * 2. sap.m.MessageBox.Action.Cancel: Cancel (unconfirmed) button is tapped.
	 * 3. null: Confirm dialog is closed by Calling <code>sap.m.InstanceManager.closeAllDialogs()</code>
	 *
	 * The confirmation dialog opened by this method is processed asynchronously.
	 * Applications have to use the <code>fnCallback</code> to continue work after the
	 * user closed the confirmation dialog
	 *
	 * @param {string} sMessage Message to display in the confirmation dialog
	 * @param {object} [mOptions] Optionally other options
	 * @param {function} [mOptions.onClose] Callback to be called when the user closes the dialog
	 * @param {string} [mOptions.onClose='Confirmation'] Title to display in the confirmation dialog
	 * @param {string} [mOptions.id] ID to be used for the confirmation dialog. Intended for test scenarios, not recommended for productive apps
	 * @param {string} [mOptions.styleClass] Added since version 1.21.2. CSS style class which is added to the confirmation dialog's root DOM node. The compact design can be activated by setting this to "sapUiSizeCompact"
	 * @public
	 */
	sap.m.MessageBox.confirm = function(sMessage, mOptions) {
		var mDefaults = {
			icon: Icon.QUESTION,
			title: this._rb.getText("MSGBOX_TITLE_CONFIRM"),
			actions: [Action.OK, Action.CANCEL],
			id: sap.ui.core.ElementMetadata.uid("confirm")
		}, fnCallback, sTitle, sDialogId, sStyleClass;

		if (typeof mOptions === "function" || arguments.length > 2) {
			// Old API Compatibility
			// fnCallback, sTitle, sDialogId
			fnCallback = arguments[1];
			sTitle = arguments[2];
			sDialogId = arguments[3];
			sStyleClass = arguments[4];
			mOptions = {
				onClose: fnCallback,
				title: sTitle,
				id: sDialogId,
				styleClass: sStyleClass
			};
		}

		mOptions = jQuery.extend({}, mDefaults, mOptions);

		return sap.m.MessageBox.show(sMessage, mOptions);
	};
}());