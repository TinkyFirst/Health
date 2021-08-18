"use strict";
var __assign = (this && this.__assign) || function () {
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
Object.defineProperty(exports, "__esModule", { value: true });
var ViewportChecker = /** @class */ (function () {
    function ViewportChecker(query, userOptions) {
        this.query = query;
        /**
         * Size of the provided scrollBox
         */
        this.boxSize = {
            height: 0,
            width: 0
        };
        // Merge user options with default options
        this.options = __assign({ classToAdd: 'visible', classToRemove: 'invisible', classToAddForFullView: 'full-visible', removeClassAfterAnimation: false, offset: 100, repeat: false, invertBottomOffset: true, callbackFunction: function () { return void 0; }, scrollHorizontal: false, scrollBox: window }, userOptions);
    }
    ViewportChecker.prototype.handleEvent = function (evt) {
        switch (evt.type) {
            case 'scroll':
                this.check();
                break;
            case 'resize':
                this.recalculateBoxsize();
                this.check();
                break;
        }
    };
    /**
     * Query the document for elements and save them under elements
     */
    ViewportChecker.prototype.attach = function () {
        // Get elements and calculate box size
        this.elements = document.querySelectorAll(this.query);
        this.recalculateBoxsize();
        // Register on global event listeners
        this._registerIndex = registerGlobalInstance(this);
        if (!(this.options.scrollBox instanceof Window)) {
            var box = this.resolveScrollBox();
            box.addEventListener('scroll', this);
        }
        // Perform initial check
        this.check();
    };
    /**
     * Detach checker from elements.
     */
    ViewportChecker.prototype.detach = function () {
        if (this._registerIndex) {
            unregisterGlobalInstance(this._registerIndex);
            this._registerIndex = undefined;
            if (!(this.options.scrollBox instanceof Window)) {
                var box = this.resolveScrollBox();
                box.removeEventListener('scroll', this);
            }
        }
    };
    /**
     * Returns a reference to the defined scrollbox
     */
    ViewportChecker.prototype.resolveScrollBox = function () {
        if (this.options.scrollBox instanceof Window) {
            return this.options.scrollBox;
        }
        var box = document.querySelector(this.options.scrollBox);
        if (!box) {
            throw new Error(this.options.scrollBox + " does not resolve to an existing DOM Element");
        }
        return box;
    };
    /**
     * Recalculate and set the box size
     */
    ViewportChecker.prototype.recalculateBoxsize = function () {
        this.boxSize = this.getBoxSize();
    };
    /**
     * Main method which checks the elements and applies the correct actions to it
     */
    ViewportChecker.prototype.check = function () {
        var _this = this;
        var _a;
        var viewportStart = 0;
        var viewportEnd = 0;
        // Set some vars to check with
        if (!this.options.scrollHorizontal) {
            viewportStart = Math.max(document.body.scrollTop, document.documentElement.scrollTop, window.scrollY);
            viewportEnd = (viewportStart + this.boxSize.height);
        }
        else {
            viewportStart = Math.max(document.body.scrollLeft, document.documentElement.scrollLeft, window.scrollX);
            viewportEnd = (viewportStart + this.boxSize.width);
        }
        // Loop through all given dom elements
        (_a = this.elements) === null || _a === void 0 ? void 0 : _a.forEach(function ($obj) {
            var _a, _b, _c, _d, _e, _f;
            var objOptions = __assign({}, _this.options);
            var attrOptionMap = {
                classToAdd: 'vpAddClass',
                classToRemove: 'vpRemoveClass',
                classToAddForFullView: 'vpAddClassFullView',
                removeClassAfterAnimation: 'vpKeepAddClass',
                offset: 'vpOffset',
                repeat: 'vpRepeat',
                scrollHorizontal: 'vpScrollHorizontal',
                invertBottomOffset: 'vpInvertBottomOffset'
            };
            //  Get any individual attribution data and override original
            // options.
            for (var opt in attrOptionMap) {
                var dataKey = attrOptionMap[opt];
                var val = $obj.dataset[dataKey];
                if (val) {
                    objOptions[opt] = val;
                }
                ;
            }
            // If class already exists; quit
            if ($obj.dataset.vpAnimated && !objOptions.repeat) {
                return;
            }
            // Check if the offset is percentage based
            var objOffset;
            if (typeof objOptions.offset === 'string') {
                objOffset = objOptions.offset.includes('%') ? (parseInt(objOptions.offset) / 100) * _this.boxSize.height : parseInt(objOptions.offset);
            }
            else if (typeof objOptions.offset === 'number') {
                objOffset = objOptions.offset;
            }
            else {
                throw new Error("Provided objOffet '" + objOptions.offset + "' can't be parsed. Provide a percentage or absolute number");
            }
            // Get the raw start and end positions
            var rawStart = (!objOptions.scrollHorizontal) ? $obj.getBoundingClientRect().top : $obj.getBoundingClientRect().left;
            var rawEnd = rawStart + ((!objOptions.scrollHorizontal) ? $obj.clientHeight : $obj.clientWidth);
            // Add the defined offset
            var elemStart = Math.round(rawStart) + objOffset;
            var elemEnd = elemStart + ((!objOptions.scrollHorizontal) ? $obj.clientHeight : $obj.clientWidth);
            if (objOptions.invertBottomOffset) {
                elemEnd -= (objOffset * 2);
            }
            // Add class if in viewport
            if ((elemStart < viewportEnd) && (elemEnd > viewportStart)) {
                // Remove class
                (_a = $obj.classList).remove.apply(_a, objOptions.classToRemove.split(' '));
                (_b = $obj.classList).add.apply(_b, objOptions.classToAdd.split(' '));
                // Do the callback function. Callback wil send the jQuery object as parameter
                objOptions.callbackFunction($obj, 'add');
                // Check if full element is in view
                if (rawEnd <= viewportEnd && rawStart >= viewportStart) {
                    (_c = $obj.classList).add.apply(_c, objOptions.classToAddForFullView.split(' '));
                }
                else {
                    (_d = $obj.classList).remove.apply(_d, objOptions.classToAddForFullView.split(' '));
                }
                // Set element as already animated
                $obj.dataset.vpAnimated = 'true';
                if (objOptions.removeClassAfterAnimation) {
                    $obj.addEventListener('animationend', function () {
                        var _a;
                        return (_a = $obj.classList).remove.apply(_a, objOptions.classToAdd.split(' '));
                    }, {
                        once: true
                    });
                }
                // Remove class if not in viewport and repeat is true
            }
            else if (objOptions.repeat && objOptions.classToAdd.split(' ').reduce(function (exists, cls) { return exists || $obj.classList.contains(cls); }, false)) {
                (_e = $obj.classList).remove.apply(_e, objOptions.classToAdd.split(' '));
                (_f = $obj.classList).remove.apply(_f, objOptions.classToAddForFullView.split(' '));
                // Do the callback function.
                objOptions.callbackFunction($obj, "remove");
                // Remove already-animated-flag
                $obj.dataset.vpAnimated = undefined;
            }
        });
    };
    /**
     * Get box size of provided scrollBox
     */
    ViewportChecker.prototype.getBoxSize = function () {
        var box = this.resolveScrollBox();
        return (box instanceof Window) ? { height: box.innerHeight, width: box.innerWidth } : { height: box.clientHeight, width: box.clientWidth };
    };
    return ViewportChecker;
}());
exports.default = ViewportChecker;
/**
 * Register the provided instance on the global window object
 * which allows us to reuse the existing event listeners.
 *
 * The returned index can be used to remove the registered instance
 * from the register
 */
var registerGlobalInstance = function (instance) {
    window._VP_CHECKERS = window._VP_CHECKERS || [];
    return window._VP_CHECKERS.push(instance);
};
/**
 * Removes an instance from the global register
 */
var unregisterGlobalInstance = function (index) {
    window._VP_CHECKERS = window._VP_CHECKERS || [];
    if (window._VP_CHECKERS[index]) {
        window._VP_CHECKERS.splice(index, 1);
    }
};
(function (window, document) {
    /**
     * Check elements of registered instances
     */
    var checkElements = function () {
        (window._VP_CHECKERS || []).forEach(function (i) { return i.check(); });
    };
    /**
     * Check elements of registered instances
     */
    var recalculateBoxsizes = function () {
        (window._VP_CHECKERS || []).forEach(function (i) { return i.recalculateBoxsize(); });
    };
    /**
     * Binding the correct event listener is still a tricky thing.
     * People have expierenced sloppy scrolling when both scroll and touch
     * events are added, but to make sure devices with both scroll and touch
     * are handled too we always have to add the window.scroll event
     *
     * @see  https://github.com/dirkgroenen/jQuery-viewport-checker/issues/25
     * @see  https://github.com/dirkgroenen/jQuery-viewport-checker/issues/27
     */
    if ('ontouchstart' in window || 'onmsgesturechange' in window) {
        // Device with touchscreen
        ['touchmove', 'MSPointerMove', 'pointermove'].forEach(function (e) { return document.addEventListener(e, checkElements); });
    }
    // Always load on window load
    window.addEventListener('load', checkElements, { once: true });
    // Handle resizes
    window.addEventListener('resize', function () {
        recalculateBoxsizes();
        checkElements();
    });
})(window, document);
