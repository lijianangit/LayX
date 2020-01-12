(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["layx"] = factory();
	else
		root["layx"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/svg-baker-runtime/browser-symbol.js":
/*!**********************************************************!*\
  !*** ./node_modules/svg-baker-runtime/browser-symbol.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

var SpriteSymbol = function SpriteSymbol(ref) {
  var id = ref.id;
  var viewBox = ref.viewBox;
  var content = ref.content;

  this.id = id;
  this.viewBox = viewBox;
  this.content = content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.stringify = function stringify () {
  return this.content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.toString = function toString () {
  return this.stringify();
};

SpriteSymbol.prototype.destroy = function destroy () {
    var this$1 = this;

  ['id', 'viewBox', 'content'].forEach(function (prop) { return delete this$1[prop]; });
};

/**
 * @param {string} content
 * @return {Element}
 */
var parse = function (content) {
  var hasImportNode = !!document.importNode;
  var doc = new DOMParser().parseFromString(content, 'image/svg+xml').documentElement;

  /**
   * Fix for browser which are throwing WrongDocumentError
   * if you insert an element which is not part of the document
   * @see http://stackoverflow.com/a/7986519/4624403
   */
  if (hasImportNode) {
    return document.importNode(doc, true);
  }

  return doc;
};

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var deepmerge = createCommonjsModule(function (module, exports) {
(function (root, factory) {
    if (false) {} else {
        module.exports = factory();
    }
}(commonjsGlobal, function () {

function isMergeableObject(val) {
    var nonNullObject = val && typeof val === 'object';

    return nonNullObject
        && Object.prototype.toString.call(val) !== '[object RegExp]'
        && Object.prototype.toString.call(val) !== '[object Date]'
}

function emptyTarget(val) {
    return Array.isArray(val) ? [] : {}
}

function cloneIfNecessary(value, optionsArgument) {
    var clone = optionsArgument && optionsArgument.clone === true;
    return (clone && isMergeableObject(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value
}

function defaultArrayMerge(target, source, optionsArgument) {
    var destination = target.slice();
    source.forEach(function(e, i) {
        if (typeof destination[i] === 'undefined') {
            destination[i] = cloneIfNecessary(e, optionsArgument);
        } else if (isMergeableObject(e)) {
            destination[i] = deepmerge(target[i], e, optionsArgument);
        } else if (target.indexOf(e) === -1) {
            destination.push(cloneIfNecessary(e, optionsArgument));
        }
    });
    return destination
}

function mergeObject(target, source, optionsArgument) {
    var destination = {};
    if (isMergeableObject(target)) {
        Object.keys(target).forEach(function (key) {
            destination[key] = cloneIfNecessary(target[key], optionsArgument);
        });
    }
    Object.keys(source).forEach(function (key) {
        if (!isMergeableObject(source[key]) || !target[key]) {
            destination[key] = cloneIfNecessary(source[key], optionsArgument);
        } else {
            destination[key] = deepmerge(target[key], source[key], optionsArgument);
        }
    });
    return destination
}

function deepmerge(target, source, optionsArgument) {
    var array = Array.isArray(source);
    var options = optionsArgument || { arrayMerge: defaultArrayMerge };
    var arrayMerge = options.arrayMerge || defaultArrayMerge;

    if (array) {
        return Array.isArray(target) ? arrayMerge(target, source, optionsArgument) : cloneIfNecessary(source, optionsArgument)
    } else {
        return mergeObject(target, source, optionsArgument)
    }
}

deepmerge.all = function deepmergeAll(array, optionsArgument) {
    if (!Array.isArray(array) || array.length < 2) {
        throw new Error('first argument should be an array with at least two elements')
    }

    // we are sure there are at least 2 values, so it is safe to have no initial value
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, optionsArgument)
    })
};

return deepmerge

}));
});

var namespaces_1 = createCommonjsModule(function (module, exports) {
var namespaces = {
  svg: {
    name: 'xmlns',
    uri: 'http://www.w3.org/2000/svg'
  },
  xlink: {
    name: 'xmlns:xlink',
    uri: 'http://www.w3.org/1999/xlink'
  }
};

exports.default = namespaces;
module.exports = exports.default;
});

/**
 * @param {Object} attrs
 * @return {string}
 */
var objectToAttrsString = function (attrs) {
  return Object.keys(attrs).map(function (attr) {
    var value = attrs[attr].toString().replace(/"/g, '&quot;');
    return (attr + "=\"" + value + "\"");
  }).join(' ');
};

var svg = namespaces_1.svg;
var xlink = namespaces_1.xlink;

var defaultAttrs = {};
defaultAttrs[svg.name] = svg.uri;
defaultAttrs[xlink.name] = xlink.uri;

/**
 * @param {string} [content]
 * @param {Object} [attributes]
 * @return {string}
 */
var wrapInSvgString = function (content, attributes) {
  if ( content === void 0 ) content = '';

  var attrs = deepmerge(defaultAttrs, attributes || {});
  var attrsRendered = objectToAttrsString(attrs);
  return ("<svg " + attrsRendered + ">" + content + "</svg>");
};

var BrowserSpriteSymbol = (function (SpriteSymbol$$1) {
  function BrowserSpriteSymbol () {
    SpriteSymbol$$1.apply(this, arguments);
  }

  if ( SpriteSymbol$$1 ) BrowserSpriteSymbol.__proto__ = SpriteSymbol$$1;
  BrowserSpriteSymbol.prototype = Object.create( SpriteSymbol$$1 && SpriteSymbol$$1.prototype );
  BrowserSpriteSymbol.prototype.constructor = BrowserSpriteSymbol;

  var prototypeAccessors = { isMounted: {} };

  prototypeAccessors.isMounted.get = function () {
    return !!this.node;
  };

  /**
   * @param {Element} node
   * @return {BrowserSpriteSymbol}
   */
  BrowserSpriteSymbol.createFromExistingNode = function createFromExistingNode (node) {
    return new BrowserSpriteSymbol({
      id: node.getAttribute('id'),
      viewBox: node.getAttribute('viewBox'),
      content: node.outerHTML
    });
  };

  BrowserSpriteSymbol.prototype.destroy = function destroy () {
    if (this.isMounted) {
      this.unmount();
    }
    SpriteSymbol$$1.prototype.destroy.call(this);
  };

  /**
   * @param {Element|string} target
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.mount = function mount (target) {
    if (this.isMounted) {
      return this.node;
    }

    var mountTarget = typeof target === 'string' ? document.querySelector(target) : target;
    var node = this.render();
    this.node = node;

    mountTarget.appendChild(node);

    return node;
  };

  /**
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.render = function render () {
    var content = this.stringify();
    return parse(wrapInSvgString(content)).childNodes[0];
  };

  BrowserSpriteSymbol.prototype.unmount = function unmount () {
    this.node.parentNode.removeChild(this.node);
  };

  Object.defineProperties( BrowserSpriteSymbol.prototype, prototypeAccessors );

  return BrowserSpriteSymbol;
}(SpriteSymbol));

return BrowserSpriteSymbol;

})));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js":
/*!************************************************************************!*\
  !*** ./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var deepmerge = createCommonjsModule(function (module, exports) {
(function (root, factory) {
    if (false) {} else {
        module.exports = factory();
    }
}(commonjsGlobal, function () {

function isMergeableObject(val) {
    var nonNullObject = val && typeof val === 'object';

    return nonNullObject
        && Object.prototype.toString.call(val) !== '[object RegExp]'
        && Object.prototype.toString.call(val) !== '[object Date]'
}

function emptyTarget(val) {
    return Array.isArray(val) ? [] : {}
}

function cloneIfNecessary(value, optionsArgument) {
    var clone = optionsArgument && optionsArgument.clone === true;
    return (clone && isMergeableObject(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value
}

function defaultArrayMerge(target, source, optionsArgument) {
    var destination = target.slice();
    source.forEach(function(e, i) {
        if (typeof destination[i] === 'undefined') {
            destination[i] = cloneIfNecessary(e, optionsArgument);
        } else if (isMergeableObject(e)) {
            destination[i] = deepmerge(target[i], e, optionsArgument);
        } else if (target.indexOf(e) === -1) {
            destination.push(cloneIfNecessary(e, optionsArgument));
        }
    });
    return destination
}

function mergeObject(target, source, optionsArgument) {
    var destination = {};
    if (isMergeableObject(target)) {
        Object.keys(target).forEach(function (key) {
            destination[key] = cloneIfNecessary(target[key], optionsArgument);
        });
    }
    Object.keys(source).forEach(function (key) {
        if (!isMergeableObject(source[key]) || !target[key]) {
            destination[key] = cloneIfNecessary(source[key], optionsArgument);
        } else {
            destination[key] = deepmerge(target[key], source[key], optionsArgument);
        }
    });
    return destination
}

function deepmerge(target, source, optionsArgument) {
    var array = Array.isArray(source);
    var options = optionsArgument || { arrayMerge: defaultArrayMerge };
    var arrayMerge = options.arrayMerge || defaultArrayMerge;

    if (array) {
        return Array.isArray(target) ? arrayMerge(target, source, optionsArgument) : cloneIfNecessary(source, optionsArgument)
    } else {
        return mergeObject(target, source, optionsArgument)
    }
}

deepmerge.all = function deepmergeAll(array, optionsArgument) {
    if (!Array.isArray(array) || array.length < 2) {
        throw new Error('first argument should be an array with at least two elements')
    }

    // we are sure there are at least 2 values, so it is safe to have no initial value
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, optionsArgument)
    })
};

return deepmerge

}));
});

//      
// An event handler can take an optional event argument
// and should not return a value
                                          
// An array of all currently registered event handlers for a type
                                            
// A map of event types and their corresponding event handlers.
                        
                                   
  

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all                 ) {
	all = all || Object.create(null);

	return {
		/**
		 * Register an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to listen for, or `"*"` for all events
		 * @param  {Function} handler Function to call in response to given event
		 * @memberOf mitt
		 */
		on: function on(type        , handler              ) {
			(all[type] || (all[type] = [])).push(handler);
		},

		/**
		 * Remove an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
		 * @param  {Function} handler Handler function to remove
		 * @memberOf mitt
		 */
		off: function off(type        , handler              ) {
			if (all[type]) {
				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
			}
		},

		/**
		 * Invoke all handlers for the given type.
		 * If present, `"*"` handlers are invoked after type-matched handlers.
		 *
		 * @param {String} type  The event type to invoke
		 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
		 * @memberof mitt
		 */
		emit: function emit(type        , evt     ) {
			(all[type] || []).map(function (handler) { handler(evt); });
			(all['*'] || []).map(function (handler) { handler(type, evt); });
		}
	};
}

var namespaces_1 = createCommonjsModule(function (module, exports) {
var namespaces = {
  svg: {
    name: 'xmlns',
    uri: 'http://www.w3.org/2000/svg'
  },
  xlink: {
    name: 'xmlns:xlink',
    uri: 'http://www.w3.org/1999/xlink'
  }
};

exports.default = namespaces;
module.exports = exports.default;
});

/**
 * @param {Object} attrs
 * @return {string}
 */
var objectToAttrsString = function (attrs) {
  return Object.keys(attrs).map(function (attr) {
    var value = attrs[attr].toString().replace(/"/g, '&quot;');
    return (attr + "=\"" + value + "\"");
  }).join(' ');
};

var svg = namespaces_1.svg;
var xlink = namespaces_1.xlink;

var defaultAttrs = {};
defaultAttrs[svg.name] = svg.uri;
defaultAttrs[xlink.name] = xlink.uri;

/**
 * @param {string} [content]
 * @param {Object} [attributes]
 * @return {string}
 */
var wrapInSvgString = function (content, attributes) {
  if ( content === void 0 ) content = '';

  var attrs = deepmerge(defaultAttrs, attributes || {});
  var attrsRendered = objectToAttrsString(attrs);
  return ("<svg " + attrsRendered + ">" + content + "</svg>");
};

var svg$1 = namespaces_1.svg;
var xlink$1 = namespaces_1.xlink;

var defaultConfig = {
  attrs: ( obj = {
    style: ['position: absolute', 'width: 0', 'height: 0'].join('; ')
  }, obj[svg$1.name] = svg$1.uri, obj[xlink$1.name] = xlink$1.uri, obj )
};
var obj;

var Sprite = function Sprite(config) {
  this.config = deepmerge(defaultConfig, config || {});
  this.symbols = [];
};

/**
 * Add new symbol. If symbol with the same id exists it will be replaced.
 * @param {SpriteSymbol} symbol
 * @return {boolean} `true` - symbol was added, `false` - replaced
 */
Sprite.prototype.add = function add (symbol) {
  var ref = this;
    var symbols = ref.symbols;
  var existing = this.find(symbol.id);

  if (existing) {
    symbols[symbols.indexOf(existing)] = symbol;
    return false;
  }

  symbols.push(symbol);
  return true;
};

/**
 * Remove symbol & destroy it
 * @param {string} id
 * @return {boolean} `true` - symbol was found & successfully destroyed, `false` - otherwise
 */
Sprite.prototype.remove = function remove (id) {
  var ref = this;
    var symbols = ref.symbols;
  var symbol = this.find(id);

  if (symbol) {
    symbols.splice(symbols.indexOf(symbol), 1);
    symbol.destroy();
    return true;
  }

  return false;
};

/**
 * @param {string} id
 * @return {SpriteSymbol|null}
 */
Sprite.prototype.find = function find (id) {
  return this.symbols.filter(function (s) { return s.id === id; })[0] || null;
};

/**
 * @param {string} id
 * @return {boolean}
 */
Sprite.prototype.has = function has (id) {
  return this.find(id) !== null;
};

/**
 * @return {string}
 */
Sprite.prototype.stringify = function stringify () {
  var ref = this.config;
    var attrs = ref.attrs;
  var stringifiedSymbols = this.symbols.map(function (s) { return s.stringify(); }).join('');
  return wrapInSvgString(stringifiedSymbols, attrs);
};

/**
 * @return {string}
 */
Sprite.prototype.toString = function toString () {
  return this.stringify();
};

Sprite.prototype.destroy = function destroy () {
  this.symbols.forEach(function (s) { return s.destroy(); });
};

var SpriteSymbol = function SpriteSymbol(ref) {
  var id = ref.id;
  var viewBox = ref.viewBox;
  var content = ref.content;

  this.id = id;
  this.viewBox = viewBox;
  this.content = content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.stringify = function stringify () {
  return this.content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.toString = function toString () {
  return this.stringify();
};

SpriteSymbol.prototype.destroy = function destroy () {
    var this$1 = this;

  ['id', 'viewBox', 'content'].forEach(function (prop) { return delete this$1[prop]; });
};

/**
 * @param {string} content
 * @return {Element}
 */
var parse = function (content) {
  var hasImportNode = !!document.importNode;
  var doc = new DOMParser().parseFromString(content, 'image/svg+xml').documentElement;

  /**
   * Fix for browser which are throwing WrongDocumentError
   * if you insert an element which is not part of the document
   * @see http://stackoverflow.com/a/7986519/4624403
   */
  if (hasImportNode) {
    return document.importNode(doc, true);
  }

  return doc;
};

var BrowserSpriteSymbol = (function (SpriteSymbol$$1) {
  function BrowserSpriteSymbol () {
    SpriteSymbol$$1.apply(this, arguments);
  }

  if ( SpriteSymbol$$1 ) BrowserSpriteSymbol.__proto__ = SpriteSymbol$$1;
  BrowserSpriteSymbol.prototype = Object.create( SpriteSymbol$$1 && SpriteSymbol$$1.prototype );
  BrowserSpriteSymbol.prototype.constructor = BrowserSpriteSymbol;

  var prototypeAccessors = { isMounted: {} };

  prototypeAccessors.isMounted.get = function () {
    return !!this.node;
  };

  /**
   * @param {Element} node
   * @return {BrowserSpriteSymbol}
   */
  BrowserSpriteSymbol.createFromExistingNode = function createFromExistingNode (node) {
    return new BrowserSpriteSymbol({
      id: node.getAttribute('id'),
      viewBox: node.getAttribute('viewBox'),
      content: node.outerHTML
    });
  };

  BrowserSpriteSymbol.prototype.destroy = function destroy () {
    if (this.isMounted) {
      this.unmount();
    }
    SpriteSymbol$$1.prototype.destroy.call(this);
  };

  /**
   * @param {Element|string} target
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.mount = function mount (target) {
    if (this.isMounted) {
      return this.node;
    }

    var mountTarget = typeof target === 'string' ? document.querySelector(target) : target;
    var node = this.render();
    this.node = node;

    mountTarget.appendChild(node);

    return node;
  };

  /**
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.render = function render () {
    var content = this.stringify();
    return parse(wrapInSvgString(content)).childNodes[0];
  };

  BrowserSpriteSymbol.prototype.unmount = function unmount () {
    this.node.parentNode.removeChild(this.node);
  };

  Object.defineProperties( BrowserSpriteSymbol.prototype, prototypeAccessors );

  return BrowserSpriteSymbol;
}(SpriteSymbol));

var defaultConfig$1 = {
  /**
   * Should following options be automatically configured:
   * - `syncUrlsWithBaseTag`
   * - `locationChangeAngularEmitter`
   * - `moveGradientsOutsideSymbol`
   * @type {boolean}
   */
  autoConfigure: true,

  /**
   * Default mounting selector
   * @type {string}
   */
  mountTo: 'body',

  /**
   * Fix disappearing SVG elements when <base href> exists.
   * Executes when sprite mounted.
   * @see http://stackoverflow.com/a/18265336/796152
   * @see https://github.com/everdimension/angular-svg-base-fix
   * @see https://github.com/angular/angular.js/issues/8934#issuecomment-56568466
   * @type {boolean}
   */
  syncUrlsWithBaseTag: false,

  /**
   * Should sprite listen custom location change event
   * @type {boolean}
   */
  listenLocationChangeEvent: true,

  /**
   * Custom window event name which should be emitted to update sprite urls
   * @type {string}
   */
  locationChangeEvent: 'locationChange',

  /**
   * Emit location change event in Angular automatically
   * @type {boolean}
   */
  locationChangeAngularEmitter: false,

  /**
   * Selector to find symbols usages when updating sprite urls
   * @type {string}
   */
  usagesToUpdate: 'use[*|href]',

  /**
   * Fix Firefox bug when gradients and patterns don't work if they are within a symbol.
   * Executes when sprite is rendered, but not mounted.
   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=306674
   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=353575
   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=1235364
   * @type {boolean}
   */
  moveGradientsOutsideSymbol: false
};

/**
 * @param {*} arrayLike
 * @return {Array}
 */
var arrayFrom = function (arrayLike) {
  return Array.prototype.slice.call(arrayLike, 0);
};

var browser = {
  isChrome: function () { return /chrome/i.test(navigator.userAgent); },
  isFirefox: function () { return /firefox/i.test(navigator.userAgent); },

  // https://msdn.microsoft.com/en-us/library/ms537503(v=vs.85).aspx
  isIE: function () { return /msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent); },
  isEdge: function () { return /edge/i.test(navigator.userAgent); }
};

/**
 * @param {string} name
 * @param {*} data
 */
var dispatchEvent = function (name, data) {
  var event = document.createEvent('CustomEvent');
  event.initCustomEvent(name, false, false, data);
  window.dispatchEvent(event);
};

/**
 * IE doesn't evaluate <style> tags in SVGs that are dynamically added to the page.
 * This trick will trigger IE to read and use any existing SVG <style> tags.
 * @see https://github.com/iconic/SVGInjector/issues/23
 * @see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/10898469/
 *
 * @param {Element} node DOM Element to search <style> tags in
 * @return {Array<HTMLStyleElement>}
 */
var evalStylesIEWorkaround = function (node) {
  var updatedNodes = [];

  arrayFrom(node.querySelectorAll('style'))
    .forEach(function (style) {
      style.textContent += '';
      updatedNodes.push(style);
    });

  return updatedNodes;
};

/**
 * @param {string} [url] If not provided - current URL will be used
 * @return {string}
 */
var getUrlWithoutFragment = function (url) {
  return (url || window.location.href).split('#')[0];
};

/* global angular */
/**
 * @param {string} eventName
 */
var locationChangeAngularEmitter = function (eventName) {
  angular.module('ng').run(['$rootScope', function ($rootScope) {
    $rootScope.$on('$locationChangeSuccess', function (e, newUrl, oldUrl) {
      dispatchEvent(eventName, { oldUrl: oldUrl, newUrl: newUrl });
    });
  }]);
};

var defaultSelector = 'linearGradient, radialGradient, pattern';

/**
 * @param {Element} svg
 * @param {string} [selector]
 * @return {Element}
 */
var moveGradientsOutsideSymbol = function (svg, selector) {
  if ( selector === void 0 ) selector = defaultSelector;

  arrayFrom(svg.querySelectorAll('symbol')).forEach(function (symbol) {
    arrayFrom(symbol.querySelectorAll(selector)).forEach(function (node) {
      symbol.parentNode.insertBefore(node, symbol);
    });
  });
  return svg;
};

/**
 * @param {NodeList} nodes
 * @param {Function} [matcher]
 * @return {Attr[]}
 */
function selectAttributes(nodes, matcher) {
  var attrs = arrayFrom(nodes).reduce(function (acc, node) {
    if (!node.attributes) {
      return acc;
    }

    var arrayfied = arrayFrom(node.attributes);
    var matched = matcher ? arrayfied.filter(matcher) : arrayfied;
    return acc.concat(matched);
  }, []);

  return attrs;
}

/**
 * @param {NodeList|Node} nodes
 * @param {boolean} [clone=true]
 * @return {string}
 */

var xLinkNS = namespaces_1.xlink.uri;
var xLinkAttrName = 'xlink:href';

// eslint-disable-next-line no-useless-escape
var specialUrlCharsPattern = /[{}|\\\^\[\]`"<>]/g;

function encoder(url) {
  return url.replace(specialUrlCharsPattern, function (match) {
    return ("%" + (match[0].charCodeAt(0).toString(16).toUpperCase()));
  });
}

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}

/**
 * @param {NodeList} nodes
 * @param {string} startsWith
 * @param {string} replaceWith
 * @return {NodeList}
 */
function updateReferences(nodes, startsWith, replaceWith) {
  arrayFrom(nodes).forEach(function (node) {
    var href = node.getAttribute(xLinkAttrName);
    if (href && href.indexOf(startsWith) === 0) {
      var newUrl = href.replace(startsWith, replaceWith);
      node.setAttributeNS(xLinkNS, xLinkAttrName, newUrl);
    }
  });

  return nodes;
}

/**
 * List of SVG attributes to update url() target in them
 */
var attList = [
  'clipPath',
  'colorProfile',
  'src',
  'cursor',
  'fill',
  'filter',
  'marker',
  'markerStart',
  'markerMid',
  'markerEnd',
  'mask',
  'stroke',
  'style'
];

var attSelector = attList.map(function (attr) { return ("[" + attr + "]"); }).join(',');

/**
 * Update URLs in svg image (like `fill="url(...)"`) and update referencing elements
 * @param {Element} svg
 * @param {NodeList} references
 * @param {string|RegExp} startsWith
 * @param {string} replaceWith
 * @return {void}
 *
 * @example
 * const sprite = document.querySelector('svg.sprite');
 * const usages = document.querySelectorAll('use');
 * updateUrls(sprite, usages, '#', 'prefix#');
 */
var updateUrls = function (svg, references, startsWith, replaceWith) {
  var startsWithEncoded = encoder(startsWith);
  var replaceWithEncoded = encoder(replaceWith);

  var nodes = svg.querySelectorAll(attSelector);
  var attrs = selectAttributes(nodes, function (ref) {
    var localName = ref.localName;
    var value = ref.value;

    return attList.indexOf(localName) !== -1 && value.indexOf(("url(" + startsWithEncoded)) !== -1;
  });

  attrs.forEach(function (attr) { return attr.value = attr.value.replace(new RegExp(escapeRegExp(startsWithEncoded), 'g'), replaceWithEncoded); });
  updateReferences(references, startsWithEncoded, replaceWithEncoded);
};

/**
 * Internal emitter events
 * @enum
 * @private
 */
var Events = {
  MOUNT: 'mount',
  SYMBOL_MOUNT: 'symbol_mount'
};

var BrowserSprite = (function (Sprite$$1) {
  function BrowserSprite(cfg) {
    var this$1 = this;
    if ( cfg === void 0 ) cfg = {};

    Sprite$$1.call(this, deepmerge(defaultConfig$1, cfg));

    var emitter = mitt();
    this._emitter = emitter;
    this.node = null;

    var ref = this;
    var config = ref.config;

    if (config.autoConfigure) {
      this._autoConfigure(cfg);
    }

    if (config.syncUrlsWithBaseTag) {
      var baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
      emitter.on(Events.MOUNT, function () { return this$1.updateUrls('#', baseUrl); });
    }

    var handleLocationChange = this._handleLocationChange.bind(this);
    this._handleLocationChange = handleLocationChange;

    // Provide way to update sprite urls externally via dispatching custom window event
    if (config.listenLocationChangeEvent) {
      window.addEventListener(config.locationChangeEvent, handleLocationChange);
    }

    // Emit location change event in Angular automatically
    if (config.locationChangeAngularEmitter) {
      locationChangeAngularEmitter(config.locationChangeEvent);
    }

    // After sprite mounted
    emitter.on(Events.MOUNT, function (spriteNode) {
      if (config.moveGradientsOutsideSymbol) {
        moveGradientsOutsideSymbol(spriteNode);
      }
    });

    // After symbol mounted into sprite
    emitter.on(Events.SYMBOL_MOUNT, function (symbolNode) {
      if (config.moveGradientsOutsideSymbol) {
        moveGradientsOutsideSymbol(symbolNode.parentNode);
      }

      if (browser.isIE() || browser.isEdge()) {
        evalStylesIEWorkaround(symbolNode);
      }
    });
  }

  if ( Sprite$$1 ) BrowserSprite.__proto__ = Sprite$$1;
  BrowserSprite.prototype = Object.create( Sprite$$1 && Sprite$$1.prototype );
  BrowserSprite.prototype.constructor = BrowserSprite;

  var prototypeAccessors = { isMounted: {} };

  /**
   * @return {boolean}
   */
  prototypeAccessors.isMounted.get = function () {
    return !!this.node;
  };

  /**
   * Automatically configure following options
   * - `syncUrlsWithBaseTag`
   * - `locationChangeAngularEmitter`
   * - `moveGradientsOutsideSymbol`
   * @param {Object} cfg
   * @private
   */
  BrowserSprite.prototype._autoConfigure = function _autoConfigure (cfg) {
    var ref = this;
    var config = ref.config;

    if (typeof cfg.syncUrlsWithBaseTag === 'undefined') {
      config.syncUrlsWithBaseTag = typeof document.getElementsByTagName('base')[0] !== 'undefined';
    }

    if (typeof cfg.locationChangeAngularEmitter === 'undefined') {
      config.locationChangeAngularEmitter = 'angular' in window;
    }

    if (typeof cfg.moveGradientsOutsideSymbol === 'undefined') {
      config.moveGradientsOutsideSymbol = browser.isFirefox();
    }
  };

  /**
   * @param {Event} event
   * @param {Object} event.detail
   * @param {string} event.detail.oldUrl
   * @param {string} event.detail.newUrl
   * @private
   */
  BrowserSprite.prototype._handleLocationChange = function _handleLocationChange (event) {
    var ref = event.detail;
    var oldUrl = ref.oldUrl;
    var newUrl = ref.newUrl;
    this.updateUrls(oldUrl, newUrl);
  };

  /**
   * Add new symbol. If symbol with the same id exists it will be replaced.
   * If sprite already mounted - `symbol.mount(sprite.node)` will be called.
   * @fires Events#SYMBOL_MOUNT
   * @param {BrowserSpriteSymbol} symbol
   * @return {boolean} `true` - symbol was added, `false` - replaced
   */
  BrowserSprite.prototype.add = function add (symbol) {
    var sprite = this;
    var isNewSymbol = Sprite$$1.prototype.add.call(this, symbol);

    if (this.isMounted && isNewSymbol) {
      symbol.mount(sprite.node);
      this._emitter.emit(Events.SYMBOL_MOUNT, symbol.node);
    }

    return isNewSymbol;
  };

  /**
   * Attach to existing DOM node
   * @param {string|Element} target
   * @return {Element|null} attached DOM Element. null if node to attach not found.
   */
  BrowserSprite.prototype.attach = function attach (target) {
    var this$1 = this;

    var sprite = this;

    if (sprite.isMounted) {
      return sprite.node;
    }

    /** @type Element */
    var node = typeof target === 'string' ? document.querySelector(target) : target;
    sprite.node = node;

    // Already added symbols needs to be mounted
    this.symbols.forEach(function (symbol) {
      symbol.mount(sprite.node);
      this$1._emitter.emit(Events.SYMBOL_MOUNT, symbol.node);
    });

    // Create symbols from existing DOM nodes, add and mount them
    arrayFrom(node.querySelectorAll('symbol'))
      .forEach(function (symbolNode) {
        var symbol = BrowserSpriteSymbol.createFromExistingNode(symbolNode);
        symbol.node = symbolNode; // hack to prevent symbol mounting to sprite when adding
        sprite.add(symbol);
      });

    this._emitter.emit(Events.MOUNT, node);

    return node;
  };

  BrowserSprite.prototype.destroy = function destroy () {
    var ref = this;
    var config = ref.config;
    var symbols = ref.symbols;
    var _emitter = ref._emitter;

    symbols.forEach(function (s) { return s.destroy(); });

    _emitter.off('*');
    window.removeEventListener(config.locationChangeEvent, this._handleLocationChange);

    if (this.isMounted) {
      this.unmount();
    }
  };

  /**
   * @fires Events#MOUNT
   * @param {string|Element} [target]
   * @param {boolean} [prepend=false]
   * @return {Element|null} rendered sprite node. null if mount node not found.
   */
  BrowserSprite.prototype.mount = function mount (target, prepend) {
    if ( target === void 0 ) target = this.config.mountTo;
    if ( prepend === void 0 ) prepend = false;

    var sprite = this;

    if (sprite.isMounted) {
      return sprite.node;
    }

    var mountNode = typeof target === 'string' ? document.querySelector(target) : target;
    var node = sprite.render();
    this.node = node;

    if (prepend && mountNode.childNodes[0]) {
      mountNode.insertBefore(node, mountNode.childNodes[0]);
    } else {
      mountNode.appendChild(node);
    }

    this._emitter.emit(Events.MOUNT, node);

    return node;
  };

  /**
   * @return {Element}
   */
  BrowserSprite.prototype.render = function render () {
    return parse(this.stringify());
  };

  /**
   * Detach sprite from the DOM
   */
  BrowserSprite.prototype.unmount = function unmount () {
    this.node.parentNode.removeChild(this.node);
  };

  /**
   * Update URLs in sprite and usage elements
   * @param {string} oldUrl
   * @param {string} newUrl
   * @return {boolean} `true` - URLs was updated, `false` - sprite is not mounted
   */
  BrowserSprite.prototype.updateUrls = function updateUrls$1 (oldUrl, newUrl) {
    if (!this.isMounted) {
      return false;
    }

    var usages = document.querySelectorAll(this.config.usagesToUpdate);

    updateUrls(
      this.node,
      usages,
      ((getUrlWithoutFragment(oldUrl)) + "#"),
      ((getUrlWithoutFragment(newUrl)) + "#")
    );

    return true;
  };

  Object.defineProperties( BrowserSprite.prototype, prototypeAccessors );

  return BrowserSprite;
}(Sprite));

var ready$1 = createCommonjsModule(function (module) {
/*!
  * domready (c) Dustin Diaz 2014 - License MIT
  */
!function (name, definition) {

  { module.exports = definition(); }

}('domready', function () {

  var fns = [], listener
    , doc = document
    , hack = doc.documentElement.doScroll
    , domContentLoaded = 'DOMContentLoaded'
    , loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState);


  if (!loaded)
  { doc.addEventListener(domContentLoaded, listener = function () {
    doc.removeEventListener(domContentLoaded, listener);
    loaded = 1;
    while (listener = fns.shift()) { listener(); }
  }); }

  return function (fn) {
    loaded ? setTimeout(fn, 0) : fns.push(fn);
  }

});
});

var spriteNodeId = '__SVG_SPRITE_NODE__';
var spriteGlobalVarName = '__SVG_SPRITE__';
var isSpriteExists = !!window[spriteGlobalVarName];

// eslint-disable-next-line import/no-mutable-exports
var sprite;

if (isSpriteExists) {
  sprite = window[spriteGlobalVarName];
} else {
  sprite = new BrowserSprite({ attrs: { id: spriteNodeId } });
  window[spriteGlobalVarName] = sprite;
}

var loadSprite = function () {
  /**
   * Check for page already contains sprite node
   * If found - attach to and reuse it's content
   * If not - render and mount the new sprite
   */
  var existing = document.getElementById(spriteNodeId);

  if (existing) {
    sprite.attach(existing);
  } else {
    sprite.mount(document.body, true);
  }
};

if (document.body) {
  loadSprite();
} else {
  ready$1(loadSprite);
}

var sprite$1 = sprite;

return sprite$1;

})));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/app/asset/icon/icon.svg":
/*!*************************************!*\
  !*** ./src/app/asset/icon/icon.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/svg-baker-runtime/browser-symbol.js */ "./node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ "./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon",
  "use": "icon-usage",
  "viewBox": "0 0 1024 1024",
  "content": "<symbol class=\"icon\" viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" id=\"icon\"><defs><style type=\"text/css\"></style></defs><path d=\"M853.333333 1024L170.666667 1024c-93.866667 0-170.666667-76.8-170.666667-170.666667L0 170.666667c0-93.866667 76.8-170.666667 170.666667-170.666667l682.66666699 0c93.866667 0 170.666667 76.8 170.66666701 170.666667l0 682.66666699C1024 947.2 947.2 1024 853.333333 1024zM170.666667 85.333333C123.733333 85.333333 85.333333 123.733333 85.333333 170.666667l0 682.66666699c0 46.933333 38.4 85.333333 85.33333301 85.33333301l682.66666699 0c46.933333 0 85.333333-38.4 85.33333301-85.33333301L938.666667 170.666667c0-46.933333-38.4-85.333333-85.33333301-85.33333301L170.666667 85.333333z\" p-id=\"1156\" /><path d=\"M981.333333 341.333333L42.666667 341.333333C17.066667 341.333333 0 324.266667 0 298.666667s17.066667-42.666667 42.666667-42.666667l938.66666699 0c25.6 0 42.666667 17.066667 42.66666701 42.666667S1006.933333 341.333333 981.333333 341.333333z\" p-id=\"1157\" /><path d=\"M170.666667 170.666667m-42.666667 0a1 1 0 1 0 85.333333 0 1 1 0 1 0-85.333333 0Z\" p-id=\"1158\" /><path d=\"M170.666667 234.666667C136.533333 234.666667 106.666667 204.8 106.666667 170.666667S136.533333 106.666667 170.666667 106.666667 234.666667 136.533333 234.666667 170.666667 204.8 234.666667 170.666667 234.666667zM170.666667 149.333333C157.866667 149.333333 149.333333 157.866667 149.333333 170.666667S157.866667 192 170.666667 192 192 183.466667 192 170.666667 183.466667 149.333333 170.666667 149.333333z\" p-id=\"1159\" /><path d=\"M298.666667 170.666667m-42.666667 0a1 1 0 1 0 85.333333 0 1 1 0 1 0-85.333333 0Z\" p-id=\"1160\" /><path d=\"M298.666667 234.666667C264.533333 234.666667 234.666667 204.8 234.666667 170.666667S264.533333 106.666667 298.666667 106.666667 362.666667 136.533333 362.666667 170.666667 332.8 234.666667 298.666667 234.666667zM298.666667 149.333333C285.866667 149.333333 277.333333 157.866667 277.333333 170.666667S285.866667 192 298.666667 192 320 183.466667 320 170.666667 311.466667 149.333333 298.666667 149.333333z\" p-id=\"1161\" /><path d=\"M426.666667 170.666667m-42.666667 0a1 1 0 1 0 85.333333 0 1 1 0 1 0-85.333333 0Z\" p-id=\"1162\" /><path d=\"M426.666667 234.666667C392.533333 234.666667 362.666667 204.8 362.666667 170.666667S392.533333 106.666667 426.666667 106.666667s64 29.866667 64 64S460.8 234.666667 426.666667 234.666667zM426.666667 149.333333C413.866667 149.333333 405.333333 157.866667 405.333333 170.666667S413.866667 192 426.666667 192s21.333333-8.533333 21.333333-21.333333S439.466667 149.333333 426.666667 149.333333z\" p-id=\"1163\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "./src/app/asset/icon/index.ts":
/*!*************************************!*\
  !*** ./src/app/asset/icon/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./icon.svg */ "./src/app/asset/icon/icon.svg");


/***/ }),

/***/ "./src/app/asset/style/animate.css":
/*!*****************************************!*\
  !*** ./src/app/asset/style/animate.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/asset/style/common.css":
/*!****************************************!*\
  !*** ./src/app/asset/style/common.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/asset/style/icon.css":
/*!**************************************!*\
  !*** ./src/app/asset/style/icon.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/asset/style/index.ts":
/*!**************************************!*\
  !*** ./src/app/asset/style/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./animate.css */ "./src/app/asset/style/animate.css");
__webpack_require__(/*! ./common.css */ "./src/app/asset/style/common.css");
__webpack_require__(/*! ./icon.css */ "./src/app/asset/style/icon.css");
__webpack_require__(/*! ./tool-bar.css */ "./src/app/asset/style/tool-bar.css");
__webpack_require__(/*! ./window.css */ "./src/app/asset/style/window.css");


/***/ }),

/***/ "./src/app/asset/style/tool-bar.css":
/*!******************************************!*\
  !*** ./src/app/asset/style/tool-bar.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/asset/style/window.css":
/*!****************************************!*\
  !*** ./src/app/asset/style/window.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/component/index.ts":
/*!************************************!*\
  !*** ./src/app/component/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var event_bus_1 = __webpack_require__(/*! ../core/event-bus */ "./src/app/core/event-bus/index.ts");
var entry_1 = __webpack_require__(/*! ../entry */ "./src/app/entry/index.ts");
var Component = (function () {
    function Component() {
        this.entry = entry_1.default.getInstance();
        this.eventBus = event_bus_1.default.getInstance();
        this.symbol = Symbol("monksoul");
    }
    Component.prototype.sendEvent = function (eventName, message) {
        if (message === void 0) { message = {}; }
        this.eventBus.emit(eventName, {
            dataset: message,
            eventTarget: {
                name: eventName,
                timestamp: new Date().valueOf()
            }
        });
    };
    Component.prototype.fromJSONPath = function (key, defaultValue, starObject) {
        if (starObject === void 0) { starObject = this.entry; }
        var _a;
        if (key.indexOf("/") > -1) {
            var keys = key.split("/");
            var tier = this.fromJSONPath(keys[0], defaultValue);
            if (!tier)
                return defaultValue;
            for (var i = 0; i < keys.length; i++) {
                if (i + 1 < keys.length) {
                    tier = this.fromJSONPath(keys[i + 1], defaultValue, tier);
                }
                else
                    return tier;
            }
            return tier;
        }
        else
            return _a = starObject[key], (_a !== null && _a !== void 0 ? _a : defaultValue);
    };
    return Component;
}());
exports.default = Component;


/***/ }),

/***/ "./src/app/component/ui-icon/const.ts":
/*!********************************************!*\
  !*** ./src/app/component/ui-icon/const.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SupportIcon;
(function (SupportIcon) {
    SupportIcon["ICON"] = "icon";
})(SupportIcon = exports.SupportIcon || (exports.SupportIcon = {}));
exports.DEFAULT_ICON = "icon";
exports.DEFAULT_ICON_COLOR = "#000000";
exports.DEFAULT_ICON_SIZE = 14;


/***/ }),

/***/ "./src/app/component/ui-icon/index.ts":
/*!********************************************!*\
  !*** ./src/app/component/ui-icon/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = __webpack_require__(/*! ../ */ "./src/app/component/index.ts");
var property_decorator_1 = __webpack_require__(/*! ../../core/decorator/property-decorator */ "./src/app/core/decorator/property-decorator.ts");
var element_helper_1 = __webpack_require__(/*! ../../core/helper/element-helper */ "./src/app/core/helper/element-helper.ts");
var const_1 = __webpack_require__(/*! ./const */ "./src/app/component/ui-icon/const.ts");
var partial_1 = __webpack_require__(/*! ./partial */ "./src/app/component/ui-icon/partial.ts");
var UIICon = (function (_super) {
    __extends(UIICon, _super);
    function UIICon(options) {
        var _this = _super.call(this) || this;
        _this.handlerOptions = partial_1.handlerOptions;
        _this.name = const_1.DEFAULT_ICON;
        _this.color = const_1.DEFAULT_ICON_COLOR;
        _this.size = const_1.DEFAULT_ICON_SIZE;
        _this.handlerOptions(options);
        return _this;
    }
    UIICon.prototype.present = function () {
        var element = element_helper_1.createDivElement();
        element_helper_1.addCSSClasses(element, "icon");
        var svgElement = element_helper_1.createSvgElement(this.name);
        svgElement.setAttribute("class", this.entry.prefix + "svg");
        svgElement.style.fontSize = this.size + "px";
        svgElement.style.color = "" + this.color;
        element.appendChild(svgElement);
        return element;
    };
    __decorate([
        property_decorator_1.isNoEmptyOrNull()
    ], UIICon.prototype, "name", void 0);
    __decorate([
        property_decorator_1.isColor()
    ], UIICon.prototype, "color", void 0);
    __decorate([
        property_decorator_1.isPstInt()
    ], UIICon.prototype, "size", void 0);
    return UIICon;
}(__1.default));
exports.default = UIICon;


/***/ }),

/***/ "./src/app/component/ui-icon/partial.ts":
/*!**********************************************!*\
  !*** ./src/app/component/ui-icon/partial.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function handlerOptions(options) {
    var _a, _b, _c, _d, _e, _f;
    this.name = (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.name, (_b !== null && _b !== void 0 ? _b : this.name));
    this.color = (_d = (_c = options) === null || _c === void 0 ? void 0 : _c.color, (_d !== null && _d !== void 0 ? _d : this.color));
    this.size = (_f = (_e = options) === null || _e === void 0 ? void 0 : _e.size, (_f !== null && _f !== void 0 ? _f : this.size));
}
exports.handlerOptions = handlerOptions;


/***/ }),

/***/ "./src/app/component/ui-tool-bar/index.ts":
/*!************************************************!*\
  !*** ./src/app/component/ui-tool-bar/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = __webpack_require__(/*! ../ */ "./src/app/component/index.ts");
var property_decorator_1 = __webpack_require__(/*! ../../core/decorator/property-decorator */ "./src/app/core/decorator/property-decorator.ts");
var element_helper_1 = __webpack_require__(/*! ../../core/helper/element-helper */ "./src/app/core/helper/element-helper.ts");
var validator_1 = __webpack_require__(/*! ../../core/validator */ "./src/app/core/validator/index.ts");
var const_1 = __webpack_require__(/*! ../../entry/const */ "./src/app/entry/const.ts");
var ui_icon_1 = __webpack_require__(/*! ../ui-icon */ "./src/app/component/ui-icon/index.ts");
var partial_1 = __webpack_require__(/*! ./partial */ "./src/app/component/ui-tool-bar/partial.ts");
var UIToolBar = (function (_super) {
    __extends(UIToolBar, _super);
    function UIToolBar(options) {
        var _this = _super.call(this) || this;
        _this.handlerOptions = partial_1.handlerOptions;
        _this.titleBar = _this.fromJSONPath("window/toolBar/titleBar", false);
        _this.height = _this.fromJSONPath("window/toolBar/height", const_1.DEFAULT_TOOLBAR_HEIGHT);
        _this.backgroundColor = _this.fromJSONPath("window/toolBar/backgroundColor", const_1.DEFAULT_TOOLBAR_BACKGROUND_COLOR);
        _this.icon = _this.fromJSONPath("window/toolBar/icon", false);
        _this.handlerOptions(options);
        return _this;
    }
    UIToolBar.prototype.present = function () {
        var element = element_helper_1.createDivElement();
        element_helper_1.addCSSClasses(element, "tool-bar", "flex-box", "vertical-middle");
        element_helper_1.addCSSStyles(element, {
            height: this.height + "px",
        });
        this.appendChild(element);
        return element;
    };
    UIToolBar.prototype.appendChild = function (element) {
        if (this.icon !== false) {
            var uiIcon = new ui_icon_1.default(this.icon);
            var uiIconElement = uiIcon.present();
            element_helper_1.addCSSClasses(uiIconElement, "tool-bar-icon");
            element.appendChild(uiIconElement);
        }
        if (this.titleBar !== false) {
            var titleBarElement = element_helper_1.createDivElement();
            element_helper_1.addCSSClasses(titleBarElement, "title-bar", "flex-item");
            element_helper_1.addCSSStyles(titleBarElement, {
                color: "" + this.titleBar.color,
                textAlign: "" + this.titleBar.align,
                fontSize: this.titleBar.fontSize + "px"
            });
            titleBarElement.textContent = this.titleBar.label;
            element.appendChild(titleBarElement);
        }
    };
    __decorate([
        property_decorator_1.combine({
            label: validator_1.checkString,
            color: validator_1.checkColor,
            align: ["left", "center", "right"],
            fontSize: validator_1.checkPstInt
        }, false)
    ], UIToolBar.prototype, "titleBar", void 0);
    __decorate([
        property_decorator_1.isPstNumber()
    ], UIToolBar.prototype, "height", void 0);
    __decorate([
        property_decorator_1.isColor()
    ], UIToolBar.prototype, "backgroundColor", void 0);
    __decorate([
        property_decorator_1.combine({
            name: validator_1.checkNoEmptyOrNull,
            size: validator_1.checkPstInt,
            color: validator_1.checkColor
        }, false)
    ], UIToolBar.prototype, "icon", void 0);
    return UIToolBar;
}(__1.default));
exports.default = UIToolBar;


/***/ }),

/***/ "./src/app/component/ui-tool-bar/partial.ts":
/*!**************************************************!*\
  !*** ./src/app/component/ui-tool-bar/partial.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function handlerOptions(options) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    this.height = (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.height, (_b !== null && _b !== void 0 ? _b : this.height));
    this.backgroundColor = (_d = (_c = options) === null || _c === void 0 ? void 0 : _c.backgroundColor, (_d !== null && _d !== void 0 ? _d : this.backgroundColor));
    this.titleBar = (_f = (_e = options) === null || _e === void 0 ? void 0 : _e.titleBar, (_f !== null && _f !== void 0 ? _f : this.titleBar));
    this.icon = (_h = (_g = options) === null || _g === void 0 ? void 0 : _g.icon, (_h !== null && _h !== void 0 ? _h : this.icon));
}
exports.handlerOptions = handlerOptions;


/***/ }),

/***/ "./src/app/component/ui-window/const.ts":
/*!**********************************************!*\
  !*** ./src/app/component/ui-window/const.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BorderStyle;
(function (BorderStyle) {
    BorderStyle["DOTTED"] = "dotted";
    BorderStyle["DASHED"] = "dashed";
    BorderStyle["SOLID"] = "solid";
    BorderStyle["DOUBLE"] = "double";
})(BorderStyle = exports.BorderStyle || (exports.BorderStyle = {}));
var Animation;
(function (Animation) {
    Animation["ZOOM"] = "zoom";
})(Animation = exports.Animation || (exports.Animation = {}));
var Offset;
(function (Offset) {
    Offset["CENTER"] = "center";
    Offset["TOP_CENTER"] = "top-center";
    Offset["BOTTOM_CENTER"] = "bottom-center";
    Offset["LEFT_TOP"] = "left-top";
    Offset["LEFT_MIDDLE"] = "left-middle";
    Offset["LEFT_BOTTOM"] = "left-bottom";
    Offset["RIGHT_TOP"] = "right-top";
    Offset["RIGHT_MIDDLE"] = "right-middle";
    Offset["RIGHT_BOTTOM"] = "right-bottom";
})(Offset = exports.Offset || (exports.Offset = {}));
exports.DEFAULT_MIN_WIDTH = 200;
exports.DEFAULT_MIN_HEIGHT = 200;
exports.DEFAULT_MAX_WIDTH = innerWidth;
exports.DEFAULT_MAX_HEIGHT = innerHeight;
exports.DEFAULT_BORDER_WIDTH = 1;
exports.DEFAULT_BORDER_STYLE = "solid";
exports.DEFAULT_BORDER_COLOR = "#3baced";
exports.DEFAULT_BORDER_RADIUS = 4;


/***/ }),

/***/ "./src/app/component/ui-window/index.ts":
/*!**********************************************!*\
  !*** ./src/app/component/ui-window/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = __webpack_require__(/*! ../ */ "./src/app/component/index.ts");
var property_decorator_1 = __webpack_require__(/*! ../../core/decorator/property-decorator */ "./src/app/core/decorator/property-decorator.ts");
var element_helper_1 = __webpack_require__(/*! ../../core/helper/element-helper */ "./src/app/core/helper/element-helper.ts");
var validator_1 = __webpack_require__(/*! ../../core/validator */ "./src/app/core/validator/index.ts");
var const_1 = __webpack_require__(/*! ../../entry/const */ "./src/app/entry/const.ts");
var ui_tool_bar_1 = __webpack_require__(/*! ../ui-tool-bar */ "./src/app/component/ui-tool-bar/index.ts");
var const_2 = __webpack_require__(/*! ./const */ "./src/app/component/ui-window/const.ts");
var partial_1 = __webpack_require__(/*! ./partial */ "./src/app/component/ui-window/partial.ts");
var UIWindow = (function (_super) {
    __extends(UIWindow, _super);
    function UIWindow(options) {
        var _a;
        var _this = _super.call(this) || this;
        _this.handlerOptions = partial_1.handlerOptions;
        _this.width = _this.fromJSONPath("window/width", const_1.DEFAULT_WINDOW_WIDTH);
        _this.height = _this.fromJSONPath("window/height", const_1.DEFAULT_WINDOW_HEIGHT);
        _this.minWidth = const_2.DEFAULT_MIN_WIDTH;
        _this.minHeight = const_2.DEFAULT_MIN_HEIGHT;
        _this.maxWidth = const_2.DEFAULT_MAX_WIDTH;
        _this.maxHeight = const_2.DEFAULT_MAX_HEIGHT;
        _this.left = (const_2.DEFAULT_MAX_WIDTH - _this.width) / 2;
        _this.top = (const_2.DEFAULT_MAX_HEIGHT - _this.height) / 2;
        _this.border = {
            width: const_2.DEFAULT_BORDER_WIDTH,
            style: const_2.DEFAULT_BORDER_STYLE,
            color: const_2.DEFAULT_BORDER_COLOR,
            radius: const_2.DEFAULT_BORDER_RADIUS
        };
        _this.boxShadow = true;
        _this.animate = "zoom";
        _this.backgroundColor = _this.fromJSONPath("window/backgroundColor", const_1.DEFAULT_WINDOW_BACKGROUND_COLOR);
        _this.toolBar = _this.fromJSONPath("window/toolBar", false);
        _this.windowElement = null;
        _this.id = (_a = options) === null || _a === void 0 ? void 0 : _a.id;
        _this.handlerOptions(options);
        return _this;
    }
    UIWindow.prototype.present = function () {
        var element = element_helper_1.createDivElement("" + (this.entry.prefix + this.id));
        this.windowElement = element;
        element_helper_1.addCSSClasses(element, "window", "flex-box", "col-direction", this.boxShadow ? "box-shadow" : undefined, this.animate !== false ? "animate" : undefined, this.animate !== false ? "animate-" + this.animate + "-show" : undefined);
        element_helper_1.addCSSStyles(element, {
            backgroundColor: "" + this.backgroundColor,
            zIndex: "" + this.entry.zIndex,
            width: this.width + "px",
            height: this.height + "px",
            maxWidth: this.maxWidth !== innerWidth ? this.maxWidth + "px" : null,
            maxHeight: this.maxHeight !== innerHeight ? this.maxHeight + "px" : null,
            minWidth: this.minWidth + "px",
            minHeight: this.minHeight + "px",
            left: this.left + "px",
            top: this.top + "px",
            border: this.border === false ? null :
                this.border.width + "px " + this.border.style + " " + this.border.color,
            borderRadius: this.border === false ? null :
                this.border.radius + "px",
            webkitBorderRadius: this.border === false ? null :
                this.border.radius + "px",
        });
        this.appendChild(element);
        this.monitorEvent();
        this.sendEvent("window:create", { id: this.id });
        return element;
    };
    UIWindow.prototype.appendChild = function (element) {
        if (this.toolBar !== false) {
            var uiToolBar = new ui_tool_bar_1.default(this.toolBar);
            var uiToolBarElement = uiToolBar.present();
            element.appendChild(uiToolBarElement);
        }
    };
    UIWindow.prototype.monitorEvent = function () {
        var _this = this;
        if (!this.windowElement)
            return;
        if (this.animate !== false) {
            this.windowElement.addEventListener("animationend", function (ev) {
                var animateShowName = "animate-" + _this.animate + "-show";
                if (element_helper_1.hasCSSClass(_this.windowElement, animateShowName)) {
                    element_helper_1.removeCSSClasses(_this.windowElement, animateShowName);
                    _this.sendEvent("window:show", { id: _this.id });
                }
            });
        }
    };
    __decorate([
        property_decorator_1.isNoEmptyOrNull()
    ], UIWindow.prototype, "id", void 0);
    __decorate([
        property_decorator_1.isPstNumber()
    ], UIWindow.prototype, "width", void 0);
    __decorate([
        property_decorator_1.isPstNumber()
    ], UIWindow.prototype, "height", void 0);
    __decorate([
        property_decorator_1.isPstNumber()
    ], UIWindow.prototype, "minWidth", void 0);
    __decorate([
        property_decorator_1.isPstNumber()
    ], UIWindow.prototype, "minHeight", void 0);
    __decorate([
        property_decorator_1.isPstNumber()
    ], UIWindow.prototype, "maxWidth", void 0);
    __decorate([
        property_decorator_1.isPstNumber()
    ], UIWindow.prototype, "maxHeight", void 0);
    __decorate([
        property_decorator_1.isPstNumber()
    ], UIWindow.prototype, "left", void 0);
    __decorate([
        property_decorator_1.isPstNumber()
    ], UIWindow.prototype, "top", void 0);
    __decorate([
        property_decorator_1.combine({
            width: validator_1.checkPstInt,
            style: ["solid", "double", "dotted", "dashed"],
            color: validator_1.checkColor,
            radius: validator_1.checkPstInt
        }, false)
    ], UIWindow.prototype, "border", void 0);
    __decorate([
        property_decorator_1.isBoolean()
    ], UIWindow.prototype, "boxShadow", void 0);
    __decorate([
        property_decorator_1.inValueOptions("zoom", false)
    ], UIWindow.prototype, "animate", void 0);
    __decorate([
        property_decorator_1.isColor()
    ], UIWindow.prototype, "backgroundColor", void 0);
    __decorate([
        property_decorator_1.combine({
            height: validator_1.checkPstNumber,
            backgroundColor: validator_1.checkColor,
            titleBar: {
                decorator: {
                    label: validator_1.checkString,
                    color: validator_1.checkColor,
                    align: ["left", "center", "right"],
                    fontSize: validator_1.checkPstInt
                },
                options: [false]
            },
            icon: {
                decorator: {
                    name: validator_1.checkNoEmptyOrNull,
                    size: validator_1.checkPstInt,
                    color: validator_1.checkColor
                },
                options: [false]
            }
        }, false)
    ], UIWindow.prototype, "toolBar", void 0);
    return UIWindow;
}(__1.default));
exports.default = UIWindow;


/***/ }),

/***/ "./src/app/component/ui-window/partial.ts":
/*!************************************************!*\
  !*** ./src/app/component/ui-window/partial.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var exception_1 = __webpack_require__(/*! ../../core/exception */ "./src/app/core/exception/index.ts");
var validator_1 = __webpack_require__(/*! ../../core/validator */ "./src/app/core/validator/index.ts");
function handlerOptions(options) {
    var _a;
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z;
    this.width = (_c = (_b = options) === null || _b === void 0 ? void 0 : _b.width, (_c !== null && _c !== void 0 ? _c : this.width));
    this.height = (_e = (_d = options) === null || _d === void 0 ? void 0 : _d.height, (_e !== null && _e !== void 0 ? _e : this.height));
    this.maxWidth = (_g = (_f = options) === null || _f === void 0 ? void 0 : _f.maxWidth, (_g !== null && _g !== void 0 ? _g : this.maxWidth));
    this.maxHeight = (_j = (_h = options) === null || _h === void 0 ? void 0 : _h.maxHeight, (_j !== null && _j !== void 0 ? _j : this.maxHeight));
    this.minWidth = (_l = (_k = options) === null || _k === void 0 ? void 0 : _k.minWidth, (_l !== null && _l !== void 0 ? _l : this.minWidth));
    this.minHeight = (_o = (_m = options) === null || _m === void 0 ? void 0 : _m.minHeight, (_o !== null && _o !== void 0 ? _o : this.minHeight));
    this.width = Math.max(this.minWidth, this.width);
    this.width = Math.min(this.maxWidth, this.width);
    this.height = Math.max(this.minHeight, this.height);
    this.height = Math.min(this.maxHeight, this.height);
    this.border = (_q = (_p = options) === null || _p === void 0 ? void 0 : _p.border, (_q !== null && _q !== void 0 ? _q : this.border));
    this.boxShadow = (_s = (_r = options) === null || _r === void 0 ? void 0 : _r.boxShadow, (_s !== null && _s !== void 0 ? _s : this.boxShadow));
    this.animate = (_u = (_t = options) === null || _t === void 0 ? void 0 : _t.animate, (_u !== null && _u !== void 0 ? _u : this.animate));
    _a = calcOffset(this.width, this.height, (_v = options) === null || _v === void 0 ? void 0 : _v.offset), this.left = _a[0], this.top = _a[1];
    this.backgroundColor = (_x = (_w = options) === null || _w === void 0 ? void 0 : _w.backgroundColor, (_x !== null && _x !== void 0 ? _x : this.backgroundColor));
    this.toolBar = (_z = (_y = options) === null || _y === void 0 ? void 0 : _y.toolBar, (_z !== null && _z !== void 0 ? _z : this.toolBar));
}
exports.handlerOptions = handlerOptions;
function calcOffset(width, height, offset) {
    if (offset === undefined)
        return [(innerWidth - width) / 2, (innerHeight - height) / 2];
    if (validator_1.checkArray(offset)) {
        if (offset.length !== 2 ||
            !validator_1.checkOfType(offset[0], "number") ||
            !validator_1.checkOfType(offset[1], "number"))
            exception_1.validateFail("\"" + [offset] + "\" \u4E0D\u662F\u6709\u6548\u7684 \"[number,number]\" \u7C7B\u578B");
        return [offset[0], offset[1]];
    }
    var croods = [0, 0];
    var offsetOptions = [
        "center",
        "top-center",
        "bottom-center",
        "left-top",
        "left-middle",
        "left-bottom",
        "right-top",
        "right-middle",
        "right-bottom"
    ];
    if (validator_1.checkInValueOptions.apply(void 0, __spreadArrays([offset], offsetOptions))) {
        switch (offset) {
            case "center":
                croods = [(innerWidth - width) / 2, (innerHeight - height) / 2];
                break;
            case "top-center":
                croods = [(innerWidth - width) / 2, 0];
                break;
            case "bottom-center":
                croods = [(innerWidth - width) / 2, innerHeight - height];
                break;
            case "left-top":
                croods = [0, 0];
                break;
            case "left-middle":
                croods = [0, (innerHeight - height) / 2];
                break;
            case "left-bottom":
                croods = [0, innerHeight - height];
                break;
            case "right-top":
                croods = [innerWidth - width, 0];
                break;
            case "right-middle":
                croods = [innerWidth - width, (innerHeight - height) / 2];
                break;
            case "right-bottom":
                croods = [innerWidth - width, innerHeight - height];
                break;
        }
        return croods;
    }
    exception_1.validateFail("\"" + offset + "\" \u4E0D\u662F\u6709\u6548\u7684 \"[number,number] \u6216 [" + offsetOptions + "]\" \u7C7B\u578B");
}


/***/ }),

/***/ "./src/app/core/decorator/property-decorator.ts":
/*!******************************************************!*\
  !*** ./src/app/core/decorator/property-decorator.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var exception_1 = __webpack_require__(/*! ../exception */ "./src/app/core/exception/index.ts");
var object_helper_1 = __webpack_require__(/*! ../helper/object-helper */ "./src/app/core/helper/object-helper.ts");
var validator_1 = __webpack_require__(/*! ../validator */ "./src/app/core/validator/index.ts");
function isPstNumber() {
    return generateDecorator(function (newValue) {
        if (!validator_1.checkPstNumber(newValue))
            exception_1.validateFail("\"" + newValue + "\" \u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684\u6B63\u6570\u503C\u7C7B\u578B");
        return newValue;
    });
}
exports.isPstNumber = isPstNumber;
function inValueOptions() {
    var valueOptions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        valueOptions[_i] = arguments[_i];
    }
    return generateDecorator(function (newValue) {
        if (!validator_1.checkInValueOptions.apply(void 0, __spreadArrays([newValue], valueOptions)))
            exception_1.validateFail("\"" + newValue + "\" \u4E0D\u5728 [" + valueOptions.toString() + "] \u503C\u8303\u56F4\u5185");
        return newValue;
    });
}
exports.inValueOptions = inValueOptions;
function isNoEmptyOrNull() {
    return generateDecorator(function (newValue) {
        if (!validator_1.checkNoEmptyOrNull(newValue))
            exception_1.validateFail("\"" + newValue + "\" \u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684\u975E\u7A7A\u5B57\u7B26\u4E32");
        return newValue;
    });
}
exports.isNoEmptyOrNull = isNoEmptyOrNull;
function isBoolean() {
    return generateDecorator(function (newValue) {
        if (!validator_1.checkOfType(newValue, "boolean"))
            exception_1.validateFail("\"" + newValue + "\" \u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684\u5E03\u5C14\u503C");
        return newValue;
    });
}
exports.isBoolean = isBoolean;
function isString() {
    return generateDecorator(function (newValue) {
        if (!validator_1.checkString(newValue))
            exception_1.validateFail("\"" + newValue + "\" \u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684\u5B57\u7B26\u4E32");
        return newValue;
    });
}
exports.isString = isString;
function isColor() {
    return generateDecorator(function (newValue) {
        if (!validator_1.checkColor(newValue))
            exception_1.validateFail("\"" + newValue + "\" \u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684CSS\u989C\u8272\u503C");
        return newValue;
    });
}
exports.isColor = isColor;
function isPstInt() {
    return generateDecorator(function (newValue) {
        if (!validator_1.checkPstInt(newValue))
            exception_1.validateFail("\"" + newValue + "\" \u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684\u6B63\u6574\u6570");
        return newValue;
    });
}
exports.isPstInt = isPstInt;
function min(threshold) {
    return generateDecorator(function (newValue) {
        if (!validator_1.checkMin(newValue, threshold))
            exception_1.validateFail("\"" + newValue + "\" \u5FC5\u987B\u662F\u6570\u503C\u7C7B\u578B\u5E76\u4E14\u503C\u4E0D\u80FD\u5C0F\u4E8E \"" + threshold + "\"");
        return newValue;
    });
}
exports.min = min;
function combine(jsonDecorator) {
    if (jsonDecorator === void 0) { jsonDecorator = {}; }
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    return generateDecorator(function (newValue, propertyKey, value) {
        newValue = checkCombine.apply(void 0, __spreadArrays([newValue, jsonDecorator], items));
        if (validator_1.checkJSONObject(newValue)) {
            newValue = object_helper_1.mergeJSONObject((value !== null && value !== void 0 ? value : {}), newValue);
        }
        return newValue;
    });
}
exports.combine = combine;
function checkCombine(newValue, jsonDecorator) {
    if (jsonDecorator === void 0) { jsonDecorator = {}; }
    var items = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        items[_i - 2] = arguments[_i];
    }
    var _a, _b, _c, _d;
    if (!validator_1.checkJSONObject(newValue) && (items.length > 0 && items.indexOf(newValue) === -1))
        exception_1.validateFail("\"" + newValue + "\" \u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684\u53C2\u6570\u503C");
    if (items.indexOf(newValue) > -1)
        return newValue;
    for (var key in newValue) {
        var keyValue = newValue[key];
        var decorator = jsonDecorator[key];
        if (!decorator)
            continue;
        if (validator_1.checkArray(decorator) && decorator.indexOf(keyValue) === -1) {
            exception_1.validateFail("\"" + keyValue + "\" \u4E0D\u5728 [" + decorator.toString() + "] \u503C\u8303\u56F4\u5185");
            break;
        }
        if (validator_1.checkOfType(decorator, "function") && !decorator(keyValue)) {
            exception_1.validateFail("\"" + keyValue + "\" \u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684\u53C2\u6570\u503C");
            break;
        }
        if (validator_1.checkRegExp(decorator) && !decorator.test(keyValue)) {
            exception_1.validateFail("\"" + keyValue + "\" \u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684\u53C2\u6570\u503C");
            break;
        }
        if (validator_1.checkJSONObject(decorator)) {
            var childDecorator = (_b = (_a = decorator) === null || _a === void 0 ? void 0 : _a.decorator, (_b !== null && _b !== void 0 ? _b : {}));
            var childItems = (_d = (_c = decorator) === null || _c === void 0 ? void 0 : _c.options, (_d !== null && _d !== void 0 ? _d : []));
            keyValue = checkCombine.apply(void 0, __spreadArrays([keyValue, childDecorator], childItems));
        }
    }
    return newValue;
}
function generateDecorator(propertySetter) {
    return function (target, propertyKey) {
        var value = target[propertyKey];
        var descriptor = Object.getOwnPropertyDescriptor(target, propertyKey);
        Object.defineProperty(target, propertyKey, {
            configurable: true,
            enumerable: true,
            get: function () { return value; },
            set: function (newValue) {
                if (descriptor && descriptor.set) {
                    descriptor.set(newValue);
                }
                value = propertySetter(newValue, propertyKey, value);
            }
        });
    };
}


/***/ }),

/***/ "./src/app/core/event-bus/index.ts":
/*!*****************************************!*\
  !*** ./src/app/core/event-bus/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var validator_1 = __webpack_require__(/*! ../validator */ "./src/app/core/validator/index.ts");
var EventBus = (function () {
    function EventBus() {
        this.messageQueues = {};
    }
    EventBus.prototype.on = function (eventKey, eventHandler) {
        if (this.messageQueues.hasOwnProperty(eventKey)) {
            var eventValue = this.messageQueues[eventKey];
            if (validator_1.checkOfType(eventValue, "function")) {
                this.messageQueues[eventKey] = [eventValue, eventHandler];
            }
            else if (validator_1.checkArray(eventValue)) {
                this.messageQueues[eventKey] = __spreadArrays(eventValue, [eventHandler]);
            }
        }
        else {
            this.messageQueues[eventKey] = eventHandler;
        }
    };
    EventBus.prototype.one = function (eventKey, eventHandler) {
        this.messageQueues[eventKey] = eventHandler;
    };
    EventBus.prototype.emit = function (eventKey, message) {
        if (!this.messageQueues.hasOwnProperty(eventKey))
            return;
        var eventValue = this.messageQueues[eventKey];
        if (validator_1.checkOfType(eventValue, "function")) {
            setTimeout(function () {
                eventValue(message);
            }, 0);
        }
        else if (validator_1.checkArray(eventValue)) {
            eventValue.map(function (handler) {
                setTimeout(function () {
                    handler(message);
                }, 0);
            });
        }
    };
    EventBus.prototype.off = function (eventKey) {
        if (!this.messageQueues.hasOwnProperty(eventKey))
            return;
        delete this.messageQueues[eventKey];
    };
    EventBus.getInstance = function () {
        if (!this.instance) {
            this.instance = new EventBus();
        }
        return this.instance;
    };
    return EventBus;
}());
exports.default = EventBus;


/***/ }),

/***/ "./src/app/core/exception/index.ts":
/*!*****************************************!*\
  !*** ./src/app/core/exception/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function appError(message) {
    throw new Error("\n\u7C7B\u578B\uFF1A\u7A0B\u5E8F\u5F02\u5E38\n\u5F02\u5E38\u4FE1\u606F\uFF1A" + message + "\n\u5806\u6808\u4FE1\u606F\uFF1A");
}
exports.appError = appError;
function validateFail(message) {
    throw new Error("\n\u7C7B\u578B\uFF1A\u9A8C\u8BC1\u9519\u8BEF\n\u9519\u8BEF\u4FE1\u606F\uFF1A" + message + "\n\u5806\u6808\u4FE1\u606F\uFF1A");
}
exports.validateFail = validateFail;


/***/ }),

/***/ "./src/app/core/helper/element-helper.ts":
/*!***********************************************!*\
  !*** ./src/app/core/helper/element-helper.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var const_1 = __webpack_require__(/*! ../../entry/const */ "./src/app/entry/const.ts");
var validator_1 = __webpack_require__(/*! ../validator */ "./src/app/core/validator/index.ts");
function addCSSStyles(element, cssStyles) {
    var _a;
    if (!element)
        return;
    for (var cssProp in cssStyles) {
        element.style[cssProp] = (_a = cssStyles[cssProp], (_a !== null && _a !== void 0 ? _a : null));
    }
}
exports.addCSSStyles = addCSSStyles;
function addCSSClasses(element) {
    var classes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        classes[_i - 1] = arguments[_i];
    }
    if (!element)
        return null;
    return updateCSSClasses.apply(void 0, __spreadArrays([element, function (currentClasses, index, itemClass) {
            if (!~index) {
                currentClasses.push(itemClass);
            }
        }, const_1.PREFIX], classes));
}
exports.addCSSClasses = addCSSClasses;
function removeCSSClasses(element) {
    var classes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        classes[_i - 1] = arguments[_i];
    }
    if (!element)
        return null;
    return updateCSSClasses.apply(void 0, __spreadArrays([element, function (currentClasses, index) {
            if (~index) {
                currentClasses.splice(index, 1);
            }
        }, const_1.PREFIX], classes));
}
exports.removeCSSClasses = removeCSSClasses;
function hasCSSClass(element, className) {
    if (!element)
        return false;
    var currentClasses = element.className.split(/\s+/g);
    var cls = className.indexOf("!") === 0 ? className.substr(1) : const_1.PREFIX + className;
    var index = currentClasses.indexOf(cls);
    return !!~index;
}
exports.hasCSSClass = hasCSSClass;
function updateCSSClasses(element, handler, prefix) {
    if (prefix === void 0) { prefix = const_1.PREFIX; }
    var classes = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        classes[_i - 3] = arguments[_i];
    }
    if (!element)
        return null;
    var currentClasses = element.className.split(/\s+/g);
    classes.forEach(function (item) {
        if (item) {
            var cls = item.indexOf("!") === 0 ? item.substr(1) : prefix + item;
            var index = currentClasses.indexOf(cls);
            handler(currentClasses, index, cls);
        }
    });
    element.className = currentClasses.join(" ").trim();
    return element;
}
function createDivElement(id) {
    var element = document.createElement("div");
    if (validator_1.checkOfType(id, "string")) {
        element.id = id;
    }
    return element;
}
exports.createDivElement = createDivElement;
function createSvgElement(name) {
    var svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    var useElement = document.createElementNS("http://www.w3.org/2000/svg", "use");
    useElement.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#" + name);
    svgElement.appendChild(useElement);
    return svgElement;
}
exports.createSvgElement = createSvgElement;


/***/ }),

/***/ "./src/app/core/helper/object-helper.ts":
/*!**********************************************!*\
  !*** ./src/app/core/helper/object-helper.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var validator_1 = __webpack_require__(/*! ../validator */ "./src/app/core/validator/index.ts");
function cloneJSONObject(source) {
    var newObject = {};
    for (var _i = 0, _a = Object.keys(source); _i < _a.length; _i++) {
        var key = _a[_i];
        newObject[key] = validator_1.checkJSONObject(source[key]) ? cloneJSONObject(source[key]) : source[key];
    }
    return newObject;
}
exports.cloneJSONObject = cloneJSONObject;
function mergeJSONObject(source, dest) {
    var newObject = cloneJSONObject(source);
    for (var _i = 0, _a = Object.keys(dest); _i < _a.length; _i++) {
        var key = _a[_i];
        if (newObject[key] === undefined || !validator_1.checkJSONObject(dest[key])) {
            newObject[key] = dest[key];
            continue;
        }
        newObject[key] = mergeJSONObject(newObject[key], dest[key]);
    }
    return newObject;
}
exports.mergeJSONObject = mergeJSONObject;


/***/ }),

/***/ "./src/app/core/validator/index.ts":
/*!*****************************************!*\
  !*** ./src/app/core/validator/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function checkOfType(data) {
    var typeNames = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        typeNames[_i - 1] = arguments[_i];
    }
    return typeNames.indexOf(typeof data) > -1;
}
exports.checkOfType = checkOfType;
function checkString(data) {
    return checkOfType(data, "string");
}
exports.checkString = checkString;
function checkInt(data) {
    return checkOfType(data, "number") && (/^\-?[0-9]+$/.test(data));
}
exports.checkInt = checkInt;
function checkPstInt(data) {
    return checkInt(data) && data >= 0;
}
exports.checkPstInt = checkPstInt;
function checkPstNumber(data) {
    return checkOfType(data, "number") && data >= 0;
}
exports.checkPstNumber = checkPstNumber;
function checkJSONObject(data) {
    return checkOfType(data, "object") &&
        Object.prototype.toString.call(data).toLowerCase() === "[object object]" &&
        !checkArray(data);
}
exports.checkJSONObject = checkJSONObject;
function checkArray(data) {
    return Array.isArray(data);
}
exports.checkArray = checkArray;
function checkArrayEachSame(data, checkItem) {
    if (!Array.isArray(data))
        return false;
    if (data.length === 0)
        return true;
    var isSameArray = true;
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var item = data_1[_i];
        if (!checkItem(item)) {
            isSameArray = false;
            break;
        }
    }
    return isSameArray;
}
exports.checkArrayEachSame = checkArrayEachSame;
function checkContains(data, character) {
    return checkOfType(data, "string") && data.indexOf(character) > -1;
}
exports.checkContains = checkContains;
function checkInValueOptions(data) {
    var valueOptions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        valueOptions[_i - 1] = arguments[_i];
    }
    return checkOfType(data, "boolean", "number", "string", "undefined", "object") && valueOptions.indexOf(data) > -1;
}
exports.checkInValueOptions = checkInValueOptions;
function checkMinLength(data, threshold) {
    return checkOfType(data, "string") && data.length >= threshold;
}
exports.checkMinLength = checkMinLength;
function checkMaxLength(data, threshold) {
    return checkOfType(data, "string") && data.length <= threshold;
}
exports.checkMaxLength = checkMaxLength;
function checkLength(data, minThreshold, maxThreshold) {
    return checkMinLength(data, minThreshold) && checkMaxLength(data, maxThreshold);
}
exports.checkLength = checkLength;
function checkMin(data, threshold) {
    return checkOfType(data, "number") && data >= threshold;
}
exports.checkMin = checkMin;
function checkMax(data, threshold) {
    return checkOfType(data, "number") && data <= threshold;
}
exports.checkMax = checkMax;
function checkRange(data, minThreshold, maxThreshold) {
    return checkMin(data, minThreshold) && checkMax(data, maxThreshold);
}
exports.checkRange = checkRange;
function checkEmptyOrNull(data) {
    return data === null || (checkOfType(data, "string") && data.length === 0);
}
exports.checkEmptyOrNull = checkEmptyOrNull;
function checkNoEmptyOrNull(data) {
    return checkOfType(data, "string") && data.length > 0;
}
exports.checkNoEmptyOrNull = checkNoEmptyOrNull;
function checkRegExp(data) {
    return data instanceof RegExp;
}
exports.checkRegExp = checkRegExp;
function checkColor(data) {
    var binaryReg = /^#([0-9a-f]{6}|[0-9a-f]{3})$/i;
    var rgbRex = /^rgb\(([0-9]|[0-9][0-9]|25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9])\,([0-9]|[0-9][0-9]|25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9])\,([0-9]|[0-9][0-9]|25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9])\)$/i;
    var rgbaRex = /^rgba\(([0-9]|[0-9][0-9]|25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9])\,([0-9]|[0-9][0-9]|25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9])\,([0-9]|[0-9][0-9]|25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9])\,(1|1.0|0.[0-9])\)$/i;
    return binaryReg.test(data) || rgbRex.test(data) || rgbaRex.test(data);
}
exports.checkColor = checkColor;


/***/ }),

/***/ "./src/app/entry/const.ts":
/*!********************************!*\
  !*** ./src/app/entry/const.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.VERSION = "3.0.0";
exports.PREFIX = "layx-";
exports.START_ZINDEX = 10000000;
exports.DEFAULT_WINDOW_WIDTH = 800;
exports.DEFAULT_WINDOW_HEIGHT = 600;
exports.DEFAULT_WINDOW_BACKGROUND_COLOR = "#ffffff";
exports.DEFAULT_TOOLBAR_BACKGROUND_COLOR = "#ffffff";
exports.DEFAULT_TOOLBAR_HEIGHT = 30;
exports.DEFAULT_TITLEBAR_LABEL = "未命名";
exports.DEFAULT_TITLEBAR_COLOR = "#000000";
exports.DEFAULT_TITLEBAR_ALIGN = "left";
exports.DEFAULT_TITLEBAR_FONTSIZE = 14;
var SupportLanguage;
(function (SupportLanguage) {
    SupportLanguage["ZH_CN"] = "ZH_CN";
    SupportLanguage["EN_US"] = "EN_US";
})(SupportLanguage = exports.SupportLanguage || (exports.SupportLanguage = {}));


/***/ }),

/***/ "./src/app/entry/index.ts":
/*!********************************!*\
  !*** ./src/app/entry/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ../asset/icon */ "./src/app/asset/icon/index.ts");
__webpack_require__(/*! ../asset/style */ "./src/app/asset/style/index.ts");
var const_1 = __webpack_require__(/*! ../component/ui-icon/const */ "./src/app/component/ui-icon/const.ts");
var ui_window_1 = __webpack_require__(/*! ../component/ui-window */ "./src/app/component/ui-window/index.ts");
var property_decorator_1 = __webpack_require__(/*! ../core/decorator/property-decorator */ "./src/app/core/decorator/property-decorator.ts");
var event_bus_1 = __webpack_require__(/*! ../core/event-bus */ "./src/app/core/event-bus/index.ts");
var validator_1 = __webpack_require__(/*! ../core/validator */ "./src/app/core/validator/index.ts");
var const_2 = __webpack_require__(/*! ./const */ "./src/app/entry/const.ts");
var partial_1 = __webpack_require__(/*! ./partial */ "./src/app/entry/partial.ts");
var Entry = (function () {
    function Entry(options) {
        this.handlerOptions = partial_1.handlerOptions;
        this.version = const_2.VERSION;
        this.startZIndex = const_2.START_ZINDEX;
        this.prefix = const_2.PREFIX;
        this.lang = "ZH_CN";
        this.window = {
            width: const_2.DEFAULT_WINDOW_WIDTH,
            height: const_2.DEFAULT_WINDOW_HEIGHT,
            backgroundColor: const_2.DEFAULT_WINDOW_BACKGROUND_COLOR,
            toolBar: {
                height: const_2.DEFAULT_TOOLBAR_HEIGHT,
                backgroundColor: const_2.DEFAULT_TOOLBAR_BACKGROUND_COLOR,
                titleBar: {
                    label: const_2.DEFAULT_TITLEBAR_LABEL,
                    color: const_2.DEFAULT_TITLEBAR_COLOR,
                    align: const_2.DEFAULT_TITLEBAR_ALIGN,
                    fontSize: const_2.DEFAULT_TITLEBAR_FONTSIZE
                },
                icon: {
                    name: const_1.DEFAULT_ICON,
                    size: const_1.DEFAULT_ICON_SIZE,
                    color: const_1.DEFAULT_ICON_COLOR
                }
            }
        };
        this._zIndex = this.startZIndex;
        this.handlerOptions(options);
    }
    Object.defineProperty(Entry.prototype, "zIndex", {
        get: function () {
            return this._zIndex = this._zIndex + 2;
        },
        enumerable: true,
        configurable: true
    });
    Entry.prototype.on = function (queues) {
        if (queues === void 0) { queues = {}; }
        for (var eventKey in queues) {
            var handler = queues[eventKey];
            if (validator_1.checkOfType(handler, "function")) {
                event_bus_1.default.getInstance().on(eventKey, handler);
            }
        }
    };
    Entry.prototype.open = function (options) {
        var uiWindow = new ui_window_1.default(options);
        var uiWindowElement = uiWindow.present();
        var fragment = document.createDocumentFragment();
        fragment.appendChild(uiWindowElement);
        document.body.appendChild(uiWindowElement);
    };
    Entry.getInstance = function (options) {
        if (options === void 0) { options = {}; }
        if (!this.instance) {
            this.instance = new Entry(options);
        }
        else {
            this.instance.handlerOptions(options);
        }
        return this.instance;
    };
    __decorate([
        property_decorator_1.isPstInt(),
        property_decorator_1.min(1000)
    ], Entry.prototype, "startZIndex", void 0);
    __decorate([
        property_decorator_1.isNoEmptyOrNull()
    ], Entry.prototype, "prefix", void 0);
    __decorate([
        property_decorator_1.inValueOptions("ZH_CN", "EN_US")
    ], Entry.prototype, "lang", void 0);
    __decorate([
        property_decorator_1.combine({
            width: validator_1.checkPstNumber,
            height: validator_1.checkPstNumber,
            backgroundColor: validator_1.checkColor,
            toolBar: {
                decorator: {
                    height: validator_1.checkPstNumber,
                    backgroundColor: validator_1.checkColor,
                    titleBar: {
                        decorator: {
                            label: validator_1.checkString,
                            color: validator_1.checkColor,
                            align: ["left", "center", "right"],
                            fontSize: validator_1.checkPstInt
                        },
                        options: [false]
                    },
                    icon: {
                        decorator: {
                            name: validator_1.checkNoEmptyOrNull,
                            size: validator_1.checkPstInt,
                            color: validator_1.checkColor
                        },
                        options: [false]
                    }
                },
                options: [false]
            }
        })
    ], Entry.prototype, "window", void 0);
    return Entry;
}());
exports.default = Entry;


/***/ }),

/***/ "./src/app/entry/partial.ts":
/*!**********************************!*\
  !*** ./src/app/entry/partial.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function handlerOptions(options) {
    var _a, _b, _c, _d, _e, _f;
    this.lang = (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.lang, (_b !== null && _b !== void 0 ? _b : "ZH_CN"));
    this.startZIndex = (_d = (_c = options) === null || _c === void 0 ? void 0 : _c.startZIndex, (_d !== null && _d !== void 0 ? _d : this.startZIndex));
    this.window = (_f = (_e = options) === null || _e === void 0 ? void 0 : _e.window, (_f !== null && _f !== void 0 ? _f : this.window));
}
exports.handlerOptions = handlerOptions;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var entry_1 = __webpack_require__(/*! ./app/entry */ "./src/app/entry/index.ts");
function overt() {
    var entry = entry_1.default.getInstance();
    var entryOvert = function (options) {
        entry_1.default.getInstance(options);
    };
    entryOvert.on = entry.on;
    entryOvert.version = entry.version;
    entryOvert.open = entry.open;
    return entryOvert;
}
exports.default = overt();


/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYXl4L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9sYXl4L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xheXgvLi9ub2RlX21vZHVsZXMvc3ZnLWJha2VyLXJ1bnRpbWUvYnJvd3Nlci1zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vbGF5eC8uL25vZGVfbW9kdWxlcy9zdmctc3ByaXRlLWxvYWRlci9ydW50aW1lL2Jyb3dzZXItc3ByaXRlLmJ1aWxkLmpzIiwid2VicGFjazovL2xheXgvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL2xheXgvLi9zcmMvYXBwL2Fzc2V0L2ljb24vaWNvbi5zdmciLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvYXNzZXQvaWNvbi9pbmRleC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9hc3NldC9zdHlsZS9hbmltYXRlLmNzcz85YjNmIiwid2VicGFjazovL2xheXgvLi9zcmMvYXBwL2Fzc2V0L3N0eWxlL2NvbW1vbi5jc3M/Mzk0NiIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9hc3NldC9zdHlsZS9pY29uLmNzcz84MWU2Iiwid2VicGFjazovL2xheXgvLi9zcmMvYXBwL2Fzc2V0L3N0eWxlL2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9zcmMvYXBwL2Fzc2V0L3N0eWxlL3Rvb2wtYmFyLmNzcz9lOWRiIiwid2VicGFjazovL2xheXgvLi9zcmMvYXBwL2Fzc2V0L3N0eWxlL3dpbmRvdy5jc3M/MWE2ZSIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9jb21wb25lbnQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvY29tcG9uZW50L3VpLWljb24vY29uc3QudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvY29tcG9uZW50L3VpLWljb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvY29tcG9uZW50L3VpLWljb24vcGFydGlhbC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9jb21wb25lbnQvdWktdG9vbC1iYXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvY29tcG9uZW50L3VpLXRvb2wtYmFyL3BhcnRpYWwudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvY29tcG9uZW50L3VpLXdpbmRvdy9jb25zdC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9jb21wb25lbnQvdWktd2luZG93L2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9zcmMvYXBwL2NvbXBvbmVudC91aS13aW5kb3cvcGFydGlhbC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9jb3JlL2RlY29yYXRvci9wcm9wZXJ0eS1kZWNvcmF0b3IudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvY29yZS9ldmVudC1idXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvY29yZS9leGNlcHRpb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvY29yZS9oZWxwZXIvZWxlbWVudC1oZWxwZXIudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvY29yZS9oZWxwZXIvb2JqZWN0LWhlbHBlci50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9jb3JlL3ZhbGlkYXRvci9pbmRleC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9lbnRyeS9jb25zdC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9lbnRyeS9pbmRleC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9lbnRyeS9wYXJ0aWFsLnRzIiwid2VicGFjazovL2xheXgvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNW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bnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibGF5eFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJsYXl4XCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG5cdHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcblx0dHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcblx0KGdsb2JhbC5Ccm93c2VyU3ByaXRlU3ltYm9sID0gZmFjdG9yeSgpKTtcbn0odGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG52YXIgU3ByaXRlU3ltYm9sID0gZnVuY3Rpb24gU3ByaXRlU3ltYm9sKHJlZikge1xuICB2YXIgaWQgPSByZWYuaWQ7XG4gIHZhciB2aWV3Qm94ID0gcmVmLnZpZXdCb3g7XG4gIHZhciBjb250ZW50ID0gcmVmLmNvbnRlbnQ7XG5cbiAgdGhpcy5pZCA9IGlkO1xuICB0aGlzLnZpZXdCb3ggPSB2aWV3Qm94O1xuICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xufTtcblxuLyoqXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblNwcml0ZVN5bWJvbC5wcm90b3R5cGUuc3RyaW5naWZ5ID0gZnVuY3Rpb24gc3RyaW5naWZ5ICgpIHtcbiAgcmV0dXJuIHRoaXMuY29udGVudDtcbn07XG5cbi8qKlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5TcHJpdGVTeW1ib2wucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcgKCkge1xuICByZXR1cm4gdGhpcy5zdHJpbmdpZnkoKTtcbn07XG5cblNwcml0ZVN5bWJvbC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3kgKCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIFsnaWQnLCAndmlld0JveCcsICdjb250ZW50J10uZm9yRWFjaChmdW5jdGlvbiAocHJvcCkgeyByZXR1cm4gZGVsZXRlIHRoaXMkMVtwcm9wXTsgfSk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50XG4gKiBAcmV0dXJuIHtFbGVtZW50fVxuICovXG52YXIgcGFyc2UgPSBmdW5jdGlvbiAoY29udGVudCkge1xuICB2YXIgaGFzSW1wb3J0Tm9kZSA9ICEhZG9jdW1lbnQuaW1wb3J0Tm9kZTtcbiAgdmFyIGRvYyA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoY29udGVudCwgJ2ltYWdlL3N2Zyt4bWwnKS5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgLyoqXG4gICAqIEZpeCBmb3IgYnJvd3NlciB3aGljaCBhcmUgdGhyb3dpbmcgV3JvbmdEb2N1bWVudEVycm9yXG4gICAqIGlmIHlvdSBpbnNlcnQgYW4gZWxlbWVudCB3aGljaCBpcyBub3QgcGFydCBvZiB0aGUgZG9jdW1lbnRcbiAgICogQHNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83OTg2NTE5LzQ2MjQ0MDNcbiAgICovXG4gIGlmIChoYXNJbXBvcnROb2RlKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmltcG9ydE5vZGUoZG9jLCB0cnVlKTtcbiAgfVxuXG4gIHJldHVybiBkb2M7XG59O1xuXG52YXIgY29tbW9uanNHbG9iYWwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHt9O1xuXG5cblxuXG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZuLCBtb2R1bGUpIHtcblx0cmV0dXJuIG1vZHVsZSA9IHsgZXhwb3J0czoge30gfSwgZm4obW9kdWxlLCBtb2R1bGUuZXhwb3J0cyksIG1vZHVsZS5leHBvcnRzO1xufVxuXG52YXIgZGVlcG1lcmdlID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG4gICAgaWYgKHR5cGVvZiB1bmRlZmluZWQgPT09ICdmdW5jdGlvbicgJiYgdW5kZWZpbmVkLmFtZCkge1xuICAgICAgICB1bmRlZmluZWQoZmFjdG9yeSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gICAgfVxufShjb21tb25qc0dsb2JhbCwgZnVuY3Rpb24gKCkge1xuXG5mdW5jdGlvbiBpc01lcmdlYWJsZU9iamVjdCh2YWwpIHtcbiAgICB2YXIgbm9uTnVsbE9iamVjdCA9IHZhbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0JztcblxuICAgIHJldHVybiBub25OdWxsT2JqZWN0XG4gICAgICAgICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWwpICE9PSAnW29iamVjdCBSZWdFeHBdJ1xuICAgICAgICAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKSAhPT0gJ1tvYmplY3QgRGF0ZV0nXG59XG5cbmZ1bmN0aW9uIGVtcHR5VGFyZ2V0KHZhbCkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbCkgPyBbXSA6IHt9XG59XG5cbmZ1bmN0aW9uIGNsb25lSWZOZWNlc3NhcnkodmFsdWUsIG9wdGlvbnNBcmd1bWVudCkge1xuICAgIHZhciBjbG9uZSA9IG9wdGlvbnNBcmd1bWVudCAmJiBvcHRpb25zQXJndW1lbnQuY2xvbmUgPT09IHRydWU7XG4gICAgcmV0dXJuIChjbG9uZSAmJiBpc01lcmdlYWJsZU9iamVjdCh2YWx1ZSkpID8gZGVlcG1lcmdlKGVtcHR5VGFyZ2V0KHZhbHVlKSwgdmFsdWUsIG9wdGlvbnNBcmd1bWVudCkgOiB2YWx1ZVxufVxuXG5mdW5jdGlvbiBkZWZhdWx0QXJyYXlNZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KSB7XG4gICAgdmFyIGRlc3RpbmF0aW9uID0gdGFyZ2V0LnNsaWNlKCk7XG4gICAgc291cmNlLmZvckVhY2goZnVuY3Rpb24oZSwgaSkge1xuICAgICAgICBpZiAodHlwZW9mIGRlc3RpbmF0aW9uW2ldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgZGVzdGluYXRpb25baV0gPSBjbG9uZUlmTmVjZXNzYXJ5KGUsIG9wdGlvbnNBcmd1bWVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNNZXJnZWFibGVPYmplY3QoZSkpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2ldID0gZGVlcG1lcmdlKHRhcmdldFtpXSwgZSwgb3B0aW9uc0FyZ3VtZW50KTtcbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQuaW5kZXhPZihlKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uLnB1c2goY2xvbmVJZk5lY2Vzc2FyeShlLCBvcHRpb25zQXJndW1lbnQpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBkZXN0aW5hdGlvblxufVxuXG5mdW5jdGlvbiBtZXJnZU9iamVjdCh0YXJnZXQsIHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KSB7XG4gICAgdmFyIGRlc3RpbmF0aW9uID0ge307XG4gICAgaWYgKGlzTWVyZ2VhYmxlT2JqZWN0KHRhcmdldCkpIHtcbiAgICAgICAgT2JqZWN0LmtleXModGFyZ2V0KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2tleV0gPSBjbG9uZUlmTmVjZXNzYXJ5KHRhcmdldFtrZXldLCBvcHRpb25zQXJndW1lbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgaWYgKCFpc01lcmdlYWJsZU9iamVjdChzb3VyY2Vba2V5XSkgfHwgIXRhcmdldFtrZXldKSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltrZXldID0gY2xvbmVJZk5lY2Vzc2FyeShzb3VyY2Vba2V5XSwgb3B0aW9uc0FyZ3VtZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2tleV0gPSBkZWVwbWVyZ2UodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldLCBvcHRpb25zQXJndW1lbnQpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGRlc3RpbmF0aW9uXG59XG5cbmZ1bmN0aW9uIGRlZXBtZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KSB7XG4gICAgdmFyIGFycmF5ID0gQXJyYXkuaXNBcnJheShzb3VyY2UpO1xuICAgIHZhciBvcHRpb25zID0gb3B0aW9uc0FyZ3VtZW50IHx8IHsgYXJyYXlNZXJnZTogZGVmYXVsdEFycmF5TWVyZ2UgfTtcbiAgICB2YXIgYXJyYXlNZXJnZSA9IG9wdGlvbnMuYXJyYXlNZXJnZSB8fCBkZWZhdWx0QXJyYXlNZXJnZTtcblxuICAgIGlmIChhcnJheSkge1xuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh0YXJnZXQpID8gYXJyYXlNZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KSA6IGNsb25lSWZOZWNlc3Nhcnkoc291cmNlLCBvcHRpb25zQXJndW1lbnQpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG1lcmdlT2JqZWN0KHRhcmdldCwgc291cmNlLCBvcHRpb25zQXJndW1lbnQpXG4gICAgfVxufVxuXG5kZWVwbWVyZ2UuYWxsID0gZnVuY3Rpb24gZGVlcG1lcmdlQWxsKGFycmF5LCBvcHRpb25zQXJndW1lbnQpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpIHx8IGFycmF5Lmxlbmd0aCA8IDIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmaXJzdCBhcmd1bWVudCBzaG91bGQgYmUgYW4gYXJyYXkgd2l0aCBhdCBsZWFzdCB0d28gZWxlbWVudHMnKVxuICAgIH1cblxuICAgIC8vIHdlIGFyZSBzdXJlIHRoZXJlIGFyZSBhdCBsZWFzdCAyIHZhbHVlcywgc28gaXQgaXMgc2FmZSB0byBoYXZlIG5vIGluaXRpYWwgdmFsdWVcbiAgICByZXR1cm4gYXJyYXkucmVkdWNlKGZ1bmN0aW9uKHByZXYsIG5leHQpIHtcbiAgICAgICAgcmV0dXJuIGRlZXBtZXJnZShwcmV2LCBuZXh0LCBvcHRpb25zQXJndW1lbnQpXG4gICAgfSlcbn07XG5cbnJldHVybiBkZWVwbWVyZ2VcblxufSkpO1xufSk7XG5cbnZhciBuYW1lc3BhY2VzXzEgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlLCBleHBvcnRzKSB7XG52YXIgbmFtZXNwYWNlcyA9IHtcbiAgc3ZnOiB7XG4gICAgbmFtZTogJ3htbG5zJyxcbiAgICB1cmk6ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgfSxcbiAgeGxpbms6IHtcbiAgICBuYW1lOiAneG1sbnM6eGxpbmsnLFxuICAgIHVyaTogJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnXG4gIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG5hbWVzcGFjZXM7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbn0pO1xuXG4vKipcbiAqIEBwYXJhbSB7T2JqZWN0fSBhdHRyc1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG52YXIgb2JqZWN0VG9BdHRyc1N0cmluZyA9IGZ1bmN0aW9uIChhdHRycykge1xuICByZXR1cm4gT2JqZWN0LmtleXMoYXR0cnMpLm1hcChmdW5jdGlvbiAoYXR0cikge1xuICAgIHZhciB2YWx1ZSA9IGF0dHJzW2F0dHJdLnRvU3RyaW5nKCkucmVwbGFjZSgvXCIvZywgJyZxdW90OycpO1xuICAgIHJldHVybiAoYXR0ciArIFwiPVxcXCJcIiArIHZhbHVlICsgXCJcXFwiXCIpO1xuICB9KS5qb2luKCcgJyk7XG59O1xuXG52YXIgc3ZnID0gbmFtZXNwYWNlc18xLnN2ZztcbnZhciB4bGluayA9IG5hbWVzcGFjZXNfMS54bGluaztcblxudmFyIGRlZmF1bHRBdHRycyA9IHt9O1xuZGVmYXVsdEF0dHJzW3N2Zy5uYW1lXSA9IHN2Zy51cmk7XG5kZWZhdWx0QXR0cnNbeGxpbmsubmFtZV0gPSB4bGluay51cmk7XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb250ZW50XVxuICogQHBhcmFtIHtPYmplY3R9IFthdHRyaWJ1dGVzXVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG52YXIgd3JhcEluU3ZnU3RyaW5nID0gZnVuY3Rpb24gKGNvbnRlbnQsIGF0dHJpYnV0ZXMpIHtcbiAgaWYgKCBjb250ZW50ID09PSB2b2lkIDAgKSBjb250ZW50ID0gJyc7XG5cbiAgdmFyIGF0dHJzID0gZGVlcG1lcmdlKGRlZmF1bHRBdHRycywgYXR0cmlidXRlcyB8fCB7fSk7XG4gIHZhciBhdHRyc1JlbmRlcmVkID0gb2JqZWN0VG9BdHRyc1N0cmluZyhhdHRycyk7XG4gIHJldHVybiAoXCI8c3ZnIFwiICsgYXR0cnNSZW5kZXJlZCArIFwiPlwiICsgY29udGVudCArIFwiPC9zdmc+XCIpO1xufTtcblxudmFyIEJyb3dzZXJTcHJpdGVTeW1ib2wgPSAoZnVuY3Rpb24gKFNwcml0ZVN5bWJvbCQkMSkge1xuICBmdW5jdGlvbiBCcm93c2VyU3ByaXRlU3ltYm9sICgpIHtcbiAgICBTcHJpdGVTeW1ib2wkJDEuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIGlmICggU3ByaXRlU3ltYm9sJCQxICkgQnJvd3NlclNwcml0ZVN5bWJvbC5fX3Byb3RvX18gPSBTcHJpdGVTeW1ib2wkJDE7XG4gIEJyb3dzZXJTcHJpdGVTeW1ib2wucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggU3ByaXRlU3ltYm9sJCQxICYmIFNwcml0ZVN5bWJvbCQkMS5wcm90b3R5cGUgKTtcbiAgQnJvd3NlclNwcml0ZVN5bWJvbC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBCcm93c2VyU3ByaXRlU3ltYm9sO1xuXG4gIHZhciBwcm90b3R5cGVBY2Nlc3NvcnMgPSB7IGlzTW91bnRlZDoge30gfTtcblxuICBwcm90b3R5cGVBY2Nlc3NvcnMuaXNNb3VudGVkLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gISF0aGlzLm5vZGU7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gbm9kZVxuICAgKiBAcmV0dXJuIHtCcm93c2VyU3ByaXRlU3ltYm9sfVxuICAgKi9cbiAgQnJvd3NlclNwcml0ZVN5bWJvbC5jcmVhdGVGcm9tRXhpc3RpbmdOb2RlID0gZnVuY3Rpb24gY3JlYXRlRnJvbUV4aXN0aW5nTm9kZSAobm9kZSkge1xuICAgIHJldHVybiBuZXcgQnJvd3NlclNwcml0ZVN5bWJvbCh7XG4gICAgICBpZDogbm9kZS5nZXRBdHRyaWJ1dGUoJ2lkJyksXG4gICAgICB2aWV3Qm94OiBub2RlLmdldEF0dHJpYnV0ZSgndmlld0JveCcpLFxuICAgICAgY29udGVudDogbm9kZS5vdXRlckhUTUxcbiAgICB9KTtcbiAgfTtcblxuICBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSAoKSB7XG4gICAgaWYgKHRoaXMuaXNNb3VudGVkKSB7XG4gICAgICB0aGlzLnVubW91bnQoKTtcbiAgICB9XG4gICAgU3ByaXRlU3ltYm9sJCQxLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RWxlbWVudHxzdHJpbmd9IHRhcmdldFxuICAgKiBAcmV0dXJuIHtFbGVtZW50fVxuICAgKi9cbiAgQnJvd3NlclNwcml0ZVN5bWJvbC5wcm90b3R5cGUubW91bnQgPSBmdW5jdGlvbiBtb3VudCAodGFyZ2V0KSB7XG4gICAgaWYgKHRoaXMuaXNNb3VudGVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5ub2RlO1xuICAgIH1cblxuICAgIHZhciBtb3VudFRhcmdldCA9IHR5cGVvZiB0YXJnZXQgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpIDogdGFyZ2V0O1xuICAgIHZhciBub2RlID0gdGhpcy5yZW5kZXIoKTtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuXG4gICAgbW91bnRUYXJnZXQuYXBwZW5kQ2hpbGQobm9kZSk7XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfTtcblxuICAvKipcbiAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICovXG4gIEJyb3dzZXJTcHJpdGVTeW1ib2wucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlciAoKSB7XG4gICAgdmFyIGNvbnRlbnQgPSB0aGlzLnN0cmluZ2lmeSgpO1xuICAgIHJldHVybiBwYXJzZSh3cmFwSW5TdmdTdHJpbmcoY29udGVudCkpLmNoaWxkTm9kZXNbMF07XG4gIH07XG5cbiAgQnJvd3NlclNwcml0ZVN5bWJvbC5wcm90b3R5cGUudW5tb3VudCA9IGZ1bmN0aW9uIHVubW91bnQgKCkge1xuICAgIHRoaXMubm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMubm9kZSk7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoIEJyb3dzZXJTcHJpdGVTeW1ib2wucHJvdG90eXBlLCBwcm90b3R5cGVBY2Nlc3NvcnMgKTtcblxuICByZXR1cm4gQnJvd3NlclNwcml0ZVN5bWJvbDtcbn0oU3ByaXRlU3ltYm9sKSk7XG5cbnJldHVybiBCcm93c2VyU3ByaXRlU3ltYm9sO1xuXG59KSkpO1xuIiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcblx0dHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuXHR0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuXHQoZ2xvYmFsLkJyb3dzZXJTcHJpdGUgPSBmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbnZhciBjb21tb25qc0dsb2JhbCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDoge307XG5cblxuXG5cblxuZnVuY3Rpb24gY3JlYXRlQ29tbW9uanNNb2R1bGUoZm4sIG1vZHVsZSkge1xuXHRyZXR1cm4gbW9kdWxlID0geyBleHBvcnRzOiB7fSB9LCBmbihtb2R1bGUsIG1vZHVsZS5leHBvcnRzKSwgbW9kdWxlLmV4cG9ydHM7XG59XG5cbnZhciBkZWVwbWVyZ2UgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlLCBleHBvcnRzKSB7XG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcbiAgICBpZiAodHlwZW9mIHVuZGVmaW5lZCA9PT0gJ2Z1bmN0aW9uJyAmJiB1bmRlZmluZWQuYW1kKSB7XG4gICAgICAgIHVuZGVmaW5lZChmYWN0b3J5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgICB9XG59KGNvbW1vbmpzR2xvYmFsLCBmdW5jdGlvbiAoKSB7XG5cbmZ1bmN0aW9uIGlzTWVyZ2VhYmxlT2JqZWN0KHZhbCkge1xuICAgIHZhciBub25OdWxsT2JqZWN0ID0gdmFsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnO1xuXG4gICAgcmV0dXJuIG5vbk51bGxPYmplY3RcbiAgICAgICAgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbCkgIT09ICdbb2JqZWN0IFJlZ0V4cF0nXG4gICAgICAgICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWwpICE9PSAnW29iamVjdCBEYXRlXSdcbn1cblxuZnVuY3Rpb24gZW1wdHlUYXJnZXQodmFsKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsKSA/IFtdIDoge31cbn1cblxuZnVuY3Rpb24gY2xvbmVJZk5lY2Vzc2FyeSh2YWx1ZSwgb3B0aW9uc0FyZ3VtZW50KSB7XG4gICAgdmFyIGNsb25lID0gb3B0aW9uc0FyZ3VtZW50ICYmIG9wdGlvbnNBcmd1bWVudC5jbG9uZSA9PT0gdHJ1ZTtcbiAgICByZXR1cm4gKGNsb25lICYmIGlzTWVyZ2VhYmxlT2JqZWN0KHZhbHVlKSkgPyBkZWVwbWVyZ2UoZW1wdHlUYXJnZXQodmFsdWUpLCB2YWx1ZSwgb3B0aW9uc0FyZ3VtZW50KSA6IHZhbHVlXG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRBcnJheU1lcmdlKHRhcmdldCwgc291cmNlLCBvcHRpb25zQXJndW1lbnQpIHtcbiAgICB2YXIgZGVzdGluYXRpb24gPSB0YXJnZXQuc2xpY2UoKTtcbiAgICBzb3VyY2UuZm9yRWFjaChmdW5jdGlvbihlLCBpKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGVzdGluYXRpb25baV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltpXSA9IGNsb25lSWZOZWNlc3NhcnkoZSwgb3B0aW9uc0FyZ3VtZW50KTtcbiAgICAgICAgfSBlbHNlIGlmIChpc01lcmdlYWJsZU9iamVjdChlKSkge1xuICAgICAgICAgICAgZGVzdGluYXRpb25baV0gPSBkZWVwbWVyZ2UodGFyZ2V0W2ldLCBlLCBvcHRpb25zQXJndW1lbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC5pbmRleE9mKGUpID09PSAtMSkge1xuICAgICAgICAgICAgZGVzdGluYXRpb24ucHVzaChjbG9uZUlmTmVjZXNzYXJ5KGUsIG9wdGlvbnNBcmd1bWVudCkpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGRlc3RpbmF0aW9uXG59XG5cbmZ1bmN0aW9uIG1lcmdlT2JqZWN0KHRhcmdldCwgc291cmNlLCBvcHRpb25zQXJndW1lbnQpIHtcbiAgICB2YXIgZGVzdGluYXRpb24gPSB7fTtcbiAgICBpZiAoaXNNZXJnZWFibGVPYmplY3QodGFyZ2V0KSkge1xuICAgICAgICBPYmplY3Qua2V5cyh0YXJnZXQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgZGVzdGluYXRpb25ba2V5XSA9IGNsb25lSWZOZWNlc3NhcnkodGFyZ2V0W2tleV0sIG9wdGlvbnNBcmd1bWVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAoIWlzTWVyZ2VhYmxlT2JqZWN0KHNvdXJjZVtrZXldKSB8fCAhdGFyZ2V0W2tleV0pIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2tleV0gPSBjbG9uZUlmTmVjZXNzYXJ5KHNvdXJjZVtrZXldLCBvcHRpb25zQXJndW1lbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVzdGluYXRpb25ba2V5XSA9IGRlZXBtZXJnZSh0YXJnZXRba2V5XSwgc291cmNlW2tleV0sIG9wdGlvbnNBcmd1bWVudCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZGVzdGluYXRpb25cbn1cblxuZnVuY3Rpb24gZGVlcG1lcmdlKHRhcmdldCwgc291cmNlLCBvcHRpb25zQXJndW1lbnQpIHtcbiAgICB2YXIgYXJyYXkgPSBBcnJheS5pc0FycmF5KHNvdXJjZSk7XG4gICAgdmFyIG9wdGlvbnMgPSBvcHRpb25zQXJndW1lbnQgfHwgeyBhcnJheU1lcmdlOiBkZWZhdWx0QXJyYXlNZXJnZSB9O1xuICAgIHZhciBhcnJheU1lcmdlID0gb3B0aW9ucy5hcnJheU1lcmdlIHx8IGRlZmF1bHRBcnJheU1lcmdlO1xuXG4gICAgaWYgKGFycmF5KSB7XG4gICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHRhcmdldCkgPyBhcnJheU1lcmdlKHRhcmdldCwgc291cmNlLCBvcHRpb25zQXJndW1lbnQpIDogY2xvbmVJZk5lY2Vzc2FyeShzb3VyY2UsIG9wdGlvbnNBcmd1bWVudClcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbWVyZ2VPYmplY3QodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnNBcmd1bWVudClcbiAgICB9XG59XG5cbmRlZXBtZXJnZS5hbGwgPSBmdW5jdGlvbiBkZWVwbWVyZ2VBbGwoYXJyYXksIG9wdGlvbnNBcmd1bWVudCkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheSkgfHwgYXJyYXkubGVuZ3RoIDwgMikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZpcnN0IGFyZ3VtZW50IHNob3VsZCBiZSBhbiBhcnJheSB3aXRoIGF0IGxlYXN0IHR3byBlbGVtZW50cycpXG4gICAgfVxuXG4gICAgLy8gd2UgYXJlIHN1cmUgdGhlcmUgYXJlIGF0IGxlYXN0IDIgdmFsdWVzLCBzbyBpdCBpcyBzYWZlIHRvIGhhdmUgbm8gaW5pdGlhbCB2YWx1ZVxuICAgIHJldHVybiBhcnJheS5yZWR1Y2UoZnVuY3Rpb24ocHJldiwgbmV4dCkge1xuICAgICAgICByZXR1cm4gZGVlcG1lcmdlKHByZXYsIG5leHQsIG9wdGlvbnNBcmd1bWVudClcbiAgICB9KVxufTtcblxucmV0dXJuIGRlZXBtZXJnZVxuXG59KSk7XG59KTtcblxuLy8gICAgICBcbi8vIEFuIGV2ZW50IGhhbmRsZXIgY2FuIHRha2UgYW4gb3B0aW9uYWwgZXZlbnQgYXJndW1lbnRcbi8vIGFuZCBzaG91bGQgbm90IHJldHVybiBhIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbi8vIEFuIGFycmF5IG9mIGFsbCBjdXJyZW50bHkgcmVnaXN0ZXJlZCBldmVudCBoYW5kbGVycyBmb3IgYSB0eXBlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuLy8gQSBtYXAgb2YgZXZlbnQgdHlwZXMgYW5kIHRoZWlyIGNvcnJlc3BvbmRpbmcgZXZlbnQgaGFuZGxlcnMuXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIFxuXG4vKiogTWl0dDogVGlueSAofjIwMGIpIGZ1bmN0aW9uYWwgZXZlbnQgZW1pdHRlciAvIHB1YnN1Yi5cbiAqICBAbmFtZSBtaXR0XG4gKiAgQHJldHVybnMge01pdHR9XG4gKi9cbmZ1bmN0aW9uIG1pdHQoYWxsICAgICAgICAgICAgICAgICApIHtcblx0YWxsID0gYWxsIHx8IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cblx0cmV0dXJuIHtcblx0XHQvKipcblx0XHQgKiBSZWdpc3RlciBhbiBldmVudCBoYW5kbGVyIGZvciB0aGUgZ2l2ZW4gdHlwZS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSAge1N0cmluZ30gdHlwZVx0VHlwZSBvZiBldmVudCB0byBsaXN0ZW4gZm9yLCBvciBgXCIqXCJgIGZvciBhbGwgZXZlbnRzXG5cdFx0ICogQHBhcmFtICB7RnVuY3Rpb259IGhhbmRsZXIgRnVuY3Rpb24gdG8gY2FsbCBpbiByZXNwb25zZSB0byBnaXZlbiBldmVudFxuXHRcdCAqIEBtZW1iZXJPZiBtaXR0XG5cdFx0ICovXG5cdFx0b246IGZ1bmN0aW9uIG9uKHR5cGUgICAgICAgICwgaGFuZGxlciAgICAgICAgICAgICAgKSB7XG5cdFx0XHQoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcik7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIFJlbW92ZSBhbiBldmVudCBoYW5kbGVyIGZvciB0aGUgZ2l2ZW4gdHlwZS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSAge1N0cmluZ30gdHlwZVx0VHlwZSBvZiBldmVudCB0byB1bnJlZ2lzdGVyIGBoYW5kbGVyYCBmcm9tLCBvciBgXCIqXCJgXG5cdFx0ICogQHBhcmFtICB7RnVuY3Rpb259IGhhbmRsZXIgSGFuZGxlciBmdW5jdGlvbiB0byByZW1vdmVcblx0XHQgKiBAbWVtYmVyT2YgbWl0dFxuXHRcdCAqL1xuXHRcdG9mZjogZnVuY3Rpb24gb2ZmKHR5cGUgICAgICAgICwgaGFuZGxlciAgICAgICAgICAgICAgKSB7XG5cdFx0XHRpZiAoYWxsW3R5cGVdKSB7XG5cdFx0XHRcdGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBJbnZva2UgYWxsIGhhbmRsZXJzIGZvciB0aGUgZ2l2ZW4gdHlwZS5cblx0XHQgKiBJZiBwcmVzZW50LCBgXCIqXCJgIGhhbmRsZXJzIGFyZSBpbnZva2VkIGFmdGVyIHR5cGUtbWF0Y2hlZCBoYW5kbGVycy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlICBUaGUgZXZlbnQgdHlwZSB0byBpbnZva2Vcblx0XHQgKiBAcGFyYW0ge0FueX0gW2V2dF0gIEFueSB2YWx1ZSAob2JqZWN0IGlzIHJlY29tbWVuZGVkIGFuZCBwb3dlcmZ1bCksIHBhc3NlZCB0byBlYWNoIGhhbmRsZXJcblx0XHQgKiBAbWVtYmVyb2YgbWl0dFxuXHRcdCAqL1xuXHRcdGVtaXQ6IGZ1bmN0aW9uIGVtaXQodHlwZSAgICAgICAgLCBldnQgICAgICkge1xuXHRcdFx0KGFsbFt0eXBlXSB8fCBbXSkubWFwKGZ1bmN0aW9uIChoYW5kbGVyKSB7IGhhbmRsZXIoZXZ0KTsgfSk7XG5cdFx0XHQoYWxsWycqJ10gfHwgW10pLm1hcChmdW5jdGlvbiAoaGFuZGxlcikgeyBoYW5kbGVyKHR5cGUsIGV2dCk7IH0pO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIG5hbWVzcGFjZXNfMSA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMpIHtcbnZhciBuYW1lc3BhY2VzID0ge1xuICBzdmc6IHtcbiAgICBuYW1lOiAneG1sbnMnLFxuICAgIHVyaTogJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuICB9LFxuICB4bGluazoge1xuICAgIG5hbWU6ICd4bWxuczp4bGluaycsXG4gICAgdXJpOiAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaydcbiAgfVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gbmFtZXNwYWNlcztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xufSk7XG5cbi8qKlxuICogQHBhcmFtIHtPYmplY3R9IGF0dHJzXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbnZhciBvYmplY3RUb0F0dHJzU3RyaW5nID0gZnVuY3Rpb24gKGF0dHJzKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhhdHRycykubWFwKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgdmFyIHZhbHVlID0gYXR0cnNbYXR0cl0udG9TdHJpbmcoKS5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyk7XG4gICAgcmV0dXJuIChhdHRyICsgXCI9XFxcIlwiICsgdmFsdWUgKyBcIlxcXCJcIik7XG4gIH0pLmpvaW4oJyAnKTtcbn07XG5cbnZhciBzdmcgPSBuYW1lc3BhY2VzXzEuc3ZnO1xudmFyIHhsaW5rID0gbmFtZXNwYWNlc18xLnhsaW5rO1xuXG52YXIgZGVmYXVsdEF0dHJzID0ge307XG5kZWZhdWx0QXR0cnNbc3ZnLm5hbWVdID0gc3ZnLnVyaTtcbmRlZmF1bHRBdHRyc1t4bGluay5uYW1lXSA9IHhsaW5rLnVyaTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvbnRlbnRdXG4gKiBAcGFyYW0ge09iamVjdH0gW2F0dHJpYnV0ZXNdXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbnZhciB3cmFwSW5TdmdTdHJpbmcgPSBmdW5jdGlvbiAoY29udGVudCwgYXR0cmlidXRlcykge1xuICBpZiAoIGNvbnRlbnQgPT09IHZvaWQgMCApIGNvbnRlbnQgPSAnJztcblxuICB2YXIgYXR0cnMgPSBkZWVwbWVyZ2UoZGVmYXVsdEF0dHJzLCBhdHRyaWJ1dGVzIHx8IHt9KTtcbiAgdmFyIGF0dHJzUmVuZGVyZWQgPSBvYmplY3RUb0F0dHJzU3RyaW5nKGF0dHJzKTtcbiAgcmV0dXJuIChcIjxzdmcgXCIgKyBhdHRyc1JlbmRlcmVkICsgXCI+XCIgKyBjb250ZW50ICsgXCI8L3N2Zz5cIik7XG59O1xuXG52YXIgc3ZnJDEgPSBuYW1lc3BhY2VzXzEuc3ZnO1xudmFyIHhsaW5rJDEgPSBuYW1lc3BhY2VzXzEueGxpbms7XG5cbnZhciBkZWZhdWx0Q29uZmlnID0ge1xuICBhdHRyczogKCBvYmogPSB7XG4gICAgc3R5bGU6IFsncG9zaXRpb246IGFic29sdXRlJywgJ3dpZHRoOiAwJywgJ2hlaWdodDogMCddLmpvaW4oJzsgJylcbiAgfSwgb2JqW3N2ZyQxLm5hbWVdID0gc3ZnJDEudXJpLCBvYmpbeGxpbmskMS5uYW1lXSA9IHhsaW5rJDEudXJpLCBvYmogKVxufTtcbnZhciBvYmo7XG5cbnZhciBTcHJpdGUgPSBmdW5jdGlvbiBTcHJpdGUoY29uZmlnKSB7XG4gIHRoaXMuY29uZmlnID0gZGVlcG1lcmdlKGRlZmF1bHRDb25maWcsIGNvbmZpZyB8fCB7fSk7XG4gIHRoaXMuc3ltYm9scyA9IFtdO1xufTtcblxuLyoqXG4gKiBBZGQgbmV3IHN5bWJvbC4gSWYgc3ltYm9sIHdpdGggdGhlIHNhbWUgaWQgZXhpc3RzIGl0IHdpbGwgYmUgcmVwbGFjZWQuXG4gKiBAcGFyYW0ge1Nwcml0ZVN5bWJvbH0gc3ltYm9sXG4gKiBAcmV0dXJuIHtib29sZWFufSBgdHJ1ZWAgLSBzeW1ib2wgd2FzIGFkZGVkLCBgZmFsc2VgIC0gcmVwbGFjZWRcbiAqL1xuU3ByaXRlLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiBhZGQgKHN5bWJvbCkge1xuICB2YXIgcmVmID0gdGhpcztcbiAgICB2YXIgc3ltYm9scyA9IHJlZi5zeW1ib2xzO1xuICB2YXIgZXhpc3RpbmcgPSB0aGlzLmZpbmQoc3ltYm9sLmlkKTtcblxuICBpZiAoZXhpc3RpbmcpIHtcbiAgICBzeW1ib2xzW3N5bWJvbHMuaW5kZXhPZihleGlzdGluZyldID0gc3ltYm9sO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN5bWJvbHMucHVzaChzeW1ib2wpO1xuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIHN5bWJvbCAmIGRlc3Ryb3kgaXRcbiAqIEBwYXJhbSB7c3RyaW5nfSBpZFxuICogQHJldHVybiB7Ym9vbGVhbn0gYHRydWVgIC0gc3ltYm9sIHdhcyBmb3VuZCAmIHN1Y2Nlc3NmdWxseSBkZXN0cm95ZWQsIGBmYWxzZWAgLSBvdGhlcndpc2VcbiAqL1xuU3ByaXRlLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUgKGlkKSB7XG4gIHZhciByZWYgPSB0aGlzO1xuICAgIHZhciBzeW1ib2xzID0gcmVmLnN5bWJvbHM7XG4gIHZhciBzeW1ib2wgPSB0aGlzLmZpbmQoaWQpO1xuXG4gIGlmIChzeW1ib2wpIHtcbiAgICBzeW1ib2xzLnNwbGljZShzeW1ib2xzLmluZGV4T2Yoc3ltYm9sKSwgMSk7XG4gICAgc3ltYm9sLmRlc3Ryb3koKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGlkXG4gKiBAcmV0dXJuIHtTcHJpdGVTeW1ib2x8bnVsbH1cbiAqL1xuU3ByaXRlLnByb3RvdHlwZS5maW5kID0gZnVuY3Rpb24gZmluZCAoaWQpIHtcbiAgcmV0dXJuIHRoaXMuc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHMuaWQgPT09IGlkOyB9KVswXSB8fCBudWxsO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gaWRcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cblNwcml0ZS5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gaGFzIChpZCkge1xuICByZXR1cm4gdGhpcy5maW5kKGlkKSAhPT0gbnVsbDtcbn07XG5cbi8qKlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5TcHJpdGUucHJvdG90eXBlLnN0cmluZ2lmeSA9IGZ1bmN0aW9uIHN0cmluZ2lmeSAoKSB7XG4gIHZhciByZWYgPSB0aGlzLmNvbmZpZztcbiAgICB2YXIgYXR0cnMgPSByZWYuYXR0cnM7XG4gIHZhciBzdHJpbmdpZmllZFN5bWJvbHMgPSB0aGlzLnN5bWJvbHMubWFwKGZ1bmN0aW9uIChzKSB7IHJldHVybiBzLnN0cmluZ2lmeSgpOyB9KS5qb2luKCcnKTtcbiAgcmV0dXJuIHdyYXBJblN2Z1N0cmluZyhzdHJpbmdpZmllZFN5bWJvbHMsIGF0dHJzKTtcbn07XG5cbi8qKlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5TcHJpdGUucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcgKCkge1xuICByZXR1cm4gdGhpcy5zdHJpbmdpZnkoKTtcbn07XG5cblNwcml0ZS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3kgKCkge1xuICB0aGlzLnN5bWJvbHMuZm9yRWFjaChmdW5jdGlvbiAocykgeyByZXR1cm4gcy5kZXN0cm95KCk7IH0pO1xufTtcblxudmFyIFNwcml0ZVN5bWJvbCA9IGZ1bmN0aW9uIFNwcml0ZVN5bWJvbChyZWYpIHtcbiAgdmFyIGlkID0gcmVmLmlkO1xuICB2YXIgdmlld0JveCA9IHJlZi52aWV3Qm94O1xuICB2YXIgY29udGVudCA9IHJlZi5jb250ZW50O1xuXG4gIHRoaXMuaWQgPSBpZDtcbiAgdGhpcy52aWV3Qm94ID0gdmlld0JveDtcbiAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbn07XG5cbi8qKlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5TcHJpdGVTeW1ib2wucHJvdG90eXBlLnN0cmluZ2lmeSA9IGZ1bmN0aW9uIHN0cmluZ2lmeSAoKSB7XG4gIHJldHVybiB0aGlzLmNvbnRlbnQ7XG59O1xuXG4vKipcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuU3ByaXRlU3ltYm9sLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nICgpIHtcbiAgcmV0dXJuIHRoaXMuc3RyaW5naWZ5KCk7XG59O1xuXG5TcHJpdGVTeW1ib2wucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95ICgpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICBbJ2lkJywgJ3ZpZXdCb3gnLCAnY29udGVudCddLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHsgcmV0dXJuIGRlbGV0ZSB0aGlzJDFbcHJvcF07IH0pO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29udGVudFxuICogQHJldHVybiB7RWxlbWVudH1cbiAqL1xudmFyIHBhcnNlID0gZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgdmFyIGhhc0ltcG9ydE5vZGUgPSAhIWRvY3VtZW50LmltcG9ydE5vZGU7XG4gIHZhciBkb2MgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKGNvbnRlbnQsICdpbWFnZS9zdmcreG1sJykuZG9jdW1lbnRFbGVtZW50O1xuXG4gIC8qKlxuICAgKiBGaXggZm9yIGJyb3dzZXIgd2hpY2ggYXJlIHRocm93aW5nIFdyb25nRG9jdW1lbnRFcnJvclxuICAgKiBpZiB5b3UgaW5zZXJ0IGFuIGVsZW1lbnQgd2hpY2ggaXMgbm90IHBhcnQgb2YgdGhlIGRvY3VtZW50XG4gICAqIEBzZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzk4NjUxOS80NjI0NDAzXG4gICAqL1xuICBpZiAoaGFzSW1wb3J0Tm9kZSkge1xuICAgIHJldHVybiBkb2N1bWVudC5pbXBvcnROb2RlKGRvYywgdHJ1ZSk7XG4gIH1cblxuICByZXR1cm4gZG9jO1xufTtcblxudmFyIEJyb3dzZXJTcHJpdGVTeW1ib2wgPSAoZnVuY3Rpb24gKFNwcml0ZVN5bWJvbCQkMSkge1xuICBmdW5jdGlvbiBCcm93c2VyU3ByaXRlU3ltYm9sICgpIHtcbiAgICBTcHJpdGVTeW1ib2wkJDEuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIGlmICggU3ByaXRlU3ltYm9sJCQxICkgQnJvd3NlclNwcml0ZVN5bWJvbC5fX3Byb3RvX18gPSBTcHJpdGVTeW1ib2wkJDE7XG4gIEJyb3dzZXJTcHJpdGVTeW1ib2wucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggU3ByaXRlU3ltYm9sJCQxICYmIFNwcml0ZVN5bWJvbCQkMS5wcm90b3R5cGUgKTtcbiAgQnJvd3NlclNwcml0ZVN5bWJvbC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBCcm93c2VyU3ByaXRlU3ltYm9sO1xuXG4gIHZhciBwcm90b3R5cGVBY2Nlc3NvcnMgPSB7IGlzTW91bnRlZDoge30gfTtcblxuICBwcm90b3R5cGVBY2Nlc3NvcnMuaXNNb3VudGVkLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gISF0aGlzLm5vZGU7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gbm9kZVxuICAgKiBAcmV0dXJuIHtCcm93c2VyU3ByaXRlU3ltYm9sfVxuICAgKi9cbiAgQnJvd3NlclNwcml0ZVN5bWJvbC5jcmVhdGVGcm9tRXhpc3RpbmdOb2RlID0gZnVuY3Rpb24gY3JlYXRlRnJvbUV4aXN0aW5nTm9kZSAobm9kZSkge1xuICAgIHJldHVybiBuZXcgQnJvd3NlclNwcml0ZVN5bWJvbCh7XG4gICAgICBpZDogbm9kZS5nZXRBdHRyaWJ1dGUoJ2lkJyksXG4gICAgICB2aWV3Qm94OiBub2RlLmdldEF0dHJpYnV0ZSgndmlld0JveCcpLFxuICAgICAgY29udGVudDogbm9kZS5vdXRlckhUTUxcbiAgICB9KTtcbiAgfTtcblxuICBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSAoKSB7XG4gICAgaWYgKHRoaXMuaXNNb3VudGVkKSB7XG4gICAgICB0aGlzLnVubW91bnQoKTtcbiAgICB9XG4gICAgU3ByaXRlU3ltYm9sJCQxLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RWxlbWVudHxzdHJpbmd9IHRhcmdldFxuICAgKiBAcmV0dXJuIHtFbGVtZW50fVxuICAgKi9cbiAgQnJvd3NlclNwcml0ZVN5bWJvbC5wcm90b3R5cGUubW91bnQgPSBmdW5jdGlvbiBtb3VudCAodGFyZ2V0KSB7XG4gICAgaWYgKHRoaXMuaXNNb3VudGVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5ub2RlO1xuICAgIH1cblxuICAgIHZhciBtb3VudFRhcmdldCA9IHR5cGVvZiB0YXJnZXQgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpIDogdGFyZ2V0O1xuICAgIHZhciBub2RlID0gdGhpcy5yZW5kZXIoKTtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuXG4gICAgbW91bnRUYXJnZXQuYXBwZW5kQ2hpbGQobm9kZSk7XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfTtcblxuICAvKipcbiAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICovXG4gIEJyb3dzZXJTcHJpdGVTeW1ib2wucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlciAoKSB7XG4gICAgdmFyIGNvbnRlbnQgPSB0aGlzLnN0cmluZ2lmeSgpO1xuICAgIHJldHVybiBwYXJzZSh3cmFwSW5TdmdTdHJpbmcoY29udGVudCkpLmNoaWxkTm9kZXNbMF07XG4gIH07XG5cbiAgQnJvd3NlclNwcml0ZVN5bWJvbC5wcm90b3R5cGUudW5tb3VudCA9IGZ1bmN0aW9uIHVubW91bnQgKCkge1xuICAgIHRoaXMubm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMubm9kZSk7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoIEJyb3dzZXJTcHJpdGVTeW1ib2wucHJvdG90eXBlLCBwcm90b3R5cGVBY2Nlc3NvcnMgKTtcblxuICByZXR1cm4gQnJvd3NlclNwcml0ZVN5bWJvbDtcbn0oU3ByaXRlU3ltYm9sKSk7XG5cbnZhciBkZWZhdWx0Q29uZmlnJDEgPSB7XG4gIC8qKlxuICAgKiBTaG91bGQgZm9sbG93aW5nIG9wdGlvbnMgYmUgYXV0b21hdGljYWxseSBjb25maWd1cmVkOlxuICAgKiAtIGBzeW5jVXJsc1dpdGhCYXNlVGFnYFxuICAgKiAtIGBsb2NhdGlvbkNoYW5nZUFuZ3VsYXJFbWl0dGVyYFxuICAgKiAtIGBtb3ZlR3JhZGllbnRzT3V0c2lkZVN5bWJvbGBcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBhdXRvQ29uZmlndXJlOiB0cnVlLFxuXG4gIC8qKlxuICAgKiBEZWZhdWx0IG1vdW50aW5nIHNlbGVjdG9yXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBtb3VudFRvOiAnYm9keScsXG5cbiAgLyoqXG4gICAqIEZpeCBkaXNhcHBlYXJpbmcgU1ZHIGVsZW1lbnRzIHdoZW4gPGJhc2UgaHJlZj4gZXhpc3RzLlxuICAgKiBFeGVjdXRlcyB3aGVuIHNwcml0ZSBtb3VudGVkLlxuICAgKiBAc2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE4MjY1MzM2Lzc5NjE1MlxuICAgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9ldmVyZGltZW5zaW9uL2FuZ3VsYXItc3ZnLWJhc2UtZml4XG4gICAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci5qcy9pc3N1ZXMvODkzNCNpc3N1ZWNvbW1lbnQtNTY1Njg0NjZcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBzeW5jVXJsc1dpdGhCYXNlVGFnOiBmYWxzZSxcblxuICAvKipcbiAgICogU2hvdWxkIHNwcml0ZSBsaXN0ZW4gY3VzdG9tIGxvY2F0aW9uIGNoYW5nZSBldmVudFxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIGxpc3RlbkxvY2F0aW9uQ2hhbmdlRXZlbnQ6IHRydWUsXG5cbiAgLyoqXG4gICAqIEN1c3RvbSB3aW5kb3cgZXZlbnQgbmFtZSB3aGljaCBzaG91bGQgYmUgZW1pdHRlZCB0byB1cGRhdGUgc3ByaXRlIHVybHNcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGxvY2F0aW9uQ2hhbmdlRXZlbnQ6ICdsb2NhdGlvbkNoYW5nZScsXG5cbiAgLyoqXG4gICAqIEVtaXQgbG9jYXRpb24gY2hhbmdlIGV2ZW50IGluIEFuZ3VsYXIgYXV0b21hdGljYWxseVxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIGxvY2F0aW9uQ2hhbmdlQW5ndWxhckVtaXR0ZXI6IGZhbHNlLFxuXG4gIC8qKlxuICAgKiBTZWxlY3RvciB0byBmaW5kIHN5bWJvbHMgdXNhZ2VzIHdoZW4gdXBkYXRpbmcgc3ByaXRlIHVybHNcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIHVzYWdlc1RvVXBkYXRlOiAndXNlWyp8aHJlZl0nLFxuXG4gIC8qKlxuICAgKiBGaXggRmlyZWZveCBidWcgd2hlbiBncmFkaWVudHMgYW5kIHBhdHRlcm5zIGRvbid0IHdvcmsgaWYgdGhleSBhcmUgd2l0aGluIGEgc3ltYm9sLlxuICAgKiBFeGVjdXRlcyB3aGVuIHNwcml0ZSBpcyByZW5kZXJlZCwgYnV0IG5vdCBtb3VudGVkLlxuICAgKiBAc2VlIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTMwNjY3NFxuICAgKiBAc2VlIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTM1MzU3NVxuICAgKiBAc2VlIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTEyMzUzNjRcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBtb3ZlR3JhZGllbnRzT3V0c2lkZVN5bWJvbDogZmFsc2Vcbn07XG5cbi8qKlxuICogQHBhcmFtIHsqfSBhcnJheUxpa2VcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG52YXIgYXJyYXlGcm9tID0gZnVuY3Rpb24gKGFycmF5TGlrZSkge1xuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJyYXlMaWtlLCAwKTtcbn07XG5cbnZhciBicm93c2VyID0ge1xuICBpc0Nocm9tZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gL2Nocm9tZS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7IH0sXG4gIGlzRmlyZWZveDogZnVuY3Rpb24gKCkgeyByZXR1cm4gL2ZpcmVmb3gvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpOyB9LFxuXG4gIC8vIGh0dHBzOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvbXM1Mzc1MDModj12cy44NSkuYXNweFxuICBpc0lFOiBmdW5jdGlvbiAoKSB7IHJldHVybiAvbXNpZS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgfHwgL3RyaWRlbnQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpOyB9LFxuICBpc0VkZ2U6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIC9lZGdlL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTsgfVxufTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHsqfSBkYXRhXG4gKi9cbnZhciBkaXNwYXRjaEV2ZW50ID0gZnVuY3Rpb24gKG5hbWUsIGRhdGEpIHtcbiAgdmFyIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XG4gIGV2ZW50LmluaXRDdXN0b21FdmVudChuYW1lLCBmYWxzZSwgZmFsc2UsIGRhdGEpO1xuICB3aW5kb3cuZGlzcGF0Y2hFdmVudChldmVudCk7XG59O1xuXG4vKipcbiAqIElFIGRvZXNuJ3QgZXZhbHVhdGUgPHN0eWxlPiB0YWdzIGluIFNWR3MgdGhhdCBhcmUgZHluYW1pY2FsbHkgYWRkZWQgdG8gdGhlIHBhZ2UuXG4gKiBUaGlzIHRyaWNrIHdpbGwgdHJpZ2dlciBJRSB0byByZWFkIGFuZCB1c2UgYW55IGV4aXN0aW5nIFNWRyA8c3R5bGU+IHRhZ3MuXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9pY29uaWMvU1ZHSW5qZWN0b3IvaXNzdWVzLzIzXG4gKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1pY3Jvc29mdC5jb20vZW4tdXMvbWljcm9zb2Z0LWVkZ2UvcGxhdGZvcm0vaXNzdWVzLzEwODk4NDY5L1xuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gbm9kZSBET00gRWxlbWVudCB0byBzZWFyY2ggPHN0eWxlPiB0YWdzIGluXG4gKiBAcmV0dXJuIHtBcnJheTxIVE1MU3R5bGVFbGVtZW50Pn1cbiAqL1xudmFyIGV2YWxTdHlsZXNJRVdvcmthcm91bmQgPSBmdW5jdGlvbiAobm9kZSkge1xuICB2YXIgdXBkYXRlZE5vZGVzID0gW107XG5cbiAgYXJyYXlGcm9tKG5vZGUucXVlcnlTZWxlY3RvckFsbCgnc3R5bGUnKSlcbiAgICAuZm9yRWFjaChmdW5jdGlvbiAoc3R5bGUpIHtcbiAgICAgIHN0eWxlLnRleHRDb250ZW50ICs9ICcnO1xuICAgICAgdXBkYXRlZE5vZGVzLnB1c2goc3R5bGUpO1xuICAgIH0pO1xuXG4gIHJldHVybiB1cGRhdGVkTm9kZXM7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBbdXJsXSBJZiBub3QgcHJvdmlkZWQgLSBjdXJyZW50IFVSTCB3aWxsIGJlIHVzZWRcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xudmFyIGdldFVybFdpdGhvdXRGcmFnbWVudCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgcmV0dXJuICh1cmwgfHwgd2luZG93LmxvY2F0aW9uLmhyZWYpLnNwbGl0KCcjJylbMF07XG59O1xuXG4vKiBnbG9iYWwgYW5ndWxhciAqL1xuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lXG4gKi9cbnZhciBsb2NhdGlvbkNoYW5nZUFuZ3VsYXJFbWl0dGVyID0gZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICBhbmd1bGFyLm1vZHVsZSgnbmcnKS5ydW4oWyckcm9vdFNjb3BlJywgZnVuY3Rpb24gKCRyb290U2NvcGUpIHtcbiAgICAkcm9vdFNjb3BlLiRvbignJGxvY2F0aW9uQ2hhbmdlU3VjY2VzcycsIGZ1bmN0aW9uIChlLCBuZXdVcmwsIG9sZFVybCkge1xuICAgICAgZGlzcGF0Y2hFdmVudChldmVudE5hbWUsIHsgb2xkVXJsOiBvbGRVcmwsIG5ld1VybDogbmV3VXJsIH0pO1xuICAgIH0pO1xuICB9XSk7XG59O1xuXG52YXIgZGVmYXVsdFNlbGVjdG9yID0gJ2xpbmVhckdyYWRpZW50LCByYWRpYWxHcmFkaWVudCwgcGF0dGVybic7XG5cbi8qKlxuICogQHBhcmFtIHtFbGVtZW50fSBzdmdcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc2VsZWN0b3JdXG4gKiBAcmV0dXJuIHtFbGVtZW50fVxuICovXG52YXIgbW92ZUdyYWRpZW50c091dHNpZGVTeW1ib2wgPSBmdW5jdGlvbiAoc3ZnLCBzZWxlY3Rvcikge1xuICBpZiAoIHNlbGVjdG9yID09PSB2b2lkIDAgKSBzZWxlY3RvciA9IGRlZmF1bHRTZWxlY3RvcjtcblxuICBhcnJheUZyb20oc3ZnLnF1ZXJ5U2VsZWN0b3JBbGwoJ3N5bWJvbCcpKS5mb3JFYWNoKGZ1bmN0aW9uIChzeW1ib2wpIHtcbiAgICBhcnJheUZyb20oc3ltYm9sLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKS5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICBzeW1ib2wucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobm9kZSwgc3ltYm9sKTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBzdmc7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7Tm9kZUxpc3R9IG5vZGVzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbbWF0Y2hlcl1cbiAqIEByZXR1cm4ge0F0dHJbXX1cbiAqL1xuZnVuY3Rpb24gc2VsZWN0QXR0cmlidXRlcyhub2RlcywgbWF0Y2hlcikge1xuICB2YXIgYXR0cnMgPSBhcnJheUZyb20obm9kZXMpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBub2RlKSB7XG4gICAgaWYgKCFub2RlLmF0dHJpYnV0ZXMpIHtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfVxuXG4gICAgdmFyIGFycmF5ZmllZCA9IGFycmF5RnJvbShub2RlLmF0dHJpYnV0ZXMpO1xuICAgIHZhciBtYXRjaGVkID0gbWF0Y2hlciA/IGFycmF5ZmllZC5maWx0ZXIobWF0Y2hlcikgOiBhcnJheWZpZWQ7XG4gICAgcmV0dXJuIGFjYy5jb25jYXQobWF0Y2hlZCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gYXR0cnM7XG59XG5cbi8qKlxuICogQHBhcmFtIHtOb2RlTGlzdHxOb2RlfSBub2Rlc1xuICogQHBhcmFtIHtib29sZWFufSBbY2xvbmU9dHJ1ZV1cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuXG52YXIgeExpbmtOUyA9IG5hbWVzcGFjZXNfMS54bGluay51cmk7XG52YXIgeExpbmtBdHRyTmFtZSA9ICd4bGluazpocmVmJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtZXNjYXBlXG52YXIgc3BlY2lhbFVybENoYXJzUGF0dGVybiA9IC9be318XFxcXFxcXlxcW1xcXWBcIjw+XS9nO1xuXG5mdW5jdGlvbiBlbmNvZGVyKHVybCkge1xuICByZXR1cm4gdXJsLnJlcGxhY2Uoc3BlY2lhbFVybENoYXJzUGF0dGVybiwgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgcmV0dXJuIChcIiVcIiArIChtYXRjaFswXS5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpKSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBlc2NhcGVSZWdFeHAoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csIFwiXFxcXCQmXCIpOyAvLyAkJiBtZWFucyB0aGUgd2hvbGUgbWF0Y2hlZCBzdHJpbmdcbn1cblxuLyoqXG4gKiBAcGFyYW0ge05vZGVMaXN0fSBub2Rlc1xuICogQHBhcmFtIHtzdHJpbmd9IHN0YXJ0c1dpdGhcbiAqIEBwYXJhbSB7c3RyaW5nfSByZXBsYWNlV2l0aFxuICogQHJldHVybiB7Tm9kZUxpc3R9XG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZVJlZmVyZW5jZXMobm9kZXMsIHN0YXJ0c1dpdGgsIHJlcGxhY2VXaXRoKSB7XG4gIGFycmF5RnJvbShub2RlcykuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgIHZhciBocmVmID0gbm9kZS5nZXRBdHRyaWJ1dGUoeExpbmtBdHRyTmFtZSk7XG4gICAgaWYgKGhyZWYgJiYgaHJlZi5pbmRleE9mKHN0YXJ0c1dpdGgpID09PSAwKSB7XG4gICAgICB2YXIgbmV3VXJsID0gaHJlZi5yZXBsYWNlKHN0YXJ0c1dpdGgsIHJlcGxhY2VXaXRoKTtcbiAgICAgIG5vZGUuc2V0QXR0cmlidXRlTlMoeExpbmtOUywgeExpbmtBdHRyTmFtZSwgbmV3VXJsKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBub2Rlcztcbn1cblxuLyoqXG4gKiBMaXN0IG9mIFNWRyBhdHRyaWJ1dGVzIHRvIHVwZGF0ZSB1cmwoKSB0YXJnZXQgaW4gdGhlbVxuICovXG52YXIgYXR0TGlzdCA9IFtcbiAgJ2NsaXBQYXRoJyxcbiAgJ2NvbG9yUHJvZmlsZScsXG4gICdzcmMnLFxuICAnY3Vyc29yJyxcbiAgJ2ZpbGwnLFxuICAnZmlsdGVyJyxcbiAgJ21hcmtlcicsXG4gICdtYXJrZXJTdGFydCcsXG4gICdtYXJrZXJNaWQnLFxuICAnbWFya2VyRW5kJyxcbiAgJ21hc2snLFxuICAnc3Ryb2tlJyxcbiAgJ3N0eWxlJ1xuXTtcblxudmFyIGF0dFNlbGVjdG9yID0gYXR0TGlzdC5tYXAoZnVuY3Rpb24gKGF0dHIpIHsgcmV0dXJuIChcIltcIiArIGF0dHIgKyBcIl1cIik7IH0pLmpvaW4oJywnKTtcblxuLyoqXG4gKiBVcGRhdGUgVVJMcyBpbiBzdmcgaW1hZ2UgKGxpa2UgYGZpbGw9XCJ1cmwoLi4uKVwiYCkgYW5kIHVwZGF0ZSByZWZlcmVuY2luZyBlbGVtZW50c1xuICogQHBhcmFtIHtFbGVtZW50fSBzdmdcbiAqIEBwYXJhbSB7Tm9kZUxpc3R9IHJlZmVyZW5jZXNcbiAqIEBwYXJhbSB7c3RyaW5nfFJlZ0V4cH0gc3RhcnRzV2l0aFxuICogQHBhcmFtIHtzdHJpbmd9IHJlcGxhY2VXaXRoXG4gKiBAcmV0dXJuIHt2b2lkfVxuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBzcHJpdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdmcuc3ByaXRlJyk7XG4gKiBjb25zdCB1c2FnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd1c2UnKTtcbiAqIHVwZGF0ZVVybHMoc3ByaXRlLCB1c2FnZXMsICcjJywgJ3ByZWZpeCMnKTtcbiAqL1xudmFyIHVwZGF0ZVVybHMgPSBmdW5jdGlvbiAoc3ZnLCByZWZlcmVuY2VzLCBzdGFydHNXaXRoLCByZXBsYWNlV2l0aCkge1xuICB2YXIgc3RhcnRzV2l0aEVuY29kZWQgPSBlbmNvZGVyKHN0YXJ0c1dpdGgpO1xuICB2YXIgcmVwbGFjZVdpdGhFbmNvZGVkID0gZW5jb2RlcihyZXBsYWNlV2l0aCk7XG5cbiAgdmFyIG5vZGVzID0gc3ZnLnF1ZXJ5U2VsZWN0b3JBbGwoYXR0U2VsZWN0b3IpO1xuICB2YXIgYXR0cnMgPSBzZWxlY3RBdHRyaWJ1dGVzKG5vZGVzLCBmdW5jdGlvbiAocmVmKSB7XG4gICAgdmFyIGxvY2FsTmFtZSA9IHJlZi5sb2NhbE5hbWU7XG4gICAgdmFyIHZhbHVlID0gcmVmLnZhbHVlO1xuXG4gICAgcmV0dXJuIGF0dExpc3QuaW5kZXhPZihsb2NhbE5hbWUpICE9PSAtMSAmJiB2YWx1ZS5pbmRleE9mKChcInVybChcIiArIHN0YXJ0c1dpdGhFbmNvZGVkKSkgIT09IC0xO1xuICB9KTtcblxuICBhdHRycy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7IHJldHVybiBhdHRyLnZhbHVlID0gYXR0ci52YWx1ZS5yZXBsYWNlKG5ldyBSZWdFeHAoZXNjYXBlUmVnRXhwKHN0YXJ0c1dpdGhFbmNvZGVkKSwgJ2cnKSwgcmVwbGFjZVdpdGhFbmNvZGVkKTsgfSk7XG4gIHVwZGF0ZVJlZmVyZW5jZXMocmVmZXJlbmNlcywgc3RhcnRzV2l0aEVuY29kZWQsIHJlcGxhY2VXaXRoRW5jb2RlZCk7XG59O1xuXG4vKipcbiAqIEludGVybmFsIGVtaXR0ZXIgZXZlbnRzXG4gKiBAZW51bVxuICogQHByaXZhdGVcbiAqL1xudmFyIEV2ZW50cyA9IHtcbiAgTU9VTlQ6ICdtb3VudCcsXG4gIFNZTUJPTF9NT1VOVDogJ3N5bWJvbF9tb3VudCdcbn07XG5cbnZhciBCcm93c2VyU3ByaXRlID0gKGZ1bmN0aW9uIChTcHJpdGUkJDEpIHtcbiAgZnVuY3Rpb24gQnJvd3NlclNwcml0ZShjZmcpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcbiAgICBpZiAoIGNmZyA9PT0gdm9pZCAwICkgY2ZnID0ge307XG5cbiAgICBTcHJpdGUkJDEuY2FsbCh0aGlzLCBkZWVwbWVyZ2UoZGVmYXVsdENvbmZpZyQxLCBjZmcpKTtcblxuICAgIHZhciBlbWl0dGVyID0gbWl0dCgpO1xuICAgIHRoaXMuX2VtaXR0ZXIgPSBlbWl0dGVyO1xuICAgIHRoaXMubm9kZSA9IG51bGw7XG5cbiAgICB2YXIgcmVmID0gdGhpcztcbiAgICB2YXIgY29uZmlnID0gcmVmLmNvbmZpZztcblxuICAgIGlmIChjb25maWcuYXV0b0NvbmZpZ3VyZSkge1xuICAgICAgdGhpcy5fYXV0b0NvbmZpZ3VyZShjZmcpO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuc3luY1VybHNXaXRoQmFzZVRhZykge1xuICAgICAgdmFyIGJhc2VVcmwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYmFzZScpWzBdLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgZW1pdHRlci5vbihFdmVudHMuTU9VTlQsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMkMS51cGRhdGVVcmxzKCcjJywgYmFzZVVybCk7IH0pO1xuICAgIH1cblxuICAgIHZhciBoYW5kbGVMb2NhdGlvbkNoYW5nZSA9IHRoaXMuX2hhbmRsZUxvY2F0aW9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5faGFuZGxlTG9jYXRpb25DaGFuZ2UgPSBoYW5kbGVMb2NhdGlvbkNoYW5nZTtcblxuICAgIC8vIFByb3ZpZGUgd2F5IHRvIHVwZGF0ZSBzcHJpdGUgdXJscyBleHRlcm5hbGx5IHZpYSBkaXNwYXRjaGluZyBjdXN0b20gd2luZG93IGV2ZW50XG4gICAgaWYgKGNvbmZpZy5saXN0ZW5Mb2NhdGlvbkNoYW5nZUV2ZW50KSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihjb25maWcubG9jYXRpb25DaGFuZ2VFdmVudCwgaGFuZGxlTG9jYXRpb25DaGFuZ2UpO1xuICAgIH1cblxuICAgIC8vIEVtaXQgbG9jYXRpb24gY2hhbmdlIGV2ZW50IGluIEFuZ3VsYXIgYXV0b21hdGljYWxseVxuICAgIGlmIChjb25maWcubG9jYXRpb25DaGFuZ2VBbmd1bGFyRW1pdHRlcikge1xuICAgICAgbG9jYXRpb25DaGFuZ2VBbmd1bGFyRW1pdHRlcihjb25maWcubG9jYXRpb25DaGFuZ2VFdmVudCk7XG4gICAgfVxuXG4gICAgLy8gQWZ0ZXIgc3ByaXRlIG1vdW50ZWRcbiAgICBlbWl0dGVyLm9uKEV2ZW50cy5NT1VOVCwgZnVuY3Rpb24gKHNwcml0ZU5vZGUpIHtcbiAgICAgIGlmIChjb25maWcubW92ZUdyYWRpZW50c091dHNpZGVTeW1ib2wpIHtcbiAgICAgICAgbW92ZUdyYWRpZW50c091dHNpZGVTeW1ib2woc3ByaXRlTm9kZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBBZnRlciBzeW1ib2wgbW91bnRlZCBpbnRvIHNwcml0ZVxuICAgIGVtaXR0ZXIub24oRXZlbnRzLlNZTUJPTF9NT1VOVCwgZnVuY3Rpb24gKHN5bWJvbE5vZGUpIHtcbiAgICAgIGlmIChjb25maWcubW92ZUdyYWRpZW50c091dHNpZGVTeW1ib2wpIHtcbiAgICAgICAgbW92ZUdyYWRpZW50c091dHNpZGVTeW1ib2woc3ltYm9sTm9kZS5wYXJlbnROb2RlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGJyb3dzZXIuaXNJRSgpIHx8IGJyb3dzZXIuaXNFZGdlKCkpIHtcbiAgICAgICAgZXZhbFN0eWxlc0lFV29ya2Fyb3VuZChzeW1ib2xOb2RlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlmICggU3ByaXRlJCQxICkgQnJvd3NlclNwcml0ZS5fX3Byb3RvX18gPSBTcHJpdGUkJDE7XG4gIEJyb3dzZXJTcHJpdGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggU3ByaXRlJCQxICYmIFNwcml0ZSQkMS5wcm90b3R5cGUgKTtcbiAgQnJvd3NlclNwcml0ZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBCcm93c2VyU3ByaXRlO1xuXG4gIHZhciBwcm90b3R5cGVBY2Nlc3NvcnMgPSB7IGlzTW91bnRlZDoge30gfTtcblxuICAvKipcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIHByb3RvdHlwZUFjY2Vzc29ycy5pc01vdW50ZWQuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAhIXRoaXMubm9kZTtcbiAgfTtcblxuICAvKipcbiAgICogQXV0b21hdGljYWxseSBjb25maWd1cmUgZm9sbG93aW5nIG9wdGlvbnNcbiAgICogLSBgc3luY1VybHNXaXRoQmFzZVRhZ2BcbiAgICogLSBgbG9jYXRpb25DaGFuZ2VBbmd1bGFyRW1pdHRlcmBcbiAgICogLSBgbW92ZUdyYWRpZW50c091dHNpZGVTeW1ib2xgXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjZmdcbiAgICogQHByaXZhdGVcbiAgICovXG4gIEJyb3dzZXJTcHJpdGUucHJvdG90eXBlLl9hdXRvQ29uZmlndXJlID0gZnVuY3Rpb24gX2F1dG9Db25maWd1cmUgKGNmZykge1xuICAgIHZhciByZWYgPSB0aGlzO1xuICAgIHZhciBjb25maWcgPSByZWYuY29uZmlnO1xuXG4gICAgaWYgKHR5cGVvZiBjZmcuc3luY1VybHNXaXRoQmFzZVRhZyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZy5zeW5jVXJsc1dpdGhCYXNlVGFnID0gdHlwZW9mIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdiYXNlJylbMF0gIT09ICd1bmRlZmluZWQnO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY2ZnLmxvY2F0aW9uQ2hhbmdlQW5ndWxhckVtaXR0ZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWcubG9jYXRpb25DaGFuZ2VBbmd1bGFyRW1pdHRlciA9ICdhbmd1bGFyJyBpbiB3aW5kb3c7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjZmcubW92ZUdyYWRpZW50c091dHNpZGVTeW1ib2wgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWcubW92ZUdyYWRpZW50c091dHNpZGVTeW1ib2wgPSBicm93c2VyLmlzRmlyZWZveCgpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50LmRldGFpbFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQuZGV0YWlsLm9sZFVybFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQuZGV0YWlsLm5ld1VybFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgQnJvd3NlclNwcml0ZS5wcm90b3R5cGUuX2hhbmRsZUxvY2F0aW9uQ2hhbmdlID0gZnVuY3Rpb24gX2hhbmRsZUxvY2F0aW9uQ2hhbmdlIChldmVudCkge1xuICAgIHZhciByZWYgPSBldmVudC5kZXRhaWw7XG4gICAgdmFyIG9sZFVybCA9IHJlZi5vbGRVcmw7XG4gICAgdmFyIG5ld1VybCA9IHJlZi5uZXdVcmw7XG4gICAgdGhpcy51cGRhdGVVcmxzKG9sZFVybCwgbmV3VXJsKTtcbiAgfTtcblxuICAvKipcbiAgICogQWRkIG5ldyBzeW1ib2wuIElmIHN5bWJvbCB3aXRoIHRoZSBzYW1lIGlkIGV4aXN0cyBpdCB3aWxsIGJlIHJlcGxhY2VkLlxuICAgKiBJZiBzcHJpdGUgYWxyZWFkeSBtb3VudGVkIC0gYHN5bWJvbC5tb3VudChzcHJpdGUubm9kZSlgIHdpbGwgYmUgY2FsbGVkLlxuICAgKiBAZmlyZXMgRXZlbnRzI1NZTUJPTF9NT1VOVFxuICAgKiBAcGFyYW0ge0Jyb3dzZXJTcHJpdGVTeW1ib2x9IHN5bWJvbFxuICAgKiBAcmV0dXJuIHtib29sZWFufSBgdHJ1ZWAgLSBzeW1ib2wgd2FzIGFkZGVkLCBgZmFsc2VgIC0gcmVwbGFjZWRcbiAgICovXG4gIEJyb3dzZXJTcHJpdGUucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIGFkZCAoc3ltYm9sKSB7XG4gICAgdmFyIHNwcml0ZSA9IHRoaXM7XG4gICAgdmFyIGlzTmV3U3ltYm9sID0gU3ByaXRlJCQxLnByb3RvdHlwZS5hZGQuY2FsbCh0aGlzLCBzeW1ib2wpO1xuXG4gICAgaWYgKHRoaXMuaXNNb3VudGVkICYmIGlzTmV3U3ltYm9sKSB7XG4gICAgICBzeW1ib2wubW91bnQoc3ByaXRlLm5vZGUpO1xuICAgICAgdGhpcy5fZW1pdHRlci5lbWl0KEV2ZW50cy5TWU1CT0xfTU9VTlQsIHN5bWJvbC5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXNOZXdTeW1ib2w7XG4gIH07XG5cbiAgLyoqXG4gICAqIEF0dGFjaCB0byBleGlzdGluZyBET00gbm9kZVxuICAgKiBAcGFyYW0ge3N0cmluZ3xFbGVtZW50fSB0YXJnZXRcbiAgICogQHJldHVybiB7RWxlbWVudHxudWxsfSBhdHRhY2hlZCBET00gRWxlbWVudC4gbnVsbCBpZiBub2RlIHRvIGF0dGFjaCBub3QgZm91bmQuXG4gICAqL1xuICBCcm93c2VyU3ByaXRlLnByb3RvdHlwZS5hdHRhY2ggPSBmdW5jdGlvbiBhdHRhY2ggKHRhcmdldCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgdmFyIHNwcml0ZSA9IHRoaXM7XG5cbiAgICBpZiAoc3ByaXRlLmlzTW91bnRlZCkge1xuICAgICAgcmV0dXJuIHNwcml0ZS5ub2RlO1xuICAgIH1cblxuICAgIC8qKiBAdHlwZSBFbGVtZW50ICovXG4gICAgdmFyIG5vZGUgPSB0eXBlb2YgdGFyZ2V0ID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KSA6IHRhcmdldDtcbiAgICBzcHJpdGUubm9kZSA9IG5vZGU7XG5cbiAgICAvLyBBbHJlYWR5IGFkZGVkIHN5bWJvbHMgbmVlZHMgdG8gYmUgbW91bnRlZFxuICAgIHRoaXMuc3ltYm9scy5mb3JFYWNoKGZ1bmN0aW9uIChzeW1ib2wpIHtcbiAgICAgIHN5bWJvbC5tb3VudChzcHJpdGUubm9kZSk7XG4gICAgICB0aGlzJDEuX2VtaXR0ZXIuZW1pdChFdmVudHMuU1lNQk9MX01PVU5ULCBzeW1ib2wubm9kZSk7XG4gICAgfSk7XG5cbiAgICAvLyBDcmVhdGUgc3ltYm9scyBmcm9tIGV4aXN0aW5nIERPTSBub2RlcywgYWRkIGFuZCBtb3VudCB0aGVtXG4gICAgYXJyYXlGcm9tKG5vZGUucXVlcnlTZWxlY3RvckFsbCgnc3ltYm9sJykpXG4gICAgICAuZm9yRWFjaChmdW5jdGlvbiAoc3ltYm9sTm9kZSkge1xuICAgICAgICB2YXIgc3ltYm9sID0gQnJvd3NlclNwcml0ZVN5bWJvbC5jcmVhdGVGcm9tRXhpc3RpbmdOb2RlKHN5bWJvbE5vZGUpO1xuICAgICAgICBzeW1ib2wubm9kZSA9IHN5bWJvbE5vZGU7IC8vIGhhY2sgdG8gcHJldmVudCBzeW1ib2wgbW91bnRpbmcgdG8gc3ByaXRlIHdoZW4gYWRkaW5nXG4gICAgICAgIHNwcml0ZS5hZGQoc3ltYm9sKTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5fZW1pdHRlci5lbWl0KEV2ZW50cy5NT1VOVCwgbm9kZSk7XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfTtcblxuICBCcm93c2VyU3ByaXRlLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSAoKSB7XG4gICAgdmFyIHJlZiA9IHRoaXM7XG4gICAgdmFyIGNvbmZpZyA9IHJlZi5jb25maWc7XG4gICAgdmFyIHN5bWJvbHMgPSByZWYuc3ltYm9scztcbiAgICB2YXIgX2VtaXR0ZXIgPSByZWYuX2VtaXR0ZXI7XG5cbiAgICBzeW1ib2xzLmZvckVhY2goZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHMuZGVzdHJveSgpOyB9KTtcblxuICAgIF9lbWl0dGVyLm9mZignKicpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKGNvbmZpZy5sb2NhdGlvbkNoYW5nZUV2ZW50LCB0aGlzLl9oYW5kbGVMb2NhdGlvbkNoYW5nZSk7XG5cbiAgICBpZiAodGhpcy5pc01vdW50ZWQpIHtcbiAgICAgIHRoaXMudW5tb3VudCgpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQGZpcmVzIEV2ZW50cyNNT1VOVFxuICAgKiBAcGFyYW0ge3N0cmluZ3xFbGVtZW50fSBbdGFyZ2V0XVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtwcmVwZW5kPWZhbHNlXVxuICAgKiBAcmV0dXJuIHtFbGVtZW50fG51bGx9IHJlbmRlcmVkIHNwcml0ZSBub2RlLiBudWxsIGlmIG1vdW50IG5vZGUgbm90IGZvdW5kLlxuICAgKi9cbiAgQnJvd3NlclNwcml0ZS5wcm90b3R5cGUubW91bnQgPSBmdW5jdGlvbiBtb3VudCAodGFyZ2V0LCBwcmVwZW5kKSB7XG4gICAgaWYgKCB0YXJnZXQgPT09IHZvaWQgMCApIHRhcmdldCA9IHRoaXMuY29uZmlnLm1vdW50VG87XG4gICAgaWYgKCBwcmVwZW5kID09PSB2b2lkIDAgKSBwcmVwZW5kID0gZmFsc2U7XG5cbiAgICB2YXIgc3ByaXRlID0gdGhpcztcblxuICAgIGlmIChzcHJpdGUuaXNNb3VudGVkKSB7XG4gICAgICByZXR1cm4gc3ByaXRlLm5vZGU7XG4gICAgfVxuXG4gICAgdmFyIG1vdW50Tm9kZSA9IHR5cGVvZiB0YXJnZXQgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpIDogdGFyZ2V0O1xuICAgIHZhciBub2RlID0gc3ByaXRlLnJlbmRlcigpO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG5cbiAgICBpZiAocHJlcGVuZCAmJiBtb3VudE5vZGUuY2hpbGROb2Rlc1swXSkge1xuICAgICAgbW91bnROb2RlLmluc2VydEJlZm9yZShub2RlLCBtb3VudE5vZGUuY2hpbGROb2Rlc1swXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1vdW50Tm9kZS5hcHBlbmRDaGlsZChub2RlKTtcbiAgICB9XG5cbiAgICB0aGlzLl9lbWl0dGVyLmVtaXQoRXZlbnRzLk1PVU5ULCBub2RlKTtcblxuICAgIHJldHVybiBub2RlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtFbGVtZW50fVxuICAgKi9cbiAgQnJvd3NlclNwcml0ZS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyICgpIHtcbiAgICByZXR1cm4gcGFyc2UodGhpcy5zdHJpbmdpZnkoKSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIERldGFjaCBzcHJpdGUgZnJvbSB0aGUgRE9NXG4gICAqL1xuICBCcm93c2VyU3ByaXRlLnByb3RvdHlwZS51bm1vdW50ID0gZnVuY3Rpb24gdW5tb3VudCAoKSB7XG4gICAgdGhpcy5ub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5ub2RlKTtcbiAgfTtcblxuICAvKipcbiAgICogVXBkYXRlIFVSTHMgaW4gc3ByaXRlIGFuZCB1c2FnZSBlbGVtZW50c1xuICAgKiBAcGFyYW0ge3N0cmluZ30gb2xkVXJsXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuZXdVcmxcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gYHRydWVgIC0gVVJMcyB3YXMgdXBkYXRlZCwgYGZhbHNlYCAtIHNwcml0ZSBpcyBub3QgbW91bnRlZFxuICAgKi9cbiAgQnJvd3NlclNwcml0ZS5wcm90b3R5cGUudXBkYXRlVXJscyA9IGZ1bmN0aW9uIHVwZGF0ZVVybHMkMSAob2xkVXJsLCBuZXdVcmwpIHtcbiAgICBpZiAoIXRoaXMuaXNNb3VudGVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIHVzYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5jb25maWcudXNhZ2VzVG9VcGRhdGUpO1xuXG4gICAgdXBkYXRlVXJscyhcbiAgICAgIHRoaXMubm9kZSxcbiAgICAgIHVzYWdlcyxcbiAgICAgICgoZ2V0VXJsV2l0aG91dEZyYWdtZW50KG9sZFVybCkpICsgXCIjXCIpLFxuICAgICAgKChnZXRVcmxXaXRob3V0RnJhZ21lbnQobmV3VXJsKSkgKyBcIiNcIilcbiAgICApO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoIEJyb3dzZXJTcHJpdGUucHJvdG90eXBlLCBwcm90b3R5cGVBY2Nlc3NvcnMgKTtcblxuICByZXR1cm4gQnJvd3NlclNwcml0ZTtcbn0oU3ByaXRlKSk7XG5cbnZhciByZWFkeSQxID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSkge1xuLyohXG4gICogZG9tcmVhZHkgKGMpIER1c3RpbiBEaWF6IDIwMTQgLSBMaWNlbnNlIE1JVFxuICAqL1xuIWZ1bmN0aW9uIChuYW1lLCBkZWZpbml0aW9uKSB7XG5cbiAgeyBtb2R1bGUuZXhwb3J0cyA9IGRlZmluaXRpb24oKTsgfVxuXG59KCdkb21yZWFkeScsIGZ1bmN0aW9uICgpIHtcblxuICB2YXIgZm5zID0gW10sIGxpc3RlbmVyXG4gICAgLCBkb2MgPSBkb2N1bWVudFxuICAgICwgaGFjayA9IGRvYy5kb2N1bWVudEVsZW1lbnQuZG9TY3JvbGxcbiAgICAsIGRvbUNvbnRlbnRMb2FkZWQgPSAnRE9NQ29udGVudExvYWRlZCdcbiAgICAsIGxvYWRlZCA9IChoYWNrID8gL15sb2FkZWR8XmMvIDogL15sb2FkZWR8Xml8XmMvKS50ZXN0KGRvYy5yZWFkeVN0YXRlKTtcblxuXG4gIGlmICghbG9hZGVkKVxuICB7IGRvYy5hZGRFdmVudExpc3RlbmVyKGRvbUNvbnRlbnRMb2FkZWQsIGxpc3RlbmVyID0gZnVuY3Rpb24gKCkge1xuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKGRvbUNvbnRlbnRMb2FkZWQsIGxpc3RlbmVyKTtcbiAgICBsb2FkZWQgPSAxO1xuICAgIHdoaWxlIChsaXN0ZW5lciA9IGZucy5zaGlmdCgpKSB7IGxpc3RlbmVyKCk7IH1cbiAgfSk7IH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGZuKSB7XG4gICAgbG9hZGVkID8gc2V0VGltZW91dChmbiwgMCkgOiBmbnMucHVzaChmbik7XG4gIH1cblxufSk7XG59KTtcblxudmFyIHNwcml0ZU5vZGVJZCA9ICdfX1NWR19TUFJJVEVfTk9ERV9fJztcbnZhciBzcHJpdGVHbG9iYWxWYXJOYW1lID0gJ19fU1ZHX1NQUklURV9fJztcbnZhciBpc1Nwcml0ZUV4aXN0cyA9ICEhd2luZG93W3Nwcml0ZUdsb2JhbFZhck5hbWVdO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLW11dGFibGUtZXhwb3J0c1xudmFyIHNwcml0ZTtcblxuaWYgKGlzU3ByaXRlRXhpc3RzKSB7XG4gIHNwcml0ZSA9IHdpbmRvd1tzcHJpdGVHbG9iYWxWYXJOYW1lXTtcbn0gZWxzZSB7XG4gIHNwcml0ZSA9IG5ldyBCcm93c2VyU3ByaXRlKHsgYXR0cnM6IHsgaWQ6IHNwcml0ZU5vZGVJZCB9IH0pO1xuICB3aW5kb3dbc3ByaXRlR2xvYmFsVmFyTmFtZV0gPSBzcHJpdGU7XG59XG5cbnZhciBsb2FkU3ByaXRlID0gZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogQ2hlY2sgZm9yIHBhZ2UgYWxyZWFkeSBjb250YWlucyBzcHJpdGUgbm9kZVxuICAgKiBJZiBmb3VuZCAtIGF0dGFjaCB0byBhbmQgcmV1c2UgaXQncyBjb250ZW50XG4gICAqIElmIG5vdCAtIHJlbmRlciBhbmQgbW91bnQgdGhlIG5ldyBzcHJpdGVcbiAgICovXG4gIHZhciBleGlzdGluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNwcml0ZU5vZGVJZCk7XG5cbiAgaWYgKGV4aXN0aW5nKSB7XG4gICAgc3ByaXRlLmF0dGFjaChleGlzdGluZyk7XG4gIH0gZWxzZSB7XG4gICAgc3ByaXRlLm1vdW50KGRvY3VtZW50LmJvZHksIHRydWUpO1xuICB9XG59O1xuXG5pZiAoZG9jdW1lbnQuYm9keSkge1xuICBsb2FkU3ByaXRlKCk7XG59IGVsc2Uge1xuICByZWFkeSQxKGxvYWRTcHJpdGUpO1xufVxuXG52YXIgc3ByaXRlJDEgPSBzcHJpdGU7XG5cbnJldHVybiBzcHJpdGUkMTtcblxufSkpKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCBTcHJpdGVTeW1ib2wgZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdmctYmFrZXItcnVudGltZS9icm93c2VyLXN5bWJvbC5qc1wiO1xuaW1wb3J0IHNwcml0ZSBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N2Zy1zcHJpdGUtbG9hZGVyL3J1bnRpbWUvYnJvd3Nlci1zcHJpdGUuYnVpbGQuanNcIjtcbnZhciBzeW1ib2wgPSBuZXcgU3ByaXRlU3ltYm9sKHtcbiAgXCJpZFwiOiBcImljb25cIixcbiAgXCJ1c2VcIjogXCJpY29uLXVzYWdlXCIsXG4gIFwidmlld0JveFwiOiBcIjAgMCAxMDI0IDEwMjRcIixcbiAgXCJjb250ZW50XCI6IFwiPHN5bWJvbCBjbGFzcz1cXFwiaWNvblxcXCIgdmlld0JveD1cXFwiMCAwIDEwMjQgMTAyNFxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgaWQ9XFxcImljb25cXFwiPjxkZWZzPjxzdHlsZSB0eXBlPVxcXCJ0ZXh0L2Nzc1xcXCI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD1cXFwiTTg1My4zMzMzMzMgMTAyNEwxNzAuNjY2NjY3IDEwMjRjLTkzLjg2NjY2NyAwLTE3MC42NjY2NjctNzYuOC0xNzAuNjY2NjY3LTE3MC42NjY2NjdMMCAxNzAuNjY2NjY3YzAtOTMuODY2NjY3IDc2LjgtMTcwLjY2NjY2NyAxNzAuNjY2NjY3LTE3MC42NjY2NjdsNjgyLjY2NjY2Njk5IDBjOTMuODY2NjY3IDAgMTcwLjY2NjY2NyA3Ni44IDE3MC42NjY2NjcwMSAxNzAuNjY2NjY3bDAgNjgyLjY2NjY2Njk5QzEwMjQgOTQ3LjIgOTQ3LjIgMTAyNCA4NTMuMzMzMzMzIDEwMjR6TTE3MC42NjY2NjcgODUuMzMzMzMzQzEyMy43MzMzMzMgODUuMzMzMzMzIDg1LjMzMzMzMyAxMjMuNzMzMzMzIDg1LjMzMzMzMyAxNzAuNjY2NjY3bDAgNjgyLjY2NjY2Njk5YzAgNDYuOTMzMzMzIDM4LjQgODUuMzMzMzMzIDg1LjMzMzMzMzAxIDg1LjMzMzMzMzAxbDY4Mi42NjY2NjY5OSAwYzQ2LjkzMzMzMyAwIDg1LjMzMzMzMy0zOC40IDg1LjMzMzMzMzAxLTg1LjMzMzMzMzAxTDkzOC42NjY2NjcgMTcwLjY2NjY2N2MwLTQ2LjkzMzMzMy0zOC40LTg1LjMzMzMzMy04NS4zMzMzMzMwMS04NS4zMzMzMzMwMUwxNzAuNjY2NjY3IDg1LjMzMzMzM3pcXFwiIHAtaWQ9XFxcIjExNTZcXFwiIC8+PHBhdGggZD1cXFwiTTk4MS4zMzMzMzMgMzQxLjMzMzMzM0w0Mi42NjY2NjcgMzQxLjMzMzMzM0MxNy4wNjY2NjcgMzQxLjMzMzMzMyAwIDMyNC4yNjY2NjcgMCAyOTguNjY2NjY3czE3LjA2NjY2Ny00Mi42NjY2NjcgNDIuNjY2NjY3LTQyLjY2NjY2N2w5MzguNjY2NjY2OTkgMGMyNS42IDAgNDIuNjY2NjY3IDE3LjA2NjY2NyA0Mi42NjY2NjcwMSA0Mi42NjY2NjdTMTAwNi45MzMzMzMgMzQxLjMzMzMzMyA5ODEuMzMzMzMzIDM0MS4zMzMzMzN6XFxcIiBwLWlkPVxcXCIxMTU3XFxcIiAvPjxwYXRoIGQ9XFxcIk0xNzAuNjY2NjY3IDE3MC42NjY2NjdtLTQyLjY2NjY2NyAwYTEgMSAwIDEgMCA4NS4zMzMzMzMgMCAxIDEgMCAxIDAtODUuMzMzMzMzIDBaXFxcIiBwLWlkPVxcXCIxMTU4XFxcIiAvPjxwYXRoIGQ9XFxcIk0xNzAuNjY2NjY3IDIzNC42NjY2NjdDMTM2LjUzMzMzMyAyMzQuNjY2NjY3IDEwNi42NjY2NjcgMjA0LjggMTA2LjY2NjY2NyAxNzAuNjY2NjY3UzEzNi41MzMzMzMgMTA2LjY2NjY2NyAxNzAuNjY2NjY3IDEwNi42NjY2NjcgMjM0LjY2NjY2NyAxMzYuNTMzMzMzIDIzNC42NjY2NjcgMTcwLjY2NjY2NyAyMDQuOCAyMzQuNjY2NjY3IDE3MC42NjY2NjcgMjM0LjY2NjY2N3pNMTcwLjY2NjY2NyAxNDkuMzMzMzMzQzE1Ny44NjY2NjcgMTQ5LjMzMzMzMyAxNDkuMzMzMzMzIDE1Ny44NjY2NjcgMTQ5LjMzMzMzMyAxNzAuNjY2NjY3UzE1Ny44NjY2NjcgMTkyIDE3MC42NjY2NjcgMTkyIDE5MiAxODMuNDY2NjY3IDE5MiAxNzAuNjY2NjY3IDE4My40NjY2NjcgMTQ5LjMzMzMzMyAxNzAuNjY2NjY3IDE0OS4zMzMzMzN6XFxcIiBwLWlkPVxcXCIxMTU5XFxcIiAvPjxwYXRoIGQ9XFxcIk0yOTguNjY2NjY3IDE3MC42NjY2NjdtLTQyLjY2NjY2NyAwYTEgMSAwIDEgMCA4NS4zMzMzMzMgMCAxIDEgMCAxIDAtODUuMzMzMzMzIDBaXFxcIiBwLWlkPVxcXCIxMTYwXFxcIiAvPjxwYXRoIGQ9XFxcIk0yOTguNjY2NjY3IDIzNC42NjY2NjdDMjY0LjUzMzMzMyAyMzQuNjY2NjY3IDIzNC42NjY2NjcgMjA0LjggMjM0LjY2NjY2NyAxNzAuNjY2NjY3UzI2NC41MzMzMzMgMTA2LjY2NjY2NyAyOTguNjY2NjY3IDEwNi42NjY2NjcgMzYyLjY2NjY2NyAxMzYuNTMzMzMzIDM2Mi42NjY2NjcgMTcwLjY2NjY2NyAzMzIuOCAyMzQuNjY2NjY3IDI5OC42NjY2NjcgMjM0LjY2NjY2N3pNMjk4LjY2NjY2NyAxNDkuMzMzMzMzQzI4NS44NjY2NjcgMTQ5LjMzMzMzMyAyNzcuMzMzMzMzIDE1Ny44NjY2NjcgMjc3LjMzMzMzMyAxNzAuNjY2NjY3UzI4NS44NjY2NjcgMTkyIDI5OC42NjY2NjcgMTkyIDMyMCAxODMuNDY2NjY3IDMyMCAxNzAuNjY2NjY3IDMxMS40NjY2NjcgMTQ5LjMzMzMzMyAyOTguNjY2NjY3IDE0OS4zMzMzMzN6XFxcIiBwLWlkPVxcXCIxMTYxXFxcIiAvPjxwYXRoIGQ9XFxcIk00MjYuNjY2NjY3IDE3MC42NjY2NjdtLTQyLjY2NjY2NyAwYTEgMSAwIDEgMCA4NS4zMzMzMzMgMCAxIDEgMCAxIDAtODUuMzMzMzMzIDBaXFxcIiBwLWlkPVxcXCIxMTYyXFxcIiAvPjxwYXRoIGQ9XFxcIk00MjYuNjY2NjY3IDIzNC42NjY2NjdDMzkyLjUzMzMzMyAyMzQuNjY2NjY3IDM2Mi42NjY2NjcgMjA0LjggMzYyLjY2NjY2NyAxNzAuNjY2NjY3UzM5Mi41MzMzMzMgMTA2LjY2NjY2NyA0MjYuNjY2NjY3IDEwNi42NjY2NjdzNjQgMjkuODY2NjY3IDY0IDY0UzQ2MC44IDIzNC42NjY2NjcgNDI2LjY2NjY2NyAyMzQuNjY2NjY3ek00MjYuNjY2NjY3IDE0OS4zMzMzMzNDNDEzLjg2NjY2NyAxNDkuMzMzMzMzIDQwNS4zMzMzMzMgMTU3Ljg2NjY2NyA0MDUuMzMzMzMzIDE3MC42NjY2NjdTNDEzLjg2NjY2NyAxOTIgNDI2LjY2NjY2NyAxOTJzMjEuMzMzMzMzLTguNTMzMzMzIDIxLjMzMzMzMy0yMS4zMzMzMzNTNDM5LjQ2NjY2NyAxNDkuMzMzMzMzIDQyNi42NjY2NjcgMTQ5LjMzMzMzM3pcXFwiIHAtaWQ9XFxcIjExNjNcXFwiIC8+PC9zeW1ib2w+XCJcbn0pO1xudmFyIHJlc3VsdCA9IHNwcml0ZS5hZGQoc3ltYm9sKTtcbmV4cG9ydCBkZWZhdWx0IHN5bWJvbCIsImltcG9ydCBcIi4vaWNvbi5zdmdcIjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgJy4vYW5pbWF0ZS5jc3MnO1xyXG5pbXBvcnQgJy4vY29tbW9uLmNzcyc7XHJcbmltcG9ydCAnLi9pY29uLmNzcyc7XHJcbmltcG9ydCAnLi90b29sLWJhci5jc3MnO1xyXG5pbXBvcnQgJy4vd2luZG93LmNzcyc7XHJcblxyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgRXZlbnRCdXMgZnJvbSAnLi4vY29yZS9ldmVudC1idXMnO1xyXG5pbXBvcnQgeyBKU09OT2JqZWN0IH0gZnJvbSAnLi4vY29yZS9oZWxwZXIvdHlwZSc7XHJcbmltcG9ydCBFbnRyeSBmcm9tICcuLi9lbnRyeSc7XHJcblxyXG4vKipcclxuICog57uE5Lu257G777yM5omA5pyJ55qE57uE5Lu26YO95b+F6aG757un5om/6K+l57G7XHJcbiAqIEB0ZW1wbGF0ZSBUT3B0aW9uIOe7hOS7tuWPguaVsFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQ29tcG9uZW50PFRPcHRpb24+IHtcclxuICAgIC8qKlxyXG4gICAgICog5YWl5Y+j5a+56LGhXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBlbnRyeTogRW50cnkgPSBFbnRyeS5nZXRJbnN0YW5jZSgpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5LqL5Lu25oC757q/5a+56LGhXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBldmVudEJ1czogRXZlbnRCdXMgPSBFdmVudEJ1cy5nZXRJbnN0YW5jZSgpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog57uE5Lu25ZSv5LiA5qCH6K+GXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3ltYm9sOiBzeW1ib2wgPSBTeW1ib2woXCJtb25rc291bFwiKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWkhOeQhuWIneWni+S8oOWFpeWPguaVsFxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMg5Y+v6YCJ5Y+C5pWwXHJcbiAgICAgKiBAcmV0dXJucyB2b2lkXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IGhhbmRsZXJPcHRpb25zKG9wdGlvbnM6IFRPcHRpb24pOiB2b2lkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Y+R6YCB5LqL5Lu2XHJcbiAgICAgKiBAcGFyYW0gZXZlbnROYW1lIOS6i+S7tuWQjeensFxyXG4gICAgICogQHBhcmFtIG1lc3NhZ2Ug5raI5oGvXHJcbiAgICAgKiBAcmV0dXJucyB2b2lkXHJcbiAgICAgKi9cclxuICAgIHNlbmRFdmVudChldmVudE5hbWU6IHN0cmluZywgbWVzc2FnZTogSlNPTk9iamVjdCA9IHt9KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ldmVudEJ1cy5lbWl0KGV2ZW50TmFtZSwge1xyXG4gICAgICAgICAgICBkYXRhc2V0OiBtZXNzYWdlLFxyXG4gICAgICAgICAgICBldmVudFRhcmdldDoge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogZXZlbnROYW1lLFxyXG4gICAgICAgICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnZhbHVlT2YoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorqHnrpflpJrlsYLltYzlpZfkuK3nsbvlnovlsZ7mgKflgLxcclxuICAgICAqIEBwYXJhbSBrZXkg6Lev5b6E77yM5qC85byP77yad2luZG93L3Rvb2xCYXIvc2l6ZVxyXG4gICAgICogQHBhcmFtIGRlZmF1bHRWYWx1ZSDpu5jorqTlgLxcclxuICAgICAqIEBwYXJhbSBbc3Rhck9iamVjdF0g6LW35aeL5a+56LGhXHJcbiAgICAgKiBAcmV0dXJucyBhbnkgXHJcbiAgICAgKi9cclxuICAgIGZyb21KU09OUGF0aChrZXk6IHN0cmluZywgZGVmYXVsdFZhbHVlOiBhbnksIHN0YXJPYmplY3Q6IEpTT05PYmplY3QgPSB0aGlzLmVudHJ5KTogYW55IHtcclxuICAgICAgICBpZiAoa2V5LmluZGV4T2YoXCIvXCIpID4gLTEpIHtcclxuICAgICAgICAgICAgY29uc3Qga2V5cyA9IGtleS5zcGxpdChcIi9cIik7XHJcbiAgICAgICAgICAgIGxldCB0aWVyID0gdGhpcy5mcm9tSlNPTlBhdGgoa2V5c1swXSwgZGVmYXVsdFZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKCF0aWVyKSByZXR1cm4gZGVmYXVsdFZhbHVlO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChpICsgMSA8IGtleXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGllciA9IHRoaXMuZnJvbUpTT05QYXRoKGtleXNbaSArIDFdLCBkZWZhdWx0VmFsdWUsIHRpZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gdGllcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGllcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSByZXR1cm4gc3Rhck9iamVjdFtrZXldID8/IGRlZmF1bHRWYWx1ZTtcclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiDlhoXnva7lm77moIdcclxuICovXHJcbmV4cG9ydCBjb25zdCBlbnVtIFN1cHBvcnRJY29uIHtcclxuICAgIC8qKlxyXG4gICAgICog6buY6K6k5Zu+5qCHXHJcbiAgICAgKi9cclxuICAgIElDT04gPSBcImljb25cIlxyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIOm7mOiupOWbvuagh1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfSUNPTjogc3RyaW5nID0gU3VwcG9ydEljb24uSUNPTjtcclxuXHJcbi8qKlxyXG4gKiDpu5jorqTlm77moIfpopzoibJcclxuICovXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX0lDT05fQ09MT1I6IHN0cmluZyA9IFwiIzAwMDAwMFwiO1xyXG5cclxuLyoqXHJcbiAqIOm7mOiupOWbvuagh+Wkp+Wwj1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfSUNPTl9TSVpFOiBudW1iZXIgPSAxNDsiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLyc7XHJcbmltcG9ydCB7IGlzQ29sb3IsIGlzTm9FbXB0eU9yTnVsbCwgaXNQc3RJbnQgfSBmcm9tICcuLi8uLi9jb3JlL2RlY29yYXRvci9wcm9wZXJ0eS1kZWNvcmF0b3InO1xyXG5pbXBvcnQgeyBhZGRDU1NDbGFzc2VzLCBjcmVhdGVEaXZFbGVtZW50LCBjcmVhdGVTdmdFbGVtZW50IH0gZnJvbSAnLi4vLi4vY29yZS9oZWxwZXIvZWxlbWVudC1oZWxwZXInO1xyXG5pbXBvcnQgeyBERUZBVUxUX0lDT04sIERFRkFVTFRfSUNPTl9DT0xPUiwgREVGQVVMVF9JQ09OX1NJWkUgfSBmcm9tICcuL2NvbnN0JztcclxuaW1wb3J0IFVJQ29tcG9uZW50IGZyb20gJy4uL3VpLWNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbXBvbmVudEVsZW1lbnQgfSBmcm9tICcuLi91aS1jb21wb25lbnQvdHlwZSc7XHJcbmltcG9ydCB7IGhhbmRsZXJPcHRpb25zIH0gZnJvbSAnLi9wYXJ0aWFsJztcclxuaW1wb3J0IHsgVUlJY29uT3B0aW9uIH0gZnJvbSAnLi90eXBlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJSUNvbiBleHRlbmRzIENvbXBvbmVudDxVSUljb25PcHRpb24+IGltcGxlbWVudHMgVUlDb21wb25lbnQ8VUlJY29uT3B0aW9uPiB7XHJcbiAgICAvKipcclxuICAgICog5p6E6YCg5Ye95pWwXHJcbiAgICAqIEBwYXJhbSBvcHRpb25zIOWPr+mAieWPguaVsFxyXG4gICAgKi9cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihvcHRpb25zOiBVSUljb25PcHRpb24pIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlck9wdGlvbnMob3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlpITnkIbliJ3lp4vkvKDlhaXlj4LmlbBcclxuICAgICAqIEBwYXJhbSBvcHRpb25zIOWPr+mAieWPguaVsFxyXG4gICAgICogQHJldHVybnMgdm9pZFxyXG4gICAgICovXHJcbiAgICBoYW5kbGVyT3B0aW9uczogKG9wdGlvbnM6IFVJSWNvbk9wdGlvbikgPT4gdm9pZCA9IGhhbmRsZXJPcHRpb25zO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Zu+5qCH5ZCN56ewXHJcbiAgICAgKi9cclxuICAgIEBpc05vRW1wdHlPck51bGwoKVxyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZyA9IERFRkFVTFRfSUNPTjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWbvuagh+minOiJslxyXG4gICAgICovXHJcbiAgICBAaXNDb2xvcigpXHJcbiAgICBwdWJsaWMgY29sb3I6IHN0cmluZyA9IERFRkFVTFRfSUNPTl9DT0xPUjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWbvuagh+Wkp+Wwj1xyXG4gICAgICovXHJcbiAgICBAaXNQc3RJbnQoKVxyXG4gICAgcHVibGljIHNpemU6IG51bWJlciA9IERFRkFVTFRfSUNPTl9TSVpFO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yib5bu657uE5Lu25YWD57Sg5a+56LGhXHJcbiAgICAgKiBAcmV0dXJucyBDb21wb25lbnRFbGVtZW50XHJcbiAgICAgKi9cclxuICAgIHByZXNlbnQoKTogQ29tcG9uZW50RWxlbWVudCB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZURpdkVsZW1lbnQoKTtcclxuXHJcbiAgICAgICAgYWRkQ1NTQ2xhc3NlcyhlbGVtZW50LFxyXG4gICAgICAgICAgICBcImljb25cIik7XHJcblxyXG4gICAgICAgIGNvbnN0IHN2Z0VsZW1lbnQgPSBjcmVhdGVTdmdFbGVtZW50KHRoaXMubmFtZSk7XHJcbiAgICAgICAgc3ZnRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBgJHt0aGlzLmVudHJ5LnByZWZpeH1zdmdgKTtcclxuICAgICAgICBzdmdFbGVtZW50LnN0eWxlLmZvbnRTaXplID0gYCR7dGhpcy5zaXplfXB4YDtcclxuICAgICAgICBzdmdFbGVtZW50LnN0eWxlLmNvbG9yID0gYCR7dGhpcy5jb2xvcn1gO1xyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoc3ZnRWxlbWVudCk7XHJcblxyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFVJSUNvbiBmcm9tICcuJztcclxuaW1wb3J0IHsgVUlJY29uT3B0aW9uIH0gZnJvbSAnLi90eXBlJztcclxuXHJcbi8qKlxyXG4gKiDlpITnkIbliJ3lp4vkvKDlhaXlj4LmlbBcclxuICogQHBhcmFtIG9wdGlvbnMg5Y+v6YCJ5Y+C5pWwXHJcbiAqIEByZXR1cm5zIHZvaWRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVyT3B0aW9ucyh0aGlzOiBVSUlDb24sIG9wdGlvbnM6IFVJSWNvbk9wdGlvbik6IHZvaWQge1xyXG4gICAgdGhpcy5uYW1lID0gb3B0aW9ucz8ubmFtZSA/PyB0aGlzLm5hbWU7XHJcbiAgICB0aGlzLmNvbG9yID0gb3B0aW9ucz8uY29sb3IgPz8gdGhpcy5jb2xvcjtcclxuICAgIHRoaXMuc2l6ZSA9IG9wdGlvbnM/LnNpemUgPz8gdGhpcy5zaXplO1xyXG59IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8nO1xyXG5pbXBvcnQgeyBjb21iaW5lLCBpc0NvbG9yLCBpc1BzdE51bWJlciB9IGZyb20gJy4uLy4uL2NvcmUvZGVjb3JhdG9yL3Byb3BlcnR5LWRlY29yYXRvcic7XHJcbmltcG9ydCB7IGFkZENTU0NsYXNzZXMsIGFkZENTU1N0eWxlcywgY3JlYXRlRGl2RWxlbWVudCB9IGZyb20gJy4uLy4uL2NvcmUvaGVscGVyL2VsZW1lbnQtaGVscGVyJztcclxuaW1wb3J0IHsgY2hlY2tDb2xvciwgY2hlY2tOb0VtcHR5T3JOdWxsLCBjaGVja1BzdEludCwgY2hlY2tTdHJpbmcgfSBmcm9tICcuLi8uLi9jb3JlL3ZhbGlkYXRvcic7XHJcbmltcG9ydCB7IERFRkFVTFRfVE9PTEJBUl9CQUNLR1JPVU5EX0NPTE9SLCBERUZBVUxUX1RPT0xCQVJfSEVJR0hUIH0gZnJvbSAnLi4vLi4vZW50cnkvY29uc3QnO1xyXG5pbXBvcnQgVUlDb21wb25lbnQgZnJvbSAnLi4vdWktY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tcG9uZW50RWxlbWVudCB9IGZyb20gJy4uL3VpLWNvbXBvbmVudC90eXBlJztcclxuaW1wb3J0IFVJSUNvbiBmcm9tICcuLi91aS1pY29uJztcclxuaW1wb3J0IHsgVUlJY29uT3B0aW9uIH0gZnJvbSAnLi4vdWktaWNvbi90eXBlJztcclxuaW1wb3J0IHsgQWxpZ24gfSBmcm9tICcuL2NvbnN0JztcclxuaW1wb3J0IHsgaGFuZGxlck9wdGlvbnMgfSBmcm9tICcuL3BhcnRpYWwnO1xyXG5pbXBvcnQgeyBUaXRsZUJhck9wdGlvbiwgVUlUb29sQmFyT3B0aW9uIH0gZnJvbSAnLi90eXBlJztcclxuXHJcbi8qKlxyXG4gKiDlt6XlhbfmoI/nsbtcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJVG9vbEJhciBleHRlbmRzIENvbXBvbmVudDxVSVRvb2xCYXJPcHRpb24+IGltcGxlbWVudHMgVUlDb21wb25lbnQ8VUlUb29sQmFyT3B0aW9uPiB7XHJcbiAgICAvKipcclxuICAgICAqIOaehOmAoOWHveaVsFxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMg5Y+v6YCJ5Y+C5pWwXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihvcHRpb25zOiBVSVRvb2xCYXJPcHRpb24pIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlck9wdGlvbnMob3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlpITnkIbliJ3lp4vkvKDlhaXlj4LmlbBcclxuICAgICAqIEBwYXJhbSBvcHRpb25zIOWPr+mAieWPguaVsFxyXG4gICAgICogQHJldHVybnMgdm9pZFxyXG4gICAgICovXHJcbiAgICBoYW5kbGVyT3B0aW9uczogKG9wdGlvbnM6IFVJVG9vbEJhck9wdGlvbikgPT4gdm9pZCA9IGhhbmRsZXJPcHRpb25zO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5qCH6aKYXHJcbiAgICAgKi9cclxuICAgIEBjb21iaW5lKHtcclxuICAgICAgICBsYWJlbDogY2hlY2tTdHJpbmcsXHJcbiAgICAgICAgY29sb3I6IGNoZWNrQ29sb3IsXHJcbiAgICAgICAgYWxpZ246IFtBbGlnbi5MRUZULCBBbGlnbi5DRU5URVIsIEFsaWduLlJJR0hUXSxcclxuICAgICAgICBmb250U2l6ZTogY2hlY2tQc3RJbnRcclxuICAgIH0sIGZhbHNlKVxyXG4gICAgcHVibGljIHRpdGxlQmFyOiBUaXRsZUJhck9wdGlvbiB8IGZhbHNlID0gPFRpdGxlQmFyT3B0aW9uIHwgZmFsc2U+dGhpcy5mcm9tSlNPTlBhdGgoXCJ3aW5kb3cvdG9vbEJhci90aXRsZUJhclwiLCBmYWxzZSk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpu5jorqTpq5jluqZcclxuICAgICAqL1xyXG4gICAgQGlzUHN0TnVtYmVyKClcclxuICAgIHB1YmxpYyBoZWlnaHQ6IG51bWJlciA9IHRoaXMuZnJvbUpTT05QYXRoKFwid2luZG93L3Rvb2xCYXIvaGVpZ2h0XCIsIERFRkFVTFRfVE9PTEJBUl9IRUlHSFQpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6IOM5pmv6aKc6ImyXHJcbiAgICAgKi9cclxuICAgIEBpc0NvbG9yKClcclxuICAgIHB1YmxpYyBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZyA9IHRoaXMuZnJvbUpTT05QYXRoKFwid2luZG93L3Rvb2xCYXIvYmFja2dyb3VuZENvbG9yXCIsIERFRkFVTFRfVE9PTEJBUl9CQUNLR1JPVU5EX0NPTE9SKVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Zu+5qCHXHJcbiAgICAgKi9cclxuICAgIEBjb21iaW5lKHtcclxuICAgICAgICBuYW1lOiBjaGVja05vRW1wdHlPck51bGwsXHJcbiAgICAgICAgc2l6ZTogY2hlY2tQc3RJbnQsXHJcbiAgICAgICAgY29sb3I6IGNoZWNrQ29sb3JcclxuICAgIH0sIGZhbHNlKVxyXG4gICAgcHVibGljIGljb246IFVJSWNvbk9wdGlvbiB8IGZhbHNlID0gPFVJSWNvbk9wdGlvbiB8IGZhbHNlPnRoaXMuZnJvbUpTT05QYXRoKFwid2luZG93L3Rvb2xCYXIvaWNvblwiLCBmYWxzZSk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJvlu7rnu4Tku7blhYPntKDlr7nosaFcclxuICAgICAqIEByZXR1cm5zIENvbXBvbmVudEVsZW1lbnRcclxuICAgICAqL1xyXG4gICAgcHJlc2VudCgpOiBDb21wb25lbnRFbGVtZW50IHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRlRGl2RWxlbWVudCgpO1xyXG5cclxuICAgICAgICBhZGRDU1NDbGFzc2VzKGVsZW1lbnQsXHJcbiAgICAgICAgICAgIFwidG9vbC1iYXJcIixcclxuICAgICAgICAgICAgXCJmbGV4LWJveFwiLFxyXG4gICAgICAgICAgICBcInZlcnRpY2FsLW1pZGRsZVwiKTtcclxuXHJcbiAgICAgICAgYWRkQ1NTU3R5bGVzKGVsZW1lbnQsXHJcbiAgICAgICAgICAgIDxDU1NTdHlsZURlY2xhcmF0aW9uPntcclxuICAgICAgICAgICAgICAgIGhlaWdodDogYCR7dGhpcy5oZWlnaHR9cHhgLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDov73liqDlrZDlhYPntKBcclxuICAgICAqIEBwYXJhbSBlbGVtZW50IOeItuWFg+e0oFxyXG4gICAgICogQHJldHVybnMgdm9pZFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGFwcGVuZENoaWxkKGVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuaWNvbiAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgY29uc3QgdWlJY29uID0gbmV3IFVJSUNvbih0aGlzLmljb24pO1xyXG4gICAgICAgICAgICBjb25zdCB1aUljb25FbGVtZW50ID0gdWlJY29uLnByZXNlbnQoKTtcclxuICAgICAgICAgICAgYWRkQ1NTQ2xhc3Nlcyh1aUljb25FbGVtZW50LCBcInRvb2wtYmFyLWljb25cIik7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodWlJY29uRWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy50aXRsZUJhciAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgY29uc3QgdGl0bGVCYXJFbGVtZW50ID0gY3JlYXRlRGl2RWxlbWVudCgpO1xyXG5cclxuICAgICAgICAgICAgYWRkQ1NTQ2xhc3Nlcyh0aXRsZUJhckVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICBcInRpdGxlLWJhclwiLFxyXG4gICAgICAgICAgICAgICAgXCJmbGV4LWl0ZW1cIik7XHJcblxyXG4gICAgICAgICAgICBhZGRDU1NTdHlsZXModGl0bGVCYXJFbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgPENTU1N0eWxlRGVjbGFyYXRpb24+e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBgJHt0aGlzLnRpdGxlQmFyLmNvbG9yfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBgJHt0aGlzLnRpdGxlQmFyLmFsaWdufWAsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IGAke3RoaXMudGl0bGVCYXIuZm9udFNpemV9cHhgXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRpdGxlQmFyRWxlbWVudC50ZXh0Q29udGVudCA9IDxzdHJpbmc+dGhpcy50aXRsZUJhci5sYWJlbDtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGl0bGVCYXJFbGVtZW50KTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFVJVG9vbEJhciBmcm9tICcuLyc7XHJcbmltcG9ydCB7IFVJVG9vbEJhck9wdGlvbiwgVGl0bGVCYXJPcHRpb24gfSBmcm9tICcuL3R5cGUnO1xyXG5pbXBvcnQgeyBVSUljb25PcHRpb24gfSBmcm9tICcuLi91aS1pY29uL3R5cGUnO1xyXG5cclxuLyoqXHJcbiAqIOWkhOeQhuWIneWni+S8oOWFpeWPguaVsFxyXG4gKiBAcGFyYW0gb3B0aW9ucyDlj6/pgInlj4LmlbBcclxuICogQHJldHVybnMgdm9pZFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZXJPcHRpb25zKHRoaXM6IFVJVG9vbEJhciwgb3B0aW9uczogVUlUb29sQmFyT3B0aW9uKTogdm9pZCB7XHJcbiAgICB0aGlzLmhlaWdodCA9IG9wdGlvbnM/LmhlaWdodCA/PyB0aGlzLmhlaWdodDtcclxuICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gb3B0aW9ucz8uYmFja2dyb3VuZENvbG9yID8/IHRoaXMuYmFja2dyb3VuZENvbG9yO1xyXG4gICAgdGhpcy50aXRsZUJhciA9IDxUaXRsZUJhck9wdGlvbiB8IGZhbHNlPm9wdGlvbnM/LnRpdGxlQmFyID8/IHRoaXMudGl0bGVCYXI7XHJcbiAgICB0aGlzLmljb24gPSA8VUlJY29uT3B0aW9uIHwgZmFsc2U+b3B0aW9ucz8uaWNvbiA/PyB0aGlzLmljb247XHJcbn0iLCIvKipcclxuICog6L655qGG5qC35byPXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZW51bSBCb3JkZXJTdHlsZSB7XHJcbiAgICAvKipcclxuICAgICAqIOeCueeKtlxyXG4gICAgICovXHJcbiAgICBET1RURUQgPSBcImRvdHRlZFwiLFxyXG4gICAgLyoqXHJcbiAgICAgKiDomZrnur9cclxuICAgICAqL1xyXG4gICAgREFTSEVEID0gXCJkYXNoZWRcIixcclxuICAgIC8qKlxyXG4gICAgICog5a6e57q/XHJcbiAgICAgKi9cclxuICAgIFNPTElEID0gXCJzb2xpZFwiLFxyXG4gICAgLyoqXHJcbiAgICAgKiDlj4znur9cclxuICAgICAqL1xyXG4gICAgRE9VQkxFID0gXCJkb3VibGVcIlxyXG59XHJcblxyXG4vKipcclxuICog5pSv5oyB5Yqo55S7XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZW51bSBBbmltYXRpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiDnvKnmlL5cclxuICAgICAqL1xyXG4gICAgWk9PTSA9IFwiem9vbVwiXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlgY/np7tcclxuICovXHJcbmV4cG9ydCBjb25zdCBlbnVtIE9mZnNldCB7XHJcbiAgICAvKipcclxuICAgICAqIOS4remXtFxyXG4gICAgICovXHJcbiAgICBDRU5URVIgPSBcImNlbnRlclwiLFxyXG4gICAgLyoqXHJcbiAgICAgKiDpobbpg6jkuK3pl7RcclxuICAgICAqL1xyXG4gICAgVE9QX0NFTlRFUiA9IFwidG9wLWNlbnRlclwiLFxyXG4gICAgLyoqXHJcbiAgICAgKiDlupXpg6jkuK3pl7RcclxuICAgICAqL1xyXG4gICAgQk9UVE9NX0NFTlRFUiA9IFwiYm90dG9tLWNlbnRlclwiLFxyXG4gICAgLyoqXHJcbiAgICAgKiDlt6bkuIrop5JcclxuICAgICAqL1xyXG4gICAgTEVGVF9UT1AgPSBcImxlZnQtdG9wXCIsXHJcbiAgICAvKipcclxuICAgICAqIOW3puS4remXtFxyXG4gICAgICovXHJcbiAgICBMRUZUX01JRERMRSA9IFwibGVmdC1taWRkbGVcIixcclxuICAgIC8qKlxyXG4gICAgICog5bem5LiL6KeSXHJcbiAgICAgKi9cclxuICAgIExFRlRfQk9UVE9NID0gXCJsZWZ0LWJvdHRvbVwiLFxyXG4gICAgLyoqXHJcbiAgICAgKiDlj7PkuIrop5JcclxuICAgICAqL1xyXG4gICAgUklHSFRfVE9QID0gXCJyaWdodC10b3BcIixcclxuICAgIC8qKlxyXG4gICAgICog5Y+z5Lit6Ze0XHJcbiAgICAgKi9cclxuICAgIFJJR0hUX01JRERMRSA9IFwicmlnaHQtbWlkZGxlXCIsXHJcbiAgICAvKipcclxuICAgICAqIOWPs+S4i+inklxyXG4gICAgICovXHJcbiAgICBSSUdIVF9CT1RUT00gPSBcInJpZ2h0LWJvdHRvbVwiXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDpu5jorqTmnIDlsI/lrr3luqZcclxuICovXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX01JTl9XSURUSDogbnVtYmVyID0gMjAwO1xyXG5cclxuLyoqXHJcbiAqIOm7mOiupOacgOWwj+mrmOW6plxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfTUlOX0hFSUdIVDogbnVtYmVyID0gMjAwO1xyXG5cclxuLyoqXHJcbiAqIOm7mOiupOacgOWkp+WuveW6plxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfTUFYX1dJRFRIOiBudW1iZXIgPSBpbm5lcldpZHRoO1xyXG5cclxuLyoqXHJcbiAqIOm7mOiupOacgOWkp+mrmOW6plxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfTUFYX0hFSUdIVDogbnVtYmVyID0gaW5uZXJIZWlnaHQ7XHJcblxyXG4vKipcclxuICog6buY6K6k6L655qGG5a695bqmXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9CT1JERVJfV0lEVEg6IG51bWJlciA9IDE7XHJcblxyXG4vKipcclxuICog6buY6K6k6L655qGG5qC35byPXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9CT1JERVJfU1RZTEU6IEJvcmRlclN0eWxlID0gQm9yZGVyU3R5bGUuU09MSUQ7XHJcblxyXG4vKipcclxuICog6buY6K6k6L655qGG6aKc6ImyXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9CT1JERVJfQ09MT1I6IHN0cmluZyA9IFwiIzNiYWNlZFwiO1xyXG5cclxuLyoqXHJcbiAqIOm7mOiupOi+ueahhuWchuinklxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfQk9SREVSX1JBRElVUzogbnVtYmVyID0gNDsiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLyc7XHJcbmltcG9ydCB7XHJcbiAgICBjb21iaW5lLFxyXG4gICAgaW5WYWx1ZU9wdGlvbnMsXHJcbiAgICBpc0Jvb2xlYW4sXHJcbiAgICBpc0NvbG9yLFxyXG4gICAgaXNOb0VtcHR5T3JOdWxsLFxyXG4gICAgaXNQc3ROdW1iZXIsXHJcbn0gZnJvbSAnLi4vLi4vY29yZS9kZWNvcmF0b3IvcHJvcGVydHktZGVjb3JhdG9yJztcclxuaW1wb3J0IHtcclxuICAgIGFkZENTU0NsYXNzZXMsXHJcbiAgICBhZGRDU1NTdHlsZXMsXHJcbiAgICBjcmVhdGVEaXZFbGVtZW50LFxyXG4gICAgaGFzQ1NTQ2xhc3MsXHJcbiAgICByZW1vdmVDU1NDbGFzc2VzLFxyXG59IGZyb20gJy4uLy4uL2NvcmUvaGVscGVyL2VsZW1lbnQtaGVscGVyJztcclxuaW1wb3J0IHsgY2hlY2tDb2xvciwgY2hlY2tOb0VtcHR5T3JOdWxsLCBjaGVja1BzdEludCwgY2hlY2tQc3ROdW1iZXIsIGNoZWNrU3RyaW5nIH0gZnJvbSAnLi4vLi4vY29yZS92YWxpZGF0b3InO1xyXG5pbXBvcnQgeyBERUZBVUxUX1dJTkRPV19CQUNLR1JPVU5EX0NPTE9SLCBERUZBVUxUX1dJTkRPV19IRUlHSFQsIERFRkFVTFRfV0lORE9XX1dJRFRIIH0gZnJvbSAnLi4vLi4vZW50cnkvY29uc3QnO1xyXG5pbXBvcnQgVUlDb21wb25lbnQgZnJvbSAnLi4vdWktY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tcG9uZW50RWxlbWVudCB9IGZyb20gJy4uL3VpLWNvbXBvbmVudC90eXBlJztcclxuaW1wb3J0IFVJVG9vbEJhciBmcm9tICcuLi91aS10b29sLWJhcic7XHJcbmltcG9ydCB7IEFsaWduIH0gZnJvbSAnLi4vdWktdG9vbC1iYXIvY29uc3QnO1xyXG5pbXBvcnQgeyBVSVRvb2xCYXJPcHRpb24gfSBmcm9tICcuLi91aS10b29sLWJhci90eXBlJztcclxuaW1wb3J0IHtcclxuICAgIEFuaW1hdGlvbixcclxuICAgIEJvcmRlclN0eWxlLFxyXG4gICAgREVGQVVMVF9CT1JERVJfQ09MT1IsXHJcbiAgICBERUZBVUxUX0JPUkRFUl9SQURJVVMsXHJcbiAgICBERUZBVUxUX0JPUkRFUl9TVFlMRSxcclxuICAgIERFRkFVTFRfQk9SREVSX1dJRFRILFxyXG4gICAgREVGQVVMVF9NQVhfSEVJR0hULFxyXG4gICAgREVGQVVMVF9NQVhfV0lEVEgsXHJcbiAgICBERUZBVUxUX01JTl9IRUlHSFQsXHJcbiAgICBERUZBVUxUX01JTl9XSURUSCxcclxufSBmcm9tICcuL2NvbnN0JztcclxuaW1wb3J0IHsgaGFuZGxlck9wdGlvbnMgfSBmcm9tICcuL3BhcnRpYWwnO1xyXG5pbXBvcnQgeyBCb3JkZXJPcHRpb24sIFVJV2luZG93T3B0aW9uIH0gZnJvbSAnLi90eXBlJztcclxuXHJcbi8qKlxyXG4gKiDnqpflj6Pnu4Tku7bnsbtcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJV2luZG93IGV4dGVuZHMgQ29tcG9uZW50PFVJV2luZG93T3B0aW9uPiBpbXBsZW1lbnRzIFVJQ29tcG9uZW50PFVJV2luZG93T3B0aW9uPiB7XHJcbiAgICAvKipcclxuICAgICAqIOaehOmAoOWHveaVsFxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMg5Y+v6YCJ5Y+C5pWwXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihvcHRpb25zOiBVSVdpbmRvd09wdGlvbikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuaWQgPSBvcHRpb25zPy5pZDtcclxuICAgICAgICB0aGlzLmhhbmRsZXJPcHRpb25zKG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5aSE55CG5Yid5aeL5Lyg5YWl5Y+C5pWwXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyDlj6/pgInlj4LmlbBcclxuICAgICAqIEByZXR1cm5zIHZvaWRcclxuICAgICAqL1xyXG4gICAgaGFuZGxlck9wdGlvbnM6IChvcHRpb25zOiBVSVdpbmRvd09wdGlvbikgPT4gdm9pZCA9IGhhbmRsZXJPcHRpb25zO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5ZSv5LiASWRcclxuICAgICAqL1xyXG4gICAgQGlzTm9FbXB0eU9yTnVsbCgpXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgaWQ6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWuveW6plxyXG4gICAgICovXHJcbiAgICBAaXNQc3ROdW1iZXIoKVxyXG4gICAgcHVibGljIHdpZHRoOiBudW1iZXIgPSA8bnVtYmVyPnRoaXMuZnJvbUpTT05QYXRoKFwid2luZG93L3dpZHRoXCIsIERFRkFVTFRfV0lORE9XX1dJRFRIKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOmrmOW6plxyXG4gICAgICovXHJcbiAgICBAaXNQc3ROdW1iZXIoKVxyXG4gICAgcHVibGljIGhlaWdodDogbnVtYmVyID0gPG51bWJlcj50aGlzLmZyb21KU09OUGF0aChcIndpbmRvdy9oZWlnaHRcIiwgREVGQVVMVF9XSU5ET1dfSEVJR0hUKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOacgOWwj+WuveW6plxyXG4gICAgICovXHJcbiAgICBAaXNQc3ROdW1iZXIoKVxyXG4gICAgcHVibGljIG1pbldpZHRoOiBudW1iZXIgPSBERUZBVUxUX01JTl9XSURUSDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOacgOWwj+mrmOW6plxyXG4gICAgICovXHJcbiAgICBAaXNQc3ROdW1iZXIoKVxyXG4gICAgcHVibGljIG1pbkhlaWdodDogbnVtYmVyID0gREVGQVVMVF9NSU5fSEVJR0hUO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pyA5aSn5a695bqmXHJcbiAgICAgKi9cclxuICAgIEBpc1BzdE51bWJlcigpXHJcbiAgICBwdWJsaWMgbWF4V2lkdGg6IG51bWJlciA9IERFRkFVTFRfTUFYX1dJRFRIO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pyA5aSn6auY5bqmXHJcbiAgICAgKi9cclxuICAgIEBpc1BzdE51bWJlcigpXHJcbiAgICBwdWJsaWMgbWF4SGVpZ2h0OiBudW1iZXIgPSBERUZBVUxUX01BWF9IRUlHSFQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlt6bovrnovrnot51cclxuICAgICAqL1xyXG4gICAgQGlzUHN0TnVtYmVyKClcclxuICAgIHB1YmxpYyBsZWZ0OiBudW1iZXIgPSAoREVGQVVMVF9NQVhfV0lEVEggLSB0aGlzLndpZHRoKSAvIDI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlj7Povrnovrnot51cclxuICAgICAqL1xyXG4gICAgQGlzUHN0TnVtYmVyKClcclxuICAgIHB1YmxpYyB0b3A6IG51bWJlciA9IChERUZBVUxUX01BWF9IRUlHSFQgLSB0aGlzLmhlaWdodCkgLyAyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6L655qGG5qC35byPXHJcbiAgICAgKi9cclxuICAgIEBjb21iaW5lKHtcclxuICAgICAgICB3aWR0aDogY2hlY2tQc3RJbnQsIC8qKiDmraPmlbTmlbAgKi9cclxuICAgICAgICBzdHlsZTogW0JvcmRlclN0eWxlLlNPTElELCBCb3JkZXJTdHlsZS5ET1VCTEUsIEJvcmRlclN0eWxlLkRPVFRFRCwgQm9yZGVyU3R5bGUuREFTSEVEXSwgLyoqIOWPr+mAieWAvCAqL1xyXG4gICAgICAgIGNvbG9yOiBjaGVja0NvbG9yLCAgLyoqIOmdnuepuuWtl+espuS4siAqL1xyXG4gICAgICAgIHJhZGl1czogY2hlY2tQc3RJbnQgLyoqIOato+aVtOaVsCAqL1xyXG4gICAgfSwgZmFsc2UpXHJcbiAgICBwdWJsaWMgYm9yZGVyOiBCb3JkZXJPcHRpb24gfCBmYWxzZSA9IDxCb3JkZXJPcHRpb24+e1xyXG4gICAgICAgIHdpZHRoOiBERUZBVUxUX0JPUkRFUl9XSURUSCxcclxuICAgICAgICBzdHlsZTogREVGQVVMVF9CT1JERVJfU1RZTEUsXHJcbiAgICAgICAgY29sb3I6IERFRkFVTFRfQk9SREVSX0NPTE9SLFxyXG4gICAgICAgIHJhZGl1czogREVGQVVMVF9CT1JERVJfUkFESVVTXHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6Zi05b2xXHJcbiAgICAgKi9cclxuICAgIEBpc0Jvb2xlYW4oKVxyXG4gICAgcHVibGljIGJveFNoYWRvdzogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqjnlLtcclxuICAgICAqL1xyXG4gICAgQGluVmFsdWVPcHRpb25zKEFuaW1hdGlvbi5aT09NLCBmYWxzZSlcclxuICAgIHB1YmxpYyBhbmltYXRlOiBmYWxzZSB8IEFuaW1hdGlvbiA9IEFuaW1hdGlvbi5aT09NO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6IOM5pmv6aKc6ImyXHJcbiAgICAgKi9cclxuICAgIEBpc0NvbG9yKClcclxuICAgIHB1YmxpYyBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZyA9IDxzdHJpbmc+dGhpcy5mcm9tSlNPTlBhdGgoXCJ3aW5kb3cvYmFja2dyb3VuZENvbG9yXCIsIERFRkFVTFRfV0lORE9XX0JBQ0tHUk9VTkRfQ09MT1IpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5bel5YW35qCPXHJcbiAgICAgKi9cclxuICAgIEBjb21iaW5lKHtcclxuICAgICAgICBoZWlnaHQ6IGNoZWNrUHN0TnVtYmVyLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogY2hlY2tDb2xvcixcclxuICAgICAgICB0aXRsZUJhcjoge1xyXG4gICAgICAgICAgICBkZWNvcmF0b3I6IHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBjaGVja1N0cmluZyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBjaGVja0NvbG9yLFxyXG4gICAgICAgICAgICAgICAgYWxpZ246IFtBbGlnbi5MRUZULCBBbGlnbi5DRU5URVIsIEFsaWduLlJJR0hUXSxcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBjaGVja1BzdEludFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvcHRpb25zOiBbZmFsc2VdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpY29uOiB7XHJcbiAgICAgICAgICAgIGRlY29yYXRvcjoge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogY2hlY2tOb0VtcHR5T3JOdWxsLFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogY2hlY2tQc3RJbnQsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogY2hlY2tDb2xvclxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvcHRpb25zOiBbZmFsc2VdXHJcbiAgICAgICAgfVxyXG4gICAgfSwgZmFsc2UpXHJcbiAgICBwdWJsaWMgdG9vbEJhcjogVUlUb29sQmFyT3B0aW9uIHwgZmFsc2UgPSA8VUlUb29sQmFyT3B0aW9uIHwgZmFsc2U+dGhpcy5mcm9tSlNPTlBhdGgoXCJ3aW5kb3cvdG9vbEJhclwiLCBmYWxzZSk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnqpflj6PlhYPntKDlr7nosaFcclxuICAgICAqL1xyXG4gICAgcHVibGljIHdpbmRvd0VsZW1lbnQ6IEhUTUxEaXZFbGVtZW50IHwgbnVsbCA9IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJvlu7rnu4Tku7blhYPntKDlr7nosaFcclxuICAgICAqIEByZXR1cm5zIENvbXBvbmVudEVsZW1lbnRcclxuICAgICAqL1xyXG4gICAgcHJlc2VudCgpOiBDb21wb25lbnRFbGVtZW50IHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRlRGl2RWxlbWVudChgJHt0aGlzLmVudHJ5LnByZWZpeCArIHRoaXMuaWR9YCk7XHJcbiAgICAgICAgdGhpcy53aW5kb3dFbGVtZW50ID0gZWxlbWVudDtcclxuXHJcbiAgICAgICAgYWRkQ1NTQ2xhc3NlcyhlbGVtZW50LFxyXG4gICAgICAgICAgICBcIndpbmRvd1wiLFxyXG4gICAgICAgICAgICBcImZsZXgtYm94XCIsXHJcbiAgICAgICAgICAgIFwiY29sLWRpcmVjdGlvblwiLFxyXG4gICAgICAgICAgICB0aGlzLmJveFNoYWRvdyA/IFwiYm94LXNoYWRvd1wiIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGUgIT09IGZhbHNlID8gXCJhbmltYXRlXCIgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZSAhPT0gZmFsc2UgPyBgYW5pbWF0ZS0ke3RoaXMuYW5pbWF0ZX0tc2hvd2AgOiB1bmRlZmluZWQpO1xyXG5cclxuICAgICAgICBhZGRDU1NTdHlsZXMoZWxlbWVudCxcclxuICAgICAgICAgICAgPENTU1N0eWxlRGVjbGFyYXRpb24+e1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBgJHt0aGlzLmJhY2tncm91bmRDb2xvcn1gLFxyXG4gICAgICAgICAgICAgICAgekluZGV4OiBgJHt0aGlzLmVudHJ5LnpJbmRleH1gLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGAke3RoaXMud2lkdGh9cHhgLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBgJHt0aGlzLmhlaWdodH1weGAsXHJcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogdGhpcy5tYXhXaWR0aCAhPT0gaW5uZXJXaWR0aCA/IGAke3RoaXMubWF4V2lkdGh9cHhgIDogbnVsbCxcclxuICAgICAgICAgICAgICAgIG1heEhlaWdodDogdGhpcy5tYXhIZWlnaHQgIT09IGlubmVySGVpZ2h0ID8gYCR7dGhpcy5tYXhIZWlnaHR9cHhgIDogbnVsbCxcclxuICAgICAgICAgICAgICAgIG1pbldpZHRoOiBgJHt0aGlzLm1pbldpZHRofXB4YCxcclxuICAgICAgICAgICAgICAgIG1pbkhlaWdodDogYCR7dGhpcy5taW5IZWlnaHR9cHhgLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogYCR7dGhpcy5sZWZ0fXB4YCxcclxuICAgICAgICAgICAgICAgIHRvcDogYCR7dGhpcy50b3B9cHhgLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLmJvcmRlciA9PT0gZmFsc2UgPyBudWxsIDpcclxuICAgICAgICAgICAgICAgICAgICBgJHt0aGlzLmJvcmRlci53aWR0aH1weCAke3RoaXMuYm9yZGVyLnN0eWxlfSAke3RoaXMuYm9yZGVyLmNvbG9yfWAsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IHRoaXMuYm9yZGVyID09PSBmYWxzZSA/IG51bGwgOlxyXG4gICAgICAgICAgICAgICAgICAgIGAke3RoaXMuYm9yZGVyLnJhZGl1c31weGAsXHJcbiAgICAgICAgICAgICAgICB3ZWJraXRCb3JkZXJSYWRpdXM6IHRoaXMuYm9yZGVyID09PSBmYWxzZSA/IG51bGwgOlxyXG4gICAgICAgICAgICAgICAgICAgIGAke3RoaXMuYm9yZGVyLnJhZGl1c31weGAsXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG5cclxuICAgICAgICB0aGlzLm1vbml0b3JFdmVudCgpO1xyXG5cclxuICAgICAgICB0aGlzLnNlbmRFdmVudChcIndpbmRvdzpjcmVhdGVcIiwgeyBpZDogdGhpcy5pZCB9KTtcclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOi/veWKoOWtkOWFg+e0oFxyXG4gICAgICogQHBhcmFtIGVsZW1lbnQg54i25YWD57SgXHJcbiAgICAgKiBAcmV0dXJucyB2b2lkXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYXBwZW5kQ2hpbGQoZWxlbWVudDogSFRNTERpdkVsZW1lbnQpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy50b29sQmFyICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBjb25zdCB1aVRvb2xCYXIgPSBuZXcgVUlUb29sQmFyKHRoaXMudG9vbEJhcik7XHJcbiAgICAgICAgICAgIGNvbnN0IHVpVG9vbEJhckVsZW1lbnQgPSB1aVRvb2xCYXIucHJlc2VudCgpO1xyXG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHVpVG9vbEJhckVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOebkeWQrOS6i+S7tlxyXG4gICAgICogQHJldHVybnMgdm9pZCBcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBtb25pdG9yRXZlbnQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLndpbmRvd0VsZW1lbnQpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0ZSAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy53aW5kb3dFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgKGV2OiBBbmltYXRpb25FdmVudCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIOaWsOW7uuaIluaYvuekuueql+WPo1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYW5pbWF0ZVNob3dOYW1lID0gYGFuaW1hdGUtJHt0aGlzLmFuaW1hdGV9LXNob3dgO1xyXG4gICAgICAgICAgICAgICAgaWYgKGhhc0NTU0NsYXNzKHRoaXMud2luZG93RWxlbWVudCwgYW5pbWF0ZVNob3dOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUNTU0NsYXNzZXModGhpcy53aW5kb3dFbGVtZW50LCBhbmltYXRlU2hvd05hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VuZEV2ZW50KFwid2luZG93OnNob3dcIiwgeyBpZDogdGhpcy5pZCB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IHZhbGlkYXRlRmFpbCB9IGZyb20gJy4uLy4uL2NvcmUvZXhjZXB0aW9uJztcclxuaW1wb3J0IHsgY2hlY2tBcnJheSwgY2hlY2tJblZhbHVlT3B0aW9ucywgY2hlY2tPZlR5cGUgfSBmcm9tICcuLi8uLi9jb3JlL3ZhbGlkYXRvcic7XHJcbmltcG9ydCBVSVdpbmRvdyBmcm9tICcuLyc7XHJcbmltcG9ydCB7IEFuaW1hdGlvbiwgT2Zmc2V0IH0gZnJvbSAnLi9jb25zdCc7XHJcbmltcG9ydCB7IEJvcmRlck9wdGlvbiwgVUlXaW5kb3dPcHRpb24gfSBmcm9tICcuL3R5cGUnO1xyXG5pbXBvcnQgeyBVSVRvb2xCYXJPcHRpb24gfSBmcm9tICcuLi91aS10b29sLWJhci90eXBlJztcclxuXHJcbi8qKlxyXG4gKiDlpITnkIbliJ3lp4vkvKDlhaXlj4LmlbBcclxuICogQHBhcmFtIG9wdGlvbnMg5Y+v6YCJ5Y+C5pWwXHJcbiAqIEByZXR1cm5zIHZvaWRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVyT3B0aW9ucyh0aGlzOiBVSVdpbmRvdywgb3B0aW9uczogVUlXaW5kb3dPcHRpb24pOiB2b2lkIHtcclxuICAgIHRoaXMud2lkdGggPSBvcHRpb25zPy53aWR0aCA/PyB0aGlzLndpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBvcHRpb25zPy5oZWlnaHQgPz8gdGhpcy5oZWlnaHQ7XHJcbiAgICB0aGlzLm1heFdpZHRoID0gb3B0aW9ucz8ubWF4V2lkdGggPz8gdGhpcy5tYXhXaWR0aDtcclxuICAgIHRoaXMubWF4SGVpZ2h0ID0gb3B0aW9ucz8ubWF4SGVpZ2h0ID8/IHRoaXMubWF4SGVpZ2h0O1xyXG4gICAgdGhpcy5taW5XaWR0aCA9IG9wdGlvbnM/Lm1pbldpZHRoID8/IHRoaXMubWluV2lkdGg7XHJcbiAgICB0aGlzLm1pbkhlaWdodCA9IG9wdGlvbnM/Lm1pbkhlaWdodCA/PyB0aGlzLm1pbkhlaWdodDtcclxuICAgIHRoaXMud2lkdGggPSBNYXRoLm1heCh0aGlzLm1pbldpZHRoLCB0aGlzLndpZHRoKTtcclxuICAgIHRoaXMud2lkdGggPSBNYXRoLm1pbih0aGlzLm1heFdpZHRoLCB0aGlzLndpZHRoKTtcclxuICAgIHRoaXMuaGVpZ2h0ID0gTWF0aC5tYXgodGhpcy5taW5IZWlnaHQsIHRoaXMuaGVpZ2h0KTtcclxuICAgIHRoaXMuaGVpZ2h0ID0gTWF0aC5taW4odGhpcy5tYXhIZWlnaHQsIHRoaXMuaGVpZ2h0KTtcclxuICAgIHRoaXMuYm9yZGVyID0gPEJvcmRlck9wdGlvbiB8IGZhbHNlPm9wdGlvbnM/LmJvcmRlciA/PyB0aGlzLmJvcmRlcjtcclxuICAgIHRoaXMuYm94U2hhZG93ID0gb3B0aW9ucz8uYm94U2hhZG93ID8/IHRoaXMuYm94U2hhZG93O1xyXG4gICAgdGhpcy5hbmltYXRlID0gPEFuaW1hdGlvbiB8IGZhbHNlPm9wdGlvbnM/LmFuaW1hdGUgPz8gdGhpcy5hbmltYXRlO1xyXG4gICAgW3RoaXMubGVmdCwgdGhpcy50b3BdID0gY2FsY09mZnNldCh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgb3B0aW9ucz8ub2Zmc2V0KTtcclxuICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gb3B0aW9ucz8uYmFja2dyb3VuZENvbG9yID8/IHRoaXMuYmFja2dyb3VuZENvbG9yO1xyXG4gICAgdGhpcy50b29sQmFyID0gPFVJVG9vbEJhck9wdGlvbiB8IGZhbHNlPm9wdGlvbnM/LnRvb2xCYXIgPz8gdGhpcy50b29sQmFyO1xyXG59XHJcblxyXG4vKipcclxuICog6K6h566X56qX5Y+j5YGP56e76YePXHJcbiAqIEBwYXJhbSB3aWR0aCDlrr3luqZcclxuICogQHBhcmFtIGhlaWdodCDpq5jluqZcclxuICogQHBhcmFtIFtvZmZzZXRdIOWBj+enu1xyXG4gKiBAcmV0dXJucyBbbnVtYmVyLCBudW1iZXJdIFxyXG4gKi9cclxuZnVuY3Rpb24gY2FsY09mZnNldCh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgb2Zmc2V0PzogW251bWJlciwgbnVtYmVyXSB8IE9mZnNldCk6IFtudW1iZXIsIG51bWJlcl0ge1xyXG4gICAgaWYgKG9mZnNldCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gWyhpbm5lcldpZHRoIC0gd2lkdGgpIC8gMiwgKGlubmVySGVpZ2h0IC0gaGVpZ2h0KSAvIDJdO1xyXG4gICAgaWYgKGNoZWNrQXJyYXkob2Zmc2V0KSkge1xyXG4gICAgICAgIGlmIChvZmZzZXQubGVuZ3RoICE9PSAyIHx8XHJcbiAgICAgICAgICAgICFjaGVja09mVHlwZShvZmZzZXRbMF0sIFwibnVtYmVyXCIpIHx8XHJcbiAgICAgICAgICAgICFjaGVja09mVHlwZShvZmZzZXRbMV0sIFwibnVtYmVyXCIpKSB2YWxpZGF0ZUZhaWwoYFwiJHtbb2Zmc2V0XX1cIiDkuI3mmK/mnInmlYjnmoQgXCJbbnVtYmVyLG51bWJlcl1cIiDnsbvlnotgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFs8bnVtYmVyPm9mZnNldFswXSwgPG51bWJlcj5vZmZzZXRbMV1dO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBjcm9vZHM6IFtudW1iZXIsIG51bWJlcl0gPSBbMCwgMF07XHJcbiAgICBjb25zdCBvZmZzZXRPcHRpb25zID0gW1xyXG4gICAgICAgIE9mZnNldC5DRU5URVIsXHJcbiAgICAgICAgT2Zmc2V0LlRPUF9DRU5URVIsXHJcbiAgICAgICAgT2Zmc2V0LkJPVFRPTV9DRU5URVIsXHJcbiAgICAgICAgT2Zmc2V0LkxFRlRfVE9QLFxyXG4gICAgICAgIE9mZnNldC5MRUZUX01JRERMRSxcclxuICAgICAgICBPZmZzZXQuTEVGVF9CT1RUT00sXHJcbiAgICAgICAgT2Zmc2V0LlJJR0hUX1RPUCxcclxuICAgICAgICBPZmZzZXQuUklHSFRfTUlERExFLFxyXG4gICAgICAgIE9mZnNldC5SSUdIVF9CT1RUT01cclxuICAgIF07XHJcbiAgICBpZiAoY2hlY2tJblZhbHVlT3B0aW9ucyhvZmZzZXQsIC4uLm9mZnNldE9wdGlvbnMpKSB7XHJcbiAgICAgICAgc3dpdGNoICg8T2Zmc2V0Pm9mZnNldCkge1xyXG4gICAgICAgICAgICBjYXNlIE9mZnNldC5DRU5URVI6XHJcbiAgICAgICAgICAgICAgICBjcm9vZHMgPSBbKGlubmVyV2lkdGggLSB3aWR0aCkgLyAyLCAoaW5uZXJIZWlnaHQgLSBoZWlnaHQpIC8gMl07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBPZmZzZXQuVE9QX0NFTlRFUjpcclxuICAgICAgICAgICAgICAgIGNyb29kcyA9IFsoaW5uZXJXaWR0aCAtIHdpZHRoKSAvIDIsIDBdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgT2Zmc2V0LkJPVFRPTV9DRU5URVI6XHJcbiAgICAgICAgICAgICAgICBjcm9vZHMgPSBbKGlubmVyV2lkdGggLSB3aWR0aCkgLyAyLCBpbm5lckhlaWdodCAtIGhlaWdodF07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBPZmZzZXQuTEVGVF9UT1A6XHJcbiAgICAgICAgICAgICAgICBjcm9vZHMgPSBbMCwgMF07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBPZmZzZXQuTEVGVF9NSURETEU6XHJcbiAgICAgICAgICAgICAgICBjcm9vZHMgPSBbMCwgKGlubmVySGVpZ2h0IC0gaGVpZ2h0KSAvIDJdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgT2Zmc2V0LkxFRlRfQk9UVE9NOlxyXG4gICAgICAgICAgICAgICAgY3Jvb2RzID0gWzAsIGlubmVySGVpZ2h0IC0gaGVpZ2h0XTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIE9mZnNldC5SSUdIVF9UT1A6XHJcbiAgICAgICAgICAgICAgICBjcm9vZHMgPSBbaW5uZXJXaWR0aCAtIHdpZHRoLCAwXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIE9mZnNldC5SSUdIVF9NSURETEU6XHJcbiAgICAgICAgICAgICAgICBjcm9vZHMgPSBbaW5uZXJXaWR0aCAtIHdpZHRoLCAoaW5uZXJIZWlnaHQgLSBoZWlnaHQpIC8gMl07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBPZmZzZXQuUklHSFRfQk9UVE9NOlxyXG4gICAgICAgICAgICAgICAgY3Jvb2RzID0gW2lubmVyV2lkdGggLSB3aWR0aCwgaW5uZXJIZWlnaHQgLSBoZWlnaHRdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjcm9vZHM7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRhdGVGYWlsKGBcIiR7b2Zmc2V0fVwiIOS4jeaYr+acieaViOeahCBcIltudW1iZXIsbnVtYmVyXSDmiJYgWyR7b2Zmc2V0T3B0aW9uc31dXCIg57G75Z6LYCk7XHJcbn0iLCJpbXBvcnQgeyB2YWxpZGF0ZUZhaWwgfSBmcm9tICcuLi9leGNlcHRpb24nO1xyXG5pbXBvcnQgeyBtZXJnZUpTT05PYmplY3QgfSBmcm9tICcuLi9oZWxwZXIvb2JqZWN0LWhlbHBlcic7XHJcbmltcG9ydCB7IEpTT05PYmplY3QgfSBmcm9tICcuLi9oZWxwZXIvdHlwZSc7XHJcbmltcG9ydCB7XHJcbiAgICBjaGVja0FycmF5LCBjaGVja0NvbG9yLCBjaGVja0luVmFsdWVPcHRpb25zLCBjaGVja0pTT05PYmplY3QsIGNoZWNrTWluLCBjaGVja05vRW1wdHlPck51bGwsXHJcbiAgICBjaGVja09mVHlwZSwgY2hlY2tQc3RJbnQsIGNoZWNrUHN0TnVtYmVyLCBjaGVja1JlZ0V4cCwgY2hlY2tTdHJpbmdcclxufSBmcm9tICcuLi92YWxpZGF0b3InO1xyXG5pbXBvcnQgeyBWYWx1ZU9wdGlvbiB9IGZyb20gJy4uL3ZhbGlkYXRvci90eXBlJztcclxuaW1wb3J0IHsgUHJvcGVydHlEZWNvcmF0b3IsIFByb3BlcnR5U2V0dGVyIH0gZnJvbSAnLi90eXBlJztcclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XmmK/lkKbmmK/mraPmlbDlgLznsbvlnotcclxuICogQHJldHVybnMgUHJvcGVydHlEZWNvcmF0b3IgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNQc3ROdW1iZXIoKTogUHJvcGVydHlEZWNvcmF0b3Ige1xyXG4gICAgcmV0dXJuIGdlbmVyYXRlRGVjb3JhdG9yKChuZXdWYWx1ZSkgPT4ge1xyXG4gICAgICAgIGlmICghY2hlY2tQc3ROdW1iZXIobmV3VmFsdWUpKSB2YWxpZGF0ZUZhaWwoYFwiJHtuZXdWYWx1ZX1cIiDkuI3mmK/kuIDkuKrmnInmlYjnmoTmraPmlbDlgLznsbvlnotgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ld1ZhbHVlO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XmmK/lkKbmmK/mjIflrprlj6/pgInlgLznsbvlnotcclxuICogQHBhcmFtIHZhbHVlT3B0aW9ucyDlj6/pgInlgLxcclxuICogQHJldHVybnMgUHJvcGVydHlEZWNvcmF0b3IgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaW5WYWx1ZU9wdGlvbnMoLi4udmFsdWVPcHRpb25zOiBWYWx1ZU9wdGlvbik6IFByb3BlcnR5RGVjb3JhdG9yIHtcclxuICAgIHJldHVybiBnZW5lcmF0ZURlY29yYXRvcigobmV3VmFsdWUpID0+IHtcclxuICAgICAgICBpZiAoIWNoZWNrSW5WYWx1ZU9wdGlvbnMobmV3VmFsdWUsIC4uLnZhbHVlT3B0aW9ucykpIHZhbGlkYXRlRmFpbChgXCIke25ld1ZhbHVlfVwiIOS4jeWcqCBbJHt2YWx1ZU9wdGlvbnMudG9TdHJpbmcoKX1dIOWAvOiMg+WbtOWGhWApO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3VmFsdWU7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpemdnuepuuaIlumdnk5VTEzlrZfnrKbkuLJcclxuICogQHJldHVybnMgUHJvcGVydHlEZWNvcmF0b3IgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNOb0VtcHR5T3JOdWxsKCk6IFByb3BlcnR5RGVjb3JhdG9yIHtcclxuICAgIHJldHVybiBnZW5lcmF0ZURlY29yYXRvcigobmV3VmFsdWUpID0+IHtcclxuICAgICAgICBpZiAoIWNoZWNrTm9FbXB0eU9yTnVsbChuZXdWYWx1ZSkpIHZhbGlkYXRlRmFpbChgXCIke25ld1ZhbHVlfVwiIOS4jeaYr+S4gOS4quacieaViOeahOmdnuepuuWtl+espuS4smApO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3VmFsdWU7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeW4g+WwlOexu+Wei+WAvFxyXG4gKiBAcmV0dXJucyBQcm9wZXJ0eURlY29yYXRvciBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0Jvb2xlYW4oKTogUHJvcGVydHlEZWNvcmF0b3Ige1xyXG4gICAgcmV0dXJuIGdlbmVyYXRlRGVjb3JhdG9yKChuZXdWYWx1ZSkgPT4ge1xyXG4gICAgICAgIGlmICghY2hlY2tPZlR5cGUobmV3VmFsdWUsIFwiYm9vbGVhblwiKSkgdmFsaWRhdGVGYWlsKGBcIiR7bmV3VmFsdWV9XCIg5LiN5piv5LiA5Liq5pyJ5pWI55qE5biD5bCU5YC8YCk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXdWYWx1ZTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5a2X56ym5Liy57G75Z6L5YC8XHJcbiAqIEByZXR1cm5zIFByb3BlcnR5RGVjb3JhdG9yIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nKCk6IFByb3BlcnR5RGVjb3JhdG9yIHtcclxuICAgIHJldHVybiBnZW5lcmF0ZURlY29yYXRvcigobmV3VmFsdWUpID0+IHtcclxuICAgICAgICBpZiAoIWNoZWNrU3RyaW5nKG5ld1ZhbHVlKSkgdmFsaWRhdGVGYWlsKGBcIiR7bmV3VmFsdWV9XCIg5LiN5piv5LiA5Liq5pyJ5pWI55qE5a2X56ym5LiyYCk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXdWYWx1ZTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l6aKc6Imy5YC8XHJcbiAqIEByZXR1cm5zIFByb3BlcnR5RGVjb3JhdG9yIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQ29sb3IoKTogUHJvcGVydHlEZWNvcmF0b3Ige1xyXG4gICAgcmV0dXJuIGdlbmVyYXRlRGVjb3JhdG9yKChuZXdWYWx1ZSkgPT4ge1xyXG4gICAgICAgIGlmICghY2hlY2tDb2xvcihuZXdWYWx1ZSkpIHZhbGlkYXRlRmFpbChgXCIke25ld1ZhbHVlfVwiIOS4jeaYr+S4gOS4quacieaViOeahENTU+minOiJsuWAvGApO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3VmFsdWU7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeato+aVtOaVsFxyXG4gKiBAcmV0dXJucyBQcm9wZXJ0eURlY29yYXRvciBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1BzdEludCgpOiBQcm9wZXJ0eURlY29yYXRvciB7XHJcbiAgICByZXR1cm4gZ2VuZXJhdGVEZWNvcmF0b3IoKG5ld1ZhbHVlKSA9PiB7XHJcbiAgICAgICAgaWYgKCFjaGVja1BzdEludChuZXdWYWx1ZSkpIHZhbGlkYXRlRmFpbChgXCIke25ld1ZhbHVlfVwiIOS4jeaYr+S4gOS4quacieaViOeahOato+aVtOaVsGApO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3VmFsdWU7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeacgOWwj+WAvFxyXG4gKiBAcGFyYW0gdGhyZXNob2xkIOacgOWwj+mYiOWAvFxyXG4gKiBAcmV0dXJucyBQcm9wZXJ0eURlY29yYXRvclxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1pbih0aHJlc2hvbGQ6IG51bWJlcik6IFByb3BlcnR5RGVjb3JhdG9yIHtcclxuICAgIHJldHVybiBnZW5lcmF0ZURlY29yYXRvcigobmV3VmFsdWUpID0+IHtcclxuICAgICAgICBpZiAoIWNoZWNrTWluKG5ld1ZhbHVlLCB0aHJlc2hvbGQpKSB2YWxpZGF0ZUZhaWwoYFwiJHtuZXdWYWx1ZX1cIiDlv4XpobvmmK/mlbDlgLznsbvlnovlubbkuJTlgLzkuI3og73lsI/kuo4gXCIke3RocmVzaG9sZH1cImApO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3VmFsdWU7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOe7hOWQiOajgOafpemqjOivgVxyXG4gKiBAcGFyYW0ganNvbkRlY29yYXRvciDlj4LmlbDmr4/kuIDpobnoo4XppbDlmajvvIzmlK/mjIFBcnJheXxGdW5jdGlvbnxSZWdFeHB8e2RlY29yYXRvcjoge30sb3B0aW9uczogW119XHJcbiAqIEBwYXJhbSBpdGVtcyDlhbbkvZnlj6/pgInlgLzvvIzlj6rmlK/mjIHln7rmnKzmlbDmja7nsbvlnotcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lKGpzb25EZWNvcmF0b3I6IEpTT05PYmplY3QgPSB7fSwgLi4uaXRlbXM6IEFycmF5PGFueT4pOiBQcm9wZXJ0eURlY29yYXRvciB7XHJcbiAgICByZXR1cm4gZ2VuZXJhdGVEZWNvcmF0b3IoKG5ld1ZhbHVlLCBwcm9wZXJ0eUtleSwgdmFsdWUpID0+IHtcclxuICAgICAgICBuZXdWYWx1ZSA9IGNoZWNrQ29tYmluZShuZXdWYWx1ZSwganNvbkRlY29yYXRvciwgLi4uaXRlbXMpO1xyXG4gICAgICAgIGlmIChjaGVja0pTT05PYmplY3QobmV3VmFsdWUpKSB7XHJcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gbWVyZ2VKU09OT2JqZWN0KHZhbHVlID8/IHt9LCBuZXdWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXdWYWx1ZTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICog5ZCI5bm26aqM6K+B5qC45b+D5Luj56CBXHJcbiAqIEBwYXJhbSBuZXdWYWx1ZSDlvZPliY3lgLxcclxuICogQHBhcmFtIGpzb25EZWNvcmF0b3Ig5Y+C5pWw5q+P5LiA6aG56KOF6aWw5Zmo77yM5pSv5oyBQXJyYXl8RnVuY3Rpb258UmVnRXhwfHtkZWNvcmF0b3I6IHt9LG9wdGlvbnM6IFtdfVxyXG4gKiBAcGFyYW0gaXRlbXMg5YW25L2Z5Y+v6YCJ5YC877yM5Y+q5pSv5oyB5Z+65pys5pWw5o2u57G75Z6LXHJcbiAqIEByZXR1cm5zIHZvaWRcclxuICovXHJcbmZ1bmN0aW9uIGNoZWNrQ29tYmluZShuZXdWYWx1ZTogYW55LCBqc29uRGVjb3JhdG9yOiBKU09OT2JqZWN0ID0ge30sIC4uLml0ZW1zOiBBcnJheTxhbnk+KTogYW55IHtcclxuICAgIGlmICghY2hlY2tKU09OT2JqZWN0KG5ld1ZhbHVlKSAmJiAoaXRlbXMubGVuZ3RoID4gMCAmJiBpdGVtcy5pbmRleE9mKG5ld1ZhbHVlKSA9PT0gLTEpKSB2YWxpZGF0ZUZhaWwoYFwiJHtuZXdWYWx1ZX1cIiDkuI3mmK/kuIDkuKrmnInmlYjnmoTlj4LmlbDlgLxgKTtcclxuICAgIGlmIChpdGVtcy5pbmRleE9mKG5ld1ZhbHVlKSA+IC0xKSByZXR1cm4gbmV3VmFsdWU7XHJcblxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gbmV3VmFsdWUpIHtcclxuICAgICAgICBsZXQga2V5VmFsdWUgPSBuZXdWYWx1ZVtrZXldO1xyXG4gICAgICAgIGNvbnN0IGRlY29yYXRvciA9IGpzb25EZWNvcmF0b3Jba2V5XTtcclxuICAgICAgICBpZiAoIWRlY29yYXRvcikgY29udGludWU7XHJcblxyXG4gICAgICAgIGlmIChjaGVja0FycmF5KGRlY29yYXRvcikgJiYgZGVjb3JhdG9yLmluZGV4T2Yoa2V5VmFsdWUpID09PSAtMSkge1xyXG4gICAgICAgICAgICB2YWxpZGF0ZUZhaWwoYFwiJHtrZXlWYWx1ZX1cIiDkuI3lnKggWyR7ZGVjb3JhdG9yLnRvU3RyaW5nKCl9XSDlgLzojIPlm7TlhoVgKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaGVja09mVHlwZShkZWNvcmF0b3IsIFwiZnVuY3Rpb25cIikgJiYgIWRlY29yYXRvcihrZXlWYWx1ZSkpIHtcclxuICAgICAgICAgICAgdmFsaWRhdGVGYWlsKGBcIiR7a2V5VmFsdWV9XCIg5LiN5piv5LiA5Liq5pyJ5pWI55qE5Y+C5pWw5YC8YCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hlY2tSZWdFeHAoZGVjb3JhdG9yKSAmJiAhZGVjb3JhdG9yLnRlc3Qoa2V5VmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRlRmFpbChgXCIke2tleVZhbHVlfVwiIOS4jeaYr+S4gOS4quacieaViOeahOWPguaVsOWAvGApO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNoZWNrSlNPTk9iamVjdChkZWNvcmF0b3IpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkRGVjb3JhdG9yID0gZGVjb3JhdG9yPy5kZWNvcmF0b3IgPz8ge307XHJcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkSXRlbXMgPSBkZWNvcmF0b3I/Lm9wdGlvbnMgPz8gW107XHJcbiAgICAgICAgICAgIGtleVZhbHVlID0gY2hlY2tDb21iaW5lKGtleVZhbHVlLCBjaGlsZERlY29yYXRvciwgLi4uY2hpbGRJdGVtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXdWYWx1ZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOeUn+aIkOijhemlsOWZqOaguOW/g+S7o+eggVxyXG4gKiBAcGFyYW0gcHJvcGVydHlTZXR0ZXIg5bGe5oCn6K6+572u5ZmoXHJcbiAqIEByZXR1cm5zIFByb3BlcnR5RGVjb3JhdG9yIFxyXG4gKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVEZWNvcmF0b3IocHJvcGVydHlTZXR0ZXI6IFByb3BlcnR5U2V0dGVyKTogUHJvcGVydHlEZWNvcmF0b3Ige1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IGFueSwgcHJvcGVydHlLZXk6IHN0cmluZyB8IG51bWJlciB8IHN5bWJvbCkge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IHRhcmdldFtwcm9wZXJ0eUtleV07XHJcblxyXG4gICAgICAgIHZhciBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIHByb3BlcnR5S2V5KTtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eUtleSwge1xyXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGdldDogKCkgPT4gdmFsdWUsXHJcbiAgICAgICAgICAgIHNldDogKG5ld1ZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLnNldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0b3Iuc2V0KG5ld1ZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhbHVlID0gcHJvcGVydHlTZXR0ZXIobmV3VmFsdWUsIHByb3BlcnR5S2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IGNoZWNrQXJyYXksIGNoZWNrT2ZUeXBlIH0gZnJvbSAnLi4vdmFsaWRhdG9yJztcclxuaW1wb3J0IHsgRXZlbnRIYW5kbGVyLCBNZXNzYWdlUXVldWVzIH0gZnJvbSAnLi90eXBlJztcclxuXHJcbi8qKlxyXG4gKiDkuovku7bmgLvnur/nsbtcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50QnVzIHtcclxuICAgIC8qKlxyXG4gICAgICog56eB5pyJ5YyW5p6E6YCg5Ye95pWw77yM5a6e546w5Y2V5L6LXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmtojmga/pmJ/liJdcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBtZXNzYWdlUXVldWVzOiBNZXNzYWdlUXVldWVzID0gPE1lc3NhZ2VRdWV1ZXM+e307XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnu5Hlrprkuovku7ZcclxuICAgICAqIEBwYXJhbSBldmVudEtleSDkuovku7blkI3np7BcclxuICAgICAqIEBwYXJhbSBldmVudEhhbmRsZXIg5LqL5Lu25aSE55CG5Ye95pWw5oiW5Ye95pWw5pWw57uEXHJcbiAgICAgKiBAcmV0dXJucyB2b2lkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvbihldmVudEtleTogc3RyaW5nLCBldmVudEhhbmRsZXI6IEV2ZW50SGFuZGxlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLm1lc3NhZ2VRdWV1ZXMuaGFzT3duUHJvcGVydHkoZXZlbnRLZXkpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50VmFsdWUgPSB0aGlzLm1lc3NhZ2VRdWV1ZXNbZXZlbnRLZXldO1xyXG4gICAgICAgICAgICBpZiAoY2hlY2tPZlR5cGUoZXZlbnRWYWx1ZSwgXCJmdW5jdGlvblwiKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlUXVldWVzW2V2ZW50S2V5XSA9IFs8RXZlbnRIYW5kbGVyPmV2ZW50VmFsdWUsIGV2ZW50SGFuZGxlcl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2tBcnJheShldmVudFZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlUXVldWVzW2V2ZW50S2V5XSA9IFsuLi48QXJyYXk8RXZlbnRIYW5kbGVyPj5ldmVudFZhbHVlLCBldmVudEhhbmRsZXJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VRdWV1ZXNbZXZlbnRLZXldID0gZXZlbnRIYW5kbGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWPque7keWumuS4gOasoVxyXG4gICAgICogQHBhcmFtIGV2ZW50S2V5IOS6i+S7tuWQjeensFxyXG4gICAgICogQHBhcmFtIGV2ZW50SGFuZGxlciDkuovku7blpITnkIblh73mlbDmiJblh73mlbDmlbDnu4RcclxuICAgICAqIEByZXR1cm5zIHZvaWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIG9uZShldmVudEtleTogc3RyaW5nLCBldmVudEhhbmRsZXI6IEV2ZW50SGFuZGxlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZVF1ZXVlc1tldmVudEtleV0gPSBldmVudEhhbmRsZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlj5HpgIHkuovku7ZcclxuICAgICAqIEBwYXJhbSBldmVudEtleSDkuovku7blkI3np7BcclxuICAgICAqIEBwYXJhbSBtZXNzYWdlIOS6i+S7tuWkhOeQhuWHveaVsOaIluWHveaVsOaVsOe7hFxyXG4gICAgICogQHJldHVybnMgdm9pZCBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGVtaXQoZXZlbnRLZXk6IHN0cmluZywgbWVzc2FnZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1lc3NhZ2VRdWV1ZXMuaGFzT3duUHJvcGVydHkoZXZlbnRLZXkpKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGV2ZW50VmFsdWUgPSB0aGlzLm1lc3NhZ2VRdWV1ZXNbZXZlbnRLZXldO1xyXG4gICAgICAgIGlmIChjaGVja09mVHlwZShldmVudFZhbHVlLCBcImZ1bmN0aW9uXCIpKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgKDxFdmVudEhhbmRsZXI+ZXZlbnRWYWx1ZSkobWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjaGVja0FycmF5KGV2ZW50VmFsdWUpKSB7XHJcbiAgICAgICAgICAgICg8QXJyYXk8RXZlbnRIYW5kbGVyPj5ldmVudFZhbHVlKS5tYXAoaGFuZGxlciA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOenu+mZpOS6i+S7tlxyXG4gICAgICogQHBhcmFtIGV2ZW50S2V5IOS6i+S7tuWQjeensFxyXG4gICAgICogQHJldHVybnMgdm9pZCBcclxuICAgICAqL1xyXG4gICAgcHVibGljIG9mZihldmVudEtleTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1lc3NhZ2VRdWV1ZXMuaGFzT3duUHJvcGVydHkoZXZlbnRLZXkpKSByZXR1cm47XHJcbiAgICAgICAgZGVsZXRlIHRoaXMubWVzc2FnZVF1ZXVlc1tldmVudEtleV1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOS6i+S7tuaAu+e6v+WunuS+i1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogRXZlbnRCdXM7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bllK/kuIDlj6/nlKjlr7nosaFcclxuICAgICAqIEByZXR1cm5zIEV2ZW50QnVzIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IEV2ZW50QnVzIHtcclxuICAgICAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBFdmVudEJ1cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiDmipvlh7rnqIvluo/lvILluLjkv6Hmga9cclxuICogQHBhcmFtIG1lc3NhZ2Ug5byC5bi4566A6KaBXHJcbiAqIEByZXR1cm5zIG5ldmVyIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFwcEVycm9yKG1lc3NhZ2U6IHN0cmluZyk6IG5ldmVyIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihgXFxu57G75Z6L77ya56iL5bqP5byC5bi4XFxu5byC5bi45L+h5oGv77yaJHttZXNzYWdlfVxcbuWghuagiOS/oeaBr++8mmApO1xyXG59XHJcblxyXG4vKipcclxuICog5oqb5Ye66aqM6K+B5aSx6LSl5L+h5oGvXHJcbiAqIEBwYXJhbSBtZXNzYWdlIOmUmeivr+S/oeaBr1xyXG4gKiBAcmV0dXJucyBuZXZlciBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUZhaWwobWVzc2FnZTogc3RyaW5nKTogbmV2ZXIge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBcXG7nsbvlnovvvJrpqozor4HplJnor69cXG7plJnor6/kv6Hmga/vvJoke21lc3NhZ2V9XFxu5aCG5qCI5L+h5oGv77yaYCk7XHJcbn0iLCJpbXBvcnQgeyBQUkVGSVggfSBmcm9tICcuLi8uLi9lbnRyeS9jb25zdCc7XHJcbmltcG9ydCB7IGNoZWNrT2ZUeXBlIH0gZnJvbSAnLi4vdmFsaWRhdG9yJztcclxuXHJcbi8qKlxyXG4gKiDmibnph4/mt7vliqDlhYPntKDmoLflvI9cclxuICogQHBhcmFtIGVsZW1lbnQg5YWD57Sg5a+56LGhXHJcbiAqIEBwYXJhbSBjc3NTdHlsZXMg5qC35byP6KGo5a+56LGhXHJcbiAqIEByZXR1cm5zIHZvaWQgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWRkQ1NTU3R5bGVzKGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCwgY3NzU3R5bGVzOiBDU1NTdHlsZURlY2xhcmF0aW9uKTogdm9pZCB7XHJcbiAgICBpZiAoIWVsZW1lbnQpIHJldHVybjtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGNzc1Byb3AgaW4gY3NzU3R5bGVzKSB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZVtjc3NQcm9wXSA9IGNzc1N0eWxlc1tjc3NQcm9wXSA/PyBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICog5re75YqgQ1NTIENsYXNzXHJcbiAqIOm7mOiupOWJjee8gOS4uiBfX1BSRUZJWF9f77yM5aaC5p6cY2xhc3PliY3pnaLluKYgISDliJnml6DpnIDmt7vliqDliY3nvIBcclxuICogQHBhcmFtIGVsZW1lbnQg5YWD57Sg5a+56LGhXHJcbiAqIEBwYXJhbSBjbGFzc2VzIGNsYXNz5YiX6KGoXHJcbiAqIEByZXR1cm5zIEhUTUxFbGVtZW50IHwgbnVsbCBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRDU1NDbGFzc2VzKGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCwgLi4uY2xhc3NlczogQXJyYXk8c3RyaW5nIHwgdW5kZWZpbmVkPik6IEhUTUxFbGVtZW50IHwgbnVsbCB7XHJcbiAgICBpZiAoIWVsZW1lbnQpIHJldHVybiBudWxsO1xyXG5cclxuICAgIHJldHVybiB1cGRhdGVDU1NDbGFzc2VzKGVsZW1lbnQsIGZ1bmN0aW9uIChjdXJyZW50Q2xhc3Nlczogc3RyaW5nW10sIGluZGV4OiBudW1iZXIsIGl0ZW1DbGFzczogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF+aW5kZXgpIHtcclxuICAgICAgICAgICAgY3VycmVudENsYXNzZXMucHVzaChpdGVtQ2xhc3MpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFBSRUZJWCwgLi4uY2xhc3Nlcyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDnp7vpmaRDU1MgQ2xhc3NcclxuICog6buY6K6k5YmN57yA5Li6IF9fUFJFRklYX1/vvIzlpoLmnpxjbGFzc+WJjemdouW4piAhIOWImeaXoOmcgOa3u+WKoOWJjee8gFxyXG4gKiBAcGFyYW0gZWxlbWVudCDlhYPntKDlr7nosaFcclxuICogQHBhcmFtIGNsYXNzZXMgY2xhc3PliJfooahcclxuICogQHJldHVybnMgSFRNTEVsZW1lbnQgfCBudWxsIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNTU0NsYXNzZXMoZWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsLCAuLi5jbGFzc2VzOiBzdHJpbmdbXSk6IEhUTUxFbGVtZW50IHwgbnVsbCB7XHJcbiAgICBpZiAoIWVsZW1lbnQpIHJldHVybiBudWxsO1xyXG5cclxuICAgIHJldHVybiB1cGRhdGVDU1NDbGFzc2VzKGVsZW1lbnQsIGZ1bmN0aW9uIChjdXJyZW50Q2xhc3Nlczogc3RyaW5nW10sIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAofmluZGV4KSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRDbGFzc2VzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgUFJFRklYLCAuLi5jbGFzc2VzKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIpOaWreaYr+WQpuWMheWQq0NTUyBDbGFzc1xyXG4gKiDpu5jorqTliY3nvIDkuLogX19QUkVGSVhfX++8jOWmguaenGNsYXNz5YmN6Z2i5bimICEg5YiZ5peg6ZyA5re75Yqg5YmN57yAXHJcbiAqIEBwYXJhbSBlbGVtZW50IOWFg+e0oOWvueixoVxyXG4gKiBAcGFyYW0gY2xhc3NOYW1lIGNsYXNz5YiX6KGoXHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaGFzQ1NTQ2xhc3MoZWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsLCBjbGFzc05hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCFlbGVtZW50KSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgY29uc3QgY3VycmVudENsYXNzZXMgPSBlbGVtZW50LmNsYXNzTmFtZS5zcGxpdCgvXFxzKy9nKTtcclxuICAgIGNvbnN0IGNscyA9IGNsYXNzTmFtZS5pbmRleE9mKFwiIVwiKSA9PT0gMCA/IGNsYXNzTmFtZS5zdWJzdHIoMSkgOiBQUkVGSVggKyBjbGFzc05hbWU7XHJcbiAgICBjb25zdCBpbmRleCA9IGN1cnJlbnRDbGFzc2VzLmluZGV4T2YoY2xzKTtcclxuICAgIHJldHVybiAhIX5pbmRleDtcclxufVxyXG5cclxuLyoqXHJcbiAqIOabtOaWsENTUyBDbGFzc++8jOWMheaLrOaWsOWinuOAgeabtOaWsOOAgeWIoOmZpFxyXG4gKiDpu5jorqTliY3nvIDkuLogX19QUkVGSVhfX++8jOWmguaenGNsYXNz5YmN6Z2i5bimICEg5YiZ5peg6ZyA5re75Yqg5YmN57yAXHJcbiAqIEBwYXJhbSBlbGVtZW50IOWFg+e0oOWvueixoVxyXG4gKiBAcGFyYW0gaGFuZGxlciDmm7TmlrDmlrnlvI9cclxuICogQHBhcmFtIFtwcmVmaXhdIOWJjee8gOesplxyXG4gKiBAcGFyYW0gY2xhc3NlcyBjbGFzc+WIl+ihqFxyXG4gKiBAcmV0dXJucyBIVE1MRWxlbWVudCB8IG51bGwgXHJcbiAqL1xyXG5mdW5jdGlvbiB1cGRhdGVDU1NDbGFzc2VzKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBoYW5kbGVyOiAoY3VycmVudENsYXNzZXM6IHN0cmluZ1tdLCBpbmRleDogbnVtYmVyLCBpdGVtQ2xhc3M6IHN0cmluZykgPT4gdm9pZCwgcHJlZml4OiBzdHJpbmcgPSBQUkVGSVgsIC4uLmNsYXNzZXM6IEFycmF5PHN0cmluZyB8IHVuZGVmaW5lZD4pOiBIVE1MRWxlbWVudCB8IG51bGwge1xyXG4gICAgaWYgKCFlbGVtZW50KSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50Q2xhc3NlcyA9IGVsZW1lbnQuY2xhc3NOYW1lLnNwbGl0KC9cXHMrL2cpO1xyXG4gICAgY2xhc3Nlcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW0pIHtcclxuICAgICAgICAgICAgY29uc3QgY2xzID0gaXRlbS5pbmRleE9mKFwiIVwiKSA9PT0gMCA/IGl0ZW0uc3Vic3RyKDEpIDogcHJlZml4ICsgaXRlbTtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBjdXJyZW50Q2xhc3Nlcy5pbmRleE9mKGNscyk7XHJcbiAgICAgICAgICAgIGhhbmRsZXIoY3VycmVudENsYXNzZXMsIGluZGV4LCBjbHMpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gY3VycmVudENsYXNzZXMuam9pbihcIiBcIikudHJpbSgpO1xyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliJvlu7pkaXbmoIfnrb5cclxuICogQHBhcmFtIFtpZF0gaWRcclxuICogQHJldHVybnMgSFRNTERpdkVsZW1lbnQgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGl2RWxlbWVudChpZD86IHN0cmluZyk6IEhUTUxEaXZFbGVtZW50IHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaWYgKGNoZWNrT2ZUeXBlKGlkLCBcInN0cmluZ1wiKSkge1xyXG4gICAgICAgIGVsZW1lbnQuaWQgPSA8c3RyaW5nPmlkO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliJvlu7pzdmfmoIfnrb5cclxuICogQHBhcmFtIG5hbWUgc3Zn5Zu+5qCH5ZCN56ewXHJcbiAqIEByZXR1cm5zIFNWR1NWR0VsZW1lbnRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdmdFbGVtZW50KG5hbWU6IHN0cmluZyk6IFNWR1NWR0VsZW1lbnQge1xyXG4gICAgY29uc3Qgc3ZnRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwic3ZnXCIpO1xyXG4gICAgY29uc3QgdXNlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwidXNlXCIpO1xyXG4gICAgdXNlRWxlbWVudC5zZXRBdHRyaWJ1dGVOUyhcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiwgXCJ4bGluazpocmVmXCIsIGAjJHtuYW1lfWApO1xyXG4gICAgc3ZnRWxlbWVudC5hcHBlbmRDaGlsZCh1c2VFbGVtZW50KTtcclxuICAgIHJldHVybiBzdmdFbGVtZW50O1xyXG59IiwiaW1wb3J0IHsgY2hlY2tKU09OT2JqZWN0IH0gZnJvbSAnLi4vdmFsaWRhdG9yJztcclxuaW1wb3J0IHsgSlNPTk9iamVjdCB9IGZyb20gJy4vdHlwZSc7XHJcblxyXG4vKipcclxuICog5YWL6ZqGSlNPTuWvueixoVxyXG4gKiBAcGFyYW0gc291cmNlIOWOn0pTT07nsbvlnovlr7nosaFcclxuICogQHJldHVybnMg5YWL6ZqG5ZCO55qESlNPTuexu+Wei+WvueixoVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lSlNPTk9iamVjdDxUIGV4dGVuZHMgSlNPTk9iamVjdD4oc291cmNlOiBUKTogVCB7XHJcbiAgICBjb25zdCBuZXdPYmplY3QgPSA8YW55Pnt9O1xyXG5cclxuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHNvdXJjZSkpIHtcclxuICAgICAgICBuZXdPYmplY3Rba2V5XSA9IGNoZWNrSlNPTk9iamVjdChzb3VyY2Vba2V5XSkgPyBjbG9uZUpTT05PYmplY3Qoc291cmNlW2tleV0pIDogc291cmNlW2tleV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3T2JqZWN0IGFzIFQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlkIjlubZKU09O5a+56LGhXHJcbiAqIEBwYXJhbSBzb3VyY2Ug5rqQSlNPTuexu+Wei+WvueixoVxyXG4gKiBAcGFyYW0gZGVzdCDnm67moIdKU09O57G75Z6L5a+56LGhXHJcbiAqIEByZXR1cm5zIOWQiOW5tuWQjueahEpTT07nsbvlnovlr7nosaFcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUpTT05PYmplY3Q8VCBleHRlbmRzIEpTT05PYmplY3Q+KHNvdXJjZTogVCwgZGVzdDogVCk6IFQge1xyXG4gICAgY29uc3QgbmV3T2JqZWN0ID0gPGFueT5jbG9uZUpTT05PYmplY3Qoc291cmNlKTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhkZXN0KSkge1xyXG4gICAgICAgIGlmIChuZXdPYmplY3Rba2V5XSA9PT0gdW5kZWZpbmVkIHx8ICFjaGVja0pTT05PYmplY3QoZGVzdFtrZXldKSkge1xyXG4gICAgICAgICAgICBuZXdPYmplY3Rba2V5XSA9IGRlc3Rba2V5XTtcclxuXHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBuZXdPYmplY3Rba2V5XSA9IG1lcmdlSlNPTk9iamVjdChuZXdPYmplY3Rba2V5XSwgZGVzdFtrZXldKTtcclxuICAgIH1cclxuICAgIHJldHVybiBuZXdPYmplY3QgYXMgVDtcclxufVxyXG4iLCJpbXBvcnQgeyBDYW5UeXBlb2YsIFZhbHVlT3B0aW9uIH0gZnJvbSAnLi90eXBlJztcclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6Xog73lpJ/ooqsgdHlwZW9mIOeahOexu+Wei1xyXG4gKiBAcGFyYW0gZGF0YSDmlbDmja5cclxuICogQHBhcmFtIHR5cGVOYW1lcyDnsbvlnovpm4blkIhcclxuICogQHJldHVybnMgYm9vbGVhbiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja09mVHlwZShkYXRhOiBhbnksIC4uLnR5cGVOYW1lczogQXJyYXk8Q2FuVHlwZW9mPik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHR5cGVOYW1lcy5pbmRleE9mKHR5cGVvZiBkYXRhKSA+IC0xO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIOajgOafpeaYr+WQpuaYr+Wtl+espuS4suexu+Wei1xyXG4gKiBAcGFyYW0gZGF0YSDmlbDmja5cclxuICogQHJldHVybnMgYm9vbGVhbiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja1N0cmluZyhkYXRhOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBjaGVja09mVHlwZShkYXRhLCBcInN0cmluZ1wiKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeaYr+WQpuaYr+aVtOaVsOexu+Wei1xyXG4gKiBAcGFyYW0gZGF0YSDmlbDmja5cclxuICogQHJldHVybnMgYm9vbGVhbiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0ludChkYXRhOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBjaGVja09mVHlwZShkYXRhLCBcIm51bWJlclwiKSAmJiAoL15cXC0/WzAtOV0rJC8udGVzdChkYXRhKSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XmmK/lkKbmmK/mraPmlbTmlbDnsbvlnotcclxuICogQHBhcmFtIGRhdGEg5pWw5o2uXHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tQc3RJbnQoZGF0YTogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gY2hlY2tJbnQoZGF0YSkgJiYgZGF0YSA+PSAwO1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5piv5ZCm5piv5q2j5pWw5YC857G75Z6LXHJcbiAqIEBwYXJhbSBkYXRhIOaVsOaNrlxyXG4gKiBAcmV0dXJucyBib29sZWFuIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrUHN0TnVtYmVyKGRhdGE6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGNoZWNrT2ZUeXBlKGRhdGEsIFwibnVtYmVyXCIpICYmIGRhdGEgPj0gMDtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeaYr+WQpuaYr0pTT07lr7nosaHnsbvlnotcclxuICogQHBhcmFtIGRhdGEg5pWw5o2uXHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tKU09OT2JqZWN0KGRhdGE6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGNoZWNrT2ZUeXBlKGRhdGEsIFwib2JqZWN0XCIpICYmXHJcbiAgICAgICAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGRhdGEpLnRvTG93ZXJDYXNlKCkgPT09IFwiW29iamVjdCBvYmplY3RdXCIgJiZcclxuICAgICAgICAhY2hlY2tBcnJheShkYXRhKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeaYr+WQpuaYr+aVsOe7hOWvueixoeexu+Wei1xyXG4gKiBAcGFyYW0gZGF0YSDmlbDmja5cclxuICogQHJldHVybnMgYm9vbGVhbiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0FycmF5KGRhdGE6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoZGF0YSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XmmK/lkKbmmK/mjIflrprnsbvlnovmlbDnu4Tlr7nosaHnsbvlnotcclxuICogQHBhcmFtIGRhdGEg5pWw5o2uXHJcbiAqIEBwYXJhbSBjaGVja0l0ZW0g5pWw57uE6aG55qOA5p+l5Ye95pWwXHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tBcnJheUVhY2hTYW1lKGRhdGE6IGFueSwgY2hlY2tJdGVtOiAoaXRlbTogYW55KSA9PiBib29sZWFuKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YSkpIHJldHVybiBmYWxzZTtcclxuICAgIGlmIChkYXRhLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgbGV0IGlzU2FtZUFycmF5ID0gdHJ1ZTtcclxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XHJcbiAgICAgICAgaWYgKCFjaGVja0l0ZW0oaXRlbSkpIHtcclxuICAgICAgICAgICAgaXNTYW1lQXJyYXkgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpc1NhbWVBcnJheTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeWtl+espuS4suaYr+WQpuWMheWQq+aMh+WumuWtl+esplxyXG4gKiBAcGFyYW0gZGF0YSDmlbDlgLxcclxuICogQHBhcmFtIGNoYXJhY3RlciDlrZfnrKZcclxuICogQHJldHVybnMgYm9vbGVhbiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0NvbnRhaW5zKGRhdGE6IGFueSwgY2hhcmFjdGVyOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBjaGVja09mVHlwZShkYXRhLCBcInN0cmluZ1wiKSAmJiBkYXRhLmluZGV4T2YoY2hhcmFjdGVyKSA+IC0xO1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5piv5ZCm5piv5oyH5a6a5Y+v6YCJ5YC857G75Z6LXHJcbiAqIEBwYXJhbSBkYXRhIOaVsOaNrlxyXG4gKiBAcGFyYW0gdmFsdWVPcHRpb25zIOWPr+mAieWAvFxyXG4gKiBAcmV0dXJucyBib29sZWFuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tJblZhbHVlT3B0aW9ucyhkYXRhOiBhbnksIC4uLnZhbHVlT3B0aW9uczogVmFsdWVPcHRpb24pOiBib29sZWFuIHtcclxuICAgIHJldHVybiBjaGVja09mVHlwZShkYXRhLCBcImJvb2xlYW5cIiwgXCJudW1iZXJcIiwgXCJzdHJpbmdcIiwgXCJ1bmRlZmluZWRcIiwgXCJvYmplY3RcIikgJiYgdmFsdWVPcHRpb25zLmluZGV4T2YoZGF0YSkgPiAtMTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeWtl+espuS4sumVv+W6puaYr+WQpua7oei2s+acgOWwj+mVv+W6plxyXG4gKiBAcGFyYW0gZGF0YSDmlbDmja5cclxuICogQHBhcmFtIHRocmVzaG9sZCDpmIjlgLxcclxuICogQHJldHVybnMgYm9vbGVhbiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja01pbkxlbmd0aChkYXRhOiBhbnksIHRocmVzaG9sZDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gY2hlY2tPZlR5cGUoZGF0YSwgXCJzdHJpbmdcIikgJiYgZGF0YS5sZW5ndGggPj0gdGhyZXNob2xkO1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5a2X56ym5Liy6ZW/5bqm5piv5ZCm5ruh6Laz5pyA5aSn6ZW/5bqmXHJcbiAqIEBwYXJhbSBkYXRhIOaVsOaNrlxyXG4gKiBAcGFyYW0gdGhyZXNob2xkIOmYiOWAvFxyXG4gKiBAcmV0dXJucyBib29sZWFuIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTWF4TGVuZ3RoKGRhdGE6IGFueSwgdGhyZXNob2xkOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBjaGVja09mVHlwZShkYXRhLCBcInN0cmluZ1wiKSAmJiBkYXRhLmxlbmd0aCA8PSB0aHJlc2hvbGQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XlrZfnrKbkuLLplb/luqbmmK/lkKbmu6HotrPljLrpl7Tplb/luqZcclxuICogQHBhcmFtIGRhdGEg5pWw5o2uXHJcbiAqIEBwYXJhbSBtaW5UaHJlc2hvbGQg5pyA5bCP6ZiI5YC8XHJcbiAqIEBwYXJhbSBtYXhUaHJlc2hvbGQg5pyA5aSn6ZiI5YC8XHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tMZW5ndGgoZGF0YTogYW55LCBtaW5UaHJlc2hvbGQ6IG51bWJlciwgbWF4VGhyZXNob2xkOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBjaGVja01pbkxlbmd0aChkYXRhLCBtaW5UaHJlc2hvbGQpICYmIGNoZWNrTWF4TGVuZ3RoKGRhdGEsIG1heFRocmVzaG9sZCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XmlbDlgLzmmK/lkKblpKfkuo7mn5DkuKrlgLxcclxuICogQHBhcmFtIGRhdGEg5pWw5o2uXHJcbiAqIEBwYXJhbSB0aHJlc2hvbGQg6ZiI5YC8XHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tNaW4oZGF0YTogYW55LCB0aHJlc2hvbGQ6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGNoZWNrT2ZUeXBlKGRhdGEsIFwibnVtYmVyXCIpICYmIGRhdGEgPj0gdGhyZXNob2xkO1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5pWw5YC85piv5ZCm5bCP5LqO5p+Q5Liq5YC8XHJcbiAqIEBwYXJhbSBkYXRhIOaVsOaNrlxyXG4gKiBAcGFyYW0gdGhyZXNob2xkIOmYiOWAvFxyXG4gKiBAcmV0dXJucyBib29sZWFuIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTWF4KGRhdGE6IGFueSwgdGhyZXNob2xkOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBjaGVja09mVHlwZShkYXRhLCBcIm51bWJlclwiKSAmJiBkYXRhIDw9IHRocmVzaG9sZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeaVsOWAvOaYr+WQpuWcqOafkOS4quWMuumXtOWGhVxyXG4gKiBAcGFyYW0gZGF0YSDmlbDmja5cclxuICogQHBhcmFtIG1pblRocmVzaG9sZCDmnIDlsI/pmIjlgLxcclxuICogQHBhcmFtIG1heFRocmVzaG9sZCDmnIDlpKfpmIjlgLxcclxuICogQHJldHVybnMgYm9vbGVhbiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja1JhbmdlKGRhdGE6IGFueSwgbWluVGhyZXNob2xkOiBudW1iZXIsIG1heFRocmVzaG9sZDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gY2hlY2tNaW4oZGF0YSwgbWluVGhyZXNob2xkKSAmJiBjaGVja01heChkYXRhLCBtYXhUaHJlc2hvbGQpO1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l56m65oiWTlVMTOWtl+espuS4slxyXG4gKiBAcGFyYW0gZGF0YSDmlbDlgLxcclxuICogQHJldHVybnMgYm9vbGVhbiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0VtcHR5T3JOdWxsKGRhdGE6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGRhdGEgPT09IG51bGwgfHwgKGNoZWNrT2ZUeXBlKGRhdGEsIFwic3RyaW5nXCIpICYmIGRhdGEubGVuZ3RoID09PSAwKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpemdnuepuuaIlumdnk5VTEzlrZfnrKbkuLJcclxuICogQHBhcmFtIGRhdGEg5pWw5YC8XHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tOb0VtcHR5T3JOdWxsKGRhdGE6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGNoZWNrT2ZUeXBlKGRhdGEsIFwic3RyaW5nXCIpICYmIGRhdGEubGVuZ3RoID4gMDtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeaYr+WQpuaYr+ato+WImeihqOi+vuW8j1xyXG4gKiBAcGFyYW0gZGF0YSDmlbDlgLxcclxuICogQHJldHVybnMgYm9vbGVhbiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja1JlZ0V4cChkYXRhOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBkYXRhIGluc3RhbmNlb2YgUmVnRXhwO1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5piv5ZCm5piv6aKc6Imy5YC8XHJcbiAqIEBwYXJhbSBkYXRhIOaVsOWAvFxyXG4gKiBAcmV0dXJucyBib29sZWFuIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQ29sb3IoZGF0YTogYW55KTogYm9vbGVhbiB7XHJcbiAgICB2YXIgYmluYXJ5UmVnID0gL14jKFswLTlhLWZdezZ9fFswLTlhLWZdezN9KSQvaTtcclxuICAgIHZhciByZ2JSZXggPSAvXnJnYlxcKChbMC05XXxbMC05XVswLTldfDI1WzAtNV18MlswLTRdWzAtOV18WzAtMV1bMC05XVswLTldKVxcLChbMC05XXxbMC05XVswLTldfDI1WzAtNV18MlswLTRdWzAtOV18WzAtMV1bMC05XVswLTldKVxcLChbMC05XXxbMC05XVswLTldfDI1WzAtNV18MlswLTRdWzAtOV18WzAtMV1bMC05XVswLTldKVxcKSQvaTtcclxuICAgIHZhciByZ2JhUmV4ID0gL15yZ2JhXFwoKFswLTldfFswLTldWzAtOV18MjVbMC01XXwyWzAtNF1bMC05XXxbMC0xXVswLTldWzAtOV0pXFwsKFswLTldfFswLTldWzAtOV18MjVbMC01XXwyWzAtNF1bMC05XXxbMC0xXVswLTldWzAtOV0pXFwsKFswLTldfFswLTldWzAtOV18MjVbMC01XXwyWzAtNF1bMC05XXxbMC0xXVswLTldWzAtOV0pXFwsKDF8MS4wfDAuWzAtOV0pXFwpJC9pO1xyXG5cclxuICAgIHJldHVybiBiaW5hcnlSZWcudGVzdChkYXRhKSB8fCByZ2JSZXgudGVzdChkYXRhKSB8fCByZ2JhUmV4LnRlc3QoZGF0YSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgQWxpZ24gfSBmcm9tIFwiLi4vY29tcG9uZW50L3VpLXRvb2wtYmFyL2NvbnN0XCI7XHJcbmltcG9ydCB7IFN1cHBvcnRJY29uIH0gZnJvbSBcIi4uL2NvbXBvbmVudC91aS1pY29uL2NvbnN0XCI7XHJcblxyXG4vKipcclxuICog54mI5pys5Y+3XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgVkVSU0lPTjogc3RyaW5nID0gXCIzLjAuMFwiO1xyXG5cclxuLyoqXHJcbiAqIOWJjee8gOesplxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFBSRUZJWDogc3RyaW5nID0gXCJsYXl4LVwiO1xyXG5cclxuLyoqXHJcbiAqIOm7mOiupOW8gOWni+WxguaVsFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFNUQVJUX1pJTkRFWDogbnVtYmVyID0gMTAwMDAwMDA7XHJcblxyXG4vKipcclxuICog6buY6K6k56qX5Y+j5a695bqmXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9XSU5ET1dfV0lEVEg6IG51bWJlciA9IDgwMDtcclxuXHJcbi8qKlxyXG4gKiDpu5jorqTnqpflj6Ppq5jluqZcclxuICovXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX1dJTkRPV19IRUlHSFQ6IG51bWJlciA9IDYwMDtcclxuXHJcbi8qKlxyXG4gKiDpu5jorqTnqpflj6Pog4zmma/popzoibJcclxuICovXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX1dJTkRPV19CQUNLR1JPVU5EX0NPTE9SOiBzdHJpbmcgPSBcIiNmZmZmZmZcIjtcclxuXHJcbi8qKlxyXG4gKiDpu5jorqTlt6XlhbfmoI/og4zmma/popzoibJcclxuICovXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX1RPT0xCQVJfQkFDS0dST1VORF9DT0xPUjogc3RyaW5nID0gXCIjZmZmZmZmXCI7XHJcblxyXG4vKipcclxuICog6buY6K6k5bel5YW35qCP6auY5bqmXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9UT09MQkFSX0hFSUdIVDogbnVtYmVyID0gMzA7XHJcblxyXG4vKipcclxuICog5qCH6aKY5qCP6buY6K6k5paH5pysXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9USVRMRUJBUl9MQUJFTCA9IFwi5pyq5ZG95ZCNXCI7XHJcblxyXG4vKipcclxuICog5qCH6aKY5qCP6buY6K6k6aKc6ImyXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9USVRMRUJBUl9DT0xPUiA9IFwiIzAwMDAwMFwiO1xyXG5cclxuLyoqXHJcbiAqIOagh+mimOagj+m7mOiupOWvuem9kOaWueW8j1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfVElUTEVCQVJfQUxJR04gPSBBbGlnbi5MRUZUO1xyXG5cclxuLyoqXHJcbiAqIOagh+mimOagj+m7mOiupOWtl+S9k+Wkp+Wwj1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfVElUTEVCQVJfRk9OVFNJWkUgPSAxNDtcclxuXHJcbi8qKlxyXG4gKiDlhoXnva7mlK/mjIHor63oqIBcclxuICovXHJcbmV4cG9ydCBjb25zdCBlbnVtIFN1cHBvcnRMYW5ndWFnZSB7XHJcbiAgICAvKipcclxuICAgICAqIOS4reaWh1xyXG4gICAgICovXHJcbiAgICBaSF9DTiA9IFwiWkhfQ05cIixcclxuICAgIC8qKlxyXG4gICAgICog6Iux5paHXHJcbiAgICAgKi9cclxuICAgIEVOX1VTID0gXCJFTl9VU1wiXHJcbn0iLCJpbXBvcnQgJy4uL2Fzc2V0L2ljb24nO1xyXG5pbXBvcnQgJy4uL2Fzc2V0L3N0eWxlJztcclxuXHJcbmltcG9ydCB7IERFRkFVTFRfSUNPTiwgREVGQVVMVF9JQ09OX0NPTE9SLCBERUZBVUxUX0lDT05fU0laRSB9IGZyb20gJy4uL2NvbXBvbmVudC91aS1pY29uL2NvbnN0JztcclxuaW1wb3J0IHsgVUlJY29uT3B0aW9uIH0gZnJvbSAnLi4vY29tcG9uZW50L3VpLWljb24vdHlwZSc7XHJcbmltcG9ydCB7IEFsaWduIH0gZnJvbSAnLi4vY29tcG9uZW50L3VpLXRvb2wtYmFyL2NvbnN0JztcclxuaW1wb3J0IHsgVGl0bGVCYXJPcHRpb24gfSBmcm9tICcuLi9jb21wb25lbnQvdWktdG9vbC1iYXIvdHlwZSc7XHJcbmltcG9ydCBVSVdpbmRvdyBmcm9tICcuLi9jb21wb25lbnQvdWktd2luZG93JztcclxuaW1wb3J0IHsgVUlXaW5kb3dPcHRpb24gfSBmcm9tICcuLi9jb21wb25lbnQvdWktd2luZG93L3R5cGUnO1xyXG5pbXBvcnQgeyBjb21iaW5lLCBpblZhbHVlT3B0aW9ucywgaXNOb0VtcHR5T3JOdWxsLCBpc1BzdEludCwgbWluIH0gZnJvbSAnLi4vY29yZS9kZWNvcmF0b3IvcHJvcGVydHktZGVjb3JhdG9yJztcclxuaW1wb3J0IEV2ZW50QnVzIGZyb20gJy4uL2NvcmUvZXZlbnQtYnVzJztcclxuaW1wb3J0IHsgRXZlbnRTZXR0ZXIgfSBmcm9tICcuLi9jb3JlL2V2ZW50LWJ1cy90eXBlJztcclxuaW1wb3J0IHsgY2hlY2tDb2xvciwgY2hlY2tOb0VtcHR5T3JOdWxsLCBjaGVja09mVHlwZSwgY2hlY2tQc3RJbnQsIGNoZWNrUHN0TnVtYmVyLCBjaGVja1N0cmluZyB9IGZyb20gJy4uL2NvcmUvdmFsaWRhdG9yJztcclxuaW1wb3J0IHtcclxuICAgIERFRkFVTFRfVElUTEVCQVJfQUxJR04sXHJcbiAgICBERUZBVUxUX1RJVExFQkFSX0NPTE9SLFxyXG4gICAgREVGQVVMVF9USVRMRUJBUl9GT05UU0laRSxcclxuICAgIERFRkFVTFRfVElUTEVCQVJfTEFCRUwsXHJcbiAgICBERUZBVUxUX1RPT0xCQVJfQkFDS0dST1VORF9DT0xPUixcclxuICAgIERFRkFVTFRfVE9PTEJBUl9IRUlHSFQsXHJcbiAgICBERUZBVUxUX1dJTkRPV19CQUNLR1JPVU5EX0NPTE9SLFxyXG4gICAgREVGQVVMVF9XSU5ET1dfSEVJR0hULFxyXG4gICAgREVGQVVMVF9XSU5ET1dfV0lEVEgsXHJcbiAgICBQUkVGSVgsXHJcbiAgICBTVEFSVF9aSU5ERVgsXHJcbiAgICBTdXBwb3J0TGFuZ3VhZ2UsXHJcbiAgICBWRVJTSU9OLFxyXG59IGZyb20gJy4vY29uc3QnO1xyXG5pbXBvcnQgeyBoYW5kbGVyT3B0aW9ucyB9IGZyb20gJy4vcGFydGlhbCc7XHJcbmltcG9ydCB7IEVudHJ5T3B0aW9uLCBUb29sQmFyRGVmYXVsdCwgV2luZG93RGVmYXVsdCB9IGZyb20gJy4vdHlwZSc7XHJcblxyXG4vKipcclxuICog5YWl5Y+j5Y2V5L6L57G777yM5om/6L29552A5YWo5bGA5pWw5o2u5a2Y5YKoXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbnRyeSB7XHJcbiAgICAvKipcclxuICAgICAqIOengeacieWMluaehOmAoOWHveaVsO+8jOWunueOsOWNleS+i1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKG9wdGlvbnM6IEVudHJ5T3B0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVyT3B0aW9ucyhvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWkhOeQhuWIneWni+S8oOWFpeWPguaVsFxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMg5Y+v6YCJ5Y+C5pWwXHJcbiAgICAgKiBAcmV0dXJucyB2b2lkXHJcbiAgICAgKi9cclxuICAgIGhhbmRsZXJPcHRpb25zOiAob3B0aW9uczogRW50cnlPcHRpb24pID0+IHZvaWQgPSBoYW5kbGVyT3B0aW9ucztcclxuXHJcbiAgICAvKipcclxuICAgICAqIOeJiOacrOWPt1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgdmVyc2lvbjogc3RyaW5nID0gVkVSU0lPTjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOi1t+Wni+WxguaVsCzkuI3og73lsI/kuo4xMDAwXHJcbiAgICAgKi9cclxuICAgIEBpc1BzdEludCgpXHJcbiAgICBAbWluKDEwMDApXHJcbiAgICBwdWJsaWMgc3RhcnRaSW5kZXg6IG51bWJlciA9IFNUQVJUX1pJTkRFWDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWJjee8gOesplxyXG4gICAgICovXHJcbiAgICBAaXNOb0VtcHR5T3JOdWxsKClcclxuICAgIHB1YmxpYyByZWFkb25seSBwcmVmaXg6IHN0cmluZyA9IFBSRUZJWDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOm7mOiupOivreiogFxyXG4gICAgICovXHJcbiAgICBAaW5WYWx1ZU9wdGlvbnMoU3VwcG9ydExhbmd1YWdlLlpIX0NOLCBTdXBwb3J0TGFuZ3VhZ2UuRU5fVVMpXHJcbiAgICBwdWJsaWMgbGFuZzogU3VwcG9ydExhbmd1YWdlID0gU3VwcG9ydExhbmd1YWdlLlpIX0NOO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog56qX5Y+j6buY6K6k6YWN572uXHJcbiAgICAgKi9cclxuICAgIEBjb21iaW5lKHtcclxuICAgICAgICB3aWR0aDogY2hlY2tQc3ROdW1iZXIsXHJcbiAgICAgICAgaGVpZ2h0OiBjaGVja1BzdE51bWJlcixcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNoZWNrQ29sb3IsXHJcbiAgICAgICAgdG9vbEJhcjoge1xyXG4gICAgICAgICAgICBkZWNvcmF0b3I6IHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogY2hlY2tQc3ROdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNoZWNrQ29sb3IsXHJcbiAgICAgICAgICAgICAgICB0aXRsZUJhcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlY29yYXRvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogY2hlY2tTdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBjaGVja0NvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbjogW0FsaWduLkxFRlQsIEFsaWduLkNFTlRFUiwgQWxpZ24uUklHSFRdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogY2hlY2tQc3RJbnRcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IFtmYWxzZV1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBpY29uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVjb3JhdG9yOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGNoZWNrTm9FbXB0eU9yTnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogY2hlY2tQc3RJbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBjaGVja0NvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBbZmFsc2VdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9wdGlvbnM6IFtmYWxzZV1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgcHVibGljIHdpbmRvdzogV2luZG93RGVmYXVsdCA9IDxXaW5kb3dEZWZhdWx0PntcclxuICAgICAgICB3aWR0aDogREVGQVVMVF9XSU5ET1dfV0lEVEgsIC8vIOm7mOiupOWuveW6plxyXG4gICAgICAgIGhlaWdodDogREVGQVVMVF9XSU5ET1dfSEVJR0hULCAgLy8g6buY6K6k6auY5bqmXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBERUZBVUxUX1dJTkRPV19CQUNLR1JPVU5EX0NPTE9SLCAgICAvL+m7mOiupOiDjOaZr+minOiJslxyXG4gICAgICAgIHRvb2xCYXI6IDxUb29sQmFyRGVmYXVsdCB8IGZhbHNlPntcclxuICAgICAgICAgICAgaGVpZ2h0OiBERUZBVUxUX1RPT0xCQVJfSEVJR0hULCAvLyDpu5jorqTlt6XlhbfmoI/pq5jluqZcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBERUZBVUxUX1RPT0xCQVJfQkFDS0dST1VORF9DT0xPUiwgLy8g6buY6K6k5bel5YW35qCP6IOM5pmv6aKc6ImyXHJcbiAgICAgICAgICAgIHRpdGxlQmFyOiA8VGl0bGVCYXJPcHRpb24gfCBmYWxzZT57XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogREVGQVVMVF9USVRMRUJBUl9MQUJFTCwgIC8vIOm7mOiupOagh+mimOagj+aWh+acrFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IERFRkFVTFRfVElUTEVCQVJfQ09MT1IsIC8vIOm7mOiupOagh+mimOagj+minOiJslxyXG4gICAgICAgICAgICAgICAgYWxpZ246IERFRkFVTFRfVElUTEVCQVJfQUxJR04sIC8vIOm7mOiupOagh+mimOagj+Wvuem9kOaWueW8j1xyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IERFRkFVTFRfVElUTEVCQVJfRk9OVFNJWkUgLy8g6buY6K6k5qCH6aKY5qCP5a2X5L2T5aSn5bCPXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGljb246IDxVSUljb25PcHRpb24gfCBmYWxzZT57XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBERUZBVUxUX0lDT04sIC8vIOm7mOiupOWbvuagh+WQjeensFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogREVGQVVMVF9JQ09OX1NJWkUsIC8vIOm7mOiupOWbvuagh+Wkp+Wwj1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IERFRkFVTFRfSUNPTl9DT0xPUiAvLyDpu5jorqTlm77moIfpopzoibJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvZPliY3lsYLnuqfmlbBcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfekluZGV4OiBudW1iZXIgPSB0aGlzLnN0YXJ0WkluZGV4O1xyXG4gICAgZ2V0IHpJbmRleCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fekluZGV4ID0gdGhpcy5fekluZGV4ICsgMjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOebkeWQrOS6i+S7tlxyXG4gICAgICogQHBhcmFtIHF1ZXVlcyDkuovku7bpmJ/liJdcclxuICAgICAqL1xyXG4gICAgb24ocXVldWVzOiBFdmVudFNldHRlciA9IHt9KTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChjb25zdCBldmVudEtleSBpbiBxdWV1ZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgaGFuZGxlciA9IHF1ZXVlc1tldmVudEtleV07XHJcbiAgICAgICAgICAgIGlmIChjaGVja09mVHlwZShoYW5kbGVyLCBcImZ1bmN0aW9uXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBFdmVudEJ1cy5nZXRJbnN0YW5jZSgpLm9uKGV2ZW50S2V5LCBoYW5kbGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaJk+W8gOaWsOeql+WPo1xyXG4gICAgICogQHBhcmFtIG9wdGlvbnMg56qX5Y+j5Y+C5pWwXHJcbiAgICAgKiBAcmV0dXJucyB2b2lkXHJcbiAgICAgKi9cclxuICAgIG9wZW4ob3B0aW9uczogVUlXaW5kb3dPcHRpb24pOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB1aVdpbmRvdyA9IG5ldyBVSVdpbmRvdyhvcHRpb25zKTtcclxuICAgICAgICBjb25zdCB1aVdpbmRvd0VsZW1lbnQgPSB1aVdpbmRvdy5wcmVzZW50KCk7XHJcbiAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQodWlXaW5kb3dFbGVtZW50KTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHVpV2luZG93RWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpnZnmgIHlrp7kvovlj5jph49cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IEVudHJ5O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5ZSv5LiA5Y+v55So5a+56LGhXHJcbiAgICAgKiBAcGFyYW0gW29wdGlvbnNdIOWFpeWPo+WPguaVsFxyXG4gICAgICogQHJldHVybnMgRW50cnkgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2Uob3B0aW9uczogRW50cnlPcHRpb24gPSA8RW50cnlPcHRpb24+e30pOiBFbnRyeSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgRW50cnkob3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLmhhbmRsZXJPcHRpb25zKG9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuICAgIH1cclxufSIsImltcG9ydCBFbnRyeSBmcm9tICcuLyc7XHJcbmltcG9ydCB7IFN1cHBvcnRMYW5ndWFnZSB9IGZyb20gJy4vY29uc3QnO1xyXG5pbXBvcnQgeyBFbnRyeU9wdGlvbiwgV2luZG93RGVmYXVsdCB9IGZyb20gJy4vdHlwZSc7XHJcblxyXG4vKipcclxuICog5aSE55CG5Yid5aeL5Lyg5YWl5Y+C5pWwXHJcbiAqIEBwYXJhbSBvcHRpb25zIOaOp+S7tuaUr+aMgeS8oOWFpeWPr+mAieWPguaVsFxyXG4gKiBAcmV0dXJucyB2b2lkXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlck9wdGlvbnModGhpczogRW50cnksIG9wdGlvbnM6IEVudHJ5T3B0aW9uKTogdm9pZCB7XHJcbiAgICB0aGlzLmxhbmcgPSBvcHRpb25zPy5sYW5nID8/IFN1cHBvcnRMYW5ndWFnZS5aSF9DTjtcclxuICAgIHRoaXMuc3RhcnRaSW5kZXggPSBvcHRpb25zPy5zdGFydFpJbmRleCA/PyB0aGlzLnN0YXJ0WkluZGV4O1xyXG4gICAgdGhpcy53aW5kb3cgPSA8V2luZG93RGVmYXVsdD5vcHRpb25zPy53aW5kb3cgPz8gdGhpcy53aW5kb3c7XHJcbn0iLCJpbXBvcnQgRW50cnkgZnJvbSAnLi9hcHAvZW50cnknO1xyXG5pbXBvcnQgeyBFbnRyeU9wdGlvbiwgRW50cnlPdmVydCB9IGZyb20gJy4vYXBwL2VudHJ5L3R5cGUnO1xyXG5cclxuLyoqXHJcbiAqIOWvueWkluWFrOW8gOaWueazlVxyXG4gKi9cclxuZnVuY3Rpb24gb3ZlcnQoKTogRW50cnlPdmVydCB7XHJcbiAgICBjb25zdCBlbnRyeSA9IEVudHJ5LmdldEluc3RhbmNlKCk7XHJcblxyXG4gICAgY29uc3QgZW50cnlPdmVydCA9IDxFbnRyeU92ZXJ0PmZ1bmN0aW9uIChvcHRpb25zOiBFbnRyeU9wdGlvbik6IHZvaWQge1xyXG4gICAgICAgIEVudHJ5LmdldEluc3RhbmNlKG9wdGlvbnMpO1xyXG4gICAgfTtcclxuXHJcbiAgICBlbnRyeU92ZXJ0Lm9uID0gZW50cnkub247XHJcbiAgICBlbnRyeU92ZXJ0LnZlcnNpb24gPSBlbnRyeS52ZXJzaW9uO1xyXG4gICAgZW50cnlPdmVydC5vcGVuID0gZW50cnkub3BlbjtcclxuXHJcbiAgICByZXR1cm4gZW50cnlPdmVydDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgb3ZlcnQoKTsiXSwic291cmNlUm9vdCI6IiJ9