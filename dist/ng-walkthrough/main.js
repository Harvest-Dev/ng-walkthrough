(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./projects/angular-walkthrough/src/lib/angular-walkthrough.module.ts":
/*!****************************************************************************!*\
  !*** ./projects/angular-walkthrough/src/lib/angular-walkthrough.module.ts ***!
  \****************************************************************************/
/*! exports provided: WalkthroughModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkthroughModule", function() { return WalkthroughModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _walkthrough_flow_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./walkthrough-flow.component */ "./projects/angular-walkthrough/src/lib/walkthrough-flow.component.ts");
/* harmony import */ var _walkthrough_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./walkthrough.component */ "./projects/angular-walkthrough/src/lib/walkthrough.component.ts");
/* harmony import */ var _walkthrough_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./walkthrough.service */ "./projects/angular-walkthrough/src/lib/walkthrough.service.ts");
/* harmony import */ var _walkthrough_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./walkthrough-container.component */ "./projects/angular-walkthrough/src/lib/walkthrough-container.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var WalkthroughModule = /** @class */ (function () {
    function WalkthroughModule() {
    }
    WalkthroughModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"]
            ],
            declarations: [
                _walkthrough_flow_component__WEBPACK_IMPORTED_MODULE_3__["WalkthroughFlowComponent"],
                _walkthrough_component__WEBPACK_IMPORTED_MODULE_4__["WalkthroughComponent"],
                _walkthrough_container_component__WEBPACK_IMPORTED_MODULE_6__["WalkthroughContainerComponent"]
            ],
            exports: [
                _walkthrough_flow_component__WEBPACK_IMPORTED_MODULE_3__["WalkthroughFlowComponent"],
                _walkthrough_component__WEBPACK_IMPORTED_MODULE_4__["WalkthroughComponent"],
                _walkthrough_container_component__WEBPACK_IMPORTED_MODULE_6__["WalkthroughContainerComponent"]
            ],
            entryComponents: [
                _walkthrough_container_component__WEBPACK_IMPORTED_MODULE_6__["WalkthroughContainerComponent"]
            ],
            providers: [
                _walkthrough_service__WEBPACK_IMPORTED_MODULE_5__["WalkthroughService"]
            ]
        })
    ], WalkthroughModule);
    return WalkthroughModule;
}());



/***/ }),

/***/ "./projects/angular-walkthrough/src/lib/walkthrough-container.component.html":
/*!***********************************************************************************!*\
  !*** ./projects/angular-walkthrough/src/lib/walkthrough-container.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wkt-container\">\r\n    <div class=\"wkt-zone\"\r\n         #zone\r\n         (click)=\"clickZone($event)\"\r\n         [class.hide]=\"!hasHighlightZone\"\r\n         [class.backdrop]=\"hasBackdrop\"\r\n         [class.glow]=\"hasGlow\"\r\n         [class.clickable]=\"hasClickable\"\r\n         [class.highlight]=\"hasHighlight\"\r\n         [style.padding]=\"marginZone\"></div>\r\n    <div class=\"wkt-content-block\"\r\n         [class.hide]=\"hideOther\"\r\n         [class.darken]=\"contentStyle === 'draken'\"\r\n         #contentBlock>\r\n        <button type=\"button\"\r\n                class=\"wkt-close\"\r\n                *ngIf=\"hasCloseButton\"\r\n                (click)=\"close()\">✖</button>\r\n        <div class=\"wkt-content\">\r\n            <p *ngIf=\"contentText\">{{contentText}}</p>\r\n            <ng-template cdkPortalHost></ng-template>\r\n        </div>\r\n        <div class=\"wkt-navigate\"\r\n             *ngIf=\"hasPrevious||hasNext||hasFinish\">\r\n            <button type=\"button\"\r\n                    class=\"wkt-previous-link\"\r\n                    *ngIf=\"hasPrevious\"\r\n                    (click)=\"previous()\">{{text.previous}}</button>\r\n            <button type=\"button\"\r\n                    class=\"wkt-next-link\"\r\n                    *ngIf=\"hasNext\"\r\n                    (click)=\"next()\">{{text.next}}</button>\r\n            <button type=\"button\"\r\n                    class=\"wkt-finish-link\"\r\n                    *ngIf=\"hasFinish\"\r\n                    (click)=\"close(true)\">{{text.close}}</button>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"hasArrow\"\r\n         [class.hide]=\"hideOther\">\r\n        <svg version=\"1.1\"\r\n             xmlns=\"http://www.w3.org/2000/svg\"\r\n             width=\"100%\"\r\n             height=\"100%\">\r\n            <defs>\r\n                <marker id=\"wkt-arrow\"\r\n                        viewBox=\"0 0 10 10\"\r\n                        refX=\"8\"\r\n                        refY=\"5\"\r\n                        markerUnits=\"strokeWidth\"\r\n                        orient=\"auto\"\r\n                        markerWidth=\"10\"\r\n                        markerHeight=\"10\">\r\n                    <polyline points=\"0,0 10,5 0,10 5,5\"\r\n                              stroke-width=\"0\"\r\n                              [attr.fill]=\"arrowColor || '#FFF'\" />\r\n                </marker>\r\n            </defs>\r\n            <path class=\"wkt-arrow-path\"\r\n                  [attr.d]=\"arrowPath\"\r\n                  [attr.stroke]=\"arrowColor || '#FFF'\"\r\n                  [attr.marker-end]=\"markerUrl\" />\r\n        </svg>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./projects/angular-walkthrough/src/lib/walkthrough-container.component.scss":
/*!***********************************************************************************!*\
  !*** ./projects/angular-walkthrough/src/lib/walkthrough-container.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 99.9%;\n  min-height: 100%; }\n  :host.hide {\n    display: none; }\n  :host.cursor {\n    cursor: pointer; }\n  :host.backdrop {\n    background-color: rgba(0, 0, 0, 0.6); }\n  button {\n  background: none;\n  border: 0;\n  color: #FFF; }\n  .wkt-zone {\n  position: absolute; }\n  .wkt-zone.hide {\n    display: none; }\n  .wkt-zone.backdrop {\n    box-shadow: 0 0 0 2200px rgba(0, 0, 0, 0.6); }\n  .wkt-zone.glow {\n    box-shadow: 0 0 4px 2px #FFFF66, 0 0 9px 0 #FFFF66, 0 0 36px #FFFF66; }\n  .wkt-zone.clickable {\n    cursor: pointer; }\n  .wkt-zone.highlight {\n    -webkit-animation: highlight .45s 4;\n    animation: highlight .45s 4; }\n  .wkt-container {\n  position: relative; }\n  .wkt-content-block {\n  position: absolute;\n  margin: 1em;\n  padding: 6px;\n  z-index: 1;\n  color: #FFF;\n  min-width: calc(320px - 2em); }\n  .wkt-content-block.hide {\n    display: none; }\n  .wkt-content-block.darken {\n  background-color: rgba(0, 0, 0, 0.6); }\n  .wkt-close + .wkt-content {\n  margin-top: 1.3em; }\n  .wkt-close {\n  position: absolute;\n  right: 1em;\n  cursor: pointer; }\n  .wkt-navigate {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center; }\n  .wkt-navigate > button {\n    padding: 6px;\n    font-size: 120%; }\n  .wkt-navigate > button:hover {\n      cursor: pointer;\n      text-decoration: underline; }\n  .wkt-previous-link::before {\n  content: '<< '; }\n  .wkt-next-link::after {\n  content: ' >>'; }\n  div.hide {\n  display: none; }\n  svg {\n  overflow: visible;\n  position: absolute;\n  top: -1px;\n  left: -1px;\n  border: 1px solid transparent; }\n  #wkt-arrow > path {\n  stroke-width: 0; }\n  .wkt-arrow-path {\n  stroke-width: 2px;\n  fill: none; }\n  @-webkit-keyframes highlight {\n  0% {\n    background-color: none; }\n  50% {\n    background-color: rgba(255, 255, 255, 0.8); }\n  100% {\n    background-color: none; } }\n  @keyframes highlight {\n  0% {\n    background-color: none; }\n  50% {\n    background-color: rgba(255, 255, 255, 0.8); }\n  100% {\n    background-color: none; } }\n  @media screen and (min-width: 1920px), screen and (min-height: 1920px) {\n  .wkt-zone.backdrop {\n    box-shadow: 0 0 0 4400px rgba(0, 0, 0, 0.6); } }\n  @media screen and (min-width: 3840px), screen and (min-height: 3840px) {\n  .wkt-zone.backdrop {\n    box-shadow: 0 0 0 8800px rgba(0, 0, 0, 0.6); } }\n  _:default:not(:root:root), .wkt-zone.backdrop {\n  box-shadow: 0 0 0 2000px rgba(0, 0, 0, 0.6) !important; }\n"

/***/ }),

/***/ "./projects/angular-walkthrough/src/lib/walkthrough-container.component.ts":
/*!*********************************************************************************!*\
  !*** ./projects/angular-walkthrough/src/lib/walkthrough-container.component.ts ***!
  \*********************************************************************************/
/*! exports provided: throwWalkthroughContentAlreadyAttachedError, WalkthroughContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwWalkthroughContentAlreadyAttachedError", function() { return throwWalkthroughContentAlreadyAttachedError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkthroughContainerComponent", function() { return WalkthroughContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _walkthrough_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./walkthrough-tools */ "./projects/angular-walkthrough/src/lib/walkthrough-tools.ts");
/* harmony import */ var _walkthrough_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./walkthrough.component */ "./projects/angular-walkthrough/src/lib/walkthrough.component.ts");
/* harmony import */ var _walkthrough_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./walkthrough.service */ "./projects/angular-walkthrough/src/lib/walkthrough.service.ts");
/* harmony import */ var _walkthrough_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./walkthrough-text */ "./projects/angular-walkthrough/src/lib/walkthrough-text.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






function throwWalkthroughContentAlreadyAttachedError() {
    throw Error('Attempting to attach walkthrough content after content is already attached');
}
var is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
var WalkthroughContainerComponent = /** @class */ (function (_super) {
    __extends(WalkthroughContainerComponent, _super);
    function WalkthroughContainerComponent(viewContainerRef, _walkthroughService, _renderer, _el) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        _this._walkthroughService = _walkthroughService;
        _this._renderer = _renderer;
        _this._el = _el;
        _this.markerUrl = 'url(#wkt-arrow)';
        _this.show = false;
        _this.pause = false;
        // highlight zone
        _this.hasHighlightZone = false;
        _this.hasHighlight = false;
        _this.hasBackdrop = false;
        _this.hasGlow = false;
        // navigate
        _this.hasPrevious = false;
        _this.hasNext = false;
        _this.hasFinish = false;
        _this.hasCloseButton = false;
        _this.hasCloseAnywhere = true;
        // arrow
        _this.hasArrow = false;
        _this.arrowMarkerDist = 7;
        _this.marginZonePx = new _walkthrough_tools__WEBPACK_IMPORTED_MODULE_2__["WalkthroughMargin"]();
        // texts change / i18n
        _this.text = new _walkthrough_text__WEBPACK_IMPORTED_MODULE_5__["WalkthroughText"]();
        return _this;
    }
    Object.defineProperty(WalkthroughContainerComponent.prototype, "id", {
        // HostBinding
        get: function () {
            return this.parent ? this.parent.id + '-container' : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WalkthroughContainerComponent.prototype, "hide", {
        get: function () {
            return !this.show;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WalkthroughContainerComponent.prototype, "cursor", {
        get: function () {
            return this.hasCloseAnywhere;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WalkthroughContainerComponent.prototype, "backdrop", {
        get: function () {
            return !this.hasHighlightZone && this.hasBackdrop;
        },
        enumerable: true,
        configurable: true
    });
    WalkthroughContainerComponent.prototype.click = function () {
        if (this.hasCloseAnywhere && this.show) {
            this.close();
        }
    };
    WalkthroughContainerComponent.prototype.clickZone = function (event) {
        if (this.parent && this.hasClickable) {
            this.parent.focusClick(event, this);
        }
    };
    /**
     * Attach a ComponentPortal as content to this walkthrough container.
     * @param portal Portal to be attached as the walkthrough content.
     */
    WalkthroughContainerComponent.prototype.attachComponentPortal = function (portal) {
        if (this._portalHost.hasAttached()) {
            throwWalkthroughContentAlreadyAttachedError();
        }
        // this._savePreviouslyFocusedElement();
        return this._portalHost.attachComponentPortal(portal);
    };
    /**
     * Attach a TemplatePortal as content to this walkthrough container.
     * @param portal Portal to be attached as the walkthrough content.
     */
    WalkthroughContainerComponent.prototype.attachTemplatePortal = function (portal) {
        if (this._portalHost.hasAttached()) {
            throwWalkthroughContentAlreadyAttachedError();
        }
        // this._savePreviouslyFocusedElement();
        return this._portalHost.attachTemplatePortal(portal);
    };
    WalkthroughContainerComponent.prototype.setHeight = function () {
        this._renderer.setStyle(this._el.nativeElement, 'height', this._walkthroughService.getDocumentHeight() + 'px');
    };
    WalkthroughContainerComponent.prototype.hightlightZone = function (coordinate, scrollDiff, animation, animationDelays, continueFunction) {
        var _this = this;
        var element = this.zone.nativeElement;
        var zoneStyle = element.style;
        var style = window.getComputedStyle(element, null);
        if (animation === 'linear' && animationDelays > 0 && style.left !== 'auto') {
            this.hideOther = true;
            var fragment_1 = 20;
            var intervale = animationDelays / fragment_1;
            var left_1 = parseInt(style.left, 10);
            var top_1 = scrollDiff + parseInt(style.top, 10);
            var width_1 = parseInt(style.width, 10);
            var height_1 = parseInt(style.height, 10);
            var partLeft_1 = (coordinate.left - left_1) / fragment_1;
            var partTop_1 = (coordinate.top - top_1) / fragment_1;
            var partWidth_1 = (coordinate.width - width_1) / fragment_1;
            var partHeight_1 = (coordinate.height - height_1) / fragment_1;
            var count_1 = 0;
            this.show = true;
            zoneStyle.borderRadius = '50%';
            var timer_1 = setInterval(function () {
                zoneStyle.left = (left_1 + partLeft_1 * count_1) + 'px';
                zoneStyle.top = (top_1 + partTop_1 * count_1) + 'px';
                zoneStyle.width = (width_1 + partWidth_1 * count_1) + 'px';
                zoneStyle.height = (height_1 + partHeight_1 * count_1) + 'px';
                if (count_1++ >= fragment_1) {
                    clearInterval(timer_1);
                    _this.hideOther = false;
                    continueFunction();
                }
            }, intervale);
        }
        else {
            zoneStyle.left = coordinate.left + 'px';
            zoneStyle.top = coordinate.top + 'px';
            zoneStyle.width = coordinate.width + 'px';
            zoneStyle.height = coordinate.height + 'px';
            continueFunction();
        }
    };
    WalkthroughContainerComponent.prototype.hightlightZoneStyling = function (element) {
        if (element) {
            var zoneStyle = this.zone.nativeElement.style;
            if (this.radius) {
                if (Number(this.radius) === parseFloat(this.radius)) {
                    // if is numeric, change in %
                    zoneStyle.borderRadius = this.radius + '%';
                }
                else if (this.radius === 'auto') {
                    // if mode auto
                    var elementStyle = window.getComputedStyle(element, null);
                    // borderRadius work only on Chrome, use TopLeft, TopRight... for Firefox/Egde/IE
                    zoneStyle.borderTopLeftRadius = elementStyle.borderTopLeftRadius;
                    zoneStyle.borderTopRightRadius = elementStyle.borderTopRightRadius;
                    zoneStyle.borderBottomLeftRadius = elementStyle.borderBottomLeftRadius;
                    zoneStyle.borderBottomRightRadius = elementStyle.borderBottomRightRadius;
                }
                else {
                    // if is numeric, change in %
                    zoneStyle.borderRadius = this.radius;
                }
            }
            else {
                zoneStyle.borderRadius = '';
            }
        }
    };
    WalkthroughContainerComponent.prototype.contentBlockPosition = function (coordinate, alignContent, verticalAlignContent, contentSpacing, verticalContentSpacing) {
        var element = this.contentBlock.nativeElement;
        var elementSize = this._walkthroughService.retrieveCoordinates(element);
        var width = elementSize.width + elementSize.margin.left + elementSize.margin.right;
        var height = elementSize.height + elementSize.margin.top + elementSize.margin.bottom;
        // check if we've got the space to respect the alignContent attribute
        var notEnoughSpace = false;
        if (this.hasHighlightZone) {
            var spaceLeft = coordinate.left;
            var spaceRight = window.innerWidth - coordinate.left - coordinate.width;
            if (spaceLeft < width && spaceRight < width) {
                notEnoughSpace = true;
            }
            // if not enough space to respect the alignContent, content goes above/below
            if ((verticalAlignContent === 'top' ||
                verticalAlignContent === 'center' ||
                verticalAlignContent === 'bottom') && !notEnoughSpace) {
                // change align center to left or right if not enough space to align center
                if (alignContent === 'center') {
                    var maxSpace = Math.max(spaceRight, spaceLeft);
                    if (maxSpace < width + ((window.innerWidth - width) / 2)) {
                        alignContent = spaceRight > spaceLeft ? 'right' : 'left';
                    }
                }
                else if (alignContent === 'left' && spaceLeft < width ||
                    alignContent === 'right' && spaceRight < width) {
                    verticalAlignContent = verticalAlignContent === 'bottom' || coordinate.top < height ? 'below' : 'above';
                }
            }
        }
        // if not enough space on screen width, we center the content
        if (notEnoughSpace) {
            alignContent = 'center';
        }
        // position of content left/center/right
        element.style.right = '';
        element.style.left = '';
        if (alignContent === 'left') {
            element.style.left = '0';
            if (this.hasHighlightZone) {
                var space = coordinate.left - width;
                // handle contentSpacing
                if (contentSpacing && space > contentSpacing) {
                    element.style.left = (coordinate.left -
                        width -
                        contentSpacing) + 'px';
                }
            }
        }
        else if (alignContent === 'center') {
            element.style.left = (window.innerWidth / 2 - width / 2) + 'px';
        }
        else if (alignContent === 'right') {
            element.style.right = '0';
            if (this.hasHighlightZone) {
                var space = window.innerWidth - coordinate.left - coordinate.width - width;
                // handle contentSpacing
                if (contentSpacing && space > contentSpacing) {
                    element.style.right = '';
                    element.style.left = (coordinate.left +
                        coordinate.width +
                        contentSpacing) + 'px';
                }
            }
        }
        if (this.hasHighlightZone) {
            // for arrow position
            var startLeft = this._walkthroughService.retrieveCoordinates(element).left + width / 2;
            this._arrowPosition = startLeft > (coordinate.left - _walkthrough_component__WEBPACK_IMPORTED_MODULE_3__["WalkthroughComponent"].minimalMargin)
                && startLeft < (coordinate.left + coordinate.width + _walkthrough_component__WEBPACK_IMPORTED_MODULE_3__["WalkthroughComponent"].minimalMargin)
                ? 'topBottom' : 'leftRight';
            // if there is enough place on the left or on the right, we consider verticalAlignContent, otherwise, we ignore it
            if (verticalAlignContent && !notEnoughSpace) {
                var space = 0;
                this._contentPosition = verticalAlignContent;
                switch (verticalAlignContent) {
                    case 'above':
                        space = coordinate.top;
                        if (space > verticalContentSpacing) {
                            element.style.top = (coordinate.top - height - verticalContentSpacing) + 'px';
                        }
                        else {
                            element.style.top = '0';
                        }
                        this._arrowPosition = 'topBottom';
                        break;
                    case 'top':
                        element.style.top = (coordinate.top) + 'px';
                        break;
                    case 'center':
                        element.style.top = (coordinate.top + (coordinate.height / 2) - (height / 2)) + 'px';
                        break;
                    case 'bottom':
                        element.style.top = (coordinate.top + coordinate.height - height) + 'px';
                        break;
                    case 'below':
                        space = this._walkthroughService.getDocumentHeight() - coordinate.top + coordinate.height;
                        if (space > verticalContentSpacing) {
                            element.style.top = (coordinate.top + coordinate.height + verticalContentSpacing) + 'px';
                        }
                        else {
                            element.style.top = (this._walkthroughService.getDocumentHeight() - height) + 'px';
                        }
                        this._arrowPosition = 'topBottom';
                        break;
                }
            }
            else {
                // position of content top/bottom
                if (verticalAlignContent === 'below' || coordinate.top < height) {
                    element.style.top = (coordinate.top + coordinate.height + _walkthrough_component__WEBPACK_IMPORTED_MODULE_3__["WalkthroughComponent"].minimalMargin) + 'px';
                    this._contentPosition = 'below';
                }
                else {
                    element.style.top = (coordinate.top - height - _walkthrough_component__WEBPACK_IMPORTED_MODULE_3__["WalkthroughComponent"].minimalMargin) + 'px';
                    this._contentPosition = 'above';
                }
            }
        }
        else {
            element.style.top = (this._walkthroughService.getHeightOfPage() / 2 - height / 2) + 'px';
        }
    };
    WalkthroughContainerComponent.prototype.arrowPosition = function (coordinate, verticalContentSpacing) {
        var contentBlockElement = this.contentBlock.nativeElement;
        var contentBlockCoordinates = this._walkthroughService.retrieveCoordinates(contentBlockElement);
        var startLeft = contentBlockCoordinates.left + contentBlockCoordinates.width / 2;
        var startTop = contentBlockCoordinates.top + contentBlockCoordinates.height;
        var centerTop;
        var centerLeft;
        var endLeft = coordinate.left;
        var endTop = coordinate.top + this.marginZonePx.top;
        switch (this._contentPosition) {
            case 'top':
            case 'center':
            case 'bottom':
                if (contentBlockCoordinates.left > coordinate.left) {
                    startLeft = contentBlockCoordinates.left;
                }
                else {
                    startLeft = contentBlockCoordinates.left + contentBlockCoordinates.width;
                }
                startTop -= contentBlockCoordinates.height / 2;
                break;
            case 'below':
                startTop -= contentBlockCoordinates.height;
                break;
        }
        if (this._arrowPosition === 'topBottom') {
            endLeft += coordinate.width / 2;
            if (this._contentPosition === 'below') {
                endTop += coordinate.height + 6;
            }
            else {
                endTop -= 6;
            }
            centerLeft = (startLeft + endLeft) / 2;
            centerTop = (startTop + endTop) / 2;
            this.arrowPath = "M" + startLeft + "," + startTop + " Q" + startLeft + "," + centerTop + " " + centerLeft + "," + centerTop + " "
                + ("Q" + endLeft + "," + centerTop + " " + endLeft + "," + endTop);
        }
        else {
            if (startLeft > coordinate.left) {
                endLeft += coordinate.width + this.arrowMarkerDist;
            }
            else {
                endLeft -= this.arrowMarkerDist;
            }
            endTop += coordinate.height / 2;
            centerLeft = (startLeft + endLeft) / 2;
            centerTop = (startTop + endTop) / 2;
            var directStartLeft = startLeft;
            var directStartTop = startTop;
            if (this._contentPosition === 'top' || this._contentPosition === 'bottom') {
                directStartLeft = contentBlockCoordinates.left + (contentBlockCoordinates.width / 2);
                directStartTop = (this._contentPosition === 'top') ?
                    (contentBlockCoordinates.top + contentBlockCoordinates.height) :
                    (contentBlockCoordinates.top);
                // we use direct curve only if the arrow don't cross the content, otherwise, we use double curved
                if ((this._contentPosition === 'top' && directStartTop < (endTop - _walkthrough_component__WEBPACK_IMPORTED_MODULE_3__["WalkthroughComponent"].minimalMargin)) ||
                    (this._contentPosition === 'bottom' && directStartTop > (endTop + _walkthrough_component__WEBPACK_IMPORTED_MODULE_3__["WalkthroughComponent"].minimalMargin))) {
                    this.arrowPath = "M" + directStartLeft + "," + directStartTop + " Q" + directStartLeft + "," + endTop + " " + endLeft + "," + endTop;
                }
                else {
                    this.arrowPath = "M" + startLeft + "," + startTop + " Q" + centerLeft + "," + startTop + " " + centerLeft + "," + centerTop + " "
                        + ("Q" + centerLeft + "," + endTop + " " + endLeft + "," + endTop);
                }
            }
            else {
                this.arrowPath = "M" + directStartLeft + "," + directStartTop + " Q" + directStartLeft + "," + endTop + " " + endLeft + "," + endTop;
            }
        }
    };
    /**
     * stop the walkthrough : hide the container and change to pause at true
     */
    WalkthroughContainerComponent.prototype.stop = function () {
        if (this.parent && !this.pause && this.show) {
            this.show = false;
            this.pause = true;
        }
    };
    /**
     * continue the walkthrough if is stopped : show the container and change to pause at false
     */
    WalkthroughContainerComponent.prototype.continue = function (unpause) {
        if (unpause === void 0) { unpause = false; }
        if (this.parent && this.pause) {
            this.show = true;
            this.pause = false;
            if (unpause) {
                // if focusElement does not exist anymore, we close the walkthrough (without emiting any event)
                if (this.parent.focusElementSelector && !document.querySelector(this.parent.focusElementSelector)) {
                    this.close(false, false);
                }
                else {
                    // we update elements positioning on the current walkthrough
                    this.parent.refresh();
                }
            }
        }
    };
    WalkthroughContainerComponent.prototype.open = function () {
        // change markerUrl on Safari
        // related to
        // https://gist.github.com/leonderijke/c5cf7c5b2e424c0061d2
        // http://stackoverflow.com/a/18265336/796152
        // http://www.w3.org/TR/SVG/linking.html
        if (is_safari) {
            this.markerUrl = 'url(' + window.location.href + '#wkt-arrow)';
        }
        this.show = true;
    };
    WalkthroughContainerComponent.prototype.previous = function () {
        this.close(false, false);
        // we check if previous walkthrough is not disabled
        var current = this.parent;
        while (current) {
            if (current.previousStep && !current.previousStep.disabled) {
                current.loadPrevioustStep();
                return;
            }
            else {
                if (!current.previousStep) {
                    break;
                }
                current = current.previousStep;
            }
        }
        // no more previous walkthrough enabled, we quit the walkthrough
        this.parent = current;
        this.close(true, true);
    };
    WalkthroughContainerComponent.prototype.next = function () {
        this.close(false, false);
        // we check if next walkthrough is not disabled
        var current = this.parent;
        while (current) {
            if (current.nextStep && !current.nextStep.disabled) {
                current.loadNextStep();
                return;
            }
            else {
                if (!current.nextStep) {
                    break;
                }
                current = current.nextStep;
            }
        }
        // no more next walkthrough enabled, we quit the walkthrough
        this.parent = current;
        this.close(true, true);
    };
    WalkthroughContainerComponent.prototype.close = function (finishLink, closeWalkthrough) {
        if (finishLink === void 0) { finishLink = false; }
        if (closeWalkthrough === void 0) { closeWalkthrough = true; }
        // remove content
        this._portalHost.dispose();
        // hide
        this.show = false;
        if (this.parent) {
            this.parent.hide(finishLink, closeWalkthrough);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalHostDirective"]),
        __metadata("design:type", _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalHostDirective"])
    ], WalkthroughContainerComponent.prototype, "_portalHost", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('content'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], WalkthroughContainerComponent.prototype, "content", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('contentBlock'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], WalkthroughContainerComponent.prototype, "contentBlock", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('zone'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], WalkthroughContainerComponent.prototype, "zone", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('attr.id'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], WalkthroughContainerComponent.prototype, "id", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.hide'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], WalkthroughContainerComponent.prototype, "hide", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.cursor'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], WalkthroughContainerComponent.prototype, "cursor", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.backdrop'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], WalkthroughContainerComponent.prototype, "backdrop", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], WalkthroughContainerComponent.prototype, "click", null);
    WalkthroughContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'walkthrough-container',
            styles: [__webpack_require__(/*! ./walkthrough-container.component.scss */ "./projects/angular-walkthrough/src/lib/walkthrough-container.component.scss")],
            template: __webpack_require__(/*! ./walkthrough-container.component.html */ "./projects/angular-walkthrough/src/lib/walkthrough-container.component.html")
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"],
            _walkthrough_service__WEBPACK_IMPORTED_MODULE_4__["WalkthroughService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], WalkthroughContainerComponent);
    return WalkthroughContainerComponent;
}(_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["BasePortalHost"]));



/***/ }),

/***/ "./projects/angular-walkthrough/src/lib/walkthrough-flow.component.ts":
/*!****************************************************************************!*\
  !*** ./projects/angular-walkthrough/src/lib/walkthrough-flow.component.ts ***!
  \****************************************************************************/
/*! exports provided: WalkthroughFlowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkthroughFlowComponent", function() { return WalkthroughFlowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _walkthrough_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./walkthrough-tools */ "./projects/angular-walkthrough/src/lib/walkthrough-tools.ts");
/* harmony import */ var _walkthrough_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./walkthrough-text */ "./projects/angular-walkthrough/src/lib/walkthrough-text.ts");
/* harmony import */ var _walkthrough_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./walkthrough.component */ "./projects/angular-walkthrough/src/lib/walkthrough.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var nextUniqueId = 0;
var WalkthroughFlowComponent = /** @class */ (function () {
    function WalkthroughFlowComponent() {
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.finished = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.contentStyle = 'draken';
        this.marginZone = null;
        this._uid = "walkthrough-flow-" + nextUniqueId++;
    }
    Object.defineProperty(WalkthroughFlowComponent.prototype, "id", {
        get: function () { return this._id; },
        set: function (value) { this._id = value || this._uid; },
        enumerable: true,
        configurable: true
    });
    WalkthroughFlowComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.init();
        }, 0);
    };
    WalkthroughFlowComponent.prototype.init = function () {
        var _this = this;
        var prevComp = null;
        this.walkthroughComponents.forEach(function (walkthrough) {
            // navigation auto (ignore previousStep/nextStep on the WalkthroughComponent)
            if (prevComp) {
                walkthrough.previousStep = prevComp;
                prevComp.nextStep = walkthrough;
            }
            prevComp = walkthrough;
            // transmition (only if different from default)
            if (_this.closed) {
                walkthrough.closed = _this.closed;
            }
            if (_this.finished) {
                walkthrough.finished = _this.finished;
            }
            if (!walkthrough.contentStyle && _this.contentStyle) {
                walkthrough.contentStyle = _this.contentStyle;
            }
            if (!walkthrough.arrowColor && _this.arrowColor) {
                walkthrough.arrowColor = _this.arrowColor;
            }
            if (!walkthrough.marginZone && _this.marginZone) {
                walkthrough.marginZone = _this.marginZone;
            }
            if (!walkthrough.showArrow && Object(_walkthrough_tools__WEBPACK_IMPORTED_MODULE_1__["booleanValue"])(_this.showArrow)) {
                walkthrough.showArrow = _this.showArrow;
            }
            if (!walkthrough.rootElement && _this.rootElement) {
                walkthrough.rootElement = _this.rootElement;
            }
            if (!walkthrough.closeButton && Object(_walkthrough_tools__WEBPACK_IMPORTED_MODULE_1__["booleanValue"])(_this.closeButton)) {
                walkthrough.closeButton = _this.closeButton;
            }
            if (walkthrough.closeAnywhere && !Object(_walkthrough_tools__WEBPACK_IMPORTED_MODULE_1__["booleanValue"])(_this.closeAnywhere)) {
                walkthrough.closeAnywhere = _this.closeAnywhere;
            }
            if (!walkthrough.finishButton && Object(_walkthrough_tools__WEBPACK_IMPORTED_MODULE_1__["booleanValue"])(_this.finishButton)) {
                walkthrough.finishButton = _this.finishButton;
            }
            if (!walkthrough.focusBackdrop && Object(_walkthrough_tools__WEBPACK_IMPORTED_MODULE_1__["booleanValue"])(_this.focusBackdrop)) {
                walkthrough.focusBackdrop = _this.focusBackdrop;
            }
            if (!walkthrough.focusGlow && Object(_walkthrough_tools__WEBPACK_IMPORTED_MODULE_1__["booleanValue"])(_this.focusGlow)) {
                walkthrough.focusGlow = _this.focusGlow;
            }
            if (!walkthrough.radius && _this.radius) {
                walkthrough.radius = _this.radius;
            }
            if (!walkthrough.texts && _this.texts) {
                walkthrough.texts = _this.texts;
            }
        });
        // navigation auto (close on last step)
        prevComp.finishButton = true;
    };
    WalkthroughFlowComponent.prototype.start = function () {
        this.walkthroughComponents.first.open();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(_walkthrough_component__WEBPACK_IMPORTED_MODULE_3__["WalkthroughComponent"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], WalkthroughFlowComponent.prototype, "walkthroughComponents", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [String])
    ], WalkthroughFlowComponent.prototype, "id", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], WalkthroughFlowComponent.prototype, "closed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], WalkthroughFlowComponent.prototype, "finished", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], WalkthroughFlowComponent.prototype, "contentStyle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], WalkthroughFlowComponent.prototype, "arrowColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], WalkthroughFlowComponent.prototype, "marginZone", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WalkthroughFlowComponent.prototype, "showArrow", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], WalkthroughFlowComponent.prototype, "rootElement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WalkthroughFlowComponent.prototype, "closeButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WalkthroughFlowComponent.prototype, "closeAnywhere", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WalkthroughFlowComponent.prototype, "finishButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WalkthroughFlowComponent.prototype, "focusBackdrop", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WalkthroughFlowComponent.prototype, "focusGlow", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], WalkthroughFlowComponent.prototype, "radius", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _walkthrough_text__WEBPACK_IMPORTED_MODULE_2__["WalkthroughText"])
    ], WalkthroughFlowComponent.prototype, "texts", void 0);
    WalkthroughFlowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ng-walkthrough-flow',
            template: ''
        }),
        __metadata("design:paramtypes", [])
    ], WalkthroughFlowComponent);
    return WalkthroughFlowComponent;
}());



/***/ }),

/***/ "./projects/angular-walkthrough/src/lib/walkthrough-text.ts":
/*!******************************************************************!*\
  !*** ./projects/angular-walkthrough/src/lib/walkthrough-text.ts ***!
  \******************************************************************/
/*! exports provided: WalkthroughText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkthroughText", function() { return WalkthroughText; });
var WalkthroughText = /** @class */ (function () {
    function WalkthroughText() {
        this.previous = 'Previous';
        this.next = 'Next';
        this.close = 'Close';
    }
    return WalkthroughText;
}());



/***/ }),

/***/ "./projects/angular-walkthrough/src/lib/walkthrough-tools.ts":
/*!*******************************************************************!*\
  !*** ./projects/angular-walkthrough/src/lib/walkthrough-tools.ts ***!
  \*******************************************************************/
/*! exports provided: booleanValue, WalkthroughEvent, WalkthroughMargin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "booleanValue", function() { return booleanValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkthroughEvent", function() { return WalkthroughEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkthroughMargin", function() { return WalkthroughMargin; });
var booleanValue = function (value) {
    return value === 'true' || value === true;
};
var WalkthroughEvent = /** @class */ (function () {
    function WalkthroughEvent(component, focusElement) {
        this.component = component;
        this.focusElement = focusElement;
    }
    return WalkthroughEvent;
}());

var WalkthroughMargin = /** @class */ (function () {
    function WalkthroughMargin(top, right, bottom, left) {
        if (top === void 0) { top = 0; }
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.left = left;
        if (right === undefined) {
            this.right = top;
        }
        if (bottom === undefined) {
            this.bottom = top;
        }
        if (left === undefined && right === undefined) {
            this.left = top;
        }
        else if (left === undefined) {
            this.left = right;
        }
    }
    WalkthroughMargin.parsePoints = function (points) {
        var pointsPx;
        if (points.match(/^\d+(?:\s+\d+)*$/)) {
            var split = points.split(/\s+/).map(function (i) { return parseFloat(i); });
            pointsPx = new WalkthroughMargin(split[0], split[1], split[2], split[3]);
        }
        return pointsPx || new WalkthroughMargin();
    };
    return WalkthroughMargin;
}());



/***/ }),

/***/ "./projects/angular-walkthrough/src/lib/walkthrough.component.ts":
/*!***********************************************************************!*\
  !*** ./projects/angular-walkthrough/src/lib/walkthrough.component.ts ***!
  \***********************************************************************/
/*! exports provided: WalkthroughComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkthroughComponent", function() { return WalkthroughComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _walkthrough_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./walkthrough-container.component */ "./projects/angular-walkthrough/src/lib/walkthrough-container.component.ts");
/* harmony import */ var _walkthrough_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./walkthrough.service */ "./projects/angular-walkthrough/src/lib/walkthrough.service.ts");
/* harmony import */ var _walkthrough_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./walkthrough-text */ "./projects/angular-walkthrough/src/lib/walkthrough-text.ts");
/* harmony import */ var _walkthrough_tools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./walkthrough-tools */ "./projects/angular-walkthrough/src/lib/walkthrough-tools.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var nextUniqueId = 0;
var WalkthroughComponent = /** @class */ (function () {
    function WalkthroughComponent(_componentFactoryResolver, _applicationRef, _injector, _renderer, _walkthroughService) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this._applicationRef = _applicationRef;
        this._injector = _injector;
        this._renderer = _renderer;
        this._walkthroughService = _walkthroughService;
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.finished = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.typeSelector = 'element';
        this.contentStyle = 'draken';
        this.animation = 'none';
        this.animationDelays = 0;
        this._uid = "walkthrough-" + nextUniqueId++;
        this._readyHasBeenEmited = false;
        this._display = false;
        this._hasHighlightAnimation = false;
        this._hasBackdrop = false;
        this._hasGlow = false;
        this._hasFinish = false;
        this._hasArrow = false;
        this._hasCloseButton = false;
        this._hasCloseAnywhere = true;
        this._disabled = false;
        this._marginZonePx = new _walkthrough_tools__WEBPACK_IMPORTED_MODULE_6__["WalkthroughMargin"]();
        this._alignContent = 'left';
        this._verticalAlignContent = 'top';
        this._contentSpacing = 0;
        this._verticalContentSpacing = 50;
    }
    WalkthroughComponent_1 = WalkthroughComponent;
    Object.defineProperty(WalkthroughComponent.prototype, "marginZone", {
        get: function () { return this._marginZone; },
        set: function (points) {
            if (this._marginZone !== points) {
                if (points === null) {
                    this._marginZone = null;
                }
                this._marginZonePx = _walkthrough_tools__WEBPACK_IMPORTED_MODULE_6__["WalkthroughMargin"].parsePoints(points);
                if (this._marginZonePx !== null) {
                    this._marginZone = points;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WalkthroughComponent.prototype, "arrowColor", {
        get: function () { return this._arrowColor; },
        set: function (color) {
            if (this._arrowColor !== color) {
                this._arrowColor = color;
                if (this._getInstance()) {
                    this._getInstance().arrowColor = this._arrowColor;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WalkthroughComponent.prototype, "id", {
        get: function () { return this._id; },
        set: function (value) { this._id = value || this._uid; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WalkthroughComponent.prototype, "alignContent", {
        get: function () {
            return this._alignContent;
        },
        set: function (value) {
            if (this._alignContent !== value) {
                this._alignContent = value;
                this._updateElementPositions(this._getInstance());
            }
            else {
                this._alignContent = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WalkthroughComponent.prototype, "verticalAlignContent", {
        get: function () {
            return this._verticalAlignContent;
        },
        set: function (value) {
            if (this._verticalAlignContent !== value) {
                this._verticalAlignContent = value;
                this._updateElementPositions(this._getInstance());
            }
            else {
                this._verticalAlignContent = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WalkthroughComponent.prototype, "contentSpacing", {
        get: function () {
            return this._contentSpacing;
        },
        set: function (value) {
            value = Math.max(WalkthroughComponent_1.minimalMargin, value);
            if (this._contentSpacing !== value) {
                this._contentSpacing = value * 1;
                this._updateElementPositions(this._getInstance());
            }
            else {
                this._contentSpacing = value * 1;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WalkthroughComponent.prototype, "verticalContentSpacing", {
        get: function () {
            return this._verticalContentSpacing;
        },
        set: function (value) {
            value = Math.max(WalkthroughComponent_1.minimalMargin, value);
            if (this._verticalContentSpacing !== value) {
                this._verticalContentSpacing = value * 1;
                this._updateElementPositions(this._getInstance());
            }
            else {
                this._verticalContentSpacing = value * 1;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WalkthroughComponent.prototype, "closeButton", {
        get: function () {
            return this._hasCloseButton;
        },
        set: function (value) {
            this._hasCloseButton = Object(_walkthrough_tools__WEBPACK_IMPORTED_MODULE_6__["booleanValue"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WalkthroughComponent.prototype, "closeAnywhere", {
        get: function () {
            return this._hasCloseAnywhere;
        },
        set: function (value) {
            this._hasCloseAnywhere = Object(_walkthrough_tools__WEBPACK_IMPORTED_MODULE_6__["booleanValue"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WalkthroughComponent.prototype, "showArrow", {
        get: function () {
            return this._hasArrow;
        },
        set: function (value) {
            this._hasArrow = Object(_walkthrough_tools__WEBPACK_IMPORTED_MODULE_6__["booleanValue"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WalkthroughComponent.prototype, "finishButton", {
        get: function () {
            return this._hasFinish;
        },
        set: function (value) {
            this._hasFinish = Object(_walkthrough_tools__WEBPACK_IMPORTED_MODULE_6__["booleanValue"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WalkthroughComponent.prototype, "focusHighlightAnimation", {
        get: function () {
            return this._hasHighlightAnimation;
        },
        set: function (value) {
            this._hasHighlightAnimation = Object(_walkthrough_tools__WEBPACK_IMPORTED_MODULE_6__["booleanValue"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WalkthroughComponent.prototype, "focusBackdrop", {
        get: function () {
            return this._hasBackdrop;
        },
        set: function (value) {
            this._hasBackdrop = Object(_walkthrough_tools__WEBPACK_IMPORTED_MODULE_6__["booleanValue"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WalkthroughComponent.prototype, "focusGlow", {
        get: function () {
            return this._hasGlow;
        },
        set: function (value) {
            this._hasGlow = Object(_walkthrough_tools__WEBPACK_IMPORTED_MODULE_6__["booleanValue"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WalkthroughComponent.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            var _this = this;
            this._disabled = value;
            var instance = this._getInstance();
            if (instance) {
                setTimeout(function () {
                    instance.hasPrevious = _this._hasPreviousStep(instance);
                    instance.hasNext = _this._hasNextStep(instance);
                    if (!instance.hasNext) {
                        instance.hasFinish = true;
                    }
                    else {
                        instance.hasFinish = instance.parent.finishButton;
                    }
                }, 50);
            }
        },
        enumerable: true,
        configurable: true
    });
    WalkthroughComponent.walkthroughStop = function () {
        if (WalkthroughComponent_1._walkthroughContainer) {
            WalkthroughComponent_1._walkthroughContainer.instance.stop();
        }
    };
    WalkthroughComponent.walkthroughHasShow = function () {
        return WalkthroughComponent_1._walkthroughContainer
            ? WalkthroughComponent_1._walkthroughContainer.instance.show
            : false;
    };
    WalkthroughComponent.walkthroughHasPause = function () {
        return WalkthroughComponent_1._walkthroughContainer
            ? WalkthroughComponent_1._walkthroughContainer.instance.pause
            : false;
    };
    WalkthroughComponent.walkthroughContinue = function () {
        if (WalkthroughComponent_1._walkthroughContainer) {
            WalkthroughComponent_1._walkthroughContainer.instance.continue(true);
        }
    };
    WalkthroughComponent.walkthroughNext = function () {
        if (WalkthroughComponent_1._walkthroughContainer) {
            WalkthroughComponent_1._walkthroughContainer.instance.next();
        }
    };
    WalkthroughComponent.walkthroughPrevious = function () {
        if (WalkthroughComponent_1._walkthroughContainer) {
            WalkthroughComponent_1._walkthroughContainer.instance.previous();
        }
    };
    WalkthroughComponent.prototype.resize = function () {
        if (this._display &&
            WalkthroughComponent_1._walkthroughContainer &&
            window.innerWidth !== this._windowWidth &&
            !WalkthroughComponent_1.walkthroughHasPause()) {
            this._elementLocations();
        }
    };
    WalkthroughComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // init the Walkthrough element container
        if (!WalkthroughComponent_1._walkthroughContainer && !WalkthroughComponent_1._walkthroughContainerCreating) {
            WalkthroughComponent_1._walkthroughContainerCreating = true;
            setTimeout(function () {
                WalkthroughComponent_1._walkthroughContainer =
                    _this._appendComponentToBody(_walkthrough_container_component__WEBPACK_IMPORTED_MODULE_3__["WalkthroughContainerComponent"]);
            }, 0);
        }
    };
    WalkthroughComponent.prototype.next = function (closedEvent, finishedEvent) {
        if (closedEvent) {
            this.closed = closedEvent;
        }
        if (finishedEvent) {
            this.finished = finishedEvent;
        }
        this.open();
    };
    WalkthroughComponent.prototype.refresh = function () {
        if (!this._getInstance().pause) {
            WalkthroughComponent_1.onRefresh.next(this);
            this._elementLocations();
        }
    };
    WalkthroughComponent.prototype.open = function () {
        if (!this._getInstance().pause) {
            WalkthroughComponent_1.onOpen.next(this);
            this._elementLocations();
        }
        else {
            console.warn('Another walkthrough is in pause. Please close it before.');
        }
    };
    /**
     * Do not use this method outside of the library
     */
    WalkthroughComponent.prototype.loadPrevioustStep = function () {
        var _this = this;
        setTimeout(function () {
            WalkthroughComponent_1.onNavigate.next({ previous: _this, next: _this.previousStep });
            WalkthroughComponent_1.onNavigatePrevious.next({ previous: _this, next: _this.previousStep });
            _this.previousStep._next(_this.closed, _this.finished);
        }, 0);
    };
    /**
     * Do not use this method outside of the library
     */
    WalkthroughComponent.prototype.loadNextStep = function () {
        var _this = this;
        setTimeout(function () {
            WalkthroughComponent_1.onNavigate.next({ previous: _this, next: _this.nextStep });
            WalkthroughComponent_1.onNavigateNext.next({ previous: _this, next: _this.nextStep });
            _this.nextStep._next(_this.closed, _this.finished);
        }, 0);
    };
    /**
     * Do not use this method outside of the library
     */
    WalkthroughComponent.prototype.hide = function (finishLink, closeWalkthrough) {
        var _this = this;
        if (finishLink === void 0) { finishLink = false; }
        if (closeWalkthrough === void 0) { closeWalkthrough = true; }
        this._display = false;
        // add CSS to focusElement
        if (this.focusElementCSSClass && this._focusElement) {
            this._renderer.removeClass(this._focusElement, this.focusElementCSSClass);
        }
        if (closeWalkthrough) {
            setTimeout(function () {
                WalkthroughComponent_1.onClose.next(_this);
                // emit closed event
                _this.closed.emit(finishLink);
                if (!_this.nextStep) {
                    // emit finished event
                    WalkthroughComponent_1.onFinish.next(_this);
                    _this.finished.emit(new _walkthrough_tools__WEBPACK_IMPORTED_MODULE_6__["WalkthroughEvent"](_this, _this._focusElement));
                }
            }, 20);
        }
    };
    WalkthroughComponent.prototype._show = function () {
        this._display = true;
    };
    WalkthroughComponent.prototype._next = function (closedEvent, finishedEvent) {
        if (closedEvent) {
            this.closed = closedEvent;
        }
        if (finishedEvent) {
            this.finished = finishedEvent;
        }
        this.open();
    };
    WalkthroughComponent.prototype._getInstance = function () {
        return WalkthroughComponent_1._walkthroughContainer
            ? WalkthroughComponent_1._walkthroughContainer.instance
            : null;
    };
    WalkthroughComponent.prototype._appendComponentToBody = function (component) {
        // create a component reference
        var componentRef = this._componentFactoryResolver.resolveComponentFactory(component).create(this._injector);
        // attach component to the appRef so that so that it will be dirty checked.
        this._applicationRef.attachView(componentRef.hostView);
        // get DOM element from component
        var domElem = componentRef.hostView.rootNodes[0];
        document.body.appendChild(domElem);
        return componentRef;
    };
    WalkthroughComponent.prototype._attachWalkthroughContent = function (componentOrTemplateRef, walkthroughContainer) {
        if (componentOrTemplateRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]) {
            walkthroughContainer.attachTemplatePortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["TemplatePortal"](componentOrTemplateRef, null));
        }
        else {
            var injectionTokens = new WeakMap();
            injectionTokens.set(_walkthrough_container_component__WEBPACK_IMPORTED_MODULE_3__["WalkthroughContainerComponent"], walkthroughContainer);
            var injector = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalInjector"](this._injector, injectionTokens);
            walkthroughContainer.attachComponentPortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](componentOrTemplateRef, undefined, injector));
        }
    };
    WalkthroughComponent.prototype._elementLocations = function () {
        this._getFocusElement();
        var element = this._focusElement;
        if (element) {
            this._walkthroughService.scrollIntoViewIfOutOfView(element);
            // if there is a root element defined (in some cases when position fixed is used, we need to scroll on it)
            if (this.rootElement) {
                document.querySelector(this.rootElement).scrollIntoView(true);
            }
            this._offsetCoordinates = this._walkthroughService.retrieveCoordinates(element, this._marginZonePx);
            if (this.typeSelector === 'zone') {
                var offsetEndCoordinatesEnd = this._walkthroughService.retrieveCoordinates(this._focusElementEnd, this._marginZonePx);
                this._offsetCoordinates.height = offsetEndCoordinatesEnd.top
                    - this._offsetCoordinates.top
                    + offsetEndCoordinatesEnd.height;
                this._offsetCoordinates.width = offsetEndCoordinatesEnd.left
                    - this._offsetCoordinates.left
                    + offsetEndCoordinatesEnd.width;
            }
        }
        else {
            this._offsetCoordinates = null;
        }
        this._setFocus();
        this._windowWidth = window.innerWidth;
    };
    /**
     *
     */
    WalkthroughComponent.prototype._getFocusElement = function () {
        var focusElements;
        try {
            focusElements = this.focusElementSelector
                ? document.querySelectorAll(this.focusElementSelector)
                : null;
        }
        catch (error) {
            console.error("#" + this.id + "@focusElementSelector: '" + this.focusElementSelector + "' is not a valid selector.\n", error);
        }
        // getting focus element
        if (focusElements && focusElements.length > 0) {
            if (focusElements.length > 1) {
                // Multiple items fit selector, displaying first visible as focus item in 'element' mode
                var l = focusElements.length;
                for (var i = 0; i < l; i++) {
                    // offsetHeight not of 0 means visible
                    if (focusElements[i].offsetHeight) {
                        this._focusElement = focusElements[i];
                        i = focusElements.length;
                        break;
                    }
                }
                // if typeSelector is by zone, get also the last element
                if (this.typeSelector === 'zone') {
                    for (var i = l - 1; i >= 0; i--) {
                        // offsetHeight not of 0 means visible
                        if (focusElements[i].offsetHeight) {
                            this._focusElementEnd = focusElements[i];
                            i = focusElements.length;
                            break;
                        }
                    }
                    // this the zone this just a unique element, change mode for 'element'
                    if (this._focusElement === this._focusElementEnd) {
                        this.typeSelector = 'element';
                    }
                }
            }
            else {
                this._focusElement = focusElements[0];
                this.typeSelector = 'element';
            }
        }
        else {
            this._focusElement = null;
        }
    };
    /**
     * get instance, hightlight the focused element et show the template
     */
    WalkthroughComponent.prototype._setFocus = function () {
        var _this = this;
        var instance = this._getInstance();
        if (instance) {
            var scrollY_1 = window.pageXOffset;
            this._initStylingTemplate(instance);
            setTimeout(function () {
                if (_this._focusElement && instance.zone) {
                    instance.hightlightZone(_this._offsetCoordinates, scrollY_1 - window.pageXOffset, _this.animation, _this.animationDelays, _this._setFocusContinue.bind(_this));
                }
                else {
                    _this._setFocusContinue();
                }
            }, 20);
        }
    };
    WalkthroughComponent.prototype._setFocusContinue = function () {
        var _this = this;
        var instance = this._getInstance();
        if (!this._display) {
            this._attachContentTemplate();
            this._initContentTemplate(instance);
        }
        setTimeout(function () {
            instance.hightlightZoneStyling(_this._focusElement);
            _this._updateElementPositions(instance);
        }, 0);
    };
    WalkthroughComponent.prototype._updateElementPositions = function (instance) {
        var _this = this;
        if (WalkthroughComponent_1._walkthroughContainer && this._getInstance()) {
            setTimeout(function () {
                instance.contentBlockPosition(_this._offsetCoordinates, _this._alignContent, _this._verticalAlignContent, _this._contentSpacing, _this._verticalContentSpacing);
                if (_this._focusElement !== null && _this._hasArrow) {
                    instance.arrowPosition(_this._offsetCoordinates, _this._verticalContentSpacing);
                }
                // add CSS to focusElement
                if (_this.focusElementCSSClass && _this._focusElement) {
                    _this._renderer.addClass(_this._focusElement, _this.focusElementCSSClass);
                }
                setTimeout(function () {
                    _this._getInstance().setHeight();
                    if (!_this._readyHasBeenEmited) {
                        _this._readyHasBeenEmited = true;
                        _this.ready.emit(new _walkthrough_tools__WEBPACK_IMPORTED_MODULE_6__["WalkthroughEvent"](_this, _this._focusElement));
                    }
                    var contentBlockNative = instance.contentBlock.nativeElement;
                    var scrollPos;
                    if (_this._focusElement != null) {
                        var coordinatesContent = _this._walkthroughService.retrieveCoordinates(contentBlockNative);
                        var coordinatesFocus = _this._walkthroughService.retrieveCoordinates(_this._focusElement);
                        // is content + focus higher than window ?
                        if (coordinatesContent.height + coordinatesFocus.height > window.innerHeight) {
                            // we scroll on content
                            contentBlockNative.scrollIntoView(true);
                            // we offset the window half of the content height
                            if (coordinatesContent.top > coordinatesFocus.top) {
                                // content below focusZone
                                scrollPos = -(coordinatesContent.height / 2);
                            }
                            else {
                                // content above focusZone
                                scrollPos = +(coordinatesContent.height / 2);
                            }
                        }
                        else {
                            // scroll on element higher minus minimal margin
                            if (coordinatesContent.top > coordinatesFocus.top) {
                                window.scrollTo(coordinatesFocus.left, coordinatesFocus.top);
                                scrollPos = -WalkthroughComponent_1.minimalMargin;
                            }
                            else {
                                contentBlockNative.scrollIntoView(true);
                                scrollPos = -WalkthroughComponent_1.minimalMargin;
                            }
                        }
                    }
                    else {
                        // no focus zone, scroll on content minus margin
                        contentBlockNative.scrollIntoView(true);
                        scrollPos = -WalkthroughComponent_1.minimalMargin;
                    }
                    window.scrollBy(0, scrollPos);
                }, 50);
            }, 0);
        }
    };
    /**
     * Attache the template in the contener, if a template is linked.
     */
    WalkthroughComponent.prototype._attachContentTemplate = function () {
        if (this.contentTemplate) {
            this._attachWalkthroughContent(this.contentTemplate, this._getInstance());
        }
    };
    /**
     * init a partof styles of the contenaire
     */
    WalkthroughComponent.prototype._initStylingTemplate = function (instance) {
        var hasHighlightZone = this._focusElement !== null;
        instance.parent = this;
        instance.open();
        instance.hasHighlightZone = hasHighlightZone;
        instance.hasClickable = hasHighlightZone && typeof this.focusClick === 'function';
        instance.hasHighlight = hasHighlightZone && this._hasHighlightAnimation;
        instance.hasBackdrop = this._hasBackdrop;
        instance.hasGlow = hasHighlightZone && this._hasGlow;
    };
    /**
     * init all datas of the contenaire
     */
    WalkthroughComponent.prototype._initContentTemplate = function (instance) {
        var hasHighlightZone = this._focusElement !== null;
        instance.hasPrevious = this._hasPreviousStep(instance);
        instance.hasNext = this._hasNextStep(instance);
        instance.hasCloseButton = this._hasCloseButton;
        instance.hasCloseAnywhere = this._hasCloseAnywhere;
        instance.hasFinish = this._hasFinish || !instance.hasNext;
        instance.hasArrow = hasHighlightZone && this._hasArrow;
        instance.arrowColor = this.arrowColor;
        instance.radius = this.radius;
        instance.marginZone = this._marginZone ? this._marginZone.replace(/(\d+)/g, '$1px') : null;
        instance.marginZonePx = this._marginZonePx;
        instance.contentText = this.contentText;
        instance.contentStyle = this.contentStyle;
        instance.text = this.texts
            ? __assign({}, new _walkthrough_text__WEBPACK_IMPORTED_MODULE_5__["WalkthroughText"](), this.texts) : new _walkthrough_text__WEBPACK_IMPORTED_MODULE_5__["WalkthroughText"]();
        this._show();
    };
    /**
     * check if there is a previous step enabled
     */
    WalkthroughComponent.prototype._hasPreviousStep = function (instance) {
        if (instance.parent) {
            var current = instance.parent.previousStep;
            while (current) {
                if (!current.disabled) {
                    return true;
                }
                current = current.previousStep;
            }
        }
        return false;
    };
    /**
     * check if there is a next step enabled
     */
    WalkthroughComponent.prototype._hasNextStep = function (instance) {
        if (instance.parent) {
            var current = instance.parent.nextStep;
            while (current) {
                if (!current.disabled) {
                    return true;
                }
                current = current.nextStep;
            }
        }
        return false;
    };
    WalkthroughComponent._walkthroughContainer = null;
    WalkthroughComponent._walkthroughContainerCreating = false;
    WalkthroughComponent.minimalMargin = 30;
    WalkthroughComponent.onOpen = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    WalkthroughComponent.onRefresh = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    WalkthroughComponent.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    WalkthroughComponent.onNavigate = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    WalkthroughComponent.onNavigatePrevious = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    WalkthroughComponent.onNavigateNext = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    WalkthroughComponent.onFinish = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], WalkthroughComponent.prototype, "closed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], WalkthroughComponent.prototype, "finished", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], WalkthroughComponent.prototype, "ready", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], WalkthroughComponent.prototype, "focusElementCSSClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], WalkthroughComponent.prototype, "rootElement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], WalkthroughComponent.prototype, "focusElementSelector", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], WalkthroughComponent.prototype, "typeSelector", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], WalkthroughComponent.prototype, "focusClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], WalkthroughComponent.prototype, "radius", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", WalkthroughComponent)
    ], WalkthroughComponent.prototype, "previousStep", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", WalkthroughComponent)
    ], WalkthroughComponent.prototype, "nextStep", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _walkthrough_text__WEBPACK_IMPORTED_MODULE_5__["WalkthroughText"])
    ], WalkthroughComponent.prototype, "texts", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], WalkthroughComponent.prototype, "contentTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], WalkthroughComponent.prototype, "contentText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], WalkthroughComponent.prototype, "contentStyle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [String])
    ], WalkthroughComponent.prototype, "marginZone", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [String])
    ], WalkthroughComponent.prototype, "arrowColor", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], WalkthroughComponent.prototype, "animation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WalkthroughComponent.prototype, "animationDelays", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [String])
    ], WalkthroughComponent.prototype, "id", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [String])
    ], WalkthroughComponent.prototype, "alignContent", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [String])
    ], WalkthroughComponent.prototype, "verticalAlignContent", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Number])
    ], WalkthroughComponent.prototype, "contentSpacing", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Number])
    ], WalkthroughComponent.prototype, "verticalContentSpacing", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], WalkthroughComponent.prototype, "closeButton", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], WalkthroughComponent.prototype, "closeAnywhere", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], WalkthroughComponent.prototype, "showArrow", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], WalkthroughComponent.prototype, "finishButton", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], WalkthroughComponent.prototype, "focusHighlightAnimation", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], WalkthroughComponent.prototype, "focusBackdrop", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], WalkthroughComponent.prototype, "focusGlow", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Boolean])
    ], WalkthroughComponent.prototype, "disabled", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], WalkthroughComponent.prototype, "resize", null);
    WalkthroughComponent = WalkthroughComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ng-walkthrough',
            template: ''
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _walkthrough_service__WEBPACK_IMPORTED_MODULE_4__["WalkthroughService"]])
    ], WalkthroughComponent);
    return WalkthroughComponent;
    var WalkthroughComponent_1;
}());



/***/ }),

/***/ "./projects/angular-walkthrough/src/lib/walkthrough.service.ts":
/*!*********************************************************************!*\
  !*** ./projects/angular-walkthrough/src/lib/walkthrough.service.ts ***!
  \*********************************************************************/
/*! exports provided: WalkthroughService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkthroughService", function() { return WalkthroughService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WalkthroughService = /** @class */ (function () {
    function WalkthroughService() {
        this._overflowRegex = /(auto|scroll)/;
    }
    WalkthroughService.prototype.retrieveCoordinates = function (element, margin) {
        var clientrect = element.getBoundingClientRect();
        var style = window.getComputedStyle(element);
        var coordinates = {
            top: clientrect.top - (margin ? margin.top : 0),
            height: clientrect.height,
            width: clientrect.width,
            left: clientrect.left - (margin ? margin.left : 0),
            margin: {
                top: parseFloat(style.marginTop),
                right: parseFloat(style.marginRight),
                bottom: parseFloat(style.marginBottom),
                left: parseFloat(style.marginLeft),
            }
        };
        coordinates.top += this.getTop();
        return coordinates;
    };
    WalkthroughService.prototype.getTop = function () {
        return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    };
    WalkthroughService.prototype.getDocumentHeight = function () {
        // Height of entire body : https://stackoverflow.com/a/1147768
        var body_height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
        return Math.max(this.getHeightOfPage() + this.getTop(), body_height);
    };
    WalkthroughService.prototype.scrollIntoViewIfOutOfView = function (element, marginTop) {
        if (marginTop === void 0) { marginTop = 0; }
        var topOfPage = this.getTop();
        var heightOfPage = this.getHeightOfPage();
        var elementY = 0;
        var elementH = 0;
        var parent = element;
        while (parent && parent !== document.body) {
            elementY += parent.offsetTop;
            parent = parent.offsetParent;
        }
        elementH = element.offsetHeight;
        if ((topOfPage + heightOfPage) < (elementY + elementH)) {
            element.scrollIntoView(false);
        }
        else if (elementY < topOfPage) {
            element.scrollIntoView(true);
            window.scrollBy(0, -30);
        }
        else {
            // test of overflow element
            var current = element;
            while (current && current !== document.body) {
                parent = this.getScrollParent(current);
                if (current.offsetTop + current.offsetHeight - parent.scrollTop > parent.offsetHeight ||
                    current.offsetLeft + current.offsetWidth - parent.scrollLeft > parent.offsetWidth) {
                    element.scrollIntoView();
                    window.scrollBy(0, -30);
                    break;
                }
                current = parent;
            }
        }
    };
    WalkthroughService.prototype.scrollToTopElement = function (element1, element2, margin) {
        if (element1 && element2) {
            var element1Position = this.retrieveCoordinates(element1, margin);
            var element2Position = this.retrieveCoordinates(element2, margin);
            var minX = Math.min(element1Position.left, element2Position.left);
            var minY = Math.min(element1Position.top, element2Position.top);
            window.scrollTo(minX - 20, minY - 20);
        }
    };
    WalkthroughService.prototype.getScrollParent = function (element) {
        var scrollParent;
        var style = getComputedStyle(element);
        var excludeStaticParent = style.position === 'absolute';
        if (style.position !== 'fixed') {
            var parent_1 = element.parentElement;
            while (parent_1 && parent_1 !== document.body) {
                style = getComputedStyle(parent_1);
                if (!(excludeStaticParent && style.position === 'static') &&
                    this._overflowRegex.test(style.overflow + style.overflowY + style.overflowX)) {
                    scrollParent = parent_1;
                    break;
                }
                parent_1 = parent_1.parentElement;
            }
        }
        return scrollParent || document.body;
    };
    WalkthroughService.prototype.getHeightOfPage = function () {
        return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    };
    WalkthroughService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], WalkthroughService);
    return WalkthroughService;
}());



/***/ }),

/***/ "./projects/angular-walkthrough/src/public_api.ts":
/*!********************************************************!*\
  !*** ./projects/angular-walkthrough/src/public_api.ts ***!
  \********************************************************/
/*! exports provided: throwWalkthroughContentAlreadyAttachedError, WalkthroughContainerComponent, WalkthroughFlowComponent, WalkthroughText, booleanValue, WalkthroughEvent, WalkthroughMargin, WalkthroughComponent, WalkthroughService, WalkthroughModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_walkthrough_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/walkthrough-container.component */ "./projects/angular-walkthrough/src/lib/walkthrough-container.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throwWalkthroughContentAlreadyAttachedError", function() { return _lib_walkthrough_container_component__WEBPACK_IMPORTED_MODULE_0__["throwWalkthroughContentAlreadyAttachedError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WalkthroughContainerComponent", function() { return _lib_walkthrough_container_component__WEBPACK_IMPORTED_MODULE_0__["WalkthroughContainerComponent"]; });

/* harmony import */ var _lib_walkthrough_flow_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/walkthrough-flow.component */ "./projects/angular-walkthrough/src/lib/walkthrough-flow.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WalkthroughFlowComponent", function() { return _lib_walkthrough_flow_component__WEBPACK_IMPORTED_MODULE_1__["WalkthroughFlowComponent"]; });

/* harmony import */ var _lib_walkthrough_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/walkthrough-text */ "./projects/angular-walkthrough/src/lib/walkthrough-text.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WalkthroughText", function() { return _lib_walkthrough_text__WEBPACK_IMPORTED_MODULE_2__["WalkthroughText"]; });

/* harmony import */ var _lib_walkthrough_tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/walkthrough-tools */ "./projects/angular-walkthrough/src/lib/walkthrough-tools.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "booleanValue", function() { return _lib_walkthrough_tools__WEBPACK_IMPORTED_MODULE_3__["booleanValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WalkthroughEvent", function() { return _lib_walkthrough_tools__WEBPACK_IMPORTED_MODULE_3__["WalkthroughEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WalkthroughMargin", function() { return _lib_walkthrough_tools__WEBPACK_IMPORTED_MODULE_3__["WalkthroughMargin"]; });

/* harmony import */ var _lib_walkthrough_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/walkthrough.component */ "./projects/angular-walkthrough/src/lib/walkthrough.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WalkthroughComponent", function() { return _lib_walkthrough_component__WEBPACK_IMPORTED_MODULE_4__["WalkthroughComponent"]; });

/* harmony import */ var _lib_walkthrough_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/walkthrough.service */ "./projects/angular-walkthrough/src/lib/walkthrough.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WalkthroughService", function() { return _lib_walkthrough_service__WEBPACK_IMPORTED_MODULE_5__["WalkthroughService"]; });

/* harmony import */ var _lib_angular_walkthrough_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/angular-walkthrough.module */ "./projects/angular-walkthrough/src/lib/angular-walkthrough.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WalkthroughModule", function() { return _lib_angular_walkthrough_module__WEBPACK_IMPORTED_MODULE_6__["WalkthroughModule"]; });

/*
 * Public API Surface of angular-walkthrough
 */









/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div>\r\n    <button id=\"test1\"\r\n            class=\"rename\"\r\n            (click)=\"walk1.open()\">Test 1</button>\r\n    <button id=\"testTable\"\r\n            class=\"rename\"\r\n            (click)=\"walkTable.open()\">Test Table</button>\r\n    <button id=\"testSelectorChange\"\r\n            class=\"rename\"\r\n            (click)=\"walkSelectorChange.open()\">Test Selector change</button>\r\n    <button id=\"testFlow\"\r\n            class=\"rename\"\r\n            (click)=\"walkFlow.start()\">Test Flow</button>\r\n    <button id=\"hiddenTimer\"\r\n            class=\"rename\"\r\n            (click)=\"hideWalkthrough()\">{{hideCount > 0 ? 'Hide walkthrough in '+ hideCount+ 's' : 'Continue'}}</button>\r\n    <button id=\"test3\"\r\n            class=\"rename\"\r\n            (click)=\"walk3.open()\">Test 3</button>\r\n    <div class=\"avalaible\">\r\n      <button (click)=\"pause()\">Pause walkthrough</button>\r\n      <button (click)=\"rename()\">Toggle focusElementSelector</button>\r\n      <button (click)=\"continue()\">Continue walkthrough</button>\r\n    </div>\r\n  </div>\r\n  <div class=\"overflow\">\r\n    <div></div>\r\n    <div>\r\n      <button id=\"test2\"\r\n              class=\"rename\"\r\n              (click)=\"walk2.open()\">Test 2</button>\r\n    </div>\r\n  </div>\r\n\r\n  <table>\r\n    <colgroup>\r\n      <col id=\"col1\" />\r\n      <col id=\"col2\" />\r\n      <col id=\"col3\" />\r\n    </colgroup>\r\n    <thead>\r\n      <tr>\r\n        <th>Col 1</th>\r\n        <th>Col 2</th>\r\n        <th>Col 3</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr>\r\n        <td>1</td>\r\n        <td>2</td>\r\n        <td>3</td>\r\n      </tr>\r\n      <tr>\r\n        <td>butternut</td>\r\n        <td>butterfly</td>\r\n        <td>buttermilk</td>\r\n      </tr>\r\n      <tr>\r\n        <td>doubeurre</td>\r\n        <td>papillon de jour</td>\r\n        <td>babeurre</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n  <div class=\"bigger\">\r\n    <button id=\"test4\"\r\n            class=\"rename\"\r\n            (click)=\"walk4.open()\">Test 4</button>\r\n  </div>\r\n\r\n  <div class=\"valign-container\">\r\n    <button id=\"valign\"\r\n            class=\"rename\"\r\n            (click)=\"valign.open()\"\r\n            [style.height]=\"valignHeight\">alignContent\r\n      <br>and\r\n      <br>contentSpacing</button>\r\n\r\n    <button id=\"increase\"\r\n            (click)=\"valignHeight = '1500px'\">increase height</button>\r\n    <button id=\"decrease\"\r\n            (click)=\"valignHeight = '600px'\">decrease height</button>\r\n  </div>\r\n</div>\r\n\r\n<ng-walkthrough #walk1\r\n                id=\"wt-test1\"\r\n                focusElementSelector=\"#test1\"\r\n                focusGlow=\"true\"\r\n                [contentTemplate]=\"step1\"\r\n                [nextStep]=\"walk1b\"\r\n                (closed)=\"walk1Closed($event)\"\r\n                (finished)=\"walk1Finished()\"\r\n                closeButton=\"true\"\r\n                closeAnywhere=\"false\"\r\n                [focusClick]=\"focusClickAction\">\r\n  <ng-template #step1>\r\n    <p>\r\n      1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius blandit dolor, sit amet condimentum eros vulputate\r\n      sed. Aenean maximus dui a lobortis pharetra. Suspendisse potenti. Nulla facilisi. Suspendisse potenti. Integer porta\r\n      nec arcu molestie sodales. Pellentesque et diam tellus. Quisque at nisi id neque tempus varius. Donec vestibulum nisi\r\n      ac risus laoreet lobortis. Cras tristique et sem mollis vehicula. Nulla maximus urna a leo consectetur, at fringilla\r\n      odio volutpat. Praesent ultricies nunc eget tellus convallis, non hendrerit augue semper. Maecenas elit ex, lobortis\r\n      at sapien sed, fermentum volutpat sem.\r\n    </p>\r\n  </ng-template>\r\n</ng-walkthrough>\r\n<ng-walkthrough #walk1b\r\n                id=\"wt-test1b\"\r\n                focusBackdrop=\"true\"\r\n                [contentTemplate]=\"step1b\"\r\n                [previousStep]=\"walk1\"\r\n                [nextStep]=\"walk1c\"\r\n                closeButton=\"true\"\r\n                closeAnywhere=\"false\"\r\n                finishButton=\"true\">\r\n  <ng-template #step1b>\r\n    <p>\r\n      1b. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius blandit dolor, sit amet condimentum eros vulputate\r\n      sed. Aenean maximus dui a lobortis pharetra. Suspendisse potenti. Nulla facilisi. Suspendisse potenti. Integer porta\r\n      nec arcu molestie sodales. Pellentesque et diam tellus. Quisque at nisi id neque tempus varius. Donec vestibulum nisi\r\n      ac risus laoreet lobortis. Cras tristique et sem mollis vehicula. Nulla maximus urna a leo consectetur, at fringilla\r\n      odio volutpat. Praesent ultricies nunc eget tellus convallis, non hendrerit augue semper. Maecenas elit ex, lobortis\r\n      at sapien sed, fermentum volutpat sem.\r\n    </p>\r\n  </ng-template>\r\n</ng-walkthrough>\r\n<ng-walkthrough #walk1c\r\n                id=\"wt-test1\"\r\n                focusElementSelector=\"#test1\"\r\n                focusBackdrop=\"true\"\r\n                [previousStep]=\"walk1b\"\r\n                [nextStep]=\"walk2\"\r\n                closeButton=\"true\"\r\n                closeAnywhere=\"false\"\r\n                [focusClick]=\"focusClickAction\"\r\n                contentText=\"1c. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius blandit dolor, sit amet\r\n  condimentum eros vulputate sed. \">\r\n</ng-walkthrough>\r\n<ng-walkthrough #walk2\r\n                id=\"wt-test2\"\r\n                focusElementSelector=\"#test2\"\r\n                focusBackdrop=\"true\"\r\n                focusHighlightAnimation=\"true\"\r\n                [contentTemplate]=\"step2\"\r\n                [previousStep]=\"walk1c\"\r\n                [nextStep]=\"walk3\"\r\n                closeButton=\"true\"\r\n                closeAnywhere=\"false\"\r\n                showArrow=\"true\">\r\n  <ng-template #step2>\r\n    <p>\r\n      2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius blandit dolor, sit amet condimentum eros vulputate\r\n      sed. Aenean maximus dui a lobortis pharetra. Suspendisse potenti. Nulla facilisi. Suspendisse potenti. Integer porta\r\n      nec arcu molestie sodales. Pellentesque et diam tellus. Quisque at nisi id neque tempus varius. Donec vestibulum nisi\r\n      ac risus laoreet lobortis. Cras tristique et sem mollis vehicula. Nulla maximus urna a leo consectetur, at fringilla\r\n      odio volutpat. Praesent ultricies nunc eget tellus convallis, non hendrerit augue semper. Maecenas elit ex, lobortis\r\n      at sapien sed, fermentum volutpat sem.\r\n    </p>\r\n  </ng-template>\r\n</ng-walkthrough>\r\n<ng-walkthrough #walk3\r\n                id=\"wt-test3\"\r\n                focusElementSelector=\"#test3\"\r\n                focusElementCSSClass=\"redbutton\"\r\n                focusBackdrop=\"true\"\r\n                [contentTemplate]=\"step3\"\r\n                [previousStep]=\"walk2\"\r\n                [nextStep]=\"walk4\"\r\n                (ready)=\"walk3IsReady($event)\"\r\n                closeButton=\"true\"\r\n                closeAnywhere=\"false\"\r\n                showArrow=\"true\"\r\n                arrowColor=\"yellow\"\r\n                radius=\"auto\"\r\n                marginZone=\"12 9\">\r\n  <ng-template #step3>\r\n    <p>\r\n      3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius blandit dolor, sit amet condimentum eros vulputate\r\n      sed. Aenean maximus dui a lobortis pharetra. Suspendisse potenti. Nulla facilisi. Suspendisse potenti. Integer porta\r\n      nec arcu molestie sodales. Pellentesque et diam tellus. Quisque at nisi id neque tempus varius. Donec vestibulum nisi\r\n      ac risus laoreet lobortis. Cras tristique et sem mollis vehicula. Nulla maximus urna a leo consectetur, at fringilla\r\n      odio volutpat. Praesent ultricies nunc eget tellus convallis, non hendrerit augue semper. Maecenas elit ex, lobortis\r\n      at sapien sed, fermentum volutpat sem.\r\n    </p>\r\n  </ng-template>\r\n</ng-walkthrough>\r\n<ng-walkthrough #walk4\r\n                id=\"wt-test4\"\r\n                focusElementSelector=\"#test4\"\r\n                focusBackdrop=\"true\"\r\n                [contentTemplate]=\"step4\"\r\n                contentStyle=\"none\"\r\n                [previousStep]=\"walk3\"\r\n                finishButton=\"true\"\r\n                [texts]=\"frenchText\"\r\n                showArrow=\"true\">\r\n  <ng-template #step4>\r\n    <p>\r\n      4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius blandit dolor, sit amet condimentum eros vulputate\r\n      sed. Aenean maximus dui a lobortis pharetra. Suspendisse potenti. Nulla facilisi. Suspendisse potenti. Integer porta\r\n      nec arcu molestie sodales. Pellentesque et diam tellus. Quisque at nisi id neque tempus varius. Donec vestibulum nisi\r\n      ac risus laoreet lobortis. Cras tristique et sem mollis vehicula. Nulla maximus urna a leo consectetur, at fringilla\r\n      odio volutpat. Praesent ultricies nunc eget tellus convallis, non hendrerit augue semper. Maecenas elit ex, lobortis\r\n      at sapien sed, fermentum volutpat sem.\r\n    </p>\r\n  </ng-template>\r\n</ng-walkthrough>\r\n\r\n<ng-walkthrough #valign\r\n                id=\"wt-valign\"\r\n                focusElementSelector=\"#valign\"\r\n                focusBackdrop=\"true\"\r\n                [contentTemplate]=\"valignContent\"\r\n                finishButton=\"true\"\r\n                showArrow=\"true\"\r\n                [verticalAlignContent]=\"verticalAlignContent\"\r\n                [alignContent]=\"alignContent\"\r\n                [contentSpacing]=\"contentSpacing\"\r\n                [verticalContentSpacing]=\"verticalContentSpacing\"\r\n                closeAnywhere=\"false\">\r\n  <ng-template #valignContent>\r\n    <div id=\"valign-content\">\r\n      <p>alignContent {{ alignContent }}</p>\r\n      <p>verticalAlignContent {{ verticalAlignContent }}</p>\r\n      <p>contentSpacing\r\n        <input #spacingValue\r\n               [value]=\"contentSpacing\"\r\n               (change)=\"contentSpacing = spacingValue.value\"\r\n               type=\"number\"\r\n               min=\"0\" />\r\n      </p>\r\n      <p>verticalContentSpacing\r\n        <input #verticalSpacingValue\r\n               [value]=\"verticalContentSpacing\"\r\n               (change)=\"verticalContentSpacing = verticalSpacingValue.value\"\r\n               type=\"number\"\r\n               min=\"0\" />\r\n      </p>\r\n      alignContent value :\r\n      <div>\r\n        <button (click)=\"alignContent ='left'\">left</button>\r\n        <button (click)=\"alignContent ='center'\">center</button>\r\n        <button (click)=\"alignContent ='right'\">right</button>\r\n      </div>\r\n      verticalAlignContent value :\r\n      <div>\r\n        <button (click)=\"verticalAlignContent ='above'\">above</button>\r\n        <button (click)=\"verticalAlignContent ='top'\">top</button>\r\n        <button (click)=\"verticalAlignContent ='center'\">center</button>\r\n        <button (click)=\"verticalAlignContent ='bottom'\">bottom</button>\r\n        <button (click)=\"verticalAlignContent ='below'\">below</button>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n</ng-walkthrough>\r\n\r\n<ng-walkthrough #walkTable\r\n                id=\"wt-testTable\"\r\n                focusElementSelector=\"table th:nth-child(2), table td:nth-child(2)\"\r\n                typeSelector=\"zone\"\r\n                focusBackdrop=\"true\"\r\n                [contentTemplate]=\"testTable\"\r\n                showArrow=\"true\"\r\n                radius=\"5\"\r\n                closeButton=\"true\"\r\n                closeAnywhere=\"false\"\r\n                [alignContent]=\"testPosition\">\r\n  <ng-template #testTable>\r\n    <p>\r\n      Look this.\r\n    </p>\r\n    <div>\r\n      <button (click)=\"buttonAction()\">{{testClickTexts[testClickCount]}}</button>\r\n    </div>\r\n    <div>\r\n      <button (click)=\"testPosition ='left'\">Left</button>\r\n      <button (click)=\"testPosition ='center'\">Center</button>\r\n      <button (click)=\"testPosition ='right'\">Right</button>\r\n    </div>\r\n  </ng-template>\r\n</ng-walkthrough>\r\n\r\n<ng-walkthrough #walkSelectorChange\r\n                id=\"wt-testSelectorChange\"\r\n                [focusElementSelector]=\"isMobile ? 'table th:first-child, table td:first-child' : 'table th:nth-child(2), table td:nth-child(2)'\"\r\n                typeSelector=\"zone\"\r\n                focusBackdrop=\"true\"\r\n                [contentTemplate]=\"testSelectorChange\"\r\n                showArrow=\"true\"\r\n                closeAnywhere=\"false\"\r\n                [alignContent]=\"testPosition\">\r\n  <ng-template #testSelectorChange>\r\n    <p>\r\n      mobile: win &lt; 768px ; desktop: win &ge; 768px\r\n      <br> current: {{isMobile ? 'mobile' : 'desktop' }}\r\n    </p>\r\n  </ng-template>\r\n</ng-walkthrough>\r\n\r\n<ng-walkthrough-flow #walkFlow\r\n                     id=\"wt-test-flow\"\r\n                     focusBackdrop=\"true\"\r\n                     focusHighlightAnimation=\"true\"\r\n                     closeButton=\"true\"\r\n                     closeAnywhere=\"false\"\r\n                     arrowColor=\"#000\"\r\n                     showArrow=\"true\"\r\n                     radius=\"auto\"\r\n                     [texts]=\"frenchText\"\r\n                     (closed)=\"flowClosed($event)\"\r\n                     (finished)=\"flowFinished()\">\r\n  <ng-walkthrough id=\"wt-test1-flow\"\r\n                  focusElementSelector=\"#test1\"\r\n                  [contentTemplate]=\"step1flow\"\r\n                  [disabled]=\"step1flowDisabled\">\r\n    <ng-template #step1flow>\r\n      <p>\r\n        This step is {{ step1flowDisabled ? 'disabled' : 'enabled' }}\r\n      </p>\r\n      <p>\r\n        <button (click)=\"step2flowDisabled = !step2flowDisabled\">Next step is {{ step2flowDisabled ? 'disabled' : 'enabled' }}</button>\r\n      </p>\r\n      <p>\r\n        1f. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius blandit dolor, sit amet condimentum eros vulputate\r\n        sed. Aenean maximus dui a lobortis pharetra. Suspendisse potenti. Nulla facilisi. Suspendisse potenti. Integer porta\r\n        nec arcu molestie sodales. Pellentesque et diam tellus. Quisque at nisi id neque tempus varius. Donec vestibulum\r\n        nisi ac risus laoreet lobortis. Cras tristique et sem mollis vehicula. Nulla maximus urna a leo consectetur, at fringilla\r\n        odio volutpat. Praesent ultricies nunc eget tellus convallis, non hendrerit augue semper. Maecenas elit ex, lobortis\r\n        at sapien sed, fermentum volutpat sem.\r\n      </p>\r\n    </ng-template>\r\n  </ng-walkthrough>\r\n  <ng-walkthrough id=\"wt-test2-flow\"\r\n                  focusElementSelector=\"#test2\"\r\n                  [contentTemplate]=\"step2flow\"\r\n                  [disabled]=\"step2flowDisabled\">\r\n    <ng-template #step2flow>\r\n      <p>\r\n        This step is {{ step2flowDisabled ? 'disabled' : 'enabled' }}\r\n      </p>\r\n      <p>\r\n        <button (click)=\"step1flowDisabled = !step1flowDisabled\">Previous step is {{ step1flowDisabled ? 'disabled' : 'enabled' }}</button>\r\n      </p>\r\n      <p>\r\n        <button (click)=\"step3flowDisabled = !step3flowDisabled\">Next step is {{ step3flowDisabled ? 'disabled' : 'enabled' }}</button>\r\n      </p>\r\n      <p>\r\n        2f. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius blandit dolor, sit amet condimentum eros vulputate\r\n        sed. Aenean maximus dui a lobortis pharetra. Suspendisse potenti. Nulla facilisi. Suspendisse potenti. Integer porta\r\n        nec arcu molestie sodales. Pellentesque et diam tellus. Quisque at nisi id neque tempus varius. Donec vestibulum\r\n        nisi ac risus laoreet lobortis. Cras tristique et sem mollis vehicula. Nulla maximus urna a leo consectetur, at fringilla\r\n        odio volutpat. Praesent ultricies nunc eget tellus convallis, non hendrerit augue semper. Maecenas elit ex, lobortis\r\n        at sapien sed, fermentum volutpat sem.\r\n      </p>\r\n    </ng-template>\r\n  </ng-walkthrough>\r\n  <ng-walkthrough id=\"wt-test3-flow\"\r\n                  focusElementSelector=\"#test3\"\r\n                  [contentTemplate]=\"step3flow\"\r\n                  closeButton=\"true\"\r\n                  arrowColor=\"yellow\"\r\n                  [disabled]=\"step3flowDisabled\">\r\n    <ng-template #step3flow>\r\n      <p>\r\n        This step is {{ step3flowDisabled ? 'disabled' : 'enabled' }}\r\n      </p>\r\n      <p>\r\n        <button (click)=\"step2flowDisabled = !step2flowDisabled\">Previous step is {{ step2flowDisabled ? 'disabled' : 'enabled' }}</button>\r\n      </p>\r\n      <p>\r\n        3f. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius blandit dolor, sit amet condimentum eros vulputate\r\n        sed. Aenean maximus dui a lobortis pharetra. Suspendisse potenti. Nulla facilisi. Suspendisse potenti. Integer porta\r\n        nec arcu molestie sodales. Pellentesque et diam tellus. Quisque at nisi id neque tempus varius. Donec vestibulum\r\n        nisi ac risus laoreet lobortis. Cras tristique et sem mollis vehicula. Nulla maximus urna a leo consectetur, at fringilla\r\n        odio volutpat. Praesent ultricies nunc eget tellus convallis, non hendrerit augue semper. Maecenas elit ex, lobortis\r\n        at sapien sed, fermentum volutpat sem.\r\n      </p>\r\n    </ng-template>\r\n  </ng-walkthrough>\r\n  <ng-walkthrough id=\"wt-test4-flow\"\r\n                  [contentTemplate]=\"step4flow\"\r\n                  closeButton=\"true\"\r\n                  [disabled]=\"step4flowDisabled\">\r\n    <ng-template #step4flow>\r\n      <p>\r\n        No focusElementSelector\r\n      </p>\r\n      <p>\r\n        This step is {{ step4flowDisabled ? 'disabled' : 'enabled' }}\r\n      </p>\r\n      <p>\r\n        <button (click)=\"step3flowDisabled = !step3flowDisabled\">Previous step is {{ step3flowDisabled ? 'disabled' : 'enabled' }}</button>\r\n      </p>\r\n      <p>\r\n        4g. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius blandit dolor, sit amet condimentum eros vulputate\r\n        sed. Aenean maximus dui a lobortis pharetra. Suspendisse potenti. Nulla facilisi. Suspendisse potenti. Integer porta\r\n        nec arcu molestie sodales. Pellentesque et diam tellus. Quisque at nisi id neque tempus varius. Donec vestibulum\r\n        nisi ac risus laoreet lobortis. Cras tristique et sem mollis vehicula. Nulla maximus urna a leo consectetur, at fringilla\r\n        odio volutpat. Praesent ultricies nunc eget tellus convallis, non hendrerit augue semper. Maecenas elit ex, lobortis\r\n        at sapien sed, fermentum volutpat sem.\r\n      </p>\r\n    </ng-template>\r\n  </ng-walkthrough>\r\n</ng-walkthrough-flow>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".avalaible {\n  position: fixed;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  display: flex;\n  flex-direction: column; }\n  .avalaible > button {\n    min-width: 200px;\n    margin: 0; }\n  :host,\n:host > div {\n  display: block;\n  height: 100%;\n  width: 100%; }\n  .overflow {\n  height: 250px;\n  overflow: auto; }\n  .overflow div {\n    height: 250px; }\n  button {\n  margin-left: 5%; }\n  .bigger {\n  height: 100%;\n  width: 100%;\n  position: relative; }\n  #test3 {\n  position: absolute;\n  bottom: 5%;\n  right: 5%;\n  width: 50px;\n  height: 50px;\n  border-radius: 25% 50% 25% 40%;\n  z-index: 1; }\n  #test4 {\n  bottom: 1em;\n  position: absolute; }\n  .valign-container {\n  position: relative;\n  height: 2000px; }\n  #valign {\n  top: 500px;\n  left: 30%;\n  position: absolute; }\n  #valign-content button {\n  margin: 0; }\n  #increase {\n  top: 500px;\n  position: absolute;\n  left: 0; }\n  #decrease {\n  top: 530px;\n  position: absolute;\n  left: 0; }\n  .redbutton {\n  background: #F00;\n  color: #FFF; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var projects_angular_walkthrough_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/angular-walkthrough/src/public_api */ "./projects/angular-walkthrough/src/public_api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.frenchText = {
            previous: 'Précédent',
            next: 'Suivant',
            close: 'Fermer'
        };
        this.testClickCount = 0;
        this.testClickTexts = ['click me', 'it\'s ok!', 'realy ok', 'ok ok...', 'stop that!'];
        this.testPosition = 'center';
        this.alignContent = 'left';
        this.verticalAlignContent = 'top';
        this.valignHeight = '600px';
        this.contentSpacing = 200;
        this.verticalContentSpacing = 50;
        // disabled flags
        this.step1flowDisabled = false;
        this.step2flowDisabled = false;
        this.step3flowDisabled = false;
        this.step4flowDisabled = false;
        this.hideCount = 3;
        this._count = 3;
        this._start = false;
        this._listener = [];
        this._listener.push(projects_angular_walkthrough_src_public_api__WEBPACK_IMPORTED_MODULE_1__["WalkthroughComponent"].onOpen.subscribe(function (compt) {
            console.group('open');
            console.log('onOpen:', compt.id);
            console.groupEnd();
        }), projects_angular_walkthrough_src_public_api__WEBPACK_IMPORTED_MODULE_1__["WalkthroughComponent"].onClose.subscribe(function (compt) {
            console.group('close');
            console.log('onClose:', compt.id);
            console.groupEnd();
        }), projects_angular_walkthrough_src_public_api__WEBPACK_IMPORTED_MODULE_1__["WalkthroughComponent"].onFinish.subscribe(function (compt) {
            console.group('finish (close on the last step)');
            console.log('onFinish:', compt.id);
            console.groupEnd();
        }), projects_angular_walkthrough_src_public_api__WEBPACK_IMPORTED_MODULE_1__["WalkthroughComponent"].onRefresh.subscribe(function (compt) {
            console.group('refresh');
            console.log('onRefresh:', compt.id);
            console.groupEnd();
        }), projects_angular_walkthrough_src_public_api__WEBPACK_IMPORTED_MODULE_1__["WalkthroughComponent"].onNavigate.subscribe(function (compt) {
            console.group('navigate');
            console.log('onNavigate:', compt.previous.id, '→', compt.next.id);
        }), projects_angular_walkthrough_src_public_api__WEBPACK_IMPORTED_MODULE_1__["WalkthroughComponent"].onNavigateNext.subscribe(function (compt) {
            console.log('onNavigateNext:', compt.previous.id, '→', compt.next.id);
            console.groupEnd();
        }), projects_angular_walkthrough_src_public_api__WEBPACK_IMPORTED_MODULE_1__["WalkthroughComponent"].onNavigatePrevious.subscribe(function (compt) {
            console.log('onNavigatePrevious:', compt.previous.id, '→', compt.next.id);
            console.groupEnd();
        }));
    }
    Object.defineProperty(AppComponent.prototype, "isMobile", {
        get: function () {
            return window.innerWidth < 768;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.buttonAction = function () {
        if (this.testClickCount < this.testClickTexts.length - 1) {
            this.testClickCount++;
        }
    };
    AppComponent.prototype.focusClickAction = function (event, contenaire) {
        contenaire.next();
    };
    AppComponent.prototype.walk3IsReady = function (event) {
        // tslint:disable-next-line:no-console
        console.log('walk3IsReady', event);
        setTimeout(function () {
            event.component.arrowColor = 'red';
        }, 1000);
        setTimeout(function () {
            event.component.arrowColor = 'blue';
        }, 2000);
        setTimeout(function () {
            event.component.arrowColor = 'yellow';
        }, 3000);
    };
    AppComponent.prototype.hideWalkthrough = function () {
        var _this = this;
        if (this.hideCount === this._count && !this._start) {
            this._start = true;
            var int_1 = setInterval(function () {
                _this.hideCount--;
                if (_this.hideCount === 0) {
                    clearInterval(int_1);
                    if (projects_angular_walkthrough_src_public_api__WEBPACK_IMPORTED_MODULE_1__["WalkthroughComponent"].walkthroughHasShow() && !projects_angular_walkthrough_src_public_api__WEBPACK_IMPORTED_MODULE_1__["WalkthroughComponent"].walkthroughHasPause()) {
                        projects_angular_walkthrough_src_public_api__WEBPACK_IMPORTED_MODULE_1__["WalkthroughComponent"].walkthroughStop();
                    }
                    else {
                        console.warn('Not walkthrough showing');
                        _this._start = false;
                        _this.hideCount = _this._count;
                    }
                }
            }, 1000);
        }
        else if (this.hideCount === 0) {
            this._start = false;
            this.hideCount = this._count;
            projects_angular_walkthrough_src_public_api__WEBPACK_IMPORTED_MODULE_1__["WalkthroughComponent"].walkthroughContinue();
        }
    };
    AppComponent.prototype.walk1Closed = function (finishButton) {
        // tslint:disable-next-line:no-console
        console.log('walk1 has been closed with value : ' + (finishButton ? 'true' : 'false'));
    };
    AppComponent.prototype.walk1Finished = function () {
        // tslint:disable-next-line:no-console
        console.log('walk1 has been finished');
    };
    AppComponent.prototype.flowClosed = function (finishButton) {
        // tslint:disable-next-line:no-console
        console.log('flow has been closed with value : ' + (finishButton ? 'true' : 'false'));
    };
    AppComponent.prototype.flowFinished = function () {
        // tslint:disable-next-line:no-console
        console.log('flow has been finished');
    };
    AppComponent.prototype.pause = function () {
        projects_angular_walkthrough_src_public_api__WEBPACK_IMPORTED_MODULE_1__["WalkthroughComponent"].walkthroughStop();
    };
    AppComponent.prototype.continue = function () {
        projects_angular_walkthrough_src_public_api__WEBPACK_IMPORTED_MODULE_1__["WalkthroughComponent"].walkthroughContinue();
    };
    AppComponent.prototype.rename = function () {
        var list = document.querySelectorAll('.rename');
        list.forEach(function (elt) {
            if (elt.id.endsWith('-rename')) {
                elt.id = elt.id.replace('-rename', '');
            }
            else {
                elt.id += '-rename';
            }
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        for (var _i = 0, _a = this._listener; _i < _a.length; _i++) {
            var list = _a[_i];
            list.unsubscribe();
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var projects_angular_walkthrough_src_public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/angular-walkthrough/src/public_api */ "./projects/angular-walkthrough/src/public_api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                projects_angular_walkthrough_src_public_api__WEBPACK_IMPORTED_MODULE_3__["WalkthroughModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Data\sources-svn\pitch\angular-walkthrough\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map