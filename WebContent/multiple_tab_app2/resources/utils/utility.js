var oBundle = initLocalization("multiple_tab_app2/globalization/i18n.properties");
/**
 * To support different languages, the file i18n.properties needs to be translated to the desired language 
 * and saved in same project folder after changing the file name to the corresponding language name (e.g. i18n_en_US.properties )
 * @param propertiesFile - path to properties files. 
 * @returns locale resource object according to client browser locale. 
 */
 function initLocalization(propertiesFile) {
	var sLocale = sap.ui.getCore().getConfiguration().getLanguage();
	
	return jQuery.sap.resources({
		url : propertiesFile,
		locale : sLocale
	});
}

/**
 * Writes error details to console log and displays an error message. 
 * @param oError - an error object containing the error details.
 */
function displayError(error){
	jQuery.sap.require("sap.ui.commons.MessageBox"); 
	
	var messageOut = error.message? oBundle.getText("MESSAGE") + " " +  error.message : "";
	var responseTextOut = error.responseText? "\n" + oBundle.getText("RESPONSE_TEXT") + " " +  error.responseText : "";
	var statusCodeOut = error.statusCode? "\n" + oBundle.getText("STATUS_CODE") + " " +  error.statusCode : "";
	var statusTextOut = error.statusText? "\n" + oBundle.getText("STATUS_TEXT") + " " +  error.statusText : "";
	var requestUriOut = error.requestUri? "\n" + oBundle.getText("REQUEST_URI") + " " +  error.requestUri : "";
	
	var errorMessage = 	messageOut + responseTextOut + statusCodeOut + statusTextOut + requestUriOut;


	jQuery.sap.log.error(errorMessage);

	sap.ui.commons.MessageBox.show(	error.message,
			sap.ui.commons.MessageBox.Icon.ERROR,
			oBundle.getText("ERROR_MESSAGE_TITLE"),
			[sap.ui.commons.MessageBox.Action.OK]
	);
}

/**
 * Function that formats date time values as received from an Odata service. 
 */
function fnDateFormatter(oValue){
	if (oValue == undefined || oValue == "")
		return;
	
    var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance();
    return oDateFormat.format(new Date(oValue));
};
