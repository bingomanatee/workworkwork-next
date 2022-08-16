"use strict";
exports.id = 724;
exports.ids = [724];
exports.modules = {

/***/ 6813:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4187);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @module ol/AssertionError
 */

/**
 * Error object thrown when an assertion failed. This is an ECMA-262 Error,
 * extended with a `code` property.
 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error.
 */
var AssertionError = /** @class */ (function (_super) {
    __extends(AssertionError, _super);
    /**
     * @param {number} code Error code.
     */
    function AssertionError(code) {
        var _this = this;
        var path = _util_js__WEBPACK_IMPORTED_MODULE_0__/* .VERSION */ .q4 === 'latest' ? _util_js__WEBPACK_IMPORTED_MODULE_0__/* .VERSION */ .q4 : 'v' + _util_js__WEBPACK_IMPORTED_MODULE_0__/* .VERSION.split */ .q4.split('-')[0];
        var message = 'Assertion failed. See https://openlayers.org/en/' +
            path +
            '/doc/errors/#' +
            code +
            ' for details.';
        _this = _super.call(this, message) || this;
        /**
         * Error code. The meaning of the code can be found on
         * https://openlayers.org/en/latest/doc/errors/ (replace `latest` with
         * the version found in the OpenLayers script's header comment if a version
         * other than the latest is used).
         * @type {number}
         * @api
         */
        _this.code = code;
        /**
         * @type {string}
         */
        _this.name = 'AssertionError';
        // Re-assign message, see https://github.com/Rich-Harris/buble/issues/40
        _this.message = message;
        return _this;
    }
    return AssertionError;
}(Error));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AssertionError);
//# sourceMappingURL=AssertionError.js.map

/***/ }),

/***/ 5431:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @module ol/Disposable
 */
/**
 * @classdesc
 * Objects that need to clean up after themselves.
 */
var Disposable = /** @class */ (function () {
    function Disposable() {
        /**
         * The object has already been disposed.
         * @type {boolean}
         * @protected
         */
        this.disposed = false;
    }
    /**
     * Clean up.
     */
    Disposable.prototype.dispose = function () {
        if (!this.disposed) {
            this.disposed = true;
            this.disposeInternal();
        }
    };
    /**
     * Extension point for disposable objects.
     * @protected
     */
    Disposable.prototype.disposeInternal = function () { };
    return Disposable;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Disposable);
//# sourceMappingURL=Disposable.js.map

/***/ }),

/***/ 553:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @module ol/ImageState
 */
/**
 * @enum {number}
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    IDLE: 0,
    LOADING: 1,
    LOADED: 2,
    ERROR: 3,
    EMPTY: 4,
});
//# sourceMappingURL=ImageState.js.map

/***/ }),

/***/ 34:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ol_ImageTile)
});

// EXTERNAL MODULE: ./node_modules/ol/Tile.js
var Tile = __webpack_require__(4806);
// EXTERNAL MODULE: ./node_modules/ol/TileState.js
var TileState = __webpack_require__(7195);
// EXTERNAL MODULE: ./node_modules/ol/dom.js
var dom = __webpack_require__(8326);
// EXTERNAL MODULE: ./node_modules/ol/events/EventType.js
var EventType = __webpack_require__(5487);
// EXTERNAL MODULE: ./node_modules/ol/events/Target.js
var Target = __webpack_require__(208);
// EXTERNAL MODULE: ./node_modules/ol/util.js
var util = __webpack_require__(4187);
;// CONCATENATED MODULE: ./node_modules/ol/ImageBase.js
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @module ol/ImageBase
 */



/**
 * @abstract
 */
var ImageBase = /** @class */ (function (_super) {
    __extends(ImageBase, _super);
    /**
     * @param {import("./extent.js").Extent} extent Extent.
     * @param {number|undefined} resolution Resolution.
     * @param {number} pixelRatio Pixel ratio.
     * @param {import("./ImageState.js").default} state State.
     */
    function ImageBase(extent, resolution, pixelRatio, state) {
        var _this = _super.call(this) || this;
        /**
         * @protected
         * @type {import("./extent.js").Extent}
         */
        _this.extent = extent;
        /**
         * @private
         * @type {number}
         */
        _this.pixelRatio_ = pixelRatio;
        /**
         * @protected
         * @type {number|undefined}
         */
        _this.resolution = resolution;
        /**
         * @protected
         * @type {import("./ImageState.js").default}
         */
        _this.state = state;
        return _this;
    }
    /**
     * @protected
     */
    ImageBase.prototype.changed = function () {
        this.dispatchEvent(EventType/* default.CHANGE */.Z.CHANGE);
    };
    /**
     * @return {import("./extent.js").Extent} Extent.
     */
    ImageBase.prototype.getExtent = function () {
        return this.extent;
    };
    /**
     * @abstract
     * @return {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} Image.
     */
    ImageBase.prototype.getImage = function () {
        return (0,util/* abstract */.O3)();
    };
    /**
     * @return {number} PixelRatio.
     */
    ImageBase.prototype.getPixelRatio = function () {
        return this.pixelRatio_;
    };
    /**
     * @return {number} Resolution.
     */
    ImageBase.prototype.getResolution = function () {
        return /** @type {number} */ (this.resolution);
    };
    /**
     * @return {import("./ImageState.js").default} State.
     */
    ImageBase.prototype.getState = function () {
        return this.state;
    };
    /**
     * Load not yet loaded URI.
     * @abstract
     */
    ImageBase.prototype.load = function () {
        (0,util/* abstract */.O3)();
    };
    return ImageBase;
}(Target/* default */.Z));
/* harmony default export */ const ol_ImageBase = (ImageBase);
//# sourceMappingURL=ImageBase.js.map
// EXTERNAL MODULE: ./node_modules/ol/ImageState.js
var ImageState = __webpack_require__(553);
// EXTERNAL MODULE: ./node_modules/ol/has.js
var has = __webpack_require__(177);
// EXTERNAL MODULE: ./node_modules/ol/extent.js + 1 modules
var extent = __webpack_require__(2833);
// EXTERNAL MODULE: ./node_modules/ol/events.js
var events = __webpack_require__(5818);
;// CONCATENATED MODULE: ./node_modules/ol/Image.js
var Image_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @module ol/Image
 */






/**
 * A function that takes an {@link module:ol/Image~ImageWrapper} for the image and a
 * `{string}` for the src as arguments. It is supposed to make it so the
 * underlying image {@link module:ol/Image~ImageWrapper#getImage} is assigned the
 * content specified by the src. If not specified, the default is
 *
 *     function(image, src) {
 *       image.getImage().src = src;
 *     }
 *
 * Providing a custom `imageLoadFunction` can be useful to load images with
 * post requests or - in general - through XHR requests, where the src of the
 * image element would be set to a data URI when the content is loaded.
 *
 * @typedef {function(ImageWrapper, string): void} LoadFunction
 * @api
 */
var ImageWrapper = /** @class */ (function (_super) {
    Image_extends(ImageWrapper, _super);
    /**
     * @param {import("./extent.js").Extent} extent Extent.
     * @param {number|undefined} resolution Resolution.
     * @param {number} pixelRatio Pixel ratio.
     * @param {string} src Image source URI.
     * @param {?string} crossOrigin Cross origin.
     * @param {LoadFunction} imageLoadFunction Image load function.
     */
    function ImageWrapper(extent, resolution, pixelRatio, src, crossOrigin, imageLoadFunction) {
        var _this = _super.call(this, extent, resolution, pixelRatio, ImageState/* default.IDLE */.Z.IDLE) || this;
        /**
         * @private
         * @type {string}
         */
        _this.src_ = src;
        /**
         * @private
         * @type {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement}
         */
        _this.image_ = new Image();
        if (crossOrigin !== null) {
            _this.image_.crossOrigin = crossOrigin;
        }
        /**
         * @private
         * @type {?function():void}
         */
        _this.unlisten_ = null;
        /**
         * @protected
         * @type {import("./ImageState.js").default}
         */
        _this.state = ImageState/* default.IDLE */.Z.IDLE;
        /**
         * @private
         * @type {LoadFunction}
         */
        _this.imageLoadFunction_ = imageLoadFunction;
        return _this;
    }
    /**
     * @return {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} Image.
     * @api
     */
    ImageWrapper.prototype.getImage = function () {
        return this.image_;
    };
    /**
     * Tracks loading or read errors.
     *
     * @private
     */
    ImageWrapper.prototype.handleImageError_ = function () {
        this.state = ImageState/* default.ERROR */.Z.ERROR;
        this.unlistenImage_();
        this.changed();
    };
    /**
     * Tracks successful image load.
     *
     * @private
     */
    ImageWrapper.prototype.handleImageLoad_ = function () {
        if (this.resolution === undefined) {
            this.resolution = (0,extent/* getHeight */.Cr)(this.extent) / this.image_.height;
        }
        this.state = ImageState/* default.LOADED */.Z.LOADED;
        this.unlistenImage_();
        this.changed();
    };
    /**
     * Load the image or retry if loading previously failed.
     * Loading is taken care of by the tile queue, and calling this method is
     * only needed for preloading or for reloading in case of an error.
     * @api
     */
    ImageWrapper.prototype.load = function () {
        if (this.state == ImageState/* default.IDLE */.Z.IDLE || this.state == ImageState/* default.ERROR */.Z.ERROR) {
            this.state = ImageState/* default.LOADING */.Z.LOADING;
            this.changed();
            this.imageLoadFunction_(this, this.src_);
            this.unlisten_ = listenImage(this.image_, this.handleImageLoad_.bind(this), this.handleImageError_.bind(this));
        }
    };
    /**
     * @param {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} image Image.
     */
    ImageWrapper.prototype.setImage = function (image) {
        this.image_ = image;
        this.resolution = (0,extent/* getHeight */.Cr)(this.extent) / this.image_.height;
    };
    /**
     * Discards event handlers which listen for load completion or errors.
     *
     * @private
     */
    ImageWrapper.prototype.unlistenImage_ = function () {
        if (this.unlisten_) {
            this.unlisten_();
            this.unlisten_ = null;
        }
    };
    return ImageWrapper;
}(ol_ImageBase));
/**
 * @param {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} image Image element.
 * @param {function():any} loadHandler Load callback function.
 * @param {function():any} errorHandler Error callback function.
 * @return {function():void} Callback to stop listening.
 */
function listenImage(image, loadHandler, errorHandler) {
    var img = /** @type {HTMLImageElement} */ (image);
    var listening = true;
    var decoding = false;
    var loaded = false;
    var listenerKeys = [
        (0,events/* listenOnce */.Vx)(img, EventType/* default.LOAD */.Z.LOAD, function () {
            loaded = true;
            if (!decoding) {
                loadHandler();
            }
        }),
    ];
    if (img.src && has/* IMAGE_DECODE */.Tp) {
        decoding = true;
        img
            .decode()
            .then(function () {
            if (listening) {
                loadHandler();
            }
        })
            .catch(function (error) {
            if (listening) {
                if (loaded) {
                    loadHandler();
                }
                else {
                    errorHandler();
                }
            }
        });
    }
    else {
        listenerKeys.push((0,events/* listenOnce */.Vx)(img, EventType/* default.ERROR */.Z.ERROR, errorHandler));
    }
    return function unlisten() {
        listening = false;
        listenerKeys.forEach(events/* unlistenByKey */.bN);
    };
}
/* harmony default export */ const ol_Image = ((/* unused pure expression or super */ null && (ImageWrapper)));
//# sourceMappingURL=Image.js.map
;// CONCATENATED MODULE: ./node_modules/ol/ImageTile.js
var ImageTile_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @module ol/ImageTile
 */




var ImageTile = /** @class */ (function (_super) {
    ImageTile_extends(ImageTile, _super);
    /**
     * @param {import("./tilecoord.js").TileCoord} tileCoord Tile coordinate.
     * @param {import("./TileState.js").default} state State.
     * @param {string} src Image source URI.
     * @param {?string} crossOrigin Cross origin.
     * @param {import("./Tile.js").LoadFunction} tileLoadFunction Tile load function.
     * @param {import("./Tile.js").Options} [opt_options] Tile options.
     */
    function ImageTile(tileCoord, state, src, crossOrigin, tileLoadFunction, opt_options) {
        var _this = _super.call(this, tileCoord, state, opt_options) || this;
        /**
         * @private
         * @type {?string}
         */
        _this.crossOrigin_ = crossOrigin;
        /**
         * Image URI
         *
         * @private
         * @type {string}
         */
        _this.src_ = src;
        _this.key = src;
        /**
         * @private
         * @type {HTMLImageElement|HTMLCanvasElement}
         */
        _this.image_ = new Image();
        if (crossOrigin !== null) {
            _this.image_.crossOrigin = crossOrigin;
        }
        /**
         * @private
         * @type {?function():void}
         */
        _this.unlisten_ = null;
        /**
         * @private
         * @type {import("./Tile.js").LoadFunction}
         */
        _this.tileLoadFunction_ = tileLoadFunction;
        return _this;
    }
    /**
     * Get the HTML image element for this tile (may be a Canvas, Image, or Video).
     * @return {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} Image.
     * @api
     */
    ImageTile.prototype.getImage = function () {
        return this.image_;
    };
    /**
     * Sets an HTML image element for this tile (may be a Canvas or preloaded Image).
     * @param {HTMLCanvasElement|HTMLImageElement} element Element.
     */
    ImageTile.prototype.setImage = function (element) {
        this.image_ = element;
        this.state = TileState/* default.LOADED */.Z.LOADED;
        this.unlistenImage_();
        this.changed();
    };
    /**
     * Tracks loading or read errors.
     *
     * @private
     */
    ImageTile.prototype.handleImageError_ = function () {
        this.state = TileState/* default.ERROR */.Z.ERROR;
        this.unlistenImage_();
        this.image_ = getBlankImage();
        this.changed();
    };
    /**
     * Tracks successful image load.
     *
     * @private
     */
    ImageTile.prototype.handleImageLoad_ = function () {
        var image = /** @type {HTMLImageElement} */ (this.image_);
        if (image.naturalWidth && image.naturalHeight) {
            this.state = TileState/* default.LOADED */.Z.LOADED;
        }
        else {
            this.state = TileState/* default.EMPTY */.Z.EMPTY;
        }
        this.unlistenImage_();
        this.changed();
    };
    /**
     * Load not yet loaded URI.
     * @api
     */
    ImageTile.prototype.load = function () {
        if (this.state == TileState/* default.ERROR */.Z.ERROR) {
            this.state = TileState/* default.IDLE */.Z.IDLE;
            this.image_ = new Image();
            if (this.crossOrigin_ !== null) {
                this.image_.crossOrigin = this.crossOrigin_;
            }
        }
        if (this.state == TileState/* default.IDLE */.Z.IDLE) {
            this.state = TileState/* default.LOADING */.Z.LOADING;
            this.changed();
            this.tileLoadFunction_(this, this.src_);
            this.unlisten_ = listenImage(this.image_, this.handleImageLoad_.bind(this), this.handleImageError_.bind(this));
        }
    };
    /**
     * Discards event handlers which listen for load completion or errors.
     *
     * @private
     */
    ImageTile.prototype.unlistenImage_ = function () {
        if (this.unlisten_) {
            this.unlisten_();
            this.unlisten_ = null;
        }
    };
    return ImageTile;
}(Tile/* default */.Z));
/**
 * Get a 1-pixel blank image.
 * @return {HTMLCanvasElement} Blank image.
 */
function getBlankImage() {
    var ctx = (0,dom/* createCanvasContext2D */.E4)(1, 1);
    ctx.fillStyle = 'rgba(0,0,0,0)';
    ctx.fillRect(0, 0, 1, 1);
    return ctx.canvas;
}
/* harmony default export */ const ol_ImageTile = (ImageTile);
//# sourceMappingURL=ImageTile.js.map

/***/ }),

/***/ 1614:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ol_Map)
});

// EXTERNAL MODULE: ./node_modules/ol/Disposable.js
var Disposable = __webpack_require__(5431);
// EXTERNAL MODULE: ./node_modules/ol/functions.js
var functions = __webpack_require__(6885);
// EXTERNAL MODULE: ./node_modules/ol/util.js
var util = __webpack_require__(4187);
// EXTERNAL MODULE: ./node_modules/ol/transform.js
var transform = __webpack_require__(6101);
// EXTERNAL MODULE: ./node_modules/ol/extent.js + 1 modules
var extent = __webpack_require__(2833);
// EXTERNAL MODULE: ./node_modules/ol/color.js
var ol_color = __webpack_require__(9706);
;// CONCATENATED MODULE: ./node_modules/ol/style/IconImageCache.js
/**
 * @module ol/style/IconImageCache
 */

/**
 * @classdesc
 * Singleton class. Available through {@link module:ol/style/IconImageCache.shared}.
 */
var IconImageCache = /** @class */ (function () {
    function IconImageCache() {
        /**
         * @type {!Object<string, import("./IconImage.js").default>}
         * @private
         */
        this.cache_ = {};
        /**
         * @type {number}
         * @private
         */
        this.cacheSize_ = 0;
        /**
         * @type {number}
         * @private
         */
        this.maxCacheSize_ = 32;
    }
    /**
     * FIXME empty description for jsdoc
     */
    IconImageCache.prototype.clear = function () {
        this.cache_ = {};
        this.cacheSize_ = 0;
    };
    /**
     * @return {boolean} Can expire cache.
     */
    IconImageCache.prototype.canExpireCache = function () {
        return this.cacheSize_ > this.maxCacheSize_;
    };
    /**
     * FIXME empty description for jsdoc
     */
    IconImageCache.prototype.expire = function () {
        if (this.canExpireCache()) {
            var i = 0;
            for (var key in this.cache_) {
                var iconImage = this.cache_[key];
                if ((i++ & 3) === 0 && !iconImage.hasListener()) {
                    delete this.cache_[key];
                    --this.cacheSize_;
                }
            }
        }
    };
    /**
     * @param {string} src Src.
     * @param {?string} crossOrigin Cross origin.
     * @param {import("../color.js").Color} color Color.
     * @return {import("./IconImage.js").default} Icon image.
     */
    IconImageCache.prototype.get = function (src, crossOrigin, color) {
        var key = getKey(src, crossOrigin, color);
        return key in this.cache_ ? this.cache_[key] : null;
    };
    /**
     * @param {string} src Src.
     * @param {?string} crossOrigin Cross origin.
     * @param {import("../color.js").Color} color Color.
     * @param {import("./IconImage.js").default} iconImage Icon image.
     */
    IconImageCache.prototype.set = function (src, crossOrigin, color, iconImage) {
        var key = getKey(src, crossOrigin, color);
        this.cache_[key] = iconImage;
        ++this.cacheSize_;
    };
    /**
     * Set the cache size of the icon cache. Default is `32`. Change this value when
     * your map uses more than 32 different icon images and you are not caching icon
     * styles on the application level.
     * @param {number} maxCacheSize Cache max size.
     * @api
     */
    IconImageCache.prototype.setSize = function (maxCacheSize) {
        this.maxCacheSize_ = maxCacheSize;
        this.expire();
    };
    return IconImageCache;
}());
/**
 * @param {string} src Src.
 * @param {?string} crossOrigin Cross origin.
 * @param {import("../color.js").Color} color Color.
 * @return {string} Cache key.
 */
function getKey(src, crossOrigin, color) {
    var colorString = color ? (0,ol_color/* asString */.XC)(color) : 'null';
    return crossOrigin + ':' + src + ':' + colorString;
}
/* harmony default export */ const style_IconImageCache = ((/* unused pure expression or super */ null && (IconImageCache)));
/**
 * The {@link module:ol/style/IconImageCache~IconImageCache} for
 * {@link module:ol/style/Icon~Icon} images.
 * @api
 */
var shared = new IconImageCache();
//# sourceMappingURL=IconImageCache.js.map
// EXTERNAL MODULE: ./node_modules/ol/layer/Layer.js
var Layer = __webpack_require__(1295);
// EXTERNAL MODULE: ./node_modules/ol/coordinate.js
var ol_coordinate = __webpack_require__(1900);
;// CONCATENATED MODULE: ./node_modules/ol/renderer/Map.js
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @module ol/renderer/Map
 */








/**
 * @typedef HitMatch
 * @property {import("../Feature.js").FeatureLike} feature Feature.
 * @property {import("../layer/Layer.js").default} layer Layer.
 * @property {import("../geom/SimpleGeometry.js").default} geometry Geometry.
 * @property {number} distanceSq Squared distance.
 * @property {import("./vector.js").FeatureCallback<T>} callback Callback.
 * @template T
 */
/**
 * @abstract
 */
var MapRenderer = /** @class */ (function (_super) {
    __extends(MapRenderer, _super);
    /**
     * @param {import("../PluggableMap.js").default} map Map.
     */
    function MapRenderer(map) {
        var _this = _super.call(this) || this;
        /**
         * @private
         * @type {import("../PluggableMap.js").default}
         */
        _this.map_ = map;
        return _this;
    }
    /**
     * @abstract
     * @param {import("../render/EventType.js").default} type Event type.
     * @param {import("../PluggableMap.js").FrameState} frameState Frame state.
     */
    MapRenderer.prototype.dispatchRenderEvent = function (type, frameState) {
        (0,util/* abstract */.O3)();
    };
    /**
     * @param {import("../PluggableMap.js").FrameState} frameState FrameState.
     * @protected
     */
    MapRenderer.prototype.calculateMatrices2D = function (frameState) {
        var viewState = frameState.viewState;
        var coordinateToPixelTransform = frameState.coordinateToPixelTransform;
        var pixelToCoordinateTransform = frameState.pixelToCoordinateTransform;
        (0,transform/* compose */.qC)(coordinateToPixelTransform, frameState.size[0] / 2, frameState.size[1] / 2, 1 / viewState.resolution, -1 / viewState.resolution, -viewState.rotation, -viewState.center[0], -viewState.center[1]);
        (0,transform/* makeInverse */.nb)(pixelToCoordinateTransform, coordinateToPixelTransform);
    };
    /**
     * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
     * @param {import("../PluggableMap.js").FrameState} frameState FrameState.
     * @param {number} hitTolerance Hit tolerance in pixels.
     * @param {boolean} checkWrapped Check for wrapped geometries.
     * @param {import("./vector.js").FeatureCallback<T>} callback Feature callback.
     * @param {S} thisArg Value to use as `this` when executing `callback`.
     * @param {function(this: U, import("../layer/Layer.js").default): boolean} layerFilter Layer filter
     *     function, only layers which are visible and for which this function
     *     returns `true` will be tested for features.  By default, all visible
     *     layers will be tested.
     * @param {U} thisArg2 Value to use as `this` when executing `layerFilter`.
     * @return {T|undefined} Callback result.
     * @template S,T,U
     */
    MapRenderer.prototype.forEachFeatureAtCoordinate = function (coordinate, frameState, hitTolerance, checkWrapped, callback, thisArg, layerFilter, thisArg2) {
        var result;
        var viewState = frameState.viewState;
        /**
         * @param {boolean} managed Managed layer.
         * @param {import("../Feature.js").FeatureLike} feature Feature.
         * @param {import("../layer/Layer.js").default} layer Layer.
         * @param {import("../geom/Geometry.js").default} geometry Geometry.
         * @return {T|undefined} Callback result.
         */
        function forEachFeatureAtCoordinate(managed, feature, layer, geometry) {
            return callback.call(thisArg, feature, managed ? layer : null, geometry);
        }
        var projection = viewState.projection;
        var translatedCoordinate = (0,ol_coordinate/* wrapX */.Cf)(coordinate.slice(), projection);
        var offsets = [[0, 0]];
        if (projection.canWrapX() && checkWrapped) {
            var projectionExtent = projection.getExtent();
            var worldWidth = (0,extent/* getWidth */.dz)(projectionExtent);
            offsets.push([-worldWidth, 0], [worldWidth, 0]);
        }
        var layerStates = frameState.layerStatesArray;
        var numLayers = layerStates.length;
        var matches = /** @type {Array<HitMatch<T>>} */ ([]);
        var tmpCoord = [];
        for (var i = 0; i < offsets.length; i++) {
            for (var j = numLayers - 1; j >= 0; --j) {
                var layerState = layerStates[j];
                var layer = layerState.layer;
                if (layer.hasRenderer() &&
                    (0,Layer/* inView */.j)(layerState, viewState) &&
                    layerFilter.call(thisArg2, layer)) {
                    var layerRenderer = layer.getRenderer();
                    var source = layer.getSource();
                    if (layerRenderer && source) {
                        var coordinates = source.getWrapX()
                            ? translatedCoordinate
                            : coordinate;
                        var callback_1 = forEachFeatureAtCoordinate.bind(null, layerState.managed);
                        tmpCoord[0] = coordinates[0] + offsets[i][0];
                        tmpCoord[1] = coordinates[1] + offsets[i][1];
                        result = layerRenderer.forEachFeatureAtCoordinate(tmpCoord, frameState, hitTolerance, callback_1, matches);
                    }
                    if (result) {
                        return result;
                    }
                }
            }
        }
        if (matches.length === 0) {
            return undefined;
        }
        var order = 1 / matches.length;
        matches.forEach(function (m, i) { return (m.distanceSq += i * order); });
        matches.sort(function (a, b) { return a.distanceSq - b.distanceSq; });
        matches.some(function (m) {
            return (result = m.callback(m.feature, m.layer, m.geometry));
        });
        return result;
    };
    /**
     * @abstract
     * @param {import("../pixel.js").Pixel} pixel Pixel.
     * @param {import("../PluggableMap.js").FrameState} frameState FrameState.
     * @param {number} hitTolerance Hit tolerance in pixels.
     * @param {function(import("../layer/Layer.js").default<import("../source/Source").default>, (Uint8ClampedArray|Uint8Array)): T} callback Layer
     *     callback.
     * @param {function(import("../layer/Layer.js").default<import("../source/Source").default>): boolean} layerFilter Layer filter
     *     function, only layers which are visible and for which this function
     *     returns `true` will be tested for features.  By default, all visible
     *     layers will be tested.
     * @return {T|undefined} Callback result.
     * @template T
     */
    MapRenderer.prototype.forEachLayerAtPixel = function (pixel, frameState, hitTolerance, callback, layerFilter) {
        return (0,util/* abstract */.O3)();
    };
    /**
     * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
     * @param {import("../PluggableMap.js").FrameState} frameState FrameState.
     * @param {number} hitTolerance Hit tolerance in pixels.
     * @param {boolean} checkWrapped Check for wrapped geometries.
     * @param {function(this: U, import("../layer/Layer.js").default): boolean} layerFilter Layer filter
     *     function, only layers which are visible and for which this function
     *     returns `true` will be tested for features.  By default, all visible
     *     layers will be tested.
     * @param {U} thisArg Value to use as `this` when executing `layerFilter`.
     * @return {boolean} Is there a feature at the given coordinate?
     * @template U
     */
    MapRenderer.prototype.hasFeatureAtCoordinate = function (coordinate, frameState, hitTolerance, checkWrapped, layerFilter, thisArg) {
        var hasFeature = this.forEachFeatureAtCoordinate(coordinate, frameState, hitTolerance, checkWrapped, functions/* TRUE */.uX, this, layerFilter, thisArg);
        return hasFeature !== undefined;
    };
    /**
     * @return {import("../PluggableMap.js").default} Map.
     */
    MapRenderer.prototype.getMap = function () {
        return this.map_;
    };
    /**
     * Render.
     * @abstract
     * @param {?import("../PluggableMap.js").FrameState} frameState Frame state.
     */
    MapRenderer.prototype.renderFrame = function (frameState) {
        (0,util/* abstract */.O3)();
    };
    /**
     * @param {import("../PluggableMap.js").FrameState} frameState Frame state.
     * @protected
     */
    MapRenderer.prototype.scheduleExpireIconCache = function (frameState) {
        if (shared.canExpireCache()) {
            frameState.postRenderFunctions.push(expireIconCache);
        }
    };
    return MapRenderer;
}(Disposable/* default */.Z));
/**
 * @param {import("../PluggableMap.js").default} map Map.
 * @param {import("../PluggableMap.js").FrameState} frameState Frame state.
 */
function expireIconCache(map, frameState) {
    shared.expire();
}
/* harmony default export */ const Map = (MapRenderer);
//# sourceMappingURL=Map.js.map
// EXTERNAL MODULE: ./node_modules/ol/ObjectEventType.js
var ObjectEventType = __webpack_require__(5990);
// EXTERNAL MODULE: ./node_modules/ol/render/Event.js
var Event = __webpack_require__(7380);
// EXTERNAL MODULE: ./node_modules/ol/render/EventType.js
var EventType = __webpack_require__(2329);
;// CONCATENATED MODULE: ./node_modules/ol/css.js
/**
 * @module ol/css
 */
/**
 * @typedef {Object} FontParameters
 * @property {string} style Style.
 * @property {string} variant Variant.
 * @property {string} weight Weight.
 * @property {string} size Size.
 * @property {string} lineHeight LineHeight.
 * @property {string} family Family.
 * @property {Array<string>} families Families.
 */
/**
 * The CSS class for hidden feature.
 *
 * @const
 * @type {string}
 */
var CLASS_HIDDEN = 'ol-hidden';
/**
 * The CSS class that we'll give the DOM elements to have them selectable.
 *
 * @const
 * @type {string}
 */
var CLASS_SELECTABLE = 'ol-selectable';
/**
 * The CSS class that we'll give the DOM elements to have them unselectable.
 *
 * @const
 * @type {string}
 */
var CLASS_UNSELECTABLE = 'ol-unselectable';
/**
 * The CSS class for unsupported feature.
 *
 * @const
 * @type {string}
 */
var CLASS_UNSUPPORTED = 'ol-unsupported';
/**
 * The CSS class for controls.
 *
 * @const
 * @type {string}
 */
var CLASS_CONTROL = 'ol-control';
/**
 * The CSS class that we'll give the DOM elements that are collapsed, i.e.
 * to those elements which usually can be expanded.
 *
 * @const
 * @type {string}
 */
var CLASS_COLLAPSED = 'ol-collapsed';
/**
 * From https://stackoverflow.com/questions/10135697/regex-to-parse-any-css-font
 * @type {RegExp}
 */
var fontRegEx = new RegExp([
    '^\\s*(?=(?:(?:[-a-z]+\\s*){0,2}(italic|oblique))?)',
    '(?=(?:(?:[-a-z]+\\s*){0,2}(small-caps))?)',
    '(?=(?:(?:[-a-z]+\\s*){0,2}(bold(?:er)?|lighter|[1-9]00 ))?)',
    '(?:(?:normal|\\1|\\2|\\3)\\s*){0,3}((?:xx?-)?',
    '(?:small|large)|medium|smaller|larger|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx]))',
    '(?:\\s*\\/\\s*(normal|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx])?))',
    '?\\s*([-,\\"\\\'\\sa-z]+?)\\s*$',
].join(''), 'i');
var fontRegExMatchIndex = [
    'style',
    'variant',
    'weight',
    'size',
    'lineHeight',
    'family',
];
/**
 * Get the list of font families from a font spec.  Note that this doesn't work
 * for font families that have commas in them.
 * @param {string} fontSpec The CSS font property.
 * @return {FontParameters|null} The font parameters (or null if the input spec is invalid).
 */
var getFontParameters = function (fontSpec) {
    var match = fontSpec.match(fontRegEx);
    if (!match) {
        return null;
    }
    var style = /** @type {FontParameters} */ ({
        lineHeight: 'normal',
        size: '1.2em',
        style: 'normal',
        weight: 'normal',
        variant: 'normal',
    });
    for (var i = 0, ii = fontRegExMatchIndex.length; i < ii; ++i) {
        var value = match[i + 1];
        if (value !== undefined) {
            style[fontRegExMatchIndex[i]] = value;
        }
    }
    style.families = style.family.split(/,\s?/);
    return style;
};
//# sourceMappingURL=css.js.map
// EXTERNAL MODULE: ./node_modules/ol/Object.js
var ol_Object = __webpack_require__(2971);
// EXTERNAL MODULE: ./node_modules/ol/events/Target.js
var Target = __webpack_require__(208);
// EXTERNAL MODULE: ./node_modules/ol/has.js
var has = __webpack_require__(177);
// EXTERNAL MODULE: ./node_modules/ol/obj.js
var obj = __webpack_require__(9374);
// EXTERNAL MODULE: ./node_modules/ol/dom.js
var dom = __webpack_require__(8326);
;// CONCATENATED MODULE: ./node_modules/ol/render/canvas.js
/**
 * @module ol/render/canvas
 */






/**
 * @typedef {'Circle' | 'Image' | 'LineString' | 'Polygon' | 'Text' | 'Default'} BuilderType
 */
/**
 * @typedef {Object} FillState
 * @property {import("../colorlike.js").ColorLike} fillStyle FillStyle.
 */
/**
 * @typedef Label
 * @property {number} width Width.
 * @property {number} height Height.
 * @property {Array<string|number>} contextInstructions ContextInstructions.
 */
/**
 * @typedef {Object} FillStrokeState
 * @property {import("../colorlike.js").ColorLike} [currentFillStyle] Current FillStyle.
 * @property {import("../colorlike.js").ColorLike} [currentStrokeStyle] Current StrokeStyle.
 * @property {CanvasLineCap} [currentLineCap] Current LineCap.
 * @property {Array<number>} currentLineDash Current LineDash.
 * @property {number} [currentLineDashOffset] Current LineDashOffset.
 * @property {CanvasLineJoin} [currentLineJoin] Current LineJoin.
 * @property {number} [currentLineWidth] Current LineWidth.
 * @property {number} [currentMiterLimit] Current MiterLimit.
 * @property {number} [lastStroke] Last stroke.
 * @property {import("../colorlike.js").ColorLike} [fillStyle] FillStyle.
 * @property {import("../colorlike.js").ColorLike} [strokeStyle] StrokeStyle.
 * @property {CanvasLineCap} [lineCap] LineCap.
 * @property {Array<number>} lineDash LineDash.
 * @property {number} [lineDashOffset] LineDashOffset.
 * @property {CanvasLineJoin} [lineJoin] LineJoin.
 * @property {number} [lineWidth] LineWidth.
 * @property {number} [miterLimit] MiterLimit.
 */
/**
 * @typedef {Object} StrokeState
 * @property {CanvasLineCap} lineCap LineCap.
 * @property {Array<number>} lineDash LineDash.
 * @property {number} lineDashOffset LineDashOffset.
 * @property {CanvasLineJoin} lineJoin LineJoin.
 * @property {number} lineWidth LineWidth.
 * @property {number} miterLimit MiterLimit.
 * @property {import("../colorlike.js").ColorLike} strokeStyle StrokeStyle.
 */
/**
 * @typedef {Object} TextState
 * @property {string} font Font.
 * @property {string} [textAlign] TextAlign.
 * @property {string} [justify] Justify.
 * @property {string} textBaseline TextBaseline.
 * @property {string} [placement] Placement.
 * @property {number} [maxAngle] MaxAngle.
 * @property {boolean} [overflow] Overflow.
 * @property {import("../style/Fill.js").default} [backgroundFill] BackgroundFill.
 * @property {import("../style/Stroke.js").default} [backgroundStroke] BackgroundStroke.
 * @property {import("../size.js").Size} [scale] Scale.
 * @property {Array<number>} [padding] Padding.
 */
/**
 * @typedef {Object} SerializableInstructions
 * @property {Array<*>} instructions The rendering instructions.
 * @property {Array<*>} hitDetectionInstructions The rendering hit detection instructions.
 * @property {Array<number>} coordinates The array of all coordinates.
 * @property {!Object<string, TextState>} [textStates] The text states (decluttering).
 * @property {!Object<string, FillState>} [fillStates] The fill states (decluttering).
 * @property {!Object<string, StrokeState>} [strokeStates] The stroke states (decluttering).
 */
/**
 * @typedef {Object<number, import("./canvas/Executor.js").ReplayImageOrLabelArgs>} DeclutterImageWithText
 */
/**
 * @const
 * @type {string}
 */
var defaultFont = '10px sans-serif';
/**
 * @const
 * @type {import("../colorlike.js").ColorLike}
 */
var defaultFillStyle = '#000';
/**
 * @const
 * @type {CanvasLineCap}
 */
var defaultLineCap = 'round';
/**
 * @const
 * @type {Array<number>}
 */
var defaultLineDash = (/* unused pure expression or super */ null && ([]));
/**
 * @const
 * @type {number}
 */
var defaultLineDashOffset = 0;
/**
 * @const
 * @type {CanvasLineJoin}
 */
var defaultLineJoin = 'round';
/**
 * @const
 * @type {number}
 */
var defaultMiterLimit = 10;
/**
 * @const
 * @type {import("../colorlike.js").ColorLike}
 */
var defaultStrokeStyle = '#000';
/**
 * @const
 * @type {string}
 */
var defaultTextAlign = 'center';
/**
 * @const
 * @type {string}
 */
var defaultTextBaseline = 'middle';
/**
 * @const
 * @type {Array<number>}
 */
var defaultPadding = (/* unused pure expression or super */ null && ([0, 0, 0, 0]));
/**
 * @const
 * @type {number}
 */
var defaultLineWidth = 1;
/**
 * @type {BaseObject}
 */
var checkedFonts = new ol_Object/* default */.Z();
/**
 * The label cache for text rendering. To change the default cache size of 2048
 * entries, use {@link module:ol/structs/LRUCache~LRUCache#setSize cache.setSize()}.
 * Deprecated - there is no label cache any more.
 * @type {?}
 * @api
 * @deprecated
 */
var labelCache = new Target/* default */.Z();
labelCache.setSize = function () {
    console.warn('labelCache is deprecated.'); //eslint-disable-line
};
/**
 * @type {CanvasRenderingContext2D}
 */
var measureContext = null;
/**
 * @type {string}
 */
var measureFont;
/**
 * @type {!Object<string, number>}
 */
var textHeights = {};
/**
 * Clears the label cache when a font becomes available.
 * @param {string} fontSpec CSS font spec.
 */
var registerFont = (function () {
    var retries = 100;
    var size = '32px ';
    var referenceFonts = ['monospace', 'serif'];
    var len = referenceFonts.length;
    var text = 'wmytzilWMYTZIL@#/&?$%10\uF013';
    var interval, referenceWidth;
    /**
     * @param {string} fontStyle Css font-style
     * @param {string} fontWeight Css font-weight
     * @param {*} fontFamily Css font-family
     * @return {boolean} Font with style and weight is available
     */
    function isAvailable(fontStyle, fontWeight, fontFamily) {
        var available = true;
        for (var i = 0; i < len; ++i) {
            var referenceFont = referenceFonts[i];
            referenceWidth = measureTextWidth(fontStyle + ' ' + fontWeight + ' ' + size + referenceFont, text);
            if (fontFamily != referenceFont) {
                var width = measureTextWidth(fontStyle +
                    ' ' +
                    fontWeight +
                    ' ' +
                    size +
                    fontFamily +
                    ',' +
                    referenceFont, text);
                // If width and referenceWidth are the same, then the fallback was used
                // instead of the font we wanted, so the font is not available.
                available = available && width != referenceWidth;
            }
        }
        if (available) {
            return true;
        }
        return false;
    }
    function check() {
        var done = true;
        var fonts = checkedFonts.getKeys();
        for (var i = 0, ii = fonts.length; i < ii; ++i) {
            var font = fonts[i];
            if (checkedFonts.get(font) < retries) {
                if (isAvailable.apply(this, font.split('\n'))) {
                    (0,obj/* clear */.ZH)(textHeights);
                    // Make sure that loaded fonts are picked up by Safari
                    measureContext = null;
                    measureFont = undefined;
                    checkedFonts.set(font, retries);
                }
                else {
                    checkedFonts.set(font, checkedFonts.get(font) + 1, true);
                    done = false;
                }
            }
        }
        if (done) {
            clearInterval(interval);
            interval = undefined;
        }
    }
    return function (fontSpec) {
        var font = getFontParameters(fontSpec);
        if (!font) {
            return;
        }
        var families = font.families;
        for (var i = 0, ii = families.length; i < ii; ++i) {
            var family = families[i];
            var key = font.style + '\n' + font.weight + '\n' + family;
            if (checkedFonts.get(key) === undefined) {
                checkedFonts.set(key, retries, true);
                if (!isAvailable(font.style, font.weight, family)) {
                    checkedFonts.set(key, 0, true);
                    if (interval === undefined) {
                        interval = setInterval(check, 32);
                    }
                }
            }
        }
    };
})();
/**
 * @param {string} font Font to use for measuring.
 * @return {import("../size.js").Size} Measurement.
 */
var measureTextHeight = (function () {
    /**
     * @type {HTMLDivElement}
     */
    var measureElement;
    return function (fontSpec) {
        var height = textHeights[fontSpec];
        if (height == undefined) {
            if (has/* WORKER_OFFSCREEN_CANVAS */.Id) {
                var font = getFontParameters(fontSpec);
                var metrics = measureText(fontSpec, 'Žg');
                var lineHeight = isNaN(Number(font.lineHeight))
                    ? 1.2
                    : Number(font.lineHeight);
                height =
                    lineHeight *
                        (metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent);
            }
            else {
                if (!measureElement) {
                    measureElement = document.createElement('div');
                    measureElement.innerHTML = 'M';
                    measureElement.style.minHeight = '0';
                    measureElement.style.maxHeight = 'none';
                    measureElement.style.height = 'auto';
                    measureElement.style.padding = '0';
                    measureElement.style.border = 'none';
                    measureElement.style.position = 'absolute';
                    measureElement.style.display = 'block';
                    measureElement.style.left = '-99999px';
                }
                measureElement.style.font = fontSpec;
                document.body.appendChild(measureElement);
                height = measureElement.offsetHeight;
                document.body.removeChild(measureElement);
            }
            textHeights[fontSpec] = height;
        }
        return height;
    };
})();
/**
 * @param {string} font Font.
 * @param {string} text Text.
 * @return {TextMetrics} Text metrics.
 */
function measureText(font, text) {
    if (!measureContext) {
        measureContext = (0,dom/* createCanvasContext2D */.E4)(1, 1);
    }
    if (font != measureFont) {
        measureContext.font = font;
        measureFont = measureContext.font;
    }
    return measureContext.measureText(text);
}
/**
 * @param {string} font Font.
 * @param {string} text Text.
 * @return {number} Width.
 */
function measureTextWidth(font, text) {
    return measureText(font, text).width;
}
/**
 * Measure text width using a cache.
 * @param {string} font The font.
 * @param {string} text The text to measure.
 * @param {Object<string, number>} cache A lookup of cached widths by text.
 * @return {number} The text width.
 */
function measureAndCacheTextWidth(font, text, cache) {
    if (text in cache) {
        return cache[text];
    }
    var width = text
        .split('\n')
        .reduce(function (prev, curr) { return Math.max(prev, measureTextWidth(font, curr)); }, 0);
    cache[text] = width;
    return width;
}
/**
 * @param {TextState} baseStyle Base style.
 * @param {Array<string>} chunks Text chunks to measure.
 * @return {{width: number, height: number, widths: Array<number>, heights: Array<number>, lineWidths: Array<number>}}} Text metrics.
 */
function getTextDimensions(baseStyle, chunks) {
    var widths = [];
    var heights = [];
    var lineWidths = [];
    var width = 0;
    var lineWidth = 0;
    var height = 0;
    var lineHeight = 0;
    for (var i = 0, ii = chunks.length; i <= ii; i += 2) {
        var text = chunks[i];
        if (text === '\n' || i === ii) {
            width = Math.max(width, lineWidth);
            lineWidths.push(lineWidth);
            lineWidth = 0;
            height += lineHeight;
            continue;
        }
        var font = chunks[i + 1] || baseStyle.font;
        var currentWidth = measureTextWidth(font, text);
        widths.push(currentWidth);
        lineWidth += currentWidth;
        var currentHeight = measureTextHeight(font);
        heights.push(currentHeight);
        lineHeight = Math.max(lineHeight, currentHeight);
    }
    return { width: width, height: height, widths: widths, heights: heights, lineWidths: lineWidths };
}
/**
 * @param {CanvasRenderingContext2D} context Context.
 * @param {number} rotation Rotation.
 * @param {number} offsetX X offset.
 * @param {number} offsetY Y offset.
 */
function rotateAtOffset(context, rotation, offsetX, offsetY) {
    if (rotation !== 0) {
        context.translate(offsetX, offsetY);
        context.rotate(rotation);
        context.translate(-offsetX, -offsetY);
    }
}
/**
 * @param {CanvasRenderingContext2D} context Context.
 * @param {import("../transform.js").Transform|null} transform Transform.
 * @param {number} opacity Opacity.
 * @param {Label|HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} labelOrImage Label.
 * @param {number} originX Origin X.
 * @param {number} originY Origin Y.
 * @param {number} w Width.
 * @param {number} h Height.
 * @param {number} x X.
 * @param {number} y Y.
 * @param {import("../size.js").Size} scale Scale.
 */
function drawImageOrLabel(context, transform, opacity, labelOrImage, originX, originY, w, h, x, y, scale) {
    context.save();
    if (opacity !== 1) {
        context.globalAlpha *= opacity;
    }
    if (transform) {
        context.setTransform.apply(context, transform);
    }
    if ( /** @type {*} */(labelOrImage).contextInstructions) {
        // label
        context.translate(x, y);
        context.scale(scale[0], scale[1]);
        executeLabelInstructions(/** @type {Label} */ (labelOrImage), context);
    }
    else if (scale[0] < 0 || scale[1] < 0) {
        // flipped image
        context.translate(x, y);
        context.scale(scale[0], scale[1]);
        context.drawImage(
        /** @type {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} */ (labelOrImage), originX, originY, w, h, 0, 0, w, h);
    }
    else {
        // if image not flipped translate and scale can be avoided
        context.drawImage(
        /** @type {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} */ (labelOrImage), originX, originY, w, h, x, y, w * scale[0], h * scale[1]);
    }
    context.restore();
}
/**
 * @param {Label} label Label.
 * @param {CanvasRenderingContext2D} context Context.
 */
function executeLabelInstructions(label, context) {
    var contextInstructions = label.contextInstructions;
    for (var i = 0, ii = contextInstructions.length; i < ii; i += 2) {
        if (Array.isArray(contextInstructions[i + 1])) {
            context[contextInstructions[i]].apply(context, contextInstructions[i + 1]);
        }
        else {
            context[contextInstructions[i]] = contextInstructions[i + 1];
        }
    }
}
//# sourceMappingURL=canvas.js.map
// EXTERNAL MODULE: ./node_modules/ol/events.js
var events = __webpack_require__(5818);
;// CONCATENATED MODULE: ./node_modules/ol/renderer/Composite.js
var Composite_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @module ol/renderer/Composite
 */









/**
 * @classdesc
 * Canvas map renderer.
 * @api
 */
var CompositeMapRenderer = /** @class */ (function (_super) {
    Composite_extends(CompositeMapRenderer, _super);
    /**
     * @param {import("../PluggableMap.js").default} map Map.
     */
    function CompositeMapRenderer(map) {
        var _this = _super.call(this, map) || this;
        /**
         * @type {import("../events.js").EventsKey}
         */
        _this.fontChangeListenerKey_ = (0,events/* listen */.oL)(checkedFonts, ObjectEventType/* default.PROPERTYCHANGE */.Z.PROPERTYCHANGE, map.redrawText.bind(map));
        /**
         * @private
         * @type {HTMLDivElement}
         */
        _this.element_ = document.createElement('div');
        var style = _this.element_.style;
        style.position = 'absolute';
        style.width = '100%';
        style.height = '100%';
        style.zIndex = '0';
        _this.element_.className = CLASS_UNSELECTABLE + ' ol-layers';
        var container = map.getViewport();
        container.insertBefore(_this.element_, container.firstChild || null);
        /**
         * @private
         * @type {Array<HTMLElement>}
         */
        _this.children_ = [];
        /**
         * @private
         * @type {boolean}
         */
        _this.renderedVisible_ = true;
        return _this;
    }
    /**
     * @param {import("../render/EventType.js").default} type Event type.
     * @param {import("../PluggableMap.js").FrameState} frameState Frame state.
     */
    CompositeMapRenderer.prototype.dispatchRenderEvent = function (type, frameState) {
        var map = this.getMap();
        if (map.hasListener(type)) {
            var event_1 = new Event/* default */.Z(type, undefined, frameState);
            map.dispatchEvent(event_1);
        }
    };
    CompositeMapRenderer.prototype.disposeInternal = function () {
        (0,events/* unlistenByKey */.bN)(this.fontChangeListenerKey_);
        this.element_.parentNode.removeChild(this.element_);
        _super.prototype.disposeInternal.call(this);
    };
    /**
     * Render.
     * @param {?import("../PluggableMap.js").FrameState} frameState Frame state.
     */
    CompositeMapRenderer.prototype.renderFrame = function (frameState) {
        if (!frameState) {
            if (this.renderedVisible_) {
                this.element_.style.display = 'none';
                this.renderedVisible_ = false;
            }
            return;
        }
        this.calculateMatrices2D(frameState);
        this.dispatchRenderEvent(EventType/* default.PRECOMPOSE */.Z.PRECOMPOSE, frameState);
        var layerStatesArray = frameState.layerStatesArray.sort(function (a, b) {
            return a.zIndex - b.zIndex;
        });
        var viewState = frameState.viewState;
        this.children_.length = 0;
        /**
         * @type {Array<import("../layer/BaseVector.js").default>}
         */
        var declutterLayers = [];
        var previousElement = null;
        for (var i = 0, ii = layerStatesArray.length; i < ii; ++i) {
            var layerState = layerStatesArray[i];
            frameState.layerIndex = i;
            var layer = layerState.layer;
            var sourceState = layer.getSourceState();
            if (!(0,Layer/* inView */.j)(layerState, viewState) ||
                (sourceState != 'ready' && sourceState != 'undefined')) {
                layer.unrender();
                continue;
            }
            var element = layer.render(frameState, previousElement);
            if (!element) {
                continue;
            }
            if (element !== previousElement) {
                this.children_.push(element);
                previousElement = element;
            }
            if ('getDeclutter' in layer) {
                declutterLayers.push(
                /** @type {import("../layer/BaseVector.js").default} */ (layer));
            }
        }
        for (var i = declutterLayers.length - 1; i >= 0; --i) {
            declutterLayers[i].renderDeclutter(frameState);
        }
        (0,dom/* replaceChildren */.hF)(this.element_, this.children_);
        this.dispatchRenderEvent(EventType/* default.POSTCOMPOSE */.Z.POSTCOMPOSE, frameState);
        if (!this.renderedVisible_) {
            this.element_.style.display = '';
            this.renderedVisible_ = true;
        }
        this.scheduleExpireIconCache(frameState);
    };
    /**
     * @param {import("../pixel.js").Pixel} pixel Pixel.
     * @param {import("../PluggableMap.js").FrameState} frameState FrameState.
     * @param {number} hitTolerance Hit tolerance in pixels.
     * @param {function(import("../layer/Layer.js").default<import("../source/Source").default>, (Uint8ClampedArray|Uint8Array)): T} callback Layer
     *     callback.
     * @param {function(import("../layer/Layer.js").default<import("../source/Source").default>): boolean} layerFilter Layer filter
     *     function, only layers which are visible and for which this function
     *     returns `true` will be tested for features.  By default, all visible
     *     layers will be tested.
     * @return {T|undefined} Callback result.
     * @template T
     */
    CompositeMapRenderer.prototype.forEachLayerAtPixel = function (pixel, frameState, hitTolerance, callback, layerFilter) {
        var viewState = frameState.viewState;
        var layerStates = frameState.layerStatesArray;
        var numLayers = layerStates.length;
        for (var i = numLayers - 1; i >= 0; --i) {
            var layerState = layerStates[i];
            var layer = layerState.layer;
            if (layer.hasRenderer() &&
                (0,Layer/* inView */.j)(layerState, viewState) &&
                layerFilter(layer)) {
                var layerRenderer = layer.getRenderer();
                var data = layerRenderer.getDataAtPixel(pixel, frameState, hitTolerance);
                if (data) {
                    var result = callback(layer, data);
                    if (result) {
                        return result;
                    }
                }
            }
        }
        return undefined;
    };
    return CompositeMapRenderer;
}(Map));
/* harmony default export */ const Composite = (CompositeMapRenderer);
//# sourceMappingURL=Composite.js.map
// EXTERNAL MODULE: ./node_modules/ol/AssertionError.js
var AssertionError = __webpack_require__(6813);
;// CONCATENATED MODULE: ./node_modules/ol/CollectionEventType.js
/**
 * @module ol/CollectionEventType
 */
/**
 * @enum {string}
 */
/* harmony default export */ const CollectionEventType = ({
    /**
     * Triggered when an item is added to the collection.
     * @event module:ol/Collection.CollectionEvent#add
     * @api
     */
    ADD: 'add',
    /**
     * Triggered when an item is removed from the collection.
     * @event module:ol/Collection.CollectionEvent#remove
     * @api
     */
    REMOVE: 'remove',
});
//# sourceMappingURL=CollectionEventType.js.map
// EXTERNAL MODULE: ./node_modules/ol/events/Event.js
var events_Event = __webpack_require__(291);
;// CONCATENATED MODULE: ./node_modules/ol/Collection.js
var Collection_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @module ol/Collection
 */




/**
 * @enum {string}
 * @private
 */
var Property = {
    LENGTH: 'length',
};
/**
 * @classdesc
 * Events emitted by {@link module:ol/Collection~Collection} instances are instances of this
 * type.
 */
var CollectionEvent = /** @class */ (function (_super) {
    Collection_extends(CollectionEvent, _super);
    /**
     * @param {import("./CollectionEventType.js").default} type Type.
     * @param {*} [opt_element] Element.
     * @param {number} [opt_index] The index of the added or removed element.
     */
    function CollectionEvent(type, opt_element, opt_index) {
        var _this = _super.call(this, type) || this;
        /**
         * The element that is added to or removed from the collection.
         * @type {*}
         * @api
         */
        _this.element = opt_element;
        /**
         * The index of the added or removed element.
         * @type {number}
         * @api
         */
        _this.index = opt_index;
        return _this;
    }
    return CollectionEvent;
}(events_Event/* default */.ZP));

/***
 * @template Return
 * @typedef {import("./Observable").OnSignature<import("./Observable").EventTypes, import("./events/Event.js").default, Return> &
 *   import("./Observable").OnSignature<import("./ObjectEventType").Types|'change:length', import("./Object").ObjectEvent, Return> &
 *   import("./Observable").OnSignature<'add'|'remove', CollectionEvent, Return> &
 *   import("./Observable").CombinedOnSignature<import("./Observable").EventTypes|import("./ObjectEventType").Types|
 *     'change:length'|'add'|'remove',Return>} CollectionOnSignature
 */
/**
 * @typedef {Object} Options
 * @property {boolean} [unique=false] Disallow the same item from being added to
 * the collection twice.
 */
/**
 * @classdesc
 * An expanded version of standard JS Array, adding convenience methods for
 * manipulation. Add and remove changes to the Collection trigger a Collection
 * event. Note that this does not cover changes to the objects _within_ the
 * Collection; they trigger events on the appropriate object, not on the
 * Collection as a whole.
 *
 * @fires CollectionEvent
 *
 * @template T
 * @api
 */
var Collection = /** @class */ (function (_super) {
    Collection_extends(Collection, _super);
    /**
     * @param {Array<T>} [opt_array] Array.
     * @param {Options} [opt_options] Collection options.
     */
    function Collection(opt_array, opt_options) {
        var _this = _super.call(this) || this;
        /***
         * @type {CollectionOnSignature<import("./events").EventsKey>}
         */
        _this.on;
        /***
         * @type {CollectionOnSignature<import("./events").EventsKey>}
         */
        _this.once;
        /***
         * @type {CollectionOnSignature<void>}
         */
        _this.un;
        var options = opt_options || {};
        /**
         * @private
         * @type {boolean}
         */
        _this.unique_ = !!options.unique;
        /**
         * @private
         * @type {!Array<T>}
         */
        _this.array_ = opt_array ? opt_array : [];
        if (_this.unique_) {
            for (var i = 0, ii = _this.array_.length; i < ii; ++i) {
                _this.assertUnique_(_this.array_[i], i);
            }
        }
        _this.updateLength_();
        return _this;
    }
    /**
     * Remove all elements from the collection.
     * @api
     */
    Collection.prototype.clear = function () {
        while (this.getLength() > 0) {
            this.pop();
        }
    };
    /**
     * Add elements to the collection.  This pushes each item in the provided array
     * to the end of the collection.
     * @param {!Array<T>} arr Array.
     * @return {Collection<T>} This collection.
     * @api
     */
    Collection.prototype.extend = function (arr) {
        for (var i = 0, ii = arr.length; i < ii; ++i) {
            this.push(arr[i]);
        }
        return this;
    };
    /**
     * Iterate over each element, calling the provided callback.
     * @param {function(T, number, Array<T>): *} f The function to call
     *     for every element. This function takes 3 arguments (the element, the
     *     index and the array). The return value is ignored.
     * @api
     */
    Collection.prototype.forEach = function (f) {
        var array = this.array_;
        for (var i = 0, ii = array.length; i < ii; ++i) {
            f(array[i], i, array);
        }
    };
    /**
     * Get a reference to the underlying Array object. Warning: if the array
     * is mutated, no events will be dispatched by the collection, and the
     * collection's "length" property won't be in sync with the actual length
     * of the array.
     * @return {!Array<T>} Array.
     * @api
     */
    Collection.prototype.getArray = function () {
        return this.array_;
    };
    /**
     * Get the element at the provided index.
     * @param {number} index Index.
     * @return {T} Element.
     * @api
     */
    Collection.prototype.item = function (index) {
        return this.array_[index];
    };
    /**
     * Get the length of this collection.
     * @return {number} The length of the array.
     * @observable
     * @api
     */
    Collection.prototype.getLength = function () {
        return this.get(Property.LENGTH);
    };
    /**
     * Insert an element at the provided index.
     * @param {number} index Index.
     * @param {T} elem Element.
     * @api
     */
    Collection.prototype.insertAt = function (index, elem) {
        if (this.unique_) {
            this.assertUnique_(elem);
        }
        this.array_.splice(index, 0, elem);
        this.updateLength_();
        this.dispatchEvent(new CollectionEvent(CollectionEventType.ADD, elem, index));
    };
    /**
     * Remove the last element of the collection and return it.
     * Return `undefined` if the collection is empty.
     * @return {T|undefined} Element.
     * @api
     */
    Collection.prototype.pop = function () {
        return this.removeAt(this.getLength() - 1);
    };
    /**
     * Insert the provided element at the end of the collection.
     * @param {T} elem Element.
     * @return {number} New length of the collection.
     * @api
     */
    Collection.prototype.push = function (elem) {
        if (this.unique_) {
            this.assertUnique_(elem);
        }
        var n = this.getLength();
        this.insertAt(n, elem);
        return this.getLength();
    };
    /**
     * Remove the first occurrence of an element from the collection.
     * @param {T} elem Element.
     * @return {T|undefined} The removed element or undefined if none found.
     * @api
     */
    Collection.prototype.remove = function (elem) {
        var arr = this.array_;
        for (var i = 0, ii = arr.length; i < ii; ++i) {
            if (arr[i] === elem) {
                return this.removeAt(i);
            }
        }
        return undefined;
    };
    /**
     * Remove the element at the provided index and return it.
     * Return `undefined` if the collection does not contain this index.
     * @param {number} index Index.
     * @return {T|undefined} Value.
     * @api
     */
    Collection.prototype.removeAt = function (index) {
        var prev = this.array_[index];
        this.array_.splice(index, 1);
        this.updateLength_();
        this.dispatchEvent(new CollectionEvent(CollectionEventType.REMOVE, prev, index));
        return prev;
    };
    /**
     * Set the element at the provided index.
     * @param {number} index Index.
     * @param {T} elem Element.
     * @api
     */
    Collection.prototype.setAt = function (index, elem) {
        var n = this.getLength();
        if (index < n) {
            if (this.unique_) {
                this.assertUnique_(elem, index);
            }
            var prev = this.array_[index];
            this.array_[index] = elem;
            this.dispatchEvent(new CollectionEvent(CollectionEventType.REMOVE, prev, index));
            this.dispatchEvent(new CollectionEvent(CollectionEventType.ADD, elem, index));
        }
        else {
            for (var j = n; j < index; ++j) {
                this.insertAt(j, undefined);
            }
            this.insertAt(index, elem);
        }
    };
    /**
     * @private
     */
    Collection.prototype.updateLength_ = function () {
        this.set(Property.LENGTH, this.array_.length);
    };
    /**
     * @private
     * @param {T} elem Element.
     * @param {number} [opt_except] Optional index to ignore.
     */
    Collection.prototype.assertUnique_ = function (elem, opt_except) {
        for (var i = 0, ii = this.array_.length; i < ii; ++i) {
            if (this.array_[i] === elem && i !== opt_except) {
                throw new AssertionError/* default */.Z(58);
            }
        }
    };
    return Collection;
}(ol_Object/* default */.Z));
/* harmony default export */ const ol_Collection = (Collection);
//# sourceMappingURL=Collection.js.map
// EXTERNAL MODULE: ./node_modules/ol/events/EventType.js
var events_EventType = __webpack_require__(5487);
// EXTERNAL MODULE: ./node_modules/ol/layer/Base.js
var Base = __webpack_require__(947);
// EXTERNAL MODULE: ./node_modules/ol/asserts.js
var asserts = __webpack_require__(9515);
;// CONCATENATED MODULE: ./node_modules/ol/layer/Group.js
var Group_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @module ol/layer/Group
 */











/**
 * @typedef {'addlayer'|'removelayer'} EventType
 */
/**
 * @classdesc
 * A layer group triggers 'addlayer' and 'removelayer' events when layers are added to or removed from
 * the group or one of its child groups.  When a layer group is added to or removed from another layer group,
 * a single event will be triggered (instead of one per layer in the group added or removed).
 */
var GroupEvent = /** @class */ (function (_super) {
    Group_extends(GroupEvent, _super);
    /**
     * @param {EventType} type The event type.
     * @param {BaseLayer} layer The layer.
     */
    function GroupEvent(type, layer) {
        var _this = _super.call(this, type) || this;
        /**
         * The added or removed layer.
         * @type {BaseLayer}
         * @api
         */
        _this.layer = layer;
        return _this;
    }
    return GroupEvent;
}(events_Event/* default */.ZP));

/***
 * @template Return
 * @typedef {import("../Observable").OnSignature<import("../Observable").EventTypes, import("../events/Event.js").default, Return> &
 *   import("../Observable").OnSignature<import("./Base").BaseLayerObjectEventTypes|
 *     'change:layers', import("../Object").ObjectEvent, Return> &
 *   import("../Observable").CombinedOnSignature<import("../Observable").EventTypes|import("./Base").BaseLayerObjectEventTypes|'change:layers', Return>} GroupOnSignature
 */
/**
 * @typedef {Object} Options
 * @property {number} [opacity=1] Opacity (0, 1).
 * @property {boolean} [visible=true] Visibility.
 * @property {import("../extent.js").Extent} [extent] The bounding extent for layer rendering.  The layer will not be
 * rendered outside of this extent.
 * @property {number} [zIndex] The z-index for layer rendering.  At rendering time, the layers
 * will be ordered, first by Z-index and then by position. When `undefined`, a `zIndex` of 0 is assumed
 * for layers that are added to the map's `layers` collection, or `Infinity` when the layer's `setMap()`
 * method was used.
 * @property {number} [minResolution] The minimum resolution (inclusive) at which this layer will be
 * visible.
 * @property {number} [maxResolution] The maximum resolution (exclusive) below which this layer will
 * be visible.
 * @property {number} [minZoom] The minimum view zoom level (exclusive) above which this layer will be
 * visible.
 * @property {number} [maxZoom] The maximum view zoom level (inclusive) at which this layer will
 * be visible.
 * @property {Array<import("./Base.js").default>|import("../Collection.js").default<import("./Base.js").default>} [layers] Child layers.
 * @property {Object<string, *>} [properties] Arbitrary observable properties. Can be accessed with `#get()` and `#set()`.
 */
/**
 * @enum {string}
 * @private
 */
var Group_Property = {
    LAYERS: 'layers',
};
/**
 * @classdesc
 * A {@link module:ol/Collection~Collection} of layers that are handled together.
 *
 * A generic `change` event is triggered when the group/Collection changes.
 *
 * @api
 */
var LayerGroup = /** @class */ (function (_super) {
    Group_extends(LayerGroup, _super);
    /**
     * @param {Options} [opt_options] Layer options.
     */
    function LayerGroup(opt_options) {
        var _this = this;
        var options = opt_options || {};
        var baseOptions = /** @type {Options} */ ((0,obj/* assign */.f0)({}, options));
        delete baseOptions.layers;
        var layers = options.layers;
        _this = _super.call(this, baseOptions) || this;
        /***
         * @type {GroupOnSignature<import("../events").EventsKey>}
         */
        _this.on;
        /***
         * @type {GroupOnSignature<import("../events").EventsKey>}
         */
        _this.once;
        /***
         * @type {GroupOnSignature<void>}
         */
        _this.un;
        /**
         * @private
         * @type {Array<import("../events.js").EventsKey>}
         */
        _this.layersListenerKeys_ = [];
        /**
         * @private
         * @type {Object<string, Array<import("../events.js").EventsKey>>}
         */
        _this.listenerKeys_ = {};
        _this.addChangeListener(Group_Property.LAYERS, _this.handleLayersChanged_);
        if (layers) {
            if (Array.isArray(layers)) {
                layers = new ol_Collection(layers.slice(), { unique: true });
            }
            else {
                (0,asserts/* assert */.h)(typeof ( /** @type {?} */(layers).getArray) === 'function', 43); // Expected `layers` to be an array or a `Collection`
            }
        }
        else {
            layers = new ol_Collection(undefined, { unique: true });
        }
        _this.setLayers(layers);
        return _this;
    }
    /**
     * @private
     */
    LayerGroup.prototype.handleLayerChange_ = function () {
        this.changed();
    };
    /**
     * @private
     */
    LayerGroup.prototype.handleLayersChanged_ = function () {
        this.layersListenerKeys_.forEach(events/* unlistenByKey */.bN);
        this.layersListenerKeys_.length = 0;
        var layers = this.getLayers();
        this.layersListenerKeys_.push((0,events/* listen */.oL)(layers, CollectionEventType.ADD, this.handleLayersAdd_, this), (0,events/* listen */.oL)(layers, CollectionEventType.REMOVE, this.handleLayersRemove_, this));
        for (var id in this.listenerKeys_) {
            this.listenerKeys_[id].forEach(events/* unlistenByKey */.bN);
        }
        (0,obj/* clear */.ZH)(this.listenerKeys_);
        var layersArray = layers.getArray();
        for (var i = 0, ii = layersArray.length; i < ii; i++) {
            var layer = layersArray[i];
            this.registerLayerListeners_(layer);
            this.dispatchEvent(new GroupEvent('addlayer', layer));
        }
        this.changed();
    };
    /**
     * @param {BaseLayer} layer The layer.
     */
    LayerGroup.prototype.registerLayerListeners_ = function (layer) {
        var listenerKeys = [
            (0,events/* listen */.oL)(layer, ObjectEventType/* default.PROPERTYCHANGE */.Z.PROPERTYCHANGE, this.handleLayerChange_, this),
            (0,events/* listen */.oL)(layer, events_EventType/* default.CHANGE */.Z.CHANGE, this.handleLayerChange_, this),
        ];
        if (layer instanceof LayerGroup) {
            listenerKeys.push((0,events/* listen */.oL)(layer, 'addlayer', this.handleLayerGroupAdd_, this), (0,events/* listen */.oL)(layer, 'removelayer', this.handleLayerGroupRemove_, this));
        }
        this.listenerKeys_[(0,util/* getUid */.sq)(layer)] = listenerKeys;
    };
    /**
     * @param {GroupEvent} event The layer group event.
     */
    LayerGroup.prototype.handleLayerGroupAdd_ = function (event) {
        this.dispatchEvent(new GroupEvent('addlayer', event.layer));
    };
    /**
     * @param {GroupEvent} event The layer group event.
     */
    LayerGroup.prototype.handleLayerGroupRemove_ = function (event) {
        this.dispatchEvent(new GroupEvent('removelayer', event.layer));
    };
    /**
     * @param {import("../Collection.js").CollectionEvent} collectionEvent CollectionEvent.
     * @private
     */
    LayerGroup.prototype.handleLayersAdd_ = function (collectionEvent) {
        var layer = /** @type {import("./Base.js").default} */ (collectionEvent.element);
        this.registerLayerListeners_(layer);
        this.dispatchEvent(new GroupEvent('addlayer', layer));
        this.changed();
    };
    /**
     * @param {import("../Collection.js").CollectionEvent} collectionEvent CollectionEvent.
     * @private
     */
    LayerGroup.prototype.handleLayersRemove_ = function (collectionEvent) {
        var layer = /** @type {import("./Base.js").default} */ (collectionEvent.element);
        var key = (0,util/* getUid */.sq)(layer);
        this.listenerKeys_[key].forEach(events/* unlistenByKey */.bN);
        delete this.listenerKeys_[key];
        this.dispatchEvent(new GroupEvent('removelayer', layer));
        this.changed();
    };
    /**
     * Returns the {@link module:ol/Collection~Collection collection} of {@link module:ol/layer/Layer~Layer layers}
     * in this group.
     * @return {!import("../Collection.js").default<import("./Base.js").default>} Collection of
     *   {@link module:ol/layer/Base~BaseLayer layers} that are part of this group.
     * @observable
     * @api
     */
    LayerGroup.prototype.getLayers = function () {
        return /** @type {!import("../Collection.js").default<import("./Base.js").default>} */ (this.get(Group_Property.LAYERS));
    };
    /**
     * Set the {@link module:ol/Collection~Collection collection} of {@link module:ol/layer/Layer~Layer layers}
     * in this group.
     * @param {!import("../Collection.js").default<import("./Base.js").default>} layers Collection of
     *   {@link module:ol/layer/Base~BaseLayer layers} that are part of this group.
     * @observable
     * @api
     */
    LayerGroup.prototype.setLayers = function (layers) {
        var collection = this.getLayers();
        if (collection) {
            var currentLayers = collection.getArray();
            for (var i = 0, ii = currentLayers.length; i < ii; ++i) {
                this.dispatchEvent(new GroupEvent('removelayer', currentLayers[i]));
            }
        }
        this.set(Group_Property.LAYERS, layers);
    };
    /**
     * @param {Array<import("./Layer.js").default>} [opt_array] Array of layers (to be modified in place).
     * @return {Array<import("./Layer.js").default>} Array of layers.
     */
    LayerGroup.prototype.getLayersArray = function (opt_array) {
        var array = opt_array !== undefined ? opt_array : [];
        this.getLayers().forEach(function (layer) {
            layer.getLayersArray(array);
        });
        return array;
    };
    /**
     * Get the layer states list and use this groups z-index as the default
     * for all layers in this and nested groups, if it is unset at this point.
     * If opt_states is not provided and this group's z-index is undefined
     * 0 is used a the default z-index.
     * @param {Array<import("./Layer.js").State>} [opt_states] Optional list
     * of layer states (to be modified in place).
     * @return {Array<import("./Layer.js").State>} List of layer states.
     */
    LayerGroup.prototype.getLayerStatesArray = function (opt_states) {
        var states = opt_states !== undefined ? opt_states : [];
        var pos = states.length;
        this.getLayers().forEach(function (layer) {
            layer.getLayerStatesArray(states);
        });
        var ownLayerState = this.getLayerState();
        var defaultZIndex = ownLayerState.zIndex;
        if (!opt_states && ownLayerState.zIndex === undefined) {
            defaultZIndex = 0;
        }
        for (var i = pos, ii = states.length; i < ii; i++) {
            var layerState = states[i];
            layerState.opacity *= ownLayerState.opacity;
            layerState.visible = layerState.visible && ownLayerState.visible;
            layerState.maxResolution = Math.min(layerState.maxResolution, ownLayerState.maxResolution);
            layerState.minResolution = Math.max(layerState.minResolution, ownLayerState.minResolution);
            layerState.minZoom = Math.max(layerState.minZoom, ownLayerState.minZoom);
            layerState.maxZoom = Math.min(layerState.maxZoom, ownLayerState.maxZoom);
            if (ownLayerState.extent !== undefined) {
                if (layerState.extent !== undefined) {
                    layerState.extent = (0,extent/* getIntersection */.Ed)(layerState.extent, ownLayerState.extent);
                }
                else {
                    layerState.extent = ownLayerState.extent;
                }
            }
            if (layerState.zIndex === undefined) {
                layerState.zIndex = defaultZIndex;
            }
        }
        return states;
    };
    /**
     * @return {import("../source/Source.js").State} Source state.
     */
    LayerGroup.prototype.getSourceState = function () {
        return 'ready';
    };
    return LayerGroup;
}(Base/* default */.Z));
/* harmony default export */ const Group = (LayerGroup);
//# sourceMappingURL=Group.js.map
;// CONCATENATED MODULE: ./node_modules/ol/MapEvent.js
var MapEvent_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @module ol/MapEvent
 */

/**
 * @classdesc
 * Events emitted as map events are instances of this type.
 * See {@link module:ol/PluggableMap~PluggableMap} for which events trigger a map event.
 */
var MapEvent = /** @class */ (function (_super) {
    MapEvent_extends(MapEvent, _super);
    /**
     * @param {string} type Event type.
     * @param {import("./PluggableMap.js").default} map Map.
     * @param {?import("./PluggableMap.js").FrameState} [opt_frameState] Frame state.
     */
    function MapEvent(type, map, opt_frameState) {
        var _this = _super.call(this, type) || this;
        /**
         * The map where the event occurred.
         * @type {import("./PluggableMap.js").default}
         * @api
         */
        _this.map = map;
        /**
         * The frame state at the time of the event.
         * @type {?import("./PluggableMap.js").FrameState}
         * @api
         */
        _this.frameState = opt_frameState !== undefined ? opt_frameState : null;
        return _this;
    }
    return MapEvent;
}(events_Event/* default */.ZP));
/* harmony default export */ const ol_MapEvent = (MapEvent);
//# sourceMappingURL=MapEvent.js.map
;// CONCATENATED MODULE: ./node_modules/ol/MapBrowserEvent.js
var MapBrowserEvent_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @module ol/MapBrowserEvent
 */

/**
 * @classdesc
 * Events emitted as map browser events are instances of this type.
 * See {@link module:ol/PluggableMap~PluggableMap} for which events trigger a map browser event.
 * @template {UIEvent} EVENT
 */
var MapBrowserEvent = /** @class */ (function (_super) {
    MapBrowserEvent_extends(MapBrowserEvent, _super);
    /**
     * @param {string} type Event type.
     * @param {import("./PluggableMap.js").default} map Map.
     * @param {EVENT} originalEvent Original event.
     * @param {boolean} [opt_dragging] Is the map currently being dragged?
     * @param {import("./PluggableMap.js").FrameState} [opt_frameState] Frame state.
     * @param {Array<PointerEvent>} [opt_activePointers] Active pointers.
     */
    function MapBrowserEvent(type, map, originalEvent, opt_dragging, opt_frameState, opt_activePointers) {
        var _this = _super.call(this, type, map, opt_frameState) || this;
        /**
         * The original browser event.
         * @const
         * @type {EVENT}
         * @api
         */
        _this.originalEvent = originalEvent;
        /**
         * The map pixel relative to the viewport corresponding to the original browser event.
         * @type {?import("./pixel.js").Pixel}
         */
        _this.pixel_ = null;
        /**
         * The coordinate in the user projection corresponding to the original browser event.
         * @type {?import("./coordinate.js").Coordinate}
         */
        _this.coordinate_ = null;
        /**
         * Indicates if the map is currently being dragged. Only set for
         * `POINTERDRAG` and `POINTERMOVE` events. Default is `false`.
         *
         * @type {boolean}
         * @api
         */
        _this.dragging = opt_dragging !== undefined ? opt_dragging : false;
        /**
         * @type {Array<PointerEvent>|undefined}
         */
        _this.activePointers = opt_activePointers;
        return _this;
    }
    Object.defineProperty(MapBrowserEvent.prototype, "pixel", {
        /**
         * The map pixel relative to the viewport corresponding to the original event.
         * @type {import("./pixel.js").Pixel}
         * @api
         */
        get: function () {
            if (!this.pixel_) {
                this.pixel_ = this.map.getEventPixel(this.originalEvent);
            }
            return this.pixel_;
        },
        set: function (pixel) {
            this.pixel_ = pixel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MapBrowserEvent.prototype, "coordinate", {
        /**
         * The coordinate corresponding to the original browser event.  This will be in the user
         * projection if one is set.  Otherwise it will be in the view projection.
         * @type {import("./coordinate.js").Coordinate}
         * @api
         */
        get: function () {
            if (!this.coordinate_) {
                this.coordinate_ = this.map.getCoordinateFromPixel(this.pixel);
            }
            return this.coordinate_;
        },
        set: function (coordinate) {
            this.coordinate_ = coordinate;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Prevents the default browser action.
     * See https://developer.mozilla.org/en-US/docs/Web/API/event.preventDefault.
     * @api
     */
    MapBrowserEvent.prototype.preventDefault = function () {
        _super.prototype.preventDefault.call(this);
        if ('preventDefault' in this.originalEvent) {
            /** @type {UIEvent} */ (this.originalEvent).preventDefault();
        }
    };
    /**
     * Prevents further propagation of the current event.
     * See https://developer.mozilla.org/en-US/docs/Web/API/event.stopPropagation.
     * @api
     */
    MapBrowserEvent.prototype.stopPropagation = function () {
        _super.prototype.stopPropagation.call(this);
        if ('stopPropagation' in this.originalEvent) {
            /** @type {UIEvent} */ (this.originalEvent).stopPropagation();
        }
    };
    return MapBrowserEvent;
}(ol_MapEvent));
/* harmony default export */ const ol_MapBrowserEvent = (MapBrowserEvent);
//# sourceMappingURL=MapBrowserEvent.js.map
;// CONCATENATED MODULE: ./node_modules/ol/MapBrowserEventType.js
/**
 * @module ol/MapBrowserEventType
 */

/**
 * Constants for event names.
 * @enum {string}
 */
/* harmony default export */ const ol_MapBrowserEventType = ({
    /**
     * A true single click with no dragging and no double click. Note that this
     * event is delayed by 250 ms to ensure that it is not a double click.
     * @event module:ol/MapBrowserEvent~MapBrowserEvent#singleclick
     * @api
     */
    SINGLECLICK: 'singleclick',
    /**
     * A click with no dragging. A double click will fire two of this.
     * @event module:ol/MapBrowserEvent~MapBrowserEvent#click
     * @api
     */
    CLICK: events_EventType/* default.CLICK */.Z.CLICK,
    /**
     * A true double click, with no dragging.
     * @event module:ol/MapBrowserEvent~MapBrowserEvent#dblclick
     * @api
     */
    DBLCLICK: events_EventType/* default.DBLCLICK */.Z.DBLCLICK,
    /**
     * Triggered when a pointer is dragged.
     * @event module:ol/MapBrowserEvent~MapBrowserEvent#pointerdrag
     * @api
     */
    POINTERDRAG: 'pointerdrag',
    /**
     * Triggered when a pointer is moved. Note that on touch devices this is
     * triggered when the map is panned, so is not the same as mousemove.
     * @event module:ol/MapBrowserEvent~MapBrowserEvent#pointermove
     * @api
     */
    POINTERMOVE: 'pointermove',
    POINTERDOWN: 'pointerdown',
    POINTERUP: 'pointerup',
    POINTEROVER: 'pointerover',
    POINTEROUT: 'pointerout',
    POINTERENTER: 'pointerenter',
    POINTERLEAVE: 'pointerleave',
    POINTERCANCEL: 'pointercancel',
});
/***
 * @typedef {'singleclick'|'click'|'dblclick'|'pointerdrag'|'pointermove'} Types
 */
//# sourceMappingURL=MapBrowserEventType.js.map
;// CONCATENATED MODULE: ./node_modules/ol/pointer/EventType.js
/**
 * @module ol/pointer/EventType
 */
/**
 * Constants for event names.
 * @enum {string}
 */
/* harmony default export */ const pointer_EventType = ({
    POINTERMOVE: 'pointermove',
    POINTERDOWN: 'pointerdown',
    POINTERUP: 'pointerup',
    POINTEROVER: 'pointerover',
    POINTEROUT: 'pointerout',
    POINTERENTER: 'pointerenter',
    POINTERLEAVE: 'pointerleave',
    POINTERCANCEL: 'pointercancel',
});
//# sourceMappingURL=EventType.js.map
;// CONCATENATED MODULE: ./node_modules/ol/MapBrowserEventHandler.js
/**
 * @module ol/MapBrowserEventHandler
 */
var MapBrowserEventHandler_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();









var MapBrowserEventHandler = /** @class */ (function (_super) {
    MapBrowserEventHandler_extends(MapBrowserEventHandler, _super);
    /**
     * @param {import("./PluggableMap.js").default} map The map with the viewport to listen to events on.
     * @param {number} [moveTolerance] The minimal distance the pointer must travel to trigger a move.
     */
    function MapBrowserEventHandler(map, moveTolerance) {
        var _this = _super.call(this, map) || this;
        /**
         * This is the element that we will listen to the real events on.
         * @type {import("./PluggableMap.js").default}
         * @private
         */
        _this.map_ = map;
        /**
         * @type {any}
         * @private
         */
        _this.clickTimeoutId_;
        /**
         * Emulate dblclick and singleclick. Will be true when only one pointer is active.
         * @type {boolean}
         */
        _this.emulateClicks_ = false;
        /**
         * @type {boolean}
         * @private
         */
        _this.dragging_ = false;
        /**
         * @type {!Array<import("./events.js").EventsKey>}
         * @private
         */
        _this.dragListenerKeys_ = [];
        /**
         * @type {number}
         * @private
         */
        _this.moveTolerance_ = moveTolerance === undefined ? 1 : moveTolerance;
        /**
         * The most recent "down" type event (or null if none have occurred).
         * Set on pointerdown.
         * @type {PointerEvent|null}
         * @private
         */
        _this.down_ = null;
        var element = _this.map_.getViewport();
        /**
         * @type {Array<PointerEvent>}
         * @private
         */
        _this.activePointers_ = [];
        /**
         * @type {!Object<number, Event>}
         * @private
         */
        _this.trackedTouches_ = {};
        _this.element_ = element;
        /**
         * @type {?import("./events.js").EventsKey}
         * @private
         */
        _this.pointerdownListenerKey_ = (0,events/* listen */.oL)(element, pointer_EventType.POINTERDOWN, _this.handlePointerDown_, _this);
        /**
         * @type {PointerEvent}
         * @private
         */
        _this.originalPointerMoveEvent_;
        /**
         * @type {?import("./events.js").EventsKey}
         * @private
         */
        _this.relayedListenerKey_ = (0,events/* listen */.oL)(element, pointer_EventType.POINTERMOVE, _this.relayMoveEvent_, _this);
        /**
         * @private
         */
        _this.boundHandleTouchMove_ = _this.handleTouchMove_.bind(_this);
        _this.element_.addEventListener(events_EventType/* default.TOUCHMOVE */.Z.TOUCHMOVE, _this.boundHandleTouchMove_, has/* PASSIVE_EVENT_LISTENERS */.bM ? { passive: false } : false);
        return _this;
    }
    /**
     * @param {PointerEvent} pointerEvent Pointer
     * event.
     * @private
     */
    MapBrowserEventHandler.prototype.emulateClick_ = function (pointerEvent) {
        var newEvent = new ol_MapBrowserEvent(ol_MapBrowserEventType.CLICK, this.map_, pointerEvent);
        this.dispatchEvent(newEvent);
        if (this.clickTimeoutId_ !== undefined) {
            // double-click
            clearTimeout(this.clickTimeoutId_);
            this.clickTimeoutId_ = undefined;
            newEvent = new ol_MapBrowserEvent(ol_MapBrowserEventType.DBLCLICK, this.map_, pointerEvent);
            this.dispatchEvent(newEvent);
        }
        else {
            // click
            this.clickTimeoutId_ = setTimeout(
            /** @this {MapBrowserEventHandler} */
            function () {
                this.clickTimeoutId_ = undefined;
                var newEvent = new ol_MapBrowserEvent(ol_MapBrowserEventType.SINGLECLICK, this.map_, pointerEvent);
                this.dispatchEvent(newEvent);
            }.bind(this), 250);
        }
    };
    /**
     * Keeps track on how many pointers are currently active.
     *
     * @param {PointerEvent} pointerEvent Pointer
     * event.
     * @private
     */
    MapBrowserEventHandler.prototype.updateActivePointers_ = function (pointerEvent) {
        var event = pointerEvent;
        var id = event.pointerId;
        if (event.type == ol_MapBrowserEventType.POINTERUP ||
            event.type == ol_MapBrowserEventType.POINTERCANCEL) {
            delete this.trackedTouches_[id];
            for (var pointerId in this.trackedTouches_) {
                if (this.trackedTouches_[pointerId].target !== event.target) {
                    // Some platforms assign a new pointerId when the target changes.
                    // If this happens, delete one tracked pointer. If there is more
                    // than one tracked pointer for the old target, it will be cleared
                    // by subsequent POINTERUP events from other pointers.
                    delete this.trackedTouches_[pointerId];
                    break;
                }
            }
        }
        else if (event.type == ol_MapBrowserEventType.POINTERDOWN ||
            event.type == ol_MapBrowserEventType.POINTERMOVE) {
            this.trackedTouches_[id] = event;
        }
        this.activePointers_ = (0,obj/* getValues */.KX)(this.trackedTouches_);
    };
    /**
     * @param {PointerEvent} pointerEvent Pointer
     * event.
     * @private
     */
    MapBrowserEventHandler.prototype.handlePointerUp_ = function (pointerEvent) {
        this.updateActivePointers_(pointerEvent);
        var newEvent = new ol_MapBrowserEvent(ol_MapBrowserEventType.POINTERUP, this.map_, pointerEvent, undefined, undefined, this.activePointers_);
        this.dispatchEvent(newEvent);
        // We emulate click events on left mouse button click, touch contact, and pen
        // contact. isMouseActionButton returns true in these cases (evt.button is set
        // to 0).
        // See http://www.w3.org/TR/pointerevents/#button-states
        // We only fire click, singleclick, and doubleclick if nobody has called
        // event.preventDefault().
        if (this.emulateClicks_ &&
            !newEvent.defaultPrevented &&
            !this.dragging_ &&
            this.isMouseActionButton_(pointerEvent)) {
            this.emulateClick_(this.down_);
        }
        if (this.activePointers_.length === 0) {
            this.dragListenerKeys_.forEach(events/* unlistenByKey */.bN);
            this.dragListenerKeys_.length = 0;
            this.dragging_ = false;
            this.down_ = null;
        }
    };
    /**
     * @param {PointerEvent} pointerEvent Pointer
     * event.
     * @return {boolean} If the left mouse button was pressed.
     * @private
     */
    MapBrowserEventHandler.prototype.isMouseActionButton_ = function (pointerEvent) {
        return pointerEvent.button === 0;
    };
    /**
     * @param {PointerEvent} pointerEvent Pointer
     * event.
     * @private
     */
    MapBrowserEventHandler.prototype.handlePointerDown_ = function (pointerEvent) {
        this.emulateClicks_ = this.activePointers_.length === 0;
        this.updateActivePointers_(pointerEvent);
        var newEvent = new ol_MapBrowserEvent(ol_MapBrowserEventType.POINTERDOWN, this.map_, pointerEvent, undefined, undefined, this.activePointers_);
        this.dispatchEvent(newEvent);
        // Store a copy of the down event
        this.down_ = /** @type {PointerEvent} */ ({});
        for (var property in pointerEvent) {
            var value = pointerEvent[property];
            this.down_[property] = typeof value === 'function' ? functions/* VOID */.Zn : value;
        }
        if (this.dragListenerKeys_.length === 0) {
            var doc = this.map_.getOwnerDocument();
            this.dragListenerKeys_.push((0,events/* listen */.oL)(doc, ol_MapBrowserEventType.POINTERMOVE, this.handlePointerMove_, this), (0,events/* listen */.oL)(doc, ol_MapBrowserEventType.POINTERUP, this.handlePointerUp_, this), 
            /* Note that the listener for `pointercancel is set up on
             * `pointerEventHandler_` and not `documentPointerEventHandler_` like
             * the `pointerup` and `pointermove` listeners.
             *
             * The reason for this is the following: `TouchSource.vacuumTouches_()`
             * issues `pointercancel` events, when there was no `touchend` for a
             * `touchstart`. Now, let's say a first `touchstart` is registered on
             * `pointerEventHandler_`. The `documentPointerEventHandler_` is set up.
             * But `documentPointerEventHandler_` doesn't know about the first
             * `touchstart`. If there is no `touchend` for the `touchstart`, we can
             * only receive a `touchcancel` from `pointerEventHandler_`, because it is
             * only registered there.
             */
            (0,events/* listen */.oL)(this.element_, ol_MapBrowserEventType.POINTERCANCEL, this.handlePointerUp_, this));
            if (this.element_.getRootNode && this.element_.getRootNode() !== doc) {
                this.dragListenerKeys_.push((0,events/* listen */.oL)(this.element_.getRootNode(), ol_MapBrowserEventType.POINTERUP, this.handlePointerUp_, this));
            }
        }
    };
    /**
     * @param {PointerEvent} pointerEvent Pointer
     * event.
     * @private
     */
    MapBrowserEventHandler.prototype.handlePointerMove_ = function (pointerEvent) {
        // Between pointerdown and pointerup, pointermove events are triggered.
        // To avoid a 'false' touchmove event to be dispatched, we test if the pointer
        // moved a significant distance.
        if (this.isMoving_(pointerEvent)) {
            this.updateActivePointers_(pointerEvent);
            this.dragging_ = true;
            var newEvent = new ol_MapBrowserEvent(ol_MapBrowserEventType.POINTERDRAG, this.map_, pointerEvent, this.dragging_, undefined, this.activePointers_);
            this.dispatchEvent(newEvent);
        }
    };
    /**
     * Wrap and relay a pointermove event.
     * @param {PointerEvent} pointerEvent Pointer
     * event.
     * @private
     */
    MapBrowserEventHandler.prototype.relayMoveEvent_ = function (pointerEvent) {
        this.originalPointerMoveEvent_ = pointerEvent;
        var dragging = !!(this.down_ && this.isMoving_(pointerEvent));
        this.dispatchEvent(new ol_MapBrowserEvent(ol_MapBrowserEventType.POINTERMOVE, this.map_, pointerEvent, dragging));
    };
    /**
     * Flexible handling of a `touch-action: none` css equivalent: because calling
     * `preventDefault()` on a `pointermove` event does not stop native page scrolling
     * and zooming, we also listen for `touchmove` and call `preventDefault()` on it
     * when an interaction (currently `DragPan` handles the event.
     * @param {TouchEvent} event Event.
     * @private
     */
    MapBrowserEventHandler.prototype.handleTouchMove_ = function (event) {
        // Due to https://github.com/mpizenberg/elm-pep/issues/2, `this.originalPointerMoveEvent_`
        // may not be initialized yet when we get here on a platform without native pointer events.
        var originalEvent = this.originalPointerMoveEvent_;
        if ((!originalEvent || originalEvent.defaultPrevented) &&
            (typeof event.cancelable !== 'boolean' || event.cancelable === true)) {
            event.preventDefault();
        }
    };
    /**
     * @param {PointerEvent} pointerEvent Pointer
     * event.
     * @return {boolean} Is moving.
     * @private
     */
    MapBrowserEventHandler.prototype.isMoving_ = function (pointerEvent) {
        return (this.dragging_ ||
            Math.abs(pointerEvent.clientX - this.down_.clientX) >
                this.moveTolerance_ ||
            Math.abs(pointerEvent.clientY - this.down_.clientY) > this.moveTolerance_);
    };
    /**
     * Clean up.
     */
    MapBrowserEventHandler.prototype.disposeInternal = function () {
        if (this.relayedListenerKey_) {
            (0,events/* unlistenByKey */.bN)(this.relayedListenerKey_);
            this.relayedListenerKey_ = null;
        }
        this.element_.removeEventListener(events_EventType/* default.TOUCHMOVE */.Z.TOUCHMOVE, this.boundHandleTouchMove_);
        if (this.pointerdownListenerKey_) {
            (0,events/* unlistenByKey */.bN)(this.pointerdownListenerKey_);
            this.pointerdownListenerKey_ = null;
        }
        this.dragListenerKeys_.forEach(events/* unlistenByKey */.bN);
        this.dragListenerKeys_.length = 0;
        this.element_ = null;
        _super.prototype.disposeInternal.call(this);
    };
    return MapBrowserEventHandler;
}(Target/* default */.Z));
/* harmony default export */ const ol_MapBrowserEventHandler = (MapBrowserEventHandler);
//# sourceMappingURL=MapBrowserEventHandler.js.map
;// CONCATENATED MODULE: ./node_modules/ol/MapEventType.js
/**
 * @module ol/MapEventType
 */
/**
 * @enum {string}
 */
/* harmony default export */ const MapEventType = ({
    /**
     * Triggered after a map frame is rendered.
     * @event module:ol/MapEvent~MapEvent#postrender
     * @api
     */
    POSTRENDER: 'postrender',
    /**
     * Triggered when the map starts moving.
     * @event module:ol/MapEvent~MapEvent#movestart
     * @api
     */
    MOVESTART: 'movestart',
    /**
     * Triggered after the map is moved.
     * @event module:ol/MapEvent~MapEvent#moveend
     * @api
     */
    MOVEEND: 'moveend',
    /**
     * Triggered when loading of additional map data (tiles, images, features) starts.
     * @event module:ol/MapEvent~MapEvent#loadstart
     * @api
     */
    LOADSTART: 'loadstart',
    /**
     * Triggered when loading of additional map data has completed.
     * @event module:ol/MapEvent~MapEvent#loadend
     * @api
     */
    LOADEND: 'loadend',
});
/***
 * @typedef {'postrender'|'movestart'|'moveend'|'loadstart'|'loadend'} Types
 */
//# sourceMappingURL=MapEventType.js.map
;// CONCATENATED MODULE: ./node_modules/ol/MapProperty.js
/**
 * @module ol/MapProperty
 */
/**
 * @enum {string}
 */
/* harmony default export */ const MapProperty = ({
    LAYERGROUP: 'layergroup',
    SIZE: 'size',
    TARGET: 'target',
    VIEW: 'view',
});
//# sourceMappingURL=MapProperty.js.map
;// CONCATENATED MODULE: ./node_modules/ol/structs/PriorityQueue.js
/**
 * @module ol/structs/PriorityQueue
 */


/**
 * @type {number}
 */
var DROP = Infinity;
/**
 * @classdesc
 * Priority queue.
 *
 * The implementation is inspired from the Closure Library's Heap class and
 * Python's heapq module.
 *
 * See https://github.com/google/closure-library/blob/master/closure/goog/structs/heap.js
 * and https://hg.python.org/cpython/file/2.7/Lib/heapq.py.
 *
 * @template T
 */
var PriorityQueue = /** @class */ (function () {
    /**
     * @param {function(T): number} priorityFunction Priority function.
     * @param {function(T): string} keyFunction Key function.
     */
    function PriorityQueue(priorityFunction, keyFunction) {
        /**
         * @type {function(T): number}
         * @private
         */
        this.priorityFunction_ = priorityFunction;
        /**
         * @type {function(T): string}
         * @private
         */
        this.keyFunction_ = keyFunction;
        /**
         * @type {Array<T>}
         * @private
         */
        this.elements_ = [];
        /**
         * @type {Array<number>}
         * @private
         */
        this.priorities_ = [];
        /**
         * @type {!Object<string, boolean>}
         * @private
         */
        this.queuedElements_ = {};
    }
    /**
     * FIXME empty description for jsdoc
     */
    PriorityQueue.prototype.clear = function () {
        this.elements_.length = 0;
        this.priorities_.length = 0;
        (0,obj/* clear */.ZH)(this.queuedElements_);
    };
    /**
     * Remove and return the highest-priority element. O(log N).
     * @return {T} Element.
     */
    PriorityQueue.prototype.dequeue = function () {
        var elements = this.elements_;
        var priorities = this.priorities_;
        var element = elements[0];
        if (elements.length == 1) {
            elements.length = 0;
            priorities.length = 0;
        }
        else {
            elements[0] = elements.pop();
            priorities[0] = priorities.pop();
            this.siftUp_(0);
        }
        var elementKey = this.keyFunction_(element);
        delete this.queuedElements_[elementKey];
        return element;
    };
    /**
     * Enqueue an element. O(log N).
     * @param {T} element Element.
     * @return {boolean} The element was added to the queue.
     */
    PriorityQueue.prototype.enqueue = function (element) {
        (0,asserts/* assert */.h)(!(this.keyFunction_(element) in this.queuedElements_), 31); // Tried to enqueue an `element` that was already added to the queue
        var priority = this.priorityFunction_(element);
        if (priority != DROP) {
            this.elements_.push(element);
            this.priorities_.push(priority);
            this.queuedElements_[this.keyFunction_(element)] = true;
            this.siftDown_(0, this.elements_.length - 1);
            return true;
        }
        return false;
    };
    /**
     * @return {number} Count.
     */
    PriorityQueue.prototype.getCount = function () {
        return this.elements_.length;
    };
    /**
     * Gets the index of the left child of the node at the given index.
     * @param {number} index The index of the node to get the left child for.
     * @return {number} The index of the left child.
     * @private
     */
    PriorityQueue.prototype.getLeftChildIndex_ = function (index) {
        return index * 2 + 1;
    };
    /**
     * Gets the index of the right child of the node at the given index.
     * @param {number} index The index of the node to get the right child for.
     * @return {number} The index of the right child.
     * @private
     */
    PriorityQueue.prototype.getRightChildIndex_ = function (index) {
        return index * 2 + 2;
    };
    /**
     * Gets the index of the parent of the node at the given index.
     * @param {number} index The index of the node to get the parent for.
     * @return {number} The index of the parent.
     * @private
     */
    PriorityQueue.prototype.getParentIndex_ = function (index) {
        return (index - 1) >> 1;
    };
    /**
     * Make this a heap. O(N).
     * @private
     */
    PriorityQueue.prototype.heapify_ = function () {
        var i;
        for (i = (this.elements_.length >> 1) - 1; i >= 0; i--) {
            this.siftUp_(i);
        }
    };
    /**
     * @return {boolean} Is empty.
     */
    PriorityQueue.prototype.isEmpty = function () {
        return this.elements_.length === 0;
    };
    /**
     * @param {string} key Key.
     * @return {boolean} Is key queued.
     */
    PriorityQueue.prototype.isKeyQueued = function (key) {
        return key in this.queuedElements_;
    };
    /**
     * @param {T} element Element.
     * @return {boolean} Is queued.
     */
    PriorityQueue.prototype.isQueued = function (element) {
        return this.isKeyQueued(this.keyFunction_(element));
    };
    /**
     * @param {number} index The index of the node to move down.
     * @private
     */
    PriorityQueue.prototype.siftUp_ = function (index) {
        var elements = this.elements_;
        var priorities = this.priorities_;
        var count = elements.length;
        var element = elements[index];
        var priority = priorities[index];
        var startIndex = index;
        while (index < count >> 1) {
            var lIndex = this.getLeftChildIndex_(index);
            var rIndex = this.getRightChildIndex_(index);
            var smallerChildIndex = rIndex < count && priorities[rIndex] < priorities[lIndex]
                ? rIndex
                : lIndex;
            elements[index] = elements[smallerChildIndex];
            priorities[index] = priorities[smallerChildIndex];
            index = smallerChildIndex;
        }
        elements[index] = element;
        priorities[index] = priority;
        this.siftDown_(startIndex, index);
    };
    /**
     * @param {number} startIndex The index of the root.
     * @param {number} index The index of the node to move up.
     * @private
     */
    PriorityQueue.prototype.siftDown_ = function (startIndex, index) {
        var elements = this.elements_;
        var priorities = this.priorities_;
        var element = elements[index];
        var priority = priorities[index];
        while (index > startIndex) {
            var parentIndex = this.getParentIndex_(index);
            if (priorities[parentIndex] > priority) {
                elements[index] = elements[parentIndex];
                priorities[index] = priorities[parentIndex];
                index = parentIndex;
            }
            else {
                break;
            }
        }
        elements[index] = element;
        priorities[index] = priority;
    };
    /**
     * FIXME empty description for jsdoc
     */
    PriorityQueue.prototype.reprioritize = function () {
        var priorityFunction = this.priorityFunction_;
        var elements = this.elements_;
        var priorities = this.priorities_;
        var index = 0;
        var n = elements.length;
        var element, i, priority;
        for (i = 0; i < n; ++i) {
            element = elements[i];
            priority = priorityFunction(element);
            if (priority == DROP) {
                delete this.queuedElements_[this.keyFunction_(element)];
            }
            else {
                priorities[index] = priority;
                elements[index++] = element;
            }
        }
        elements.length = index;
        priorities.length = index;
        this.heapify_();
    };
    return PriorityQueue;
}());
/* harmony default export */ const structs_PriorityQueue = (PriorityQueue);
//# sourceMappingURL=PriorityQueue.js.map
// EXTERNAL MODULE: ./node_modules/ol/TileState.js
var TileState = __webpack_require__(7195);
;// CONCATENATED MODULE: ./node_modules/ol/TileQueue.js
var TileQueue_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @module ol/TileQueue
 */



/**
 * @typedef {function(import("./Tile.js").default, string, import("./coordinate.js").Coordinate, number): number} PriorityFunction
 */
var TileQueue = /** @class */ (function (_super) {
    TileQueue_extends(TileQueue, _super);
    /**
     * @param {PriorityFunction} tilePriorityFunction Tile priority function.
     * @param {function(): ?} tileChangeCallback Function called on each tile change event.
     */
    function TileQueue(tilePriorityFunction, tileChangeCallback) {
        var _this = _super.call(this, 
        /**
         * @param {Array} element Element.
         * @return {number} Priority.
         */
        function (element) {
            return tilePriorityFunction.apply(null, element);
        }, 
        /**
         * @param {Array} element Element.
         * @return {string} Key.
         */
        function (element) {
            return /** @type {import("./Tile.js").default} */ (element[0]).getKey();
        }) || this;
        /** @private */
        _this.boundHandleTileChange_ = _this.handleTileChange.bind(_this);
        /**
         * @private
         * @type {function(): ?}
         */
        _this.tileChangeCallback_ = tileChangeCallback;
        /**
         * @private
         * @type {number}
         */
        _this.tilesLoading_ = 0;
        /**
         * @private
         * @type {!Object<string,boolean>}
         */
        _this.tilesLoadingKeys_ = {};
        return _this;
    }
    /**
     * @param {Array} element Element.
     * @return {boolean} The element was added to the queue.
     */
    TileQueue.prototype.enqueue = function (element) {
        var added = _super.prototype.enqueue.call(this, element);
        if (added) {
            var tile = element[0];
            tile.addEventListener(events_EventType/* default.CHANGE */.Z.CHANGE, this.boundHandleTileChange_);
        }
        return added;
    };
    /**
     * @return {number} Number of tiles loading.
     */
    TileQueue.prototype.getTilesLoading = function () {
        return this.tilesLoading_;
    };
    /**
     * @param {import("./events/Event.js").default} event Event.
     * @protected
     */
    TileQueue.prototype.handleTileChange = function (event) {
        var tile = /** @type {import("./Tile.js").default} */ (event.target);
        var state = tile.getState();
        if (state === TileState/* default.LOADED */.Z.LOADED ||
            state === TileState/* default.ERROR */.Z.ERROR ||
            state === TileState/* default.EMPTY */.Z.EMPTY) {
            tile.removeEventListener(events_EventType/* default.CHANGE */.Z.CHANGE, this.boundHandleTileChange_);
            var tileKey = tile.getKey();
            if (tileKey in this.tilesLoadingKeys_) {
                delete this.tilesLoadingKeys_[tileKey];
                --this.tilesLoading_;
            }
            this.tileChangeCallback_();
        }
    };
    /**
     * @param {number} maxTotalLoading Maximum number tiles to load simultaneously.
     * @param {number} maxNewLoads Maximum number of new tiles to load.
     */
    TileQueue.prototype.loadMoreTiles = function (maxTotalLoading, maxNewLoads) {
        var newLoads = 0;
        var state, tile, tileKey;
        while (this.tilesLoading_ < maxTotalLoading &&
            newLoads < maxNewLoads &&
            this.getCount() > 0) {
            tile = /** @type {import("./Tile.js").default} */ (this.dequeue()[0]);
            tileKey = tile.getKey();
            state = tile.getState();
            if (state === TileState/* default.IDLE */.Z.IDLE && !(tileKey in this.tilesLoadingKeys_)) {
                this.tilesLoadingKeys_[tileKey] = true;
                ++this.tilesLoading_;
                ++newLoads;
                tile.load();
            }
        }
    };
    return TileQueue;
}(structs_PriorityQueue));
/* harmony default export */ const ol_TileQueue = (TileQueue);
/**
 * @param {import('./PluggableMap.js').FrameState} frameState Frame state.
 * @param {import("./Tile.js").default} tile Tile.
 * @param {string} tileSourceKey Tile source key.
 * @param {import("./coordinate.js").Coordinate} tileCenter Tile center.
 * @param {number} tileResolution Tile resolution.
 * @return {number} Tile priority.
 */
function getTilePriority(frameState, tile, tileSourceKey, tileCenter, tileResolution) {
    // Filter out tiles at higher zoom levels than the current zoom level, or that
    // are outside the visible extent.
    if (!frameState || !(tileSourceKey in frameState.wantedTiles)) {
        return DROP;
    }
    if (!frameState.wantedTiles[tileSourceKey][tile.getKey()]) {
        return DROP;
    }
    // Prioritize the highest zoom level tiles closest to the focus.
    // Tiles at higher zoom levels are prioritized using Math.log(tileResolution).
    // Within a zoom level, tiles are prioritized by the distance in pixels between
    // the center of the tile and the center of the viewport.  The factor of 65536
    // means that the prioritization should behave as desired for tiles up to
    // 65536 * Math.log(2) = 45426 pixels from the focus.
    var center = frameState.viewState.center;
    var deltaX = tileCenter[0] - center[0];
    var deltaY = tileCenter[1] - center[1];
    return (65536 * Math.log(tileResolution) +
        Math.sqrt(deltaX * deltaX + deltaY * deltaY) / tileResolution);
}
//# sourceMappingURL=TileQueue.js.map
// EXTERNAL MODULE: ./node_modules/ol/View.js + 3 modules
var View = __webpack_require__(2241);
// EXTERNAL MODULE: ./node_modules/ol/ViewHint.js
var ViewHint = __webpack_require__(7755);
// EXTERNAL MODULE: ./node_modules/ol/proj.js + 6 modules
var proj = __webpack_require__(1311);
// EXTERNAL MODULE: ./node_modules/ol/size.js
var ol_size = __webpack_require__(4307);
;// CONCATENATED MODULE: ./node_modules/ol/PluggableMap.js
var PluggableMap_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @module ol/PluggableMap
 */




























/**
 * State of the current frame. Only `pixelRatio`, `time` and `viewState` should
 * be used in applications.
 * @typedef {Object} FrameState
 * @property {number} pixelRatio The pixel ratio of the frame.
 * @property {number} time The time when rendering of the frame was requested.
 * @property {import("./View.js").State} viewState The state of the current view.
 * @property {boolean} animate Animate.
 * @property {import("./transform.js").Transform} coordinateToPixelTransform CoordinateToPixelTransform.
 * @property {import("rbush").default} declutterTree DeclutterTree.
 * @property {null|import("./extent.js").Extent} extent Extent.
 * @property {import("./extent.js").Extent} [nextExtent] Next extent during an animation series.
 * @property {number} index Index.
 * @property {Array<import("./layer/Layer.js").State>} layerStatesArray LayerStatesArray.
 * @property {number} layerIndex LayerIndex.
 * @property {import("./transform.js").Transform} pixelToCoordinateTransform PixelToCoordinateTransform.
 * @property {Array<PostRenderFunction>} postRenderFunctions PostRenderFunctions.
 * @property {import("./size.js").Size} size Size.
 * @property {TileQueue} tileQueue TileQueue.
 * @property {!Object<string, Object<string, boolean>>} usedTiles UsedTiles.
 * @property {Array<number>} viewHints ViewHints.
 * @property {!Object<string, Object<string, boolean>>} wantedTiles WantedTiles.
 * @property {string} mapId The id of the map.
 * @property {Object<string, boolean>} renderTargets Identifiers of previously rendered elements.
 */
/**
 * @typedef {function(PluggableMap, ?FrameState): any} PostRenderFunction
 */
/**
 * @typedef {Object} AtPixelOptions
 * @property {undefined|function(import("./layer/Layer.js").default<import("./source/Source").default>): boolean} [layerFilter] Layer filter
 * function. The filter function will receive one argument, the
 * {@link module:ol/layer/Layer~Layer layer-candidate} and it should return a boolean value.
 * Only layers which are visible and for which this function returns `true`
 * will be tested for features. By default, all visible layers will be tested.
 * @property {number} [hitTolerance=0] Hit-detection tolerance in css pixels. Pixels
 * inside the radius around the given position will be checked for features.
 * @property {boolean} [checkWrapped=true] Check-Wrapped Will check for for wrapped geometries inside the range of
 *   +/- 1 world width. Works only if a projection is used that can be wrapped.
 */
/**
 * @typedef {Object} MapOptionsInternal
 * @property {Collection<import("./control/Control.js").default>} [controls] Controls.
 * @property {Collection<import("./interaction/Interaction.js").default>} [interactions] Interactions.
 * @property {HTMLElement|Document} keyboardEventTarget KeyboardEventTarget.
 * @property {Collection<import("./Overlay.js").default>} overlays Overlays.
 * @property {Object<string, *>} values Values.
 */
/**
 * @typedef {import("./ObjectEventType").Types|'change:layergroup'|'change:size'|'change:target'|'change:view'} MapObjectEventTypes
 */
/***
 * @template Return
 * @typedef {import("./Observable").OnSignature<import("./Observable").EventTypes, import("./events/Event.js").default, Return> &
 *    import("./Observable").OnSignature<MapObjectEventTypes, import("./Object").ObjectEvent, Return> &
 *    import("./Observable").OnSignature<import("./MapBrowserEventType").Types, import("./MapBrowserEvent").default, Return> &
 *    import("./Observable").OnSignature<import("./MapEventType").Types, import("./MapEvent").default, Return> &
 *    import("./Observable").OnSignature<import("./render/EventType").MapRenderEventTypes, import("./render/Event").default, Return> &
 *    import("./Observable").CombinedOnSignature<import("./Observable").EventTypes|MapObjectEventTypes|
 *      import("./MapBrowserEventType").Types|import("./MapEventType").Types|
 *      import("./render/EventType").MapRenderEventTypes, Return>} PluggableMapOnSignature
 */
/**
 * Object literal with config options for the map.
 * @typedef {Object} MapOptions
 * @property {Collection<import("./control/Control.js").default>|Array<import("./control/Control.js").default>} [controls]
 * Controls initially added to the map. If not specified,
 * {@link module:ol/control.defaults} is used.
 * @property {number} [pixelRatio=window.devicePixelRatio] The ratio between
 * physical pixels and device-independent pixels (dips) on the device.
 * @property {Collection<import("./interaction/Interaction.js").default>|Array<import("./interaction/Interaction.js").default>} [interactions]
 * Interactions that are initially added to the map. If not specified,
 * {@link module:ol/interaction.defaults} is used.
 * @property {HTMLElement|Document|string} [keyboardEventTarget] The element to
 * listen to keyboard events on. This determines when the `KeyboardPan` and
 * `KeyboardZoom` interactions trigger. For example, if this option is set to
 * `document` the keyboard interactions will always trigger. If this option is
 * not specified, the element the library listens to keyboard events on is the
 * map target (i.e. the user-provided div for the map). If this is not
 * `document`, the target element needs to be focused for key events to be
 * emitted, requiring that the target element has a `tabindex` attribute.
 * @property {Array<import("./layer/Base.js").default>|Collection<import("./layer/Base.js").default>|LayerGroup} [layers]
 * Layers. If this is not defined, a map with no layers will be rendered. Note
 * that layers are rendered in the order supplied, so if you want, for example,
 * a vector layer to appear on top of a tile layer, it must come after the tile
 * layer.
 * @property {number} [maxTilesLoading=16] Maximum number tiles to load
 * simultaneously.
 * @property {number} [moveTolerance=1] The minimum distance in pixels the
 * cursor must move to be detected as a map move event instead of a click.
 * Increasing this value can make it easier to click on the map.
 * @property {Collection<import("./Overlay.js").default>|Array<import("./Overlay.js").default>} [overlays]
 * Overlays initially added to the map. By default, no overlays are added.
 * @property {HTMLElement|string} [target] The container for the map, either the
 * element itself or the `id` of the element. If not specified at construction
 * time, {@link module:ol/Map~Map#setTarget} must be called for the map to be
 * rendered. If passed by element, the container can be in a secondary document.
 * @property {View|Promise<import("./View.js").ViewOptions>} [view] The map's view.  No layer sources will be
 * fetched unless this is specified at construction time or through
 * {@link module:ol/Map~Map#setView}.
 */
/**
 * @param {import("./layer/Base.js").default} layer Layer.
 */
function removeLayerMapProperty(layer) {
    if (layer instanceof Layer/* default */.Z) {
        layer.setMapInternal(null);
        return;
    }
    if (layer instanceof Group) {
        layer.getLayers().forEach(removeLayerMapProperty);
    }
}
/**
 * @param {import("./layer/Base.js").default} layer Layer.
 * @param {PluggableMap} map Map.
 */
function setLayerMapProperty(layer, map) {
    if (layer instanceof Layer/* default */.Z) {
        layer.setMapInternal(map);
        return;
    }
    if (layer instanceof Group) {
        var layers = layer.getLayers().getArray();
        for (var i = 0, ii = layers.length; i < ii; ++i) {
            setLayerMapProperty(layers[i], map);
        }
    }
}
/**
 * @fires import("./MapBrowserEvent.js").MapBrowserEvent
 * @fires import("./MapEvent.js").MapEvent
 * @fires import("./render/Event.js").default#precompose
 * @fires import("./render/Event.js").default#postcompose
 * @fires import("./render/Event.js").default#rendercomplete
 * @api
 */
var PluggableMap = /** @class */ (function (_super) {
    PluggableMap_extends(PluggableMap, _super);
    /**
     * @param {MapOptions} options Map options.
     */
    function PluggableMap(options) {
        var _this = _super.call(this) || this;
        /***
         * @type {PluggableMapOnSignature<import("./events").EventsKey>}
         */
        _this.on;
        /***
         * @type {PluggableMapOnSignature<import("./events").EventsKey>}
         */
        _this.once;
        /***
         * @type {PluggableMapOnSignature<void>}
         */
        _this.un;
        var optionsInternal = createOptionsInternal(options);
        /**
         * @private
         * @type {boolean|undefined}
         */
        _this.renderComplete_;
        /**
         * @private
         * @type {boolean}
         */
        _this.loaded_ = true;
        /** @private */
        _this.boundHandleBrowserEvent_ = _this.handleBrowserEvent.bind(_this);
        /**
         * @type {number}
         * @private
         */
        _this.maxTilesLoading_ =
            options.maxTilesLoading !== undefined ? options.maxTilesLoading : 16;
        /**
         * @private
         * @type {number}
         */
        _this.pixelRatio_ =
            options.pixelRatio !== undefined
                ? options.pixelRatio
                : has/* DEVICE_PIXEL_RATIO */.MP;
        /**
         * @private
         * @type {*}
         */
        _this.postRenderTimeoutHandle_;
        /**
         * @private
         * @type {number|undefined}
         */
        _this.animationDelayKey_;
        /**
         * @private
         */
        _this.animationDelay_ = /** @this {PluggableMap} */ function () {
            this.animationDelayKey_ = undefined;
            this.renderFrame_(Date.now());
        }.bind(_this);
        /**
         * @private
         * @type {import("./transform.js").Transform}
         */
        _this.coordinateToPixelTransform_ = (0,transform/* create */.Ue)();
        /**
         * @private
         * @type {import("./transform.js").Transform}
         */
        _this.pixelToCoordinateTransform_ = (0,transform/* create */.Ue)();
        /**
         * @private
         * @type {number}
         */
        _this.frameIndex_ = 0;
        /**
         * @private
         * @type {?FrameState}
         */
        _this.frameState_ = null;
        /**
         * The extent at the previous 'moveend' event.
         * @private
         * @type {import("./extent.js").Extent}
         */
        _this.previousExtent_ = null;
        /**
         * @private
         * @type {?import("./events.js").EventsKey}
         */
        _this.viewPropertyListenerKey_ = null;
        /**
         * @private
         * @type {?import("./events.js").EventsKey}
         */
        _this.viewChangeListenerKey_ = null;
        /**
         * @private
         * @type {?Array<import("./events.js").EventsKey>}
         */
        _this.layerGroupPropertyListenerKeys_ = null;
        /**
         * @private
         * @type {!HTMLElement}
         */
        _this.viewport_ = document.createElement('div');
        _this.viewport_.className =
            'ol-viewport' + ('ontouchstart' in window ? ' ol-touch' : '');
        _this.viewport_.style.position = 'relative';
        _this.viewport_.style.overflow = 'hidden';
        _this.viewport_.style.width = '100%';
        _this.viewport_.style.height = '100%';
        /**
         * @private
         * @type {!HTMLElement}
         */
        _this.overlayContainer_ = document.createElement('div');
        _this.overlayContainer_.style.position = 'absolute';
        _this.overlayContainer_.style.zIndex = '0';
        _this.overlayContainer_.style.width = '100%';
        _this.overlayContainer_.style.height = '100%';
        _this.overlayContainer_.style.pointerEvents = 'none';
        _this.overlayContainer_.className = 'ol-overlaycontainer';
        _this.viewport_.appendChild(_this.overlayContainer_);
        /**
         * @private
         * @type {!HTMLElement}
         */
        _this.overlayContainerStopEvent_ = document.createElement('div');
        _this.overlayContainerStopEvent_.style.position = 'absolute';
        _this.overlayContainerStopEvent_.style.zIndex = '0';
        _this.overlayContainerStopEvent_.style.width = '100%';
        _this.overlayContainerStopEvent_.style.height = '100%';
        _this.overlayContainerStopEvent_.style.pointerEvents = 'none';
        _this.overlayContainerStopEvent_.className = 'ol-overlaycontainer-stopevent';
        _this.viewport_.appendChild(_this.overlayContainerStopEvent_);
        /**
         * @private
         * @type {MapBrowserEventHandler}
         */
        _this.mapBrowserEventHandler_ = null;
        /**
         * @private
         * @type {number}
         */
        _this.moveTolerance_ = options.moveTolerance;
        /**
         * @private
         * @type {HTMLElement|Document}
         */
        _this.keyboardEventTarget_ = optionsInternal.keyboardEventTarget;
        /**
         * @private
         * @type {?Array<import("./events.js").EventsKey>}
         */
        _this.targetChangeHandlerKeys_ = null;
        /**
         * @type {Collection<import("./control/Control.js").default>}
         * @protected
         */
        _this.controls = optionsInternal.controls || new ol_Collection();
        /**
         * @type {Collection<import("./interaction/Interaction.js").default>}
         * @protected
         */
        _this.interactions = optionsInternal.interactions || new ol_Collection();
        /**
         * @type {Collection<import("./Overlay.js").default>}
         * @private
         */
        _this.overlays_ = optionsInternal.overlays;
        /**
         * A lookup of overlays by id.
         * @private
         * @type {Object<string, import("./Overlay.js").default>}
         */
        _this.overlayIdIndex_ = {};
        /**
         * @type {import("./renderer/Map.js").default|null}
         * @private
         */
        _this.renderer_ = null;
        /**
         * @private
         * @type {!Array<PostRenderFunction>}
         */
        _this.postRenderFunctions_ = [];
        /**
         * @private
         * @type {TileQueue}
         */
        _this.tileQueue_ = new ol_TileQueue(_this.getTilePriority.bind(_this), _this.handleTileChange_.bind(_this));
        _this.addChangeListener(MapProperty.LAYERGROUP, _this.handleLayerGroupChanged_);
        _this.addChangeListener(MapProperty.VIEW, _this.handleViewChanged_);
        _this.addChangeListener(MapProperty.SIZE, _this.handleSizeChanged_);
        _this.addChangeListener(MapProperty.TARGET, _this.handleTargetChanged_);
        // setProperties will trigger the rendering of the map if the map
        // is "defined" already.
        _this.setProperties(optionsInternal.values);
        var map = _this;
        if (options.view && !(options.view instanceof View/* default */.ZP)) {
            options.view.then(function (viewOptions) {
                map.setView(new View/* default */.ZP(viewOptions));
            });
        }
        _this.controls.addEventListener(CollectionEventType.ADD, 
        /**
         * @param {import("./Collection.js").CollectionEvent} event CollectionEvent.
         */
        function (event) {
            event.element.setMap(this);
        }.bind(_this));
        _this.controls.addEventListener(CollectionEventType.REMOVE, 
        /**
         * @param {import("./Collection.js").CollectionEvent} event CollectionEvent.
         */
        function (event) {
            event.element.setMap(null);
        }.bind(_this));
        _this.interactions.addEventListener(CollectionEventType.ADD, 
        /**
         * @param {import("./Collection.js").CollectionEvent} event CollectionEvent.
         */
        function (event) {
            event.element.setMap(this);
        }.bind(_this));
        _this.interactions.addEventListener(CollectionEventType.REMOVE, 
        /**
         * @param {import("./Collection.js").CollectionEvent} event CollectionEvent.
         */
        function (event) {
            event.element.setMap(null);
        }.bind(_this));
        _this.overlays_.addEventListener(CollectionEventType.ADD, 
        /**
         * @param {import("./Collection.js").CollectionEvent} event CollectionEvent.
         */
        function (event) {
            this.addOverlayInternal_(
            /** @type {import("./Overlay.js").default} */ (event.element));
        }.bind(_this));
        _this.overlays_.addEventListener(CollectionEventType.REMOVE, 
        /**
         * @param {import("./Collection.js").CollectionEvent} event CollectionEvent.
         */
        function (event) {
            var overlay = /** @type {import("./Overlay.js").default} */ (event.element);
            var id = overlay.getId();
            if (id !== undefined) {
                delete this.overlayIdIndex_[id.toString()];
            }
            event.element.setMap(null);
        }.bind(_this));
        _this.controls.forEach(
        /**
         * @param {import("./control/Control.js").default} control Control.
         * @this {PluggableMap}
         */
        function (control) {
            control.setMap(this);
        }.bind(_this));
        _this.interactions.forEach(
        /**
         * @param {import("./interaction/Interaction.js").default} interaction Interaction.
         * @this {PluggableMap}
         */
        function (interaction) {
            interaction.setMap(this);
        }.bind(_this));
        _this.overlays_.forEach(_this.addOverlayInternal_.bind(_this));
        return _this;
    }
    /**
     * @abstract
     * @return {import("./renderer/Map.js").default} The map renderer
     */
    PluggableMap.prototype.createRenderer = function () {
        throw new Error('Use a map type that has a createRenderer method');
    };
    /**
     * Add the given control to the map.
     * @param {import("./control/Control.js").default} control Control.
     * @api
     */
    PluggableMap.prototype.addControl = function (control) {
        this.getControls().push(control);
    };
    /**
     * Add the given interaction to the map. If you want to add an interaction
     * at another point of the collection use `getInteractions()` and the methods
     * available on {@link module:ol/Collection~Collection}. This can be used to
     * stop the event propagation from the handleEvent function. The interactions
     * get to handle the events in the reverse order of this collection.
     * @param {import("./interaction/Interaction.js").default} interaction Interaction to add.
     * @api
     */
    PluggableMap.prototype.addInteraction = function (interaction) {
        this.getInteractions().push(interaction);
    };
    /**
     * Adds the given layer to the top of this map. If you want to add a layer
     * elsewhere in the stack, use `getLayers()` and the methods available on
     * {@link module:ol/Collection~Collection}.
     * @param {import("./layer/Base.js").default} layer Layer.
     * @api
     */
    PluggableMap.prototype.addLayer = function (layer) {
        var layers = this.getLayerGroup().getLayers();
        layers.push(layer);
    };
    /**
     * @param {import("./layer/Group.js").GroupEvent} event The layer add event.
     * @private
     */
    PluggableMap.prototype.handleLayerAdd_ = function (event) {
        setLayerMapProperty(event.layer, this);
    };
    /**
     * Add the given overlay to the map.
     * @param {import("./Overlay.js").default} overlay Overlay.
     * @api
     */
    PluggableMap.prototype.addOverlay = function (overlay) {
        this.getOverlays().push(overlay);
    };
    /**
     * This deals with map's overlay collection changes.
     * @param {import("./Overlay.js").default} overlay Overlay.
     * @private
     */
    PluggableMap.prototype.addOverlayInternal_ = function (overlay) {
        var id = overlay.getId();
        if (id !== undefined) {
            this.overlayIdIndex_[id.toString()] = overlay;
        }
        overlay.setMap(this);
    };
    /**
     *
     * Clean up.
     */
    PluggableMap.prototype.disposeInternal = function () {
        this.controls.clear();
        this.interactions.clear();
        this.overlays_.clear();
        this.setTarget(null);
        _super.prototype.disposeInternal.call(this);
    };
    /**
     * Detect features that intersect a pixel on the viewport, and execute a
     * callback with each intersecting feature. Layers included in the detection can
     * be configured through the `layerFilter` option in `opt_options`.
     * @param {import("./pixel.js").Pixel} pixel Pixel.
     * @param {function(import("./Feature.js").FeatureLike, import("./layer/Layer.js").default<import("./source/Source").default>, import("./geom/SimpleGeometry.js").default): T} callback Feature callback. The callback will be
     *     called with two arguments. The first argument is one
     *     {@link module:ol/Feature~Feature feature} or
     *     {@link module:ol/render/Feature~RenderFeature render feature} at the pixel, the second is
     *     the {@link module:ol/layer/Layer~Layer layer} of the feature and will be null for
     *     unmanaged layers. To stop detection, callback functions can return a
     *     truthy value.
     * @param {AtPixelOptions} [opt_options] Optional options.
     * @return {T|undefined} Callback result, i.e. the return value of last
     * callback execution, or the first truthy callback return value.
     * @template T
     * @api
     */
    PluggableMap.prototype.forEachFeatureAtPixel = function (pixel, callback, opt_options) {
        if (!this.frameState_ || !this.renderer_) {
            return;
        }
        var coordinate = this.getCoordinateFromPixelInternal(pixel);
        opt_options = opt_options !== undefined ? opt_options : {};
        var hitTolerance = opt_options.hitTolerance !== undefined ? opt_options.hitTolerance : 0;
        var layerFilter = opt_options.layerFilter !== undefined ? opt_options.layerFilter : functions/* TRUE */.uX;
        var checkWrapped = opt_options.checkWrapped !== false;
        return this.renderer_.forEachFeatureAtCoordinate(coordinate, this.frameState_, hitTolerance, checkWrapped, callback, null, layerFilter, null);
    };
    /**
     * Get all features that intersect a pixel on the viewport.
     * @param {import("./pixel.js").Pixel} pixel Pixel.
     * @param {AtPixelOptions} [opt_options] Optional options.
     * @return {Array<import("./Feature.js").FeatureLike>} The detected features or
     * an empty array if none were found.
     * @api
     */
    PluggableMap.prototype.getFeaturesAtPixel = function (pixel, opt_options) {
        var features = [];
        this.forEachFeatureAtPixel(pixel, function (feature) {
            features.push(feature);
        }, opt_options);
        return features;
    };
    /**
     * Get all layers from all layer groups.
     * @return {Array<import("./layer/Layer.js").default>} Layers.
     * @api
     */
    PluggableMap.prototype.getAllLayers = function () {
        var layers = [];
        function addLayersFrom(layerGroup) {
            layerGroup.forEach(function (layer) {
                if (layer instanceof Group) {
                    addLayersFrom(layer.getLayers());
                }
                else {
                    layers.push(layer);
                }
            });
        }
        addLayersFrom(this.getLayers());
        return layers;
    };
    /**
     * Please the `layer.getData()` method for {@link module:ol/layer/Tile~TileLayer#getData tile layers} or
     * {@link module:ol/layer/Image~ImageLayer#getData image layers} instead of using this method.
     *
     * Detect layers that have a color value at a pixel on the viewport, and
     * execute a callback with each matching layer. Layers included in the
     * detection can be configured through `opt_layerFilter`.
     *
     * Note: In maps with more than one layer, this method will typically return pixel data
     * representing the composed image of all layers visible at the given pixel – because layers
     * will generally share the same rendering context.  To force layers to render separately, and
     * to get pixel data representing only one layer at a time, you can assign each layer a unique
     * `className` in its constructor.
     *
     * @param {import("./pixel.js").Pixel} pixel Pixel.
     * @param {function(this: S, import("./layer/Layer.js").default, (Uint8ClampedArray|Uint8Array)): T} callback
     *     Layer callback. This callback will receive two arguments: first is the
     *     {@link module:ol/layer/Layer~Layer layer}, second argument is an array representing
     *     [R, G, B, A] pixel values (0 - 255) and will be `null` for layer types
     *     that do not currently support this argument. To stop detection, callback
     *     functions can return a truthy value.
     * @param {AtPixelOptions} [opt_options] Configuration options.
     * @return {T|undefined} Callback result, i.e. the return value of last
     * callback execution, or the first truthy callback return value.
     * @template S,T
     * @api
     * @deprecated
     */
    PluggableMap.prototype.forEachLayerAtPixel = function (pixel, callback, opt_options) {
        if (!this.frameState_ || !this.renderer_) {
            return;
        }
        var options = opt_options || {};
        var hitTolerance = options.hitTolerance !== undefined ? options.hitTolerance : 0;
        var layerFilter = options.layerFilter || functions/* TRUE */.uX;
        return this.renderer_.forEachLayerAtPixel(pixel, this.frameState_, hitTolerance, callback, layerFilter);
    };
    /**
     * Detect if features intersect a pixel on the viewport. Layers included in the
     * detection can be configured through `opt_layerFilter`.
     * @param {import("./pixel.js").Pixel} pixel Pixel.
     * @param {AtPixelOptions} [opt_options] Optional options.
     * @return {boolean} Is there a feature at the given pixel?
     * @api
     */
    PluggableMap.prototype.hasFeatureAtPixel = function (pixel, opt_options) {
        if (!this.frameState_ || !this.renderer_) {
            return false;
        }
        var coordinate = this.getCoordinateFromPixelInternal(pixel);
        opt_options = opt_options !== undefined ? opt_options : {};
        var layerFilter = opt_options.layerFilter !== undefined ? opt_options.layerFilter : functions/* TRUE */.uX;
        var hitTolerance = opt_options.hitTolerance !== undefined ? opt_options.hitTolerance : 0;
        var checkWrapped = opt_options.checkWrapped !== false;
        return this.renderer_.hasFeatureAtCoordinate(coordinate, this.frameState_, hitTolerance, checkWrapped, layerFilter, null);
    };
    /**
     * Returns the coordinate in user projection for a browser event.
     * @param {MouseEvent} event Event.
     * @return {import("./coordinate.js").Coordinate} Coordinate.
     * @api
     */
    PluggableMap.prototype.getEventCoordinate = function (event) {
        return this.getCoordinateFromPixel(this.getEventPixel(event));
    };
    /**
     * Returns the coordinate in view projection for a browser event.
     * @param {MouseEvent} event Event.
     * @return {import("./coordinate.js").Coordinate} Coordinate.
     */
    PluggableMap.prototype.getEventCoordinateInternal = function (event) {
        return this.getCoordinateFromPixelInternal(this.getEventPixel(event));
    };
    /**
     * Returns the map pixel position for a browser event relative to the viewport.
     * @param {UIEvent} event Event.
     * @return {import("./pixel.js").Pixel} Pixel.
     * @api
     */
    PluggableMap.prototype.getEventPixel = function (event) {
        var viewportPosition = this.viewport_.getBoundingClientRect();
        var eventPosition = 
        //FIXME Are we really calling this with a TouchEvent anywhere?
        'changedTouches' in event
            ? /** @type {TouchEvent} */ (event).changedTouches[0]
            : /** @type {MouseEvent} */ (event);
        return [
            eventPosition.clientX - viewportPosition.left,
            eventPosition.clientY - viewportPosition.top,
        ];
    };
    /**
     * Get the target in which this map is rendered.
     * Note that this returns what is entered as an option or in setTarget:
     * if that was an element, it returns an element; if a string, it returns that.
     * @return {HTMLElement|string|undefined} The Element or id of the Element that the
     *     map is rendered in.
     * @observable
     * @api
     */
    PluggableMap.prototype.getTarget = function () {
        return /** @type {HTMLElement|string|undefined} */ (this.get(MapProperty.TARGET));
    };
    /**
     * Get the DOM element into which this map is rendered. In contrast to
     * `getTarget` this method always return an `Element`, or `null` if the
     * map has no target.
     * @return {HTMLElement} The element that the map is rendered in.
     * @api
     */
    PluggableMap.prototype.getTargetElement = function () {
        var target = this.getTarget();
        if (target !== undefined) {
            return typeof target === 'string'
                ? document.getElementById(target)
                : target;
        }
        else {
            return null;
        }
    };
    /**
     * Get the coordinate for a given pixel.  This returns a coordinate in the
     * user projection.
     * @param {import("./pixel.js").Pixel} pixel Pixel position in the map viewport.
     * @return {import("./coordinate.js").Coordinate} The coordinate for the pixel position.
     * @api
     */
    PluggableMap.prototype.getCoordinateFromPixel = function (pixel) {
        return (0,proj/* toUserCoordinate */.lO)(this.getCoordinateFromPixelInternal(pixel), this.getView().getProjection());
    };
    /**
     * Get the coordinate for a given pixel.  This returns a coordinate in the
     * map view projection.
     * @param {import("./pixel.js").Pixel} pixel Pixel position in the map viewport.
     * @return {import("./coordinate.js").Coordinate} The coordinate for the pixel position.
     */
    PluggableMap.prototype.getCoordinateFromPixelInternal = function (pixel) {
        var frameState = this.frameState_;
        if (!frameState) {
            return null;
        }
        else {
            return (0,transform/* apply */.nn)(frameState.pixelToCoordinateTransform, pixel.slice());
        }
    };
    /**
     * Get the map controls. Modifying this collection changes the controls
     * associated with the map.
     * @return {Collection<import("./control/Control.js").default>} Controls.
     * @api
     */
    PluggableMap.prototype.getControls = function () {
        return this.controls;
    };
    /**
     * Get the map overlays. Modifying this collection changes the overlays
     * associated with the map.
     * @return {Collection<import("./Overlay.js").default>} Overlays.
     * @api
     */
    PluggableMap.prototype.getOverlays = function () {
        return this.overlays_;
    };
    /**
     * Get an overlay by its identifier (the value returned by overlay.getId()).
     * Note that the index treats string and numeric identifiers as the same. So
     * `map.getOverlayById(2)` will return an overlay with id `'2'` or `2`.
     * @param {string|number} id Overlay identifier.
     * @return {import("./Overlay.js").default} Overlay.
     * @api
     */
    PluggableMap.prototype.getOverlayById = function (id) {
        var overlay = this.overlayIdIndex_[id.toString()];
        return overlay !== undefined ? overlay : null;
    };
    /**
     * Get the map interactions. Modifying this collection changes the interactions
     * associated with the map.
     *
     * Interactions are used for e.g. pan, zoom and rotate.
     * @return {Collection<import("./interaction/Interaction.js").default>} Interactions.
     * @api
     */
    PluggableMap.prototype.getInteractions = function () {
        return this.interactions;
    };
    /**
     * Get the layergroup associated with this map.
     * @return {LayerGroup} A layer group containing the layers in this map.
     * @observable
     * @api
     */
    PluggableMap.prototype.getLayerGroup = function () {
        return /** @type {LayerGroup} */ (this.get(MapProperty.LAYERGROUP));
    };
    /**
     * Clear any existing layers and add layers to the map.
     * @param {Array<import("./layer/Base.js").default>|Collection<import("./layer/Base.js").default>} layers The layers to be added to the map.
     * @api
     */
    PluggableMap.prototype.setLayers = function (layers) {
        var group = this.getLayerGroup();
        if (layers instanceof ol_Collection) {
            group.setLayers(layers);
            return;
        }
        var collection = group.getLayers();
        collection.clear();
        collection.extend(layers);
    };
    /**
     * Get the collection of layers associated with this map.
     * @return {!Collection<import("./layer/Base.js").default>} Layers.
     * @api
     */
    PluggableMap.prototype.getLayers = function () {
        var layers = this.getLayerGroup().getLayers();
        return layers;
    };
    /**
     * @return {boolean} Layers have sources that are still loading.
     */
    PluggableMap.prototype.getLoadingOrNotReady = function () {
        var layerStatesArray = this.getLayerGroup().getLayerStatesArray();
        for (var i = 0, ii = layerStatesArray.length; i < ii; ++i) {
            var state = layerStatesArray[i];
            if (!state.visible) {
                continue;
            }
            var renderer = state.layer.getRenderer();
            if (renderer && !renderer.ready) {
                return true;
            }
            var source = /** @type {import("./layer/Layer.js").default} */ (state.layer).getSource();
            if (source && source.loading) {
                return true;
            }
        }
        return false;
    };
    /**
     * Get the pixel for a coordinate.  This takes a coordinate in the user
     * projection and returns the corresponding pixel.
     * @param {import("./coordinate.js").Coordinate} coordinate A map coordinate.
     * @return {import("./pixel.js").Pixel} A pixel position in the map viewport.
     * @api
     */
    PluggableMap.prototype.getPixelFromCoordinate = function (coordinate) {
        var viewCoordinate = (0,proj/* fromUserCoordinate */.Vs)(coordinate, this.getView().getProjection());
        return this.getPixelFromCoordinateInternal(viewCoordinate);
    };
    /**
     * Get the pixel for a coordinate.  This takes a coordinate in the map view
     * projection and returns the corresponding pixel.
     * @param {import("./coordinate.js").Coordinate} coordinate A map coordinate.
     * @return {import("./pixel.js").Pixel} A pixel position in the map viewport.
     */
    PluggableMap.prototype.getPixelFromCoordinateInternal = function (coordinate) {
        var frameState = this.frameState_;
        if (!frameState) {
            return null;
        }
        else {
            return (0,transform/* apply */.nn)(frameState.coordinateToPixelTransform, coordinate.slice(0, 2));
        }
    };
    /**
     * Get the map renderer.
     * @return {import("./renderer/Map.js").default|null} Renderer
     */
    PluggableMap.prototype.getRenderer = function () {
        return this.renderer_;
    };
    /**
     * Get the size of this map.
     * @return {import("./size.js").Size|undefined} The size in pixels of the map in the DOM.
     * @observable
     * @api
     */
    PluggableMap.prototype.getSize = function () {
        return /** @type {import("./size.js").Size|undefined} */ (this.get(MapProperty.SIZE));
    };
    /**
     * Get the view associated with this map. A view manages properties such as
     * center and resolution.
     * @return {View} The view that controls this map.
     * @observable
     * @api
     */
    PluggableMap.prototype.getView = function () {
        return /** @type {View} */ (this.get(MapProperty.VIEW));
    };
    /**
     * Get the element that serves as the map viewport.
     * @return {HTMLElement} Viewport.
     * @api
     */
    PluggableMap.prototype.getViewport = function () {
        return this.viewport_;
    };
    /**
     * Get the element that serves as the container for overlays.  Elements added to
     * this container will let mousedown and touchstart events through to the map,
     * so clicks and gestures on an overlay will trigger {@link module:ol/MapBrowserEvent~MapBrowserEvent}
     * events.
     * @return {!HTMLElement} The map's overlay container.
     */
    PluggableMap.prototype.getOverlayContainer = function () {
        return this.overlayContainer_;
    };
    /**
     * Get the element that serves as a container for overlays that don't allow
     * event propagation. Elements added to this container won't let mousedown and
     * touchstart events through to the map, so clicks and gestures on an overlay
     * don't trigger any {@link module:ol/MapBrowserEvent~MapBrowserEvent}.
     * @return {!HTMLElement} The map's overlay container that stops events.
     */
    PluggableMap.prototype.getOverlayContainerStopEvent = function () {
        return this.overlayContainerStopEvent_;
    };
    /**
     * @return {!Document} The document where the map is displayed.
     */
    PluggableMap.prototype.getOwnerDocument = function () {
        var targetElement = this.getTargetElement();
        return targetElement ? targetElement.ownerDocument : document;
    };
    /**
     * @param {import("./Tile.js").default} tile Tile.
     * @param {string} tileSourceKey Tile source key.
     * @param {import("./coordinate.js").Coordinate} tileCenter Tile center.
     * @param {number} tileResolution Tile resolution.
     * @return {number} Tile priority.
     */
    PluggableMap.prototype.getTilePriority = function (tile, tileSourceKey, tileCenter, tileResolution) {
        return getTilePriority(this.frameState_, tile, tileSourceKey, tileCenter, tileResolution);
    };
    /**
     * @param {UIEvent} browserEvent Browser event.
     * @param {string} [opt_type] Type.
     */
    PluggableMap.prototype.handleBrowserEvent = function (browserEvent, opt_type) {
        var type = opt_type || browserEvent.type;
        var mapBrowserEvent = new ol_MapBrowserEvent(type, this, browserEvent);
        this.handleMapBrowserEvent(mapBrowserEvent);
    };
    /**
     * @param {MapBrowserEvent} mapBrowserEvent The event to handle.
     */
    PluggableMap.prototype.handleMapBrowserEvent = function (mapBrowserEvent) {
        if (!this.frameState_) {
            // With no view defined, we cannot translate pixels into geographical
            // coordinates so interactions cannot be used.
            return;
        }
        var originalEvent = /** @type {PointerEvent} */ (mapBrowserEvent.originalEvent);
        var eventType = originalEvent.type;
        if (eventType === pointer_EventType.POINTERDOWN ||
            eventType === events_EventType/* default.WHEEL */.Z.WHEEL ||
            eventType === events_EventType/* default.KEYDOWN */.Z.KEYDOWN) {
            var doc = this.getOwnerDocument();
            var rootNode = this.viewport_.getRootNode
                ? this.viewport_.getRootNode()
                : doc;
            var target = /** @type {Node} */ (originalEvent.target);
            if (
            // Abort if the target is a child of the container for elements whose events are not meant
            // to be handled by map interactions.
            this.overlayContainerStopEvent_.contains(target) ||
                // Abort if the event target is a child of the container that is no longer in the page.
                // It's possible for the target to no longer be in the page if it has been removed in an
                // event listener, this might happen in a Control that recreates it's content based on
                // user interaction either manually or via a render in something like https://reactjs.org/
                !(rootNode === doc ? doc.documentElement : rootNode).contains(target)) {
                return;
            }
        }
        mapBrowserEvent.frameState = this.frameState_;
        if (this.dispatchEvent(mapBrowserEvent) !== false) {
            var interactionsArray = this.getInteractions().getArray().slice();
            for (var i = interactionsArray.length - 1; i >= 0; i--) {
                var interaction = interactionsArray[i];
                if (interaction.getMap() !== this ||
                    !interaction.getActive() ||
                    !this.getTargetElement()) {
                    continue;
                }
                var cont = interaction.handleEvent(mapBrowserEvent);
                if (!cont || mapBrowserEvent.propagationStopped) {
                    break;
                }
            }
        }
    };
    /**
     * @protected
     */
    PluggableMap.prototype.handlePostRender = function () {
        var frameState = this.frameState_;
        // Manage the tile queue
        // Image loads are expensive and a limited resource, so try to use them
        // efficiently:
        // * When the view is static we allow a large number of parallel tile loads
        //   to complete the frame as quickly as possible.
        // * When animating or interacting, image loads can cause janks, so we reduce
        //   the maximum number of loads per frame and limit the number of parallel
        //   tile loads to remain reactive to view changes and to reduce the chance of
        //   loading tiles that will quickly disappear from view.
        var tileQueue = this.tileQueue_;
        if (!tileQueue.isEmpty()) {
            var maxTotalLoading = this.maxTilesLoading_;
            var maxNewLoads = maxTotalLoading;
            if (frameState) {
                var hints = frameState.viewHints;
                if (hints[ViewHint/* default.ANIMATING */.Z.ANIMATING] || hints[ViewHint/* default.INTERACTING */.Z.INTERACTING]) {
                    var lowOnFrameBudget = Date.now() - frameState.time > 8;
                    maxTotalLoading = lowOnFrameBudget ? 0 : 8;
                    maxNewLoads = lowOnFrameBudget ? 0 : 2;
                }
            }
            if (tileQueue.getTilesLoading() < maxTotalLoading) {
                tileQueue.reprioritize(); // FIXME only call if view has changed
                tileQueue.loadMoreTiles(maxTotalLoading, maxNewLoads);
            }
        }
        if (frameState && this.renderer_ && !frameState.animate) {
            if (this.renderComplete_ === true) {
                if (this.hasListener(EventType/* default.RENDERCOMPLETE */.Z.RENDERCOMPLETE)) {
                    this.renderer_.dispatchRenderEvent(EventType/* default.RENDERCOMPLETE */.Z.RENDERCOMPLETE, frameState);
                }
                if (this.loaded_ === false) {
                    this.loaded_ = true;
                    this.dispatchEvent(new ol_MapEvent(MapEventType.LOADEND, this, frameState));
                }
            }
            else if (this.loaded_ === true) {
                this.loaded_ = false;
                this.dispatchEvent(new ol_MapEvent(MapEventType.LOADSTART, this, frameState));
            }
        }
        var postRenderFunctions = this.postRenderFunctions_;
        for (var i = 0, ii = postRenderFunctions.length; i < ii; ++i) {
            postRenderFunctions[i](this, frameState);
        }
        postRenderFunctions.length = 0;
    };
    /**
     * @private
     */
    PluggableMap.prototype.handleSizeChanged_ = function () {
        if (this.getView() && !this.getView().getAnimating()) {
            this.getView().resolveConstraints(0);
        }
        this.render();
    };
    /**
     * @private
     */
    PluggableMap.prototype.handleTargetChanged_ = function () {
        if (this.mapBrowserEventHandler_) {
            for (var i = 0, ii = this.targetChangeHandlerKeys_.length; i < ii; ++i) {
                (0,events/* unlistenByKey */.bN)(this.targetChangeHandlerKeys_[i]);
            }
            this.targetChangeHandlerKeys_ = null;
            this.viewport_.removeEventListener(events_EventType/* default.CONTEXTMENU */.Z.CONTEXTMENU, this.boundHandleBrowserEvent_);
            this.viewport_.removeEventListener(events_EventType/* default.WHEEL */.Z.WHEEL, this.boundHandleBrowserEvent_);
            this.mapBrowserEventHandler_.dispose();
            this.mapBrowserEventHandler_ = null;
            (0,dom/* removeNode */.ZF)(this.viewport_);
        }
        // target may be undefined, null, a string or an Element.
        // If it's a string we convert it to an Element before proceeding.
        // If it's not now an Element we remove the viewport from the DOM.
        // If it's an Element we append the viewport element to it.
        var targetElement = this.getTargetElement();
        if (!targetElement) {
            if (this.renderer_) {
                clearTimeout(this.postRenderTimeoutHandle_);
                this.postRenderTimeoutHandle_ = undefined;
                this.postRenderFunctions_.length = 0;
                this.renderer_.dispose();
                this.renderer_ = null;
            }
            if (this.animationDelayKey_) {
                cancelAnimationFrame(this.animationDelayKey_);
                this.animationDelayKey_ = undefined;
            }
        }
        else {
            targetElement.appendChild(this.viewport_);
            if (!this.renderer_) {
                this.renderer_ = this.createRenderer();
            }
            this.mapBrowserEventHandler_ = new ol_MapBrowserEventHandler(this, this.moveTolerance_);
            for (var key in ol_MapBrowserEventType) {
                this.mapBrowserEventHandler_.addEventListener(ol_MapBrowserEventType[key], this.handleMapBrowserEvent.bind(this));
            }
            this.viewport_.addEventListener(events_EventType/* default.CONTEXTMENU */.Z.CONTEXTMENU, this.boundHandleBrowserEvent_, false);
            this.viewport_.addEventListener(events_EventType/* default.WHEEL */.Z.WHEEL, this.boundHandleBrowserEvent_, has/* PASSIVE_EVENT_LISTENERS */.bM ? { passive: false } : false);
            var defaultView = this.getOwnerDocument().defaultView;
            var keyboardEventTarget = !this.keyboardEventTarget_
                ? targetElement
                : this.keyboardEventTarget_;
            this.targetChangeHandlerKeys_ = [
                (0,events/* listen */.oL)(keyboardEventTarget, events_EventType/* default.KEYDOWN */.Z.KEYDOWN, this.handleBrowserEvent, this),
                (0,events/* listen */.oL)(keyboardEventTarget, events_EventType/* default.KEYPRESS */.Z.KEYPRESS, this.handleBrowserEvent, this),
                (0,events/* listen */.oL)(defaultView, events_EventType/* default.RESIZE */.Z.RESIZE, this.updateSize, this),
            ];
        }
        this.updateSize();
        // updateSize calls setSize, so no need to call this.render
        // ourselves here.
    };
    /**
     * @private
     */
    PluggableMap.prototype.handleTileChange_ = function () {
        this.render();
    };
    /**
     * @private
     */
    PluggableMap.prototype.handleViewPropertyChanged_ = function () {
        this.render();
    };
    /**
     * @private
     */
    PluggableMap.prototype.handleViewChanged_ = function () {
        if (this.viewPropertyListenerKey_) {
            (0,events/* unlistenByKey */.bN)(this.viewPropertyListenerKey_);
            this.viewPropertyListenerKey_ = null;
        }
        if (this.viewChangeListenerKey_) {
            (0,events/* unlistenByKey */.bN)(this.viewChangeListenerKey_);
            this.viewChangeListenerKey_ = null;
        }
        var view = this.getView();
        if (view) {
            this.updateViewportSize_();
            this.viewPropertyListenerKey_ = (0,events/* listen */.oL)(view, ObjectEventType/* default.PROPERTYCHANGE */.Z.PROPERTYCHANGE, this.handleViewPropertyChanged_, this);
            this.viewChangeListenerKey_ = (0,events/* listen */.oL)(view, events_EventType/* default.CHANGE */.Z.CHANGE, this.handleViewPropertyChanged_, this);
            view.resolveConstraints(0);
        }
        this.render();
    };
    /**
     * @private
     */
    PluggableMap.prototype.handleLayerGroupChanged_ = function () {
        if (this.layerGroupPropertyListenerKeys_) {
            this.layerGroupPropertyListenerKeys_.forEach(events/* unlistenByKey */.bN);
            this.layerGroupPropertyListenerKeys_ = null;
        }
        var layerGroup = this.getLayerGroup();
        if (layerGroup) {
            this.handleLayerAdd_(new GroupEvent('addlayer', layerGroup));
            this.layerGroupPropertyListenerKeys_ = [
                (0,events/* listen */.oL)(layerGroup, ObjectEventType/* default.PROPERTYCHANGE */.Z.PROPERTYCHANGE, this.render, this),
                (0,events/* listen */.oL)(layerGroup, events_EventType/* default.CHANGE */.Z.CHANGE, this.render, this),
                (0,events/* listen */.oL)(layerGroup, 'addlayer', this.handleLayerAdd_, this),
                (0,events/* listen */.oL)(layerGroup, 'removelayer', this.handleLayerRemove_, this),
            ];
        }
        this.render();
    };
    /**
     * @return {boolean} Is rendered.
     */
    PluggableMap.prototype.isRendered = function () {
        return !!this.frameState_;
    };
    /**
     * Requests an immediate render in a synchronous manner.
     * @api
     */
    PluggableMap.prototype.renderSync = function () {
        if (this.animationDelayKey_) {
            cancelAnimationFrame(this.animationDelayKey_);
        }
        this.animationDelay_();
    };
    /**
     * Redraws all text after new fonts have loaded
     */
    PluggableMap.prototype.redrawText = function () {
        var layerStates = this.getLayerGroup().getLayerStatesArray();
        for (var i = 0, ii = layerStates.length; i < ii; ++i) {
            var layer = layerStates[i].layer;
            if (layer.hasRenderer()) {
                layer.getRenderer().handleFontsChanged();
            }
        }
    };
    /**
     * Request a map rendering (at the next animation frame).
     * @api
     */
    PluggableMap.prototype.render = function () {
        if (this.renderer_ && this.animationDelayKey_ === undefined) {
            this.animationDelayKey_ = requestAnimationFrame(this.animationDelay_);
        }
    };
    /**
     * Remove the given control from the map.
     * @param {import("./control/Control.js").default} control Control.
     * @return {import("./control/Control.js").default|undefined} The removed control (or undefined
     *     if the control was not found).
     * @api
     */
    PluggableMap.prototype.removeControl = function (control) {
        return this.getControls().remove(control);
    };
    /**
     * Remove the given interaction from the map.
     * @param {import("./interaction/Interaction.js").default} interaction Interaction to remove.
     * @return {import("./interaction/Interaction.js").default|undefined} The removed interaction (or
     *     undefined if the interaction was not found).
     * @api
     */
    PluggableMap.prototype.removeInteraction = function (interaction) {
        return this.getInteractions().remove(interaction);
    };
    /**
     * Removes the given layer from the map.
     * @param {import("./layer/Base.js").default} layer Layer.
     * @return {import("./layer/Base.js").default|undefined} The removed layer (or undefined if the
     *     layer was not found).
     * @api
     */
    PluggableMap.prototype.removeLayer = function (layer) {
        var layers = this.getLayerGroup().getLayers();
        return layers.remove(layer);
    };
    /**
     * @param {import("./layer/Group.js").GroupEvent} event The layer remove event.
     * @private
     */
    PluggableMap.prototype.handleLayerRemove_ = function (event) {
        removeLayerMapProperty(event.layer);
    };
    /**
     * Remove the given overlay from the map.
     * @param {import("./Overlay.js").default} overlay Overlay.
     * @return {import("./Overlay.js").default|undefined} The removed overlay (or undefined
     *     if the overlay was not found).
     * @api
     */
    PluggableMap.prototype.removeOverlay = function (overlay) {
        return this.getOverlays().remove(overlay);
    };
    /**
     * @param {number} time Time.
     * @private
     */
    PluggableMap.prototype.renderFrame_ = function (time) {
        var _this = this;
        var size = this.getSize();
        var view = this.getView();
        var previousFrameState = this.frameState_;
        /** @type {?FrameState} */
        var frameState = null;
        if (size !== undefined && (0,ol_size/* hasArea */.py)(size) && view && view.isDef()) {
            var viewHints = view.getHints(this.frameState_ ? this.frameState_.viewHints : undefined);
            var viewState = view.getState();
            frameState = {
                animate: false,
                coordinateToPixelTransform: this.coordinateToPixelTransform_,
                declutterTree: null,
                extent: (0,extent/* getForViewAndSize */.p8)(viewState.center, viewState.resolution, viewState.rotation, size),
                index: this.frameIndex_++,
                layerIndex: 0,
                layerStatesArray: this.getLayerGroup().getLayerStatesArray(),
                pixelRatio: this.pixelRatio_,
                pixelToCoordinateTransform: this.pixelToCoordinateTransform_,
                postRenderFunctions: [],
                size: size,
                tileQueue: this.tileQueue_,
                time: time,
                usedTiles: {},
                viewState: viewState,
                viewHints: viewHints,
                wantedTiles: {},
                mapId: (0,util/* getUid */.sq)(this),
                renderTargets: {},
            };
            if (viewState.nextCenter && viewState.nextResolution) {
                var rotation = isNaN(viewState.nextRotation)
                    ? viewState.rotation
                    : viewState.nextRotation;
                frameState.nextExtent = (0,extent/* getForViewAndSize */.p8)(viewState.nextCenter, viewState.nextResolution, rotation, size);
            }
        }
        this.frameState_ = frameState;
        /** @type {import("./renderer/Map.js").default} */ (this.renderer_).renderFrame(frameState);
        if (frameState) {
            if (frameState.animate) {
                this.render();
            }
            Array.prototype.push.apply(this.postRenderFunctions_, frameState.postRenderFunctions);
            if (previousFrameState) {
                var moveStart = !this.previousExtent_ ||
                    (!(0,extent/* isEmpty */.xb)(this.previousExtent_) &&
                        !(0,extent/* equals */.fS)(frameState.extent, this.previousExtent_));
                if (moveStart) {
                    this.dispatchEvent(new ol_MapEvent(MapEventType.MOVESTART, this, previousFrameState));
                    this.previousExtent_ = (0,extent/* createOrUpdateEmpty */.YN)(this.previousExtent_);
                }
            }
            var idle = this.previousExtent_ &&
                !frameState.viewHints[ViewHint/* default.ANIMATING */.Z.ANIMATING] &&
                !frameState.viewHints[ViewHint/* default.INTERACTING */.Z.INTERACTING] &&
                !(0,extent/* equals */.fS)(frameState.extent, this.previousExtent_);
            if (idle) {
                this.dispatchEvent(new ol_MapEvent(MapEventType.MOVEEND, this, frameState));
                (0,extent/* clone */.d9)(frameState.extent, this.previousExtent_);
            }
        }
        this.dispatchEvent(new ol_MapEvent(MapEventType.POSTRENDER, this, frameState));
        this.renderComplete_ =
            this.hasListener(MapEventType.LOADSTART) ||
                this.hasListener(MapEventType.LOADEND) ||
                this.hasListener(EventType/* default.RENDERCOMPLETE */.Z.RENDERCOMPLETE)
                ? !this.tileQueue_.getTilesLoading() &&
                    !this.tileQueue_.getCount() &&
                    !this.getLoadingOrNotReady()
                : undefined;
        if (!this.postRenderTimeoutHandle_) {
            this.postRenderTimeoutHandle_ = setTimeout(function () {
                _this.postRenderTimeoutHandle_ = undefined;
                _this.handlePostRender();
            }, 0);
        }
    };
    /**
     * Sets the layergroup of this map.
     * @param {LayerGroup} layerGroup A layer group containing the layers in this map.
     * @observable
     * @api
     */
    PluggableMap.prototype.setLayerGroup = function (layerGroup) {
        var oldLayerGroup = this.getLayerGroup();
        if (oldLayerGroup) {
            this.handleLayerRemove_(new GroupEvent('removelayer', oldLayerGroup));
        }
        this.set(MapProperty.LAYERGROUP, layerGroup);
    };
    /**
     * Set the size of this map.
     * @param {import("./size.js").Size|undefined} size The size in pixels of the map in the DOM.
     * @observable
     * @api
     */
    PluggableMap.prototype.setSize = function (size) {
        this.set(MapProperty.SIZE, size);
    };
    /**
     * Set the target element to render this map into.
     * @param {HTMLElement|string} [target] The Element or id of the Element
     *     that the map is rendered in.
     * @observable
     * @api
     */
    PluggableMap.prototype.setTarget = function (target) {
        this.set(MapProperty.TARGET, target);
    };
    /**
     * Set the view for this map.
     * @param {View|Promise<import("./View.js").ViewOptions>} view The view that controls this map.
     * It is also possible to pass a promise that resolves to options for constructing a view.  This
     * alternative allows view properties to be resolved by sources or other components that load
     * view-related metadata.
     * @observable
     * @api
     */
    PluggableMap.prototype.setView = function (view) {
        if (!view || view instanceof View/* default */.ZP) {
            this.set(MapProperty.VIEW, view);
            return;
        }
        this.set(MapProperty.VIEW, new View/* default */.ZP());
        var map = this;
        view.then(function (viewOptions) {
            map.setView(new View/* default */.ZP(viewOptions));
        });
    };
    /**
     * Force a recalculation of the map viewport size.  This should be called when
     * third-party code changes the size of the map viewport.
     * @api
     */
    PluggableMap.prototype.updateSize = function () {
        var targetElement = this.getTargetElement();
        var size = undefined;
        if (targetElement) {
            var computedStyle = getComputedStyle(targetElement);
            var width = targetElement.offsetWidth -
                parseFloat(computedStyle['borderLeftWidth']) -
                parseFloat(computedStyle['paddingLeft']) -
                parseFloat(computedStyle['paddingRight']) -
                parseFloat(computedStyle['borderRightWidth']);
            var height = targetElement.offsetHeight -
                parseFloat(computedStyle['borderTopWidth']) -
                parseFloat(computedStyle['paddingTop']) -
                parseFloat(computedStyle['paddingBottom']) -
                parseFloat(computedStyle['borderBottomWidth']);
            if (!isNaN(width) && !isNaN(height)) {
                size = [width, height];
                if (!(0,ol_size/* hasArea */.py)(size) &&
                    !!(targetElement.offsetWidth ||
                        targetElement.offsetHeight ||
                        targetElement.getClientRects().length)) {
                    // eslint-disable-next-line
                    console.warn("No map visible because the map container's width or height are 0.");
                }
            }
        }
        this.setSize(size);
        this.updateViewportSize_();
    };
    /**
     * Recomputes the viewport size and save it on the view object (if any)
     * @private
     */
    PluggableMap.prototype.updateViewportSize_ = function () {
        var view = this.getView();
        if (view) {
            var size = undefined;
            var computedStyle = getComputedStyle(this.viewport_);
            if (computedStyle.width && computedStyle.height) {
                size = [
                    parseInt(computedStyle.width, 10),
                    parseInt(computedStyle.height, 10),
                ];
            }
            view.setViewportSize(size);
        }
    };
    return PluggableMap;
}(ol_Object/* default */.Z));
/**
 * @param {MapOptions} options Map options.
 * @return {MapOptionsInternal} Internal map options.
 */
function createOptionsInternal(options) {
    /**
     * @type {HTMLElement|Document}
     */
    var keyboardEventTarget = null;
    if (options.keyboardEventTarget !== undefined) {
        keyboardEventTarget =
            typeof options.keyboardEventTarget === 'string'
                ? document.getElementById(options.keyboardEventTarget)
                : options.keyboardEventTarget;
    }
    /**
     * @type {Object<string, *>}
     */
    var values = {};
    var layerGroup = options.layers &&
        typeof ( /** @type {?} */(options.layers).getLayers) === 'function'
        ? /** @type {LayerGroup} */ (options.layers)
        : new Group({ layers: /** @type {Collection} */ (options.layers) });
    values[MapProperty.LAYERGROUP] = layerGroup;
    values[MapProperty.TARGET] = options.target;
    values[MapProperty.VIEW] =
        options.view instanceof View/* default */.ZP ? options.view : new View/* default */.ZP();
    var controls;
    if (options.controls !== undefined) {
        if (Array.isArray(options.controls)) {
            controls = new ol_Collection(options.controls.slice());
        }
        else {
            (0,asserts/* assert */.h)(typeof ( /** @type {?} */(options.controls).getArray) === 'function', 47); // Expected `controls` to be an array or an `import("./Collection.js").Collection`
            controls = /** @type {Collection} */ (options.controls);
        }
    }
    var interactions;
    if (options.interactions !== undefined) {
        if (Array.isArray(options.interactions)) {
            interactions = new ol_Collection(options.interactions.slice());
        }
        else {
            (0,asserts/* assert */.h)(typeof ( /** @type {?} */(options.interactions).getArray) ===
                'function', 48); // Expected `interactions` to be an array or an `import("./Collection.js").Collection`
            interactions = /** @type {Collection} */ (options.interactions);
        }
    }
    var overlays;
    if (options.overlays !== undefined) {
        if (Array.isArray(options.overlays)) {
            overlays = new ol_Collection(options.overlays.slice());
        }
        else {
            (0,asserts/* assert */.h)(typeof ( /** @type {?} */(options.overlays).getArray) === 'function', 49); // Expected `overlays` to be an array or an `import("./Collection.js").Collection`
            overlays = options.overlays;
        }
    }
    else {
        overlays = new ol_Collection();
    }
    return {
        controls: controls,
        interactions: interactions,
        keyboardEventTarget: keyboardEventTarget,
        overlays: overlays,
        values: values,
    };
}
/* harmony default export */ const ol_PluggableMap = (PluggableMap);
//# sourceMappingURL=PluggableMap.js.map
;// CONCATENATED MODULE: ./node_modules/ol/control/Control.js
var Control_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @module ol/control/Control
 */





/**
 * @typedef {Object} Options
 * @property {HTMLElement} [element] The element is the control's
 * container element. This only needs to be specified if you're developing
 * a custom control.
 * @property {function(import("../MapEvent.js").default):void} [render] Function called when
 * the control should be re-rendered. This is called in a `requestAnimationFrame`
 * callback.
 * @property {HTMLElement|string} [target] Specify a target if you want
 * the control to be rendered outside of the map's viewport.
 */
/**
 * @classdesc
 * A control is a visible widget with a DOM element in a fixed position on the
 * screen. They can involve user input (buttons), or be informational only;
 * the position is determined using CSS. By default these are placed in the
 * container with CSS class name `ol-overlaycontainer-stopevent`, but can use
 * any outside DOM element.
 *
 * This is the base class for controls. You can use it for simple custom
 * controls by creating the element with listeners, creating an instance:
 * ```js
 * var myControl = new Control({element: myElement});
 * ```
 * and then adding this to the map.
 *
 * The main advantage of having this as a control rather than a simple separate
 * DOM element is that preventing propagation is handled for you. Controls
 * will also be objects in a {@link module:ol/Collection~Collection}, so you can use their methods.
 *
 * You can also extend this base for your own control class. See
 * examples/custom-controls for an example of how to do this.
 *
 * @api
 */
var Control = /** @class */ (function (_super) {
    Control_extends(Control, _super);
    /**
     * @param {Options} options Control options.
     */
    function Control(options) {
        var _this = _super.call(this) || this;
        var element = options.element;
        if (element && !options.target && !element.style.pointerEvents) {
            element.style.pointerEvents = 'auto';
        }
        /**
         * @protected
         * @type {HTMLElement}
         */
        _this.element = element ? element : null;
        /**
         * @private
         * @type {HTMLElement}
         */
        _this.target_ = null;
        /**
         * @private
         * @type {import("../PluggableMap.js").default|null}
         */
        _this.map_ = null;
        /**
         * @protected
         * @type {!Array<import("../events.js").EventsKey>}
         */
        _this.listenerKeys = [];
        if (options.render) {
            _this.render = options.render;
        }
        if (options.target) {
            _this.setTarget(options.target);
        }
        return _this;
    }
    /**
     * Clean up.
     */
    Control.prototype.disposeInternal = function () {
        (0,dom/* removeNode */.ZF)(this.element);
        _super.prototype.disposeInternal.call(this);
    };
    /**
     * Get the map associated with this control.
     * @return {import("../PluggableMap.js").default|null} Map.
     * @api
     */
    Control.prototype.getMap = function () {
        return this.map_;
    };
    /**
     * Remove the control from its current map and attach it to the new map.
     * Pass `null` to just remove the control from the current map.
     * Subclasses may set up event handlers to get notified about changes to
     * the map here.
     * @param {import("../PluggableMap.js").default|null} map Map.
     * @api
     */
    Control.prototype.setMap = function (map) {
        if (this.map_) {
            (0,dom/* removeNode */.ZF)(this.element);
        }
        for (var i = 0, ii = this.listenerKeys.length; i < ii; ++i) {
            (0,events/* unlistenByKey */.bN)(this.listenerKeys[i]);
        }
        this.listenerKeys.length = 0;
        this.map_ = map;
        if (map) {
            var target = this.target_
                ? this.target_
                : map.getOverlayContainerStopEvent();
            target.appendChild(this.element);
            if (this.render !== functions/* VOID */.Zn) {
                this.listenerKeys.push((0,events/* listen */.oL)(map, MapEventType.POSTRENDER, this.render, this));
            }
            map.render();
        }
    };
    /**
     * Renders the control.
     * @param {import("../MapEvent.js").default} mapEvent Map event.
     * @api
     */
    Control.prototype.render = function (mapEvent) { };
    /**
     * This function is used to set a target element for the control. It has no
     * effect if it is called after the control has been added to the map (i.e.
     * after `setMap` is called on the control). If no `target` is set in the
     * options passed to the control constructor and if `setTarget` is not called
     * then the control is added to the map's overlay container.
     * @param {HTMLElement|string} target Target.
     * @api
     */
    Control.prototype.setTarget = function (target) {
        this.target_ =
            typeof target === 'string' ? document.getElementById(target) : target;
    };
    return Control;
}(ol_Object/* default */.Z));
/* harmony default export */ const control_Control = (Control);
//# sourceMappingURL=Control.js.map
// EXTERNAL MODULE: ./node_modules/ol/array.js
var array = __webpack_require__(5537);
;// CONCATENATED MODULE: ./node_modules/ol/control/Attribution.js
var Attribution_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @module ol/control/Attribution
 */






/**
 * @typedef {Object} Options
 * @property {string} [className='ol-attribution'] CSS class name.
 * @property {HTMLElement|string} [target] Specify a target if you
 * want the control to be rendered outside of the map's
 * viewport.
 * @property {boolean} [collapsible] Specify if attributions can
 * be collapsed. If not specified, sources control this behavior with their
 * `attributionsCollapsible` setting.
 * @property {boolean} [collapsed=true] Specify if attributions should
 * be collapsed at startup.
 * @property {string} [tipLabel='Attributions'] Text label to use for the button tip.
 * @property {string|HTMLElement} [label='i'] Text label to use for the
 * collapsed attributions button.
 * Instead of text, also an element (e.g. a `span` element) can be used.
 * @property {string} [expandClassName=className + '-expand'] CSS class name for the
 * collapsed attributions button.
 * @property {string|HTMLElement} [collapseLabel='›'] Text label to use
 * for the expanded attributions button.
 * Instead of text, also an element (e.g. a `span` element) can be used.
 * @property {string} [collapseClassName=className + '-collapse'] CSS class name for the
 * expanded attributions button.
 * @property {function(import("../MapEvent.js").default):void} [render] Function called when
 * the control should be re-rendered. This is called in a `requestAnimationFrame`
 * callback.
 */
/**
 * @classdesc
 * Control to show all the attributions associated with the layer sources
 * in the map. This control is one of the default controls included in maps.
 * By default it will show in the bottom right portion of the map, but this can
 * be changed by using a css selector for `.ol-attribution`.
 *
 * @api
 */
var Attribution = /** @class */ (function (_super) {
    Attribution_extends(Attribution, _super);
    /**
     * @param {Options} [opt_options] Attribution options.
     */
    function Attribution(opt_options) {
        var _this = this;
        var options = opt_options ? opt_options : {};
        _this = _super.call(this, {
            element: document.createElement('div'),
            render: options.render,
            target: options.target,
        }) || this;
        /**
         * @private
         * @type {HTMLElement}
         */
        _this.ulElement_ = document.createElement('ul');
        /**
         * @private
         * @type {boolean}
         */
        _this.collapsed_ =
            options.collapsed !== undefined ? options.collapsed : true;
        /**
         * @private
         * @type {boolean}
         */
        _this.userCollapsed_ = _this.collapsed_;
        /**
         * @private
         * @type {boolean}
         */
        _this.overrideCollapsible_ = options.collapsible !== undefined;
        /**
         * @private
         * @type {boolean}
         */
        _this.collapsible_ =
            options.collapsible !== undefined ? options.collapsible : true;
        if (!_this.collapsible_) {
            _this.collapsed_ = false;
        }
        var className = options.className !== undefined ? options.className : 'ol-attribution';
        var tipLabel = options.tipLabel !== undefined ? options.tipLabel : 'Attributions';
        var expandClassName = options.expandClassName !== undefined
            ? options.expandClassName
            : className + '-expand';
        var collapseLabel = options.collapseLabel !== undefined ? options.collapseLabel : '\u203A';
        var collapseClassName = options.collapseClassName !== undefined
            ? options.collapseClassName
            : className + '-collapse';
        if (typeof collapseLabel === 'string') {
            /**
             * @private
             * @type {HTMLElement}
             */
            _this.collapseLabel_ = document.createElement('span');
            _this.collapseLabel_.textContent = collapseLabel;
            _this.collapseLabel_.className = collapseClassName;
        }
        else {
            _this.collapseLabel_ = collapseLabel;
        }
        var label = options.label !== undefined ? options.label : 'i';
        if (typeof label === 'string') {
            /**
             * @private
             * @type {HTMLElement}
             */
            _this.label_ = document.createElement('span');
            _this.label_.textContent = label;
            _this.label_.className = expandClassName;
        }
        else {
            _this.label_ = label;
        }
        var activeLabel = _this.collapsible_ && !_this.collapsed_ ? _this.collapseLabel_ : _this.label_;
        /**
         * @private
         * @type {HTMLElement}
         */
        _this.toggleButton_ = document.createElement('button');
        _this.toggleButton_.setAttribute('type', 'button');
        _this.toggleButton_.setAttribute('aria-expanded', String(!_this.collapsed_));
        _this.toggleButton_.title = tipLabel;
        _this.toggleButton_.appendChild(activeLabel);
        _this.toggleButton_.addEventListener(events_EventType/* default.CLICK */.Z.CLICK, _this.handleClick_.bind(_this), false);
        var cssClasses = className +
            ' ' +
            CLASS_UNSELECTABLE +
            ' ' +
            CLASS_CONTROL +
            (_this.collapsed_ && _this.collapsible_ ? ' ' + CLASS_COLLAPSED : '') +
            (_this.collapsible_ ? '' : ' ol-uncollapsible');
        var element = _this.element;
        element.className = cssClasses;
        element.appendChild(_this.toggleButton_);
        element.appendChild(_this.ulElement_);
        /**
         * A list of currently rendered resolutions.
         * @type {Array<string>}
         * @private
         */
        _this.renderedAttributions_ = [];
        /**
         * @private
         * @type {boolean}
         */
        _this.renderedVisible_ = true;
        return _this;
    }
    /**
     * Collect a list of visible attributions and set the collapsible state.
     * @param {import("../PluggableMap.js").FrameState} frameState Frame state.
     * @return {Array<string>} Attributions.
     * @private
     */
    Attribution.prototype.collectSourceAttributions_ = function (frameState) {
        /**
         * Used to determine if an attribution already exists.
         * @type {!Object<string, boolean>}
         */
        var lookup = {};
        /**
         * A list of visible attributions.
         * @type {Array<string>}
         */
        var visibleAttributions = [];
        var collapsible = true;
        var layerStatesArray = frameState.layerStatesArray;
        for (var i = 0, ii = layerStatesArray.length; i < ii; ++i) {
            var layerState = layerStatesArray[i];
            if (!(0,Layer/* inView */.j)(layerState, frameState.viewState)) {
                continue;
            }
            var source = /** @type {import("../layer/Layer.js").default} */ (layerState.layer).getSource();
            if (!source) {
                continue;
            }
            var attributionGetter = source.getAttributions();
            if (!attributionGetter) {
                continue;
            }
            var attributions = attributionGetter(frameState);
            if (!attributions) {
                continue;
            }
            collapsible =
                collapsible && source.getAttributionsCollapsible() !== false;
            if (Array.isArray(attributions)) {
                for (var j = 0, jj = attributions.length; j < jj; ++j) {
                    if (!(attributions[j] in lookup)) {
                        visibleAttributions.push(attributions[j]);
                        lookup[attributions[j]] = true;
                    }
                }
            }
            else {
                if (!(attributions in lookup)) {
                    visibleAttributions.push(attributions);
                    lookup[attributions] = true;
                }
            }
        }
        if (!this.overrideCollapsible_) {
            this.setCollapsible(collapsible);
        }
        return visibleAttributions;
    };
    /**
     * @private
     * @param {?import("../PluggableMap.js").FrameState} frameState Frame state.
     */
    Attribution.prototype.updateElement_ = function (frameState) {
        if (!frameState) {
            if (this.renderedVisible_) {
                this.element.style.display = 'none';
                this.renderedVisible_ = false;
            }
            return;
        }
        var attributions = this.collectSourceAttributions_(frameState);
        var visible = attributions.length > 0;
        if (this.renderedVisible_ != visible) {
            this.element.style.display = visible ? '' : 'none';
            this.renderedVisible_ = visible;
        }
        if ((0,array/* equals */.fS)(attributions, this.renderedAttributions_)) {
            return;
        }
        (0,dom/* removeChildren */.ep)(this.ulElement_);
        // append the attributions
        for (var i = 0, ii = attributions.length; i < ii; ++i) {
            var element = document.createElement('li');
            element.innerHTML = attributions[i];
            this.ulElement_.appendChild(element);
        }
        this.renderedAttributions_ = attributions;
    };
    /**
     * @param {MouseEvent} event The event to handle
     * @private
     */
    Attribution.prototype.handleClick_ = function (event) {
        event.preventDefault();
        this.handleToggle_();
        this.userCollapsed_ = this.collapsed_;
    };
    /**
     * @private
     */
    Attribution.prototype.handleToggle_ = function () {
        this.element.classList.toggle(CLASS_COLLAPSED);
        if (this.collapsed_) {
            (0,dom/* replaceNode */.$H)(this.collapseLabel_, this.label_);
        }
        else {
            (0,dom/* replaceNode */.$H)(this.label_, this.collapseLabel_);
        }
        this.collapsed_ = !this.collapsed_;
        this.toggleButton_.setAttribute('aria-expanded', String(!this.collapsed_));
    };
    /**
     * Return `true` if the attribution is collapsible, `false` otherwise.
     * @return {boolean} True if the widget is collapsible.
     * @api
     */
    Attribution.prototype.getCollapsible = function () {
        return this.collapsible_;
    };
    /**
     * Set whether the attribution should be collapsible.
     * @param {boolean} collapsible True if the widget is collapsible.
     * @api
     */
    Attribution.prototype.setCollapsible = function (collapsible) {
        if (this.collapsible_ === collapsible) {
            return;
        }
        this.collapsible_ = collapsible;
        this.element.classList.toggle('ol-uncollapsible');
        if (this.userCollapsed_) {
            this.handleToggle_();
        }
    };
    /**
     * Collapse or expand the attribution according to the passed parameter. Will
     * not do anything if the attribution isn't collapsible or if the current
     * collapsed state is already the one requested.
     * @param {boolean} collapsed True if the widget is collapsed.
     * @api
     */
    Attribution.prototype.setCollapsed = function (collapsed) {
        this.userCollapsed_ = collapsed;
        if (!this.collapsible_ || this.collapsed_ === collapsed) {
            return;
        }
        this.handleToggle_();
    };
    /**
     * Return `true` when the attribution is currently collapsed or `false`
     * otherwise.
     * @return {boolean} True if the widget is collapsed.
     * @api
     */
    Attribution.prototype.getCollapsed = function () {
        return this.collapsed_;
    };
    /**
     * Update the attribution element.
     * @param {import("../MapEvent.js").default} mapEvent Map event.
     * @override
     */
    Attribution.prototype.render = function (mapEvent) {
        this.updateElement_(mapEvent.frameState);
    };
    return Attribution;
}(control_Control));
/* harmony default export */ const control_Attribution = (Attribution);
//# sourceMappingURL=Attribution.js.map
// EXTERNAL MODULE: ./node_modules/ol/easing.js
var easing = __webpack_require__(1015);
;// CONCATENATED MODULE: ./node_modules/ol/control/Rotate.js
var Rotate_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @module ol/control/Rotate
 */




/**
 * @typedef {Object} Options
 * @property {string} [className='ol-rotate'] CSS class name.
 * @property {string|HTMLElement} [label='⇧'] Text label to use for the rotate button.
 * Instead of text, also an element (e.g. a `span` element) can be used.
 * @property {string} [tipLabel='Reset rotation'] Text label to use for the rotate tip.
 * @property {string} [compassClassName='ol-compass'] CSS class name for the compass.
 * @property {number} [duration=250] Animation duration in milliseconds.
 * @property {boolean} [autoHide=true] Hide the control when rotation is 0.
 * @property {function(import("../MapEvent.js").default):void} [render] Function called when the control should
 * be re-rendered. This is called in a `requestAnimationFrame` callback.
 * @property {function():void} [resetNorth] Function called when the control is clicked.
 * This will override the default `resetNorth`.
 * @property {HTMLElement|string} [target] Specify a target if you want the control to be
 * rendered outside of the map's viewport.
 */
/**
 * @classdesc
 * A button control to reset rotation to 0.
 * To style this control use css selector `.ol-rotate`. A `.ol-hidden` css
 * selector is added to the button when the rotation is 0.
 *
 * @api
 */
var Rotate = /** @class */ (function (_super) {
    Rotate_extends(Rotate, _super);
    /**
     * @param {Options} [opt_options] Rotate options.
     */
    function Rotate(opt_options) {
        var _this = this;
        var options = opt_options ? opt_options : {};
        _this = _super.call(this, {
            element: document.createElement('div'),
            render: options.render,
            target: options.target,
        }) || this;
        var className = options.className !== undefined ? options.className : 'ol-rotate';
        var label = options.label !== undefined ? options.label : '\u21E7';
        var compassClassName = options.compassClassName !== undefined
            ? options.compassClassName
            : 'ol-compass';
        /**
         * @type {HTMLElement}
         * @private
         */
        _this.label_ = null;
        if (typeof label === 'string') {
            _this.label_ = document.createElement('span');
            _this.label_.className = compassClassName;
            _this.label_.textContent = label;
        }
        else {
            _this.label_ = label;
            _this.label_.classList.add(compassClassName);
        }
        var tipLabel = options.tipLabel ? options.tipLabel : 'Reset rotation';
        var button = document.createElement('button');
        button.className = className + '-reset';
        button.setAttribute('type', 'button');
        button.title = tipLabel;
        button.appendChild(_this.label_);
        button.addEventListener(events_EventType/* default.CLICK */.Z.CLICK, _this.handleClick_.bind(_this), false);
        var cssClasses = className + ' ' + CLASS_UNSELECTABLE + ' ' + CLASS_CONTROL;
        var element = _this.element;
        element.className = cssClasses;
        element.appendChild(button);
        _this.callResetNorth_ = options.resetNorth ? options.resetNorth : undefined;
        /**
         * @type {number}
         * @private
         */
        _this.duration_ = options.duration !== undefined ? options.duration : 250;
        /**
         * @type {boolean}
         * @private
         */
        _this.autoHide_ = options.autoHide !== undefined ? options.autoHide : true;
        /**
         * @private
         * @type {number|undefined}
         */
        _this.rotation_ = undefined;
        if (_this.autoHide_) {
            _this.element.classList.add(CLASS_HIDDEN);
        }
        return _this;
    }
    /**
     * @param {MouseEvent} event The event to handle
     * @private
     */
    Rotate.prototype.handleClick_ = function (event) {
        event.preventDefault();
        if (this.callResetNorth_ !== undefined) {
            this.callResetNorth_();
        }
        else {
            this.resetNorth_();
        }
    };
    /**
     * @private
     */
    Rotate.prototype.resetNorth_ = function () {
        var map = this.getMap();
        var view = map.getView();
        if (!view) {
            // the map does not have a view, so we can't act
            // upon it
            return;
        }
        var rotation = view.getRotation();
        if (rotation !== undefined) {
            if (this.duration_ > 0 && rotation % (2 * Math.PI) !== 0) {
                view.animate({
                    rotation: 0,
                    duration: this.duration_,
                    easing: easing/* easeOut */.Vv,
                });
            }
            else {
                view.setRotation(0);
            }
        }
    };
    /**
     * Update the rotate control element.
     * @param {import("../MapEvent.js").default} mapEvent Map event.
     * @override
     */
    Rotate.prototype.render = function (mapEvent) {
        var frameState = mapEvent.frameState;
        if (!frameState) {
            return;
        }
        var rotation = frameState.viewState.rotation;
        if (rotation != this.rotation_) {
            var transform = 'rotate(' + rotation + 'rad)';
            if (this.autoHide_) {
                var contains = this.element.classList.contains(CLASS_HIDDEN);
                if (!contains && rotation === 0) {
                    this.element.classList.add(CLASS_HIDDEN);
                }
                else if (contains && rotation !== 0) {
                    this.element.classList.remove(CLASS_HIDDEN);
                }
            }
            this.label_.style.transform = transform;
        }
        this.rotation_ = rotation;
    };
    return Rotate;
}(control_Control));
/* harmony default export */ const control_Rotate = (Rotate);
//# sourceMappingURL=Rotate.js.map
;// CONCATENATED MODULE: ./node_modules/ol/control/Zoom.js
var Zoom_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @module ol/control/Zoom
 */




/**
 * @typedef {Object} Options
 * @property {number} [duration=250] Animation duration in milliseconds.
 * @property {string} [className='ol-zoom'] CSS class name.
 * @property {string} [zoomInClassName=className + '-in'] CSS class name for the zoom-in button.
 * @property {string} [zoomOutClassName=className + '-out'] CSS class name for the zoom-out button.
 * @property {string|HTMLElement} [zoomInLabel='+'] Text label to use for the zoom-in
 * button. Instead of text, also an element (e.g. a `span` element) can be used.
 * @property {string|HTMLElement} [zoomOutLabel='–'] Text label to use for the zoom-out button.
 * Instead of text, also an element (e.g. a `span` element) can be used.
 * @property {string} [zoomInTipLabel='Zoom in'] Text label to use for the button tip.
 * @property {string} [zoomOutTipLabel='Zoom out'] Text label to use for the button tip.
 * @property {number} [delta=1] The zoom delta applied on each click.
 * @property {HTMLElement|string} [target] Specify a target if you want the control to be
 * rendered outside of the map's viewport.
 */
/**
 * @classdesc
 * A control with 2 buttons, one for zoom in and one for zoom out.
 * This control is one of the default controls of a map. To style this control
 * use css selectors `.ol-zoom-in` and `.ol-zoom-out`.
 *
 * @api
 */
var Zoom = /** @class */ (function (_super) {
    Zoom_extends(Zoom, _super);
    /**
     * @param {Options} [opt_options] Zoom options.
     */
    function Zoom(opt_options) {
        var _this = this;
        var options = opt_options ? opt_options : {};
        _this = _super.call(this, {
            element: document.createElement('div'),
            target: options.target,
        }) || this;
        var className = options.className !== undefined ? options.className : 'ol-zoom';
        var delta = options.delta !== undefined ? options.delta : 1;
        var zoomInClassName = options.zoomInClassName !== undefined
            ? options.zoomInClassName
            : className + '-in';
        var zoomOutClassName = options.zoomOutClassName !== undefined
            ? options.zoomOutClassName
            : className + '-out';
        var zoomInLabel = options.zoomInLabel !== undefined ? options.zoomInLabel : '+';
        var zoomOutLabel = options.zoomOutLabel !== undefined ? options.zoomOutLabel : '\u2013';
        var zoomInTipLabel = options.zoomInTipLabel !== undefined ? options.zoomInTipLabel : 'Zoom in';
        var zoomOutTipLabel = options.zoomOutTipLabel !== undefined
            ? options.zoomOutTipLabel
            : 'Zoom out';
        var inElement = document.createElement('button');
        inElement.className = zoomInClassName;
        inElement.setAttribute('type', 'button');
        inElement.title = zoomInTipLabel;
        inElement.appendChild(typeof zoomInLabel === 'string'
            ? document.createTextNode(zoomInLabel)
            : zoomInLabel);
        inElement.addEventListener(events_EventType/* default.CLICK */.Z.CLICK, _this.handleClick_.bind(_this, delta), false);
        var outElement = document.createElement('button');
        outElement.className = zoomOutClassName;
        outElement.setAttribute('type', 'button');
        outElement.title = zoomOutTipLabel;
        outElement.appendChild(typeof zoomOutLabel === 'string'
            ? document.createTextNode(zoomOutLabel)
            : zoomOutLabel);
        outElement.addEventListener(events_EventType/* default.CLICK */.Z.CLICK, _this.handleClick_.bind(_this, -delta), false);
        var cssClasses = className + ' ' + CLASS_UNSELECTABLE + ' ' + CLASS_CONTROL;
        var element = _this.element;
        element.className = cssClasses;
        element.appendChild(inElement);
        element.appendChild(outElement);
        /**
         * @type {number}
         * @private
         */
        _this.duration_ = options.duration !== undefined ? options.duration : 250;
        return _this;
    }
    /**
     * @param {number} delta Zoom delta.
     * @param {MouseEvent} event The event to handle
     * @private
     */
    Zoom.prototype.handleClick_ = function (delta, event) {
        event.preventDefault();
        this.zoomByDelta_(delta);
    };
    /**
     * @param {number} delta Zoom delta.
     * @private
     */
    Zoom.prototype.zoomByDelta_ = function (delta) {
        var map = this.getMap();
        var view = map.getView();
        if (!view) {
            // the map does not have a view, so we can't act
            // upon it
            return;
        }
        var currentZoom = view.getZoom();
        if (currentZoom !== undefined) {
            var newZoom = view.getConstrainedZoom(currentZoom + delta);
            if (this.duration_ > 0) {
                if (view.getAnimating()) {
                    view.cancelAnimations();
                }
                view.animate({
                    zoom: newZoom,
                    duration: this.duration_,
                    easing: easing/* easeOut */.Vv,
                });
            }
            else {
                view.setZoom(newZoom);
            }
        }
    };
    return Zoom;
}(control_Control));
/* harmony default export */ const control_Zoom = (Zoom);
//# sourceMappingURL=Zoom.js.map
;// CONCATENATED MODULE: ./node_modules/ol/control.js
/**
 * @module ol/control
 */














/**
 * @typedef {Object} DefaultsOptions
 * @property {boolean} [attribution=true] Include
 * {@link module:ol/control/Attribution~Attribution}.
 * @property {import("./control/Attribution.js").Options} [attributionOptions]
 * Options for {@link module:ol/control/Attribution~Attribution}.
 * @property {boolean} [rotate=true] Include
 * {@link module:ol/control/Rotate~Rotate}.
 * @property {import("./control/Rotate.js").Options} [rotateOptions] Options
 * for {@link module:ol/control/Rotate~Rotate}.
 * @property {boolean} [zoom] Include {@link module:ol/control/Zoom~Zoom}.
 * @property {import("./control/Zoom.js").Options} [zoomOptions] Options for
 * {@link module:ol/control/Zoom~Zoom}.
 * @api
 */
/**
 * Set of controls included in maps by default. Unless configured otherwise,
 * this returns a collection containing an instance of each of the following
 * controls:
 * * {@link module:ol/control/Zoom~Zoom}
 * * {@link module:ol/control/Rotate~Rotate}
 * * {@link module:ol/control/Attribution~Attribution}
 *
 * @param {DefaultsOptions} [opt_options]
 * Defaults options.
 * @return {Collection<import("./control/Control.js").default>}
 * Controls.
 * @api
 */
function defaults(opt_options) {
    var options = opt_options ? opt_options : {};
    var controls = new ol_Collection();
    var zoomControl = options.zoom !== undefined ? options.zoom : true;
    if (zoomControl) {
        controls.push(new control_Zoom(options.zoomOptions));
    }
    var rotateControl = options.rotate !== undefined ? options.rotate : true;
    if (rotateControl) {
        controls.push(new control_Rotate(options.rotateOptions));
    }
    var attributionControl = options.attribution !== undefined ? options.attribution : true;
    if (attributionControl) {
        controls.push(new control_Attribution(options.attributionOptions));
    }
    return controls;
}
//# sourceMappingURL=control.js.map
;// CONCATENATED MODULE: ./node_modules/ol/interaction/Property.js
/**
 * @module ol/interaction/Property
 */
/**
 * @enum {string}
 */
/* harmony default export */ const interaction_Property = ({
    ACTIVE: 'active',
});
//# sourceMappingURL=Property.js.map
;// CONCATENATED MODULE: ./node_modules/ol/interaction/Interaction.js
var Interaction_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @module ol/interaction/Interaction
 */



/***
 * @template Return
 * @typedef {import("../Observable").OnSignature<import("../Observable").EventTypes, import("../events/Event.js").default, Return> &
 *   import("../Observable").OnSignature<import("../ObjectEventType").Types|
 *     'change:active', import("../Object").ObjectEvent, Return> &
 *   import("../Observable").CombinedOnSignature<import("../Observable").EventTypes|import("../ObjectEventType").Types|
 *     'change:active', Return>} InteractionOnSignature
 */
/**
 * Object literal with config options for interactions.
 * @typedef {Object} InteractionOptions
 * @property {function(import("../MapBrowserEvent.js").default):boolean} handleEvent
 * Method called by the map to notify the interaction that a browser event was
 * dispatched to the map. If the function returns a falsy value, propagation of
 * the event to other interactions in the map's interactions chain will be
 * prevented (this includes functions with no explicit return). The interactions
 * are traversed in reverse order of the interactions collection of the map.
 */
/**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * User actions that change the state of the map. Some are similar to controls,
 * but are not associated with a DOM element.
 * For example, {@link module:ol/interaction/KeyboardZoom~KeyboardZoom} is
 * functionally the same as {@link module:ol/control/Zoom~Zoom}, but triggered
 * by a keyboard event not a button element event.
 * Although interactions do not have a DOM element, some of them do render
 * vectors and so are visible on the screen.
 * @api
 */
var Interaction = /** @class */ (function (_super) {
    Interaction_extends(Interaction, _super);
    /**
     * @param {InteractionOptions} [opt_options] Options.
     */
    function Interaction(opt_options) {
        var _this = _super.call(this) || this;
        /***
         * @type {InteractionOnSignature<import("../events").EventsKey>}
         */
        _this.on;
        /***
         * @type {InteractionOnSignature<import("../events").EventsKey>}
         */
        _this.once;
        /***
         * @type {InteractionOnSignature<void>}
         */
        _this.un;
        if (opt_options && opt_options.handleEvent) {
            _this.handleEvent = opt_options.handleEvent;
        }
        /**
         * @private
         * @type {import("../PluggableMap.js").default|null}
         */
        _this.map_ = null;
        _this.setActive(true);
        return _this;
    }
    /**
     * Return whether the interaction is currently active.
     * @return {boolean} `true` if the interaction is active, `false` otherwise.
     * @observable
     * @api
     */
    Interaction.prototype.getActive = function () {
        return /** @type {boolean} */ (this.get(interaction_Property.ACTIVE));
    };
    /**
     * Get the map associated with this interaction.
     * @return {import("../PluggableMap.js").default|null} Map.
     * @api
     */
    Interaction.prototype.getMap = function () {
        return this.map_;
    };
    /**
     * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event}.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
     * @return {boolean} `false` to stop event propagation.
     * @api
     */
    Interaction.prototype.handleEvent = function (mapBrowserEvent) {
        return true;
    };
    /**
     * Activate or deactivate the interaction.
     * @param {boolean} active Active.
     * @observable
     * @api
     */
    Interaction.prototype.setActive = function (active) {
        this.set(interaction_Property.ACTIVE, active);
    };
    /**
     * Remove the interaction from its current map and attach it to the new map.
     * Subclasses may set up event handlers to get notified about changes to
     * the map here.
     * @param {import("../PluggableMap.js").default|null} map Map.
     */
    Interaction.prototype.setMap = function (map) {
        this.map_ = map;
    };
    return Interaction;
}(ol_Object/* default */.Z));
/**
 * @param {import("../View.js").default} view View.
 * @param {import("../coordinate.js").Coordinate} delta Delta.
 * @param {number} [opt_duration] Duration.
 */
function pan(view, delta, opt_duration) {
    var currentCenter = view.getCenterInternal();
    if (currentCenter) {
        var center = [currentCenter[0] + delta[0], currentCenter[1] + delta[1]];
        view.animateInternal({
            duration: opt_duration !== undefined ? opt_duration : 250,
            easing: easing/* linear */.GE,
            center: view.getConstrainedCenter(center),
        });
    }
}
/**
 * @param {import("../View.js").default} view View.
 * @param {number} delta Delta from previous zoom level.
 * @param {import("../coordinate.js").Coordinate} [opt_anchor] Anchor coordinate in the user projection.
 * @param {number} [opt_duration] Duration.
 */
function zoomByDelta(view, delta, opt_anchor, opt_duration) {
    var currentZoom = view.getZoom();
    if (currentZoom === undefined) {
        return;
    }
    var newZoom = view.getConstrainedZoom(currentZoom + delta);
    var newResolution = view.getResolutionForZoom(newZoom);
    if (view.getAnimating()) {
        view.cancelAnimations();
    }
    view.animate({
        resolution: newResolution,
        anchor: opt_anchor,
        duration: opt_duration !== undefined ? opt_duration : 250,
        easing: easing/* easeOut */.Vv,
    });
}
/* harmony default export */ const interaction_Interaction = (Interaction);
//# sourceMappingURL=Interaction.js.map
;// CONCATENATED MODULE: ./node_modules/ol/interaction/DoubleClickZoom.js
var DoubleClickZoom_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @module ol/interaction/DoubleClickZoom
 */


/**
 * @typedef {Object} Options
 * @property {number} [duration=250] Animation duration in milliseconds.
 * @property {number} [delta=1] The zoom delta applied on each double click.
 */
/**
 * @classdesc
 * Allows the user to zoom by double-clicking on the map.
 * @api
 */
var DoubleClickZoom = /** @class */ (function (_super) {
    DoubleClickZoom_extends(DoubleClickZoom, _super);
    /**
     * @param {Options} [opt_options] Options.
     */
    function DoubleClickZoom(opt_options) {
        var _this = _super.call(this) || this;
        var options = opt_options ? opt_options : {};
        /**
         * @private
         * @type {number}
         */
        _this.delta_ = options.delta ? options.delta : 1;
        /**
         * @private
         * @type {number}
         */
        _this.duration_ = options.duration !== undefined ? options.duration : 250;
        return _this;
    }
    /**
     * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} (if it was a
     * doubleclick) and eventually zooms the map.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
     * @return {boolean} `false` to stop event propagation.
     */
    DoubleClickZoom.prototype.handleEvent = function (mapBrowserEvent) {
        var stopEvent = false;
        if (mapBrowserEvent.type == ol_MapBrowserEventType.DBLCLICK) {
            var browserEvent = /** @type {MouseEvent} */ (mapBrowserEvent.originalEvent);
            var map = mapBrowserEvent.map;
            var anchor = mapBrowserEvent.coordinate;
            var delta = browserEvent.shiftKey ? -this.delta_ : this.delta_;
            var view = map.getView();
            zoomByDelta(view, delta, anchor, this.duration_);
            browserEvent.preventDefault();
            stopEvent = true;
        }
        return !stopEvent;
    };
    return DoubleClickZoom;
}(interaction_Interaction));
/* harmony default export */ const interaction_DoubleClickZoom = (DoubleClickZoom);
//# sourceMappingURL=DoubleClickZoom.js.map
;// CONCATENATED MODULE: ./node_modules/ol/interaction/Pointer.js
var Pointer_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @module ol/interaction/Pointer
 */


/**
 * @typedef {Object} Options
 * @property {function(import("../MapBrowserEvent.js").default):boolean} [handleDownEvent]
 * Function handling "down" events. If the function returns `true` then a drag
 * sequence is started.
 * @property {function(import("../MapBrowserEvent.js").default):void} [handleDragEvent]
 * Function handling "drag" events. This function is called on "move" events
 * during a drag sequence.
 * @property {function(import("../MapBrowserEvent.js").default):boolean} [handleEvent]
 * Method called by the map to notify the interaction that a browser event was
 * dispatched to the map. The function may return `false` to prevent the
 * propagation of the event to other interactions in the map's interactions
 * chain.
 * @property {function(import("../MapBrowserEvent.js").default):void} [handleMoveEvent]
 * Function handling "move" events. This function is called on "move" events.
 * This functions is also called during a drag sequence, so during a drag
 * sequence both the `handleDragEvent` function and this function are called.
 * If `handleDownEvent` is defined and it returns true this function will not
 * be called during a drag sequence.
 * @property {function(import("../MapBrowserEvent.js").default):boolean} [handleUpEvent]
 *  Function handling "up" events. If the function returns `false` then the
 * current drag sequence is stopped.
 * @property {function(boolean):boolean} [stopDown]
 * Should the down event be propagated to other interactions, or should be
 * stopped?
 */
/**
 * @classdesc
 * Base class that calls user-defined functions on `down`, `move` and `up`
 * events. This class also manages "drag sequences".
 *
 * When the `handleDownEvent` user function returns `true` a drag sequence is
 * started. During a drag sequence the `handleDragEvent` user function is
 * called on `move` events. The drag sequence ends when the `handleUpEvent`
 * user function is called and returns `false`.
 * @api
 */
var PointerInteraction = /** @class */ (function (_super) {
    Pointer_extends(PointerInteraction, _super);
    /**
     * @param {Options} [opt_options] Options.
     */
    function PointerInteraction(opt_options) {
        var _this = this;
        var options = opt_options ? opt_options : {};
        _this = _super.call(this, 
        /** @type {import("./Interaction.js").InteractionOptions} */ (options)) || this;
        if (options.handleDownEvent) {
            _this.handleDownEvent = options.handleDownEvent;
        }
        if (options.handleDragEvent) {
            _this.handleDragEvent = options.handleDragEvent;
        }
        if (options.handleMoveEvent) {
            _this.handleMoveEvent = options.handleMoveEvent;
        }
        if (options.handleUpEvent) {
            _this.handleUpEvent = options.handleUpEvent;
        }
        if (options.stopDown) {
            _this.stopDown = options.stopDown;
        }
        /**
         * @type {boolean}
         * @protected
         */
        _this.handlingDownUpSequence = false;
        /**
         * @type {Array<PointerEvent>}
         * @protected
         */
        _this.targetPointers = [];
        return _this;
    }
    /**
     * Returns the current number of pointers involved in the interaction,
     * e.g. `2` when two fingers are used.
     * @return {number} The number of pointers.
     * @api
     */
    PointerInteraction.prototype.getPointerCount = function () {
        return this.targetPointers.length;
    };
    /**
     * Handle pointer down events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @return {boolean} If the event was consumed.
     * @protected
     */
    PointerInteraction.prototype.handleDownEvent = function (mapBrowserEvent) {
        return false;
    };
    /**
     * Handle pointer drag events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @protected
     */
    PointerInteraction.prototype.handleDragEvent = function (mapBrowserEvent) { };
    /**
     * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} and may call into
     * other functions, if event sequences like e.g. 'drag' or 'down-up' etc. are
     * detected.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
     * @return {boolean} `false` to stop event propagation.
     * @api
     */
    PointerInteraction.prototype.handleEvent = function (mapBrowserEvent) {
        if (!mapBrowserEvent.originalEvent) {
            return true;
        }
        var stopEvent = false;
        this.updateTrackedPointers_(mapBrowserEvent);
        if (this.handlingDownUpSequence) {
            if (mapBrowserEvent.type == ol_MapBrowserEventType.POINTERDRAG) {
                this.handleDragEvent(mapBrowserEvent);
                // prevent page scrolling during dragging
                mapBrowserEvent.originalEvent.preventDefault();
            }
            else if (mapBrowserEvent.type == ol_MapBrowserEventType.POINTERUP) {
                var handledUp = this.handleUpEvent(mapBrowserEvent);
                this.handlingDownUpSequence =
                    handledUp && this.targetPointers.length > 0;
            }
        }
        else {
            if (mapBrowserEvent.type == ol_MapBrowserEventType.POINTERDOWN) {
                var handled = this.handleDownEvent(mapBrowserEvent);
                this.handlingDownUpSequence = handled;
                stopEvent = this.stopDown(handled);
            }
            else if (mapBrowserEvent.type == ol_MapBrowserEventType.POINTERMOVE) {
                this.handleMoveEvent(mapBrowserEvent);
            }
        }
        return !stopEvent;
    };
    /**
     * Handle pointer move events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @protected
     */
    PointerInteraction.prototype.handleMoveEvent = function (mapBrowserEvent) { };
    /**
     * Handle pointer up events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @return {boolean} If the event was consumed.
     * @protected
     */
    PointerInteraction.prototype.handleUpEvent = function (mapBrowserEvent) {
        return false;
    };
    /**
     * This function is used to determine if "down" events should be propagated
     * to other interactions or should be stopped.
     * @param {boolean} handled Was the event handled by the interaction?
     * @return {boolean} Should the `down` event be stopped?
     */
    PointerInteraction.prototype.stopDown = function (handled) {
        return handled;
    };
    /**
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @private
     */
    PointerInteraction.prototype.updateTrackedPointers_ = function (mapBrowserEvent) {
        if (mapBrowserEvent.activePointers) {
            this.targetPointers = mapBrowserEvent.activePointers;
        }
    };
    return PointerInteraction;
}(interaction_Interaction));
/**
 * @param {Array<PointerEvent>} pointerEvents List of events.
 * @return {import("../pixel.js").Pixel} Centroid pixel.
 */
function Pointer_centroid(pointerEvents) {
    var length = pointerEvents.length;
    var clientX = 0;
    var clientY = 0;
    for (var i = 0; i < length; i++) {
        clientX += pointerEvents[i].clientX;
        clientY += pointerEvents[i].clientY;
    }
    return [clientX / length, clientY / length];
}
/* harmony default export */ const Pointer = (PointerInteraction);
//# sourceMappingURL=Pointer.js.map
;// CONCATENATED MODULE: ./node_modules/ol/events/condition.js
/**
 * @module ol/events/condition
 */




/**
 * A function that takes an {@link module:ol/MapBrowserEvent~MapBrowserEvent} and returns a
 * `{boolean}`. If the condition is met, true should be returned.
 *
 * @typedef {function(this: ?, import("../MapBrowserEvent.js").default): boolean} Condition
 */
/**
 * Creates a condition function that passes when all provided conditions pass.
 * @param {...Condition} var_args Conditions to check.
 * @return {Condition} Condition function.
 */
function condition_all(var_args) {
    var conditions = arguments;
    /**
     * @param {import("../MapBrowserEvent.js").default} event Event.
     * @return {boolean} All conditions passed.
     */
    return function (event) {
        var pass = true;
        for (var i = 0, ii = conditions.length; i < ii; ++i) {
            pass = pass && conditions[i](event);
            if (!pass) {
                break;
            }
        }
        return pass;
    };
}
/**
 * Return `true` if only the alt-key is pressed, `false` otherwise (e.g. when
 * additionally the shift-key is pressed).
 *
 * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
 * @return {boolean} True if only the alt key is pressed.
 * @api
 */
var altKeyOnly = function (mapBrowserEvent) {
    var originalEvent = /** @type {KeyboardEvent|MouseEvent|TouchEvent} */ (mapBrowserEvent.originalEvent);
    return (originalEvent.altKey &&
        !(originalEvent.metaKey || originalEvent.ctrlKey) &&
        !originalEvent.shiftKey);
};
/**
 * Return `true` if only the alt-key and shift-key is pressed, `false` otherwise
 * (e.g. when additionally the platform-modifier-key is pressed).
 *
 * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
 * @return {boolean} True if only the alt and shift keys are pressed.
 * @api
 */
var altShiftKeysOnly = function (mapBrowserEvent) {
    var originalEvent = /** @type {KeyboardEvent|MouseEvent|TouchEvent} */ (mapBrowserEvent.originalEvent);
    return (originalEvent.altKey &&
        !(originalEvent.metaKey || originalEvent.ctrlKey) &&
        originalEvent.shiftKey);
};
/**
 * Return `true` if the map has the focus. This condition requires a map target
 * element with a `tabindex` attribute, e.g. `<div id="map" tabindex="1">`.
 *
 * @param {import("../MapBrowserEvent.js").default} event Map browser event.
 * @return {boolean} The map has the focus.
 * @api
 */
var condition_focus = function (event) {
    var targetElement = event.map.getTargetElement();
    var activeElement = event.map.getOwnerDocument().activeElement;
    return targetElement.contains(activeElement);
};
/**
 * Return `true` if the map has the focus or no 'tabindex' attribute set.
 *
 * @param {import("../MapBrowserEvent.js").default} event Map browser event.
 * @return {boolean} The map container has the focus or no 'tabindex' attribute.
 */
var focusWithTabindex = function (event) {
    return event.map.getTargetElement().hasAttribute('tabindex')
        ? condition_focus(event)
        : true;
};
/**
 * Return always true.
 *
 * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
 * @return {boolean} True.
 * @api
 */
var always = functions/* TRUE */.uX;
/**
 * Return `true` if the event is a `click` event, `false` otherwise.
 *
 * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
 * @return {boolean} True if the event is a map `click` event.
 * @api
 */
var click = function (mapBrowserEvent) {
    return mapBrowserEvent.type == MapBrowserEventType.CLICK;
};
/**
 * Return `true` if the event has an "action"-producing mouse button.
 *
 * By definition, this includes left-click on windows/linux, and left-click
 * without the ctrl key on Macs.
 *
 * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
 * @return {boolean} The result.
 */
var mouseActionButton = function (mapBrowserEvent) {
    var originalEvent = /** @type {MouseEvent} */ (mapBrowserEvent.originalEvent);
    return originalEvent.button == 0 && !(has/* WEBKIT */.G$ && has/* MAC */.tK && originalEvent.ctrlKey);
};
/**
 * Return always false.
 *
 * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
 * @return {boolean} False.
 * @api
 */
var never = (/* unused pure expression or super */ null && (FALSE));
/**
 * Return `true` if the browser event is a `pointermove` event, `false`
 * otherwise.
 *
 * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
 * @return {boolean} True if the browser event is a `pointermove` event.
 * @api
 */
var pointerMove = function (mapBrowserEvent) {
    return mapBrowserEvent.type == 'pointermove';
};
/**
 * Return `true` if the event is a map `singleclick` event, `false` otherwise.
 *
 * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
 * @return {boolean} True if the event is a map `singleclick` event.
 * @api
 */
var singleClick = function (mapBrowserEvent) {
    return mapBrowserEvent.type == MapBrowserEventType.SINGLECLICK;
};
/**
 * Return `true` if the event is a map `dblclick` event, `false` otherwise.
 *
 * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
 * @return {boolean} True if the event is a map `dblclick` event.
 * @api
 */
var doubleClick = function (mapBrowserEvent) {
    return mapBrowserEvent.type == MapBrowserEventType.DBLCLICK;
};
/**
 * Return `true` if no modifier key (alt-, shift- or platform-modifier-key) is
 * pressed.
 *
 * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
 * @return {boolean} True only if there no modifier keys are pressed.
 * @api
 */
var noModifierKeys = function (mapBrowserEvent) {
    var originalEvent = /** @type {KeyboardEvent|MouseEvent|TouchEvent} */ (mapBrowserEvent.originalEvent);
    return (!originalEvent.altKey &&
        !(originalEvent.metaKey || originalEvent.ctrlKey) &&
        !originalEvent.shiftKey);
};
/**
 * Return `true` if only the platform-modifier-key (the meta-key on Mac,
 * ctrl-key otherwise) is pressed, `false` otherwise (e.g. when additionally
 * the shift-key is pressed).
 *
 * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
 * @return {boolean} True if only the platform modifier key is pressed.
 * @api
 */
var platformModifierKeyOnly = function (mapBrowserEvent) {
    var originalEvent = /** @type {KeyboardEvent|MouseEvent|TouchEvent} */ (mapBrowserEvent.originalEvent);
    return (!originalEvent.altKey &&
        (MAC ? originalEvent.metaKey : originalEvent.ctrlKey) &&
        !originalEvent.shiftKey);
};
/**
 * Return `true` if only the shift-key is pressed, `false` otherwise (e.g. when
 * additionally the alt-key is pressed).
 *
 * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
 * @return {boolean} True if only the shift key is pressed.
 * @api
 */
var shiftKeyOnly = function (mapBrowserEvent) {
    var originalEvent = /** @type {KeyboardEvent|MouseEvent|TouchEvent} */ (mapBrowserEvent.originalEvent);
    return (!originalEvent.altKey &&
        !(originalEvent.metaKey || originalEvent.ctrlKey) &&
        originalEvent.shiftKey);
};
/**
 * Return `true` if the target element is not editable, i.e. not an `input`,
 * `select`, or `textarea` element and no `contenteditable` attribute is
 * set or inherited, `false` otherwise.
 *
 * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
 * @return {boolean} True only if the target element is not editable.
 * @api
 */
var targetNotEditable = function (mapBrowserEvent) {
    var originalEvent = /** @type {KeyboardEvent|MouseEvent|TouchEvent} */ (mapBrowserEvent.originalEvent);
    var tagName = /** @type {Element} */ (originalEvent.target).tagName;
    return (tagName !== 'INPUT' &&
        tagName !== 'SELECT' &&
        tagName !== 'TEXTAREA' &&
        // `isContentEditable` is only available on `HTMLElement`, but it may also be a
        // different type like `SVGElement`.
        // @ts-ignore
        !originalEvent.target.isContentEditable);
};
/**
 * Return `true` if the event originates from a mouse device.
 *
 * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
 * @return {boolean} True if the event originates from a mouse device.
 * @api
 */
var mouseOnly = function (mapBrowserEvent) {
    var pointerEvent = /** @type {import("../MapBrowserEvent").default} */ (mapBrowserEvent).originalEvent;
    (0,asserts/* assert */.h)(pointerEvent !== undefined, 56); // mapBrowserEvent must originate from a pointer event
    // see https://www.w3.org/TR/pointerevents/#widl-PointerEvent-pointerType
    return pointerEvent.pointerType == 'mouse';
};
/**
 * Return `true` if the event originates from a touchable device.
 *
 * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
 * @return {boolean} True if the event originates from a touchable device.
 * @api
 */
var touchOnly = function (mapBrowserEvent) {
    var pointerEvt = /** @type {import("../MapBrowserEvent").default} */ (mapBrowserEvent).originalEvent;
    assert(pointerEvt !== undefined, 56); // mapBrowserEvent must originate from a pointer event
    // see https://www.w3.org/TR/pointerevents/#widl-PointerEvent-pointerType
    return pointerEvt.pointerType === 'touch';
};
/**
 * Return `true` if the event originates from a digital pen.
 *
 * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
 * @return {boolean} True if the event originates from a digital pen.
 * @api
 */
var penOnly = function (mapBrowserEvent) {
    var pointerEvt = /** @type {import("../MapBrowserEvent").default} */ (mapBrowserEvent).originalEvent;
    assert(pointerEvt !== undefined, 56); // mapBrowserEvent must originate from a pointer event
    // see https://www.w3.org/TR/pointerevents/#widl-PointerEvent-pointerType
    return pointerEvt.pointerType === 'pen';
};
/**
 * Return `true` if the event originates from a primary pointer in
 * contact with the surface or if the left mouse button is pressed.
 * See https://www.w3.org/TR/pointerevents/#button-states.
 *
 * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
 * @return {boolean} True if the event originates from a primary pointer.
 * @api
 */
var primaryAction = function (mapBrowserEvent) {
    var pointerEvent = /** @type {import("../MapBrowserEvent").default} */ (mapBrowserEvent).originalEvent;
    (0,asserts/* assert */.h)(pointerEvent !== undefined, 56); // mapBrowserEvent must originate from a pointer event
    return pointerEvent.isPrimary && pointerEvent.button === 0;
};
//# sourceMappingURL=condition.js.map
;// CONCATENATED MODULE: ./node_modules/ol/interaction/DragPan.js
var DragPan_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @module ol/interaction/DragPan
 */





/**
 * @typedef {Object} Options
 * @property {import("../events/condition.js").Condition} [condition] A function that takes an {@link module:ol/MapBrowserEvent~MapBrowserEvent} and returns a boolean
 * to indicate whether that event should be handled.
 * Default is {@link module:ol/events/condition.noModifierKeys} and {@link module:ol/events/condition.primaryAction}.
 * @property {boolean} [onFocusOnly=false] When the map's target has a `tabindex` attribute set,
 * the interaction will only handle events when the map has the focus.
 * @property {import("../Kinetic.js").default} [kinetic] Kinetic inertia to apply to the pan.
 */
/**
 * @classdesc
 * Allows the user to pan the map by dragging the map.
 * @api
 */
var DragPan = /** @class */ (function (_super) {
    DragPan_extends(DragPan, _super);
    /**
     * @param {Options} [opt_options] Options.
     */
    function DragPan(opt_options) {
        var _this = _super.call(this, {
            stopDown: functions/* FALSE */.Dv,
        }) || this;
        var options = opt_options ? opt_options : {};
        /**
         * @private
         * @type {import("../Kinetic.js").default|undefined}
         */
        _this.kinetic_ = options.kinetic;
        /**
         * @type {import("../pixel.js").Pixel}
         */
        _this.lastCentroid = null;
        /**
         * @type {number}
         */
        _this.lastPointersCount_;
        /**
         * @type {boolean}
         */
        _this.panning_ = false;
        var condition = options.condition
            ? options.condition
            : condition_all(noModifierKeys, primaryAction);
        /**
         * @private
         * @type {import("../events/condition.js").Condition}
         */
        _this.condition_ = options.onFocusOnly
            ? condition_all(focusWithTabindex, condition)
            : condition;
        /**
         * @private
         * @type {boolean}
         */
        _this.noKinetic_ = false;
        return _this;
    }
    /**
     * Handle pointer drag events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     */
    DragPan.prototype.handleDragEvent = function (mapBrowserEvent) {
        if (!this.panning_) {
            this.panning_ = true;
            this.getMap().getView().beginInteraction();
        }
        var targetPointers = this.targetPointers;
        var centroid = Pointer_centroid(targetPointers);
        if (targetPointers.length == this.lastPointersCount_) {
            if (this.kinetic_) {
                this.kinetic_.update(centroid[0], centroid[1]);
            }
            if (this.lastCentroid) {
                var delta = [
                    this.lastCentroid[0] - centroid[0],
                    centroid[1] - this.lastCentroid[1],
                ];
                var map = mapBrowserEvent.map;
                var view = map.getView();
                (0,ol_coordinate/* scale */.bA)(delta, view.getResolution());
                (0,ol_coordinate/* rotate */.U1)(delta, view.getRotation());
                view.adjustCenterInternal(delta);
            }
        }
        else if (this.kinetic_) {
            // reset so we don't overestimate the kinetic energy after
            // after one finger down, tiny drag, second finger down
            this.kinetic_.begin();
        }
        this.lastCentroid = centroid;
        this.lastPointersCount_ = targetPointers.length;
        mapBrowserEvent.originalEvent.preventDefault();
    };
    /**
     * Handle pointer up events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @return {boolean} If the event was consumed.
     */
    DragPan.prototype.handleUpEvent = function (mapBrowserEvent) {
        var map = mapBrowserEvent.map;
        var view = map.getView();
        if (this.targetPointers.length === 0) {
            if (!this.noKinetic_ && this.kinetic_ && this.kinetic_.end()) {
                var distance = this.kinetic_.getDistance();
                var angle = this.kinetic_.getAngle();
                var center = view.getCenterInternal();
                var centerpx = map.getPixelFromCoordinateInternal(center);
                var dest = map.getCoordinateFromPixelInternal([
                    centerpx[0] - distance * Math.cos(angle),
                    centerpx[1] - distance * Math.sin(angle),
                ]);
                view.animateInternal({
                    center: view.getConstrainedCenter(dest),
                    duration: 500,
                    easing: easing/* easeOut */.Vv,
                });
            }
            if (this.panning_) {
                this.panning_ = false;
                view.endInteraction();
            }
            return false;
        }
        else {
            if (this.kinetic_) {
                // reset so we don't overestimate the kinetic energy after
                // after one finger up, tiny drag, second finger up
                this.kinetic_.begin();
            }
            this.lastCentroid = null;
            return true;
        }
    };
    /**
     * Handle pointer down events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @return {boolean} If the event was consumed.
     */
    DragPan.prototype.handleDownEvent = function (mapBrowserEvent) {
        if (this.targetPointers.length > 0 && this.condition_(mapBrowserEvent)) {
            var map = mapBrowserEvent.map;
            var view = map.getView();
            this.lastCentroid = null;
            // stop any current animation
            if (view.getAnimating()) {
                view.cancelAnimations();
            }
            if (this.kinetic_) {
                this.kinetic_.begin();
            }
            // No kinetic as soon as more than one pointer on the screen is
            // detected. This is to prevent nasty pans after pinch.
            this.noKinetic_ = this.targetPointers.length > 1;
            return true;
        }
        else {
            return false;
        }
    };
    return DragPan;
}(Pointer));
/* harmony default export */ const interaction_DragPan = (DragPan);
//# sourceMappingURL=DragPan.js.map
// EXTERNAL MODULE: ./node_modules/ol/rotationconstraint.js
var rotationconstraint = __webpack_require__(828);
;// CONCATENATED MODULE: ./node_modules/ol/interaction/DragRotate.js
var DragRotate_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @module ol/interaction/DragRotate
 */




/**
 * @typedef {Object} Options
 * @property {import("../events/condition.js").Condition} [condition] A function that takes an
 * {@link module:ol/MapBrowserEvent~MapBrowserEvent} and returns a boolean
 * to indicate whether that event should be handled.
 * Default is {@link module:ol/events/condition.altShiftKeysOnly}.
 * @property {number} [duration=250] Animation duration in milliseconds.
 */
/**
 * @classdesc
 * Allows the user to rotate the map by clicking and dragging on the map,
 * normally combined with an {@link module:ol/events/condition} that limits
 * it to when the alt and shift keys are held down.
 *
 * This interaction is only supported for mouse devices.
 * @api
 */
var DragRotate = /** @class */ (function (_super) {
    DragRotate_extends(DragRotate, _super);
    /**
     * @param {Options} [opt_options] Options.
     */
    function DragRotate(opt_options) {
        var _this = this;
        var options = opt_options ? opt_options : {};
        _this = _super.call(this, {
            stopDown: functions/* FALSE */.Dv,
        }) || this;
        /**
         * @private
         * @type {import("../events/condition.js").Condition}
         */
        _this.condition_ = options.condition ? options.condition : altShiftKeysOnly;
        /**
         * @private
         * @type {number|undefined}
         */
        _this.lastAngle_ = undefined;
        /**
         * @private
         * @type {number}
         */
        _this.duration_ = options.duration !== undefined ? options.duration : 250;
        return _this;
    }
    /**
     * Handle pointer drag events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     */
    DragRotate.prototype.handleDragEvent = function (mapBrowserEvent) {
        if (!mouseOnly(mapBrowserEvent)) {
            return;
        }
        var map = mapBrowserEvent.map;
        var view = map.getView();
        if (view.getConstraints().rotation === rotationconstraint/* disable */.h$) {
            return;
        }
        var size = map.getSize();
        var offset = mapBrowserEvent.pixel;
        var theta = Math.atan2(size[1] / 2 - offset[1], offset[0] - size[0] / 2);
        if (this.lastAngle_ !== undefined) {
            var delta = theta - this.lastAngle_;
            view.adjustRotationInternal(-delta);
        }
        this.lastAngle_ = theta;
    };
    /**
     * Handle pointer up events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @return {boolean} If the event was consumed.
     */
    DragRotate.prototype.handleUpEvent = function (mapBrowserEvent) {
        if (!mouseOnly(mapBrowserEvent)) {
            return true;
        }
        var map = mapBrowserEvent.map;
        var view = map.getView();
        view.endInteraction(this.duration_);
        return false;
    };
    /**
     * Handle pointer down events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @return {boolean} If the event was consumed.
     */
    DragRotate.prototype.handleDownEvent = function (mapBrowserEvent) {
        if (!mouseOnly(mapBrowserEvent)) {
            return false;
        }
        if (mouseActionButton(mapBrowserEvent) &&
            this.condition_(mapBrowserEvent)) {
            var map = mapBrowserEvent.map;
            map.getView().beginInteraction();
            this.lastAngle_ = undefined;
            return true;
        }
        else {
            return false;
        }
    };
    return DragRotate;
}(Pointer));
/* harmony default export */ const interaction_DragRotate = (DragRotate);
//# sourceMappingURL=DragRotate.js.map
// EXTERNAL MODULE: ./node_modules/ol/geom/Polygon.js + 14 modules
var Polygon = __webpack_require__(1506);
;// CONCATENATED MODULE: ./node_modules/ol/render/Box.js
/**
 * @module ol/render/Box
 */
var Box_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var RenderBox = /** @class */ (function (_super) {
    Box_extends(RenderBox, _super);
    /**
     * @param {string} className CSS class name.
     */
    function RenderBox(className) {
        var _this = _super.call(this) || this;
        /**
         * @type {import("../geom/Polygon.js").default}
         * @private
         */
        _this.geometry_ = null;
        /**
         * @type {HTMLDivElement}
         * @private
         */
        _this.element_ = document.createElement('div');
        _this.element_.style.position = 'absolute';
        _this.element_.style.pointerEvents = 'auto';
        _this.element_.className = 'ol-box ' + className;
        /**
         * @private
         * @type {import("../PluggableMap.js").default|null}
         */
        _this.map_ = null;
        /**
         * @private
         * @type {import("../pixel.js").Pixel}
         */
        _this.startPixel_ = null;
        /**
         * @private
         * @type {import("../pixel.js").Pixel}
         */
        _this.endPixel_ = null;
        return _this;
    }
    /**
     * Clean up.
     */
    RenderBox.prototype.disposeInternal = function () {
        this.setMap(null);
    };
    /**
     * @private
     */
    RenderBox.prototype.render_ = function () {
        var startPixel = this.startPixel_;
        var endPixel = this.endPixel_;
        var px = 'px';
        var style = this.element_.style;
        style.left = Math.min(startPixel[0], endPixel[0]) + px;
        style.top = Math.min(startPixel[1], endPixel[1]) + px;
        style.width = Math.abs(endPixel[0] - startPixel[0]) + px;
        style.height = Math.abs(endPixel[1] - startPixel[1]) + px;
    };
    /**
     * @param {import("../PluggableMap.js").default|null} map Map.
     */
    RenderBox.prototype.setMap = function (map) {
        if (this.map_) {
            this.map_.getOverlayContainer().removeChild(this.element_);
            var style = this.element_.style;
            style.left = 'inherit';
            style.top = 'inherit';
            style.width = 'inherit';
            style.height = 'inherit';
        }
        this.map_ = map;
        if (this.map_) {
            this.map_.getOverlayContainer().appendChild(this.element_);
        }
    };
    /**
     * @param {import("../pixel.js").Pixel} startPixel Start pixel.
     * @param {import("../pixel.js").Pixel} endPixel End pixel.
     */
    RenderBox.prototype.setPixels = function (startPixel, endPixel) {
        this.startPixel_ = startPixel;
        this.endPixel_ = endPixel;
        this.createOrUpdateGeometry();
        this.render_();
    };
    /**
     * Creates or updates the cached geometry.
     */
    RenderBox.prototype.createOrUpdateGeometry = function () {
        var startPixel = this.startPixel_;
        var endPixel = this.endPixel_;
        var pixels = [
            startPixel,
            [startPixel[0], endPixel[1]],
            endPixel,
            [endPixel[0], startPixel[1]],
        ];
        var coordinates = pixels.map(this.map_.getCoordinateFromPixelInternal, this.map_);
        // close the polygon
        coordinates[4] = coordinates[0].slice();
        if (!this.geometry_) {
            this.geometry_ = new Polygon/* default */.ZP([coordinates]);
        }
        else {
            this.geometry_.setCoordinates([coordinates]);
        }
    };
    /**
     * @return {import("../geom/Polygon.js").default} Geometry.
     */
    RenderBox.prototype.getGeometry = function () {
        return this.geometry_;
    };
    return RenderBox;
}(Disposable/* default */.Z));
/* harmony default export */ const Box = (RenderBox);
//# sourceMappingURL=Box.js.map
;// CONCATENATED MODULE: ./node_modules/ol/interaction/DragBox.js
var DragBox_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @module ol/interaction/DragBox
 */
// FIXME draw drag box




/**
 * A function that takes a {@link module:ol/MapBrowserEvent~MapBrowserEvent} and two
 * {@link module:ol/pixel~Pixel}s and returns a `{boolean}`. If the condition is met,
 * true should be returned.
 * @typedef {function(this: ?, import("../MapBrowserEvent.js").default, import("../pixel.js").Pixel, import("../pixel.js").Pixel):boolean} EndCondition
 */
/**
 * @typedef {Object} Options
 * @property {string} [className='ol-dragbox'] CSS class name for styling the box.
 * @property {import("../events/condition.js").Condition} [condition] A function that takes an {@link module:ol/MapBrowserEvent~MapBrowserEvent} and returns a boolean
 * to indicate whether that event should be handled.
 * Default is {@link ol/events/condition~mouseActionButton}.
 * @property {number} [minArea=64] The minimum area of the box in pixel, this value is used by the default
 * `boxEndCondition` function.
 * @property {EndCondition} [boxEndCondition] A function that takes a {@link module:ol/MapBrowserEvent~MapBrowserEvent} and two
 * {@link module:ol/pixel~Pixel}s to indicate whether a `boxend` event should be fired.
 * Default is `true` if the area of the box is bigger than the `minArea` option.
 * @property {function(this:DragBox, import("../MapBrowserEvent.js").default):void} [onBoxEnd] Code to execute just
 * before `boxend` is fired.
 */
/**
 * @enum {string}
 */
var DragBoxEventType = {
    /**
     * Triggered upon drag box start.
     * @event DragBoxEvent#boxstart
     * @api
     */
    BOXSTART: 'boxstart',
    /**
     * Triggered on drag when box is active.
     * @event DragBoxEvent#boxdrag
     * @api
     */
    BOXDRAG: 'boxdrag',
    /**
     * Triggered upon drag box end.
     * @event DragBoxEvent#boxend
     * @api
     */
    BOXEND: 'boxend',
    /**
     * Triggered upon drag box canceled.
     * @event DragBoxEvent#boxcancel
     * @api
     */
    BOXCANCEL: 'boxcancel',
};
/**
 * @classdesc
 * Events emitted by {@link module:ol/interaction/DragBox~DragBox} instances are instances of
 * this type.
 */
var DragBoxEvent = /** @class */ (function (_super) {
    DragBox_extends(DragBoxEvent, _super);
    /**
     * @param {string} type The event type.
     * @param {import("../coordinate.js").Coordinate} coordinate The event coordinate.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Originating event.
     */
    function DragBoxEvent(type, coordinate, mapBrowserEvent) {
        var _this = _super.call(this, type) || this;
        /**
         * The coordinate of the drag event.
         * @const
         * @type {import("../coordinate.js").Coordinate}
         * @api
         */
        _this.coordinate = coordinate;
        /**
         * @const
         * @type {import("../MapBrowserEvent.js").default}
         * @api
         */
        _this.mapBrowserEvent = mapBrowserEvent;
        return _this;
    }
    return DragBoxEvent;
}(events_Event/* default */.ZP));

/***
 * @template Return
 * @typedef {import("../Observable").OnSignature<import("../Observable").EventTypes, import("../events/Event.js").default, Return> &
 *   import("../Observable").OnSignature<import("../ObjectEventType").Types|
 *     'change:active', import("../Object").ObjectEvent, Return> &
 *   import("../Observable").OnSignature<'boxcancel'|'boxdrag'|'boxend'|'boxstart', DragBoxEvent, Return> &
 *   import("../Observable").CombinedOnSignature<import("../Observable").EventTypes|import("../ObjectEventType").Types|
 *     'change:active'|'boxcancel'|'boxdrag'|'boxend', Return>} DragBoxOnSignature
 */
/**
 * @classdesc
 * Allows the user to draw a vector box by clicking and dragging on the map,
 * normally combined with an {@link module:ol/events/condition} that limits
 * it to when the shift or other key is held down. This is used, for example,
 * for zooming to a specific area of the map
 * (see {@link module:ol/interaction/DragZoom~DragZoom} and
 * {@link module:ol/interaction/DragRotateAndZoom~DragRotateAndZoom}).
 *
 * @fires DragBoxEvent
 * @api
 */
var DragBox = /** @class */ (function (_super) {
    DragBox_extends(DragBox, _super);
    /**
     * @param {Options} [opt_options] Options.
     */
    function DragBox(opt_options) {
        var _this = _super.call(this) || this;
        /***
         * @type {DragBoxOnSignature<import("../events").EventsKey>}
         */
        _this.on;
        /***
         * @type {DragBoxOnSignature<import("../events").EventsKey>}
         */
        _this.once;
        /***
         * @type {DragBoxOnSignature<void>}
         */
        _this.un;
        var options = opt_options ? opt_options : {};
        /**
         * @type {import("../render/Box.js").default}
         * @private
         */
        _this.box_ = new Box(options.className || 'ol-dragbox');
        /**
         * @type {number}
         * @private
         */
        _this.minArea_ = options.minArea !== undefined ? options.minArea : 64;
        if (options.onBoxEnd) {
            _this.onBoxEnd = options.onBoxEnd;
        }
        /**
         * @type {import("../pixel.js").Pixel}
         * @private
         */
        _this.startPixel_ = null;
        /**
         * @private
         * @type {import("../events/condition.js").Condition}
         */
        _this.condition_ = options.condition ? options.condition : mouseActionButton;
        /**
         * @private
         * @type {EndCondition}
         */
        _this.boxEndCondition_ = options.boxEndCondition
            ? options.boxEndCondition
            : _this.defaultBoxEndCondition;
        return _this;
    }
    /**
     * The default condition for determining whether the boxend event
     * should fire.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent The originating MapBrowserEvent
     *     leading to the box end.
     * @param {import("../pixel.js").Pixel} startPixel The starting pixel of the box.
     * @param {import("../pixel.js").Pixel} endPixel The end pixel of the box.
     * @return {boolean} Whether or not the boxend condition should be fired.
     */
    DragBox.prototype.defaultBoxEndCondition = function (mapBrowserEvent, startPixel, endPixel) {
        var width = endPixel[0] - startPixel[0];
        var height = endPixel[1] - startPixel[1];
        return width * width + height * height >= this.minArea_;
    };
    /**
     * Returns geometry of last drawn box.
     * @return {import("../geom/Polygon.js").default} Geometry.
     * @api
     */
    DragBox.prototype.getGeometry = function () {
        return this.box_.getGeometry();
    };
    /**
     * Handle pointer drag events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     */
    DragBox.prototype.handleDragEvent = function (mapBrowserEvent) {
        this.box_.setPixels(this.startPixel_, mapBrowserEvent.pixel);
        this.dispatchEvent(new DragBoxEvent(DragBoxEventType.BOXDRAG, mapBrowserEvent.coordinate, mapBrowserEvent));
    };
    /**
     * Handle pointer up events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @return {boolean} If the event was consumed.
     */
    DragBox.prototype.handleUpEvent = function (mapBrowserEvent) {
        this.box_.setMap(null);
        var completeBox = this.boxEndCondition_(mapBrowserEvent, this.startPixel_, mapBrowserEvent.pixel);
        if (completeBox) {
            this.onBoxEnd(mapBrowserEvent);
        }
        this.dispatchEvent(new DragBoxEvent(completeBox ? DragBoxEventType.BOXEND : DragBoxEventType.BOXCANCEL, mapBrowserEvent.coordinate, mapBrowserEvent));
        return false;
    };
    /**
     * Handle pointer down events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @return {boolean} If the event was consumed.
     */
    DragBox.prototype.handleDownEvent = function (mapBrowserEvent) {
        if (this.condition_(mapBrowserEvent)) {
            this.startPixel_ = mapBrowserEvent.pixel;
            this.box_.setMap(mapBrowserEvent.map);
            this.box_.setPixels(this.startPixel_, this.startPixel_);
            this.dispatchEvent(new DragBoxEvent(DragBoxEventType.BOXSTART, mapBrowserEvent.coordinate, mapBrowserEvent));
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * Function to execute just before `onboxend` is fired
     * @param {import("../MapBrowserEvent.js").default} event Event.
     */
    DragBox.prototype.onBoxEnd = function (event) { };
    return DragBox;
}(Pointer));
/* harmony default export */ const interaction_DragBox = (DragBox);
//# sourceMappingURL=DragBox.js.map
;// CONCATENATED MODULE: ./node_modules/ol/interaction/DragZoom.js
var DragZoom_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @module ol/interaction/DragZoom
 */



/**
 * @typedef {Object} Options
 * @property {string} [className='ol-dragzoom'] CSS class name for styling the
 * box.
 * @property {import("../events/condition.js").Condition} [condition] A function that
 * takes an {@link module:ol/MapBrowserEvent~MapBrowserEvent} and returns a
 * boolean to indicate whether that event should be handled.
 * Default is {@link module:ol/events/condition.shiftKeyOnly}.
 * @property {number} [duration=200] Animation duration in milliseconds.
 * @property {boolean} [out=false] Use interaction for zooming out.
 * @property {number} [minArea=64] The minimum area of the box in pixel, this value is used by the parent default
 * `boxEndCondition` function.
 */
/**
 * @classdesc
 * Allows the user to zoom the map by clicking and dragging on the map,
 * normally combined with an {@link module:ol/events/condition} that limits
 * it to when a key, shift by default, is held down.
 *
 * To change the style of the box, use CSS and the `.ol-dragzoom` selector, or
 * your custom one configured with `className`.
 * @api
 */
var DragZoom = /** @class */ (function (_super) {
    DragZoom_extends(DragZoom, _super);
    /**
     * @param {Options} [opt_options] Options.
     */
    function DragZoom(opt_options) {
        var _this = this;
        var options = opt_options ? opt_options : {};
        var condition = options.condition ? options.condition : shiftKeyOnly;
        _this = _super.call(this, {
            condition: condition,
            className: options.className || 'ol-dragzoom',
            minArea: options.minArea,
        }) || this;
        /**
         * @private
         * @type {number}
         */
        _this.duration_ = options.duration !== undefined ? options.duration : 200;
        /**
         * @private
         * @type {boolean}
         */
        _this.out_ = options.out !== undefined ? options.out : false;
        return _this;
    }
    /**
     * Function to execute just before `onboxend` is fired
     * @param {import("../MapBrowserEvent.js").default} event Event.
     */
    DragZoom.prototype.onBoxEnd = function (event) {
        var map = this.getMap();
        var view = /** @type {!import("../View.js").default} */ (map.getView());
        var geometry = this.getGeometry();
        if (this.out_) {
            var rotatedExtent = view.rotatedExtentForGeometry(geometry);
            var resolution = view.getResolutionForExtentInternal(rotatedExtent);
            var factor = view.getResolution() / resolution;
            geometry = geometry.clone();
            geometry.scale(factor * factor);
        }
        view.fitInternal(geometry, {
            duration: this.duration_,
            easing: easing/* easeOut */.Vv,
        });
    };
    return DragZoom;
}(interaction_DragBox));
/* harmony default export */ const interaction_DragZoom = (DragZoom);
//# sourceMappingURL=DragZoom.js.map
;// CONCATENATED MODULE: ./node_modules/ol/events/KeyCode.js
/**
 * @module ol/events/KeyCode
 */
/**
 * @enum {number}
 * @const
 */
/* harmony default export */ const KeyCode = ({
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
});
//# sourceMappingURL=KeyCode.js.map
;// CONCATENATED MODULE: ./node_modules/ol/interaction/KeyboardPan.js
var KeyboardPan_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @module ol/interaction/KeyboardPan
 */





/**
 * @typedef {Object} Options
 * @property {import("../events/condition.js").Condition} [condition] A function that
 * takes an {@link module:ol/MapBrowserEvent~MapBrowserEvent} and returns a
 * boolean to indicate whether that event should be handled. Default is
 * {@link module:ol/events/condition.noModifierKeys} and
 * {@link module:ol/events/condition.targetNotEditable}.
 * @property {number} [duration=100] Animation duration in milliseconds.
 * @property {number} [pixelDelta=128] The amount of pixels to pan on each key
 * press.
 */
/**
 * @classdesc
 * Allows the user to pan the map using keyboard arrows.
 * Note that, although this interaction is by default included in maps,
 * the keys can only be used when browser focus is on the element to which
 * the keyboard events are attached. By default, this is the map div,
 * though you can change this with the `keyboardEventTarget` in
 * {@link module:ol/Map~Map}. `document` never loses focus but, for any other
 * element, focus will have to be on, and returned to, this element if the keys
 * are to function.
 * See also {@link module:ol/interaction/KeyboardZoom~KeyboardZoom}.
 * @api
 */
var KeyboardPan = /** @class */ (function (_super) {
    KeyboardPan_extends(KeyboardPan, _super);
    /**
     * @param {Options} [opt_options] Options.
     */
    function KeyboardPan(opt_options) {
        var _this = _super.call(this) || this;
        var options = opt_options || {};
        /**
         * @private
         * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Browser event.
         * @return {boolean} Combined condition result.
         */
        _this.defaultCondition_ = function (mapBrowserEvent) {
            return (noModifierKeys(mapBrowserEvent) && targetNotEditable(mapBrowserEvent));
        };
        /**
         * @private
         * @type {import("../events/condition.js").Condition}
         */
        _this.condition_ =
            options.condition !== undefined
                ? options.condition
                : _this.defaultCondition_;
        /**
         * @private
         * @type {number}
         */
        _this.duration_ = options.duration !== undefined ? options.duration : 100;
        /**
         * @private
         * @type {number}
         */
        _this.pixelDelta_ =
            options.pixelDelta !== undefined ? options.pixelDelta : 128;
        return _this;
    }
    /**
     * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} if it was a
     * `KeyEvent`, and decides the direction to pan to (if an arrow key was
     * pressed).
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
     * @return {boolean} `false` to stop event propagation.
     * @this {KeyboardPan}
     */
    KeyboardPan.prototype.handleEvent = function (mapBrowserEvent) {
        var stopEvent = false;
        if (mapBrowserEvent.type == events_EventType/* default.KEYDOWN */.Z.KEYDOWN) {
            var keyEvent = /** @type {KeyboardEvent} */ (mapBrowserEvent.originalEvent);
            var keyCode = keyEvent.keyCode;
            if (this.condition_(mapBrowserEvent) &&
                (keyCode == KeyCode.DOWN ||
                    keyCode == KeyCode.LEFT ||
                    keyCode == KeyCode.RIGHT ||
                    keyCode == KeyCode.UP)) {
                var map = mapBrowserEvent.map;
                var view = map.getView();
                var mapUnitsDelta = view.getResolution() * this.pixelDelta_;
                var deltaX = 0, deltaY = 0;
                if (keyCode == KeyCode.DOWN) {
                    deltaY = -mapUnitsDelta;
                }
                else if (keyCode == KeyCode.LEFT) {
                    deltaX = -mapUnitsDelta;
                }
                else if (keyCode == KeyCode.RIGHT) {
                    deltaX = mapUnitsDelta;
                }
                else {
                    deltaY = mapUnitsDelta;
                }
                var delta = [deltaX, deltaY];
                (0,ol_coordinate/* rotate */.U1)(delta, view.getRotation());
                pan(view, delta, this.duration_);
                keyEvent.preventDefault();
                stopEvent = true;
            }
        }
        return !stopEvent;
    };
    return KeyboardPan;
}(interaction_Interaction));
/* harmony default export */ const interaction_KeyboardPan = (KeyboardPan);
//# sourceMappingURL=KeyboardPan.js.map
;// CONCATENATED MODULE: ./node_modules/ol/interaction/KeyboardZoom.js
var KeyboardZoom_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @module ol/interaction/KeyboardZoom
 */



/**
 * @typedef {Object} Options
 * @property {number} [duration=100] Animation duration in milliseconds.
 * @property {import("../events/condition.js").Condition} [condition] A function that
 * takes an {@link module:ol/MapBrowserEvent~MapBrowserEvent} and returns a
 * boolean to indicate whether that event should be handled. Default is
 * {@link module:ol/events/condition.targetNotEditable}.
 * @property {number} [delta=1] The zoom level delta on each key press.
 */
/**
 * @classdesc
 * Allows the user to zoom the map using keyboard + and -.
 * Note that, although this interaction is by default included in maps,
 * the keys can only be used when browser focus is on the element to which
 * the keyboard events are attached. By default, this is the map div,
 * though you can change this with the `keyboardEventTarget` in
 * {@link module:ol/Map~Map}. `document` never loses focus but, for any other
 * element, focus will have to be on, and returned to, this element if the keys
 * are to function.
 * See also {@link module:ol/interaction/KeyboardPan~KeyboardPan}.
 * @api
 */
var KeyboardZoom = /** @class */ (function (_super) {
    KeyboardZoom_extends(KeyboardZoom, _super);
    /**
     * @param {Options} [opt_options] Options.
     */
    function KeyboardZoom(opt_options) {
        var _this = _super.call(this) || this;
        var options = opt_options ? opt_options : {};
        /**
         * @private
         * @type {import("../events/condition.js").Condition}
         */
        _this.condition_ = options.condition ? options.condition : targetNotEditable;
        /**
         * @private
         * @type {number}
         */
        _this.delta_ = options.delta ? options.delta : 1;
        /**
         * @private
         * @type {number}
         */
        _this.duration_ = options.duration !== undefined ? options.duration : 100;
        return _this;
    }
    /**
     * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} if it was a
     * `KeyEvent`, and decides whether to zoom in or out (depending on whether the
     * key pressed was '+' or '-').
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
     * @return {boolean} `false` to stop event propagation.
     * @this {KeyboardZoom}
     */
    KeyboardZoom.prototype.handleEvent = function (mapBrowserEvent) {
        var stopEvent = false;
        if (mapBrowserEvent.type == events_EventType/* default.KEYDOWN */.Z.KEYDOWN ||
            mapBrowserEvent.type == events_EventType/* default.KEYPRESS */.Z.KEYPRESS) {
            var keyEvent = /** @type {KeyboardEvent} */ (mapBrowserEvent.originalEvent);
            var charCode = keyEvent.charCode;
            if (this.condition_(mapBrowserEvent) &&
                (charCode == '+'.charCodeAt(0) || charCode == '-'.charCodeAt(0))) {
                var map = mapBrowserEvent.map;
                var delta = charCode == '+'.charCodeAt(0) ? this.delta_ : -this.delta_;
                var view = map.getView();
                zoomByDelta(view, delta, undefined, this.duration_);
                keyEvent.preventDefault();
                stopEvent = true;
            }
        }
        return !stopEvent;
    };
    return KeyboardZoom;
}(interaction_Interaction));
/* harmony default export */ const interaction_KeyboardZoom = (KeyboardZoom);
//# sourceMappingURL=KeyboardZoom.js.map
;// CONCATENATED MODULE: ./node_modules/ol/Kinetic.js
/**
 * @module ol/Kinetic
 */
/**
 * @classdesc
 * Implementation of inertial deceleration for map movement.
 *
 * @api
 */
var Kinetic = /** @class */ (function () {
    /**
     * @param {number} decay Rate of decay (must be negative).
     * @param {number} minVelocity Minimum velocity (pixels/millisecond).
     * @param {number} delay Delay to consider to calculate the kinetic
     *     initial values (milliseconds).
     */
    function Kinetic(decay, minVelocity, delay) {
        /**
         * @private
         * @type {number}
         */
        this.decay_ = decay;
        /**
         * @private
         * @type {number}
         */
        this.minVelocity_ = minVelocity;
        /**
         * @private
         * @type {number}
         */
        this.delay_ = delay;
        /**
         * @private
         * @type {Array<number>}
         */
        this.points_ = [];
        /**
         * @private
         * @type {number}
         */
        this.angle_ = 0;
        /**
         * @private
         * @type {number}
         */
        this.initialVelocity_ = 0;
    }
    /**
     * FIXME empty description for jsdoc
     */
    Kinetic.prototype.begin = function () {
        this.points_.length = 0;
        this.angle_ = 0;
        this.initialVelocity_ = 0;
    };
    /**
     * @param {number} x X.
     * @param {number} y Y.
     */
    Kinetic.prototype.update = function (x, y) {
        this.points_.push(x, y, Date.now());
    };
    /**
     * @return {boolean} Whether we should do kinetic animation.
     */
    Kinetic.prototype.end = function () {
        if (this.points_.length < 6) {
            // at least 2 points are required (i.e. there must be at least 6 elements
            // in the array)
            return false;
        }
        var delay = Date.now() - this.delay_;
        var lastIndex = this.points_.length - 3;
        if (this.points_[lastIndex + 2] < delay) {
            // the last tracked point is too old, which means that the user stopped
            // panning before releasing the map
            return false;
        }
        // get the first point which still falls into the delay time
        var firstIndex = lastIndex - 3;
        while (firstIndex > 0 && this.points_[firstIndex + 2] > delay) {
            firstIndex -= 3;
        }
        var duration = this.points_[lastIndex + 2] - this.points_[firstIndex + 2];
        // we don't want a duration of 0 (divide by zero)
        // we also make sure the user panned for a duration of at least one frame
        // (1/60s) to compute sane displacement values
        if (duration < 1000 / 60) {
            return false;
        }
        var dx = this.points_[lastIndex] - this.points_[firstIndex];
        var dy = this.points_[lastIndex + 1] - this.points_[firstIndex + 1];
        this.angle_ = Math.atan2(dy, dx);
        this.initialVelocity_ = Math.sqrt(dx * dx + dy * dy) / duration;
        return this.initialVelocity_ > this.minVelocity_;
    };
    /**
     * @return {number} Total distance travelled (pixels).
     */
    Kinetic.prototype.getDistance = function () {
        return (this.minVelocity_ - this.initialVelocity_) / this.decay_;
    };
    /**
     * @return {number} Angle of the kinetic panning animation (radians).
     */
    Kinetic.prototype.getAngle = function () {
        return this.angle_;
    };
    return Kinetic;
}());
/* harmony default export */ const ol_Kinetic = (Kinetic);
//# sourceMappingURL=Kinetic.js.map
// EXTERNAL MODULE: ./node_modules/ol/math.js
var math = __webpack_require__(3983);
;// CONCATENATED MODULE: ./node_modules/ol/interaction/MouseWheelZoom.js
var MouseWheelZoom_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @module ol/interaction/MouseWheelZoom
 */





/**
 * @enum {string}
 */
var Mode = {
    TRACKPAD: 'trackpad',
    WHEEL: 'wheel',
};
/**
 * @typedef {Object} Options
 * @property {import("../events/condition.js").Condition} [condition] A function that
 * takes an {@link module:ol/MapBrowserEvent~MapBrowserEvent} and returns a
 * boolean to indicate whether that event should be handled. Default is
 * {@link module:ol/events/condition.always}.
 * @property {boolean} [onFocusOnly=false] When the map's target has a `tabindex` attribute set,
 * the interaction will only handle events when the map has the focus.
 * @property {number} [maxDelta=1] Maximum mouse wheel delta.
 * @property {number} [duration=250] Animation duration in milliseconds.
 * @property {number} [timeout=80] Mouse wheel timeout duration in milliseconds.
 * @property {boolean} [useAnchor=true] Enable zooming using the mouse's
 * location as the anchor. When set to `false`, zooming in and out will zoom to
 * the center of the screen instead of zooming on the mouse's location.
 * @property {boolean} [constrainResolution=false] If true, the mouse wheel zoom
 * event will always animate to the closest zoom level after an interaction;
 * false means intermediary zoom levels are allowed.
 */
/**
 * @classdesc
 * Allows the user to zoom the map by scrolling the mouse wheel.
 * @api
 */
var MouseWheelZoom = /** @class */ (function (_super) {
    MouseWheelZoom_extends(MouseWheelZoom, _super);
    /**
     * @param {Options} [opt_options] Options.
     */
    function MouseWheelZoom(opt_options) {
        var _this = this;
        var options = opt_options ? opt_options : {};
        _this = _super.call(this, 
        /** @type {import("./Interaction.js").InteractionOptions} */ (options)) || this;
        /**
         * @private
         * @type {number}
         */
        _this.totalDelta_ = 0;
        /**
         * @private
         * @type {number}
         */
        _this.lastDelta_ = 0;
        /**
         * @private
         * @type {number}
         */
        _this.maxDelta_ = options.maxDelta !== undefined ? options.maxDelta : 1;
        /**
         * @private
         * @type {number}
         */
        _this.duration_ = options.duration !== undefined ? options.duration : 250;
        /**
         * @private
         * @type {number}
         */
        _this.timeout_ = options.timeout !== undefined ? options.timeout : 80;
        /**
         * @private
         * @type {boolean}
         */
        _this.useAnchor_ =
            options.useAnchor !== undefined ? options.useAnchor : true;
        /**
         * @private
         * @type {boolean}
         */
        _this.constrainResolution_ =
            options.constrainResolution !== undefined
                ? options.constrainResolution
                : false;
        var condition = options.condition ? options.condition : always;
        /**
         * @private
         * @type {import("../events/condition.js").Condition}
         */
        _this.condition_ = options.onFocusOnly
            ? condition_all(focusWithTabindex, condition)
            : condition;
        /**
         * @private
         * @type {?import("../coordinate.js").Coordinate}
         */
        _this.lastAnchor_ = null;
        /**
         * @private
         * @type {number|undefined}
         */
        _this.startTime_ = undefined;
        /**
         * @private
         * @type {?}
         */
        _this.timeoutId_;
        /**
         * @private
         * @type {Mode|undefined}
         */
        _this.mode_ = undefined;
        /**
         * Trackpad events separated by this delay will be considered separate
         * interactions.
         * @type {number}
         */
        _this.trackpadEventGap_ = 400;
        /**
         * @type {?}
         */
        _this.trackpadTimeoutId_;
        /**
         * The number of delta values per zoom level
         * @private
         * @type {number}
         */
        _this.deltaPerZoom_ = 300;
        return _this;
    }
    /**
     * @private
     */
    MouseWheelZoom.prototype.endInteraction_ = function () {
        this.trackpadTimeoutId_ = undefined;
        var map = this.getMap();
        if (!map) {
            return;
        }
        var view = map.getView();
        view.endInteraction(undefined, this.lastDelta_ ? (this.lastDelta_ > 0 ? 1 : -1) : 0, this.lastAnchor_);
    };
    /**
     * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} (if it was a mousewheel-event) and eventually
     * zooms the map.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
     * @return {boolean} `false` to stop event propagation.
     */
    MouseWheelZoom.prototype.handleEvent = function (mapBrowserEvent) {
        if (!this.condition_(mapBrowserEvent)) {
            return true;
        }
        var type = mapBrowserEvent.type;
        if (type !== events_EventType/* default.WHEEL */.Z.WHEEL) {
            return true;
        }
        var map = mapBrowserEvent.map;
        var wheelEvent = /** @type {WheelEvent} */ (mapBrowserEvent.originalEvent);
        wheelEvent.preventDefault();
        if (this.useAnchor_) {
            this.lastAnchor_ = mapBrowserEvent.coordinate;
        }
        // Delta normalisation inspired by
        // https://github.com/mapbox/mapbox-gl-js/blob/001c7b9/js/ui/handler/scroll_zoom.js
        var delta;
        if (mapBrowserEvent.type == events_EventType/* default.WHEEL */.Z.WHEEL) {
            delta = wheelEvent.deltaY;
            if (has/* FIREFOX */.V && wheelEvent.deltaMode === WheelEvent.DOM_DELTA_PIXEL) {
                delta /= has/* DEVICE_PIXEL_RATIO */.MP;
            }
            if (wheelEvent.deltaMode === WheelEvent.DOM_DELTA_LINE) {
                delta *= 40;
            }
        }
        if (delta === 0) {
            return false;
        }
        else {
            this.lastDelta_ = delta;
        }
        var now = Date.now();
        if (this.startTime_ === undefined) {
            this.startTime_ = now;
        }
        if (!this.mode_ || now - this.startTime_ > this.trackpadEventGap_) {
            this.mode_ = Math.abs(delta) < 4 ? Mode.TRACKPAD : Mode.WHEEL;
        }
        var view = map.getView();
        if (this.mode_ === Mode.TRACKPAD &&
            !(view.getConstrainResolution() || this.constrainResolution_)) {
            if (this.trackpadTimeoutId_) {
                clearTimeout(this.trackpadTimeoutId_);
            }
            else {
                if (view.getAnimating()) {
                    view.cancelAnimations();
                }
                view.beginInteraction();
            }
            this.trackpadTimeoutId_ = setTimeout(this.endInteraction_.bind(this), this.timeout_);
            view.adjustZoom(-delta / this.deltaPerZoom_, this.lastAnchor_);
            this.startTime_ = now;
            return false;
        }
        this.totalDelta_ += delta;
        var timeLeft = Math.max(this.timeout_ - (now - this.startTime_), 0);
        clearTimeout(this.timeoutId_);
        this.timeoutId_ = setTimeout(this.handleWheelZoom_.bind(this, map), timeLeft);
        return false;
    };
    /**
     * @private
     * @param {import("../PluggableMap.js").default} map Map.
     */
    MouseWheelZoom.prototype.handleWheelZoom_ = function (map) {
        var view = map.getView();
        if (view.getAnimating()) {
            view.cancelAnimations();
        }
        var delta = -(0,math/* clamp */.uZ)(this.totalDelta_, -this.maxDelta_ * this.deltaPerZoom_, this.maxDelta_ * this.deltaPerZoom_) / this.deltaPerZoom_;
        if (view.getConstrainResolution() || this.constrainResolution_) {
            // view has a zoom constraint, zoom by 1
            delta = delta ? (delta > 0 ? 1 : -1) : 0;
        }
        zoomByDelta(view, delta, this.lastAnchor_, this.duration_);
        this.mode_ = undefined;
        this.totalDelta_ = 0;
        this.lastAnchor_ = null;
        this.startTime_ = undefined;
        this.timeoutId_ = undefined;
    };
    /**
     * Enable or disable using the mouse's location as an anchor when zooming
     * @param {boolean} useAnchor true to zoom to the mouse's location, false
     * to zoom to the center of the map
     * @api
     */
    MouseWheelZoom.prototype.setMouseAnchor = function (useAnchor) {
        this.useAnchor_ = useAnchor;
        if (!useAnchor) {
            this.lastAnchor_ = null;
        }
    };
    return MouseWheelZoom;
}(interaction_Interaction));
/* harmony default export */ const interaction_MouseWheelZoom = (MouseWheelZoom);
//# sourceMappingURL=MouseWheelZoom.js.map
;// CONCATENATED MODULE: ./node_modules/ol/interaction/PinchRotate.js
var PinchRotate_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @module ol/interaction/PinchRotate
 */



/**
 * @typedef {Object} Options
 * @property {number} [duration=250] The duration of the animation in
 * milliseconds.
 * @property {number} [threshold=0.3] Minimal angle in radians to start a rotation.
 */
/**
 * @classdesc
 * Allows the user to rotate the map by twisting with two fingers
 * on a touch screen.
 * @api
 */
var PinchRotate = /** @class */ (function (_super) {
    PinchRotate_extends(PinchRotate, _super);
    /**
     * @param {Options} [opt_options] Options.
     */
    function PinchRotate(opt_options) {
        var _this = this;
        var options = opt_options ? opt_options : {};
        var pointerOptions = /** @type {import("./Pointer.js").Options} */ (options);
        if (!pointerOptions.stopDown) {
            pointerOptions.stopDown = functions/* FALSE */.Dv;
        }
        _this = _super.call(this, pointerOptions) || this;
        /**
         * @private
         * @type {import("../coordinate.js").Coordinate}
         */
        _this.anchor_ = null;
        /**
         * @private
         * @type {number|undefined}
         */
        _this.lastAngle_ = undefined;
        /**
         * @private
         * @type {boolean}
         */
        _this.rotating_ = false;
        /**
         * @private
         * @type {number}
         */
        _this.rotationDelta_ = 0.0;
        /**
         * @private
         * @type {number}
         */
        _this.threshold_ = options.threshold !== undefined ? options.threshold : 0.3;
        /**
         * @private
         * @type {number}
         */
        _this.duration_ = options.duration !== undefined ? options.duration : 250;
        return _this;
    }
    /**
     * Handle pointer drag events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     */
    PinchRotate.prototype.handleDragEvent = function (mapBrowserEvent) {
        var rotationDelta = 0.0;
        var touch0 = this.targetPointers[0];
        var touch1 = this.targetPointers[1];
        // angle between touches
        var angle = Math.atan2(touch1.clientY - touch0.clientY, touch1.clientX - touch0.clientX);
        if (this.lastAngle_ !== undefined) {
            var delta = angle - this.lastAngle_;
            this.rotationDelta_ += delta;
            if (!this.rotating_ && Math.abs(this.rotationDelta_) > this.threshold_) {
                this.rotating_ = true;
            }
            rotationDelta = delta;
        }
        this.lastAngle_ = angle;
        var map = mapBrowserEvent.map;
        var view = map.getView();
        if (view.getConstraints().rotation === rotationconstraint/* disable */.h$) {
            return;
        }
        // rotate anchor point.
        // FIXME: should be the intersection point between the lines:
        //     touch0,touch1 and previousTouch0,previousTouch1
        var viewportPosition = map.getViewport().getBoundingClientRect();
        var centroid = Pointer_centroid(this.targetPointers);
        centroid[0] -= viewportPosition.left;
        centroid[1] -= viewportPosition.top;
        this.anchor_ = map.getCoordinateFromPixelInternal(centroid);
        // rotate
        if (this.rotating_) {
            map.render();
            view.adjustRotationInternal(rotationDelta, this.anchor_);
        }
    };
    /**
     * Handle pointer up events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @return {boolean} If the event was consumed.
     */
    PinchRotate.prototype.handleUpEvent = function (mapBrowserEvent) {
        if (this.targetPointers.length < 2) {
            var map = mapBrowserEvent.map;
            var view = map.getView();
            view.endInteraction(this.duration_);
            return false;
        }
        else {
            return true;
        }
    };
    /**
     * Handle pointer down events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @return {boolean} If the event was consumed.
     */
    PinchRotate.prototype.handleDownEvent = function (mapBrowserEvent) {
        if (this.targetPointers.length >= 2) {
            var map = mapBrowserEvent.map;
            this.anchor_ = null;
            this.lastAngle_ = undefined;
            this.rotating_ = false;
            this.rotationDelta_ = 0.0;
            if (!this.handlingDownUpSequence) {
                map.getView().beginInteraction();
            }
            return true;
        }
        else {
            return false;
        }
    };
    return PinchRotate;
}(Pointer));
/* harmony default export */ const interaction_PinchRotate = (PinchRotate);
//# sourceMappingURL=PinchRotate.js.map
;// CONCATENATED MODULE: ./node_modules/ol/interaction/PinchZoom.js
var PinchZoom_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @module ol/interaction/PinchZoom
 */


/**
 * @typedef {Object} Options
 * @property {number} [duration=400] Animation duration in milliseconds.
 */
/**
 * @classdesc
 * Allows the user to zoom the map by pinching with two fingers
 * on a touch screen.
 * @api
 */
var PinchZoom = /** @class */ (function (_super) {
    PinchZoom_extends(PinchZoom, _super);
    /**
     * @param {Options} [opt_options] Options.
     */
    function PinchZoom(opt_options) {
        var _this = this;
        var options = opt_options ? opt_options : {};
        var pointerOptions = /** @type {import("./Pointer.js").Options} */ (options);
        if (!pointerOptions.stopDown) {
            pointerOptions.stopDown = functions/* FALSE */.Dv;
        }
        _this = _super.call(this, pointerOptions) || this;
        /**
         * @private
         * @type {import("../coordinate.js").Coordinate}
         */
        _this.anchor_ = null;
        /**
         * @private
         * @type {number}
         */
        _this.duration_ = options.duration !== undefined ? options.duration : 400;
        /**
         * @private
         * @type {number|undefined}
         */
        _this.lastDistance_ = undefined;
        /**
         * @private
         * @type {number}
         */
        _this.lastScaleDelta_ = 1;
        return _this;
    }
    /**
     * Handle pointer drag events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     */
    PinchZoom.prototype.handleDragEvent = function (mapBrowserEvent) {
        var scaleDelta = 1.0;
        var touch0 = this.targetPointers[0];
        var touch1 = this.targetPointers[1];
        var dx = touch0.clientX - touch1.clientX;
        var dy = touch0.clientY - touch1.clientY;
        // distance between touches
        var distance = Math.sqrt(dx * dx + dy * dy);
        if (this.lastDistance_ !== undefined) {
            scaleDelta = this.lastDistance_ / distance;
        }
        this.lastDistance_ = distance;
        var map = mapBrowserEvent.map;
        var view = map.getView();
        if (scaleDelta != 1.0) {
            this.lastScaleDelta_ = scaleDelta;
        }
        // scale anchor point.
        var viewportPosition = map.getViewport().getBoundingClientRect();
        var centroid = Pointer_centroid(this.targetPointers);
        centroid[0] -= viewportPosition.left;
        centroid[1] -= viewportPosition.top;
        this.anchor_ = map.getCoordinateFromPixelInternal(centroid);
        // scale, bypass the resolution constraint
        map.render();
        view.adjustResolutionInternal(scaleDelta, this.anchor_);
    };
    /**
     * Handle pointer up events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @return {boolean} If the event was consumed.
     */
    PinchZoom.prototype.handleUpEvent = function (mapBrowserEvent) {
        if (this.targetPointers.length < 2) {
            var map = mapBrowserEvent.map;
            var view = map.getView();
            var direction = this.lastScaleDelta_ > 1 ? 1 : -1;
            view.endInteraction(this.duration_, direction);
            return false;
        }
        else {
            return true;
        }
    };
    /**
     * Handle pointer down events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @return {boolean} If the event was consumed.
     */
    PinchZoom.prototype.handleDownEvent = function (mapBrowserEvent) {
        if (this.targetPointers.length >= 2) {
            var map = mapBrowserEvent.map;
            this.anchor_ = null;
            this.lastDistance_ = undefined;
            this.lastScaleDelta_ = 1;
            if (!this.handlingDownUpSequence) {
                map.getView().beginInteraction();
            }
            return true;
        }
        else {
            return false;
        }
    };
    return PinchZoom;
}(Pointer));
/* harmony default export */ const interaction_PinchZoom = (PinchZoom);
//# sourceMappingURL=PinchZoom.js.map
;// CONCATENATED MODULE: ./node_modules/ol/interaction.js
/**
 * @module ol/interaction
 */































/**
 * @typedef {Object} DefaultsOptions
 * @property {boolean} [altShiftDragRotate=true] Whether Alt-Shift-drag rotate is
 * desired.
 * @property {boolean} [onFocusOnly=false] Interact only when the map has the
 * focus. This affects the `MouseWheelZoom` and `DragPan` interactions and is
 * useful when page scroll is desired for maps that do not have the browser's
 * focus.
 * @property {boolean} [doubleClickZoom=true] Whether double click zoom is
 * desired.
 * @property {boolean} [keyboard=true] Whether keyboard interaction is desired.
 * @property {boolean} [mouseWheelZoom=true] Whether mousewheel zoom is desired.
 * @property {boolean} [shiftDragZoom=true] Whether Shift-drag zoom is desired.
 * @property {boolean} [dragPan=true] Whether drag pan is desired.
 * @property {boolean} [pinchRotate=true] Whether pinch rotate is desired.
 * @property {boolean} [pinchZoom=true] Whether pinch zoom is desired.
 * @property {number} [zoomDelta] Zoom level delta when using keyboard or double click zoom.
 * @property {number} [zoomDuration] Duration of the zoom animation in
 * milliseconds.
 */
/**
 * Set of interactions included in maps by default. Specific interactions can be
 * excluded by setting the appropriate option to false in the constructor
 * options, but the order of the interactions is fixed.  If you want to specify
 * a different order for interactions, you will need to create your own
 * {@link module:ol/interaction/Interaction~Interaction} instances and insert
 * them into a {@link module:ol/Collection~Collection} in the order you want
 * before creating your {@link module:ol/Map~Map} instance. Changing the order can
 * be of interest if the event propagation needs to be stopped at a point.
 * The default set of interactions, in sequence, is:
 * * {@link module:ol/interaction/DragRotate~DragRotate}
 * * {@link module:ol/interaction/DoubleClickZoom~DoubleClickZoom}
 * * {@link module:ol/interaction/DragPan~DragPan}
 * * {@link module:ol/interaction/PinchRotate~PinchRotate}
 * * {@link module:ol/interaction/PinchZoom~PinchZoom}
 * * {@link module:ol/interaction/KeyboardPan~KeyboardPan}
 * * {@link module:ol/interaction/KeyboardZoom~KeyboardZoom}
 * * {@link module:ol/interaction/MouseWheelZoom~MouseWheelZoom}
 * * {@link module:ol/interaction/DragZoom~DragZoom}
 *
 * @param {DefaultsOptions} [opt_options] Defaults options.
 * @return {import("./Collection.js").default<import("./interaction/Interaction.js").default>}
 * A collection of interactions to be used with the {@link module:ol/Map~Map}
 * constructor's `interactions` option.
 * @api
 */
function interaction_defaults(opt_options) {
    var options = opt_options ? opt_options : {};
    var interactions = new ol_Collection();
    var kinetic = new ol_Kinetic(-0.005, 0.05, 100);
    var altShiftDragRotate = options.altShiftDragRotate !== undefined
        ? options.altShiftDragRotate
        : true;
    if (altShiftDragRotate) {
        interactions.push(new interaction_DragRotate());
    }
    var doubleClickZoom = options.doubleClickZoom !== undefined ? options.doubleClickZoom : true;
    if (doubleClickZoom) {
        interactions.push(new interaction_DoubleClickZoom({
            delta: options.zoomDelta,
            duration: options.zoomDuration,
        }));
    }
    var dragPan = options.dragPan !== undefined ? options.dragPan : true;
    if (dragPan) {
        interactions.push(new interaction_DragPan({
            onFocusOnly: options.onFocusOnly,
            kinetic: kinetic,
        }));
    }
    var pinchRotate = options.pinchRotate !== undefined ? options.pinchRotate : true;
    if (pinchRotate) {
        interactions.push(new interaction_PinchRotate());
    }
    var pinchZoom = options.pinchZoom !== undefined ? options.pinchZoom : true;
    if (pinchZoom) {
        interactions.push(new interaction_PinchZoom({
            duration: options.zoomDuration,
        }));
    }
    var keyboard = options.keyboard !== undefined ? options.keyboard : true;
    if (keyboard) {
        interactions.push(new interaction_KeyboardPan());
        interactions.push(new interaction_KeyboardZoom({
            delta: options.zoomDelta,
            duration: options.zoomDuration,
        }));
    }
    var mouseWheelZoom = options.mouseWheelZoom !== undefined ? options.mouseWheelZoom : true;
    if (mouseWheelZoom) {
        interactions.push(new interaction_MouseWheelZoom({
            onFocusOnly: options.onFocusOnly,
            duration: options.zoomDuration,
        }));
    }
    var shiftDragZoom = options.shiftDragZoom !== undefined ? options.shiftDragZoom : true;
    if (shiftDragZoom) {
        interactions.push(new interaction_DragZoom({
            duration: options.zoomDuration,
        }));
    }
    return interactions;
}
//# sourceMappingURL=interaction.js.map
;// CONCATENATED MODULE: ./node_modules/ol/Map.js
var Map_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @module ol/Map
 */





/**
 * @classdesc
 * The map is the core component of OpenLayers. For a map to render, a view,
 * one or more layers, and a target container are needed:
 *
 *     import Map from 'ol/Map';
 *     import View from 'ol/View';
 *     import TileLayer from 'ol/layer/Tile';
 *     import OSM from 'ol/source/OSM';
 *
 *     var map = new Map({
 *       view: new View({
 *         center: [0, 0],
 *         zoom: 1
 *       }),
 *       layers: [
 *         new TileLayer({
 *           source: new OSM()
 *         })
 *       ],
 *       target: 'map'
 *     });
 *
 * The above snippet creates a map using a {@link module:ol/layer/Tile~TileLayer} to
 * display {@link module:ol/source/OSM~OSM} OSM data and render it to a DOM
 * element with the id `map`.
 *
 * The constructor places a viewport container (with CSS class name
 * `ol-viewport`) in the target element (see `getViewport()`), and then two
 * further elements within the viewport: one with CSS class name
 * `ol-overlaycontainer-stopevent` for controls and some overlays, and one with
 * CSS class name `ol-overlaycontainer` for other overlays (see the `stopEvent`
 * option of {@link module:ol/Overlay~Overlay} for the difference). The map
 * itself is placed in a further element within the viewport.
 *
 * Layers are stored as a {@link module:ol/Collection~Collection} in
 * layerGroups. A top-level group is provided by the library. This is what is
 * accessed by `getLayerGroup` and `setLayerGroup`. Layers entered in the
 * options are added to this group, and `addLayer` and `removeLayer` change the
 * layer collection in the group. `getLayers` is a convenience function for
 * `getLayerGroup().getLayers()`. Note that {@link module:ol/layer/Group~LayerGroup}
 * is a subclass of {@link module:ol/layer/Base~BaseLayer}, so layers entered in the
 * options or added with `addLayer` can be groups, which can contain further
 * groups, and so on.
 *
 * @api
 */
var Map_Map = /** @class */ (function (_super) {
    Map_extends(Map, _super);
    /**
     * @param {import("./PluggableMap.js").MapOptions} options Map options.
     */
    function Map(options) {
        options = (0,obj/* assign */.f0)({}, options);
        if (!options.controls) {
            options.controls = defaults();
        }
        if (!options.interactions) {
            options.interactions = interaction_defaults({
                onFocusOnly: true,
            });
        }
        return _super.call(this, options) || this;
    }
    Map.prototype.createRenderer = function () {
        return new Composite(this);
    };
    return Map;
}(ol_PluggableMap));
/* harmony default export */ const ol_Map = (Map_Map);
//# sourceMappingURL=Map.js.map

/***/ }),

/***/ 2971:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export ObjectEvent */
/* harmony import */ var _events_Event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(291);
/* harmony import */ var _ObjectEventType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5990);
/* harmony import */ var _Observable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2706);
/* harmony import */ var _obj_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9374);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4187);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @module ol/Object
 */





/**
 * @classdesc
 * Events emitted by {@link module:ol/Object~BaseObject} instances are instances of this type.
 */
var ObjectEvent = /** @class */ (function (_super) {
    __extends(ObjectEvent, _super);
    /**
     * @param {string} type The event type.
     * @param {string} key The property name.
     * @param {*} oldValue The old value for `key`.
     */
    function ObjectEvent(type, key, oldValue) {
        var _this = _super.call(this, type) || this;
        /**
         * The name of the property whose value is changing.
         * @type {string}
         * @api
         */
        _this.key = key;
        /**
         * The old value. To get the new value use `e.target.get(e.key)` where
         * `e` is the event object.
         * @type {*}
         * @api
         */
        _this.oldValue = oldValue;
        return _this;
    }
    return ObjectEvent;
}(_events_Event_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP));

/***
 * @template Return
 * @typedef {import("./Observable").OnSignature<import("./Observable").EventTypes, import("./events/Event.js").default, Return> &
 *    import("./Observable").OnSignature<import("./ObjectEventType").Types, ObjectEvent, Return> &
 *    import("./Observable").CombinedOnSignature<import("./Observable").EventTypes|import("./ObjectEventType").Types, Return>} ObjectOnSignature
 */
/**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * Most non-trivial classes inherit from this.
 *
 * This extends {@link module:ol/Observable~Observable} with observable
 * properties, where each property is observable as well as the object as a
 * whole.
 *
 * Classes that inherit from this have pre-defined properties, to which you can
 * add your owns. The pre-defined properties are listed in this documentation as
 * 'Observable Properties', and have their own accessors; for example,
 * {@link module:ol/Map~Map} has a `target` property, accessed with
 * `getTarget()` and changed with `setTarget()`. Not all properties are however
 * settable. There are also general-purpose accessors `get()` and `set()`. For
 * example, `get('target')` is equivalent to `getTarget()`.
 *
 * The `set` accessors trigger a change event, and you can monitor this by
 * registering a listener. For example, {@link module:ol/View~View} has a
 * `center` property, so `view.on('change:center', function(evt) {...});` would
 * call the function whenever the value of the center property changes. Within
 * the function, `evt.target` would be the view, so `evt.target.getCenter()`
 * would return the new center.
 *
 * You can add your own observable properties with
 * `object.set('prop', 'value')`, and retrieve that with `object.get('prop')`.
 * You can listen for changes on that property value with
 * `object.on('change:prop', listener)`. You can get a list of all
 * properties with {@link module:ol/Object~BaseObject#getProperties}.
 *
 * Note that the observable properties are separate from standard JS properties.
 * You can, for example, give your map object a title with
 * `map.title='New title'` and with `map.set('title', 'Another title')`. The
 * first will be a `hasOwnProperty`; the second will appear in
 * `getProperties()`. Only the second is observable.
 *
 * Properties can be deleted by using the unset method. E.g.
 * object.unset('foo').
 *
 * @fires ObjectEvent
 * @api
 */
var BaseObject = /** @class */ (function (_super) {
    __extends(BaseObject, _super);
    /**
     * @param {Object<string, *>} [opt_values] An object with key-value pairs.
     */
    function BaseObject(opt_values) {
        var _this = _super.call(this) || this;
        /***
         * @type {ObjectOnSignature<import("./events").EventsKey>}
         */
        _this.on;
        /***
         * @type {ObjectOnSignature<import("./events").EventsKey>}
         */
        _this.once;
        /***
         * @type {ObjectOnSignature<void>}
         */
        _this.un;
        // Call {@link module:ol/util.getUid} to ensure that the order of objects' ids is
        // the same as the order in which they were created.  This also helps to
        // ensure that object properties are always added in the same order, which
        // helps many JavaScript engines generate faster code.
        (0,_util_js__WEBPACK_IMPORTED_MODULE_1__/* .getUid */ .sq)(_this);
        /**
         * @private
         * @type {Object<string, *>}
         */
        _this.values_ = null;
        if (opt_values !== undefined) {
            _this.setProperties(opt_values);
        }
        return _this;
    }
    /**
     * Gets a value.
     * @param {string} key Key name.
     * @return {*} Value.
     * @api
     */
    BaseObject.prototype.get = function (key) {
        var value;
        if (this.values_ && this.values_.hasOwnProperty(key)) {
            value = this.values_[key];
        }
        return value;
    };
    /**
     * Get a list of object property names.
     * @return {Array<string>} List of property names.
     * @api
     */
    BaseObject.prototype.getKeys = function () {
        return (this.values_ && Object.keys(this.values_)) || [];
    };
    /**
     * Get an object of all property names and values.
     * @return {Object<string, *>} Object.
     * @api
     */
    BaseObject.prototype.getProperties = function () {
        return (this.values_ && (0,_obj_js__WEBPACK_IMPORTED_MODULE_2__/* .assign */ .f0)({}, this.values_)) || {};
    };
    /**
     * @return {boolean} The object has properties.
     */
    BaseObject.prototype.hasProperties = function () {
        return !!this.values_;
    };
    /**
     * @param {string} key Key name.
     * @param {*} oldValue Old value.
     */
    BaseObject.prototype.notify = function (key, oldValue) {
        var eventType;
        eventType = "change:".concat(key);
        if (this.hasListener(eventType)) {
            this.dispatchEvent(new ObjectEvent(eventType, key, oldValue));
        }
        eventType = _ObjectEventType_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"].PROPERTYCHANGE */ .Z.PROPERTYCHANGE;
        if (this.hasListener(eventType)) {
            this.dispatchEvent(new ObjectEvent(eventType, key, oldValue));
        }
    };
    /**
     * @param {string} key Key name.
     * @param {import("./events.js").Listener} listener Listener.
     */
    BaseObject.prototype.addChangeListener = function (key, listener) {
        this.addEventListener("change:".concat(key), listener);
    };
    /**
     * @param {string} key Key name.
     * @param {import("./events.js").Listener} listener Listener.
     */
    BaseObject.prototype.removeChangeListener = function (key, listener) {
        this.removeEventListener("change:".concat(key), listener);
    };
    /**
     * Sets a value.
     * @param {string} key Key name.
     * @param {*} value Value.
     * @param {boolean} [opt_silent] Update without triggering an event.
     * @api
     */
    BaseObject.prototype.set = function (key, value, opt_silent) {
        var values = this.values_ || (this.values_ = {});
        if (opt_silent) {
            values[key] = value;
        }
        else {
            var oldValue = values[key];
            values[key] = value;
            if (oldValue !== value) {
                this.notify(key, oldValue);
            }
        }
    };
    /**
     * Sets a collection of key-value pairs.  Note that this changes any existing
     * properties and adds new ones (it does not remove any existing properties).
     * @param {Object<string, *>} values Values.
     * @param {boolean} [opt_silent] Update without triggering an event.
     * @api
     */
    BaseObject.prototype.setProperties = function (values, opt_silent) {
        for (var key in values) {
            this.set(key, values[key], opt_silent);
        }
    };
    /**
     * Apply any properties from another object without triggering events.
     * @param {BaseObject} source The source object.
     * @protected
     */
    BaseObject.prototype.applyProperties = function (source) {
        if (!source.values_) {
            return;
        }
        (0,_obj_js__WEBPACK_IMPORTED_MODULE_2__/* .assign */ .f0)(this.values_ || (this.values_ = {}), source.values_);
    };
    /**
     * Unsets a property.
     * @param {string} key Key name.
     * @param {boolean} [opt_silent] Unset without triggering an event.
     * @api
     */
    BaseObject.prototype.unset = function (key, opt_silent) {
        if (this.values_ && key in this.values_) {
            var oldValue = this.values_[key];
            delete this.values_[key];
            if ((0,_obj_js__WEBPACK_IMPORTED_MODULE_2__/* .isEmpty */ .xb)(this.values_)) {
                this.values_ = null;
            }
            if (!opt_silent) {
                this.notify(key, oldValue);
            }
        }
    };
    return BaseObject;
}(_Observable_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseObject);
//# sourceMappingURL=Object.js.map

/***/ }),

/***/ 5990:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @module ol/ObjectEventType
 */
/**
 * @enum {string}
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    /**
     * Triggered when a property is changed.
     * @event module:ol/Object.ObjectEvent#propertychange
     * @api
     */
    PROPERTYCHANGE: 'propertychange',
});
/**
 * @typedef {'propertychange'} Types
 */
//# sourceMappingURL=ObjectEventType.js.map

/***/ }),

/***/ 2706:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export unByKey */
/* harmony import */ var _events_Target_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(208);
/* harmony import */ var _events_EventType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5487);
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5818);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @module ol/Observable
 */



/***
 * @template {string} Type
 * @template {Event|import("./events/Event.js").default} EventClass
 * @template Return
 * @typedef {(type: Type, listener: (event: EventClass) => ?) => Return} OnSignature
 */
/***
 * @template {string} Type
 * @template Return
 * @typedef {(type: Type[], listener: (event: Event|import("./events/Event").default) => ?) => Return extends void ? void : Return[]} CombinedOnSignature
 */
/**
 * @typedef {'change'|'error'} EventTypes
 */
/***
 * @template Return
 * @typedef {OnSignature<EventTypes, import("./events/Event.js").default, Return> & CombinedOnSignature<EventTypes, Return>} ObservableOnSignature
 */
/**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * An event target providing convenient methods for listener registration
 * and unregistration. A generic `change` event is always available through
 * {@link module:ol/Observable~Observable#changed}.
 *
 * @fires import("./events/Event.js").default
 * @api
 */
var Observable = /** @class */ (function (_super) {
    __extends(Observable, _super);
    function Observable() {
        var _this = _super.call(this) || this;
        _this.on =
            /** @type {ObservableOnSignature<import("./events").EventsKey>} */ (_this.onInternal);
        _this.once =
            /** @type {ObservableOnSignature<import("./events").EventsKey>} */ (_this.onceInternal);
        _this.un = /** @type {ObservableOnSignature<void>} */ (_this.unInternal);
        /**
         * @private
         * @type {number}
         */
        _this.revision_ = 0;
        return _this;
    }
    /**
     * Increases the revision counter and dispatches a 'change' event.
     * @api
     */
    Observable.prototype.changed = function () {
        ++this.revision_;
        this.dispatchEvent(_events_EventType_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].CHANGE */ .Z.CHANGE);
    };
    /**
     * Get the version number for this object.  Each time the object is modified,
     * its version number will be incremented.
     * @return {number} Revision.
     * @api
     */
    Observable.prototype.getRevision = function () {
        return this.revision_;
    };
    /**
     * @param {string|Array<string>} type Type.
     * @param {function((Event|import("./events/Event").default)): ?} listener Listener.
     * @return {import("./events.js").EventsKey|Array<import("./events.js").EventsKey>} Event key.
     * @protected
     */
    Observable.prototype.onInternal = function (type, listener) {
        if (Array.isArray(type)) {
            var len = type.length;
            var keys = new Array(len);
            for (var i = 0; i < len; ++i) {
                keys[i] = (0,_events_js__WEBPACK_IMPORTED_MODULE_1__/* .listen */ .oL)(this, type[i], listener);
            }
            return keys;
        }
        else {
            return (0,_events_js__WEBPACK_IMPORTED_MODULE_1__/* .listen */ .oL)(this, /** @type {string} */ (type), listener);
        }
    };
    /**
     * @param {string|Array<string>} type Type.
     * @param {function((Event|import("./events/Event").default)): ?} listener Listener.
     * @return {import("./events.js").EventsKey|Array<import("./events.js").EventsKey>} Event key.
     * @protected
     */
    Observable.prototype.onceInternal = function (type, listener) {
        var key;
        if (Array.isArray(type)) {
            var len = type.length;
            key = new Array(len);
            for (var i = 0; i < len; ++i) {
                key[i] = (0,_events_js__WEBPACK_IMPORTED_MODULE_1__/* .listenOnce */ .Vx)(this, type[i], listener);
            }
        }
        else {
            key = (0,_events_js__WEBPACK_IMPORTED_MODULE_1__/* .listenOnce */ .Vx)(this, /** @type {string} */ (type), listener);
        }
        /** @type {Object} */ (listener).ol_key = key;
        return key;
    };
    /**
     * Unlisten for a certain type of event.
     * @param {string|Array<string>} type Type.
     * @param {function((Event|import("./events/Event").default)): ?} listener Listener.
     * @protected
     */
    Observable.prototype.unInternal = function (type, listener) {
        var key = /** @type {Object} */ (listener).ol_key;
        if (key) {
            unByKey(key);
        }
        else if (Array.isArray(type)) {
            for (var i = 0, ii = type.length; i < ii; ++i) {
                this.removeEventListener(type[i], listener);
            }
        }
        else {
            this.removeEventListener(type, listener);
        }
    };
    return Observable;
}(_events_Target_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z));
/**
 * Listen for a certain type of event.
 * @function
 * @param {string|Array<string>} type The event type or array of event types.
 * @param {function((Event|import("./events/Event").default)): ?} listener The listener function.
 * @return {import("./events.js").EventsKey|Array<import("./events.js").EventsKey>} Unique key for the listener. If
 *     called with an array of event types as the first argument, the return
 *     will be an array of keys.
 * @api
 */
Observable.prototype.on;
/**
 * Listen once for a certain type of event.
 * @function
 * @param {string|Array<string>} type The event type or array of event types.
 * @param {function((Event|import("./events/Event").default)): ?} listener The listener function.
 * @return {import("./events.js").EventsKey|Array<import("./events.js").EventsKey>} Unique key for the listener. If
 *     called with an array of event types as the first argument, the return
 *     will be an array of keys.
 * @api
 */
Observable.prototype.once;
/**
 * Unlisten for a certain type of event.
 * @function
 * @param {string|Array<string>} type The event type or array of event types.
 * @param {function((Event|import("./events/Event").default)): ?} listener The listener function.
 * @api
 */
Observable.prototype.un;
/**
 * Removes an event listener using the key returned by `on()` or `once()`.
 * @param {import("./events.js").EventsKey|Array<import("./events.js").EventsKey>} key The key returned by `on()`
 *     or `once()` (or an array of keys).
 * @api
 */
function unByKey(key) {
    if (Array.isArray(key)) {
        for (var i = 0, ii = key.length; i < ii; ++i) {
            (0,_events_js__WEBPACK_IMPORTED_MODULE_1__/* .unlistenByKey */ .bN)(key[i]);
        }
    }
    else {
        (0,_events_js__WEBPACK_IMPORTED_MODULE_1__/* .unlistenByKey */ .bN)(/** @type {import("./events.js").EventsKey} */ (key));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Observable);
//# sourceMappingURL=Observable.js.map

/***/ }),

/***/ 4806:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _events_Target_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(208);
/* harmony import */ var _events_EventType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5487);
/* harmony import */ var _TileState_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7195);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4187);
/* harmony import */ var _easing_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1015);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @module ol/Tile
 */





/**
 * A function that takes an {@link module:ol/Tile~Tile} for the tile and a
 * `{string}` for the url as arguments. The default is
 * ```js
 * source.setTileLoadFunction(function(tile, src) {
 *   tile.getImage().src = src;
 * });
 * ```
 * For more fine grained control, the load function can use fetch or XMLHttpRequest and involve
 * error handling:
 *
 * ```js
 * import TileState from 'ol/TileState';
 *
 * source.setTileLoadFunction(function(tile, src) {
 *   var xhr = new XMLHttpRequest();
 *   xhr.responseType = 'blob';
 *   xhr.addEventListener('loadend', function (evt) {
 *     var data = this.response;
 *     if (data !== undefined) {
 *       tile.getImage().src = URL.createObjectURL(data);
 *     } else {
 *       tile.setState(TileState.ERROR);
 *     }
 *   });
 *   xhr.addEventListener('error', function () {
 *     tile.setState(TileState.ERROR);
 *   });
 *   xhr.open('GET', src);
 *   xhr.send();
 * });
 * ```
 *
 * @typedef {function(Tile, string): void} LoadFunction
 * @api
 */
/**
 * {@link module:ol/source/Tile~TileSource} sources use a function of this type to get
 * the url that provides a tile for a given tile coordinate.
 *
 * This function takes an {@link module:ol/tilecoord~TileCoord} for the tile
 * coordinate, a `{number}` representing the pixel ratio and a
 * {@link module:ol/proj/Projection~Projection} for the projection  as arguments
 * and returns a `{string}` representing the tile URL, or undefined if no tile
 * should be requested for the passed tile coordinate.
 *
 * @typedef {function(import("./tilecoord.js").TileCoord, number,
 *           import("./proj/Projection.js").default): (string|undefined)} UrlFunction
 * @api
 */
/**
 * @typedef {Object} Options
 * @property {number} [transition=250] A duration for tile opacity
 * transitions in milliseconds. A duration of 0 disables the opacity transition.
 * @property {boolean} [interpolate=false] Use interpolated values when resampling.  By default,
 * the nearest neighbor is used when resampling.
 * @api
 */
/**
 * @classdesc
 * Base class for tiles.
 *
 * @abstract
 */
var Tile = /** @class */ (function (_super) {
    __extends(Tile, _super);
    /**
     * @param {import("./tilecoord.js").TileCoord} tileCoord Tile coordinate.
     * @param {import("./TileState.js").default} state State.
     * @param {Options} [opt_options] Tile options.
     */
    function Tile(tileCoord, state, opt_options) {
        var _this = _super.call(this) || this;
        var options = opt_options ? opt_options : {};
        /**
         * @type {import("./tilecoord.js").TileCoord}
         */
        _this.tileCoord = tileCoord;
        /**
         * @protected
         * @type {import("./TileState.js").default}
         */
        _this.state = state;
        /**
         * An "interim" tile for this tile. The interim tile may be used while this
         * one is loading, for "smooth" transitions when changing params/dimensions
         * on the source.
         * @type {Tile}
         */
        _this.interimTile = null;
        /**
         * A key assigned to the tile. This is used by the tile source to determine
         * if this tile can effectively be used, or if a new tile should be created
         * and this one be used as an interim tile for this new tile.
         * @type {string}
         */
        _this.key = '';
        /**
         * The duration for the opacity transition.
         * @type {number}
         */
        _this.transition_ =
            options.transition === undefined ? 250 : options.transition;
        /**
         * Lookup of start times for rendering transitions.  If the start time is
         * equal to -1, the transition is complete.
         * @type {Object<string, number>}
         */
        _this.transitionStarts_ = {};
        /**
         * @type {boolean}
         */
        _this.interpolate = !!options.interpolate;
        return _this;
    }
    /**
     * @protected
     */
    Tile.prototype.changed = function () {
        this.dispatchEvent(_events_EventType_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].CHANGE */ .Z.CHANGE);
    };
    /**
     * Called by the tile cache when the tile is removed from the cache due to expiry
     */
    Tile.prototype.release = function () { };
    /**
     * @return {string} Key.
     */
    Tile.prototype.getKey = function () {
        return this.key + '/' + this.tileCoord;
    };
    /**
     * Get the interim tile most suitable for rendering using the chain of interim
     * tiles. This corresponds to the  most recent tile that has been loaded, if no
     * such tile exists, the original tile is returned.
     * @return {!Tile} Best tile for rendering.
     */
    Tile.prototype.getInterimTile = function () {
        if (!this.interimTile) {
            //empty chain
            return this;
        }
        var tile = this.interimTile;
        // find the first loaded tile and return it. Since the chain is sorted in
        // decreasing order of creation time, there is no need to search the remainder
        // of the list (all those tiles correspond to older requests and will be
        // cleaned up by refreshInterimChain)
        do {
            if (tile.getState() == _TileState_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].LOADED */ .Z.LOADED) {
                // Show tile immediately instead of fading it in after loading, because
                // the interim tile is in place already
                this.transition_ = 0;
                return tile;
            }
            tile = tile.interimTile;
        } while (tile);
        // we can not find a better tile
        return this;
    };
    /**
     * Goes through the chain of interim tiles and discards sections of the chain
     * that are no longer relevant.
     */
    Tile.prototype.refreshInterimChain = function () {
        if (!this.interimTile) {
            return;
        }
        var tile = this.interimTile;
        /**
         * @type {Tile}
         */
        var prev = this;
        do {
            if (tile.getState() == _TileState_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].LOADED */ .Z.LOADED) {
                //we have a loaded tile, we can discard the rest of the list
                //we would could abort any LOADING tile request
                //older than this tile (i.e. any LOADING tile following this entry in the chain)
                tile.interimTile = null;
                break;
            }
            else if (tile.getState() == _TileState_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].LOADING */ .Z.LOADING) {
                //keep this LOADING tile any loaded tiles later in the chain are
                //older than this tile, so we're still interested in the request
                prev = tile;
            }
            else if (tile.getState() == _TileState_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].IDLE */ .Z.IDLE) {
                //the head of the list is the most current tile, we don't need
                //to start any other requests for this chain
                prev.interimTile = tile.interimTile;
            }
            else {
                prev = tile;
            }
            tile = prev.interimTile;
        } while (tile);
    };
    /**
     * Get the tile coordinate for this tile.
     * @return {import("./tilecoord.js").TileCoord} The tile coordinate.
     * @api
     */
    Tile.prototype.getTileCoord = function () {
        return this.tileCoord;
    };
    /**
     * @return {import("./TileState.js").default} State.
     */
    Tile.prototype.getState = function () {
        return this.state;
    };
    /**
     * Sets the state of this tile. If you write your own {@link module:ol/Tile~LoadFunction tileLoadFunction} ,
     * it is important to set the state correctly to {@link module:ol/TileState~ERROR}
     * when the tile cannot be loaded. Otherwise the tile cannot be removed from
     * the tile queue and will block other requests.
     * @param {import("./TileState.js").default} state State.
     * @api
     */
    Tile.prototype.setState = function (state) {
        if (this.state !== _TileState_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].ERROR */ .Z.ERROR && this.state > state) {
            throw new Error('Tile load sequence violation');
        }
        this.state = state;
        this.changed();
    };
    /**
     * Load the image or retry if loading previously failed.
     * Loading is taken care of by the tile queue, and calling this method is
     * only needed for preloading or for reloading in case of an error.
     * @abstract
     * @api
     */
    Tile.prototype.load = function () {
        (0,_util_js__WEBPACK_IMPORTED_MODULE_2__/* .abstract */ .O3)();
    };
    /**
     * Get the alpha value for rendering.
     * @param {string} id An id for the renderer.
     * @param {number} time The render frame time.
     * @return {number} A number between 0 and 1.
     */
    Tile.prototype.getAlpha = function (id, time) {
        if (!this.transition_) {
            return 1;
        }
        var start = this.transitionStarts_[id];
        if (!start) {
            start = time;
            this.transitionStarts_[id] = start;
        }
        else if (start === -1) {
            return 1;
        }
        var delta = time - start + 1000 / 60; // avoid rendering at 0
        if (delta >= this.transition_) {
            return 1;
        }
        return (0,_easing_js__WEBPACK_IMPORTED_MODULE_3__/* .easeIn */ .YQ)(delta / this.transition_);
    };
    /**
     * Determine if a tile is in an alpha transition.  A tile is considered in
     * transition if tile.getAlpha() has not yet been called or has been called
     * and returned 1.
     * @param {string} id An id for the renderer.
     * @return {boolean} The tile is in transition.
     */
    Tile.prototype.inTransition = function (id) {
        if (!this.transition_) {
            return false;
        }
        return this.transitionStarts_[id] !== -1;
    };
    /**
     * Mark a transition as complete.
     * @param {string} id An id for the renderer.
     */
    Tile.prototype.endTransition = function (id) {
        if (this.transition_) {
            this.transitionStarts_[id] = -1;
        }
    };
    return Tile;
}(_events_Target_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tile);
//# sourceMappingURL=Tile.js.map

/***/ }),

/***/ 2519:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ createOrUpdate),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @module ol/TileRange
 */
/**
 * A representation of a contiguous block of tiles.  A tile range is specified
 * by its min/max tile coordinates and is inclusive of coordinates.
 */
var TileRange = /** @class */ (function () {
    /**
     * @param {number} minX Minimum X.
     * @param {number} maxX Maximum X.
     * @param {number} minY Minimum Y.
     * @param {number} maxY Maximum Y.
     */
    function TileRange(minX, maxX, minY, maxY) {
        /**
         * @type {number}
         */
        this.minX = minX;
        /**
         * @type {number}
         */
        this.maxX = maxX;
        /**
         * @type {number}
         */
        this.minY = minY;
        /**
         * @type {number}
         */
        this.maxY = maxY;
    }
    /**
     * @param {import("./tilecoord.js").TileCoord} tileCoord Tile coordinate.
     * @return {boolean} Contains tile coordinate.
     */
    TileRange.prototype.contains = function (tileCoord) {
        return this.containsXY(tileCoord[1], tileCoord[2]);
    };
    /**
     * @param {TileRange} tileRange Tile range.
     * @return {boolean} Contains.
     */
    TileRange.prototype.containsTileRange = function (tileRange) {
        return (this.minX <= tileRange.minX &&
            tileRange.maxX <= this.maxX &&
            this.minY <= tileRange.minY &&
            tileRange.maxY <= this.maxY);
    };
    /**
     * @param {number} x Tile coordinate x.
     * @param {number} y Tile coordinate y.
     * @return {boolean} Contains coordinate.
     */
    TileRange.prototype.containsXY = function (x, y) {
        return this.minX <= x && x <= this.maxX && this.minY <= y && y <= this.maxY;
    };
    /**
     * @param {TileRange} tileRange Tile range.
     * @return {boolean} Equals.
     */
    TileRange.prototype.equals = function (tileRange) {
        return (this.minX == tileRange.minX &&
            this.minY == tileRange.minY &&
            this.maxX == tileRange.maxX &&
            this.maxY == tileRange.maxY);
    };
    /**
     * @param {TileRange} tileRange Tile range.
     */
    TileRange.prototype.extend = function (tileRange) {
        if (tileRange.minX < this.minX) {
            this.minX = tileRange.minX;
        }
        if (tileRange.maxX > this.maxX) {
            this.maxX = tileRange.maxX;
        }
        if (tileRange.minY < this.minY) {
            this.minY = tileRange.minY;
        }
        if (tileRange.maxY > this.maxY) {
            this.maxY = tileRange.maxY;
        }
    };
    /**
     * @return {number} Height.
     */
    TileRange.prototype.getHeight = function () {
        return this.maxY - this.minY + 1;
    };
    /**
     * @return {import("./size.js").Size} Size.
     */
    TileRange.prototype.getSize = function () {
        return [this.getWidth(), this.getHeight()];
    };
    /**
     * @return {number} Width.
     */
    TileRange.prototype.getWidth = function () {
        return this.maxX - this.minX + 1;
    };
    /**
     * @param {TileRange} tileRange Tile range.
     * @return {boolean} Intersects.
     */
    TileRange.prototype.intersects = function (tileRange) {
        return (this.minX <= tileRange.maxX &&
            this.maxX >= tileRange.minX &&
            this.minY <= tileRange.maxY &&
            this.maxY >= tileRange.minY);
    };
    return TileRange;
}());
/**
 * @param {number} minX Minimum X.
 * @param {number} maxX Maximum X.
 * @param {number} minY Minimum Y.
 * @param {number} maxY Maximum Y.
 * @param {TileRange} [tileRange] TileRange.
 * @return {TileRange} Tile range.
 */
function createOrUpdate(minX, maxX, minY, maxY, tileRange) {
    if (tileRange !== undefined) {
        tileRange.minX = minX;
        tileRange.maxX = maxX;
        tileRange.minY = minY;
        tileRange.maxY = maxY;
        return tileRange;
    }
    else {
        return new TileRange(minX, maxX, minY, maxY);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TileRange);
//# sourceMappingURL=TileRange.js.map

/***/ }),

/***/ 7195:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @module ol/TileState
 */
/**
 * @enum {number}
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    IDLE: 0,
    LOADING: 1,
    LOADED: 2,
    /**
     * Indicates that tile loading failed
     * @type {number}
     */
    ERROR: 3,
    EMPTY: 4,
});
//# sourceMappingURL=TileState.js.map

/***/ }),

/***/ 2241:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": () => (/* binding */ ol_View)
});

// UNUSED EXPORTS: createCenterConstraint, createResolutionConstraint, createRotationConstraint, isNoopAnimation

// EXTERNAL MODULE: ./node_modules/ol/Object.js
var ol_Object = __webpack_require__(2971);
// EXTERNAL MODULE: ./node_modules/ol/proj/Units.js
var Units = __webpack_require__(8375);
// EXTERNAL MODULE: ./node_modules/ol/ViewHint.js
var ViewHint = __webpack_require__(7755);
;// CONCATENATED MODULE: ./node_modules/ol/ViewProperty.js
/**
 * @module ol/ViewProperty
 */
/**
 * @enum {string}
 */
/* harmony default export */ const ViewProperty = ({
    CENTER: 'center',
    RESOLUTION: 'resolution',
    ROTATION: 'rotation',
});
//# sourceMappingURL=ViewProperty.js.map
// EXTERNAL MODULE: ./node_modules/ol/tilegrid/common.js
var common = __webpack_require__(4768);
// EXTERNAL MODULE: ./node_modules/ol/proj.js + 6 modules
var proj = __webpack_require__(1311);
// EXTERNAL MODULE: ./node_modules/ol/functions.js
var functions = __webpack_require__(6885);
// EXTERNAL MODULE: ./node_modules/ol/coordinate.js
var coordinate = __webpack_require__(1900);
// EXTERNAL MODULE: ./node_modules/ol/asserts.js
var asserts = __webpack_require__(9515);
// EXTERNAL MODULE: ./node_modules/ol/obj.js
var obj = __webpack_require__(9374);
// EXTERNAL MODULE: ./node_modules/ol/math.js
var math = __webpack_require__(3983);
;// CONCATENATED MODULE: ./node_modules/ol/centerconstraint.js
/**
 * @module ol/centerconstraint
 */

/**
 * @typedef {function((import("./coordinate.js").Coordinate|undefined), number, import("./size.js").Size, boolean=, Array<number>=): (import("./coordinate.js").Coordinate|undefined)} Type
 */
/**
 * @param {import("./extent.js").Extent} extent Extent.
 * @param {boolean} onlyCenter If true, the constraint will only apply to the view center.
 * @param {boolean} smooth If true, the view will be able to go slightly out of the given extent
 * (only during interaction and animation).
 * @return {Type} The constraint.
 */
function createExtent(extent, onlyCenter, smooth) {
    return (
    /**
     * @param {import("./coordinate.js").Coordinate|undefined} center Center.
     * @param {number|undefined} resolution Resolution.
     * @param {import("./size.js").Size} size Viewport size; unused if `onlyCenter` was specified.
     * @param {boolean} [opt_isMoving] True if an interaction or animation is in progress.
     * @param {Array<number>} [opt_centerShift] Shift between map center and viewport center.
     * @return {import("./coordinate.js").Coordinate|undefined} Center.
     */
    function (center, resolution, size, opt_isMoving, opt_centerShift) {
        if (!center) {
            return undefined;
        }
        if (!resolution && !onlyCenter) {
            return center;
        }
        var viewWidth = onlyCenter ? 0 : size[0] * resolution;
        var viewHeight = onlyCenter ? 0 : size[1] * resolution;
        var shiftX = opt_centerShift ? opt_centerShift[0] : 0;
        var shiftY = opt_centerShift ? opt_centerShift[1] : 0;
        var minX = extent[0] + viewWidth / 2 + shiftX;
        var maxX = extent[2] - viewWidth / 2 + shiftX;
        var minY = extent[1] + viewHeight / 2 + shiftY;
        var maxY = extent[3] - viewHeight / 2 + shiftY;
        // note: when zooming out of bounds, min and max values for x and y may
        // end up inverted (min > max); this has to be accounted for
        if (minX > maxX) {
            minX = (maxX + minX) / 2;
            maxX = minX;
        }
        if (minY > maxY) {
            minY = (maxY + minY) / 2;
            maxY = minY;
        }
        var x = (0,math/* clamp */.uZ)(center[0], minX, maxX);
        var y = (0,math/* clamp */.uZ)(center[1], minY, maxY);
        // during an interaction, allow some overscroll
        if (opt_isMoving && smooth && resolution) {
            var ratio = 30 * resolution;
            x +=
                -ratio * Math.log(1 + Math.max(0, minX - center[0]) / ratio) +
                    ratio * Math.log(1 + Math.max(0, center[0] - maxX) / ratio);
            y +=
                -ratio * Math.log(1 + Math.max(0, minY - center[1]) / ratio) +
                    ratio * Math.log(1 + Math.max(0, center[1] - maxY) / ratio);
        }
        return [x, y];
    });
}
/**
 * @param {import("./coordinate.js").Coordinate} [center] Center.
 * @return {import("./coordinate.js").Coordinate|undefined} Center.
 */
function none(center) {
    return center;
}
//# sourceMappingURL=centerconstraint.js.map
// EXTERNAL MODULE: ./node_modules/ol/extent.js + 1 modules
var ol_extent = __webpack_require__(2833);
// EXTERNAL MODULE: ./node_modules/ol/array.js
var array = __webpack_require__(5537);
;// CONCATENATED MODULE: ./node_modules/ol/resolutionconstraint.js
/**
 * @module ol/resolutionconstraint
 */



/**
 * @typedef {function((number|undefined), number, import("./size.js").Size, boolean=): (number|undefined)} Type
 */
/**
 * Returns a modified resolution taking into account the viewport size and maximum
 * allowed extent.
 * @param {number} resolution Resolution
 * @param {import("./extent.js").Extent} maxExtent Maximum allowed extent.
 * @param {import("./size.js").Size} viewportSize Viewport size.
 * @param {boolean} showFullExtent Whether to show the full extent.
 * @return {number} Capped resolution.
 */
function getViewportClampedResolution(resolution, maxExtent, viewportSize, showFullExtent) {
    var xResolution = (0,ol_extent/* getWidth */.dz)(maxExtent) / viewportSize[0];
    var yResolution = (0,ol_extent/* getHeight */.Cr)(maxExtent) / viewportSize[1];
    if (showFullExtent) {
        return Math.min(resolution, Math.max(xResolution, yResolution));
    }
    return Math.min(resolution, Math.min(xResolution, yResolution));
}
/**
 * Returns a modified resolution to be between maxResolution and minResolution while
 * still allowing the value to be slightly out of bounds.
 * Note: the computation is based on the logarithm function (ln):
 *  - at 1, ln(x) is 0
 *  - above 1, ln(x) keeps increasing but at a much slower pace than x
 * The final result is clamped to prevent getting too far away from bounds.
 * @param {number} resolution Resolution.
 * @param {number} maxResolution Max resolution.
 * @param {number} minResolution Min resolution.
 * @return {number} Smoothed resolution.
 */
function getSmoothClampedResolution(resolution, maxResolution, minResolution) {
    var result = Math.min(resolution, maxResolution);
    var ratio = 50;
    result *=
        Math.log(1 + ratio * Math.max(0, resolution / maxResolution - 1)) / ratio +
            1;
    if (minResolution) {
        result = Math.max(result, minResolution);
        result /=
            Math.log(1 + ratio * Math.max(0, minResolution / resolution - 1)) /
                ratio +
                1;
    }
    return (0,math/* clamp */.uZ)(result, minResolution / 2, maxResolution * 2);
}
/**
 * @param {Array<number>} resolutions Resolutions.
 * @param {boolean} [opt_smooth] If true, the view will be able to slightly exceed resolution limits. Default: true.
 * @param {import("./extent.js").Extent} [opt_maxExtent] Maximum allowed extent.
 * @param {boolean} [opt_showFullExtent] If true, allows us to show the full extent. Default: false.
 * @return {Type} Zoom function.
 */
function createSnapToResolutions(resolutions, opt_smooth, opt_maxExtent, opt_showFullExtent) {
    return (
    /**
     * @param {number|undefined} resolution Resolution.
     * @param {number} direction Direction.
     * @param {import("./size.js").Size} size Viewport size.
     * @param {boolean} [opt_isMoving] True if an interaction or animation is in progress.
     * @return {number|undefined} Resolution.
     */
    function (resolution, direction, size, opt_isMoving) {
        if (resolution !== undefined) {
            var maxResolution = resolutions[0];
            var minResolution = resolutions[resolutions.length - 1];
            var cappedMaxRes = opt_maxExtent
                ? getViewportClampedResolution(maxResolution, opt_maxExtent, size, opt_showFullExtent)
                : maxResolution;
            // during interacting or animating, allow intermediary values
            if (opt_isMoving) {
                var smooth = opt_smooth !== undefined ? opt_smooth : true;
                if (!smooth) {
                    return (0,math/* clamp */.uZ)(resolution, minResolution, cappedMaxRes);
                }
                return getSmoothClampedResolution(resolution, cappedMaxRes, minResolution);
            }
            var capped = Math.min(cappedMaxRes, resolution);
            var z = Math.floor((0,array/* linearFindNearest */.h7)(resolutions, capped, direction));
            if (resolutions[z] > cappedMaxRes && z < resolutions.length - 1) {
                return resolutions[z + 1];
            }
            return resolutions[z];
        }
        else {
            return undefined;
        }
    });
}
/**
 * @param {number} power Power.
 * @param {number} maxResolution Maximum resolution.
 * @param {number} [opt_minResolution] Minimum resolution.
 * @param {boolean} [opt_smooth] If true, the view will be able to slightly exceed resolution limits. Default: true.
 * @param {import("./extent.js").Extent} [opt_maxExtent] Maximum allowed extent.
 * @param {boolean} [opt_showFullExtent] If true, allows us to show the full extent. Default: false.
 * @return {Type} Zoom function.
 */
function createSnapToPower(power, maxResolution, opt_minResolution, opt_smooth, opt_maxExtent, opt_showFullExtent) {
    return (
    /**
     * @param {number|undefined} resolution Resolution.
     * @param {number} direction Direction.
     * @param {import("./size.js").Size} size Viewport size.
     * @param {boolean} [opt_isMoving] True if an interaction or animation is in progress.
     * @return {number|undefined} Resolution.
     */
    function (resolution, direction, size, opt_isMoving) {
        if (resolution !== undefined) {
            var cappedMaxRes = opt_maxExtent
                ? getViewportClampedResolution(maxResolution, opt_maxExtent, size, opt_showFullExtent)
                : maxResolution;
            var minResolution = opt_minResolution !== undefined ? opt_minResolution : 0;
            // during interacting or animating, allow intermediary values
            if (opt_isMoving) {
                var smooth = opt_smooth !== undefined ? opt_smooth : true;
                if (!smooth) {
                    return (0,math/* clamp */.uZ)(resolution, minResolution, cappedMaxRes);
                }
                return getSmoothClampedResolution(resolution, cappedMaxRes, minResolution);
            }
            var tolerance = 1e-9;
            var minZoomLevel = Math.ceil(Math.log(maxResolution / cappedMaxRes) / Math.log(power) - tolerance);
            var offset = -direction * (0.5 - tolerance) + 0.5;
            var capped = Math.min(cappedMaxRes, resolution);
            var cappedZoomLevel = Math.floor(Math.log(maxResolution / capped) / Math.log(power) + offset);
            var zoomLevel = Math.max(minZoomLevel, cappedZoomLevel);
            var newResolution = maxResolution / Math.pow(power, zoomLevel);
            return (0,math/* clamp */.uZ)(newResolution, minResolution, cappedMaxRes);
        }
        else {
            return undefined;
        }
    });
}
/**
 * @param {number} maxResolution Max resolution.
 * @param {number} minResolution Min resolution.
 * @param {boolean} [opt_smooth] If true, the view will be able to slightly exceed resolution limits. Default: true.
 * @param {import("./extent.js").Extent} [opt_maxExtent] Maximum allowed extent.
 * @param {boolean} [opt_showFullExtent] If true, allows us to show the full extent. Default: false.
 * @return {Type} Zoom function.
 */
function createMinMaxResolution(maxResolution, minResolution, opt_smooth, opt_maxExtent, opt_showFullExtent) {
    return (
    /**
     * @param {number|undefined} resolution Resolution.
     * @param {number} direction Direction.
     * @param {import("./size.js").Size} size Viewport size.
     * @param {boolean} [opt_isMoving] True if an interaction or animation is in progress.
     * @return {number|undefined} Resolution.
     */
    function (resolution, direction, size, opt_isMoving) {
        if (resolution !== undefined) {
            var cappedMaxRes = opt_maxExtent
                ? getViewportClampedResolution(maxResolution, opt_maxExtent, size, opt_showFullExtent)
                : maxResolution;
            var smooth = opt_smooth !== undefined ? opt_smooth : true;
            if (!smooth || !opt_isMoving) {
                return (0,math/* clamp */.uZ)(resolution, minResolution, cappedMaxRes);
            }
            return getSmoothClampedResolution(resolution, cappedMaxRes, minResolution);
        }
        else {
            return undefined;
        }
    });
}
//# sourceMappingURL=resolutionconstraint.js.map
// EXTERNAL MODULE: ./node_modules/ol/rotationconstraint.js
var rotationconstraint = __webpack_require__(828);
// EXTERNAL MODULE: ./node_modules/ol/easing.js
var easing = __webpack_require__(1015);
// EXTERNAL MODULE: ./node_modules/ol/geom/Polygon.js + 14 modules
var Polygon = __webpack_require__(1506);
;// CONCATENATED MODULE: ./node_modules/ol/View.js
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @module ol/View
 */


















/**
 * An animation configuration
 *
 * @typedef {Object} Animation
 * @property {import("./coordinate.js").Coordinate} [sourceCenter] Source center.
 * @property {import("./coordinate.js").Coordinate} [targetCenter] Target center.
 * @property {number} [sourceResolution] Source resolution.
 * @property {number} [targetResolution] Target resolution.
 * @property {number} [sourceRotation] Source rotation.
 * @property {number} [targetRotation] Target rotation.
 * @property {import("./coordinate.js").Coordinate} [anchor] Anchor.
 * @property {number} start Start.
 * @property {number} duration Duration.
 * @property {boolean} complete Complete.
 * @property {function(number):number} easing Easing.
 * @property {function(boolean):void} callback Callback.
 */
/**
 * @typedef {Object} Constraints
 * @property {import("./centerconstraint.js").Type} center Center.
 * @property {import("./resolutionconstraint.js").Type} resolution Resolution.
 * @property {import("./rotationconstraint.js").Type} rotation Rotation.
 */
/**
 * @typedef {Object} FitOptions
 * @property {import("./size.js").Size} [size] The size in pixels of the box to fit
 * the extent into. Default is the current size of the first map in the DOM that
 * uses this view, or `[100, 100]` if no such map is found.
 * @property {!Array<number>} [padding=[0, 0, 0, 0]] Padding (in pixels) to be
 * cleared inside the view. Values in the array are top, right, bottom and left
 * padding.
 * @property {boolean} [nearest=false] If the view `constrainResolution` option is `true`,
 * get the nearest extent instead of the closest that actually fits the view.
 * @property {number} [minResolution=0] Minimum resolution that we zoom to.
 * @property {number} [maxZoom] Maximum zoom level that we zoom to. If
 * `minResolution` is given, this property is ignored.
 * @property {number} [duration] The duration of the animation in milliseconds.
 * By default, there is no animation to the target extent.
 * @property {function(number):number} [easing] The easing function used during
 * the animation (defaults to {@link module:ol/easing.inAndOut}).
 * The function will be called for each frame with a number representing a
 * fraction of the animation's duration.  The function should return a number
 * between 0 and 1 representing the progress toward the destination state.
 * @property {function(boolean):void} [callback] Function called when the view is in
 * its final position. The callback will be called with `true` if the animation
 * series completed on its own or `false` if it was cancelled.
 */
/**
 * @typedef {Object} ViewOptions
 * @property {import("./coordinate.js").Coordinate} [center] The initial center for
 * the view. If a user projection is not set, the coordinate system for the center is
 * specified with the `projection` option. Layer sources will not be fetched if this
 * is not set, but the center can be set later with {@link #setCenter}.
 * @property {boolean|number} [constrainRotation=true] Rotation constraint.
 * `false` means no constraint. `true` means no constraint, but snap to zero
 * near zero. A number constrains the rotation to that number of values. For
 * example, `4` will constrain the rotation to 0, 90, 180, and 270 degrees.
 * @property {boolean} [enableRotation=true] Enable rotation.
 * If `false`, a rotation constraint that always sets the rotation to zero is
 * used. The `constrainRotation` option has no effect if `enableRotation` is
 * `false`.
 * @property {import("./extent.js").Extent} [extent] The extent that constrains the
 * view, in other words, nothing outside of this extent can be visible on the map.
 * @property {boolean} [constrainOnlyCenter=false] If true, the extent
 * constraint will only apply to the view center and not the whole extent.
 * @property {boolean} [smoothExtentConstraint=true] If true, the extent
 * constraint will be applied smoothly, i.e. allow the view to go slightly outside
 * of the given `extent`.
 * @property {number} [maxResolution] The maximum resolution used to determine
 * the resolution constraint. It is used together with `minResolution` (or
 * `maxZoom`) and `zoomFactor`. If unspecified it is calculated in such a way
 * that the projection's validity extent fits in a 256x256 px tile. If the
 * projection is Spherical Mercator (the default) then `maxResolution` defaults
 * to `40075016.68557849 / 256 = 156543.03392804097`.
 * @property {number} [minResolution] The minimum resolution used to determine
 * the resolution constraint.  It is used together with `maxResolution` (or
 * `minZoom`) and `zoomFactor`.  If unspecified it is calculated assuming 29
 * zoom levels (with a factor of 2). If the projection is Spherical Mercator
 * (the default) then `minResolution` defaults to
 * `40075016.68557849 / 256 / Math.pow(2, 28) = 0.0005831682455839253`.
 * @property {number} [maxZoom=28] The maximum zoom level used to determine the
 * resolution constraint. It is used together with `minZoom` (or
 * `maxResolution`) and `zoomFactor`.  Note that if `minResolution` is also
 * provided, it is given precedence over `maxZoom`.
 * @property {number} [minZoom=0] The minimum zoom level used to determine the
 * resolution constraint. It is used together with `maxZoom` (or
 * `minResolution`) and `zoomFactor`.  Note that if `maxResolution` is also
 * provided, it is given precedence over `minZoom`.
 * @property {boolean} [multiWorld=false] If `false` the view is constrained so
 * only one world is visible, and you cannot pan off the edge.  If `true` the map
 * may show multiple worlds at low zoom levels.  Only used if the `projection` is
 * global.  Note that if `extent` is also provided it is given precedence.
 * @property {boolean} [constrainResolution=false] If true, the view will always
 * animate to the closest zoom level after an interaction; false means
 * intermediary zoom levels are allowed.
 * @property {boolean} [smoothResolutionConstraint=true] If true, the resolution
 * min/max values will be applied smoothly, i. e. allow the view to exceed slightly
 * the given resolution or zoom bounds.
 * @property {boolean} [showFullExtent=false] Allow the view to be zoomed out to
 * show the full configured extent. By default, when a view is configured with an
 * extent, users will not be able to zoom out so the viewport exceeds the extent in
 * either dimension. This means the full extent may not be visible if the viewport
 * is taller or wider than the aspect ratio of the configured extent. If
 * showFullExtent is true, the user will be able to zoom out so that the viewport
 * exceeds the height or width of the configured extent, but not both, allowing the
 * full extent to be shown.
 * @property {import("./proj.js").ProjectionLike} [projection='EPSG:3857'] The
 * projection. The default is Spherical Mercator.
 * @property {number} [resolution] The initial resolution for the view. The
 * units are `projection` units per pixel (e.g. meters per pixel). An
 * alternative to setting this is to set `zoom`. Layer sources will not be
 * fetched if neither this nor `zoom` are defined, but they can be set later
 * with {@link #setZoom} or {@link #setResolution}.
 * @property {Array<number>} [resolutions] Resolutions that determine the
 * zoom levels if specified. The index in the array corresponds to the zoom level,
 * therefore the resolution values have to be in descending order. It also constrains
 * the resolution by the minimum and maximum value. If set the `maxResolution`,
 * `minResolution`, `minZoom`, `maxZoom`, and `zoomFactor` options are ignored.
 * @property {number} [rotation=0] The initial rotation for the view in radians
 * (positive rotation clockwise, 0 means North).
 * @property {number} [zoom] Only used if `resolution` is not defined. Zoom
 * level used to calculate the initial resolution for the view.
 * @property {number} [zoomFactor=2] The zoom factor used to compute the
 * corresponding resolution.
 * @property {!Array<number>} [padding=[0, 0, 0, 0]] Padding (in css pixels).
 * If the map viewport is partially covered with other content (overlays) along
 * its edges, this setting allows to shift the center of the viewport away from
 * that content. The order of the values is top, right, bottom, left.
 */
/**
 * @typedef {Object} AnimationOptions
 * @property {import("./coordinate.js").Coordinate} [center] The center of the view at the end of
 * the animation.
 * @property {number} [zoom] The zoom level of the view at the end of the
 * animation. This takes precedence over `resolution`.
 * @property {number} [resolution] The resolution of the view at the end
 * of the animation.  If `zoom` is also provided, this option will be ignored.
 * @property {number} [rotation] The rotation of the view at the end of
 * the animation.
 * @property {import("./coordinate.js").Coordinate} [anchor] Optional anchor to remain fixed
 * during a rotation or resolution animation.
 * @property {number} [duration=1000] The duration of the animation in milliseconds.
 * @property {function(number):number} [easing] The easing function used
 * during the animation (defaults to {@link module:ol/easing.inAndOut}).
 * The function will be called for each frame with a number representing a
 * fraction of the animation's duration.  The function should return a number
 * between 0 and 1 representing the progress toward the destination state.
 */
/**
 * @typedef {Object} State
 * @property {import("./coordinate.js").Coordinate} center Center.
 * @property {import("./proj/Projection.js").default} projection Projection.
 * @property {number} resolution Resolution.
 * @property {import("./coordinate.js").Coordinate} [nextCenter] The next center during an animation series.
 * @property {number} [nextResolution] The next resolution during an animation series.
 * @property {number} [nextRotation] The next rotation during an animation series.
 * @property {number} rotation Rotation.
 * @property {number} zoom Zoom.
 */
/**
 * Default min zoom level for the map view.
 * @type {number}
 */
var DEFAULT_MIN_ZOOM = 0;
/**
 * @typedef {import("./ObjectEventType").Types|'change:center'|'change:resolution'|'change:rotation'} ViewObjectEventTypes
 */
/***
 * @template Return
 * @typedef {import("./Observable").OnSignature<import("./Observable").EventTypes, import("./events/Event.js").default, Return> &
 *   import("./Observable").OnSignature<ViewObjectEventTypes, import("./Object").ObjectEvent, Return> &
 *   import("./Observable").CombinedOnSignature<import("./Observable").EventTypes|ViewObjectEventTypes, Return>} ViewOnSignature
 */
/**
 * @classdesc
 * A View object represents a simple 2D view of the map.
 *
 * This is the object to act upon to change the center, resolution,
 * and rotation of the map.
 *
 * A View has a `projection`. The projection determines the
 * coordinate system of the center, and its units determine the units of the
 * resolution (projection units per pixel). The default projection is
 * Web Mercator (EPSG:3857).
 *
 * ### The view states
 *
 * A View is determined by three states: `center`, `resolution`,
 * and `rotation`. Each state has a corresponding getter and setter, e.g.
 * `getCenter` and `setCenter` for the `center` state.
 *
 * The `zoom` state is actually not saved on the view: all computations
 * internally use the `resolution` state. Still, the `setZoom` and `getZoom`
 * methods are available, as well as `getResolutionForZoom` and
 * `getZoomForResolution` to switch from one system to the other.
 *
 * ### The constraints
 *
 * `setCenter`, `setResolution` and `setRotation` can be used to change the
 * states of the view, but any constraint defined in the constructor will
 * be applied along the way.
 *
 * A View object can have a *resolution constraint*, a *rotation constraint*
 * and a *center constraint*.
 *
 * The *resolution constraint* typically restricts min/max values and
 * snaps to specific resolutions. It is determined by the following
 * options: `resolutions`, `maxResolution`, `maxZoom` and `zoomFactor`.
 * If `resolutions` is set, the other three options are ignored. See
 * documentation for each option for more information. By default, the view
 * only has a min/max restriction and allow intermediary zoom levels when
 * pinch-zooming for example.
 *
 * The *rotation constraint* snaps to specific angles. It is determined
 * by the following options: `enableRotation` and `constrainRotation`.
 * By default rotation is allowed and its value is snapped to zero when approaching the
 * horizontal.
 *
 * The *center constraint* is determined by the `extent` option. By
 * default the view center is not constrained at all.
 *
 * ### Changing the view state
 *
 * It is important to note that `setZoom`, `setResolution`, `setCenter` and
 * `setRotation` are subject to the above mentioned constraints. As such, it
 * may sometimes not be possible to know in advance the resulting state of the
 * View. For example, calling `setResolution(10)` does not guarantee that
 * `getResolution()` will return `10`.
 *
 * A consequence of this is that, when applying a delta on the view state, one
 * should use `adjustCenter`, `adjustRotation`, `adjustZoom` and `adjustResolution`
 * rather than the corresponding setters. This will let view do its internal
 * computations. Besides, the `adjust*` methods also take an `opt_anchor`
 * argument which allows specifying an origin for the transformation.
 *
 * ### Interacting with the view
 *
 * View constraints are usually only applied when the view is *at rest*, meaning that
 * no interaction or animation is ongoing. As such, if the user puts the view in a
 * state that is not equivalent to a constrained one (e.g. rotating the view when
 * the snap angle is 0), an animation will be triggered at the interaction end to
 * put back the view to a stable state;
 *
 * @api
 */
var View = /** @class */ (function (_super) {
    __extends(View, _super);
    /**
     * @param {ViewOptions} [opt_options] View options.
     */
    function View(opt_options) {
        var _this = _super.call(this) || this;
        /***
         * @type {ViewOnSignature<import("./events").EventsKey>}
         */
        _this.on;
        /***
         * @type {ViewOnSignature<import("./events").EventsKey>}
         */
        _this.once;
        /***
         * @type {ViewOnSignature<void>}
         */
        _this.un;
        var options = (0,obj/* assign */.f0)({}, opt_options);
        /**
         * @private
         * @type {Array<number>}
         */
        _this.hints_ = [0, 0];
        /**
         * @private
         * @type {Array<Array<Animation>>}
         */
        _this.animations_ = [];
        /**
         * @private
         * @type {number|undefined}
         */
        _this.updateAnimationKey_;
        /**
         * @private
         * @const
         * @type {import("./proj/Projection.js").default}
         */
        _this.projection_ = (0,proj/* createProjection */.UQ)(options.projection, 'EPSG:3857');
        /**
         * @private
         * @type {import("./size.js").Size}
         */
        _this.viewportSize_ = [100, 100];
        /**
         * @private
         * @type {import("./coordinate.js").Coordinate|undefined}
         */
        _this.targetCenter_ = null;
        /**
         * @private
         * @type {number|undefined}
         */
        _this.targetResolution_;
        /**
         * @private
         * @type {number|undefined}
         */
        _this.targetRotation_;
        /**
         * @private
         * @type {import("./coordinate.js").Coordinate}
         */
        _this.nextCenter_ = null;
        /**
         * @private
         * @type {number}
         */
        _this.nextResolution_;
        /**
         * @private
         * @type {number}
         */
        _this.nextRotation_;
        /**
         * @private
         * @type {import("./coordinate.js").Coordinate|undefined}
         */
        _this.cancelAnchor_ = undefined;
        if (options.projection) {
            (0,proj/* disableCoordinateWarning */.h_)();
        }
        if (options.center) {
            options.center = (0,proj/* fromUserCoordinate */.Vs)(options.center, _this.projection_);
        }
        if (options.extent) {
            options.extent = (0,proj/* fromUserExtent */.dY)(options.extent, _this.projection_);
        }
        _this.applyOptions_(options);
        return _this;
    }
    /**
     * Set up the view with the given options.
     * @param {ViewOptions} options View options.
     */
    View.prototype.applyOptions_ = function (options) {
        var properties = (0,obj/* assign */.f0)({}, options);
        for (var key in ViewProperty) {
            delete properties[key];
        }
        this.setProperties(properties, true);
        var resolutionConstraintInfo = createResolutionConstraint(options);
        /**
         * @private
         * @type {number}
         */
        this.maxResolution_ = resolutionConstraintInfo.maxResolution;
        /**
         * @private
         * @type {number}
         */
        this.minResolution_ = resolutionConstraintInfo.minResolution;
        /**
         * @private
         * @type {number}
         */
        this.zoomFactor_ = resolutionConstraintInfo.zoomFactor;
        /**
         * @private
         * @type {Array<number>|undefined}
         */
        this.resolutions_ = options.resolutions;
        /**
         * @type {Array<number>|undefined}
         * @private
         */
        this.padding_ = options.padding;
        /**
         * @private
         * @type {number}
         */
        this.minZoom_ = resolutionConstraintInfo.minZoom;
        var centerConstraint = createCenterConstraint(options);
        var resolutionConstraint = resolutionConstraintInfo.constraint;
        var rotationConstraint = createRotationConstraint(options);
        /**
         * @private
         * @type {Constraints}
         */
        this.constraints_ = {
            center: centerConstraint,
            resolution: resolutionConstraint,
            rotation: rotationConstraint,
        };
        this.setRotation(options.rotation !== undefined ? options.rotation : 0);
        this.setCenterInternal(options.center !== undefined ? options.center : null);
        if (options.resolution !== undefined) {
            this.setResolution(options.resolution);
        }
        else if (options.zoom !== undefined) {
            this.setZoom(options.zoom);
        }
    };
    Object.defineProperty(View.prototype, "padding", {
        /**
         * Padding (in css pixels).
         * If the map viewport is partially covered with other content (overlays) along
         * its edges, this setting allows to shift the center of the viewport away from that
         * content. The order of the values in the array is top, right, bottom, left.
         * The default is no padding, which is equivalent to `[0, 0, 0, 0]`.
         * @type {Array<number>|undefined}
         * @api
         */
        get: function () {
            return this.padding_;
        },
        set: function (padding) {
            var oldPadding = this.padding_;
            this.padding_ = padding;
            var center = this.getCenter();
            if (center) {
                var newPadding = padding || [0, 0, 0, 0];
                oldPadding = oldPadding || [0, 0, 0, 0];
                var resolution = this.getResolution();
                var offsetX = (resolution / 2) *
                    (newPadding[3] - oldPadding[3] + oldPadding[1] - newPadding[1]);
                var offsetY = (resolution / 2) *
                    (newPadding[0] - oldPadding[0] + oldPadding[2] - newPadding[2]);
                this.setCenterInternal([center[0] + offsetX, center[1] - offsetY]);
            }
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Get an updated version of the view options used to construct the view.  The
     * current resolution (or zoom), center, and rotation are applied to any stored
     * options.  The provided options can be used to apply new min/max zoom or
     * resolution limits.
     * @param {ViewOptions} newOptions New options to be applied.
     * @return {ViewOptions} New options updated with the current view state.
     */
    View.prototype.getUpdatedOptions_ = function (newOptions) {
        var options = this.getProperties();
        // preserve resolution (or zoom)
        if (options.resolution !== undefined) {
            options.resolution = this.getResolution();
        }
        else {
            options.zoom = this.getZoom();
        }
        // preserve center
        options.center = this.getCenterInternal();
        // preserve rotation
        options.rotation = this.getRotation();
        return (0,obj/* assign */.f0)({}, options, newOptions);
    };
    /**
     * Animate the view.  The view's center, zoom (or resolution), and rotation
     * can be animated for smooth transitions between view states.  For example,
     * to animate the view to a new zoom level:
     *
     *     view.animate({zoom: view.getZoom() + 1});
     *
     * By default, the animation lasts one second and uses in-and-out easing.  You
     * can customize this behavior by including `duration` (in milliseconds) and
     * `easing` options (see {@link module:ol/easing}).
     *
     * To chain together multiple animations, call the method with multiple
     * animation objects.  For example, to first zoom and then pan:
     *
     *     view.animate({zoom: 10}, {center: [0, 0]});
     *
     * If you provide a function as the last argument to the animate method, it
     * will get called at the end of an animation series.  The callback will be
     * called with `true` if the animation series completed on its own or `false`
     * if it was cancelled.
     *
     * Animations are cancelled by user interactions (e.g. dragging the map) or by
     * calling `view.setCenter()`, `view.setResolution()`, or `view.setRotation()`
     * (or another method that calls one of these).
     *
     * @param {...(AnimationOptions|function(boolean): void)} var_args Animation
     *     options.  Multiple animations can be run in series by passing multiple
     *     options objects.  To run multiple animations in parallel, call the method
     *     multiple times.  An optional callback can be provided as a final
     *     argument.  The callback will be called with a boolean indicating whether
     *     the animation completed without being cancelled.
     * @api
     */
    View.prototype.animate = function (var_args) {
        if (this.isDef() && !this.getAnimating()) {
            this.resolveConstraints(0);
        }
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; ++i) {
            var options = arguments[i];
            if (options.center) {
                options = (0,obj/* assign */.f0)({}, options);
                options.center = (0,proj/* fromUserCoordinate */.Vs)(options.center, this.getProjection());
            }
            if (options.anchor) {
                options = (0,obj/* assign */.f0)({}, options);
                options.anchor = (0,proj/* fromUserCoordinate */.Vs)(options.anchor, this.getProjection());
            }
            args[i] = options;
        }
        this.animateInternal.apply(this, args);
    };
    /**
     * @param {...(AnimationOptions|function(boolean): void)} var_args Animation options.
     */
    View.prototype.animateInternal = function (var_args) {
        var animationCount = arguments.length;
        var callback;
        if (animationCount > 1 &&
            typeof arguments[animationCount - 1] === 'function') {
            callback = arguments[animationCount - 1];
            --animationCount;
        }
        var i = 0;
        for (; i < animationCount && !this.isDef(); ++i) {
            // if view properties are not yet set, shortcut to the final state
            var state = arguments[i];
            if (state.center) {
                this.setCenterInternal(state.center);
            }
            if (state.zoom !== undefined) {
                this.setZoom(state.zoom);
            }
            else if (state.resolution) {
                this.setResolution(state.resolution);
            }
            if (state.rotation !== undefined) {
                this.setRotation(state.rotation);
            }
        }
        if (i === animationCount) {
            if (callback) {
                animationCallback(callback, true);
            }
            return;
        }
        var start = Date.now();
        var center = this.targetCenter_.slice();
        var resolution = this.targetResolution_;
        var rotation = this.targetRotation_;
        var series = [];
        for (; i < animationCount; ++i) {
            var options = /** @type {AnimationOptions} */ (arguments[i]);
            var animation = {
                start: start,
                complete: false,
                anchor: options.anchor,
                duration: options.duration !== undefined ? options.duration : 1000,
                easing: options.easing || easing/* inAndOut */.rd,
                callback: callback,
            };
            if (options.center) {
                animation.sourceCenter = center;
                animation.targetCenter = options.center.slice();
                center = animation.targetCenter;
            }
            if (options.zoom !== undefined) {
                animation.sourceResolution = resolution;
                animation.targetResolution = this.getResolutionForZoom(options.zoom);
                resolution = animation.targetResolution;
            }
            else if (options.resolution) {
                animation.sourceResolution = resolution;
                animation.targetResolution = options.resolution;
                resolution = animation.targetResolution;
            }
            if (options.rotation !== undefined) {
                animation.sourceRotation = rotation;
                var delta = (0,math/* modulo */.$W)(options.rotation - rotation + Math.PI, 2 * Math.PI) - Math.PI;
                animation.targetRotation = rotation + delta;
                rotation = animation.targetRotation;
            }
            // check if animation is a no-op
            if (isNoopAnimation(animation)) {
                animation.complete = true;
                // we still push it onto the series for callback handling
            }
            else {
                start += animation.duration;
            }
            series.push(animation);
        }
        this.animations_.push(series);
        this.setHint(ViewHint/* default.ANIMATING */.Z.ANIMATING, 1);
        this.updateAnimations_();
    };
    /**
     * Determine if the view is being animated.
     * @return {boolean} The view is being animated.
     * @api
     */
    View.prototype.getAnimating = function () {
        return this.hints_[ViewHint/* default.ANIMATING */.Z.ANIMATING] > 0;
    };
    /**
     * Determine if the user is interacting with the view, such as panning or zooming.
     * @return {boolean} The view is being interacted with.
     * @api
     */
    View.prototype.getInteracting = function () {
        return this.hints_[ViewHint/* default.INTERACTING */.Z.INTERACTING] > 0;
    };
    /**
     * Cancel any ongoing animations.
     * @api
     */
    View.prototype.cancelAnimations = function () {
        this.setHint(ViewHint/* default.ANIMATING */.Z.ANIMATING, -this.hints_[ViewHint/* default.ANIMATING */.Z.ANIMATING]);
        var anchor;
        for (var i = 0, ii = this.animations_.length; i < ii; ++i) {
            var series = this.animations_[i];
            if (series[0].callback) {
                animationCallback(series[0].callback, false);
            }
            if (!anchor) {
                for (var j = 0, jj = series.length; j < jj; ++j) {
                    var animation = series[j];
                    if (!animation.complete) {
                        anchor = animation.anchor;
                        break;
                    }
                }
            }
        }
        this.animations_.length = 0;
        this.cancelAnchor_ = anchor;
        this.nextCenter_ = null;
        this.nextResolution_ = NaN;
        this.nextRotation_ = NaN;
    };
    /**
     * Update all animations.
     */
    View.prototype.updateAnimations_ = function () {
        if (this.updateAnimationKey_ !== undefined) {
            cancelAnimationFrame(this.updateAnimationKey_);
            this.updateAnimationKey_ = undefined;
        }
        if (!this.getAnimating()) {
            return;
        }
        var now = Date.now();
        var more = false;
        for (var i = this.animations_.length - 1; i >= 0; --i) {
            var series = this.animations_[i];
            var seriesComplete = true;
            for (var j = 0, jj = series.length; j < jj; ++j) {
                var animation = series[j];
                if (animation.complete) {
                    continue;
                }
                var elapsed = now - animation.start;
                var fraction = animation.duration > 0 ? elapsed / animation.duration : 1;
                if (fraction >= 1) {
                    animation.complete = true;
                    fraction = 1;
                }
                else {
                    seriesComplete = false;
                }
                var progress = animation.easing(fraction);
                if (animation.sourceCenter) {
                    var x0 = animation.sourceCenter[0];
                    var y0 = animation.sourceCenter[1];
                    var x1 = animation.targetCenter[0];
                    var y1 = animation.targetCenter[1];
                    this.nextCenter_ = animation.targetCenter;
                    var x = x0 + progress * (x1 - x0);
                    var y = y0 + progress * (y1 - y0);
                    this.targetCenter_ = [x, y];
                }
                if (animation.sourceResolution && animation.targetResolution) {
                    var resolution = progress === 1
                        ? animation.targetResolution
                        : animation.sourceResolution +
                            progress *
                                (animation.targetResolution - animation.sourceResolution);
                    if (animation.anchor) {
                        var size = this.getViewportSize_(this.getRotation());
                        var constrainedResolution = this.constraints_.resolution(resolution, 0, size, true);
                        this.targetCenter_ = this.calculateCenterZoom(constrainedResolution, animation.anchor);
                    }
                    this.nextResolution_ = animation.targetResolution;
                    this.targetResolution_ = resolution;
                    this.applyTargetState_(true);
                }
                if (animation.sourceRotation !== undefined &&
                    animation.targetRotation !== undefined) {
                    var rotation = progress === 1
                        ? (0,math/* modulo */.$W)(animation.targetRotation + Math.PI, 2 * Math.PI) -
                            Math.PI
                        : animation.sourceRotation +
                            progress *
                                (animation.targetRotation - animation.sourceRotation);
                    if (animation.anchor) {
                        var constrainedRotation = this.constraints_.rotation(rotation, true);
                        this.targetCenter_ = this.calculateCenterRotate(constrainedRotation, animation.anchor);
                    }
                    this.nextRotation_ = animation.targetRotation;
                    this.targetRotation_ = rotation;
                }
                this.applyTargetState_(true);
                more = true;
                if (!animation.complete) {
                    break;
                }
            }
            if (seriesComplete) {
                this.animations_[i] = null;
                this.setHint(ViewHint/* default.ANIMATING */.Z.ANIMATING, -1);
                this.nextCenter_ = null;
                this.nextResolution_ = NaN;
                this.nextRotation_ = NaN;
                var callback = series[0].callback;
                if (callback) {
                    animationCallback(callback, true);
                }
            }
        }
        // prune completed series
        this.animations_ = this.animations_.filter(Boolean);
        if (more && this.updateAnimationKey_ === undefined) {
            this.updateAnimationKey_ = requestAnimationFrame(this.updateAnimations_.bind(this));
        }
    };
    /**
     * @param {number} rotation Target rotation.
     * @param {import("./coordinate.js").Coordinate} anchor Rotation anchor.
     * @return {import("./coordinate.js").Coordinate|undefined} Center for rotation and anchor.
     */
    View.prototype.calculateCenterRotate = function (rotation, anchor) {
        var center;
        var currentCenter = this.getCenterInternal();
        if (currentCenter !== undefined) {
            center = [currentCenter[0] - anchor[0], currentCenter[1] - anchor[1]];
            (0,coordinate/* rotate */.U1)(center, rotation - this.getRotation());
            (0,coordinate/* add */.IH)(center, anchor);
        }
        return center;
    };
    /**
     * @param {number} resolution Target resolution.
     * @param {import("./coordinate.js").Coordinate} anchor Zoom anchor.
     * @return {import("./coordinate.js").Coordinate|undefined} Center for resolution and anchor.
     */
    View.prototype.calculateCenterZoom = function (resolution, anchor) {
        var center;
        var currentCenter = this.getCenterInternal();
        var currentResolution = this.getResolution();
        if (currentCenter !== undefined && currentResolution !== undefined) {
            var x = anchor[0] -
                (resolution * (anchor[0] - currentCenter[0])) / currentResolution;
            var y = anchor[1] -
                (resolution * (anchor[1] - currentCenter[1])) / currentResolution;
            center = [x, y];
        }
        return center;
    };
    /**
     * Returns the current viewport size.
     * @private
     * @param {number} [opt_rotation] Take into account the rotation of the viewport when giving the size
     * @return {import("./size.js").Size} Viewport size or `[100, 100]` when no viewport is found.
     */
    View.prototype.getViewportSize_ = function (opt_rotation) {
        var size = this.viewportSize_;
        if (opt_rotation) {
            var w = size[0];
            var h = size[1];
            return [
                Math.abs(w * Math.cos(opt_rotation)) +
                    Math.abs(h * Math.sin(opt_rotation)),
                Math.abs(w * Math.sin(opt_rotation)) +
                    Math.abs(h * Math.cos(opt_rotation)),
            ];
        }
        else {
            return size;
        }
    };
    /**
     * Stores the viewport size on the view. The viewport size is not read every time from the DOM
     * to avoid performance hit and layout reflow.
     * This should be done on map size change.
     * Note: the constraints are not resolved during an animation to avoid stopping it
     * @param {import("./size.js").Size} [opt_size] Viewport size; if undefined, [100, 100] is assumed
     */
    View.prototype.setViewportSize = function (opt_size) {
        this.viewportSize_ = Array.isArray(opt_size)
            ? opt_size.slice()
            : [100, 100];
        if (!this.getAnimating()) {
            this.resolveConstraints(0);
        }
    };
    /**
     * Get the view center.
     * @return {import("./coordinate.js").Coordinate|undefined} The center of the view.
     * @observable
     * @api
     */
    View.prototype.getCenter = function () {
        var center = this.getCenterInternal();
        if (!center) {
            return center;
        }
        return (0,proj/* toUserCoordinate */.lO)(center, this.getProjection());
    };
    /**
     * Get the view center without transforming to user projection.
     * @return {import("./coordinate.js").Coordinate|undefined} The center of the view.
     */
    View.prototype.getCenterInternal = function () {
        return /** @type {import("./coordinate.js").Coordinate|undefined} */ (this.get(ViewProperty.CENTER));
    };
    /**
     * @return {Constraints} Constraints.
     */
    View.prototype.getConstraints = function () {
        return this.constraints_;
    };
    /**
     * @return {boolean} Resolution constraint is set
     */
    View.prototype.getConstrainResolution = function () {
        return this.get('constrainResolution');
    };
    /**
     * @param {Array<number>} [opt_hints] Destination array.
     * @return {Array<number>} Hint.
     */
    View.prototype.getHints = function (opt_hints) {
        if (opt_hints !== undefined) {
            opt_hints[0] = this.hints_[0];
            opt_hints[1] = this.hints_[1];
            return opt_hints;
        }
        else {
            return this.hints_.slice();
        }
    };
    /**
     * Calculate the extent for the current view state and the passed size.
     * The size is the pixel dimensions of the box into which the calculated extent
     * should fit. In most cases you want to get the extent of the entire map,
     * that is `map.getSize()`.
     * @param {import("./size.js").Size} [opt_size] Box pixel size. If not provided, the size
     * of the map that uses this view will be used.
     * @return {import("./extent.js").Extent} Extent.
     * @api
     */
    View.prototype.calculateExtent = function (opt_size) {
        var extent = this.calculateExtentInternal(opt_size);
        return (0,proj/* toUserExtent */.Fj)(extent, this.getProjection());
    };
    /**
     * @param {import("./size.js").Size} [opt_size] Box pixel size. If not provided,
     * the map's last known viewport size will be used.
     * @return {import("./extent.js").Extent} Extent.
     */
    View.prototype.calculateExtentInternal = function (opt_size) {
        var size = opt_size || this.getViewportSizeMinusPadding_();
        var center = /** @type {!import("./coordinate.js").Coordinate} */ (this.getCenterInternal());
        (0,asserts/* assert */.h)(center, 1); // The view center is not defined
        var resolution = /** @type {!number} */ (this.getResolution());
        (0,asserts/* assert */.h)(resolution !== undefined, 2); // The view resolution is not defined
        var rotation = /** @type {!number} */ (this.getRotation());
        (0,asserts/* assert */.h)(rotation !== undefined, 3); // The view rotation is not defined
        return (0,ol_extent/* getForViewAndSize */.p8)(center, resolution, rotation, size);
    };
    /**
     * Get the maximum resolution of the view.
     * @return {number} The maximum resolution of the view.
     * @api
     */
    View.prototype.getMaxResolution = function () {
        return this.maxResolution_;
    };
    /**
     * Get the minimum resolution of the view.
     * @return {number} The minimum resolution of the view.
     * @api
     */
    View.prototype.getMinResolution = function () {
        return this.minResolution_;
    };
    /**
     * Get the maximum zoom level for the view.
     * @return {number} The maximum zoom level.
     * @api
     */
    View.prototype.getMaxZoom = function () {
        return /** @type {number} */ (this.getZoomForResolution(this.minResolution_));
    };
    /**
     * Set a new maximum zoom level for the view.
     * @param {number} zoom The maximum zoom level.
     * @api
     */
    View.prototype.setMaxZoom = function (zoom) {
        this.applyOptions_(this.getUpdatedOptions_({ maxZoom: zoom }));
    };
    /**
     * Get the minimum zoom level for the view.
     * @return {number} The minimum zoom level.
     * @api
     */
    View.prototype.getMinZoom = function () {
        return /** @type {number} */ (this.getZoomForResolution(this.maxResolution_));
    };
    /**
     * Set a new minimum zoom level for the view.
     * @param {number} zoom The minimum zoom level.
     * @api
     */
    View.prototype.setMinZoom = function (zoom) {
        this.applyOptions_(this.getUpdatedOptions_({ minZoom: zoom }));
    };
    /**
     * Set whether the view should allow intermediary zoom levels.
     * @param {boolean} enabled Whether the resolution is constrained.
     * @api
     */
    View.prototype.setConstrainResolution = function (enabled) {
        this.applyOptions_(this.getUpdatedOptions_({ constrainResolution: enabled }));
    };
    /**
     * Get the view projection.
     * @return {import("./proj/Projection.js").default} The projection of the view.
     * @api
     */
    View.prototype.getProjection = function () {
        return this.projection_;
    };
    /**
     * Get the view resolution.
     * @return {number|undefined} The resolution of the view.
     * @observable
     * @api
     */
    View.prototype.getResolution = function () {
        return /** @type {number|undefined} */ (this.get(ViewProperty.RESOLUTION));
    };
    /**
     * Get the resolutions for the view. This returns the array of resolutions
     * passed to the constructor of the View, or undefined if none were given.
     * @return {Array<number>|undefined} The resolutions of the view.
     * @api
     */
    View.prototype.getResolutions = function () {
        return this.resolutions_;
    };
    /**
     * Get the resolution for a provided extent (in map units) and size (in pixels).
     * @param {import("./extent.js").Extent} extent Extent.
     * @param {import("./size.js").Size} [opt_size] Box pixel size.
     * @return {number} The resolution at which the provided extent will render at
     *     the given size.
     * @api
     */
    View.prototype.getResolutionForExtent = function (extent, opt_size) {
        return this.getResolutionForExtentInternal((0,proj/* fromUserExtent */.dY)(extent, this.getProjection()), opt_size);
    };
    /**
     * Get the resolution for a provided extent (in map units) and size (in pixels).
     * @param {import("./extent.js").Extent} extent Extent.
     * @param {import("./size.js").Size} [opt_size] Box pixel size.
     * @return {number} The resolution at which the provided extent will render at
     *     the given size.
     */
    View.prototype.getResolutionForExtentInternal = function (extent, opt_size) {
        var size = opt_size || this.getViewportSizeMinusPadding_();
        var xResolution = (0,ol_extent/* getWidth */.dz)(extent) / size[0];
        var yResolution = (0,ol_extent/* getHeight */.Cr)(extent) / size[1];
        return Math.max(xResolution, yResolution);
    };
    /**
     * Return a function that returns a value between 0 and 1 for a
     * resolution. Exponential scaling is assumed.
     * @param {number} [opt_power] Power.
     * @return {function(number): number} Resolution for value function.
     */
    View.prototype.getResolutionForValueFunction = function (opt_power) {
        var power = opt_power || 2;
        var maxResolution = this.getConstrainedResolution(this.maxResolution_);
        var minResolution = this.minResolution_;
        var max = Math.log(maxResolution / minResolution) / Math.log(power);
        return (
        /**
         * @param {number} value Value.
         * @return {number} Resolution.
         */
        function (value) {
            var resolution = maxResolution / Math.pow(power, value * max);
            return resolution;
        });
    };
    /**
     * Get the view rotation.
     * @return {number} The rotation of the view in radians.
     * @observable
     * @api
     */
    View.prototype.getRotation = function () {
        return /** @type {number} */ (this.get(ViewProperty.ROTATION));
    };
    /**
     * Return a function that returns a resolution for a value between
     * 0 and 1. Exponential scaling is assumed.
     * @param {number} [opt_power] Power.
     * @return {function(number): number} Value for resolution function.
     */
    View.prototype.getValueForResolutionFunction = function (opt_power) {
        var logPower = Math.log(opt_power || 2);
        var maxResolution = this.getConstrainedResolution(this.maxResolution_);
        var minResolution = this.minResolution_;
        var max = Math.log(maxResolution / minResolution) / logPower;
        return (
        /**
         * @param {number} resolution Resolution.
         * @return {number} Value.
         */
        function (resolution) {
            var value = Math.log(maxResolution / resolution) / logPower / max;
            return value;
        });
    };
    /**
     * Returns the size of the viewport minus padding.
     * @private
     * @param {number} [opt_rotation] Take into account the rotation of the viewport when giving the size
     * @return {import("./size.js").Size} Viewport size reduced by the padding.
     */
    View.prototype.getViewportSizeMinusPadding_ = function (opt_rotation) {
        var size = this.getViewportSize_(opt_rotation);
        var padding = this.padding_;
        if (padding) {
            size = [
                size[0] - padding[1] - padding[3],
                size[1] - padding[0] - padding[2],
            ];
        }
        return size;
    };
    /**
     * @return {State} View state.
     */
    View.prototype.getState = function () {
        var projection = this.getProjection();
        var resolution = this.getResolution();
        var rotation = this.getRotation();
        var center = /** @type {import("./coordinate.js").Coordinate} */ (this.getCenterInternal());
        var padding = this.padding_;
        if (padding) {
            var reducedSize = this.getViewportSizeMinusPadding_();
            center = calculateCenterOn(center, this.getViewportSize_(), [reducedSize[0] / 2 + padding[3], reducedSize[1] / 2 + padding[0]], resolution, rotation);
        }
        return {
            center: center.slice(0),
            projection: projection !== undefined ? projection : null,
            resolution: resolution,
            nextCenter: this.nextCenter_,
            nextResolution: this.nextResolution_,
            nextRotation: this.nextRotation_,
            rotation: rotation,
            zoom: this.getZoom(),
        };
    };
    /**
     * Get the current zoom level. This method may return non-integer zoom levels
     * if the view does not constrain the resolution, or if an interaction or
     * animation is underway.
     * @return {number|undefined} Zoom.
     * @api
     */
    View.prototype.getZoom = function () {
        var zoom;
        var resolution = this.getResolution();
        if (resolution !== undefined) {
            zoom = this.getZoomForResolution(resolution);
        }
        return zoom;
    };
    /**
     * Get the zoom level for a resolution.
     * @param {number} resolution The resolution.
     * @return {number|undefined} The zoom level for the provided resolution.
     * @api
     */
    View.prototype.getZoomForResolution = function (resolution) {
        var offset = this.minZoom_ || 0;
        var max, zoomFactor;
        if (this.resolutions_) {
            var nearest = (0,array/* linearFindNearest */.h7)(this.resolutions_, resolution, 1);
            offset = nearest;
            max = this.resolutions_[nearest];
            if (nearest == this.resolutions_.length - 1) {
                zoomFactor = 2;
            }
            else {
                zoomFactor = max / this.resolutions_[nearest + 1];
            }
        }
        else {
            max = this.maxResolution_;
            zoomFactor = this.zoomFactor_;
        }
        return offset + Math.log(max / resolution) / Math.log(zoomFactor);
    };
    /**
     * Get the resolution for a zoom level.
     * @param {number} zoom Zoom level.
     * @return {number} The view resolution for the provided zoom level.
     * @api
     */
    View.prototype.getResolutionForZoom = function (zoom) {
        if (this.resolutions_) {
            if (this.resolutions_.length <= 1) {
                return 0;
            }
            var baseLevel = (0,math/* clamp */.uZ)(Math.floor(zoom), 0, this.resolutions_.length - 2);
            var zoomFactor = this.resolutions_[baseLevel] / this.resolutions_[baseLevel + 1];
            return (this.resolutions_[baseLevel] /
                Math.pow(zoomFactor, (0,math/* clamp */.uZ)(zoom - baseLevel, 0, 1)));
        }
        else {
            return (this.maxResolution_ / Math.pow(this.zoomFactor_, zoom - this.minZoom_));
        }
    };
    /**
     * Fit the given geometry or extent based on the given map size and border.
     * The size is pixel dimensions of the box to fit the extent into.
     * In most cases you will want to use the map size, that is `map.getSize()`.
     * Takes care of the map angle.
     * @param {import("./geom/SimpleGeometry.js").default|import("./extent.js").Extent} geometryOrExtent The geometry or
     *     extent to fit the view to.
     * @param {FitOptions} [opt_options] Options.
     * @api
     */
    View.prototype.fit = function (geometryOrExtent, opt_options) {
        /** @type {import("./geom/SimpleGeometry.js").default} */
        var geometry;
        (0,asserts/* assert */.h)(Array.isArray(geometryOrExtent) ||
            typeof ( /** @type {?} */(geometryOrExtent).getSimplifiedGeometry) ===
                'function', 24); // Invalid extent or geometry provided as `geometry`
        if (Array.isArray(geometryOrExtent)) {
            (0,asserts/* assert */.h)(!(0,ol_extent/* isEmpty */.xb)(geometryOrExtent), 25); // Cannot fit empty extent provided as `geometry`
            var extent = (0,proj/* fromUserExtent */.dY)(geometryOrExtent, this.getProjection());
            geometry = (0,Polygon/* fromExtent */.oJ)(extent);
        }
        else if (geometryOrExtent.getType() === 'Circle') {
            var extent = (0,proj/* fromUserExtent */.dY)(geometryOrExtent.getExtent(), this.getProjection());
            geometry = (0,Polygon/* fromExtent */.oJ)(extent);
            geometry.rotate(this.getRotation(), (0,ol_extent/* getCenter */.qg)(extent));
        }
        else {
            var userProjection = (0,proj/* getUserProjection */.Cs)();
            if (userProjection) {
                geometry = /** @type {import("./geom/SimpleGeometry.js").default} */ (geometryOrExtent
                    .clone()
                    .transform(userProjection, this.getProjection()));
            }
            else {
                geometry = geometryOrExtent;
            }
        }
        this.fitInternal(geometry, opt_options);
    };
    /**
     * Calculate rotated extent
     * @param {import("./geom/SimpleGeometry.js").default} geometry The geometry.
     * @return {import("./extent").Extent} The rotated extent for the geometry.
     */
    View.prototype.rotatedExtentForGeometry = function (geometry) {
        var rotation = this.getRotation();
        var cosAngle = Math.cos(rotation);
        var sinAngle = Math.sin(-rotation);
        var coords = geometry.getFlatCoordinates();
        var stride = geometry.getStride();
        var minRotX = +Infinity;
        var minRotY = +Infinity;
        var maxRotX = -Infinity;
        var maxRotY = -Infinity;
        for (var i = 0, ii = coords.length; i < ii; i += stride) {
            var rotX = coords[i] * cosAngle - coords[i + 1] * sinAngle;
            var rotY = coords[i] * sinAngle + coords[i + 1] * cosAngle;
            minRotX = Math.min(minRotX, rotX);
            minRotY = Math.min(minRotY, rotY);
            maxRotX = Math.max(maxRotX, rotX);
            maxRotY = Math.max(maxRotY, rotY);
        }
        return [minRotX, minRotY, maxRotX, maxRotY];
    };
    /**
     * @param {import("./geom/SimpleGeometry.js").default} geometry The geometry.
     * @param {FitOptions} [opt_options] Options.
     */
    View.prototype.fitInternal = function (geometry, opt_options) {
        var options = opt_options || {};
        var size = options.size;
        if (!size) {
            size = this.getViewportSizeMinusPadding_();
        }
        var padding = options.padding !== undefined ? options.padding : [0, 0, 0, 0];
        var nearest = options.nearest !== undefined ? options.nearest : false;
        var minResolution;
        if (options.minResolution !== undefined) {
            minResolution = options.minResolution;
        }
        else if (options.maxZoom !== undefined) {
            minResolution = this.getResolutionForZoom(options.maxZoom);
        }
        else {
            minResolution = 0;
        }
        var rotatedExtent = this.rotatedExtentForGeometry(geometry);
        // calculate resolution
        var resolution = this.getResolutionForExtentInternal(rotatedExtent, [
            size[0] - padding[1] - padding[3],
            size[1] - padding[0] - padding[2],
        ]);
        resolution = isNaN(resolution)
            ? minResolution
            : Math.max(resolution, minResolution);
        resolution = this.getConstrainedResolution(resolution, nearest ? 0 : 1);
        // calculate center
        var rotation = this.getRotation();
        var sinAngle = Math.sin(rotation);
        var cosAngle = Math.cos(rotation);
        var centerRot = (0,ol_extent/* getCenter */.qg)(rotatedExtent);
        centerRot[0] += ((padding[1] - padding[3]) / 2) * resolution;
        centerRot[1] += ((padding[0] - padding[2]) / 2) * resolution;
        var centerX = centerRot[0] * cosAngle - centerRot[1] * sinAngle;
        var centerY = centerRot[1] * cosAngle + centerRot[0] * sinAngle;
        var center = this.getConstrainedCenter([centerX, centerY], resolution);
        var callback = options.callback ? options.callback : functions/* VOID */.Zn;
        if (options.duration !== undefined) {
            this.animateInternal({
                resolution: resolution,
                center: center,
                duration: options.duration,
                easing: options.easing,
            }, callback);
        }
        else {
            this.targetResolution_ = resolution;
            this.targetCenter_ = center;
            this.applyTargetState_(false, true);
            animationCallback(callback, true);
        }
    };
    /**
     * Center on coordinate and view position.
     * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
     * @param {import("./size.js").Size} size Box pixel size.
     * @param {import("./pixel.js").Pixel} position Position on the view to center on.
     * @api
     */
    View.prototype.centerOn = function (coordinate, size, position) {
        this.centerOnInternal((0,proj/* fromUserCoordinate */.Vs)(coordinate, this.getProjection()), size, position);
    };
    /**
     * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
     * @param {import("./size.js").Size} size Box pixel size.
     * @param {import("./pixel.js").Pixel} position Position on the view to center on.
     */
    View.prototype.centerOnInternal = function (coordinate, size, position) {
        this.setCenterInternal(calculateCenterOn(coordinate, size, position, this.getResolution(), this.getRotation()));
    };
    /**
     * Calculates the shift between map and viewport center.
     * @param {import("./coordinate.js").Coordinate} center Center.
     * @param {number} resolution Resolution.
     * @param {number} rotation Rotation.
     * @param {import("./size.js").Size} size Size.
     * @return {Array<number>|undefined} Center shift.
     */
    View.prototype.calculateCenterShift = function (center, resolution, rotation, size) {
        var centerShift;
        var padding = this.padding_;
        if (padding && center) {
            var reducedSize = this.getViewportSizeMinusPadding_(-rotation);
            var shiftedCenter = calculateCenterOn(center, size, [reducedSize[0] / 2 + padding[3], reducedSize[1] / 2 + padding[0]], resolution, rotation);
            centerShift = [
                center[0] - shiftedCenter[0],
                center[1] - shiftedCenter[1],
            ];
        }
        return centerShift;
    };
    /**
     * @return {boolean} Is defined.
     */
    View.prototype.isDef = function () {
        return !!this.getCenterInternal() && this.getResolution() !== undefined;
    };
    /**
     * Adds relative coordinates to the center of the view. Any extent constraint will apply.
     * @param {import("./coordinate.js").Coordinate} deltaCoordinates Relative value to add.
     * @api
     */
    View.prototype.adjustCenter = function (deltaCoordinates) {
        var center = (0,proj/* toUserCoordinate */.lO)(this.targetCenter_, this.getProjection());
        this.setCenter([
            center[0] + deltaCoordinates[0],
            center[1] + deltaCoordinates[1],
        ]);
    };
    /**
     * Adds relative coordinates to the center of the view. Any extent constraint will apply.
     * @param {import("./coordinate.js").Coordinate} deltaCoordinates Relative value to add.
     */
    View.prototype.adjustCenterInternal = function (deltaCoordinates) {
        var center = this.targetCenter_;
        this.setCenterInternal([
            center[0] + deltaCoordinates[0],
            center[1] + deltaCoordinates[1],
        ]);
    };
    /**
     * Multiply the view resolution by a ratio, optionally using an anchor. Any resolution
     * constraint will apply.
     * @param {number} ratio The ratio to apply on the view resolution.
     * @param {import("./coordinate.js").Coordinate} [opt_anchor] The origin of the transformation.
     * @api
     */
    View.prototype.adjustResolution = function (ratio, opt_anchor) {
        var anchor = opt_anchor && (0,proj/* fromUserCoordinate */.Vs)(opt_anchor, this.getProjection());
        this.adjustResolutionInternal(ratio, anchor);
    };
    /**
     * Multiply the view resolution by a ratio, optionally using an anchor. Any resolution
     * constraint will apply.
     * @param {number} ratio The ratio to apply on the view resolution.
     * @param {import("./coordinate.js").Coordinate} [opt_anchor] The origin of the transformation.
     */
    View.prototype.adjustResolutionInternal = function (ratio, opt_anchor) {
        var isMoving = this.getAnimating() || this.getInteracting();
        var size = this.getViewportSize_(this.getRotation());
        var newResolution = this.constraints_.resolution(this.targetResolution_ * ratio, 0, size, isMoving);
        if (opt_anchor) {
            this.targetCenter_ = this.calculateCenterZoom(newResolution, opt_anchor);
        }
        this.targetResolution_ *= ratio;
        this.applyTargetState_();
    };
    /**
     * Adds a value to the view zoom level, optionally using an anchor. Any resolution
     * constraint will apply.
     * @param {number} delta Relative value to add to the zoom level.
     * @param {import("./coordinate.js").Coordinate} [opt_anchor] The origin of the transformation.
     * @api
     */
    View.prototype.adjustZoom = function (delta, opt_anchor) {
        this.adjustResolution(Math.pow(this.zoomFactor_, -delta), opt_anchor);
    };
    /**
     * Adds a value to the view rotation, optionally using an anchor. Any rotation
     * constraint will apply.
     * @param {number} delta Relative value to add to the zoom rotation, in radians.
     * @param {import("./coordinate.js").Coordinate} [opt_anchor] The rotation center.
     * @api
     */
    View.prototype.adjustRotation = function (delta, opt_anchor) {
        if (opt_anchor) {
            opt_anchor = (0,proj/* fromUserCoordinate */.Vs)(opt_anchor, this.getProjection());
        }
        this.adjustRotationInternal(delta, opt_anchor);
    };
    /**
     * @param {number} delta Relative value to add to the zoom rotation, in radians.
     * @param {import("./coordinate.js").Coordinate} [opt_anchor] The rotation center.
     */
    View.prototype.adjustRotationInternal = function (delta, opt_anchor) {
        var isMoving = this.getAnimating() || this.getInteracting();
        var newRotation = this.constraints_.rotation(this.targetRotation_ + delta, isMoving);
        if (opt_anchor) {
            this.targetCenter_ = this.calculateCenterRotate(newRotation, opt_anchor);
        }
        this.targetRotation_ += delta;
        this.applyTargetState_();
    };
    /**
     * Set the center of the current view. Any extent constraint will apply.
     * @param {import("./coordinate.js").Coordinate|undefined} center The center of the view.
     * @observable
     * @api
     */
    View.prototype.setCenter = function (center) {
        this.setCenterInternal(center ? (0,proj/* fromUserCoordinate */.Vs)(center, this.getProjection()) : center);
    };
    /**
     * Set the center using the view projection (not the user projection).
     * @param {import("./coordinate.js").Coordinate|undefined} center The center of the view.
     */
    View.prototype.setCenterInternal = function (center) {
        this.targetCenter_ = center;
        this.applyTargetState_();
    };
    /**
     * @param {import("./ViewHint.js").default} hint Hint.
     * @param {number} delta Delta.
     * @return {number} New value.
     */
    View.prototype.setHint = function (hint, delta) {
        this.hints_[hint] += delta;
        this.changed();
        return this.hints_[hint];
    };
    /**
     * Set the resolution for this view. Any resolution constraint will apply.
     * @param {number|undefined} resolution The resolution of the view.
     * @observable
     * @api
     */
    View.prototype.setResolution = function (resolution) {
        this.targetResolution_ = resolution;
        this.applyTargetState_();
    };
    /**
     * Set the rotation for this view. Any rotation constraint will apply.
     * @param {number} rotation The rotation of the view in radians.
     * @observable
     * @api
     */
    View.prototype.setRotation = function (rotation) {
        this.targetRotation_ = rotation;
        this.applyTargetState_();
    };
    /**
     * Zoom to a specific zoom level. Any resolution constrain will apply.
     * @param {number} zoom Zoom level.
     * @api
     */
    View.prototype.setZoom = function (zoom) {
        this.setResolution(this.getResolutionForZoom(zoom));
    };
    /**
     * Recompute rotation/resolution/center based on target values.
     * Note: we have to compute rotation first, then resolution and center considering that
     * parameters can influence one another in case a view extent constraint is present.
     * @param {boolean} [opt_doNotCancelAnims] Do not cancel animations.
     * @param {boolean} [opt_forceMoving] Apply constraints as if the view is moving.
     * @private
     */
    View.prototype.applyTargetState_ = function (opt_doNotCancelAnims, opt_forceMoving) {
        var isMoving = this.getAnimating() || this.getInteracting() || opt_forceMoving;
        // compute rotation
        var newRotation = this.constraints_.rotation(this.targetRotation_, isMoving);
        var size = this.getViewportSize_(newRotation);
        var newResolution = this.constraints_.resolution(this.targetResolution_, 0, size, isMoving);
        var newCenter = this.constraints_.center(this.targetCenter_, newResolution, size, isMoving, this.calculateCenterShift(this.targetCenter_, newResolution, newRotation, size));
        if (this.get(ViewProperty.ROTATION) !== newRotation) {
            this.set(ViewProperty.ROTATION, newRotation);
        }
        if (this.get(ViewProperty.RESOLUTION) !== newResolution) {
            this.set(ViewProperty.RESOLUTION, newResolution);
            this.set('zoom', this.getZoom(), true);
        }
        if (!newCenter ||
            !this.get(ViewProperty.CENTER) ||
            !(0,coordinate/* equals */.fS)(this.get(ViewProperty.CENTER), newCenter)) {
            this.set(ViewProperty.CENTER, newCenter);
        }
        if (this.getAnimating() && !opt_doNotCancelAnims) {
            this.cancelAnimations();
        }
        this.cancelAnchor_ = undefined;
    };
    /**
     * If any constraints need to be applied, an animation will be triggered.
     * This is typically done on interaction end.
     * Note: calling this with a duration of 0 will apply the constrained values straight away,
     * without animation.
     * @param {number} [opt_duration] The animation duration in ms.
     * @param {number} [opt_resolutionDirection] Which direction to zoom.
     * @param {import("./coordinate.js").Coordinate} [opt_anchor] The origin of the transformation.
     */
    View.prototype.resolveConstraints = function (opt_duration, opt_resolutionDirection, opt_anchor) {
        var duration = opt_duration !== undefined ? opt_duration : 200;
        var direction = opt_resolutionDirection || 0;
        var newRotation = this.constraints_.rotation(this.targetRotation_);
        var size = this.getViewportSize_(newRotation);
        var newResolution = this.constraints_.resolution(this.targetResolution_, direction, size);
        var newCenter = this.constraints_.center(this.targetCenter_, newResolution, size, false, this.calculateCenterShift(this.targetCenter_, newResolution, newRotation, size));
        if (duration === 0 && !this.cancelAnchor_) {
            this.targetResolution_ = newResolution;
            this.targetRotation_ = newRotation;
            this.targetCenter_ = newCenter;
            this.applyTargetState_();
            return;
        }
        var anchor = opt_anchor || (duration === 0 ? this.cancelAnchor_ : undefined);
        this.cancelAnchor_ = undefined;
        if (this.getResolution() !== newResolution ||
            this.getRotation() !== newRotation ||
            !this.getCenterInternal() ||
            !(0,coordinate/* equals */.fS)(this.getCenterInternal(), newCenter)) {
            if (this.getAnimating()) {
                this.cancelAnimations();
            }
            this.animateInternal({
                rotation: newRotation,
                center: newCenter,
                resolution: newResolution,
                duration: duration,
                easing: easing/* easeOut */.Vv,
                anchor: anchor,
            });
        }
    };
    /**
     * Notify the View that an interaction has started.
     * The view state will be resolved to a stable one if needed
     * (depending on its constraints).
     * @api
     */
    View.prototype.beginInteraction = function () {
        this.resolveConstraints(0);
        this.setHint(ViewHint/* default.INTERACTING */.Z.INTERACTING, 1);
    };
    /**
     * Notify the View that an interaction has ended. The view state will be resolved
     * to a stable one if needed (depending on its constraints).
     * @param {number} [opt_duration] Animation duration in ms.
     * @param {number} [opt_resolutionDirection] Which direction to zoom.
     * @param {import("./coordinate.js").Coordinate} [opt_anchor] The origin of the transformation.
     * @api
     */
    View.prototype.endInteraction = function (opt_duration, opt_resolutionDirection, opt_anchor) {
        var anchor = opt_anchor && (0,proj/* fromUserCoordinate */.Vs)(opt_anchor, this.getProjection());
        this.endInteractionInternal(opt_duration, opt_resolutionDirection, anchor);
    };
    /**
     * Notify the View that an interaction has ended. The view state will be resolved
     * to a stable one if needed (depending on its constraints).
     * @param {number} [opt_duration] Animation duration in ms.
     * @param {number} [opt_resolutionDirection] Which direction to zoom.
     * @param {import("./coordinate.js").Coordinate} [opt_anchor] The origin of the transformation.
     */
    View.prototype.endInteractionInternal = function (opt_duration, opt_resolutionDirection, opt_anchor) {
        this.setHint(ViewHint/* default.INTERACTING */.Z.INTERACTING, -1);
        this.resolveConstraints(opt_duration, opt_resolutionDirection, opt_anchor);
    };
    /**
     * Get a valid position for the view center according to the current constraints.
     * @param {import("./coordinate.js").Coordinate|undefined} targetCenter Target center position.
     * @param {number} [opt_targetResolution] Target resolution. If not supplied, the current one will be used.
     * This is useful to guess a valid center position at a different zoom level.
     * @return {import("./coordinate.js").Coordinate|undefined} Valid center position.
     */
    View.prototype.getConstrainedCenter = function (targetCenter, opt_targetResolution) {
        var size = this.getViewportSize_(this.getRotation());
        return this.constraints_.center(targetCenter, opt_targetResolution || this.getResolution(), size);
    };
    /**
     * Get a valid zoom level according to the current view constraints.
     * @param {number|undefined} targetZoom Target zoom.
     * @param {number} [opt_direction=0] Indicate which resolution should be used
     * by a renderer if the view resolution does not match any resolution of the tile source.
     * If 0, the nearest resolution will be used. If 1, the nearest lower resolution
     * will be used. If -1, the nearest higher resolution will be used.
     * @return {number|undefined} Valid zoom level.
     */
    View.prototype.getConstrainedZoom = function (targetZoom, opt_direction) {
        var targetRes = this.getResolutionForZoom(targetZoom);
        return this.getZoomForResolution(this.getConstrainedResolution(targetRes, opt_direction));
    };
    /**
     * Get a valid resolution according to the current view constraints.
     * @param {number|undefined} targetResolution Target resolution.
     * @param {number} [opt_direction=0] Indicate which resolution should be used
     * by a renderer if the view resolution does not match any resolution of the tile source.
     * If 0, the nearest resolution will be used. If 1, the nearest lower resolution
     * will be used. If -1, the nearest higher resolution will be used.
     * @return {number|undefined} Valid resolution.
     */
    View.prototype.getConstrainedResolution = function (targetResolution, opt_direction) {
        var direction = opt_direction || 0;
        var size = this.getViewportSize_(this.getRotation());
        return this.constraints_.resolution(targetResolution, direction, size);
    };
    return View;
}(ol_Object/* default */.Z));
/**
 * @param {Function} callback Callback.
 * @param {*} returnValue Return value.
 */
function animationCallback(callback, returnValue) {
    setTimeout(function () {
        callback(returnValue);
    }, 0);
}
/**
 * @param {ViewOptions} options View options.
 * @return {import("./centerconstraint.js").Type} The constraint.
 */
function createCenterConstraint(options) {
    if (options.extent !== undefined) {
        var smooth = options.smoothExtentConstraint !== undefined
            ? options.smoothExtentConstraint
            : true;
        return createExtent(options.extent, options.constrainOnlyCenter, smooth);
    }
    var projection = (0,proj/* createProjection */.UQ)(options.projection, 'EPSG:3857');
    if (options.multiWorld !== true && projection.isGlobal()) {
        var extent = projection.getExtent().slice();
        extent[0] = -Infinity;
        extent[2] = Infinity;
        return createExtent(extent, false, false);
    }
    return none;
}
/**
 * @param {ViewOptions} options View options.
 * @return {{constraint: import("./resolutionconstraint.js").Type, maxResolution: number,
 *     minResolution: number, minZoom: number, zoomFactor: number}} The constraint.
 */
function createResolutionConstraint(options) {
    var resolutionConstraint;
    var maxResolution;
    var minResolution;
    // TODO: move these to be ol constants
    // see https://github.com/openlayers/openlayers/issues/2076
    var defaultMaxZoom = 28;
    var defaultZoomFactor = 2;
    var minZoom = options.minZoom !== undefined ? options.minZoom : DEFAULT_MIN_ZOOM;
    var maxZoom = options.maxZoom !== undefined ? options.maxZoom : defaultMaxZoom;
    var zoomFactor = options.zoomFactor !== undefined ? options.zoomFactor : defaultZoomFactor;
    var multiWorld = options.multiWorld !== undefined ? options.multiWorld : false;
    var smooth = options.smoothResolutionConstraint !== undefined
        ? options.smoothResolutionConstraint
        : true;
    var showFullExtent = options.showFullExtent !== undefined ? options.showFullExtent : false;
    var projection = (0,proj/* createProjection */.UQ)(options.projection, 'EPSG:3857');
    var projExtent = projection.getExtent();
    var constrainOnlyCenter = options.constrainOnlyCenter;
    var extent = options.extent;
    if (!multiWorld && !extent && projection.isGlobal()) {
        constrainOnlyCenter = false;
        extent = projExtent;
    }
    if (options.resolutions !== undefined) {
        var resolutions = options.resolutions;
        maxResolution = resolutions[minZoom];
        minResolution =
            resolutions[maxZoom] !== undefined
                ? resolutions[maxZoom]
                : resolutions[resolutions.length - 1];
        if (options.constrainResolution) {
            resolutionConstraint = createSnapToResolutions(resolutions, smooth, !constrainOnlyCenter && extent, showFullExtent);
        }
        else {
            resolutionConstraint = createMinMaxResolution(maxResolution, minResolution, smooth, !constrainOnlyCenter && extent, showFullExtent);
        }
    }
    else {
        // calculate the default min and max resolution
        var size = !projExtent
            ? // use an extent that can fit the whole world if need be
                (360 * proj/* METERS_PER_UNIT */.Wm[Units/* default.DEGREES */.ZP.DEGREES]) / projection.getMetersPerUnit()
            : Math.max((0,ol_extent/* getWidth */.dz)(projExtent), (0,ol_extent/* getHeight */.Cr)(projExtent));
        var defaultMaxResolution = size / common/* DEFAULT_TILE_SIZE */.S / Math.pow(defaultZoomFactor, DEFAULT_MIN_ZOOM);
        var defaultMinResolution = defaultMaxResolution /
            Math.pow(defaultZoomFactor, defaultMaxZoom - DEFAULT_MIN_ZOOM);
        // user provided maxResolution takes precedence
        maxResolution = options.maxResolution;
        if (maxResolution !== undefined) {
            minZoom = 0;
        }
        else {
            maxResolution = defaultMaxResolution / Math.pow(zoomFactor, minZoom);
        }
        // user provided minResolution takes precedence
        minResolution = options.minResolution;
        if (minResolution === undefined) {
            if (options.maxZoom !== undefined) {
                if (options.maxResolution !== undefined) {
                    minResolution = maxResolution / Math.pow(zoomFactor, maxZoom);
                }
                else {
                    minResolution = defaultMaxResolution / Math.pow(zoomFactor, maxZoom);
                }
            }
            else {
                minResolution = defaultMinResolution;
            }
        }
        // given discrete zoom levels, minResolution may be different than provided
        maxZoom =
            minZoom +
                Math.floor(Math.log(maxResolution / minResolution) / Math.log(zoomFactor));
        minResolution = maxResolution / Math.pow(zoomFactor, maxZoom - minZoom);
        if (options.constrainResolution) {
            resolutionConstraint = createSnapToPower(zoomFactor, maxResolution, minResolution, smooth, !constrainOnlyCenter && extent, showFullExtent);
        }
        else {
            resolutionConstraint = createMinMaxResolution(maxResolution, minResolution, smooth, !constrainOnlyCenter && extent, showFullExtent);
        }
    }
    return {
        constraint: resolutionConstraint,
        maxResolution: maxResolution,
        minResolution: minResolution,
        minZoom: minZoom,
        zoomFactor: zoomFactor,
    };
}
/**
 * @param {ViewOptions} options View options.
 * @return {import("./rotationconstraint.js").Type} Rotation constraint.
 */
function createRotationConstraint(options) {
    var enableRotation = options.enableRotation !== undefined ? options.enableRotation : true;
    if (enableRotation) {
        var constrainRotation = options.constrainRotation;
        if (constrainRotation === undefined || constrainRotation === true) {
            return (0,rotationconstraint/* createSnapToZero */.Gw)();
        }
        else if (constrainRotation === false) {
            return rotationconstraint/* none */.YP;
        }
        else if (typeof constrainRotation === 'number') {
            return (0,rotationconstraint/* createSnapToN */.gE)(constrainRotation);
        }
        else {
            return rotationconstraint/* none */.YP;
        }
    }
    else {
        return rotationconstraint/* disable */.h$;
    }
}
/**
 * Determine if an animation involves no view change.
 * @param {Animation} animation The animation.
 * @return {boolean} The animation involves no view change.
 */
function isNoopAnimation(animation) {
    if (animation.sourceCenter && animation.targetCenter) {
        if (!(0,coordinate/* equals */.fS)(animation.sourceCenter, animation.targetCenter)) {
            return false;
        }
    }
    if (animation.sourceResolution !== animation.targetResolution) {
        return false;
    }
    if (animation.sourceRotation !== animation.targetRotation) {
        return false;
    }
    return true;
}
/**
 * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
 * @param {import("./size.js").Size} size Box pixel size.
 * @param {import("./pixel.js").Pixel} position Position on the view to center on.
 * @param {number} resolution Resolution.
 * @param {number} rotation Rotation.
 * @return {import("./coordinate.js").Coordinate} Shifted center.
 */
function calculateCenterOn(coordinate, size, position, resolution, rotation) {
    // calculate rotated position
    var cosAngle = Math.cos(-rotation);
    var sinAngle = Math.sin(-rotation);
    var rotX = coordinate[0] * cosAngle - coordinate[1] * sinAngle;
    var rotY = coordinate[1] * cosAngle + coordinate[0] * sinAngle;
    rotX += (size[0] / 2 - position[0]) * resolution;
    rotY += (position[1] - size[1] / 2) * resolution;
    // go back to original angle
    sinAngle = -sinAngle; // go back to original rotation
    var centerX = rotX * cosAngle - rotY * sinAngle;
    var centerY = rotY * cosAngle + rotX * sinAngle;
    return [centerX, centerY];
}
/* harmony default export */ const ol_View = (View);
//# sourceMappingURL=View.js.map

/***/ }),

/***/ 7755:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @module ol/ViewHint
 */
/**
 * @enum {number}
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    ANIMATING: 0,
    INTERACTING: 1,
});
//# sourceMappingURL=ViewHint.js.map

/***/ }),

/***/ 5537:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fS": () => (/* binding */ equals),
/* harmony export */   "h7": () => (/* binding */ linearFindNearest),
/* harmony export */   "kK": () => (/* binding */ numberSafeCompareFunction),
/* harmony export */   "l7": () => (/* binding */ extend),
/* harmony export */   "pT": () => (/* binding */ isSorted)
/* harmony export */ });
/* unused harmony exports binarySearch, includes, reverseSubArray, remove, find, stableSort, findIndex */
/**
 * @module ol/array
 */
/**
 * Performs a binary search on the provided sorted list and returns the index of the item if found. If it can't be found it'll return -1.
 * https://github.com/darkskyapp/binary-search
 *
 * @param {Array<*>} haystack Items to search through.
 * @param {*} needle The item to look for.
 * @param {Function} [opt_comparator] Comparator function.
 * @return {number} The index of the item if found, -1 if not.
 */
function binarySearch(haystack, needle, opt_comparator) {
    var mid, cmp;
    var comparator = opt_comparator || numberSafeCompareFunction;
    var low = 0;
    var high = haystack.length;
    var found = false;
    while (low < high) {
        /* Note that "(low + high) >>> 1" may overflow, and results in a typecast
         * to double (which gives the wrong results). */
        mid = low + ((high - low) >> 1);
        cmp = +comparator(haystack[mid], needle);
        if (cmp < 0.0) {
            /* Too low. */
            low = mid + 1;
        }
        else {
            /* Key found or too high */
            high = mid;
            found = !cmp;
        }
    }
    /* Key not found. */
    return found ? low : ~low;
}
/**
 * Compare function for array sort that is safe for numbers.
 * @param {*} a The first object to be compared.
 * @param {*} b The second object to be compared.
 * @return {number} A negative number, zero, or a positive number as the first
 *     argument is less than, equal to, or greater than the second.
 */
function numberSafeCompareFunction(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
}
/**
 * Whether the array contains the given object.
 * @param {Array<*>} arr The array to test for the presence of the element.
 * @param {*} obj The object for which to test.
 * @return {boolean} The object is in the array.
 */
function includes(arr, obj) {
    return arr.indexOf(obj) >= 0;
}
/**
 * {@link module:ol/tilegrid/TileGrid~TileGrid#getZForResolution} can use a function
 * of this type to determine which nearest resolution to use.
 *
 * This function takes a `{number}` representing a value between two array entries,
 * a `{number}` representing the value of the nearest higher entry and
 * a `{number}` representing the value of the nearest lower entry
 * as arguments and returns a `{number}`. If a negative number or zero is returned
 * the lower value will be used, if a positive number is returned the higher value
 * will be used.
 * @typedef {function(number, number, number): number} NearestDirectionFunction
 * @api
 */
/**
 * @param {Array<number>} arr Array in descending order.
 * @param {number} target Target.
 * @param {number|NearestDirectionFunction} direction
 *    0 means return the nearest,
 *    > 0 means return the largest nearest,
 *    < 0 means return the smallest nearest.
 * @return {number} Index.
 */
function linearFindNearest(arr, target, direction) {
    var n = arr.length;
    if (arr[0] <= target) {
        return 0;
    }
    else if (target <= arr[n - 1]) {
        return n - 1;
    }
    else {
        var i = void 0;
        if (direction > 0) {
            for (i = 1; i < n; ++i) {
                if (arr[i] < target) {
                    return i - 1;
                }
            }
        }
        else if (direction < 0) {
            for (i = 1; i < n; ++i) {
                if (arr[i] <= target) {
                    return i;
                }
            }
        }
        else {
            for (i = 1; i < n; ++i) {
                if (arr[i] == target) {
                    return i;
                }
                else if (arr[i] < target) {
                    if (typeof direction === 'function') {
                        if (direction(target, arr[i - 1], arr[i]) > 0) {
                            return i - 1;
                        }
                        else {
                            return i;
                        }
                    }
                    else if (arr[i - 1] - target < target - arr[i]) {
                        return i - 1;
                    }
                    else {
                        return i;
                    }
                }
            }
        }
        return n - 1;
    }
}
/**
 * @param {Array<*>} arr Array.
 * @param {number} begin Begin index.
 * @param {number} end End index.
 */
function reverseSubArray(arr, begin, end) {
    while (begin < end) {
        var tmp = arr[begin];
        arr[begin] = arr[end];
        arr[end] = tmp;
        ++begin;
        --end;
    }
}
/**
 * @param {Array<VALUE>} arr The array to modify.
 * @param {!Array<VALUE>|VALUE} data The elements or arrays of elements to add to arr.
 * @template VALUE
 */
function extend(arr, data) {
    var extension = Array.isArray(data) ? data : [data];
    var length = extension.length;
    for (var i = 0; i < length; i++) {
        arr[arr.length] = extension[i];
    }
}
/**
 * @param {Array<VALUE>} arr The array to modify.
 * @param {VALUE} obj The element to remove.
 * @template VALUE
 * @return {boolean} If the element was removed.
 */
function remove(arr, obj) {
    var i = arr.indexOf(obj);
    var found = i > -1;
    if (found) {
        arr.splice(i, 1);
    }
    return found;
}
/**
 * @param {Array<VALUE>} arr The array to search in.
 * @param {function(VALUE, number, ?) : boolean} func The function to compare.
 * @template VALUE
 * @return {VALUE|null} The element found or null.
 */
function find(arr, func) {
    var length = arr.length >>> 0;
    var value;
    for (var i = 0; i < length; i++) {
        value = arr[i];
        if (func(value, i, arr)) {
            return value;
        }
    }
    return null;
}
/**
 * @param {Array|Uint8ClampedArray} arr1 The first array to compare.
 * @param {Array|Uint8ClampedArray} arr2 The second array to compare.
 * @return {boolean} Whether the two arrays are equal.
 */
function equals(arr1, arr2) {
    var len1 = arr1.length;
    if (len1 !== arr2.length) {
        return false;
    }
    for (var i = 0; i < len1; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}
/**
 * Sort the passed array such that the relative order of equal elements is preserved.
 * See https://en.wikipedia.org/wiki/Sorting_algorithm#Stability for details.
 * @param {Array<*>} arr The array to sort (modifies original).
 * @param {!function(*, *): number} compareFnc Comparison function.
 * @api
 */
function stableSort(arr, compareFnc) {
    var length = arr.length;
    var tmp = Array(arr.length);
    var i;
    for (i = 0; i < length; i++) {
        tmp[i] = { index: i, value: arr[i] };
    }
    tmp.sort(function (a, b) {
        return compareFnc(a.value, b.value) || a.index - b.index;
    });
    for (i = 0; i < arr.length; i++) {
        arr[i] = tmp[i].value;
    }
}
/**
 * @param {Array<*>} arr The array to search in.
 * @param {Function} func Comparison function.
 * @return {number} Return index.
 */
function findIndex(arr, func) {
    var index;
    var found = !arr.every(function (el, idx) {
        index = idx;
        return !func(el, idx, arr);
    });
    return found ? index : -1;
}
/**
 * @param {Array<*>} arr The array to test.
 * @param {Function} [opt_func] Comparison function.
 * @param {boolean} [opt_strict] Strictly sorted (default false).
 * @return {boolean} Return index.
 */
function isSorted(arr, opt_func, opt_strict) {
    var compare = opt_func || numberSafeCompareFunction;
    return arr.every(function (currentVal, index) {
        if (index === 0) {
            return true;
        }
        var res = compare(arr[index - 1], currentVal);
        return !(res > 0 || (opt_strict && res === 0));
    });
}
//# sourceMappingURL=array.js.map

/***/ }),

/***/ 9515:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ assert)
/* harmony export */ });
/* harmony import */ var _AssertionError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6813);
/**
 * @module ol/asserts
 */

/**
 * @param {*} assertion Assertion we expected to be truthy.
 * @param {number} errorCode Error code.
 */
function assert(assertion, errorCode) {
    if (!assertion) {
        throw new _AssertionError_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z(errorCode);
    }
}
//# sourceMappingURL=asserts.js.map

/***/ }),

/***/ 9706:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "XC": () => (/* binding */ asString),
/* harmony export */   "_2": () => (/* binding */ asArray)
/* harmony export */ });
/* unused harmony exports fromString, normalize, toString, isStringColor */
/* harmony import */ var _asserts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9515);
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3983);
/**
 * @module ol/color
 */


/**
 * A color represented as a short array [red, green, blue, alpha].
 * red, green, and blue should be integers in the range 0..255 inclusive.
 * alpha should be a float in the range 0..1 inclusive. If no alpha value is
 * given then `1` will be used.
 * @typedef {Array<number>} Color
 * @api
 */
/**
 * This RegExp matches # followed by 3, 4, 6, or 8 hex digits.
 * @const
 * @type {RegExp}
 * @private
 */
var HEX_COLOR_RE_ = /^#([a-f0-9]{3}|[a-f0-9]{4}(?:[a-f0-9]{2}){0,2})$/i;
/**
 * Regular expression for matching potential named color style strings.
 * @const
 * @type {RegExp}
 * @private
 */
var NAMED_COLOR_RE_ = /^([a-z]*)$|^hsla?\(.*\)$/i;
/**
 * Return the color as an rgba string.
 * @param {Color|string} color Color.
 * @return {string} Rgba string.
 * @api
 */
function asString(color) {
    if (typeof color === 'string') {
        return color;
    }
    else {
        return toString(color);
    }
}
/**
 * Return named color as an rgba string.
 * @param {string} color Named color.
 * @return {string} Rgb string.
 */
function fromNamed(color) {
    var el = document.createElement('div');
    el.style.color = color;
    if (el.style.color !== '') {
        document.body.appendChild(el);
        var rgb = getComputedStyle(el).color;
        document.body.removeChild(el);
        return rgb;
    }
    else {
        return '';
    }
}
/**
 * @param {string} s String.
 * @return {Color} Color.
 */
var fromString = (function () {
    // We maintain a small cache of parsed strings.  To provide cheap LRU-like
    // semantics, whenever the cache grows too large we simply delete an
    // arbitrary 25% of the entries.
    /**
     * @const
     * @type {number}
     */
    var MAX_CACHE_SIZE = 1024;
    /**
     * @type {Object<string, Color>}
     */
    var cache = {};
    /**
     * @type {number}
     */
    var cacheSize = 0;
    return (
    /**
     * @param {string} s String.
     * @return {Color} Color.
     */
    function (s) {
        var color;
        if (cache.hasOwnProperty(s)) {
            color = cache[s];
        }
        else {
            if (cacheSize >= MAX_CACHE_SIZE) {
                var i = 0;
                for (var key in cache) {
                    if ((i++ & 3) === 0) {
                        delete cache[key];
                        --cacheSize;
                    }
                }
            }
            color = fromStringInternal_(s);
            cache[s] = color;
            ++cacheSize;
        }
        return color;
    });
})();
/**
 * Return the color as an array. This function maintains a cache of calculated
 * arrays which means the result should not be modified.
 * @param {Color|string} color Color.
 * @return {Color} Color.
 * @api
 */
function asArray(color) {
    if (Array.isArray(color)) {
        return color;
    }
    else {
        return fromString(color);
    }
}
/**
 * @param {string} s String.
 * @private
 * @return {Color} Color.
 */
function fromStringInternal_(s) {
    var r, g, b, a, color;
    if (NAMED_COLOR_RE_.exec(s)) {
        s = fromNamed(s);
    }
    if (HEX_COLOR_RE_.exec(s)) {
        // hex
        var n = s.length - 1; // number of hex digits
        var d = // number of digits per channel
         void 0; // number of digits per channel
        if (n <= 4) {
            d = 1;
        }
        else {
            d = 2;
        }
        var hasAlpha = n === 4 || n === 8;
        r = parseInt(s.substr(1 + 0 * d, d), 16);
        g = parseInt(s.substr(1 + 1 * d, d), 16);
        b = parseInt(s.substr(1 + 2 * d, d), 16);
        if (hasAlpha) {
            a = parseInt(s.substr(1 + 3 * d, d), 16);
        }
        else {
            a = 255;
        }
        if (d == 1) {
            r = (r << 4) + r;
            g = (g << 4) + g;
            b = (b << 4) + b;
            if (hasAlpha) {
                a = (a << 4) + a;
            }
        }
        color = [r, g, b, a / 255];
    }
    else if (s.indexOf('rgba(') == 0) {
        // rgba()
        color = s.slice(5, -1).split(',').map(Number);
        normalize(color);
    }
    else if (s.indexOf('rgb(') == 0) {
        // rgb()
        color = s.slice(4, -1).split(',').map(Number);
        color.push(1);
        normalize(color);
    }
    else {
        (0,_asserts_js__WEBPACK_IMPORTED_MODULE_0__/* .assert */ .h)(false, 14); // Invalid color
    }
    return color;
}
/**
 * TODO this function is only used in the test, we probably shouldn't export it
 * @param {Color} color Color.
 * @return {Color} Clamped color.
 */
function normalize(color) {
    color[0] = (0,_math_js__WEBPACK_IMPORTED_MODULE_1__/* .clamp */ .uZ)((color[0] + 0.5) | 0, 0, 255);
    color[1] = (0,_math_js__WEBPACK_IMPORTED_MODULE_1__/* .clamp */ .uZ)((color[1] + 0.5) | 0, 0, 255);
    color[2] = (0,_math_js__WEBPACK_IMPORTED_MODULE_1__/* .clamp */ .uZ)((color[2] + 0.5) | 0, 0, 255);
    color[3] = (0,_math_js__WEBPACK_IMPORTED_MODULE_1__/* .clamp */ .uZ)(color[3], 0, 1);
    return color;
}
/**
 * @param {Color} color Color.
 * @return {string} String.
 */
function toString(color) {
    var r = color[0];
    if (r != (r | 0)) {
        r = (r + 0.5) | 0;
    }
    var g = color[1];
    if (g != (g | 0)) {
        g = (g + 0.5) | 0;
    }
    var b = color[2];
    if (b != (b | 0)) {
        b = (b + 0.5) | 0;
    }
    var a = color[3] === undefined ? 1 : Math.round(color[3] * 100) / 100;
    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
}
/**
 * @param {string} s String.
 * @return {boolean} Whether the string is actually a valid color
 */
function isStringColor(s) {
    if (NAMED_COLOR_RE_.test(s)) {
        s = fromNamed(s);
    }
    return (HEX_COLOR_RE_.test(s) || s.indexOf('rgba(') === 0 || s.indexOf('rgb(') === 0);
}
//# sourceMappingURL=color.js.map

/***/ }),

/***/ 1900:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cf": () => (/* binding */ wrapX),
/* harmony export */   "IH": () => (/* binding */ add),
/* harmony export */   "U1": () => (/* binding */ rotate),
/* harmony export */   "bA": () => (/* binding */ scale),
/* harmony export */   "fS": () => (/* binding */ equals)
/* harmony export */ });
/* unused harmony exports closestOnCircle, closestOnSegment, createStringXY, degreesToStringHDMS, format, squaredDistance, distance, squaredDistanceToSegment, toStringHDMS, toStringXY, getWorldsAway */
/* harmony import */ var _extent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2833);
/**
 * @module ol/coordinate
 */



/**
 * An array of numbers representing an xy coordinate. Example: `[16, 48]`.
 * @typedef {Array<number>} Coordinate
 * @api
 */
/**
 * A function that takes a {@link module:ol/coordinate~Coordinate} and
 * transforms it into a `{string}`.
 *
 * @typedef {function((Coordinate|undefined)): string} CoordinateFormat
 * @api
 */
/**
 * Add `delta` to `coordinate`. `coordinate` is modified in place and returned
 * by the function.
 *
 * Example:
 *
 *     import {add} from 'ol/coordinate';
 *
 *     var coord = [7.85, 47.983333];
 *     add(coord, [-2, 4]);
 *     // coord is now [5.85, 51.983333]
 *
 * @param {Coordinate} coordinate Coordinate.
 * @param {Coordinate} delta Delta.
 * @return {Coordinate} The input coordinate adjusted by
 * the given delta.
 * @api
 */
function add(coordinate, delta) {
    coordinate[0] += +delta[0];
    coordinate[1] += +delta[1];
    return coordinate;
}
/**
 * Calculates the point closest to the passed coordinate on the passed circle.
 *
 * @param {Coordinate} coordinate The coordinate.
 * @param {import("./geom/Circle.js").default} circle The circle.
 * @return {Coordinate} Closest point on the circumference.
 */
function closestOnCircle(coordinate, circle) {
    var r = circle.getRadius();
    var center = circle.getCenter();
    var x0 = center[0];
    var y0 = center[1];
    var x1 = coordinate[0];
    var y1 = coordinate[1];
    var dx = x1 - x0;
    var dy = y1 - y0;
    if (dx === 0 && dy === 0) {
        dx = 1;
    }
    var d = Math.sqrt(dx * dx + dy * dy);
    var x = x0 + (r * dx) / d;
    var y = y0 + (r * dy) / d;
    return [x, y];
}
/**
 * Calculates the point closest to the passed coordinate on the passed segment.
 * This is the foot of the perpendicular of the coordinate to the segment when
 * the foot is on the segment, or the closest segment coordinate when the foot
 * is outside the segment.
 *
 * @param {Coordinate} coordinate The coordinate.
 * @param {Array<Coordinate>} segment The two coordinates
 * of the segment.
 * @return {Coordinate} The foot of the perpendicular of
 * the coordinate to the segment.
 */
function closestOnSegment(coordinate, segment) {
    var x0 = coordinate[0];
    var y0 = coordinate[1];
    var start = segment[0];
    var end = segment[1];
    var x1 = start[0];
    var y1 = start[1];
    var x2 = end[0];
    var y2 = end[1];
    var dx = x2 - x1;
    var dy = y2 - y1;
    var along = dx === 0 && dy === 0
        ? 0
        : (dx * (x0 - x1) + dy * (y0 - y1)) / (dx * dx + dy * dy || 0);
    var x, y;
    if (along <= 0) {
        x = x1;
        y = y1;
    }
    else if (along >= 1) {
        x = x2;
        y = y2;
    }
    else {
        x = x1 + along * dx;
        y = y1 + along * dy;
    }
    return [x, y];
}
/**
 * Returns a {@link module:ol/coordinate~CoordinateFormat} function that can be
 * used to format
 * a {Coordinate} to a string.
 *
 * Example without specifying the fractional digits:
 *
 *     import {createStringXY} from 'ol/coordinate';
 *
 *     var coord = [7.85, 47.983333];
 *     var stringifyFunc = createStringXY();
 *     var out = stringifyFunc(coord);
 *     // out is now '8, 48'
 *
 * Example with explicitly specifying 2 fractional digits:
 *
 *     import {createStringXY} from 'ol/coordinate';
 *
 *     var coord = [7.85, 47.983333];
 *     var stringifyFunc = createStringXY(2);
 *     var out = stringifyFunc(coord);
 *     // out is now '7.85, 47.98'
 *
 * @param {number} [opt_fractionDigits] The number of digits to include
 *    after the decimal point. Default is `0`.
 * @return {CoordinateFormat} Coordinate format.
 * @api
 */
function createStringXY(opt_fractionDigits) {
    return (
    /**
     * @param {Coordinate} coordinate Coordinate.
     * @return {string} String XY.
     */
    function (coordinate) {
        return toStringXY(coordinate, opt_fractionDigits);
    });
}
/**
 * @param {string} hemispheres Hemispheres.
 * @param {number} degrees Degrees.
 * @param {number} [opt_fractionDigits] The number of digits to include
 *    after the decimal point. Default is `0`.
 * @return {string} String.
 */
function degreesToStringHDMS(hemispheres, degrees, opt_fractionDigits) {
    var normalizedDegrees = modulo(degrees + 180, 360) - 180;
    var x = Math.abs(3600 * normalizedDegrees);
    var dflPrecision = opt_fractionDigits || 0;
    var precision = Math.pow(10, dflPrecision);
    var deg = Math.floor(x / 3600);
    var min = Math.floor((x - deg * 3600) / 60);
    var sec = x - deg * 3600 - min * 60;
    sec = Math.ceil(sec * precision) / precision;
    if (sec >= 60) {
        sec = 0;
        min += 1;
    }
    if (min >= 60) {
        min = 0;
        deg += 1;
    }
    return (deg +
        '\u00b0 ' +
        padNumber(min, 2) +
        '\u2032 ' +
        padNumber(sec, 2, dflPrecision) +
        '\u2033' +
        (normalizedDegrees == 0
            ? ''
            : ' ' + hemispheres.charAt(normalizedDegrees < 0 ? 1 : 0)));
}
/**
 * Transforms the given {@link module:ol/coordinate~Coordinate} to a string
 * using the given string template. The strings `{x}` and `{y}` in the template
 * will be replaced with the first and second coordinate values respectively.
 *
 * Example without specifying the fractional digits:
 *
 *     import {format} from 'ol/coordinate';
 *
 *     var coord = [7.85, 47.983333];
 *     var template = 'Coordinate is ({x}|{y}).';
 *     var out = format(coord, template);
 *     // out is now 'Coordinate is (8|48).'
 *
 * Example explicitly specifying the fractional digits:
 *
 *     import {format} from 'ol/coordinate';
 *
 *     var coord = [7.85, 47.983333];
 *     var template = 'Coordinate is ({x}|{y}).';
 *     var out = format(coord, template, 2);
 *     // out is now 'Coordinate is (7.85|47.98).'
 *
 * @param {Coordinate} coordinate Coordinate.
 * @param {string} template A template string with `{x}` and `{y}` placeholders
 *     that will be replaced by first and second coordinate values.
 * @param {number} [opt_fractionDigits] The number of digits to include
 *    after the decimal point. Default is `0`.
 * @return {string} Formatted coordinate.
 * @api
 */
function format(coordinate, template, opt_fractionDigits) {
    if (coordinate) {
        return template
            .replace('{x}', coordinate[0].toFixed(opt_fractionDigits))
            .replace('{y}', coordinate[1].toFixed(opt_fractionDigits));
    }
    else {
        return '';
    }
}
/**
 * @param {Coordinate} coordinate1 First coordinate.
 * @param {Coordinate} coordinate2 Second coordinate.
 * @return {boolean} The two coordinates are equal.
 */
function equals(coordinate1, coordinate2) {
    var equals = true;
    for (var i = coordinate1.length - 1; i >= 0; --i) {
        if (coordinate1[i] != coordinate2[i]) {
            equals = false;
            break;
        }
    }
    return equals;
}
/**
 * Rotate `coordinate` by `angle`. `coordinate` is modified in place and
 * returned by the function.
 *
 * Example:
 *
 *     import {rotate} from 'ol/coordinate';
 *
 *     var coord = [7.85, 47.983333];
 *     var rotateRadians = Math.PI / 2; // 90 degrees
 *     rotate(coord, rotateRadians);
 *     // coord is now [-47.983333, 7.85]
 *
 * @param {Coordinate} coordinate Coordinate.
 * @param {number} angle Angle in radian.
 * @return {Coordinate} Coordinate.
 * @api
 */
function rotate(coordinate, angle) {
    var cosAngle = Math.cos(angle);
    var sinAngle = Math.sin(angle);
    var x = coordinate[0] * cosAngle - coordinate[1] * sinAngle;
    var y = coordinate[1] * cosAngle + coordinate[0] * sinAngle;
    coordinate[0] = x;
    coordinate[1] = y;
    return coordinate;
}
/**
 * Scale `coordinate` by `scale`. `coordinate` is modified in place and returned
 * by the function.
 *
 * Example:
 *
 *     import {scale as scaleCoordinate} from 'ol/coordinate';
 *
 *     var coord = [7.85, 47.983333];
 *     var scale = 1.2;
 *     scaleCoordinate(coord, scale);
 *     // coord is now [9.42, 57.5799996]
 *
 * @param {Coordinate} coordinate Coordinate.
 * @param {number} scale Scale factor.
 * @return {Coordinate} Coordinate.
 */
function scale(coordinate, scale) {
    coordinate[0] *= scale;
    coordinate[1] *= scale;
    return coordinate;
}
/**
 * @param {Coordinate} coord1 First coordinate.
 * @param {Coordinate} coord2 Second coordinate.
 * @return {number} Squared distance between coord1 and coord2.
 */
function squaredDistance(coord1, coord2) {
    var dx = coord1[0] - coord2[0];
    var dy = coord1[1] - coord2[1];
    return dx * dx + dy * dy;
}
/**
 * @param {Coordinate} coord1 First coordinate.
 * @param {Coordinate} coord2 Second coordinate.
 * @return {number} Distance between coord1 and coord2.
 */
function distance(coord1, coord2) {
    return Math.sqrt(squaredDistance(coord1, coord2));
}
/**
 * Calculate the squared distance from a coordinate to a line segment.
 *
 * @param {Coordinate} coordinate Coordinate of the point.
 * @param {Array<Coordinate>} segment Line segment (2
 * coordinates).
 * @return {number} Squared distance from the point to the line segment.
 */
function squaredDistanceToSegment(coordinate, segment) {
    return squaredDistance(coordinate, closestOnSegment(coordinate, segment));
}
/**
 * Format a geographic coordinate with the hemisphere, degrees, minutes, and
 * seconds.
 *
 * Example without specifying fractional digits:
 *
 *     import {toStringHDMS} from 'ol/coordinate';
 *
 *     var coord = [7.85, 47.983333];
 *     var out = toStringHDMS(coord);
 *     // out is now '47° 58′ 60″ N 7° 50′ 60″ E'
 *
 * Example explicitly specifying 1 fractional digit:
 *
 *     import {toStringHDMS} from 'ol/coordinate';
 *
 *     var coord = [7.85, 47.983333];
 *     var out = toStringHDMS(coord, 1);
 *     // out is now '47° 58′ 60.0″ N 7° 50′ 60.0″ E'
 *
 * @param {Coordinate} coordinate Coordinate.
 * @param {number} [opt_fractionDigits] The number of digits to include
 *    after the decimal point. Default is `0`.
 * @return {string} Hemisphere, degrees, minutes and seconds.
 * @api
 */
function toStringHDMS(coordinate, opt_fractionDigits) {
    if (coordinate) {
        return (degreesToStringHDMS('NS', coordinate[1], opt_fractionDigits) +
            ' ' +
            degreesToStringHDMS('EW', coordinate[0], opt_fractionDigits));
    }
    else {
        return '';
    }
}
/**
 * Format a coordinate as a comma delimited string.
 *
 * Example without specifying fractional digits:
 *
 *     import {toStringXY} from 'ol/coordinate';
 *
 *     var coord = [7.85, 47.983333];
 *     var out = toStringXY(coord);
 *     // out is now '8, 48'
 *
 * Example explicitly specifying 1 fractional digit:
 *
 *     import {toStringXY} from 'ol/coordinate';
 *
 *     var coord = [7.85, 47.983333];
 *     var out = toStringXY(coord, 1);
 *     // out is now '7.8, 48.0'
 *
 * @param {Coordinate} coordinate Coordinate.
 * @param {number} [opt_fractionDigits] The number of digits to include
 *    after the decimal point. Default is `0`.
 * @return {string} XY.
 * @api
 */
function toStringXY(coordinate, opt_fractionDigits) {
    return format(coordinate, '{x}, {y}', opt_fractionDigits);
}
/**
 * Modifies the provided coordinate in-place to be within the real world
 * extent. The lower projection extent boundary is inclusive, the upper one
 * exclusive.
 *
 * @param {Coordinate} coordinate Coordinate.
 * @param {import("./proj/Projection.js").default} projection Projection.
 * @return {Coordinate} The coordinate within the real world extent.
 */
function wrapX(coordinate, projection) {
    if (projection.canWrapX()) {
        var worldWidth = (0,_extent_js__WEBPACK_IMPORTED_MODULE_0__/* .getWidth */ .dz)(projection.getExtent());
        var worldsAway = getWorldsAway(coordinate, projection, worldWidth);
        if (worldsAway) {
            coordinate[0] -= worldsAway * worldWidth;
        }
    }
    return coordinate;
}
/**
 * @param {Coordinate} coordinate Coordinate.
 * @param {import("./proj/Projection.js").default} projection Projection.
 * @param {number} [opt_sourceExtentWidth] Width of the source extent.
 * @return {number} Offset in world widths.
 */
function getWorldsAway(coordinate, projection, opt_sourceExtentWidth) {
    var projectionExtent = projection.getExtent();
    var worldsAway = 0;
    if (projection.canWrapX() &&
        (coordinate[0] < projectionExtent[0] || coordinate[0] > projectionExtent[2])) {
        var sourceExtentWidth = opt_sourceExtentWidth || (0,_extent_js__WEBPACK_IMPORTED_MODULE_0__/* .getWidth */ .dz)(projectionExtent);
        worldsAway = Math.floor((coordinate[0] - projectionExtent[0]) / sourceExtentWidth);
    }
    return worldsAway;
}
//# sourceMappingURL=coordinate.js.map

/***/ }),

/***/ 8326:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$H": () => (/* binding */ replaceNode),
/* harmony export */   "E4": () => (/* binding */ createCanvasContext2D),
/* harmony export */   "ZF": () => (/* binding */ removeNode),
/* harmony export */   "ep": () => (/* binding */ removeChildren),
/* harmony export */   "hF": () => (/* binding */ replaceChildren),
/* harmony export */   "jy": () => (/* binding */ releaseCanvas)
/* harmony export */ });
/* unused harmony exports outerWidth, outerHeight */
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(177);

/**
 * @module ol/dom
 */
//FIXME Move this function to the canvas module
/**
 * Create an html canvas element and returns its 2d context.
 * @param {number} [opt_width] Canvas width.
 * @param {number} [opt_height] Canvas height.
 * @param {Array<HTMLCanvasElement>} [opt_canvasPool] Canvas pool to take existing canvas from.
 * @param {CanvasRenderingContext2DSettings} [opt_Context2DSettings] CanvasRenderingContext2DSettings
 * @return {CanvasRenderingContext2D} The context.
 */
function createCanvasContext2D(opt_width, opt_height, opt_canvasPool, opt_Context2DSettings) {
    /** @type {HTMLCanvasElement|OffscreenCanvas} */
    var canvas;
    if (opt_canvasPool && opt_canvasPool.length) {
        canvas = opt_canvasPool.shift();
    }
    else if (_has_js__WEBPACK_IMPORTED_MODULE_0__/* .WORKER_OFFSCREEN_CANVAS */ .Id) {
        canvas = new OffscreenCanvas(opt_width || 300, opt_height || 300);
    }
    else {
        canvas = document.createElement('canvas');
    }
    if (opt_width) {
        canvas.width = opt_width;
    }
    if (opt_height) {
        canvas.height = opt_height;
    }
    //FIXME Allow OffscreenCanvasRenderingContext2D as return type
    return /** @type {CanvasRenderingContext2D} */ (canvas.getContext('2d', opt_Context2DSettings));
}
/**
 * Releases canvas memory to avoid exceeding memory limits in Safari.
 * See https://pqina.nl/blog/total-canvas-memory-use-exceeds-the-maximum-limit/
 * @param {CanvasRenderingContext2D} context Context.
 */
function releaseCanvas(context) {
    var canvas = context.canvas;
    canvas.width = 1;
    canvas.height = 1;
    context.clearRect(0, 0, 1, 1);
}
/**
 * Get the current computed width for the given element including margin,
 * padding and border.
 * Equivalent to jQuery's `$(el).outerWidth(true)`.
 * @param {!HTMLElement} element Element.
 * @return {number} The width.
 */
function outerWidth(element) {
    var width = element.offsetWidth;
    var style = getComputedStyle(element);
    width += parseInt(style.marginLeft, 10) + parseInt(style.marginRight, 10);
    return width;
}
/**
 * Get the current computed height for the given element including margin,
 * padding and border.
 * Equivalent to jQuery's `$(el).outerHeight(true)`.
 * @param {!HTMLElement} element Element.
 * @return {number} The height.
 */
function outerHeight(element) {
    var height = element.offsetHeight;
    var style = getComputedStyle(element);
    height += parseInt(style.marginTop, 10) + parseInt(style.marginBottom, 10);
    return height;
}
/**
 * @param {Node} newNode Node to replace old node
 * @param {Node} oldNode The node to be replaced
 */
function replaceNode(newNode, oldNode) {
    var parent = oldNode.parentNode;
    if (parent) {
        parent.replaceChild(newNode, oldNode);
    }
}
/**
 * @param {Node} node The node to remove.
 * @return {Node|null} The node that was removed or null.
 */
function removeNode(node) {
    return node && node.parentNode ? node.parentNode.removeChild(node) : null;
}
/**
 * @param {Node} node The node to remove the children from.
 */
function removeChildren(node) {
    while (node.lastChild) {
        node.removeChild(node.lastChild);
    }
}
/**
 * Transform the children of a parent node so they match the
 * provided list of children.  This function aims to efficiently
 * remove, add, and reorder child nodes while maintaining a simple
 * implementation (it is not guaranteed to minimize DOM operations).
 * @param {Node} node The parent node whose children need reworking.
 * @param {Array<Node>} children The desired children.
 */
function replaceChildren(node, children) {
    var oldChildren = node.childNodes;
    for (var i = 0; true; ++i) {
        var oldChild = oldChildren[i];
        var newChild = children[i];
        // check if our work is done
        if (!oldChild && !newChild) {
            break;
        }
        // check if children match
        if (oldChild === newChild) {
            continue;
        }
        // check if a new child needs to be added
        if (!oldChild) {
            node.appendChild(newChild);
            continue;
        }
        // check if an old child needs to be removed
        if (!newChild) {
            node.removeChild(oldChild);
            --i;
            continue;
        }
        // reorder
        node.insertBefore(newChild, oldChild);
    }
}
//# sourceMappingURL=dom.js.map

/***/ }),

/***/ 1015:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GE": () => (/* binding */ linear),
/* harmony export */   "Vv": () => (/* binding */ easeOut),
/* harmony export */   "YQ": () => (/* binding */ easeIn),
/* harmony export */   "rd": () => (/* binding */ inAndOut)
/* harmony export */ });
/* unused harmony export upAndDown */
/**
 * @module ol/easing
 */
/**
 * Start slow and speed up.
 * @param {number} t Input between 0 and 1.
 * @return {number} Output between 0 and 1.
 * @api
 */
function easeIn(t) {
    return Math.pow(t, 3);
}
/**
 * Start fast and slow down.
 * @param {number} t Input between 0 and 1.
 * @return {number} Output between 0 and 1.
 * @api
 */
function easeOut(t) {
    return 1 - easeIn(1 - t);
}
/**
 * Start slow, speed up, and then slow down again.
 * @param {number} t Input between 0 and 1.
 * @return {number} Output between 0 and 1.
 * @api
 */
function inAndOut(t) {
    return 3 * t * t - 2 * t * t * t;
}
/**
 * Maintain a constant speed over time.
 * @param {number} t Input between 0 and 1.
 * @return {number} Output between 0 and 1.
 * @api
 */
function linear(t) {
    return t;
}
/**
 * Start slow, speed up, and at the very end slow down again.  This has the
 * same general behavior as {@link module:ol/easing.inAndOut}, but the final
 * slowdown is delayed.
 * @param {number} t Input between 0 and 1.
 * @return {number} Output between 0 and 1.
 * @api
 */
function upAndDown(t) {
    if (t < 0.5) {
        return inAndOut(2 * t);
    }
    else {
        return 1 - inAndOut(2 * (t - 0.5));
    }
}
//# sourceMappingURL=easing.js.map

/***/ }),

/***/ 5818:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Vx": () => (/* binding */ listenOnce),
/* harmony export */   "bN": () => (/* binding */ unlistenByKey),
/* harmony export */   "oL": () => (/* binding */ listen)
/* harmony export */ });
/* harmony import */ var _obj_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9374);
/**
 * @module ol/events
 */

/**
 * Key to use with {@link module:ol/Observable.unByKey}.
 * @typedef {Object} EventsKey
 * @property {ListenerFunction} listener Listener.
 * @property {import("./events/Target.js").EventTargetLike} target Target.
 * @property {string} type Type.
 * @api
 */
/**
 * Listener function. This function is called with an event object as argument.
 * When the function returns `false`, event propagation will stop.
 *
 * @typedef {function((Event|import("./events/Event.js").default)): (void|boolean)} ListenerFunction
 * @api
 */
/**
 * @typedef {Object} ListenerObject
 * @property {ListenerFunction} handleEvent HandleEvent listener function.
 */
/**
 * @typedef {ListenerFunction|ListenerObject} Listener
 */
/**
 * Registers an event listener on an event target. Inspired by
 * https://google.github.io/closure-library/api/source/closure/goog/events/events.js.src.html
 *
 * This function efficiently binds a `listener` to a `this` object, and returns
 * a key for use with {@link module:ol/events.unlistenByKey}.
 *
 * @param {import("./events/Target.js").EventTargetLike} target Event target.
 * @param {string} type Event type.
 * @param {ListenerFunction} listener Listener.
 * @param {Object} [opt_this] Object referenced by the `this` keyword in the
 *     listener. Default is the `target`.
 * @param {boolean} [opt_once] If true, add the listener as one-off listener.
 * @return {EventsKey} Unique key for the listener.
 */
function listen(target, type, listener, opt_this, opt_once) {
    if (opt_this && opt_this !== target) {
        listener = listener.bind(opt_this);
    }
    if (opt_once) {
        var originalListener_1 = listener;
        listener = function () {
            target.removeEventListener(type, listener);
            originalListener_1.apply(this, arguments);
        };
    }
    var eventsKey = {
        target: target,
        type: type,
        listener: listener,
    };
    target.addEventListener(type, listener);
    return eventsKey;
}
/**
 * Registers a one-off event listener on an event target. Inspired by
 * https://google.github.io/closure-library/api/source/closure/goog/events/events.js.src.html
 *
 * This function efficiently binds a `listener` as self-unregistering listener
 * to a `this` object, and returns a key for use with
 * {@link module:ol/events.unlistenByKey} in case the listener needs to be
 * unregistered before it is called.
 *
 * When {@link module:ol/events.listen} is called with the same arguments after this
 * function, the self-unregistering listener will be turned into a permanent
 * listener.
 *
 * @param {import("./events/Target.js").EventTargetLike} target Event target.
 * @param {string} type Event type.
 * @param {ListenerFunction} listener Listener.
 * @param {Object} [opt_this] Object referenced by the `this` keyword in the
 *     listener. Default is the `target`.
 * @return {EventsKey} Key for unlistenByKey.
 */
function listenOnce(target, type, listener, opt_this) {
    return listen(target, type, listener, opt_this, true);
}
/**
 * Unregisters event listeners on an event target. Inspired by
 * https://google.github.io/closure-library/api/source/closure/goog/events/events.js.src.html
 *
 * The argument passed to this function is the key returned from
 * {@link module:ol/events.listen} or {@link module:ol/events.listenOnce}.
 *
 * @param {EventsKey} key The key.
 */
function unlistenByKey(key) {
    if (key && key.target) {
        key.target.removeEventListener(key.type, key.listener);
        (0,_obj_js__WEBPACK_IMPORTED_MODULE_0__/* .clear */ .ZH)(key);
    }
}
//# sourceMappingURL=events.js.map

/***/ }),

/***/ 291:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports stopPropagation, preventDefault */
/**
 * @module ol/events/Event
 */
/**
 * @classdesc
 * Stripped down implementation of the W3C DOM Level 2 Event interface.
 * See https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-interface.
 *
 * This implementation only provides `type` and `target` properties, and
 * `stopPropagation` and `preventDefault` methods. It is meant as base class
 * for higher level events defined in the library, and works with
 * {@link module:ol/events/Target~Target}.
 */
var BaseEvent = /** @class */ (function () {
    /**
     * @param {string} type Type.
     */
    function BaseEvent(type) {
        /**
         * @type {boolean}
         */
        this.propagationStopped;
        /**
         * @type {boolean}
         */
        this.defaultPrevented;
        /**
         * The event type.
         * @type {string}
         * @api
         */
        this.type = type;
        /**
         * The event target.
         * @type {Object}
         * @api
         */
        this.target = null;
    }
    /**
     * Prevent default. This means that no emulated `click`, `singleclick` or `doubleclick` events
     * will be fired.
     * @api
     */
    BaseEvent.prototype.preventDefault = function () {
        this.defaultPrevented = true;
    };
    /**
     * Stop event propagation.
     * @api
     */
    BaseEvent.prototype.stopPropagation = function () {
        this.propagationStopped = true;
    };
    return BaseEvent;
}());
/**
 * @param {Event|import("./Event.js").default} evt Event
 */
function stopPropagation(evt) {
    evt.stopPropagation();
}
/**
 * @param {Event|import("./Event.js").default} evt Event
 */
function preventDefault(evt) {
    evt.preventDefault();
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseEvent);
//# sourceMappingURL=Event.js.map

/***/ }),

/***/ 5487:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @module ol/events/EventType
 */
/**
 * @enum {string}
 * @const
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    /**
     * Generic change event. Triggered when the revision counter is increased.
     * @event module:ol/events/Event~BaseEvent#change
     * @api
     */
    CHANGE: 'change',
    /**
     * Generic error event. Triggered when an error occurs.
     * @event module:ol/events/Event~BaseEvent#error
     * @api
     */
    ERROR: 'error',
    BLUR: 'blur',
    CLEAR: 'clear',
    CONTEXTMENU: 'contextmenu',
    CLICK: 'click',
    DBLCLICK: 'dblclick',
    DRAGENTER: 'dragenter',
    DRAGOVER: 'dragover',
    DROP: 'drop',
    FOCUS: 'focus',
    KEYDOWN: 'keydown',
    KEYPRESS: 'keypress',
    LOAD: 'load',
    RESIZE: 'resize',
    TOUCHMOVE: 'touchmove',
    WHEEL: 'wheel',
});
//# sourceMappingURL=EventType.js.map

/***/ }),

/***/ 208:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Disposable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5431);
/* harmony import */ var _Event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(291);
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6885);
/* harmony import */ var _obj_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9374);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @module ol/events/Target
 */




/**
 * @typedef {EventTarget|Target} EventTargetLike
 */
/**
 * @classdesc
 * A simplified implementation of the W3C DOM Level 2 EventTarget interface.
 * See https://www.w3.org/TR/2000/REC-DOM-Level-2-Events-20001113/events.html#Events-EventTarget.
 *
 * There are two important simplifications compared to the specification:
 *
 * 1. The handling of `useCapture` in `addEventListener` and
 *    `removeEventListener`. There is no real capture model.
 * 2. The handling of `stopPropagation` and `preventDefault` on `dispatchEvent`.
 *    There is no event target hierarchy. When a listener calls
 *    `stopPropagation` or `preventDefault` on an event object, it means that no
 *    more listeners after this one will be called. Same as when the listener
 *    returns false.
 */
var Target = /** @class */ (function (_super) {
    __extends(Target, _super);
    /**
     * @param {*} [opt_target] Default event target for dispatched events.
     */
    function Target(opt_target) {
        var _this = _super.call(this) || this;
        /**
         * @private
         * @type {*}
         */
        _this.eventTarget_ = opt_target;
        /**
         * @private
         * @type {Object<string, number>}
         */
        _this.pendingRemovals_ = null;
        /**
         * @private
         * @type {Object<string, number>}
         */
        _this.dispatching_ = null;
        /**
         * @private
         * @type {Object<string, Array<import("../events.js").Listener>>}
         */
        _this.listeners_ = null;
        return _this;
    }
    /**
     * @param {string} type Type.
     * @param {import("../events.js").Listener} listener Listener.
     */
    Target.prototype.addEventListener = function (type, listener) {
        if (!type || !listener) {
            return;
        }
        var listeners = this.listeners_ || (this.listeners_ = {});
        var listenersForType = listeners[type] || (listeners[type] = []);
        if (listenersForType.indexOf(listener) === -1) {
            listenersForType.push(listener);
        }
    };
    /**
     * Dispatches an event and calls all listeners listening for events
     * of this type. The event parameter can either be a string or an
     * Object with a `type` property.
     *
     * @param {import("./Event.js").default|string} event Event object.
     * @return {boolean|undefined} `false` if anyone called preventDefault on the
     *     event object or if any of the listeners returned false.
     * @api
     */
    Target.prototype.dispatchEvent = function (event) {
        var isString = typeof event === 'string';
        var type = isString ? event : event.type;
        var listeners = this.listeners_ && this.listeners_[type];
        if (!listeners) {
            return;
        }
        var evt = isString ? new _Event_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP(event) : /** @type {Event} */ (event);
        if (!evt.target) {
            evt.target = this.eventTarget_ || this;
        }
        var dispatching = this.dispatching_ || (this.dispatching_ = {});
        var pendingRemovals = this.pendingRemovals_ || (this.pendingRemovals_ = {});
        if (!(type in dispatching)) {
            dispatching[type] = 0;
            pendingRemovals[type] = 0;
        }
        ++dispatching[type];
        var propagate;
        for (var i = 0, ii = listeners.length; i < ii; ++i) {
            if ('handleEvent' in listeners[i]) {
                propagate = /** @type {import("../events.js").ListenerObject} */ (listeners[i]).handleEvent(evt);
            }
            else {
                propagate = /** @type {import("../events.js").ListenerFunction} */ (listeners[i]).call(this, evt);
            }
            if (propagate === false || evt.propagationStopped) {
                propagate = false;
                break;
            }
        }
        if (--dispatching[type] === 0) {
            var pr = pendingRemovals[type];
            delete pendingRemovals[type];
            while (pr--) {
                this.removeEventListener(type, _functions_js__WEBPACK_IMPORTED_MODULE_1__/* .VOID */ .Zn);
            }
            delete dispatching[type];
        }
        return propagate;
    };
    /**
     * Clean up.
     */
    Target.prototype.disposeInternal = function () {
        this.listeners_ && (0,_obj_js__WEBPACK_IMPORTED_MODULE_2__/* .clear */ .ZH)(this.listeners_);
    };
    /**
     * Get the listeners for a specified event type. Listeners are returned in the
     * order that they will be called in.
     *
     * @param {string} type Type.
     * @return {Array<import("../events.js").Listener>|undefined} Listeners.
     */
    Target.prototype.getListeners = function (type) {
        return (this.listeners_ && this.listeners_[type]) || undefined;
    };
    /**
     * @param {string} [opt_type] Type. If not provided,
     *     `true` will be returned if this event target has any listeners.
     * @return {boolean} Has listeners.
     */
    Target.prototype.hasListener = function (opt_type) {
        if (!this.listeners_) {
            return false;
        }
        return opt_type
            ? opt_type in this.listeners_
            : Object.keys(this.listeners_).length > 0;
    };
    /**
     * @param {string} type Type.
     * @param {import("../events.js").Listener} listener Listener.
     */
    Target.prototype.removeEventListener = function (type, listener) {
        var listeners = this.listeners_ && this.listeners_[type];
        if (listeners) {
            var index = listeners.indexOf(listener);
            if (index !== -1) {
                if (this.pendingRemovals_ && type in this.pendingRemovals_) {
                    // make listener a no-op, and remove later in #dispatchEvent()
                    listeners[index] = _functions_js__WEBPACK_IMPORTED_MODULE_1__/* .VOID */ .Zn;
                    ++this.pendingRemovals_[type];
                }
                else {
                    listeners.splice(index, 1);
                    if (listeners.length === 0) {
                        delete this.listeners_[type];
                    }
                }
            }
        }
    };
    return Target;
}(_Disposable_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Target);
//# sourceMappingURL=Target.js.map

/***/ }),

/***/ 2833:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Ne": () => (/* binding */ applyTransform),
  "hI": () => (/* binding */ boundingExtent),
  "d9": () => (/* binding */ clone),
  "qf": () => (/* binding */ closestSquaredDistanceXY),
  "b8": () => (/* binding */ containsCoordinate),
  "r4": () => (/* binding */ containsExtent),
  "jE": () => (/* binding */ containsXY),
  "lJ": () => (/* binding */ createEmpty),
  "T9": () => (/* binding */ createOrUpdate),
  "YN": () => (/* binding */ createOrUpdateEmpty),
  "HK": () => (/* binding */ createOrUpdateFromCoordinate),
  "GN": () => (/* binding */ createOrUpdateFromFlatCoordinates),
  "fS": () => (/* binding */ equals),
  "l7": () => (/* binding */ extend),
  "Wj": () => (/* binding */ extendCoordinate),
  "qP": () => (/* binding */ extendFlatCoordinates),
  "H6": () => (/* binding */ forEachCorner),
  "bg": () => (/* binding */ getArea),
  "hC": () => (/* binding */ getBottomLeft),
  "w$": () => (/* binding */ getBottomRight),
  "qg": () => (/* binding */ getCenter),
  "g0": () => (/* binding */ getCorner),
  "p8": () => (/* binding */ getForViewAndSize),
  "Cr": () => (/* binding */ getHeight),
  "Ed": () => (/* binding */ getIntersection),
  "dY": () => (/* binding */ getRotatedViewport),
  "rL": () => (/* binding */ getTopLeft),
  "Xv": () => (/* binding */ getTopRight),
  "dz": () => (/* binding */ getWidth),
  "kK": () => (/* binding */ intersects),
  "I7": () => (/* binding */ intersectsSegment),
  "xb": () => (/* binding */ isEmpty),
  "EO": () => (/* binding */ returnOrUpdate)
});

// UNUSED EXPORTS: approximatelyEquals, buffer, coordinateRelationship, createOrUpdateFromCoordinates, createOrUpdateFromRings, extendCoordinates, extendRings, extendXY, getEnlargedArea, getIntersectionArea, getMargin, getSize, scaleFromCenter, wrapAndSliceX, wrapX

;// CONCATENATED MODULE: ./node_modules/ol/extent/Relationship.js
/**
 * @module ol/extent/Relationship
 */
/**
 * Relationship to an extent.
 * @enum {number}
 */
/* harmony default export */ const Relationship = ({
    UNKNOWN: 0,
    INTERSECTING: 1,
    ABOVE: 2,
    RIGHT: 4,
    BELOW: 8,
    LEFT: 16,
});
//# sourceMappingURL=Relationship.js.map
// EXTERNAL MODULE: ./node_modules/ol/asserts.js
var asserts = __webpack_require__(9515);
;// CONCATENATED MODULE: ./node_modules/ol/extent.js
/**
 * @module ol/extent
 */


/**
 * An array of numbers representing an extent: `[minx, miny, maxx, maxy]`.
 * @typedef {Array<number>} Extent
 * @api
 */
/**
 * Extent corner.
 * @typedef {'bottom-left' | 'bottom-right' | 'top-left' | 'top-right'} Corner
 */
/**
 * Build an extent that includes all given coordinates.
 *
 * @param {Array<import("./coordinate.js").Coordinate>} coordinates Coordinates.
 * @return {Extent} Bounding extent.
 * @api
 */
function boundingExtent(coordinates) {
    var extent = createEmpty();
    for (var i = 0, ii = coordinates.length; i < ii; ++i) {
        extendCoordinate(extent, coordinates[i]);
    }
    return extent;
}
/**
 * @param {Array<number>} xs Xs.
 * @param {Array<number>} ys Ys.
 * @param {Extent} [opt_extent] Destination extent.
 * @private
 * @return {Extent} Extent.
 */
function _boundingExtentXYs(xs, ys, opt_extent) {
    var minX = Math.min.apply(null, xs);
    var minY = Math.min.apply(null, ys);
    var maxX = Math.max.apply(null, xs);
    var maxY = Math.max.apply(null, ys);
    return createOrUpdate(minX, minY, maxX, maxY, opt_extent);
}
/**
 * Return extent increased by the provided value.
 * @param {Extent} extent Extent.
 * @param {number} value The amount by which the extent should be buffered.
 * @param {Extent} [opt_extent] Extent.
 * @return {Extent} Extent.
 * @api
 */
function buffer(extent, value, opt_extent) {
    if (opt_extent) {
        opt_extent[0] = extent[0] - value;
        opt_extent[1] = extent[1] - value;
        opt_extent[2] = extent[2] + value;
        opt_extent[3] = extent[3] + value;
        return opt_extent;
    }
    else {
        return [
            extent[0] - value,
            extent[1] - value,
            extent[2] + value,
            extent[3] + value,
        ];
    }
}
/**
 * Creates a clone of an extent.
 *
 * @param {Extent} extent Extent to clone.
 * @param {Extent} [opt_extent] Extent.
 * @return {Extent} The clone.
 */
function clone(extent, opt_extent) {
    if (opt_extent) {
        opt_extent[0] = extent[0];
        opt_extent[1] = extent[1];
        opt_extent[2] = extent[2];
        opt_extent[3] = extent[3];
        return opt_extent;
    }
    else {
        return extent.slice();
    }
}
/**
 * @param {Extent} extent Extent.
 * @param {number} x X.
 * @param {number} y Y.
 * @return {number} Closest squared distance.
 */
function closestSquaredDistanceXY(extent, x, y) {
    var dx, dy;
    if (x < extent[0]) {
        dx = extent[0] - x;
    }
    else if (extent[2] < x) {
        dx = x - extent[2];
    }
    else {
        dx = 0;
    }
    if (y < extent[1]) {
        dy = extent[1] - y;
    }
    else if (extent[3] < y) {
        dy = y - extent[3];
    }
    else {
        dy = 0;
    }
    return dx * dx + dy * dy;
}
/**
 * Check if the passed coordinate is contained or on the edge of the extent.
 *
 * @param {Extent} extent Extent.
 * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
 * @return {boolean} The coordinate is contained in the extent.
 * @api
 */
function containsCoordinate(extent, coordinate) {
    return containsXY(extent, coordinate[0], coordinate[1]);
}
/**
 * Check if one extent contains another.
 *
 * An extent is deemed contained if it lies completely within the other extent,
 * including if they share one or more edges.
 *
 * @param {Extent} extent1 Extent 1.
 * @param {Extent} extent2 Extent 2.
 * @return {boolean} The second extent is contained by or on the edge of the
 *     first.
 * @api
 */
function containsExtent(extent1, extent2) {
    return (extent1[0] <= extent2[0] &&
        extent2[2] <= extent1[2] &&
        extent1[1] <= extent2[1] &&
        extent2[3] <= extent1[3]);
}
/**
 * Check if the passed coordinate is contained or on the edge of the extent.
 *
 * @param {Extent} extent Extent.
 * @param {number} x X coordinate.
 * @param {number} y Y coordinate.
 * @return {boolean} The x, y values are contained in the extent.
 * @api
 */
function containsXY(extent, x, y) {
    return extent[0] <= x && x <= extent[2] && extent[1] <= y && y <= extent[3];
}
/**
 * Get the relationship between a coordinate and extent.
 * @param {Extent} extent The extent.
 * @param {import("./coordinate.js").Coordinate} coordinate The coordinate.
 * @return {import("./extent/Relationship.js").default} The relationship (bitwise compare with
 *     import("./extent/Relationship.js").Relationship).
 */
function coordinateRelationship(extent, coordinate) {
    var minX = extent[0];
    var minY = extent[1];
    var maxX = extent[2];
    var maxY = extent[3];
    var x = coordinate[0];
    var y = coordinate[1];
    var relationship = Relationship.UNKNOWN;
    if (x < minX) {
        relationship = relationship | Relationship.LEFT;
    }
    else if (x > maxX) {
        relationship = relationship | Relationship.RIGHT;
    }
    if (y < minY) {
        relationship = relationship | Relationship.BELOW;
    }
    else if (y > maxY) {
        relationship = relationship | Relationship.ABOVE;
    }
    if (relationship === Relationship.UNKNOWN) {
        relationship = Relationship.INTERSECTING;
    }
    return relationship;
}
/**
 * Create an empty extent.
 * @return {Extent} Empty extent.
 * @api
 */
function createEmpty() {
    return [Infinity, Infinity, -Infinity, -Infinity];
}
/**
 * Create a new extent or update the provided extent.
 * @param {number} minX Minimum X.
 * @param {number} minY Minimum Y.
 * @param {number} maxX Maximum X.
 * @param {number} maxY Maximum Y.
 * @param {Extent} [opt_extent] Destination extent.
 * @return {Extent} Extent.
 */
function createOrUpdate(minX, minY, maxX, maxY, opt_extent) {
    if (opt_extent) {
        opt_extent[0] = minX;
        opt_extent[1] = minY;
        opt_extent[2] = maxX;
        opt_extent[3] = maxY;
        return opt_extent;
    }
    else {
        return [minX, minY, maxX, maxY];
    }
}
/**
 * Create a new empty extent or make the provided one empty.
 * @param {Extent} [opt_extent] Extent.
 * @return {Extent} Extent.
 */
function createOrUpdateEmpty(opt_extent) {
    return createOrUpdate(Infinity, Infinity, -Infinity, -Infinity, opt_extent);
}
/**
 * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
 * @param {Extent} [opt_extent] Extent.
 * @return {Extent} Extent.
 */
function createOrUpdateFromCoordinate(coordinate, opt_extent) {
    var x = coordinate[0];
    var y = coordinate[1];
    return createOrUpdate(x, y, x, y, opt_extent);
}
/**
 * @param {Array<import("./coordinate.js").Coordinate>} coordinates Coordinates.
 * @param {Extent} [opt_extent] Extent.
 * @return {Extent} Extent.
 */
function createOrUpdateFromCoordinates(coordinates, opt_extent) {
    var extent = createOrUpdateEmpty(opt_extent);
    return extendCoordinates(extent, coordinates);
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {Extent} [opt_extent] Extent.
 * @return {Extent} Extent.
 */
function createOrUpdateFromFlatCoordinates(flatCoordinates, offset, end, stride, opt_extent) {
    var extent = createOrUpdateEmpty(opt_extent);
    return extendFlatCoordinates(extent, flatCoordinates, offset, end, stride);
}
/**
 * @param {Array<Array<import("./coordinate.js").Coordinate>>} rings Rings.
 * @param {Extent} [opt_extent] Extent.
 * @return {Extent} Extent.
 */
function createOrUpdateFromRings(rings, opt_extent) {
    var extent = createOrUpdateEmpty(opt_extent);
    return extendRings(extent, rings);
}
/**
 * Determine if two extents are equivalent.
 * @param {Extent} extent1 Extent 1.
 * @param {Extent} extent2 Extent 2.
 * @return {boolean} The two extents are equivalent.
 * @api
 */
function equals(extent1, extent2) {
    return (extent1[0] == extent2[0] &&
        extent1[2] == extent2[2] &&
        extent1[1] == extent2[1] &&
        extent1[3] == extent2[3]);
}
/**
 * Determine if two extents are approximately equivalent.
 * @param {Extent} extent1 Extent 1.
 * @param {Extent} extent2 Extent 2.
 * @param {number} tolerance Tolerance in extent coordinate units.
 * @return {boolean} The two extents differ by less than the tolerance.
 */
function approximatelyEquals(extent1, extent2, tolerance) {
    return (Math.abs(extent1[0] - extent2[0]) < tolerance &&
        Math.abs(extent1[2] - extent2[2]) < tolerance &&
        Math.abs(extent1[1] - extent2[1]) < tolerance &&
        Math.abs(extent1[3] - extent2[3]) < tolerance);
}
/**
 * Modify an extent to include another extent.
 * @param {Extent} extent1 The extent to be modified.
 * @param {Extent} extent2 The extent that will be included in the first.
 * @return {Extent} A reference to the first (extended) extent.
 * @api
 */
function extend(extent1, extent2) {
    if (extent2[0] < extent1[0]) {
        extent1[0] = extent2[0];
    }
    if (extent2[2] > extent1[2]) {
        extent1[2] = extent2[2];
    }
    if (extent2[1] < extent1[1]) {
        extent1[1] = extent2[1];
    }
    if (extent2[3] > extent1[3]) {
        extent1[3] = extent2[3];
    }
    return extent1;
}
/**
 * @param {Extent} extent Extent.
 * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
 */
function extendCoordinate(extent, coordinate) {
    if (coordinate[0] < extent[0]) {
        extent[0] = coordinate[0];
    }
    if (coordinate[0] > extent[2]) {
        extent[2] = coordinate[0];
    }
    if (coordinate[1] < extent[1]) {
        extent[1] = coordinate[1];
    }
    if (coordinate[1] > extent[3]) {
        extent[3] = coordinate[1];
    }
}
/**
 * @param {Extent} extent Extent.
 * @param {Array<import("./coordinate.js").Coordinate>} coordinates Coordinates.
 * @return {Extent} Extent.
 */
function extendCoordinates(extent, coordinates) {
    for (var i = 0, ii = coordinates.length; i < ii; ++i) {
        extendCoordinate(extent, coordinates[i]);
    }
    return extent;
}
/**
 * @param {Extent} extent Extent.
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @return {Extent} Extent.
 */
function extendFlatCoordinates(extent, flatCoordinates, offset, end, stride) {
    for (; offset < end; offset += stride) {
        extendXY(extent, flatCoordinates[offset], flatCoordinates[offset + 1]);
    }
    return extent;
}
/**
 * @param {Extent} extent Extent.
 * @param {Array<Array<import("./coordinate.js").Coordinate>>} rings Rings.
 * @return {Extent} Extent.
 */
function extendRings(extent, rings) {
    for (var i = 0, ii = rings.length; i < ii; ++i) {
        extendCoordinates(extent, rings[i]);
    }
    return extent;
}
/**
 * @param {Extent} extent Extent.
 * @param {number} x X.
 * @param {number} y Y.
 */
function extendXY(extent, x, y) {
    extent[0] = Math.min(extent[0], x);
    extent[1] = Math.min(extent[1], y);
    extent[2] = Math.max(extent[2], x);
    extent[3] = Math.max(extent[3], y);
}
/**
 * This function calls `callback` for each corner of the extent. If the
 * callback returns a truthy value the function returns that value
 * immediately. Otherwise the function returns `false`.
 * @param {Extent} extent Extent.
 * @param {function(import("./coordinate.js").Coordinate): S} callback Callback.
 * @return {S|boolean} Value.
 * @template S
 */
function forEachCorner(extent, callback) {
    var val;
    val = callback(getBottomLeft(extent));
    if (val) {
        return val;
    }
    val = callback(getBottomRight(extent));
    if (val) {
        return val;
    }
    val = callback(getTopRight(extent));
    if (val) {
        return val;
    }
    val = callback(getTopLeft(extent));
    if (val) {
        return val;
    }
    return false;
}
/**
 * Get the size of an extent.
 * @param {Extent} extent Extent.
 * @return {number} Area.
 * @api
 */
function getArea(extent) {
    var area = 0;
    if (!isEmpty(extent)) {
        area = getWidth(extent) * getHeight(extent);
    }
    return area;
}
/**
 * Get the bottom left coordinate of an extent.
 * @param {Extent} extent Extent.
 * @return {import("./coordinate.js").Coordinate} Bottom left coordinate.
 * @api
 */
function getBottomLeft(extent) {
    return [extent[0], extent[1]];
}
/**
 * Get the bottom right coordinate of an extent.
 * @param {Extent} extent Extent.
 * @return {import("./coordinate.js").Coordinate} Bottom right coordinate.
 * @api
 */
function getBottomRight(extent) {
    return [extent[2], extent[1]];
}
/**
 * Get the center coordinate of an extent.
 * @param {Extent} extent Extent.
 * @return {import("./coordinate.js").Coordinate} Center.
 * @api
 */
function getCenter(extent) {
    return [(extent[0] + extent[2]) / 2, (extent[1] + extent[3]) / 2];
}
/**
 * Get a corner coordinate of an extent.
 * @param {Extent} extent Extent.
 * @param {Corner} corner Corner.
 * @return {import("./coordinate.js").Coordinate} Corner coordinate.
 */
function getCorner(extent, corner) {
    var coordinate;
    if (corner === 'bottom-left') {
        coordinate = getBottomLeft(extent);
    }
    else if (corner === 'bottom-right') {
        coordinate = getBottomRight(extent);
    }
    else if (corner === 'top-left') {
        coordinate = getTopLeft(extent);
    }
    else if (corner === 'top-right') {
        coordinate = getTopRight(extent);
    }
    else {
        (0,asserts/* assert */.h)(false, 13); // Invalid corner
    }
    return coordinate;
}
/**
 * @param {Extent} extent1 Extent 1.
 * @param {Extent} extent2 Extent 2.
 * @return {number} Enlarged area.
 */
function getEnlargedArea(extent1, extent2) {
    var minX = Math.min(extent1[0], extent2[0]);
    var minY = Math.min(extent1[1], extent2[1]);
    var maxX = Math.max(extent1[2], extent2[2]);
    var maxY = Math.max(extent1[3], extent2[3]);
    return (maxX - minX) * (maxY - minY);
}
/**
 * @param {import("./coordinate.js").Coordinate} center Center.
 * @param {number} resolution Resolution.
 * @param {number} rotation Rotation.
 * @param {import("./size.js").Size} size Size.
 * @param {Extent} [opt_extent] Destination extent.
 * @return {Extent} Extent.
 */
function getForViewAndSize(center, resolution, rotation, size, opt_extent) {
    var _a = getRotatedViewport(center, resolution, rotation, size), x0 = _a[0], y0 = _a[1], x1 = _a[2], y1 = _a[3], x2 = _a[4], y2 = _a[5], x3 = _a[6], y3 = _a[7];
    return createOrUpdate(Math.min(x0, x1, x2, x3), Math.min(y0, y1, y2, y3), Math.max(x0, x1, x2, x3), Math.max(y0, y1, y2, y3), opt_extent);
}
/**
 * @param {import("./coordinate.js").Coordinate} center Center.
 * @param {number} resolution Resolution.
 * @param {number} rotation Rotation.
 * @param {import("./size.js").Size} size Size.
 * @return {Array<number>} Linear ring representing the viewport.
 */
function getRotatedViewport(center, resolution, rotation, size) {
    var dx = (resolution * size[0]) / 2;
    var dy = (resolution * size[1]) / 2;
    var cosRotation = Math.cos(rotation);
    var sinRotation = Math.sin(rotation);
    var xCos = dx * cosRotation;
    var xSin = dx * sinRotation;
    var yCos = dy * cosRotation;
    var ySin = dy * sinRotation;
    var x = center[0];
    var y = center[1];
    return [
        x - xCos + ySin,
        y - xSin - yCos,
        x - xCos - ySin,
        y - xSin + yCos,
        x + xCos - ySin,
        y + xSin + yCos,
        x + xCos + ySin,
        y + xSin - yCos,
        x - xCos + ySin,
        y - xSin - yCos,
    ];
}
/**
 * Get the height of an extent.
 * @param {Extent} extent Extent.
 * @return {number} Height.
 * @api
 */
function getHeight(extent) {
    return extent[3] - extent[1];
}
/**
 * @param {Extent} extent1 Extent 1.
 * @param {Extent} extent2 Extent 2.
 * @return {number} Intersection area.
 */
function getIntersectionArea(extent1, extent2) {
    var intersection = getIntersection(extent1, extent2);
    return getArea(intersection);
}
/**
 * Get the intersection of two extents.
 * @param {Extent} extent1 Extent 1.
 * @param {Extent} extent2 Extent 2.
 * @param {Extent} [opt_extent] Optional extent to populate with intersection.
 * @return {Extent} Intersecting extent.
 * @api
 */
function getIntersection(extent1, extent2, opt_extent) {
    var intersection = opt_extent ? opt_extent : createEmpty();
    if (intersects(extent1, extent2)) {
        if (extent1[0] > extent2[0]) {
            intersection[0] = extent1[0];
        }
        else {
            intersection[0] = extent2[0];
        }
        if (extent1[1] > extent2[1]) {
            intersection[1] = extent1[1];
        }
        else {
            intersection[1] = extent2[1];
        }
        if (extent1[2] < extent2[2]) {
            intersection[2] = extent1[2];
        }
        else {
            intersection[2] = extent2[2];
        }
        if (extent1[3] < extent2[3]) {
            intersection[3] = extent1[3];
        }
        else {
            intersection[3] = extent2[3];
        }
    }
    else {
        createOrUpdateEmpty(intersection);
    }
    return intersection;
}
/**
 * @param {Extent} extent Extent.
 * @return {number} Margin.
 */
function getMargin(extent) {
    return getWidth(extent) + getHeight(extent);
}
/**
 * Get the size (width, height) of an extent.
 * @param {Extent} extent The extent.
 * @return {import("./size.js").Size} The extent size.
 * @api
 */
function getSize(extent) {
    return [extent[2] - extent[0], extent[3] - extent[1]];
}
/**
 * Get the top left coordinate of an extent.
 * @param {Extent} extent Extent.
 * @return {import("./coordinate.js").Coordinate} Top left coordinate.
 * @api
 */
function getTopLeft(extent) {
    return [extent[0], extent[3]];
}
/**
 * Get the top right coordinate of an extent.
 * @param {Extent} extent Extent.
 * @return {import("./coordinate.js").Coordinate} Top right coordinate.
 * @api
 */
function getTopRight(extent) {
    return [extent[2], extent[3]];
}
/**
 * Get the width of an extent.
 * @param {Extent} extent Extent.
 * @return {number} Width.
 * @api
 */
function getWidth(extent) {
    return extent[2] - extent[0];
}
/**
 * Determine if one extent intersects another.
 * @param {Extent} extent1 Extent 1.
 * @param {Extent} extent2 Extent.
 * @return {boolean} The two extents intersect.
 * @api
 */
function intersects(extent1, extent2) {
    return (extent1[0] <= extent2[2] &&
        extent1[2] >= extent2[0] &&
        extent1[1] <= extent2[3] &&
        extent1[3] >= extent2[1]);
}
/**
 * Determine if an extent is empty.
 * @param {Extent} extent Extent.
 * @return {boolean} Is empty.
 * @api
 */
function isEmpty(extent) {
    return extent[2] < extent[0] || extent[3] < extent[1];
}
/**
 * @param {Extent} extent Extent.
 * @param {Extent} [opt_extent] Extent.
 * @return {Extent} Extent.
 */
function returnOrUpdate(extent, opt_extent) {
    if (opt_extent) {
        opt_extent[0] = extent[0];
        opt_extent[1] = extent[1];
        opt_extent[2] = extent[2];
        opt_extent[3] = extent[3];
        return opt_extent;
    }
    else {
        return extent;
    }
}
/**
 * @param {Extent} extent Extent.
 * @param {number} value Value.
 */
function scaleFromCenter(extent, value) {
    var deltaX = ((extent[2] - extent[0]) / 2) * (value - 1);
    var deltaY = ((extent[3] - extent[1]) / 2) * (value - 1);
    extent[0] -= deltaX;
    extent[2] += deltaX;
    extent[1] -= deltaY;
    extent[3] += deltaY;
}
/**
 * Determine if the segment between two coordinates intersects (crosses,
 * touches, or is contained by) the provided extent.
 * @param {Extent} extent The extent.
 * @param {import("./coordinate.js").Coordinate} start Segment start coordinate.
 * @param {import("./coordinate.js").Coordinate} end Segment end coordinate.
 * @return {boolean} The segment intersects the extent.
 */
function intersectsSegment(extent, start, end) {
    var intersects = false;
    var startRel = coordinateRelationship(extent, start);
    var endRel = coordinateRelationship(extent, end);
    if (startRel === Relationship.INTERSECTING ||
        endRel === Relationship.INTERSECTING) {
        intersects = true;
    }
    else {
        var minX = extent[0];
        var minY = extent[1];
        var maxX = extent[2];
        var maxY = extent[3];
        var startX = start[0];
        var startY = start[1];
        var endX = end[0];
        var endY = end[1];
        var slope = (endY - startY) / (endX - startX);
        var x = void 0, y = void 0;
        if (!!(endRel & Relationship.ABOVE) && !(startRel & Relationship.ABOVE)) {
            // potentially intersects top
            x = endX - (endY - maxY) / slope;
            intersects = x >= minX && x <= maxX;
        }
        if (!intersects &&
            !!(endRel & Relationship.RIGHT) &&
            !(startRel & Relationship.RIGHT)) {
            // potentially intersects right
            y = endY - (endX - maxX) * slope;
            intersects = y >= minY && y <= maxY;
        }
        if (!intersects &&
            !!(endRel & Relationship.BELOW) &&
            !(startRel & Relationship.BELOW)) {
            // potentially intersects bottom
            x = endX - (endY - minY) / slope;
            intersects = x >= minX && x <= maxX;
        }
        if (!intersects &&
            !!(endRel & Relationship.LEFT) &&
            !(startRel & Relationship.LEFT)) {
            // potentially intersects left
            y = endY - (endX - minX) * slope;
            intersects = y >= minY && y <= maxY;
        }
    }
    return intersects;
}
/**
 * Apply a transform function to the extent.
 * @param {Extent} extent Extent.
 * @param {import("./proj.js").TransformFunction} transformFn Transform function.
 * Called with `[minX, minY, maxX, maxY]` extent coordinates.
 * @param {Extent} [opt_extent] Destination extent.
 * @param {number} [opt_stops] Number of stops per side used for the transform.
 * By default only the corners are used.
 * @return {Extent} Extent.
 * @api
 */
function applyTransform(extent, transformFn, opt_extent, opt_stops) {
    var coordinates = [];
    if (opt_stops > 1) {
        var width = extent[2] - extent[0];
        var height = extent[3] - extent[1];
        for (var i = 0; i < opt_stops; ++i) {
            coordinates.push(extent[0] + (width * i) / opt_stops, extent[1], extent[2], extent[1] + (height * i) / opt_stops, extent[2] - (width * i) / opt_stops, extent[3], extent[0], extent[3] - (height * i) / opt_stops);
        }
    }
    else {
        coordinates = [
            extent[0],
            extent[1],
            extent[2],
            extent[1],
            extent[2],
            extent[3],
            extent[0],
            extent[3],
        ];
    }
    transformFn(coordinates, coordinates, 2);
    var xs = [];
    var ys = [];
    for (var i = 0, l = coordinates.length; i < l; i += 2) {
        xs.push(coordinates[i]);
        ys.push(coordinates[i + 1]);
    }
    return _boundingExtentXYs(xs, ys, opt_extent);
}
/**
 * Modifies the provided extent in-place to be within the real world
 * extent.
 *
 * @param {Extent} extent Extent.
 * @param {import("./proj/Projection.js").default} projection Projection
 * @return {Extent} The extent within the real world extent.
 */
function wrapX(extent, projection) {
    var projectionExtent = projection.getExtent();
    var center = getCenter(extent);
    if (projection.canWrapX() &&
        (center[0] < projectionExtent[0] || center[0] >= projectionExtent[2])) {
        var worldWidth = getWidth(projectionExtent);
        var worldsAway = Math.floor((center[0] - projectionExtent[0]) / worldWidth);
        var offset = worldsAway * worldWidth;
        extent[0] -= offset;
        extent[2] -= offset;
    }
    return extent;
}
/**
 * Fits the extent to the real world
 *
 * If the extent does not cross the anti meridian, this will return the extent in an array
 * If the extent crosses the anti meridian, the extent will be sliced, so each part fits within the
 * real world
 *
 *
 * @param {Extent} extent Extent.
 * @param {import("./proj/Projection.js").default} projection Projection
 * @return {Array<Extent>} The extent within the real world extent.
 */
function wrapAndSliceX(extent, projection) {
    if (projection.canWrapX()) {
        var projectionExtent = projection.getExtent();
        if (!isFinite(extent[0]) || !isFinite(extent[2])) {
            return [[projectionExtent[0], extent[1], projectionExtent[2], extent[3]]];
        }
        wrapX(extent, projection);
        var worldWidth = getWidth(projectionExtent);
        if (getWidth(extent) > worldWidth) {
            // the extent wraps around on itself
            return [[projectionExtent[0], extent[1], projectionExtent[2], extent[3]]];
        }
        else if (extent[0] < projectionExtent[0]) {
            // the extent crosses the anti meridian, so it needs to be sliced
            return [
                [extent[0] + worldWidth, extent[1], projectionExtent[2], extent[3]],
                [projectionExtent[0], extent[1], extent[2], extent[3]],
            ];
        }
        else if (extent[2] > projectionExtent[2]) {
            // the extent crosses the anti meridian, so it needs to be sliced
            return [
                [extent[0], extent[1], projectionExtent[2], extent[3]],
                [projectionExtent[0], extent[1], extent[2] - worldWidth, extent[3]],
            ];
        }
    }
    return [extent];
}
//# sourceMappingURL=extent.js.map

/***/ }),

/***/ 6885:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dv": () => (/* binding */ FALSE),
/* harmony export */   "Zn": () => (/* binding */ VOID),
/* harmony export */   "qe": () => (/* binding */ memoizeOne),
/* harmony export */   "uX": () => (/* binding */ TRUE)
/* harmony export */ });
/* unused harmony export toPromise */
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5537);
/**
 * @module ol/functions
 */

/**
 * Always returns true.
 * @return {boolean} true.
 */
function TRUE() {
    return true;
}
/**
 * Always returns false.
 * @return {boolean} false.
 */
function FALSE() {
    return false;
}
/**
 * A reusable function, used e.g. as a default for callbacks.
 *
 * @return {void} Nothing.
 */
function VOID() { }
/**
 * Wrap a function in another function that remembers the last return.  If the
 * returned function is called twice in a row with the same arguments and the same
 * this object, it will return the value from the first call in the second call.
 *
 * @param {function(...any): ReturnType} fn The function to memoize.
 * @return {function(...any): ReturnType} The memoized function.
 * @template ReturnType
 */
function memoizeOne(fn) {
    var called = false;
    /** @type {ReturnType} */
    var lastResult;
    /** @type {Array<any>} */
    var lastArgs;
    var lastThis;
    return function () {
        var nextArgs = Array.prototype.slice.call(arguments);
        if (!called || this !== lastThis || !(0,_array_js__WEBPACK_IMPORTED_MODULE_0__/* .equals */ .fS)(nextArgs, lastArgs)) {
            called = true;
            lastThis = this;
            lastArgs = nextArgs;
            lastResult = fn.apply(this, arguments);
        }
        return lastResult;
    };
}
/**
 * @template T
 * @param {function(): (T | Promise<T>)} getter A function that returns a value or a promise for a value.
 * @return {Promise<T>} A promise for the value.
 */
function toPromise(getter) {
    function promiseGetter() {
        var value;
        try {
            value = getter();
        }
        catch (err) {
            return Promise.reject(err);
        }
        if (value instanceof Promise) {
            return value;
        }
        return Promise.resolve(value);
    }
    return promiseGetter();
}
//# sourceMappingURL=functions.js.map

/***/ }),

/***/ 1506:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": () => (/* binding */ geom_Polygon),
  "oJ": () => (/* binding */ fromExtent)
});

// UNUSED EXPORTS: circular, fromCircle, makeRegular

;// CONCATENATED MODULE: ./node_modules/ol/geom/GeometryLayout.js
/**
 * @module ol/geom/GeometryLayout
 */
/**
 * The coordinate layout for geometries, indicating whether a 3rd or 4th z ('Z')
 * or measure ('M') coordinate is available. Supported values are `'XY'`,
 * `'XYZ'`, `'XYM'`, `'XYZM'`.
 * @enum {string}
 */
/* harmony default export */ const geom_GeometryLayout = ({
    XY: 'XY',
    XYZ: 'XYZ',
    XYM: 'XYM',
    XYZM: 'XYZM',
});
//# sourceMappingURL=GeometryLayout.js.map
// EXTERNAL MODULE: ./node_modules/ol/Object.js
var ol_Object = __webpack_require__(2971);
// EXTERNAL MODULE: ./node_modules/ol/proj/Units.js
var Units = __webpack_require__(8375);
// EXTERNAL MODULE: ./node_modules/ol/util.js
var util = __webpack_require__(4187);
// EXTERNAL MODULE: ./node_modules/ol/transform.js
var transform = __webpack_require__(6101);
// EXTERNAL MODULE: ./node_modules/ol/extent.js + 1 modules
var ol_extent = __webpack_require__(2833);
// EXTERNAL MODULE: ./node_modules/ol/proj.js + 6 modules
var proj = __webpack_require__(1311);
// EXTERNAL MODULE: ./node_modules/ol/functions.js
var functions = __webpack_require__(6885);
;// CONCATENATED MODULE: ./node_modules/ol/geom/flat/transform.js
/**
 * @module ol/geom/flat/transform
 */
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {import("../../transform.js").Transform} transform Transform.
 * @param {Array<number>} [opt_dest] Destination.
 * @return {Array<number>} Transformed coordinates.
 */
function transform_transform2D(flatCoordinates, offset, end, stride, transform, opt_dest) {
    var dest = opt_dest ? opt_dest : [];
    var i = 0;
    for (var j = offset; j < end; j += stride) {
        var x = flatCoordinates[j];
        var y = flatCoordinates[j + 1];
        dest[i++] = transform[0] * x + transform[2] * y + transform[4];
        dest[i++] = transform[1] * x + transform[3] * y + transform[5];
    }
    if (opt_dest && dest.length != i) {
        dest.length = i;
    }
    return dest;
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} angle Angle.
 * @param {Array<number>} anchor Rotation anchor point.
 * @param {Array<number>} [opt_dest] Destination.
 * @return {Array<number>} Transformed coordinates.
 */
function rotate(flatCoordinates, offset, end, stride, angle, anchor, opt_dest) {
    var dest = opt_dest ? opt_dest : [];
    var cos = Math.cos(angle);
    var sin = Math.sin(angle);
    var anchorX = anchor[0];
    var anchorY = anchor[1];
    var i = 0;
    for (var j = offset; j < end; j += stride) {
        var deltaX = flatCoordinates[j] - anchorX;
        var deltaY = flatCoordinates[j + 1] - anchorY;
        dest[i++] = anchorX + deltaX * cos - deltaY * sin;
        dest[i++] = anchorY + deltaX * sin + deltaY * cos;
        for (var k = j + 2; k < j + stride; ++k) {
            dest[i++] = flatCoordinates[k];
        }
    }
    if (opt_dest && dest.length != i) {
        dest.length = i;
    }
    return dest;
}
/**
 * Scale the coordinates.
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} sx Scale factor in the x-direction.
 * @param {number} sy Scale factor in the y-direction.
 * @param {Array<number>} anchor Scale anchor point.
 * @param {Array<number>} [opt_dest] Destination.
 * @return {Array<number>} Transformed coordinates.
 */
function scale(flatCoordinates, offset, end, stride, sx, sy, anchor, opt_dest) {
    var dest = opt_dest ? opt_dest : [];
    var anchorX = anchor[0];
    var anchorY = anchor[1];
    var i = 0;
    for (var j = offset; j < end; j += stride) {
        var deltaX = flatCoordinates[j] - anchorX;
        var deltaY = flatCoordinates[j + 1] - anchorY;
        dest[i++] = anchorX + sx * deltaX;
        dest[i++] = anchorY + sy * deltaY;
        for (var k = j + 2; k < j + stride; ++k) {
            dest[i++] = flatCoordinates[k];
        }
    }
    if (opt_dest && dest.length != i) {
        dest.length = i;
    }
    return dest;
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} deltaX Delta X.
 * @param {number} deltaY Delta Y.
 * @param {Array<number>} [opt_dest] Destination.
 * @return {Array<number>} Transformed coordinates.
 */
function translate(flatCoordinates, offset, end, stride, deltaX, deltaY, opt_dest) {
    var dest = opt_dest ? opt_dest : [];
    var i = 0;
    for (var j = offset; j < end; j += stride) {
        dest[i++] = flatCoordinates[j] + deltaX;
        dest[i++] = flatCoordinates[j + 1] + deltaY;
        for (var k = j + 2; k < j + stride; ++k) {
            dest[i++] = flatCoordinates[k];
        }
    }
    if (opt_dest && dest.length != i) {
        dest.length = i;
    }
    return dest;
}
//# sourceMappingURL=transform.js.map
;// CONCATENATED MODULE: ./node_modules/ol/geom/Geometry.js
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @module ol/geom/Geometry
 */








/**
 * @typedef {'Point' | 'LineString' | 'LinearRing' | 'Polygon' | 'MultiPoint' | 'MultiLineString' | 'MultiPolygon' | 'GeometryCollection' | 'Circle'} Type
 * The geometry type.  One of `'Point'`, `'LineString'`, `'LinearRing'`,
 * `'Polygon'`, `'MultiPoint'`, `'MultiLineString'`, `'MultiPolygon'`,
 * `'GeometryCollection'`, or `'Circle'`.
 */
/**
 * @type {import("../transform.js").Transform}
 */
var tmpTransform = (0,transform/* create */.Ue)();
/**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * Base class for vector geometries.
 *
 * To get notified of changes to the geometry, register a listener for the
 * generic `change` event on your geometry instance.
 *
 * @abstract
 * @api
 */
var Geometry = /** @class */ (function (_super) {
    __extends(Geometry, _super);
    function Geometry() {
        var _this = _super.call(this) || this;
        /**
         * @private
         * @type {import("../extent.js").Extent}
         */
        _this.extent_ = (0,ol_extent/* createEmpty */.lJ)();
        /**
         * @private
         * @type {number}
         */
        _this.extentRevision_ = -1;
        /**
         * @protected
         * @type {number}
         */
        _this.simplifiedGeometryMaxMinSquaredTolerance = 0;
        /**
         * @protected
         * @type {number}
         */
        _this.simplifiedGeometryRevision = 0;
        /**
         * Get a transformed and simplified version of the geometry.
         * @abstract
         * @param {number} revision The geometry revision.
         * @param {number} squaredTolerance Squared tolerance.
         * @param {import("../proj.js").TransformFunction} [opt_transform] Optional transform function.
         * @return {Geometry} Simplified geometry.
         */
        _this.simplifyTransformedInternal = (0,functions/* memoizeOne */.qe)(function (revision, squaredTolerance, opt_transform) {
            if (!opt_transform) {
                return this.getSimplifiedGeometry(squaredTolerance);
            }
            var clone = this.clone();
            clone.applyTransform(opt_transform);
            return clone.getSimplifiedGeometry(squaredTolerance);
        });
        return _this;
    }
    /**
     * Get a transformed and simplified version of the geometry.
     * @abstract
     * @param {number} squaredTolerance Squared tolerance.
     * @param {import("../proj.js").TransformFunction} [opt_transform] Optional transform function.
     * @return {Geometry} Simplified geometry.
     */
    Geometry.prototype.simplifyTransformed = function (squaredTolerance, opt_transform) {
        return this.simplifyTransformedInternal(this.getRevision(), squaredTolerance, opt_transform);
    };
    /**
     * Make a complete copy of the geometry.
     * @abstract
     * @return {!Geometry} Clone.
     */
    Geometry.prototype.clone = function () {
        return (0,util/* abstract */.O3)();
    };
    /**
     * @abstract
     * @param {number} x X.
     * @param {number} y Y.
     * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
     * @param {number} minSquaredDistance Minimum squared distance.
     * @return {number} Minimum squared distance.
     */
    Geometry.prototype.closestPointXY = function (x, y, closestPoint, minSquaredDistance) {
        return (0,util/* abstract */.O3)();
    };
    /**
     * @param {number} x X.
     * @param {number} y Y.
     * @return {boolean} Contains (x, y).
     */
    Geometry.prototype.containsXY = function (x, y) {
        var coord = this.getClosestPoint([x, y]);
        return coord[0] === x && coord[1] === y;
    };
    /**
     * Return the closest point of the geometry to the passed point as
     * {@link module:ol/coordinate~Coordinate coordinate}.
     * @param {import("../coordinate.js").Coordinate} point Point.
     * @param {import("../coordinate.js").Coordinate} [opt_closestPoint] Closest point.
     * @return {import("../coordinate.js").Coordinate} Closest point.
     * @api
     */
    Geometry.prototype.getClosestPoint = function (point, opt_closestPoint) {
        var closestPoint = opt_closestPoint ? opt_closestPoint : [NaN, NaN];
        this.closestPointXY(point[0], point[1], closestPoint, Infinity);
        return closestPoint;
    };
    /**
     * Returns true if this geometry includes the specified coordinate. If the
     * coordinate is on the boundary of the geometry, returns false.
     * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
     * @return {boolean} Contains coordinate.
     * @api
     */
    Geometry.prototype.intersectsCoordinate = function (coordinate) {
        return this.containsXY(coordinate[0], coordinate[1]);
    };
    /**
     * @abstract
     * @param {import("../extent.js").Extent} extent Extent.
     * @protected
     * @return {import("../extent.js").Extent} extent Extent.
     */
    Geometry.prototype.computeExtent = function (extent) {
        return (0,util/* abstract */.O3)();
    };
    /**
     * Get the extent of the geometry.
     * @param {import("../extent.js").Extent} [opt_extent] Extent.
     * @return {import("../extent.js").Extent} extent Extent.
     * @api
     */
    Geometry.prototype.getExtent = function (opt_extent) {
        if (this.extentRevision_ != this.getRevision()) {
            var extent = this.computeExtent(this.extent_);
            if (isNaN(extent[0]) || isNaN(extent[1])) {
                (0,ol_extent/* createOrUpdateEmpty */.YN)(extent);
            }
            this.extentRevision_ = this.getRevision();
        }
        return (0,ol_extent/* returnOrUpdate */.EO)(this.extent_, opt_extent);
    };
    /**
     * Rotate the geometry around a given coordinate. This modifies the geometry
     * coordinates in place.
     * @abstract
     * @param {number} angle Rotation angle in radians.
     * @param {import("../coordinate.js").Coordinate} anchor The rotation center.
     * @api
     */
    Geometry.prototype.rotate = function (angle, anchor) {
        (0,util/* abstract */.O3)();
    };
    /**
     * Scale the geometry (with an optional origin).  This modifies the geometry
     * coordinates in place.
     * @abstract
     * @param {number} sx The scaling factor in the x-direction.
     * @param {number} [opt_sy] The scaling factor in the y-direction (defaults to sx).
     * @param {import("../coordinate.js").Coordinate} [opt_anchor] The scale origin (defaults to the center
     *     of the geometry extent).
     * @api
     */
    Geometry.prototype.scale = function (sx, opt_sy, opt_anchor) {
        (0,util/* abstract */.O3)();
    };
    /**
     * Create a simplified version of this geometry.  For linestrings, this uses
     * the [Douglas Peucker](https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm)
     * algorithm.  For polygons, a quantization-based
     * simplification is used to preserve topology.
     * @param {number} tolerance The tolerance distance for simplification.
     * @return {Geometry} A new, simplified version of the original geometry.
     * @api
     */
    Geometry.prototype.simplify = function (tolerance) {
        return this.getSimplifiedGeometry(tolerance * tolerance);
    };
    /**
     * Create a simplified version of this geometry using the Douglas Peucker
     * algorithm.
     * See https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm.
     * @abstract
     * @param {number} squaredTolerance Squared tolerance.
     * @return {Geometry} Simplified geometry.
     */
    Geometry.prototype.getSimplifiedGeometry = function (squaredTolerance) {
        return (0,util/* abstract */.O3)();
    };
    /**
     * Get the type of this geometry.
     * @abstract
     * @return {Type} Geometry type.
     */
    Geometry.prototype.getType = function () {
        return (0,util/* abstract */.O3)();
    };
    /**
     * Apply a transform function to the coordinates of the geometry.
     * The geometry is modified in place.
     * If you do not want the geometry modified in place, first `clone()` it and
     * then use this function on the clone.
     * @abstract
     * @param {import("../proj.js").TransformFunction} transformFn Transform function.
     * Called with a flat array of geometry coordinates.
     */
    Geometry.prototype.applyTransform = function (transformFn) {
        (0,util/* abstract */.O3)();
    };
    /**
     * Test if the geometry and the passed extent intersect.
     * @abstract
     * @param {import("../extent.js").Extent} extent Extent.
     * @return {boolean} `true` if the geometry and the extent intersect.
     */
    Geometry.prototype.intersectsExtent = function (extent) {
        return (0,util/* abstract */.O3)();
    };
    /**
     * Translate the geometry.  This modifies the geometry coordinates in place.  If
     * instead you want a new geometry, first `clone()` this geometry.
     * @abstract
     * @param {number} deltaX Delta X.
     * @param {number} deltaY Delta Y.
     * @api
     */
    Geometry.prototype.translate = function (deltaX, deltaY) {
        (0,util/* abstract */.O3)();
    };
    /**
     * Transform each coordinate of the geometry from one coordinate reference
     * system to another. The geometry is modified in place.
     * For example, a line will be transformed to a line and a circle to a circle.
     * If you do not want the geometry modified in place, first `clone()` it and
     * then use this function on the clone.
     *
     * @param {import("../proj.js").ProjectionLike} source The current projection.  Can be a
     *     string identifier or a {@link module:ol/proj/Projection~Projection} object.
     * @param {import("../proj.js").ProjectionLike} destination The desired projection.  Can be a
     *     string identifier or a {@link module:ol/proj/Projection~Projection} object.
     * @return {Geometry} This geometry.  Note that original geometry is
     *     modified in place.
     * @api
     */
    Geometry.prototype.transform = function (source, destination) {
        /** @type {import("../proj/Projection.js").default} */
        var sourceProj = (0,proj/* get */.U2)(source);
        var transformFn = sourceProj.getUnits() == Units/* default.TILE_PIXELS */.ZP.TILE_PIXELS
            ? function (inCoordinates, outCoordinates, stride) {
                var pixelExtent = sourceProj.getExtent();
                var projectedExtent = sourceProj.getWorldExtent();
                var scale = (0,ol_extent/* getHeight */.Cr)(projectedExtent) / (0,ol_extent/* getHeight */.Cr)(pixelExtent);
                (0,transform/* compose */.qC)(tmpTransform, projectedExtent[0], projectedExtent[3], scale, -scale, 0, 0, 0);
                transform_transform2D(inCoordinates, 0, inCoordinates.length, stride, tmpTransform, outCoordinates);
                return (0,proj/* getTransform */.Ck)(sourceProj, destination)(inCoordinates, outCoordinates, stride);
            }
            : (0,proj/* getTransform */.Ck)(sourceProj, destination);
        this.applyTransform(transformFn);
        return this;
    };
    return Geometry;
}(ol_Object/* default */.Z));
/* harmony default export */ const geom_Geometry = (Geometry);
//# sourceMappingURL=Geometry.js.map
;// CONCATENATED MODULE: ./node_modules/ol/geom/SimpleGeometry.js
var SimpleGeometry_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @module ol/geom/SimpleGeometry
 */





/**
 * @classdesc
 * Abstract base class; only used for creating subclasses; do not instantiate
 * in apps, as cannot be rendered.
 *
 * @abstract
 * @api
 */
var SimpleGeometry = /** @class */ (function (_super) {
    SimpleGeometry_extends(SimpleGeometry, _super);
    function SimpleGeometry() {
        var _this = _super.call(this) || this;
        /**
         * @protected
         * @type {import("./GeometryLayout.js").default}
         */
        _this.layout = geom_GeometryLayout.XY;
        /**
         * @protected
         * @type {number}
         */
        _this.stride = 2;
        /**
         * @protected
         * @type {Array<number>}
         */
        _this.flatCoordinates = null;
        return _this;
    }
    /**
     * @param {import("../extent.js").Extent} extent Extent.
     * @protected
     * @return {import("../extent.js").Extent} extent Extent.
     */
    SimpleGeometry.prototype.computeExtent = function (extent) {
        return (0,ol_extent/* createOrUpdateFromFlatCoordinates */.GN)(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, extent);
    };
    /**
     * @abstract
     * @return {Array<*> | null} Coordinates.
     */
    SimpleGeometry.prototype.getCoordinates = function () {
        return (0,util/* abstract */.O3)();
    };
    /**
     * Return the first coordinate of the geometry.
     * @return {import("../coordinate.js").Coordinate} First coordinate.
     * @api
     */
    SimpleGeometry.prototype.getFirstCoordinate = function () {
        return this.flatCoordinates.slice(0, this.stride);
    };
    /**
     * @return {Array<number>} Flat coordinates.
     */
    SimpleGeometry.prototype.getFlatCoordinates = function () {
        return this.flatCoordinates;
    };
    /**
     * Return the last coordinate of the geometry.
     * @return {import("../coordinate.js").Coordinate} Last point.
     * @api
     */
    SimpleGeometry.prototype.getLastCoordinate = function () {
        return this.flatCoordinates.slice(this.flatCoordinates.length - this.stride);
    };
    /**
     * Return the {@link module:ol/geom/GeometryLayout layout} of the geometry.
     * @return {import("./GeometryLayout.js").default} Layout.
     * @api
     */
    SimpleGeometry.prototype.getLayout = function () {
        return this.layout;
    };
    /**
     * Create a simplified version of this geometry using the Douglas Peucker algorithm.
     * @param {number} squaredTolerance Squared tolerance.
     * @return {SimpleGeometry} Simplified geometry.
     */
    SimpleGeometry.prototype.getSimplifiedGeometry = function (squaredTolerance) {
        if (this.simplifiedGeometryRevision !== this.getRevision()) {
            this.simplifiedGeometryMaxMinSquaredTolerance = 0;
            this.simplifiedGeometryRevision = this.getRevision();
        }
        // If squaredTolerance is negative or if we know that simplification will not
        // have any effect then just return this.
        if (squaredTolerance < 0 ||
            (this.simplifiedGeometryMaxMinSquaredTolerance !== 0 &&
                squaredTolerance <= this.simplifiedGeometryMaxMinSquaredTolerance)) {
            return this;
        }
        var simplifiedGeometry = this.getSimplifiedGeometryInternal(squaredTolerance);
        var simplifiedFlatCoordinates = simplifiedGeometry.getFlatCoordinates();
        if (simplifiedFlatCoordinates.length < this.flatCoordinates.length) {
            return simplifiedGeometry;
        }
        else {
            // Simplification did not actually remove any coordinates.  We now know
            // that any calls to getSimplifiedGeometry with a squaredTolerance less
            // than or equal to the current squaredTolerance will also not have any
            // effect.  This allows us to short circuit simplification (saving CPU
            // cycles) and prevents the cache of simplified geometries from filling
            // up with useless identical copies of this geometry (saving memory).
            this.simplifiedGeometryMaxMinSquaredTolerance = squaredTolerance;
            return this;
        }
    };
    /**
     * @param {number} squaredTolerance Squared tolerance.
     * @return {SimpleGeometry} Simplified geometry.
     * @protected
     */
    SimpleGeometry.prototype.getSimplifiedGeometryInternal = function (squaredTolerance) {
        return this;
    };
    /**
     * @return {number} Stride.
     */
    SimpleGeometry.prototype.getStride = function () {
        return this.stride;
    };
    /**
     * @param {import("./GeometryLayout.js").default} layout Layout.
     * @param {Array<number>} flatCoordinates Flat coordinates.
     */
    SimpleGeometry.prototype.setFlatCoordinates = function (layout, flatCoordinates) {
        this.stride = getStrideForLayout(layout);
        this.layout = layout;
        this.flatCoordinates = flatCoordinates;
    };
    /**
     * @abstract
     * @param {!Array<*>} coordinates Coordinates.
     * @param {import("./GeometryLayout.js").default} [opt_layout] Layout.
     */
    SimpleGeometry.prototype.setCoordinates = function (coordinates, opt_layout) {
        (0,util/* abstract */.O3)();
    };
    /**
     * @param {import("./GeometryLayout.js").default|undefined} layout Layout.
     * @param {Array<*>} coordinates Coordinates.
     * @param {number} nesting Nesting.
     * @protected
     */
    SimpleGeometry.prototype.setLayout = function (layout, coordinates, nesting) {
        /** @type {number} */
        var stride;
        if (layout) {
            stride = getStrideForLayout(layout);
        }
        else {
            for (var i = 0; i < nesting; ++i) {
                if (coordinates.length === 0) {
                    this.layout = geom_GeometryLayout.XY;
                    this.stride = 2;
                    return;
                }
                else {
                    coordinates = /** @type {Array} */ (coordinates[0]);
                }
            }
            stride = coordinates.length;
            layout = getLayoutForStride(stride);
        }
        this.layout = layout;
        this.stride = stride;
    };
    /**
     * Apply a transform function to the coordinates of the geometry.
     * The geometry is modified in place.
     * If you do not want the geometry modified in place, first `clone()` it and
     * then use this function on the clone.
     * @param {import("../proj.js").TransformFunction} transformFn Transform function.
     * Called with a flat array of geometry coordinates.
     * @api
     */
    SimpleGeometry.prototype.applyTransform = function (transformFn) {
        if (this.flatCoordinates) {
            transformFn(this.flatCoordinates, this.flatCoordinates, this.stride);
            this.changed();
        }
    };
    /**
     * Rotate the geometry around a given coordinate. This modifies the geometry
     * coordinates in place.
     * @param {number} angle Rotation angle in counter-clockwise radians.
     * @param {import("../coordinate.js").Coordinate} anchor The rotation center.
     * @api
     */
    SimpleGeometry.prototype.rotate = function (angle, anchor) {
        var flatCoordinates = this.getFlatCoordinates();
        if (flatCoordinates) {
            var stride = this.getStride();
            rotate(flatCoordinates, 0, flatCoordinates.length, stride, angle, anchor, flatCoordinates);
            this.changed();
        }
    };
    /**
     * Scale the geometry (with an optional origin).  This modifies the geometry
     * coordinates in place.
     * @param {number} sx The scaling factor in the x-direction.
     * @param {number} [opt_sy] The scaling factor in the y-direction (defaults to sx).
     * @param {import("../coordinate.js").Coordinate} [opt_anchor] The scale origin (defaults to the center
     *     of the geometry extent).
     * @api
     */
    SimpleGeometry.prototype.scale = function (sx, opt_sy, opt_anchor) {
        var sy = opt_sy;
        if (sy === undefined) {
            sy = sx;
        }
        var anchor = opt_anchor;
        if (!anchor) {
            anchor = (0,ol_extent/* getCenter */.qg)(this.getExtent());
        }
        var flatCoordinates = this.getFlatCoordinates();
        if (flatCoordinates) {
            var stride = this.getStride();
            scale(flatCoordinates, 0, flatCoordinates.length, stride, sx, sy, anchor, flatCoordinates);
            this.changed();
        }
    };
    /**
     * Translate the geometry.  This modifies the geometry coordinates in place.  If
     * instead you want a new geometry, first `clone()` this geometry.
     * @param {number} deltaX Delta X.
     * @param {number} deltaY Delta Y.
     * @api
     */
    SimpleGeometry.prototype.translate = function (deltaX, deltaY) {
        var flatCoordinates = this.getFlatCoordinates();
        if (flatCoordinates) {
            var stride = this.getStride();
            translate(flatCoordinates, 0, flatCoordinates.length, stride, deltaX, deltaY, flatCoordinates);
            this.changed();
        }
    };
    return SimpleGeometry;
}(geom_Geometry));
/**
 * @param {number} stride Stride.
 * @return {import("./GeometryLayout.js").default} layout Layout.
 */
function getLayoutForStride(stride) {
    var layout;
    if (stride == 2) {
        layout = geom_GeometryLayout.XY;
    }
    else if (stride == 3) {
        layout = geom_GeometryLayout.XYZ;
    }
    else if (stride == 4) {
        layout = geom_GeometryLayout.XYZM;
    }
    return /** @type {import("./GeometryLayout.js").default} */ (layout);
}
/**
 * @param {import("./GeometryLayout.js").default} layout Layout.
 * @return {number} Stride.
 */
function getStrideForLayout(layout) {
    var stride;
    if (layout == geom_GeometryLayout.XY) {
        stride = 2;
    }
    else if (layout == geom_GeometryLayout.XYZ || layout == geom_GeometryLayout.XYM) {
        stride = 3;
    }
    else if (layout == geom_GeometryLayout.XYZM) {
        stride = 4;
    }
    return /** @type {number} */ (stride);
}
/**
 * @param {SimpleGeometry} simpleGeometry Simple geometry.
 * @param {import("../transform.js").Transform} transform Transform.
 * @param {Array<number>} [opt_dest] Destination.
 * @return {Array<number>} Transformed flat coordinates.
 */
function transformGeom2D(simpleGeometry, transform, opt_dest) {
    var flatCoordinates = simpleGeometry.getFlatCoordinates();
    if (!flatCoordinates) {
        return null;
    }
    else {
        var stride = simpleGeometry.getStride();
        return transform2D(flatCoordinates, 0, flatCoordinates.length, stride, transform, opt_dest);
    }
}
/* harmony default export */ const geom_SimpleGeometry = (SimpleGeometry);
//# sourceMappingURL=SimpleGeometry.js.map
// EXTERNAL MODULE: ./node_modules/ol/math.js
var math = __webpack_require__(3983);
;// CONCATENATED MODULE: ./node_modules/ol/geom/flat/closest.js
/**
 * @module ol/geom/flat/closest
 */

/**
 * Returns the point on the 2D line segment flatCoordinates[offset1] to
 * flatCoordinates[offset2] that is closest to the point (x, y).  Extra
 * dimensions are linearly interpolated.
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset1 Offset 1.
 * @param {number} offset2 Offset 2.
 * @param {number} stride Stride.
 * @param {number} x X.
 * @param {number} y Y.
 * @param {Array<number>} closestPoint Closest point.
 */
function assignClosest(flatCoordinates, offset1, offset2, stride, x, y, closestPoint) {
    var x1 = flatCoordinates[offset1];
    var y1 = flatCoordinates[offset1 + 1];
    var dx = flatCoordinates[offset2] - x1;
    var dy = flatCoordinates[offset2 + 1] - y1;
    var offset;
    if (dx === 0 && dy === 0) {
        offset = offset1;
    }
    else {
        var t = ((x - x1) * dx + (y - y1) * dy) / (dx * dx + dy * dy);
        if (t > 1) {
            offset = offset2;
        }
        else if (t > 0) {
            for (var i = 0; i < stride; ++i) {
                closestPoint[i] = (0,math/* lerp */.t7)(flatCoordinates[offset1 + i], flatCoordinates[offset2 + i], t);
            }
            closestPoint.length = stride;
            return;
        }
        else {
            offset = offset1;
        }
    }
    for (var i = 0; i < stride; ++i) {
        closestPoint[i] = flatCoordinates[offset + i];
    }
    closestPoint.length = stride;
}
/**
 * Return the squared of the largest distance between any pair of consecutive
 * coordinates.
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} max Max squared delta.
 * @return {number} Max squared delta.
 */
function maxSquaredDelta(flatCoordinates, offset, end, stride, max) {
    var x1 = flatCoordinates[offset];
    var y1 = flatCoordinates[offset + 1];
    for (offset += stride; offset < end; offset += stride) {
        var x2 = flatCoordinates[offset];
        var y2 = flatCoordinates[offset + 1];
        var squaredDelta = (0,math/* squaredDistance */.bI)(x1, y1, x2, y2);
        if (squaredDelta > max) {
            max = squaredDelta;
        }
        x1 = x2;
        y1 = y2;
    }
    return max;
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<number>} ends Ends.
 * @param {number} stride Stride.
 * @param {number} max Max squared delta.
 * @return {number} Max squared delta.
 */
function arrayMaxSquaredDelta(flatCoordinates, offset, ends, stride, max) {
    for (var i = 0, ii = ends.length; i < ii; ++i) {
        var end = ends[i];
        max = maxSquaredDelta(flatCoordinates, offset, end, stride, max);
        offset = end;
    }
    return max;
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<number>>} endss Endss.
 * @param {number} stride Stride.
 * @param {number} max Max squared delta.
 * @return {number} Max squared delta.
 */
function multiArrayMaxSquaredDelta(flatCoordinates, offset, endss, stride, max) {
    for (var i = 0, ii = endss.length; i < ii; ++i) {
        var ends = endss[i];
        max = arrayMaxSquaredDelta(flatCoordinates, offset, ends, stride, max);
        offset = ends[ends.length - 1];
    }
    return max;
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} maxDelta Max delta.
 * @param {boolean} isRing Is ring.
 * @param {number} x X.
 * @param {number} y Y.
 * @param {Array<number>} closestPoint Closest point.
 * @param {number} minSquaredDistance Minimum squared distance.
 * @param {Array<number>} [opt_tmpPoint] Temporary point object.
 * @return {number} Minimum squared distance.
 */
function assignClosestPoint(flatCoordinates, offset, end, stride, maxDelta, isRing, x, y, closestPoint, minSquaredDistance, opt_tmpPoint) {
    if (offset == end) {
        return minSquaredDistance;
    }
    var i, squaredDistance;
    if (maxDelta === 0) {
        // All points are identical, so just test the first point.
        squaredDistance = (0,math/* squaredDistance */.bI)(x, y, flatCoordinates[offset], flatCoordinates[offset + 1]);
        if (squaredDistance < minSquaredDistance) {
            for (i = 0; i < stride; ++i) {
                closestPoint[i] = flatCoordinates[offset + i];
            }
            closestPoint.length = stride;
            return squaredDistance;
        }
        else {
            return minSquaredDistance;
        }
    }
    var tmpPoint = opt_tmpPoint ? opt_tmpPoint : [NaN, NaN];
    var index = offset + stride;
    while (index < end) {
        assignClosest(flatCoordinates, index - stride, index, stride, x, y, tmpPoint);
        squaredDistance = (0,math/* squaredDistance */.bI)(x, y, tmpPoint[0], tmpPoint[1]);
        if (squaredDistance < minSquaredDistance) {
            minSquaredDistance = squaredDistance;
            for (i = 0; i < stride; ++i) {
                closestPoint[i] = tmpPoint[i];
            }
            closestPoint.length = stride;
            index += stride;
        }
        else {
            // Skip ahead multiple points, because we know that all the skipped
            // points cannot be any closer than the closest point we have found so
            // far.  We know this because we know how close the current point is, how
            // close the closest point we have found so far is, and the maximum
            // distance between consecutive points.  For example, if we're currently
            // at distance 10, the best we've found so far is 3, and that the maximum
            // distance between consecutive points is 2, then we'll need to skip at
            // least (10 - 3) / 2 == 3 (rounded down) points to have any chance of
            // finding a closer point.  We use Math.max(..., 1) to ensure that we
            // always advance at least one point, to avoid an infinite loop.
            index +=
                stride *
                    Math.max(((Math.sqrt(squaredDistance) - Math.sqrt(minSquaredDistance)) /
                        maxDelta) |
                        0, 1);
        }
    }
    if (isRing) {
        // Check the closing segment.
        assignClosest(flatCoordinates, end - stride, offset, stride, x, y, tmpPoint);
        squaredDistance = (0,math/* squaredDistance */.bI)(x, y, tmpPoint[0], tmpPoint[1]);
        if (squaredDistance < minSquaredDistance) {
            minSquaredDistance = squaredDistance;
            for (i = 0; i < stride; ++i) {
                closestPoint[i] = tmpPoint[i];
            }
            closestPoint.length = stride;
        }
    }
    return minSquaredDistance;
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<number>} ends Ends.
 * @param {number} stride Stride.
 * @param {number} maxDelta Max delta.
 * @param {boolean} isRing Is ring.
 * @param {number} x X.
 * @param {number} y Y.
 * @param {Array<number>} closestPoint Closest point.
 * @param {number} minSquaredDistance Minimum squared distance.
 * @param {Array<number>} [opt_tmpPoint] Temporary point object.
 * @return {number} Minimum squared distance.
 */
function assignClosestArrayPoint(flatCoordinates, offset, ends, stride, maxDelta, isRing, x, y, closestPoint, minSquaredDistance, opt_tmpPoint) {
    var tmpPoint = opt_tmpPoint ? opt_tmpPoint : [NaN, NaN];
    for (var i = 0, ii = ends.length; i < ii; ++i) {
        var end = ends[i];
        minSquaredDistance = assignClosestPoint(flatCoordinates, offset, end, stride, maxDelta, isRing, x, y, closestPoint, minSquaredDistance, tmpPoint);
        offset = end;
    }
    return minSquaredDistance;
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<number>>} endss Endss.
 * @param {number} stride Stride.
 * @param {number} maxDelta Max delta.
 * @param {boolean} isRing Is ring.
 * @param {number} x X.
 * @param {number} y Y.
 * @param {Array<number>} closestPoint Closest point.
 * @param {number} minSquaredDistance Minimum squared distance.
 * @param {Array<number>} [opt_tmpPoint] Temporary point object.
 * @return {number} Minimum squared distance.
 */
function assignClosestMultiArrayPoint(flatCoordinates, offset, endss, stride, maxDelta, isRing, x, y, closestPoint, minSquaredDistance, opt_tmpPoint) {
    var tmpPoint = opt_tmpPoint ? opt_tmpPoint : [NaN, NaN];
    for (var i = 0, ii = endss.length; i < ii; ++i) {
        var ends = endss[i];
        minSquaredDistance = assignClosestArrayPoint(flatCoordinates, offset, ends, stride, maxDelta, isRing, x, y, closestPoint, minSquaredDistance, tmpPoint);
        offset = ends[ends.length - 1];
    }
    return minSquaredDistance;
}
//# sourceMappingURL=closest.js.map
;// CONCATENATED MODULE: ./node_modules/ol/geom/flat/deflate.js
/**
 * @module ol/geom/flat/deflate
 */
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {import("../../coordinate.js").Coordinate} coordinate Coordinate.
 * @param {number} stride Stride.
 * @return {number} offset Offset.
 */
function deflateCoordinate(flatCoordinates, offset, coordinate, stride) {
    for (var i = 0, ii = coordinate.length; i < ii; ++i) {
        flatCoordinates[offset++] = coordinate[i];
    }
    return offset;
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<import("../../coordinate.js").Coordinate>} coordinates Coordinates.
 * @param {number} stride Stride.
 * @return {number} offset Offset.
 */
function deflateCoordinates(flatCoordinates, offset, coordinates, stride) {
    for (var i = 0, ii = coordinates.length; i < ii; ++i) {
        var coordinate = coordinates[i];
        for (var j = 0; j < stride; ++j) {
            flatCoordinates[offset++] = coordinate[j];
        }
    }
    return offset;
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<import("../../coordinate.js").Coordinate>>} coordinatess Coordinatess.
 * @param {number} stride Stride.
 * @param {Array<number>} [opt_ends] Ends.
 * @return {Array<number>} Ends.
 */
function deflateCoordinatesArray(flatCoordinates, offset, coordinatess, stride, opt_ends) {
    var ends = opt_ends ? opt_ends : [];
    var i = 0;
    for (var j = 0, jj = coordinatess.length; j < jj; ++j) {
        var end = deflateCoordinates(flatCoordinates, offset, coordinatess[j], stride);
        ends[i++] = end;
        offset = end;
    }
    ends.length = i;
    return ends;
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<Array<import("../../coordinate.js").Coordinate>>>} coordinatesss Coordinatesss.
 * @param {number} stride Stride.
 * @param {Array<Array<number>>} [opt_endss] Endss.
 * @return {Array<Array<number>>} Endss.
 */
function deflateMultiCoordinatesArray(flatCoordinates, offset, coordinatesss, stride, opt_endss) {
    var endss = opt_endss ? opt_endss : [];
    var i = 0;
    for (var j = 0, jj = coordinatesss.length; j < jj; ++j) {
        var ends = deflateCoordinatesArray(flatCoordinates, offset, coordinatesss[j], stride, endss[i]);
        endss[i++] = ends;
        offset = ends[ends.length - 1];
    }
    endss.length = i;
    return endss;
}
//# sourceMappingURL=deflate.js.map
;// CONCATENATED MODULE: ./node_modules/ol/geom/flat/simplify.js
/**
 * @module ol/geom/flat/simplify
 */
// Based on simplify-js https://github.com/mourner/simplify-js
// Copyright (c) 2012, Vladimir Agafonkin
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//    1. Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//
//    2. Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.

/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} squaredTolerance Squared tolerance.
 * @param {boolean} highQuality Highest quality.
 * @param {Array<number>} [opt_simplifiedFlatCoordinates] Simplified flat
 *     coordinates.
 * @return {Array<number>} Simplified line string.
 */
function simplifyLineString(flatCoordinates, offset, end, stride, squaredTolerance, highQuality, opt_simplifiedFlatCoordinates) {
    var simplifiedFlatCoordinates = opt_simplifiedFlatCoordinates !== undefined
        ? opt_simplifiedFlatCoordinates
        : [];
    if (!highQuality) {
        end = radialDistance(flatCoordinates, offset, end, stride, squaredTolerance, simplifiedFlatCoordinates, 0);
        flatCoordinates = simplifiedFlatCoordinates;
        offset = 0;
        stride = 2;
    }
    simplifiedFlatCoordinates.length = douglasPeucker(flatCoordinates, offset, end, stride, squaredTolerance, simplifiedFlatCoordinates, 0);
    return simplifiedFlatCoordinates;
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} squaredTolerance Squared tolerance.
 * @param {Array<number>} simplifiedFlatCoordinates Simplified flat
 *     coordinates.
 * @param {number} simplifiedOffset Simplified offset.
 * @return {number} Simplified offset.
 */
function douglasPeucker(flatCoordinates, offset, end, stride, squaredTolerance, simplifiedFlatCoordinates, simplifiedOffset) {
    var n = (end - offset) / stride;
    if (n < 3) {
        for (; offset < end; offset += stride) {
            simplifiedFlatCoordinates[simplifiedOffset++] = flatCoordinates[offset];
            simplifiedFlatCoordinates[simplifiedOffset++] =
                flatCoordinates[offset + 1];
        }
        return simplifiedOffset;
    }
    /** @type {Array<number>} */
    var markers = new Array(n);
    markers[0] = 1;
    markers[n - 1] = 1;
    /** @type {Array<number>} */
    var stack = [offset, end - stride];
    var index = 0;
    while (stack.length > 0) {
        var last = stack.pop();
        var first = stack.pop();
        var maxSquaredDistance = 0;
        var x1 = flatCoordinates[first];
        var y1 = flatCoordinates[first + 1];
        var x2 = flatCoordinates[last];
        var y2 = flatCoordinates[last + 1];
        for (var i = first + stride; i < last; i += stride) {
            var x = flatCoordinates[i];
            var y = flatCoordinates[i + 1];
            var squaredDistance_1 = (0,math/* squaredSegmentDistance */.rU)(x, y, x1, y1, x2, y2);
            if (squaredDistance_1 > maxSquaredDistance) {
                index = i;
                maxSquaredDistance = squaredDistance_1;
            }
        }
        if (maxSquaredDistance > squaredTolerance) {
            markers[(index - offset) / stride] = 1;
            if (first + stride < index) {
                stack.push(first, index);
            }
            if (index + stride < last) {
                stack.push(index, last);
            }
        }
    }
    for (var i = 0; i < n; ++i) {
        if (markers[i]) {
            simplifiedFlatCoordinates[simplifiedOffset++] =
                flatCoordinates[offset + i * stride];
            simplifiedFlatCoordinates[simplifiedOffset++] =
                flatCoordinates[offset + i * stride + 1];
        }
    }
    return simplifiedOffset;
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<number>} ends Ends.
 * @param {number} stride Stride.
 * @param {number} squaredTolerance Squared tolerance.
 * @param {Array<number>} simplifiedFlatCoordinates Simplified flat
 *     coordinates.
 * @param {number} simplifiedOffset Simplified offset.
 * @param {Array<number>} simplifiedEnds Simplified ends.
 * @return {number} Simplified offset.
 */
function douglasPeuckerArray(flatCoordinates, offset, ends, stride, squaredTolerance, simplifiedFlatCoordinates, simplifiedOffset, simplifiedEnds) {
    for (var i = 0, ii = ends.length; i < ii; ++i) {
        var end = ends[i];
        simplifiedOffset = douglasPeucker(flatCoordinates, offset, end, stride, squaredTolerance, simplifiedFlatCoordinates, simplifiedOffset);
        simplifiedEnds.push(simplifiedOffset);
        offset = end;
    }
    return simplifiedOffset;
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<number>>} endss Endss.
 * @param {number} stride Stride.
 * @param {number} squaredTolerance Squared tolerance.
 * @param {Array<number>} simplifiedFlatCoordinates Simplified flat
 *     coordinates.
 * @param {number} simplifiedOffset Simplified offset.
 * @param {Array<Array<number>>} simplifiedEndss Simplified endss.
 * @return {number} Simplified offset.
 */
function douglasPeuckerMultiArray(flatCoordinates, offset, endss, stride, squaredTolerance, simplifiedFlatCoordinates, simplifiedOffset, simplifiedEndss) {
    for (var i = 0, ii = endss.length; i < ii; ++i) {
        var ends = endss[i];
        var simplifiedEnds = [];
        simplifiedOffset = douglasPeuckerArray(flatCoordinates, offset, ends, stride, squaredTolerance, simplifiedFlatCoordinates, simplifiedOffset, simplifiedEnds);
        simplifiedEndss.push(simplifiedEnds);
        offset = ends[ends.length - 1];
    }
    return simplifiedOffset;
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} squaredTolerance Squared tolerance.
 * @param {Array<number>} simplifiedFlatCoordinates Simplified flat
 *     coordinates.
 * @param {number} simplifiedOffset Simplified offset.
 * @return {number} Simplified offset.
 */
function radialDistance(flatCoordinates, offset, end, stride, squaredTolerance, simplifiedFlatCoordinates, simplifiedOffset) {
    if (end <= offset + stride) {
        // zero or one point, no simplification possible, so copy and return
        for (; offset < end; offset += stride) {
            simplifiedFlatCoordinates[simplifiedOffset++] = flatCoordinates[offset];
            simplifiedFlatCoordinates[simplifiedOffset++] =
                flatCoordinates[offset + 1];
        }
        return simplifiedOffset;
    }
    var x1 = flatCoordinates[offset];
    var y1 = flatCoordinates[offset + 1];
    // copy first point
    simplifiedFlatCoordinates[simplifiedOffset++] = x1;
    simplifiedFlatCoordinates[simplifiedOffset++] = y1;
    var x2 = x1;
    var y2 = y1;
    for (offset += stride; offset < end; offset += stride) {
        x2 = flatCoordinates[offset];
        y2 = flatCoordinates[offset + 1];
        if (squaredDistance(x1, y1, x2, y2) > squaredTolerance) {
            // copy point at offset
            simplifiedFlatCoordinates[simplifiedOffset++] = x2;
            simplifiedFlatCoordinates[simplifiedOffset++] = y2;
            x1 = x2;
            y1 = y2;
        }
    }
    if (x2 != x1 || y2 != y1) {
        // copy last point
        simplifiedFlatCoordinates[simplifiedOffset++] = x2;
        simplifiedFlatCoordinates[simplifiedOffset++] = y2;
    }
    return simplifiedOffset;
}
/**
 * @param {number} value Value.
 * @param {number} tolerance Tolerance.
 * @return {number} Rounded value.
 */
function snap(value, tolerance) {
    return tolerance * Math.round(value / tolerance);
}
/**
 * Simplifies a line string using an algorithm designed by Tim Schaub.
 * Coordinates are snapped to the nearest value in a virtual grid and
 * consecutive duplicate coordinates are discarded.  This effectively preserves
 * topology as the simplification of any subsection of a line string is
 * independent of the rest of the line string.  This means that, for examples,
 * the common edge between two polygons will be simplified to the same line
 * string independently in both polygons.  This implementation uses a single
 * pass over the coordinates and eliminates intermediate collinear points.
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} tolerance Tolerance.
 * @param {Array<number>} simplifiedFlatCoordinates Simplified flat
 *     coordinates.
 * @param {number} simplifiedOffset Simplified offset.
 * @return {number} Simplified offset.
 */
function quantize(flatCoordinates, offset, end, stride, tolerance, simplifiedFlatCoordinates, simplifiedOffset) {
    // do nothing if the line is empty
    if (offset == end) {
        return simplifiedOffset;
    }
    // snap the first coordinate (P1)
    var x1 = snap(flatCoordinates[offset], tolerance);
    var y1 = snap(flatCoordinates[offset + 1], tolerance);
    offset += stride;
    // add the first coordinate to the output
    simplifiedFlatCoordinates[simplifiedOffset++] = x1;
    simplifiedFlatCoordinates[simplifiedOffset++] = y1;
    // find the next coordinate that does not snap to the same value as the first
    // coordinate (P2)
    var x2, y2;
    do {
        x2 = snap(flatCoordinates[offset], tolerance);
        y2 = snap(flatCoordinates[offset + 1], tolerance);
        offset += stride;
        if (offset == end) {
            // all coordinates snap to the same value, the line collapses to a point
            // push the last snapped value anyway to ensure that the output contains
            // at least two points
            // FIXME should we really return at least two points anyway?
            simplifiedFlatCoordinates[simplifiedOffset++] = x2;
            simplifiedFlatCoordinates[simplifiedOffset++] = y2;
            return simplifiedOffset;
        }
    } while (x2 == x1 && y2 == y1);
    while (offset < end) {
        // snap the next coordinate (P3)
        var x3 = snap(flatCoordinates[offset], tolerance);
        var y3 = snap(flatCoordinates[offset + 1], tolerance);
        offset += stride;
        // skip P3 if it is equal to P2
        if (x3 == x2 && y3 == y2) {
            continue;
        }
        // calculate the delta between P1 and P2
        var dx1 = x2 - x1;
        var dy1 = y2 - y1;
        // calculate the delta between P3 and P1
        var dx2 = x3 - x1;
        var dy2 = y3 - y1;
        // if P1, P2, and P3 are colinear and P3 is further from P1 than P2 is from
        // P1 in the same direction then P2 is on the straight line between P1 and
        // P3
        if (dx1 * dy2 == dy1 * dx2 &&
            ((dx1 < 0 && dx2 < dx1) || dx1 == dx2 || (dx1 > 0 && dx2 > dx1)) &&
            ((dy1 < 0 && dy2 < dy1) || dy1 == dy2 || (dy1 > 0 && dy2 > dy1))) {
            // discard P2 and set P2 = P3
            x2 = x3;
            y2 = y3;
            continue;
        }
        // either P1, P2, and P3 are not colinear, or they are colinear but P3 is
        // between P3 and P1 or on the opposite half of the line to P2.  add P2,
        // and continue with P1 = P2 and P2 = P3
        simplifiedFlatCoordinates[simplifiedOffset++] = x2;
        simplifiedFlatCoordinates[simplifiedOffset++] = y2;
        x1 = x2;
        y1 = y2;
        x2 = x3;
        y2 = y3;
    }
    // add the last point (P2)
    simplifiedFlatCoordinates[simplifiedOffset++] = x2;
    simplifiedFlatCoordinates[simplifiedOffset++] = y2;
    return simplifiedOffset;
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<number>} ends Ends.
 * @param {number} stride Stride.
 * @param {number} tolerance Tolerance.
 * @param {Array<number>} simplifiedFlatCoordinates Simplified flat
 *     coordinates.
 * @param {number} simplifiedOffset Simplified offset.
 * @param {Array<number>} simplifiedEnds Simplified ends.
 * @return {number} Simplified offset.
 */
function quantizeArray(flatCoordinates, offset, ends, stride, tolerance, simplifiedFlatCoordinates, simplifiedOffset, simplifiedEnds) {
    for (var i = 0, ii = ends.length; i < ii; ++i) {
        var end = ends[i];
        simplifiedOffset = quantize(flatCoordinates, offset, end, stride, tolerance, simplifiedFlatCoordinates, simplifiedOffset);
        simplifiedEnds.push(simplifiedOffset);
        offset = end;
    }
    return simplifiedOffset;
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<number>>} endss Endss.
 * @param {number} stride Stride.
 * @param {number} tolerance Tolerance.
 * @param {Array<number>} simplifiedFlatCoordinates Simplified flat
 *     coordinates.
 * @param {number} simplifiedOffset Simplified offset.
 * @param {Array<Array<number>>} simplifiedEndss Simplified endss.
 * @return {number} Simplified offset.
 */
function quantizeMultiArray(flatCoordinates, offset, endss, stride, tolerance, simplifiedFlatCoordinates, simplifiedOffset, simplifiedEndss) {
    for (var i = 0, ii = endss.length; i < ii; ++i) {
        var ends = endss[i];
        var simplifiedEnds = [];
        simplifiedOffset = quantizeArray(flatCoordinates, offset, ends, stride, tolerance, simplifiedFlatCoordinates, simplifiedOffset, simplifiedEnds);
        simplifiedEndss.push(simplifiedEnds);
        offset = ends[ends.length - 1];
    }
    return simplifiedOffset;
}
//# sourceMappingURL=simplify.js.map
;// CONCATENATED MODULE: ./node_modules/ol/geom/flat/inflate.js
/**
 * @module ol/geom/flat/inflate
 */
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {Array<import("../../coordinate.js").Coordinate>} [opt_coordinates] Coordinates.
 * @return {Array<import("../../coordinate.js").Coordinate>} Coordinates.
 */
function inflateCoordinates(flatCoordinates, offset, end, stride, opt_coordinates) {
    var coordinates = opt_coordinates !== undefined ? opt_coordinates : [];
    var i = 0;
    for (var j = offset; j < end; j += stride) {
        coordinates[i++] = flatCoordinates.slice(j, j + stride);
    }
    coordinates.length = i;
    return coordinates;
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<number>} ends Ends.
 * @param {number} stride Stride.
 * @param {Array<Array<import("../../coordinate.js").Coordinate>>} [opt_coordinatess] Coordinatess.
 * @return {Array<Array<import("../../coordinate.js").Coordinate>>} Coordinatess.
 */
function inflateCoordinatesArray(flatCoordinates, offset, ends, stride, opt_coordinatess) {
    var coordinatess = opt_coordinatess !== undefined ? opt_coordinatess : [];
    var i = 0;
    for (var j = 0, jj = ends.length; j < jj; ++j) {
        var end = ends[j];
        coordinatess[i++] = inflateCoordinates(flatCoordinates, offset, end, stride, coordinatess[i]);
        offset = end;
    }
    coordinatess.length = i;
    return coordinatess;
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<number>>} endss Endss.
 * @param {number} stride Stride.
 * @param {Array<Array<Array<import("../../coordinate.js").Coordinate>>>} [opt_coordinatesss]
 *     Coordinatesss.
 * @return {Array<Array<Array<import("../../coordinate.js").Coordinate>>>} Coordinatesss.
 */
function inflateMultiCoordinatesArray(flatCoordinates, offset, endss, stride, opt_coordinatesss) {
    var coordinatesss = opt_coordinatesss !== undefined ? opt_coordinatesss : [];
    var i = 0;
    for (var j = 0, jj = endss.length; j < jj; ++j) {
        var ends = endss[j];
        coordinatesss[i++] = inflateCoordinatesArray(flatCoordinates, offset, ends, stride, coordinatesss[i]);
        offset = ends[ends.length - 1];
    }
    coordinatesss.length = i;
    return coordinatesss;
}
//# sourceMappingURL=inflate.js.map
;// CONCATENATED MODULE: ./node_modules/ol/geom/flat/area.js
/**
 * @module ol/geom/flat/area
 */
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @return {number} Area.
 */
function linearRing(flatCoordinates, offset, end, stride) {
    var twiceArea = 0;
    var x1 = flatCoordinates[end - stride];
    var y1 = flatCoordinates[end - stride + 1];
    for (; offset < end; offset += stride) {
        var x2 = flatCoordinates[offset];
        var y2 = flatCoordinates[offset + 1];
        twiceArea += y1 * x2 - x1 * y2;
        x1 = x2;
        y1 = y2;
    }
    return twiceArea / 2;
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<number>} ends Ends.
 * @param {number} stride Stride.
 * @return {number} Area.
 */
function linearRings(flatCoordinates, offset, ends, stride) {
    var area = 0;
    for (var i = 0, ii = ends.length; i < ii; ++i) {
        var end = ends[i];
        area += linearRing(flatCoordinates, offset, end, stride);
        offset = end;
    }
    return area;
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<number>>} endss Endss.
 * @param {number} stride Stride.
 * @return {number} Area.
 */
function linearRingss(flatCoordinates, offset, endss, stride) {
    var area = 0;
    for (var i = 0, ii = endss.length; i < ii; ++i) {
        var ends = endss[i];
        area += linearRings(flatCoordinates, offset, ends, stride);
        offset = ends[ends.length - 1];
    }
    return area;
}
//# sourceMappingURL=area.js.map
;// CONCATENATED MODULE: ./node_modules/ol/geom/LinearRing.js
var LinearRing_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @module ol/geom/LinearRing
 */








/**
 * @classdesc
 * Linear ring geometry. Only used as part of polygon; cannot be rendered
 * on its own.
 *
 * @api
 */
var LinearRing = /** @class */ (function (_super) {
    LinearRing_extends(LinearRing, _super);
    /**
     * @param {Array<import("../coordinate.js").Coordinate>|Array<number>} coordinates Coordinates.
     *     For internal use, flat coordinates in combination with `opt_layout` are also accepted.
     * @param {import("./GeometryLayout.js").default} [opt_layout] Layout.
     */
    function LinearRing(coordinates, opt_layout) {
        var _this = _super.call(this) || this;
        /**
         * @private
         * @type {number}
         */
        _this.maxDelta_ = -1;
        /**
         * @private
         * @type {number}
         */
        _this.maxDeltaRevision_ = -1;
        if (opt_layout !== undefined && !Array.isArray(coordinates[0])) {
            _this.setFlatCoordinates(opt_layout, 
            /** @type {Array<number>} */ (coordinates));
        }
        else {
            _this.setCoordinates(
            /** @type {Array<import("../coordinate.js").Coordinate>} */ (coordinates), opt_layout);
        }
        return _this;
    }
    /**
     * Make a complete copy of the geometry.
     * @return {!LinearRing} Clone.
     * @api
     */
    LinearRing.prototype.clone = function () {
        return new LinearRing(this.flatCoordinates.slice(), this.layout);
    };
    /**
     * @param {number} x X.
     * @param {number} y Y.
     * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
     * @param {number} minSquaredDistance Minimum squared distance.
     * @return {number} Minimum squared distance.
     */
    LinearRing.prototype.closestPointXY = function (x, y, closestPoint, minSquaredDistance) {
        if (minSquaredDistance < (0,ol_extent/* closestSquaredDistanceXY */.qf)(this.getExtent(), x, y)) {
            return minSquaredDistance;
        }
        if (this.maxDeltaRevision_ != this.getRevision()) {
            this.maxDelta_ = Math.sqrt(maxSquaredDelta(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, 0));
            this.maxDeltaRevision_ = this.getRevision();
        }
        return assignClosestPoint(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, this.maxDelta_, true, x, y, closestPoint, minSquaredDistance);
    };
    /**
     * Return the area of the linear ring on projected plane.
     * @return {number} Area (on projected plane).
     * @api
     */
    LinearRing.prototype.getArea = function () {
        return linearRing(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride);
    };
    /**
     * Return the coordinates of the linear ring.
     * @return {Array<import("../coordinate.js").Coordinate>} Coordinates.
     * @api
     */
    LinearRing.prototype.getCoordinates = function () {
        return inflateCoordinates(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride);
    };
    /**
     * @param {number} squaredTolerance Squared tolerance.
     * @return {LinearRing} Simplified LinearRing.
     * @protected
     */
    LinearRing.prototype.getSimplifiedGeometryInternal = function (squaredTolerance) {
        var simplifiedFlatCoordinates = [];
        simplifiedFlatCoordinates.length = douglasPeucker(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, squaredTolerance, simplifiedFlatCoordinates, 0);
        return new LinearRing(simplifiedFlatCoordinates, geom_GeometryLayout.XY);
    };
    /**
     * Get the type of this geometry.
     * @return {import("./Geometry.js").Type} Geometry type.
     * @api
     */
    LinearRing.prototype.getType = function () {
        return 'LinearRing';
    };
    /**
     * Test if the geometry and the passed extent intersect.
     * @param {import("../extent.js").Extent} extent Extent.
     * @return {boolean} `true` if the geometry and the extent intersect.
     * @api
     */
    LinearRing.prototype.intersectsExtent = function (extent) {
        return false;
    };
    /**
     * Set the coordinates of the linear ring.
     * @param {!Array<import("../coordinate.js").Coordinate>} coordinates Coordinates.
     * @param {import("./GeometryLayout.js").default} [opt_layout] Layout.
     * @api
     */
    LinearRing.prototype.setCoordinates = function (coordinates, opt_layout) {
        this.setLayout(opt_layout, coordinates, 1);
        if (!this.flatCoordinates) {
            this.flatCoordinates = [];
        }
        this.flatCoordinates.length = deflateCoordinates(this.flatCoordinates, 0, coordinates, this.stride);
        this.changed();
    };
    return LinearRing;
}(geom_SimpleGeometry));
/* harmony default export */ const geom_LinearRing = (LinearRing);
//# sourceMappingURL=LinearRing.js.map
;// CONCATENATED MODULE: ./node_modules/ol/geom/Point.js
var Point_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @module ol/geom/Point
 */




/**
 * @classdesc
 * Point geometry.
 *
 * @api
 */
var Point = /** @class */ (function (_super) {
    Point_extends(Point, _super);
    /**
     * @param {import("../coordinate.js").Coordinate} coordinates Coordinates.
     * @param {import("./GeometryLayout.js").default} [opt_layout] Layout.
     */
    function Point(coordinates, opt_layout) {
        var _this = _super.call(this) || this;
        _this.setCoordinates(coordinates, opt_layout);
        return _this;
    }
    /**
     * Make a complete copy of the geometry.
     * @return {!Point} Clone.
     * @api
     */
    Point.prototype.clone = function () {
        var point = new Point(this.flatCoordinates.slice(), this.layout);
        point.applyProperties(this);
        return point;
    };
    /**
     * @param {number} x X.
     * @param {number} y Y.
     * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
     * @param {number} minSquaredDistance Minimum squared distance.
     * @return {number} Minimum squared distance.
     */
    Point.prototype.closestPointXY = function (x, y, closestPoint, minSquaredDistance) {
        var flatCoordinates = this.flatCoordinates;
        var squaredDistance = (0,math/* squaredDistance */.bI)(x, y, flatCoordinates[0], flatCoordinates[1]);
        if (squaredDistance < minSquaredDistance) {
            var stride = this.stride;
            for (var i = 0; i < stride; ++i) {
                closestPoint[i] = flatCoordinates[i];
            }
            closestPoint.length = stride;
            return squaredDistance;
        }
        else {
            return minSquaredDistance;
        }
    };
    /**
     * Return the coordinate of the point.
     * @return {import("../coordinate.js").Coordinate} Coordinates.
     * @api
     */
    Point.prototype.getCoordinates = function () {
        return !this.flatCoordinates ? [] : this.flatCoordinates.slice();
    };
    /**
     * @param {import("../extent.js").Extent} extent Extent.
     * @protected
     * @return {import("../extent.js").Extent} extent Extent.
     */
    Point.prototype.computeExtent = function (extent) {
        return (0,ol_extent/* createOrUpdateFromCoordinate */.HK)(this.flatCoordinates, extent);
    };
    /**
     * Get the type of this geometry.
     * @return {import("./Geometry.js").Type} Geometry type.
     * @api
     */
    Point.prototype.getType = function () {
        return 'Point';
    };
    /**
     * Test if the geometry and the passed extent intersect.
     * @param {import("../extent.js").Extent} extent Extent.
     * @return {boolean} `true` if the geometry and the extent intersect.
     * @api
     */
    Point.prototype.intersectsExtent = function (extent) {
        return (0,ol_extent/* containsXY */.jE)(extent, this.flatCoordinates[0], this.flatCoordinates[1]);
    };
    /**
     * @param {!Array<*>} coordinates Coordinates.
     * @param {import("./GeometryLayout.js").default} [opt_layout] Layout.
     * @api
     */
    Point.prototype.setCoordinates = function (coordinates, opt_layout) {
        this.setLayout(opt_layout, coordinates, 0);
        if (!this.flatCoordinates) {
            this.flatCoordinates = [];
        }
        this.flatCoordinates.length = deflateCoordinate(this.flatCoordinates, 0, coordinates, this.stride);
        this.changed();
    };
    return Point;
}(geom_SimpleGeometry));
/* harmony default export */ const geom_Point = (Point);
//# sourceMappingURL=Point.js.map
// EXTERNAL MODULE: ./node_modules/ol/array.js
var array = __webpack_require__(5537);
// EXTERNAL MODULE: ./node_modules/ol/geom/flat/contains.js
var contains = __webpack_require__(9679);
;// CONCATENATED MODULE: ./node_modules/ol/geom/flat/interiorpoint.js
/**
 * @module ol/geom/flat/interiorpoint
 */


/**
 * Calculates a point that is likely to lie in the interior of the linear rings.
 * Inspired by JTS's com.vividsolutions.jts.geom.Geometry#getInteriorPoint.
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<number>} ends Ends.
 * @param {number} stride Stride.
 * @param {Array<number>} flatCenters Flat centers.
 * @param {number} flatCentersOffset Flat center offset.
 * @param {Array<number>} [opt_dest] Destination.
 * @return {Array<number>} Destination point as XYM coordinate, where M is the
 * length of the horizontal intersection that the point belongs to.
 */
function getInteriorPointOfArray(flatCoordinates, offset, ends, stride, flatCenters, flatCentersOffset, opt_dest) {
    var i, ii, x, x1, x2, y1, y2;
    var y = flatCenters[flatCentersOffset + 1];
    /** @type {Array<number>} */
    var intersections = [];
    // Calculate intersections with the horizontal line
    for (var r = 0, rr = ends.length; r < rr; ++r) {
        var end = ends[r];
        x1 = flatCoordinates[end - stride];
        y1 = flatCoordinates[end - stride + 1];
        for (i = offset; i < end; i += stride) {
            x2 = flatCoordinates[i];
            y2 = flatCoordinates[i + 1];
            if ((y <= y1 && y2 <= y) || (y1 <= y && y <= y2)) {
                x = ((y - y1) / (y2 - y1)) * (x2 - x1) + x1;
                intersections.push(x);
            }
            x1 = x2;
            y1 = y2;
        }
    }
    // Find the longest segment of the horizontal line that has its center point
    // inside the linear ring.
    var pointX = NaN;
    var maxSegmentLength = -Infinity;
    intersections.sort(array/* numberSafeCompareFunction */.kK);
    x1 = intersections[0];
    for (i = 1, ii = intersections.length; i < ii; ++i) {
        x2 = intersections[i];
        var segmentLength = Math.abs(x2 - x1);
        if (segmentLength > maxSegmentLength) {
            x = (x1 + x2) / 2;
            if ((0,contains/* linearRingsContainsXY */.wY)(flatCoordinates, offset, ends, stride, x, y)) {
                pointX = x;
                maxSegmentLength = segmentLength;
            }
        }
        x1 = x2;
    }
    if (isNaN(pointX)) {
        // There is no horizontal line that has its center point inside the linear
        // ring.  Use the center of the the linear ring's extent.
        pointX = flatCenters[flatCentersOffset];
    }
    if (opt_dest) {
        opt_dest.push(pointX, y, maxSegmentLength);
        return opt_dest;
    }
    else {
        return [pointX, y, maxSegmentLength];
    }
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<number>>} endss Endss.
 * @param {number} stride Stride.
 * @param {Array<number>} flatCenters Flat centers.
 * @return {Array<number>} Interior points as XYM coordinates, where M is the
 * length of the horizontal intersection that the point belongs to.
 */
function getInteriorPointsOfMultiArray(flatCoordinates, offset, endss, stride, flatCenters) {
    var interiorPoints = [];
    for (var i = 0, ii = endss.length; i < ii; ++i) {
        var ends = endss[i];
        interiorPoints = getInteriorPointOfArray(flatCoordinates, offset, ends, stride, flatCenters, 2 * i, interiorPoints);
        offset = ends[ends.length - 1];
    }
    return interiorPoints;
}
//# sourceMappingURL=interiorpoint.js.map
// EXTERNAL MODULE: ./node_modules/ol/geom/flat/intersectsextent.js + 1 modules
var intersectsextent = __webpack_require__(6091);
;// CONCATENATED MODULE: ./node_modules/ol/geom/flat/reverse.js
/**
 * @module ol/geom/flat/reverse
 */
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 */
function coordinates(flatCoordinates, offset, end, stride) {
    while (offset < end - stride) {
        for (var i = 0; i < stride; ++i) {
            var tmp = flatCoordinates[offset + i];
            flatCoordinates[offset + i] = flatCoordinates[end - stride + i];
            flatCoordinates[end - stride + i] = tmp;
        }
        offset += stride;
        end -= stride;
    }
}
//# sourceMappingURL=reverse.js.map
;// CONCATENATED MODULE: ./node_modules/ol/geom/flat/orient.js
/**
 * @module ol/geom/flat/orient
 */

/**
 * Is the linear ring oriented clockwise in a coordinate system with a bottom-left
 * coordinate origin? For a coordinate system with a top-left coordinate origin,
 * the ring's orientation is clockwise when this function returns false.
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @return {boolean} Is clockwise.
 */
function linearRingIsClockwise(flatCoordinates, offset, end, stride) {
    // https://stackoverflow.com/q/1165647/clockwise-method#1165943
    // https://github.com/OSGeo/gdal/blob/master/gdal/ogr/ogrlinearring.cpp
    var edge = 0;
    var x1 = flatCoordinates[end - stride];
    var y1 = flatCoordinates[end - stride + 1];
    for (; offset < end; offset += stride) {
        var x2 = flatCoordinates[offset];
        var y2 = flatCoordinates[offset + 1];
        edge += (x2 - x1) * (y2 + y1);
        x1 = x2;
        y1 = y2;
    }
    return edge === 0 ? undefined : edge > 0;
}
/**
 * Determines if linear rings are oriented.  By default, left-hand orientation
 * is tested (first ring must be clockwise, remaining rings counter-clockwise).
 * To test for right-hand orientation, use the `opt_right` argument.
 *
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<number>} ends Array of end indexes.
 * @param {number} stride Stride.
 * @param {boolean} [opt_right] Test for right-hand orientation
 *     (counter-clockwise exterior ring and clockwise interior rings).
 * @return {boolean} Rings are correctly oriented.
 */
function linearRingsAreOriented(flatCoordinates, offset, ends, stride, opt_right) {
    var right = opt_right !== undefined ? opt_right : false;
    for (var i = 0, ii = ends.length; i < ii; ++i) {
        var end = ends[i];
        var isClockwise = linearRingIsClockwise(flatCoordinates, offset, end, stride);
        if (i === 0) {
            if ((right && isClockwise) || (!right && !isClockwise)) {
                return false;
            }
        }
        else {
            if ((right && !isClockwise) || (!right && isClockwise)) {
                return false;
            }
        }
        offset = end;
    }
    return true;
}
/**
 * Determines if linear rings are oriented.  By default, left-hand orientation
 * is tested (first ring must be clockwise, remaining rings counter-clockwise).
 * To test for right-hand orientation, use the `opt_right` argument.
 *
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<number>>} endss Array of array of end indexes.
 * @param {number} stride Stride.
 * @param {boolean} [opt_right] Test for right-hand orientation
 *     (counter-clockwise exterior ring and clockwise interior rings).
 * @return {boolean} Rings are correctly oriented.
 */
function linearRingssAreOriented(flatCoordinates, offset, endss, stride, opt_right) {
    for (var i = 0, ii = endss.length; i < ii; ++i) {
        var ends = endss[i];
        if (!linearRingsAreOriented(flatCoordinates, offset, ends, stride, opt_right)) {
            return false;
        }
        if (ends.length) {
            offset = ends[ends.length - 1];
        }
    }
    return true;
}
/**
 * Orient coordinates in a flat array of linear rings.  By default, rings
 * are oriented following the left-hand rule (clockwise for exterior and
 * counter-clockwise for interior rings).  To orient according to the
 * right-hand rule, use the `opt_right` argument.
 *
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<number>} ends Ends.
 * @param {number} stride Stride.
 * @param {boolean} [opt_right] Follow the right-hand rule for orientation.
 * @return {number} End.
 */
function orientLinearRings(flatCoordinates, offset, ends, stride, opt_right) {
    var right = opt_right !== undefined ? opt_right : false;
    for (var i = 0, ii = ends.length; i < ii; ++i) {
        var end = ends[i];
        var isClockwise = linearRingIsClockwise(flatCoordinates, offset, end, stride);
        var reverse = i === 0
            ? (right && isClockwise) || (!right && !isClockwise)
            : (right && !isClockwise) || (!right && isClockwise);
        if (reverse) {
            coordinates(flatCoordinates, offset, end, stride);
        }
        offset = end;
    }
    return offset;
}
/**
 * Orient coordinates in a flat array of linear rings.  By default, rings
 * are oriented following the left-hand rule (clockwise for exterior and
 * counter-clockwise for interior rings).  To orient according to the
 * right-hand rule, use the `opt_right` argument.
 *
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<number>>} endss Array of array of end indexes.
 * @param {number} stride Stride.
 * @param {boolean} [opt_right] Follow the right-hand rule for orientation.
 * @return {number} End.
 */
function orientLinearRingsArray(flatCoordinates, offset, endss, stride, opt_right) {
    for (var i = 0, ii = endss.length; i < ii; ++i) {
        offset = orientLinearRings(flatCoordinates, offset, endss[i], stride, opt_right);
    }
    return offset;
}
/**
 * Return a two-dimensional endss
 * @param {Array<number>} flatCoordinates Flat coordinates
 * @param {Array<number>} ends Linear ring end indexes
 * @return {Array<Array<number>>} Two dimensional endss array that can
 * be used to contruct a MultiPolygon
 */
function inflateEnds(flatCoordinates, ends) {
    var endss = [];
    var offset = 0;
    var prevEndIndex = 0;
    for (var i = 0, ii = ends.length; i < ii; ++i) {
        var end = ends[i];
        // classifies an array of rings into polygons with outer rings and holes
        if (!linearRingIsClockwise(flatCoordinates, offset, end, 2)) {
            endss.push(ends.slice(prevEndIndex, i + 1));
        }
        else {
            if (endss.length === 0) {
                continue;
            }
            endss[endss.length - 1].push(ends[prevEndIndex]);
        }
        prevEndIndex = i + 1;
        offset = end;
    }
    return endss;
}
//# sourceMappingURL=orient.js.map
;// CONCATENATED MODULE: ./node_modules/ol/geom/Polygon.js
var Polygon_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @module ol/geom/Polygon
 */

















/**
 * @classdesc
 * Polygon geometry.
 *
 * @api
 */
var Polygon = /** @class */ (function (_super) {
    Polygon_extends(Polygon, _super);
    /**
     * @param {!Array<Array<import("../coordinate.js").Coordinate>>|!Array<number>} coordinates
     *     Array of linear rings that define the polygon. The first linear ring of the
     *     array defines the outer-boundary or surface of the polygon. Each subsequent
     *     linear ring defines a hole in the surface of the polygon. A linear ring is
     *     an array of vertices' coordinates where the first coordinate and the last are
     *     equivalent. (For internal use, flat coordinates in combination with
     *     `opt_layout` and `opt_ends` are also accepted.)
     * @param {import("./GeometryLayout.js").default} [opt_layout] Layout.
     * @param {Array<number>} [opt_ends] Ends (for internal use with flat coordinates).
     */
    function Polygon(coordinates, opt_layout, opt_ends) {
        var _this = _super.call(this) || this;
        /**
         * @type {Array<number>}
         * @private
         */
        _this.ends_ = [];
        /**
         * @private
         * @type {number}
         */
        _this.flatInteriorPointRevision_ = -1;
        /**
         * @private
         * @type {import("../coordinate.js").Coordinate}
         */
        _this.flatInteriorPoint_ = null;
        /**
         * @private
         * @type {number}
         */
        _this.maxDelta_ = -1;
        /**
         * @private
         * @type {number}
         */
        _this.maxDeltaRevision_ = -1;
        /**
         * @private
         * @type {number}
         */
        _this.orientedRevision_ = -1;
        /**
         * @private
         * @type {Array<number>}
         */
        _this.orientedFlatCoordinates_ = null;
        if (opt_layout !== undefined && opt_ends) {
            _this.setFlatCoordinates(opt_layout, 
            /** @type {Array<number>} */ (coordinates));
            _this.ends_ = opt_ends;
        }
        else {
            _this.setCoordinates(
            /** @type {Array<Array<import("../coordinate.js").Coordinate>>} */ (coordinates), opt_layout);
        }
        return _this;
    }
    /**
     * Append the passed linear ring to this polygon.
     * @param {LinearRing} linearRing Linear ring.
     * @api
     */
    Polygon.prototype.appendLinearRing = function (linearRing) {
        if (!this.flatCoordinates) {
            this.flatCoordinates = linearRing.getFlatCoordinates().slice();
        }
        else {
            (0,array/* extend */.l7)(this.flatCoordinates, linearRing.getFlatCoordinates());
        }
        this.ends_.push(this.flatCoordinates.length);
        this.changed();
    };
    /**
     * Make a complete copy of the geometry.
     * @return {!Polygon} Clone.
     * @api
     */
    Polygon.prototype.clone = function () {
        var polygon = new Polygon(this.flatCoordinates.slice(), this.layout, this.ends_.slice());
        polygon.applyProperties(this);
        return polygon;
    };
    /**
     * @param {number} x X.
     * @param {number} y Y.
     * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
     * @param {number} minSquaredDistance Minimum squared distance.
     * @return {number} Minimum squared distance.
     */
    Polygon.prototype.closestPointXY = function (x, y, closestPoint, minSquaredDistance) {
        if (minSquaredDistance < (0,ol_extent/* closestSquaredDistanceXY */.qf)(this.getExtent(), x, y)) {
            return minSquaredDistance;
        }
        if (this.maxDeltaRevision_ != this.getRevision()) {
            this.maxDelta_ = Math.sqrt(arrayMaxSquaredDelta(this.flatCoordinates, 0, this.ends_, this.stride, 0));
            this.maxDeltaRevision_ = this.getRevision();
        }
        return assignClosestArrayPoint(this.flatCoordinates, 0, this.ends_, this.stride, this.maxDelta_, true, x, y, closestPoint, minSquaredDistance);
    };
    /**
     * @param {number} x X.
     * @param {number} y Y.
     * @return {boolean} Contains (x, y).
     */
    Polygon.prototype.containsXY = function (x, y) {
        return (0,contains/* linearRingsContainsXY */.wY)(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, x, y);
    };
    /**
     * Return the area of the polygon on projected plane.
     * @return {number} Area (on projected plane).
     * @api
     */
    Polygon.prototype.getArea = function () {
        return linearRings(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride);
    };
    /**
     * Get the coordinate array for this geometry.  This array has the structure
     * of a GeoJSON coordinate array for polygons.
     *
     * @param {boolean} [opt_right] Orient coordinates according to the right-hand
     *     rule (counter-clockwise for exterior and clockwise for interior rings).
     *     If `false`, coordinates will be oriented according to the left-hand rule
     *     (clockwise for exterior and counter-clockwise for interior rings).
     *     By default, coordinate orientation will depend on how the geometry was
     *     constructed.
     * @return {Array<Array<import("../coordinate.js").Coordinate>>} Coordinates.
     * @api
     */
    Polygon.prototype.getCoordinates = function (opt_right) {
        var flatCoordinates;
        if (opt_right !== undefined) {
            flatCoordinates = this.getOrientedFlatCoordinates().slice();
            orientLinearRings(flatCoordinates, 0, this.ends_, this.stride, opt_right);
        }
        else {
            flatCoordinates = this.flatCoordinates;
        }
        return inflateCoordinatesArray(flatCoordinates, 0, this.ends_, this.stride);
    };
    /**
     * @return {Array<number>} Ends.
     */
    Polygon.prototype.getEnds = function () {
        return this.ends_;
    };
    /**
     * @return {Array<number>} Interior point.
     */
    Polygon.prototype.getFlatInteriorPoint = function () {
        if (this.flatInteriorPointRevision_ != this.getRevision()) {
            var flatCenter = (0,ol_extent/* getCenter */.qg)(this.getExtent());
            this.flatInteriorPoint_ = getInteriorPointOfArray(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, flatCenter, 0);
            this.flatInteriorPointRevision_ = this.getRevision();
        }
        return this.flatInteriorPoint_;
    };
    /**
     * Return an interior point of the polygon.
     * @return {Point} Interior point as XYM coordinate, where M is the
     * length of the horizontal intersection that the point belongs to.
     * @api
     */
    Polygon.prototype.getInteriorPoint = function () {
        return new geom_Point(this.getFlatInteriorPoint(), geom_GeometryLayout.XYM);
    };
    /**
     * Return the number of rings of the polygon,  this includes the exterior
     * ring and any interior rings.
     *
     * @return {number} Number of rings.
     * @api
     */
    Polygon.prototype.getLinearRingCount = function () {
        return this.ends_.length;
    };
    /**
     * Return the Nth linear ring of the polygon geometry. Return `null` if the
     * given index is out of range.
     * The exterior linear ring is available at index `0` and the interior rings
     * at index `1` and beyond.
     *
     * @param {number} index Index.
     * @return {LinearRing|null} Linear ring.
     * @api
     */
    Polygon.prototype.getLinearRing = function (index) {
        if (index < 0 || this.ends_.length <= index) {
            return null;
        }
        return new geom_LinearRing(this.flatCoordinates.slice(index === 0 ? 0 : this.ends_[index - 1], this.ends_[index]), this.layout);
    };
    /**
     * Return the linear rings of the polygon.
     * @return {Array<LinearRing>} Linear rings.
     * @api
     */
    Polygon.prototype.getLinearRings = function () {
        var layout = this.layout;
        var flatCoordinates = this.flatCoordinates;
        var ends = this.ends_;
        var linearRings = [];
        var offset = 0;
        for (var i = 0, ii = ends.length; i < ii; ++i) {
            var end = ends[i];
            var linearRing = new geom_LinearRing(flatCoordinates.slice(offset, end), layout);
            linearRings.push(linearRing);
            offset = end;
        }
        return linearRings;
    };
    /**
     * @return {Array<number>} Oriented flat coordinates.
     */
    Polygon.prototype.getOrientedFlatCoordinates = function () {
        if (this.orientedRevision_ != this.getRevision()) {
            var flatCoordinates = this.flatCoordinates;
            if (linearRingsAreOriented(flatCoordinates, 0, this.ends_, this.stride)) {
                this.orientedFlatCoordinates_ = flatCoordinates;
            }
            else {
                this.orientedFlatCoordinates_ = flatCoordinates.slice();
                this.orientedFlatCoordinates_.length = orientLinearRings(this.orientedFlatCoordinates_, 0, this.ends_, this.stride);
            }
            this.orientedRevision_ = this.getRevision();
        }
        return this.orientedFlatCoordinates_;
    };
    /**
     * @param {number} squaredTolerance Squared tolerance.
     * @return {Polygon} Simplified Polygon.
     * @protected
     */
    Polygon.prototype.getSimplifiedGeometryInternal = function (squaredTolerance) {
        var simplifiedFlatCoordinates = [];
        var simplifiedEnds = [];
        simplifiedFlatCoordinates.length = quantizeArray(this.flatCoordinates, 0, this.ends_, this.stride, Math.sqrt(squaredTolerance), simplifiedFlatCoordinates, 0, simplifiedEnds);
        return new Polygon(simplifiedFlatCoordinates, geom_GeometryLayout.XY, simplifiedEnds);
    };
    /**
     * Get the type of this geometry.
     * @return {import("./Geometry.js").Type} Geometry type.
     * @api
     */
    Polygon.prototype.getType = function () {
        return 'Polygon';
    };
    /**
     * Test if the geometry and the passed extent intersect.
     * @param {import("../extent.js").Extent} extent Extent.
     * @return {boolean} `true` if the geometry and the extent intersect.
     * @api
     */
    Polygon.prototype.intersectsExtent = function (extent) {
        return (0,intersectsextent/* intersectsLinearRingArray */.ac)(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, extent);
    };
    /**
     * Set the coordinates of the polygon.
     * @param {!Array<Array<import("../coordinate.js").Coordinate>>} coordinates Coordinates.
     * @param {import("./GeometryLayout.js").default} [opt_layout] Layout.
     * @api
     */
    Polygon.prototype.setCoordinates = function (coordinates, opt_layout) {
        this.setLayout(opt_layout, coordinates, 2);
        if (!this.flatCoordinates) {
            this.flatCoordinates = [];
        }
        var ends = deflateCoordinatesArray(this.flatCoordinates, 0, coordinates, this.stride, this.ends_);
        this.flatCoordinates.length = ends.length === 0 ? 0 : ends[ends.length - 1];
        this.changed();
    };
    return Polygon;
}(geom_SimpleGeometry));
/* harmony default export */ const geom_Polygon = (Polygon);
/**
 * Create an approximation of a circle on the surface of a sphere.
 * @param {import("../coordinate.js").Coordinate} center Center (`[lon, lat]` in degrees).
 * @param {number} radius The great-circle distance from the center to
 *     the polygon vertices in meters.
 * @param {number} [opt_n] Optional number of vertices for the resulting
 *     polygon. Default is `32`.
 * @param {number} [opt_sphereRadius] Optional radius for the sphere (defaults to
 *     the Earth's mean radius using the WGS84 ellipsoid).
 * @return {Polygon} The "circular" polygon.
 * @api
 */
function circular(center, radius, opt_n, opt_sphereRadius) {
    var n = opt_n ? opt_n : 32;
    /** @type {Array<number>} */
    var flatCoordinates = [];
    for (var i = 0; i < n; ++i) {
        extend(flatCoordinates, sphereOffset(center, radius, (2 * Math.PI * i) / n, opt_sphereRadius));
    }
    flatCoordinates.push(flatCoordinates[0], flatCoordinates[1]);
    return new Polygon(flatCoordinates, GeometryLayout.XY, [
        flatCoordinates.length,
    ]);
}
/**
 * Create a polygon from an extent. The layout used is `XY`.
 * @param {import("../extent.js").Extent} extent The extent.
 * @return {Polygon} The polygon.
 * @api
 */
function fromExtent(extent) {
    var minX = extent[0];
    var minY = extent[1];
    var maxX = extent[2];
    var maxY = extent[3];
    var flatCoordinates = [
        minX,
        minY,
        minX,
        maxY,
        maxX,
        maxY,
        maxX,
        minY,
        minX,
        minY,
    ];
    return new Polygon(flatCoordinates, geom_GeometryLayout.XY, [
        flatCoordinates.length,
    ]);
}
/**
 * Create a regular polygon from a circle.
 * @param {import("./Circle.js").default} circle Circle geometry.
 * @param {number} [opt_sides] Number of sides of the polygon. Default is 32.
 * @param {number} [opt_angle] Start angle for the first vertex of the polygon in
 *     counter-clockwise radians. 0 means East. Default is 0.
 * @return {Polygon} Polygon geometry.
 * @api
 */
function fromCircle(circle, opt_sides, opt_angle) {
    var sides = opt_sides ? opt_sides : 32;
    var stride = circle.getStride();
    var layout = circle.getLayout();
    var center = circle.getCenter();
    var arrayLength = stride * (sides + 1);
    var flatCoordinates = new Array(arrayLength);
    for (var i = 0; i < arrayLength; i += stride) {
        flatCoordinates[i] = 0;
        flatCoordinates[i + 1] = 0;
        for (var j = 2; j < stride; j++) {
            flatCoordinates[i + j] = center[j];
        }
    }
    var ends = [flatCoordinates.length];
    var polygon = new Polygon(flatCoordinates, layout, ends);
    makeRegular(polygon, center, circle.getRadius(), opt_angle);
    return polygon;
}
/**
 * Modify the coordinates of a polygon to make it a regular polygon.
 * @param {Polygon} polygon Polygon geometry.
 * @param {import("../coordinate.js").Coordinate} center Center of the regular polygon.
 * @param {number} radius Radius of the regular polygon.
 * @param {number} [opt_angle] Start angle for the first vertex of the polygon in
 *     counter-clockwise radians. 0 means East. Default is 0.
 */
function makeRegular(polygon, center, radius, opt_angle) {
    var flatCoordinates = polygon.getFlatCoordinates();
    var stride = polygon.getStride();
    var sides = flatCoordinates.length / stride - 1;
    var startAngle = opt_angle ? opt_angle : 0;
    for (var i = 0; i <= sides; ++i) {
        var offset = i * stride;
        var angle = startAngle + (modulo(i, sides) * 2 * Math.PI) / sides;
        flatCoordinates[offset] = center[0] + radius * Math.cos(angle);
        flatCoordinates[offset + 1] = center[1] + radius * Math.sin(angle);
    }
    polygon.changed();
}
//# sourceMappingURL=Polygon.js.map

/***/ }),

/***/ 9679:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TG": () => (/* binding */ linearRingContainsXY),
/* harmony export */   "uG": () => (/* binding */ linearRingContainsExtent),
/* harmony export */   "wY": () => (/* binding */ linearRingsContainsXY)
/* harmony export */ });
/* unused harmony export linearRingssContainsXY */
/* harmony import */ var _extent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2833);
/**
 * @module ol/geom/flat/contains
 */

/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {import("../../extent.js").Extent} extent Extent.
 * @return {boolean} Contains extent.
 */
function linearRingContainsExtent(flatCoordinates, offset, end, stride, extent) {
    var outside = (0,_extent_js__WEBPACK_IMPORTED_MODULE_0__/* .forEachCorner */ .H6)(extent, 
    /**
     * @param {import("../../coordinate.js").Coordinate} coordinate Coordinate.
     * @return {boolean} Contains (x, y).
     */
    function (coordinate) {
        return !linearRingContainsXY(flatCoordinates, offset, end, stride, coordinate[0], coordinate[1]);
    });
    return !outside;
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} x X.
 * @param {number} y Y.
 * @return {boolean} Contains (x, y).
 */
function linearRingContainsXY(flatCoordinates, offset, end, stride, x, y) {
    // https://geomalgorithms.com/a03-_inclusion.html
    // Copyright 2000 softSurfer, 2012 Dan Sunday
    // This code may be freely used and modified for any purpose
    // providing that this copyright notice is included with it.
    // SoftSurfer makes no warranty for this code, and cannot be held
    // liable for any real or imagined damage resulting from its use.
    // Users of this code must verify correctness for their application.
    var wn = 0;
    var x1 = flatCoordinates[end - stride];
    var y1 = flatCoordinates[end - stride + 1];
    for (; offset < end; offset += stride) {
        var x2 = flatCoordinates[offset];
        var y2 = flatCoordinates[offset + 1];
        if (y1 <= y) {
            if (y2 > y && (x2 - x1) * (y - y1) - (x - x1) * (y2 - y1) > 0) {
                wn++;
            }
        }
        else if (y2 <= y && (x2 - x1) * (y - y1) - (x - x1) * (y2 - y1) < 0) {
            wn--;
        }
        x1 = x2;
        y1 = y2;
    }
    return wn !== 0;
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<number>} ends Ends.
 * @param {number} stride Stride.
 * @param {number} x X.
 * @param {number} y Y.
 * @return {boolean} Contains (x, y).
 */
function linearRingsContainsXY(flatCoordinates, offset, ends, stride, x, y) {
    if (ends.length === 0) {
        return false;
    }
    if (!linearRingContainsXY(flatCoordinates, offset, ends[0], stride, x, y)) {
        return false;
    }
    for (var i = 1, ii = ends.length; i < ii; ++i) {
        if (linearRingContainsXY(flatCoordinates, ends[i - 1], ends[i], stride, x, y)) {
            return false;
        }
    }
    return true;
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<number>>} endss Endss.
 * @param {number} stride Stride.
 * @param {number} x X.
 * @param {number} y Y.
 * @return {boolean} Contains (x, y).
 */
function linearRingssContainsXY(flatCoordinates, offset, endss, stride, x, y) {
    if (endss.length === 0) {
        return false;
    }
    for (var i = 0, ii = endss.length; i < ii; ++i) {
        var ends = endss[i];
        if (linearRingsContainsXY(flatCoordinates, offset, ends, stride, x, y)) {
            return true;
        }
        offset = ends[ends.length - 1];
    }
    return false;
}
//# sourceMappingURL=contains.js.map

/***/ }),

/***/ 6091:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "mV": () => (/* binding */ intersectsLinearRing),
  "ac": () => (/* binding */ intersectsLinearRingArray)
});

// UNUSED EXPORTS: intersectsLineString, intersectsLineStringArray, intersectsLinearRingMultiArray

// EXTERNAL MODULE: ./node_modules/ol/extent.js + 1 modules
var ol_extent = __webpack_require__(2833);
;// CONCATENATED MODULE: ./node_modules/ol/geom/flat/segments.js
/**
 * @module ol/geom/flat/segments
 */
/**
 * This function calls `callback` for each segment of the flat coordinates
 * array. If the callback returns a truthy value the function returns that
 * value immediately. Otherwise the function returns `false`.
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {function(import("../../coordinate.js").Coordinate, import("../../coordinate.js").Coordinate): T} callback Function
 *     called for each segment.
 * @return {T|boolean} Value.
 * @template T
 */
function forEach(flatCoordinates, offset, end, stride, callback) {
    var ret;
    offset += stride;
    for (; offset < end; offset += stride) {
        ret = callback(flatCoordinates.slice(offset - stride, offset), flatCoordinates.slice(offset, offset + stride));
        if (ret) {
            return ret;
        }
    }
    return false;
}
//# sourceMappingURL=segments.js.map
// EXTERNAL MODULE: ./node_modules/ol/geom/flat/contains.js
var contains = __webpack_require__(9679);
;// CONCATENATED MODULE: ./node_modules/ol/geom/flat/intersectsextent.js
/**
 * @module ol/geom/flat/intersectsextent
 */



/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {import("../../extent.js").Extent} extent Extent.
 * @return {boolean} True if the geometry and the extent intersect.
 */
function intersectsLineString(flatCoordinates, offset, end, stride, extent) {
    var coordinatesExtent = (0,ol_extent/* extendFlatCoordinates */.qP)((0,ol_extent/* createEmpty */.lJ)(), flatCoordinates, offset, end, stride);
    if (!(0,ol_extent/* intersects */.kK)(extent, coordinatesExtent)) {
        return false;
    }
    if ((0,ol_extent/* containsExtent */.r4)(extent, coordinatesExtent)) {
        return true;
    }
    if (coordinatesExtent[0] >= extent[0] && coordinatesExtent[2] <= extent[2]) {
        return true;
    }
    if (coordinatesExtent[1] >= extent[1] && coordinatesExtent[3] <= extent[3]) {
        return true;
    }
    return forEach(flatCoordinates, offset, end, stride, 
    /**
     * @param {import("../../coordinate.js").Coordinate} point1 Start point.
     * @param {import("../../coordinate.js").Coordinate} point2 End point.
     * @return {boolean} `true` if the segment and the extent intersect,
     *     `false` otherwise.
     */
    function (point1, point2) {
        return (0,ol_extent/* intersectsSegment */.I7)(extent, point1, point2);
    });
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<number>} ends Ends.
 * @param {number} stride Stride.
 * @param {import("../../extent.js").Extent} extent Extent.
 * @return {boolean} True if the geometry and the extent intersect.
 */
function intersectsLineStringArray(flatCoordinates, offset, ends, stride, extent) {
    for (var i = 0, ii = ends.length; i < ii; ++i) {
        if (intersectsLineString(flatCoordinates, offset, ends[i], stride, extent)) {
            return true;
        }
        offset = ends[i];
    }
    return false;
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {import("../../extent.js").Extent} extent Extent.
 * @return {boolean} True if the geometry and the extent intersect.
 */
function intersectsLinearRing(flatCoordinates, offset, end, stride, extent) {
    if (intersectsLineString(flatCoordinates, offset, end, stride, extent)) {
        return true;
    }
    if ((0,contains/* linearRingContainsXY */.TG)(flatCoordinates, offset, end, stride, extent[0], extent[1])) {
        return true;
    }
    if ((0,contains/* linearRingContainsXY */.TG)(flatCoordinates, offset, end, stride, extent[0], extent[3])) {
        return true;
    }
    if ((0,contains/* linearRingContainsXY */.TG)(flatCoordinates, offset, end, stride, extent[2], extent[1])) {
        return true;
    }
    if ((0,contains/* linearRingContainsXY */.TG)(flatCoordinates, offset, end, stride, extent[2], extent[3])) {
        return true;
    }
    return false;
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<number>} ends Ends.
 * @param {number} stride Stride.
 * @param {import("../../extent.js").Extent} extent Extent.
 * @return {boolean} True if the geometry and the extent intersect.
 */
function intersectsLinearRingArray(flatCoordinates, offset, ends, stride, extent) {
    if (!intersectsLinearRing(flatCoordinates, offset, ends[0], stride, extent)) {
        return false;
    }
    if (ends.length === 1) {
        return true;
    }
    for (var i = 1, ii = ends.length; i < ii; ++i) {
        if ((0,contains/* linearRingContainsExtent */.uG)(flatCoordinates, ends[i - 1], ends[i], stride, extent)) {
            if (!intersectsLineString(flatCoordinates, ends[i - 1], ends[i], stride, extent)) {
                return false;
            }
        }
    }
    return true;
}
/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<number>>} endss Endss.
 * @param {number} stride Stride.
 * @param {import("../../extent.js").Extent} extent Extent.
 * @return {boolean} True if the geometry and the extent intersect.
 */
function intersectsLinearRingMultiArray(flatCoordinates, offset, endss, stride, extent) {
    for (var i = 0, ii = endss.length; i < ii; ++i) {
        var ends = endss[i];
        if (intersectsLinearRingArray(flatCoordinates, offset, ends, stride, extent)) {
            return true;
        }
        offset = ends[ends.length - 1];
    }
    return false;
}
//# sourceMappingURL=intersectsextent.js.map

/***/ }),

/***/ 177:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G$": () => (/* binding */ WEBKIT),
/* harmony export */   "Id": () => (/* binding */ WORKER_OFFSCREEN_CANVAS),
/* harmony export */   "MP": () => (/* binding */ DEVICE_PIXEL_RATIO),
/* harmony export */   "Tp": () => (/* binding */ IMAGE_DECODE),
/* harmony export */   "V": () => (/* binding */ FIREFOX),
/* harmony export */   "bM": () => (/* binding */ PASSIVE_EVENT_LISTENERS),
/* harmony export */   "tK": () => (/* binding */ MAC)
/* harmony export */ });
/* unused harmony exports SAFARI, SAFARI_BUG_237906 */
/**
 * @module ol/has
 */
var ua = typeof navigator !== 'undefined' && typeof navigator.userAgent !== 'undefined'
    ? navigator.userAgent.toLowerCase()
    : '';
/**
 * User agent string says we are dealing with Firefox as browser.
 * @type {boolean}
 */
var FIREFOX = ua.indexOf('firefox') !== -1;
/**
 * User agent string says we are dealing with Safari as browser.
 * @type {boolean}
 */
var SAFARI = ua.indexOf('safari') !== -1 && ua.indexOf('chrom') == -1;
/**
 * https://bugs.webkit.org/show_bug.cgi?id=237906
 * @type {boolean}
 */
var SAFARI_BUG_237906 = SAFARI &&
    !!(ua.indexOf('version/15.4') >= 0 ||
        ua.match(/cpu (os|iphone os) 15_4 like mac os x/));
/**
 * User agent string says we are dealing with a WebKit engine.
 * @type {boolean}
 */
var WEBKIT = ua.indexOf('webkit') !== -1 && ua.indexOf('edge') == -1;
/**
 * User agent string says we are dealing with a Mac as platform.
 * @type {boolean}
 */
var MAC = ua.indexOf('macintosh') !== -1;
/**
 * The ratio between physical pixels and device-independent pixels
 * (dips) on the device (`window.devicePixelRatio`).
 * @const
 * @type {number}
 * @api
 */
var DEVICE_PIXEL_RATIO = typeof devicePixelRatio !== 'undefined' ? devicePixelRatio : 1;
/**
 * The execution context is a worker with OffscreenCanvas available.
 * @const
 * @type {boolean}
 */
var WORKER_OFFSCREEN_CANVAS = typeof WorkerGlobalScope !== 'undefined' &&
    typeof OffscreenCanvas !== 'undefined' &&
    self instanceof WorkerGlobalScope; //eslint-disable-line
/**
 * Image.prototype.decode() is supported.
 * @type {boolean}
 */
var IMAGE_DECODE = typeof Image !== 'undefined' && Image.prototype.decode;
/**
 * @type {boolean}
 */
var PASSIVE_EVENT_LISTENERS = (function () {
    var passive = false;
    try {
        var options = Object.defineProperty({}, 'passive', {
            get: function () {
                passive = true;
            },
        });
        window.addEventListener('_', null, options);
        window.removeEventListener('_', null, options);
    }
    catch (error) {
        // passive not supported
    }
    return passive;
})();
//# sourceMappingURL=has.js.map

/***/ }),

/***/ 947:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Object_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2971);
/* harmony import */ var _Property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1912);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4187);
/* harmony import */ var _asserts_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9515);
/* harmony import */ var _obj_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9374);
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3983);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @module ol/layer/Base
 */






/**
 * A css color, or a function called with a view resolution returning a css color.
 *
 * @typedef {string|function(number):string} BackgroundColor
 * @api
 */
/**
 * @typedef {import("../ObjectEventType").Types|'change:extent'|'change:maxResolution'|'change:maxZoom'|
 *    'change:minResolution'|'change:minZoom'|'change:opacity'|'change:visible'|'change:zIndex'} BaseLayerObjectEventTypes
 */
/***
 * @template Return
 * @typedef {import("../Observable").OnSignature<import("../Observable").EventTypes, import("../events/Event.js").default, Return> &
 *   import("../Observable").OnSignature<BaseLayerObjectEventTypes, import("../Object").ObjectEvent, Return> &
 *   import("../Observable").CombinedOnSignature<import("../Observable").EventTypes|BaseLayerObjectEventTypes, Return>} BaseLayerOnSignature
 */
/**
 * @typedef {Object} Options
 * @property {string} [className='ol-layer'] A CSS class name to set to the layer element.
 * @property {number} [opacity=1] Opacity (0, 1).
 * @property {boolean} [visible=true] Visibility.
 * @property {import("../extent.js").Extent} [extent] The bounding extent for layer rendering.  The layer will not be
 * rendered outside of this extent.
 * @property {number} [zIndex] The z-index for layer rendering.  At rendering time, the layers
 * will be ordered, first by Z-index and then by position. When `undefined`, a `zIndex` of 0 is assumed
 * for layers that are added to the map's `layers` collection, or `Infinity` when the layer's `setMap()`
 * method was used.
 * @property {number} [minResolution] The minimum resolution (inclusive) at which this layer will be
 * visible.
 * @property {number} [maxResolution] The maximum resolution (exclusive) below which this layer will
 * be visible.
 * @property {number} [minZoom] The minimum view zoom level (exclusive) above which this layer will be
 * visible.
 * @property {number} [maxZoom] The maximum view zoom level (inclusive) at which this layer will
 * be visible.
 * @property {BackgroundColor} [background] Background color for the layer. If not specified, no background
 * will be rendered.
 * @property {Object<string, *>} [properties] Arbitrary observable properties. Can be accessed with `#get()` and `#set()`.
 */
/**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * Note that with {@link module:ol/layer/Base~BaseLayer} and all its subclasses, any property set in
 * the options is set as a {@link module:ol/Object~BaseObject} property on the layer object, so
 * is observable, and has get/set accessors.
 *
 * @api
 */
var BaseLayer = /** @class */ (function (_super) {
    __extends(BaseLayer, _super);
    /**
     * @param {Options} options Layer options.
     */
    function BaseLayer(options) {
        var _this = _super.call(this) || this;
        /***
         * @type {BaseLayerOnSignature<import("../events").EventsKey>}
         */
        _this.on;
        /***
         * @type {BaseLayerOnSignature<import("../events").EventsKey>}
         */
        _this.once;
        /***
         * @type {BaseLayerOnSignature<void>}
         */
        _this.un;
        /**
         * @type {BackgroundColor|false}
         * @private
         */
        _this.background_ = options.background;
        /**
         * @type {Object<string, *>}
         */
        var properties = (0,_obj_js__WEBPACK_IMPORTED_MODULE_0__/* .assign */ .f0)({}, options);
        if (typeof options.properties === 'object') {
            delete properties.properties;
            (0,_obj_js__WEBPACK_IMPORTED_MODULE_0__/* .assign */ .f0)(properties, options.properties);
        }
        properties[_Property_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].OPACITY */ .Z.OPACITY] =
            options.opacity !== undefined ? options.opacity : 1;
        (0,_asserts_js__WEBPACK_IMPORTED_MODULE_2__/* .assert */ .h)(typeof properties[_Property_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].OPACITY */ .Z.OPACITY] === 'number', 64); // Layer opacity must be a number
        properties[_Property_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].VISIBLE */ .Z.VISIBLE] =
            options.visible !== undefined ? options.visible : true;
        properties[_Property_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Z_INDEX */ .Z.Z_INDEX] = options.zIndex;
        properties[_Property_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].MAX_RESOLUTION */ .Z.MAX_RESOLUTION] =
            options.maxResolution !== undefined ? options.maxResolution : Infinity;
        properties[_Property_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].MIN_RESOLUTION */ .Z.MIN_RESOLUTION] =
            options.minResolution !== undefined ? options.minResolution : 0;
        properties[_Property_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].MIN_ZOOM */ .Z.MIN_ZOOM] =
            options.minZoom !== undefined ? options.minZoom : -Infinity;
        properties[_Property_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].MAX_ZOOM */ .Z.MAX_ZOOM] =
            options.maxZoom !== undefined ? options.maxZoom : Infinity;
        /**
         * @type {string}
         * @private
         */
        _this.className_ =
            properties.className !== undefined ? properties.className : 'ol-layer';
        delete properties.className;
        _this.setProperties(properties);
        /**
         * @type {import("./Layer.js").State}
         * @private
         */
        _this.state_ = null;
        return _this;
    }
    /**
     * Get the background for this layer.
     * @return {BackgroundColor|false} Layer background.
     */
    BaseLayer.prototype.getBackground = function () {
        return this.background_;
    };
    /**
     * @return {string} CSS class name.
     */
    BaseLayer.prototype.getClassName = function () {
        return this.className_;
    };
    /**
     * This method is not meant to be called by layers or layer renderers because the state
     * is incorrect if the layer is included in a layer group.
     *
     * @param {boolean} [opt_managed] Layer is managed.
     * @return {import("./Layer.js").State} Layer state.
     */
    BaseLayer.prototype.getLayerState = function (opt_managed) {
        /** @type {import("./Layer.js").State} */
        var state = this.state_ ||
            /** @type {?} */ ({
                layer: this,
                managed: opt_managed === undefined ? true : opt_managed,
            });
        var zIndex = this.getZIndex();
        state.opacity = (0,_math_js__WEBPACK_IMPORTED_MODULE_3__/* .clamp */ .uZ)(Math.round(this.getOpacity() * 100) / 100, 0, 1);
        state.visible = this.getVisible();
        state.extent = this.getExtent();
        state.zIndex = zIndex === undefined && !state.managed ? Infinity : zIndex;
        state.maxResolution = this.getMaxResolution();
        state.minResolution = Math.max(this.getMinResolution(), 0);
        state.minZoom = this.getMinZoom();
        state.maxZoom = this.getMaxZoom();
        this.state_ = state;
        return state;
    };
    /**
     * @abstract
     * @param {Array<import("./Layer.js").default>} [opt_array] Array of layers (to be
     *     modified in place).
     * @return {Array<import("./Layer.js").default>} Array of layers.
     */
    BaseLayer.prototype.getLayersArray = function (opt_array) {
        return (0,_util_js__WEBPACK_IMPORTED_MODULE_4__/* .abstract */ .O3)();
    };
    /**
     * @abstract
     * @param {Array<import("./Layer.js").State>} [opt_states] Optional list of layer
     *     states (to be modified in place).
     * @return {Array<import("./Layer.js").State>} List of layer states.
     */
    BaseLayer.prototype.getLayerStatesArray = function (opt_states) {
        return (0,_util_js__WEBPACK_IMPORTED_MODULE_4__/* .abstract */ .O3)();
    };
    /**
     * Return the {@link module:ol/extent~Extent extent} of the layer or `undefined` if it
     * will be visible regardless of extent.
     * @return {import("../extent.js").Extent|undefined} The layer extent.
     * @observable
     * @api
     */
    BaseLayer.prototype.getExtent = function () {
        return /** @type {import("../extent.js").Extent|undefined} */ (this.get(_Property_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].EXTENT */ .Z.EXTENT));
    };
    /**
     * Return the maximum resolution of the layer.
     * @return {number} The maximum resolution of the layer.
     * @observable
     * @api
     */
    BaseLayer.prototype.getMaxResolution = function () {
        return /** @type {number} */ (this.get(_Property_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].MAX_RESOLUTION */ .Z.MAX_RESOLUTION));
    };
    /**
     * Return the minimum resolution of the layer.
     * @return {number} The minimum resolution of the layer.
     * @observable
     * @api
     */
    BaseLayer.prototype.getMinResolution = function () {
        return /** @type {number} */ (this.get(_Property_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].MIN_RESOLUTION */ .Z.MIN_RESOLUTION));
    };
    /**
     * Return the minimum zoom level of the layer.
     * @return {number} The minimum zoom level of the layer.
     * @observable
     * @api
     */
    BaseLayer.prototype.getMinZoom = function () {
        return /** @type {number} */ (this.get(_Property_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].MIN_ZOOM */ .Z.MIN_ZOOM));
    };
    /**
     * Return the maximum zoom level of the layer.
     * @return {number} The maximum zoom level of the layer.
     * @observable
     * @api
     */
    BaseLayer.prototype.getMaxZoom = function () {
        return /** @type {number} */ (this.get(_Property_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].MAX_ZOOM */ .Z.MAX_ZOOM));
    };
    /**
     * Return the opacity of the layer (between 0 and 1).
     * @return {number} The opacity of the layer.
     * @observable
     * @api
     */
    BaseLayer.prototype.getOpacity = function () {
        return /** @type {number} */ (this.get(_Property_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].OPACITY */ .Z.OPACITY));
    };
    /**
     * @abstract
     * @return {import("../source/Source.js").State} Source state.
     */
    BaseLayer.prototype.getSourceState = function () {
        return (0,_util_js__WEBPACK_IMPORTED_MODULE_4__/* .abstract */ .O3)();
    };
    /**
     * Return the visibility of the layer (`true` or `false`).
     * @return {boolean} The visibility of the layer.
     * @observable
     * @api
     */
    BaseLayer.prototype.getVisible = function () {
        return /** @type {boolean} */ (this.get(_Property_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].VISIBLE */ .Z.VISIBLE));
    };
    /**
     * Return the Z-index of the layer, which is used to order layers before
     * rendering. The default Z-index is 0.
     * @return {number} The Z-index of the layer.
     * @observable
     * @api
     */
    BaseLayer.prototype.getZIndex = function () {
        return /** @type {number} */ (this.get(_Property_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Z_INDEX */ .Z.Z_INDEX));
    };
    /**
     * Sets the background color.
     * @param {BackgroundColor} [opt_background] Background color.
     */
    BaseLayer.prototype.setBackground = function (opt_background) {
        this.background_ = opt_background;
        this.changed();
    };
    /**
     * Set the extent at which the layer is visible.  If `undefined`, the layer
     * will be visible at all extents.
     * @param {import("../extent.js").Extent|undefined} extent The extent of the layer.
     * @observable
     * @api
     */
    BaseLayer.prototype.setExtent = function (extent) {
        this.set(_Property_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].EXTENT */ .Z.EXTENT, extent);
    };
    /**
     * Set the maximum resolution at which the layer is visible.
     * @param {number} maxResolution The maximum resolution of the layer.
     * @observable
     * @api
     */
    BaseLayer.prototype.setMaxResolution = function (maxResolution) {
        this.set(_Property_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].MAX_RESOLUTION */ .Z.MAX_RESOLUTION, maxResolution);
    };
    /**
     * Set the minimum resolution at which the layer is visible.
     * @param {number} minResolution The minimum resolution of the layer.
     * @observable
     * @api
     */
    BaseLayer.prototype.setMinResolution = function (minResolution) {
        this.set(_Property_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].MIN_RESOLUTION */ .Z.MIN_RESOLUTION, minResolution);
    };
    /**
     * Set the maximum zoom (exclusive) at which the layer is visible.
     * Note that the zoom levels for layer visibility are based on the
     * view zoom level, which may be different from a tile source zoom level.
     * @param {number} maxZoom The maximum zoom of the layer.
     * @observable
     * @api
     */
    BaseLayer.prototype.setMaxZoom = function (maxZoom) {
        this.set(_Property_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].MAX_ZOOM */ .Z.MAX_ZOOM, maxZoom);
    };
    /**
     * Set the minimum zoom (inclusive) at which the layer is visible.
     * Note that the zoom levels for layer visibility are based on the
     * view zoom level, which may be different from a tile source zoom level.
     * @param {number} minZoom The minimum zoom of the layer.
     * @observable
     * @api
     */
    BaseLayer.prototype.setMinZoom = function (minZoom) {
        this.set(_Property_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].MIN_ZOOM */ .Z.MIN_ZOOM, minZoom);
    };
    /**
     * Set the opacity of the layer, allowed values range from 0 to 1.
     * @param {number} opacity The opacity of the layer.
     * @observable
     * @api
     */
    BaseLayer.prototype.setOpacity = function (opacity) {
        (0,_asserts_js__WEBPACK_IMPORTED_MODULE_2__/* .assert */ .h)(typeof opacity === 'number', 64); // Layer opacity must be a number
        this.set(_Property_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].OPACITY */ .Z.OPACITY, opacity);
    };
    /**
     * Set the visibility of the layer (`true` or `false`).
     * @param {boolean} visible The visibility of the layer.
     * @observable
     * @api
     */
    BaseLayer.prototype.setVisible = function (visible) {
        this.set(_Property_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].VISIBLE */ .Z.VISIBLE, visible);
    };
    /**
     * Set Z-index of the layer, which is used to order layers before rendering.
     * The default Z-index is 0.
     * @param {number} zindex The z-index of the layer.
     * @observable
     * @api
     */
    BaseLayer.prototype.setZIndex = function (zindex) {
        this.set(_Property_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Z_INDEX */ .Z.Z_INDEX, zindex);
    };
    /**
     * Clean up.
     */
    BaseLayer.prototype.disposeInternal = function () {
        if (this.state_) {
            this.state_.layer = null;
            this.state_ = null;
        }
        _super.prototype.disposeInternal.call(this);
    };
    return BaseLayer;
}(_Object_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseLayer);
//# sourceMappingURL=Base.js.map

/***/ }),

/***/ 1295:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "j": () => (/* binding */ inView)
/* harmony export */ });
/* harmony import */ var _Base_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(947);
/* harmony import */ var _events_EventType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5487);
/* harmony import */ var _Property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1912);
/* harmony import */ var _render_EventType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2329);
/* harmony import */ var _asserts_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9515);
/* harmony import */ var _obj_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9374);
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5818);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @module ol/layer/Layer
 */







/**
 * @typedef {function(import("../PluggableMap.js").FrameState):HTMLElement} RenderFunction
 */
/***
 * @template Return
 * @typedef {import("../Observable").OnSignature<import("../Observable").EventTypes, import("../events/Event.js").default, Return> &
 *   import("../Observable").OnSignature<import("./Base").BaseLayerObjectEventTypes|
 *     'change:source', import("../Object").ObjectEvent, Return> &
 *   import("../Observable").OnSignature<import("../render/EventType").LayerRenderEventTypes, import("../render/Event").default, Return> &
 *   import("../Observable").CombinedOnSignature<import("../Observable").EventTypes|import("./Base").BaseLayerObjectEventTypes|'change:source'|
 *     import("../render/EventType").LayerRenderEventTypes, Return>} LayerOnSignature
 */
/**
 * @template {import("../source/Source.js").default} [SourceType=import("../source/Source.js").default]
 * @typedef {Object} Options
 * @property {string} [className='ol-layer'] A CSS class name to set to the layer element.
 * @property {number} [opacity=1] Opacity (0, 1).
 * @property {boolean} [visible=true] Visibility.
 * @property {import("../extent.js").Extent} [extent] The bounding extent for layer rendering.  The layer will not be
 * rendered outside of this extent.
 * @property {number} [zIndex] The z-index for layer rendering.  At rendering time, the layers
 * will be ordered, first by Z-index and then by position. When `undefined`, a `zIndex` of 0 is assumed
 * for layers that are added to the map's `layers` collection, or `Infinity` when the layer's `setMap()`
 * method was used.
 * @property {number} [minResolution] The minimum resolution (inclusive) at which this layer will be
 * visible.
 * @property {number} [maxResolution] The maximum resolution (exclusive) below which this layer will
 * be visible.
 * @property {number} [minZoom] The minimum view zoom level (exclusive) above which this layer will be
 * visible.
 * @property {number} [maxZoom] The maximum view zoom level (inclusive) at which this layer will
 * be visible.
 * @property {SourceType} [source] Source for this layer.  If not provided to the constructor,
 * the source can be set by calling {@link module:ol/layer/Layer~Layer#setSource layer.setSource(source)} after
 * construction.
 * @property {import("../PluggableMap.js").default|null} [map] Map.
 * @property {RenderFunction} [render] Render function. Takes the frame state as input and is expected to return an
 * HTML element. Will overwrite the default rendering for the layer.
 * @property {Object<string, *>} [properties] Arbitrary observable properties. Can be accessed with `#get()` and `#set()`.
 */
/**
 * @typedef {Object} State
 * @property {import("./Layer.js").default} layer Layer.
 * @property {number} opacity Opacity, the value is rounded to two digits to appear after the decimal point.
 * @property {boolean} visible Visible.
 * @property {boolean} managed Managed.
 * @property {import("../extent.js").Extent} [extent] Extent.
 * @property {number} zIndex ZIndex.
 * @property {number} maxResolution Maximum resolution.
 * @property {number} minResolution Minimum resolution.
 * @property {number} minZoom Minimum zoom.
 * @property {number} maxZoom Maximum zoom.
 */
/**
 * @classdesc
 * Base class from which all layer types are derived. This should only be instantiated
 * in the case where a custom layer is added to the map with a custom `render` function.
 * Such a function can be specified in the `options` object, and is expected to return an HTML element.
 *
 * A visual representation of raster or vector map data.
 * Layers group together those properties that pertain to how the data is to be
 * displayed, irrespective of the source of that data.
 *
 * Layers are usually added to a map with {@link import("../PluggableMap.js").default#addLayer map.addLayer()}. Components
 * like {@link module:ol/interaction/Draw~Draw} use unmanaged layers
 * internally. These unmanaged layers are associated with the map using
 * {@link module:ol/layer/Layer~Layer#setMap} instead.
 *
 * A generic `change` event is fired when the state of the source changes.
 *
 * Please note that for performance reasons several layers might get rendered to
 * the same HTML element, which will cause {@link import("../PluggableMap.js").default#forEachLayerAtPixel map.forEachLayerAtPixel()} to
 * give false positives. To avoid this, apply different `className` properties to the
 * layers at creation time.
 *
 * @fires import("../render/Event.js").RenderEvent#prerender
 * @fires import("../render/Event.js").RenderEvent#postrender
 *
 * @template {import("../source/Source.js").default} [SourceType=import("../source/Source.js").default]
 * @template {import("../renderer/Layer.js").default} [RendererType=import("../renderer/Layer.js").default]
 * @api
 */
var Layer = /** @class */ (function (_super) {
    __extends(Layer, _super);
    /**
     * @param {Options<SourceType>} options Layer options.
     */
    function Layer(options) {
        var _this = this;
        var baseOptions = (0,_obj_js__WEBPACK_IMPORTED_MODULE_0__/* .assign */ .f0)({}, options);
        delete baseOptions.source;
        _this = _super.call(this, baseOptions) || this;
        /***
         * @type {LayerOnSignature<import("../events").EventsKey>}
         */
        _this.on;
        /***
         * @type {LayerOnSignature<import("../events").EventsKey>}
         */
        _this.once;
        /***
         * @type {LayerOnSignature<void>}
         */
        _this.un;
        /**
         * @private
         * @type {?import("../events.js").EventsKey}
         */
        _this.mapPrecomposeKey_ = null;
        /**
         * @private
         * @type {?import("../events.js").EventsKey}
         */
        _this.mapRenderKey_ = null;
        /**
         * @private
         * @type {?import("../events.js").EventsKey}
         */
        _this.sourceChangeKey_ = null;
        /**
         * @private
         * @type {RendererType}
         */
        _this.renderer_ = null;
        /**
         * @protected
         * @type {boolean}
         */
        _this.rendered = false;
        // Overwrite default render method with a custom one
        if (options.render) {
            _this.render = options.render;
        }
        if (options.map) {
            _this.setMap(options.map);
        }
        _this.addChangeListener(_Property_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].SOURCE */ .Z.SOURCE, _this.handleSourcePropertyChange_);
        var source = options.source
            ? /** @type {SourceType} */ (options.source)
            : null;
        _this.setSource(source);
        return _this;
    }
    /**
     * @param {Array<import("./Layer.js").default>} [opt_array] Array of layers (to be modified in place).
     * @return {Array<import("./Layer.js").default>} Array of layers.
     */
    Layer.prototype.getLayersArray = function (opt_array) {
        var array = opt_array ? opt_array : [];
        array.push(this);
        return array;
    };
    /**
     * @param {Array<import("./Layer.js").State>} [opt_states] Optional list of layer states (to be modified in place).
     * @return {Array<import("./Layer.js").State>} List of layer states.
     */
    Layer.prototype.getLayerStatesArray = function (opt_states) {
        var states = opt_states ? opt_states : [];
        states.push(this.getLayerState());
        return states;
    };
    /**
     * Get the layer source.
     * @return {SourceType|null} The layer source (or `null` if not yet set).
     * @observable
     * @api
     */
    Layer.prototype.getSource = function () {
        return /** @type {SourceType} */ (this.get(_Property_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].SOURCE */ .Z.SOURCE)) || null;
    };
    /**
     * @return {SourceType|null} The source being rendered.
     */
    Layer.prototype.getRenderSource = function () {
        return this.getSource();
    };
    /**
     * @return {import("../source/Source.js").State} Source state.
     */
    Layer.prototype.getSourceState = function () {
        var source = this.getSource();
        return !source ? 'undefined' : source.getState();
    };
    /**
     * @private
     */
    Layer.prototype.handleSourceChange_ = function () {
        this.changed();
    };
    /**
     * @private
     */
    Layer.prototype.handleSourcePropertyChange_ = function () {
        if (this.sourceChangeKey_) {
            (0,_events_js__WEBPACK_IMPORTED_MODULE_2__/* .unlistenByKey */ .bN)(this.sourceChangeKey_);
            this.sourceChangeKey_ = null;
        }
        var source = this.getSource();
        if (source) {
            this.sourceChangeKey_ = (0,_events_js__WEBPACK_IMPORTED_MODULE_2__/* .listen */ .oL)(source, _events_EventType_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"].CHANGE */ .Z.CHANGE, this.handleSourceChange_, this);
        }
        this.changed();
    };
    /**
     * @param {import("../pixel").Pixel} pixel Pixel.
     * @return {Promise<Array<import("../Feature").default>>} Promise that resolves with
     * an array of features.
     */
    Layer.prototype.getFeatures = function (pixel) {
        if (!this.renderer_) {
            return new Promise(function (resolve) { return resolve([]); });
        }
        return this.renderer_.getFeatures(pixel);
    };
    /**
     * @param {import("../pixel").Pixel} pixel Pixel.
     * @return {Uint8ClampedArray|Uint8Array|Float32Array|DataView|null} Pixel data.
     */
    Layer.prototype.getData = function (pixel) {
        if (!this.renderer_ || !this.rendered) {
            return null;
        }
        return this.renderer_.getData(pixel);
    };
    /**
     * In charge to manage the rendering of the layer. One layer type is
     * bounded with one layer renderer.
     * @param {?import("../PluggableMap.js").FrameState} frameState Frame state.
     * @param {HTMLElement} target Target which the renderer may (but need not) use
     * for rendering its content.
     * @return {HTMLElement} The rendered element.
     */
    Layer.prototype.render = function (frameState, target) {
        var layerRenderer = this.getRenderer();
        if (layerRenderer.prepareFrame(frameState)) {
            this.rendered = true;
            return layerRenderer.renderFrame(frameState, target);
        }
    };
    /**
     * Called when a layer is not visible during a map render.
     */
    Layer.prototype.unrender = function () {
        this.rendered = false;
    };
    /**
     * For use inside the library only.
     * @param {import("../PluggableMap.js").default|null} map Map.
     */
    Layer.prototype.setMapInternal = function (map) {
        if (!map) {
            this.unrender();
        }
        this.set(_Property_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].MAP */ .Z.MAP, map);
    };
    /**
     * For use inside the library only.
     * @return {import("../PluggableMap.js").default|null} Map.
     */
    Layer.prototype.getMapInternal = function () {
        return this.get(_Property_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].MAP */ .Z.MAP);
    };
    /**
     * Sets the layer to be rendered on top of other layers on a map. The map will
     * not manage this layer in its layers collection, and the callback in
     * {@link module:ol/Map~Map#forEachLayerAtPixel} will receive `null` as layer. This
     * is useful for temporary layers. To remove an unmanaged layer from the map,
     * use `#setMap(null)`.
     *
     * To add the layer to a map and have it managed by the map, use
     * {@link module:ol/Map~Map#addLayer} instead.
     * @param {import("../PluggableMap.js").default|null} map Map.
     * @api
     */
    Layer.prototype.setMap = function (map) {
        if (this.mapPrecomposeKey_) {
            (0,_events_js__WEBPACK_IMPORTED_MODULE_2__/* .unlistenByKey */ .bN)(this.mapPrecomposeKey_);
            this.mapPrecomposeKey_ = null;
        }
        if (!map) {
            this.changed();
        }
        if (this.mapRenderKey_) {
            (0,_events_js__WEBPACK_IMPORTED_MODULE_2__/* .unlistenByKey */ .bN)(this.mapRenderKey_);
            this.mapRenderKey_ = null;
        }
        if (map) {
            this.mapPrecomposeKey_ = (0,_events_js__WEBPACK_IMPORTED_MODULE_2__/* .listen */ .oL)(map, _render_EventType_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"].PRECOMPOSE */ .Z.PRECOMPOSE, function (evt) {
                var renderEvent = 
                /** @type {import("../render/Event.js").default} */ (evt);
                var layerStatesArray = renderEvent.frameState.layerStatesArray;
                var layerState = this.getLayerState(false);
                // A layer can only be added to the map once. Use either `layer.setMap()` or `map.addLayer()`, not both.
                (0,_asserts_js__WEBPACK_IMPORTED_MODULE_5__/* .assert */ .h)(!layerStatesArray.some(function (arrayLayerState) {
                    return arrayLayerState.layer === layerState.layer;
                }), 67);
                layerStatesArray.push(layerState);
            }, this);
            this.mapRenderKey_ = (0,_events_js__WEBPACK_IMPORTED_MODULE_2__/* .listen */ .oL)(this, _events_EventType_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"].CHANGE */ .Z.CHANGE, map.render, map);
            this.changed();
        }
    };
    /**
     * Set the layer source.
     * @param {SourceType|null} source The layer source.
     * @observable
     * @api
     */
    Layer.prototype.setSource = function (source) {
        this.set(_Property_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].SOURCE */ .Z.SOURCE, source);
    };
    /**
     * Get the renderer for this layer.
     * @return {RendererType|null} The layer renderer.
     */
    Layer.prototype.getRenderer = function () {
        if (!this.renderer_) {
            this.renderer_ = this.createRenderer();
        }
        return this.renderer_;
    };
    /**
     * @return {boolean} The layer has a renderer.
     */
    Layer.prototype.hasRenderer = function () {
        return !!this.renderer_;
    };
    /**
     * Create a renderer for this layer.
     * @return {RendererType} A layer renderer.
     * @protected
     */
    Layer.prototype.createRenderer = function () {
        return null;
    };
    /**
     * Clean up.
     */
    Layer.prototype.disposeInternal = function () {
        if (this.renderer_) {
            this.renderer_.dispose();
            delete this.renderer_;
        }
        this.setSource(null);
        _super.prototype.disposeInternal.call(this);
    };
    return Layer;
}(_Base_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z));
/**
 * Return `true` if the layer is visible and if the provided view state
 * has resolution and zoom levels that are in range of the layer's min/max.
 * @param {State} layerState Layer state.
 * @param {import("../View.js").State} viewState View state.
 * @return {boolean} The layer is visible at the given view state.
 */
function inView(layerState, viewState) {
    if (!layerState.visible) {
        return false;
    }
    var resolution = viewState.resolution;
    if (resolution < layerState.minResolution ||
        resolution >= layerState.maxResolution) {
        return false;
    }
    var zoom = viewState.zoom;
    return zoom > layerState.minZoom && zoom <= layerState.maxZoom;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layer);
//# sourceMappingURL=Layer.js.map

/***/ }),

/***/ 1912:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @module ol/layer/Property
 */
/**
 * @enum {string}
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    OPACITY: 'opacity',
    VISIBLE: 'visible',
    EXTENT: 'extent',
    Z_INDEX: 'zIndex',
    MAX_RESOLUTION: 'maxResolution',
    MIN_RESOLUTION: 'minResolution',
    MAX_ZOOM: 'maxZoom',
    MIN_ZOOM: 'minZoom',
    SOURCE: 'source',
    MAP: 'map',
});
//# sourceMappingURL=Property.js.map

/***/ }),

/***/ 3946:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layer_Tile)
});

// EXTERNAL MODULE: ./node_modules/ol/layer/Layer.js
var Layer = __webpack_require__(1295);
;// CONCATENATED MODULE: ./node_modules/ol/layer/TileProperty.js
/**
 * @module ol/layer/TileProperty
 */
/**
 * @enum {string}
 */
/* harmony default export */ const TileProperty = ({
    PRELOAD: 'preload',
    USE_INTERIM_TILES_ON_ERROR: 'useInterimTilesOnError',
});
//# sourceMappingURL=TileProperty.js.map
// EXTERNAL MODULE: ./node_modules/ol/obj.js
var obj = __webpack_require__(9374);
;// CONCATENATED MODULE: ./node_modules/ol/layer/BaseTile.js
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @module ol/layer/BaseTile
 */



/***
 * @template Return
 * @typedef {import("../Observable").OnSignature<import("../Observable").EventTypes, import("../events/Event.js").default, Return> &
 *   import("../Observable").OnSignature<import("./Base").BaseLayerObjectEventTypes|
 *     'change:source'|'change:preload'|'change:useInterimTilesOnError', import("../Object").ObjectEvent, Return> &
 *   import("../Observable").OnSignature<import("../render/EventType").LayerRenderEventTypes, import("../render/Event").default, Return> &
 *   import("../Observable").CombinedOnSignature<import("../Observable").EventTypes|import("./Base").BaseLayerObjectEventTypes|
 *   'change:source'|'change:preload'|'change:useInterimTilesOnError'|import("../render/EventType").LayerRenderEventTypes, Return>} BaseTileLayerOnSignature
 */
/**
 * @template {import("../source/Tile.js").default} TileSourceType
 * @typedef {Object} Options
 * @property {string} [className='ol-layer'] A CSS class name to set to the layer element.
 * @property {number} [opacity=1] Opacity (0, 1).
 * @property {boolean} [visible=true] Visibility.
 * @property {import("../extent.js").Extent} [extent] The bounding extent for layer rendering.  The layer will not be
 * rendered outside of this extent.
 * @property {number} [zIndex] The z-index for layer rendering.  At rendering time, the layers
 * will be ordered, first by Z-index and then by position. When `undefined`, a `zIndex` of 0 is assumed
 * for layers that are added to the map's `layers` collection, or `Infinity` when the layer's `setMap()`
 * method was used.
 * @property {number} [minResolution] The minimum resolution (inclusive) at which this layer will be
 * visible.
 * @property {number} [maxResolution] The maximum resolution (exclusive) below which this layer will
 * be visible.
 * @property {number} [minZoom] The minimum view zoom level (exclusive) above which this layer will be
 * visible.
 * @property {number} [maxZoom] The maximum view zoom level (inclusive) at which this layer will
 * be visible.
 * @property {number} [preload=0] Preload. Load low-resolution tiles up to `preload` levels. `0`
 * means no preloading.
 * @property {TileSourceType} [source] Source for this layer.
 * @property {import("../PluggableMap.js").default} [map] Sets the layer as overlay on a map. The map will not manage
 * this layer in its layers collection, and the layer will be rendered on top. This is useful for
 * temporary layers. The standard way to add a layer to a map and have it managed by the map is to
 * use {@link import("../PluggableMap.js").default#addLayer map.addLayer()}.
 * @property {boolean} [useInterimTilesOnError=true] Use interim tiles on error.
 * @property {Object<string, *>} [properties] Arbitrary observable properties. Can be accessed with `#get()` and `#set()`.
 */
/**
 * @classdesc
 * For layer sources that provide pre-rendered, tiled images in grids that are
 * organized by zoom levels for specific resolutions.
 * Note that any property set in the options is set as a {@link module:ol/Object~BaseObject}
 * property on the layer object; for example, setting `title: 'My Title'` in the
 * options means that `title` is observable, and has get/set accessors.
 *
 * @template {import("../source/Tile.js").default} TileSourceType
 * @template {import("../renderer/Layer.js").default} RendererType
 * @extends {Layer<TileSourceType, RendererType>}
 * @api
 */
var BaseTileLayer = /** @class */ (function (_super) {
    __extends(BaseTileLayer, _super);
    /**
     * @param {Options<TileSourceType>} [opt_options] Tile layer options.
     */
    function BaseTileLayer(opt_options) {
        var _this = this;
        var options = opt_options ? opt_options : {};
        var baseOptions = (0,obj/* assign */.f0)({}, options);
        delete baseOptions.preload;
        delete baseOptions.useInterimTilesOnError;
        _this = _super.call(this, baseOptions) || this;
        /***
         * @type {BaseTileLayerOnSignature<import("../events").EventsKey>}
         */
        _this.on;
        /***
         * @type {BaseTileLayerOnSignature<import("../events").EventsKey>}
         */
        _this.once;
        /***
         * @type {BaseTileLayerOnSignature<void>}
         */
        _this.un;
        _this.setPreload(options.preload !== undefined ? options.preload : 0);
        _this.setUseInterimTilesOnError(options.useInterimTilesOnError !== undefined
            ? options.useInterimTilesOnError
            : true);
        return _this;
    }
    /**
     * Return the level as number to which we will preload tiles up to.
     * @return {number} The level to preload tiles up to.
     * @observable
     * @api
     */
    BaseTileLayer.prototype.getPreload = function () {
        return /** @type {number} */ (this.get(TileProperty.PRELOAD));
    };
    /**
     * Set the level as number to which we will preload tiles up to.
     * @param {number} preload The level to preload tiles up to.
     * @observable
     * @api
     */
    BaseTileLayer.prototype.setPreload = function (preload) {
        this.set(TileProperty.PRELOAD, preload);
    };
    /**
     * Whether we use interim tiles on error.
     * @return {boolean} Use interim tiles on error.
     * @observable
     * @api
     */
    BaseTileLayer.prototype.getUseInterimTilesOnError = function () {
        return /** @type {boolean} */ (this.get(TileProperty.USE_INTERIM_TILES_ON_ERROR));
    };
    /**
     * Set whether we use interim tiles on error.
     * @param {boolean} useInterimTilesOnError Use interim tiles on error.
     * @observable
     * @api
     */
    BaseTileLayer.prototype.setUseInterimTilesOnError = function (useInterimTilesOnError) {
        this.set(TileProperty.USE_INTERIM_TILES_ON_ERROR, useInterimTilesOnError);
    };
    /**
     * Get data for a pixel location.  The return type depends on the source data.  For image tiles,
     * a four element RGBA array will be returned.  For data tiles, the array length will match the
     * number of bands in the dataset.  For requests outside the layer extent, `null` will be returned.
     * Data for a image tiles can only be retrieved if the source's `crossOrigin` property is set.
     *
     * ```js
     * // display layer data on every pointer move
     * map.on('pointermove', (event) => {
     *   console.log(layer.getData(event.pixel));
     * });
     * ```
     * @param {import("../pixel").Pixel} pixel Pixel.
     * @return {Uint8ClampedArray|Uint8Array|Float32Array|DataView|null} Pixel data.
     * @api
     */
    BaseTileLayer.prototype.getData = function (pixel) {
        return _super.prototype.getData.call(this, pixel);
    };
    return BaseTileLayer;
}(Layer/* default */.Z));
/* harmony default export */ const BaseTile = (BaseTileLayer);
//# sourceMappingURL=BaseTile.js.map
// EXTERNAL MODULE: ./node_modules/ol/events/EventType.js
var EventType = __webpack_require__(5487);
// EXTERNAL MODULE: ./node_modules/ol/ImageState.js
var ImageState = __webpack_require__(553);
// EXTERNAL MODULE: ./node_modules/ol/Observable.js
var Observable = __webpack_require__(2706);
// EXTERNAL MODULE: ./node_modules/ol/util.js
var util = __webpack_require__(4187);
;// CONCATENATED MODULE: ./node_modules/ol/renderer/Layer.js
var Layer_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @module ol/renderer/Layer
 */




/**
 * @template {import("../layer/Layer.js").default} LayerType
 */
var LayerRenderer = /** @class */ (function (_super) {
    Layer_extends(LayerRenderer, _super);
    /**
     * @param {LayerType} layer Layer.
     */
    function LayerRenderer(layer) {
        var _this = _super.call(this) || this;
        /**
         * The renderer is initialized and ready to render.
         * @type {boolean}
         */
        _this.ready = true;
        /** @private */
        _this.boundHandleImageChange_ = _this.handleImageChange_.bind(_this);
        /**
         * @protected
         * @type {LayerType}
         */
        _this.layer_ = layer;
        /**
         * @type {import("../render/canvas/ExecutorGroup").default}
         */
        _this.declutterExecutorGroup = null;
        return _this;
    }
    /**
     * Asynchronous layer level hit detection.
     * @param {import("../pixel.js").Pixel} pixel Pixel.
     * @return {Promise<Array<import("../Feature").default>>} Promise that resolves with
     * an array of features.
     */
    LayerRenderer.prototype.getFeatures = function (pixel) {
        return (0,util/* abstract */.O3)();
    };
    /**
     * @param {import("../pixel.js").Pixel} pixel Pixel.
     * @return {Uint8ClampedArray|Uint8Array|Float32Array|DataView|null} Pixel data.
     */
    LayerRenderer.prototype.getData = function (pixel) {
        return null;
    };
    /**
     * Determine whether render should be called.
     * @abstract
     * @param {import("../PluggableMap.js").FrameState} frameState Frame state.
     * @return {boolean} Layer is ready to be rendered.
     */
    LayerRenderer.prototype.prepareFrame = function (frameState) {
        return (0,util/* abstract */.O3)();
    };
    /**
     * Render the layer.
     * @abstract
     * @param {import("../PluggableMap.js").FrameState} frameState Frame state.
     * @param {HTMLElement} target Target that may be used to render content to.
     * @return {HTMLElement} The rendered element.
     */
    LayerRenderer.prototype.renderFrame = function (frameState, target) {
        return (0,util/* abstract */.O3)();
    };
    /**
     * @param {Object<number, Object<string, import("../Tile.js").default>>} tiles Lookup of loaded tiles by zoom level.
     * @param {number} zoom Zoom level.
     * @param {import("../Tile.js").default} tile Tile.
     * @return {boolean|void} If `false`, the tile will not be considered loaded.
     */
    LayerRenderer.prototype.loadedTileCallback = function (tiles, zoom, tile) {
        if (!tiles[zoom]) {
            tiles[zoom] = {};
        }
        tiles[zoom][tile.tileCoord.toString()] = tile;
        return undefined;
    };
    /**
     * Create a function that adds loaded tiles to the tile lookup.
     * @param {import("../source/Tile.js").default} source Tile source.
     * @param {import("../proj/Projection.js").default} projection Projection of the tiles.
     * @param {Object<number, Object<string, import("../Tile.js").default>>} tiles Lookup of loaded tiles by zoom level.
     * @return {function(number, import("../TileRange.js").default):boolean} A function that can be
     *     called with a zoom level and a tile range to add loaded tiles to the lookup.
     * @protected
     */
    LayerRenderer.prototype.createLoadedTileFinder = function (source, projection, tiles) {
        return (
        /**
         * @param {number} zoom Zoom level.
         * @param {import("../TileRange.js").default} tileRange Tile range.
         * @return {boolean} The tile range is fully loaded.
         * @this {LayerRenderer}
         */
        function (zoom, tileRange) {
            var callback = this.loadedTileCallback.bind(this, tiles, zoom);
            return source.forEachLoadedTile(projection, zoom, tileRange, callback);
        }.bind(this));
    };
    /**
     * @abstract
     * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
     * @param {import("../PluggableMap.js").FrameState} frameState Frame state.
     * @param {number} hitTolerance Hit tolerance in pixels.
     * @param {import("./vector.js").FeatureCallback<T>} callback Feature callback.
     * @param {Array<import("./Map.js").HitMatch<T>>} matches The hit detected matches with tolerance.
     * @return {T|undefined} Callback result.
     * @template T
     */
    LayerRenderer.prototype.forEachFeatureAtCoordinate = function (coordinate, frameState, hitTolerance, callback, matches) {
        return undefined;
    };
    /**
     * @abstract
     * @param {import("../pixel.js").Pixel} pixel Pixel.
     * @param {import("../PluggableMap.js").FrameState} frameState FrameState.
     * @param {number} hitTolerance Hit tolerance in pixels.
     * @return {Uint8ClampedArray|Uint8Array} The result.  If there is no data at the pixel
     *    location, null will be returned.  If there is data, but pixel values cannot be
     *    returned, and empty array will be returned.
     */
    LayerRenderer.prototype.getDataAtPixel = function (pixel, frameState, hitTolerance) {
        return null;
    };
    /**
     * @return {LayerType} Layer.
     */
    LayerRenderer.prototype.getLayer = function () {
        return this.layer_;
    };
    /**
     * Perform action necessary to get the layer rendered after new fonts have loaded
     * @abstract
     */
    LayerRenderer.prototype.handleFontsChanged = function () { };
    /**
     * Handle changes in image state.
     * @param {import("../events/Event.js").default} event Image change event.
     * @private
     */
    LayerRenderer.prototype.handleImageChange_ = function (event) {
        var image = /** @type {import("../Image.js").default} */ (event.target);
        if (image.getState() === ImageState/* default.LOADED */.Z.LOADED) {
            this.renderIfReadyAndVisible();
        }
    };
    /**
     * Load the image if not already loaded, and register the image change
     * listener if needed.
     * @param {import("../ImageBase.js").default} image Image.
     * @return {boolean} `true` if the image is already loaded, `false` otherwise.
     * @protected
     */
    LayerRenderer.prototype.loadImage = function (image) {
        var imageState = image.getState();
        if (imageState != ImageState/* default.LOADED */.Z.LOADED && imageState != ImageState/* default.ERROR */.Z.ERROR) {
            image.addEventListener(EventType/* default.CHANGE */.Z.CHANGE, this.boundHandleImageChange_);
        }
        if (imageState == ImageState/* default.IDLE */.Z.IDLE) {
            image.load();
            imageState = image.getState();
        }
        return imageState == ImageState/* default.LOADED */.Z.LOADED;
    };
    /**
     * @protected
     */
    LayerRenderer.prototype.renderIfReadyAndVisible = function () {
        var layer = this.getLayer();
        if (layer && layer.getVisible() && layer.getSourceState() === 'ready') {
            layer.changed();
        }
    };
    /**
     * Clean up.
     */
    LayerRenderer.prototype.disposeInternal = function () {
        delete this.layer_;
        _super.prototype.disposeInternal.call(this);
    };
    return LayerRenderer;
}(Observable/* default */.Z));
/* harmony default export */ const renderer_Layer = (LayerRenderer);
//# sourceMappingURL=Layer.js.map
// EXTERNAL MODULE: ./node_modules/ol/render/Event.js
var Event = __webpack_require__(7380);
// EXTERNAL MODULE: ./node_modules/ol/render/EventType.js
var render_EventType = __webpack_require__(2329);
// EXTERNAL MODULE: ./node_modules/ol/transform.js
var transform = __webpack_require__(6101);
// EXTERNAL MODULE: ./node_modules/ol/color.js
var color = __webpack_require__(9706);
// EXTERNAL MODULE: ./node_modules/ol/extent.js + 1 modules
var ol_extent = __webpack_require__(2833);
// EXTERNAL MODULE: ./node_modules/ol/dom.js
var dom = __webpack_require__(8326);
// EXTERNAL MODULE: ./node_modules/ol/array.js
var array = __webpack_require__(5537);
;// CONCATENATED MODULE: ./node_modules/ol/renderer/canvas/Layer.js
var canvas_Layer_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @module ol/renderer/canvas/Layer
 */








/**
 * @type {Array<HTMLCanvasElement>}
 */
var canvasPool = (/* unused pure expression or super */ null && ([]));
/**
 * @type {CanvasRenderingContext2D}
 */
var pixelContext = null;
function createPixelContext() {
    var canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    pixelContext = canvas.getContext('2d');
}
/**
 * @abstract
 * @template {import("../../layer/Layer.js").default} LayerType
 * @extends {LayerRenderer<LayerType>}
 */
var CanvasLayerRenderer = /** @class */ (function (_super) {
    canvas_Layer_extends(CanvasLayerRenderer, _super);
    /**
     * @param {LayerType} layer Layer.
     */
    function CanvasLayerRenderer(layer) {
        var _this = _super.call(this, layer) || this;
        /**
         * @protected
         * @type {HTMLElement}
         */
        _this.container = null;
        /**
         * @protected
         * @type {number}
         */
        _this.renderedResolution;
        /**
         * A temporary transform.  The values in this transform should only be used in a
         * function that sets the values.
         * @protected
         * @type {import("../../transform.js").Transform}
         */
        _this.tempTransform = (0,transform/* create */.Ue)();
        /**
         * The transform for rendered pixels to viewport CSS pixels.  This transform must
         * be set when rendering a frame and may be used by other functions after rendering.
         * @protected
         * @type {import("../../transform.js").Transform}
         */
        _this.pixelTransform = (0,transform/* create */.Ue)();
        /**
         * The transform for viewport CSS pixels to rendered pixels.  This transform must
         * be set when rendering a frame and may be used by other functions after rendering.
         * @protected
         * @type {import("../../transform.js").Transform}
         */
        _this.inversePixelTransform = (0,transform/* create */.Ue)();
        /**
         * @type {CanvasRenderingContext2D}
         */
        _this.context = null;
        /**
         * @type {boolean}
         */
        _this.containerReused = false;
        /**
         * @private
         * @type {CanvasRenderingContext2D}
         */
        _this.pixelContext_ = null;
        /**
         * @protected
         * @type {import("../../PluggableMap.js").FrameState|null}
         */
        _this.frameState = null;
        return _this;
    }
    /**
     * @param {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} image Image.
     * @param {number} col The column index.
     * @param {number} row The row index.
     * @return {Uint8ClampedArray|null} The image data.
     */
    CanvasLayerRenderer.prototype.getImageData = function (image, col, row) {
        if (!pixelContext) {
            createPixelContext();
        }
        pixelContext.clearRect(0, 0, 1, 1);
        var data;
        try {
            pixelContext.drawImage(image, col, row, 1, 1, 0, 0, 1, 1);
            data = pixelContext.getImageData(0, 0, 1, 1).data;
        }
        catch (err) {
            pixelContext = null;
            return null;
        }
        return data;
    };
    /**
     * @param {import('../../PluggableMap.js').FrameState} frameState Frame state.
     * @return {string} Background color.
     */
    CanvasLayerRenderer.prototype.getBackground = function (frameState) {
        var layer = this.getLayer();
        var background = layer.getBackground();
        if (typeof background === 'function') {
            background = background(frameState.viewState.resolution);
        }
        return background || undefined;
    };
    /**
     * Get a rendering container from an existing target, if compatible.
     * @param {HTMLElement} target Potential render target.
     * @param {string} transform CSS Transform.
     * @param {string} [opt_backgroundColor] Background color.
     */
    CanvasLayerRenderer.prototype.useContainer = function (target, transform, opt_backgroundColor) {
        var layerClassName = this.getLayer().getClassName();
        var container, context;
        if (target &&
            target.className === layerClassName &&
            (!opt_backgroundColor ||
                (target &&
                    target.style.backgroundColor &&
                    (0,array/* equals */.fS)((0,color/* asArray */._2)(target.style.backgroundColor), (0,color/* asArray */._2)(opt_backgroundColor))))) {
            var canvas = target.firstElementChild;
            if (canvas instanceof HTMLCanvasElement) {
                context = canvas.getContext('2d');
            }
        }
        if (context && context.canvas.style.transform === transform) {
            // Container of the previous layer renderer can be used.
            this.container = target;
            this.context = context;
            this.containerReused = true;
        }
        else if (this.containerReused) {
            // Previously reused container cannot be used any more.
            this.container = null;
            this.context = null;
            this.containerReused = false;
        }
        if (!this.container) {
            container = document.createElement('div');
            container.className = layerClassName;
            var style = container.style;
            style.position = 'absolute';
            style.width = '100%';
            style.height = '100%';
            context = (0,dom/* createCanvasContext2D */.E4)();
            var canvas = context.canvas;
            container.appendChild(canvas);
            style = canvas.style;
            style.position = 'absolute';
            style.left = '0';
            style.transformOrigin = 'top left';
            this.container = container;
            this.context = context;
        }
        if (!this.containerReused &&
            opt_backgroundColor &&
            !this.container.style.backgroundColor) {
            this.container.style.backgroundColor = opt_backgroundColor;
        }
    };
    /**
     * @param {CanvasRenderingContext2D} context Context.
     * @param {import("../../PluggableMap.js").FrameState} frameState Frame state.
     * @param {import("../../extent.js").Extent} extent Clip extent.
     * @protected
     */
    CanvasLayerRenderer.prototype.clipUnrotated = function (context, frameState, extent) {
        var topLeft = (0,ol_extent/* getTopLeft */.rL)(extent);
        var topRight = (0,ol_extent/* getTopRight */.Xv)(extent);
        var bottomRight = (0,ol_extent/* getBottomRight */.w$)(extent);
        var bottomLeft = (0,ol_extent/* getBottomLeft */.hC)(extent);
        (0,transform/* apply */.nn)(frameState.coordinateToPixelTransform, topLeft);
        (0,transform/* apply */.nn)(frameState.coordinateToPixelTransform, topRight);
        (0,transform/* apply */.nn)(frameState.coordinateToPixelTransform, bottomRight);
        (0,transform/* apply */.nn)(frameState.coordinateToPixelTransform, bottomLeft);
        var inverted = this.inversePixelTransform;
        (0,transform/* apply */.nn)(inverted, topLeft);
        (0,transform/* apply */.nn)(inverted, topRight);
        (0,transform/* apply */.nn)(inverted, bottomRight);
        (0,transform/* apply */.nn)(inverted, bottomLeft);
        context.save();
        context.beginPath();
        context.moveTo(Math.round(topLeft[0]), Math.round(topLeft[1]));
        context.lineTo(Math.round(topRight[0]), Math.round(topRight[1]));
        context.lineTo(Math.round(bottomRight[0]), Math.round(bottomRight[1]));
        context.lineTo(Math.round(bottomLeft[0]), Math.round(bottomLeft[1]));
        context.clip();
    };
    /**
     * @param {import("../../render/EventType.js").default} type Event type.
     * @param {CanvasRenderingContext2D} context Context.
     * @param {import("../../PluggableMap.js").FrameState} frameState Frame state.
     * @private
     */
    CanvasLayerRenderer.prototype.dispatchRenderEvent_ = function (type, context, frameState) {
        var layer = this.getLayer();
        if (layer.hasListener(type)) {
            var event_1 = new Event/* default */.Z(type, this.inversePixelTransform, frameState, context);
            layer.dispatchEvent(event_1);
        }
    };
    /**
     * @param {CanvasRenderingContext2D} context Context.
     * @param {import("../../PluggableMap.js").FrameState} frameState Frame state.
     * @protected
     */
    CanvasLayerRenderer.prototype.preRender = function (context, frameState) {
        this.frameState = frameState;
        this.dispatchRenderEvent_(render_EventType/* default.PRERENDER */.Z.PRERENDER, context, frameState);
    };
    /**
     * @param {CanvasRenderingContext2D} context Context.
     * @param {import("../../PluggableMap.js").FrameState} frameState Frame state.
     * @protected
     */
    CanvasLayerRenderer.prototype.postRender = function (context, frameState) {
        this.dispatchRenderEvent_(render_EventType/* default.POSTRENDER */.Z.POSTRENDER, context, frameState);
    };
    /**
     * Creates a transform for rendering to an element that will be rotated after rendering.
     * @param {import("../../coordinate.js").Coordinate} center Center.
     * @param {number} resolution Resolution.
     * @param {number} rotation Rotation.
     * @param {number} pixelRatio Pixel ratio.
     * @param {number} width Width of the rendered element (in pixels).
     * @param {number} height Height of the rendered element (in pixels).
     * @param {number} offsetX Offset on the x-axis in view coordinates.
     * @protected
     * @return {!import("../../transform.js").Transform} Transform.
     */
    CanvasLayerRenderer.prototype.getRenderTransform = function (center, resolution, rotation, pixelRatio, width, height, offsetX) {
        var dx1 = width / 2;
        var dy1 = height / 2;
        var sx = pixelRatio / resolution;
        var sy = -sx;
        var dx2 = -center[0] + offsetX;
        var dy2 = -center[1];
        return (0,transform/* compose */.qC)(this.tempTransform, dx1, dy1, sx, sy, -rotation, dx2, dy2);
    };
    /**
     * @param {import("../../pixel.js").Pixel} pixel Pixel.
     * @param {import("../../PluggableMap.js").FrameState} frameState FrameState.
     * @param {number} hitTolerance Hit tolerance in pixels.
     * @return {Uint8ClampedArray|Uint8Array} The result.  If there is no data at the pixel
     *    location, null will be returned.  If there is data, but pixel values cannot be
     *    returned, and empty array will be returned.
     */
    CanvasLayerRenderer.prototype.getDataAtPixel = function (pixel, frameState, hitTolerance) {
        var renderPixel = (0,transform/* apply */.nn)(this.inversePixelTransform, pixel.slice());
        var context = this.context;
        var layer = this.getLayer();
        var layerExtent = layer.getExtent();
        if (layerExtent) {
            var renderCoordinate = (0,transform/* apply */.nn)(frameState.pixelToCoordinateTransform, pixel.slice());
            /** get only data inside of the layer extent */
            if (!(0,ol_extent/* containsCoordinate */.b8)(layerExtent, renderCoordinate)) {
                return null;
            }
        }
        var x = Math.round(renderPixel[0]);
        var y = Math.round(renderPixel[1]);
        var pixelContext = this.pixelContext_;
        if (!pixelContext) {
            var pixelCanvas = document.createElement('canvas');
            pixelCanvas.width = 1;
            pixelCanvas.height = 1;
            pixelContext = pixelCanvas.getContext('2d');
            this.pixelContext_ = pixelContext;
        }
        pixelContext.clearRect(0, 0, 1, 1);
        var data;
        try {
            pixelContext.drawImage(context.canvas, x, y, 1, 1, 0, 0, 1, 1);
            data = pixelContext.getImageData(0, 0, 1, 1).data;
        }
        catch (err) {
            if (err.name === 'SecurityError') {
                // tainted canvas, we assume there is data at the given pixel (although there might not be)
                this.pixelContext_ = null;
                return new Uint8Array();
            }
            return data;
        }
        if (data[3] === 0) {
            return null;
        }
        return data;
    };
    /**
     * Clean up.
     */
    CanvasLayerRenderer.prototype.disposeInternal = function () {
        delete this.frameState;
        _super.prototype.disposeInternal.call(this);
    };
    return CanvasLayerRenderer;
}(renderer_Layer));
/* harmony default export */ const canvas_Layer = (CanvasLayerRenderer);
//# sourceMappingURL=Layer.js.map
// EXTERNAL MODULE: ./node_modules/ol/ImageTile.js + 2 modules
var ImageTile = __webpack_require__(34);
// EXTERNAL MODULE: ./node_modules/ol/reproj/Tile.js + 2 modules
var Tile = __webpack_require__(6113);
// EXTERNAL MODULE: ./node_modules/ol/TileRange.js
var TileRange = __webpack_require__(2519);
// EXTERNAL MODULE: ./node_modules/ol/TileState.js
var TileState = __webpack_require__(7195);
// EXTERNAL MODULE: ./node_modules/ol/renderer/canvas/common.js
var common = __webpack_require__(1481);
// EXTERNAL MODULE: ./node_modules/ol/proj.js + 6 modules
var proj = __webpack_require__(1311);
// EXTERNAL MODULE: ./node_modules/ol/size.js
var size = __webpack_require__(4307);
;// CONCATENATED MODULE: ./node_modules/ol/renderer/canvas/TileLayer.js
var TileLayer_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @module ol/renderer/canvas/TileLayer
 */













/**
 * @classdesc
 * Canvas renderer for tile layers.
 * @api
 * @template {import("../../layer/Tile.js").default<import("../../source/Tile.js").default>|import("../../layer/VectorTile.js").default} [LayerType=import("../../layer/Tile.js").default<import("../../source/Tile.js").default>|import("../../layer/VectorTile.js").default]
 * @extends {CanvasLayerRenderer<LayerType>}
 */
var CanvasTileLayerRenderer = /** @class */ (function (_super) {
    TileLayer_extends(CanvasTileLayerRenderer, _super);
    /**
     * @param {LayerType} tileLayer Tile layer.
     */
    function CanvasTileLayerRenderer(tileLayer) {
        var _this = _super.call(this, tileLayer) || this;
        /**
         * Rendered extent has changed since the previous `renderFrame()` call
         * @type {boolean}
         */
        _this.extentChanged = true;
        /**
         * @private
         * @type {?import("../../extent.js").Extent}
         */
        _this.renderedExtent_ = null;
        /**
         * @protected
         * @type {number}
         */
        _this.renderedPixelRatio;
        /**
         * @protected
         * @type {import("../../proj/Projection.js").default}
         */
        _this.renderedProjection = null;
        /**
         * @protected
         * @type {number}
         */
        _this.renderedRevision;
        /**
         * @protected
         * @type {!Array<import("../../Tile.js").default>}
         */
        _this.renderedTiles = [];
        /**
         * @private
         * @type {boolean}
         */
        _this.newTiles_ = false;
        /**
         * @protected
         * @type {import("../../extent.js").Extent}
         */
        _this.tmpExtent = (0,ol_extent/* createEmpty */.lJ)();
        /**
         * @private
         * @type {import("../../TileRange.js").default}
         */
        _this.tmpTileRange_ = new TileRange/* default */.Z(0, 0, 0, 0);
        return _this;
    }
    /**
     * @protected
     * @param {import("../../Tile.js").default} tile Tile.
     * @return {boolean} Tile is drawable.
     */
    CanvasTileLayerRenderer.prototype.isDrawableTile = function (tile) {
        var tileLayer = this.getLayer();
        var tileState = tile.getState();
        var useInterimTilesOnError = tileLayer.getUseInterimTilesOnError();
        return (tileState == TileState/* default.LOADED */.Z.LOADED ||
            tileState == TileState/* default.EMPTY */.Z.EMPTY ||
            (tileState == TileState/* default.ERROR */.Z.ERROR && !useInterimTilesOnError));
    };
    /**
     * @param {number} z Tile coordinate z.
     * @param {number} x Tile coordinate x.
     * @param {number} y Tile coordinate y.
     * @param {import("../../PluggableMap.js").FrameState} frameState Frame state.
     * @return {!import("../../Tile.js").default} Tile.
     */
    CanvasTileLayerRenderer.prototype.getTile = function (z, x, y, frameState) {
        var pixelRatio = frameState.pixelRatio;
        var projection = frameState.viewState.projection;
        var tileLayer = this.getLayer();
        var tileSource = tileLayer.getSource();
        var tile = tileSource.getTile(z, x, y, pixelRatio, projection);
        if (tile.getState() == TileState/* default.ERROR */.Z.ERROR) {
            if (!tileLayer.getUseInterimTilesOnError()) {
                // When useInterimTilesOnError is false, we consider the error tile as loaded.
                tile.setState(TileState/* default.LOADED */.Z.LOADED);
            }
            else if (tileLayer.getPreload() > 0) {
                // Preloaded tiles for lower resolutions might have finished loading.
                this.newTiles_ = true;
            }
        }
        if (!this.isDrawableTile(tile)) {
            tile = tile.getInterimTile();
        }
        return tile;
    };
    /**
     * @param {import("../../pixel.js").Pixel} pixel Pixel.
     * @return {Uint8ClampedArray} Data at the pixel location.
     */
    CanvasTileLayerRenderer.prototype.getData = function (pixel) {
        var frameState = this.frameState;
        if (!frameState) {
            return null;
        }
        var layer = this.getLayer();
        var coordinate = (0,transform/* apply */.nn)(frameState.pixelToCoordinateTransform, pixel.slice());
        var layerExtent = layer.getExtent();
        if (layerExtent) {
            if (!(0,ol_extent/* containsCoordinate */.b8)(layerExtent, coordinate)) {
                return null;
            }
        }
        var pixelRatio = frameState.pixelRatio;
        var projection = frameState.viewState.projection;
        var viewState = frameState.viewState;
        var source = layer.getRenderSource();
        var tileGrid = source.getTileGridForProjection(viewState.projection);
        var tilePixelRatio = source.getTilePixelRatio(frameState.pixelRatio);
        for (var z = tileGrid.getZForResolution(viewState.resolution); z >= tileGrid.getMinZoom(); --z) {
            var tileCoord = tileGrid.getTileCoordForCoordAndZ(coordinate, z);
            var tile = source.getTile(z, tileCoord[1], tileCoord[2], pixelRatio, projection);
            if (!(tile instanceof ImageTile/* default */.Z || tile instanceof Tile/* default */.Z)) {
                return null;
            }
            if (tile.getState() !== TileState/* default.LOADED */.Z.LOADED) {
                continue;
            }
            var tileOrigin = tileGrid.getOrigin(z);
            var tileSize = (0,size/* toSize */.Pq)(tileGrid.getTileSize(z));
            var tileResolution = tileGrid.getResolution(z);
            var col = Math.floor(tilePixelRatio *
                ((coordinate[0] - tileOrigin[0]) / tileResolution -
                    tileCoord[1] * tileSize[0]));
            var row = Math.floor(tilePixelRatio *
                ((tileOrigin[1] - coordinate[1]) / tileResolution -
                    tileCoord[2] * tileSize[1]));
            var gutter = Math.round(tilePixelRatio * source.getGutterForProjection(viewState.projection));
            return this.getImageData(tile.getImage(), col + gutter, row + gutter);
        }
        return null;
    };
    /**
     * @param {Object<number, Object<string, import("../../Tile.js").default>>} tiles Lookup of loaded tiles by zoom level.
     * @param {number} zoom Zoom level.
     * @param {import("../../Tile.js").default} tile Tile.
     * @return {boolean|void} If `false`, the tile will not be considered loaded.
     */
    CanvasTileLayerRenderer.prototype.loadedTileCallback = function (tiles, zoom, tile) {
        if (this.isDrawableTile(tile)) {
            return _super.prototype.loadedTileCallback.call(this, tiles, zoom, tile);
        }
        return false;
    };
    /**
     * Determine whether render should be called.
     * @param {import("../../PluggableMap.js").FrameState} frameState Frame state.
     * @return {boolean} Layer is ready to be rendered.
     */
    CanvasTileLayerRenderer.prototype.prepareFrame = function (frameState) {
        return !!this.getLayer().getSource();
    };
    /**
     * Render the layer.
     * @param {import("../../PluggableMap.js").FrameState} frameState Frame state.
     * @param {HTMLElement} target Target that may be used to render content to.
     * @return {HTMLElement} The rendered element.
     */
    CanvasTileLayerRenderer.prototype.renderFrame = function (frameState, target) {
        var layerState = frameState.layerStatesArray[frameState.layerIndex];
        var viewState = frameState.viewState;
        var projection = viewState.projection;
        var viewResolution = viewState.resolution;
        var viewCenter = viewState.center;
        var rotation = viewState.rotation;
        var pixelRatio = frameState.pixelRatio;
        var tileLayer = this.getLayer();
        var tileSource = tileLayer.getSource();
        var sourceRevision = tileSource.getRevision();
        var tileGrid = tileSource.getTileGridForProjection(projection);
        var z = tileGrid.getZForResolution(viewResolution, tileSource.zDirection);
        var tileResolution = tileGrid.getResolution(z);
        var extent = frameState.extent;
        var resolution = frameState.viewState.resolution;
        var tilePixelRatio = tileSource.getTilePixelRatio(pixelRatio);
        // desired dimensions of the canvas in pixels
        var width = Math.round(((0,ol_extent/* getWidth */.dz)(extent) / resolution) * pixelRatio);
        var height = Math.round(((0,ol_extent/* getHeight */.Cr)(extent) / resolution) * pixelRatio);
        var layerExtent = layerState.extent && (0,proj/* fromUserExtent */.dY)(layerState.extent, projection);
        if (layerExtent) {
            extent = (0,ol_extent/* getIntersection */.Ed)(extent, (0,proj/* fromUserExtent */.dY)(layerState.extent, projection));
        }
        var dx = (tileResolution * width) / 2 / tilePixelRatio;
        var dy = (tileResolution * height) / 2 / tilePixelRatio;
        var canvasExtent = [
            viewCenter[0] - dx,
            viewCenter[1] - dy,
            viewCenter[0] + dx,
            viewCenter[1] + dy,
        ];
        var tileRange = tileGrid.getTileRangeForExtentAndZ(extent, z);
        /**
         * @type {Object<number, Object<string, import("../../Tile.js").default>>}
         */
        var tilesToDrawByZ = {};
        tilesToDrawByZ[z] = {};
        var findLoadedTiles = this.createLoadedTileFinder(tileSource, projection, tilesToDrawByZ);
        var tmpExtent = this.tmpExtent;
        var tmpTileRange = this.tmpTileRange_;
        this.newTiles_ = false;
        var viewport = rotation
            ? (0,ol_extent/* getRotatedViewport */.dY)(viewState.center, resolution, rotation, frameState.size)
            : undefined;
        for (var x = tileRange.minX; x <= tileRange.maxX; ++x) {
            for (var y = tileRange.minY; y <= tileRange.maxY; ++y) {
                if (rotation &&
                    !tileGrid.tileCoordIntersectsViewport([z, x, y], viewport)) {
                    continue;
                }
                var tile = this.getTile(z, x, y, frameState);
                if (this.isDrawableTile(tile)) {
                    var uid = (0,util/* getUid */.sq)(this);
                    if (tile.getState() == TileState/* default.LOADED */.Z.LOADED) {
                        tilesToDrawByZ[z][tile.tileCoord.toString()] = tile;
                        var inTransition = tile.inTransition(uid);
                        if (inTransition && layerState.opacity !== 1) {
                            // Skipping transition when layer is not fully opaque avoids visual artifacts.
                            tile.endTransition(uid);
                            inTransition = false;
                        }
                        if (!this.newTiles_ &&
                            (inTransition || this.renderedTiles.indexOf(tile) === -1)) {
                            this.newTiles_ = true;
                        }
                    }
                    if (tile.getAlpha(uid, frameState.time) === 1) {
                        // don't look for alt tiles if alpha is 1
                        continue;
                    }
                }
                var childTileRange = tileGrid.getTileCoordChildTileRange(tile.tileCoord, tmpTileRange, tmpExtent);
                var covered = false;
                if (childTileRange) {
                    covered = findLoadedTiles(z + 1, childTileRange);
                }
                if (!covered) {
                    tileGrid.forEachTileCoordParentTileRange(tile.tileCoord, findLoadedTiles, tmpTileRange, tmpExtent);
                }
            }
        }
        var canvasScale = ((tileResolution / viewResolution) * pixelRatio) / tilePixelRatio;
        // set forward and inverse pixel transforms
        (0,transform/* compose */.qC)(this.pixelTransform, frameState.size[0] / 2, frameState.size[1] / 2, 1 / pixelRatio, 1 / pixelRatio, rotation, -width / 2, -height / 2);
        var canvasTransform = (0,transform/* toString */.BB)(this.pixelTransform);
        this.useContainer(target, canvasTransform, this.getBackground(frameState));
        var context = this.context;
        var canvas = context.canvas;
        (0,transform/* makeInverse */.nb)(this.inversePixelTransform, this.pixelTransform);
        // set scale transform for calculating tile positions on the canvas
        (0,transform/* compose */.qC)(this.tempTransform, width / 2, height / 2, canvasScale, canvasScale, 0, -width / 2, -height / 2);
        if (canvas.width != width || canvas.height != height) {
            canvas.width = width;
            canvas.height = height;
        }
        else if (!this.containerReused) {
            context.clearRect(0, 0, width, height);
        }
        if (layerExtent) {
            this.clipUnrotated(context, frameState, layerExtent);
        }
        if (!tileSource.getInterpolate()) {
            (0,obj/* assign */.f0)(context, common/* IMAGE_SMOOTHING_DISABLED */.$);
        }
        this.preRender(context, frameState);
        this.renderedTiles.length = 0;
        /** @type {Array<number>} */
        var zs = Object.keys(tilesToDrawByZ).map(Number);
        zs.sort(array/* numberSafeCompareFunction */.kK);
        var clips, clipZs, currentClip;
        if (layerState.opacity === 1 &&
            (!this.containerReused ||
                tileSource.getOpaque(frameState.viewState.projection))) {
            zs = zs.reverse();
        }
        else {
            clips = [];
            clipZs = [];
        }
        for (var i = zs.length - 1; i >= 0; --i) {
            var currentZ = zs[i];
            var currentTilePixelSize = tileSource.getTilePixelSize(currentZ, pixelRatio, projection);
            var currentResolution = tileGrid.getResolution(currentZ);
            var currentScale = currentResolution / tileResolution;
            var dx_1 = currentTilePixelSize[0] * currentScale * canvasScale;
            var dy_1 = currentTilePixelSize[1] * currentScale * canvasScale;
            var originTileCoord = tileGrid.getTileCoordForCoordAndZ((0,ol_extent/* getTopLeft */.rL)(canvasExtent), currentZ);
            var originTileExtent = tileGrid.getTileCoordExtent(originTileCoord);
            var origin_1 = (0,transform/* apply */.nn)(this.tempTransform, [
                (tilePixelRatio * (originTileExtent[0] - canvasExtent[0])) /
                    tileResolution,
                (tilePixelRatio * (canvasExtent[3] - originTileExtent[3])) /
                    tileResolution,
            ]);
            var tileGutter = tilePixelRatio * tileSource.getGutterForProjection(projection);
            var tilesToDraw = tilesToDrawByZ[currentZ];
            for (var tileCoordKey in tilesToDraw) {
                var tile = /** @type {import("../../ImageTile.js").default} */ (tilesToDraw[tileCoordKey]);
                var tileCoord = tile.tileCoord;
                // Calculate integer positions and sizes so that tiles align
                var xIndex = originTileCoord[1] - tileCoord[1];
                var nextX = Math.round(origin_1[0] - (xIndex - 1) * dx_1);
                var yIndex = originTileCoord[2] - tileCoord[2];
                var nextY = Math.round(origin_1[1] - (yIndex - 1) * dy_1);
                var x = Math.round(origin_1[0] - xIndex * dx_1);
                var y = Math.round(origin_1[1] - yIndex * dy_1);
                var w = nextX - x;
                var h = nextY - y;
                var transition = z === currentZ;
                var inTransition = transition && tile.getAlpha((0,util/* getUid */.sq)(this), frameState.time) !== 1;
                var contextSaved = false;
                if (!inTransition) {
                    if (clips) {
                        // Clip mask for regions in this tile that already filled by a higher z tile
                        currentClip = [x, y, x + w, y, x + w, y + h, x, y + h];
                        for (var i_1 = 0, ii = clips.length; i_1 < ii; ++i_1) {
                            if (z !== currentZ && currentZ < clipZs[i_1]) {
                                var clip = clips[i_1];
                                if ((0,ol_extent/* intersects */.kK)([x, y, x + w, y + h], [clip[0], clip[3], clip[4], clip[7]])) {
                                    if (!contextSaved) {
                                        context.save();
                                        contextSaved = true;
                                    }
                                    context.beginPath();
                                    // counter-clockwise (outer ring) for current tile
                                    context.moveTo(currentClip[0], currentClip[1]);
                                    context.lineTo(currentClip[2], currentClip[3]);
                                    context.lineTo(currentClip[4], currentClip[5]);
                                    context.lineTo(currentClip[6], currentClip[7]);
                                    // clockwise (inner ring) for higher z tile
                                    context.moveTo(clip[6], clip[7]);
                                    context.lineTo(clip[4], clip[5]);
                                    context.lineTo(clip[2], clip[3]);
                                    context.lineTo(clip[0], clip[1]);
                                    context.clip();
                                }
                            }
                        }
                        clips.push(currentClip);
                        clipZs.push(currentZ);
                    }
                    else {
                        context.clearRect(x, y, w, h);
                    }
                }
                this.drawTileImage(tile, frameState, x, y, w, h, tileGutter, transition);
                if (clips && !inTransition) {
                    if (contextSaved) {
                        context.restore();
                    }
                    this.renderedTiles.unshift(tile);
                }
                else {
                    this.renderedTiles.push(tile);
                }
                this.updateUsedTiles(frameState.usedTiles, tileSource, tile);
            }
        }
        this.renderedRevision = sourceRevision;
        this.renderedResolution = tileResolution;
        this.extentChanged =
            !this.renderedExtent_ || !(0,ol_extent/* equals */.fS)(this.renderedExtent_, canvasExtent);
        this.renderedExtent_ = canvasExtent;
        this.renderedPixelRatio = pixelRatio;
        this.renderedProjection = projection;
        this.manageTilePyramid(frameState, tileSource, tileGrid, pixelRatio, projection, extent, z, tileLayer.getPreload());
        this.scheduleExpireCache(frameState, tileSource);
        this.postRender(context, frameState);
        if (layerState.extent) {
            context.restore();
        }
        (0,obj/* assign */.f0)(context, common/* IMAGE_SMOOTHING_ENABLED */.s);
        if (canvasTransform !== canvas.style.transform) {
            canvas.style.transform = canvasTransform;
        }
        return this.container;
    };
    /**
     * @param {import("../../ImageTile.js").default} tile Tile.
     * @param {import("../../PluggableMap.js").FrameState} frameState Frame state.
     * @param {number} x Left of the tile.
     * @param {number} y Top of the tile.
     * @param {number} w Width of the tile.
     * @param {number} h Height of the tile.
     * @param {number} gutter Tile gutter.
     * @param {boolean} transition Apply an alpha transition.
     */
    CanvasTileLayerRenderer.prototype.drawTileImage = function (tile, frameState, x, y, w, h, gutter, transition) {
        var image = this.getTileImage(tile);
        if (!image) {
            return;
        }
        var uid = (0,util/* getUid */.sq)(this);
        var layerState = frameState.layerStatesArray[frameState.layerIndex];
        var alpha = layerState.opacity *
            (transition ? tile.getAlpha(uid, frameState.time) : 1);
        var alphaChanged = alpha !== this.context.globalAlpha;
        if (alphaChanged) {
            this.context.save();
            this.context.globalAlpha = alpha;
        }
        this.context.drawImage(image, gutter, gutter, image.width - 2 * gutter, image.height - 2 * gutter, x, y, w, h);
        if (alphaChanged) {
            this.context.restore();
        }
        if (alpha !== layerState.opacity) {
            frameState.animate = true;
        }
        else if (transition) {
            tile.endTransition(uid);
        }
    };
    /**
     * @return {HTMLCanvasElement} Image
     */
    CanvasTileLayerRenderer.prototype.getImage = function () {
        var context = this.context;
        return context ? context.canvas : null;
    };
    /**
     * Get the image from a tile.
     * @param {import("../../ImageTile.js").default} tile Tile.
     * @return {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} Image.
     * @protected
     */
    CanvasTileLayerRenderer.prototype.getTileImage = function (tile) {
        return tile.getImage();
    };
    /**
     * @param {import("../../PluggableMap.js").FrameState} frameState Frame state.
     * @param {import("../../source/Tile.js").default} tileSource Tile source.
     * @protected
     */
    CanvasTileLayerRenderer.prototype.scheduleExpireCache = function (frameState, tileSource) {
        if (tileSource.canExpireCache()) {
            /**
             * @param {import("../../source/Tile.js").default} tileSource Tile source.
             * @param {import("../../PluggableMap.js").default} map Map.
             * @param {import("../../PluggableMap.js").FrameState} frameState Frame state.
             */
            var postRenderFunction = function (tileSource, map, frameState) {
                var tileSourceKey = (0,util/* getUid */.sq)(tileSource);
                if (tileSourceKey in frameState.usedTiles) {
                    tileSource.expireCache(frameState.viewState.projection, frameState.usedTiles[tileSourceKey]);
                }
            }.bind(null, tileSource);
            frameState.postRenderFunctions.push(
            /** @type {import("../../PluggableMap.js").PostRenderFunction} */ (postRenderFunction));
        }
    };
    /**
     * @param {!Object<string, !Object<string, boolean>>} usedTiles Used tiles.
     * @param {import("../../source/Tile.js").default} tileSource Tile source.
     * @param {import('../../Tile.js').default} tile Tile.
     * @protected
     */
    CanvasTileLayerRenderer.prototype.updateUsedTiles = function (usedTiles, tileSource, tile) {
        // FIXME should we use tilesToDrawByZ instead?
        var tileSourceKey = (0,util/* getUid */.sq)(tileSource);
        if (!(tileSourceKey in usedTiles)) {
            usedTiles[tileSourceKey] = {};
        }
        usedTiles[tileSourceKey][tile.getKey()] = true;
    };
    /**
     * Manage tile pyramid.
     * This function performs a number of functions related to the tiles at the
     * current zoom and lower zoom levels:
     * - registers idle tiles in frameState.wantedTiles so that they are not
     *   discarded by the tile queue
     * - enqueues missing tiles
     * @param {import("../../PluggableMap.js").FrameState} frameState Frame state.
     * @param {import("../../source/Tile.js").default} tileSource Tile source.
     * @param {import("../../tilegrid/TileGrid.js").default} tileGrid Tile grid.
     * @param {number} pixelRatio Pixel ratio.
     * @param {import("../../proj/Projection.js").default} projection Projection.
     * @param {import("../../extent.js").Extent} extent Extent.
     * @param {number} currentZ Current Z.
     * @param {number} preload Load low resolution tiles up to `preload` levels.
     * @param {function(import("../../Tile.js").default):void} [opt_tileCallback] Tile callback.
     * @protected
     */
    CanvasTileLayerRenderer.prototype.manageTilePyramid = function (frameState, tileSource, tileGrid, pixelRatio, projection, extent, currentZ, preload, opt_tileCallback) {
        var tileSourceKey = (0,util/* getUid */.sq)(tileSource);
        if (!(tileSourceKey in frameState.wantedTiles)) {
            frameState.wantedTiles[tileSourceKey] = {};
        }
        var wantedTiles = frameState.wantedTiles[tileSourceKey];
        var tileQueue = frameState.tileQueue;
        var minZoom = tileGrid.getMinZoom();
        var rotation = frameState.viewState.rotation;
        var viewport = rotation
            ? (0,ol_extent/* getRotatedViewport */.dY)(frameState.viewState.center, frameState.viewState.resolution, rotation, frameState.size)
            : undefined;
        var tileCount = 0;
        var tile, tileRange, tileResolution, x, y, z;
        for (z = minZoom; z <= currentZ; ++z) {
            tileRange = tileGrid.getTileRangeForExtentAndZ(extent, z, tileRange);
            tileResolution = tileGrid.getResolution(z);
            for (x = tileRange.minX; x <= tileRange.maxX; ++x) {
                for (y = tileRange.minY; y <= tileRange.maxY; ++y) {
                    if (rotation &&
                        !tileGrid.tileCoordIntersectsViewport([z, x, y], viewport)) {
                        continue;
                    }
                    if (currentZ - z <= preload) {
                        ++tileCount;
                        tile = tileSource.getTile(z, x, y, pixelRatio, projection);
                        if (tile.getState() == TileState/* default.IDLE */.Z.IDLE) {
                            wantedTiles[tile.getKey()] = true;
                            if (!tileQueue.isKeyQueued(tile.getKey())) {
                                tileQueue.enqueue([
                                    tile,
                                    tileSourceKey,
                                    tileGrid.getTileCoordCenter(tile.tileCoord),
                                    tileResolution,
                                ]);
                            }
                        }
                        if (opt_tileCallback !== undefined) {
                            opt_tileCallback(tile);
                        }
                    }
                    else {
                        tileSource.useTile(z, x, y, projection);
                    }
                }
            }
        }
        tileSource.updateCacheSize(tileCount, projection);
    };
    return CanvasTileLayerRenderer;
}(canvas_Layer));
/* harmony default export */ const canvas_TileLayer = (CanvasTileLayerRenderer);
//# sourceMappingURL=TileLayer.js.map
;// CONCATENATED MODULE: ./node_modules/ol/layer/Tile.js
var Tile_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @module ol/layer/Tile
 */


/**
 * @classdesc
 * For layer sources that provide pre-rendered, tiled images in grids that are
 * organized by zoom levels for specific resolutions.
 * Note that any property set in the options is set as a {@link module:ol/Object~BaseObject}
 * property on the layer object; for example, setting `title: 'My Title'` in the
 * options means that `title` is observable, and has get/set accessors.
 *
 * @template {import("../source/Tile.js").default} TileSourceType
 * @extends BaseTileLayer<TileSourceType, CanvasTileLayerRenderer>
 * @api
 */
var TileLayer = /** @class */ (function (_super) {
    Tile_extends(TileLayer, _super);
    /**
     * @param {import("./BaseTile.js").Options<TileSourceType>} [opt_options] Tile layer options.
     */
    function TileLayer(opt_options) {
        return _super.call(this, opt_options) || this;
    }
    TileLayer.prototype.createRenderer = function () {
        return new canvas_TileLayer(this);
    };
    return TileLayer;
}(BaseTile));
/* harmony default export */ const layer_Tile = (TileLayer);
//# sourceMappingURL=Tile.js.map

/***/ }),

/***/ 3983:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$W": () => (/* binding */ modulo),
/* harmony export */   "GW": () => (/* binding */ floor),
/* harmony export */   "SV": () => (/* binding */ solveLinearSystem),
/* harmony export */   "Yr": () => (/* binding */ toRadians),
/* harmony export */   "bI": () => (/* binding */ squaredDistance),
/* harmony export */   "f9": () => (/* binding */ cosh),
/* harmony export */   "k3": () => (/* binding */ log2),
/* harmony export */   "mD": () => (/* binding */ ceil),
/* harmony export */   "rU": () => (/* binding */ squaredSegmentDistance),
/* harmony export */   "t7": () => (/* binding */ lerp),
/* harmony export */   "uZ": () => (/* binding */ clamp)
/* harmony export */ });
/* unused harmony exports toDegrees, toFixed, round */
/**
 * @module ol/math
 */
/**
 * Takes a number and clamps it to within the provided bounds.
 * @param {number} value The input number.
 * @param {number} min The minimum value to return.
 * @param {number} max The maximum value to return.
 * @return {number} The input number if it is within bounds, or the nearest
 *     number within the bounds.
 */
function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
/**
 * Return the hyperbolic cosine of a given number. The method will use the
 * native `Math.cosh` function if it is available, otherwise the hyperbolic
 * cosine will be calculated via the reference implementation of the Mozilla
 * developer network.
 *
 * @param {number} x X.
 * @return {number} Hyperbolic cosine of x.
 */
var cosh = (function () {
    // Wrapped in a iife, to save the overhead of checking for the native
    // implementation on every invocation.
    var cosh;
    if ('cosh' in Math) {
        // The environment supports the native Math.cosh function, use it…
        cosh = Math.cosh;
    }
    else {
        // … else, use the reference implementation of MDN:
        cosh = function (x) {
            var y = /** @type {Math} */ (Math).exp(x);
            return (y + 1 / y) / 2;
        };
    }
    return cosh;
})();
/**
 * Return the base 2 logarithm of a given number. The method will use the
 * native `Math.log2` function if it is available, otherwise the base 2
 * logarithm will be calculated via the reference implementation of the
 * Mozilla developer network.
 *
 * @param {number} x X.
 * @return {number} Base 2 logarithm of x.
 */
var log2 = (function () {
    // Wrapped in a iife, to save the overhead of checking for the native
    // implementation on every invocation.
    var log2;
    if ('log2' in Math) {
        // The environment supports the native Math.log2 function, use it…
        log2 = Math.log2;
    }
    else {
        // … else, use the reference implementation of MDN:
        log2 = function (x) {
            return Math.log(x) * Math.LOG2E;
        };
    }
    return log2;
})();
/**
 * Returns the square of the closest distance between the point (x, y) and the
 * line segment (x1, y1) to (x2, y2).
 * @param {number} x X.
 * @param {number} y Y.
 * @param {number} x1 X1.
 * @param {number} y1 Y1.
 * @param {number} x2 X2.
 * @param {number} y2 Y2.
 * @return {number} Squared distance.
 */
function squaredSegmentDistance(x, y, x1, y1, x2, y2) {
    var dx = x2 - x1;
    var dy = y2 - y1;
    if (dx !== 0 || dy !== 0) {
        var t = ((x - x1) * dx + (y - y1) * dy) / (dx * dx + dy * dy);
        if (t > 1) {
            x1 = x2;
            y1 = y2;
        }
        else if (t > 0) {
            x1 += dx * t;
            y1 += dy * t;
        }
    }
    return squaredDistance(x, y, x1, y1);
}
/**
 * Returns the square of the distance between the points (x1, y1) and (x2, y2).
 * @param {number} x1 X1.
 * @param {number} y1 Y1.
 * @param {number} x2 X2.
 * @param {number} y2 Y2.
 * @return {number} Squared distance.
 */
function squaredDistance(x1, y1, x2, y2) {
    var dx = x2 - x1;
    var dy = y2 - y1;
    return dx * dx + dy * dy;
}
/**
 * Solves system of linear equations using Gaussian elimination method.
 *
 * @param {Array<Array<number>>} mat Augmented matrix (n x n + 1 column)
 *                                     in row-major order.
 * @return {Array<number>} The resulting vector.
 */
function solveLinearSystem(mat) {
    var n = mat.length;
    for (var i = 0; i < n; i++) {
        // Find max in the i-th column (ignoring i - 1 first rows)
        var maxRow = i;
        var maxEl = Math.abs(mat[i][i]);
        for (var r = i + 1; r < n; r++) {
            var absValue = Math.abs(mat[r][i]);
            if (absValue > maxEl) {
                maxEl = absValue;
                maxRow = r;
            }
        }
        if (maxEl === 0) {
            return null; // matrix is singular
        }
        // Swap max row with i-th (current) row
        var tmp = mat[maxRow];
        mat[maxRow] = mat[i];
        mat[i] = tmp;
        // Subtract the i-th row to make all the remaining rows 0 in the i-th column
        for (var j = i + 1; j < n; j++) {
            var coef = -mat[j][i] / mat[i][i];
            for (var k = i; k < n + 1; k++) {
                if (i == k) {
                    mat[j][k] = 0;
                }
                else {
                    mat[j][k] += coef * mat[i][k];
                }
            }
        }
    }
    // Solve Ax=b for upper triangular matrix A (mat)
    var x = new Array(n);
    for (var l = n - 1; l >= 0; l--) {
        x[l] = mat[l][n] / mat[l][l];
        for (var m = l - 1; m >= 0; m--) {
            mat[m][n] -= mat[m][l] * x[l];
        }
    }
    return x;
}
/**
 * Converts radians to to degrees.
 *
 * @param {number} angleInRadians Angle in radians.
 * @return {number} Angle in degrees.
 */
function toDegrees(angleInRadians) {
    return (angleInRadians * 180) / Math.PI;
}
/**
 * Converts degrees to radians.
 *
 * @param {number} angleInDegrees Angle in degrees.
 * @return {number} Angle in radians.
 */
function toRadians(angleInDegrees) {
    return (angleInDegrees * Math.PI) / 180;
}
/**
 * Returns the modulo of a / b, depending on the sign of b.
 *
 * @param {number} a Dividend.
 * @param {number} b Divisor.
 * @return {number} Modulo.
 */
function modulo(a, b) {
    var r = a % b;
    return r * b < 0 ? r + b : r;
}
/**
 * Calculates the linearly interpolated value of x between a and b.
 *
 * @param {number} a Number
 * @param {number} b Number
 * @param {number} x Value to be interpolated.
 * @return {number} Interpolated value.
 */
function lerp(a, b, x) {
    return a + x * (b - a);
}
/**
 * Returns a number with a limited number of decimal digits.
 * @param {number} n The input number.
 * @param {number} decimals The maximum number of decimal digits.
 * @return {number} The input number with a limited number of decimal digits.
 */
function toFixed(n, decimals) {
    var factor = Math.pow(10, decimals);
    return Math.round(n * factor) / factor;
}
/**
 * Rounds a number to the nearest integer value considering only the given number
 * of decimal digits (with rounding on the final digit).
 * @param {number} n The input number.
 * @param {number} decimals The maximum number of decimal digits.
 * @return {number} The nearest integer.
 */
function round(n, decimals) {
    return Math.round(toFixed(n, decimals));
}
/**
 * Rounds a number to the next smaller integer considering only the given number
 * of decimal digits (with rounding on the final digit).
 * @param {number} n The input number.
 * @param {number} decimals The maximum number of decimal digits.
 * @return {number} The next smaller integer.
 */
function floor(n, decimals) {
    return Math.floor(toFixed(n, decimals));
}
/**
 * Rounds a number to the next bigger integer considering only the given number
 * of decimal digits (with rounding on the final digit).
 * @param {number} n The input number.
 * @param {number} decimals The maximum number of decimal digits.
 * @return {number} The next bigger integer.
 */
function ceil(n, decimals) {
    return Math.ceil(toFixed(n, decimals));
}
//# sourceMappingURL=math.js.map

/***/ }),

/***/ 9374:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KX": () => (/* binding */ getValues),
/* harmony export */   "ZH": () => (/* binding */ clear),
/* harmony export */   "f0": () => (/* binding */ assign),
/* harmony export */   "xb": () => (/* binding */ isEmpty)
/* harmony export */ });
/**
 * @module ol/obj
 */
/**
 * Polyfill for Object.assign().  Assigns enumerable and own properties from
 * one or more source objects to a target object.
 * See https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign.
 *
 * @param {!Object} target The target object.
 * @param {...Object} var_sources The source object(s).
 * @return {!Object} The modified target object.
 */
var assign = typeof Object.assign === 'function'
    ? Object.assign
    : function (target, var_sources) {
        if (target === undefined || target === null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }
        var output = Object(target);
        for (var i = 1, ii = arguments.length; i < ii; ++i) {
            var source = arguments[i];
            if (source !== undefined && source !== null) {
                for (var key in source) {
                    if (source.hasOwnProperty(key)) {
                        output[key] = source[key];
                    }
                }
            }
        }
        return output;
    };
/**
 * Removes all properties from an object.
 * @param {Object} object The object to clear.
 */
function clear(object) {
    for (var property in object) {
        delete object[property];
    }
}
/**
 * Polyfill for Object.values().  Get an array of property values from an object.
 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
 *
 * @param {!Object<K,V>} object The object from which to get the values.
 * @return {!Array<V>} The property values.
 * @template K,V
 */
var getValues = typeof Object.values === 'function'
    ? Object.values
    : function (object) {
        var values = [];
        for (var property in object) {
            values.push(object[property]);
        }
        return values;
    };
/**
 * Determine if an object has any properties.
 * @param {Object} object The object to check.
 * @return {boolean} The object is empty.
 */
function isEmpty(object) {
    var property;
    for (property in object) {
        return false;
    }
    return !property;
}
//# sourceMappingURL=obj.js.map

/***/ }),

/***/ 1311:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Wm": () => (/* reexport */ Units/* METERS_PER_UNIT */.Wm),
  "UQ": () => (/* binding */ createProjection),
  "h_": () => (/* binding */ disableCoordinateWarning),
  "OP": () => (/* binding */ equivalent),
  "Vs": () => (/* binding */ fromUserCoordinate),
  "dY": () => (/* binding */ fromUserExtent),
  "U2": () => (/* binding */ proj_get),
  "_Q": () => (/* binding */ getPointResolution),
  "Ck": () => (/* binding */ getTransform),
  "Cs": () => (/* binding */ getUserProjection),
  "lO": () => (/* binding */ toUserCoordinate),
  "Fj": () => (/* binding */ toUserExtent),
  "vs": () => (/* binding */ transform)
});

// UNUSED EXPORTS: Projection, addCommon, addCoordinateTransforms, addEquivalentProjections, addEquivalentTransforms, addProjection, addProjections, clearAllProjections, clearUserProjection, cloneTransform, createSafeCoordinateTransform, createTransformFromCoordinateTransform, fromLonLat, fromUserResolution, getTransformFromProjections, identityTransform, setUserProjection, toLonLat, toUserResolution, transformExtent, transformWithProjections, useGeographic

// EXTERNAL MODULE: ./node_modules/ol/proj/Units.js
var Units = __webpack_require__(8375);
;// CONCATENATED MODULE: ./node_modules/ol/proj/Projection.js
/**
 * @module ol/proj/Projection
 */

/**
 * @typedef {Object} Options
 * @property {string} code The SRS identifier code, e.g. `EPSG:4326`.
 * @property {import("./Units.js").default|string} [units] Units. Required unless a
 * proj4 projection is defined for `code`.
 * @property {import("../extent.js").Extent} [extent] The validity extent for the SRS.
 * @property {string} [axisOrientation='enu'] The axis orientation as specified in Proj4.
 * @property {boolean} [global=false] Whether the projection is valid for the whole globe.
 * @property {number} [metersPerUnit] The meters per unit for the SRS.
 * If not provided, the `units` are used to get the meters per unit from the {@link module:ol/proj/Units~METERS_PER_UNIT}
 * lookup table.
 * @property {import("../extent.js").Extent} [worldExtent] The world extent for the SRS.
 * @property {function(number, import("../coordinate.js").Coordinate):number} [getPointResolution]
 * Function to determine resolution at a point. The function is called with a
 * `number` view resolution and a {@link module:ol/coordinate~Coordinate Coordinate} as arguments, and returns
 * the `number` resolution in projection units at the passed coordinate. If this is `undefined`,
 * the default {@link module:ol/proj.getPointResolution getPointResolution()} function will be used.
 */
/**
 * @classdesc
 * Projection definition class. One of these is created for each projection
 * supported in the application and stored in the {@link module:ol/proj} namespace.
 * You can use these in applications, but this is not required, as API params
 * and options use {@link module:ol/proj~ProjectionLike} which means the simple string
 * code will suffice.
 *
 * You can use {@link module:ol/proj.get} to retrieve the object for a particular
 * projection.
 *
 * The library includes definitions for `EPSG:4326` and `EPSG:3857`, together
 * with the following aliases:
 * * `EPSG:4326`: CRS:84, urn:ogc:def:crs:EPSG:6.6:4326,
 *     urn:ogc:def:crs:OGC:1.3:CRS84, urn:ogc:def:crs:OGC:2:84,
 *     http://www.opengis.net/gml/srs/epsg.xml#4326,
 *     urn:x-ogc:def:crs:EPSG:4326
 * * `EPSG:3857`: EPSG:102100, EPSG:102113, EPSG:900913,
 *     urn:ogc:def:crs:EPSG:6.18:3:3857,
 *     http://www.opengis.net/gml/srs/epsg.xml#3857
 *
 * If you use [proj4js](https://github.com/proj4js/proj4js), aliases can
 * be added using `proj4.defs()`. After all required projection definitions are
 * added, call the {@link module:ol/proj/proj4.register} function.
 *
 * @api
 */
var Projection = /** @class */ (function () {
    /**
     * @param {Options} options Projection options.
     */
    function Projection(options) {
        /**
         * @private
         * @type {string}
         */
        this.code_ = options.code;
        /**
         * Units of projected coordinates. When set to `TILE_PIXELS`, a
         * `this.extent_` and `this.worldExtent_` must be configured properly for each
         * tile.
         * @private
         * @type {import("./Units.js").default}
         */
        this.units_ = /** @type {import("./Units.js").default} */ (options.units);
        /**
         * Validity extent of the projection in projected coordinates. For projections
         * with `TILE_PIXELS` units, this is the extent of the tile in
         * tile pixel space.
         * @private
         * @type {import("../extent.js").Extent}
         */
        this.extent_ = options.extent !== undefined ? options.extent : null;
        /**
         * Extent of the world in EPSG:4326. For projections with
         * `TILE_PIXELS` units, this is the extent of the tile in
         * projected coordinate space.
         * @private
         * @type {import("../extent.js").Extent}
         */
        this.worldExtent_ =
            options.worldExtent !== undefined ? options.worldExtent : null;
        /**
         * @private
         * @type {string}
         */
        this.axisOrientation_ =
            options.axisOrientation !== undefined ? options.axisOrientation : 'enu';
        /**
         * @private
         * @type {boolean}
         */
        this.global_ = options.global !== undefined ? options.global : false;
        /**
         * @private
         * @type {boolean}
         */
        this.canWrapX_ = !!(this.global_ && this.extent_);
        /**
         * @private
         * @type {function(number, import("../coordinate.js").Coordinate):number|undefined}
         */
        this.getPointResolutionFunc_ = options.getPointResolution;
        /**
         * @private
         * @type {import("../tilegrid/TileGrid.js").default}
         */
        this.defaultTileGrid_ = null;
        /**
         * @private
         * @type {number|undefined}
         */
        this.metersPerUnit_ = options.metersPerUnit;
    }
    /**
     * @return {boolean} The projection is suitable for wrapping the x-axis
     */
    Projection.prototype.canWrapX = function () {
        return this.canWrapX_;
    };
    /**
     * Get the code for this projection, e.g. 'EPSG:4326'.
     * @return {string} Code.
     * @api
     */
    Projection.prototype.getCode = function () {
        return this.code_;
    };
    /**
     * Get the validity extent for this projection.
     * @return {import("../extent.js").Extent} Extent.
     * @api
     */
    Projection.prototype.getExtent = function () {
        return this.extent_;
    };
    /**
     * Get the units of this projection.
     * @return {import("./Units.js").default} Units.
     * @api
     */
    Projection.prototype.getUnits = function () {
        return this.units_;
    };
    /**
     * Get the amount of meters per unit of this projection.  If the projection is
     * not configured with `metersPerUnit` or a units identifier, the return is
     * `undefined`.
     * @return {number|undefined} Meters.
     * @api
     */
    Projection.prototype.getMetersPerUnit = function () {
        return this.metersPerUnit_ || Units/* METERS_PER_UNIT */.Wm[this.units_];
    };
    /**
     * Get the world extent for this projection.
     * @return {import("../extent.js").Extent} Extent.
     * @api
     */
    Projection.prototype.getWorldExtent = function () {
        return this.worldExtent_;
    };
    /**
     * Get the axis orientation of this projection.
     * Example values are:
     * enu - the default easting, northing, elevation.
     * neu - northing, easting, up - useful for "lat/long" geographic coordinates,
     *     or south orientated transverse mercator.
     * wnu - westing, northing, up - some planetary coordinate systems have
     *     "west positive" coordinate systems
     * @return {string} Axis orientation.
     * @api
     */
    Projection.prototype.getAxisOrientation = function () {
        return this.axisOrientation_;
    };
    /**
     * Is this projection a global projection which spans the whole world?
     * @return {boolean} Whether the projection is global.
     * @api
     */
    Projection.prototype.isGlobal = function () {
        return this.global_;
    };
    /**
     * Set if the projection is a global projection which spans the whole world
     * @param {boolean} global Whether the projection is global.
     * @api
     */
    Projection.prototype.setGlobal = function (global) {
        this.global_ = global;
        this.canWrapX_ = !!(global && this.extent_);
    };
    /**
     * @return {import("../tilegrid/TileGrid.js").default} The default tile grid.
     */
    Projection.prototype.getDefaultTileGrid = function () {
        return this.defaultTileGrid_;
    };
    /**
     * @param {import("../tilegrid/TileGrid.js").default} tileGrid The default tile grid.
     */
    Projection.prototype.setDefaultTileGrid = function (tileGrid) {
        this.defaultTileGrid_ = tileGrid;
    };
    /**
     * Set the validity extent for this projection.
     * @param {import("../extent.js").Extent} extent Extent.
     * @api
     */
    Projection.prototype.setExtent = function (extent) {
        this.extent_ = extent;
        this.canWrapX_ = !!(this.global_ && extent);
    };
    /**
     * Set the world extent for this projection.
     * @param {import("../extent.js").Extent} worldExtent World extent
     *     [minlon, minlat, maxlon, maxlat].
     * @api
     */
    Projection.prototype.setWorldExtent = function (worldExtent) {
        this.worldExtent_ = worldExtent;
    };
    /**
     * Set the getPointResolution function (see {@link module:ol/proj.getPointResolution}
     * for this projection.
     * @param {function(number, import("../coordinate.js").Coordinate):number} func Function
     * @api
     */
    Projection.prototype.setGetPointResolution = function (func) {
        this.getPointResolutionFunc_ = func;
    };
    /**
     * Get the custom point resolution function for this projection (if set).
     * @return {function(number, import("../coordinate.js").Coordinate):number|undefined} The custom point
     * resolution function (if set).
     */
    Projection.prototype.getPointResolutionFunc = function () {
        return this.getPointResolutionFunc_;
    };
    return Projection;
}());
/* harmony default export */ const proj_Projection = (Projection);
//# sourceMappingURL=Projection.js.map
// EXTERNAL MODULE: ./node_modules/ol/math.js
var math = __webpack_require__(3983);
;// CONCATENATED MODULE: ./node_modules/ol/proj/epsg3857.js
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @module ol/proj/epsg3857
 */



/**
 * Radius of WGS84 sphere
 *
 * @const
 * @type {number}
 */
var RADIUS = 6378137;
/**
 * @const
 * @type {number}
 */
var HALF_SIZE = Math.PI * RADIUS;
/**
 * @const
 * @type {import("../extent.js").Extent}
 */
var EXTENT = [-HALF_SIZE, -HALF_SIZE, HALF_SIZE, HALF_SIZE];
/**
 * @const
 * @type {import("../extent.js").Extent}
 */
var WORLD_EXTENT = [-180, -85, 180, 85];
/**
 * Maximum safe value in y direction
 * @const
 * @type {number}
 */
var MAX_SAFE_Y = RADIUS * Math.log(Math.tan(Math.PI / 2));
/**
 * @classdesc
 * Projection object for web/spherical Mercator (EPSG:3857).
 */
var EPSG3857Projection = /** @class */ (function (_super) {
    __extends(EPSG3857Projection, _super);
    /**
     * @param {string} code Code.
     */
    function EPSG3857Projection(code) {
        return _super.call(this, {
            code: code,
            units: Units/* default.METERS */.ZP.METERS,
            extent: EXTENT,
            global: true,
            worldExtent: WORLD_EXTENT,
            getPointResolution: function (resolution, point) {
                return resolution / (0,math/* cosh */.f9)(point[1] / RADIUS);
            },
        }) || this;
    }
    return EPSG3857Projection;
}(proj_Projection));
/**
 * Projections equal to EPSG:3857.
 *
 * @const
 * @type {Array<import("./Projection.js").default>}
 */
var PROJECTIONS = [
    new EPSG3857Projection('EPSG:3857'),
    new EPSG3857Projection('EPSG:102100'),
    new EPSG3857Projection('EPSG:102113'),
    new EPSG3857Projection('EPSG:900913'),
    new EPSG3857Projection('http://www.opengis.net/def/crs/EPSG/0/3857'),
    new EPSG3857Projection('http://www.opengis.net/gml/srs/epsg.xml#3857'),
];
/**
 * Transformation from EPSG:4326 to EPSG:3857.
 *
 * @param {Array<number>} input Input array of coordinate values.
 * @param {Array<number>} [opt_output] Output array of coordinate values.
 * @param {number} [opt_dimension] Dimension (default is `2`).
 * @return {Array<number>} Output array of coordinate values.
 */
function fromEPSG4326(input, opt_output, opt_dimension) {
    var length = input.length;
    var dimension = opt_dimension > 1 ? opt_dimension : 2;
    var output = opt_output;
    if (output === undefined) {
        if (dimension > 2) {
            // preserve values beyond second dimension
            output = input.slice();
        }
        else {
            output = new Array(length);
        }
    }
    for (var i = 0; i < length; i += dimension) {
        output[i] = (HALF_SIZE * input[i]) / 180;
        var y = RADIUS * Math.log(Math.tan((Math.PI * (+input[i + 1] + 90)) / 360));
        if (y > MAX_SAFE_Y) {
            y = MAX_SAFE_Y;
        }
        else if (y < -MAX_SAFE_Y) {
            y = -MAX_SAFE_Y;
        }
        output[i + 1] = y;
    }
    return output;
}
/**
 * Transformation from EPSG:3857 to EPSG:4326.
 *
 * @param {Array<number>} input Input array of coordinate values.
 * @param {Array<number>} [opt_output] Output array of coordinate values.
 * @param {number} [opt_dimension] Dimension (default is `2`).
 * @return {Array<number>} Output array of coordinate values.
 */
function toEPSG4326(input, opt_output, opt_dimension) {
    var length = input.length;
    var dimension = opt_dimension > 1 ? opt_dimension : 2;
    var output = opt_output;
    if (output === undefined) {
        if (dimension > 2) {
            // preserve values beyond second dimension
            output = input.slice();
        }
        else {
            output = new Array(length);
        }
    }
    for (var i = 0; i < length; i += dimension) {
        output[i] = (180 * input[i]) / HALF_SIZE;
        output[i + 1] =
            (360 * Math.atan(Math.exp(input[i + 1] / RADIUS))) / Math.PI - 90;
    }
    return output;
}
//# sourceMappingURL=epsg3857.js.map
;// CONCATENATED MODULE: ./node_modules/ol/proj/epsg4326.js
var epsg4326_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @module ol/proj/epsg4326
 */


/**
 * Semi-major radius of the WGS84 ellipsoid.
 *
 * @const
 * @type {number}
 */
var epsg4326_RADIUS = 6378137;
/**
 * Extent of the EPSG:4326 projection which is the whole world.
 *
 * @const
 * @type {import("../extent.js").Extent}
 */
var epsg4326_EXTENT = [-180, -90, 180, 90];
/**
 * @const
 * @type {number}
 */
var epsg4326_METERS_PER_UNIT = (Math.PI * epsg4326_RADIUS) / 180;
/**
 * @classdesc
 * Projection object for WGS84 geographic coordinates (EPSG:4326).
 *
 * Note that OpenLayers does not strictly comply with the EPSG definition.
 * The EPSG registry defines 4326 as a CRS for Latitude,Longitude (y,x).
 * OpenLayers treats EPSG:4326 as a pseudo-projection, with x,y coordinates.
 */
var EPSG4326Projection = /** @class */ (function (_super) {
    epsg4326_extends(EPSG4326Projection, _super);
    /**
     * @param {string} code Code.
     * @param {string} [opt_axisOrientation] Axis orientation.
     */
    function EPSG4326Projection(code, opt_axisOrientation) {
        return _super.call(this, {
            code: code,
            units: Units/* default.DEGREES */.ZP.DEGREES,
            extent: epsg4326_EXTENT,
            axisOrientation: opt_axisOrientation,
            global: true,
            metersPerUnit: epsg4326_METERS_PER_UNIT,
            worldExtent: epsg4326_EXTENT,
        }) || this;
    }
    return EPSG4326Projection;
}(proj_Projection));
/**
 * Projections equal to EPSG:4326.
 *
 * @const
 * @type {Array<import("./Projection.js").default>}
 */
var epsg4326_PROJECTIONS = [
    new EPSG4326Projection('CRS:84'),
    new EPSG4326Projection('EPSG:4326', 'neu'),
    new EPSG4326Projection('urn:ogc:def:crs:OGC:1.3:CRS84'),
    new EPSG4326Projection('urn:ogc:def:crs:OGC:2:84'),
    new EPSG4326Projection('http://www.opengis.net/def/crs/OGC/1.3/CRS84'),
    new EPSG4326Projection('http://www.opengis.net/gml/srs/epsg.xml#4326', 'neu'),
    new EPSG4326Projection('http://www.opengis.net/def/crs/EPSG/0/4326', 'neu'),
];
//# sourceMappingURL=epsg4326.js.map
;// CONCATENATED MODULE: ./node_modules/ol/proj/projections.js
/**
 * @module ol/proj/projections
 */
/**
 * @type {Object<string, import("./Projection.js").default>}
 */
var cache = {};
/**
 * Clear the projections cache.
 */
function clear() {
    cache = {};
}
/**
 * Get a cached projection by code.
 * @param {string} code The code for the projection.
 * @return {import("./Projection.js").default} The projection (if cached).
 */
function get(code) {
    return (cache[code] ||
        cache[code.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/, 'EPSG:$3')] ||
        null);
}
/**
 * Add a projection to the cache.
 * @param {string} code The projection code.
 * @param {import("./Projection.js").default} projection The projection to cache.
 */
function add(code, projection) {
    cache[code] = projection;
}
//# sourceMappingURL=projections.js.map
;// CONCATENATED MODULE: ./node_modules/ol/proj/transforms.js
/**
 * @module ol/proj/transforms
 */

/**
 * @private
 * @type {!Object<string, Object<string, import("../proj.js").TransformFunction>>}
 */
var transforms = {};
/**
 * Clear the transform cache.
 */
function transforms_clear() {
    transforms = {};
}
/**
 * Registers a conversion function to convert coordinates from the source
 * projection to the destination projection.
 *
 * @param {import("./Projection.js").default} source Source.
 * @param {import("./Projection.js").default} destination Destination.
 * @param {import("../proj.js").TransformFunction} transformFn Transform.
 */
function transforms_add(source, destination, transformFn) {
    var sourceCode = source.getCode();
    var destinationCode = destination.getCode();
    if (!(sourceCode in transforms)) {
        transforms[sourceCode] = {};
    }
    transforms[sourceCode][destinationCode] = transformFn;
}
/**
 * Unregisters the conversion function to convert coordinates from the source
 * projection to the destination projection.  This method is used to clean up
 * cached transforms during testing.
 *
 * @param {import("./Projection.js").default} source Source projection.
 * @param {import("./Projection.js").default} destination Destination projection.
 * @return {import("../proj.js").TransformFunction} transformFn The unregistered transform.
 */
function remove(source, destination) {
    var sourceCode = source.getCode();
    var destinationCode = destination.getCode();
    var transform = transforms[sourceCode][destinationCode];
    delete transforms[sourceCode][destinationCode];
    if (isEmpty(transforms[sourceCode])) {
        delete transforms[sourceCode];
    }
    return transform;
}
/**
 * Get a transform given a source code and a destination code.
 * @param {string} sourceCode The code for the source projection.
 * @param {string} destinationCode The code for the destination projection.
 * @return {import("../proj.js").TransformFunction|undefined} The transform function (if found).
 */
function transforms_get(sourceCode, destinationCode) {
    var transform;
    if (sourceCode in transforms && destinationCode in transforms[sourceCode]) {
        transform = transforms[sourceCode][destinationCode];
    }
    return transform;
}
//# sourceMappingURL=transforms.js.map
// EXTERNAL MODULE: ./node_modules/ol/extent.js + 1 modules
var ol_extent = __webpack_require__(2833);
// EXTERNAL MODULE: ./node_modules/ol/coordinate.js
var ol_coordinate = __webpack_require__(1900);
;// CONCATENATED MODULE: ./node_modules/ol/sphere.js
/**
 * @module ol/sphere
 */

/**
 * Object literal with options for the {@link getLength} or {@link getArea}
 * functions.
 * @typedef {Object} SphereMetricOptions
 * @property {import("./proj.js").ProjectionLike} [projection='EPSG:3857']
 * Projection of the  geometry.  By default, the geometry is assumed to be in
 * Web Mercator.
 * @property {number} [radius=6371008.8] Sphere radius.  By default, the
 * [mean Earth radius](https://en.wikipedia.org/wiki/Earth_radius#Mean_radius)
 * for the WGS84 ellipsoid is used.
 */
/**
 * The mean Earth radius (1/3 * (2a + b)) for the WGS84 ellipsoid.
 * https://en.wikipedia.org/wiki/Earth_radius#Mean_radius
 * @type {number}
 */
var DEFAULT_RADIUS = 6371008.8;
/**
 * Get the great circle distance (in meters) between two geographic coordinates.
 * @param {Array} c1 Starting coordinate.
 * @param {Array} c2 Ending coordinate.
 * @param {number} [opt_radius] The sphere radius to use.  Defaults to the Earth's
 *     mean radius using the WGS84 ellipsoid.
 * @return {number} The great circle distance between the points (in meters).
 * @api
 */
function getDistance(c1, c2, opt_radius) {
    var radius = opt_radius || DEFAULT_RADIUS;
    var lat1 = (0,math/* toRadians */.Yr)(c1[1]);
    var lat2 = (0,math/* toRadians */.Yr)(c2[1]);
    var deltaLatBy2 = (lat2 - lat1) / 2;
    var deltaLonBy2 = (0,math/* toRadians */.Yr)(c2[0] - c1[0]) / 2;
    var a = Math.sin(deltaLatBy2) * Math.sin(deltaLatBy2) +
        Math.sin(deltaLonBy2) *
            Math.sin(deltaLonBy2) *
            Math.cos(lat1) *
            Math.cos(lat2);
    return 2 * radius * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}
/**
 * Get the cumulative great circle length of linestring coordinates (geographic).
 * @param {Array} coordinates Linestring coordinates.
 * @param {number} radius The sphere radius to use.
 * @return {number} The length (in meters).
 */
function getLengthInternal(coordinates, radius) {
    var length = 0;
    for (var i = 0, ii = coordinates.length; i < ii - 1; ++i) {
        length += getDistance(coordinates[i], coordinates[i + 1], radius);
    }
    return length;
}
/**
 * Get the spherical length of a geometry.  This length is the sum of the
 * great circle distances between coordinates.  For polygons, the length is
 * the sum of all rings.  For points, the length is zero.  For multi-part
 * geometries, the length is the sum of the length of each part.
 * @param {import("./geom/Geometry.js").default} geometry A geometry.
 * @param {SphereMetricOptions} [opt_options] Options for the
 * length calculation.  By default, geometries are assumed to be in 'EPSG:3857'.
 * You can change this by providing a `projection` option.
 * @return {number} The spherical length (in meters).
 * @api
 */
function getLength(geometry, opt_options) {
    var options = opt_options || {};
    var radius = options.radius || DEFAULT_RADIUS;
    var projection = options.projection || 'EPSG:3857';
    var type = geometry.getType();
    if (type !== 'GeometryCollection') {
        geometry = geometry.clone().transform(projection, 'EPSG:4326');
    }
    var length = 0;
    var coordinates, coords, i, ii, j, jj;
    switch (type) {
        case 'Point':
        case 'MultiPoint': {
            break;
        }
        case 'LineString':
        case 'LinearRing': {
            coordinates = /** @type {import("./geom/SimpleGeometry.js").default} */ (geometry).getCoordinates();
            length = getLengthInternal(coordinates, radius);
            break;
        }
        case 'MultiLineString':
        case 'Polygon': {
            coordinates = /** @type {import("./geom/SimpleGeometry.js").default} */ (geometry).getCoordinates();
            for (i = 0, ii = coordinates.length; i < ii; ++i) {
                length += getLengthInternal(coordinates[i], radius);
            }
            break;
        }
        case 'MultiPolygon': {
            coordinates = /** @type {import("./geom/SimpleGeometry.js").default} */ (geometry).getCoordinates();
            for (i = 0, ii = coordinates.length; i < ii; ++i) {
                coords = coordinates[i];
                for (j = 0, jj = coords.length; j < jj; ++j) {
                    length += getLengthInternal(coords[j], radius);
                }
            }
            break;
        }
        case 'GeometryCollection': {
            var geometries = 
            /** @type {import("./geom/GeometryCollection.js").default} */ (geometry).getGeometries();
            for (i = 0, ii = geometries.length; i < ii; ++i) {
                length += getLength(geometries[i], opt_options);
            }
            break;
        }
        default: {
            throw new Error('Unsupported geometry type: ' + type);
        }
    }
    return length;
}
/**
 * Returns the spherical area for a list of coordinates.
 *
 * [Reference](https://trs.jpl.nasa.gov/handle/2014/40409)
 * Robert. G. Chamberlain and William H. Duquette, "Some Algorithms for
 * Polygons on a Sphere", JPL Publication 07-03, Jet Propulsion
 * Laboratory, Pasadena, CA, June 2007
 *
 * @param {Array<import("./coordinate.js").Coordinate>} coordinates List of coordinates of a linear
 * ring. If the ring is oriented clockwise, the area will be positive,
 * otherwise it will be negative.
 * @param {number} radius The sphere radius.
 * @return {number} Area (in square meters).
 */
function getAreaInternal(coordinates, radius) {
    var area = 0;
    var len = coordinates.length;
    var x1 = coordinates[len - 1][0];
    var y1 = coordinates[len - 1][1];
    for (var i = 0; i < len; i++) {
        var x2 = coordinates[i][0];
        var y2 = coordinates[i][1];
        area +=
            toRadians(x2 - x1) *
                (2 + Math.sin(toRadians(y1)) + Math.sin(toRadians(y2)));
        x1 = x2;
        y1 = y2;
    }
    return (area * radius * radius) / 2.0;
}
/**
 * Get the spherical area of a geometry.  This is the area (in meters) assuming
 * that polygon edges are segments of great circles on a sphere.
 * @param {import("./geom/Geometry.js").default} geometry A geometry.
 * @param {SphereMetricOptions} [opt_options] Options for the area
 *     calculation.  By default, geometries are assumed to be in 'EPSG:3857'.
 *     You can change this by providing a `projection` option.
 * @return {number} The spherical area (in square meters).
 * @api
 */
function getArea(geometry, opt_options) {
    var options = opt_options || {};
    var radius = options.radius || DEFAULT_RADIUS;
    var projection = options.projection || 'EPSG:3857';
    var type = geometry.getType();
    if (type !== 'GeometryCollection') {
        geometry = geometry.clone().transform(projection, 'EPSG:4326');
    }
    var area = 0;
    var coordinates, coords, i, ii, j, jj;
    switch (type) {
        case 'Point':
        case 'MultiPoint':
        case 'LineString':
        case 'MultiLineString':
        case 'LinearRing': {
            break;
        }
        case 'Polygon': {
            coordinates = /** @type {import("./geom/Polygon.js").default} */ (geometry).getCoordinates();
            area = Math.abs(getAreaInternal(coordinates[0], radius));
            for (i = 1, ii = coordinates.length; i < ii; ++i) {
                area -= Math.abs(getAreaInternal(coordinates[i], radius));
            }
            break;
        }
        case 'MultiPolygon': {
            coordinates = /** @type {import("./geom/SimpleGeometry.js").default} */ (geometry).getCoordinates();
            for (i = 0, ii = coordinates.length; i < ii; ++i) {
                coords = coordinates[i];
                area += Math.abs(getAreaInternal(coords[0], radius));
                for (j = 1, jj = coords.length; j < jj; ++j) {
                    area -= Math.abs(getAreaInternal(coords[j], radius));
                }
            }
            break;
        }
        case 'GeometryCollection': {
            var geometries = 
            /** @type {import("./geom/GeometryCollection.js").default} */ (geometry).getGeometries();
            for (i = 0, ii = geometries.length; i < ii; ++i) {
                area += getArea(geometries[i], opt_options);
            }
            break;
        }
        default: {
            throw new Error('Unsupported geometry type: ' + type);
        }
    }
    return area;
}
/**
 * Returns the coordinate at the given distance and bearing from `c1`.
 *
 * @param {import("./coordinate.js").Coordinate} c1 The origin point (`[lon, lat]` in degrees).
 * @param {number} distance The great-circle distance between the origin
 *     point and the target point.
 * @param {number} bearing The bearing (in radians).
 * @param {number} [opt_radius] The sphere radius to use.  Defaults to the Earth's
 *     mean radius using the WGS84 ellipsoid.
 * @return {import("./coordinate.js").Coordinate} The target point.
 */
function offset(c1, distance, bearing, opt_radius) {
    var radius = opt_radius || DEFAULT_RADIUS;
    var lat1 = toRadians(c1[1]);
    var lon1 = toRadians(c1[0]);
    var dByR = distance / radius;
    var lat = Math.asin(Math.sin(lat1) * Math.cos(dByR) +
        Math.cos(lat1) * Math.sin(dByR) * Math.cos(bearing));
    var lon = lon1 +
        Math.atan2(Math.sin(bearing) * Math.sin(dByR) * Math.cos(lat1), Math.cos(dByR) - Math.sin(lat1) * Math.sin(lat));
    return [toDegrees(lon), toDegrees(lat)];
}
//# sourceMappingURL=sphere.js.map
;// CONCATENATED MODULE: ./node_modules/ol/proj.js
/**
 * @module ol/proj
 */
/**
 * The ol/proj module stores:
 * * a list of {@link module:ol/proj/Projection~Projection}
 * objects, one for each projection supported by the application
 * * a list of transform functions needed to convert coordinates in one projection
 * into another.
 *
 * The static functions are the methods used to maintain these.
 * Each transform function can handle not only simple coordinate pairs, but also
 * large arrays of coordinates such as vector geometries.
 *
 * When loaded, the library adds projection objects for EPSG:4326 (WGS84
 * geographic coordinates) and EPSG:3857 (Web or Spherical Mercator, as used
 * for example by Bing Maps or OpenStreetMap), together with the relevant
 * transform functions.
 *
 * Additional transforms may be added by using the http://proj4js.org/
 * library (version 2.2 or later). You can use the full build supplied by
 * Proj4js, or create a custom build to support those projections you need; see
 * the Proj4js website for how to do this. You also need the Proj4js definitions
 * for the required projections. These definitions can be obtained from
 * https://epsg.io/, and are a JS function, so can be loaded in a script
 * tag (as in the examples) or pasted into your application.
 *
 * After all required projection definitions are added to proj4's registry (by
 * using `proj4.defs()`), simply call `register(proj4)` from the `ol/proj/proj4`
 * package. Existing transforms are not changed by this function. See
 * examples/wms-image-custom-proj for an example of this.
 *
 * Additional projection definitions can be registered with `proj4.defs()` any
 * time. Just make sure to call `register(proj4)` again; for example, with user-supplied data where you don't
 * know in advance what projections are needed, you can initially load minimal
 * support and then load whichever are requested.
 *
 * Note that Proj4js does not support projection extents. If you want to add
 * one for creating default tile grids, you can add it after the Projection
 * object has been created with `setExtent`, for example,
 * `get('EPSG:1234').setExtent(extent)`.
 *
 * In addition to Proj4js support, any transform functions can be added with
 * {@link module:ol/proj.addCoordinateTransforms}. To use this, you must first create
 * a {@link module:ol/proj/Projection~Projection} object for the new projection and add it with
 * {@link module:ol/proj.addProjection}. You can then add the forward and inverse
 * functions with {@link module:ol/proj.addCoordinateTransforms}. See
 * examples/wms-custom-proj for an example of this.
 *
 * Note that if no transforms are needed and you only need to define the
 * projection, just add a {@link module:ol/proj/Projection~Projection} with
 * {@link module:ol/proj.addProjection}. See examples/wms-no-proj for an example of
 * this.
 */










/**
 * A projection as {@link module:ol/proj/Projection~Projection}, SRS identifier
 * string or undefined.
 * @typedef {Projection|string|undefined} ProjectionLike
 * @api
 */
/**
 * A transform function accepts an array of input coordinate values, an optional
 * output array, and an optional dimension (default should be 2).  The function
 * transforms the input coordinate values, populates the output array, and
 * returns the output array.
 *
 * @typedef {function(Array<number>, Array<number>=, number=): Array<number>} TransformFunction
 * @api
 */


var showCoordinateWarning = true;
/**
 * @param {boolean} [opt_disable = true] Disable console info about `useGeographic()`
 */
function disableCoordinateWarning(opt_disable) {
    var hide = opt_disable === undefined ? true : opt_disable;
    showCoordinateWarning = !hide;
}
/**
 * @param {Array<number>} input Input coordinate array.
 * @param {Array<number>} [opt_output] Output array of coordinate values.
 * @param {number} [opt_dimension] Dimension.
 * @return {Array<number>} Output coordinate array (new array, same coordinate
 *     values).
 */
function cloneTransform(input, opt_output, opt_dimension) {
    var output;
    if (opt_output !== undefined) {
        for (var i = 0, ii = input.length; i < ii; ++i) {
            opt_output[i] = input[i];
        }
        output = opt_output;
    }
    else {
        output = input.slice();
    }
    return output;
}
/**
 * @param {Array<number>} input Input coordinate array.
 * @param {Array<number>} [opt_output] Output array of coordinate values.
 * @param {number} [opt_dimension] Dimension.
 * @return {Array<number>} Input coordinate array (same array as input).
 */
function identityTransform(input, opt_output, opt_dimension) {
    if (opt_output !== undefined && input !== opt_output) {
        for (var i = 0, ii = input.length; i < ii; ++i) {
            opt_output[i] = input[i];
        }
        input = opt_output;
    }
    return input;
}
/**
 * Add a Projection object to the list of supported projections that can be
 * looked up by their code.
 *
 * @param {Projection} projection Projection instance.
 * @api
 */
function addProjection(projection) {
    add(projection.getCode(), projection);
    transforms_add(projection, projection, cloneTransform);
}
/**
 * @param {Array<Projection>} projections Projections.
 */
function addProjections(projections) {
    projections.forEach(addProjection);
}
/**
 * Fetches a Projection object for the code specified.
 *
 * @param {ProjectionLike} projectionLike Either a code string which is
 *     a combination of authority and identifier such as "EPSG:4326", or an
 *     existing projection object, or undefined.
 * @return {Projection|null} Projection object, or null if not in list.
 * @api
 */
function proj_get(projectionLike) {
    return typeof projectionLike === 'string'
        ? get(/** @type {string} */ (projectionLike))
        : /** @type {Projection} */ (projectionLike) || null;
}
/**
 * Get the resolution of the point in degrees or distance units.
 * For projections with degrees as the unit this will simply return the
 * provided resolution. For other projections the point resolution is
 * by default estimated by transforming the `point` pixel to EPSG:4326,
 * measuring its width and height on the normal sphere,
 * and taking the average of the width and height.
 * A custom function can be provided for a specific projection, either
 * by setting the `getPointResolution` option in the
 * {@link module:ol/proj/Projection~Projection} constructor or by using
 * {@link module:ol/proj/Projection~Projection#setGetPointResolution} to change an existing
 * projection object.
 * @param {ProjectionLike} projection The projection.
 * @param {number} resolution Nominal resolution in projection units.
 * @param {import("./coordinate.js").Coordinate} point Point to find adjusted resolution at.
 * @param {import("./proj/Units.js").default} [opt_units] Units to get the point resolution in.
 * Default is the projection's units.
 * @return {number} Point resolution.
 * @api
 */
function getPointResolution(projection, resolution, point, opt_units) {
    projection = proj_get(projection);
    var pointResolution;
    var getter = projection.getPointResolutionFunc();
    if (getter) {
        pointResolution = getter(resolution, point);
        if (opt_units && opt_units !== projection.getUnits()) {
            var metersPerUnit = projection.getMetersPerUnit();
            if (metersPerUnit) {
                pointResolution =
                    (pointResolution * metersPerUnit) / Units/* METERS_PER_UNIT */.Wm[opt_units];
            }
        }
    }
    else {
        var units = projection.getUnits();
        if ((units == Units/* default.DEGREES */.ZP.DEGREES && !opt_units) || opt_units == Units/* default.DEGREES */.ZP.DEGREES) {
            pointResolution = resolution;
        }
        else {
            // Estimate point resolution by transforming the center pixel to EPSG:4326,
            // measuring its width and height on the normal sphere, and taking the
            // average of the width and height.
            var toEPSG4326_1 = getTransformFromProjections(projection, proj_get('EPSG:4326'));
            if (toEPSG4326_1 === identityTransform && units !== Units/* default.DEGREES */.ZP.DEGREES) {
                // no transform is available
                pointResolution = resolution * projection.getMetersPerUnit();
            }
            else {
                var vertices = [
                    point[0] - resolution / 2,
                    point[1],
                    point[0] + resolution / 2,
                    point[1],
                    point[0],
                    point[1] - resolution / 2,
                    point[0],
                    point[1] + resolution / 2,
                ];
                vertices = toEPSG4326_1(vertices, vertices, 2);
                var width = getDistance(vertices.slice(0, 2), vertices.slice(2, 4));
                var height = getDistance(vertices.slice(4, 6), vertices.slice(6, 8));
                pointResolution = (width + height) / 2;
            }
            var metersPerUnit = opt_units
                ? Units/* METERS_PER_UNIT */.Wm[opt_units]
                : projection.getMetersPerUnit();
            if (metersPerUnit !== undefined) {
                pointResolution /= metersPerUnit;
            }
        }
    }
    return pointResolution;
}
/**
 * Registers transformation functions that don't alter coordinates. Those allow
 * to transform between projections with equal meaning.
 *
 * @param {Array<Projection>} projections Projections.
 * @api
 */
function addEquivalentProjections(projections) {
    addProjections(projections);
    projections.forEach(function (source) {
        projections.forEach(function (destination) {
            if (source !== destination) {
                transforms_add(source, destination, cloneTransform);
            }
        });
    });
}
/**
 * Registers transformation functions to convert coordinates in any projection
 * in projection1 to any projection in projection2.
 *
 * @param {Array<Projection>} projections1 Projections with equal
 *     meaning.
 * @param {Array<Projection>} projections2 Projections with equal
 *     meaning.
 * @param {TransformFunction} forwardTransform Transformation from any
 *   projection in projection1 to any projection in projection2.
 * @param {TransformFunction} inverseTransform Transform from any projection
 *   in projection2 to any projection in projection1..
 */
function addEquivalentTransforms(projections1, projections2, forwardTransform, inverseTransform) {
    projections1.forEach(function (projection1) {
        projections2.forEach(function (projection2) {
            transforms_add(projection1, projection2, forwardTransform);
            transforms_add(projection2, projection1, inverseTransform);
        });
    });
}
/**
 * Clear all cached projections and transforms.
 */
function clearAllProjections() {
    clearProj();
    clearTransformFuncs();
}
/**
 * @param {Projection|string|undefined} projection Projection.
 * @param {string} defaultCode Default code.
 * @return {Projection} Projection.
 */
function createProjection(projection, defaultCode) {
    if (!projection) {
        return proj_get(defaultCode);
    }
    else if (typeof projection === 'string') {
        return proj_get(projection);
    }
    else {
        return /** @type {Projection} */ (projection);
    }
}
/**
 * Creates a {@link module:ol/proj~TransformFunction} from a simple 2D coordinate transform
 * function.
 * @param {function(import("./coordinate.js").Coordinate): import("./coordinate.js").Coordinate} coordTransform Coordinate
 *     transform.
 * @return {TransformFunction} Transform function.
 */
function createTransformFromCoordinateTransform(coordTransform) {
    return (
    /**
     * @param {Array<number>} input Input.
     * @param {Array<number>} [opt_output] Output.
     * @param {number} [opt_dimension] Dimension.
     * @return {Array<number>} Output.
     */
    function (input, opt_output, opt_dimension) {
        var length = input.length;
        var dimension = opt_dimension !== undefined ? opt_dimension : 2;
        var output = opt_output !== undefined ? opt_output : new Array(length);
        for (var i = 0; i < length; i += dimension) {
            var point = coordTransform(input.slice(i, i + dimension));
            var pointLength = point.length;
            for (var j = 0, jj = dimension; j < jj; ++j) {
                output[i + j] = j >= pointLength ? input[i + j] : point[j];
            }
        }
        return output;
    });
}
/**
 * Registers coordinate transform functions to convert coordinates between the
 * source projection and the destination projection.
 * The forward and inverse functions convert coordinate pairs; this function
 * converts these into the functions used internally which also handle
 * extents and coordinate arrays.
 *
 * @param {ProjectionLike} source Source projection.
 * @param {ProjectionLike} destination Destination projection.
 * @param {function(import("./coordinate.js").Coordinate): import("./coordinate.js").Coordinate} forward The forward transform
 *     function (that is, from the source projection to the destination
 *     projection) that takes a {@link module:ol/coordinate~Coordinate} as argument and returns
 *     the transformed {@link module:ol/coordinate~Coordinate}.
 * @param {function(import("./coordinate.js").Coordinate): import("./coordinate.js").Coordinate} inverse The inverse transform
 *     function (that is, from the destination projection to the source
 *     projection) that takes a {@link module:ol/coordinate~Coordinate} as argument and returns
 *     the transformed {@link module:ol/coordinate~Coordinate}. If the transform function can only
 *     transform less dimensions than the input coordinate, it is supposeed to return a coordinate
 *     with only the length it can transform. The other dimensions will be taken unchanged from the
 *     source.
 * @api
 */
function addCoordinateTransforms(source, destination, forward, inverse) {
    var sourceProj = proj_get(source);
    var destProj = proj_get(destination);
    addTransformFunc(sourceProj, destProj, createTransformFromCoordinateTransform(forward));
    addTransformFunc(destProj, sourceProj, createTransformFromCoordinateTransform(inverse));
}
/**
 * Transforms a coordinate from longitude/latitude to a different projection.
 * @param {import("./coordinate.js").Coordinate} coordinate Coordinate as longitude and latitude, i.e.
 *     an array with longitude as 1st and latitude as 2nd element.
 * @param {ProjectionLike} [opt_projection] Target projection. The
 *     default is Web Mercator, i.e. 'EPSG:3857'.
 * @return {import("./coordinate.js").Coordinate} Coordinate projected to the target projection.
 * @api
 */
function fromLonLat(coordinate, opt_projection) {
    disableCoordinateWarning();
    return transform(coordinate, 'EPSG:4326', opt_projection !== undefined ? opt_projection : 'EPSG:3857');
}
/**
 * Transforms a coordinate to longitude/latitude.
 * @param {import("./coordinate.js").Coordinate} coordinate Projected coordinate.
 * @param {ProjectionLike} [opt_projection] Projection of the coordinate.
 *     The default is Web Mercator, i.e. 'EPSG:3857'.
 * @return {import("./coordinate.js").Coordinate} Coordinate as longitude and latitude, i.e. an array
 *     with longitude as 1st and latitude as 2nd element.
 * @api
 */
function toLonLat(coordinate, opt_projection) {
    var lonLat = transform(coordinate, opt_projection !== undefined ? opt_projection : 'EPSG:3857', 'EPSG:4326');
    var lon = lonLat[0];
    if (lon < -180 || lon > 180) {
        lonLat[0] = modulo(lon + 180, 360) - 180;
    }
    return lonLat;
}
/**
 * Checks if two projections are the same, that is every coordinate in one
 * projection does represent the same geographic point as the same coordinate in
 * the other projection.
 *
 * @param {Projection} projection1 Projection 1.
 * @param {Projection} projection2 Projection 2.
 * @return {boolean} Equivalent.
 * @api
 */
function equivalent(projection1, projection2) {
    if (projection1 === projection2) {
        return true;
    }
    var equalUnits = projection1.getUnits() === projection2.getUnits();
    if (projection1.getCode() === projection2.getCode()) {
        return equalUnits;
    }
    else {
        var transformFunc = getTransformFromProjections(projection1, projection2);
        return transformFunc === cloneTransform && equalUnits;
    }
}
/**
 * Searches in the list of transform functions for the function for converting
 * coordinates from the source projection to the destination projection.
 *
 * @param {Projection} sourceProjection Source Projection object.
 * @param {Projection} destinationProjection Destination Projection
 *     object.
 * @return {TransformFunction} Transform function.
 */
function getTransformFromProjections(sourceProjection, destinationProjection) {
    var sourceCode = sourceProjection.getCode();
    var destinationCode = destinationProjection.getCode();
    var transformFunc = transforms_get(sourceCode, destinationCode);
    if (!transformFunc) {
        transformFunc = identityTransform;
    }
    return transformFunc;
}
/**
 * Given the projection-like objects, searches for a transformation
 * function to convert a coordinates array from the source projection to the
 * destination projection.
 *
 * @param {ProjectionLike} source Source.
 * @param {ProjectionLike} destination Destination.
 * @return {TransformFunction} Transform function.
 * @api
 */
function getTransform(source, destination) {
    var sourceProjection = proj_get(source);
    var destinationProjection = proj_get(destination);
    return getTransformFromProjections(sourceProjection, destinationProjection);
}
/**
 * Transforms a coordinate from source projection to destination projection.
 * This returns a new coordinate (and does not modify the original).
 *
 * See {@link module:ol/proj.transformExtent} for extent transformation.
 * See the transform method of {@link module:ol/geom/Geometry~Geometry} and its
 * subclasses for geometry transforms.
 *
 * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
 * @param {ProjectionLike} source Source projection-like.
 * @param {ProjectionLike} destination Destination projection-like.
 * @return {import("./coordinate.js").Coordinate} Coordinate.
 * @api
 */
function transform(coordinate, source, destination) {
    var transformFunc = getTransform(source, destination);
    return transformFunc(coordinate, undefined, coordinate.length);
}
/**
 * Transforms an extent from source projection to destination projection.  This
 * returns a new extent (and does not modify the original).
 *
 * @param {import("./extent.js").Extent} extent The extent to transform.
 * @param {ProjectionLike} source Source projection-like.
 * @param {ProjectionLike} destination Destination projection-like.
 * @param {number} [opt_stops] Number of stops per side used for the transform.
 * By default only the corners are used.
 * @return {import("./extent.js").Extent} The transformed extent.
 * @api
 */
function transformExtent(extent, source, destination, opt_stops) {
    var transformFunc = getTransform(source, destination);
    return (0,ol_extent/* applyTransform */.Ne)(extent, transformFunc, undefined, opt_stops);
}
/**
 * Transforms the given point to the destination projection.
 *
 * @param {import("./coordinate.js").Coordinate} point Point.
 * @param {Projection} sourceProjection Source projection.
 * @param {Projection} destinationProjection Destination projection.
 * @return {import("./coordinate.js").Coordinate} Point.
 */
function transformWithProjections(point, sourceProjection, destinationProjection) {
    var transformFunc = getTransformFromProjections(sourceProjection, destinationProjection);
    return transformFunc(point);
}
/**
 * @type {Projection|null}
 */
var userProjection = null;
/**
 * Set the projection for coordinates supplied from and returned by API methods.
 * This includes all API methods except for those interacting with tile grids.
 * @param {ProjectionLike} projection The user projection.
 * @api
 */
function setUserProjection(projection) {
    userProjection = proj_get(projection);
}
/**
 * Clear the user projection if set.
 * @api
 */
function clearUserProjection() {
    userProjection = null;
}
/**
 * Get the projection for coordinates supplied from and returned by API methods.
 * Note that this method is not yet a part of the stable API.  Support for user
 * projections is not yet complete and should be considered experimental.
 * @return {Projection|null} The user projection (or null if not set).
 * @api
 */
function getUserProjection() {
    return userProjection;
}
/**
 * Use geographic coordinates (WGS-84 datum) in API methods.  This includes all API
 * methods except for those interacting with tile grids.
 * @api
 */
function useGeographic() {
    setUserProjection('EPSG:4326');
}
/**
 * Return a coordinate transformed into the user projection.  If no user projection
 * is set, the original coordinate is returned.
 * @param {Array<number>} coordinate Input coordinate.
 * @param {ProjectionLike} sourceProjection The input coordinate projection.
 * @return {Array<number>} The input coordinate in the user projection.
 */
function toUserCoordinate(coordinate, sourceProjection) {
    if (!userProjection) {
        return coordinate;
    }
    return transform(coordinate, sourceProjection, userProjection);
}
/**
 * Return a coordinate transformed from the user projection.  If no user projection
 * is set, the original coordinate is returned.
 * @param {Array<number>} coordinate Input coordinate.
 * @param {ProjectionLike} destProjection The destination projection.
 * @return {Array<number>} The input coordinate transformed.
 */
function fromUserCoordinate(coordinate, destProjection) {
    if (!userProjection) {
        if (showCoordinateWarning &&
            !(0,ol_coordinate/* equals */.fS)(coordinate, [0, 0]) &&
            coordinate[0] >= -180 &&
            coordinate[0] <= 180 &&
            coordinate[1] >= -90 &&
            coordinate[1] <= 90) {
            showCoordinateWarning = false;
            // eslint-disable-next-line no-console
            console.warn('Call useGeographic() from ol/proj once to work with [longitude, latitude] coordinates.');
        }
        return coordinate;
    }
    return transform(coordinate, userProjection, destProjection);
}
/**
 * Return an extent transformed into the user projection.  If no user projection
 * is set, the original extent is returned.
 * @param {import("./extent.js").Extent} extent Input extent.
 * @param {ProjectionLike} sourceProjection The input extent projection.
 * @return {import("./extent.js").Extent} The input extent in the user projection.
 */
function toUserExtent(extent, sourceProjection) {
    if (!userProjection) {
        return extent;
    }
    return transformExtent(extent, sourceProjection, userProjection);
}
/**
 * Return an extent transformed from the user projection.  If no user projection
 * is set, the original extent is returned.
 * @param {import("./extent.js").Extent} extent Input extent.
 * @param {ProjectionLike} destProjection The destination projection.
 * @return {import("./extent.js").Extent} The input extent transformed.
 */
function fromUserExtent(extent, destProjection) {
    if (!userProjection) {
        return extent;
    }
    return transformExtent(extent, userProjection, destProjection);
}
/**
 * Return the resolution in user projection units per pixel. If no user projection
 * is set, or source or user projection are missing units, the original resolution
 * is returned.
 * @param {number} resolution Resolution in input projection units per pixel.
 * @param {ProjectionLike} sourceProjection The input projection.
 * @return {number} Resolution in user projection units per pixel.
 */
function toUserResolution(resolution, sourceProjection) {
    if (!userProjection) {
        return resolution;
    }
    var sourceUnits = proj_get(sourceProjection).getUnits();
    var userUnits = userProjection.getUnits();
    return sourceUnits && userUnits
        ? (resolution * METERS_PER_UNIT[sourceUnits]) / METERS_PER_UNIT[userUnits]
        : resolution;
}
/**
 * Return the resolution in user projection units per pixel. If no user projection
 * is set, or source or user projection are missing units, the original resolution
 * is returned.
 * @param {number} resolution Resolution in user projection units per pixel.
 * @param {ProjectionLike} destProjection The destination projection.
 * @return {number} Resolution in destination projection units per pixel.
 */
function fromUserResolution(resolution, destProjection) {
    if (!userProjection) {
        return resolution;
    }
    var sourceUnits = proj_get(destProjection).getUnits();
    var userUnits = userProjection.getUnits();
    return sourceUnits && userUnits
        ? (resolution * METERS_PER_UNIT[userUnits]) / METERS_PER_UNIT[sourceUnits]
        : resolution;
}
/**
 * Creates a safe coordinate transform function from a coordinate transform function.
 * "Safe" means that it can handle wrapping of x-coordinates for global projections,
 * and that coordinates exceeding the source projection validity extent's range will be
 * clamped to the validity range.
 * @param {Projection} sourceProj Source projection.
 * @param {Projection} destProj Destination projection.
 * @param {function(import("./coordinate.js").Coordinate): import("./coordinate.js").Coordinate} transform Transform function (source to destiation).
 * @return {function(import("./coordinate.js").Coordinate): import("./coordinate.js").Coordinate} Safe transform function (source to destiation).
 */
function createSafeCoordinateTransform(sourceProj, destProj, transform) {
    return function (coord) {
        var transformed, worldsAway;
        if (sourceProj.canWrapX()) {
            var sourceExtent = sourceProj.getExtent();
            var sourceExtentWidth = getWidth(sourceExtent);
            coord = coord.slice(0);
            worldsAway = getWorldsAway(coord, sourceProj, sourceExtentWidth);
            if (worldsAway) {
                // Move x to the real world
                coord[0] = coord[0] - worldsAway * sourceExtentWidth;
            }
            coord[0] = clamp(coord[0], sourceExtent[0], sourceExtent[2]);
            coord[1] = clamp(coord[1], sourceExtent[1], sourceExtent[3]);
            transformed = transform(coord);
        }
        else {
            transformed = transform(coord);
        }
        if (worldsAway && destProj.canWrapX()) {
            // Move transformed coordinate back to the offset world
            transformed[0] += worldsAway * getWidth(destProj.getExtent());
        }
        return transformed;
    };
}
/**
 * Add transforms to and from EPSG:4326 and EPSG:3857.  This function is called
 * by when this module is executed and should only need to be called again after
 * `clearAllProjections()` is called (e.g. in tests).
 */
function addCommon() {
    // Add transformations that don't alter coordinates to convert within set of
    // projections with equal meaning.
    addEquivalentProjections(PROJECTIONS);
    addEquivalentProjections(epsg4326_PROJECTIONS);
    // Add transformations to convert EPSG:4326 like coordinates to EPSG:3857 like
    // coordinates and back.
    addEquivalentTransforms(epsg4326_PROJECTIONS, PROJECTIONS, fromEPSG4326, toEPSG4326);
}
addCommon();
//# sourceMappingURL=proj.js.map

/***/ }),

/***/ 8375:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Wm": () => (/* binding */ METERS_PER_UNIT),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export fromCode */
/**
 * @module ol/proj/Units
 */
/**
 * Projection units: `'degrees'`, `'ft'`, `'m'`, `'pixels'`, `'tile-pixels'` or
 * `'us-ft'`.
 * @enum {string}
 */
var Units = {
    /**
     * Radians
     * @api
     */
    RADIANS: 'radians',
    /**
     * Degrees
     * @api
     */
    DEGREES: 'degrees',
    /**
     * Feet
     * @api
     */
    FEET: 'ft',
    /**
     * Meters
     * @api
     */
    METERS: 'm',
    /**
     * Pixels
     * @api
     */
    PIXELS: 'pixels',
    /**
     * Tile Pixels
     * @api
     */
    TILE_PIXELS: 'tile-pixels',
    /**
     * US Feet
     * @api
     */
    USFEET: 'us-ft',
};
/**
 * See http://duff.ess.washington.edu/data/raster/drg/docs/geotiff.txt
 * @type {Object<number, Units>}
 */
var unitByCode = {
    '9001': Units.METERS,
    '9002': Units.FEET,
    '9003': Units.USFEET,
    '9101': Units.RADIANS,
    '9102': Units.DEGREES,
};
/**
 * @param {number} code Unit code.
 * @return {Units} Units.
 */
function fromCode(code) {
    return unitByCode[code];
}
/**
 * Meters per unit lookup table.
 * @const
 * @type {Object<Units, number>}
 * @api
 */
var METERS_PER_UNIT = {};
// use the radius of the Normal sphere
METERS_PER_UNIT[Units.RADIANS] = 6370997 / (2 * Math.PI);
METERS_PER_UNIT[Units.DEGREES] = (2 * Math.PI * 6370997) / 360;
METERS_PER_UNIT[Units.FEET] = 0.3048;
METERS_PER_UNIT[Units.METERS] = 1;
METERS_PER_UNIT[Units.USFEET] = 1200 / 3937;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Units);
//# sourceMappingURL=Units.js.map

/***/ }),

/***/ 7380:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _events_Event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(291);
/**
 * @module ol/render/Event
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var RenderEvent = /** @class */ (function (_super) {
    __extends(RenderEvent, _super);
    /**
     * @param {import("./EventType.js").default} type Type.
     * @param {import("../transform.js").Transform} [opt_inversePixelTransform] Transform for
     *     CSS pixels to rendered pixels.
     * @param {import("../PluggableMap.js").FrameState} [opt_frameState] Frame state.
     * @param {?(CanvasRenderingContext2D|WebGLRenderingContext)} [opt_context] Context.
     */
    function RenderEvent(type, opt_inversePixelTransform, opt_frameState, opt_context) {
        var _this = _super.call(this, type) || this;
        /**
         * Transform from CSS pixels (relative to the top-left corner of the map viewport)
         * to rendered pixels on this event's `context`. Only available when a Canvas renderer is used, null otherwise.
         * @type {import("../transform.js").Transform|undefined}
         * @api
         */
        _this.inversePixelTransform = opt_inversePixelTransform;
        /**
         * An object representing the current render frame state.
         * @type {import("../PluggableMap.js").FrameState|undefined}
         * @api
         */
        _this.frameState = opt_frameState;
        /**
         * Canvas context. Not available when the event is dispatched by the map. For Canvas 2D layers,
         * the context will be the 2D rendering context.  For WebGL layers, the context will be the WebGL
         * context.
         * @type {CanvasRenderingContext2D|WebGLRenderingContext|undefined}
         * @api
         */
        _this.context = opt_context;
        return _this;
    }
    return RenderEvent;
}(_events_Event_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RenderEvent);
//# sourceMappingURL=Event.js.map

/***/ }),

/***/ 2329:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @module ol/render/EventType
 */
/**
 * @enum {string}
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    /**
     * Triggered before a layer is rendered.
     * @event module:ol/render/Event~RenderEvent#prerender
     * @api
     */
    PRERENDER: 'prerender',
    /**
     * Triggered after a layer is rendered.
     * @event module:ol/render/Event~RenderEvent#postrender
     * @api
     */
    POSTRENDER: 'postrender',
    /**
     * Triggered before layers are composed.  When dispatched by the map, the event object will not have
     * a `context` set.  When dispatched by a layer, the event object will have a `context` set.  Only
     * WebGL layers currently dispatch this event.
     * @event module:ol/render/Event~RenderEvent#precompose
     * @api
     */
    PRECOMPOSE: 'precompose',
    /**
     * Triggered after layers are composed.  When dispatched by the map, the event object will not have
     * a `context` set.  When dispatched by a layer, the event object will have a `context` set.  Only
     * WebGL layers currently dispatch this event.
     * @event module:ol/render/Event~RenderEvent#postcompose
     * @api
     */
    POSTCOMPOSE: 'postcompose',
    /**
     * Triggered when rendering is complete, i.e. all sources and tiles have
     * finished loading for the current viewport, and all tiles are faded in.
     * The event object will not have a `context` set.
     * @event module:ol/render/Event~RenderEvent#rendercomplete
     * @api
     */
    RENDERCOMPLETE: 'rendercomplete',
});
/**
 * @typedef {'postrender'|'precompose'|'postcompose'|'rendercomplete'} MapRenderEventTypes
 */
/**
 * @typedef {'postrender'|'prerender'} LayerRenderEventTypes
 */
//# sourceMappingURL=EventType.js.map

/***/ }),

/***/ 1481:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ IMAGE_SMOOTHING_DISABLED),
/* harmony export */   "s": () => (/* binding */ IMAGE_SMOOTHING_ENABLED)
/* harmony export */ });
/**
 * @module ol/renderer/canvas/common
 */
/**
 * Context options to disable image smoothing.
 * @type {Object}
 */
var IMAGE_SMOOTHING_DISABLED = {
    imageSmoothingEnabled: false,
    msImageSmoothingEnabled: false,
};
/**
 * Context options to enable image smoothing.
 * @type {Object}
 */
var IMAGE_SMOOTHING_ENABLED = {
    imageSmoothingEnabled: true,
    msImageSmoothingEnabled: true,
};
//# sourceMappingURL=common.js.map

/***/ }),

/***/ 6113:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ reproj_Tile)
});

// EXTERNAL MODULE: ./node_modules/ol/reproj/common.js
var common = __webpack_require__(4773);
// EXTERNAL MODULE: ./node_modules/ol/events/EventType.js
var EventType = __webpack_require__(5487);
// EXTERNAL MODULE: ./node_modules/ol/Tile.js
var Tile = __webpack_require__(4806);
// EXTERNAL MODULE: ./node_modules/ol/TileState.js
var TileState = __webpack_require__(7195);
// EXTERNAL MODULE: ./node_modules/ol/extent.js + 1 modules
var ol_extent = __webpack_require__(2833);
// EXTERNAL MODULE: ./node_modules/ol/proj.js + 6 modules
var proj = __webpack_require__(1311);
// EXTERNAL MODULE: ./node_modules/ol/math.js
var math = __webpack_require__(3983);
;// CONCATENATED MODULE: ./node_modules/ol/reproj/Triangulation.js
/**
 * @module ol/reproj/Triangulation
 */



/**
 * Single triangle; consists of 3 source points and 3 target points.
 * @typedef {Object} Triangle
 * @property {Array<import("../coordinate.js").Coordinate>} source Source.
 * @property {Array<import("../coordinate.js").Coordinate>} target Target.
 */
/**
 * Maximum number of subdivision steps during raster reprojection triangulation.
 * Prevents high memory usage and large number of proj4 calls (for certain
 * transformations and areas). At most `2*(2^this)` triangles are created for
 * each triangulated extent (tile/image).
 * @type {number}
 */
var MAX_SUBDIVISION = 10;
/**
 * Maximum allowed size of triangle relative to world width. When transforming
 * corners of world extent between certain projections, the resulting
 * triangulation seems to have zero error and no subdivision is performed. If
 * the triangle width is more than this (relative to world width; 0-1),
 * subdivison is forced (up to `MAX_SUBDIVISION`). Default is `0.25`.
 * @type {number}
 */
var MAX_TRIANGLE_WIDTH = 0.25;
/**
 * @classdesc
 * Class containing triangulation of the given target extent.
 * Used for determining source data and the reprojection itself.
 */
var Triangulation = /** @class */ (function () {
    /**
     * @param {import("../proj/Projection.js").default} sourceProj Source projection.
     * @param {import("../proj/Projection.js").default} targetProj Target projection.
     * @param {import("../extent.js").Extent} targetExtent Target extent to triangulate.
     * @param {import("../extent.js").Extent} maxSourceExtent Maximal source extent that can be used.
     * @param {number} errorThreshold Acceptable error (in source units).
     * @param {?number} opt_destinationResolution The (optional) resolution of the destination.
     */
    function Triangulation(sourceProj, targetProj, targetExtent, maxSourceExtent, errorThreshold, opt_destinationResolution) {
        /**
         * @type {import("../proj/Projection.js").default}
         * @private
         */
        this.sourceProj_ = sourceProj;
        /**
         * @type {import("../proj/Projection.js").default}
         * @private
         */
        this.targetProj_ = targetProj;
        /** @type {!Object<string, import("../coordinate.js").Coordinate>} */
        var transformInvCache = {};
        var transformInv = (0,proj/* getTransform */.Ck)(this.targetProj_, this.sourceProj_);
        /**
         * @param {import("../coordinate.js").Coordinate} c A coordinate.
         * @return {import("../coordinate.js").Coordinate} Transformed coordinate.
         * @private
         */
        this.transformInv_ = function (c) {
            var key = c[0] + '/' + c[1];
            if (!transformInvCache[key]) {
                transformInvCache[key] = transformInv(c);
            }
            return transformInvCache[key];
        };
        /**
         * @type {import("../extent.js").Extent}
         * @private
         */
        this.maxSourceExtent_ = maxSourceExtent;
        /**
         * @type {number}
         * @private
         */
        this.errorThresholdSquared_ = errorThreshold * errorThreshold;
        /**
         * @type {Array<Triangle>}
         * @private
         */
        this.triangles_ = [];
        /**
         * Indicates that the triangulation crosses edge of the source projection.
         * @type {boolean}
         * @private
         */
        this.wrapsXInSource_ = false;
        /**
         * @type {boolean}
         * @private
         */
        this.canWrapXInSource_ =
            this.sourceProj_.canWrapX() &&
                !!maxSourceExtent &&
                !!this.sourceProj_.getExtent() &&
                (0,ol_extent/* getWidth */.dz)(maxSourceExtent) == (0,ol_extent/* getWidth */.dz)(this.sourceProj_.getExtent());
        /**
         * @type {?number}
         * @private
         */
        this.sourceWorldWidth_ = this.sourceProj_.getExtent()
            ? (0,ol_extent/* getWidth */.dz)(this.sourceProj_.getExtent())
            : null;
        /**
         * @type {?number}
         * @private
         */
        this.targetWorldWidth_ = this.targetProj_.getExtent()
            ? (0,ol_extent/* getWidth */.dz)(this.targetProj_.getExtent())
            : null;
        var destinationTopLeft = (0,ol_extent/* getTopLeft */.rL)(targetExtent);
        var destinationTopRight = (0,ol_extent/* getTopRight */.Xv)(targetExtent);
        var destinationBottomRight = (0,ol_extent/* getBottomRight */.w$)(targetExtent);
        var destinationBottomLeft = (0,ol_extent/* getBottomLeft */.hC)(targetExtent);
        var sourceTopLeft = this.transformInv_(destinationTopLeft);
        var sourceTopRight = this.transformInv_(destinationTopRight);
        var sourceBottomRight = this.transformInv_(destinationBottomRight);
        var sourceBottomLeft = this.transformInv_(destinationBottomLeft);
        /*
         * The maxSubdivision controls how many splittings of the target area can
         * be done. The idea here is to do a linear mapping of the target areas
         * but the actual overal reprojection (can be) extremely non-linear. The
         * default value of MAX_SUBDIVISION was chosen based on mapping a 256x256
         * tile size. However this function is also called to remap canvas rendered
         * layers which can be much larger. This calculation increases the maxSubdivision
         * value by the right factor so that each 256x256 pixel area has
         * MAX_SUBDIVISION divisions.
         */
        var maxSubdivision = MAX_SUBDIVISION +
            (opt_destinationResolution
                ? Math.max(0, Math.ceil((0,math/* log2 */.k3)((0,ol_extent/* getArea */.bg)(targetExtent) /
                    (opt_destinationResolution *
                        opt_destinationResolution *
                        256 *
                        256))))
                : 0);
        this.addQuad_(destinationTopLeft, destinationTopRight, destinationBottomRight, destinationBottomLeft, sourceTopLeft, sourceTopRight, sourceBottomRight, sourceBottomLeft, maxSubdivision);
        if (this.wrapsXInSource_) {
            var leftBound_1 = Infinity;
            this.triangles_.forEach(function (triangle, i, arr) {
                leftBound_1 = Math.min(leftBound_1, triangle.source[0][0], triangle.source[1][0], triangle.source[2][0]);
            });
            // Shift triangles to be as close to `leftBound` as possible
            // (if the distance is more than `worldWidth / 2` it can be closer.
            this.triangles_.forEach(function (triangle) {
                if (Math.max(triangle.source[0][0], triangle.source[1][0], triangle.source[2][0]) -
                    leftBound_1 >
                    this.sourceWorldWidth_ / 2) {
                    var newTriangle = [
                        [triangle.source[0][0], triangle.source[0][1]],
                        [triangle.source[1][0], triangle.source[1][1]],
                        [triangle.source[2][0], triangle.source[2][1]],
                    ];
                    if (newTriangle[0][0] - leftBound_1 > this.sourceWorldWidth_ / 2) {
                        newTriangle[0][0] -= this.sourceWorldWidth_;
                    }
                    if (newTriangle[1][0] - leftBound_1 > this.sourceWorldWidth_ / 2) {
                        newTriangle[1][0] -= this.sourceWorldWidth_;
                    }
                    if (newTriangle[2][0] - leftBound_1 > this.sourceWorldWidth_ / 2) {
                        newTriangle[2][0] -= this.sourceWorldWidth_;
                    }
                    // Rarely (if the extent contains both the dateline and prime meridian)
                    // the shift can in turn break some triangles.
                    // Detect this here and don't shift in such cases.
                    var minX = Math.min(newTriangle[0][0], newTriangle[1][0], newTriangle[2][0]);
                    var maxX = Math.max(newTriangle[0][0], newTriangle[1][0], newTriangle[2][0]);
                    if (maxX - minX < this.sourceWorldWidth_ / 2) {
                        triangle.source = newTriangle;
                    }
                }
            }.bind(this));
        }
        transformInvCache = {};
    }
    /**
     * Adds triangle to the triangulation.
     * @param {import("../coordinate.js").Coordinate} a The target a coordinate.
     * @param {import("../coordinate.js").Coordinate} b The target b coordinate.
     * @param {import("../coordinate.js").Coordinate} c The target c coordinate.
     * @param {import("../coordinate.js").Coordinate} aSrc The source a coordinate.
     * @param {import("../coordinate.js").Coordinate} bSrc The source b coordinate.
     * @param {import("../coordinate.js").Coordinate} cSrc The source c coordinate.
     * @private
     */
    Triangulation.prototype.addTriangle_ = function (a, b, c, aSrc, bSrc, cSrc) {
        this.triangles_.push({
            source: [aSrc, bSrc, cSrc],
            target: [a, b, c],
        });
    };
    /**
     * Adds quad (points in clock-wise order) to the triangulation
     * (and reprojects the vertices) if valid.
     * Performs quad subdivision if needed to increase precision.
     *
     * @param {import("../coordinate.js").Coordinate} a The target a coordinate.
     * @param {import("../coordinate.js").Coordinate} b The target b coordinate.
     * @param {import("../coordinate.js").Coordinate} c The target c coordinate.
     * @param {import("../coordinate.js").Coordinate} d The target d coordinate.
     * @param {import("../coordinate.js").Coordinate} aSrc The source a coordinate.
     * @param {import("../coordinate.js").Coordinate} bSrc The source b coordinate.
     * @param {import("../coordinate.js").Coordinate} cSrc The source c coordinate.
     * @param {import("../coordinate.js").Coordinate} dSrc The source d coordinate.
     * @param {number} maxSubdivision Maximal allowed subdivision of the quad.
     * @private
     */
    Triangulation.prototype.addQuad_ = function (a, b, c, d, aSrc, bSrc, cSrc, dSrc, maxSubdivision) {
        var sourceQuadExtent = (0,ol_extent/* boundingExtent */.hI)([aSrc, bSrc, cSrc, dSrc]);
        var sourceCoverageX = this.sourceWorldWidth_
            ? (0,ol_extent/* getWidth */.dz)(sourceQuadExtent) / this.sourceWorldWidth_
            : null;
        var sourceWorldWidth = /** @type {number} */ (this.sourceWorldWidth_);
        // when the quad is wrapped in the source projection
        // it covers most of the projection extent, but not fully
        var wrapsX = this.sourceProj_.canWrapX() &&
            sourceCoverageX > 0.5 &&
            sourceCoverageX < 1;
        var needsSubdivision = false;
        if (maxSubdivision > 0) {
            if (this.targetProj_.isGlobal() && this.targetWorldWidth_) {
                var targetQuadExtent = (0,ol_extent/* boundingExtent */.hI)([a, b, c, d]);
                var targetCoverageX = (0,ol_extent/* getWidth */.dz)(targetQuadExtent) / this.targetWorldWidth_;
                needsSubdivision =
                    targetCoverageX > MAX_TRIANGLE_WIDTH || needsSubdivision;
            }
            if (!wrapsX && this.sourceProj_.isGlobal() && sourceCoverageX) {
                needsSubdivision =
                    sourceCoverageX > MAX_TRIANGLE_WIDTH || needsSubdivision;
            }
        }
        if (!needsSubdivision && this.maxSourceExtent_) {
            if (isFinite(sourceQuadExtent[0]) &&
                isFinite(sourceQuadExtent[1]) &&
                isFinite(sourceQuadExtent[2]) &&
                isFinite(sourceQuadExtent[3])) {
                if (!(0,ol_extent/* intersects */.kK)(sourceQuadExtent, this.maxSourceExtent_)) {
                    // whole quad outside source projection extent -> ignore
                    return;
                }
            }
        }
        var isNotFinite = 0;
        if (!needsSubdivision) {
            if (!isFinite(aSrc[0]) ||
                !isFinite(aSrc[1]) ||
                !isFinite(bSrc[0]) ||
                !isFinite(bSrc[1]) ||
                !isFinite(cSrc[0]) ||
                !isFinite(cSrc[1]) ||
                !isFinite(dSrc[0]) ||
                !isFinite(dSrc[1])) {
                if (maxSubdivision > 0) {
                    needsSubdivision = true;
                }
                else {
                    // It might be the case that only 1 of the points is infinite. In this case
                    // we can draw a single triangle with the other three points
                    isNotFinite =
                        (!isFinite(aSrc[0]) || !isFinite(aSrc[1]) ? 8 : 0) +
                            (!isFinite(bSrc[0]) || !isFinite(bSrc[1]) ? 4 : 0) +
                            (!isFinite(cSrc[0]) || !isFinite(cSrc[1]) ? 2 : 0) +
                            (!isFinite(dSrc[0]) || !isFinite(dSrc[1]) ? 1 : 0);
                    if (isNotFinite != 1 &&
                        isNotFinite != 2 &&
                        isNotFinite != 4 &&
                        isNotFinite != 8) {
                        return;
                    }
                }
            }
        }
        if (maxSubdivision > 0) {
            if (!needsSubdivision) {
                var center = [(a[0] + c[0]) / 2, (a[1] + c[1]) / 2];
                var centerSrc = this.transformInv_(center);
                var dx = void 0;
                if (wrapsX) {
                    var centerSrcEstimX = ((0,math/* modulo */.$W)(aSrc[0], sourceWorldWidth) +
                        (0,math/* modulo */.$W)(cSrc[0], sourceWorldWidth)) /
                        2;
                    dx = centerSrcEstimX - (0,math/* modulo */.$W)(centerSrc[0], sourceWorldWidth);
                }
                else {
                    dx = (aSrc[0] + cSrc[0]) / 2 - centerSrc[0];
                }
                var dy = (aSrc[1] + cSrc[1]) / 2 - centerSrc[1];
                var centerSrcErrorSquared = dx * dx + dy * dy;
                needsSubdivision = centerSrcErrorSquared > this.errorThresholdSquared_;
            }
            if (needsSubdivision) {
                if (Math.abs(a[0] - c[0]) <= Math.abs(a[1] - c[1])) {
                    // split horizontally (top & bottom)
                    var bc = [(b[0] + c[0]) / 2, (b[1] + c[1]) / 2];
                    var bcSrc = this.transformInv_(bc);
                    var da = [(d[0] + a[0]) / 2, (d[1] + a[1]) / 2];
                    var daSrc = this.transformInv_(da);
                    this.addQuad_(a, b, bc, da, aSrc, bSrc, bcSrc, daSrc, maxSubdivision - 1);
                    this.addQuad_(da, bc, c, d, daSrc, bcSrc, cSrc, dSrc, maxSubdivision - 1);
                }
                else {
                    // split vertically (left & right)
                    var ab = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
                    var abSrc = this.transformInv_(ab);
                    var cd = [(c[0] + d[0]) / 2, (c[1] + d[1]) / 2];
                    var cdSrc = this.transformInv_(cd);
                    this.addQuad_(a, ab, cd, d, aSrc, abSrc, cdSrc, dSrc, maxSubdivision - 1);
                    this.addQuad_(ab, b, c, cd, abSrc, bSrc, cSrc, cdSrc, maxSubdivision - 1);
                }
                return;
            }
        }
        if (wrapsX) {
            if (!this.canWrapXInSource_) {
                return;
            }
            this.wrapsXInSource_ = true;
        }
        // Exactly zero or one of *Src is not finite
        // The triangles must have the diagonal line as the first side
        // This is to allow easy code in reproj.s to make it straight for broken
        // browsers that can't handle diagonal clipping
        if ((isNotFinite & 0xb) == 0) {
            this.addTriangle_(a, c, d, aSrc, cSrc, dSrc);
        }
        if ((isNotFinite & 0xe) == 0) {
            this.addTriangle_(a, c, b, aSrc, cSrc, bSrc);
        }
        if (isNotFinite) {
            // Try the other two triangles
            if ((isNotFinite & 0xd) == 0) {
                this.addTriangle_(b, d, a, bSrc, dSrc, aSrc);
            }
            if ((isNotFinite & 0x7) == 0) {
                this.addTriangle_(b, d, c, bSrc, dSrc, cSrc);
            }
        }
    };
    /**
     * Calculates extent of the `source` coordinates from all the triangles.
     *
     * @return {import("../extent.js").Extent} Calculated extent.
     */
    Triangulation.prototype.calculateSourceExtent = function () {
        var extent = (0,ol_extent/* createEmpty */.lJ)();
        this.triangles_.forEach(function (triangle, i, arr) {
            var src = triangle.source;
            (0,ol_extent/* extendCoordinate */.Wj)(extent, src[0]);
            (0,ol_extent/* extendCoordinate */.Wj)(extent, src[1]);
            (0,ol_extent/* extendCoordinate */.Wj)(extent, src[2]);
        });
        return extent;
    };
    /**
     * @return {Array<Triangle>} Array of the calculated triangles.
     */
    Triangulation.prototype.getTriangles = function () {
        return this.triangles_;
    };
    return Triangulation;
}());
/* harmony default export */ const reproj_Triangulation = (Triangulation);
//# sourceMappingURL=Triangulation.js.map
// EXTERNAL MODULE: ./node_modules/ol/renderer/canvas/common.js
var canvas_common = __webpack_require__(1481);
// EXTERNAL MODULE: ./node_modules/ol/obj.js
var obj = __webpack_require__(9374);
// EXTERNAL MODULE: ./node_modules/ol/dom.js
var dom = __webpack_require__(8326);
;// CONCATENATED MODULE: ./node_modules/ol/reproj.js
/**
 * @module ol/reproj
 */






var brokenDiagonalRendering_;
/**
 * @type {Array<HTMLCanvasElement>}
 */
var canvasPool = [];
/**
 * This draws a small triangle into a canvas by setting the triangle as the clip region
 * and then drawing a (too large) rectangle
 *
 * @param {CanvasRenderingContext2D} ctx The context in which to draw the triangle
 * @param {number} u1 The x-coordinate of the second point. The first point is 0,0.
 * @param {number} v1 The y-coordinate of the second point.
 * @param {number} u2 The x-coordinate of the third point.
 * @param {number} v2 The y-coordinate of the third point.
 */
function drawTestTriangle(ctx, u1, v1, u2, v2) {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(u1, v1);
    ctx.lineTo(u2, v2);
    ctx.closePath();
    ctx.save();
    ctx.clip();
    ctx.fillRect(0, 0, Math.max(u1, u2) + 1, Math.max(v1, v2));
    ctx.restore();
}
/**
 * Given the data from getImageData, see if the right values appear at the provided offset.
 * Returns true if either the color or transparency is off
 *
 * @param {Uint8ClampedArray} data The data returned from getImageData
 * @param {number} offset The pixel offset from the start of data.
 * @return {boolean} true if the diagonal rendering is broken
 */
function verifyBrokenDiagonalRendering(data, offset) {
    // the values ought to be close to the rgba(210, 0, 0, 0.75)
    return (Math.abs(data[offset * 4] - 210) > 2 ||
        Math.abs(data[offset * 4 + 3] - 0.75 * 255) > 2);
}
/**
 * Determines if the current browser configuration can render triangular clip regions correctly.
 * This value is cached so the function is only expensive the first time called.
 * Firefox on Windows (as of now) does not if HWA is enabled. See https://bugzilla.mozilla.org/show_bug.cgi?id=1606976
 * IE also doesn't. Chrome works, and everything seems to work on OSX and Android. This function caches the
 * result. I suppose that it is conceivably possible that a browser might flip modes while the app is
 * running, but lets hope not.
 *
 * @return {boolean} true if the Diagonal Rendering is broken.
 */
function isBrokenDiagonalRendering() {
    if (brokenDiagonalRendering_ === undefined) {
        var ctx = document.createElement('canvas').getContext('2d');
        ctx.globalCompositeOperation = 'lighter';
        ctx.fillStyle = 'rgba(210, 0, 0, 0.75)';
        drawTestTriangle(ctx, 4, 5, 4, 0);
        drawTestTriangle(ctx, 4, 5, 0, 5);
        var data = ctx.getImageData(0, 0, 3, 3).data;
        brokenDiagonalRendering_ =
            verifyBrokenDiagonalRendering(data, 0) ||
                verifyBrokenDiagonalRendering(data, 4) ||
                verifyBrokenDiagonalRendering(data, 8);
    }
    return brokenDiagonalRendering_;
}
/**
 * Calculates ideal resolution to use from the source in order to achieve
 * pixel mapping as close as possible to 1:1 during reprojection.
 * The resolution is calculated regardless of what resolutions
 * are actually available in the dataset (TileGrid, Image, ...).
 *
 * @param {import("./proj/Projection.js").default} sourceProj Source projection.
 * @param {import("./proj/Projection.js").default} targetProj Target projection.
 * @param {import("./coordinate.js").Coordinate} targetCenter Target center.
 * @param {number} targetResolution Target resolution.
 * @return {number} The best resolution to use. Can be +-Infinity, NaN or 0.
 */
function calculateSourceResolution(sourceProj, targetProj, targetCenter, targetResolution) {
    var sourceCenter = (0,proj/* transform */.vs)(targetCenter, targetProj, sourceProj);
    // calculate the ideal resolution of the source data
    var sourceResolution = (0,proj/* getPointResolution */._Q)(targetProj, targetResolution, targetCenter);
    var targetMetersPerUnit = targetProj.getMetersPerUnit();
    if (targetMetersPerUnit !== undefined) {
        sourceResolution *= targetMetersPerUnit;
    }
    var sourceMetersPerUnit = sourceProj.getMetersPerUnit();
    if (sourceMetersPerUnit !== undefined) {
        sourceResolution /= sourceMetersPerUnit;
    }
    // Based on the projection properties, the point resolution at the specified
    // coordinates may be slightly different. We need to reverse-compensate this
    // in order to achieve optimal results.
    var sourceExtent = sourceProj.getExtent();
    if (!sourceExtent || (0,ol_extent/* containsCoordinate */.b8)(sourceExtent, sourceCenter)) {
        var compensationFactor = (0,proj/* getPointResolution */._Q)(sourceProj, sourceResolution, sourceCenter) /
            sourceResolution;
        if (isFinite(compensationFactor) && compensationFactor > 0) {
            sourceResolution /= compensationFactor;
        }
    }
    return sourceResolution;
}
/**
 * Calculates ideal resolution to use from the source in order to achieve
 * pixel mapping as close as possible to 1:1 during reprojection.
 * The resolution is calculated regardless of what resolutions
 * are actually available in the dataset (TileGrid, Image, ...).
 *
 * @param {import("./proj/Projection.js").default} sourceProj Source projection.
 * @param {import("./proj/Projection.js").default} targetProj Target projection.
 * @param {import("./extent.js").Extent} targetExtent Target extent
 * @param {number} targetResolution Target resolution.
 * @return {number} The best resolution to use. Can be +-Infinity, NaN or 0.
 */
function calculateSourceExtentResolution(sourceProj, targetProj, targetExtent, targetResolution) {
    var targetCenter = (0,ol_extent/* getCenter */.qg)(targetExtent);
    var sourceResolution = calculateSourceResolution(sourceProj, targetProj, targetCenter, targetResolution);
    if (!isFinite(sourceResolution) || sourceResolution <= 0) {
        (0,ol_extent/* forEachCorner */.H6)(targetExtent, function (corner) {
            sourceResolution = calculateSourceResolution(sourceProj, targetProj, corner, targetResolution);
            return isFinite(sourceResolution) && sourceResolution > 0;
        });
    }
    return sourceResolution;
}
/**
 * @typedef {Object} ImageExtent
 * @property {import("./extent.js").Extent} extent Extent.
 * @property {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} image Image.
 */
/**
 * Renders the source data into new canvas based on the triangulation.
 *
 * @param {number} width Width of the canvas.
 * @param {number} height Height of the canvas.
 * @param {number} pixelRatio Pixel ratio.
 * @param {number} sourceResolution Source resolution.
 * @param {import("./extent.js").Extent} sourceExtent Extent of the data source.
 * @param {number} targetResolution Target resolution.
 * @param {import("./extent.js").Extent} targetExtent Target extent.
 * @param {import("./reproj/Triangulation.js").default} triangulation Calculated triangulation.
 * @param {Array<ImageExtent>} sources Array of sources.
 * @param {number} gutter Gutter of the sources.
 * @param {boolean} [opt_renderEdges] Render reprojection edges.
 * @param {boolean} [opt_interpolate] Use linear interpolation when resampling.
 * @return {HTMLCanvasElement} Canvas with reprojected data.
 */
function render(width, height, pixelRatio, sourceResolution, sourceExtent, targetResolution, targetExtent, triangulation, sources, gutter, opt_renderEdges, opt_interpolate) {
    var context = (0,dom/* createCanvasContext2D */.E4)(Math.round(pixelRatio * width), Math.round(pixelRatio * height), canvasPool);
    if (!opt_interpolate) {
        (0,obj/* assign */.f0)(context, canvas_common/* IMAGE_SMOOTHING_DISABLED */.$);
    }
    if (sources.length === 0) {
        return context.canvas;
    }
    context.scale(pixelRatio, pixelRatio);
    function pixelRound(value) {
        return Math.round(value * pixelRatio) / pixelRatio;
    }
    context.globalCompositeOperation = 'lighter';
    var sourceDataExtent = (0,ol_extent/* createEmpty */.lJ)();
    sources.forEach(function (src, i, arr) {
        (0,ol_extent/* extend */.l7)(sourceDataExtent, src.extent);
    });
    var canvasWidthInUnits = (0,ol_extent/* getWidth */.dz)(sourceDataExtent);
    var canvasHeightInUnits = (0,ol_extent/* getHeight */.Cr)(sourceDataExtent);
    var stitchContext = (0,dom/* createCanvasContext2D */.E4)(Math.round((pixelRatio * canvasWidthInUnits) / sourceResolution), Math.round((pixelRatio * canvasHeightInUnits) / sourceResolution));
    if (!opt_interpolate) {
        (0,obj/* assign */.f0)(stitchContext, canvas_common/* IMAGE_SMOOTHING_DISABLED */.$);
    }
    var stitchScale = pixelRatio / sourceResolution;
    sources.forEach(function (src, i, arr) {
        var xPos = src.extent[0] - sourceDataExtent[0];
        var yPos = -(src.extent[3] - sourceDataExtent[3]);
        var srcWidth = (0,ol_extent/* getWidth */.dz)(src.extent);
        var srcHeight = (0,ol_extent/* getHeight */.Cr)(src.extent);
        // This test should never fail -- but it does. Need to find a fix the upstream condition
        if (src.image.width > 0 && src.image.height > 0) {
            stitchContext.drawImage(src.image, gutter, gutter, src.image.width - 2 * gutter, src.image.height - 2 * gutter, xPos * stitchScale, yPos * stitchScale, srcWidth * stitchScale, srcHeight * stitchScale);
        }
    });
    var targetTopLeft = (0,ol_extent/* getTopLeft */.rL)(targetExtent);
    triangulation.getTriangles().forEach(function (triangle, i, arr) {
        /* Calculate affine transform (src -> dst)
         * Resulting matrix can be used to transform coordinate
         * from `sourceProjection` to destination pixels.
         *
         * To optimize number of context calls and increase numerical stability,
         * we also do the following operations:
         * trans(-topLeftExtentCorner), scale(1 / targetResolution), scale(1, -1)
         * here before solving the linear system so [ui, vi] are pixel coordinates.
         *
         * Src points: xi, yi
         * Dst points: ui, vi
         * Affine coefficients: aij
         *
         * | x0 y0 1  0  0 0 |   |a00|   |u0|
         * | x1 y1 1  0  0 0 |   |a01|   |u1|
         * | x2 y2 1  0  0 0 | x |a02| = |u2|
         * |  0  0 0 x0 y0 1 |   |a10|   |v0|
         * |  0  0 0 x1 y1 1 |   |a11|   |v1|
         * |  0  0 0 x2 y2 1 |   |a12|   |v2|
         */
        var source = triangle.source;
        var target = triangle.target;
        var x0 = source[0][0], y0 = source[0][1];
        var x1 = source[1][0], y1 = source[1][1];
        var x2 = source[2][0], y2 = source[2][1];
        // Make sure that everything is on pixel boundaries
        var u0 = pixelRound((target[0][0] - targetTopLeft[0]) / targetResolution);
        var v0 = pixelRound(-(target[0][1] - targetTopLeft[1]) / targetResolution);
        var u1 = pixelRound((target[1][0] - targetTopLeft[0]) / targetResolution);
        var v1 = pixelRound(-(target[1][1] - targetTopLeft[1]) / targetResolution);
        var u2 = pixelRound((target[2][0] - targetTopLeft[0]) / targetResolution);
        var v2 = pixelRound(-(target[2][1] - targetTopLeft[1]) / targetResolution);
        // Shift all the source points to improve numerical stability
        // of all the subsequent calculations. The [x0, y0] is used here.
        // This is also used to simplify the linear system.
        var sourceNumericalShiftX = x0;
        var sourceNumericalShiftY = y0;
        x0 = 0;
        y0 = 0;
        x1 -= sourceNumericalShiftX;
        y1 -= sourceNumericalShiftY;
        x2 -= sourceNumericalShiftX;
        y2 -= sourceNumericalShiftY;
        var augmentedMatrix = [
            [x1, y1, 0, 0, u1 - u0],
            [x2, y2, 0, 0, u2 - u0],
            [0, 0, x1, y1, v1 - v0],
            [0, 0, x2, y2, v2 - v0],
        ];
        var affineCoefs = (0,math/* solveLinearSystem */.SV)(augmentedMatrix);
        if (!affineCoefs) {
            return;
        }
        context.save();
        context.beginPath();
        if (isBrokenDiagonalRendering() || !opt_interpolate) {
            // Make sure that all lines are horizontal or vertical
            context.moveTo(u1, v1);
            // This is the diagonal line. Do it in 4 steps
            var steps = 4;
            var ud = u0 - u1;
            var vd = v0 - v1;
            for (var step = 0; step < steps; step++) {
                // Go horizontally
                context.lineTo(u1 + pixelRound(((step + 1) * ud) / steps), v1 + pixelRound((step * vd) / (steps - 1)));
                // Go vertically
                if (step != steps - 1) {
                    context.lineTo(u1 + pixelRound(((step + 1) * ud) / steps), v1 + pixelRound(((step + 1) * vd) / (steps - 1)));
                }
            }
            // We are almost at u0r, v0r
            context.lineTo(u2, v2);
        }
        else {
            context.moveTo(u1, v1);
            context.lineTo(u0, v0);
            context.lineTo(u2, v2);
        }
        context.clip();
        context.transform(affineCoefs[0], affineCoefs[2], affineCoefs[1], affineCoefs[3], u0, v0);
        context.translate(sourceDataExtent[0] - sourceNumericalShiftX, sourceDataExtent[3] - sourceNumericalShiftY);
        context.scale(sourceResolution / pixelRatio, -sourceResolution / pixelRatio);
        context.drawImage(stitchContext.canvas, 0, 0);
        context.restore();
    });
    if (opt_renderEdges) {
        context.save();
        context.globalCompositeOperation = 'source-over';
        context.strokeStyle = 'black';
        context.lineWidth = 1;
        triangulation.getTriangles().forEach(function (triangle, i, arr) {
            var target = triangle.target;
            var u0 = (target[0][0] - targetTopLeft[0]) / targetResolution;
            var v0 = -(target[0][1] - targetTopLeft[1]) / targetResolution;
            var u1 = (target[1][0] - targetTopLeft[0]) / targetResolution;
            var v1 = -(target[1][1] - targetTopLeft[1]) / targetResolution;
            var u2 = (target[2][0] - targetTopLeft[0]) / targetResolution;
            var v2 = -(target[2][1] - targetTopLeft[1]) / targetResolution;
            context.beginPath();
            context.moveTo(u1, v1);
            context.lineTo(u0, v0);
            context.lineTo(u2, v2);
            context.closePath();
            context.stroke();
        });
        context.restore();
    }
    return context.canvas;
}
//# sourceMappingURL=reproj.js.map
// EXTERNAL MODULE: ./node_modules/ol/events.js
var events = __webpack_require__(5818);
;// CONCATENATED MODULE: ./node_modules/ol/reproj/Tile.js
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @module ol/reproj/Tile
 */










/**
 * @typedef {function(number, number, number, number) : import("../Tile.js").default} FunctionType
 */
/**
 * @classdesc
 * Class encapsulating single reprojected tile.
 * See {@link module:ol/source/TileImage~TileImage}.
 *
 */
var ReprojTile = /** @class */ (function (_super) {
    __extends(ReprojTile, _super);
    /**
     * @param {import("../proj/Projection.js").default} sourceProj Source projection.
     * @param {import("../tilegrid/TileGrid.js").default} sourceTileGrid Source tile grid.
     * @param {import("../proj/Projection.js").default} targetProj Target projection.
     * @param {import("../tilegrid/TileGrid.js").default} targetTileGrid Target tile grid.
     * @param {import("../tilecoord.js").TileCoord} tileCoord Coordinate of the tile.
     * @param {import("../tilecoord.js").TileCoord} wrappedTileCoord Coordinate of the tile wrapped in X.
     * @param {number} pixelRatio Pixel ratio.
     * @param {number} gutter Gutter of the source tiles.
     * @param {FunctionType} getTileFunction
     *     Function returning source tiles (z, x, y, pixelRatio).
     * @param {number} [opt_errorThreshold] Acceptable reprojection error (in px).
     * @param {boolean} [opt_renderEdges] Render reprojection edges.
     * @param {boolean} [opt_interpolate] Use linear interpolation when resampling.
     */
    function ReprojTile(sourceProj, sourceTileGrid, targetProj, targetTileGrid, tileCoord, wrappedTileCoord, pixelRatio, gutter, getTileFunction, opt_errorThreshold, opt_renderEdges, opt_interpolate) {
        var _this = _super.call(this, tileCoord, TileState/* default.IDLE */.Z.IDLE, { interpolate: !!opt_interpolate }) || this;
        /**
         * @private
         * @type {boolean}
         */
        _this.renderEdges_ = opt_renderEdges !== undefined ? opt_renderEdges : false;
        /**
         * @private
         * @type {number}
         */
        _this.pixelRatio_ = pixelRatio;
        /**
         * @private
         * @type {number}
         */
        _this.gutter_ = gutter;
        /**
         * @private
         * @type {HTMLCanvasElement}
         */
        _this.canvas_ = null;
        /**
         * @private
         * @type {import("../tilegrid/TileGrid.js").default}
         */
        _this.sourceTileGrid_ = sourceTileGrid;
        /**
         * @private
         * @type {import("../tilegrid/TileGrid.js").default}
         */
        _this.targetTileGrid_ = targetTileGrid;
        /**
         * @private
         * @type {import("../tilecoord.js").TileCoord}
         */
        _this.wrappedTileCoord_ = wrappedTileCoord ? wrappedTileCoord : tileCoord;
        /**
         * @private
         * @type {!Array<import("../Tile.js").default>}
         */
        _this.sourceTiles_ = [];
        /**
         * @private
         * @type {?Array<import("../events.js").EventsKey>}
         */
        _this.sourcesListenerKeys_ = null;
        /**
         * @private
         * @type {number}
         */
        _this.sourceZ_ = 0;
        var targetExtent = targetTileGrid.getTileCoordExtent(_this.wrappedTileCoord_);
        var maxTargetExtent = _this.targetTileGrid_.getExtent();
        var maxSourceExtent = _this.sourceTileGrid_.getExtent();
        var limitedTargetExtent = maxTargetExtent
            ? (0,ol_extent/* getIntersection */.Ed)(targetExtent, maxTargetExtent)
            : targetExtent;
        if ((0,ol_extent/* getArea */.bg)(limitedTargetExtent) === 0) {
            // Tile is completely outside range -> EMPTY
            // TODO: is it actually correct that the source even creates the tile ?
            _this.state = TileState/* default.EMPTY */.Z.EMPTY;
            return _this;
        }
        var sourceProjExtent = sourceProj.getExtent();
        if (sourceProjExtent) {
            if (!maxSourceExtent) {
                maxSourceExtent = sourceProjExtent;
            }
            else {
                maxSourceExtent = (0,ol_extent/* getIntersection */.Ed)(maxSourceExtent, sourceProjExtent);
            }
        }
        var targetResolution = targetTileGrid.getResolution(_this.wrappedTileCoord_[0]);
        var sourceResolution = calculateSourceExtentResolution(sourceProj, targetProj, limitedTargetExtent, targetResolution);
        if (!isFinite(sourceResolution) || sourceResolution <= 0) {
            // invalid sourceResolution -> EMPTY
            // probably edges of the projections when no extent is defined
            _this.state = TileState/* default.EMPTY */.Z.EMPTY;
            return _this;
        }
        var errorThresholdInPixels = opt_errorThreshold !== undefined ? opt_errorThreshold : common/* ERROR_THRESHOLD */.m;
        /**
         * @private
         * @type {!import("./Triangulation.js").default}
         */
        _this.triangulation_ = new reproj_Triangulation(sourceProj, targetProj, limitedTargetExtent, maxSourceExtent, sourceResolution * errorThresholdInPixels, targetResolution);
        if (_this.triangulation_.getTriangles().length === 0) {
            // no valid triangles -> EMPTY
            _this.state = TileState/* default.EMPTY */.Z.EMPTY;
            return _this;
        }
        _this.sourceZ_ = sourceTileGrid.getZForResolution(sourceResolution);
        var sourceExtent = _this.triangulation_.calculateSourceExtent();
        if (maxSourceExtent) {
            if (sourceProj.canWrapX()) {
                sourceExtent[1] = (0,math/* clamp */.uZ)(sourceExtent[1], maxSourceExtent[1], maxSourceExtent[3]);
                sourceExtent[3] = (0,math/* clamp */.uZ)(sourceExtent[3], maxSourceExtent[1], maxSourceExtent[3]);
            }
            else {
                sourceExtent = (0,ol_extent/* getIntersection */.Ed)(sourceExtent, maxSourceExtent);
            }
        }
        if (!(0,ol_extent/* getArea */.bg)(sourceExtent)) {
            _this.state = TileState/* default.EMPTY */.Z.EMPTY;
        }
        else {
            var sourceRange = sourceTileGrid.getTileRangeForExtentAndZ(sourceExtent, _this.sourceZ_);
            for (var srcX = sourceRange.minX; srcX <= sourceRange.maxX; srcX++) {
                for (var srcY = sourceRange.minY; srcY <= sourceRange.maxY; srcY++) {
                    var tile = getTileFunction(_this.sourceZ_, srcX, srcY, pixelRatio);
                    if (tile) {
                        _this.sourceTiles_.push(tile);
                    }
                }
            }
            if (_this.sourceTiles_.length === 0) {
                _this.state = TileState/* default.EMPTY */.Z.EMPTY;
            }
        }
        return _this;
    }
    /**
     * Get the HTML Canvas element for this tile.
     * @return {HTMLCanvasElement} Canvas.
     */
    ReprojTile.prototype.getImage = function () {
        return this.canvas_;
    };
    /**
     * @private
     */
    ReprojTile.prototype.reproject_ = function () {
        var sources = [];
        this.sourceTiles_.forEach(function (tile, i, arr) {
            if (tile && tile.getState() == TileState/* default.LOADED */.Z.LOADED) {
                sources.push({
                    extent: this.sourceTileGrid_.getTileCoordExtent(tile.tileCoord),
                    image: tile.getImage(),
                });
            }
        }.bind(this));
        this.sourceTiles_.length = 0;
        if (sources.length === 0) {
            this.state = TileState/* default.ERROR */.Z.ERROR;
        }
        else {
            var z = this.wrappedTileCoord_[0];
            var size = this.targetTileGrid_.getTileSize(z);
            var width = typeof size === 'number' ? size : size[0];
            var height = typeof size === 'number' ? size : size[1];
            var targetResolution = this.targetTileGrid_.getResolution(z);
            var sourceResolution = this.sourceTileGrid_.getResolution(this.sourceZ_);
            var targetExtent = this.targetTileGrid_.getTileCoordExtent(this.wrappedTileCoord_);
            this.canvas_ = render(width, height, this.pixelRatio_, sourceResolution, this.sourceTileGrid_.getExtent(), targetResolution, targetExtent, this.triangulation_, sources, this.gutter_, this.renderEdges_, this.interpolate);
            this.state = TileState/* default.LOADED */.Z.LOADED;
        }
        this.changed();
    };
    /**
     * Load not yet loaded URI.
     */
    ReprojTile.prototype.load = function () {
        if (this.state == TileState/* default.IDLE */.Z.IDLE) {
            this.state = TileState/* default.LOADING */.Z.LOADING;
            this.changed();
            var leftToLoad_1 = 0;
            this.sourcesListenerKeys_ = [];
            this.sourceTiles_.forEach(function (tile, i, arr) {
                var state = tile.getState();
                if (state == TileState/* default.IDLE */.Z.IDLE || state == TileState/* default.LOADING */.Z.LOADING) {
                    leftToLoad_1++;
                    var sourceListenKey_1 = (0,events/* listen */.oL)(tile, EventType/* default.CHANGE */.Z.CHANGE, function (e) {
                        var state = tile.getState();
                        if (state == TileState/* default.LOADED */.Z.LOADED ||
                            state == TileState/* default.ERROR */.Z.ERROR ||
                            state == TileState/* default.EMPTY */.Z.EMPTY) {
                            (0,events/* unlistenByKey */.bN)(sourceListenKey_1);
                            leftToLoad_1--;
                            if (leftToLoad_1 === 0) {
                                this.unlistenSources_();
                                this.reproject_();
                            }
                        }
                    }, this);
                    this.sourcesListenerKeys_.push(sourceListenKey_1);
                }
            }.bind(this));
            if (leftToLoad_1 === 0) {
                setTimeout(this.reproject_.bind(this), 0);
            }
            else {
                this.sourceTiles_.forEach(function (tile, i, arr) {
                    var state = tile.getState();
                    if (state == TileState/* default.IDLE */.Z.IDLE) {
                        tile.load();
                    }
                });
            }
        }
    };
    /**
     * @private
     */
    ReprojTile.prototype.unlistenSources_ = function () {
        this.sourcesListenerKeys_.forEach(events/* unlistenByKey */.bN);
        this.sourcesListenerKeys_ = null;
    };
    /**
     * Remove from the cache due to expiry
     */
    ReprojTile.prototype.release = function () {
        if (this.canvas_) {
            (0,dom/* releaseCanvas */.jy)(this.canvas_.getContext('2d'));
            canvasPool.push(this.canvas_);
            this.canvas_ = null;
        }
        _super.prototype.release.call(this);
    };
    return ReprojTile;
}(Tile/* default */.Z));
/* harmony default export */ const reproj_Tile = (ReprojTile);
//# sourceMappingURL=Tile.js.map

/***/ }),

/***/ 4773:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ ENABLE_RASTER_REPROJECTION),
/* harmony export */   "m": () => (/* binding */ ERROR_THRESHOLD)
/* harmony export */ });
/**
 * @module ol/reproj/common
 */
/**
 * Default maximum allowed threshold  (in pixels) for reprojection
 * triangulation.
 * @type {number}
 */
var ERROR_THRESHOLD = 0.5;
/**
 * Enable automatic reprojection of raster sources. Default is `true`.
 * TODO: decide if we want to expose this as a build flag or remove it
 * @type {boolean}
 */
var ENABLE_RASTER_REPROJECTION = true;
//# sourceMappingURL=common.js.map

/***/ }),

/***/ 828:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gw": () => (/* binding */ createSnapToZero),
/* harmony export */   "YP": () => (/* binding */ none),
/* harmony export */   "gE": () => (/* binding */ createSnapToN),
/* harmony export */   "h$": () => (/* binding */ disable)
/* harmony export */ });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3983);
/**
 * @module ol/rotationconstraint
 */

/**
 * @typedef {function((number|undefined), boolean=): (number|undefined)} Type
 */
/**
 * @param {number|undefined} rotation Rotation.
 * @return {number|undefined} Rotation.
 */
function disable(rotation) {
    if (rotation !== undefined) {
        return 0;
    }
    else {
        return undefined;
    }
}
/**
 * @param {number|undefined} rotation Rotation.
 * @return {number|undefined} Rotation.
 */
function none(rotation) {
    if (rotation !== undefined) {
        return rotation;
    }
    else {
        return undefined;
    }
}
/**
 * @param {number} n N.
 * @return {Type} Rotation constraint.
 */
function createSnapToN(n) {
    var theta = (2 * Math.PI) / n;
    return (
    /**
     * @param {number|undefined} rotation Rotation.
     * @param {boolean} [opt_isMoving] True if an interaction or animation is in progress.
     * @return {number|undefined} Rotation.
     */
    function (rotation, opt_isMoving) {
        if (opt_isMoving) {
            return rotation;
        }
        if (rotation !== undefined) {
            rotation = Math.floor(rotation / theta + 0.5) * theta;
            return rotation;
        }
        else {
            return undefined;
        }
    });
}
/**
 * @param {number} [opt_tolerance] Tolerance.
 * @return {Type} Rotation constraint.
 */
function createSnapToZero(opt_tolerance) {
    var tolerance = opt_tolerance || (0,_math_js__WEBPACK_IMPORTED_MODULE_0__/* .toRadians */ .Yr)(5);
    return (
    /**
     * @param {number|undefined} rotation Rotation.
     * @param {boolean} [opt_isMoving] True if an interaction or animation is in progress.
     * @return {number|undefined} Rotation.
     */
    function (rotation, opt_isMoving) {
        if (opt_isMoving) {
            return rotation;
        }
        if (rotation !== undefined) {
            if (Math.abs(rotation) <= tolerance) {
                return 0;
            }
            else {
                return rotation;
            }
        }
        else {
            return undefined;
        }
    });
}
//# sourceMappingURL=rotationconstraint.js.map

/***/ }),

/***/ 4307:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pq": () => (/* binding */ toSize),
/* harmony export */   "bA": () => (/* binding */ scale),
/* harmony export */   "py": () => (/* binding */ hasArea)
/* harmony export */ });
/* unused harmony export buffer */
/**
 * @module ol/size
 */
/**
 * An array of numbers representing a size: `[width, height]`.
 * @typedef {Array<number>} Size
 * @api
 */
/**
 * Returns a buffered size.
 * @param {Size} size Size.
 * @param {number} num The amount by which to buffer.
 * @param {Size} [opt_size] Optional reusable size array.
 * @return {Size} The buffered size.
 */
function buffer(size, num, opt_size) {
    if (opt_size === undefined) {
        opt_size = [0, 0];
    }
    opt_size[0] = size[0] + 2 * num;
    opt_size[1] = size[1] + 2 * num;
    return opt_size;
}
/**
 * Determines if a size has a positive area.
 * @param {Size} size The size to test.
 * @return {boolean} The size has a positive area.
 */
function hasArea(size) {
    return size[0] > 0 && size[1] > 0;
}
/**
 * Returns a size scaled by a ratio. The result will be an array of integers.
 * @param {Size} size Size.
 * @param {number} ratio Ratio.
 * @param {Size} [opt_size] Optional reusable size array.
 * @return {Size} The scaled size.
 */
function scale(size, ratio, opt_size) {
    if (opt_size === undefined) {
        opt_size = [0, 0];
    }
    opt_size[0] = (size[0] * ratio + 0.5) | 0;
    opt_size[1] = (size[1] * ratio + 0.5) | 0;
    return opt_size;
}
/**
 * Returns an `Size` array for the passed in number (meaning: square) or
 * `Size` array.
 * (meaning: non-square),
 * @param {number|Size} size Width and height.
 * @param {Size} [opt_size] Optional reusable size array.
 * @return {Size} Size.
 * @api
 */
function toSize(size, opt_size) {
    if (Array.isArray(size)) {
        return size;
    }
    else {
        if (opt_size === undefined) {
            opt_size = [size, size];
        }
        else {
            opt_size[0] = size;
            opt_size[1] = size;
        }
        return opt_size;
    }
}
//# sourceMappingURL=size.js.map

/***/ }),

/***/ 4542:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ source_XYZ)
});

// EXTERNAL MODULE: ./node_modules/ol/events/EventType.js
var EventType = __webpack_require__(5487);
// EXTERNAL MODULE: ./node_modules/ol/ImageTile.js + 2 modules
var ImageTile = __webpack_require__(34);
// EXTERNAL MODULE: ./node_modules/ol/reproj/Tile.js + 2 modules
var Tile = __webpack_require__(6113);
// EXTERNAL MODULE: ./node_modules/ol/asserts.js
var asserts = __webpack_require__(9515);
;// CONCATENATED MODULE: ./node_modules/ol/structs/LRUCache.js
/**
 * @module ol/structs/LRUCache
 */

/**
 * @typedef {Object} Entry
 * @property {string} key_ Key.
 * @property {Object} newer Newer.
 * @property {Object} older Older.
 * @property {*} value_ Value.
 */
/**
 * @classdesc
 * Implements a Least-Recently-Used cache where the keys do not conflict with
 * Object's properties (e.g. 'hasOwnProperty' is not allowed as a key). Expiring
 * items from the cache is the responsibility of the user.
 *
 * @fires import("../events/Event.js").default
 * @template T
 */
var LRUCache = /** @class */ (function () {
    /**
     * @param {number} [opt_highWaterMark] High water mark.
     */
    function LRUCache(opt_highWaterMark) {
        /**
         * Desired max cache size after expireCache(). If set to 0, no cache entries
         * will be pruned at all.
         * @type {number}
         */
        this.highWaterMark =
            opt_highWaterMark !== undefined ? opt_highWaterMark : 2048;
        /**
         * @private
         * @type {number}
         */
        this.count_ = 0;
        /**
         * @private
         * @type {!Object<string, Entry>}
         */
        this.entries_ = {};
        /**
         * @private
         * @type {?Entry}
         */
        this.oldest_ = null;
        /**
         * @private
         * @type {?Entry}
         */
        this.newest_ = null;
    }
    /**
     * @return {boolean} Can expire cache.
     */
    LRUCache.prototype.canExpireCache = function () {
        return this.highWaterMark > 0 && this.getCount() > this.highWaterMark;
    };
    /**
     * Expire the cache.
     * @param {!Object<string, boolean>} [keep] Keys to keep. To be implemented by subclasses.
     */
    LRUCache.prototype.expireCache = function (keep) {
        while (this.canExpireCache()) {
            this.pop();
        }
    };
    /**
     * FIXME empty description for jsdoc
     */
    LRUCache.prototype.clear = function () {
        this.count_ = 0;
        this.entries_ = {};
        this.oldest_ = null;
        this.newest_ = null;
    };
    /**
     * @param {string} key Key.
     * @return {boolean} Contains key.
     */
    LRUCache.prototype.containsKey = function (key) {
        return this.entries_.hasOwnProperty(key);
    };
    /**
     * @param {function(T, string, LRUCache<T>): ?} f The function
     *     to call for every entry from the oldest to the newer. This function takes
     *     3 arguments (the entry value, the entry key and the LRUCache object).
     *     The return value is ignored.
     */
    LRUCache.prototype.forEach = function (f) {
        var entry = this.oldest_;
        while (entry) {
            f(entry.value_, entry.key_, this);
            entry = entry.newer;
        }
    };
    /**
     * @param {string} key Key.
     * @param {*} [opt_options] Options (reserved for subclasses).
     * @return {T} Value.
     */
    LRUCache.prototype.get = function (key, opt_options) {
        var entry = this.entries_[key];
        (0,asserts/* assert */.h)(entry !== undefined, 15); // Tried to get a value for a key that does not exist in the cache
        if (entry === this.newest_) {
            return entry.value_;
        }
        else if (entry === this.oldest_) {
            this.oldest_ = /** @type {Entry} */ (this.oldest_.newer);
            this.oldest_.older = null;
        }
        else {
            entry.newer.older = entry.older;
            entry.older.newer = entry.newer;
        }
        entry.newer = null;
        entry.older = this.newest_;
        this.newest_.newer = entry;
        this.newest_ = entry;
        return entry.value_;
    };
    /**
     * Remove an entry from the cache.
     * @param {string} key The entry key.
     * @return {T} The removed entry.
     */
    LRUCache.prototype.remove = function (key) {
        var entry = this.entries_[key];
        (0,asserts/* assert */.h)(entry !== undefined, 15); // Tried to get a value for a key that does not exist in the cache
        if (entry === this.newest_) {
            this.newest_ = /** @type {Entry} */ (entry.older);
            if (this.newest_) {
                this.newest_.newer = null;
            }
        }
        else if (entry === this.oldest_) {
            this.oldest_ = /** @type {Entry} */ (entry.newer);
            if (this.oldest_) {
                this.oldest_.older = null;
            }
        }
        else {
            entry.newer.older = entry.older;
            entry.older.newer = entry.newer;
        }
        delete this.entries_[key];
        --this.count_;
        return entry.value_;
    };
    /**
     * @return {number} Count.
     */
    LRUCache.prototype.getCount = function () {
        return this.count_;
    };
    /**
     * @return {Array<string>} Keys.
     */
    LRUCache.prototype.getKeys = function () {
        var keys = new Array(this.count_);
        var i = 0;
        var entry;
        for (entry = this.newest_; entry; entry = entry.older) {
            keys[i++] = entry.key_;
        }
        return keys;
    };
    /**
     * @return {Array<T>} Values.
     */
    LRUCache.prototype.getValues = function () {
        var values = new Array(this.count_);
        var i = 0;
        var entry;
        for (entry = this.newest_; entry; entry = entry.older) {
            values[i++] = entry.value_;
        }
        return values;
    };
    /**
     * @return {T} Last value.
     */
    LRUCache.prototype.peekLast = function () {
        return this.oldest_.value_;
    };
    /**
     * @return {string} Last key.
     */
    LRUCache.prototype.peekLastKey = function () {
        return this.oldest_.key_;
    };
    /**
     * Get the key of the newest item in the cache.  Throws if the cache is empty.
     * @return {string} The newest key.
     */
    LRUCache.prototype.peekFirstKey = function () {
        return this.newest_.key_;
    };
    /**
     * Return an entry without updating least recently used time.
     * @param {string} key Key.
     * @return {T} Value.
     */
    LRUCache.prototype.peek = function (key) {
        if (!this.containsKey(key)) {
            return undefined;
        }
        return this.entries_[key].value_;
    };
    /**
     * @return {T} value Value.
     */
    LRUCache.prototype.pop = function () {
        var entry = this.oldest_;
        delete this.entries_[entry.key_];
        if (entry.newer) {
            entry.newer.older = null;
        }
        this.oldest_ = /** @type {Entry} */ (entry.newer);
        if (!this.oldest_) {
            this.newest_ = null;
        }
        --this.count_;
        return entry.value_;
    };
    /**
     * @param {string} key Key.
     * @param {T} value Value.
     */
    LRUCache.prototype.replace = function (key, value) {
        this.get(key); // update `newest_`
        this.entries_[key].value_ = value;
    };
    /**
     * @param {string} key Key.
     * @param {T} value Value.
     */
    LRUCache.prototype.set = function (key, value) {
        (0,asserts/* assert */.h)(!(key in this.entries_), 16); // Tried to set a value for a key that is used already
        var entry = {
            key_: key,
            newer: null,
            older: this.newest_,
            value_: value,
        };
        if (!this.newest_) {
            this.oldest_ = entry;
        }
        else {
            this.newest_.newer = entry;
        }
        this.newest_ = entry;
        this.entries_[key] = entry;
        ++this.count_;
    };
    /**
     * Set a maximum number of entries for the cache.
     * @param {number} size Cache size.
     * @api
     */
    LRUCache.prototype.setSize = function (size) {
        this.highWaterMark = size;
    };
    return LRUCache;
}());
/* harmony default export */ const structs_LRUCache = (LRUCache);
//# sourceMappingURL=LRUCache.js.map
;// CONCATENATED MODULE: ./node_modules/ol/tilecoord.js
/**
 * @module ol/tilecoord
 */
/**
 * An array of three numbers representing the location of a tile in a tile
 * grid. The order is `z` (zoom level), `x` (column), and `y` (row).
 * @typedef {Array<number>} TileCoord
 * @api
 */
/**
 * @param {number} z Z.
 * @param {number} x X.
 * @param {number} y Y.
 * @param {TileCoord} [opt_tileCoord] Tile coordinate.
 * @return {TileCoord} Tile coordinate.
 */
function createOrUpdate(z, x, y, opt_tileCoord) {
    if (opt_tileCoord !== undefined) {
        opt_tileCoord[0] = z;
        opt_tileCoord[1] = x;
        opt_tileCoord[2] = y;
        return opt_tileCoord;
    }
    else {
        return [z, x, y];
    }
}
/**
 * @param {number} z Z.
 * @param {number} x X.
 * @param {number} y Y.
 * @return {string} Key.
 */
function getKeyZXY(z, x, y) {
    return z + '/' + x + '/' + y;
}
/**
 * Get the key for a tile coord.
 * @param {TileCoord} tileCoord The tile coord.
 * @return {string} Key.
 */
function getKey(tileCoord) {
    return getKeyZXY(tileCoord[0], tileCoord[1], tileCoord[2]);
}
/**
 * Get the tile cache key for a tile key obtained through `tile.getKey()`.
 * @param {string} tileKey The tile key.
 * @return {string} The cache key.
 */
function getCacheKeyForTileKey(tileKey) {
    var _a = tileKey
        .substring(tileKey.lastIndexOf('/') + 1, tileKey.length)
        .split(',')
        .map(Number), z = _a[0], x = _a[1], y = _a[2];
    return getKeyZXY(z, x, y);
}
/**
 * Get a tile coord given a key.
 * @param {string} key The tile coord key.
 * @return {TileCoord} The tile coord.
 */
function fromKey(key) {
    return key.split('/').map(Number);
}
/**
 * @param {TileCoord} tileCoord Tile coord.
 * @return {number} Hash.
 */
function hash(tileCoord) {
    return (tileCoord[1] << tileCoord[0]) + tileCoord[2];
}
/**
 * @param {TileCoord} tileCoord Tile coordinate.
 * @param {!import("./tilegrid/TileGrid.js").default} tileGrid Tile grid.
 * @return {boolean} Tile coordinate is within extent and zoom level range.
 */
function withinExtentAndZ(tileCoord, tileGrid) {
    var z = tileCoord[0];
    var x = tileCoord[1];
    var y = tileCoord[2];
    if (tileGrid.getMinZoom() > z || z > tileGrid.getMaxZoom()) {
        return false;
    }
    var tileRange = tileGrid.getFullTileRange(z);
    if (!tileRange) {
        return true;
    }
    else {
        return tileRange.containsXY(x, y);
    }
}
//# sourceMappingURL=tilecoord.js.map
;// CONCATENATED MODULE: ./node_modules/ol/TileCache.js
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @module ol/TileCache
 */


var TileCache = /** @class */ (function (_super) {
    __extends(TileCache, _super);
    function TileCache() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {!Object<string, boolean>} usedTiles Used tiles.
     */
    TileCache.prototype.expireCache = function (usedTiles) {
        while (this.canExpireCache()) {
            var tile = this.peekLast();
            if (tile.getKey() in usedTiles) {
                break;
            }
            else {
                this.pop().release();
            }
        }
    };
    /**
     * Prune all tiles from the cache that don't have the same z as the newest tile.
     */
    TileCache.prototype.pruneExceptNewestZ = function () {
        if (this.getCount() === 0) {
            return;
        }
        var key = this.peekFirstKey();
        var tileCoord = fromKey(key);
        var z = tileCoord[0];
        this.forEach(function (tile) {
            if (tile.tileCoord[0] !== z) {
                this.remove(getKey(tile.tileCoord));
                tile.release();
            }
        }.bind(this));
    };
    return TileCache;
}(structs_LRUCache));
/* harmony default export */ const ol_TileCache = (TileCache);
//# sourceMappingURL=TileCache.js.map
// EXTERNAL MODULE: ./node_modules/ol/TileState.js
var TileState = __webpack_require__(7195);
;// CONCATENATED MODULE: ./node_modules/ol/source/TileEventType.js
/**
 * @module ol/source/TileEventType
 */
/**
 * @enum {string}
 */
/* harmony default export */ const TileEventType = ({
    /**
     * Triggered when a tile starts loading.
     * @event module:ol/source/Tile.TileSourceEvent#tileloadstart
     * @api
     */
    TILELOADSTART: 'tileloadstart',
    /**
     * Triggered when a tile finishes loading, either when its data is loaded,
     * or when loading was aborted because the tile is no longer needed.
     * @event module:ol/source/Tile.TileSourceEvent#tileloadend
     * @api
     */
    TILELOADEND: 'tileloadend',
    /**
     * Triggered if tile loading results in an error.
     * @event module:ol/source/Tile.TileSourceEvent#tileloaderror
     * @api
     */
    TILELOADERROR: 'tileloaderror',
});
/**
 * @typedef {'tileloadstart'|'tileloadend'|'tileloaderror'} TileSourceEventTypes
 */
//# sourceMappingURL=TileEventType.js.map
// EXTERNAL MODULE: ./node_modules/ol/events/Event.js
var Event = __webpack_require__(291);
// EXTERNAL MODULE: ./node_modules/ol/Object.js
var ol_Object = __webpack_require__(2971);
// EXTERNAL MODULE: ./node_modules/ol/util.js
var util = __webpack_require__(4187);
// EXTERNAL MODULE: ./node_modules/ol/proj.js + 6 modules
var ol_proj = __webpack_require__(1311);
;// CONCATENATED MODULE: ./node_modules/ol/source/Source.js
var Source_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @module ol/source/Source
 */



/**
 * @typedef {'undefined' | 'loading' | 'ready' | 'error'} State
 * State of the source, one of 'undefined', 'loading', 'ready' or 'error'.
 */
/**
 * A function that takes a {@link module:ol/PluggableMap~FrameState} and returns a string or
 * an array of strings representing source attributions.
 *
 * @typedef {function(import("../PluggableMap.js").FrameState): (string|Array<string>)} Attribution
 */
/**
 * A type that can be used to provide attribution information for data sources.
 *
 * It represents either
 * * a simple string (e.g. `'© Acme Inc.'`)
 * * an array of simple strings (e.g. `['© Acme Inc.', '© Bacme Inc.']`)
 * * a function that returns a string or array of strings ({@link module:ol/source/Source~Attribution})
 *
 * @typedef {string|Array<string>|Attribution} AttributionLike
 */
/**
 * @typedef {Object} Options
 * @property {AttributionLike} [attributions] Attributions.
 * @property {boolean} [attributionsCollapsible=true] Attributions are collapsible.
 * @property {import("../proj.js").ProjectionLike} [projection] Projection. Default is the view projection.
 * @property {import("./Source.js").State} [state='ready'] State.
 * @property {boolean} [wrapX=false] WrapX.
 * @property {boolean} [interpolate=false] Use interpolated values when resampling.  By default,
 * the nearest neighbor is used when resampling.
 */
/**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * Base class for {@link module:ol/layer/Layer~Layer} sources.
 *
 * A generic `change` event is triggered when the state of the source changes.
 * @abstract
 * @api
 */
var Source = /** @class */ (function (_super) {
    Source_extends(Source, _super);
    /**
     * @param {Options} options Source options.
     */
    function Source(options) {
        var _this = _super.call(this) || this;
        /**
         * @protected
         * @type {import("../proj/Projection.js").default|null}
         */
        _this.projection = (0,ol_proj/* get */.U2)(options.projection);
        /**
         * @private
         * @type {?Attribution}
         */
        _this.attributions_ = adaptAttributions(options.attributions);
        /**
         * @private
         * @type {boolean}
         */
        _this.attributionsCollapsible_ =
            options.attributionsCollapsible !== undefined
                ? options.attributionsCollapsible
                : true;
        /**
         * This source is currently loading data. Sources that defer loading to the
         * map's tile queue never set this to `true`.
         * @type {boolean}
         */
        _this.loading = false;
        /**
         * @private
         * @type {import("./Source.js").State}
         */
        _this.state_ = options.state !== undefined ? options.state : 'ready';
        /**
         * @private
         * @type {boolean}
         */
        _this.wrapX_ = options.wrapX !== undefined ? options.wrapX : false;
        /**
         * @private
         * @type {boolean}
         */
        _this.interpolate_ = !!options.interpolate;
        /**
         * @protected
         * @type {function(import("../View.js").ViewOptions):void}
         */
        _this.viewResolver = null;
        /**
         * @protected
         * @type {function(Error):void}
         */
        _this.viewRejector = null;
        var self = _this;
        /**
         * @private
         * @type {Promise<import("../View.js").ViewOptions>}
         */
        _this.viewPromise_ = new Promise(function (resolve, reject) {
            self.viewResolver = resolve;
            self.viewRejector = reject;
        });
        return _this;
    }
    /**
     * Get the attribution function for the source.
     * @return {?Attribution} Attribution function.
     * @api
     */
    Source.prototype.getAttributions = function () {
        return this.attributions_;
    };
    /**
     * @return {boolean} Attributions are collapsible.
     * @api
     */
    Source.prototype.getAttributionsCollapsible = function () {
        return this.attributionsCollapsible_;
    };
    /**
     * Get the projection of the source.
     * @return {import("../proj/Projection.js").default|null} Projection.
     * @api
     */
    Source.prototype.getProjection = function () {
        return this.projection;
    };
    /**
     * @abstract
     * @return {Array<number>|null} Resolutions.
     */
    Source.prototype.getResolutions = function () {
        return (0,util/* abstract */.O3)();
    };
    /**
     * @return {Promise<import("../View.js").ViewOptions>} A promise for view-related properties.
     */
    Source.prototype.getView = function () {
        return this.viewPromise_;
    };
    /**
     * Get the state of the source, see {@link import("./Source.js").State} for possible states.
     * @return {import("./Source.js").State} State.
     * @api
     */
    Source.prototype.getState = function () {
        return this.state_;
    };
    /**
     * @return {boolean|undefined} Wrap X.
     */
    Source.prototype.getWrapX = function () {
        return this.wrapX_;
    };
    /**
     * @return {boolean} Use linear interpolation when resampling.
     */
    Source.prototype.getInterpolate = function () {
        return this.interpolate_;
    };
    /**
     * Refreshes the source. The source will be cleared, and data from the server will be reloaded.
     * @api
     */
    Source.prototype.refresh = function () {
        this.changed();
    };
    /**
     * Set the attributions of the source.
     * @param {AttributionLike|undefined} attributions Attributions.
     *     Can be passed as `string`, `Array<string>`, {@link module:ol/source/Source~Attribution},
     *     or `undefined`.
     * @api
     */
    Source.prototype.setAttributions = function (attributions) {
        this.attributions_ = adaptAttributions(attributions);
        this.changed();
    };
    /**
     * Set the state of the source.
     * @param {import("./Source.js").State} state State.
     */
    Source.prototype.setState = function (state) {
        this.state_ = state;
        this.changed();
    };
    return Source;
}(ol_Object/* default */.Z));
/**
 * Turns the attributions option into an attributions function.
 * @param {AttributionLike|undefined} attributionLike The attribution option.
 * @return {Attribution|null} An attribution function (or null).
 */
function adaptAttributions(attributionLike) {
    if (!attributionLike) {
        return null;
    }
    if (Array.isArray(attributionLike)) {
        return function (frameState) {
            return attributionLike;
        };
    }
    if (typeof attributionLike === 'function') {
        return attributionLike;
    }
    return function (frameState) {
        return [attributionLike];
    };
}
/* harmony default export */ const source_Source = (Source);
//# sourceMappingURL=Source.js.map
// EXTERNAL MODULE: ./node_modules/ol/TileRange.js
var TileRange = __webpack_require__(2519);
// EXTERNAL MODULE: ./node_modules/ol/tilegrid/common.js
var common = __webpack_require__(4768);
// EXTERNAL MODULE: ./node_modules/ol/math.js
var math = __webpack_require__(3983);
// EXTERNAL MODULE: ./node_modules/ol/extent.js + 1 modules
var ol_extent = __webpack_require__(2833);
// EXTERNAL MODULE: ./node_modules/ol/geom/flat/intersectsextent.js + 1 modules
var intersectsextent = __webpack_require__(6091);
// EXTERNAL MODULE: ./node_modules/ol/array.js
var array = __webpack_require__(5537);
// EXTERNAL MODULE: ./node_modules/ol/size.js
var size = __webpack_require__(4307);
;// CONCATENATED MODULE: ./node_modules/ol/tilegrid/TileGrid.js
/**
 * @module ol/tilegrid/TileGrid
 */









/**
 * @private
 * @type {import("../tilecoord.js").TileCoord}
 */
var tmpTileCoord = [0, 0, 0];
/**
 * Number of decimal digits to consider in integer values when rounding.
 * @type {number}
 */
var DECIMALS = 5;
/**
 * @typedef {Object} Options
 * @property {import("../extent.js").Extent} [extent] Extent for the tile grid. No tiles outside this
 * extent will be requested by {@link module:ol/source/Tile~TileSource} sources. When no `origin` or
 * `origins` are configured, the `origin` will be set to the top-left corner of the extent.
 * @property {number} [minZoom=0] Minimum zoom.
 * @property {import("../coordinate.js").Coordinate} [origin] The tile grid origin, i.e. where the `x`
 * and `y` axes meet (`[z, 0, 0]`). Tile coordinates increase left to right and downwards. If not
 * specified, `extent` or `origins` must be provided.
 * @property {Array<import("../coordinate.js").Coordinate>} [origins] Tile grid origins, i.e. where
 * the `x` and `y` axes meet (`[z, 0, 0]`), for each zoom level. If given, the array length
 * should match the length of the `resolutions` array, i.e. each resolution can have a different
 * origin. Tile coordinates increase left to right and downwards. If not specified, `extent` or
 * `origin` must be provided.
 * @property {!Array<number>} resolutions Resolutions. The array index of each resolution needs
 * to match the zoom level. This means that even if a `minZoom` is configured, the resolutions
 * array will have a length of `maxZoom + 1`.
 * @property {Array<import("../size.js").Size>} [sizes] Number of tile rows and columns
 * of the grid for each zoom level. If specified the values
 * define each zoom level's extent together with the `origin` or `origins`.
 * A grid `extent` can be configured in addition, and will further limit the extent
 * for which tile requests are made by sources. If the bottom-left corner of
 * an extent is used as `origin` or `origins`, then the `y` value must be
 * negative because OpenLayers tile coordinates use the top left as the origin.
 * @property {number|import("../size.js").Size} [tileSize] Tile size.
 * Default is `[256, 256]`.
 * @property {Array<number|import("../size.js").Size>} [tileSizes] Tile sizes. If given, the array length
 * should match the length of the `resolutions` array, i.e. each resolution can have a different
 * tile size.
 */
/**
 * @classdesc
 * Base class for setting the grid pattern for sources accessing tiled-image
 * servers.
 * @api
 */
var TileGrid = /** @class */ (function () {
    /**
     * @param {Options} options Tile grid options.
     */
    function TileGrid(options) {
        /**
         * @protected
         * @type {number}
         */
        this.minZoom = options.minZoom !== undefined ? options.minZoom : 0;
        /**
         * @private
         * @type {!Array<number>}
         */
        this.resolutions_ = options.resolutions;
        (0,asserts/* assert */.h)((0,array/* isSorted */.pT)(this.resolutions_, function (a, b) {
            return b - a;
        }, true), 17); // `resolutions` must be sorted in descending order
        // check if we've got a consistent zoom factor and origin
        var zoomFactor;
        if (!options.origins) {
            for (var i = 0, ii = this.resolutions_.length - 1; i < ii; ++i) {
                if (!zoomFactor) {
                    zoomFactor = this.resolutions_[i] / this.resolutions_[i + 1];
                }
                else {
                    if (this.resolutions_[i] / this.resolutions_[i + 1] !== zoomFactor) {
                        zoomFactor = undefined;
                        break;
                    }
                }
            }
        }
        /**
         * @private
         * @type {number|undefined}
         */
        this.zoomFactor_ = zoomFactor;
        /**
         * @protected
         * @type {number}
         */
        this.maxZoom = this.resolutions_.length - 1;
        /**
         * @private
         * @type {import("../coordinate.js").Coordinate|null}
         */
        this.origin_ = options.origin !== undefined ? options.origin : null;
        /**
         * @private
         * @type {Array<import("../coordinate.js").Coordinate>}
         */
        this.origins_ = null;
        if (options.origins !== undefined) {
            this.origins_ = options.origins;
            (0,asserts/* assert */.h)(this.origins_.length == this.resolutions_.length, 20); // Number of `origins` and `resolutions` must be equal
        }
        var extent = options.extent;
        if (extent !== undefined && !this.origin_ && !this.origins_) {
            this.origin_ = (0,ol_extent/* getTopLeft */.rL)(extent);
        }
        (0,asserts/* assert */.h)((!this.origin_ && this.origins_) || (this.origin_ && !this.origins_), 18); // Either `origin` or `origins` must be configured, never both
        /**
         * @private
         * @type {Array<number|import("../size.js").Size>}
         */
        this.tileSizes_ = null;
        if (options.tileSizes !== undefined) {
            this.tileSizes_ = options.tileSizes;
            (0,asserts/* assert */.h)(this.tileSizes_.length == this.resolutions_.length, 19); // Number of `tileSizes` and `resolutions` must be equal
        }
        /**
         * @private
         * @type {number|import("../size.js").Size}
         */
        this.tileSize_ =
            options.tileSize !== undefined
                ? options.tileSize
                : !this.tileSizes_
                    ? common/* DEFAULT_TILE_SIZE */.S
                    : null;
        (0,asserts/* assert */.h)((!this.tileSize_ && this.tileSizes_) ||
            (this.tileSize_ && !this.tileSizes_), 22); // Either `tileSize` or `tileSizes` must be configured, never both
        /**
         * @private
         * @type {import("../extent.js").Extent}
         */
        this.extent_ = extent !== undefined ? extent : null;
        /**
         * @private
         * @type {Array<import("../TileRange.js").default>}
         */
        this.fullTileRanges_ = null;
        /**
         * @private
         * @type {import("../size.js").Size}
         */
        this.tmpSize_ = [0, 0];
        /**
         * @private
         * @type {import("../extent.js").Extent}
         */
        this.tmpExtent_ = [0, 0, 0, 0];
        if (options.sizes !== undefined) {
            this.fullTileRanges_ = options.sizes.map(function (size, z) {
                var tileRange = new TileRange/* default */.Z(Math.min(0, size[0]), Math.max(size[0] - 1, -1), Math.min(0, size[1]), Math.max(size[1] - 1, -1));
                if (extent) {
                    var restrictedTileRange = this.getTileRangeForExtentAndZ(extent, z);
                    tileRange.minX = Math.max(restrictedTileRange.minX, tileRange.minX);
                    tileRange.maxX = Math.min(restrictedTileRange.maxX, tileRange.maxX);
                    tileRange.minY = Math.max(restrictedTileRange.minY, tileRange.minY);
                    tileRange.maxY = Math.min(restrictedTileRange.maxY, tileRange.maxY);
                }
                return tileRange;
            }, this);
        }
        else if (extent) {
            this.calculateTileRanges_(extent);
        }
    }
    /**
     * Call a function with each tile coordinate for a given extent and zoom level.
     *
     * @param {import("../extent.js").Extent} extent Extent.
     * @param {number} zoom Integer zoom level.
     * @param {function(import("../tilecoord.js").TileCoord): void} callback Function called with each tile coordinate.
     * @api
     */
    TileGrid.prototype.forEachTileCoord = function (extent, zoom, callback) {
        var tileRange = this.getTileRangeForExtentAndZ(extent, zoom);
        for (var i = tileRange.minX, ii = tileRange.maxX; i <= ii; ++i) {
            for (var j = tileRange.minY, jj = tileRange.maxY; j <= jj; ++j) {
                callback([zoom, i, j]);
            }
        }
    };
    /**
     * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
     * @param {function(number, import("../TileRange.js").default): boolean} callback Callback.
     * @param {import("../TileRange.js").default} [opt_tileRange] Temporary import("../TileRange.js").default object.
     * @param {import("../extent.js").Extent} [opt_extent] Temporary import("../extent.js").Extent object.
     * @return {boolean} Callback succeeded.
     */
    TileGrid.prototype.forEachTileCoordParentTileRange = function (tileCoord, callback, opt_tileRange, opt_extent) {
        var tileRange, x, y;
        var tileCoordExtent = null;
        var z = tileCoord[0] - 1;
        if (this.zoomFactor_ === 2) {
            x = tileCoord[1];
            y = tileCoord[2];
        }
        else {
            tileCoordExtent = this.getTileCoordExtent(tileCoord, opt_extent);
        }
        while (z >= this.minZoom) {
            if (this.zoomFactor_ === 2) {
                x = Math.floor(x / 2);
                y = Math.floor(y / 2);
                tileRange = (0,TileRange/* createOrUpdate */.T)(x, x, y, y, opt_tileRange);
            }
            else {
                tileRange = this.getTileRangeForExtentAndZ(tileCoordExtent, z, opt_tileRange);
            }
            if (callback(z, tileRange)) {
                return true;
            }
            --z;
        }
        return false;
    };
    /**
     * Get the extent for this tile grid, if it was configured.
     * @return {import("../extent.js").Extent} Extent.
     * @api
     */
    TileGrid.prototype.getExtent = function () {
        return this.extent_;
    };
    /**
     * Get the maximum zoom level for the grid.
     * @return {number} Max zoom.
     * @api
     */
    TileGrid.prototype.getMaxZoom = function () {
        return this.maxZoom;
    };
    /**
     * Get the minimum zoom level for the grid.
     * @return {number} Min zoom.
     * @api
     */
    TileGrid.prototype.getMinZoom = function () {
        return this.minZoom;
    };
    /**
     * Get the origin for the grid at the given zoom level.
     * @param {number} z Integer zoom level.
     * @return {import("../coordinate.js").Coordinate} Origin.
     * @api
     */
    TileGrid.prototype.getOrigin = function (z) {
        if (this.origin_) {
            return this.origin_;
        }
        else {
            return this.origins_[z];
        }
    };
    /**
     * Get the resolution for the given zoom level.
     * @param {number} z Integer zoom level.
     * @return {number} Resolution.
     * @api
     */
    TileGrid.prototype.getResolution = function (z) {
        return this.resolutions_[z];
    };
    /**
     * Get the list of resolutions for the tile grid.
     * @return {Array<number>} Resolutions.
     * @api
     */
    TileGrid.prototype.getResolutions = function () {
        return this.resolutions_;
    };
    /**
     * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
     * @param {import("../TileRange.js").default} [opt_tileRange] Temporary import("../TileRange.js").default object.
     * @param {import("../extent.js").Extent} [opt_extent] Temporary import("../extent.js").Extent object.
     * @return {import("../TileRange.js").default|null} Tile range.
     */
    TileGrid.prototype.getTileCoordChildTileRange = function (tileCoord, opt_tileRange, opt_extent) {
        if (tileCoord[0] < this.maxZoom) {
            if (this.zoomFactor_ === 2) {
                var minX = tileCoord[1] * 2;
                var minY = tileCoord[2] * 2;
                return (0,TileRange/* createOrUpdate */.T)(minX, minX + 1, minY, minY + 1, opt_tileRange);
            }
            var tileCoordExtent = this.getTileCoordExtent(tileCoord, opt_extent || this.tmpExtent_);
            return this.getTileRangeForExtentAndZ(tileCoordExtent, tileCoord[0] + 1, opt_tileRange);
        }
        return null;
    };
    /**
     * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
     * @param {number} z Integer zoom level.
     * @param {import("../TileRange.js").default} [opt_tileRange] Temporary import("../TileRange.js").default object.
     * @return {import("../TileRange.js").default|null} Tile range.
     */
    TileGrid.prototype.getTileRangeForTileCoordAndZ = function (tileCoord, z, opt_tileRange) {
        if (z > this.maxZoom || z < this.minZoom) {
            return null;
        }
        var tileCoordZ = tileCoord[0];
        var tileCoordX = tileCoord[1];
        var tileCoordY = tileCoord[2];
        if (z === tileCoordZ) {
            return (0,TileRange/* createOrUpdate */.T)(tileCoordX, tileCoordY, tileCoordX, tileCoordY, opt_tileRange);
        }
        if (this.zoomFactor_) {
            var factor = Math.pow(this.zoomFactor_, z - tileCoordZ);
            var minX = Math.floor(tileCoordX * factor);
            var minY = Math.floor(tileCoordY * factor);
            if (z < tileCoordZ) {
                return (0,TileRange/* createOrUpdate */.T)(minX, minX, minY, minY, opt_tileRange);
            }
            var maxX = Math.floor(factor * (tileCoordX + 1)) - 1;
            var maxY = Math.floor(factor * (tileCoordY + 1)) - 1;
            return (0,TileRange/* createOrUpdate */.T)(minX, maxX, minY, maxY, opt_tileRange);
        }
        var tileCoordExtent = this.getTileCoordExtent(tileCoord, this.tmpExtent_);
        return this.getTileRangeForExtentAndZ(tileCoordExtent, z, opt_tileRange);
    };
    /**
     * Get the extent for a tile range.
     * @param {number} z Integer zoom level.
     * @param {import("../TileRange.js").default} tileRange Tile range.
     * @param {import("../extent.js").Extent} [opt_extent] Temporary import("../extent.js").Extent object.
     * @return {import("../extent.js").Extent} Extent.
     */
    TileGrid.prototype.getTileRangeExtent = function (z, tileRange, opt_extent) {
        var origin = this.getOrigin(z);
        var resolution = this.getResolution(z);
        var tileSize = (0,size/* toSize */.Pq)(this.getTileSize(z), this.tmpSize_);
        var minX = origin[0] + tileRange.minX * tileSize[0] * resolution;
        var maxX = origin[0] + (tileRange.maxX + 1) * tileSize[0] * resolution;
        var minY = origin[1] + tileRange.minY * tileSize[1] * resolution;
        var maxY = origin[1] + (tileRange.maxY + 1) * tileSize[1] * resolution;
        return (0,ol_extent/* createOrUpdate */.T9)(minX, minY, maxX, maxY, opt_extent);
    };
    /**
     * Get a tile range for the given extent and integer zoom level.
     * @param {import("../extent.js").Extent} extent Extent.
     * @param {number} z Integer zoom level.
     * @param {import("../TileRange.js").default} [opt_tileRange] Temporary tile range object.
     * @return {import("../TileRange.js").default} Tile range.
     */
    TileGrid.prototype.getTileRangeForExtentAndZ = function (extent, z, opt_tileRange) {
        var tileCoord = tmpTileCoord;
        this.getTileCoordForXYAndZ_(extent[0], extent[3], z, false, tileCoord);
        var minX = tileCoord[1];
        var minY = tileCoord[2];
        this.getTileCoordForXYAndZ_(extent[2], extent[1], z, true, tileCoord);
        return (0,TileRange/* createOrUpdate */.T)(minX, tileCoord[1], minY, tileCoord[2], opt_tileRange);
    };
    /**
     * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
     * @return {import("../coordinate.js").Coordinate} Tile center.
     */
    TileGrid.prototype.getTileCoordCenter = function (tileCoord) {
        var origin = this.getOrigin(tileCoord[0]);
        var resolution = this.getResolution(tileCoord[0]);
        var tileSize = (0,size/* toSize */.Pq)(this.getTileSize(tileCoord[0]), this.tmpSize_);
        return [
            origin[0] + (tileCoord[1] + 0.5) * tileSize[0] * resolution,
            origin[1] - (tileCoord[2] + 0.5) * tileSize[1] * resolution,
        ];
    };
    /**
     * Get the extent of a tile coordinate.
     *
     * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
     * @param {import("../extent.js").Extent} [opt_extent] Temporary extent object.
     * @return {import("../extent.js").Extent} Extent.
     * @api
     */
    TileGrid.prototype.getTileCoordExtent = function (tileCoord, opt_extent) {
        var origin = this.getOrigin(tileCoord[0]);
        var resolution = this.getResolution(tileCoord[0]);
        var tileSize = (0,size/* toSize */.Pq)(this.getTileSize(tileCoord[0]), this.tmpSize_);
        var minX = origin[0] + tileCoord[1] * tileSize[0] * resolution;
        var minY = origin[1] - (tileCoord[2] + 1) * tileSize[1] * resolution;
        var maxX = minX + tileSize[0] * resolution;
        var maxY = minY + tileSize[1] * resolution;
        return (0,ol_extent/* createOrUpdate */.T9)(minX, minY, maxX, maxY, opt_extent);
    };
    /**
     * Get the tile coordinate for the given map coordinate and resolution.  This
     * method considers that coordinates that intersect tile boundaries should be
     * assigned the higher tile coordinate.
     *
     * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
     * @param {number} resolution Resolution.
     * @param {import("../tilecoord.js").TileCoord} [opt_tileCoord] Destination import("../tilecoord.js").TileCoord object.
     * @return {import("../tilecoord.js").TileCoord} Tile coordinate.
     * @api
     */
    TileGrid.prototype.getTileCoordForCoordAndResolution = function (coordinate, resolution, opt_tileCoord) {
        return this.getTileCoordForXYAndResolution_(coordinate[0], coordinate[1], resolution, false, opt_tileCoord);
    };
    /**
     * Note that this method should not be called for resolutions that correspond
     * to an integer zoom level.  Instead call the `getTileCoordForXYAndZ_` method.
     * @param {number} x X.
     * @param {number} y Y.
     * @param {number} resolution Resolution (for a non-integer zoom level).
     * @param {boolean} reverseIntersectionPolicy Instead of letting edge
     *     intersections go to the higher tile coordinate, let edge intersections
     *     go to the lower tile coordinate.
     * @param {import("../tilecoord.js").TileCoord} [opt_tileCoord] Temporary import("../tilecoord.js").TileCoord object.
     * @return {import("../tilecoord.js").TileCoord} Tile coordinate.
     * @private
     */
    TileGrid.prototype.getTileCoordForXYAndResolution_ = function (x, y, resolution, reverseIntersectionPolicy, opt_tileCoord) {
        var z = this.getZForResolution(resolution);
        var scale = resolution / this.getResolution(z);
        var origin = this.getOrigin(z);
        var tileSize = (0,size/* toSize */.Pq)(this.getTileSize(z), this.tmpSize_);
        var tileCoordX = (scale * (x - origin[0])) / resolution / tileSize[0];
        var tileCoordY = (scale * (origin[1] - y)) / resolution / tileSize[1];
        if (reverseIntersectionPolicy) {
            tileCoordX = (0,math/* ceil */.mD)(tileCoordX, DECIMALS) - 1;
            tileCoordY = (0,math/* ceil */.mD)(tileCoordY, DECIMALS) - 1;
        }
        else {
            tileCoordX = (0,math/* floor */.GW)(tileCoordX, DECIMALS);
            tileCoordY = (0,math/* floor */.GW)(tileCoordY, DECIMALS);
        }
        return createOrUpdate(z, tileCoordX, tileCoordY, opt_tileCoord);
    };
    /**
     * Although there is repetition between this method and `getTileCoordForXYAndResolution_`,
     * they should have separate implementations.  This method is for integer zoom
     * levels.  The other method should only be called for resolutions corresponding
     * to non-integer zoom levels.
     * @param {number} x Map x coordinate.
     * @param {number} y Map y coordinate.
     * @param {number} z Integer zoom level.
     * @param {boolean} reverseIntersectionPolicy Instead of letting edge
     *     intersections go to the higher tile coordinate, let edge intersections
     *     go to the lower tile coordinate.
     * @param {import("../tilecoord.js").TileCoord} [opt_tileCoord] Temporary import("../tilecoord.js").TileCoord object.
     * @return {import("../tilecoord.js").TileCoord} Tile coordinate.
     * @private
     */
    TileGrid.prototype.getTileCoordForXYAndZ_ = function (x, y, z, reverseIntersectionPolicy, opt_tileCoord) {
        var origin = this.getOrigin(z);
        var resolution = this.getResolution(z);
        var tileSize = (0,size/* toSize */.Pq)(this.getTileSize(z), this.tmpSize_);
        var tileCoordX = (x - origin[0]) / resolution / tileSize[0];
        var tileCoordY = (origin[1] - y) / resolution / tileSize[1];
        if (reverseIntersectionPolicy) {
            tileCoordX = (0,math/* ceil */.mD)(tileCoordX, DECIMALS) - 1;
            tileCoordY = (0,math/* ceil */.mD)(tileCoordY, DECIMALS) - 1;
        }
        else {
            tileCoordX = (0,math/* floor */.GW)(tileCoordX, DECIMALS);
            tileCoordY = (0,math/* floor */.GW)(tileCoordY, DECIMALS);
        }
        return createOrUpdate(z, tileCoordX, tileCoordY, opt_tileCoord);
    };
    /**
     * Get a tile coordinate given a map coordinate and zoom level.
     * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
     * @param {number} z Zoom level.
     * @param {import("../tilecoord.js").TileCoord} [opt_tileCoord] Destination import("../tilecoord.js").TileCoord object.
     * @return {import("../tilecoord.js").TileCoord} Tile coordinate.
     * @api
     */
    TileGrid.prototype.getTileCoordForCoordAndZ = function (coordinate, z, opt_tileCoord) {
        return this.getTileCoordForXYAndZ_(coordinate[0], coordinate[1], z, false, opt_tileCoord);
    };
    /**
     * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
     * @return {number} Tile resolution.
     */
    TileGrid.prototype.getTileCoordResolution = function (tileCoord) {
        return this.resolutions_[tileCoord[0]];
    };
    /**
     * Get the tile size for a zoom level. The type of the return value matches the
     * `tileSize` or `tileSizes` that the tile grid was configured with. To always
     * get an {@link import("../size.js").Size}, run the result through {@link module:ol/size.toSize}.
     * @param {number} z Z.
     * @return {number|import("../size.js").Size} Tile size.
     * @api
     */
    TileGrid.prototype.getTileSize = function (z) {
        if (this.tileSize_) {
            return this.tileSize_;
        }
        else {
            return this.tileSizes_[z];
        }
    };
    /**
     * @param {number} z Zoom level.
     * @return {import("../TileRange.js").default} Extent tile range for the specified zoom level.
     */
    TileGrid.prototype.getFullTileRange = function (z) {
        if (!this.fullTileRanges_) {
            return this.extent_
                ? this.getTileRangeForExtentAndZ(this.extent_, z)
                : null;
        }
        else {
            return this.fullTileRanges_[z];
        }
    };
    /**
     * @param {number} resolution Resolution.
     * @param {number|import("../array.js").NearestDirectionFunction} [opt_direction]
     *     If 0, the nearest resolution will be used.
     *     If 1, the nearest higher resolution (lower Z) will be used. If -1, the
     *     nearest lower resolution (higher Z) will be used. Default is 0.
     *     Use a {@link module:ol/array~NearestDirectionFunction} for more precise control.
     *
     * For example to change tile Z at the midpoint of zoom levels
     * ```js
     * function(value, high, low) {
     *   return value - low * Math.sqrt(high / low);
     * }
     * ```
     * @return {number} Z.
     * @api
     */
    TileGrid.prototype.getZForResolution = function (resolution, opt_direction) {
        var z = (0,array/* linearFindNearest */.h7)(this.resolutions_, resolution, opt_direction || 0);
        return (0,math/* clamp */.uZ)(z, this.minZoom, this.maxZoom);
    };
    /**
     * The tile with the provided tile coordinate intersects the given viewport.
     * @param {import('../tilecoord.js').TileCoord} tileCoord Tile coordinate.
     * @param {Array<number>} viewport Viewport as returned from {@link module:ol/extent.getRotatedViewport}.
     * @return {boolean} The tile with the provided tile coordinate intersects the given viewport.
     */
    TileGrid.prototype.tileCoordIntersectsViewport = function (tileCoord, viewport) {
        return (0,intersectsextent/* intersectsLinearRing */.mV)(viewport, 0, viewport.length, 2, this.getTileCoordExtent(tileCoord));
    };
    /**
     * @param {!import("../extent.js").Extent} extent Extent for this tile grid.
     * @private
     */
    TileGrid.prototype.calculateTileRanges_ = function (extent) {
        var length = this.resolutions_.length;
        var fullTileRanges = new Array(length);
        for (var z = this.minZoom; z < length; ++z) {
            fullTileRanges[z] = this.getTileRangeForExtentAndZ(extent, z);
        }
        this.fullTileRanges_ = fullTileRanges;
    };
    return TileGrid;
}());
/* harmony default export */ const tilegrid_TileGrid = (TileGrid);
//# sourceMappingURL=TileGrid.js.map
// EXTERNAL MODULE: ./node_modules/ol/proj/Units.js
var Units = __webpack_require__(8375);
;// CONCATENATED MODULE: ./node_modules/ol/tilegrid.js
/**
 * @module ol/tilegrid
 */






/**
 * @param {import("./proj/Projection.js").default} projection Projection.
 * @return {!TileGrid} Default tile grid for the
 * passed projection.
 */
function getForProjection(projection) {
    var tileGrid = projection.getDefaultTileGrid();
    if (!tileGrid) {
        tileGrid = createForProjection(projection);
        projection.setDefaultTileGrid(tileGrid);
    }
    return tileGrid;
}
/**
 * @param {TileGrid} tileGrid Tile grid.
 * @param {import("./tilecoord.js").TileCoord} tileCoord Tile coordinate.
 * @param {import("./proj/Projection.js").default} projection Projection.
 * @return {import("./tilecoord.js").TileCoord} Tile coordinate.
 */
function wrapX(tileGrid, tileCoord, projection) {
    var z = tileCoord[0];
    var center = tileGrid.getTileCoordCenter(tileCoord);
    var projectionExtent = extentFromProjection(projection);
    if (!(0,ol_extent/* containsCoordinate */.b8)(projectionExtent, center)) {
        var worldWidth = (0,ol_extent/* getWidth */.dz)(projectionExtent);
        var worldsAway = Math.ceil((projectionExtent[0] - center[0]) / worldWidth);
        center[0] += worldWidth * worldsAway;
        return tileGrid.getTileCoordForCoordAndZ(center, z);
    }
    else {
        return tileCoord;
    }
}
/**
 * @param {import("./extent.js").Extent} extent Extent.
 * @param {number} [opt_maxZoom] Maximum zoom level (default is
 *     DEFAULT_MAX_ZOOM).
 * @param {number|import("./size.js").Size} [opt_tileSize] Tile size (default uses
 *     DEFAULT_TILE_SIZE).
 * @param {import("./extent.js").Corner} [opt_corner] Extent corner (default is `'top-left'`).
 * @return {!TileGrid} TileGrid instance.
 */
function createForExtent(extent, opt_maxZoom, opt_tileSize, opt_corner) {
    var corner = opt_corner !== undefined ? opt_corner : 'top-left';
    var resolutions = resolutionsFromExtent(extent, opt_maxZoom, opt_tileSize);
    return new tilegrid_TileGrid({
        extent: extent,
        origin: (0,ol_extent/* getCorner */.g0)(extent, corner),
        resolutions: resolutions,
        tileSize: opt_tileSize,
    });
}
/**
 * @typedef {Object} XYZOptions
 * @property {import("./extent.js").Extent} [extent] Extent for the tile grid. The origin for an XYZ tile grid is the
 * top-left corner of the extent. If `maxResolution` is not provided the zero level of the grid is defined by the resolution
 * at which one tile fits in the provided extent. If not provided, the extent of the EPSG:3857 projection is used.
 * @property {number} [maxResolution] Resolution at level zero.
 * @property {number} [maxZoom] Maximum zoom. The default is `42`. This determines the number of levels
 * in the grid set. For example, a `maxZoom` of 21 means there are 22 levels in the grid set.
 * @property {number} [minZoom=0] Minimum zoom.
 * @property {number|import("./size.js").Size} [tileSize=[256, 256]] Tile size in pixels.
 */
/**
 * Creates a tile grid with a standard XYZ tiling scheme.
 * @param {XYZOptions} [opt_options] Tile grid options.
 * @return {!TileGrid} Tile grid instance.
 * @api
 */
function createXYZ(opt_options) {
    var xyzOptions = opt_options || {};
    var extent = xyzOptions.extent || (0,ol_proj/* get */.U2)('EPSG:3857').getExtent();
    var gridOptions = {
        extent: extent,
        minZoom: xyzOptions.minZoom,
        tileSize: xyzOptions.tileSize,
        resolutions: resolutionsFromExtent(extent, xyzOptions.maxZoom, xyzOptions.tileSize, xyzOptions.maxResolution),
    };
    return new tilegrid_TileGrid(gridOptions);
}
/**
 * Create a resolutions array from an extent.  A zoom factor of 2 is assumed.
 * @param {import("./extent.js").Extent} extent Extent.
 * @param {number} [opt_maxZoom] Maximum zoom level (default is
 *     DEFAULT_MAX_ZOOM).
 * @param {number|import("./size.js").Size} [opt_tileSize] Tile size (default uses
 *     DEFAULT_TILE_SIZE).
 * @param {number} [opt_maxResolution] Resolution at level zero.
 * @return {!Array<number>} Resolutions array.
 */
function resolutionsFromExtent(extent, opt_maxZoom, opt_tileSize, opt_maxResolution) {
    var maxZoom = opt_maxZoom !== undefined ? opt_maxZoom : common/* DEFAULT_MAX_ZOOM */.e;
    var height = (0,ol_extent/* getHeight */.Cr)(extent);
    var width = (0,ol_extent/* getWidth */.dz)(extent);
    var tileSize = (0,size/* toSize */.Pq)(opt_tileSize !== undefined ? opt_tileSize : common/* DEFAULT_TILE_SIZE */.S);
    var maxResolution = opt_maxResolution > 0
        ? opt_maxResolution
        : Math.max(width / tileSize[0], height / tileSize[1]);
    var length = maxZoom + 1;
    var resolutions = new Array(length);
    for (var z = 0; z < length; ++z) {
        resolutions[z] = maxResolution / Math.pow(2, z);
    }
    return resolutions;
}
/**
 * @param {import("./proj.js").ProjectionLike} projection Projection.
 * @param {number} [opt_maxZoom] Maximum zoom level (default is
 *     DEFAULT_MAX_ZOOM).
 * @param {number|import("./size.js").Size} [opt_tileSize] Tile size (default uses
 *     DEFAULT_TILE_SIZE).
 * @param {import("./extent.js").Corner} [opt_corner] Extent corner (default is `'top-left'`).
 * @return {!TileGrid} TileGrid instance.
 */
function createForProjection(projection, opt_maxZoom, opt_tileSize, opt_corner) {
    var extent = extentFromProjection(projection);
    return createForExtent(extent, opt_maxZoom, opt_tileSize, opt_corner);
}
/**
 * Generate a tile grid extent from a projection.  If the projection has an
 * extent, it is used.  If not, a global extent is assumed.
 * @param {import("./proj.js").ProjectionLike} projection Projection.
 * @return {import("./extent.js").Extent} Extent.
 */
function extentFromProjection(projection) {
    projection = (0,ol_proj/* get */.U2)(projection);
    var extent = projection.getExtent();
    if (!extent) {
        var half = (180 * ol_proj/* METERS_PER_UNIT */.Wm[Units/* default.DEGREES */.ZP.DEGREES]) / projection.getMetersPerUnit();
        extent = (0,ol_extent/* createOrUpdate */.T9)(-half, -half, half, half);
    }
    return extent;
}
//# sourceMappingURL=tilegrid.js.map
;// CONCATENATED MODULE: ./node_modules/ol/source/Tile.js
var Tile_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @module ol/source/Tile
 */










/***
 * @template Return
 * @typedef {import("../Observable").OnSignature<import("../Observable").EventTypes, import("../events/Event.js").default, Return> &
 *   import("../Observable").OnSignature<import("../ObjectEventType").Types, import("../Object").ObjectEvent, Return> &
 *   import("../Observable").OnSignature<import("./TileEventType").TileSourceEventTypes, TileSourceEvent, Return> &
 *   import("../Observable").CombinedOnSignature<import("../Observable").EventTypes|import("../ObjectEventType").Types|
 *     import("./TileEventType").TileSourceEventTypes, Return>} TileSourceOnSignature
 */
/**
 * @typedef {Object} Options
 * @property {import("./Source.js").AttributionLike} [attributions] Attributions.
 * @property {boolean} [attributionsCollapsible=true] Attributions are collapsible.
 * @property {number} [cacheSize] CacheSize.
 * @property {boolean} [opaque=false] Whether the layer is opaque.
 * @property {number} [tilePixelRatio] TilePixelRatio.
 * @property {import("../proj.js").ProjectionLike} [projection] Projection.
 * @property {import("./Source.js").State} [state] State.
 * @property {import("../tilegrid/TileGrid.js").default} [tileGrid] TileGrid.
 * @property {boolean} [wrapX=false] WrapX.
 * @property {number} [transition] Transition.
 * @property {string} [key] Key.
 * @property {number|import("../array.js").NearestDirectionFunction} [zDirection=0] ZDirection.
 * @property {boolean} [interpolate=false] Use interpolated values when resampling.  By default,
 * the nearest neighbor is used when resampling.
 */
/**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * Base class for sources providing images divided into a tile grid.
 * @abstract
 * @api
 */
var TileSource = /** @class */ (function (_super) {
    Tile_extends(TileSource, _super);
    /**
     * @param {Options} options SourceTile source options.
     */
    function TileSource(options) {
        var _this = _super.call(this, {
            attributions: options.attributions,
            attributionsCollapsible: options.attributionsCollapsible,
            projection: options.projection,
            state: options.state,
            wrapX: options.wrapX,
            interpolate: options.interpolate,
        }) || this;
        /***
         * @type {TileSourceOnSignature<import("../events").EventsKey>}
         */
        _this.on;
        /***
         * @type {TileSourceOnSignature<import("../events").EventsKey>}
         */
        _this.once;
        /***
         * @type {TileSourceOnSignature<void>}
         */
        _this.un;
        /**
         * @private
         * @type {boolean}
         */
        _this.opaque_ = options.opaque !== undefined ? options.opaque : false;
        /**
         * @private
         * @type {number}
         */
        _this.tilePixelRatio_ =
            options.tilePixelRatio !== undefined ? options.tilePixelRatio : 1;
        /**
         * @type {import("../tilegrid/TileGrid.js").default|null}
         */
        _this.tileGrid = options.tileGrid !== undefined ? options.tileGrid : null;
        var tileSize = [256, 256];
        if (_this.tileGrid) {
            (0,size/* toSize */.Pq)(_this.tileGrid.getTileSize(_this.tileGrid.getMinZoom()), tileSize);
        }
        /**
         * @protected
         * @type {import("../TileCache.js").default}
         */
        _this.tileCache = new ol_TileCache(options.cacheSize || 0);
        /**
         * @protected
         * @type {import("../size.js").Size}
         */
        _this.tmpSize = [0, 0];
        /**
         * @private
         * @type {string}
         */
        _this.key_ = options.key || '';
        /**
         * @protected
         * @type {import("../Tile.js").Options}
         */
        _this.tileOptions = {
            transition: options.transition,
            interpolate: options.interpolate,
        };
        /**
         * zDirection hint, read by the renderer. Indicates which resolution should be used
         * by a renderer if the views resolution does not match any resolution of the tile source.
         * If 0, the nearest resolution will be used. If 1, the nearest lower resolution
         * will be used. If -1, the nearest higher resolution will be used.
         * @type {number|import("../array.js").NearestDirectionFunction}
         */
        _this.zDirection = options.zDirection ? options.zDirection : 0;
        return _this;
    }
    /**
     * @return {boolean} Can expire cache.
     */
    TileSource.prototype.canExpireCache = function () {
        return this.tileCache.canExpireCache();
    };
    /**
     * @param {import("../proj/Projection.js").default} projection Projection.
     * @param {!Object<string, boolean>} usedTiles Used tiles.
     */
    TileSource.prototype.expireCache = function (projection, usedTiles) {
        var tileCache = this.getTileCacheForProjection(projection);
        if (tileCache) {
            tileCache.expireCache(usedTiles);
        }
    };
    /**
     * @param {import("../proj/Projection.js").default} projection Projection.
     * @param {number} z Zoom level.
     * @param {import("../TileRange.js").default} tileRange Tile range.
     * @param {function(import("../Tile.js").default):(boolean|void)} callback Called with each
     *     loaded tile.  If the callback returns `false`, the tile will not be
     *     considered loaded.
     * @return {boolean} The tile range is fully covered with loaded tiles.
     */
    TileSource.prototype.forEachLoadedTile = function (projection, z, tileRange, callback) {
        var tileCache = this.getTileCacheForProjection(projection);
        if (!tileCache) {
            return false;
        }
        var covered = true;
        var tile, tileCoordKey, loaded;
        for (var x = tileRange.minX; x <= tileRange.maxX; ++x) {
            for (var y = tileRange.minY; y <= tileRange.maxY; ++y) {
                tileCoordKey = getKeyZXY(z, x, y);
                loaded = false;
                if (tileCache.containsKey(tileCoordKey)) {
                    tile = /** @type {!import("../Tile.js").default} */ (tileCache.get(tileCoordKey));
                    loaded = tile.getState() === TileState/* default.LOADED */.Z.LOADED;
                    if (loaded) {
                        loaded = callback(tile) !== false;
                    }
                }
                if (!loaded) {
                    covered = false;
                }
            }
        }
        return covered;
    };
    /**
     * @param {import("../proj/Projection.js").default} projection Projection.
     * @return {number} Gutter.
     */
    TileSource.prototype.getGutterForProjection = function (projection) {
        return 0;
    };
    /**
     * Return the key to be used for all tiles in the source.
     * @return {string} The key for all tiles.
     */
    TileSource.prototype.getKey = function () {
        return this.key_;
    };
    /**
     * Set the value to be used as the key for all tiles in the source.
     * @param {string} key The key for tiles.
     * @protected
     */
    TileSource.prototype.setKey = function (key) {
        if (this.key_ !== key) {
            this.key_ = key;
            this.changed();
        }
    };
    /**
     * @param {import("../proj/Projection.js").default} projection Projection.
     * @return {boolean} Opaque.
     */
    TileSource.prototype.getOpaque = function (projection) {
        return this.opaque_;
    };
    /**
     * @return {Array<number>|null} Resolutions.
     */
    TileSource.prototype.getResolutions = function () {
        if (!this.tileGrid) {
            return null;
        }
        return this.tileGrid.getResolutions();
    };
    /**
     * @abstract
     * @param {number} z Tile coordinate z.
     * @param {number} x Tile coordinate x.
     * @param {number} y Tile coordinate y.
     * @param {number} pixelRatio Pixel ratio.
     * @param {import("../proj/Projection.js").default} projection Projection.
     * @return {!import("../Tile.js").default} Tile.
     */
    TileSource.prototype.getTile = function (z, x, y, pixelRatio, projection) {
        return (0,util/* abstract */.O3)();
    };
    /**
     * Return the tile grid of the tile source.
     * @return {import("../tilegrid/TileGrid.js").default|null} Tile grid.
     * @api
     */
    TileSource.prototype.getTileGrid = function () {
        return this.tileGrid;
    };
    /**
     * @param {import("../proj/Projection.js").default} projection Projection.
     * @return {!import("../tilegrid/TileGrid.js").default} Tile grid.
     */
    TileSource.prototype.getTileGridForProjection = function (projection) {
        if (!this.tileGrid) {
            return getForProjection(projection);
        }
        else {
            return this.tileGrid;
        }
    };
    /**
     * @param {import("../proj/Projection.js").default} projection Projection.
     * @return {import("../TileCache.js").default} Tile cache.
     * @protected
     */
    TileSource.prototype.getTileCacheForProjection = function (projection) {
        var sourceProjection = this.getProjection();
        (0,asserts/* assert */.h)(sourceProjection === null || (0,ol_proj/* equivalent */.OP)(sourceProjection, projection), 68 // A VectorTile source can only be rendered if it has a projection compatible with the view projection.
        );
        return this.tileCache;
    };
    /**
     * Get the tile pixel ratio for this source. Subclasses may override this
     * method, which is meant to return a supported pixel ratio that matches the
     * provided `pixelRatio` as close as possible.
     * @param {number} pixelRatio Pixel ratio.
     * @return {number} Tile pixel ratio.
     */
    TileSource.prototype.getTilePixelRatio = function (pixelRatio) {
        return this.tilePixelRatio_;
    };
    /**
     * @param {number} z Z.
     * @param {number} pixelRatio Pixel ratio.
     * @param {import("../proj/Projection.js").default} projection Projection.
     * @return {import("../size.js").Size} Tile size.
     */
    TileSource.prototype.getTilePixelSize = function (z, pixelRatio, projection) {
        var tileGrid = this.getTileGridForProjection(projection);
        var tilePixelRatio = this.getTilePixelRatio(pixelRatio);
        var tileSize = (0,size/* toSize */.Pq)(tileGrid.getTileSize(z), this.tmpSize);
        if (tilePixelRatio == 1) {
            return tileSize;
        }
        else {
            return (0,size/* scale */.bA)(tileSize, tilePixelRatio, this.tmpSize);
        }
    };
    /**
     * Returns a tile coordinate wrapped around the x-axis. When the tile coordinate
     * is outside the resolution and extent range of the tile grid, `null` will be
     * returned.
     * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
     * @param {import("../proj/Projection.js").default} [opt_projection] Projection.
     * @return {import("../tilecoord.js").TileCoord} Tile coordinate to be passed to the tileUrlFunction or
     *     null if no tile URL should be created for the passed `tileCoord`.
     */
    TileSource.prototype.getTileCoordForTileUrlFunction = function (tileCoord, opt_projection) {
        var projection = opt_projection !== undefined ? opt_projection : this.getProjection();
        var tileGrid = this.getTileGridForProjection(projection);
        if (this.getWrapX() && projection.isGlobal()) {
            tileCoord = wrapX(tileGrid, tileCoord, projection);
        }
        return withinExtentAndZ(tileCoord, tileGrid) ? tileCoord : null;
    };
    /**
     * Remove all cached tiles from the source. The next render cycle will fetch new tiles.
     * @api
     */
    TileSource.prototype.clear = function () {
        this.tileCache.clear();
    };
    TileSource.prototype.refresh = function () {
        this.clear();
        _super.prototype.refresh.call(this);
    };
    /**
     * Increases the cache size if needed
     * @param {number} tileCount Minimum number of tiles needed.
     * @param {import("../proj/Projection.js").default} projection Projection.
     */
    TileSource.prototype.updateCacheSize = function (tileCount, projection) {
        var tileCache = this.getTileCacheForProjection(projection);
        if (tileCount > tileCache.highWaterMark) {
            tileCache.highWaterMark = tileCount;
        }
    };
    /**
     * Marks a tile coord as being used, without triggering a load.
     * @abstract
     * @param {number} z Tile coordinate z.
     * @param {number} x Tile coordinate x.
     * @param {number} y Tile coordinate y.
     * @param {import("../proj/Projection.js").default} projection Projection.
     */
    TileSource.prototype.useTile = function (z, x, y, projection) { };
    return TileSource;
}(source_Source));
/**
 * @classdesc
 * Events emitted by {@link module:ol/source/Tile~TileSource} instances are instances of this
 * type.
 */
var TileSourceEvent = /** @class */ (function (_super) {
    Tile_extends(TileSourceEvent, _super);
    /**
     * @param {string} type Type.
     * @param {import("../Tile.js").default} tile The tile.
     */
    function TileSourceEvent(type, tile) {
        var _this = _super.call(this, type) || this;
        /**
         * The tile related to the event.
         * @type {import("../Tile.js").default}
         * @api
         */
        _this.tile = tile;
        return _this;
    }
    return TileSourceEvent;
}(Event/* default */.ZP));

/* harmony default export */ const source_Tile = (TileSource);
//# sourceMappingURL=Tile.js.map
;// CONCATENATED MODULE: ./node_modules/ol/tileurlfunction.js
/**
 * @module ol/tileurlfunction
 */



/**
 * @param {string} template Template.
 * @param {import("./tilegrid/TileGrid.js").default} tileGrid Tile grid.
 * @return {import("./Tile.js").UrlFunction} Tile URL function.
 */
function createFromTemplate(template, tileGrid) {
    var zRegEx = /\{z\}/g;
    var xRegEx = /\{x\}/g;
    var yRegEx = /\{y\}/g;
    var dashYRegEx = /\{-y\}/g;
    return (
    /**
     * @param {import("./tilecoord.js").TileCoord} tileCoord Tile Coordinate.
     * @param {number} pixelRatio Pixel ratio.
     * @param {import("./proj/Projection.js").default} projection Projection.
     * @return {string|undefined} Tile URL.
     */
    function (tileCoord, pixelRatio, projection) {
        if (!tileCoord) {
            return undefined;
        }
        else {
            return template
                .replace(zRegEx, tileCoord[0].toString())
                .replace(xRegEx, tileCoord[1].toString())
                .replace(yRegEx, tileCoord[2].toString())
                .replace(dashYRegEx, function () {
                var z = tileCoord[0];
                var range = tileGrid.getFullTileRange(z);
                (0,asserts/* assert */.h)(range, 55); // The {-y} placeholder requires a tile grid with extent
                var y = range.getHeight() - tileCoord[2] - 1;
                return y.toString();
            });
        }
    });
}
/**
 * @param {Array<string>} templates Templates.
 * @param {import("./tilegrid/TileGrid.js").default} tileGrid Tile grid.
 * @return {import("./Tile.js").UrlFunction} Tile URL function.
 */
function createFromTemplates(templates, tileGrid) {
    var len = templates.length;
    var tileUrlFunctions = new Array(len);
    for (var i = 0; i < len; ++i) {
        tileUrlFunctions[i] = createFromTemplate(templates[i], tileGrid);
    }
    return createFromTileUrlFunctions(tileUrlFunctions);
}
/**
 * @param {Array<import("./Tile.js").UrlFunction>} tileUrlFunctions Tile URL Functions.
 * @return {import("./Tile.js").UrlFunction} Tile URL function.
 */
function createFromTileUrlFunctions(tileUrlFunctions) {
    if (tileUrlFunctions.length === 1) {
        return tileUrlFunctions[0];
    }
    return (
    /**
     * @param {import("./tilecoord.js").TileCoord} tileCoord Tile Coordinate.
     * @param {number} pixelRatio Pixel ratio.
     * @param {import("./proj/Projection.js").default} projection Projection.
     * @return {string|undefined} Tile URL.
     */
    function (tileCoord, pixelRatio, projection) {
        if (!tileCoord) {
            return undefined;
        }
        else {
            var h = hash(tileCoord);
            var index = (0,math/* modulo */.$W)(h, tileUrlFunctions.length);
            return tileUrlFunctions[index](tileCoord, pixelRatio, projection);
        }
    });
}
/**
 * @param {import("./tilecoord.js").TileCoord} tileCoord Tile coordinate.
 * @param {number} pixelRatio Pixel ratio.
 * @param {import("./proj/Projection.js").default} projection Projection.
 * @return {string|undefined} Tile URL.
 */
function nullTileUrlFunction(tileCoord, pixelRatio, projection) {
    return undefined;
}
/**
 * @param {string} url URL.
 * @return {Array<string>} Array of urls.
 */
function expandUrl(url) {
    var urls = [];
    var match = /\{([a-z])-([a-z])\}/.exec(url);
    if (match) {
        // char range
        var startCharCode = match[1].charCodeAt(0);
        var stopCharCode = match[2].charCodeAt(0);
        var charCode = void 0;
        for (charCode = startCharCode; charCode <= stopCharCode; ++charCode) {
            urls.push(url.replace(match[0], String.fromCharCode(charCode)));
        }
        return urls;
    }
    match = /\{(\d+)-(\d+)\}/.exec(url);
    if (match) {
        // number range
        var stop_1 = parseInt(match[2], 10);
        for (var i = parseInt(match[1], 10); i <= stop_1; i++) {
            urls.push(url.replace(match[0], i.toString()));
        }
        return urls;
    }
    urls.push(url);
    return urls;
}
//# sourceMappingURL=tileurlfunction.js.map
;// CONCATENATED MODULE: ./node_modules/ol/source/UrlTile.js
var UrlTile_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @module ol/source/UrlTile
 */






/**
 * @typedef {Object} Options
 * @property {import("./Source.js").AttributionLike} [attributions] Attributions.
 * @property {boolean} [attributionsCollapsible=true] Attributions are collapsible.
 * @property {number} [cacheSize] Cache size.
 * @property {boolean} [opaque=false] Whether the layer is opaque.
 * @property {import("../proj.js").ProjectionLike} [projection] Projection.
 * @property {import("./Source.js").State} [state] State.
 * @property {import("../tilegrid/TileGrid.js").default} [tileGrid] TileGrid.
 * @property {import("../Tile.js").LoadFunction} tileLoadFunction TileLoadFunction.
 * @property {number} [tilePixelRatio] TilePixelRatio.
 * @property {import("../Tile.js").UrlFunction} [tileUrlFunction] TileUrlFunction.
 * @property {string} [url] Url.
 * @property {Array<string>} [urls] Urls.
 * @property {boolean} [wrapX=true] WrapX.
 * @property {number} [transition] Transition.
 * @property {string} [key] Key.
 * @property {number|import("../array.js").NearestDirectionFunction} [zDirection=0] ZDirection.
 * @property {boolean} [interpolate=false] Use interpolated values when resampling.  By default,
 * the nearest neighbor is used when resampling.
 */
/**
 * @classdesc
 * Base class for sources providing tiles divided into a tile grid over http.
 *
 * @fires import("./Tile.js").TileSourceEvent
 */
var UrlTile = /** @class */ (function (_super) {
    UrlTile_extends(UrlTile, _super);
    /**
     * @param {Options} options Image tile options.
     */
    function UrlTile(options) {
        var _this = _super.call(this, {
            attributions: options.attributions,
            cacheSize: options.cacheSize,
            opaque: options.opaque,
            projection: options.projection,
            state: options.state,
            tileGrid: options.tileGrid,
            tilePixelRatio: options.tilePixelRatio,
            wrapX: options.wrapX,
            transition: options.transition,
            interpolate: options.interpolate,
            key: options.key,
            attributionsCollapsible: options.attributionsCollapsible,
            zDirection: options.zDirection,
        }) || this;
        /**
         * @private
         * @type {boolean}
         */
        _this.generateTileUrlFunction_ =
            _this.tileUrlFunction === UrlTile.prototype.tileUrlFunction;
        /**
         * @protected
         * @type {import("../Tile.js").LoadFunction}
         */
        _this.tileLoadFunction = options.tileLoadFunction;
        if (options.tileUrlFunction) {
            _this.tileUrlFunction = options.tileUrlFunction;
        }
        /**
         * @protected
         * @type {!Array<string>|null}
         */
        _this.urls = null;
        if (options.urls) {
            _this.setUrls(options.urls);
        }
        else if (options.url) {
            _this.setUrl(options.url);
        }
        /**
         * @private
         * @type {!Object<string, boolean>}
         */
        _this.tileLoadingKeys_ = {};
        return _this;
    }
    /**
     * Return the tile load function of the source.
     * @return {import("../Tile.js").LoadFunction} TileLoadFunction
     * @api
     */
    UrlTile.prototype.getTileLoadFunction = function () {
        return this.tileLoadFunction;
    };
    /**
     * Return the tile URL function of the source.
     * @return {import("../Tile.js").UrlFunction} TileUrlFunction
     * @api
     */
    UrlTile.prototype.getTileUrlFunction = function () {
        return Object.getPrototypeOf(this).tileUrlFunction === this.tileUrlFunction
            ? this.tileUrlFunction.bind(this)
            : this.tileUrlFunction;
    };
    /**
     * Return the URLs used for this source.
     * When a tileUrlFunction is used instead of url or urls,
     * null will be returned.
     * @return {!Array<string>|null} URLs.
     * @api
     */
    UrlTile.prototype.getUrls = function () {
        return this.urls;
    };
    /**
     * Handle tile change events.
     * @param {import("../events/Event.js").default} event Event.
     * @protected
     */
    UrlTile.prototype.handleTileChange = function (event) {
        var tile = /** @type {import("../Tile.js").default} */ (event.target);
        var uid = (0,util/* getUid */.sq)(tile);
        var tileState = tile.getState();
        var type;
        if (tileState == TileState/* default.LOADING */.Z.LOADING) {
            this.tileLoadingKeys_[uid] = true;
            type = TileEventType.TILELOADSTART;
        }
        else if (uid in this.tileLoadingKeys_) {
            delete this.tileLoadingKeys_[uid];
            type =
                tileState == TileState/* default.ERROR */.Z.ERROR
                    ? TileEventType.TILELOADERROR
                    : tileState == TileState/* default.LOADED */.Z.LOADED
                        ? TileEventType.TILELOADEND
                        : undefined;
        }
        if (type != undefined) {
            this.dispatchEvent(new TileSourceEvent(type, tile));
        }
    };
    /**
     * Set the tile load function of the source.
     * @param {import("../Tile.js").LoadFunction} tileLoadFunction Tile load function.
     * @api
     */
    UrlTile.prototype.setTileLoadFunction = function (tileLoadFunction) {
        this.tileCache.clear();
        this.tileLoadFunction = tileLoadFunction;
        this.changed();
    };
    /**
     * Set the tile URL function of the source.
     * @param {import("../Tile.js").UrlFunction} tileUrlFunction Tile URL function.
     * @param {string} [key] Optional new tile key for the source.
     * @api
     */
    UrlTile.prototype.setTileUrlFunction = function (tileUrlFunction, key) {
        this.tileUrlFunction = tileUrlFunction;
        this.tileCache.pruneExceptNewestZ();
        if (typeof key !== 'undefined') {
            this.setKey(key);
        }
        else {
            this.changed();
        }
    };
    /**
     * Set the URL to use for requests.
     * @param {string} url URL.
     * @api
     */
    UrlTile.prototype.setUrl = function (url) {
        var urls = expandUrl(url);
        this.urls = urls;
        this.setUrls(urls);
    };
    /**
     * Set the URLs to use for requests.
     * @param {Array<string>} urls URLs.
     * @api
     */
    UrlTile.prototype.setUrls = function (urls) {
        this.urls = urls;
        var key = urls.join('\n');
        if (this.generateTileUrlFunction_) {
            this.setTileUrlFunction(createFromTemplates(urls, this.tileGrid), key);
        }
        else {
            this.setKey(key);
        }
    };
    /**
     * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
     * @param {number} pixelRatio Pixel ratio.
     * @param {import("../proj/Projection.js").default} projection Projection.
     * @return {string|undefined} Tile URL.
     */
    UrlTile.prototype.tileUrlFunction = function (tileCoord, pixelRatio, projection) {
        return undefined;
    };
    /**
     * Marks a tile coord as being used, without triggering a load.
     * @param {number} z Tile coordinate z.
     * @param {number} x Tile coordinate x.
     * @param {number} y Tile coordinate y.
     */
    UrlTile.prototype.useTile = function (z, x, y) {
        var tileCoordKey = getKeyZXY(z, x, y);
        if (this.tileCache.containsKey(tileCoordKey)) {
            this.tileCache.get(tileCoordKey);
        }
    };
    return UrlTile;
}(source_Tile));
/* harmony default export */ const source_UrlTile = (UrlTile);
//# sourceMappingURL=UrlTile.js.map
// EXTERNAL MODULE: ./node_modules/ol/reproj/common.js
var reproj_common = __webpack_require__(4773);
;// CONCATENATED MODULE: ./node_modules/ol/source/TileImage.js
var TileImage_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @module ol/source/TileImage
 */











/**
 * @typedef {Object} Options
 * @property {import("./Source.js").AttributionLike} [attributions] Attributions.
 * @property {boolean} [attributionsCollapsible=true] Attributions are collapsible.
 * @property {number} [cacheSize] Initial tile cache size. Will auto-grow to hold at least the number of tiles in the viewport.
 * @property {null|string} [crossOrigin] The `crossOrigin` attribute for loaded images.  Note that
 * you must provide a `crossOrigin` value if you want to access pixel data with the Canvas renderer.
 * See https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image for more detail.
 * @property {boolean} [imageSmoothing=true] Deprecated.  Use the `interpolate` option instead.
 * @property {boolean} [interpolate=true] Use interpolated values when resampling.  By default,
 * linear interpolation is used when resampling.  Set to false to use the nearest neighbor instead.
 * @property {boolean} [opaque=false] Whether the layer is opaque.
 * @property {import("../proj.js").ProjectionLike} [projection] Projection. Default is the view projection.
 * @property {number} [reprojectionErrorThreshold=0.5] Maximum allowed reprojection error (in pixels).
 * Higher values can increase reprojection performance, but decrease precision.
 * @property {import("./Source.js").State} [state] Source state.
 * @property {typeof import("../ImageTile.js").default} [tileClass] Class used to instantiate image tiles.
 * Default is {@link module:ol/ImageTile~ImageTile}.
 * @property {import("../tilegrid/TileGrid.js").default} [tileGrid] Tile grid.
 * @property {import("../Tile.js").LoadFunction} [tileLoadFunction] Optional function to load a tile given a URL. The default is
 * ```js
 * function(imageTile, src) {
 *   imageTile.getImage().src = src;
 * };
 * ```
 * @property {number} [tilePixelRatio=1] The pixel ratio used by the tile service. For example, if the tile
 * service advertizes 256px by 256px tiles but actually sends 512px
 * by 512px images (for retina/hidpi devices) then `tilePixelRatio`
 * should be set to `2`.
 * @property {import("../Tile.js").UrlFunction} [tileUrlFunction] Optional function to get tile URL given a tile coordinate and the projection.
 * @property {string} [url] URL template. Must include `{x}`, `{y}` or `{-y}`, and `{z}` placeholders.
 * A `{?-?}` template pattern, for example `subdomain{a-f}.domain.com`, may be
 * used instead of defining each one separately in the `urls` option.
 * @property {Array<string>} [urls] An array of URL templates.
 * @property {boolean} [wrapX] Whether to wrap the world horizontally. The default, is to
 * request out-of-bounds tiles from the server. When set to `false`, only one
 * world will be rendered. When set to `true`, tiles will be requested for one
 * world only, but they will be wrapped horizontally to render multiple worlds.
 * @property {number} [transition] Duration of the opacity transition for rendering.
 * To disable the opacity transition, pass `transition: 0`.
 * @property {string} [key] Optional tile key for proper cache fetching
 * @property {number|import("../array.js").NearestDirectionFunction} [zDirection=0]
 * Choose whether to use tiles with a higher or lower zoom level when between integer
 * zoom levels. See {@link module:ol/tilegrid/TileGrid~TileGrid#getZForResolution}.
 */
/**
 * @classdesc
 * Base class for sources providing images divided into a tile grid.
 *
 * @fires import("./Tile.js").TileSourceEvent
 * @api
 */
var TileImage = /** @class */ (function (_super) {
    TileImage_extends(TileImage, _super);
    /**
     * @param {!Options} options Image tile options.
     */
    function TileImage(options) {
        var _this = this;
        var interpolate = options.imageSmoothing !== undefined ? options.imageSmoothing : true;
        if (options.interpolate !== undefined) {
            interpolate = options.interpolate;
        }
        _this = _super.call(this, {
            attributions: options.attributions,
            cacheSize: options.cacheSize,
            opaque: options.opaque,
            projection: options.projection,
            state: options.state,
            tileGrid: options.tileGrid,
            tileLoadFunction: options.tileLoadFunction
                ? options.tileLoadFunction
                : defaultTileLoadFunction,
            tilePixelRatio: options.tilePixelRatio,
            tileUrlFunction: options.tileUrlFunction,
            url: options.url,
            urls: options.urls,
            wrapX: options.wrapX,
            transition: options.transition,
            interpolate: interpolate,
            key: options.key,
            attributionsCollapsible: options.attributionsCollapsible,
            zDirection: options.zDirection,
        }) || this;
        /**
         * @protected
         * @type {?string}
         */
        _this.crossOrigin =
            options.crossOrigin !== undefined ? options.crossOrigin : null;
        /**
         * @protected
         * @type {typeof ImageTile}
         */
        _this.tileClass =
            options.tileClass !== undefined ? options.tileClass : ImageTile/* default */.Z;
        /**
         * @protected
         * @type {!Object<string, TileCache>}
         */
        _this.tileCacheForProjection = {};
        /**
         * @protected
         * @type {!Object<string, import("../tilegrid/TileGrid.js").default>}
         */
        _this.tileGridForProjection = {};
        /**
         * @private
         * @type {number|undefined}
         */
        _this.reprojectionErrorThreshold_ = options.reprojectionErrorThreshold;
        /**
         * @private
         * @type {boolean}
         */
        _this.renderReprojectionEdges_ = false;
        return _this;
    }
    /**
     * @return {boolean} Can expire cache.
     */
    TileImage.prototype.canExpireCache = function () {
        if (!reproj_common/* ENABLE_RASTER_REPROJECTION */.j) {
            return _super.prototype.canExpireCache.call(this);
        }
        if (this.tileCache.canExpireCache()) {
            return true;
        }
        else {
            for (var key in this.tileCacheForProjection) {
                if (this.tileCacheForProjection[key].canExpireCache()) {
                    return true;
                }
            }
        }
        return false;
    };
    /**
     * @param {import("../proj/Projection.js").default} projection Projection.
     * @param {!Object<string, boolean>} usedTiles Used tiles.
     */
    TileImage.prototype.expireCache = function (projection, usedTiles) {
        if (!reproj_common/* ENABLE_RASTER_REPROJECTION */.j) {
            _super.prototype.expireCache.call(this, projection, usedTiles);
            return;
        }
        var usedTileCache = this.getTileCacheForProjection(projection);
        this.tileCache.expireCache(this.tileCache == usedTileCache ? usedTiles : {});
        for (var id in this.tileCacheForProjection) {
            var tileCache = this.tileCacheForProjection[id];
            tileCache.expireCache(tileCache == usedTileCache ? usedTiles : {});
        }
    };
    /**
     * @param {import("../proj/Projection.js").default} projection Projection.
     * @return {number} Gutter.
     */
    TileImage.prototype.getGutterForProjection = function (projection) {
        if (reproj_common/* ENABLE_RASTER_REPROJECTION */.j &&
            this.getProjection() &&
            projection &&
            !(0,ol_proj/* equivalent */.OP)(this.getProjection(), projection)) {
            return 0;
        }
        else {
            return this.getGutter();
        }
    };
    /**
     * @return {number} Gutter.
     */
    TileImage.prototype.getGutter = function () {
        return 0;
    };
    /**
     * Return the key to be used for all tiles in the source.
     * @return {string} The key for all tiles.
     */
    TileImage.prototype.getKey = function () {
        var key = _super.prototype.getKey.call(this);
        if (!this.getInterpolate()) {
            key += ':disable-interpolation';
        }
        return key;
    };
    /**
     * @param {import("../proj/Projection.js").default} projection Projection.
     * @return {boolean} Opaque.
     */
    TileImage.prototype.getOpaque = function (projection) {
        if (reproj_common/* ENABLE_RASTER_REPROJECTION */.j &&
            this.getProjection() &&
            projection &&
            !(0,ol_proj/* equivalent */.OP)(this.getProjection(), projection)) {
            return false;
        }
        else {
            return _super.prototype.getOpaque.call(this, projection);
        }
    };
    /**
     * @param {import("../proj/Projection.js").default} projection Projection.
     * @return {!import("../tilegrid/TileGrid.js").default} Tile grid.
     */
    TileImage.prototype.getTileGridForProjection = function (projection) {
        if (!reproj_common/* ENABLE_RASTER_REPROJECTION */.j) {
            return _super.prototype.getTileGridForProjection.call(this, projection);
        }
        var thisProj = this.getProjection();
        if (this.tileGrid && (!thisProj || (0,ol_proj/* equivalent */.OP)(thisProj, projection))) {
            return this.tileGrid;
        }
        else {
            var projKey = (0,util/* getUid */.sq)(projection);
            if (!(projKey in this.tileGridForProjection)) {
                this.tileGridForProjection[projKey] =
                    getForProjection(projection);
            }
            return this.tileGridForProjection[projKey];
        }
    };
    /**
     * @param {import("../proj/Projection.js").default} projection Projection.
     * @return {import("../TileCache.js").default} Tile cache.
     */
    TileImage.prototype.getTileCacheForProjection = function (projection) {
        if (!reproj_common/* ENABLE_RASTER_REPROJECTION */.j) {
            return _super.prototype.getTileCacheForProjection.call(this, projection);
        }
        var thisProj = this.getProjection();
        if (!thisProj || (0,ol_proj/* equivalent */.OP)(thisProj, projection)) {
            return this.tileCache;
        }
        else {
            var projKey = (0,util/* getUid */.sq)(projection);
            if (!(projKey in this.tileCacheForProjection)) {
                this.tileCacheForProjection[projKey] = new ol_TileCache(this.tileCache.highWaterMark);
            }
            return this.tileCacheForProjection[projKey];
        }
    };
    /**
     * @param {number} z Tile coordinate z.
     * @param {number} x Tile coordinate x.
     * @param {number} y Tile coordinate y.
     * @param {number} pixelRatio Pixel ratio.
     * @param {import("../proj/Projection.js").default} projection Projection.
     * @param {string} key The key set on the tile.
     * @return {!ImageTile} Tile.
     * @private
     */
    TileImage.prototype.createTile_ = function (z, x, y, pixelRatio, projection, key) {
        var tileCoord = [z, x, y];
        var urlTileCoord = this.getTileCoordForTileUrlFunction(tileCoord, projection);
        var tileUrl = urlTileCoord
            ? this.tileUrlFunction(urlTileCoord, pixelRatio, projection)
            : undefined;
        var tile = new this.tileClass(tileCoord, tileUrl !== undefined ? TileState/* default.IDLE */.Z.IDLE : TileState/* default.EMPTY */.Z.EMPTY, tileUrl !== undefined ? tileUrl : '', this.crossOrigin, this.tileLoadFunction, this.tileOptions);
        tile.key = key;
        tile.addEventListener(EventType/* default.CHANGE */.Z.CHANGE, this.handleTileChange.bind(this));
        return tile;
    };
    /**
     * @param {number} z Tile coordinate z.
     * @param {number} x Tile coordinate x.
     * @param {number} y Tile coordinate y.
     * @param {number} pixelRatio Pixel ratio.
     * @param {import("../proj/Projection.js").default} projection Projection.
     * @return {!(ImageTile|ReprojTile)} Tile.
     */
    TileImage.prototype.getTile = function (z, x, y, pixelRatio, projection) {
        var sourceProjection = this.getProjection();
        if (!reproj_common/* ENABLE_RASTER_REPROJECTION */.j ||
            !sourceProjection ||
            !projection ||
            (0,ol_proj/* equivalent */.OP)(sourceProjection, projection)) {
            return this.getTileInternal(z, x, y, pixelRatio, sourceProjection || projection);
        }
        else {
            var cache = this.getTileCacheForProjection(projection);
            var tileCoord = [z, x, y];
            var tile = void 0;
            var tileCoordKey = getKey(tileCoord);
            if (cache.containsKey(tileCoordKey)) {
                tile = cache.get(tileCoordKey);
            }
            var key = this.getKey();
            if (tile && tile.key == key) {
                return tile;
            }
            else {
                var sourceTileGrid = this.getTileGridForProjection(sourceProjection);
                var targetTileGrid = this.getTileGridForProjection(projection);
                var wrappedTileCoord = this.getTileCoordForTileUrlFunction(tileCoord, projection);
                var newTile = new Tile/* default */.Z(sourceProjection, sourceTileGrid, projection, targetTileGrid, tileCoord, wrappedTileCoord, this.getTilePixelRatio(pixelRatio), this.getGutter(), function (z, x, y, pixelRatio) {
                    return this.getTileInternal(z, x, y, pixelRatio, sourceProjection);
                }.bind(this), this.reprojectionErrorThreshold_, this.renderReprojectionEdges_, this.getInterpolate());
                newTile.key = key;
                if (tile) {
                    newTile.interimTile = tile;
                    newTile.refreshInterimChain();
                    cache.replace(tileCoordKey, newTile);
                }
                else {
                    cache.set(tileCoordKey, newTile);
                }
                return newTile;
            }
        }
    };
    /**
     * @param {number} z Tile coordinate z.
     * @param {number} x Tile coordinate x.
     * @param {number} y Tile coordinate y.
     * @param {number} pixelRatio Pixel ratio.
     * @param {!import("../proj/Projection.js").default} projection Projection.
     * @return {!(ImageTile|ReprojTile)} Tile.
     * @protected
     */
    TileImage.prototype.getTileInternal = function (z, x, y, pixelRatio, projection) {
        var tile = null;
        var tileCoordKey = getKeyZXY(z, x, y);
        var key = this.getKey();
        if (!this.tileCache.containsKey(tileCoordKey)) {
            tile = this.createTile_(z, x, y, pixelRatio, projection, key);
            this.tileCache.set(tileCoordKey, tile);
        }
        else {
            tile = this.tileCache.get(tileCoordKey);
            if (tile.key != key) {
                // The source's params changed. If the tile has an interim tile and if we
                // can use it then we use it. Otherwise we create a new tile.  In both
                // cases we attempt to assign an interim tile to the new tile.
                var interimTile = tile;
                tile = this.createTile_(z, x, y, pixelRatio, projection, key);
                //make the new tile the head of the list,
                if (interimTile.getState() == TileState/* default.IDLE */.Z.IDLE) {
                    //the old tile hasn't begun loading yet, and is now outdated, so we can simply discard it
                    tile.interimTile = interimTile.interimTile;
                }
                else {
                    tile.interimTile = interimTile;
                }
                tile.refreshInterimChain();
                this.tileCache.replace(tileCoordKey, tile);
            }
        }
        return tile;
    };
    /**
     * Sets whether to render reprojection edges or not (usually for debugging).
     * @param {boolean} render Render the edges.
     * @api
     */
    TileImage.prototype.setRenderReprojectionEdges = function (render) {
        if (!reproj_common/* ENABLE_RASTER_REPROJECTION */.j ||
            this.renderReprojectionEdges_ == render) {
            return;
        }
        this.renderReprojectionEdges_ = render;
        for (var id in this.tileCacheForProjection) {
            this.tileCacheForProjection[id].clear();
        }
        this.changed();
    };
    /**
     * Sets the tile grid to use when reprojecting the tiles to the given
     * projection instead of the default tile grid for the projection.
     *
     * This can be useful when the default tile grid cannot be created
     * (e.g. projection has no extent defined) or
     * for optimization reasons (custom tile size, resolutions, ...).
     *
     * @param {import("../proj.js").ProjectionLike} projection Projection.
     * @param {import("../tilegrid/TileGrid.js").default} tilegrid Tile grid to use for the projection.
     * @api
     */
    TileImage.prototype.setTileGridForProjection = function (projection, tilegrid) {
        if (reproj_common/* ENABLE_RASTER_REPROJECTION */.j) {
            var proj = (0,ol_proj/* get */.U2)(projection);
            if (proj) {
                var projKey = (0,util/* getUid */.sq)(proj);
                if (!(projKey in this.tileGridForProjection)) {
                    this.tileGridForProjection[projKey] = tilegrid;
                }
            }
        }
    };
    return TileImage;
}(source_UrlTile));
/**
 * @param {ImageTile} imageTile Image tile.
 * @param {string} src Source.
 */
function defaultTileLoadFunction(imageTile, src) {
    /** @type {HTMLImageElement|HTMLVideoElement} */ (imageTile.getImage()).src =
        src;
}
/* harmony default export */ const source_TileImage = (TileImage);
//# sourceMappingURL=TileImage.js.map
;// CONCATENATED MODULE: ./node_modules/ol/source/XYZ.js
/**
 * @module ol/source/XYZ
 */
var XYZ_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
 * @typedef {Object} Options
 * @property {import("./Source.js").AttributionLike} [attributions] Attributions.
 * @property {boolean} [attributionsCollapsible=true] Attributions are collapsible.
 * @property {number} [cacheSize] Initial tile cache size. Will auto-grow to hold at least the number of tiles in the viewport.
 * @property {null|string} [crossOrigin] The `crossOrigin` attribute for loaded images.  Note that
 * you must provide a `crossOrigin` value if you want to access pixel data with the Canvas renderer.
 * See https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image for more detail.
 * @property {boolean} [imageSmoothing=true] Deprecated.  Use the `interpolate` option instead.
 * @property {boolean} [interpolate=true] Use interpolated values when resampling.  By default,
 * linear interpolation is used when resampling.  Set to false to use the nearest neighbor instead.
 * @property {boolean} [opaque=false] Whether the layer is opaque.
 * @property {import("../proj.js").ProjectionLike} [projection='EPSG:3857'] Projection.
 * @property {number} [reprojectionErrorThreshold=0.5] Maximum allowed reprojection error (in pixels).
 * Higher values can increase reprojection performance, but decrease precision.
 * @property {number} [maxZoom=42] Optional max zoom level. Not used if `tileGrid` is provided.
 * @property {number} [minZoom=0] Optional min zoom level. Not used if `tileGrid` is provided.
 * @property {number} [maxResolution] Optional tile grid resolution at level zero. Not used if `tileGrid` is provided.
 * @property {import("../tilegrid/TileGrid.js").default} [tileGrid] Tile grid.
 * @property {import("../Tile.js").LoadFunction} [tileLoadFunction] Optional function to load a tile given a URL. The default is
 * ```js
 * function(imageTile, src) {
 *   imageTile.getImage().src = src;
 * };
 * ```
 * @property {number} [tilePixelRatio=1] The pixel ratio used by the tile service.
 * For example, if the tile service advertizes 256px by 256px tiles but actually sends 512px
 * by 512px images (for retina/hidpi devices) then `tilePixelRatio`
 * should be set to `2`.
 * @property {number|import("../size.js").Size} [tileSize=[256, 256]] The tile size used by the tile service.
 * Not used if `tileGrid` is provided.
 * @property {number} [gutter=0] The size in pixels of the gutter around image tiles to ignore.
 * This allows artifacts of rendering at tile edges to be ignored.
 * Supported images should be wider and taller than the tile size by a value of `2 x gutter`.
 * @property {import("../Tile.js").UrlFunction} [tileUrlFunction] Optional function to get
 * tile URL given a tile coordinate and the projection.
 * Required if `url` or `urls` are not provided.
 * @property {string} [url] URL template. Must include `{x}`, `{y}` or `{-y}`,
 * and `{z}` placeholders. A `{?-?}` template pattern, for example `subdomain{a-f}.domain.com`,
 * may be used instead of defining each one separately in the `urls` option.
 * @property {Array<string>} [urls] An array of URL templates.
 * @property {boolean} [wrapX=true] Whether to wrap the world horizontally.
 * @property {number} [transition=250] Duration of the opacity transition for rendering.
 * To disable the opacity transition, pass `transition: 0`.
 * @property {number|import("../array.js").NearestDirectionFunction} [zDirection=0]
 * Choose whether to use tiles with a higher or lower zoom level when between integer
 * zoom levels. See {@link module:ol/tilegrid/TileGrid~TileGrid#getZForResolution}.
 */
/**
 * @classdesc
 * Layer source for tile data with URLs in a set XYZ format that are
 * defined in a URL template. By default, this follows the widely-used
 * Google grid where `x` 0 and `y` 0 are in the top left. Grids like
 * TMS where `x` 0 and `y` 0 are in the bottom left can be used by
 * using the `{-y}` placeholder in the URL template, so long as the
 * source does not have a custom tile grid. In this case
 * a `tileUrlFunction` can be used, such as:
 * ```js
 *  tileUrlFunction: function(coordinate) {
 *    return 'http://mapserver.com/' + coordinate[0] + '/' +
 *      coordinate[1] + '/' + (-coordinate[2] - 1) + '.png';
 *  }
 * ```
 * @api
 */
var XYZ = /** @class */ (function (_super) {
    XYZ_extends(XYZ, _super);
    /**
     * @param {Options} [opt_options] XYZ options.
     */
    function XYZ(opt_options) {
        var _this = this;
        var options = opt_options || {};
        var interpolate = options.imageSmoothing !== undefined ? options.imageSmoothing : true;
        if (options.interpolate !== undefined) {
            interpolate = options.interpolate;
        }
        var projection = options.projection !== undefined ? options.projection : 'EPSG:3857';
        var tileGrid = options.tileGrid !== undefined
            ? options.tileGrid
            : createXYZ({
                extent: extentFromProjection(projection),
                maxResolution: options.maxResolution,
                maxZoom: options.maxZoom,
                minZoom: options.minZoom,
                tileSize: options.tileSize,
            });
        _this = _super.call(this, {
            attributions: options.attributions,
            cacheSize: options.cacheSize,
            crossOrigin: options.crossOrigin,
            interpolate: interpolate,
            opaque: options.opaque,
            projection: projection,
            reprojectionErrorThreshold: options.reprojectionErrorThreshold,
            tileGrid: tileGrid,
            tileLoadFunction: options.tileLoadFunction,
            tilePixelRatio: options.tilePixelRatio,
            tileUrlFunction: options.tileUrlFunction,
            url: options.url,
            urls: options.urls,
            wrapX: options.wrapX !== undefined ? options.wrapX : true,
            transition: options.transition,
            attributionsCollapsible: options.attributionsCollapsible,
            zDirection: options.zDirection,
        }) || this;
        /**
         * @private
         * @type {number}
         */
        _this.gutter_ = options.gutter !== undefined ? options.gutter : 0;
        return _this;
    }
    /**
     * @return {number} Gutter.
     */
    XYZ.prototype.getGutter = function () {
        return this.gutter_;
    };
    return XYZ;
}(source_TileImage));
/* harmony default export */ const source_XYZ = (XYZ);
//# sourceMappingURL=XYZ.js.map

/***/ }),

/***/ 4768:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ DEFAULT_TILE_SIZE),
/* harmony export */   "e": () => (/* binding */ DEFAULT_MAX_ZOOM)
/* harmony export */ });
/**
 * @module ol/tilegrid/common
 */
/**
 * Default maximum zoom for default tile grids.
 * @type {number}
 */
var DEFAULT_MAX_ZOOM = 42;
/**
 * Default tile size.
 * @type {number}
 */
var DEFAULT_TILE_SIZE = 256;
//# sourceMappingURL=common.js.map

/***/ }),

/***/ 6101:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BB": () => (/* binding */ toString),
/* harmony export */   "Ue": () => (/* binding */ create),
/* harmony export */   "nb": () => (/* binding */ makeInverse),
/* harmony export */   "nn": () => (/* binding */ apply),
/* harmony export */   "qC": () => (/* binding */ compose)
/* harmony export */ });
/* unused harmony exports reset, multiply, set, setFromArray, rotate, scale, makeScale, translate, composeCssTransform, invert, determinant */
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(177);
/* harmony import */ var _asserts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9515);
/**
 * @module ol/transform
 */


/**
 * An array representing an affine 2d transformation for use with
 * {@link module:ol/transform} functions. The array has 6 elements.
 * @typedef {!Array<number>} Transform
 * @api
 */
/**
 * Collection of affine 2d transformation functions. The functions work on an
 * array of 6 elements. The element order is compatible with the [SVGMatrix
 * interface](https://developer.mozilla.org/en-US/docs/Web/API/SVGMatrix) and is
 * a subset (elements a to f) of a 3×3 matrix:
 * ```
 * [ a c e ]
 * [ b d f ]
 * [ 0 0 1 ]
 * ```
 */
/**
 * @private
 * @type {Transform}
 */
var tmp_ = new Array(6);
/**
 * Create an identity transform.
 * @return {!Transform} Identity transform.
 */
function create() {
    return [1, 0, 0, 1, 0, 0];
}
/**
 * Resets the given transform to an identity transform.
 * @param {!Transform} transform Transform.
 * @return {!Transform} Transform.
 */
function reset(transform) {
    return set(transform, 1, 0, 0, 1, 0, 0);
}
/**
 * Multiply the underlying matrices of two transforms and return the result in
 * the first transform.
 * @param {!Transform} transform1 Transform parameters of matrix 1.
 * @param {!Transform} transform2 Transform parameters of matrix 2.
 * @return {!Transform} transform1 multiplied with transform2.
 */
function multiply(transform1, transform2) {
    var a1 = transform1[0];
    var b1 = transform1[1];
    var c1 = transform1[2];
    var d1 = transform1[3];
    var e1 = transform1[4];
    var f1 = transform1[5];
    var a2 = transform2[0];
    var b2 = transform2[1];
    var c2 = transform2[2];
    var d2 = transform2[3];
    var e2 = transform2[4];
    var f2 = transform2[5];
    transform1[0] = a1 * a2 + c1 * b2;
    transform1[1] = b1 * a2 + d1 * b2;
    transform1[2] = a1 * c2 + c1 * d2;
    transform1[3] = b1 * c2 + d1 * d2;
    transform1[4] = a1 * e2 + c1 * f2 + e1;
    transform1[5] = b1 * e2 + d1 * f2 + f1;
    return transform1;
}
/**
 * Set the transform components a-f on a given transform.
 * @param {!Transform} transform Transform.
 * @param {number} a The a component of the transform.
 * @param {number} b The b component of the transform.
 * @param {number} c The c component of the transform.
 * @param {number} d The d component of the transform.
 * @param {number} e The e component of the transform.
 * @param {number} f The f component of the transform.
 * @return {!Transform} Matrix with transform applied.
 */
function set(transform, a, b, c, d, e, f) {
    transform[0] = a;
    transform[1] = b;
    transform[2] = c;
    transform[3] = d;
    transform[4] = e;
    transform[5] = f;
    return transform;
}
/**
 * Set transform on one matrix from another matrix.
 * @param {!Transform} transform1 Matrix to set transform to.
 * @param {!Transform} transform2 Matrix to set transform from.
 * @return {!Transform} transform1 with transform from transform2 applied.
 */
function setFromArray(transform1, transform2) {
    transform1[0] = transform2[0];
    transform1[1] = transform2[1];
    transform1[2] = transform2[2];
    transform1[3] = transform2[3];
    transform1[4] = transform2[4];
    transform1[5] = transform2[5];
    return transform1;
}
/**
 * Transforms the given coordinate with the given transform returning the
 * resulting, transformed coordinate. The coordinate will be modified in-place.
 *
 * @param {Transform} transform The transformation.
 * @param {import("./coordinate.js").Coordinate|import("./pixel.js").Pixel} coordinate The coordinate to transform.
 * @return {import("./coordinate.js").Coordinate|import("./pixel.js").Pixel} return coordinate so that operations can be
 *     chained together.
 */
function apply(transform, coordinate) {
    var x = coordinate[0];
    var y = coordinate[1];
    coordinate[0] = transform[0] * x + transform[2] * y + transform[4];
    coordinate[1] = transform[1] * x + transform[3] * y + transform[5];
    return coordinate;
}
/**
 * Applies rotation to the given transform.
 * @param {!Transform} transform Transform.
 * @param {number} angle Angle in radians.
 * @return {!Transform} The rotated transform.
 */
function rotate(transform, angle) {
    var cos = Math.cos(angle);
    var sin = Math.sin(angle);
    return multiply(transform, set(tmp_, cos, sin, -sin, cos, 0, 0));
}
/**
 * Applies scale to a given transform.
 * @param {!Transform} transform Transform.
 * @param {number} x Scale factor x.
 * @param {number} y Scale factor y.
 * @return {!Transform} The scaled transform.
 */
function scale(transform, x, y) {
    return multiply(transform, set(tmp_, x, 0, 0, y, 0, 0));
}
/**
 * Creates a scale transform.
 * @param {!Transform} target Transform to overwrite.
 * @param {number} x Scale factor x.
 * @param {number} y Scale factor y.
 * @return {!Transform} The scale transform.
 */
function makeScale(target, x, y) {
    return set(target, x, 0, 0, y, 0, 0);
}
/**
 * Applies translation to the given transform.
 * @param {!Transform} transform Transform.
 * @param {number} dx Translation x.
 * @param {number} dy Translation y.
 * @return {!Transform} The translated transform.
 */
function translate(transform, dx, dy) {
    return multiply(transform, set(tmp_, 1, 0, 0, 1, dx, dy));
}
/**
 * Creates a composite transform given an initial translation, scale, rotation, and
 * final translation (in that order only, not commutative).
 * @param {!Transform} transform The transform (will be modified in place).
 * @param {number} dx1 Initial translation x.
 * @param {number} dy1 Initial translation y.
 * @param {number} sx Scale factor x.
 * @param {number} sy Scale factor y.
 * @param {number} angle Rotation (in counter-clockwise radians).
 * @param {number} dx2 Final translation x.
 * @param {number} dy2 Final translation y.
 * @return {!Transform} The composite transform.
 */
function compose(transform, dx1, dy1, sx, sy, angle, dx2, dy2) {
    var sin = Math.sin(angle);
    var cos = Math.cos(angle);
    transform[0] = sx * cos;
    transform[1] = sy * sin;
    transform[2] = -sx * sin;
    transform[3] = sy * cos;
    transform[4] = dx2 * sx * cos - dy2 * sx * sin + dx1;
    transform[5] = dx2 * sy * sin + dy2 * sy * cos + dy1;
    return transform;
}
/**
 * Creates a composite transform given an initial translation, scale, rotation, and
 * final translation (in that order only, not commutative). The resulting transform
 * string can be applied as `transform` property of an HTMLElement's style.
 * @param {number} dx1 Initial translation x.
 * @param {number} dy1 Initial translation y.
 * @param {number} sx Scale factor x.
 * @param {number} sy Scale factor y.
 * @param {number} angle Rotation (in counter-clockwise radians).
 * @param {number} dx2 Final translation x.
 * @param {number} dy2 Final translation y.
 * @return {string} The composite css transform.
 * @api
 */
function composeCssTransform(dx1, dy1, sx, sy, angle, dx2, dy2) {
    return toString(compose(create(), dx1, dy1, sx, sy, angle, dx2, dy2));
}
/**
 * Invert the given transform.
 * @param {!Transform} source The source transform to invert.
 * @return {!Transform} The inverted (source) transform.
 */
function invert(source) {
    return makeInverse(source, source);
}
/**
 * Invert the given transform.
 * @param {!Transform} target Transform to be set as the inverse of
 *     the source transform.
 * @param {!Transform} source The source transform to invert.
 * @return {!Transform} The inverted (target) transform.
 */
function makeInverse(target, source) {
    var det = determinant(source);
    (0,_asserts_js__WEBPACK_IMPORTED_MODULE_0__/* .assert */ .h)(det !== 0, 32); // Transformation matrix cannot be inverted
    var a = source[0];
    var b = source[1];
    var c = source[2];
    var d = source[3];
    var e = source[4];
    var f = source[5];
    target[0] = d / det;
    target[1] = -b / det;
    target[2] = -c / det;
    target[3] = a / det;
    target[4] = (c * f - d * e) / det;
    target[5] = -(a * f - b * e) / det;
    return target;
}
/**
 * Returns the determinant of the given matrix.
 * @param {!Transform} mat Matrix.
 * @return {number} Determinant.
 */
function determinant(mat) {
    return mat[0] * mat[3] - mat[1] * mat[2];
}
/**
 * @type {HTMLElement}
 * @private
 */
var transformStringDiv;
/**
 * A rounded string version of the transform.  This can be used
 * for CSS transforms.
 * @param {!Transform} mat Matrix.
 * @return {string} The transform as a string.
 */
function toString(mat) {
    var transformString = 'matrix(' + mat.join(', ') + ')';
    if (_has_js__WEBPACK_IMPORTED_MODULE_1__/* .WORKER_OFFSCREEN_CANVAS */ .Id) {
        return transformString;
    }
    var node = transformStringDiv || (transformStringDiv = document.createElement('div'));
    node.style.transform = transformString;
    return node.style.transform;
}
//# sourceMappingURL=transform.js.map

/***/ }),

/***/ 4187:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O3": () => (/* binding */ abstract),
/* harmony export */   "q4": () => (/* binding */ VERSION),
/* harmony export */   "sq": () => (/* binding */ getUid)
/* harmony export */ });
/**
 * @module ol/util
 */
/**
 * @return {?} Any return.
 */
function abstract() {
    return /** @type {?} */ ((function () {
        throw new Error('Unimplemented abstract method.');
    })());
}
/**
 * Counter for getUid.
 * @type {number}
 * @private
 */
var uidCounter_ = 0;
/**
 * Gets a unique ID for an object. This mutates the object so that further calls
 * with the same object as a parameter returns the same value. Unique IDs are generated
 * as a strictly increasing sequence. Adapted from goog.getUid.
 *
 * @param {Object} obj The object to get the unique ID for.
 * @return {string} The unique ID for the object.
 * @api
 */
function getUid(obj) {
    return obj.ol_uid || (obj.ol_uid = String(++uidCounter_));
}
/**
 * OpenLayers version.
 * @type {string}
 */
var VERSION = '6.15.1';
//# sourceMappingURL=util.js.map

/***/ })

};
;