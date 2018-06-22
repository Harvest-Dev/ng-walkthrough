(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/angular-walkthrough/fesm5/angular-walkthrough.js":
/*!***************************************************************!*\
  !*** ./dist/angular-walkthrough/fesm5/angular-walkthrough.js ***!
  \***************************************************************/
/*! exports provided: throwWalkthroughContentAlreadyAttachedError, WalkthroughContainerComponent, WalkthroughFlowComponent, WalkthroughText, booleanValue, WalkthroughEvent, WalkthroughMargin, WalkthroughComponent, WalkthroughService, WalkthroughModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwWalkthroughContentAlreadyAttachedError", function() { return throwWalkthroughContentAlreadyAttachedError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkthroughContainerComponent", function() { return WalkthroughContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkthroughFlowComponent", function() { return WalkthroughFlowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkthroughText", function() { return WalkthroughText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "booleanValue", function() { return booleanValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkthroughEvent", function() { return WalkthroughEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkthroughMargin", function() { return WalkthroughMargin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkthroughComponent", function() { return WalkthroughComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkthroughService", function() { return WalkthroughService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkthroughModule", function() { return WalkthroughModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ booleanValue = function (value) {
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
    /**
     * @param {?} points
     * @return {?}
     */
    WalkthroughMargin.parsePoints = /**
     * @param {?} points
     * @return {?}
     */
    function (points) {
        var /** @type {?} */ pointsPx;
        if (points.match(/^\d+(?:\s+\d+)*$/)) {
            var /** @type {?} */ split = points.split(/\s+/).map(function (i) { return parseFloat(i); });
            pointsPx = new WalkthroughMargin(split[0], split[1], split[2], split[3]);
        }
        return pointsPx || new WalkthroughMargin();
    };
    return WalkthroughMargin;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var WalkthroughService = /** @class */ (function () {
    function WalkthroughService() {
        this._overflowRegex = /(auto|scroll)/;
    }
    /**
     * @param {?} element
     * @param {?=} margin
     * @return {?}
     */
    WalkthroughService.prototype.retrieveCoordinates = /**
     * @param {?} element
     * @param {?=} margin
     * @return {?}
     */
    function (element, margin) {
        var /** @type {?} */ clientrect = element.getBoundingClientRect();
        var /** @type {?} */ style = window.getComputedStyle(element);
        var /** @type {?} */ coordinates = {
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
    /**
     * @return {?}
     */
    WalkthroughService.prototype.getTop = /**
     * @return {?}
     */
    function () {
        return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    };
    /**
     * @return {?}
     */
    WalkthroughService.prototype.getDocumentHeight = /**
     * @return {?}
     */
    function () {
        // Height of entire body : https://stackoverflow.com/a/1147768
        var /** @type {?} */ body_height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
        return Math.max(this.getHeightOfPage() + this.getTop(), body_height);
    };
    /**
     * @param {?} element
     * @param {?=} marginTop
     * @return {?}
     */
    WalkthroughService.prototype.scrollIntoViewIfOutOfView = /**
     * @param {?} element
     * @param {?=} marginTop
     * @return {?}
     */
    function (element, marginTop) {
        if (marginTop === void 0) { marginTop = 0; }
        var /** @type {?} */ topOfPage = this.getTop();
        var /** @type {?} */ heightOfPage = this.getHeightOfPage();
        var /** @type {?} */ elementY = 0;
        var /** @type {?} */ elementH = 0;
        var /** @type {?} */ parent = element;
        while (parent && parent !== document.body) {
            elementY += parent.offsetTop;
            parent = /** @type {?} */ (parent.offsetParent);
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
            var /** @type {?} */ current = element;
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
    /**
     * @param {?} element1
     * @param {?} element2
     * @param {?} margin
     * @return {?}
     */
    WalkthroughService.prototype.scrollToTopElement = /**
     * @param {?} element1
     * @param {?} element2
     * @param {?} margin
     * @return {?}
     */
    function (element1, element2, margin) {
        if (element1 && element2) {
            var /** @type {?} */ element1Position = this.retrieveCoordinates(element1, margin);
            var /** @type {?} */ element2Position = this.retrieveCoordinates(element2, margin);
            var /** @type {?} */ minX = Math.min(element1Position.left, element2Position.left);
            var /** @type {?} */ minY = Math.min(element1Position.top, element2Position.top);
            window.scrollTo(minX - 20, minY - 20);
        }
    };
    /**
     * @param {?} element
     * @return {?}
     */
    WalkthroughService.prototype.getScrollParent = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        var /** @type {?} */ scrollParent;
        var /** @type {?} */ style = getComputedStyle(element);
        var /** @type {?} */ excludeStaticParent = style.position === 'absolute';
        if (style.position !== 'fixed') {
            var /** @type {?} */ parent_1 = element.parentElement;
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
    /**
     * @return {?}
     */
    WalkthroughService.prototype.getHeightOfPage = /**
     * @return {?}
     */
    function () {
        return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    };
    WalkthroughService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return WalkthroughService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var WalkthroughText = /** @class */ (function () {
    function WalkthroughText() {
        this.previous = 'Previous';
        this.next = 'Next';
        this.close = 'Close';
    }
    return WalkthroughText;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ nextUniqueId = 0;
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
        this._marginZonePx = new WalkthroughMargin();
        this._alignContent = 'left';
        this._verticalAlignContent = 'top';
        this._contentSpacing = 0;
        this._verticalContentSpacing = 50;
    }
    Object.defineProperty(WalkthroughComponent.prototype, "marginZone", {
        get: /**
         * @return {?}
         */
        function () { return this._marginZone; },
        set: /**
         * @param {?} points
         * @return {?}
         */
        function (points) {
            if (this._marginZone !== points) {
                if (points === null) {
                    this._marginZone = null;
                }
                this._marginZonePx = WalkthroughMargin.parsePoints(points);
                if (this._marginZonePx !== null) {
                    this._marginZone = points;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WalkthroughComponent.prototype, "arrowColor", {
        get: /**
         * @return {?}
         */
        function () { return this._arrowColor; },
        set: /**
         * @param {?} color
         * @return {?}
         */
        function (color) {
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
        get: /**
         * @return {?}
         */
        function () { return this._id; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._id = value || this._uid; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WalkthroughComponent.prototype, "alignContent", {
        get: /**
         * @return {?}
         */
        function () {
            return this._alignContent;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
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
        get: /**
         * @return {?}
         */
        function () {
            return this._verticalAlignContent;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
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
        get: /**
         * @return {?}
         */
        function () {
            return this._contentSpacing;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            value = Math.max(WalkthroughComponent.minimalMargin, value);
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
        get: /**
         * @return {?}
         */
        function () {
            return this._verticalContentSpacing;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            value = Math.max(WalkthroughComponent.minimalMargin, value);
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
        get: /**
         * @return {?}
         */
        function () {
            return this._hasCloseButton;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._hasCloseButton = booleanValue(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WalkthroughComponent.prototype, "closeAnywhere", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hasCloseAnywhere;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._hasCloseAnywhere = booleanValue(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WalkthroughComponent.prototype, "showArrow", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hasArrow;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._hasArrow = booleanValue(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WalkthroughComponent.prototype, "finishButton", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hasFinish;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._hasFinish = booleanValue(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WalkthroughComponent.prototype, "focusHighlightAnimation", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hasHighlightAnimation;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._hasHighlightAnimation = booleanValue(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WalkthroughComponent.prototype, "focusBackdrop", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hasBackdrop;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._hasBackdrop = booleanValue(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WalkthroughComponent.prototype, "focusGlow", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hasGlow;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._hasGlow = booleanValue(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WalkthroughComponent.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            this._disabled = value;
            var /** @type {?} */ instance = this._getInstance();
            if (instance) {
                setTimeout(function () {
                    instance.hasPrevious = _this._hasPreviousStep(instance);
                    instance.hasNext = _this._hasNextStep(instance);
                    if (!instance.hasNext) {
                        instance.hasFinish = true;
                    }
                    else {
                        instance.hasFinish = /** @type {?} */ (instance.parent.finishButton);
                    }
                }, 50);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    WalkthroughComponent.walkthroughStop = /**
     * @return {?}
     */
    function () {
        if (WalkthroughComponent._walkthroughContainer) {
            WalkthroughComponent._walkthroughContainer.instance.stop();
        }
    };
    /**
     * @return {?}
     */
    WalkthroughComponent.walkthroughHasShow = /**
     * @return {?}
     */
    function () {
        return WalkthroughComponent._walkthroughContainer
            ? WalkthroughComponent._walkthroughContainer.instance.show
            : false;
    };
    /**
     * @return {?}
     */
    WalkthroughComponent.walkthroughHasPause = /**
     * @return {?}
     */
    function () {
        return WalkthroughComponent._walkthroughContainer
            ? WalkthroughComponent._walkthroughContainer.instance.pause
            : false;
    };
    /**
     * @return {?}
     */
    WalkthroughComponent.walkthroughContinue = /**
     * @return {?}
     */
    function () {
        if (WalkthroughComponent._walkthroughContainer) {
            WalkthroughComponent._walkthroughContainer.instance.continue(true);
        }
    };
    /**
     * @return {?}
     */
    WalkthroughComponent.walkthroughNext = /**
     * @return {?}
     */
    function () {
        if (WalkthroughComponent._walkthroughContainer) {
            WalkthroughComponent._walkthroughContainer.instance.next();
        }
    };
    /**
     * @return {?}
     */
    WalkthroughComponent.walkthroughPrevious = /**
     * @return {?}
     */
    function () {
        if (WalkthroughComponent._walkthroughContainer) {
            WalkthroughComponent._walkthroughContainer.instance.previous();
        }
    };
    /**
     * @return {?}
     */
    WalkthroughComponent.prototype.resize = /**
     * @return {?}
     */
    function () {
        if (this._display &&
            WalkthroughComponent._walkthroughContainer &&
            window.innerWidth !== this._windowWidth &&
            !WalkthroughComponent.walkthroughHasPause()) {
            this._elementLocations();
        }
    };
    /**
     * @return {?}
     */
    WalkthroughComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // init the Walkthrough element container
        if (!WalkthroughComponent._walkthroughContainer && !WalkthroughComponent._walkthroughContainerCreating) {
            WalkthroughComponent._walkthroughContainerCreating = true;
            setTimeout(function () {
                WalkthroughComponent._walkthroughContainer =
                    _this._appendComponentToBody(WalkthroughContainerComponent);
            }, 0);
        }
    };
    /**
     * @param {?=} closedEvent
     * @param {?=} finishedEvent
     * @return {?}
     */
    WalkthroughComponent.prototype.next = /**
     * @param {?=} closedEvent
     * @param {?=} finishedEvent
     * @return {?}
     */
    function (closedEvent, finishedEvent) {
        if (closedEvent) {
            this.closed = closedEvent;
        }
        if (finishedEvent) {
            this.finished = finishedEvent;
        }
        this.open();
    };
    /**
     * @return {?}
     */
    WalkthroughComponent.prototype.refresh = /**
     * @return {?}
     */
    function () {
        if (!this._getInstance().pause) {
            this._elementLocations();
        }
    };
    /**
     * @return {?}
     */
    WalkthroughComponent.prototype.open = /**
     * @return {?}
     */
    function () {
        if (!this._getInstance().pause) {
            this._elementLocations();
        }
        else {
            console.warn('Another walkthrough is in pause. Please close it before.');
        }
    };
    /**
     * Do not use this method outside of the library
     */
    /**
     * Do not use this method outside of the library
     * @return {?}
     */
    WalkthroughComponent.prototype.loadPrevioustStep = /**
     * Do not use this method outside of the library
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () {
            _this.previousStep._next(_this.closed, _this.finished);
        }, 0);
    };
    /**
     * Do not use this method outside of the library
     */
    /**
     * Do not use this method outside of the library
     * @return {?}
     */
    WalkthroughComponent.prototype.loadNextStep = /**
     * Do not use this method outside of the library
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () {
            _this.nextStep._next(_this.closed, _this.finished);
        }, 0);
    };
    /**
     * Do not use this method outside of the library
     */
    /**
     * Do not use this method outside of the library
     * @param {?=} finishLink
     * @param {?=} closeWalkthrough
     * @return {?}
     */
    WalkthroughComponent.prototype.hide = /**
     * Do not use this method outside of the library
     * @param {?=} finishLink
     * @param {?=} closeWalkthrough
     * @return {?}
     */
    function (finishLink, closeWalkthrough) {
        var _this = this;
        if (finishLink === void 0) { finishLink = false; }
        if (closeWalkthrough === void 0) { closeWalkthrough = true; }
        this._display = false;
        // add CSS to focusElement
        if (this.focusElementCSSClass) {
            this._renderer.removeClass(this._focusElement, this.focusElementCSSClass);
        }
        if (closeWalkthrough) {
            setTimeout(function () {
                // emit closed event
                // emit closed event
                _this.closed.emit(finishLink);
                if (!_this.nextStep) {
                    // emit finished event
                    // emit finished event
                    _this.finished.emit(new WalkthroughEvent(_this, _this._focusElement));
                }
            }, 20);
        }
    };
    /**
     * @return {?}
     */
    WalkthroughComponent.prototype._show = /**
     * @return {?}
     */
    function () {
        this._display = true;
    };
    /**
     * @param {?=} closedEvent
     * @param {?=} finishedEvent
     * @return {?}
     */
    WalkthroughComponent.prototype._next = /**
     * @param {?=} closedEvent
     * @param {?=} finishedEvent
     * @return {?}
     */
    function (closedEvent, finishedEvent) {
        if (closedEvent) {
            this.closed = closedEvent;
        }
        if (finishedEvent) {
            this.finished = finishedEvent;
        }
        this.open();
    };
    /**
     * @return {?}
     */
    WalkthroughComponent.prototype._getInstance = /**
     * @return {?}
     */
    function () {
        return WalkthroughComponent._walkthroughContainer
            ? WalkthroughComponent._walkthroughContainer.instance
            : null;
    };
    /**
     * @template T
     * @param {?} component
     * @return {?}
     */
    WalkthroughComponent.prototype._appendComponentToBody = /**
     * @template T
     * @param {?} component
     * @return {?}
     */
    function (component) {
        // create a component reference
        var /** @type {?} */ componentRef = this._componentFactoryResolver.resolveComponentFactory(component).create(this._injector);
        // attach component to the appRef so that so that it will be dirty checked.
        this._applicationRef.attachView(componentRef.hostView);
        // get DOM element from component
        var /** @type {?} */ domElem = /** @type {?} */ ((/** @type {?} */ (componentRef.hostView)).rootNodes[0]);
        document.body.appendChild(domElem);
        return componentRef;
    };
    /**
     * @template T
     * @param {?} componentOrTemplateRef
     * @param {?} walkthroughContainer
     * @return {?}
     */
    WalkthroughComponent.prototype._attachWalkthroughContent = /**
     * @template T
     * @param {?} componentOrTemplateRef
     * @param {?} walkthroughContainer
     * @return {?}
     */
    function (componentOrTemplateRef, walkthroughContainer) {
        if (componentOrTemplateRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]) {
            walkthroughContainer.attachTemplatePortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["TemplatePortal"](componentOrTemplateRef, null));
        }
        else {
            var /** @type {?} */ injectionTokens = new WeakMap();
            injectionTokens.set(WalkthroughContainerComponent, walkthroughContainer);
            var /** @type {?} */ injector = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalInjector"](this._injector, injectionTokens);
            walkthroughContainer.attachComponentPortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["ComponentPortal"](componentOrTemplateRef, undefined, injector));
        }
    };
    /**
     * @return {?}
     */
    WalkthroughComponent.prototype._elementLocations = /**
     * @return {?}
     */
    function () {
        this._getFocusElement();
        var /** @type {?} */ element = this._focusElement;
        if (element) {
            this._walkthroughService.scrollIntoViewIfOutOfView(element);
            // if there is a root element defined (in some cases when position fixed is used, we need to scroll on it)
            if (this.rootElement) {
                document.querySelector(this.rootElement).scrollIntoView(true);
            }
            this._offsetCoordinates = this._walkthroughService.retrieveCoordinates(element, this._marginZonePx);
            if (this.typeSelector === 'zone') {
                var /** @type {?} */ offsetEndCoordinatesEnd = this._walkthroughService.retrieveCoordinates(this._focusElementEnd, this._marginZonePx);
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
     * @return {?}
     */
    WalkthroughComponent.prototype._getFocusElement = /**
     *
     * @return {?}
     */
    function () {
        var /** @type {?} */ focusElements;
        try {
            focusElements = this.focusElementSelector
                ? /** @type {?} */ (document.querySelectorAll(this.focusElementSelector)) : null;
        }
        catch (/** @type {?} */ error) {
            console.error("#" + this.id + "@focusElementSelector: '" + this.focusElementSelector + "' is not a valid selector.\n", error);
        }
        // getting focus element
        if (focusElements && focusElements.length > 0) {
            if (focusElements.length > 1) {
                // Multiple items fit selector, displaying first visible as focus item in 'element' mode
                var /** @type {?} */ l = focusElements.length;
                for (var /** @type {?} */ i = 0; i < l; i++) {
                    // offsetHeight not of 0 means visible
                    if (focusElements[i].offsetHeight) {
                        this._focusElement = focusElements[i];
                        i = focusElements.length;
                        break;
                    }
                }
                // if typeSelector is by zone, get also the last element
                if (this.typeSelector === 'zone') {
                    for (var /** @type {?} */ i = l - 1; i >= 0; i--) {
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
     * @return {?}
     */
    WalkthroughComponent.prototype._setFocus = /**
     * get instance, hightlight the focused element et show the template
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ instance = this._getInstance();
        if (instance) {
            var /** @type {?} */ scrollY_1 = window.pageXOffset;
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
    /**
     * @return {?}
     */
    WalkthroughComponent.prototype._setFocusContinue = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ instance = this._getInstance();
        if (!this._display) {
            this._attachContentTemplate();
            this._initContentTemplate(instance);
        }
        setTimeout(function () {
            instance.hightlightZoneStyling(_this._focusElement);
            _this._updateElementPositions(instance);
        }, 0);
    };
    /**
     * @param {?} instance
     * @return {?}
     */
    WalkthroughComponent.prototype._updateElementPositions = /**
     * @param {?} instance
     * @return {?}
     */
    function (instance) {
        var _this = this;
        if (WalkthroughComponent._walkthroughContainer && this._getInstance()) {
            setTimeout(function () {
                instance.contentBlockPosition(_this._offsetCoordinates, _this._alignContent, _this._verticalAlignContent, _this._contentSpacing, _this._verticalContentSpacing);
                if (_this._focusElement !== null && _this._hasArrow) {
                    instance.arrowPosition(_this._offsetCoordinates, _this._verticalContentSpacing);
                }
                // add CSS to focusElement
                if (_this.focusElementCSSClass) {
                    _this._renderer.addClass(_this._focusElement, _this.focusElementCSSClass);
                }
                setTimeout(function () {
                    _this._getInstance().setHeight();
                    if (!_this._readyHasBeenEmited) {
                        _this._readyHasBeenEmited = true;
                        _this.ready.emit(new WalkthroughEvent(_this, _this._focusElement));
                    }
                    var /** @type {?} */ contentBlockNative = /** @type {?} */ (instance.contentBlock.nativeElement);
                    var /** @type {?} */ scrollPos;
                    if (_this._focusElement != null) {
                        var /** @type {?} */ coordinatesContent = _this._walkthroughService.retrieveCoordinates(contentBlockNative);
                        var /** @type {?} */ coordinatesFocus = _this._walkthroughService.retrieveCoordinates(_this._focusElement);
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
                                scrollPos = -WalkthroughComponent.minimalMargin;
                            }
                            else {
                                contentBlockNative.scrollIntoView(true);
                                scrollPos = -WalkthroughComponent.minimalMargin;
                            }
                        }
                    }
                    else {
                        // no focus zone, scroll on content minus margin
                        contentBlockNative.scrollIntoView(true);
                        scrollPos = -WalkthroughComponent.minimalMargin;
                    }
                    window.scrollBy(0, scrollPos);
                }, 50);
            }, 0);
        }
    };
    /**
     * Attache the template in the contener, if a template is linked.
     * @return {?}
     */
    WalkthroughComponent.prototype._attachContentTemplate = /**
     * Attache the template in the contener, if a template is linked.
     * @return {?}
     */
    function () {
        if (this.contentTemplate) {
            this._attachWalkthroughContent(this.contentTemplate, this._getInstance());
        }
    };
    /**
     * init a partof styles of the contenaire
     * @param {?} instance
     * @return {?}
     */
    WalkthroughComponent.prototype._initStylingTemplate = /**
     * init a partof styles of the contenaire
     * @param {?} instance
     * @return {?}
     */
    function (instance) {
        var /** @type {?} */ hasHighlightZone = this._focusElement !== null;
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
     * @param {?} instance
     * @return {?}
     */
    WalkthroughComponent.prototype._initContentTemplate = /**
     * init all datas of the contenaire
     * @param {?} instance
     * @return {?}
     */
    function (instance) {
        var /** @type {?} */ hasHighlightZone = this._focusElement !== null;
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
            ? Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, new WalkthroughText(), this.texts) : new WalkthroughText();
        this._show();
    };
    /**
     * check if there is a previous step enabled
     * @param {?} instance
     * @return {?}
     */
    WalkthroughComponent.prototype._hasPreviousStep = /**
     * check if there is a previous step enabled
     * @param {?} instance
     * @return {?}
     */
    function (instance) {
        if (instance.parent) {
            var /** @type {?} */ current = instance.parent.previousStep;
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
     * @param {?} instance
     * @return {?}
     */
    WalkthroughComponent.prototype._hasNextStep = /**
     * check if there is a next step enabled
     * @param {?} instance
     * @return {?}
     */
    function (instance) {
        if (instance.parent) {
            var /** @type {?} */ current = instance.parent.nextStep;
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
    WalkthroughComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ng-walkthrough',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    WalkthroughComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: WalkthroughService }
    ]; };
    WalkthroughComponent.propDecorators = {
        closed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        finished: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        ready: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        focusElementCSSClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        rootElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        focusElementSelector: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        typeSelector: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        focusClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        radius: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        previousStep: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        nextStep: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        texts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        contentTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        contentText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        contentStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        marginZone: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        arrowColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        animation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        animationDelays: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        alignContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        verticalAlignContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        contentSpacing: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        verticalContentSpacing: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        closeButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        closeAnywhere: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        showArrow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        finishButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        focusHighlightAnimation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        focusBackdrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        focusGlow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        resize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:resize',] }]
    };
    return WalkthroughComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @return {?}
 */
function throwWalkthroughContentAlreadyAttachedError() {
    throw Error('Attempting to attach walkthrough content after content is already attached');
}
var /** @type {?} */ is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
var WalkthroughContainerComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(WalkthroughContainerComponent, _super);
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
        _this.marginZonePx = new WalkthroughMargin();
        // texts change / i18n
        _this.text = new WalkthroughText();
        return _this;
    }
    Object.defineProperty(WalkthroughContainerComponent.prototype, "id", {
        // HostBinding
        get: /**
         * @return {?}
         */
        function () {
            return this.parent ? this.parent.id + '-container' : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WalkthroughContainerComponent.prototype, "hide", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.show;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WalkthroughContainerComponent.prototype, "cursor", {
        get: /**
         * @return {?}
         */
        function () {
            return this.hasCloseAnywhere;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WalkthroughContainerComponent.prototype, "backdrop", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.hasHighlightZone && this.hasBackdrop;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    WalkthroughContainerComponent.prototype.click = /**
     * @return {?}
     */
    function () {
        if (this.hasCloseAnywhere && this.show) {
            this.close();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    WalkthroughContainerComponent.prototype.clickZone = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.parent && this.hasClickable) {
            this.parent.focusClick(event, this);
        }
    };
    /**
     * Attach a ComponentPortal as content to this walkthrough container.
     * @param portal Portal to be attached as the walkthrough content.
     */
    /**
     * Attach a ComponentPortal as content to this walkthrough container.
     * @template T
     * @param {?} portal Portal to be attached as the walkthrough content.
     * @return {?}
     */
    WalkthroughContainerComponent.prototype.attachComponentPortal = /**
     * Attach a ComponentPortal as content to this walkthrough container.
     * @template T
     * @param {?} portal Portal to be attached as the walkthrough content.
     * @return {?}
     */
    function (portal) {
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
    /**
     * Attach a TemplatePortal as content to this walkthrough container.
     * @template C
     * @param {?} portal Portal to be attached as the walkthrough content.
     * @return {?}
     */
    WalkthroughContainerComponent.prototype.attachTemplatePortal = /**
     * Attach a TemplatePortal as content to this walkthrough container.
     * @template C
     * @param {?} portal Portal to be attached as the walkthrough content.
     * @return {?}
     */
    function (portal) {
        if (this._portalHost.hasAttached()) {
            throwWalkthroughContentAlreadyAttachedError();
        }
        // this._savePreviouslyFocusedElement();
        return this._portalHost.attachTemplatePortal(portal);
    };
    /**
     * @return {?}
     */
    WalkthroughContainerComponent.prototype.setHeight = /**
     * @return {?}
     */
    function () {
        this._renderer.setStyle(this._el.nativeElement, 'height', this._walkthroughService.getDocumentHeight() + 'px');
    };
    /**
     * @param {?} coordinate
     * @param {?} scrollDiff
     * @param {?} animation
     * @param {?} animationDelays
     * @param {?} continueFunction
     * @return {?}
     */
    WalkthroughContainerComponent.prototype.hightlightZone = /**
     * @param {?} coordinate
     * @param {?} scrollDiff
     * @param {?} animation
     * @param {?} animationDelays
     * @param {?} continueFunction
     * @return {?}
     */
    function (coordinate, scrollDiff, animation, animationDelays, continueFunction) {
        var _this = this;
        var /** @type {?} */ element = (/** @type {?} */ (this.zone.nativeElement));
        var /** @type {?} */ zoneStyle = element.style;
        var /** @type {?} */ style = window.getComputedStyle(element, null);
        if (animation === 'linear' && animationDelays > 0 && style.left !== 'auto') {
            this.hideOther = true;
            var /** @type {?} */ fragment_1 = 20;
            var /** @type {?} */ intervale = animationDelays / fragment_1;
            var /** @type {?} */ left_1 = parseInt(style.left, 10);
            var /** @type {?} */ top_1 = scrollDiff + parseInt(style.top, 10);
            var /** @type {?} */ width_1 = parseInt(style.width, 10);
            var /** @type {?} */ height_1 = parseInt(style.height, 10);
            var /** @type {?} */ partLeft_1 = (coordinate.left - left_1) / fragment_1;
            var /** @type {?} */ partTop_1 = (coordinate.top - top_1) / fragment_1;
            var /** @type {?} */ partWidth_1 = (coordinate.width - width_1) / fragment_1;
            var /** @type {?} */ partHeight_1 = (coordinate.height - height_1) / fragment_1;
            var /** @type {?} */ count_1 = 0;
            this.show = true;
            zoneStyle.borderRadius = '50%';
            var /** @type {?} */ timer_1 = setInterval(function () {
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
    /**
     * @param {?} element
     * @return {?}
     */
    WalkthroughContainerComponent.prototype.hightlightZoneStyling = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (element) {
            var /** @type {?} */ zoneStyle = (/** @type {?} */ (this.zone.nativeElement)).style;
            if (this.radius) {
                if (Number(this.radius) === parseFloat(this.radius)) {
                    // if is numeric, change in %
                    zoneStyle.borderRadius = this.radius + '%';
                }
                else if (this.radius === 'auto') {
                    // if mode auto
                    var /** @type {?} */ elementStyle = window.getComputedStyle(element, null);
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
    /**
     * @param {?} coordinate
     * @param {?} alignContent
     * @param {?} verticalAlignContent
     * @param {?} contentSpacing
     * @param {?} verticalContentSpacing
     * @return {?}
     */
    WalkthroughContainerComponent.prototype.contentBlockPosition = /**
     * @param {?} coordinate
     * @param {?} alignContent
     * @param {?} verticalAlignContent
     * @param {?} contentSpacing
     * @param {?} verticalContentSpacing
     * @return {?}
     */
    function (coordinate, alignContent, verticalAlignContent, contentSpacing, verticalContentSpacing) {
        var /** @type {?} */ element = /** @type {?} */ (this.contentBlock.nativeElement);
        var /** @type {?} */ elementSize = this._walkthroughService.retrieveCoordinates(element);
        var /** @type {?} */ width = elementSize.width + elementSize.margin.left + elementSize.margin.right;
        var /** @type {?} */ height = elementSize.height + elementSize.margin.top + elementSize.margin.bottom;
        // check if we've got the space to respect the alignContent attribute
        var /** @type {?} */ notEnoughSpace = false;
        if (this.hasHighlightZone) {
            var /** @type {?} */ spaceLeft = coordinate.left;
            var /** @type {?} */ spaceRight = window.innerWidth - coordinate.left - coordinate.width;
            if (spaceLeft < width && spaceRight < width) {
                notEnoughSpace = true;
            }
            // if not enough space to respect the alignContent, content goes above/below
            if ((verticalAlignContent === 'top' ||
                verticalAlignContent === 'center' ||
                verticalAlignContent === 'bottom') && !notEnoughSpace) {
                // change align center to left or right if not enough space to align center
                if (alignContent === 'center') {
                    var /** @type {?} */ maxSpace = Math.max(spaceRight, spaceLeft);
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
                var /** @type {?} */ space = coordinate.left - width;
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
                var /** @type {?} */ space = window.innerWidth - coordinate.left - coordinate.width - width;
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
            var /** @type {?} */ startLeft = this._walkthroughService.retrieveCoordinates(element).left + width / 2;
            this._arrowPosition = startLeft > (coordinate.left - WalkthroughComponent.minimalMargin)
                && startLeft < (coordinate.left + coordinate.width + WalkthroughComponent.minimalMargin)
                ? 'topBottom' : 'leftRight';
            // if there is enough place on the left or on the right, we consider verticalAlignContent, otherwise, we ignore it
            if (verticalAlignContent && !notEnoughSpace) {
                var /** @type {?} */ space = 0;
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
                    element.style.top = (coordinate.top + coordinate.height + WalkthroughComponent.minimalMargin) + 'px';
                    this._contentPosition = 'below';
                }
                else {
                    element.style.top = (coordinate.top - height - WalkthroughComponent.minimalMargin) + 'px';
                    this._contentPosition = 'above';
                }
            }
        }
        else {
            element.style.top = (this._walkthroughService.getHeightOfPage() / 2 - height / 2) + 'px';
        }
    };
    /**
     * @param {?} coordinate
     * @param {?} verticalContentSpacing
     * @return {?}
     */
    WalkthroughContainerComponent.prototype.arrowPosition = /**
     * @param {?} coordinate
     * @param {?} verticalContentSpacing
     * @return {?}
     */
    function (coordinate, verticalContentSpacing) {
        var /** @type {?} */ contentBlockElement = /** @type {?} */ (this.contentBlock.nativeElement);
        var /** @type {?} */ contentBlockCoordinates = this._walkthroughService.retrieveCoordinates(contentBlockElement);
        var /** @type {?} */ startLeft = contentBlockCoordinates.left + contentBlockCoordinates.width / 2;
        var /** @type {?} */ startTop = contentBlockCoordinates.top + contentBlockCoordinates.height;
        var /** @type {?} */ centerTop;
        var /** @type {?} */ centerLeft;
        var /** @type {?} */ endLeft = coordinate.left;
        var /** @type {?} */ endTop = coordinate.top + this.marginZonePx.top;
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
            var /** @type {?} */ directStartLeft = startLeft;
            var /** @type {?} */ directStartTop = startTop;
            if (this._contentPosition === 'top' || this._contentPosition === 'bottom') {
                directStartLeft = contentBlockCoordinates.left + (contentBlockCoordinates.width / 2);
                directStartTop = (this._contentPosition === 'top') ?
                    (contentBlockCoordinates.top + contentBlockCoordinates.height) :
                    (contentBlockCoordinates.top);
                // we use direct curve only if the arrow don't cross the content, otherwise, we use double curved
                if ((this._contentPosition === 'top' && directStartTop < (endTop - WalkthroughComponent.minimalMargin)) ||
                    (this._contentPosition === 'bottom' && directStartTop > (endTop + WalkthroughComponent.minimalMargin))) {
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
    /**
     * stop the walkthrough : hide the container and change to pause at true
     * @return {?}
     */
    WalkthroughContainerComponent.prototype.stop = /**
     * stop the walkthrough : hide the container and change to pause at true
     * @return {?}
     */
    function () {
        if (this.parent && !this.pause && this.show) {
            this.show = false;
            this.pause = true;
        }
    };
    /**
     * continue the walkthrough if is stopped : show the container and change to pause at false
     */
    /**
     * continue the walkthrough if is stopped : show the container and change to pause at false
     * @param {?=} unpause
     * @return {?}
     */
    WalkthroughContainerComponent.prototype.continue = /**
     * continue the walkthrough if is stopped : show the container and change to pause at false
     * @param {?=} unpause
     * @return {?}
     */
    function (unpause) {
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
    /**
     * @return {?}
     */
    WalkthroughContainerComponent.prototype.open = /**
     * @return {?}
     */
    function () {
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
    /**
     * @return {?}
     */
    WalkthroughContainerComponent.prototype.previous = /**
     * @return {?}
     */
    function () {
        this.close(false, false);
        // we check if previous walkthrough is not disabled
        var /** @type {?} */ current = this.parent;
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
    /**
     * @return {?}
     */
    WalkthroughContainerComponent.prototype.next = /**
     * @return {?}
     */
    function () {
        this.close(false, false);
        // we check if next walkthrough is not disabled
        var /** @type {?} */ current = this.parent;
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
    /**
     * @param {?=} finishLink
     * @param {?=} closeWalkthrough
     * @return {?}
     */
    WalkthroughContainerComponent.prototype.close = /**
     * @param {?=} finishLink
     * @param {?=} closeWalkthrough
     * @return {?}
     */
    function (finishLink, closeWalkthrough) {
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
    WalkthroughContainerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'walkthrough-container',
                    styles: [":host{display:block;position:absolute;z-index:1;top:0;left:0;width:99.9%;min-height:100%}:host.hide{display:none}:host.cursor{cursor:pointer}:host.backdrop{background-color:rgba(0,0,0,.6)}button{background:0 0;border:0;color:#fff}.wkt-zone{position:absolute}.wkt-zone.hide{display:none}.wkt-zone.backdrop{box-shadow:0 0 0 2200px rgba(0,0,0,.6)}.wkt-zone.glow{box-shadow:0 0 4px 2px #ff6,0 0 9px 0 #ff6,0 0 36px #ff6}.wkt-zone.clickable{cursor:pointer}.wkt-zone.highlight{-webkit-animation:.45s 4 highlight;animation:.45s 4 highlight}.wkt-container{position:relative}.wkt-content-block{position:absolute;margin:1em;padding:6px;z-index:1;color:#fff;min-width:calc(320px - 2em)}.wkt-content-block.hide{display:none}.wkt-content-block.darken{background-color:rgba(0,0,0,.6)}.wkt-close+.wkt-content{margin-top:1.3em}.wkt-close{position:absolute;right:1em;cursor:pointer}.wkt-navigate{display:flex;flex-wrap:wrap;justify-content:center}.wkt-navigate>button{padding:6px;font-size:120%}.wkt-navigate>button:hover{cursor:pointer;text-decoration:underline}.wkt-previous-link::before{content:'<< '}.wkt-next-link::after{content:' >>'}div.hide{display:none}svg{overflow:visible;position:absolute;top:-1px;left:-1px;border:1px solid transparent}#wkt-arrow>path{stroke-width:0}.wkt-arrow-path{stroke-width:2px;fill:none}@-webkit-keyframes highlight{0%,100%{background-color:none}50%{background-color:rgba(255,255,255,.8)}}@keyframes highlight{0%,100%{background-color:none}50%{background-color:rgba(255,255,255,.8)}}@media screen and (min-width:1920px),screen and (min-height:1920px){.wkt-zone.backdrop{box-shadow:0 0 0 4400px rgba(0,0,0,.6)}}@media screen and (min-width:3840px),screen and (min-height:3840px){.wkt-zone.backdrop{box-shadow:0 0 0 8800px rgba(0,0,0,.6)}}_:default:not(:root:root),.wkt-zone.backdrop{box-shadow:0 0 0 2000px rgba(0,0,0,.6)!important}"],
                    template: "<div class=\"wkt-container\">\n    <div class=\"wkt-zone\"\n         #zone\n         (click)=\"clickZone($event)\"\n         [class.hide]=\"!hasHighlightZone\"\n         [class.backdrop]=\"hasBackdrop\"\n         [class.glow]=\"hasGlow\"\n         [class.clickable]=\"hasClickable\"\n         [class.highlight]=\"hasHighlight\"\n         [style.padding]=\"marginZone\"></div>\n    <div class=\"wkt-content-block\"\n         [class.hide]=\"hideOther\"\n         [class.darken]=\"contentStyle === 'draken'\"\n         #contentBlock>\n        <button type=\"button\"\n                class=\"wkt-close\"\n                *ngIf=\"hasCloseButton\"\n                (click)=\"close()\">\u2716</button>\n        <div class=\"wkt-content\">\n            <p *ngIf=\"contentText\">{{contentText}}</p>\n            <ng-template cdkPortalHost></ng-template>\n        </div>\n        <div class=\"wkt-navigate\"\n             *ngIf=\"hasPrevious||hasNext||hasFinish\">\n            <button type=\"button\"\n                    class=\"wkt-previous-link\"\n                    *ngIf=\"hasPrevious\"\n                    (click)=\"previous()\">{{text.previous}}</button>\n            <button type=\"button\"\n                    class=\"wkt-next-link\"\n                    *ngIf=\"hasNext\"\n                    (click)=\"next()\">{{text.next}}</button>\n            <button type=\"button\"\n                    class=\"wkt-finish-link\"\n                    *ngIf=\"hasFinish\"\n                    (click)=\"close(true)\">{{text.close}}</button>\n        </div>\n    </div>\n    <div *ngIf=\"hasArrow\"\n         [class.hide]=\"hideOther\">\n        <svg version=\"1.1\"\n             xmlns=\"http://www.w3.org/2000/svg\"\n             width=\"100%\"\n             height=\"100%\">\n            <defs>\n                <marker id=\"wkt-arrow\"\n                        viewBox=\"0 0 10 10\"\n                        refX=\"8\"\n                        refY=\"5\"\n                        markerUnits=\"strokeWidth\"\n                        orient=\"auto\"\n                        markerWidth=\"10\"\n                        markerHeight=\"10\">\n                    <polyline points=\"0,0 10,5 0,10 5,5\"\n                              stroke-width=\"0\"\n                              [attr.fill]=\"arrowColor || '#FFF'\" />\n                </marker>\n            </defs>\n            <path class=\"wkt-arrow-path\"\n                  [attr.d]=\"arrowPath\"\n                  [attr.stroke]=\"arrowColor || '#FFF'\"\n                  [attr.marker-end]=\"markerUrl\" />\n        </svg>\n    </div>\n</div>"
                },] },
    ];
    /** @nocollapse */
    WalkthroughContainerComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
        { type: WalkthroughService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    WalkthroughContainerComponent.propDecorators = {
        _portalHost: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalHostDirective"],] }],
        content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['content',] }],
        contentBlock: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['contentBlock',] }],
        zone: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['zone',] }],
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.id',] }],
        hide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.hide',] }],
        cursor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.cursor',] }],
        backdrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.backdrop',] }],
        click: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }]
    };
    return WalkthroughContainerComponent;
}(_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["BasePortalHost"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ nextUniqueId$1 = 0;
var WalkthroughFlowComponent = /** @class */ (function () {
    function WalkthroughFlowComponent() {
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.finished = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.contentStyle = 'draken';
        this.marginZone = null;
        this._uid = "walkthrough-flow-" + nextUniqueId$1++;
    }
    Object.defineProperty(WalkthroughFlowComponent.prototype, "id", {
        get: /**
         * @return {?}
         */
        function () { return this._id; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._id = value || this._uid; },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    WalkthroughFlowComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () {
            _this.init();
        }, 0);
    };
    /**
     * @return {?}
     */
    WalkthroughFlowComponent.prototype.init = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ prevComp = null;
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
            if (!walkthrough.showArrow && booleanValue(_this.showArrow)) {
                walkthrough.showArrow = _this.showArrow;
            }
            if (!walkthrough.rootElement && _this.rootElement) {
                walkthrough.rootElement = _this.rootElement;
            }
            if (!walkthrough.closeButton && booleanValue(_this.closeButton)) {
                walkthrough.closeButton = _this.closeButton;
            }
            if (walkthrough.closeAnywhere && !booleanValue(_this.closeAnywhere)) {
                walkthrough.closeAnywhere = _this.closeAnywhere;
            }
            if (!walkthrough.finishButton && booleanValue(_this.finishButton)) {
                walkthrough.finishButton = _this.finishButton;
            }
            if (!walkthrough.focusBackdrop && booleanValue(_this.focusBackdrop)) {
                walkthrough.focusBackdrop = _this.focusBackdrop;
            }
            if (!walkthrough.focusGlow && booleanValue(_this.focusGlow)) {
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
    /**
     * @return {?}
     */
    WalkthroughFlowComponent.prototype.start = /**
     * @return {?}
     */
    function () {
        this.walkthroughComponents.first.open();
    };
    WalkthroughFlowComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ng-walkthrough-flow',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    WalkthroughFlowComponent.ctorParameters = function () { return []; };
    WalkthroughFlowComponent.propDecorators = {
        walkthroughComponents: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [WalkthroughComponent,] }],
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
    return WalkthroughFlowComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var WalkthroughModule = /** @class */ (function () {
    function WalkthroughModule() {
    }
    WalkthroughModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"]
                    ],
                    declarations: [
                        WalkthroughFlowComponent,
                        WalkthroughComponent,
                        WalkthroughContainerComponent
                    ],
                    exports: [
                        WalkthroughFlowComponent,
                        WalkthroughComponent,
                        WalkthroughContainerComponent
                    ],
                    entryComponents: [
                        WalkthroughContainerComponent
                    ],
                    providers: [
                        WalkthroughService
                    ]
                },] },
    ];
    return WalkthroughModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci13YWxrdGhyb3VnaC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vYW5ndWxhci13YWxrdGhyb3VnaC9saWIvd2Fsa3Rocm91Z2gtdG9vbHMudHMiLCJuZzovL2FuZ3VsYXItd2Fsa3Rocm91Z2gvbGliL3dhbGt0aHJvdWdoLnNlcnZpY2UudHMiLCJuZzovL2FuZ3VsYXItd2Fsa3Rocm91Z2gvbGliL3dhbGt0aHJvdWdoLXRleHQudHMiLCJuZzovL2FuZ3VsYXItd2Fsa3Rocm91Z2gvbGliL3dhbGt0aHJvdWdoLmNvbXBvbmVudC50cyIsIm5nOi8vYW5ndWxhci13YWxrdGhyb3VnaC9saWIvd2Fsa3Rocm91Z2gtY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vYW5ndWxhci13YWxrdGhyb3VnaC9saWIvd2Fsa3Rocm91Z2gtZmxvdy5jb21wb25lbnQudHMiLCJuZzovL2FuZ3VsYXItd2Fsa3Rocm91Z2gvbGliL2FuZ3VsYXItd2Fsa3Rocm91Z2gubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFdhbGt0aHJvdWdoQ29tcG9uZW50IH0gZnJvbSAnLi93YWxrdGhyb3VnaC5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXYWxrdGhyb3VnaEVsZW1lbnRDb29yZGluYXRlIHtcclxuICAgIHRvcDogbnVtYmVyO1xyXG4gICAgbGVmdDogbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgbWFyZ2luOiBNYXJnaW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBNYXJnaW4ge1xyXG4gICAgdG9wOiBudW1iZXI7XHJcbiAgICBsZWZ0OiBudW1iZXI7XHJcbiAgICByaWdodDogbnVtYmVyO1xyXG4gICAgYm90dG9tOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBib29sZWFuVmFsdWUgPSAodmFsdWU6IHN0cmluZyB8IGJvb2xlYW4pID0+IHtcclxuICAgIHJldHVybiB2YWx1ZSA9PT0gJ3RydWUnIHx8IHZhbHVlID09PSB0cnVlO1xyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIFdhbGt0aHJvdWdoRXZlbnQge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIGNvbXBvbmVudDogV2Fsa3Rocm91Z2hDb21wb25lbnQsXHJcbiAgICAgICAgcHVibGljIGZvY3VzRWxlbWVudDogSFRNTEVsZW1lbnRcclxuICAgICkgeyB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBXYWxrdGhyb3VnaE1hcmdpbiB7XHJcblxyXG4gICAgc3RhdGljIHBhcnNlUG9pbnRzKHBvaW50czogc3RyaW5nKTogV2Fsa3Rocm91Z2hNYXJnaW4ge1xyXG4gICAgICAgIGxldCBwb2ludHNQeDogV2Fsa3Rocm91Z2hNYXJnaW47XHJcbiAgICAgICAgaWYgKHBvaW50cy5tYXRjaCgvXlxcZCsoPzpcXHMrXFxkKykqJC8pKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNwbGl0ID0gcG9pbnRzLnNwbGl0KC9cXHMrLykubWFwKGkgPT4gcGFyc2VGbG9hdChpKSk7XHJcbiAgICAgICAgICAgIHBvaW50c1B4ID0gbmV3IFdhbGt0aHJvdWdoTWFyZ2luKHNwbGl0WzBdLCBzcGxpdFsxXSwgc3BsaXRbMl0sIHNwbGl0WzNdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBvaW50c1B4IHx8IG5ldyBXYWxrdGhyb3VnaE1hcmdpbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyB0b3AgPSAwLFxyXG4gICAgICAgIHB1YmxpYyByaWdodD86IG51bWJlcixcclxuICAgICAgICBwdWJsaWMgYm90dG9tPzogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBsZWZ0PzogbnVtYmVyLFxyXG4gICAgKSB7XHJcbiAgICAgICAgaWYgKHJpZ2h0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5yaWdodCA9IHRvcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJvdHRvbSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYm90dG9tID0gdG9wO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGVmdCA9PT0gdW5kZWZpbmVkICYmIHJpZ2h0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5sZWZ0ID0gdG9wO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobGVmdCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGVmdCA9IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFdhbGt0aHJvdWdoRWxlbWVudENvb3JkaW5hdGUsIFdhbGt0aHJvdWdoTWFyZ2luIH0gZnJvbSAnLi93YWxrdGhyb3VnaC10b29scyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBXYWxrdGhyb3VnaFNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgX292ZXJmbG93UmVnZXggPSAvKGF1dG98c2Nyb2xsKS87XHJcblxyXG4gICAgcmV0cmlldmVDb29yZGluYXRlcyhlbGVtZW50OiBIVE1MRWxlbWVudCwgbWFyZ2luPzogV2Fsa3Rocm91Z2hNYXJnaW4pOiBXYWxrdGhyb3VnaEVsZW1lbnRDb29yZGluYXRlIHtcclxuICAgICAgICBjb25zdCBjbGllbnRyZWN0OiBDbGllbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBjb25zdCBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xyXG5cclxuICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IHtcclxuICAgICAgICAgICAgdG9wOiBjbGllbnRyZWN0LnRvcCAtIChtYXJnaW4gPyBtYXJnaW4udG9wIDogMCksXHJcbiAgICAgICAgICAgIGhlaWdodDogY2xpZW50cmVjdC5oZWlnaHQsXHJcbiAgICAgICAgICAgIHdpZHRoOiBjbGllbnRyZWN0LndpZHRoLFxyXG4gICAgICAgICAgICBsZWZ0OiBjbGllbnRyZWN0LmxlZnQgLSAobWFyZ2luID8gbWFyZ2luLmxlZnQgOiAwKSxcclxuICAgICAgICAgICAgbWFyZ2luOiB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IHBhcnNlRmxvYXQoc3R5bGUubWFyZ2luVG9wKSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBwYXJzZUZsb2F0KHN0eWxlLm1hcmdpblJpZ2h0KSxcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogcGFyc2VGbG9hdChzdHlsZS5tYXJnaW5Cb3R0b20pLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogcGFyc2VGbG9hdChzdHlsZS5tYXJnaW5MZWZ0KSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29vcmRpbmF0ZXMudG9wICs9IHRoaXMuZ2V0VG9wKCk7XHJcbiAgICAgICAgcmV0dXJuIGNvb3JkaW5hdGVzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRvcCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcclxuICAgIH1cclxuXHJcbiAgICBnZXREb2N1bWVudEhlaWdodCgpIHtcclxuICAgICAgICAvLyBIZWlnaHQgb2YgZW50aXJlIGJvZHkgOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTE0Nzc2OFxyXG4gICAgICAgIGNvbnN0IGJvZHlfaGVpZ2h0ID0gTWF0aC5tYXgoXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0LFxyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodCxcclxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCxcclxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCxcclxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldEhlaWdodFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiBNYXRoLm1heCh0aGlzLmdldEhlaWdodE9mUGFnZSgpICsgdGhpcy5nZXRUb3AoKSwgYm9keV9oZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHNjcm9sbEludG9WaWV3SWZPdXRPZlZpZXcoZWxlbWVudDogSFRNTEVsZW1lbnQsIG1hcmdpblRvcCA9IDApIHtcclxuICAgICAgICBjb25zdCB0b3BPZlBhZ2UgPSB0aGlzLmdldFRvcCgpO1xyXG4gICAgICAgIGNvbnN0IGhlaWdodE9mUGFnZSA9IHRoaXMuZ2V0SGVpZ2h0T2ZQYWdlKCk7XHJcbiAgICAgICAgbGV0IGVsZW1lbnRZID0gMDtcclxuICAgICAgICBsZXQgZWxlbWVudEggPSAwO1xyXG5cclxuICAgICAgICBsZXQgcGFyZW50ID0gZWxlbWVudDtcclxuICAgICAgICB3aGlsZSAocGFyZW50ICYmIHBhcmVudCAhPT0gZG9jdW1lbnQuYm9keSkge1xyXG4gICAgICAgICAgICBlbGVtZW50WSArPSBwYXJlbnQub2Zmc2V0VG9wO1xyXG4gICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQub2Zmc2V0UGFyZW50IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbGVtZW50SCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xyXG5cclxuICAgICAgICBpZiAoKHRvcE9mUGFnZSArIGhlaWdodE9mUGFnZSkgPCAoZWxlbWVudFkgKyBlbGVtZW50SCkpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5zY3JvbGxJbnRvVmlldyhmYWxzZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50WSA8IHRvcE9mUGFnZSkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnNjcm9sbEludG9WaWV3KHRydWUpO1xyXG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsQnkoMCwgLTMwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyB0ZXN0IG9mIG92ZXJmbG93IGVsZW1lbnRcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBlbGVtZW50O1xyXG4gICAgICAgICAgICB3aGlsZSAoY3VycmVudCAmJiBjdXJyZW50ICE9PSBkb2N1bWVudC5ib2R5KSB7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnQgPSB0aGlzLmdldFNjcm9sbFBhcmVudChjdXJyZW50KTtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Lm9mZnNldFRvcCArIGN1cnJlbnQub2Zmc2V0SGVpZ2h0IC0gcGFyZW50LnNjcm9sbFRvcCA+IHBhcmVudC5vZmZzZXRIZWlnaHQgfHxcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Lm9mZnNldExlZnQgKyBjdXJyZW50Lm9mZnNldFdpZHRoIC0gcGFyZW50LnNjcm9sbExlZnQgPiBwYXJlbnQub2Zmc2V0V2lkdGgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zY3JvbGxJbnRvVmlldygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxCeSgwLCAtMzApO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY3VycmVudCA9IHBhcmVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzY3JvbGxUb1RvcEVsZW1lbnQoZWxlbWVudDE6IEhUTUxFbGVtZW50LCBlbGVtZW50MjogSFRNTEVsZW1lbnQsIG1hcmdpbjogV2Fsa3Rocm91Z2hNYXJnaW4pIHtcclxuICAgICAgICBpZiAoZWxlbWVudDEgJiYgZWxlbWVudDIpIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudDFQb3NpdGlvbiA9IHRoaXMucmV0cmlldmVDb29yZGluYXRlcyhlbGVtZW50MSwgbWFyZ2luKTtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudDJQb3NpdGlvbiA9IHRoaXMucmV0cmlldmVDb29yZGluYXRlcyhlbGVtZW50MiwgbWFyZ2luKTtcclxuICAgICAgICAgICAgY29uc3QgbWluWCA9IE1hdGgubWluKGVsZW1lbnQxUG9zaXRpb24ubGVmdCwgZWxlbWVudDJQb3NpdGlvbi5sZWZ0KTtcclxuICAgICAgICAgICAgY29uc3QgbWluWSA9IE1hdGgubWluKGVsZW1lbnQxUG9zaXRpb24udG9wLCBlbGVtZW50MlBvc2l0aW9uLnRvcCk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyhtaW5YIC0gMjAsIG1pblkgLSAyMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFNjcm9sbFBhcmVudChlbGVtZW50OiBIVE1MRWxlbWVudCk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgICBsZXQgc2Nyb2xsUGFyZW50O1xyXG4gICAgICAgIGxldCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XHJcbiAgICAgICAgY29uc3QgZXhjbHVkZVN0YXRpY1BhcmVudCA9IHN0eWxlLnBvc2l0aW9uID09PSAnYWJzb2x1dGUnO1xyXG5cclxuICAgICAgICBpZiAoc3R5bGUucG9zaXRpb24gIT09ICdmaXhlZCcpIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBwYXJlbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIHdoaWxlIChwYXJlbnQgJiYgcGFyZW50ICE9PSBkb2N1bWVudC5ib2R5KSB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUocGFyZW50KTtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAhKGV4Y2x1ZGVTdGF0aWNQYXJlbnQgJiYgc3R5bGUucG9zaXRpb24gPT09ICdzdGF0aWMnKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX292ZXJmbG93UmVnZXgudGVzdChzdHlsZS5vdmVyZmxvdyArIHN0eWxlLm92ZXJmbG93WSArIHN0eWxlLm92ZXJmbG93WClcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbFBhcmVudCA9IHBhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzY3JvbGxQYXJlbnQgfHwgZG9jdW1lbnQuYm9keTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRIZWlnaHRPZlBhZ2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IHx8IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0O1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgV2Fsa3Rocm91Z2hUZXh0IHtcclxuICAgIHByZXZpb3VzID89ICdQcmV2aW91cyc7XHJcbiAgICBuZXh0ID89ICdOZXh0JztcclxuICAgIGNsb3NlID89ICdDbG9zZSc7XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICAgIFR5cGUsXHJcbiAgICBUZW1wbGF0ZVJlZixcclxuICAgIElucHV0LFxyXG4gICAgT3V0cHV0LFxyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgRW1iZWRkZWRWaWV3UmVmLFxyXG4gICAgQ29tcG9uZW50UmVmLFxyXG4gICAgQXBwbGljYXRpb25SZWYsXHJcbiAgICBJbmplY3RvcixcclxuICAgIEhvc3RMaXN0ZW5lcixcclxuICAgIEFmdGVyVmlld0luaXQsXHJcbiAgICBSZW5kZXJlcjIsXHJcbiAgICBFdmVudEVtaXR0ZXJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCwgQ29tcG9uZW50VHlwZSwgUG9ydGFsSW5qZWN0b3IsIFRlbXBsYXRlUG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XHJcbmltcG9ydCB7IFdhbGt0aHJvdWdoQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi93YWxrdGhyb3VnaC1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgV2Fsa3Rocm91Z2hTZXJ2aWNlIH0gZnJvbSAnLi93YWxrdGhyb3VnaC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgV2Fsa3Rocm91Z2hUZXh0IH0gZnJvbSAnLi93YWxrdGhyb3VnaC10ZXh0JztcclxuaW1wb3J0IHsgV2Fsa3Rocm91Z2hFdmVudCwgYm9vbGVhblZhbHVlLCBXYWxrdGhyb3VnaEVsZW1lbnRDb29yZGluYXRlLCBXYWxrdGhyb3VnaE1hcmdpbiB9IGZyb20gJy4vd2Fsa3Rocm91Z2gtdG9vbHMnO1xyXG5cclxubGV0IG5leHRVbmlxdWVJZCA9IDA7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbmctd2Fsa3Rocm91Z2gnLFxyXG4gICAgdGVtcGxhdGU6ICcnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXYWxrdGhyb3VnaENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF93YWxrdGhyb3VnaENvbnRhaW5lcjogQ29tcG9uZW50UmVmPFdhbGt0aHJvdWdoQ29udGFpbmVyQ29tcG9uZW50PiA9IG51bGw7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfd2Fsa3Rocm91Z2hDb250YWluZXJDcmVhdGluZyA9IGZhbHNlO1xyXG4gICAgcHVibGljIHN0YXRpYyBtaW5pbWFsTWFyZ2luID0gMzA7XHJcblxyXG4gICAgQE91dHB1dCgpIGNsb3NlZDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpIGZpbmlzaGVkOiBFdmVudEVtaXR0ZXI8V2Fsa3Rocm91Z2hFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgcmVhZHk6IEV2ZW50RW1pdHRlcjxXYWxrdGhyb3VnaEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBASW5wdXQoKSBmb2N1c0VsZW1lbnRDU1NDbGFzczogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgcm9vdEVsZW1lbnQ6IHN0cmluZztcclxuXHJcbiAgICBASW5wdXQoKSBmb2N1c0VsZW1lbnRTZWxlY3Rvcjogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgdHlwZVNlbGVjdG9yOiAnZWxlbWVudCcgfCAnem9uZScgPSAnZWxlbWVudCc7XHJcbiAgICBASW5wdXQoKSBmb2N1c0NsaWNrOiAoZXZlbnQ6IEV2ZW50LCBjb250ZW50OiBXYWxrdGhyb3VnaENvbnRhaW5lckNvbXBvbmVudCkgPT4ge307XHJcbiAgICBASW5wdXQoKSByYWRpdXM6IHN0cmluZztcclxuXHJcbiAgICBASW5wdXQoKSBwcmV2aW91c1N0ZXA6IFdhbGt0aHJvdWdoQ29tcG9uZW50O1xyXG4gICAgQElucHV0KCkgbmV4dFN0ZXA6IFdhbGt0aHJvdWdoQ29tcG9uZW50O1xyXG4gICAgQElucHV0KCkgdGV4dHM6IFdhbGt0aHJvdWdoVGV4dDtcclxuXHJcbiAgICBASW5wdXQoKSBjb250ZW50VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgICBASW5wdXQoKSBjb250ZW50VGV4dDogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgY29udGVudFN0eWxlOiAnbm9uZScgfCAnZHJha2VuJyA9ICdkcmFrZW4nO1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbWFyZ2luWm9uZSgpIHsgcmV0dXJuIHRoaXMuX21hcmdpblpvbmU7IH1cclxuICAgIHNldCBtYXJnaW5ab25lKHBvaW50czogc3RyaW5nIHwgbnVsbCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9tYXJnaW5ab25lICE9PSBwb2ludHMpIHtcclxuICAgICAgICAgICAgaWYgKHBvaW50cyA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbWFyZ2luWm9uZSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX21hcmdpblpvbmVQeCA9IFdhbGt0aHJvdWdoTWFyZ2luLnBhcnNlUG9pbnRzKHBvaW50cyk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9tYXJnaW5ab25lUHggIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX21hcmdpblpvbmUgPSBwb2ludHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBhcnJvd0NvbG9yKCkgeyByZXR1cm4gdGhpcy5fYXJyb3dDb2xvcjsgfVxyXG4gICAgc2V0IGFycm93Q29sb3IoY29sb3I6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLl9hcnJvd0NvbG9yICE9PSBjb2xvcikge1xyXG4gICAgICAgICAgICB0aGlzLl9hcnJvd0NvbG9yID0gY29sb3I7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9nZXRJbnN0YW5jZSgpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9nZXRJbnN0YW5jZSgpLmFycm93Q29sb3IgPSB0aGlzLl9hcnJvd0NvbG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpIGFuaW1hdGlvbjogJ25vbmUnIHwgJ2xpbmVhcicgPSAnbm9uZSc7XHJcbiAgICBASW5wdXQoKSBhbmltYXRpb25EZWxheXMgPSAwO1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgaWQoKSB7IHJldHVybiB0aGlzLl9pZDsgfVxyXG4gICAgc2V0IGlkKHZhbHVlOiBzdHJpbmcpIHsgdGhpcy5faWQgPSB2YWx1ZSB8fCB0aGlzLl91aWQ7IH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGFsaWduQ29udGVudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYWxpZ25Db250ZW50O1xyXG4gICAgfVxyXG4gICAgc2V0IGFsaWduQ29udGVudCh2YWx1ZTogJ2xlZnQnIHwgJ2NlbnRlcicgfCAncmlnaHQnKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2FsaWduQ29udGVudCAhPT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5fYWxpZ25Db250ZW50ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUVsZW1lbnRQb3NpdGlvbnModGhpcy5fZ2V0SW5zdGFuY2UoKSk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2FsaWduQ29udGVudCA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHZlcnRpY2FsQWxpZ25Db250ZW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92ZXJ0aWNhbEFsaWduQ29udGVudDtcclxuICAgIH1cclxuICAgIHNldCB2ZXJ0aWNhbEFsaWduQ29udGVudCh2YWx1ZTogJ2Fib3ZlJyB8ICd0b3AnIHwgJ2NlbnRlcicgfCAnYm90dG9tJyB8ICdiZWxvdycpIHtcclxuICAgICAgICBpZiAodGhpcy5fdmVydGljYWxBbGlnbkNvbnRlbnQgIT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZlcnRpY2FsQWxpZ25Db250ZW50ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUVsZW1lbnRQb3NpdGlvbnModGhpcy5fZ2V0SW5zdGFuY2UoKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fdmVydGljYWxBbGlnbkNvbnRlbnQgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBjb250ZW50U3BhY2luZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29udGVudFNwYWNpbmc7XHJcbiAgICB9XHJcbiAgICBzZXQgY29udGVudFNwYWNpbmcodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHZhbHVlID0gTWF0aC5tYXgoV2Fsa3Rocm91Z2hDb21wb25lbnQubWluaW1hbE1hcmdpbiwgdmFsdWUpO1xyXG4gICAgICAgIGlmICh0aGlzLl9jb250ZW50U3BhY2luZyAhPT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5fY29udGVudFNwYWNpbmcgPSB2YWx1ZSAqIDE7XHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUVsZW1lbnRQb3NpdGlvbnModGhpcy5fZ2V0SW5zdGFuY2UoKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fY29udGVudFNwYWNpbmcgPSB2YWx1ZSAqIDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdmVydGljYWxDb250ZW50U3BhY2luZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdmVydGljYWxDb250ZW50U3BhY2luZztcclxuICAgIH1cclxuICAgIHNldCB2ZXJ0aWNhbENvbnRlbnRTcGFjaW5nKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB2YWx1ZSA9IE1hdGgubWF4KFdhbGt0aHJvdWdoQ29tcG9uZW50Lm1pbmltYWxNYXJnaW4sIHZhbHVlKTtcclxuICAgICAgICBpZiAodGhpcy5fdmVydGljYWxDb250ZW50U3BhY2luZyAhPT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5fdmVydGljYWxDb250ZW50U3BhY2luZyA9IHZhbHVlICogMTtcclxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlRWxlbWVudFBvc2l0aW9ucyh0aGlzLl9nZXRJbnN0YW5jZSgpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl92ZXJ0aWNhbENvbnRlbnRTcGFjaW5nID0gdmFsdWUgKiAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGNsb3NlQnV0dG9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9oYXNDbG9zZUJ1dHRvbjtcclxuICAgIH1cclxuICAgIHNldCBjbG9zZUJ1dHRvbih2YWx1ZTogc3RyaW5nIHwgYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX2hhc0Nsb3NlQnV0dG9uID0gYm9vbGVhblZhbHVlKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGNsb3NlQW55d2hlcmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hhc0Nsb3NlQW55d2hlcmU7XHJcbiAgICB9XHJcbiAgICBzZXQgY2xvc2VBbnl3aGVyZSh2YWx1ZTogc3RyaW5nIHwgYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX2hhc0Nsb3NlQW55d2hlcmUgPSBib29sZWFuVmFsdWUodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc2hvd0Fycm93KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9oYXNBcnJvdztcclxuICAgIH1cclxuICAgIHNldCBzaG93QXJyb3codmFsdWU6IHN0cmluZyB8IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9oYXNBcnJvdyA9IGJvb2xlYW5WYWx1ZSh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBmaW5pc2hCdXR0b24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hhc0ZpbmlzaDtcclxuICAgIH1cclxuICAgIHNldCBmaW5pc2hCdXR0b24odmFsdWU6IHN0cmluZyB8IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9oYXNGaW5pc2ggPSBib29sZWFuVmFsdWUodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZm9jdXNIaWdobGlnaHRBbmltYXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hhc0hpZ2hsaWdodEFuaW1hdGlvbjtcclxuICAgIH1cclxuICAgIHNldCBmb2N1c0hpZ2hsaWdodEFuaW1hdGlvbih2YWx1ZTogc3RyaW5nIHwgYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX2hhc0hpZ2hsaWdodEFuaW1hdGlvbiA9IGJvb2xlYW5WYWx1ZSh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBmb2N1c0JhY2tkcm9wKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9oYXNCYWNrZHJvcDtcclxuICAgIH1cclxuICAgIHNldCBmb2N1c0JhY2tkcm9wKHZhbHVlOiBzdHJpbmcgfCBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5faGFzQmFja2Ryb3AgPSBib29sZWFuVmFsdWUodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZm9jdXNHbG93KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9oYXNHbG93O1xyXG4gICAgfVxyXG4gICAgc2V0IGZvY3VzR2xvdyh2YWx1ZTogc3RyaW5nIHwgYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX2hhc0dsb3cgPSBib29sZWFuVmFsdWUodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZGlzYWJsZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xyXG4gICAgfVxyXG4gICAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fZGlzYWJsZWQgPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLl9nZXRJbnN0YW5jZSgpO1xyXG4gICAgICAgIGlmIChpbnN0YW5jZSkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlLmhhc1ByZXZpb3VzID0gdGhpcy5faGFzUHJldmlvdXNTdGVwKGluc3RhbmNlKTtcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlLmhhc05leHQgPSB0aGlzLl9oYXNOZXh0U3RlcChpbnN0YW5jZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWluc3RhbmNlLmhhc05leHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZS5oYXNGaW5pc2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZS5oYXNGaW5pc2ggPSA8Ym9vbGVhbj5pbnN0YW5jZS5wYXJlbnQuZmluaXNoQnV0dG9uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCA1MCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2lkOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF91aWQgPSBgd2Fsa3Rocm91Z2gtJHtuZXh0VW5pcXVlSWQrK31gO1xyXG4gICAgcHJpdmF0ZSBfcmVhZHlIYXNCZWVuRW1pdGVkID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9kaXNwbGF5ID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9oYXNIaWdobGlnaHRBbmltYXRpb24gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX2hhc0JhY2tkcm9wID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9oYXNHbG93ID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9oYXNGaW5pc2ggPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX2hhc0Fycm93ID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9oYXNDbG9zZUJ1dHRvbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfaGFzQ2xvc2VBbnl3aGVyZSA9IHRydWU7XHJcbiAgICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfYXJyb3dDb2xvcjogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfbWFyZ2luWm9uZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfbWFyZ2luWm9uZVB4ID0gbmV3IFdhbGt0aHJvdWdoTWFyZ2luKCk7XHJcbiAgICBwcml2YXRlIF9hbGlnbkNvbnRlbnQ6ICdsZWZ0JyB8ICdjZW50ZXInIHwgJ3JpZ2h0JyA9ICdsZWZ0JztcclxuICAgIHByaXZhdGUgX3ZlcnRpY2FsQWxpZ25Db250ZW50OiAnYWJvdmUnIHwgJ3RvcCcgfCAnY2VudGVyJyB8ICdib3R0b20nIHwgJ2JlbG93JyA9ICd0b3AnO1xyXG4gICAgcHJpdmF0ZSBfY29udGVudFNwYWNpbmcgPSAwO1xyXG4gICAgcHJpdmF0ZSBfdmVydGljYWxDb250ZW50U3BhY2luZyA9IDUwO1xyXG4gICAgcHJpdmF0ZSBfZm9jdXNFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICAgIHByaXZhdGUgX2ZvY3VzRWxlbWVudEVuZDogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIF9vZmZzZXRDb29yZGluYXRlczogV2Fsa3Rocm91Z2hFbGVtZW50Q29vcmRpbmF0ZTtcclxuICAgIHByaXZhdGUgX3dpbmRvd1dpZHRoOiBudW1iZXI7XHJcblxyXG4gICAgc3RhdGljIHdhbGt0aHJvdWdoU3RvcCgpIHtcclxuICAgICAgICBpZiAoV2Fsa3Rocm91Z2hDb21wb25lbnQuX3dhbGt0aHJvdWdoQ29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIFdhbGt0aHJvdWdoQ29tcG9uZW50Ll93YWxrdGhyb3VnaENvbnRhaW5lci5pbnN0YW5jZS5zdG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB3YWxrdGhyb3VnaEhhc1Nob3coKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIFdhbGt0aHJvdWdoQ29tcG9uZW50Ll93YWxrdGhyb3VnaENvbnRhaW5lclxyXG4gICAgICAgICAgICA/IFdhbGt0aHJvdWdoQ29tcG9uZW50Ll93YWxrdGhyb3VnaENvbnRhaW5lci5pbnN0YW5jZS5zaG93XHJcbiAgICAgICAgICAgIDogZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHdhbGt0aHJvdWdoSGFzUGF1c2UoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIFdhbGt0aHJvdWdoQ29tcG9uZW50Ll93YWxrdGhyb3VnaENvbnRhaW5lclxyXG4gICAgICAgICAgICA/IFdhbGt0aHJvdWdoQ29tcG9uZW50Ll93YWxrdGhyb3VnaENvbnRhaW5lci5pbnN0YW5jZS5wYXVzZVxyXG4gICAgICAgICAgICA6IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB3YWxrdGhyb3VnaENvbnRpbnVlKCkge1xyXG4gICAgICAgIGlmIChXYWxrdGhyb3VnaENvbXBvbmVudC5fd2Fsa3Rocm91Z2hDb250YWluZXIpIHtcclxuICAgICAgICAgICAgV2Fsa3Rocm91Z2hDb21wb25lbnQuX3dhbGt0aHJvdWdoQ29udGFpbmVyLmluc3RhbmNlLmNvbnRpbnVlKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgd2Fsa3Rocm91Z2hOZXh0KCkge1xyXG4gICAgICAgIGlmIChXYWxrdGhyb3VnaENvbXBvbmVudC5fd2Fsa3Rocm91Z2hDb250YWluZXIpIHtcclxuICAgICAgICAgICAgV2Fsa3Rocm91Z2hDb21wb25lbnQuX3dhbGt0aHJvdWdoQ29udGFpbmVyLmluc3RhbmNlLm5leHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHdhbGt0aHJvdWdoUHJldmlvdXMoKSB7XHJcbiAgICAgICAgaWYgKFdhbGt0aHJvdWdoQ29tcG9uZW50Ll93YWxrdGhyb3VnaENvbnRhaW5lcikge1xyXG4gICAgICAgICAgICBXYWxrdGhyb3VnaENvbXBvbmVudC5fd2Fsa3Rocm91Z2hDb250YWluZXIuaW5zdGFuY2UucHJldmlvdXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBfYXBwbGljYXRpb25SZWY6IEFwcGxpY2F0aW9uUmVmLFxyXG4gICAgICAgIHByaXZhdGUgX2luamVjdG9yOiBJbmplY3RvcixcclxuICAgICAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgICAgIHByaXZhdGUgX3dhbGt0aHJvdWdoU2VydmljZTogV2Fsa3Rocm91Z2hTZXJ2aWNlXHJcbiAgICApIHsgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnKVxyXG4gICAgcmVzaXplKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9kaXNwbGF5ICYmXHJcbiAgICAgICAgICAgIFdhbGt0aHJvdWdoQ29tcG9uZW50Ll93YWxrdGhyb3VnaENvbnRhaW5lciAmJlxyXG4gICAgICAgICAgICB3aW5kb3cuaW5uZXJXaWR0aCAhPT0gdGhpcy5fd2luZG93V2lkdGggJiZcclxuICAgICAgICAgICAgIVdhbGt0aHJvdWdoQ29tcG9uZW50LndhbGt0aHJvdWdoSGFzUGF1c2UoKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50TG9jYXRpb25zKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICAvLyBpbml0IHRoZSBXYWxrdGhyb3VnaCBlbGVtZW50IGNvbnRhaW5lclxyXG4gICAgICAgIGlmICghV2Fsa3Rocm91Z2hDb21wb25lbnQuX3dhbGt0aHJvdWdoQ29udGFpbmVyICYmICFXYWxrdGhyb3VnaENvbXBvbmVudC5fd2Fsa3Rocm91Z2hDb250YWluZXJDcmVhdGluZykge1xyXG4gICAgICAgICAgICBXYWxrdGhyb3VnaENvbXBvbmVudC5fd2Fsa3Rocm91Z2hDb250YWluZXJDcmVhdGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgV2Fsa3Rocm91Z2hDb21wb25lbnQuX3dhbGt0aHJvdWdoQ29udGFpbmVyID1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hcHBlbmRDb21wb25lbnRUb0JvZHk8V2Fsa3Rocm91Z2hDb250YWluZXJDb21wb25lbnQ+KFdhbGt0aHJvdWdoQ29udGFpbmVyQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5leHQoXHJcbiAgICAgICAgY2xvc2VkRXZlbnQ/OiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4sXHJcbiAgICAgICAgZmluaXNoZWRFdmVudD86IEV2ZW50RW1pdHRlcjxXYWxrdGhyb3VnaEV2ZW50PlxyXG4gICAgKSB7XHJcbiAgICAgICAgaWYgKGNsb3NlZEV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VkID0gY2xvc2VkRXZlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmaW5pc2hlZEV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoZWQgPSBmaW5pc2hlZEV2ZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9wZW4oKTtcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5fZ2V0SW5zdGFuY2UoKS5wYXVzZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50TG9jYXRpb25zKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9wZW4oKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9nZXRJbnN0YW5jZSgpLnBhdXNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRMb2NhdGlvbnMoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0Fub3RoZXIgd2Fsa3Rocm91Z2ggaXMgaW4gcGF1c2UuIFBsZWFzZSBjbG9zZSBpdCBiZWZvcmUuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRG8gbm90IHVzZSB0aGlzIG1ldGhvZCBvdXRzaWRlIG9mIHRoZSBsaWJyYXJ5XHJcbiAgICAgKi9cclxuICAgIGxvYWRQcmV2aW91c3RTdGVwKCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzU3RlcC5fbmV4dCh0aGlzLmNsb3NlZCwgdGhpcy5maW5pc2hlZCk7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEbyBub3QgdXNlIHRoaXMgbWV0aG9kIG91dHNpZGUgb2YgdGhlIGxpYnJhcnlcclxuICAgICAqL1xyXG4gICAgbG9hZE5leHRTdGVwKCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5leHRTdGVwLl9uZXh0KHRoaXMuY2xvc2VkLCB0aGlzLmZpbmlzaGVkKTtcclxuICAgICAgICB9LCAwKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERvIG5vdCB1c2UgdGhpcyBtZXRob2Qgb3V0c2lkZSBvZiB0aGUgbGlicmFyeVxyXG4gICAgICovXHJcbiAgICBoaWRlKGZpbmlzaExpbmsgPSBmYWxzZSwgY2xvc2VXYWxrdGhyb3VnaCA9IHRydWUpIHtcclxuICAgICAgICB0aGlzLl9kaXNwbGF5ID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIGFkZCBDU1MgdG8gZm9jdXNFbGVtZW50XHJcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNFbGVtZW50Q1NTQ2xhc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZm9jdXNFbGVtZW50LCB0aGlzLmZvY3VzRWxlbWVudENTU0NsYXNzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjbG9zZVdhbGt0aHJvdWdoKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gZW1pdCBjbG9zZWQgZXZlbnRcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VkLmVtaXQoZmluaXNoTGluayk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMubmV4dFN0ZXApIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBlbWl0IGZpbmlzaGVkIGV2ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maW5pc2hlZC5lbWl0KG5ldyBXYWxrdGhyb3VnaEV2ZW50KHRoaXMsIHRoaXMuX2ZvY3VzRWxlbWVudCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAyMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3Nob3coKSB7XHJcbiAgICAgICAgdGhpcy5fZGlzcGxheSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbmV4dChcclxuICAgICAgICBjbG9zZWRFdmVudD86IEV2ZW50RW1pdHRlcjxib29sZWFuPixcclxuICAgICAgICBmaW5pc2hlZEV2ZW50PzogRXZlbnRFbWl0dGVyPFdhbGt0aHJvdWdoRXZlbnQ+XHJcbiAgICApIHtcclxuICAgICAgICBpZiAoY2xvc2VkRXZlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZWQgPSBjbG9zZWRFdmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZpbmlzaGVkRXZlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5maW5pc2hlZCA9IGZpbmlzaGVkRXZlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub3BlbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldEluc3RhbmNlKCk6IFdhbGt0aHJvdWdoQ29udGFpbmVyQ29tcG9uZW50IHtcclxuICAgICAgICByZXR1cm4gV2Fsa3Rocm91Z2hDb21wb25lbnQuX3dhbGt0aHJvdWdoQ29udGFpbmVyXHJcbiAgICAgICAgICAgID8gV2Fsa3Rocm91Z2hDb21wb25lbnQuX3dhbGt0aHJvdWdoQ29udGFpbmVyLmluc3RhbmNlXHJcbiAgICAgICAgICAgIDogbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9hcHBlbmRDb21wb25lbnRUb0JvZHk8VD4oY29tcG9uZW50OiBUeXBlPFQ+KTogQ29tcG9uZW50UmVmPFQ+IHtcclxuICAgICAgICAvLyBjcmVhdGUgYSBjb21wb25lbnQgcmVmZXJlbmNlXHJcbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5fY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudCkuY3JlYXRlKHRoaXMuX2luamVjdG9yKTtcclxuXHJcbiAgICAgICAgLy8gYXR0YWNoIGNvbXBvbmVudCB0byB0aGUgYXBwUmVmIHNvIHRoYXQgc28gdGhhdCBpdCB3aWxsIGJlIGRpcnR5IGNoZWNrZWQuXHJcbiAgICAgICAgdGhpcy5fYXBwbGljYXRpb25SZWYuYXR0YWNoVmlldyhjb21wb25lbnRSZWYuaG9zdFZpZXcpO1xyXG5cclxuICAgICAgICAvLyBnZXQgRE9NIGVsZW1lbnQgZnJvbSBjb21wb25lbnRcclxuICAgICAgICBjb25zdCBkb21FbGVtID0gKGNvbXBvbmVudFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8VD4pLnJvb3ROb2Rlc1swXSBhcyBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb21FbGVtKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFJlZjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9hdHRhY2hXYWxrdGhyb3VnaENvbnRlbnQ8VD4oXHJcbiAgICAgICAgY29tcG9uZW50T3JUZW1wbGF0ZVJlZjogQ29tcG9uZW50VHlwZTxUPiB8IFRlbXBsYXRlUmVmPFQ+LFxyXG4gICAgICAgIHdhbGt0aHJvdWdoQ29udGFpbmVyOiBXYWxrdGhyb3VnaENvbnRhaW5lckNvbXBvbmVudFxyXG4gICAgKSB7XHJcbiAgICAgICAgaWYgKGNvbXBvbmVudE9yVGVtcGxhdGVSZWYgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xyXG4gICAgICAgICAgICB3YWxrdGhyb3VnaENvbnRhaW5lci5hdHRhY2hUZW1wbGF0ZVBvcnRhbChcclxuICAgICAgICAgICAgICAgIG5ldyBUZW1wbGF0ZVBvcnRhbDxUPihjb21wb25lbnRPclRlbXBsYXRlUmVmLCBudWxsKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgaW5qZWN0aW9uVG9rZW5zID0gbmV3IFdlYWtNYXAoKTtcclxuICAgICAgICAgICAgaW5qZWN0aW9uVG9rZW5zLnNldChXYWxrdGhyb3VnaENvbnRhaW5lckNvbXBvbmVudCwgd2Fsa3Rocm91Z2hDb250YWluZXIpO1xyXG4gICAgICAgICAgICBjb25zdCBpbmplY3RvciA9IG5ldyBQb3J0YWxJbmplY3Rvcih0aGlzLl9pbmplY3RvciwgaW5qZWN0aW9uVG9rZW5zKTtcclxuICAgICAgICAgICAgd2Fsa3Rocm91Z2hDb250YWluZXIuYXR0YWNoQ29tcG9uZW50UG9ydGFsKFxyXG4gICAgICAgICAgICAgICAgbmV3IENvbXBvbmVudFBvcnRhbChjb21wb25lbnRPclRlbXBsYXRlUmVmLCB1bmRlZmluZWQsIGluamVjdG9yKVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2VsZW1lbnRMb2NhdGlvbnMoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMuX2dldEZvY3VzRWxlbWVudCgpO1xyXG5cclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5fZm9jdXNFbGVtZW50O1xyXG4gICAgICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3dhbGt0aHJvdWdoU2VydmljZS5zY3JvbGxJbnRvVmlld0lmT3V0T2ZWaWV3KGVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgLy8gaWYgdGhlcmUgaXMgYSByb290IGVsZW1lbnQgZGVmaW5lZCAoaW4gc29tZSBjYXNlcyB3aGVuIHBvc2l0aW9uIGZpeGVkIGlzIHVzZWQsIHdlIG5lZWQgdG8gc2Nyb2xsIG9uIGl0KVxyXG4gICAgICAgICAgICBpZiAodGhpcy5yb290RWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnJvb3RFbGVtZW50KS5zY3JvbGxJbnRvVmlldyh0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fb2Zmc2V0Q29vcmRpbmF0ZXMgPSB0aGlzLl93YWxrdGhyb3VnaFNlcnZpY2UucmV0cmlldmVDb29yZGluYXRlcyhlbGVtZW50LCB0aGlzLl9tYXJnaW5ab25lUHgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMudHlwZVNlbGVjdG9yID09PSAnem9uZScpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9mZnNldEVuZENvb3JkaW5hdGVzRW5kID0gdGhpcy5fd2Fsa3Rocm91Z2hTZXJ2aWNlLnJldHJpZXZlQ29vcmRpbmF0ZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZm9jdXNFbGVtZW50RW5kLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21hcmdpblpvbmVQeFxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9vZmZzZXRDb29yZGluYXRlcy5oZWlnaHQgPSBvZmZzZXRFbmRDb29yZGluYXRlc0VuZC50b3BcclxuICAgICAgICAgICAgICAgICAgICAtIHRoaXMuX29mZnNldENvb3JkaW5hdGVzLnRvcFxyXG4gICAgICAgICAgICAgICAgICAgICsgb2Zmc2V0RW5kQ29vcmRpbmF0ZXNFbmQuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fb2Zmc2V0Q29vcmRpbmF0ZXMud2lkdGggPSBvZmZzZXRFbmRDb29yZGluYXRlc0VuZC5sZWZ0XHJcbiAgICAgICAgICAgICAgICAgICAgLSB0aGlzLl9vZmZzZXRDb29yZGluYXRlcy5sZWZ0XHJcbiAgICAgICAgICAgICAgICAgICAgKyBvZmZzZXRFbmRDb29yZGluYXRlc0VuZC53aWR0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX29mZnNldENvb3JkaW5hdGVzID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fc2V0Rm9jdXMoKTtcclxuICAgICAgICB0aGlzLl93aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfZ2V0Rm9jdXNFbGVtZW50KCkge1xyXG4gICAgICAgIGxldCBmb2N1c0VsZW1lbnRzOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PjtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBmb2N1c0VsZW1lbnRzID0gdGhpcy5mb2N1c0VsZW1lbnRTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuZm9jdXNFbGVtZW50U2VsZWN0b3IpIGFzIE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+XHJcbiAgICAgICAgICAgICAgICA6IG51bGw7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcclxuICAgICAgICAgICAgICAgIGAjJHt0aGlzLmlkfUBmb2N1c0VsZW1lbnRTZWxlY3RvcjogJyR7dGhpcy5mb2N1c0VsZW1lbnRTZWxlY3Rvcn0nIGlzIG5vdCBhIHZhbGlkIHNlbGVjdG9yLlxcbmAsXHJcbiAgICAgICAgICAgICAgICBlcnJvclxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZ2V0dGluZyBmb2N1cyBlbGVtZW50XHJcblxyXG4gICAgICAgIGlmIChmb2N1c0VsZW1lbnRzICYmIGZvY3VzRWxlbWVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBpZiAoZm9jdXNFbGVtZW50cy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBNdWx0aXBsZSBpdGVtcyBmaXQgc2VsZWN0b3IsIGRpc3BsYXlpbmcgZmlyc3QgdmlzaWJsZSBhcyBmb2N1cyBpdGVtIGluICdlbGVtZW50JyBtb2RlXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgbCA9IGZvY3VzRWxlbWVudHMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBvZmZzZXRIZWlnaHQgbm90IG9mIDAgbWVhbnMgdmlzaWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmb2N1c0VsZW1lbnRzW2ldLm9mZnNldEhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9mb2N1c0VsZW1lbnQgPSBmb2N1c0VsZW1lbnRzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpID0gZm9jdXNFbGVtZW50cy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBpZiB0eXBlU2VsZWN0b3IgaXMgYnkgem9uZSwgZ2V0IGFsc28gdGhlIGxhc3QgZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudHlwZVNlbGVjdG9yID09PSAnem9uZScpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IGwgLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvZmZzZXRIZWlnaHQgbm90IG9mIDAgbWVhbnMgdmlzaWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm9jdXNFbGVtZW50c1tpXS5vZmZzZXRIZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZvY3VzRWxlbWVudEVuZCA9IGZvY3VzRWxlbWVudHNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpID0gZm9jdXNFbGVtZW50cy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB0aGUgem9uZSB0aGlzIGp1c3QgYSB1bmlxdWUgZWxlbWVudCwgY2hhbmdlIG1vZGUgZm9yICdlbGVtZW50J1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9mb2N1c0VsZW1lbnQgPT09IHRoaXMuX2ZvY3VzRWxlbWVudEVuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnR5cGVTZWxlY3RvciA9ICdlbGVtZW50JztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZm9jdXNFbGVtZW50ID0gZm9jdXNFbGVtZW50c1swXTtcclxuICAgICAgICAgICAgICAgIHRoaXMudHlwZVNlbGVjdG9yID0gJ2VsZW1lbnQnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fZm9jdXNFbGVtZW50ID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBnZXQgaW5zdGFuY2UsIGhpZ2h0bGlnaHQgdGhlIGZvY3VzZWQgZWxlbWVudCBldCBzaG93IHRoZSB0ZW1wbGF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9zZXRGb2N1cygpIHtcclxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuX2dldEluc3RhbmNlKCk7XHJcbiAgICAgICAgaWYgKGluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbFkgPSB3aW5kb3cucGFnZVhPZmZzZXQ7XHJcbiAgICAgICAgICAgIHRoaXMuX2luaXRTdHlsaW5nVGVtcGxhdGUoaW5zdGFuY2UpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9mb2N1c0VsZW1lbnQgJiYgaW5zdGFuY2Uuem9uZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLmhpZ2h0bGlnaHRab25lKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9vZmZzZXRDb29yZGluYXRlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsWSAtIHdpbmRvdy5wYWdlWE9mZnNldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uRGVsYXlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZXRGb2N1c0NvbnRpbnVlLmJpbmQodGhpcylcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZXRGb2N1c0NvbnRpbnVlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDIwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfc2V0Rm9jdXNDb250aW51ZSgpIHtcclxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuX2dldEluc3RhbmNlKCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9kaXNwbGF5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2F0dGFjaENvbnRlbnRUZW1wbGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5faW5pdENvbnRlbnRUZW1wbGF0ZShpbnN0YW5jZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBpbnN0YW5jZS5oaWdodGxpZ2h0Wm9uZVN0eWxpbmcodGhpcy5fZm9jdXNFbGVtZW50KTtcclxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlRWxlbWVudFBvc2l0aW9ucyhpbnN0YW5jZSk7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdXBkYXRlRWxlbWVudFBvc2l0aW9ucyhpbnN0YW5jZTogV2Fsa3Rocm91Z2hDb250YWluZXJDb21wb25lbnQpIHtcclxuICAgICAgICBpZiAoV2Fsa3Rocm91Z2hDb21wb25lbnQuX3dhbGt0aHJvdWdoQ29udGFpbmVyICYmIHRoaXMuX2dldEluc3RhbmNlKCkpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5jb250ZW50QmxvY2tQb3NpdGlvbihcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9vZmZzZXRDb29yZGluYXRlcyxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hbGlnbkNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmVydGljYWxBbGlnbkNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29udGVudFNwYWNpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmVydGljYWxDb250ZW50U3BhY2luZ1xyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9mb2N1c0VsZW1lbnQgIT09IG51bGwgJiYgdGhpcy5faGFzQXJyb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZS5hcnJvd1Bvc2l0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9vZmZzZXRDb29yZGluYXRlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmVydGljYWxDb250ZW50U3BhY2luZ1xyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gYWRkIENTUyB0byBmb2N1c0VsZW1lbnRcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvY3VzRWxlbWVudENTU0NsYXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZm9jdXNFbGVtZW50LCB0aGlzLmZvY3VzRWxlbWVudENTU0NsYXNzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9nZXRJbnN0YW5jZSgpLnNldEhlaWdodCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX3JlYWR5SGFzQmVlbkVtaXRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZWFkeUhhc0JlZW5FbWl0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlYWR5LmVtaXQobmV3IFdhbGt0aHJvdWdoRXZlbnQodGhpcywgdGhpcy5fZm9jdXNFbGVtZW50KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50QmxvY2tOYXRpdmUgPSBpbnN0YW5jZS5jb250ZW50QmxvY2submF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc2Nyb2xsUG9zO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fZm9jdXNFbGVtZW50ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29vcmRpbmF0ZXNDb250ZW50ID0gdGhpcy5fd2Fsa3Rocm91Z2hTZXJ2aWNlLnJldHJpZXZlQ29vcmRpbmF0ZXMoY29udGVudEJsb2NrTmF0aXZlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29vcmRpbmF0ZXNGb2N1cyA9IHRoaXMuX3dhbGt0aHJvdWdoU2VydmljZS5yZXRyaWV2ZUNvb3JkaW5hdGVzKHRoaXMuX2ZvY3VzRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlzIGNvbnRlbnQgKyBmb2N1cyBoaWdoZXIgdGhhbiB3aW5kb3cgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29vcmRpbmF0ZXNDb250ZW50LmhlaWdodCArIGNvb3JkaW5hdGVzRm9jdXMuaGVpZ2h0ID4gd2luZG93LmlubmVySGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSBzY3JvbGwgb24gY29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudEJsb2NrTmF0aXZlLnNjcm9sbEludG9WaWV3KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2Ugb2Zmc2V0IHRoZSB3aW5kb3cgaGFsZiBvZiB0aGUgY29udGVudCBoZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb29yZGluYXRlc0NvbnRlbnQudG9wID4gY29vcmRpbmF0ZXNGb2N1cy50b3ApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb250ZW50IGJlbG93IGZvY3VzWm9uZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFBvcyA9IC0oY29vcmRpbmF0ZXNDb250ZW50LmhlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb250ZW50IGFib3ZlIGZvY3VzWm9uZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFBvcyA9ICsoY29vcmRpbmF0ZXNDb250ZW50LmhlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2Nyb2xsIG9uIGVsZW1lbnQgaGlnaGVyIG1pbnVzIG1pbmltYWwgbWFyZ2luXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29vcmRpbmF0ZXNDb250ZW50LnRvcCA+IGNvb3JkaW5hdGVzRm9jdXMudG9wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKGNvb3JkaW5hdGVzRm9jdXMubGVmdCwgY29vcmRpbmF0ZXNGb2N1cy50b3ApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFBvcyA9IC1XYWxrdGhyb3VnaENvbXBvbmVudC5taW5pbWFsTWFyZ2luO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50QmxvY2tOYXRpdmUuc2Nyb2xsSW50b1ZpZXcodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsUG9zID0gLVdhbGt0aHJvdWdoQ29tcG9uZW50Lm1pbmltYWxNYXJnaW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBubyBmb2N1cyB6b25lLCBzY3JvbGwgb24gY29udGVudCBtaW51cyBtYXJnaW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudEJsb2NrTmF0aXZlLnNjcm9sbEludG9WaWV3KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxQb3MgPSAtV2Fsa3Rocm91Z2hDb21wb25lbnQubWluaW1hbE1hcmdpbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxCeSgwLCBzY3JvbGxQb3MpO1xyXG4gICAgICAgICAgICAgICAgfSwgNTApO1xyXG4gICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBdHRhY2hlIHRoZSB0ZW1wbGF0ZSBpbiB0aGUgY29udGVuZXIsIGlmIGEgdGVtcGxhdGUgaXMgbGlua2VkLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9hdHRhY2hDb250ZW50VGVtcGxhdGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29udGVudFRlbXBsYXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2F0dGFjaFdhbGt0aHJvdWdoQ29udGVudChcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudFRlbXBsYXRlLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fZ2V0SW5zdGFuY2UoKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGluaXQgYSBwYXJ0b2Ygc3R5bGVzIG9mIHRoZSBjb250ZW5haXJlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2luaXRTdHlsaW5nVGVtcGxhdGUoaW5zdGFuY2U6IFdhbGt0aHJvdWdoQ29udGFpbmVyQ29tcG9uZW50KSB7XHJcbiAgICAgICAgY29uc3QgaGFzSGlnaGxpZ2h0Wm9uZSA9IHRoaXMuX2ZvY3VzRWxlbWVudCAhPT0gbnVsbDtcclxuXHJcbiAgICAgICAgaW5zdGFuY2UucGFyZW50ID0gdGhpcztcclxuICAgICAgICBpbnN0YW5jZS5vcGVuKCk7XHJcbiAgICAgICAgaW5zdGFuY2UuaGFzSGlnaGxpZ2h0Wm9uZSA9IGhhc0hpZ2hsaWdodFpvbmU7XHJcbiAgICAgICAgaW5zdGFuY2UuaGFzQ2xpY2thYmxlID0gaGFzSGlnaGxpZ2h0Wm9uZSAmJiB0eXBlb2YgdGhpcy5mb2N1c0NsaWNrID09PSAnZnVuY3Rpb24nO1xyXG4gICAgICAgIGluc3RhbmNlLmhhc0hpZ2hsaWdodCA9IGhhc0hpZ2hsaWdodFpvbmUgJiYgdGhpcy5faGFzSGlnaGxpZ2h0QW5pbWF0aW9uO1xyXG4gICAgICAgIGluc3RhbmNlLmhhc0JhY2tkcm9wID0gdGhpcy5faGFzQmFja2Ryb3A7XHJcbiAgICAgICAgaW5zdGFuY2UuaGFzR2xvdyA9IGhhc0hpZ2hsaWdodFpvbmUgJiYgdGhpcy5faGFzR2xvdztcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogaW5pdCBhbGwgZGF0YXMgb2YgdGhlIGNvbnRlbmFpcmVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfaW5pdENvbnRlbnRUZW1wbGF0ZShpbnN0YW5jZTogV2Fsa3Rocm91Z2hDb250YWluZXJDb21wb25lbnQpIHtcclxuICAgICAgICBjb25zdCBoYXNIaWdobGlnaHRab25lID0gdGhpcy5fZm9jdXNFbGVtZW50ICE9PSBudWxsO1xyXG5cclxuICAgICAgICBpbnN0YW5jZS5oYXNQcmV2aW91cyA9IHRoaXMuX2hhc1ByZXZpb3VzU3RlcChpbnN0YW5jZSk7XHJcbiAgICAgICAgaW5zdGFuY2UuaGFzTmV4dCA9IHRoaXMuX2hhc05leHRTdGVwKGluc3RhbmNlKTtcclxuICAgICAgICBpbnN0YW5jZS5oYXNDbG9zZUJ1dHRvbiA9IHRoaXMuX2hhc0Nsb3NlQnV0dG9uO1xyXG4gICAgICAgIGluc3RhbmNlLmhhc0Nsb3NlQW55d2hlcmUgPSB0aGlzLl9oYXNDbG9zZUFueXdoZXJlO1xyXG4gICAgICAgIGluc3RhbmNlLmhhc0ZpbmlzaCA9IHRoaXMuX2hhc0ZpbmlzaCB8fCAhaW5zdGFuY2UuaGFzTmV4dDtcclxuICAgICAgICBpbnN0YW5jZS5oYXNBcnJvdyA9IGhhc0hpZ2hsaWdodFpvbmUgJiYgdGhpcy5faGFzQXJyb3c7XHJcbiAgICAgICAgaW5zdGFuY2UuYXJyb3dDb2xvciA9IHRoaXMuYXJyb3dDb2xvcjtcclxuICAgICAgICBpbnN0YW5jZS5yYWRpdXMgPSB0aGlzLnJhZGl1cztcclxuICAgICAgICBpbnN0YW5jZS5tYXJnaW5ab25lID0gdGhpcy5fbWFyZ2luWm9uZSA/IHRoaXMuX21hcmdpblpvbmUucmVwbGFjZSgvKFxcZCspL2csICckMXB4JykgOiBudWxsO1xyXG4gICAgICAgIGluc3RhbmNlLm1hcmdpblpvbmVQeCA9IHRoaXMuX21hcmdpblpvbmVQeDtcclxuICAgICAgICBpbnN0YW5jZS5jb250ZW50VGV4dCA9IHRoaXMuY29udGVudFRleHQ7XHJcbiAgICAgICAgaW5zdGFuY2UuY29udGVudFN0eWxlID0gdGhpcy5jb250ZW50U3R5bGU7XHJcbiAgICAgICAgaW5zdGFuY2UudGV4dCA9IHRoaXMudGV4dHNcclxuICAgICAgICAgICAgPyB7IC4uLm5ldyBXYWxrdGhyb3VnaFRleHQoKSwgLi4udGhpcy50ZXh0cyB9XHJcbiAgICAgICAgICAgIDogbmV3IFdhbGt0aHJvdWdoVGV4dCgpO1xyXG5cclxuICAgICAgICB0aGlzLl9zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjaGVjayBpZiB0aGVyZSBpcyBhIHByZXZpb3VzIHN0ZXAgZW5hYmxlZFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9oYXNQcmV2aW91c1N0ZXAoaW5zdGFuY2U6IFdhbGt0aHJvdWdoQ29udGFpbmVyQ29tcG9uZW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKGluc3RhbmNlLnBhcmVudCkge1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudCA9IGluc3RhbmNlLnBhcmVudC5wcmV2aW91c1N0ZXA7XHJcbiAgICAgICAgICAgIHdoaWxlIChjdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWN1cnJlbnQuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LnByZXZpb3VzU3RlcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY2hlY2sgaWYgdGhlcmUgaXMgYSBuZXh0IHN0ZXAgZW5hYmxlZFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9oYXNOZXh0U3RlcChpbnN0YW5jZTogV2Fsa3Rocm91Z2hDb250YWluZXJDb21wb25lbnQpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoaW5zdGFuY2UucGFyZW50KSB7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50ID0gaW5zdGFuY2UucGFyZW50Lm5leHRTdGVwO1xyXG4gICAgICAgICAgICB3aGlsZSAoY3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjdXJyZW50LmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0U3RlcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBUZW1wbGF0ZVJlZixcclxuICAgIFZpZXdDaGlsZCxcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgRW1iZWRkZWRWaWV3UmVmLFxyXG4gICAgQ29tcG9uZW50UmVmLFxyXG4gICAgSG9zdEJpbmRpbmcsXHJcbiAgICBIb3N0TGlzdGVuZXIsXHJcbiAgICBSZW5kZXJlcjJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmFzZVBvcnRhbEhvc3QsIENvbXBvbmVudFBvcnRhbCwgUG9ydGFsSG9zdERpcmVjdGl2ZSwgVGVtcGxhdGVQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcclxuXHJcbmltcG9ydCB7IFdhbGt0aHJvdWdoRWxlbWVudENvb3JkaW5hdGUsIFdhbGt0aHJvdWdoTWFyZ2luIH0gZnJvbSAnLi93YWxrdGhyb3VnaC10b29scyc7XHJcbmltcG9ydCB7IFdhbGt0aHJvdWdoQ29tcG9uZW50IH0gZnJvbSAnLi93YWxrdGhyb3VnaC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBXYWxrdGhyb3VnaFNlcnZpY2UgfSBmcm9tICcuL3dhbGt0aHJvdWdoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBXYWxrdGhyb3VnaFRleHQgfSBmcm9tICcuL3dhbGt0aHJvdWdoLXRleHQnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRocm93V2Fsa3Rocm91Z2hDb250ZW50QWxyZWFkeUF0dGFjaGVkRXJyb3IoKSB7XHJcbiAgICB0aHJvdyBFcnJvcignQXR0ZW1wdGluZyB0byBhdHRhY2ggd2Fsa3Rocm91Z2ggY29udGVudCBhZnRlciBjb250ZW50IGlzIGFscmVhZHkgYXR0YWNoZWQnKTtcclxufVxyXG5cclxuY29uc3QgaXNfc2FmYXJpID0gL14oKD8hY2hyb21lfGFuZHJvaWQpLikqc2FmYXJpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd3YWxrdGhyb3VnaC1jb250YWluZXInLFxyXG4gICAgc3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoxO3RvcDowO2xlZnQ6MDt3aWR0aDo5OS45JTttaW4taGVpZ2h0OjEwMCV9Omhvc3QuaGlkZXtkaXNwbGF5Om5vbmV9Omhvc3QuY3Vyc29ye2N1cnNvcjpwb2ludGVyfTpob3N0LmJhY2tkcm9we2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuNil9YnV0dG9ue2JhY2tncm91bmQ6MCAwO2JvcmRlcjowO2NvbG9yOiNmZmZ9LndrdC16b25le3Bvc2l0aW9uOmFic29sdXRlfS53a3Qtem9uZS5oaWRle2Rpc3BsYXk6bm9uZX0ud2t0LXpvbmUuYmFja2Ryb3B7Ym94LXNoYWRvdzowIDAgMCAyMjAwcHggcmdiYSgwLDAsMCwuNil9LndrdC16b25lLmdsb3d7Ym94LXNoYWRvdzowIDAgNHB4IDJweCAjZmY2LDAgMCA5cHggMCAjZmY2LDAgMCAzNnB4ICNmZjZ9LndrdC16b25lLmNsaWNrYWJsZXtjdXJzb3I6cG9pbnRlcn0ud2t0LXpvbmUuaGlnaGxpZ2h0ey13ZWJraXQtYW5pbWF0aW9uOi40NXMgNCBoaWdobGlnaHQ7YW5pbWF0aW9uOi40NXMgNCBoaWdobGlnaHR9LndrdC1jb250YWluZXJ7cG9zaXRpb246cmVsYXRpdmV9LndrdC1jb250ZW50LWJsb2Nre3Bvc2l0aW9uOmFic29sdXRlO21hcmdpbjoxZW07cGFkZGluZzo2cHg7ei1pbmRleDoxO2NvbG9yOiNmZmY7bWluLXdpZHRoOmNhbGMoMzIwcHggLSAyZW0pfS53a3QtY29udGVudC1ibG9jay5oaWRle2Rpc3BsYXk6bm9uZX0ud2t0LWNvbnRlbnQtYmxvY2suZGFya2Vue2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuNil9LndrdC1jbG9zZSsud2t0LWNvbnRlbnR7bWFyZ2luLXRvcDoxLjNlbX0ud2t0LWNsb3Nle3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjFlbTtjdXJzb3I6cG9pbnRlcn0ud2t0LW5hdmlnYXRle2Rpc3BsYXk6ZmxleDtmbGV4LXdyYXA6d3JhcDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS53a3QtbmF2aWdhdGU+YnV0dG9ue3BhZGRpbmc6NnB4O2ZvbnQtc2l6ZToxMjAlfS53a3QtbmF2aWdhdGU+YnV0dG9uOmhvdmVye2N1cnNvcjpwb2ludGVyO3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmV9LndrdC1wcmV2aW91cy1saW5rOjpiZWZvcmV7Y29udGVudDonPDwgJ30ud2t0LW5leHQtbGluazo6YWZ0ZXJ7Y29udGVudDonID4+J31kaXYuaGlkZXtkaXNwbGF5Om5vbmV9c3Zne292ZXJmbG93OnZpc2libGU7cG9zaXRpb246YWJzb2x1dGU7dG9wOi0xcHg7bGVmdDotMXB4O2JvcmRlcjoxcHggc29saWQgdHJhbnNwYXJlbnR9I3drdC1hcnJvdz5wYXRoe3N0cm9rZS13aWR0aDowfS53a3QtYXJyb3ctcGF0aHtzdHJva2Utd2lkdGg6MnB4O2ZpbGw6bm9uZX1ALXdlYmtpdC1rZXlmcmFtZXMgaGlnaGxpZ2h0ezAlLDEwMCV7YmFja2dyb3VuZC1jb2xvcjpub25lfTUwJXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjgpfX1Aa2V5ZnJhbWVzIGhpZ2hsaWdodHswJSwxMDAle2JhY2tncm91bmQtY29sb3I6bm9uZX01MCV7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC44KX19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxOTIwcHgpLHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6MTkyMHB4KXsud2t0LXpvbmUuYmFja2Ryb3B7Ym94LXNoYWRvdzowIDAgMCA0NDAwcHggcmdiYSgwLDAsMCwuNil9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6Mzg0MHB4KSxzY3JlZW4gYW5kIChtaW4taGVpZ2h0OjM4NDBweCl7LndrdC16b25lLmJhY2tkcm9we2JveC1zaGFkb3c6MCAwIDAgODgwMHB4IHJnYmEoMCwwLDAsLjYpfX1fOmRlZmF1bHQ6bm90KDpyb290OnJvb3QpLC53a3Qtem9uZS5iYWNrZHJvcHtib3gtc2hhZG93OjAgMCAwIDIwMDBweCByZ2JhKDAsMCwwLC42KSFpbXBvcnRhbnR9YF0sXHJcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJ3a3QtY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwid2t0LXpvbmVcIlxyXG4gICAgICAgICAjem9uZVxyXG4gICAgICAgICAoY2xpY2spPVwiY2xpY2tab25lKCRldmVudClcIlxyXG4gICAgICAgICBbY2xhc3MuaGlkZV09XCIhaGFzSGlnaGxpZ2h0Wm9uZVwiXHJcbiAgICAgICAgIFtjbGFzcy5iYWNrZHJvcF09XCJoYXNCYWNrZHJvcFwiXHJcbiAgICAgICAgIFtjbGFzcy5nbG93XT1cImhhc0dsb3dcIlxyXG4gICAgICAgICBbY2xhc3MuY2xpY2thYmxlXT1cImhhc0NsaWNrYWJsZVwiXHJcbiAgICAgICAgIFtjbGFzcy5oaWdobGlnaHRdPVwiaGFzSGlnaGxpZ2h0XCJcclxuICAgICAgICAgW3N0eWxlLnBhZGRpbmddPVwibWFyZ2luWm9uZVwiPjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cIndrdC1jb250ZW50LWJsb2NrXCJcclxuICAgICAgICAgW2NsYXNzLmhpZGVdPVwiaGlkZU90aGVyXCJcclxuICAgICAgICAgW2NsYXNzLmRhcmtlbl09XCJjb250ZW50U3R5bGUgPT09ICdkcmFrZW4nXCJcclxuICAgICAgICAgI2NvbnRlbnRCbG9jaz5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJ3a3QtY2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJoYXNDbG9zZUJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiY2xvc2UoKVwiPsOiwpzCljwvYnV0dG9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3a3QtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8cCAqbmdJZj1cImNvbnRlbnRUZXh0XCI+e3tjb250ZW50VGV4dH19PC9wPlxyXG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgY2RrUG9ydGFsSG9zdD48L25nLXRlbXBsYXRlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3a3QtbmF2aWdhdGVcIlxyXG4gICAgICAgICAgICAgKm5nSWY9XCJoYXNQcmV2aW91c3x8aGFzTmV4dHx8aGFzRmluaXNoXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ3a3QtcHJldmlvdXMtbGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJoYXNQcmV2aW91c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInByZXZpb3VzKClcIj57e3RleHQucHJldmlvdXN9fTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwid2t0LW5leHQtbGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJoYXNOZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwibmV4dCgpXCI+e3t0ZXh0Lm5leHR9fTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwid2t0LWZpbmlzaC1saW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImhhc0ZpbmlzaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImNsb3NlKHRydWUpXCI+e3t0ZXh0LmNsb3NlfX08L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiAqbmdJZj1cImhhc0Fycm93XCJcclxuICAgICAgICAgW2NsYXNzLmhpZGVdPVwiaGlkZU90aGVyXCI+XHJcbiAgICAgICAgPHN2ZyB2ZXJzaW9uPVwiMS4xXCJcclxuICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIj5cclxuICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgICA8bWFya2VyIGlkPVwid2t0LWFycm93XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMCAxMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZlg9XCI4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmWT1cIjVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXJVbml0cz1cInN0cm9rZVdpZHRoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JpZW50PVwiYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlcldpZHRoPVwiMTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXJIZWlnaHQ9XCIxMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwb2x5bGluZSBwb2ludHM9XCIwLDAgMTAsNSAwLDEwIDUsNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5maWxsXT1cImFycm93Q29sb3IgfHwgJyNGRkYnXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvbWFya2VyPlxyXG4gICAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwid2t0LWFycm93LXBhdGhcIlxyXG4gICAgICAgICAgICAgICAgICBbYXR0ci5kXT1cImFycm93UGF0aFwiXHJcbiAgICAgICAgICAgICAgICAgIFthdHRyLnN0cm9rZV09XCJhcnJvd0NvbG9yIHx8ICcjRkZGJ1wiXHJcbiAgICAgICAgICAgICAgICAgIFthdHRyLm1hcmtlci1lbmRdPVwibWFya2VyVXJsXCIgLz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXYWxrdGhyb3VnaENvbnRhaW5lckNvbXBvbmVudCBleHRlbmRzIEJhc2VQb3J0YWxIb3N0IHtcclxuXHJcbiAgICBtYXJrZXJVcmwgPSAndXJsKCN3a3QtYXJyb3cpJztcclxuXHJcbiAgICBzaG93ID0gZmFsc2U7XHJcbiAgICBwYXVzZSA9IGZhbHNlO1xyXG4gICAgcGFyZW50OiBXYWxrdGhyb3VnaENvbXBvbmVudDtcclxuXHJcbiAgICAvLyBoaWdobGlnaHQgem9uZVxyXG5cclxuICAgIGhhc0hpZ2hsaWdodFpvbmUgPSBmYWxzZTtcclxuICAgIGhhc0hpZ2hsaWdodCA9IGZhbHNlO1xyXG4gICAgaGFzQmFja2Ryb3AgPSBmYWxzZTtcclxuICAgIGhhc0dsb3cgPSBmYWxzZTtcclxuICAgIGhhc0NsaWNrYWJsZTogYm9vbGVhbjtcclxuICAgIGhpZGVPdGhlcjogYm9vbGVhbjtcclxuXHJcbiAgICAvLyBuYXZpZ2F0ZVxyXG5cclxuICAgIGhhc1ByZXZpb3VzID0gZmFsc2U7XHJcbiAgICBoYXNOZXh0ID0gZmFsc2U7XHJcbiAgICBoYXNGaW5pc2ggPSBmYWxzZTtcclxuICAgIGhhc0Nsb3NlQnV0dG9uID0gZmFsc2U7XHJcbiAgICBoYXNDbG9zZUFueXdoZXJlID0gdHJ1ZTtcclxuXHJcbiAgICAvLyBhcnJvd1xyXG5cclxuICAgIGhhc0Fycm93ID0gZmFsc2U7XHJcbiAgICBhcnJvd1BhdGg6IHN0cmluZztcclxuICAgIGFycm93TWFya2VyRGlzdCA9IDc7XHJcblxyXG4gICAgLy8gc3R5bGluZ1xyXG5cclxuICAgIGNvbnRlbnRTdHlsZTogc3RyaW5nO1xyXG4gICAgcmFkaXVzOiBzdHJpbmc7XHJcbiAgICBhcnJvd0NvbG9yOiBzdHJpbmc7XHJcbiAgICBtYXJnaW5ab25lOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgbWFyZ2luWm9uZVB4ID0gbmV3IFdhbGt0aHJvdWdoTWFyZ2luKCk7XHJcblxyXG4gICAgLy8gY29udGVudFxyXG5cclxuICAgIGNvbnRlbnRUZXh0OiBzdHJpbmc7XHJcblxyXG4gICAgLy8gdGV4dHMgY2hhbmdlIC8gaTE4blxyXG5cclxuICAgIHRleHQgPSBuZXcgV2Fsa3Rocm91Z2hUZXh0KCk7XHJcblxyXG4gICAgLy8gZWxlbWVudHNcclxuXHJcbiAgICBAVmlld0NoaWxkKFBvcnRhbEhvc3REaXJlY3RpdmUpIF9wb3J0YWxIb3N0OiBQb3J0YWxIb3N0RGlyZWN0aXZlO1xyXG4gICAgQFZpZXdDaGlsZCgnY29udGVudCcpIGNvbnRlbnQ6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgICBAVmlld0NoaWxkKCdjb250ZW50QmxvY2snKSBjb250ZW50QmxvY2s6IEVsZW1lbnRSZWY7XHJcbiAgICBAVmlld0NoaWxkKCd6b25lJykgem9uZTogRWxlbWVudFJlZjtcclxuXHJcbiAgICAvLyBIb3N0QmluZGluZ1xyXG5cclxuICAgIEBIb3N0QmluZGluZygnYXR0ci5pZCcpXHJcbiAgICBnZXQgaWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQuaWQgKyAnLWNvbnRhaW5lcicgOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaGlkZScpXHJcbiAgICBnZXQgaGlkZSgpIHtcclxuICAgICAgICByZXR1cm4gIXRoaXMuc2hvdztcclxuICAgIH1cclxuXHJcbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmN1cnNvcicpXHJcbiAgICBnZXQgY3Vyc29yKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhhc0Nsb3NlQW55d2hlcmU7XHJcbiAgICB9XHJcblxyXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5iYWNrZHJvcCcpXHJcbiAgICBnZXQgYmFja2Ryb3AoKSB7XHJcbiAgICAgICAgcmV0dXJuICF0aGlzLmhhc0hpZ2hsaWdodFpvbmUgJiYgdGhpcy5oYXNCYWNrZHJvcDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jb250ZW50UG9zaXRpb246ICdhYm92ZScgfCAndG9wJyB8ICdjZW50ZXInIHwgJ2JvdHRvbScgfCAnYmVsb3cnO1xyXG4gICAgcHJpdmF0ZSBfYXJyb3dQb3NpdGlvbjogJ3RvcEJvdHRvbScgfCAnbGVmdFJpZ2h0JztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgICAgICBwcml2YXRlIF93YWxrdGhyb3VnaFNlcnZpY2U6IFdhbGt0aHJvdWdoU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmXHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcclxuICAgIGNsaWNrKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmhhc0Nsb3NlQW55d2hlcmUgJiYgdGhpcy5zaG93KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xpY2tab25lKGV2ZW50OiBFdmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmVudCAmJiB0aGlzLmhhc0NsaWNrYWJsZSkge1xyXG4gICAgICAgICAgICB0aGlzLnBhcmVudC5mb2N1c0NsaWNrKGV2ZW50LCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBdHRhY2ggYSBDb21wb25lbnRQb3J0YWwgYXMgY29udGVudCB0byB0aGlzIHdhbGt0aHJvdWdoIGNvbnRhaW5lci5cclxuICAgICAqIEBwYXJhbSBwb3J0YWwgUG9ydGFsIHRvIGJlIGF0dGFjaGVkIGFzIHRoZSB3YWxrdGhyb3VnaCBjb250ZW50LlxyXG4gICAgICovXHJcbiAgICBhdHRhY2hDb21wb25lbnRQb3J0YWw8VD4ocG9ydGFsOiBDb21wb25lbnRQb3J0YWw8VD4pOiBDb21wb25lbnRSZWY8VD4ge1xyXG4gICAgICAgIGlmICh0aGlzLl9wb3J0YWxIb3N0Lmhhc0F0dGFjaGVkKCkpIHtcclxuICAgICAgICAgICAgdGhyb3dXYWxrdGhyb3VnaENvbnRlbnRBbHJlYWR5QXR0YWNoZWRFcnJvcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdGhpcy5fc2F2ZVByZXZpb3VzbHlGb2N1c2VkRWxlbWVudCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wb3J0YWxIb3N0LmF0dGFjaENvbXBvbmVudFBvcnRhbChwb3J0YWwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQXR0YWNoIGEgVGVtcGxhdGVQb3J0YWwgYXMgY29udGVudCB0byB0aGlzIHdhbGt0aHJvdWdoIGNvbnRhaW5lci5cclxuICAgICAqIEBwYXJhbSBwb3J0YWwgUG9ydGFsIHRvIGJlIGF0dGFjaGVkIGFzIHRoZSB3YWxrdGhyb3VnaCBjb250ZW50LlxyXG4gICAgICovXHJcbiAgICBhdHRhY2hUZW1wbGF0ZVBvcnRhbDxDPihwb3J0YWw6IFRlbXBsYXRlUG9ydGFsPEM+KTogRW1iZWRkZWRWaWV3UmVmPEM+IHtcclxuICAgICAgICBpZiAodGhpcy5fcG9ydGFsSG9zdC5oYXNBdHRhY2hlZCgpKSB7XHJcbiAgICAgICAgICAgIHRocm93V2Fsa3Rocm91Z2hDb250ZW50QWxyZWFkeUF0dGFjaGVkRXJyb3IoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHRoaXMuX3NhdmVQcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcG9ydGFsSG9zdC5hdHRhY2hUZW1wbGF0ZVBvcnRhbChwb3J0YWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEhlaWdodCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0JywgdGhpcy5fd2Fsa3Rocm91Z2hTZXJ2aWNlLmdldERvY3VtZW50SGVpZ2h0KCkgKyAncHgnKTtcclxuICAgIH1cclxuXHJcbiAgICBoaWdodGxpZ2h0Wm9uZShcclxuICAgICAgICBjb29yZGluYXRlOiBXYWxrdGhyb3VnaEVsZW1lbnRDb29yZGluYXRlLFxyXG4gICAgICAgIHNjcm9sbERpZmY6IG51bWJlcixcclxuICAgICAgICBhbmltYXRpb246ICdub25lJyB8ICdsaW5lYXInLFxyXG4gICAgICAgIGFuaW1hdGlvbkRlbGF5czogbnVtYmVyLFxyXG4gICAgICAgIGNvbnRpbnVlRnVuY3Rpb246ICgpID0+IHt9XHJcbiAgICApIHtcclxuXHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9ICh0aGlzLnpvbmUubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCk7XHJcbiAgICAgICAgY29uc3Qgem9uZVN0eWxlID0gZWxlbWVudC5zdHlsZTtcclxuICAgICAgICBjb25zdCBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIG51bGwpO1xyXG5cclxuICAgICAgICBpZiAoYW5pbWF0aW9uID09PSAnbGluZWFyJyAmJiBhbmltYXRpb25EZWxheXMgPiAwICYmIHN0eWxlLmxlZnQgIT09ICdhdXRvJykge1xyXG4gICAgICAgICAgICB0aGlzLmhpZGVPdGhlciA9IHRydWU7XHJcbiAgICAgICAgICAgIGNvbnN0IGZyYWdtZW50ID0gMjA7XHJcbiAgICAgICAgICAgIGNvbnN0IGludGVydmFsZSA9IGFuaW1hdGlvbkRlbGF5cyAvIGZyYWdtZW50O1xyXG4gICAgICAgICAgICBjb25zdCBsZWZ0ID0gcGFyc2VJbnQoc3R5bGUubGVmdCwgMTApO1xyXG4gICAgICAgICAgICBjb25zdCB0b3AgPSBzY3JvbGxEaWZmICsgcGFyc2VJbnQoc3R5bGUudG9wLCAxMCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gcGFyc2VJbnQoc3R5bGUud2lkdGgsIDEwKTtcclxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gcGFyc2VJbnQoc3R5bGUuaGVpZ2h0LCAxMCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcnRMZWZ0ID0gKGNvb3JkaW5hdGUubGVmdCAtIGxlZnQpIC8gZnJhZ21lbnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcnRUb3AgPSAoY29vcmRpbmF0ZS50b3AgLSB0b3ApIC8gZnJhZ21lbnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcnRXaWR0aCA9IChjb29yZGluYXRlLndpZHRoIC0gd2lkdGgpIC8gZnJhZ21lbnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcnRIZWlnaHQgPSAoY29vcmRpbmF0ZS5oZWlnaHQgLSBoZWlnaHQpIC8gZnJhZ21lbnQ7XHJcbiAgICAgICAgICAgIGxldCBjb3VudCA9IDA7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNob3cgPSB0cnVlO1xyXG4gICAgICAgICAgICB6b25lU3R5bGUuYm9yZGVyUmFkaXVzID0gJzUwJSc7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIHpvbmVTdHlsZS5sZWZ0ID0gKGxlZnQgKyBwYXJ0TGVmdCAqIGNvdW50KSArICdweCc7XHJcbiAgICAgICAgICAgICAgICB6b25lU3R5bGUudG9wID0gKHRvcCArIHBhcnRUb3AgKiBjb3VudCkgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgem9uZVN0eWxlLndpZHRoID0gKHdpZHRoICsgcGFydFdpZHRoICogY291bnQpICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIHpvbmVTdHlsZS5oZWlnaHQgPSAoaGVpZ2h0ICsgcGFydEhlaWdodCAqIGNvdW50KSArICdweCc7XHJcbiAgICAgICAgICAgICAgICBpZiAoY291bnQrKyA+PSBmcmFnbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZU90aGVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWVGdW5jdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCBpbnRlcnZhbGUpO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB6b25lU3R5bGUubGVmdCA9IGNvb3JkaW5hdGUubGVmdCArICdweCc7XHJcbiAgICAgICAgICAgIHpvbmVTdHlsZS50b3AgPSBjb29yZGluYXRlLnRvcCArICdweCc7XHJcbiAgICAgICAgICAgIHpvbmVTdHlsZS53aWR0aCA9IGNvb3JkaW5hdGUud2lkdGggKyAncHgnO1xyXG4gICAgICAgICAgICB6b25lU3R5bGUuaGVpZ2h0ID0gY29vcmRpbmF0ZS5oZWlnaHQgKyAncHgnO1xyXG5cclxuICAgICAgICAgICAgY29udGludWVGdW5jdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoaWdodGxpZ2h0Wm9uZVN0eWxpbmcoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICBjb25zdCB6b25lU3R5bGUgPSAodGhpcy56b25lLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLnN0eWxlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5yYWRpdXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChOdW1iZXIodGhpcy5yYWRpdXMpID09PSBwYXJzZUZsb2F0KHRoaXMucmFkaXVzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIGlzIG51bWVyaWMsIGNoYW5nZSBpbiAlXHJcbiAgICAgICAgICAgICAgICAgICAgem9uZVN0eWxlLmJvcmRlclJhZGl1cyA9IHRoaXMucmFkaXVzICsgJyUnO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJhZGl1cyA9PT0gJ2F1dG8nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgbW9kZSBhdXRvXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyUmFkaXVzIHdvcmsgb25seSBvbiBDaHJvbWUsIHVzZSBUb3BMZWZ0LCBUb3BSaWdodC4uLiBmb3IgRmlyZWZveC9FZ2RlL0lFXHJcbiAgICAgICAgICAgICAgICAgICAgem9uZVN0eWxlLmJvcmRlclRvcExlZnRSYWRpdXMgPSBlbGVtZW50U3R5bGUuYm9yZGVyVG9wTGVmdFJhZGl1cztcclxuICAgICAgICAgICAgICAgICAgICB6b25lU3R5bGUuYm9yZGVyVG9wUmlnaHRSYWRpdXMgPSBlbGVtZW50U3R5bGUuYm9yZGVyVG9wUmlnaHRSYWRpdXM7XHJcbiAgICAgICAgICAgICAgICAgICAgem9uZVN0eWxlLmJvcmRlckJvdHRvbUxlZnRSYWRpdXMgPSBlbGVtZW50U3R5bGUuYm9yZGVyQm90dG9tTGVmdFJhZGl1cztcclxuICAgICAgICAgICAgICAgICAgICB6b25lU3R5bGUuYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMgPSBlbGVtZW50U3R5bGUuYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIGlzIG51bWVyaWMsIGNoYW5nZSBpbiAlXHJcbiAgICAgICAgICAgICAgICAgICAgem9uZVN0eWxlLmJvcmRlclJhZGl1cyA9IHRoaXMucmFkaXVzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgem9uZVN0eWxlLmJvcmRlclJhZGl1cyA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnRlbnRCbG9ja1Bvc2l0aW9uKFxyXG4gICAgICAgIGNvb3JkaW5hdGU6IFdhbGt0aHJvdWdoRWxlbWVudENvb3JkaW5hdGUsXHJcbiAgICAgICAgYWxpZ25Db250ZW50OiAnbGVmdCcgfCAnY2VudGVyJyB8ICdyaWdodCcsXHJcbiAgICAgICAgdmVydGljYWxBbGlnbkNvbnRlbnQ6ICdhYm92ZScgfCAndG9wJyB8ICdjZW50ZXInIHwgJ2JvdHRvbScgfCAnYmVsb3cnLFxyXG4gICAgICAgIGNvbnRlbnRTcGFjaW5nOiBudW1iZXIsXHJcbiAgICAgICAgdmVydGljYWxDb250ZW50U3BhY2luZzogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuY29udGVudEJsb2NrLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgICAgIGNvbnN0IGVsZW1lbnRTaXplID0gdGhpcy5fd2Fsa3Rocm91Z2hTZXJ2aWNlLnJldHJpZXZlQ29vcmRpbmF0ZXMoZWxlbWVudCk7XHJcbiAgICAgICAgY29uc3Qgd2lkdGggPSBlbGVtZW50U2l6ZS53aWR0aCArIGVsZW1lbnRTaXplLm1hcmdpbi5sZWZ0ICsgZWxlbWVudFNpemUubWFyZ2luLnJpZ2h0O1xyXG4gICAgICAgIGNvbnN0IGhlaWdodCA9IGVsZW1lbnRTaXplLmhlaWdodCArIGVsZW1lbnRTaXplLm1hcmdpbi50b3AgKyBlbGVtZW50U2l6ZS5tYXJnaW4uYm90dG9tO1xyXG5cclxuICAgICAgICAvLyBjaGVjayBpZiB3ZSd2ZSBnb3QgdGhlIHNwYWNlIHRvIHJlc3BlY3QgdGhlIGFsaWduQ29udGVudCBhdHRyaWJ1dGVcclxuICAgICAgICBsZXQgbm90RW5vdWdoU3BhY2UgPSBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5oYXNIaWdobGlnaHRab25lKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNwYWNlTGVmdCA9IGNvb3JkaW5hdGUubGVmdDtcclxuICAgICAgICAgICAgY29uc3Qgc3BhY2VSaWdodCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gY29vcmRpbmF0ZS5sZWZ0IC0gY29vcmRpbmF0ZS53aWR0aDtcclxuICAgICAgICAgICAgaWYgKHNwYWNlTGVmdCA8IHdpZHRoICYmIHNwYWNlUmlnaHQgPCB3aWR0aCkge1xyXG4gICAgICAgICAgICAgICAgbm90RW5vdWdoU3BhY2UgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGlmIG5vdCBlbm91Z2ggc3BhY2UgdG8gcmVzcGVjdCB0aGUgYWxpZ25Db250ZW50LCBjb250ZW50IGdvZXMgYWJvdmUvYmVsb3dcclxuICAgICAgICAgICAgaWYgKCh2ZXJ0aWNhbEFsaWduQ29udGVudCA9PT0gJ3RvcCcgfHxcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25Db250ZW50ID09PSAnY2VudGVyJyB8fFxyXG4gICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbkNvbnRlbnQgPT09ICdib3R0b20nKSAmJiAhbm90RW5vdWdoU3BhY2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBjaGFuZ2UgYWxpZ24gY2VudGVyIHRvIGxlZnQgb3IgcmlnaHQgaWYgbm90IGVub3VnaCBzcGFjZSB0byBhbGlnbiBjZW50ZXJcclxuICAgICAgICAgICAgICAgIGlmIChhbGlnbkNvbnRlbnQgPT09ICdjZW50ZXInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF4U3BhY2UgPSBNYXRoLm1heChzcGFjZVJpZ2h0LCBzcGFjZUxlZnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXhTcGFjZSA8IHdpZHRoICsgKCh3aW5kb3cuaW5uZXJXaWR0aCAtIHdpZHRoKSAvIDIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduQ29udGVudCA9IHNwYWNlUmlnaHQgPiBzcGFjZUxlZnQgPyAncmlnaHQnIDogJ2xlZnQnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYWxpZ25Db250ZW50ID09PSAnbGVmdCcgJiYgc3BhY2VMZWZ0IDwgd2lkdGggfHxcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbkNvbnRlbnQgPT09ICdyaWdodCcgJiYgc3BhY2VSaWdodCA8IHdpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbkNvbnRlbnQgPSB2ZXJ0aWNhbEFsaWduQ29udGVudCA9PT0gJ2JvdHRvbScgfHwgY29vcmRpbmF0ZS50b3AgPCBoZWlnaHQgPyAnYmVsb3cnIDogJ2Fib3ZlJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaWYgbm90IGVub3VnaCBzcGFjZSBvbiBzY3JlZW4gd2lkdGgsIHdlIGNlbnRlciB0aGUgY29udGVudFxyXG4gICAgICAgIGlmIChub3RFbm91Z2hTcGFjZSkge1xyXG4gICAgICAgICAgICBhbGlnbkNvbnRlbnQgPSAnY2VudGVyJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHBvc2l0aW9uIG9mIGNvbnRlbnQgbGVmdC9jZW50ZXIvcmlnaHRcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJpZ2h0ID0gJyc7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gJyc7XHJcbiAgICAgICAgaWYgKGFsaWduQ29udGVudCA9PT0gJ2xlZnQnKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9ICcwJztcclxuICAgICAgICAgICAgaWYgKHRoaXMuaGFzSGlnaGxpZ2h0Wm9uZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3BhY2UgPSBjb29yZGluYXRlLmxlZnQgLSB3aWR0aDtcclxuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBjb250ZW50U3BhY2luZ1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRTcGFjaW5nICYmIHNwYWNlID4gY29udGVudFNwYWNpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGUubGVmdCAtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoIC1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFNwYWNpbmdcclxuICAgICAgICAgICAgICAgICAgICApICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoYWxpZ25Db250ZW50ID09PSAnY2VudGVyJykge1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSAod2luZG93LmlubmVyV2lkdGggLyAyIC0gd2lkdGggLyAyKSArICdweCc7XHJcbiAgICAgICAgfSBlbHNlIGlmIChhbGlnbkNvbnRlbnQgPT09ICdyaWdodCcpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5yaWdodCA9ICcwJztcclxuICAgICAgICAgICAgaWYgKHRoaXMuaGFzSGlnaGxpZ2h0Wm9uZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3BhY2UgPSB3aW5kb3cuaW5uZXJXaWR0aCAtIGNvb3JkaW5hdGUubGVmdCAtIGNvb3JkaW5hdGUud2lkdGggLSB3aWR0aDtcclxuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBjb250ZW50U3BhY2luZ1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRTcGFjaW5nICYmIHNwYWNlID4gY29udGVudFNwYWNpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnJpZ2h0ID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlLmxlZnQgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlLndpZHRoICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFNwYWNpbmdcclxuICAgICAgICAgICAgICAgICAgICApICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaGFzSGlnaGxpZ2h0Wm9uZSkge1xyXG4gICAgICAgICAgICAvLyBmb3IgYXJyb3cgcG9zaXRpb25cclxuICAgICAgICAgICAgY29uc3Qgc3RhcnRMZWZ0ID0gdGhpcy5fd2Fsa3Rocm91Z2hTZXJ2aWNlLnJldHJpZXZlQ29vcmRpbmF0ZXMoZWxlbWVudCkubGVmdCArIHdpZHRoIC8gMjtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2Fycm93UG9zaXRpb24gPSBzdGFydExlZnQgPiAoY29vcmRpbmF0ZS5sZWZ0IC0gV2Fsa3Rocm91Z2hDb21wb25lbnQubWluaW1hbE1hcmdpbilcclxuICAgICAgICAgICAgICAgICYmIHN0YXJ0TGVmdCA8IChjb29yZGluYXRlLmxlZnQgKyBjb29yZGluYXRlLndpZHRoICsgV2Fsa3Rocm91Z2hDb21wb25lbnQubWluaW1hbE1hcmdpbilcclxuICAgICAgICAgICAgICAgID8gJ3RvcEJvdHRvbScgOiAnbGVmdFJpZ2h0JztcclxuXHJcbiAgICAgICAgICAgIC8vIGlmIHRoZXJlIGlzIGVub3VnaCBwbGFjZSBvbiB0aGUgbGVmdCBvciBvbiB0aGUgcmlnaHQsIHdlIGNvbnNpZGVyIHZlcnRpY2FsQWxpZ25Db250ZW50LCBvdGhlcndpc2UsIHdlIGlnbm9yZSBpdFxyXG4gICAgICAgICAgICBpZiAodmVydGljYWxBbGlnbkNvbnRlbnQgJiYgIW5vdEVub3VnaFNwYWNlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3BhY2UgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29udGVudFBvc2l0aW9uID0gdmVydGljYWxBbGlnbkNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHZlcnRpY2FsQWxpZ25Db250ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYWJvdmUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFjZSA9IGNvb3JkaW5hdGUudG9wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3BhY2UgPiB2ZXJ0aWNhbENvbnRlbnRTcGFjaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnRvcCA9IChjb29yZGluYXRlLnRvcCAtIGhlaWdodCAtIHZlcnRpY2FsQ29udGVudFNwYWNpbmcpICsgJ3B4JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gJzAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Fycm93UG9zaXRpb24gPSAndG9wQm90dG9tJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndG9wJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSAoY29vcmRpbmF0ZS50b3ApICsgJ3B4JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY2VudGVyJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSAoY29vcmRpbmF0ZS50b3AgKyAoY29vcmRpbmF0ZS5oZWlnaHQgLyAyKSAtIChoZWlnaHQgLyAyKSkgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdib3R0b20nOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnRvcCA9IChjb29yZGluYXRlLnRvcCArIGNvb3JkaW5hdGUuaGVpZ2h0IC0gaGVpZ2h0KSArICdweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2JlbG93JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BhY2UgPSB0aGlzLl93YWxrdGhyb3VnaFNlcnZpY2UuZ2V0RG9jdW1lbnRIZWlnaHQoKSAtIGNvb3JkaW5hdGUudG9wICsgY29vcmRpbmF0ZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzcGFjZSA+IHZlcnRpY2FsQ29udGVudFNwYWNpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gKGNvb3JkaW5hdGUudG9wICsgY29vcmRpbmF0ZS5oZWlnaHQgKyB2ZXJ0aWNhbENvbnRlbnRTcGFjaW5nKSArICdweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnRvcCA9ICh0aGlzLl93YWxrdGhyb3VnaFNlcnZpY2UuZ2V0RG9jdW1lbnRIZWlnaHQoKSAtIGhlaWdodCkgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Fycm93UG9zaXRpb24gPSAndG9wQm90dG9tJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBwb3NpdGlvbiBvZiBjb250ZW50IHRvcC9ib3R0b21cclxuICAgICAgICAgICAgICAgIGlmICh2ZXJ0aWNhbEFsaWduQ29udGVudCA9PT0gJ2JlbG93JyB8fCBjb29yZGluYXRlLnRvcCA8IGhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gKGNvb3JkaW5hdGUudG9wICsgY29vcmRpbmF0ZS5oZWlnaHQgKyBXYWxrdGhyb3VnaENvbXBvbmVudC5taW5pbWFsTWFyZ2luKSArICdweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29udGVudFBvc2l0aW9uID0gJ2JlbG93JztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSAoY29vcmRpbmF0ZS50b3AgLSBoZWlnaHQgLSBXYWxrdGhyb3VnaENvbXBvbmVudC5taW5pbWFsTWFyZ2luKSArICdweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29udGVudFBvc2l0aW9uID0gJ2Fib3ZlJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gKHRoaXMuX3dhbGt0aHJvdWdoU2VydmljZS5nZXRIZWlnaHRPZlBhZ2UoKSAvIDIgLSBoZWlnaHQgLyAyKSArICdweCc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBhcnJvd1Bvc2l0aW9uKGNvb3JkaW5hdGU6IFdhbGt0aHJvdWdoRWxlbWVudENvb3JkaW5hdGUsIHZlcnRpY2FsQ29udGVudFNwYWNpbmc6IG51bWJlcikge1xyXG5cclxuICAgICAgICBjb25zdCBjb250ZW50QmxvY2tFbGVtZW50ID0gdGhpcy5jb250ZW50QmxvY2submF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICBjb25zdCBjb250ZW50QmxvY2tDb29yZGluYXRlcyA9IHRoaXMuX3dhbGt0aHJvdWdoU2VydmljZS5yZXRyaWV2ZUNvb3JkaW5hdGVzKGNvbnRlbnRCbG9ja0VsZW1lbnQpO1xyXG5cclxuICAgICAgICBsZXQgc3RhcnRMZWZ0ID0gY29udGVudEJsb2NrQ29vcmRpbmF0ZXMubGVmdCArIGNvbnRlbnRCbG9ja0Nvb3JkaW5hdGVzLndpZHRoIC8gMjtcclxuICAgICAgICBsZXQgc3RhcnRUb3AgPSBjb250ZW50QmxvY2tDb29yZGluYXRlcy50b3AgKyBjb250ZW50QmxvY2tDb29yZGluYXRlcy5oZWlnaHQ7XHJcbiAgICAgICAgbGV0IGNlbnRlclRvcDogbnVtYmVyO1xyXG4gICAgICAgIGxldCBjZW50ZXJMZWZ0OiBudW1iZXI7XHJcbiAgICAgICAgbGV0IGVuZExlZnQgPSBjb29yZGluYXRlLmxlZnQ7XHJcbiAgICAgICAgbGV0IGVuZFRvcCA9IGNvb3JkaW5hdGUudG9wICsgdGhpcy5tYXJnaW5ab25lUHgudG9wO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHRoaXMuX2NvbnRlbnRQb3NpdGlvbikge1xyXG4gICAgICAgICAgICBjYXNlICd0b3AnOlxyXG4gICAgICAgICAgICBjYXNlICdjZW50ZXInOlxyXG4gICAgICAgICAgICBjYXNlICdib3R0b20nOlxyXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRCbG9ja0Nvb3JkaW5hdGVzLmxlZnQgPiBjb29yZGluYXRlLmxlZnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydExlZnQgPSBjb250ZW50QmxvY2tDb29yZGluYXRlcy5sZWZ0O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydExlZnQgPSBjb250ZW50QmxvY2tDb29yZGluYXRlcy5sZWZ0ICsgY29udGVudEJsb2NrQ29vcmRpbmF0ZXMud2lkdGg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzdGFydFRvcCAtPSBjb250ZW50QmxvY2tDb29yZGluYXRlcy5oZWlnaHQgLyAyO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2JlbG93JzpcclxuICAgICAgICAgICAgICAgIHN0YXJ0VG9wIC09IGNvbnRlbnRCbG9ja0Nvb3JkaW5hdGVzLmhlaWdodDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2Fycm93UG9zaXRpb24gPT09ICd0b3BCb3R0b20nKSB7XHJcbiAgICAgICAgICAgIGVuZExlZnQgKz0gY29vcmRpbmF0ZS53aWR0aCAvIDI7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fY29udGVudFBvc2l0aW9uID09PSAnYmVsb3cnKSB7XHJcbiAgICAgICAgICAgICAgICBlbmRUb3AgKz0gY29vcmRpbmF0ZS5oZWlnaHQgKyA2O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZW5kVG9wIC09IDY7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNlbnRlckxlZnQgPSAoc3RhcnRMZWZ0ICsgZW5kTGVmdCkgLyAyO1xyXG4gICAgICAgICAgICBjZW50ZXJUb3AgPSAoc3RhcnRUb3AgKyBlbmRUb3ApIC8gMjtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYXJyb3dQYXRoID0gYE0ke3N0YXJ0TGVmdH0sJHtzdGFydFRvcH0gUSR7c3RhcnRMZWZ0fSwke2NlbnRlclRvcH0gJHtjZW50ZXJMZWZ0fSwke2NlbnRlclRvcH0gYFxyXG4gICAgICAgICAgICAgICAgKyBgUSR7ZW5kTGVmdH0sJHtjZW50ZXJUb3B9ICR7ZW5kTGVmdH0sJHtlbmRUb3B9YDtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHN0YXJ0TGVmdCA+IGNvb3JkaW5hdGUubGVmdCkge1xyXG4gICAgICAgICAgICAgICAgZW5kTGVmdCArPSBjb29yZGluYXRlLndpZHRoICsgdGhpcy5hcnJvd01hcmtlckRpc3Q7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbmRMZWZ0IC09IHRoaXMuYXJyb3dNYXJrZXJEaXN0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBlbmRUb3AgKz0gY29vcmRpbmF0ZS5oZWlnaHQgLyAyO1xyXG5cclxuICAgICAgICAgICAgY2VudGVyTGVmdCA9IChzdGFydExlZnQgKyBlbmRMZWZ0KSAvIDI7XHJcbiAgICAgICAgICAgIGNlbnRlclRvcCA9IChzdGFydFRvcCArIGVuZFRvcCkgLyAyO1xyXG5cclxuICAgICAgICAgICAgbGV0IGRpcmVjdFN0YXJ0TGVmdDogbnVtYmVyID0gc3RhcnRMZWZ0O1xyXG4gICAgICAgICAgICBsZXQgZGlyZWN0U3RhcnRUb3A6IG51bWJlciA9IHN0YXJ0VG9wO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fY29udGVudFBvc2l0aW9uID09PSAndG9wJyB8fCB0aGlzLl9jb250ZW50UG9zaXRpb24gPT09ICdib3R0b20nKSB7XHJcbiAgICAgICAgICAgICAgICBkaXJlY3RTdGFydExlZnQgPSBjb250ZW50QmxvY2tDb29yZGluYXRlcy5sZWZ0ICsgKGNvbnRlbnRCbG9ja0Nvb3JkaW5hdGVzLndpZHRoIC8gMik7XHJcbiAgICAgICAgICAgICAgICBkaXJlY3RTdGFydFRvcCA9ICh0aGlzLl9jb250ZW50UG9zaXRpb24gPT09ICd0b3AnKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgKGNvbnRlbnRCbG9ja0Nvb3JkaW5hdGVzLnRvcCArIGNvbnRlbnRCbG9ja0Nvb3JkaW5hdGVzLmhlaWdodCkgOlxyXG4gICAgICAgICAgICAgICAgICAgIChjb250ZW50QmxvY2tDb29yZGluYXRlcy50b3ApO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHdlIHVzZSBkaXJlY3QgY3VydmUgb25seSBpZiB0aGUgYXJyb3cgZG9uJ3QgY3Jvc3MgdGhlIGNvbnRlbnQsIG90aGVyd2lzZSwgd2UgdXNlIGRvdWJsZSBjdXJ2ZWRcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAodGhpcy5fY29udGVudFBvc2l0aW9uID09PSAndG9wJyAmJiBkaXJlY3RTdGFydFRvcCA8IChlbmRUb3AgLSBXYWxrdGhyb3VnaENvbXBvbmVudC5taW5pbWFsTWFyZ2luKSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAodGhpcy5fY29udGVudFBvc2l0aW9uID09PSAnYm90dG9tJyAmJiBkaXJlY3RTdGFydFRvcCA+IChlbmRUb3AgKyBXYWxrdGhyb3VnaENvbXBvbmVudC5taW5pbWFsTWFyZ2luKSlcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXJyb3dQYXRoID0gYE0ke2RpcmVjdFN0YXJ0TGVmdH0sJHtkaXJlY3RTdGFydFRvcH0gUSR7ZGlyZWN0U3RhcnRMZWZ0fSwke2VuZFRvcH0gJHtlbmRMZWZ0fSwke2VuZFRvcH1gO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFycm93UGF0aCA9IGBNJHtzdGFydExlZnR9LCR7c3RhcnRUb3B9IFEke2NlbnRlckxlZnR9LCR7c3RhcnRUb3B9ICR7Y2VudGVyTGVmdH0sJHtjZW50ZXJUb3B9IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKyBgUSR7Y2VudGVyTGVmdH0sJHtlbmRUb3B9ICR7ZW5kTGVmdH0sJHtlbmRUb3B9YDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyb3dQYXRoID0gYE0ke2RpcmVjdFN0YXJ0TGVmdH0sJHtkaXJlY3RTdGFydFRvcH0gUSR7ZGlyZWN0U3RhcnRMZWZ0fSwke2VuZFRvcH0gJHtlbmRMZWZ0fSwke2VuZFRvcH1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc3RvcCB0aGUgd2Fsa3Rocm91Z2ggOiBoaWRlIHRoZSBjb250YWluZXIgYW5kIGNoYW5nZSB0byBwYXVzZSBhdCB0cnVlXHJcbiAgICAgKi9cclxuICAgIHN0b3AoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyZW50ICYmICF0aGlzLnBhdXNlICYmIHRoaXMuc2hvdykge1xyXG4gICAgICAgICAgICB0aGlzLnNob3cgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5wYXVzZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY29udGludWUgdGhlIHdhbGt0aHJvdWdoIGlmIGlzIHN0b3BwZWQgOiBzaG93IHRoZSBjb250YWluZXIgYW5kIGNoYW5nZSB0byBwYXVzZSBhdCBmYWxzZVxyXG4gICAgICovXHJcbiAgICBjb250aW51ZSh1bnBhdXNlID0gZmFsc2UpIHtcclxuICAgICAgICBpZiAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXVzZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3cgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnBhdXNlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICh1bnBhdXNlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiBmb2N1c0VsZW1lbnQgZG9lcyBub3QgZXhpc3QgYW55bW9yZSwgd2UgY2xvc2UgdGhlIHdhbGt0aHJvdWdoICh3aXRob3V0IGVtaXRpbmcgYW55IGV2ZW50KVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50LmZvY3VzRWxlbWVudFNlbGVjdG9yICYmICFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMucGFyZW50LmZvY3VzRWxlbWVudFNlbGVjdG9yKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoZmFsc2UsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgdXBkYXRlIGVsZW1lbnRzIHBvc2l0aW9uaW5nIG9uIHRoZSBjdXJyZW50IHdhbGt0aHJvdWdoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9wZW4oKSB7XHJcbiAgICAgICAgLy8gY2hhbmdlIG1hcmtlclVybCBvbiBTYWZhcmlcclxuICAgICAgICAvLyByZWxhdGVkIHRvXHJcbiAgICAgICAgLy8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vbGVvbmRlcmlqa2UvYzVjZjdjNWIyZTQyNGMwMDYxZDJcclxuICAgICAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xODI2NTMzNi83OTYxNTJcclxuICAgICAgICAvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcvbGlua2luZy5odG1sXHJcbiAgICAgICAgaWYgKGlzX3NhZmFyaSkge1xyXG4gICAgICAgICAgICB0aGlzLm1hcmtlclVybCA9ICd1cmwoJyArIHdpbmRvdy5sb2NhdGlvbi5ocmVmICsgJyN3a3QtYXJyb3cpJztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zaG93ID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcmV2aW91cygpIHtcclxuICAgICAgICB0aGlzLmNsb3NlKGZhbHNlLCBmYWxzZSk7XHJcblxyXG4gICAgICAgIC8vIHdlIGNoZWNrIGlmIHByZXZpb3VzIHdhbGt0aHJvdWdoIGlzIG5vdCBkaXNhYmxlZFxyXG4gICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5wYXJlbnQ7XHJcbiAgICAgICAgd2hpbGUgKGN1cnJlbnQpIHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnQucHJldmlvdXNTdGVwICYmICFjdXJyZW50LnByZXZpb3VzU3RlcC5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudC5sb2FkUHJldmlvdXN0U3RlcCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjdXJyZW50LnByZXZpb3VzU3RlcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQucHJldmlvdXNTdGVwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIG5vIG1vcmUgcHJldmlvdXMgd2Fsa3Rocm91Z2ggZW5hYmxlZCwgd2UgcXVpdCB0aGUgd2Fsa3Rocm91Z2hcclxuICAgICAgICB0aGlzLnBhcmVudCA9IGN1cnJlbnQ7XHJcbiAgICAgICAgdGhpcy5jbG9zZSh0cnVlLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBuZXh0KCkge1xyXG4gICAgICAgIHRoaXMuY2xvc2UoZmFsc2UsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgLy8gd2UgY2hlY2sgaWYgbmV4dCB3YWxrdGhyb3VnaCBpcyBub3QgZGlzYWJsZWRcclxuICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMucGFyZW50O1xyXG4gICAgICAgIHdoaWxlIChjdXJyZW50KSB7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50Lm5leHRTdGVwICYmICFjdXJyZW50Lm5leHRTdGVwLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50LmxvYWROZXh0U3RlcCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjdXJyZW50Lm5leHRTdGVwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0U3RlcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBubyBtb3JlIG5leHQgd2Fsa3Rocm91Z2ggZW5hYmxlZCwgd2UgcXVpdCB0aGUgd2Fsa3Rocm91Z2hcclxuICAgICAgICB0aGlzLnBhcmVudCA9IGN1cnJlbnQ7XHJcbiAgICAgICAgdGhpcy5jbG9zZSh0cnVlLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZShmaW5pc2hMaW5rID0gZmFsc2UsIGNsb3NlV2Fsa3Rocm91Z2ggPSB0cnVlKSB7XHJcbiAgICAgICAgLy8gcmVtb3ZlIGNvbnRlbnRcclxuICAgICAgICB0aGlzLl9wb3J0YWxIb3N0LmRpc3Bvc2UoKTtcclxuICAgICAgICAvLyBoaWRlXHJcbiAgICAgICAgdGhpcy5zaG93ID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50LmhpZGUoZmluaXNoTGluaywgY2xvc2VXYWxrdGhyb3VnaCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgSW5wdXQsXHJcbiAgICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgICBRdWVyeUxpc3QsXHJcbiAgICBBZnRlclZpZXdJbml0LFxyXG4gICAgT3V0cHV0LFxyXG4gICAgRXZlbnRFbWl0dGVyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBib29sZWFuVmFsdWUsIFdhbGt0aHJvdWdoRXZlbnQgfSBmcm9tICcuL3dhbGt0aHJvdWdoLXRvb2xzJztcclxuaW1wb3J0IHsgV2Fsa3Rocm91Z2hUZXh0IH0gZnJvbSAnLi93YWxrdGhyb3VnaC10ZXh0JztcclxuaW1wb3J0IHsgV2Fsa3Rocm91Z2hDb21wb25lbnQgfSBmcm9tICcuL3dhbGt0aHJvdWdoLmNvbXBvbmVudCc7XHJcblxyXG5sZXQgbmV4dFVuaXF1ZUlkID0gMDtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICduZy13YWxrdGhyb3VnaC1mbG93JyxcclxuICAgIHRlbXBsYXRlOiAnJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgV2Fsa3Rocm91Z2hGbG93Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gICAgQENvbnRlbnRDaGlsZHJlbihXYWxrdGhyb3VnaENvbXBvbmVudCkgd2Fsa3Rocm91Z2hDb21wb25lbnRzOiBRdWVyeUxpc3Q8V2Fsa3Rocm91Z2hDb21wb25lbnQ+O1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgaWQoKSB7IHJldHVybiB0aGlzLl9pZDsgfVxyXG4gICAgc2V0IGlkKHZhbHVlOiBzdHJpbmcpIHsgdGhpcy5faWQgPSB2YWx1ZSB8fCB0aGlzLl91aWQ7IH1cclxuXHJcbiAgICBAT3V0cHV0KCkgY2xvc2VkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgICBAT3V0cHV0KCkgZmluaXNoZWQ6IEV2ZW50RW1pdHRlcjxXYWxrdGhyb3VnaEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBJbnB1dCgpIGNvbnRlbnRTdHlsZTogJ25vbmUnIHwgJ2RyYWtlbicgPSAnZHJha2VuJztcclxuXHJcbiAgICBASW5wdXQoKSBhcnJvd0NvbG9yOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBtYXJnaW5ab25lOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICAgIEBJbnB1dCgpIHNob3dBcnJvdzogc3RyaW5nIHwgYm9vbGVhbjtcclxuXHJcbiAgICBASW5wdXQoKSByb290RWxlbWVudDogc3RyaW5nO1xyXG5cclxuICAgIEBJbnB1dCgpIGNsb3NlQnV0dG9uOiBzdHJpbmcgfCBib29sZWFuO1xyXG4gICAgQElucHV0KCkgY2xvc2VBbnl3aGVyZTogc3RyaW5nIHwgYm9vbGVhbjtcclxuICAgIEBJbnB1dCgpIGZpbmlzaEJ1dHRvbjogc3RyaW5nIHwgYm9vbGVhbjtcclxuXHJcbiAgICBASW5wdXQoKSBmb2N1c0JhY2tkcm9wOiBzdHJpbmcgfCBib29sZWFuO1xyXG4gICAgQElucHV0KCkgZm9jdXNHbG93OiBzdHJpbmcgfCBib29sZWFuO1xyXG4gICAgQElucHV0KCkgcmFkaXVzOiBzdHJpbmc7XHJcblxyXG4gICAgQElucHV0KCkgdGV4dHM6IFdhbGt0aHJvdWdoVGV4dDtcclxuXHJcbiAgICBwcml2YXRlIF9pZDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfdWlkID0gYHdhbGt0aHJvdWdoLWZsb3ctJHtuZXh0VW5pcXVlSWQrK31gO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICB9LCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIGxldCBwcmV2Q29tcDogV2Fsa3Rocm91Z2hDb21wb25lbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMud2Fsa3Rocm91Z2hDb21wb25lbnRzLmZvckVhY2goKHdhbGt0aHJvdWdoOiBXYWxrdGhyb3VnaENvbXBvbmVudCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgLy8gbmF2aWdhdGlvbiBhdXRvIChpZ25vcmUgcHJldmlvdXNTdGVwL25leHRTdGVwIG9uIHRoZSBXYWxrdGhyb3VnaENvbXBvbmVudClcclxuXHJcbiAgICAgICAgICAgIGlmIChwcmV2Q29tcCkge1xyXG4gICAgICAgICAgICAgICAgd2Fsa3Rocm91Z2gucHJldmlvdXNTdGVwID0gcHJldkNvbXA7XHJcbiAgICAgICAgICAgICAgICBwcmV2Q29tcC5uZXh0U3RlcCA9IHdhbGt0aHJvdWdoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHByZXZDb21wID0gd2Fsa3Rocm91Z2g7XHJcblxyXG4gICAgICAgICAgICAvLyB0cmFuc21pdGlvbiAob25seSBpZiBkaWZmZXJlbnQgZnJvbSBkZWZhdWx0KVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XHJcbiAgICAgICAgICAgICAgICB3YWxrdGhyb3VnaC5jbG9zZWQgPSB0aGlzLmNsb3NlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5maW5pc2hlZCkge1xyXG4gICAgICAgICAgICAgICAgd2Fsa3Rocm91Z2guZmluaXNoZWQgPSB0aGlzLmZpbmlzaGVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghd2Fsa3Rocm91Z2guY29udGVudFN0eWxlICYmIHRoaXMuY29udGVudFN0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICB3YWxrdGhyb3VnaC5jb250ZW50U3R5bGUgPSB0aGlzLmNvbnRlbnRTdHlsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXdhbGt0aHJvdWdoLmFycm93Q29sb3IgJiYgdGhpcy5hcnJvd0NvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICB3YWxrdGhyb3VnaC5hcnJvd0NvbG9yID0gdGhpcy5hcnJvd0NvbG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghd2Fsa3Rocm91Z2gubWFyZ2luWm9uZSAmJiB0aGlzLm1hcmdpblpvbmUpIHtcclxuICAgICAgICAgICAgICAgIHdhbGt0aHJvdWdoLm1hcmdpblpvbmUgPSB0aGlzLm1hcmdpblpvbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCF3YWxrdGhyb3VnaC5zaG93QXJyb3cgJiYgYm9vbGVhblZhbHVlKHRoaXMuc2hvd0Fycm93KSkge1xyXG4gICAgICAgICAgICAgICAgd2Fsa3Rocm91Z2guc2hvd0Fycm93ID0gdGhpcy5zaG93QXJyb3c7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCF3YWxrdGhyb3VnaC5yb290RWxlbWVudCAmJiB0aGlzLnJvb3RFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICB3YWxrdGhyb3VnaC5yb290RWxlbWVudCA9IHRoaXMucm9vdEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCF3YWxrdGhyb3VnaC5jbG9zZUJ1dHRvbiAmJiBib29sZWFuVmFsdWUodGhpcy5jbG9zZUJ1dHRvbikpIHtcclxuICAgICAgICAgICAgICAgIHdhbGt0aHJvdWdoLmNsb3NlQnV0dG9uID0gdGhpcy5jbG9zZUJ1dHRvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAod2Fsa3Rocm91Z2guY2xvc2VBbnl3aGVyZSAmJiAhYm9vbGVhblZhbHVlKHRoaXMuY2xvc2VBbnl3aGVyZSkpIHtcclxuICAgICAgICAgICAgICAgIHdhbGt0aHJvdWdoLmNsb3NlQW55d2hlcmUgPSB0aGlzLmNsb3NlQW55d2hlcmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCF3YWxrdGhyb3VnaC5maW5pc2hCdXR0b24gJiYgYm9vbGVhblZhbHVlKHRoaXMuZmluaXNoQnV0dG9uKSkge1xyXG4gICAgICAgICAgICAgICAgd2Fsa3Rocm91Z2guZmluaXNoQnV0dG9uID0gdGhpcy5maW5pc2hCdXR0b247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCF3YWxrdGhyb3VnaC5mb2N1c0JhY2tkcm9wICYmIGJvb2xlYW5WYWx1ZSh0aGlzLmZvY3VzQmFja2Ryb3ApKSB7XHJcbiAgICAgICAgICAgICAgICB3YWxrdGhyb3VnaC5mb2N1c0JhY2tkcm9wID0gdGhpcy5mb2N1c0JhY2tkcm9wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghd2Fsa3Rocm91Z2guZm9jdXNHbG93ICYmIGJvb2xlYW5WYWx1ZSh0aGlzLmZvY3VzR2xvdykpIHtcclxuICAgICAgICAgICAgICAgIHdhbGt0aHJvdWdoLmZvY3VzR2xvdyA9IHRoaXMuZm9jdXNHbG93O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghd2Fsa3Rocm91Z2gucmFkaXVzICYmIHRoaXMucmFkaXVzKSB7XHJcbiAgICAgICAgICAgICAgICB3YWxrdGhyb3VnaC5yYWRpdXMgPSB0aGlzLnJhZGl1cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXdhbGt0aHJvdWdoLnRleHRzICYmIHRoaXMudGV4dHMpIHtcclxuICAgICAgICAgICAgICAgIHdhbGt0aHJvdWdoLnRleHRzID0gdGhpcy50ZXh0cztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBuYXZpZ2F0aW9uIGF1dG8gKGNsb3NlIG9uIGxhc3Qgc3RlcClcclxuICAgICAgICBwcmV2Q29tcC5maW5pc2hCdXR0b24gPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMud2Fsa3Rocm91Z2hDb21wb25lbnRzLmZpcnN0Lm9wZW4oKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFBvcnRhbE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuXG5pbXBvcnQgeyBXYWxrdGhyb3VnaEZsb3dDb21wb25lbnQgfSBmcm9tICcuL3dhbGt0aHJvdWdoLWZsb3cuY29tcG9uZW50JztcbmltcG9ydCB7IFdhbGt0aHJvdWdoQ29tcG9uZW50IH0gZnJvbSAnLi93YWxrdGhyb3VnaC5jb21wb25lbnQnO1xuaW1wb3J0IHsgV2Fsa3Rocm91Z2hTZXJ2aWNlIH0gZnJvbSAnLi93YWxrdGhyb3VnaC5zZXJ2aWNlJztcbmltcG9ydCB7IFdhbGt0aHJvdWdoQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi93YWxrdGhyb3VnaC1jb250YWluZXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBQb3J0YWxNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgV2Fsa3Rocm91Z2hGbG93Q29tcG9uZW50LFxuICAgIFdhbGt0aHJvdWdoQ29tcG9uZW50LFxuICAgIFdhbGt0aHJvdWdoQ29udGFpbmVyQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBXYWxrdGhyb3VnaEZsb3dDb21wb25lbnQsXG4gICAgV2Fsa3Rocm91Z2hDb21wb25lbnQsXG4gICAgV2Fsa3Rocm91Z2hDb250YWluZXJDb21wb25lbnRcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgV2Fsa3Rocm91Z2hDb250YWluZXJDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgV2Fsa3Rocm91Z2hTZXJ2aWNlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgV2Fsa3Rocm91Z2hNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsidHNsaWJfMS5fX2V4dGVuZHMiLCJuZXh0VW5pcXVlSWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztxQkFnQmEsWUFBWSxHQUFHLFVBQUMsS0FBdUI7SUFDaEQsT0FBTyxLQUFLLEtBQUssTUFBTSxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUM7Q0FDN0MsQ0FBQztBQUVGLElBQUE7SUFDSSwwQkFDVyxXQUNBO1FBREEsY0FBUyxHQUFULFNBQVM7UUFDVCxpQkFBWSxHQUFaLFlBQVk7S0FDbEI7MkJBeEJUO0lBeUJDLENBQUE7QUFMRCxJQU9BO0lBV0ksMkJBQ1csS0FDQSxPQUNBLFFBQ0E7O1FBSEEsUUFBRyxHQUFILEdBQUc7UUFDSCxVQUFLLEdBQUws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LFdBQVcsQ0FBQyxVQUFVLElBQUksS0FBSSxDQUFDLFVBQVUsRUFBRTtnQkFDNUMsV0FBVyxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDO2FBQzVDO1lBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLElBQUksS0FBSSxDQUFDLFVBQVUsRUFBRTtnQkFDNUMsV0FBVyxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDO2FBQzVDO1lBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLElBQUksWUFBWSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTtnQkFDeEQsV0FBVyxDQUFDLFNBQVMsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDO2FBQzFDO1lBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLElBQUksS0FBSSxDQUFDLFdBQVcsRUFBRTtnQkFDOUMsV0FBVyxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDO2FBQzlDO1lBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLElBQUksWUFBWSxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsRUFBRTtnQkFDNUQsV0FBVyxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDO2FBQzlDO1lBQ0QsSUFBSSxXQUFXLENBQUMsYUFBYSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsRUFBRTtnQkFDaEUsV0FBVyxDQUFDLGFBQWEsR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDO2FBQ2xEO1lBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLElBQUksWUFBWSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsRUFBRTtnQkFDOUQsV0FBVyxDQUFDLFlBQVksR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDO2FBQ2hEO1lBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLElBQUksWUFBWSxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsRUFBRTtnQkFDaEUsV0FBVyxDQUFDLGFBQWEsR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDO2FBQ2xEO1lBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLElBQUksWUFBWSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTtnQkFDeEQsV0FBVyxDQUFDLFNBQVMsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDO2FBQzFDO1lBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLElBQUksS0FBSSxDQUFDLE1BQU0sRUFBRTtnQkFDcEMsV0FBVyxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDO2FBQ3BDO1lBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLElBQUksS0FBSSxDQUFDLEtBQUssRUFBRTtnQkFDbEMsV0FBVyxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDO2FBQ2xDO1NBRUosQ0FBQyxDQUFDOztRQUVILFFBQVEsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0tBQ2hDOzs7O0lBRUQsd0NBQUs7OztJQUFMO1FBQ0ksSUFBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUMzQzs7Z0JBM0dKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixRQUFRLEVBQUUsRUFBRTtpQkFDZjs7Ozs7d0NBR0ksZUFBZSxTQUFDLG9CQUFvQjtxQkFFcEMsS0FBSzt5QkFJTCxNQUFNOzJCQUNOLE1BQU07K0JBQ04sS0FBSzs2QkFFTCxLQUFLOzZCQUNMLEtBQUs7NEJBQ0wsS0FBSzs4QkFFTCxLQUFLOzhCQUVMLEtBQUs7Z0NBQ0wsS0FBSzsrQkFDTCxLQUFLO2dDQUVMLEtBQUs7NEJBQ0wsS0FBSzt5QkFDTCxLQUFLO3dCQUVMLEtBQUs7O21DQTlDVjs7Ozs7OztBQ0FBOzs7O2dCQVNDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixZQUFZO3FCQUNiO29CQUNELFlBQVksRUFBRTt3QkFDWix3QkFBd0I7d0JBQ3hCLG9CQUFvQjt3QkFDcEIsNkJBQTZCO3FCQUM5QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1Asd0JBQXdCO3dCQUN4QixvQkFBb0I7d0JBQ3BCLDZCQUE2QjtxQkFDOUI7b0JBQ0QsZUFBZSxFQUFFO3dCQUNmLDZCQUE2QjtxQkFDOUI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNULGtCQUFrQjtxQkFDbkI7aUJBQ0Y7OzRCQTlCRDs7Ozs7Ozs7Ozs7Ozs7OyJ9

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

module.exports = "<div>\n  <div>\n    <button id=\"test1\"\n            class=\"rename\"\n            (click)=\"walk1.open()\">Test 1</button>\n    <button id=\"testTable\"\n            class=\"rename\"\n            (click)=\"walkTable.open()\">Test Table</button>\n    <button id=\"testSelectorChange\"\n            class=\"rename\"\n            (click)=\"walkSelectorChange.open()\">Test Selector change</button>\n    <button id=\"testFlow\"\n            class=\"rename\"\n            (click)=\"walkFlow.start()\">Test Flow</button>\n    <button id=\"hiddenTimer\"\n            class=\"rename\"\n            (click)=\"hideWalkthrough()\">{{hideCount > 0 ? 'Hide walkthrough in '+ hideCount+ 's' : 'Continue'}}</button>\n    <button id=\"test3\"\n            class=\"rename\"\n            (click)=\"walk3.open()\">Test 3</button>\n    <div class=\"avalaible\">\n      <button (click)=\"pause()\">Pause walkthrough</button>\n      <button (click)=\"rename()\">Toggle focusElementSelector</button>\n      <button (click)=\"continue()\">Continue walkthrough</button>\n    </div>\n  </div>\n  <div class=\"overflow\">\n    <div></div>\n    <div>\n      <button id=\"test2\"\n              class=\"rename\"\n              (click)=\"walk2.open()\">Test 2</button>\n    </div>\n  </div>\n\n  <table>\n    <colgroup>\n      <col id=\"col1\" />\n      <col id=\"col2\" />\n      <col id=\"col3\" />\n    </colgroup>\n    <thead>\n      <tr>\n        <th>Col 1</th>\n        <th>Col 2</th>\n        <th>Col 3</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>1</td>\n        <td>2</td>\n        <td>3</td>\n      </tr>\n      <tr>\n        <td>butternut</td>\n        <td>butterfly</td>\n        <td>buttermilk</td>\n      </tr>\n      <tr>\n        <td>doubeurre</td>\n        <td>papillon de jour</td>\n        <td>babeurre</td>\n      </tr>\n    </tbody>\n  </table>\n\n  <div class=\"bigger\">\n    <button id=\"test4\"\n            class=\"rename\"\n            (click)=\"walk4.open()\">Test 4</button>\n  </div>\n\n  <div class=\"valign-container\">\n    <button id=\"valign\"\n            class=\"rename\"\n            (click)=\"valign.open()\"\n            [style.height]=\"valignHeight\">alignContent\n      <br>and\n      <br>contentSpacing</button>\n\n    <button id=\"increase\"\n            (click)=\"valignHeight = '1500px'\">increase height</button>\n    <button id=\"decrease\"\n            (click)=\"valignHeight = '600px'\">decrease height</button>\n  </div>\n</div>\n\n<ng-walkthrough #walk1\n                id=\"wt-test1\"\n                focusElementSelector=\"#test1\"\n                focusGlow=\"true\"\n                [contentTemplate]=\"step1\"\n                [nextStep]=\"walk1b\"\n                (closed)=\"walk1Closed($event)\"\n                (finished)=\"walk1Finished()\"\n                closeButton=\"true\"\n                closeAnywhere=\"false\"\n                [focusClick]=\"focusClickAction\">\n  <ng-template #step1>\n    <p>\n      1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius blandit dolor, sit amet condimentum eros vulputate\n      sed. Aenean maximus dui a lobortis pharetra. Suspendisse potenti. Nulla facilisi. Suspendisse potenti. Integer porta\n      nec arcu molestie sodales. Pellentesque et diam tellus. Quisque at nisi id neque tempus varius. Donec vestibulum nisi\n      ac risus laoreet lobortis. Cras tristique et sem mollis vehicula. Nulla maximus urna a leo consectetur, at fringilla\n      odio volutpat. Praesent ultricies nunc eget tellus convallis, non hendrerit augue semper. Maecenas elit ex, lobortis\n      at sapien sed, fermentum volutpat sem.\n    </p>\n  </ng-template>\n</ng-walkthrough>\n<ng-walkthrough #walk1b\n                id=\"wt-test1b\"\n                focusBackdrop=\"true\"\n                [contentTemplate]=\"step1b\"\n                [previousStep]=\"walk1\"\n                [nextStep]=\"walk1c\"\n                closeButton=\"true\"\n                closeAnywhere=\"false\"\n                finishButton=\"true\">\n  <ng-template #step1b>\n    <p>\n      1b. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius blandit dolor, sit amet condimentum eros vulputate\n      sed. Aenean maximus dui a lobortis pharetra. Suspendisse potenti. Nulla facilisi. Suspendisse potenti. Integer porta\n      nec arcu molestie sodales. Pellentesque et diam tellus. Quisque at nisi id neque tempus varius. Donec vestibulum nisi\n      ac risus laoreet lobortis. Cras tristique et sem mollis vehicula. Nulla maximus urna a leo consectetur, at fringilla\n      odio volutpat. Praesent ultricies nunc eget tellus convallis, non hendrerit augue semper. Maecenas elit ex, lobortis\n      at sapien sed, fermentum volutpat sem.\n    </p>\n  </ng-template>\n</ng-walkthrough>\n<ng-walkthrough #walk1c\n                id=\"wt-test1\"\n                focusElementSelector=\"#test1\"\n                focusBackdrop=\"true\"\n                [previousStep]=\"walk1b\"\n                [nextStep]=\"walk2\"\n                closeButton=\"true\"\n                closeAnywhere=\"false\"\n                [focusClick]=\"focusClickAction\"\n                contentText=\"1c. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius blandit dolor, sit amet\n  condimentum eros vulputate sed. \">\n</ng-walkthrough>\n<ng-walkthrough #walk2\n                id=\"wt-test2\"\n                focusElementSelector=\"#test2\"\n                focusBackdrop=\"true\"\n                focusHighlightAnimation=\"true\"\n                [contentTemplate]=\"step2\"\n                [previousStep]=\"walk1c\"\n                [nextStep]=\"walk3\"\n                closeButton=\"true\"\n                closeAnywhere=\"false\"\n                showArrow=\"true\">\n  <ng-template #step2>\n    <p>\n      2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius blandit dolor, sit amet condimentum eros vulputate\n      sed. Aenean maximus dui a lobortis pharetra. Suspendisse potenti. Nulla facilisi. Suspendisse potenti. Integer porta\n      nec arcu molestie sodales. Pellentesque et diam tellus. Quisque at nisi id neque tempus varius. Donec vestibulum nisi\n      ac risus laoreet lobortis. Cras tristique et sem mollis vehicula. Nulla maximus urna a leo consectetur, at fringilla\n      odio volutpat. Praesent ultricies nunc eget tellus convallis, non hendrerit augue semper. Maecenas elit ex, lobortis\n      at sapien sed, fermentum volutpat sem.\n    </p>\n  </ng-template>\n</ng-walkthrough>\n<ng-walkthrough #walk3\n                id=\"wt-test3\"\n                focusElementSelector=\"#test3\"\n                focusElementCSSClass=\"redbutton\"\n                focusBackdrop=\"true\"\n                [contentTemplate]=\"step3\"\n                [previousStep]=\"walk2\"\n                [nextStep]=\"walk4\"\n                (ready)=\"walk3IsReady($event)\"\n                closeButton=\"true\"\n                closeAnywhere=\"false\"\n                showArrow=\"true\"\n                arrowColor=\"yellow\"\n                radius=\"auto\"\n                marginZone=\"12 9\">\n  <ng-template #step3>\n    <p>\n      3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius blandit dolor, sit amet condimentum eros vulputate\n      sed. Aenean maximus dui a lobortis pharetra. Suspendisse potenti. Nulla facilisi. Suspendisse potenti. Integer porta\n      nec arcu molestie sodales. Pellentesque et diam tellus. Quisque at nisi id neque tempus varius. Donec vestibulum nisi\n      ac risus laoreet lobortis. Cras tristique et sem mollis vehicula. Nulla maximus urna a leo consectetur, at fringilla\n      odio volutpat. Praesent ultricies nunc eget tellus convallis, non hendrerit augue semper. Maecenas elit ex, lobortis\n      at sapien sed, fermentum volutpat sem.\n    </p>\n  </ng-template>\n</ng-walkthrough>\n<ng-walkthrough #walk4\n                id=\"wt-test4\"\n                focusElementSelector=\"#test4\"\n                focusBackdrop=\"true\"\n                [contentTemplate]=\"step4\"\n                contentStyle=\"none\"\n                [previousStep]=\"walk3\"\n                finishButton=\"true\"\n                [texts]=\"frenchText\"\n                showArrow=\"true\">\n  <ng-template #step4>\n    <p>\n      4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius blandit dolor, sit amet condimentum eros vulputate\n      sed. Aenean maximus dui a lobortis pharetra. Suspendisse potenti. Nulla facilisi. Suspendisse potenti. Integer porta\n      nec arcu molestie sodales. Pellentesque et diam tellus. Quisque at nisi id neque tempus varius. Donec vestibulum nisi\n      ac risus laoreet lobortis. Cras tristique et sem mollis vehicula. Nulla maximus urna a leo consectetur, at fringilla\n      odio volutpat. Praesent ultricies nunc eget tellus convallis, non hendrerit augue semper. Maecenas elit ex, lobortis\n      at sapien sed, fermentum volutpat sem.\n    </p>\n  </ng-template>\n</ng-walkthrough>\n\n<ng-walkthrough #valign\n                id=\"wt-valign\"\n                focusElementSelector=\"#valign\"\n                focusBackdrop=\"true\"\n                [contentTemplate]=\"valignContent\"\n                finishButton=\"true\"\n                showArrow=\"true\"\n                [verticalAlignContent]=\"verticalAlignContent\"\n                [alignContent]=\"alignContent\"\n                [contentSpacing]=\"contentSpacing\"\n                [verticalContentSpacing]=\"verticalContentSpacing\"\n                closeAnywhere=\"false\">\n  <ng-template #valignContent>\n    <div id=\"valign-content\">\n      <p>alignContent {{ alignContent }}</p>\n      <p>verticalAlignContent {{ verticalAlignContent }}</p>\n      <p>contentSpacing\n        <input #spacingValue\n               [value]=\"contentSpacing\"\n               (change)=\"contentSpacing = spacingValue.value\"\n               type=\"number\"\n               min=\"0\" />\n      </p>\n      <p>verticalContentSpacing\n        <input #verticalSpacingValue\n               [value]=\"verticalContentSpacing\"\n               (change)=\"verticalContentSpacing = verticalSpacingValue.value\"\n               type=\"number\"\n               min=\"0\" />\n      </p>\n      alignContent value :\n      <div>\n        <button (click)=\"alignContent ='left'\">left</button>\n        <button (click)=\"alignContent ='center'\">center</button>\n        <button (click)=\"alignContent ='right'\">right</button>\n      </div>\n      verticalAlignContent value :\n      <div>\n        <button (click)=\"verticalAlignContent ='above'\">above</button>\n        <button (click)=\"verticalAlignContent ='top'\">top</button>\n        <button (click)=\"verticalAlignContent ='center'\">center</button>\n        <button (click)=\"verticalAlignContent ='bottom'\">bottom</button>\n        <button (click)=\"verticalAlignContent ='below'\">below</button>\n      </div>\n    </div>\n  </ng-template>\n</ng-walkthrough>\n\n<ng-walkthrough #walkTable\n                id=\"wt-testTable\"\n                focusElementSelector=\"table th:nth-child(2), table td:nth-child(2)\"\n                typeSelector=\"zone\"\n                focusBackdrop=\"true\"\n                [contentTemplate]=\"testTable\"\n                showArrow=\"true\"\n                radius=\"5\"\n                closeButton=\"true\"\n                closeAnywhere=\"false\"\n                [alignContent]=\"testPosition\">\n  <ng-template #testTable>\n    <p>\n      Look this.\n    </p>\n    <div>\n      <button (click)=\"buttonAction()\">{{testClickTexts[testClickCount]}}</button>\n    </div>\n    <div>\n      <button (click)=\"testPosition ='left'\">Left</button>\n      <button (click)=\"testPosition ='center'\">Center</button>\n      <button (click)=\"testPosition ='right'\">Right</button>\n    </div>\n  </ng-template>\n</ng-walkthrough>\n\n<ng-walkthrough #walkSelectorChange\n                id=\"wt-testSelectorChange\"\n                [focusElementSelector]=\"isMobile ? 'table th:first-child, table td:first-child' : 'table th:nth-child(2), table td:nth-child(2)'\"\n                typeSelector=\"zone\"\n                focusBackdrop=\"true\"\n                [contentTemplate]=\"testSelectorChange\"\n                showArrow=\"true\"\n                closeAnywhere=\"false\"\n                [alignContent]=\"testPosition\">\n  <ng-template #testSelectorChange>\n    <p>\n      mobile: win &lt; 768px ; desktop: win &ge; 768px\n      <br> current: {{isMobile ? 'mobile' : 'desktop' }}\n    </p>\n  </ng-template>\n</ng-walkthrough>\n\n<ng-walkthrough-flow #walkFlow\n                     id=\"wt-test-flow\"\n                     focusBackdrop=\"true\"\n                     focusHighlightAnimation=\"true\"\n                     closeButton=\"true\"\n                     closeAnywhere=\"false\"\n                     arrowColor=\"#000\"\n                     showArrow=\"true\"\n                     radius=\"auto\"\n                     [texts]=\"frenchText\"\n                     (closed)=\"flowClosed($event)\"\n                     (finished)=\"flowFinished()\">\n  <ng-walkthrough id=\"wt-test1-flow\"\n                  focusElementSelector=\"#test1\"\n                  [contentTemplate]=\"step1flow\"\n                  [disabled]=\"step1flowDisabled\">\n    <ng-template #step1flow>\n      <p>\n        This step is {{ step1flowDisabled ? 'disabled' : 'enabled' }}\n      </p>\n      <p>\n        <button (click)=\"step2flowDisabled = !step2flowDisabled\">Next step is {{ step2flowDisabled ? 'disabled' : 'enabled' }}</button>\n      </p>\n      <p>\n        1f. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius blandit dolor, sit amet condimentum eros vulputate\n        sed. Aenean maximus dui a lobortis pharetra. Suspendisse potenti. Nulla facilisi. Suspendisse potenti. Integer porta\n        nec arcu molestie sodales. Pellentesque et diam tellus. Quisque at nisi id neque tempus varius. Donec vestibulum\n        nisi ac risus laoreet lobortis. Cras tristique et sem mollis vehicula. Nulla maximus urna a leo consectetur, at fringilla\n        odio volutpat. Praesent ultricies nunc eget tellus convallis, non hendrerit augue semper. Maecenas elit ex, lobortis\n        at sapien sed, fermentum volutpat sem.\n      </p>\n    </ng-template>\n  </ng-walkthrough>\n  <ng-walkthrough id=\"wt-test2-flow\"\n                  focusElementSelector=\"#test2\"\n                  [contentTemplate]=\"step2flow\"\n                  [disabled]=\"step2flowDisabled\">\n    <ng-template #step2flow>\n      <p>\n        This step is {{ step2flowDisabled ? 'disabled' : 'enabled' }}\n      </p>\n      <p>\n        <button (click)=\"step1flowDisabled = !step1flowDisabled\">Previous step is {{ step1flowDisabled ? 'disabled' : 'enabled' }}</button>\n      </p>\n      <p>\n        <button (click)=\"step3flowDisabled = !step3flowDisabled\">Next step is {{ step3flowDisabled ? 'disabled' : 'enabled' }}</button>\n      </p>\n      <p>\n        2f. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius blandit dolor, sit amet condimentum eros vulputate\n        sed. Aenean maximus dui a lobortis pharetra. Suspendisse potenti. Nulla facilisi. Suspendisse potenti. Integer porta\n        nec arcu molestie sodales. Pellentesque et diam tellus. Quisque at nisi id neque tempus varius. Donec vestibulum\n        nisi ac risus laoreet lobortis. Cras tristique et sem mollis vehicula. Nulla maximus urna a leo consectetur, at fringilla\n        odio volutpat. Praesent ultricies nunc eget tellus convallis, non hendrerit augue semper. Maecenas elit ex, lobortis\n        at sapien sed, fermentum volutpat sem.\n      </p>\n    </ng-template>\n  </ng-walkthrough>\n  <ng-walkthrough id=\"wt-test3-flow\"\n                  focusElementSelector=\"#test3\"\n                  [contentTemplate]=\"step3flow\"\n                  closeButton=\"true\"\n                  arrowColor=\"yellow\"\n                  [disabled]=\"step3flowDisabled\">\n    <ng-template #step3flow>\n      <p>\n        This step is {{ step3flowDisabled ? 'disabled' : 'enabled' }}\n      </p>\n      <p>\n        <button (click)=\"step2flowDisabled = !step2flowDisabled\">Previous step is {{ step2flowDisabled ? 'disabled' : 'enabled' }}</button>\n      </p>\n      <p>\n        3f. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius blandit dolor, sit amet condimentum eros vulputate\n        sed. Aenean maximus dui a lobortis pharetra. Suspendisse potenti. Nulla facilisi. Suspendisse potenti. Integer porta\n        nec arcu molestie sodales. Pellentesque et diam tellus. Quisque at nisi id neque tempus varius. Donec vestibulum\n        nisi ac risus laoreet lobortis. Cras tristique et sem mollis vehicula. Nulla maximus urna a leo consectetur, at fringilla\n        odio volutpat. Praesent ultricies nunc eget tellus convallis, non hendrerit augue semper. Maecenas elit ex, lobortis\n        at sapien sed, fermentum volutpat sem.\n      </p>\n    </ng-template>\n  </ng-walkthrough>\n  <ng-walkthrough id=\"wt-test4-flow\"\n                  [contentTemplate]=\"step4flow\"\n                  closeButton=\"true\"\n                  [disabled]=\"step4flowDisabled\">\n    <ng-template #step4flow>\n      <p>\n        No focusElementSelector\n      </p>\n      <p>\n        This step is {{ step4flowDisabled ? 'disabled' : 'enabled' }}\n      </p>\n      <p>\n        <button (click)=\"step3flowDisabled = !step3flowDisabled\">Previous step is {{ step3flowDisabled ? 'disabled' : 'enabled' }}</button>\n      </p>\n      <p>\n        4g. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius blandit dolor, sit amet condimentum eros vulputate\n        sed. Aenean maximus dui a lobortis pharetra. Suspendisse potenti. Nulla facilisi. Suspendisse potenti. Integer porta\n        nec arcu molestie sodales. Pellentesque et diam tellus. Quisque at nisi id neque tempus varius. Donec vestibulum\n        nisi ac risus laoreet lobortis. Cras tristique et sem mollis vehicula. Nulla maximus urna a leo consectetur, at fringilla\n        odio volutpat. Praesent ultricies nunc eget tellus convallis, non hendrerit augue semper. Maecenas elit ex, lobortis\n        at sapien sed, fermentum volutpat sem.\n      </p>\n    </ng-template>\n  </ng-walkthrough>\n</ng-walkthrough-flow>"

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
/* harmony import */ var angular_walkthrough__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-walkthrough */ "./dist/angular-walkthrough/fesm5/angular-walkthrough.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
                    if (angular_walkthrough__WEBPACK_IMPORTED_MODULE_1__["WalkthroughComponent"].walkthroughHasShow() && !angular_walkthrough__WEBPACK_IMPORTED_MODULE_1__["WalkthroughComponent"].walkthroughHasPause()) {
                        angular_walkthrough__WEBPACK_IMPORTED_MODULE_1__["WalkthroughComponent"].walkthroughStop();
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
            angular_walkthrough__WEBPACK_IMPORTED_MODULE_1__["WalkthroughComponent"].walkthroughContinue();
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
        angular_walkthrough__WEBPACK_IMPORTED_MODULE_1__["WalkthroughComponent"].walkthroughStop();
    };
    AppComponent.prototype.continue = function () {
        angular_walkthrough__WEBPACK_IMPORTED_MODULE_1__["WalkthroughComponent"].walkthroughContinue();
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
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var angular_walkthrough__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-walkthrough */ "./dist/angular-walkthrough/fesm5/angular-walkthrough.js");
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
                angular_walkthrough__WEBPACK_IMPORTED_MODULE_3__["WalkthroughModule"],
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

module.exports = __webpack_require__(/*! C:\Users\BMenadier\dev\projects\ng-walkthrough\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map