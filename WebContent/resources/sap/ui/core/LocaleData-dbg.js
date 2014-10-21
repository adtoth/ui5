/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

//Provides the locale object sap.ui.core.LocaleData
sap.ui.define(['jquery.sap.global', 'sap/ui/base/Object', './Configuration', './Locale'],
	function(jQuery, BaseObject, Configuration, Locale) {
	"use strict";

	/** 
	 * Creates an instance of the Data.
	 *
	 * @class Data provides access to locale-specific data, like date formats, number formats, currencies, etc.
	 *
	 * @param {sap.ui.core.Locale} oLocale the locale
	 *
	 * @extends sap.ui.base.Object
	 * @author SAP AG
	 * @version 1.22.5
	 * @constructor
	 * @public
	 * @name sap.ui.core.LocaleData
	 */
	var LocaleData = BaseObject.extend("sap.ui.core.LocaleData", /** @lends sap.ui.core.LocaleData.prototype */ {

		constructor : function(oLocale) {
			BaseObject.apply(this);
			this.mData = getData(oLocale);
		},

		_get : function(sKey) {
			return this.mData[sKey];
		},

		/**
		 * Get orientation (left-to-right or right-to-left)
		 *
		 * @returns {string} character orientation for this locale
		 * @public
		 */
		getOrientation : function() {
			return this._get("orientation");
		},

		/**
		 * Get locale specific language names
		 *
		 * @returns {object} map of locale specific language names
		 * @public
		 */
		getLanguages : function() {
			return this._get("languages");
		},

		/**
		 * Get locale specific script names
		 *
		 * @returns {object} map of locale specific script names
		 * @public
		 */
		getScripts : function() {
			return this._get("scripts");
		},

		/**
		 * Get locale specific territory names
		 *
		 * @returns {object} map of locale specific territory names
		 * @public
		 */
		getTerritories : function() {
			return this._get("territories");
		},

		/**
		 * Get month names in width "narrow", "abbreviated" or "wide"
		 *
		 * @param {string} sWidth the required width for the month names
		 * @returns {array} array of month names (starting with January)
		 * @public
		 */
		getMonths : function(sWidth) {
			jQuery.sap.assert(sWidth == "narrow" || sWidth == "abbreviated" || sWidth == "wide", "sWidth must be narrow, abbreviated or wide");
			return this._get("months-format-" + sWidth);
		},

		/**
		 * Get stand alone month names in width "narrow", "abbreviated" or "wide"
		 *
		 * @param {string} sWidth the required width for the month names
		 * @returns {array} array of month names (starting with January)
		 * @public
		 */
		getMonthsStandAlone : function(sWidth) {
			jQuery.sap.assert(sWidth == "narrow" || sWidth == "abbreviated" || sWidth == "wide", "sWidth must be narrow, abbreviated or wide");
			return this._get("months-standAlone-" + sWidth);
		},

		/**
		 * Get day names in width "narrow", "abbreviated" or "wide"
		 *
		 * @param {string} sWidth the required width for the day names
		 * @returns {array} array of day names (starting with Sunday)
		 * @public
		 */
		getDays : function(sWidth) {
			jQuery.sap.assert(sWidth == "narrow" || sWidth == "abbreviated" || sWidth == "wide", "sWidth must be narrow, abbreviated or wide");
			return this._get("days-format-" + sWidth);
		},

		/**
		 * Get stand alone day names in width "narrow", "abbreviated" or "wide"
		 *
		 * @param {string} sWidth the required width for the day names
		 * @returns {array} array of day names (starting with Sunday)
		 * @public
		 */
		getDaysStandAlone : function(sWidth) {
			jQuery.sap.assert(sWidth == "narrow" || sWidth == "abbreviated" || sWidth == "wide", "sWidth must be narrow, abbreviated or wide");
			return this._get("days-standAlone-" + sWidth);
		},

		/**
		 * Get quarter names in width "narrow", "abbreviated" or "wide"
		 *
		 * @param {string} sWidth the required width for the quarter names
		 * @returns {array} array of quarters
		 * @public
		 */
		getQuarters : function(sWidth) {
			jQuery.sap.assert(sWidth == "narrow" || sWidth == "abbreviated" || sWidth == "wide", "sWidth must be narrow, abbreviated or wide");
			return this._get("quarters-format-" + sWidth);
		},

		/**
		 * Get day periods in width "narrow", "abbreviated" or "wide"
		 *
		 * @param {string} sWidth the required width for the day period names
		 * @returns {array} array of day periods (AM, PM)
		 * @public
		 */
		getDayPeriods : function(sWidth) {
			jQuery.sap.assert(sWidth == "narrow" || sWidth == "abbreviated" || sWidth == "wide", "sWidth must be narrow, abbreviated or wide");
			return this._get("dayPeriods-format-" + sWidth);
		},

		/**
		 * Get date pattern in style "short", "medium", "long" or "full"
		 *
		 * @param {string} sStyle the required style for the date pattern
		 * @returns {string} the selected date pattern
		 * @public
		 */
		getDatePattern : function(sStyle) {
			jQuery.sap.assert(sStyle == "short" || sStyle == "medium" || sStyle == "long" || sStyle == "full", "sStyle must be short, medium, long or full");
			return this._get("dateFormat-" + sStyle);
		},

		/**
		 * Get time pattern in style "short", "medium", "long" or "full"
		 *
		 * @param {string} sStyle the required style for the date pattern
		 * @returns {string} the selected time pattern
		 * @public
		 */
		getTimePattern : function(sStyle) {
			jQuery.sap.assert(sStyle == "short" || sStyle == "medium" || sStyle == "long" || sStyle == "full", "sStyle must be short, medium, long or full");
			return this._get("timeFormat-" + sStyle);
		},

		/**
		 * Get datetime pattern in style "short", "medium", "long" or "full"
		 *
		 * @param {string} sStyle the required style for the datetime pattern
		 * @returns {string} the selected datetime pattern
		 * @public
		 */
		getDateTimePattern : function(sStyle) {
			jQuery.sap.assert(sStyle == "short" || sStyle == "medium" || sStyle == "long" || sStyle == "full", "sStyle must be short, medium, long or full");
			return this._get("dateTimeFormat-" + sStyle);
		},

		/**
		 * Get number symbol "decimal", "group", "plusSign", "minusSign"
		 *
		 * @param {string} sType the required type of symbol
		 * @returns {string} the selected number symbol
		 * @public
		 */
		getNumberSymbol : function(sType) {
			jQuery.sap.assert(sType == "decimal" || sType == "group" || sType == "plusSign" || sType == "minusSign", "sType must be decimal, group, plusSign or minusSign");
			return this._get("symbols-latn-" + sType);
		},
		
		/**
		 * Get decimal format pattern
		 *
		 * @returns {string} The pattern
		 * @public
		 */
		getDecimalPattern : function() {
			return this._get("decimalFormat").standard;
		},
		
		/**
		 * Get currency format pattern
		 *
		 * @returns {string} The pattern
		 * @public
		 */
		getCurrencyPattern : function() {
			return this._get("currencyFormat").standard;
		},
		
		/**
		 * Get percent format pattern
		 *
		 * @returns {string} The pattern
		 * @public
		 */
		getPercentPattern : function() {
			return this._get("percentFormat").standard;
		},

		/**
		 * Returns the day that usually is regarded as the first day 
		 * of a week in the current locale. Days are encoded as integer
		 * where sunday=0, monday=1 etc.
		 *
		 * 
		 * All week data information in the CLDR is provides for territories (countries).
		 * If the locale of this LocaleData doesn't contain country information (e.g. if it 
		 * contains only a language), then the "likelySubtag" information of the CLDR  
		 * is taken into account to guess the "most likely" territory for the locale. 
		 * 
		 * @returns {int} first day of week
		 * @public
		 */
		getFirstDayOfWeek : function() {
			return this._get("weekData-firstDay");
		},

		/**
		 * Returns the first day of a weekend for the given locale. 
		 * 
		 * Days are encoded in the same way as for {@link #getFirstDayOfWeek}.
		 * 
		 * All week data information in the CLDR is provides for territories (countries).
		 * If the locale of this LocaleData doesn't contain country information (e.g. if it 
		 * contains only a language), then the "likelySubtag" information of the CLDR  
		 * is taken into account to guess the "most likely" territory for the locale. 
		 * 
		 * @returns {int} first day of weekend
		 * @public
		 */
		getWeekendStart : function() {
			return this._get("weekData-weekendStart");
		},

		/**
		 * Returns the last day of a weekend for the given locale. 
		 * 
		 * Days are encoded in the same way as for {@link #getFirstDayOfWeek}.
		 * 
		 * All week data information in the CLDR is provides for territories (countries).
		 * If the locale of this LocaleData doesn't contain country information (e.g. if it 
		 * contains only a language), then the "likelySubtag" information of the CLDR  
		 * is taken into account to guess the "most likely" territory for the locale. 
		 * 
		 * @returns {int} last day of weekend
		 * @public
		 */
		getWeekendEnd : function() {
			return this._get("weekData-weekendEnd");
		},

		/**
		 * Returns the interval format with the given Id (see CLDR documentation for valid Ids)
		 * or the fallback format if no interval format with that Id is known.
		 * 
		 * The empty Id ("") might be used to retrieve the interval format fallback. 
		 *
		 * @param {string} sId Id of the interval format, e.g. "d-d"
		 * @returns {string} interval format string with placeholders {0} and {1}
		 * @public
		 * @since 1.17.0 
		 */
		getIntervalPattern : function(sId) {
			return (sId && this._get("intervalFormat-" + sId)) || this._get("intervalFormatFallback"); 
		},
		
		/**
		 * Returns the number of digits of the specified currency
		 *
		 * @param {string} sCurrency ISO 4217 currency code
		 * @returns {int} digits of the currency
		 * @public
		 * @since 1.21.1
		 */
		getCurrencyDigits : function(sCurrency) {
			var oCurrencyDigits = this._get("currencyDigits");
			var iDigits = 2;
			if (oCurrencyDigits) {
				if (oCurrencyDigits[sCurrency] != undefined) {
					iDigits = oCurrencyDigits[sCurrency];
				} else {
					iDigits = oCurrencyDigits["DEFAULT"];
				}
			}
			return iDigits;
		},
		
		/**
		 * Returns the currency symbol for the specified currency, if no symbol is found the ISO 4217 currency code is returned
		 *
		 * @param {string} sCurrency ISO 4217 currency code
		 * @returns {string} the currency symbol
		 * @public
		 * @since 1.21.1
		 */
		getCurrencySymbol : function(sCurrency) {
			var oCurrencySymbols = this._get("currencySymbols");
			return (oCurrencySymbols && oCurrencySymbols[sCurrency]) || sCurrency;
		}
		
	});

	/**
	 * Default data, in case neither the region specific, nor the language specific fallback can be found
	 *
	 * @private
	 */
	var M_DEFAULT_DATA = {
			"orientation":"left-to-right",
			"languages":{},
			"scripts":{},
			"territories":{},
			"dateFormat-full":"EEEE, MMMM d, y",
			"dateFormat-long":"MMMM d, y",
			"dateFormat-medium":"MMM d, y",
			"dateFormat-short":"M/d/yy",
			"timeFormat-full":"h:mm:ss a zzzz",
			"timeFormat-long":"h:mm:ss a z",
			"timeFormat-medium":"h:mm:ss a",
			"timeFormat-short":"h:mm a",
			"dateTimeFormat-full":"{1} 'at' {0}",
			"dateTimeFormat-long":"{1} 'at' {0}",
			"dateTimeFormat-medium":"{1}, {0}",
			"dateTimeFormat-short":"{1}, {0}",
			"decimalFormat": { "standard": "#,##0.###" },
			"currencyFormat": { "standard": "¤#,##0.00"},
			"percentFormat": { "standard": "#,##0%"},
			"months-format-abbreviated":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
			"months-format-wide":["January","February","March","April","May","June","July","August","September","October","November","December"],
			"months-format-narrow":["1","2","3","4","5","6","7","8","9","10","11","12"],
			"months-standAlone-abbreviated":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
			"months-standAlone-wide":["January","February","March","April","May","June","July","August","September","October","November","December"],
			"months-standAlone-narrow":["1","2","3","4","5","6","7","8","9","10","11","12"],
			"days-format-abbreviated":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],
			"days-format-wide":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
			"days-format-narrow":["S","M","T","W","T","F","S"],
			"days-standAlone-abbreviated":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],
			"days-standAlone-wide":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
			"days-standAlone-narrow":["S","M","T","W","T","F","S"],
			"quarters-format-narrow":["1","2","3","4"],
			"quarters-format-abbreviated":["Q1","Q2","Q3","Q4"],
			"quarters-format-wide":["1st quarter","2nd quarter","3rd quarter","4th quarter"],
			"quarters-standAlone-narrow":["1","2","3","4"],
			"symbols-latn-decimal":".",
			"symbols-latn-group":",",
			"symbols-latn-plusSign":"+",
			"symbols-latn-minusSign":"-",
			"dayPeriods-format-narrow":["AM","PM"],
			"dayPeriods-format-wide":["AM","PM"],
			"dayPeriods-format-abbreviated":["AM","PM"],
			"weekData-minDays":4,
			"weekData-firstDay":1,
			"weekData-weekendStart":6,
			"weekData-weekendEnd":0,
			"intervalFormatFallback":"{0} – {1}"
	};

	var M_ISO639_OLD_TO_NEW = {
			"iw" : "he",
			"ji" : "yi",
			"in" : "id", 
			"sh" : "sr"
	};

	/**
	 * A set of locales for which the UI5 runtime contains a CLDR JSON file. 
	 * 
	 * Helps to avoid unsatisfiable backend calls.
	 * 
	 * The string literal below is substituted during the build.
	 * The value is determined from the names of the CLDR JSON files which 
	 * are bundled with the UI5 runtime.
	 * @private
	 */
	var M_SUPPORTED_LOCALES = (function() {
		var LOCALES = "ar,ar_AE,ar_EG,ar_SA,bg,bg_BG,br,ca_ES,cs,cs_CZ,da,da_DK,de,de_AT,de_BE,de_CH,de_DE,de_LU,el,el_CY,el_GR,en,en_AU,en_CA,en_GB,en_HK,en_IE,en_IN,en_NZ,en_PG,en_SG,en_US,en_ZA,es,es_AR,es_BO,es_CL,es_CO,es_ES,es_MX,es_PE,es_UY,es_VE,et,et_EE,fa,fa_IR,fi,fi_FI,fr,fr_BE,fr_CA,fr_CH,fr_FR,fr_LU,he,he_IL,hi,hi_IN,hr,hr_HR,hu,hu_HU,id,id_ID,it,it_CH,it_IT,ja,ja_JP,ko,ko_KR,lt,lt_LT,lv,lv_LV,nb,nb_NO,nl,nl_BE,nl_NL,nn,nn_NO,pl,pl_PL,pt,pt_BR,pt_PT,ro,ro_RO,ru,ru_KZ,ru_RU,ru_UA,sk_SK,sl,sl_SI,sr,sv,sv_SE,th,th_TH,tr,tr_CY,tr_TR,uk,uk_UA,vi,vi_VN,zh_CN,zh_HK,zh_SG,zh_TW".split(","), 
			i,result;
		
		if ( LOCALES.length != 1 || (LOCALES[0] && LOCALES[0].indexOf("@") < 0) ) { // check that list has been substituted 
			result = {};
			for(i=0; i<LOCALES.length; i++) {
				result[LOCALES[i]] = true;
			}
		}
		
		return result;
	}());
	
	/**
	 * Locale data cache
	 *
	 * @private
	 */
	var mLocaleDatas = {};

	/**
	 * Load LocaleData data from the CLDR generated files
	 */
	function getData(oLocale) {

		var sLanguage = oLocale.getLanguage() || "",
			sScript = oLocale.getScript() || "",
			sRegion = oLocale.getRegion() || "",
			mData;

		function getOrLoad(sId) {
			var oData;
			if ( !mLocaleDatas[sId] && (!M_SUPPORTED_LOCALES || M_SUPPORTED_LOCALES[sId] === true) ) {
				mLocaleDatas[sId] = jQuery.sap.loadResource("sap/ui/core/cldr/" + sId + ".json", {
					dataType: "json",
					failOnError : false
				});
				// if load fails, null is returned 
				// -> caller will process the fallback chain, in the end a result is identified and stored in mDatas under the originally requested ID
			}
			return mLocaleDatas[sId];
		}

		// normalize language and handle special cases
		sLanguage = (sLanguage && M_ISO639_OLD_TO_NEW[sLanguage]) || sLanguage;
		if ( sLanguage === "zh" && !sRegion ) {
			if ( sScript === "Hans" ) {
				sRegion = "CN"; 
			} else if ( sScript === "Hant" ) {
				sRegion = "TW";
			}
		}

		var sId = sLanguage + "_" + sRegion; // the originally requested locale; this is the key under which the result (even a fallback one) will be stored in the end 
		// first try: load CLDR data for specific language / region combination 
		if ( sLanguage && sRegion ) {
			mData = getOrLoad(sId);
		}
		// second try: load data for language only
		if ( !mData && sLanguage ) {
			mData = getOrLoad(sLanguage);
		}
		// last try: use fallback data
		mLocaleDatas[sId] = mData || M_DEFAULT_DATA;
		
		return mLocaleDatas[sId];
	};


	/**
	 * A specialized subclass of LocaleData that merges custom settings.
	 * @private
	 */
	LocaleData.extend("sap.ui.core.CustomLocaleData", {
		constructor : function(oLocale) {
			LocaleData.apply(this, arguments);
			this.mCustomData = sap.ui.getCore().getConfiguration().getFormatSettings().getCustomLocaleData();
		},
		_get : function(sId) {
			return this.mCustomData[sId] || this.mData[sId];
		}
	});

	/**
	 * 
	 * @name sap.ui.core.LocaleData.getInstance
	 * @function
	 */
	LocaleData.getInstance = function(oLocale) {
		return oLocale.hasPrivateUseSubtag("sapufmt") ? new sap.ui.core.CustomLocaleData(oLocale) : new LocaleData(oLocale);
	};

	return LocaleData;

}, /* bExport= */ true);
