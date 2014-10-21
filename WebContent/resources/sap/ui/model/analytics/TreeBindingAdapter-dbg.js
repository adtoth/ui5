/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides class sap.ui.model.odata.ODataAnnotations
sap.ui.define(['jquery.sap.global', 'sap/ui/model/TreeBinding', './AnalyticalBinding'],
	function(jQuery, TreeBinding, AnalyticalBinding) {
	"use strict";

	/**
	 * Adapter for TreeBindings to add the ListBinding functionality and use the 
	 * tree structure in list based controls.
	 *
	 * @name sap.ui.model.analytics.TreeBindingAdapter
	 * @function
	 * @experimental This module is only for experimental use!
	 * @protected
	 */
	var TreeBindingAdapter = function() {
	
		// ensure only TreeBindings are enhanced which have not been enhanced yet
		if(!(this instanceof TreeBinding && this.getContexts === undefined)) {
			return;
		}
	
		// apply the methods of the adapters prototype to the TreeBinding instance
		for (var fn in TreeBindingAdapter.prototype) {
			if (TreeBindingAdapter.prototype.hasOwnProperty(fn)) {
				this[fn] = TreeBindingAdapter.prototype[fn];
			}
		}
		
		// initialize the contexts
		this._aContexts = [];
		this._aContextInfos = [];
		this._aExpanding = [];
		this._bInitial = true;
		
		//store all contexts that are currently expanded to enable automatic reopening of groups
		this._oExpanded = {};
		this._oOpenGroups = {};
		this._bTriggeredOpenGroupsLoad = false;
	};
	
	TreeBindingAdapter.prototype._updateContexts = function(iPosition, aContexts, aContextInfos, bReplace) {
		for ( var i = 0; i < aContexts.length; i++) {
			var oContext = aContexts[i];
			var oContextInfo = aContextInfos[i];
			this._aContexts.splice(iPosition, bReplace ? 1 : 0, oContext);
			this._aContextInfos.splice(iPosition, bReplace ? 1 : 0, oContextInfo);
			iPosition++;
		}
	
		return aContextInfos;
	};
	
	TreeBindingAdapter.prototype.getLength = function() {
		return this._aContexts.length;
	};
	
	TreeBindingAdapter.prototype.getContextInfo = function(iIndex) {
		return this._aContextInfos.slice(iIndex, iIndex + 1)[0];
	};
	
	TreeBindingAdapter.prototype._createContextInfos = function(aContexts, oParent, iPosition, iLevel, bSum, iIndexOffset) {
		if (!iIndexOffset) {
			iIndexOffset = 0;
		}
		var aContextInfos = [];
		for ( var i = 0; i < aContexts.length; i++) {
			var oChildContext = aContexts[i];
			aContextInfos.push({
				context: oChildContext,
				level: iLevel,
				expanded: false,
				childCount: 0,
				parent: oParent,
				sum: bSum,
				position: iPosition,
				index: i + iIndexOffset
			});
			iPosition++;
		}
		return aContextInfos;
	};
	
	TreeBindingAdapter.prototype.getContexts = function(iStartIndex, iLength, iThreshold) {
	
		var that = this;
	
		// by default the length is like the sizelimit of the model
		if (!iLength) {
			iLength = this.oModel.iSizeLimit;
		}
	
		if (this._bInitial) {
			var aRootContexts = this.getRootContexts({
				startIndex: iStartIndex,
				length: iLength,
				threshold: iThreshold,
				numberOfExpandedLevels: this.mParameters.numberOfExpandedLevels
			});
			if (aRootContexts && aRootContexts.length > 0) {
				this._bInitial = false;
				var aNewContextInfos = this._createContextInfos(aRootContexts, null, 0, 0, true);
				if (this.bProvideGrandTotals) {
					this._updateContexts(0, aRootContexts, aNewContextInfos);
				}
				this._aExpanding = aNewContextInfos;
			}
		}
	
		if (this._oOpenGroups != {} && this._bTriggeredOpenGroupsLoad == false) {
			this.loadGroups(this._oOpenGroups);
			this._bTriggeredOpenGroupsLoad = true;
		} else {
			this._processExpand(iLength, iThreshold);
		}
	
		// returns the context from the start index with the specified length 
		var aContexts = this._aContexts.slice(iStartIndex, iStartIndex + iLength);
		var oMissingSections = {};
	
		jQuery.each(aContexts, function(iIndex, oContext) {
			if (!oContext) {
				var oContextInfo = that._aContextInfos[iStartIndex + iIndex];
				var oParent = oContextInfo.parent;
				var oSection = oMissingSections[oParent.getPath()];
				if (oSection) {
					oSection.startIndex = Math.min(oSection.startIndex, oContextInfo.index);
					oSection.position = Math.min(oSection.position, oContextInfo.position);
					oSection.endIndex = Math.max(oSection.endIndex, oContextInfo.index);
				} else {
					oMissingSections[oParent.getPath()] = {
						startIndex: oContextInfo.index,
						endIndex: oContextInfo.index,
						parent: oContextInfo.parent,
						level: oContextInfo.level - 1,
						position: oContextInfo.position
					};
				}
			}
		});
	
		//Load contexts from missing sections
		var that = this,
			bUpdatedMissingSection = false;
		jQuery.each(oMissingSections, function(iIndex, oSection) {
			var aMissingContexts = that.getNodeContexts(oSection.parent, {
				startIndex: oSection.startIndex, 
				length: oSection.endIndex - oSection.startIndex + 1,
				threshold: iThreshold,
				level: oSection.level,
				numberOfExpandedLevels: Math.max(that.mParameters.numberOfExpandedLevels - oSection.level, 0)
			});
			if (aMissingContexts.length > 0) {
				// integrate the contexts into the local context cache
				that._updateContexts(oSection.position, aMissingContexts, that._createContextInfos(aMissingContexts, oSection.parent, oSection.position, oSection.level + 1, false), true);
				that._updateExpandedInfo(oSection.parent, oSection.level, oSection.startIndex, oSection.endIndex - oSection.startIndex + 1, iThreshold);
				bUpdatedMissingSection = true;
			}
		});
		
		if (bUpdatedMissingSection) {
			aContexts = this._aContexts.slice(iStartIndex, iStartIndex + iLength);
		}
	
		return aContexts;
	};
	
	TreeBindingAdapter.prototype._processExpand = function(iLength, iThreshold) {
		var that = this,
			iStartLength = this._aExpanding.length,
			bAddedExpand = false,
			bHasMeasures = this.hasMeasures();
	
		for(var i = this._aExpanding.length - 1; i >= 0; i--) {
			var oContextInfo = this._aExpanding[i];
			var oContext = oContextInfo.context;

			var bNoGrandTotalRoot = !this.bProvideGrandTotals && oContext.getPath() === "/artificialRootContent";
			if (jQuery.inArray(oContext, this._aContexts) == -1 && !bNoGrandTotalRoot) {
				continue;
			}

			var aContexts = this.getNodeContexts(oContext, {
				startIndex: 0,
				length: iLength,
				threshold: iThreshold,
				level: oContextInfo.level
			});
			if (aContexts && aContexts.length > 0) {
				var iRealLength = this.getGroupSize(oContext, oContextInfo.level),
					iInitialPosition = oContextInfo.parent ? oContextInfo.position + 1 : 0,
					iPosition = iInitialPosition,
					iLevel = oContextInfo.level + 1,
					aContextInfos = this._createContextInfos(aContexts, oContext, iPosition, iLevel, false);
				
				var bAddedExpand = false;
				for (var j=0; j<aContexts.length; j++) {
					if (iLevel < this.aAggregationLevel.length && this._oOpenGroups[this._getGroupIdFromContext(aContexts[j], iLevel)]) {
						this._aExpanding.push(aContextInfos[j]);
						delete this._oOpenGroups[this._getGroupIdFromContext(aContexts[j], iLevel)];
						bAddedExpand = true;
					}
				}

				iPosition += aContextInfos.length;
				var iIndexOffset = aContextInfos.length;
	
				if (iRealLength > -1) {
					for (var j=aContexts.length; j<iRealLength; j++) {
						aContexts.push(undefined);
						aContextInfos.push(this._createContextInfos([undefined], oContext, iPosition, iLevel, false, iIndexOffset)[0]);
						iPosition++;
						iIndexOffset++;
					}
				}
	
				// add parent context as sum context
				if (oContext && oContextInfo.parent != null && iRealLength > 1 && !this.mParameters.sumOnTop && bHasMeasures) {
					aContexts.push(oContext);
					aContextInfos.push(this._createContextInfos([oContext], oContext, iPosition, iLevel - 1, true, iIndexOffset)[0]);
				}
	
				var iContextLength = aContexts.length;
				this._updateContexts(iInitialPosition, aContexts, aContextInfos);
				
				var iLastInsertPosition = iInitialPosition + iContextLength;
	
				// iterate through the parent contexts to increase the child count
				var oParentContextInfo;
				iLevel--;
				var iIteratePosition = iInitialPosition;
				while (oParentContextInfo = this._aContextInfos[iIteratePosition]) {
					if (oParentContextInfo.level == iLevel) {
						oParentContextInfo.childCount = oParentContextInfo.childCount + iContextLength;
						iLevel--;
					}
					iIteratePosition--;
					if (iLevel < 0) break;
				}
				
				var oLastInsertPositionContexInfo = this._aContextInfos[iLastInsertPosition];
				if (oLastInsertPositionContexInfo) {
					var iIncrease = this._aContextInfos[iLastInsertPosition - 1].position - oLastInsertPositionContexInfo.position + 1;
					
					for (var j=iLastInsertPosition; j<this._aContextInfos.length; j++) {
						this._aContextInfos[j].position += iIncrease;
					}
				}
	
				if (oContextInfo) { //not defined for root
					oContextInfo.expanded = true;
				}
				this._updateExpandedInfo(oContextInfo.context, oContextInfo.level, 0, iLength, iThreshold);
				this._aExpanding.splice(i, 1);
			}
		}
		
		if ((iStartLength != this._aExpanding.length && this._aExpanding.length > 0) || bAddedExpand) {
			this._processExpand(iLength, iThreshold);
		}
	};
	
	TreeBindingAdapter.prototype._updateExpandedInfo = function(oContext, iLevel, iStartIndex, iLength, iThreshold) {
		var sAbsolutePath = this._getGroupIdFromContext(oContext, iLevel);
		var aPath = sAbsolutePath.substr(0, sAbsolutePath.length - 1).split("/");
		var oExpanded = this._oExpanded;
		for (var j=0; j<aPath.length; j++) {
			var sPath = aPath[j];
			if (j == 0) {
				sPath = "root";
			}
			oExpanded[sPath] = oExpanded[sPath] || {};
			oExpanded = oExpanded[sPath];
			if (j == aPath.length - 1) {
				oExpanded["sections"] = oExpanded["sections"] || [];
				if (oExpanded["sections"].length == 0) {
					oExpanded["sections"].push({
						startIndex: iStartIndex,
						length: iLength,
						threshold: iThreshold
					});
				}
				var bEditedSection = false;
				for (var k=0; k<oExpanded["sections"].length; k++) {
					var oSection = oExpanded["sections"][k];
					var iSectionEndIndex = oSection.startIndex + oSection.length + oSection.threshold;
					var iEndIndex = iStartIndex + iLength + iThreshold;
					if (oSection.startIndex <= iStartIndex && iSectionEndIndex >= iEndIndex) {
						//Sections is already part of another section
						return
					} else if (oSection.startIndex <= iStartIndex && iSectionEndIndex >= iStartIndex) {
						//Section starts within current section -> enlarge
						oSection.threshold = Math.max(oSection.threshold, iThreshold);
						oSection.length = iEndIndex - oSection.startIndex - oSection.threshold;
						bEditedSection = true;
					} else if (oSection.startIndex > iStartIndex && iSectionEndIndex > iEndIndex) {
						//Sections ends in existing section
						oSection.length = oSection.length + (oSection.startIndex - iStartIndex);
						oSection.startIndex = iStartIndex;
						oSection.threshold = Math.max(oSection.threshold, iThreshold);
						bEditedSection = true;
					} else if (oSection.startIndex > iStartIndex && oSection.endIndex < iEndIndex) {
						//Replace section
						oSection.startIndex = iStartIndex;
						oSection.length = iLength;
						oSection.threshold = iThreshold;
						bEditedSection = true;
					}
				}
				if (!bEditedSection) {
					oExpanded["sections"].push({
						startIndex: iStartIndex,
						length: iLength,
						threshold: iThreshold
					});
				}
			} else {
				oExpanded["children"] = oExpanded["children"] || {};
				oExpanded["childProperty"] = this.aAggregationLevel[j];
				oExpanded = oExpanded["children"];
			}
		}
	};

	
	TreeBindingAdapter.prototype.expand = function(iIndex) {
		var oContextInfo = this._aContextInfos[iIndex];
		// if the context is already expanded => return
		if (oContextInfo.expanded) {
			return;
		}
		
		this._aExpanding.push(oContextInfo);
	};
	
	TreeBindingAdapter.prototype.collapse = function(iIndex) {
	
		var oContextInfo = this._aContextInfos[iIndex];
		var oContext = this._aContexts[iIndex];

		// if the context is already collapsed => return
		// the root node cannot be collapsed => return
		if (!oContextInfo.expanded) {
			return;
		}
	
		// determine the position of the context incl. length and level
		var iPosition = oContextInfo.position + 1,
			iLength = oContextInfo.childCount,
			iLevel = oContextInfo.level;
		
		var oExpanded = this._oExpanded["root"];
		var sAbsolutePath = this._getGroupIdFromContext(oContext, iLevel);
		var aPath = sAbsolutePath.substr(0, sAbsolutePath.length - 1).split("/");
		for (var i=1; i<iLevel; i++) {
			oExpanded = oExpanded["children"][aPath[i]];
		}
		delete oExpanded["children"][aPath[aPath.length - 1]];
	
		// remove the child nodes
		var iRemovePosition = iPosition;
		this._aContexts.splice(iPosition, iLength);
		this._aContextInfos.splice(iPosition, iLength);
		
		iPosition--;
		
	
		// update the parent nodes with the new length/child count
		var oParentContextInfo;
		while (oParentContextInfo = this._aContextInfos[iPosition]) {
			if (oParentContextInfo.level == iLevel) {
				oParentContextInfo.childCount = oParentContextInfo.childCount - iLength;
				iLevel--;
			}
			iPosition--;
			if (iLevel < 0) break;
		}
		
		if (iRemovePosition < this._aContextInfos.length) {
			var iDecrease = this._aContextInfos[iRemovePosition - 1].position - this._aContextInfos[iRemovePosition].position + 1;
			
			for (var j=iRemovePosition; j<this._aContextInfos.length; j++) {
				this._aContextInfos[j].position += iDecrease;
			}
		}
	
		// node is collapse now => notifiy control
		oContextInfo.expanded = false;
	};
	
	TreeBindingAdapter.prototype.collapseAll = function(iLevel) {
		if (!iLevel || iLevel < 1) {
			iLevel = 1;
		}
		for (var i=0, j=this._aContextInfos.length; i < j; i++) {
			if (this._aContextInfos[i].level == iLevel) {
				this.collapse(i);
				j = this._aContextInfos.length;
			}
		}
	};
	
	TreeBindingAdapter.prototype.toggleIndex = function(iIndex) {
		//length attribute contains how many rows could be potentially displayed below the expanded context
		if (!this._aContextInfos[iIndex].expanded) {
			this.expand(iIndex);
		} else {
			this.collapse(iIndex);
		}
	};
	
	TreeBindingAdapter.prototype.indexHasChildren = function(iIndex) {
		var oContextInfo = this._aContextInfos[iIndex];
		if (!oContextInfo.parent || oContextInfo.sum) {
			return false;
		} else {
			return AnalyticalBinding.prototype.hasChildren.call(this, oContextInfo.context, { level: oContextInfo.level });
		}
	};
	
	TreeBindingAdapter.prototype.resetData = function(oContext) {
		var vReturn = AnalyticalBinding.prototype.resetData.call(this, oContext);
		this._aContexts = [];
		this._aContextInfos = [];
		this._aExpanding = [];
		this._oOpenGroups = {};
		this._removeGroups(this._oExpanded["root"], 0, '');
		this._oExpanded = {};
		this._bInitial = true;
		this._bTriggeredOpenGroupsLoad = false;
		return vReturn;
	};
	
	TreeBindingAdapter.prototype.updateAnalyticalInfo = function(aColumns) {
		var vReturn = AnalyticalBinding.prototype.updateAnalyticalInfo.call(this, aColumns);
		this._aContexts = [];
		this._aContextInfos = [];
		this._aExpanding = [];
		this._oOpenGroups = {};
		this._removeGroups(this._oExpanded["root"], 0, '');
		this._oExpanded = {};
		this._bInitial = true;
		this._bTriggeredOpenGroupsLoad = false;
		return vReturn;
	};

	TreeBindingAdapter.prototype._removeGroups = function(oGroup, iLevel, sPrefix) {
		if (!oGroup) {
			return;
		}

		this._oOpenGroups[sPrefix + '/'] = oGroup.sections;

		if (!oGroup.childProperty) {
			return;
		}

		if (oGroup.childProperty != this.aAggregationLevel[iLevel]) {
			delete oGroup.children;
			delete oGroup.childProperty;
		} else {
			for(var child in oGroup.children) {
				this._removeGroups(oGroup.children[child], iLevel + 1, sPrefix + '/' + child);
			}
		}

	};

	return TreeBindingAdapter;
	
}, /* bExport= */ true);
