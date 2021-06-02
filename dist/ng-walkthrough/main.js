(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\pitch\ng-walkthrough\src\main.ts */"zUnb");


/***/ }),

/***/ "6S10":
/*!*********************************************************************************!*\
  !*** ./projects/angular-walkthrough/src/lib/walkthrough-container.component.ts ***!
  \*********************************************************************************/
/*! exports provided: throwWalkthroughContentAlreadyAttachedError, WalkthroughContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwWalkthroughContentAlreadyAttachedError", function() { return throwWalkthroughContentAlreadyAttachedError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkthroughContainerComponent", function() { return WalkthroughContainerComponent; });
/* harmony import */ var _walkthrough_container_component_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./walkthrough-container.component.scss */ "dqjX");
/* harmony import */ var _raw_loader_walkthrough_container_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./walkthrough-container.component.html */ "qTly");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _walkthrough_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./walkthrough-text */ "j1lR");
/* harmony import */ var _walkthrough_tools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./walkthrough-tools */ "Oyit");
/* harmony import */ var _walkthrough_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./walkthrough.component */ "nDcv");
/* harmony import */ var _walkthrough_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./walkthrough.service */ "P9v0");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
        /* if a walkthrough is ongoing (paused or not) */
        _this.ongoing = false;
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
        _this.marginZonePx = new _walkthrough_tools__WEBPACK_IMPORTED_MODULE_5__["WalkthroughMargin"]();
        // texts change / i18n
        _this.text = new _walkthrough_text__WEBPACK_IMPORTED_MODULE_4__["WalkthroughText"]();
        return _this;
    }
    Object.defineProperty(WalkthroughContainerComponent.prototype, "id", {
        // HostBinding
        get: function () {
            return this.parent ? this.parent.id + '-container' : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WalkthroughContainerComponent.prototype, "hide", {
        get: function () {
            return !this.show;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WalkthroughContainerComponent.prototype, "cursor", {
        get: function () {
            return this.hasCloseAnywhere;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WalkthroughContainerComponent.prototype, "backdrop", {
        get: function () {
            return !this.hasHighlightZone && this.hasBackdrop;
        },
        enumerable: false,
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
            zoneStyle.left = (coordinate.left - this.marginZonePx.left) + 'px';
            zoneStyle.top = (coordinate.top - this.marginZonePx.top) + 'px';
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
    WalkthroughContainerComponent.prototype.contentBlockPosition = function (paramcoordinate, alignContent, verticalAlignContent, contentSpacing, verticalContentSpacing) {
        var element = this.contentBlock.nativeElement;
        var elementSize = this._walkthroughService.retrieveCoordinates(element);
        var width = elementSize.width + elementSize.margin.left + elementSize.margin.right;
        var height = elementSize.height + elementSize.margin.top + elementSize.margin.bottom;
        var coordinate = JSON.parse(JSON.stringify(paramcoordinate));
        coordinate.top -= this.marginZonePx.top;
        coordinate.left -= this.marginZonePx.left;
        coordinate.width += this.marginZonePx.left + this.marginZonePx.right;
        coordinate.height += this.marginZonePx.top + this.marginZonePx.bottom;
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
            this._arrowPosition = startLeft > (coordinate.left - _walkthrough_component__WEBPACK_IMPORTED_MODULE_6__["WalkthroughComponent"].minimalMargin)
                && startLeft < (coordinate.left + coordinate.width + _walkthrough_component__WEBPACK_IMPORTED_MODULE_6__["WalkthroughComponent"].minimalMargin)
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
                    element.style.top = (coordinate.top + coordinate.height + _walkthrough_component__WEBPACK_IMPORTED_MODULE_6__["WalkthroughComponent"].minimalMargin) + 'px';
                    this._contentPosition = 'below';
                }
                else {
                    element.style.top = (coordinate.top - height - _walkthrough_component__WEBPACK_IMPORTED_MODULE_6__["WalkthroughComponent"].minimalMargin) + 'px';
                    this._contentPosition = 'above';
                }
            }
        }
        else {
            element.style.top = (this._walkthroughService.getHeightOfPage() / 2 - height / 2) + 'px';
        }
    };
    WalkthroughContainerComponent.prototype.arrowPosition = function (coordinate) {
        var contentBlockElement = this.contentBlock.nativeElement;
        var contentBlockCoordinates = this._walkthroughService.retrieveCoordinates(contentBlockElement);
        var realwidth = coordinate.width + this.marginZonePx.left + this.marginZonePx.right;
        var realheight = coordinate.height + this.marginZonePx.top + this.marginZonePx.bottom;
        // start point of the arrow (tail)
        var startLeft = contentBlockCoordinates.left + contentBlockCoordinates.width / 2;
        var startTop = contentBlockCoordinates.top + contentBlockCoordinates.height;
        // start point of the curve of the arrow
        var centerTop;
        var centerLeft;
        // end point of the arrow (head)
        var endLeft = coordinate.left - this.marginZonePx.left;
        var endTop = coordinate.top - this.marginZonePx.top;
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
            endLeft += realwidth / 2;
            if (this._contentPosition === 'below') {
                endTop += realheight + 6;
            }
            else {
                endTop -= 6;
            }
            centerLeft = (startLeft + endLeft) / 2;
            centerTop = (startTop + endTop) / 2;
            // we make the curve start nearer the tail of the arrow
            if (startTop < centerTop) {
                centerTop = centerTop - Math.abs(startTop - centerTop) / 2;
            }
            else {
                centerTop = centerTop + Math.abs(startTop - centerTop) / 2;
            }
            this.arrowPath = "M" + startLeft + "," + startTop + " Q" + startLeft + "," + centerTop + " " + centerLeft + "," + centerTop + " "
                + ("Q" + endLeft + "," + centerTop + " " + endLeft + "," + endTop);
        }
        else {
            if (startLeft > coordinate.left) {
                endLeft += realwidth + this.arrowMarkerDist;
            }
            else {
                endLeft -= this.arrowMarkerDist;
            }
            endTop += realheight / 2;
            centerLeft = (startLeft + endLeft) / 2;
            centerTop = (startTop + endTop) / 2;
            // we make the curve start nearer the tail of the arrow
            if (startLeft < centerLeft) {
                centerLeft = centerLeft - Math.abs(startLeft - centerLeft) / 2;
            }
            else {
                centerLeft = centerLeft + Math.abs(startLeft - centerLeft) / 2;
            }
            var directStartLeft = startLeft;
            var directStartTop = startTop;
            if (this._contentPosition === 'top' || this._contentPosition === 'bottom') {
                directStartLeft = contentBlockCoordinates.left + (contentBlockCoordinates.width / 2);
                directStartTop = (this._contentPosition === 'top') ?
                    (contentBlockCoordinates.top + contentBlockCoordinates.height) :
                    (contentBlockCoordinates.top);
                // we use direct curve only if the arrow don't cross the content, otherwise, we use double curved
                if ((this._contentPosition === 'top' && directStartTop < (endTop - _walkthrough_component__WEBPACK_IMPORTED_MODULE_6__["WalkthroughComponent"].minimalMargin)) ||
                    (this._contentPosition === 'bottom' && directStartTop > (endTop + _walkthrough_component__WEBPACK_IMPORTED_MODULE_6__["WalkthroughComponent"].minimalMargin))) {
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
    WalkthroughContainerComponent.prototype.continue = function () {
        if (this.parent && this.pause) {
            this.show = true;
            this.pause = false;
            this.parent.refresh();
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
    WalkthroughContainerComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] },
        { type: _walkthrough_service__WEBPACK_IMPORTED_MODULE_7__["WalkthroughService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
    ]; };
    WalkthroughContainerComponent.propDecorators = {
        _portalHost: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalHostDirective"],] }],
        content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['content',] }],
        contentBlock: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['contentBlock',] }],
        zone: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['zone',] }],
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['attr.id',] }],
        hide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['class.hide',] }],
        cursor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['class.cursor',] }],
        backdrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['class.backdrop',] }],
        click: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['click',] }]
    };
    WalkthroughContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'walkthrough-container',
            template: _raw_loader_walkthrough_container_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_walkthrough_container_component_scss__WEBPACK_IMPORTED_MODULE_0__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"],
            _walkthrough_service__WEBPACK_IMPORTED_MODULE_7__["WalkthroughService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]])
    ], WalkthroughContainerComponent);
    return WalkthroughContainerComponent;
}(_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["BasePortalHost"]));



/***/ }),

/***/ "AytR":
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

/***/ "HM+k":
/*!****************************************************************************!*\
  !*** ./projects/angular-walkthrough/src/lib/walkthrough-flow.component.ts ***!
  \****************************************************************************/
/*! exports provided: WalkthroughFlowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkthroughFlowComponent", function() { return WalkthroughFlowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _walkthrough_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./walkthrough-tools */ "Oyit");
/* harmony import */ var _walkthrough_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./walkthrough.component */ "nDcv");
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
        enumerable: false,
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
    WalkthroughFlowComponent.ctorParameters = function () { return []; };
    WalkthroughFlowComponent.propDecorators = {
        walkthroughComponents: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [_walkthrough_component__WEBPACK_IMPORTED_MODULE_2__["WalkthroughComponent"],] }],
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        closed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        finished: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        contentStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        arrowColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        marginZone: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showArrow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        rootElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        closeButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        closeAnywhere: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        finishButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        focusBackdrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        focusGlow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        radius: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        texts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
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

/***/ "Oyit":
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

/***/ "P9v0":
/*!*********************************************************************!*\
  !*** ./projects/angular-walkthrough/src/lib/walkthrough.service.ts ***!
  \*********************************************************************/
/*! exports provided: WalkthroughService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkthroughService", function() { return WalkthroughService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
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
    WalkthroughService.prototype.scrollIntoViewIfOutOfView = function (element) {
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

/***/ "RqY2":
/*!****************************************************************************!*\
  !*** ./projects/angular-walkthrough/src/lib/angular-walkthrough.module.ts ***!
  \****************************************************************************/
/*! exports provided: WalkthroughModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkthroughModule", function() { return WalkthroughModule; });
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _walkthrough_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./walkthrough-container.component */ "6S10");
/* harmony import */ var _walkthrough_flow_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./walkthrough-flow.component */ "HM+k");
/* harmony import */ var _walkthrough_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./walkthrough.component */ "nDcv");
/* harmony import */ var _walkthrough_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./walkthrough.service */ "P9v0");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["PortalModule"]
            ],
            declarations: [
                _walkthrough_flow_component__WEBPACK_IMPORTED_MODULE_4__["WalkthroughFlowComponent"],
                _walkthrough_component__WEBPACK_IMPORTED_MODULE_5__["WalkthroughComponent"],
                _walkthrough_container_component__WEBPACK_IMPORTED_MODULE_3__["WalkthroughContainerComponent"]
            ],
            exports: [
                _walkthrough_flow_component__WEBPACK_IMPORTED_MODULE_4__["WalkthroughFlowComponent"],
                _walkthrough_component__WEBPACK_IMPORTED_MODULE_5__["WalkthroughComponent"],
                _walkthrough_container_component__WEBPACK_IMPORTED_MODULE_3__["WalkthroughContainerComponent"]
            ],
            entryComponents: [
                _walkthrough_container_component__WEBPACK_IMPORTED_MODULE_3__["WalkthroughContainerComponent"]
            ],
            providers: [
                _walkthrough_service__WEBPACK_IMPORTED_MODULE_6__["WalkthroughService"]
            ]
        })
    ], WalkthroughModule);
    return WalkthroughModule;
}());



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var projects_angular_walkthrough_src_public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/angular-walkthrough/src/public_api */ "T+kr");
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
        this._listener.push(projects_angular_walkthrough_src_public_api__WEBPACK_IMPORTED_MODULE_3__["WalkthroughComponent"].onOpen.subscribe(function (compt) {
            console.group('open');
            console.log('onOpen:', compt.id);
            console.groupEnd();
        }), projects_angular_walkthrough_src_public_api__WEBPACK_IMPORTED_MODULE_3__["WalkthroughComponent"].onClose.subscribe(function (compt) {
            console.group('close');
            console.log('onClose:', compt.id);
            console.groupEnd();
        }), projects_angular_walkthrough_src_public_api__WEBPACK_IMPORTED_MODULE_3__["WalkthroughComponent"].onFinish.subscribe(function (compt) {
            console.group('finish (close on the last step)');
            console.log('onFinish:', compt.id);
            console.groupEnd();
        }), projects_angular_walkthrough_src_public_api__WEBPACK_IMPORTED_MODULE_3__["WalkthroughComponent"].onRefresh.subscribe(function (compt) {
            console.group('refresh');
            console.log('onRefresh:', compt.id);
            console.groupEnd();
        }), projects_angular_walkthrough_src_public_api__WEBPACK_IMPORTED_MODULE_3__["WalkthroughComponent"].onNavigate.subscribe(function (compt) {
            console.group('navigate');
            console.log('onNavigate:', compt.previous.id, '→', compt.next.id);
        }), projects_angular_walkthrough_src_public_api__WEBPACK_IMPORTED_MODULE_3__["WalkthroughComponent"].onNavigateNext.subscribe(function (compt) {
            console.log('onNavigateNext:', compt.previous.id, '→', compt.next.id);
            console.groupEnd();
        }), projects_angular_walkthrough_src_public_api__WEBPACK_IMPORTED_MODULE_3__["WalkthroughComponent"].onNavigatePrevious.subscribe(function (compt) {
            console.log('onNavigatePrevious:', compt.previous.id, '→', compt.next.id);
            console.groupEnd();
        }));
    }
    Object.defineProperty(AppComponent.prototype, "isMobile", {
        get: function () {
            return window.innerWidth < 768;
        },
        enumerable: false,
        configurable: true
    });
    AppComponent.prototype.ngOnInit = function () {
        // for test: onContainerInit
        // this.walk1.open();
    };
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
                    if (projects_angular_walkthrough_src_public_api__WEBPACK_IMPORTED_MODULE_3__["WalkthroughComponent"].walkthroughHasShow() && !projects_angular_walkthrough_src_public_api__WEBPACK_IMPORTED_MODULE_3__["WalkthroughComponent"].walkthroughHasPause()) {
                        projects_angular_walkthrough_src_public_api__WEBPACK_IMPORTED_MODULE_3__["WalkthroughComponent"].walkthroughStop();
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
            projects_angular_walkthrough_src_public_api__WEBPACK_IMPORTED_MODULE_3__["WalkthroughComponent"].walkthroughContinue();
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
        projects_angular_walkthrough_src_public_api__WEBPACK_IMPORTED_MODULE_3__["WalkthroughComponent"].walkthroughStop();
    };
    AppComponent.prototype.continue = function () {
        projects_angular_walkthrough_src_public_api__WEBPACK_IMPORTED_MODULE_3__["WalkthroughComponent"].walkthroughContinue();
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
    AppComponent.ctorParameters = function () { return []; };
    AppComponent.propDecorators = {
        walk1: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['walk1',] }]
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "T+kr":
/*!********************************************************!*\
  !*** ./projects/angular-walkthrough/src/public_api.ts ***!
  \********************************************************/
/*! exports provided: throwWalkthroughContentAlreadyAttachedError, WalkthroughContainerComponent, WalkthroughFlowComponent, WalkthroughText, booleanValue, WalkthroughEvent, WalkthroughMargin, WalkthroughComponent, WalkthroughService, WalkthroughModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_walkthrough_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/walkthrough-container.component */ "6S10");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throwWalkthroughContentAlreadyAttachedError", function() { return _lib_walkthrough_container_component__WEBPACK_IMPORTED_MODULE_0__["throwWalkthroughContentAlreadyAttachedError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WalkthroughContainerComponent", function() { return _lib_walkthrough_container_component__WEBPACK_IMPORTED_MODULE_0__["WalkthroughContainerComponent"]; });

/* harmony import */ var _lib_walkthrough_flow_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/walkthrough-flow.component */ "HM+k");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WalkthroughFlowComponent", function() { return _lib_walkthrough_flow_component__WEBPACK_IMPORTED_MODULE_1__["WalkthroughFlowComponent"]; });

/* harmony import */ var _lib_walkthrough_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/walkthrough-text */ "j1lR");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WalkthroughText", function() { return _lib_walkthrough_text__WEBPACK_IMPORTED_MODULE_2__["WalkthroughText"]; });

/* harmony import */ var _lib_walkthrough_tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/walkthrough-tools */ "Oyit");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "booleanValue", function() { return _lib_walkthrough_tools__WEBPACK_IMPORTED_MODULE_3__["booleanValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WalkthroughEvent", function() { return _lib_walkthrough_tools__WEBPACK_IMPORTED_MODULE_3__["WalkthroughEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WalkthroughMargin", function() { return _lib_walkthrough_tools__WEBPACK_IMPORTED_MODULE_3__["WalkthroughMargin"]; });

/* harmony import */ var _lib_walkthrough_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/walkthrough.component */ "nDcv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WalkthroughComponent", function() { return _lib_walkthrough_component__WEBPACK_IMPORTED_MODULE_4__["WalkthroughComponent"]; });

/* harmony import */ var _lib_walkthrough_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/walkthrough.service */ "P9v0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WalkthroughService", function() { return _lib_walkthrough_service__WEBPACK_IMPORTED_MODULE_5__["WalkthroughService"]; });

/* harmony import */ var _lib_angular_walkthrough_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/angular-walkthrough.module */ "RqY2");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WalkthroughModule", function() { return _lib_angular_walkthrough_module__WEBPACK_IMPORTED_MODULE_6__["WalkthroughModule"]; });

/*
 * Public API Surface of angular-walkthrough
 */









/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <div>\n    <button id=\"test1\"\n            class=\"rename\"\n            (click)=\"walk1.open()\">Test 1</button>\n    <button id=\"testTable\"\n            class=\"rename\"\n            (click)=\"walkTable.open()\">Test Table</button>\n    <button id=\"testSelectorChange\"\n            class=\"rename\"\n            (click)=\"walkSelectorChange.open()\">Test Selector change</button>\n    <button id=\"testFlow\"\n            class=\"rename\"\n            (click)=\"walkFlow.start()\">Test Flow</button>\n    <button id=\"hiddenTimer\"\n            class=\"rename\"\n            (click)=\"hideWalkthrough()\">{{hideCount > 0 ? 'Hide walkthrough in '+ hideCount+ 's' : 'Continue'}}</button>\n    <button id=\"test3\"\n            class=\"rename\"\n            (click)=\"walk3.open()\">Test 3</button>\n    <div class=\"avalaible\">\n      <button (click)=\"pause()\">Pause walkthrough</button>\n      <button (click)=\"rename()\">Toggle focusElementSelector</button>\n      <button (click)=\"continue()\">Continue walkthrough</button>\n    </div>\n  </div>\n  <div class=\"overflow\">\n    <div></div>\n    <div>\n      <button id=\"test2\"\n              class=\"rename\"\n              (click)=\"walk2.open()\">Test 2</button>\n    </div>\n  </div>\n\n  <table>\n    <colgroup>\n      <col id=\"col1\" />\n      <col id=\"col2\" />\n      <col id=\"col3\" />\n    </colgroup>\n    <thead>\n      <tr>\n        <th>Col 1</th>\n        <th>Col 2</th>\n        <th>Col 3</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>1</td>\n        <td>2</td>\n        <td>3</td>\n      </tr>\n      <tr>\n        <td>butternut</td>\n        <td>butterfly</td>\n        <td>buttermilk</td>\n      </tr>\n      <tr>\n        <td>doubeurre</td>\n        <td>papillon de jour</td>\n        <td>babeurre</td>\n      </tr>\n    </tbody>\n  </table>\n\n  <div class=\"bigger\">\n    <button id=\"test4\"\n            class=\"rename\"\n            (click)=\"walk4.open()\">Test 4</button>\n  </div>\n\n  <div class=\"valign-container\">\n    <button id=\"valign\"\n            class=\"rename\"\n            (click)=\"valign.open()\"\n            [style.height]=\"valignHeight\">alignContent\n      <br>and\n      <br>contentSpacing</button>\n\n    <button id=\"increase\"\n            (click)=\"valignHeight = '1500px'\">increase height</button>\n    <button id=\"decrease\"\n            (click)=\"valignHeight = '600px'\">decrease height</button>\n  </div>\n</div>\n\n<ng-walkthrough #walk1\n                id=\"wt-test1\"\n                focusElementSelector=\"#test1\"\n                focusGlow=\"true\"\n                [contentTemplate]=\"step1\"\n                [nextStep]=\"walk1b\"\n                (closed)=\"walk1Closed($event)\"\n                (finished)=\"walk1Finished()\"\n                closeButton=\"true\"\n                closeAnywhere=\"false\"\n                [focusClick]=\"focusClickAction\">\n  <ng-template #step1>\n    <p>\n      1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius blandit dolor, sit amet condimentum eros vulputate\n      sed. Aenean maximus dui a lobortis pharetra. Suspendisse potenti. Nulla facilisi. Suspendisse potenti. Integer porta\n      nec arcu molestie sodales. Pellentesque et diam tellus. Quisque at nisi id neque tempus varius. Donec vestibulum nisi\n      ac risus laoreet lobortis. Cras tristique et sem mollis vehicula. Nulla maximus urna a leo consectetur, at fringilla\n      odio volutpat. Praesent ultricies nunc eget tellus convallis, non hendrerit augue semper. Maecenas elit ex, lobortis\n      at sapien sed, fermentum volutpat sem.\n    </p>\n  </ng-template>\n</ng-walkthrough>\n<ng-walkthrough #walk1b\n                id=\"wt-test1b\"\n                focusBackdrop=\"true\"\n                [contentTemplate]=\"step1b\"\n                [previousStep]=\"walk1\"\n                [nextStep]=\"walk1c\"\n                closeButton=\"true\"\n                closeAnywhere=\"false\"\n                finishButton=\"true\">\n  <ng-template #step1b>\n    <p>\n      1b. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius blandit dolor, sit amet condimentum eros vulputate\n      sed. Aenean maximus dui a lobortis pharetra. Suspendisse potenti. Nulla facilisi. Suspendisse potenti. Integer porta\n      nec arcu molestie sodales. Pellentesque et diam tellus. Quisque at nisi id neque tempus varius. Donec vestibulum nisi\n      ac risus laoreet lobortis. Cras tristique et sem mollis vehicula. Nulla maximus urna a leo consectetur, at fringilla\n      odio volutpat. Praesent ultricies nunc eget tellus convallis, non hendrerit augue semper. Maecenas elit ex, lobortis\n      at sapien sed, fermentum volutpat sem.\n    </p>\n  </ng-template>\n</ng-walkthrough>\n<ng-walkthrough #walk1c\n                id=\"wt-test1\"\n                focusElementSelector=\"#test1\"\n                focusBackdrop=\"true\"\n                [previousStep]=\"walk1b\"\n                [nextStep]=\"walk2\"\n                closeButton=\"true\"\n                closeAnywhere=\"false\"\n                [focusClick]=\"focusClickAction\"\n                contentText=\"1c. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius blandit dolor, sit amet\n  condimentum eros vulputate sed. \">\n</ng-walkthrough>\n<ng-walkthrough #walk2\n                id=\"wt-test2\"\n                focusElementSelector=\"#test2\"\n                focusBackdrop=\"true\"\n                focusHighlightAnimation=\"true\"\n                [contentTemplate]=\"step2\"\n                [previousStep]=\"walk1c\"\n                [nextStep]=\"walk3\"\n                closeButton=\"true\"\n                closeAnywhere=\"false\"\n                showArrow=\"true\">\n  <ng-template #step2>\n    <p>\n      2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius blandit dolor, sit amet condimentum eros vulputate\n      sed. Aenean maximus dui a lobortis pharetra. Suspendisse potenti. Nulla facilisi. Suspendisse potenti. Integer porta\n      nec arcu molestie sodales. Pellentesque et diam tellus. Quisque at nisi id neque tempus varius. Donec vestibulum nisi\n      ac risus laoreet lobortis. Cras tristique et sem mollis vehicula. Nulla maximus urna a leo consectetur, at fringilla\n      odio volutpat. Praesent ultricies nunc eget tellus convallis, non hendrerit augue semper. Maecenas elit ex, lobortis\n      at sapien sed, fermentum volutpat sem.\n    </p>\n  </ng-template>\n</ng-walkthrough>\n<ng-walkthrough #walk3\n                id=\"wt-test3\"\n                focusElementSelector=\"#test3\"\n                focusElementCSSClass=\"redbutton\"\n                focusBackdrop=\"true\"\n                [contentTemplate]=\"step3\"\n                [previousStep]=\"walk2\"\n                [nextStep]=\"walk4\"\n                (ready)=\"walk3IsReady($event)\"\n                closeButton=\"true\"\n                closeAnywhere=\"false\"\n                showArrow=\"true\"\n                arrowColor=\"yellow\"\n                radius=\"auto\"\n                marginZone=\"12 9\">\n  <ng-template #step3>\n    <p>\n      3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius blandit dolor, sit amet condimentum eros vulputate\n      sed. Aenean maximus dui a lobortis pharetra. Suspendisse potenti. Nulla facilisi. Suspendisse potenti. Integer porta\n      nec arcu molestie sodales. Pellentesque et diam tellus. Quisque at nisi id neque tempus varius. Donec vestibulum nisi\n      ac risus laoreet lobortis. Cras tristique et sem mollis vehicula. Nulla maximus urna a leo consectetur, at fringilla\n      odio volutpat. Praesent ultricies nunc eget tellus convallis, non hendrerit augue semper. Maecenas elit ex, lobortis\n      at sapien sed, fermentum volutpat sem.\n    </p>\n  </ng-template>\n</ng-walkthrough>\n<ng-walkthrough #walk4\n                id=\"wt-test4\"\n                focusElementSelector=\"#test4\"\n                focusBackdrop=\"true\"\n                [contentTemplate]=\"step4\"\n                contentStyle=\"none\"\n                [previousStep]=\"walk3\"\n                finishButton=\"true\"\n                [texts]=\"frenchText\"\n                showArrow=\"true\">\n  <ng-template #step4>\n    <p>\n      4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius blandit dolor, sit amet condimentum eros vulputate\n      sed. Aenean maximus dui a lobortis pharetra. Suspendisse potenti. Nulla facilisi. Suspendisse potenti. Integer porta\n      nec arcu molestie sodales. Pellentesque et diam tellus. Quisque at nisi id neque tempus varius. Donec vestibulum nisi\n      ac risus laoreet lobortis. Cras tristique et sem mollis vehicula. Nulla maximus urna a leo consectetur, at fringilla\n      odio volutpat. Praesent ultricies nunc eget tellus convallis, non hendrerit augue semper. Maecenas elit ex, lobortis\n      at sapien sed, fermentum volutpat sem.\n    </p>\n  </ng-template>\n</ng-walkthrough>\n\n<ng-walkthrough #valign\n                id=\"wt-valign\"\n                focusElementSelector=\"#valign\"\n                focusBackdrop=\"true\"\n                [contentTemplate]=\"valignContent\"\n                finishButton=\"true\"\n                showArrow=\"true\"\n                [verticalAlignContent]=\"verticalAlignContent\"\n                [alignContent]=\"alignContent\"\n                [contentSpacing]=\"contentSpacing\"\n                [verticalContentSpacing]=\"verticalContentSpacing\"\n                closeAnywhere=\"false\">\n  <ng-template #valignContent>\n    <div id=\"valign-content\">\n      <p>alignContent {{ alignContent }}</p>\n      <p>verticalAlignContent {{ verticalAlignContent }}</p>\n      <p>contentSpacing\n        <input #spacingValue\n               [value]=\"contentSpacing\"\n               (change)=\"contentSpacing = spacingValue.value\"\n               type=\"number\"\n               min=\"0\" />\n      </p>\n      <p>verticalContentSpacing\n        <input #verticalSpacingValue\n               [value]=\"verticalContentSpacing\"\n               (change)=\"verticalContentSpacing = verticalSpacingValue.value\"\n               type=\"number\"\n               min=\"0\" />\n      </p>\n      alignContent value :\n      <div>\n        <button (click)=\"alignContent ='left'\">left</button>\n        <button (click)=\"alignContent ='center'\">center</button>\n        <button (click)=\"alignContent ='right'\">right</button>\n      </div>\n      verticalAlignContent value :\n      <div>\n        <button (click)=\"verticalAlignContent ='above'\">above</button>\n        <button (click)=\"verticalAlignContent ='top'\">top</button>\n        <button (click)=\"verticalAlignContent ='center'\">center</button>\n        <button (click)=\"verticalAlignContent ='bottom'\">bottom</button>\n        <button (click)=\"verticalAlignContent ='below'\">below</button>\n      </div>\n    </div>\n  </ng-template>\n</ng-walkthrough>\n\n<ng-walkthrough #walkTable\n                id=\"wt-testTable\"\n                focusElementSelector=\"table th:nth-child(2), table td:nth-child(2)\"\n                typeSelector=\"zone\"\n                focusBackdrop=\"true\"\n                [contentTemplate]=\"testTable\"\n                showArrow=\"true\"\n                radius=\"5\"\n                closeButton=\"true\"\n                closeAnywhere=\"false\"\n                [alignContent]=\"testPosition\">\n  <ng-template #testTable>\n    <p>\n      Look this.\n    </p>\n    <div>\n      <button (click)=\"buttonAction()\">{{testClickTexts[testClickCount]}}</button>\n    </div>\n    <div>\n      <button (click)=\"testPosition ='left'\">Left</button>\n      <button (click)=\"testPosition ='center'\">Center</button>\n      <button (click)=\"testPosition ='right'\">Right</button>\n    </div>\n  </ng-template>\n</ng-walkthrough>\n\n<ng-walkthrough #walkSelectorChange\n                id=\"wt-testSelectorChange\"\n                [focusElementSelector]=\"isMobile ? 'table th:first-child, table td:first-child' : 'table th:nth-child(2), table td:nth-child(2)'\"\n                typeSelector=\"zone\"\n                focusBackdrop=\"true\"\n                [contentTemplate]=\"testSelectorChange\"\n                showArrow=\"true\"\n                closeAnywhere=\"false\"\n                [alignContent]=\"testPosition\">\n  <ng-template #testSelectorChange>\n    <p>\n      mobile: win &lt; 768px ; desktop: win &ge; 768px\n      <br> current: {{isMobile ? 'mobile' : 'desktop' }}\n    </p>\n  </ng-template>\n</ng-walkthrough>\n\n<ng-walkthrough-flow #walkFlow\n                     id=\"wt-test-flow\"\n                     focusBackdrop=\"true\"\n                     focusHighlightAnimation=\"true\"\n                     closeButton=\"true\"\n                     closeAnywhere=\"false\"\n                     arrowColor=\"#000\"\n                     showArrow=\"true\"\n                     radius=\"auto\"\n                     [texts]=\"frenchText\"\n                     (closed)=\"flowClosed($event)\"\n                     (finished)=\"flowFinished()\">\n  <ng-walkthrough id=\"wt-test1-flow\"\n                  focusElementSelector=\"#test1\"\n                  [contentTemplate]=\"step1flow\"\n                  [disabled]=\"step1flowDisabled\">\n    <ng-template #step1flow>\n      <p>\n        This step is {{ step1flowDisabled ? 'disabled' : 'enabled' }}\n      </p>\n      <p>\n        <button (click)=\"step2flowDisabled = !step2flowDisabled\">Next step is {{ step2flowDisabled ? 'disabled' : 'enabled' }}</button>\n      </p>\n      <p>\n        1f. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius blandit dolor, sit amet condimentum eros vulputate\n        sed. Aenean maximus dui a lobortis pharetra. Suspendisse potenti. Nulla facilisi. Suspendisse potenti. Integer porta\n        nec arcu molestie sodales. Pellentesque et diam tellus. Quisque at nisi id neque tempus varius. Donec vestibulum\n        nisi ac risus laoreet lobortis. Cras tristique et sem mollis vehicula. Nulla maximus urna a leo consectetur, at fringilla\n        odio volutpat. Praesent ultricies nunc eget tellus convallis, non hendrerit augue semper. Maecenas elit ex, lobortis\n        at sapien sed, fermentum volutpat sem.\n      </p>\n    </ng-template>\n  </ng-walkthrough>\n  <ng-walkthrough id=\"wt-test2-flow\"\n                  focusElementSelector=\"#test2\"\n                  [contentTemplate]=\"step2flow\"\n                  [disabled]=\"step2flowDisabled\">\n    <ng-template #step2flow>\n      <p>\n        This step is {{ step2flowDisabled ? 'disabled' : 'enabled' }}\n      </p>\n      <p>\n        <button (click)=\"step1flowDisabled = !step1flowDisabled\">Previous step is {{ step1flowDisabled ? 'disabled' : 'enabled' }}</button>\n      </p>\n      <p>\n        <button (click)=\"step3flowDisabled = !step3flowDisabled\">Next step is {{ step3flowDisabled ? 'disabled' : 'enabled' }}</button>\n      </p>\n      <p>\n        2f. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius blandit dolor, sit amet condimentum eros vulputate\n        sed. Aenean maximus dui a lobortis pharetra. Suspendisse potenti. Nulla facilisi. Suspendisse potenti. Integer porta\n        nec arcu molestie sodales. Pellentesque et diam tellus. Quisque at nisi id neque tempus varius. Donec vestibulum\n        nisi ac risus laoreet lobortis. Cras tristique et sem mollis vehicula. Nulla maximus urna a leo consectetur, at fringilla\n        odio volutpat. Praesent ultricies nunc eget tellus convallis, non hendrerit augue semper. Maecenas elit ex, lobortis\n        at sapien sed, fermentum volutpat sem.\n      </p>\n    </ng-template>\n  </ng-walkthrough>\n  <ng-walkthrough id=\"wt-test3-flow\"\n                  focusElementSelector=\"#test3\"\n                  [contentTemplate]=\"step3flow\"\n                  closeButton=\"true\"\n                  arrowColor=\"yellow\"\n                  [disabled]=\"step3flowDisabled\">\n    <ng-template #step3flow>\n      <p>\n        This step is {{ step3flowDisabled ? 'disabled' : 'enabled' }}\n      </p>\n      <p>\n        <button (click)=\"step2flowDisabled = !step2flowDisabled\">Previous step is {{ step2flowDisabled ? 'disabled' : 'enabled' }}</button>\n      </p>\n      <p>\n        3f. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius blandit dolor, sit amet condimentum eros vulputate\n        sed. Aenean maximus dui a lobortis pharetra. Suspendisse potenti. Nulla facilisi. Suspendisse potenti. Integer porta\n        nec arcu molestie sodales. Pellentesque et diam tellus. Quisque at nisi id neque tempus varius. Donec vestibulum\n        nisi ac risus laoreet lobortis. Cras tristique et sem mollis vehicula. Nulla maximus urna a leo consectetur, at fringilla\n        odio volutpat. Praesent ultricies nunc eget tellus convallis, non hendrerit augue semper. Maecenas elit ex, lobortis\n        at sapien sed, fermentum volutpat sem.\n      </p>\n    </ng-template>\n  </ng-walkthrough>\n  <ng-walkthrough id=\"wt-test4-flow\"\n                  [contentTemplate]=\"step4flow\"\n                  closeButton=\"true\"\n                  [disabled]=\"step4flowDisabled\">\n    <ng-template #step4flow>\n      <p>\n        No focusElementSelector\n      </p>\n      <p>\n        This step is {{ step4flowDisabled ? 'disabled' : 'enabled' }}\n      </p>\n      <p>\n        <button (click)=\"step3flowDisabled = !step3flowDisabled\">Previous step is {{ step3flowDisabled ? 'disabled' : 'enabled' }}</button>\n      </p>\n      <p>\n        4g. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius blandit dolor, sit amet condimentum eros vulputate\n        sed. Aenean maximus dui a lobortis pharetra. Suspendisse potenti. Nulla facilisi. Suspendisse potenti. Integer porta\n        nec arcu molestie sodales. Pellentesque et diam tellus. Quisque at nisi id neque tempus varius. Donec vestibulum\n        nisi ac risus laoreet lobortis. Cras tristique et sem mollis vehicula. Nulla maximus urna a leo consectetur, at fringilla\n        odio volutpat. Praesent ultricies nunc eget tellus convallis, non hendrerit augue semper. Maecenas elit ex, lobortis\n        at sapien sed, fermentum volutpat sem.\n      </p>\n    </ng-template>\n  </ng-walkthrough>\n</ng-walkthrough-flow>");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var projects_angular_walkthrough_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/angular-walkthrough/src/public_api */ "T+kr");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                projects_angular_walkthrough_src_public_api__WEBPACK_IMPORTED_MODULE_2__["WalkthroughModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "dqjX":
/*!***********************************************************************************!*\
  !*** ./projects/angular-walkthrough/src/lib/walkthrough-container.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 99.9%;\n  min-height: 100%;\n}\n:host.hide {\n  display: none;\n}\n:host.cursor {\n  cursor: pointer;\n}\n:host.backdrop {\n  background-color: rgba(0, 0, 0, 0.6);\n}\nbutton {\n  background: none;\n  border: 0;\n  color: #FFF;\n}\n.wkt-zone {\n  position: absolute;\n}\n.wkt-zone.hide {\n  display: none;\n}\n.wkt-zone.backdrop {\n  box-shadow: 0 0 0 2200px rgba(0, 0, 0, 0.6);\n}\n.wkt-zone.glow {\n  box-shadow: 0 0 4px 2px #FFFF66, 0 0 9px 0 #FFFF66, 0 0 36px #FFFF66;\n}\n.wkt-zone.clickable {\n  cursor: pointer;\n}\n.wkt-zone.highlight {\n  -webkit-animation: highlight 0.45s 4;\n  animation: highlight 0.45s 4;\n}\n.wkt-container {\n  position: relative;\n}\n.wkt-content-block {\n  position: absolute;\n  margin: 1em;\n  padding: 6px;\n  z-index: 1;\n  color: #FFF;\n  min-width: calc(320px - 2em);\n}\n.wkt-content-block.hide {\n  display: none;\n}\n.wkt-content-block.darken {\n  background-color: rgba(0, 0, 0, 0.6);\n}\n.wkt-close + .wkt-content {\n  margin-top: 1.3em;\n}\n.wkt-close {\n  position: absolute;\n  right: 1em;\n  cursor: pointer;\n}\n.wkt-navigate {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.wkt-navigate > button {\n  padding: 6px;\n  font-size: 120%;\n}\n.wkt-navigate > button:hover {\n  cursor: pointer;\n  text-decoration: underline;\n}\n.wkt-previous-link::before {\n  content: \"<< \";\n}\n.wkt-next-link::after {\n  content: \" >>\";\n}\ndiv.hide {\n  display: none;\n}\nsvg {\n  overflow: visible;\n  position: absolute;\n  top: -1px;\n  left: -1px;\n  border: 1px solid transparent;\n}\n#wkt-arrow > path {\n  stroke-width: 0;\n}\n.wkt-arrow-path {\n  stroke-width: 2px;\n  fill: none;\n}\n@-webkit-keyframes highlight {\n  0% {\n    background-color: none;\n  }\n  50% {\n    background-color: rgba(255, 255, 255, 0.8);\n  }\n  100% {\n    background-color: none;\n  }\n}\n@keyframes highlight {\n  0% {\n    background-color: none;\n  }\n  50% {\n    background-color: rgba(255, 255, 255, 0.8);\n  }\n  100% {\n    background-color: none;\n  }\n}\n@media screen and (min-width: 1920px), screen and (min-height: 1920px) {\n  .wkt-zone.backdrop {\n    box-shadow: 0 0 0 4400px rgba(0, 0, 0, 0.6);\n  }\n}\n@media screen and (min-width: 3840px), screen and (min-height: 3840px) {\n  .wkt-zone.backdrop {\n    box-shadow: 0 0 0 8800px rgba(0, 0, 0, 0.6);\n  }\n}\n_:default:not(:root:root), .wkt-zone.backdrop {\n  box-shadow: 0 0 0 2000px rgba(0, 0, 0, 0.6) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx3YWxrdGhyb3VnaC1jb250YWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUNJO0VBQ0ksYUFBQTtBQUNSO0FBRUk7RUFDSSxlQUFBO0FBQVI7QUFHSTtFQUNJLG9DQUFBO0FBRFI7QUFLQTtFQUNJLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFGSjtBQU9BO0VBQ0ksa0JBQUE7QUFKSjtBQU1JO0VBQ0ksYUFBQTtBQUpSO0FBT0k7RUFDSSwyQ0FBQTtBQUxSO0FBUUk7RUFDSSxvRUFBQTtBQU5SO0FBU0k7RUFDSSxlQUFBO0FBUFI7QUFVSTtFQUNJLG9DQUFBO0VBQ0EsNEJBQUE7QUFSUjtBQWNBO0VBQ0ksa0JBQUE7QUFYSjtBQWNBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7QUFYSjtBQWFJO0VBQ0ksYUFBQTtBQVhSO0FBZUE7RUFDSSxvQ0FBQTtBQVpKO0FBZUE7RUFDSSxpQkFBQTtBQVpKO0FBaUJBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQWRKO0FBaUJBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQWRKO0FBZ0JJO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUFkUjtBQWdCUTtFQUNJLGVBQUE7RUFDQSwwQkFBQTtBQWRaO0FBbUJBO0VBQ0ksY0FBQTtBQWhCSjtBQW1CQTtFQUNJLGNBQUE7QUFoQko7QUFvQkE7RUFDSSxhQUFBO0FBakJKO0FBb0JBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7QUFqQko7QUFvQkE7RUFDSSxlQUFBO0FBakJKO0FBb0JBO0VBQ0ksaUJBQUE7RUFDQSxVQUFBO0FBakJKO0FBb0JBO0VBQ0k7SUFDSSxzQkFBQTtFQWpCTjtFQW9CRTtJQUNJLDBDQUFBO0VBbEJOO0VBcUJFO0lBQ0ksc0JBQUE7RUFuQk47QUFDRjtBQXNCQTtFQUNJO0lBQ0ksc0JBQUE7RUFwQk47RUF1QkU7SUFDSSwwQ0FBQTtFQXJCTjtFQXdCRTtJQUNJLHNCQUFBO0VBdEJOO0FBQ0Y7QUEyQkE7RUFDSTtJQUNJLDJDQUFBO0VBekJOO0FBQ0Y7QUE4QkE7RUFDSTtJQUNJLDJDQUFBO0VBNUJOO0FBQ0Y7QUFpQ0E7RUFDSSxzREFBQTtBQS9CSiIsImZpbGUiOiJ3YWxrdGhyb3VnaC1jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDk5LjklO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG5cbiAgICAmLmhpZGUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgICYuY3Vyc29yIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgICYuYmFja2Ryb3Age1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgfVxufVxuXG5idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiAwO1xuICAgIGNvbG9yOiAjRkZGO1xufVxuXG4vLyBoaWdodGxpZ2h0IHpvbmVcblxuLndrdC16b25lIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAmLmhpZGUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgICYuYmFja2Ryb3Age1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAyMjAwcHggcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgIH1cblxuICAgICYuZ2xvdyB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCA0cHggMnB4ICNGRkZGNjYsIDAgMCA5cHggMCAjRkZGRjY2LCAwIDAgMzZweCAjRkZGRjY2O1xuICAgIH1cblxuICAgICYuY2xpY2thYmxlIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgICYuaGlnaGxpZ2h0IHtcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IGhpZ2hsaWdodCAuNDVzIDQ7XG4gICAgICAgIGFuaW1hdGlvbjogaGlnaGxpZ2h0IC40NXMgNDtcbiAgICB9XG59XG5cbi8vIHRleHQgem9uZVxuXG4ud2t0LWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ud2t0LWNvbnRlbnQtYmxvY2sge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW46IDFlbTtcbiAgICBwYWRkaW5nOiA2cHg7XG4gICAgei1pbmRleDogMTtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICBtaW4td2lkdGg6IGNhbGMoMzIwcHggLSAyZW0pO1xuXG4gICAgJi5oaWRlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG5cbi53a3QtY29udGVudC1ibG9jay5kYXJrZW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cblxuLndrdC1jbG9zZSArIC53a3QtY29udGVudCB7XG4gICAgbWFyZ2luLXRvcDogMS4zZW07XG59XG5cbi8vIHRleHQgem9uZSAtIG5hdmlnYXRpb25cblxuLndrdC1jbG9zZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ud2t0LW5hdmlnYXRlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICYgPiBidXR0b24ge1xuICAgICAgICBwYWRkaW5nOiA2cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTIwJTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ud2t0LXByZXZpb3VzLWxpbms6OmJlZm9yZSB7XG4gICAgY29udGVudDogJzw8ICc7XG59XG5cbi53a3QtbmV4dC1saW5rOjphZnRlciB7XG4gICAgY29udGVudDogJyA+Pic7XG59XG5cbi8vIGFycm93XG5kaXYuaGlkZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuc3ZnIHtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMXB4O1xuICAgIGxlZnQ6IC0xcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbiN3a3QtYXJyb3cgPiBwYXRoIHtcbiAgICBzdHJva2Utd2lkdGg6IDA7XG59XG5cbi53a3QtYXJyb3ctcGF0aCB7XG4gICAgc3Ryb2tlLXdpZHRoOiAycHg7XG4gICAgZmlsbDogbm9uZTtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGhpZ2hsaWdodCB7XG4gICAgMCUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xuICAgIH1cblxuICAgIDUwJSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgaGlnaGxpZ2h0IHtcbiAgICAwJSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XG4gICAgfVxuXG4gICAgNTAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xuICAgIH1cbn1cblxuLy8gRm9yID4gSEQgKDRLIHNjcmVlbilcblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSwgc2NyZWVuIGFuZCAobWluLWhlaWdodDogMTkyMHB4KSB7XG4gICAgLndrdC16b25lLmJhY2tkcm9wIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgNDQwMHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICB9XG59XG5cbi8vIEZvciA+IDRLICg4SyBzY3JlZW4pXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM4NDBweCksIHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDM4NDBweCkge1xuICAgIC53a3Qtem9uZS5iYWNrZHJvcCB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDg4MDBweCByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgfVxufVxuXG4vLyBbSEFDS10gU2FmYXJpIDkrIChub24taU9TKSA6IGJveC1zaGFkb3cgc2l6ZXMgb3ZlciAyMDAwcHggY2FuIGJlIHVucHJlZGljdGFibGVcblxuXzpkZWZhdWx0Om5vdCg6cm9vdDpyb290KSwgLndrdC16b25lLmJhY2tkcm9wIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAyMDAwcHggcmdiYSgwLCAwLCAwLCAwLjYpICFpbXBvcnRhbnQ7XG59XG4iXX0= */");

/***/ }),

/***/ "j1lR":
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

/***/ "nDcv":
/*!***********************************************************************!*\
  !*** ./projects/angular-walkthrough/src/lib/walkthrough.component.ts ***!
  \***********************************************************************/
/*! exports provided: WalkthroughComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkthroughComponent", function() { return WalkthroughComponent; });
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _walkthrough_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./walkthrough-container.component */ "6S10");
/* harmony import */ var _walkthrough_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./walkthrough-text */ "j1lR");
/* harmony import */ var _walkthrough_tools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./walkthrough-tools */ "Oyit");
/* harmony import */ var _walkthrough_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./walkthrough.service */ "P9v0");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var noInstanceWarn = 'No instance of walkthroughContainer.';
var anoterWktOnGoing = 'Another walkthrough is ongoing. Please close it before opening a new one.';
var WalkthroughComponent = /** @class */ (function () {
    function WalkthroughComponent(_componentFactoryResolver, _applicationRef, _injector, _renderer, _walkthroughService) {
        var _this = this;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._applicationRef = _applicationRef;
        this._injector = _injector;
        this._renderer = _renderer;
        this._walkthroughService = _walkthroughService;
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.finished = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.typeSelector = 'element';
        this.contentStyle = 'draken';
        this.animation = 'none';
        this.animationDelays = 0;
        this.scrollOnTarget = true;
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
        this._onContainerInit = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._onResize = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._onResize.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(200)).subscribe(function () {
            var instance = _this._getInstance();
            if (instance && instance.ongoing && _this._display) {
                _this._elementLocations();
                setTimeout(function () {
                    _this._elementLocations();
                }, 200);
            }
        });
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
        enumerable: false,
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
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WalkthroughComponent.prototype, "id", {
        get: function () { return this._id; },
        set: function (value) { this._id = value || this._uid; },
        enumerable: false,
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
        enumerable: false,
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
        enumerable: false,
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
        enumerable: false,
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
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WalkthroughComponent.prototype, "closeButton", {
        get: function () {
            return this._hasCloseButton;
        },
        set: function (value) {
            this._hasCloseButton = Object(_walkthrough_tools__WEBPACK_IMPORTED_MODULE_6__["booleanValue"])(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WalkthroughComponent.prototype, "closeAnywhere", {
        get: function () {
            return this._hasCloseAnywhere;
        },
        set: function (value) {
            this._hasCloseAnywhere = Object(_walkthrough_tools__WEBPACK_IMPORTED_MODULE_6__["booleanValue"])(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WalkthroughComponent.prototype, "showArrow", {
        get: function () {
            return this._hasArrow;
        },
        set: function (value) {
            this._hasArrow = Object(_walkthrough_tools__WEBPACK_IMPORTED_MODULE_6__["booleanValue"])(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WalkthroughComponent.prototype, "finishButton", {
        get: function () {
            return this._hasFinish;
        },
        set: function (value) {
            this._hasFinish = Object(_walkthrough_tools__WEBPACK_IMPORTED_MODULE_6__["booleanValue"])(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WalkthroughComponent.prototype, "focusHighlightAnimation", {
        get: function () {
            return this._hasHighlightAnimation;
        },
        set: function (value) {
            this._hasHighlightAnimation = Object(_walkthrough_tools__WEBPACK_IMPORTED_MODULE_6__["booleanValue"])(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WalkthroughComponent.prototype, "focusBackdrop", {
        get: function () {
            return this._hasBackdrop;
        },
        set: function (value) {
            this._hasBackdrop = Object(_walkthrough_tools__WEBPACK_IMPORTED_MODULE_6__["booleanValue"])(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WalkthroughComponent.prototype, "focusGlow", {
        get: function () {
            return this._hasGlow;
        },
        set: function (value) {
            this._hasGlow = Object(_walkthrough_tools__WEBPACK_IMPORTED_MODULE_6__["booleanValue"])(value);
        },
        enumerable: false,
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
        enumerable: false,
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
        if (WalkthroughComponent_1._walkthroughContainer &&
            WalkthroughComponent_1._walkthroughContainer.instance.parent) {
            var visible = WalkthroughComponent_1._walkthroughContainer.instance.parent._checkVisibility();
            if (visible) {
                WalkthroughComponent_1._walkthroughContainer.instance.continue();
            }
            else {
                // we can't open the walkthrough anymore, the focusElementSelector is no more visible
                // so we update the flag "ongoing"
                WalkthroughComponent_1._walkthroughContainer.instance.ongoing = false;
            }
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
        this._onResize.next();
    };
    WalkthroughComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // init the Walkthrough element container
        if (!WalkthroughComponent_1._walkthroughContainer && !WalkthroughComponent_1._walkthroughContainerCreating) {
            WalkthroughComponent_1._walkthroughContainerCreating = true;
            setTimeout(function () {
                WalkthroughComponent_1._walkthroughContainer =
                    _this._appendComponentToBody(_walkthrough_container_component__WEBPACK_IMPORTED_MODULE_4__["WalkthroughContainerComponent"]);
                _this._onContainerInit.next();
            });
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
        if (this._getInstance()) {
            if (!this._getInstance().ongoing) {
                WalkthroughComponent_1.onRefresh.next(this);
                this._elementLocations();
            }
            else {
                console.warn(anoterWktOnGoing);
            }
        }
        else {
            console.warn(noInstanceWarn);
        }
    };
    WalkthroughComponent.prototype.open = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (_this._checkVisibility()) {
                if (_this._getInstance()) {
                    resolve(_this._open());
                }
                else {
                    _this._onContainerInit.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function () {
                        if (_this._getInstance()) {
                            resolve(_this._open());
                        }
                        else {
                            console.warn(noInstanceWarn);
                            resolve(false);
                        }
                    });
                }
            }
            else {
                resolve(false);
            }
        });
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
                _this._getInstance().ongoing = false;
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
    WalkthroughComponent.prototype._checkVisibility = function () {
        if (this.focusElementSelector) {
            var elements = document.querySelectorAll(this.focusElementSelector);
            if (elements.length === 0) {
                return false;
            }
            if (this.visibilityCallback) {
                return this.visibilityCallback();
            }
            for (var _i = 0, _a = elements; _i < _a.length; _i++) {
                var el = _a[_i];
                if (el.offsetParent === null) {
                    return false;
                }
            }
        }
        return true;
    };
    WalkthroughComponent.prototype._open = function () {
        if (!this._getInstance().ongoing) {
            this._getInstance().ongoing = true;
            WalkthroughComponent_1.onOpen.next(this);
            this._elementLocations();
            return true;
        }
        else {
            console.warn(anoterWktOnGoing);
            return false;
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
        var instance = this._getInstance();
        if (instance && instance.ongoing) {
            instance.ongoing = false;
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
        if (componentOrTemplateRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]) {
            walkthroughContainer.attachTemplatePortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["TemplatePortal"](componentOrTemplateRef, null));
        }
        else {
            walkthroughContainer.attachComponentPortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["ComponentPortal"](componentOrTemplateRef));
        }
    };
    WalkthroughComponent.prototype._elementLocations = function () {
        this._getFocusElement();
        var element = this._focusElement;
        if (element) {
            if (this.scrollOnTarget) {
                this._walkthroughService.scrollIntoViewIfOutOfView(element);
            }
            // if there is a root element defined (in some cases when position fixed is used, we need to scroll on it)
            if (this.rootElement) {
                document.querySelector(this.rootElement).scrollIntoView(true);
            }
            this._offsetCoordinates = this._walkthroughService.retrieveCoordinates(element);
            if (this.typeSelector === 'zone') {
                var offsetEndCoordinatesEnd = this._walkthroughService.retrieveCoordinates(this._focusElementEnd);
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
                    instance.marginZonePx = _this._marginZonePx;
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
                    instance.arrowPosition(_this._offsetCoordinates);
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
            ? __assign(__assign({}, new _walkthrough_text__WEBPACK_IMPORTED_MODULE_5__["WalkthroughText"]()), this.texts) : new _walkthrough_text__WEBPACK_IMPORTED_MODULE_5__["WalkthroughText"]();
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
    var WalkthroughComponent_1;
    WalkthroughComponent._walkthroughContainer = null;
    WalkthroughComponent._walkthroughContainerCreating = false;
    WalkthroughComponent.minimalMargin = 60;
    WalkthroughComponent.onOpen = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    WalkthroughComponent.onRefresh = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    WalkthroughComponent.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    WalkthroughComponent.onNavigate = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    WalkthroughComponent.onNavigatePrevious = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    WalkthroughComponent.onNavigateNext = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    WalkthroughComponent.onFinish = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    WalkthroughComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _walkthrough_service__WEBPACK_IMPORTED_MODULE_7__["WalkthroughService"] }
    ]; };
    WalkthroughComponent.propDecorators = {
        closed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        finished: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        ready: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        focusElementCSSClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        rootElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        focusElementSelector: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        typeSelector: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        focusClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        radius: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        previousStep: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        nextStep: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        texts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        contentTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        contentText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        contentStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        marginZone: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        arrowColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        animation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        animationDelays: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        alignContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        verticalAlignContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        contentSpacing: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        verticalContentSpacing: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        closeButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        closeAnywhere: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        showArrow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        finishButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        focusHighlightAnimation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        focusBackdrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        focusGlow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        scrollOnTarget: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        visibilityCallback: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        resize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['window:resize',] }]
    };
    WalkthroughComponent = WalkthroughComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ng-walkthrough',
            template: ''
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _walkthrough_service__WEBPACK_IMPORTED_MODULE_7__["WalkthroughService"]])
    ], WalkthroughComponent);
    return WalkthroughComponent;
}());



/***/ }),

/***/ "qTly":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/angular-walkthrough/src/lib/walkthrough-container.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wkt-container\">\n    <div class=\"wkt-zone\"\n         #zone\n         (click)=\"clickZone($event)\"\n         [class.hide]=\"!hasHighlightZone\"\n         [class.backdrop]=\"hasBackdrop\"\n         [class.glow]=\"hasGlow\"\n         [class.clickable]=\"hasClickable\"\n         [class.highlight]=\"hasHighlight\"\n         [style.padding]=\"marginZone\"></div>\n    <div class=\"wkt-content-block\"\n         [class.hide]=\"hideOther\"\n         [class.darken]=\"contentStyle === 'draken'\"\n         #contentBlock>\n        <button type=\"button\"\n                class=\"wkt-close\"\n                *ngIf=\"hasCloseButton\"\n                (click)=\"close()\">✖</button>\n        <div class=\"wkt-content\">\n            <p *ngIf=\"contentText\">{{contentText}}</p>\n            <ng-template cdkPortalHost></ng-template>\n        </div>\n        <div class=\"wkt-navigate\"\n             *ngIf=\"hasPrevious||hasNext||hasFinish\">\n            <button type=\"button\"\n                    class=\"wkt-previous-link\"\n                    *ngIf=\"hasPrevious\"\n                    (click)=\"previous()\">{{text.previous}}</button>\n            <button type=\"button\"\n                    class=\"wkt-next-link\"\n                    *ngIf=\"hasNext\"\n                    (click)=\"next()\">{{text.next}}</button>\n            <button type=\"button\"\n                    class=\"wkt-finish-link\"\n                    *ngIf=\"hasFinish\"\n                    (click)=\"close(true)\">{{text.close}}</button>\n        </div>\n    </div>\n    <div *ngIf=\"hasArrow\"\n         [class.hide]=\"hideOther\">\n        <svg version=\"1.1\"\n             xmlns=\"http://www.w3.org/2000/svg\"\n             width=\"100%\"\n             height=\"100%\">\n            <defs>\n                <marker id=\"wkt-arrow\"\n                        viewBox=\"0 0 10 10\"\n                        refX=\"8\"\n                        refY=\"5\"\n                        markerUnits=\"strokeWidth\"\n                        orient=\"auto\"\n                        markerWidth=\"10\"\n                        markerHeight=\"10\">\n                    <polyline points=\"0,0 10,5 0,10 5,5\"\n                              stroke-width=\"0\"\n                              [attr.fill]=\"arrowColor || '#FFF'\" />\n                </marker>\n            </defs>\n            <path class=\"wkt-arrow-path\"\n                  [attr.d]=\"arrowPath\"\n                  [attr.stroke]=\"arrowColor || '#FFF'\"\n                  [attr.marker-end]=\"markerUrl\" />\n        </svg>\n    </div>\n</div>");

/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".avalaible {\n  position: fixed;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  display: flex;\n  flex-direction: column;\n}\n.avalaible > button {\n  min-width: 200px;\n  margin: 0;\n}\n:host,\n:host > div {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n.overflow {\n  height: 250px;\n  overflow: auto;\n}\n.overflow div {\n  height: 250px;\n}\nbutton {\n  margin-left: 5%;\n}\n.bigger {\n  height: 100%;\n  width: 100%;\n  position: relative;\n}\n#test3 {\n  position: absolute;\n  bottom: 5%;\n  right: 5%;\n  width: 50px;\n  height: 50px;\n  border-radius: 25% 50% 25% 40%;\n  z-index: 1;\n}\n#test4 {\n  bottom: 1em;\n  position: absolute;\n}\n.valign-container {\n  position: relative;\n  height: 2000px;\n}\n#valign {\n  top: 500px;\n  left: 30%;\n  position: absolute;\n}\n#valign-content button {\n  margin: 0;\n}\n#increase {\n  top: 500px;\n  position: absolute;\n  left: 0;\n}\n#decrease {\n  top: 530px;\n  position: absolute;\n  left: 0;\n}\n.redbutton {\n  background: #F00;\n  color: #FFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNKO0FBQ0k7RUFDSSxnQkFBQTtFQUNBLFNBQUE7QUFDUjtBQUdBOztFQUVJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUFKO0FBR0E7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQUFKO0FBRUk7RUFDSSxhQUFBO0FBQVI7QUFJQTtFQUNJLGVBQUE7QUFESjtBQUlBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQURKO0FBSUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7QUFESjtBQUlBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBREo7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQURKO0FBSUE7RUFDSSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBREo7QUFJQTtFQUNJLFNBQUE7QUFESjtBQUlBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtBQURKO0FBSUE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0FBREo7QUFJQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtBQURKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdmFsYWlibGUge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgei1pbmRleDogMjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAmID4gYnV0dG9uIHtcbiAgICAgICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbn1cblxuOmhvc3QsXG46aG9zdCA+IGRpdiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ub3ZlcmZsb3cge1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG5cbiAgICBkaXYge1xuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIH1cbn1cblxuYnV0dG9uIHtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG59XG5cbi5iaWdnZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbiN0ZXN0MyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogNSU7XG4gICAgcmlnaHQ6IDUlO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyNSUgNTAlIDI1JSA0MCU7XG4gICAgei1pbmRleDogMTtcbn1cblxuI3Rlc3Q0IHtcbiAgICBib3R0b206IDFlbTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi52YWxpZ24tY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAyMDAwcHg7XG59XG5cbiN2YWxpZ24ge1xuICAgIHRvcDogNTAwcHg7XG4gICAgbGVmdDogMzAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuI3ZhbGlnbi1jb250ZW50IGJ1dHRvbiB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4jaW5jcmVhc2Uge1xuICAgIHRvcDogNTAwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG59XG5cbiNkZWNyZWFzZSB7XG4gICAgdG9wOiA1MzBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbn1cblxuLnJlZGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogI0YwMDtcbiAgICBjb2xvcjogI0ZGRjtcbn1cbiJdfQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map