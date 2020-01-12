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
        this.entry = entry_1.Entry.getInstance();
        this.eventBus = event_bus_1.EventBus.getInstance();
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
exports.Component = Component;


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
}(__1.Component));
exports.UIICon = UIICon;


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
            var uiIcon = new ui_icon_1.UIICon(this.icon);
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
}(__1.Component));
exports.UIToolBar = UIToolBar;


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
            var uiToolBar = new ui_tool_bar_1.UIToolBar(this.toolBar);
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
}(__1.Component));
exports.UIWindow = UIWindow;


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
    EventBus.prototype.emit = function (eventKey, message, isSync) {
        if (isSync === void 0) { isSync = false; }
        if (!this.messageQueues.hasOwnProperty(eventKey))
            return;
        var eventValue = this.messageQueues[eventKey];
        if (validator_1.checkOfType(eventValue, "function")) {
            !isSync ? setTimeout(function () {
                eventValue(message);
            }, 0) : eventValue(message);
        }
        else if (validator_1.checkArray(eventValue)) {
            eventValue.map(function (handler) {
                !isSync ? setTimeout(function () {
                    handler(message);
                }, 0) : handler(message);
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
exports.EventBus = EventBus;


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
                event_bus_1.EventBus.getInstance().on(eventKey, handler);
            }
        }
    };
    Entry.prototype.open = function (options) {
        var uiWindow = new ui_window_1.UIWindow(options);
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
exports.Entry = Entry;


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
    var entry = entry_1.Entry.getInstance();
    var entryOvert = function (options) {
        entry_1.Entry.getInstance(options);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYXl4L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9sYXl4L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xheXgvLi9ub2RlX21vZHVsZXMvc3ZnLWJha2VyLXJ1bnRpbWUvYnJvd3Nlci1zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vbGF5eC8uL25vZGVfbW9kdWxlcy9zdmctc3ByaXRlLWxvYWRlci9ydW50aW1lL2Jyb3dzZXItc3ByaXRlLmJ1aWxkLmpzIiwid2VicGFjazovL2xheXgvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL2xheXgvLi9zcmMvYXBwL2Fzc2V0L2ljb24vaWNvbi5zdmciLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvYXNzZXQvaWNvbi9pbmRleC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9hc3NldC9zdHlsZS9hbmltYXRlLmNzcz85YjNmIiwid2VicGFjazovL2xheXgvLi9zcmMvYXBwL2Fzc2V0L3N0eWxlL2NvbW1vbi5jc3M/Mzk0NiIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9hc3NldC9zdHlsZS9pY29uLmNzcz84MWU2Iiwid2VicGFjazovL2xheXgvLi9zcmMvYXBwL2Fzc2V0L3N0eWxlL2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9zcmMvYXBwL2Fzc2V0L3N0eWxlL3Rvb2wtYmFyLmNzcz9lOWRiIiwid2VicGFjazovL2xheXgvLi9zcmMvYXBwL2Fzc2V0L3N0eWxlL3dpbmRvdy5jc3M/MWE2ZSIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9jb21wb25lbnQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvY29tcG9uZW50L3VpLWljb24vY29uc3QudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvY29tcG9uZW50L3VpLWljb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvY29tcG9uZW50L3VpLWljb24vcGFydGlhbC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9jb21wb25lbnQvdWktdG9vbC1iYXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvY29tcG9uZW50L3VpLXRvb2wtYmFyL3BhcnRpYWwudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvY29tcG9uZW50L3VpLXdpbmRvdy9jb25zdC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9jb21wb25lbnQvdWktd2luZG93L2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9zcmMvYXBwL2NvbXBvbmVudC91aS13aW5kb3cvcGFydGlhbC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9jb3JlL2RlY29yYXRvci9wcm9wZXJ0eS1kZWNvcmF0b3IudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvY29yZS9ldmVudC1idXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvY29yZS9leGNlcHRpb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvY29yZS9oZWxwZXIvZWxlbWVudC1oZWxwZXIudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvY29yZS9oZWxwZXIvb2JqZWN0LWhlbHBlci50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9jb3JlL3ZhbGlkYXRvci9pbmRleC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9lbnRyeS9jb25zdC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9lbnRyeS9pbmRleC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9lbnRyeS9wYXJ0aWFsLnRzIiwid2VicGFjazovL2xheXgvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNW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QyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztJQUNuQyxVQUFVLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7SUFFN0IsT0FBTyxVQUFVLENBQUM7QUFDdEIsQ0FBQztBQUVELGtCQUFlLEtBQUssRUFBRSxDQUFDIiwiZmlsZSI6ImxheXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJsYXl4XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImxheXhcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcblx0dHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuXHR0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuXHQoZ2xvYmFsLkJyb3dzZXJTcHJpdGVTeW1ib2wgPSBmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbnZhciBTcHJpdGVTeW1ib2wgPSBmdW5jdGlvbiBTcHJpdGVTeW1ib2wocmVmKSB7XG4gIHZhciBpZCA9IHJlZi5pZDtcbiAgdmFyIHZpZXdCb3ggPSByZWYudmlld0JveDtcbiAgdmFyIGNvbnRlbnQgPSByZWYuY29udGVudDtcblxuICB0aGlzLmlkID0gaWQ7XG4gIHRoaXMudmlld0JveCA9IHZpZXdCb3g7XG4gIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG59O1xuXG4vKipcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuU3ByaXRlU3ltYm9sLnByb3RvdHlwZS5zdHJpbmdpZnkgPSBmdW5jdGlvbiBzdHJpbmdpZnkgKCkge1xuICByZXR1cm4gdGhpcy5jb250ZW50O1xufTtcblxuLyoqXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblNwcml0ZVN5bWJvbC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyAoKSB7XG4gIHJldHVybiB0aGlzLnN0cmluZ2lmeSgpO1xufTtcblxuU3ByaXRlU3ltYm9sLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSAoKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgWydpZCcsICd2aWV3Qm94JywgJ2NvbnRlbnQnXS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7IHJldHVybiBkZWxldGUgdGhpcyQxW3Byb3BdOyB9KTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnRcbiAqIEByZXR1cm4ge0VsZW1lbnR9XG4gKi9cbnZhciBwYXJzZSA9IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gIHZhciBoYXNJbXBvcnROb2RlID0gISFkb2N1bWVudC5pbXBvcnROb2RlO1xuICB2YXIgZG9jID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhjb250ZW50LCAnaW1hZ2Uvc3ZnK3htbCcpLmRvY3VtZW50RWxlbWVudDtcblxuICAvKipcbiAgICogRml4IGZvciBicm93c2VyIHdoaWNoIGFyZSB0aHJvd2luZyBXcm9uZ0RvY3VtZW50RXJyb3JcbiAgICogaWYgeW91IGluc2VydCBhbiBlbGVtZW50IHdoaWNoIGlzIG5vdCBwYXJ0IG9mIHRoZSBkb2N1bWVudFxuICAgKiBAc2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc5ODY1MTkvNDYyNDQwM1xuICAgKi9cbiAgaWYgKGhhc0ltcG9ydE5vZGUpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuaW1wb3J0Tm9kZShkb2MsIHRydWUpO1xuICB9XG5cbiAgcmV0dXJuIGRvYztcbn07XG5cbnZhciBjb21tb25qc0dsb2JhbCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDoge307XG5cblxuXG5cblxuZnVuY3Rpb24gY3JlYXRlQ29tbW9uanNNb2R1bGUoZm4sIG1vZHVsZSkge1xuXHRyZXR1cm4gbW9kdWxlID0geyBleHBvcnRzOiB7fSB9LCBmbihtb2R1bGUsIG1vZHVsZS5leHBvcnRzKSwgbW9kdWxlLmV4cG9ydHM7XG59XG5cbnZhciBkZWVwbWVyZ2UgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlLCBleHBvcnRzKSB7XG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcbiAgICBpZiAodHlwZW9mIHVuZGVmaW5lZCA9PT0gJ2Z1bmN0aW9uJyAmJiB1bmRlZmluZWQuYW1kKSB7XG4gICAgICAgIHVuZGVmaW5lZChmYWN0b3J5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgICB9XG59KGNvbW1vbmpzR2xvYmFsLCBmdW5jdGlvbiAoKSB7XG5cbmZ1bmN0aW9uIGlzTWVyZ2VhYmxlT2JqZWN0KHZhbCkge1xuICAgIHZhciBub25OdWxsT2JqZWN0ID0gdmFsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnO1xuXG4gICAgcmV0dXJuIG5vbk51bGxPYmplY3RcbiAgICAgICAgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbCkgIT09ICdbb2JqZWN0IFJlZ0V4cF0nXG4gICAgICAgICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWwpICE9PSAnW29iamVjdCBEYXRlXSdcbn1cblxuZnVuY3Rpb24gZW1wdHlUYXJnZXQodmFsKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsKSA/IFtdIDoge31cbn1cblxuZnVuY3Rpb24gY2xvbmVJZk5lY2Vzc2FyeSh2YWx1ZSwgb3B0aW9uc0FyZ3VtZW50KSB7XG4gICAgdmFyIGNsb25lID0gb3B0aW9uc0FyZ3VtZW50ICYmIG9wdGlvbnNBcmd1bWVudC5jbG9uZSA9PT0gdHJ1ZTtcbiAgICByZXR1cm4gKGNsb25lICYmIGlzTWVyZ2VhYmxlT2JqZWN0KHZhbHVlKSkgPyBkZWVwbWVyZ2UoZW1wdHlUYXJnZXQodmFsdWUpLCB2YWx1ZSwgb3B0aW9uc0FyZ3VtZW50KSA6IHZhbHVlXG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRBcnJheU1lcmdlKHRhcmdldCwgc291cmNlLCBvcHRpb25zQXJndW1lbnQpIHtcbiAgICB2YXIgZGVzdGluYXRpb24gPSB0YXJnZXQuc2xpY2UoKTtcbiAgICBzb3VyY2UuZm9yRWFjaChmdW5jdGlvbihlLCBpKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGVzdGluYXRpb25baV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltpXSA9IGNsb25lSWZOZWNlc3NhcnkoZSwgb3B0aW9uc0FyZ3VtZW50KTtcbiAgICAgICAgfSBlbHNlIGlmIChpc01lcmdlYWJsZU9iamVjdChlKSkge1xuICAgICAgICAgICAgZGVzdGluYXRpb25baV0gPSBkZWVwbWVyZ2UodGFyZ2V0W2ldLCBlLCBvcHRpb25zQXJndW1lbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC5pbmRleE9mKGUpID09PSAtMSkge1xuICAgICAgICAgICAgZGVzdGluYXRpb24ucHVzaChjbG9uZUlmTmVjZXNzYXJ5KGUsIG9wdGlvbnNBcmd1bWVudCkpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGRlc3RpbmF0aW9uXG59XG5cbmZ1bmN0aW9uIG1lcmdlT2JqZWN0KHRhcmdldCwgc291cmNlLCBvcHRpb25zQXJndW1lbnQpIHtcbiAgICB2YXIgZGVzdGluYXRpb24gPSB7fTtcbiAgICBpZiAoaXNNZXJnZWFibGVPYmplY3QodGFyZ2V0KSkge1xuICAgICAgICBPYmplY3Qua2V5cyh0YXJnZXQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgZGVzdGluYXRpb25ba2V5XSA9IGNsb25lSWZOZWNlc3NhcnkodGFyZ2V0W2tleV0sIG9wdGlvbnNBcmd1bWVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAoIWlzTWVyZ2VhYmxlT2JqZWN0KHNvdXJjZVtrZXldKSB8fCAhdGFyZ2V0W2tleV0pIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2tleV0gPSBjbG9uZUlmTmVjZXNzYXJ5KHNvdXJjZVtrZXldLCBvcHRpb25zQXJndW1lbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVzdGluYXRpb25ba2V5XSA9IGRlZXBtZXJnZSh0YXJnZXRba2V5XSwgc291cmNlW2tleV0sIG9wdGlvbnNBcmd1bWVudCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZGVzdGluYXRpb25cbn1cblxuZnVuY3Rpb24gZGVlcG1lcmdlKHRhcmdldCwgc291cmNlLCBvcHRpb25zQXJndW1lbnQpIHtcbiAgICB2YXIgYXJyYXkgPSBBcnJheS5pc0FycmF5KHNvdXJjZSk7XG4gICAgdmFyIG9wdGlvbnMgPSBvcHRpb25zQXJndW1lbnQgfHwgeyBhcnJheU1lcmdlOiBkZWZhdWx0QXJyYXlNZXJnZSB9O1xuICAgIHZhciBhcnJheU1lcmdlID0gb3B0aW9ucy5hcnJheU1lcmdlIHx8IGRlZmF1bHRBcnJheU1lcmdlO1xuXG4gICAgaWYgKGFycmF5KSB7XG4gICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHRhcmdldCkgPyBhcnJheU1lcmdlKHRhcmdldCwgc291cmNlLCBvcHRpb25zQXJndW1lbnQpIDogY2xvbmVJZk5lY2Vzc2FyeShzb3VyY2UsIG9wdGlvbnNBcmd1bWVudClcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbWVyZ2VPYmplY3QodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnNBcmd1bWVudClcbiAgICB9XG59XG5cbmRlZXBtZXJnZS5hbGwgPSBmdW5jdGlvbiBkZWVwbWVyZ2VBbGwoYXJyYXksIG9wdGlvbnNBcmd1bWVudCkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheSkgfHwgYXJyYXkubGVuZ3RoIDwgMikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZpcnN0IGFyZ3VtZW50IHNob3VsZCBiZSBhbiBhcnJheSB3aXRoIGF0IGxlYXN0IHR3byBlbGVtZW50cycpXG4gICAgfVxuXG4gICAgLy8gd2UgYXJlIHN1cmUgdGhlcmUgYXJlIGF0IGxlYXN0IDIgdmFsdWVzLCBzbyBpdCBpcyBzYWZlIHRvIGhhdmUgbm8gaW5pdGlhbCB2YWx1ZVxuICAgIHJldHVybiBhcnJheS5yZWR1Y2UoZnVuY3Rpb24ocHJldiwgbmV4dCkge1xuICAgICAgICByZXR1cm4gZGVlcG1lcmdlKHByZXYsIG5leHQsIG9wdGlvbnNBcmd1bWVudClcbiAgICB9KVxufTtcblxucmV0dXJuIGRlZXBtZXJnZVxuXG59KSk7XG59KTtcblxudmFyIG5hbWVzcGFjZXNfMSA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMpIHtcbnZhciBuYW1lc3BhY2VzID0ge1xuICBzdmc6IHtcbiAgICBuYW1lOiAneG1sbnMnLFxuICAgIHVyaTogJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuICB9LFxuICB4bGluazoge1xuICAgIG5hbWU6ICd4bWxuczp4bGluaycsXG4gICAgdXJpOiAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaydcbiAgfVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gbmFtZXNwYWNlcztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xufSk7XG5cbi8qKlxuICogQHBhcmFtIHtPYmplY3R9IGF0dHJzXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbnZhciBvYmplY3RUb0F0dHJzU3RyaW5nID0gZnVuY3Rpb24gKGF0dHJzKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhhdHRycykubWFwKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgdmFyIHZhbHVlID0gYXR0cnNbYXR0cl0udG9TdHJpbmcoKS5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyk7XG4gICAgcmV0dXJuIChhdHRyICsgXCI9XFxcIlwiICsgdmFsdWUgKyBcIlxcXCJcIik7XG4gIH0pLmpvaW4oJyAnKTtcbn07XG5cbnZhciBzdmcgPSBuYW1lc3BhY2VzXzEuc3ZnO1xudmFyIHhsaW5rID0gbmFtZXNwYWNlc18xLnhsaW5rO1xuXG52YXIgZGVmYXVsdEF0dHJzID0ge307XG5kZWZhdWx0QXR0cnNbc3ZnLm5hbWVdID0gc3ZnLnVyaTtcbmRlZmF1bHRBdHRyc1t4bGluay5uYW1lXSA9IHhsaW5rLnVyaTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvbnRlbnRdXG4gKiBAcGFyYW0ge09iamVjdH0gW2F0dHJpYnV0ZXNdXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbnZhciB3cmFwSW5TdmdTdHJpbmcgPSBmdW5jdGlvbiAoY29udGVudCwgYXR0cmlidXRlcykge1xuICBpZiAoIGNvbnRlbnQgPT09IHZvaWQgMCApIGNvbnRlbnQgPSAnJztcblxuICB2YXIgYXR0cnMgPSBkZWVwbWVyZ2UoZGVmYXVsdEF0dHJzLCBhdHRyaWJ1dGVzIHx8IHt9KTtcbiAgdmFyIGF0dHJzUmVuZGVyZWQgPSBvYmplY3RUb0F0dHJzU3RyaW5nKGF0dHJzKTtcbiAgcmV0dXJuIChcIjxzdmcgXCIgKyBhdHRyc1JlbmRlcmVkICsgXCI+XCIgKyBjb250ZW50ICsgXCI8L3N2Zz5cIik7XG59O1xuXG52YXIgQnJvd3NlclNwcml0ZVN5bWJvbCA9IChmdW5jdGlvbiAoU3ByaXRlU3ltYm9sJCQxKSB7XG4gIGZ1bmN0aW9uIEJyb3dzZXJTcHJpdGVTeW1ib2wgKCkge1xuICAgIFNwcml0ZVN5bWJvbCQkMS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgaWYgKCBTcHJpdGVTeW1ib2wkJDEgKSBCcm93c2VyU3ByaXRlU3ltYm9sLl9fcHJvdG9fXyA9IFNwcml0ZVN5bWJvbCQkMTtcbiAgQnJvd3NlclNwcml0ZVN5bWJvbC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBTcHJpdGVTeW1ib2wkJDEgJiYgU3ByaXRlU3ltYm9sJCQxLnByb3RvdHlwZSApO1xuICBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEJyb3dzZXJTcHJpdGVTeW1ib2w7XG5cbiAgdmFyIHByb3RvdHlwZUFjY2Vzc29ycyA9IHsgaXNNb3VudGVkOiB7fSB9O1xuXG4gIHByb3RvdHlwZUFjY2Vzc29ycy5pc01vdW50ZWQuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAhIXRoaXMubm9kZTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fSBub2RlXG4gICAqIEByZXR1cm4ge0Jyb3dzZXJTcHJpdGVTeW1ib2x9XG4gICAqL1xuICBCcm93c2VyU3ByaXRlU3ltYm9sLmNyZWF0ZUZyb21FeGlzdGluZ05vZGUgPSBmdW5jdGlvbiBjcmVhdGVGcm9tRXhpc3RpbmdOb2RlIChub2RlKSB7XG4gICAgcmV0dXJuIG5ldyBCcm93c2VyU3ByaXRlU3ltYm9sKHtcbiAgICAgIGlkOiBub2RlLmdldEF0dHJpYnV0ZSgnaWQnKSxcbiAgICAgIHZpZXdCb3g6IG5vZGUuZ2V0QXR0cmlidXRlKCd2aWV3Qm94JyksXG4gICAgICBjb250ZW50OiBub2RlLm91dGVySFRNTFxuICAgIH0pO1xuICB9O1xuXG4gIEJyb3dzZXJTcHJpdGVTeW1ib2wucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95ICgpIHtcbiAgICBpZiAodGhpcy5pc01vdW50ZWQpIHtcbiAgICAgIHRoaXMudW5tb3VudCgpO1xuICAgIH1cbiAgICBTcHJpdGVTeW1ib2wkJDEucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fHN0cmluZ30gdGFyZ2V0XG4gICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAqL1xuICBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZS5tb3VudCA9IGZ1bmN0aW9uIG1vdW50ICh0YXJnZXQpIHtcbiAgICBpZiAodGhpcy5pc01vdW50ZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLm5vZGU7XG4gICAgfVxuXG4gICAgdmFyIG1vdW50VGFyZ2V0ID0gdHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCkgOiB0YXJnZXQ7XG4gICAgdmFyIG5vZGUgPSB0aGlzLnJlbmRlcigpO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG5cbiAgICBtb3VudFRhcmdldC5hcHBlbmRDaGlsZChub2RlKTtcblxuICAgIHJldHVybiBub2RlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtFbGVtZW50fVxuICAgKi9cbiAgQnJvd3NlclNwcml0ZVN5bWJvbC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyICgpIHtcbiAgICB2YXIgY29udGVudCA9IHRoaXMuc3RyaW5naWZ5KCk7XG4gICAgcmV0dXJuIHBhcnNlKHdyYXBJblN2Z1N0cmluZyhjb250ZW50KSkuY2hpbGROb2Rlc1swXTtcbiAgfTtcblxuICBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZS51bm1vdW50ID0gZnVuY3Rpb24gdW5tb3VudCAoKSB7XG4gICAgdGhpcy5ub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5ub2RlKTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyggQnJvd3NlclNwcml0ZVN5bWJvbC5wcm90b3R5cGUsIHByb3RvdHlwZUFjY2Vzc29ycyApO1xuXG4gIHJldHVybiBCcm93c2VyU3ByaXRlU3ltYm9sO1xufShTcHJpdGVTeW1ib2wpKTtcblxucmV0dXJuIEJyb3dzZXJTcHJpdGVTeW1ib2w7XG5cbn0pKSk7XG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuXHR0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG5cdHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG5cdChnbG9iYWwuQnJvd3NlclNwcml0ZSA9IGZhY3RvcnkoKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxudmFyIGNvbW1vbmpzR2xvYmFsID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB7fTtcblxuXG5cblxuXG5mdW5jdGlvbiBjcmVhdGVDb21tb25qc01vZHVsZShmbiwgbW9kdWxlKSB7XG5cdHJldHVybiBtb2R1bGUgPSB7IGV4cG9ydHM6IHt9IH0sIGZuKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMpLCBtb2R1bGUuZXhwb3J0cztcbn1cblxudmFyIGRlZXBtZXJnZSA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMpIHtcbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuICAgIGlmICh0eXBlb2YgdW5kZWZpbmVkID09PSAnZnVuY3Rpb24nICYmIHVuZGVmaW5lZC5hbWQpIHtcbiAgICAgICAgdW5kZWZpbmVkKGZhY3RvcnkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICAgIH1cbn0oY29tbW9uanNHbG9iYWwsIGZ1bmN0aW9uICgpIHtcblxuZnVuY3Rpb24gaXNNZXJnZWFibGVPYmplY3QodmFsKSB7XG4gICAgdmFyIG5vbk51bGxPYmplY3QgPSB2YWwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCc7XG5cbiAgICByZXR1cm4gbm9uTnVsbE9iamVjdFxuICAgICAgICAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKSAhPT0gJ1tvYmplY3QgUmVnRXhwXSdcbiAgICAgICAgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbCkgIT09ICdbb2JqZWN0IERhdGVdJ1xufVxuXG5mdW5jdGlvbiBlbXB0eVRhcmdldCh2YWwpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWwpID8gW10gOiB7fVxufVxuXG5mdW5jdGlvbiBjbG9uZUlmTmVjZXNzYXJ5KHZhbHVlLCBvcHRpb25zQXJndW1lbnQpIHtcbiAgICB2YXIgY2xvbmUgPSBvcHRpb25zQXJndW1lbnQgJiYgb3B0aW9uc0FyZ3VtZW50LmNsb25lID09PSB0cnVlO1xuICAgIHJldHVybiAoY2xvbmUgJiYgaXNNZXJnZWFibGVPYmplY3QodmFsdWUpKSA/IGRlZXBtZXJnZShlbXB0eVRhcmdldCh2YWx1ZSksIHZhbHVlLCBvcHRpb25zQXJndW1lbnQpIDogdmFsdWVcbn1cblxuZnVuY3Rpb24gZGVmYXVsdEFycmF5TWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnNBcmd1bWVudCkge1xuICAgIHZhciBkZXN0aW5hdGlvbiA9IHRhcmdldC5zbGljZSgpO1xuICAgIHNvdXJjZS5mb3JFYWNoKGZ1bmN0aW9uKGUsIGkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkZXN0aW5hdGlvbltpXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2ldID0gY2xvbmVJZk5lY2Vzc2FyeShlLCBvcHRpb25zQXJndW1lbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzTWVyZ2VhYmxlT2JqZWN0KGUpKSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltpXSA9IGRlZXBtZXJnZSh0YXJnZXRbaV0sIGUsIG9wdGlvbnNBcmd1bWVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LmluZGV4T2YoZSkgPT09IC0xKSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbi5wdXNoKGNsb25lSWZOZWNlc3NhcnkoZSwgb3B0aW9uc0FyZ3VtZW50KSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZGVzdGluYXRpb25cbn1cblxuZnVuY3Rpb24gbWVyZ2VPYmplY3QodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnNBcmd1bWVudCkge1xuICAgIHZhciBkZXN0aW5hdGlvbiA9IHt9O1xuICAgIGlmIChpc01lcmdlYWJsZU9iamVjdCh0YXJnZXQpKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHRhcmdldCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltrZXldID0gY2xvbmVJZk5lY2Vzc2FyeSh0YXJnZXRba2V5XSwgb3B0aW9uc0FyZ3VtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmICghaXNNZXJnZWFibGVPYmplY3Qoc291cmNlW2tleV0pIHx8ICF0YXJnZXRba2V5XSkge1xuICAgICAgICAgICAgZGVzdGluYXRpb25ba2V5XSA9IGNsb25lSWZOZWNlc3Nhcnkoc291cmNlW2tleV0sIG9wdGlvbnNBcmd1bWVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltrZXldID0gZGVlcG1lcmdlKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSwgb3B0aW9uc0FyZ3VtZW50KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBkZXN0aW5hdGlvblxufVxuXG5mdW5jdGlvbiBkZWVwbWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnNBcmd1bWVudCkge1xuICAgIHZhciBhcnJheSA9IEFycmF5LmlzQXJyYXkoc291cmNlKTtcbiAgICB2YXIgb3B0aW9ucyA9IG9wdGlvbnNBcmd1bWVudCB8fCB7IGFycmF5TWVyZ2U6IGRlZmF1bHRBcnJheU1lcmdlIH07XG4gICAgdmFyIGFycmF5TWVyZ2UgPSBvcHRpb25zLmFycmF5TWVyZ2UgfHwgZGVmYXVsdEFycmF5TWVyZ2U7XG5cbiAgICBpZiAoYXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodGFyZ2V0KSA/IGFycmF5TWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnNBcmd1bWVudCkgOiBjbG9uZUlmTmVjZXNzYXJ5KHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBtZXJnZU9iamVjdCh0YXJnZXQsIHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KVxuICAgIH1cbn1cblxuZGVlcG1lcmdlLmFsbCA9IGZ1bmN0aW9uIGRlZXBtZXJnZUFsbChhcnJheSwgb3B0aW9uc0FyZ3VtZW50KSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSB8fCBhcnJheS5sZW5ndGggPCAyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZmlyc3QgYXJndW1lbnQgc2hvdWxkIGJlIGFuIGFycmF5IHdpdGggYXQgbGVhc3QgdHdvIGVsZW1lbnRzJylcbiAgICB9XG5cbiAgICAvLyB3ZSBhcmUgc3VyZSB0aGVyZSBhcmUgYXQgbGVhc3QgMiB2YWx1ZXMsIHNvIGl0IGlzIHNhZmUgdG8gaGF2ZSBubyBpbml0aWFsIHZhbHVlXG4gICAgcmV0dXJuIGFycmF5LnJlZHVjZShmdW5jdGlvbihwcmV2LCBuZXh0KSB7XG4gICAgICAgIHJldHVybiBkZWVwbWVyZ2UocHJldiwgbmV4dCwgb3B0aW9uc0FyZ3VtZW50KVxuICAgIH0pXG59O1xuXG5yZXR1cm4gZGVlcG1lcmdlXG5cbn0pKTtcbn0pO1xuXG4vLyAgICAgIFxuLy8gQW4gZXZlbnQgaGFuZGxlciBjYW4gdGFrZSBhbiBvcHRpb25hbCBldmVudCBhcmd1bWVudFxuLy8gYW5kIHNob3VsZCBub3QgcmV0dXJuIGEgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuLy8gQW4gYXJyYXkgb2YgYWxsIGN1cnJlbnRseSByZWdpc3RlcmVkIGV2ZW50IGhhbmRsZXJzIGZvciBhIHR5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4vLyBBIG1hcCBvZiBldmVudCB0eXBlcyBhbmQgdGhlaXIgY29ycmVzcG9uZGluZyBldmVudCBoYW5kbGVycy5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgXG5cbi8qKiBNaXR0OiBUaW55ICh+MjAwYikgZnVuY3Rpb25hbCBldmVudCBlbWl0dGVyIC8gcHVic3ViLlxuICogIEBuYW1lIG1pdHRcbiAqICBAcmV0dXJucyB7TWl0dH1cbiAqL1xuZnVuY3Rpb24gbWl0dChhbGwgICAgICAgICAgICAgICAgICkge1xuXHRhbGwgPSBhbGwgfHwgT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuXHRyZXR1cm4ge1xuXHRcdC8qKlxuXHRcdCAqIFJlZ2lzdGVyIGFuIGV2ZW50IGhhbmRsZXIgZm9yIHRoZSBnaXZlbiB0eXBlLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtICB7U3RyaW5nfSB0eXBlXHRUeXBlIG9mIGV2ZW50IHRvIGxpc3RlbiBmb3IsIG9yIGBcIipcImAgZm9yIGFsbCBldmVudHNcblx0XHQgKiBAcGFyYW0gIHtGdW5jdGlvbn0gaGFuZGxlciBGdW5jdGlvbiB0byBjYWxsIGluIHJlc3BvbnNlIHRvIGdpdmVuIGV2ZW50XG5cdFx0ICogQG1lbWJlck9mIG1pdHRcblx0XHQgKi9cblx0XHRvbjogZnVuY3Rpb24gb24odHlwZSAgICAgICAgLCBoYW5kbGVyICAgICAgICAgICAgICApIHtcblx0XHRcdChhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKTtcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogUmVtb3ZlIGFuIGV2ZW50IGhhbmRsZXIgZm9yIHRoZSBnaXZlbiB0eXBlLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtICB7U3RyaW5nfSB0eXBlXHRUeXBlIG9mIGV2ZW50IHRvIHVucmVnaXN0ZXIgYGhhbmRsZXJgIGZyb20sIG9yIGBcIipcImBcblx0XHQgKiBAcGFyYW0gIHtGdW5jdGlvbn0gaGFuZGxlciBIYW5kbGVyIGZ1bmN0aW9uIHRvIHJlbW92ZVxuXHRcdCAqIEBtZW1iZXJPZiBtaXR0XG5cdFx0ICovXG5cdFx0b2ZmOiBmdW5jdGlvbiBvZmYodHlwZSAgICAgICAgLCBoYW5kbGVyICAgICAgICAgICAgICApIHtcblx0XHRcdGlmIChhbGxbdHlwZV0pIHtcblx0XHRcdFx0YWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIEludm9rZSBhbGwgaGFuZGxlcnMgZm9yIHRoZSBnaXZlbiB0eXBlLlxuXHRcdCAqIElmIHByZXNlbnQsIGBcIipcImAgaGFuZGxlcnMgYXJlIGludm9rZWQgYWZ0ZXIgdHlwZS1tYXRjaGVkIGhhbmRsZXJzLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgIFRoZSBldmVudCB0eXBlIHRvIGludm9rZVxuXHRcdCAqIEBwYXJhbSB7QW55fSBbZXZ0XSAgQW55IHZhbHVlIChvYmplY3QgaXMgcmVjb21tZW5kZWQgYW5kIHBvd2VyZnVsKSwgcGFzc2VkIHRvIGVhY2ggaGFuZGxlclxuXHRcdCAqIEBtZW1iZXJvZiBtaXR0XG5cdFx0ICovXG5cdFx0ZW1pdDogZnVuY3Rpb24gZW1pdCh0eXBlICAgICAgICAsIGV2dCAgICAgKSB7XG5cdFx0XHQoYWxsW3R5cGVdIHx8IFtdKS5tYXAoZnVuY3Rpb24gKGhhbmRsZXIpIHsgaGFuZGxlcihldnQpOyB9KTtcblx0XHRcdChhbGxbJyonXSB8fCBbXSkubWFwKGZ1bmN0aW9uIChoYW5kbGVyKSB7IGhhbmRsZXIodHlwZSwgZXZ0KTsgfSk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgbmFtZXNwYWNlc18xID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xudmFyIG5hbWVzcGFjZXMgPSB7XG4gIHN2Zzoge1xuICAgIG5hbWU6ICd4bWxucycsXG4gICAgdXJpOiAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gIH0sXG4gIHhsaW5rOiB7XG4gICAgbmFtZTogJ3htbG5zOnhsaW5rJyxcbiAgICB1cmk6ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJ1xuICB9XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBuYW1lc3BhY2VzO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG59KTtcblxuLyoqXG4gKiBAcGFyYW0ge09iamVjdH0gYXR0cnNcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xudmFyIG9iamVjdFRvQXR0cnNTdHJpbmcgPSBmdW5jdGlvbiAoYXR0cnMpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGF0dHJzKS5tYXAoZnVuY3Rpb24gKGF0dHIpIHtcbiAgICB2YXIgdmFsdWUgPSBhdHRyc1thdHRyXS50b1N0cmluZygpLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKTtcbiAgICByZXR1cm4gKGF0dHIgKyBcIj1cXFwiXCIgKyB2YWx1ZSArIFwiXFxcIlwiKTtcbiAgfSkuam9pbignICcpO1xufTtcblxudmFyIHN2ZyA9IG5hbWVzcGFjZXNfMS5zdmc7XG52YXIgeGxpbmsgPSBuYW1lc3BhY2VzXzEueGxpbms7XG5cbnZhciBkZWZhdWx0QXR0cnMgPSB7fTtcbmRlZmF1bHRBdHRyc1tzdmcubmFtZV0gPSBzdmcudXJpO1xuZGVmYXVsdEF0dHJzW3hsaW5rLm5hbWVdID0geGxpbmsudXJpO1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29udGVudF1cbiAqIEBwYXJhbSB7T2JqZWN0fSBbYXR0cmlidXRlc11cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xudmFyIHdyYXBJblN2Z1N0cmluZyA9IGZ1bmN0aW9uIChjb250ZW50LCBhdHRyaWJ1dGVzKSB7XG4gIGlmICggY29udGVudCA9PT0gdm9pZCAwICkgY29udGVudCA9ICcnO1xuXG4gIHZhciBhdHRycyA9IGRlZXBtZXJnZShkZWZhdWx0QXR0cnMsIGF0dHJpYnV0ZXMgfHwge30pO1xuICB2YXIgYXR0cnNSZW5kZXJlZCA9IG9iamVjdFRvQXR0cnNTdHJpbmcoYXR0cnMpO1xuICByZXR1cm4gKFwiPHN2ZyBcIiArIGF0dHJzUmVuZGVyZWQgKyBcIj5cIiArIGNvbnRlbnQgKyBcIjwvc3ZnPlwiKTtcbn07XG5cbnZhciBzdmckMSA9IG5hbWVzcGFjZXNfMS5zdmc7XG52YXIgeGxpbmskMSA9IG5hbWVzcGFjZXNfMS54bGluaztcblxudmFyIGRlZmF1bHRDb25maWcgPSB7XG4gIGF0dHJzOiAoIG9iaiA9IHtcbiAgICBzdHlsZTogWydwb3NpdGlvbjogYWJzb2x1dGUnLCAnd2lkdGg6IDAnLCAnaGVpZ2h0OiAwJ10uam9pbignOyAnKVxuICB9LCBvYmpbc3ZnJDEubmFtZV0gPSBzdmckMS51cmksIG9ialt4bGluayQxLm5hbWVdID0geGxpbmskMS51cmksIG9iaiApXG59O1xudmFyIG9iajtcblxudmFyIFNwcml0ZSA9IGZ1bmN0aW9uIFNwcml0ZShjb25maWcpIHtcbiAgdGhpcy5jb25maWcgPSBkZWVwbWVyZ2UoZGVmYXVsdENvbmZpZywgY29uZmlnIHx8IHt9KTtcbiAgdGhpcy5zeW1ib2xzID0gW107XG59O1xuXG4vKipcbiAqIEFkZCBuZXcgc3ltYm9sLiBJZiBzeW1ib2wgd2l0aCB0aGUgc2FtZSBpZCBleGlzdHMgaXQgd2lsbCBiZSByZXBsYWNlZC5cbiAqIEBwYXJhbSB7U3ByaXRlU3ltYm9sfSBzeW1ib2xcbiAqIEByZXR1cm4ge2Jvb2xlYW59IGB0cnVlYCAtIHN5bWJvbCB3YXMgYWRkZWQsIGBmYWxzZWAgLSByZXBsYWNlZFxuICovXG5TcHJpdGUucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIGFkZCAoc3ltYm9sKSB7XG4gIHZhciByZWYgPSB0aGlzO1xuICAgIHZhciBzeW1ib2xzID0gcmVmLnN5bWJvbHM7XG4gIHZhciBleGlzdGluZyA9IHRoaXMuZmluZChzeW1ib2wuaWQpO1xuXG4gIGlmIChleGlzdGluZykge1xuICAgIHN5bWJvbHNbc3ltYm9scy5pbmRleE9mKGV4aXN0aW5nKV0gPSBzeW1ib2w7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3ltYm9scy5wdXNoKHN5bWJvbCk7XG4gIHJldHVybiB0cnVlO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgc3ltYm9sICYgZGVzdHJveSBpdFxuICogQHBhcmFtIHtzdHJpbmd9IGlkXG4gKiBAcmV0dXJuIHtib29sZWFufSBgdHJ1ZWAgLSBzeW1ib2wgd2FzIGZvdW5kICYgc3VjY2Vzc2Z1bGx5IGRlc3Ryb3llZCwgYGZhbHNlYCAtIG90aGVyd2lzZVxuICovXG5TcHJpdGUucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSAoaWQpIHtcbiAgdmFyIHJlZiA9IHRoaXM7XG4gICAgdmFyIHN5bWJvbHMgPSByZWYuc3ltYm9scztcbiAgdmFyIHN5bWJvbCA9IHRoaXMuZmluZChpZCk7XG5cbiAgaWYgKHN5bWJvbCkge1xuICAgIHN5bWJvbHMuc3BsaWNlKHN5bWJvbHMuaW5kZXhPZihzeW1ib2wpLCAxKTtcbiAgICBzeW1ib2wuZGVzdHJveSgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gaWRcbiAqIEByZXR1cm4ge1Nwcml0ZVN5bWJvbHxudWxsfVxuICovXG5TcHJpdGUucHJvdG90eXBlLmZpbmQgPSBmdW5jdGlvbiBmaW5kIChpZCkge1xuICByZXR1cm4gdGhpcy5zeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAocykgeyByZXR1cm4gcy5pZCA9PT0gaWQ7IH0pWzBdIHx8IG51bGw7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBpZFxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuU3ByaXRlLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiBoYXMgKGlkKSB7XG4gIHJldHVybiB0aGlzLmZpbmQoaWQpICE9PSBudWxsO1xufTtcblxuLyoqXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblNwcml0ZS5wcm90b3R5cGUuc3RyaW5naWZ5ID0gZnVuY3Rpb24gc3RyaW5naWZ5ICgpIHtcbiAgdmFyIHJlZiA9IHRoaXMuY29uZmlnO1xuICAgIHZhciBhdHRycyA9IHJlZi5hdHRycztcbiAgdmFyIHN0cmluZ2lmaWVkU3ltYm9scyA9IHRoaXMuc3ltYm9scy5tYXAoZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHMuc3RyaW5naWZ5KCk7IH0pLmpvaW4oJycpO1xuICByZXR1cm4gd3JhcEluU3ZnU3RyaW5nKHN0cmluZ2lmaWVkU3ltYm9scywgYXR0cnMpO1xufTtcblxuLyoqXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblNwcml0ZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyAoKSB7XG4gIHJldHVybiB0aGlzLnN0cmluZ2lmeSgpO1xufTtcblxuU3ByaXRlLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSAoKSB7XG4gIHRoaXMuc3ltYm9scy5mb3JFYWNoKGZ1bmN0aW9uIChzKSB7IHJldHVybiBzLmRlc3Ryb3koKTsgfSk7XG59O1xuXG52YXIgU3ByaXRlU3ltYm9sID0gZnVuY3Rpb24gU3ByaXRlU3ltYm9sKHJlZikge1xuICB2YXIgaWQgPSByZWYuaWQ7XG4gIHZhciB2aWV3Qm94ID0gcmVmLnZpZXdCb3g7XG4gIHZhciBjb250ZW50ID0gcmVmLmNvbnRlbnQ7XG5cbiAgdGhpcy5pZCA9IGlkO1xuICB0aGlzLnZpZXdCb3ggPSB2aWV3Qm94O1xuICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xufTtcblxuLyoqXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblNwcml0ZVN5bWJvbC5wcm90b3R5cGUuc3RyaW5naWZ5ID0gZnVuY3Rpb24gc3RyaW5naWZ5ICgpIHtcbiAgcmV0dXJuIHRoaXMuY29udGVudDtcbn07XG5cbi8qKlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5TcHJpdGVTeW1ib2wucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcgKCkge1xuICByZXR1cm4gdGhpcy5zdHJpbmdpZnkoKTtcbn07XG5cblNwcml0ZVN5bWJvbC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3kgKCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIFsnaWQnLCAndmlld0JveCcsICdjb250ZW50J10uZm9yRWFjaChmdW5jdGlvbiAocHJvcCkgeyByZXR1cm4gZGVsZXRlIHRoaXMkMVtwcm9wXTsgfSk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50XG4gKiBAcmV0dXJuIHtFbGVtZW50fVxuICovXG52YXIgcGFyc2UgPSBmdW5jdGlvbiAoY29udGVudCkge1xuICB2YXIgaGFzSW1wb3J0Tm9kZSA9ICEhZG9jdW1lbnQuaW1wb3J0Tm9kZTtcbiAgdmFyIGRvYyA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoY29udGVudCwgJ2ltYWdlL3N2Zyt4bWwnKS5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgLyoqXG4gICAqIEZpeCBmb3IgYnJvd3NlciB3aGljaCBhcmUgdGhyb3dpbmcgV3JvbmdEb2N1bWVudEVycm9yXG4gICAqIGlmIHlvdSBpbnNlcnQgYW4gZWxlbWVudCB3aGljaCBpcyBub3QgcGFydCBvZiB0aGUgZG9jdW1lbnRcbiAgICogQHNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83OTg2NTE5LzQ2MjQ0MDNcbiAgICovXG4gIGlmIChoYXNJbXBvcnROb2RlKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmltcG9ydE5vZGUoZG9jLCB0cnVlKTtcbiAgfVxuXG4gIHJldHVybiBkb2M7XG59O1xuXG52YXIgQnJvd3NlclNwcml0ZVN5bWJvbCA9IChmdW5jdGlvbiAoU3ByaXRlU3ltYm9sJCQxKSB7XG4gIGZ1bmN0aW9uIEJyb3dzZXJTcHJpdGVTeW1ib2wgKCkge1xuICAgIFNwcml0ZVN5bWJvbCQkMS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgaWYgKCBTcHJpdGVTeW1ib2wkJDEgKSBCcm93c2VyU3ByaXRlU3ltYm9sLl9fcHJvdG9fXyA9IFNwcml0ZVN5bWJvbCQkMTtcbiAgQnJvd3NlclNwcml0ZVN5bWJvbC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBTcHJpdGVTeW1ib2wkJDEgJiYgU3ByaXRlU3ltYm9sJCQxLnByb3RvdHlwZSApO1xuICBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEJyb3dzZXJTcHJpdGVTeW1ib2w7XG5cbiAgdmFyIHByb3RvdHlwZUFjY2Vzc29ycyA9IHsgaXNNb3VudGVkOiB7fSB9O1xuXG4gIHByb3RvdHlwZUFjY2Vzc29ycy5pc01vdW50ZWQuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAhIXRoaXMubm9kZTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fSBub2RlXG4gICAqIEByZXR1cm4ge0Jyb3dzZXJTcHJpdGVTeW1ib2x9XG4gICAqL1xuICBCcm93c2VyU3ByaXRlU3ltYm9sLmNyZWF0ZUZyb21FeGlzdGluZ05vZGUgPSBmdW5jdGlvbiBjcmVhdGVGcm9tRXhpc3RpbmdOb2RlIChub2RlKSB7XG4gICAgcmV0dXJuIG5ldyBCcm93c2VyU3ByaXRlU3ltYm9sKHtcbiAgICAgIGlkOiBub2RlLmdldEF0dHJpYnV0ZSgnaWQnKSxcbiAgICAgIHZpZXdCb3g6IG5vZGUuZ2V0QXR0cmlidXRlKCd2aWV3Qm94JyksXG4gICAgICBjb250ZW50OiBub2RlLm91dGVySFRNTFxuICAgIH0pO1xuICB9O1xuXG4gIEJyb3dzZXJTcHJpdGVTeW1ib2wucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95ICgpIHtcbiAgICBpZiAodGhpcy5pc01vdW50ZWQpIHtcbiAgICAgIHRoaXMudW5tb3VudCgpO1xuICAgIH1cbiAgICBTcHJpdGVTeW1ib2wkJDEucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fHN0cmluZ30gdGFyZ2V0XG4gICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAqL1xuICBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZS5tb3VudCA9IGZ1bmN0aW9uIG1vdW50ICh0YXJnZXQpIHtcbiAgICBpZiAodGhpcy5pc01vdW50ZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLm5vZGU7XG4gICAgfVxuXG4gICAgdmFyIG1vdW50VGFyZ2V0ID0gdHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCkgOiB0YXJnZXQ7XG4gICAgdmFyIG5vZGUgPSB0aGlzLnJlbmRlcigpO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG5cbiAgICBtb3VudFRhcmdldC5hcHBlbmRDaGlsZChub2RlKTtcblxuICAgIHJldHVybiBub2RlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtFbGVtZW50fVxuICAgKi9cbiAgQnJvd3NlclNwcml0ZVN5bWJvbC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyICgpIHtcbiAgICB2YXIgY29udGVudCA9IHRoaXMuc3RyaW5naWZ5KCk7XG4gICAgcmV0dXJuIHBhcnNlKHdyYXBJblN2Z1N0cmluZyhjb250ZW50KSkuY2hpbGROb2Rlc1swXTtcbiAgfTtcblxuICBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZS51bm1vdW50ID0gZnVuY3Rpb24gdW5tb3VudCAoKSB7XG4gICAgdGhpcy5ub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5ub2RlKTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyggQnJvd3NlclNwcml0ZVN5bWJvbC5wcm90b3R5cGUsIHByb3RvdHlwZUFjY2Vzc29ycyApO1xuXG4gIHJldHVybiBCcm93c2VyU3ByaXRlU3ltYm9sO1xufShTcHJpdGVTeW1ib2wpKTtcblxudmFyIGRlZmF1bHRDb25maWckMSA9IHtcbiAgLyoqXG4gICAqIFNob3VsZCBmb2xsb3dpbmcgb3B0aW9ucyBiZSBhdXRvbWF0aWNhbGx5IGNvbmZpZ3VyZWQ6XG4gICAqIC0gYHN5bmNVcmxzV2l0aEJhc2VUYWdgXG4gICAqIC0gYGxvY2F0aW9uQ2hhbmdlQW5ndWxhckVtaXR0ZXJgXG4gICAqIC0gYG1vdmVHcmFkaWVudHNPdXRzaWRlU3ltYm9sYFxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIGF1dG9Db25maWd1cmU6IHRydWUsXG5cbiAgLyoqXG4gICAqIERlZmF1bHQgbW91bnRpbmcgc2VsZWN0b3JcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIG1vdW50VG86ICdib2R5JyxcblxuICAvKipcbiAgICogRml4IGRpc2FwcGVhcmluZyBTVkcgZWxlbWVudHMgd2hlbiA8YmFzZSBocmVmPiBleGlzdHMuXG4gICAqIEV4ZWN1dGVzIHdoZW4gc3ByaXRlIG1vdW50ZWQuXG4gICAqIEBzZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTgyNjUzMzYvNzk2MTUyXG4gICAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2V2ZXJkaW1lbnNpb24vYW5ndWxhci1zdmctYmFzZS1maXhcbiAgICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyLmpzL2lzc3Vlcy84OTM0I2lzc3VlY29tbWVudC01NjU2ODQ2NlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIHN5bmNVcmxzV2l0aEJhc2VUYWc6IGZhbHNlLFxuXG4gIC8qKlxuICAgKiBTaG91bGQgc3ByaXRlIGxpc3RlbiBjdXN0b20gbG9jYXRpb24gY2hhbmdlIGV2ZW50XG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgbGlzdGVuTG9jYXRpb25DaGFuZ2VFdmVudDogdHJ1ZSxcblxuICAvKipcbiAgICogQ3VzdG9tIHdpbmRvdyBldmVudCBuYW1lIHdoaWNoIHNob3VsZCBiZSBlbWl0dGVkIHRvIHVwZGF0ZSBzcHJpdGUgdXJsc1xuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgbG9jYXRpb25DaGFuZ2VFdmVudDogJ2xvY2F0aW9uQ2hhbmdlJyxcblxuICAvKipcbiAgICogRW1pdCBsb2NhdGlvbiBjaGFuZ2UgZXZlbnQgaW4gQW5ndWxhciBhdXRvbWF0aWNhbGx5XG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgbG9jYXRpb25DaGFuZ2VBbmd1bGFyRW1pdHRlcjogZmFsc2UsXG5cbiAgLyoqXG4gICAqIFNlbGVjdG9yIHRvIGZpbmQgc3ltYm9scyB1c2FnZXMgd2hlbiB1cGRhdGluZyBzcHJpdGUgdXJsc1xuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgdXNhZ2VzVG9VcGRhdGU6ICd1c2VbKnxocmVmXScsXG5cbiAgLyoqXG4gICAqIEZpeCBGaXJlZm94IGJ1ZyB3aGVuIGdyYWRpZW50cyBhbmQgcGF0dGVybnMgZG9uJ3Qgd29yayBpZiB0aGV5IGFyZSB3aXRoaW4gYSBzeW1ib2wuXG4gICAqIEV4ZWN1dGVzIHdoZW4gc3ByaXRlIGlzIHJlbmRlcmVkLCBidXQgbm90IG1vdW50ZWQuXG4gICAqIEBzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MzA2Njc0XG4gICAqIEBzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MzUzNTc1XG4gICAqIEBzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTIzNTM2NFxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIG1vdmVHcmFkaWVudHNPdXRzaWRlU3ltYm9sOiBmYWxzZVxufTtcblxuLyoqXG4gKiBAcGFyYW0geyp9IGFycmF5TGlrZVxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbnZhciBhcnJheUZyb20gPSBmdW5jdGlvbiAoYXJyYXlMaWtlKSB7XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcnJheUxpa2UsIDApO1xufTtcblxudmFyIGJyb3dzZXIgPSB7XG4gIGlzQ2hyb21lOiBmdW5jdGlvbiAoKSB7IHJldHVybiAvY2hyb21lL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTsgfSxcbiAgaXNGaXJlZm94OiBmdW5jdGlvbiAoKSB7IHJldHVybiAvZmlyZWZveC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7IH0sXG5cbiAgLy8gaHR0cHM6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9tczUzNzUwMyh2PXZzLjg1KS5hc3B4XG4gIGlzSUU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIC9tc2llL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSB8fCAvdHJpZGVudC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7IH0sXG4gIGlzRWRnZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gL2VkZ2UvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpOyB9XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0geyp9IGRhdGFcbiAqL1xudmFyIGRpc3BhdGNoRXZlbnQgPSBmdW5jdGlvbiAobmFtZSwgZGF0YSkge1xuICB2YXIgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgZXZlbnQuaW5pdEN1c3RvbUV2ZW50KG5hbWUsIGZhbHNlLCBmYWxzZSwgZGF0YSk7XG4gIHdpbmRvdy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbn07XG5cbi8qKlxuICogSUUgZG9lc24ndCBldmFsdWF0ZSA8c3R5bGU+IHRhZ3MgaW4gU1ZHcyB0aGF0IGFyZSBkeW5hbWljYWxseSBhZGRlZCB0byB0aGUgcGFnZS5cbiAqIFRoaXMgdHJpY2sgd2lsbCB0cmlnZ2VyIElFIHRvIHJlYWQgYW5kIHVzZSBhbnkgZXhpc3RpbmcgU1ZHIDxzdHlsZT4gdGFncy5cbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2ljb25pYy9TVkdJbmplY3Rvci9pc3N1ZXMvMjNcbiAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubWljcm9zb2Z0LmNvbS9lbi11cy9taWNyb3NvZnQtZWRnZS9wbGF0Zm9ybS9pc3N1ZXMvMTA4OTg0NjkvXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBub2RlIERPTSBFbGVtZW50IHRvIHNlYXJjaCA8c3R5bGU+IHRhZ3MgaW5cbiAqIEByZXR1cm4ge0FycmF5PEhUTUxTdHlsZUVsZW1lbnQ+fVxuICovXG52YXIgZXZhbFN0eWxlc0lFV29ya2Fyb3VuZCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gIHZhciB1cGRhdGVkTm9kZXMgPSBbXTtcblxuICBhcnJheUZyb20obm9kZS5xdWVyeVNlbGVjdG9yQWxsKCdzdHlsZScpKVxuICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChzdHlsZSkge1xuICAgICAgc3R5bGUudGV4dENvbnRlbnQgKz0gJyc7XG4gICAgICB1cGRhdGVkTm9kZXMucHVzaChzdHlsZSk7XG4gICAgfSk7XG5cbiAgcmV0dXJuIHVwZGF0ZWROb2Rlcztcbn07XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IFt1cmxdIElmIG5vdCBwcm92aWRlZCAtIGN1cnJlbnQgVVJMIHdpbGwgYmUgdXNlZFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG52YXIgZ2V0VXJsV2l0aG91dEZyYWdtZW50ID0gZnVuY3Rpb24gKHVybCkge1xuICByZXR1cm4gKHVybCB8fCB3aW5kb3cubG9jYXRpb24uaHJlZikuc3BsaXQoJyMnKVswXTtcbn07XG5cbi8qIGdsb2JhbCBhbmd1bGFyICovXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVcbiAqL1xudmFyIGxvY2F0aW9uQ2hhbmdlQW5ndWxhckVtaXR0ZXIgPSBmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gIGFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyRyb290U2NvcGUnLCBmdW5jdGlvbiAoJHJvb3RTY29wZSkge1xuICAgICRyb290U2NvcGUuJG9uKCckbG9jYXRpb25DaGFuZ2VTdWNjZXNzJywgZnVuY3Rpb24gKGUsIG5ld1VybCwgb2xkVXJsKSB7XG4gICAgICBkaXNwYXRjaEV2ZW50KGV2ZW50TmFtZSwgeyBvbGRVcmw6IG9sZFVybCwgbmV3VXJsOiBuZXdVcmwgfSk7XG4gICAgfSk7XG4gIH1dKTtcbn07XG5cbnZhciBkZWZhdWx0U2VsZWN0b3IgPSAnbGluZWFyR3JhZGllbnQsIHJhZGlhbEdyYWRpZW50LCBwYXR0ZXJuJztcblxuLyoqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHN2Z1xuICogQHBhcmFtIHtzdHJpbmd9IFtzZWxlY3Rvcl1cbiAqIEByZXR1cm4ge0VsZW1lbnR9XG4gKi9cbnZhciBtb3ZlR3JhZGllbnRzT3V0c2lkZVN5bWJvbCA9IGZ1bmN0aW9uIChzdmcsIHNlbGVjdG9yKSB7XG4gIGlmICggc2VsZWN0b3IgPT09IHZvaWQgMCApIHNlbGVjdG9yID0gZGVmYXVsdFNlbGVjdG9yO1xuXG4gIGFycmF5RnJvbShzdmcucXVlcnlTZWxlY3RvckFsbCgnc3ltYm9sJykpLmZvckVhY2goZnVuY3Rpb24gKHN5bWJvbCkge1xuICAgIGFycmF5RnJvbShzeW1ib2wucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIHN5bWJvbC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShub2RlLCBzeW1ib2wpO1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIHN2Zztcbn07XG5cbi8qKlxuICogQHBhcmFtIHtOb2RlTGlzdH0gbm9kZXNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFttYXRjaGVyXVxuICogQHJldHVybiB7QXR0cltdfVxuICovXG5mdW5jdGlvbiBzZWxlY3RBdHRyaWJ1dGVzKG5vZGVzLCBtYXRjaGVyKSB7XG4gIHZhciBhdHRycyA9IGFycmF5RnJvbShub2RlcykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIG5vZGUpIHtcbiAgICBpZiAoIW5vZGUuYXR0cmlidXRlcykge1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9XG5cbiAgICB2YXIgYXJyYXlmaWVkID0gYXJyYXlGcm9tKG5vZGUuYXR0cmlidXRlcyk7XG4gICAgdmFyIG1hdGNoZWQgPSBtYXRjaGVyID8gYXJyYXlmaWVkLmZpbHRlcihtYXRjaGVyKSA6IGFycmF5ZmllZDtcbiAgICByZXR1cm4gYWNjLmNvbmNhdChtYXRjaGVkKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiBhdHRycztcbn1cblxuLyoqXG4gKiBAcGFyYW0ge05vZGVMaXN0fE5vZGV9IG5vZGVzXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtjbG9uZT10cnVlXVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5cbnZhciB4TGlua05TID0gbmFtZXNwYWNlc18xLnhsaW5rLnVyaTtcbnZhciB4TGlua0F0dHJOYW1lID0gJ3hsaW5rOmhyZWYnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcbnZhciBzcGVjaWFsVXJsQ2hhcnNQYXR0ZXJuID0gL1t7fXxcXFxcXFxeXFxbXFxdYFwiPD5dL2c7XG5cbmZ1bmN0aW9uIGVuY29kZXIodXJsKSB7XG4gIHJldHVybiB1cmwucmVwbGFjZShzcGVjaWFsVXJsQ2hhcnNQYXR0ZXJuLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICByZXR1cm4gKFwiJVwiICsgKG1hdGNoWzBdLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCkpKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGVzY2FwZVJlZ0V4cChzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgXCJcXFxcJCZcIik7IC8vICQmIG1lYW5zIHRoZSB3aG9sZSBtYXRjaGVkIHN0cmluZ1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Tm9kZUxpc3R9IG5vZGVzXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RhcnRzV2l0aFxuICogQHBhcmFtIHtzdHJpbmd9IHJlcGxhY2VXaXRoXG4gKiBAcmV0dXJuIHtOb2RlTGlzdH1cbiAqL1xuZnVuY3Rpb24gdXBkYXRlUmVmZXJlbmNlcyhub2Rlcywgc3RhcnRzV2l0aCwgcmVwbGFjZVdpdGgpIHtcbiAgYXJyYXlGcm9tKG5vZGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgdmFyIGhyZWYgPSBub2RlLmdldEF0dHJpYnV0ZSh4TGlua0F0dHJOYW1lKTtcbiAgICBpZiAoaHJlZiAmJiBocmVmLmluZGV4T2Yoc3RhcnRzV2l0aCkgPT09IDApIHtcbiAgICAgIHZhciBuZXdVcmwgPSBocmVmLnJlcGxhY2Uoc3RhcnRzV2l0aCwgcmVwbGFjZVdpdGgpO1xuICAgICAgbm9kZS5zZXRBdHRyaWJ1dGVOUyh4TGlua05TLCB4TGlua0F0dHJOYW1lLCBuZXdVcmwpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIG5vZGVzO1xufVxuXG4vKipcbiAqIExpc3Qgb2YgU1ZHIGF0dHJpYnV0ZXMgdG8gdXBkYXRlIHVybCgpIHRhcmdldCBpbiB0aGVtXG4gKi9cbnZhciBhdHRMaXN0ID0gW1xuICAnY2xpcFBhdGgnLFxuICAnY29sb3JQcm9maWxlJyxcbiAgJ3NyYycsXG4gICdjdXJzb3InLFxuICAnZmlsbCcsXG4gICdmaWx0ZXInLFxuICAnbWFya2VyJyxcbiAgJ21hcmtlclN0YXJ0JyxcbiAgJ21hcmtlck1pZCcsXG4gICdtYXJrZXJFbmQnLFxuICAnbWFzaycsXG4gICdzdHJva2UnLFxuICAnc3R5bGUnXG5dO1xuXG52YXIgYXR0U2VsZWN0b3IgPSBhdHRMaXN0Lm1hcChmdW5jdGlvbiAoYXR0cikgeyByZXR1cm4gKFwiW1wiICsgYXR0ciArIFwiXVwiKTsgfSkuam9pbignLCcpO1xuXG4vKipcbiAqIFVwZGF0ZSBVUkxzIGluIHN2ZyBpbWFnZSAobGlrZSBgZmlsbD1cInVybCguLi4pXCJgKSBhbmQgdXBkYXRlIHJlZmVyZW5jaW5nIGVsZW1lbnRzXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHN2Z1xuICogQHBhcmFtIHtOb2RlTGlzdH0gcmVmZXJlbmNlc1xuICogQHBhcmFtIHtzdHJpbmd8UmVnRXhwfSBzdGFydHNXaXRoXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVwbGFjZVdpdGhcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IHNwcml0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N2Zy5zcHJpdGUnKTtcbiAqIGNvbnN0IHVzYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3VzZScpO1xuICogdXBkYXRlVXJscyhzcHJpdGUsIHVzYWdlcywgJyMnLCAncHJlZml4IycpO1xuICovXG52YXIgdXBkYXRlVXJscyA9IGZ1bmN0aW9uIChzdmcsIHJlZmVyZW5jZXMsIHN0YXJ0c1dpdGgsIHJlcGxhY2VXaXRoKSB7XG4gIHZhciBzdGFydHNXaXRoRW5jb2RlZCA9IGVuY29kZXIoc3RhcnRzV2l0aCk7XG4gIHZhciByZXBsYWNlV2l0aEVuY29kZWQgPSBlbmNvZGVyKHJlcGxhY2VXaXRoKTtcblxuICB2YXIgbm9kZXMgPSBzdmcucXVlcnlTZWxlY3RvckFsbChhdHRTZWxlY3Rvcik7XG4gIHZhciBhdHRycyA9IHNlbGVjdEF0dHJpYnV0ZXMobm9kZXMsIGZ1bmN0aW9uIChyZWYpIHtcbiAgICB2YXIgbG9jYWxOYW1lID0gcmVmLmxvY2FsTmFtZTtcbiAgICB2YXIgdmFsdWUgPSByZWYudmFsdWU7XG5cbiAgICByZXR1cm4gYXR0TGlzdC5pbmRleE9mKGxvY2FsTmFtZSkgIT09IC0xICYmIHZhbHVlLmluZGV4T2YoKFwidXJsKFwiICsgc3RhcnRzV2l0aEVuY29kZWQpKSAhPT0gLTE7XG4gIH0pO1xuXG4gIGF0dHJzLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHsgcmV0dXJuIGF0dHIudmFsdWUgPSBhdHRyLnZhbHVlLnJlcGxhY2UobmV3IFJlZ0V4cChlc2NhcGVSZWdFeHAoc3RhcnRzV2l0aEVuY29kZWQpLCAnZycpLCByZXBsYWNlV2l0aEVuY29kZWQpOyB9KTtcbiAgdXBkYXRlUmVmZXJlbmNlcyhyZWZlcmVuY2VzLCBzdGFydHNXaXRoRW5jb2RlZCwgcmVwbGFjZVdpdGhFbmNvZGVkKTtcbn07XG5cbi8qKlxuICogSW50ZXJuYWwgZW1pdHRlciBldmVudHNcbiAqIEBlbnVtXG4gKiBAcHJpdmF0ZVxuICovXG52YXIgRXZlbnRzID0ge1xuICBNT1VOVDogJ21vdW50JyxcbiAgU1lNQk9MX01PVU5UOiAnc3ltYm9sX21vdW50J1xufTtcblxudmFyIEJyb3dzZXJTcHJpdGUgPSAoZnVuY3Rpb24gKFNwcml0ZSQkMSkge1xuICBmdW5jdGlvbiBCcm93c2VyU3ByaXRlKGNmZykge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuICAgIGlmICggY2ZnID09PSB2b2lkIDAgKSBjZmcgPSB7fTtcblxuICAgIFNwcml0ZSQkMS5jYWxsKHRoaXMsIGRlZXBtZXJnZShkZWZhdWx0Q29uZmlnJDEsIGNmZykpO1xuXG4gICAgdmFyIGVtaXR0ZXIgPSBtaXR0KCk7XG4gICAgdGhpcy5fZW1pdHRlciA9IGVtaXR0ZXI7XG4gICAgdGhpcy5ub2RlID0gbnVsbDtcblxuICAgIHZhciByZWYgPSB0aGlzO1xuICAgIHZhciBjb25maWcgPSByZWYuY29uZmlnO1xuXG4gICAgaWYgKGNvbmZpZy5hdXRvQ29uZmlndXJlKSB7XG4gICAgICB0aGlzLl9hdXRvQ29uZmlndXJlKGNmZyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zeW5jVXJsc1dpdGhCYXNlVGFnKSB7XG4gICAgICB2YXIgYmFzZVVybCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdiYXNlJylbMF0uZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICBlbWl0dGVyLm9uKEV2ZW50cy5NT1VOVCwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcyQxLnVwZGF0ZVVybHMoJyMnLCBiYXNlVXJsKTsgfSk7XG4gICAgfVxuXG4gICAgdmFyIGhhbmRsZUxvY2F0aW9uQ2hhbmdlID0gdGhpcy5faGFuZGxlTG9jYXRpb25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9oYW5kbGVMb2NhdGlvbkNoYW5nZSA9IGhhbmRsZUxvY2F0aW9uQ2hhbmdlO1xuXG4gICAgLy8gUHJvdmlkZSB3YXkgdG8gdXBkYXRlIHNwcml0ZSB1cmxzIGV4dGVybmFsbHkgdmlhIGRpc3BhdGNoaW5nIGN1c3RvbSB3aW5kb3cgZXZlbnRcbiAgICBpZiAoY29uZmlnLmxpc3RlbkxvY2F0aW9uQ2hhbmdlRXZlbnQpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGNvbmZpZy5sb2NhdGlvbkNoYW5nZUV2ZW50LCBoYW5kbGVMb2NhdGlvbkNoYW5nZSk7XG4gICAgfVxuXG4gICAgLy8gRW1pdCBsb2NhdGlvbiBjaGFuZ2UgZXZlbnQgaW4gQW5ndWxhciBhdXRvbWF0aWNhbGx5XG4gICAgaWYgKGNvbmZpZy5sb2NhdGlvbkNoYW5nZUFuZ3VsYXJFbWl0dGVyKSB7XG4gICAgICBsb2NhdGlvbkNoYW5nZUFuZ3VsYXJFbWl0dGVyKGNvbmZpZy5sb2NhdGlvbkNoYW5nZUV2ZW50KTtcbiAgICB9XG5cbiAgICAvLyBBZnRlciBzcHJpdGUgbW91bnRlZFxuICAgIGVtaXR0ZXIub24oRXZlbnRzLk1PVU5ULCBmdW5jdGlvbiAoc3ByaXRlTm9kZSkge1xuICAgICAgaWYgKGNvbmZpZy5tb3ZlR3JhZGllbnRzT3V0c2lkZVN5bWJvbCkge1xuICAgICAgICBtb3ZlR3JhZGllbnRzT3V0c2lkZVN5bWJvbChzcHJpdGVOb2RlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIEFmdGVyIHN5bWJvbCBtb3VudGVkIGludG8gc3ByaXRlXG4gICAgZW1pdHRlci5vbihFdmVudHMuU1lNQk9MX01PVU5ULCBmdW5jdGlvbiAoc3ltYm9sTm9kZSkge1xuICAgICAgaWYgKGNvbmZpZy5tb3ZlR3JhZGllbnRzT3V0c2lkZVN5bWJvbCkge1xuICAgICAgICBtb3ZlR3JhZGllbnRzT3V0c2lkZVN5bWJvbChzeW1ib2xOb2RlLnBhcmVudE5vZGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYnJvd3Nlci5pc0lFKCkgfHwgYnJvd3Nlci5pc0VkZ2UoKSkge1xuICAgICAgICBldmFsU3R5bGVzSUVXb3JrYXJvdW5kKHN5bWJvbE5vZGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaWYgKCBTcHJpdGUkJDEgKSBCcm93c2VyU3ByaXRlLl9fcHJvdG9fXyA9IFNwcml0ZSQkMTtcbiAgQnJvd3NlclNwcml0ZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBTcHJpdGUkJDEgJiYgU3ByaXRlJCQxLnByb3RvdHlwZSApO1xuICBCcm93c2VyU3ByaXRlLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEJyb3dzZXJTcHJpdGU7XG5cbiAgdmFyIHByb3RvdHlwZUFjY2Vzc29ycyA9IHsgaXNNb3VudGVkOiB7fSB9O1xuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgcHJvdG90eXBlQWNjZXNzb3JzLmlzTW91bnRlZC5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICEhdGhpcy5ub2RlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBdXRvbWF0aWNhbGx5IGNvbmZpZ3VyZSBmb2xsb3dpbmcgb3B0aW9uc1xuICAgKiAtIGBzeW5jVXJsc1dpdGhCYXNlVGFnYFxuICAgKiAtIGBsb2NhdGlvbkNoYW5nZUFuZ3VsYXJFbWl0dGVyYFxuICAgKiAtIGBtb3ZlR3JhZGllbnRzT3V0c2lkZVN5bWJvbGBcbiAgICogQHBhcmFtIHtPYmplY3R9IGNmZ1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgQnJvd3NlclNwcml0ZS5wcm90b3R5cGUuX2F1dG9Db25maWd1cmUgPSBmdW5jdGlvbiBfYXV0b0NvbmZpZ3VyZSAoY2ZnKSB7XG4gICAgdmFyIHJlZiA9IHRoaXM7XG4gICAgdmFyIGNvbmZpZyA9IHJlZi5jb25maWc7XG5cbiAgICBpZiAodHlwZW9mIGNmZy5zeW5jVXJsc1dpdGhCYXNlVGFnID09PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnLnN5bmNVcmxzV2l0aEJhc2VUYWcgPSB0eXBlb2YgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2Jhc2UnKVswXSAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjZmcubG9jYXRpb25DaGFuZ2VBbmd1bGFyRW1pdHRlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZy5sb2NhdGlvbkNoYW5nZUFuZ3VsYXJFbWl0dGVyID0gJ2FuZ3VsYXInIGluIHdpbmRvdztcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNmZy5tb3ZlR3JhZGllbnRzT3V0c2lkZVN5bWJvbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZy5tb3ZlR3JhZGllbnRzT3V0c2lkZVN5bWJvbCA9IGJyb3dzZXIuaXNGaXJlZm94KCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnQuZGV0YWlsXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudC5kZXRhaWwub2xkVXJsXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudC5kZXRhaWwubmV3VXJsXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBCcm93c2VyU3ByaXRlLnByb3RvdHlwZS5faGFuZGxlTG9jYXRpb25DaGFuZ2UgPSBmdW5jdGlvbiBfaGFuZGxlTG9jYXRpb25DaGFuZ2UgKGV2ZW50KSB7XG4gICAgdmFyIHJlZiA9IGV2ZW50LmRldGFpbDtcbiAgICB2YXIgb2xkVXJsID0gcmVmLm9sZFVybDtcbiAgICB2YXIgbmV3VXJsID0gcmVmLm5ld1VybDtcbiAgICB0aGlzLnVwZGF0ZVVybHMob2xkVXJsLCBuZXdVcmwpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBZGQgbmV3IHN5bWJvbC4gSWYgc3ltYm9sIHdpdGggdGhlIHNhbWUgaWQgZXhpc3RzIGl0IHdpbGwgYmUgcmVwbGFjZWQuXG4gICAqIElmIHNwcml0ZSBhbHJlYWR5IG1vdW50ZWQgLSBgc3ltYm9sLm1vdW50KHNwcml0ZS5ub2RlKWAgd2lsbCBiZSBjYWxsZWQuXG4gICAqIEBmaXJlcyBFdmVudHMjU1lNQk9MX01PVU5UXG4gICAqIEBwYXJhbSB7QnJvd3NlclNwcml0ZVN5bWJvbH0gc3ltYm9sXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IGB0cnVlYCAtIHN5bWJvbCB3YXMgYWRkZWQsIGBmYWxzZWAgLSByZXBsYWNlZFxuICAgKi9cbiAgQnJvd3NlclNwcml0ZS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gYWRkIChzeW1ib2wpIHtcbiAgICB2YXIgc3ByaXRlID0gdGhpcztcbiAgICB2YXIgaXNOZXdTeW1ib2wgPSBTcHJpdGUkJDEucHJvdG90eXBlLmFkZC5jYWxsKHRoaXMsIHN5bWJvbCk7XG5cbiAgICBpZiAodGhpcy5pc01vdW50ZWQgJiYgaXNOZXdTeW1ib2wpIHtcbiAgICAgIHN5bWJvbC5tb3VudChzcHJpdGUubm9kZSk7XG4gICAgICB0aGlzLl9lbWl0dGVyLmVtaXQoRXZlbnRzLlNZTUJPTF9NT1VOVCwgc3ltYm9sLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBpc05ld1N5bWJvbDtcbiAgfTtcblxuICAvKipcbiAgICogQXR0YWNoIHRvIGV4aXN0aW5nIERPTSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nfEVsZW1lbnR9IHRhcmdldFxuICAgKiBAcmV0dXJuIHtFbGVtZW50fG51bGx9IGF0dGFjaGVkIERPTSBFbGVtZW50LiBudWxsIGlmIG5vZGUgdG8gYXR0YWNoIG5vdCBmb3VuZC5cbiAgICovXG4gIEJyb3dzZXJTcHJpdGUucHJvdG90eXBlLmF0dGFjaCA9IGZ1bmN0aW9uIGF0dGFjaCAodGFyZ2V0KSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB2YXIgc3ByaXRlID0gdGhpcztcblxuICAgIGlmIChzcHJpdGUuaXNNb3VudGVkKSB7XG4gICAgICByZXR1cm4gc3ByaXRlLm5vZGU7XG4gICAgfVxuXG4gICAgLyoqIEB0eXBlIEVsZW1lbnQgKi9cbiAgICB2YXIgbm9kZSA9IHR5cGVvZiB0YXJnZXQgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpIDogdGFyZ2V0O1xuICAgIHNwcml0ZS5ub2RlID0gbm9kZTtcblxuICAgIC8vIEFscmVhZHkgYWRkZWQgc3ltYm9scyBuZWVkcyB0byBiZSBtb3VudGVkXG4gICAgdGhpcy5zeW1ib2xzLmZvckVhY2goZnVuY3Rpb24gKHN5bWJvbCkge1xuICAgICAgc3ltYm9sLm1vdW50KHNwcml0ZS5ub2RlKTtcbiAgICAgIHRoaXMkMS5fZW1pdHRlci5lbWl0KEV2ZW50cy5TWU1CT0xfTU9VTlQsIHN5bWJvbC5ub2RlKTtcbiAgICB9KTtcblxuICAgIC8vIENyZWF0ZSBzeW1ib2xzIGZyb20gZXhpc3RpbmcgRE9NIG5vZGVzLCBhZGQgYW5kIG1vdW50IHRoZW1cbiAgICBhcnJheUZyb20obm9kZS5xdWVyeVNlbGVjdG9yQWxsKCdzeW1ib2wnKSlcbiAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChzeW1ib2xOb2RlKSB7XG4gICAgICAgIHZhciBzeW1ib2wgPSBCcm93c2VyU3ByaXRlU3ltYm9sLmNyZWF0ZUZyb21FeGlzdGluZ05vZGUoc3ltYm9sTm9kZSk7XG4gICAgICAgIHN5bWJvbC5ub2RlID0gc3ltYm9sTm9kZTsgLy8gaGFjayB0byBwcmV2ZW50IHN5bWJvbCBtb3VudGluZyB0byBzcHJpdGUgd2hlbiBhZGRpbmdcbiAgICAgICAgc3ByaXRlLmFkZChzeW1ib2wpO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLl9lbWl0dGVyLmVtaXQoRXZlbnRzLk1PVU5ULCBub2RlKTtcblxuICAgIHJldHVybiBub2RlO1xuICB9O1xuXG4gIEJyb3dzZXJTcHJpdGUucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95ICgpIHtcbiAgICB2YXIgcmVmID0gdGhpcztcbiAgICB2YXIgY29uZmlnID0gcmVmLmNvbmZpZztcbiAgICB2YXIgc3ltYm9scyA9IHJlZi5zeW1ib2xzO1xuICAgIHZhciBfZW1pdHRlciA9IHJlZi5fZW1pdHRlcjtcblxuICAgIHN5bWJvbHMuZm9yRWFjaChmdW5jdGlvbiAocykgeyByZXR1cm4gcy5kZXN0cm95KCk7IH0pO1xuXG4gICAgX2VtaXR0ZXIub2ZmKCcqJyk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoY29uZmlnLmxvY2F0aW9uQ2hhbmdlRXZlbnQsIHRoaXMuX2hhbmRsZUxvY2F0aW9uQ2hhbmdlKTtcblxuICAgIGlmICh0aGlzLmlzTW91bnRlZCkge1xuICAgICAgdGhpcy51bm1vdW50KCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAZmlyZXMgRXZlbnRzI01PVU5UXG4gICAqIEBwYXJhbSB7c3RyaW5nfEVsZW1lbnR9IFt0YXJnZXRdXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3ByZXBlbmQ9ZmFsc2VdXG4gICAqIEByZXR1cm4ge0VsZW1lbnR8bnVsbH0gcmVuZGVyZWQgc3ByaXRlIG5vZGUuIG51bGwgaWYgbW91bnQgbm9kZSBub3QgZm91bmQuXG4gICAqL1xuICBCcm93c2VyU3ByaXRlLnByb3RvdHlwZS5tb3VudCA9IGZ1bmN0aW9uIG1vdW50ICh0YXJnZXQsIHByZXBlbmQpIHtcbiAgICBpZiAoIHRhcmdldCA9PT0gdm9pZCAwICkgdGFyZ2V0ID0gdGhpcy5jb25maWcubW91bnRUbztcbiAgICBpZiAoIHByZXBlbmQgPT09IHZvaWQgMCApIHByZXBlbmQgPSBmYWxzZTtcblxuICAgIHZhciBzcHJpdGUgPSB0aGlzO1xuXG4gICAgaWYgKHNwcml0ZS5pc01vdW50ZWQpIHtcbiAgICAgIHJldHVybiBzcHJpdGUubm9kZTtcbiAgICB9XG5cbiAgICB2YXIgbW91bnROb2RlID0gdHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCkgOiB0YXJnZXQ7XG4gICAgdmFyIG5vZGUgPSBzcHJpdGUucmVuZGVyKCk7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcblxuICAgIGlmIChwcmVwZW5kICYmIG1vdW50Tm9kZS5jaGlsZE5vZGVzWzBdKSB7XG4gICAgICBtb3VudE5vZGUuaW5zZXJ0QmVmb3JlKG5vZGUsIG1vdW50Tm9kZS5jaGlsZE5vZGVzWzBdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbW91bnROb2RlLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIH1cblxuICAgIHRoaXMuX2VtaXR0ZXIuZW1pdChFdmVudHMuTU9VTlQsIG5vZGUpO1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH07XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAqL1xuICBCcm93c2VyU3ByaXRlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIgKCkge1xuICAgIHJldHVybiBwYXJzZSh0aGlzLnN0cmluZ2lmeSgpKTtcbiAgfTtcblxuICAvKipcbiAgICogRGV0YWNoIHNwcml0ZSBmcm9tIHRoZSBET01cbiAgICovXG4gIEJyb3dzZXJTcHJpdGUucHJvdG90eXBlLnVubW91bnQgPSBmdW5jdGlvbiB1bm1vdW50ICgpIHtcbiAgICB0aGlzLm5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLm5vZGUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBVcGRhdGUgVVJMcyBpbiBzcHJpdGUgYW5kIHVzYWdlIGVsZW1lbnRzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvbGRVcmxcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5ld1VybFxuICAgKiBAcmV0dXJuIHtib29sZWFufSBgdHJ1ZWAgLSBVUkxzIHdhcyB1cGRhdGVkLCBgZmFsc2VgIC0gc3ByaXRlIGlzIG5vdCBtb3VudGVkXG4gICAqL1xuICBCcm93c2VyU3ByaXRlLnByb3RvdHlwZS51cGRhdGVVcmxzID0gZnVuY3Rpb24gdXBkYXRlVXJscyQxIChvbGRVcmwsIG5ld1VybCkge1xuICAgIGlmICghdGhpcy5pc01vdW50ZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgdXNhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLmNvbmZpZy51c2FnZXNUb1VwZGF0ZSk7XG5cbiAgICB1cGRhdGVVcmxzKFxuICAgICAgdGhpcy5ub2RlLFxuICAgICAgdXNhZ2VzLFxuICAgICAgKChnZXRVcmxXaXRob3V0RnJhZ21lbnQob2xkVXJsKSkgKyBcIiNcIiksXG4gICAgICAoKGdldFVybFdpdGhvdXRGcmFnbWVudChuZXdVcmwpKSArIFwiI1wiKVxuICAgICk7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyggQnJvd3NlclNwcml0ZS5wcm90b3R5cGUsIHByb3RvdHlwZUFjY2Vzc29ycyApO1xuXG4gIHJldHVybiBCcm93c2VyU3ByaXRlO1xufShTcHJpdGUpKTtcblxudmFyIHJlYWR5JDEgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlKSB7XG4vKiFcbiAgKiBkb21yZWFkeSAoYykgRHVzdGluIERpYXogMjAxNCAtIExpY2Vuc2UgTUlUXG4gICovXG4hZnVuY3Rpb24gKG5hbWUsIGRlZmluaXRpb24pIHtcblxuICB7IG1vZHVsZS5leHBvcnRzID0gZGVmaW5pdGlvbigpOyB9XG5cbn0oJ2RvbXJlYWR5JywgZnVuY3Rpb24gKCkge1xuXG4gIHZhciBmbnMgPSBbXSwgbGlzdGVuZXJcbiAgICAsIGRvYyA9IGRvY3VtZW50XG4gICAgLCBoYWNrID0gZG9jLmRvY3VtZW50RWxlbWVudC5kb1Njcm9sbFxuICAgICwgZG9tQ29udGVudExvYWRlZCA9ICdET01Db250ZW50TG9hZGVkJ1xuICAgICwgbG9hZGVkID0gKGhhY2sgPyAvXmxvYWRlZHxeYy8gOiAvXmxvYWRlZHxeaXxeYy8pLnRlc3QoZG9jLnJlYWR5U3RhdGUpO1xuXG5cbiAgaWYgKCFsb2FkZWQpXG4gIHsgZG9jLmFkZEV2ZW50TGlzdGVuZXIoZG9tQ29udGVudExvYWRlZCwgbGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoZG9tQ29udGVudExvYWRlZCwgbGlzdGVuZXIpO1xuICAgIGxvYWRlZCA9IDE7XG4gICAgd2hpbGUgKGxpc3RlbmVyID0gZm5zLnNoaWZ0KCkpIHsgbGlzdGVuZXIoKTsgfVxuICB9KTsgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoZm4pIHtcbiAgICBsb2FkZWQgPyBzZXRUaW1lb3V0KGZuLCAwKSA6IGZucy5wdXNoKGZuKTtcbiAgfVxuXG59KTtcbn0pO1xuXG52YXIgc3ByaXRlTm9kZUlkID0gJ19fU1ZHX1NQUklURV9OT0RFX18nO1xudmFyIHNwcml0ZUdsb2JhbFZhck5hbWUgPSAnX19TVkdfU1BSSVRFX18nO1xudmFyIGlzU3ByaXRlRXhpc3RzID0gISF3aW5kb3dbc3ByaXRlR2xvYmFsVmFyTmFtZV07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tbXV0YWJsZS1leHBvcnRzXG52YXIgc3ByaXRlO1xuXG5pZiAoaXNTcHJpdGVFeGlzdHMpIHtcbiAgc3ByaXRlID0gd2luZG93W3Nwcml0ZUdsb2JhbFZhck5hbWVdO1xufSBlbHNlIHtcbiAgc3ByaXRlID0gbmV3IEJyb3dzZXJTcHJpdGUoeyBhdHRyczogeyBpZDogc3ByaXRlTm9kZUlkIH0gfSk7XG4gIHdpbmRvd1tzcHJpdGVHbG9iYWxWYXJOYW1lXSA9IHNwcml0ZTtcbn1cblxudmFyIGxvYWRTcHJpdGUgPSBmdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiBDaGVjayBmb3IgcGFnZSBhbHJlYWR5IGNvbnRhaW5zIHNwcml0ZSBub2RlXG4gICAqIElmIGZvdW5kIC0gYXR0YWNoIHRvIGFuZCByZXVzZSBpdCdzIGNvbnRlbnRcbiAgICogSWYgbm90IC0gcmVuZGVyIGFuZCBtb3VudCB0aGUgbmV3IHNwcml0ZVxuICAgKi9cbiAgdmFyIGV4aXN0aW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc3ByaXRlTm9kZUlkKTtcblxuICBpZiAoZXhpc3RpbmcpIHtcbiAgICBzcHJpdGUuYXR0YWNoKGV4aXN0aW5nKTtcbiAgfSBlbHNlIHtcbiAgICBzcHJpdGUubW91bnQoZG9jdW1lbnQuYm9keSwgdHJ1ZSk7XG4gIH1cbn07XG5cbmlmIChkb2N1bWVudC5ib2R5KSB7XG4gIGxvYWRTcHJpdGUoKTtcbn0gZWxzZSB7XG4gIHJlYWR5JDEobG9hZFNwcml0ZSk7XG59XG5cbnZhciBzcHJpdGUkMSA9IHNwcml0ZTtcblxucmV0dXJuIHNwcml0ZSQxO1xuXG59KSkpO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiaW1wb3J0IFNwcml0ZVN5bWJvbCBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N2Zy1iYWtlci1ydW50aW1lL2Jyb3dzZXItc3ltYm9sLmpzXCI7XG5pbXBvcnQgc3ByaXRlIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3ZnLXNwcml0ZS1sb2FkZXIvcnVudGltZS9icm93c2VyLXNwcml0ZS5idWlsZC5qc1wiO1xudmFyIHN5bWJvbCA9IG5ldyBTcHJpdGVTeW1ib2woe1xuICBcImlkXCI6IFwiaWNvblwiLFxuICBcInVzZVwiOiBcImljb24tdXNhZ2VcIixcbiAgXCJ2aWV3Qm94XCI6IFwiMCAwIDEwMjQgMTAyNFwiLFxuICBcImNvbnRlbnRcIjogXCI8c3ltYm9sIGNsYXNzPVxcXCJpY29uXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTAyNCAxMDI0XFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiBpZD1cXFwiaWNvblxcXCI+PGRlZnM+PHN0eWxlIHR5cGU9XFxcInRleHQvY3NzXFxcIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPVxcXCJNODUzLjMzMzMzMyAxMDI0TDE3MC42NjY2NjcgMTAyNGMtOTMuODY2NjY3IDAtMTcwLjY2NjY2Ny03Ni44LTE3MC42NjY2NjctMTcwLjY2NjY2N0wwIDE3MC42NjY2NjdjMC05My44NjY2NjcgNzYuOC0xNzAuNjY2NjY3IDE3MC42NjY2NjctMTcwLjY2NjY2N2w2ODIuNjY2NjY2OTkgMGM5My44NjY2NjcgMCAxNzAuNjY2NjY3IDc2LjggMTcwLjY2NjY2NzAxIDE3MC42NjY2NjdsMCA2ODIuNjY2NjY2OTlDMTAyNCA5NDcuMiA5NDcuMiAxMDI0IDg1My4zMzMzMzMgMTAyNHpNMTcwLjY2NjY2NyA4NS4zMzMzMzNDMTIzLjczMzMzMyA4NS4zMzMzMzMgODUuMzMzMzMzIDEyMy43MzMzMzMgODUuMzMzMzMzIDE3MC42NjY2NjdsMCA2ODIuNjY2NjY2OTljMCA0Ni45MzMzMzMgMzguNCA4NS4zMzMzMzMgODUuMzMzMzMzMDEgODUuMzMzMzMzMDFsNjgyLjY2NjY2Njk5IDBjNDYuOTMzMzMzIDAgODUuMzMzMzMzLTM4LjQgODUuMzMzMzMzMDEtODUuMzMzMzMzMDFMOTM4LjY2NjY2NyAxNzAuNjY2NjY3YzAtNDYuOTMzMzMzLTM4LjQtODUuMzMzMzMzLTg1LjMzMzMzMzAxLTg1LjMzMzMzMzAxTDE3MC42NjY2NjcgODUuMzMzMzMzelxcXCIgcC1pZD1cXFwiMTE1NlxcXCIgLz48cGF0aCBkPVxcXCJNOTgxLjMzMzMzMyAzNDEuMzMzMzMzTDQyLjY2NjY2NyAzNDEuMzMzMzMzQzE3LjA2NjY2NyAzNDEuMzMzMzMzIDAgMzI0LjI2NjY2NyAwIDI5OC42NjY2NjdzMTcuMDY2NjY3LTQyLjY2NjY2NyA0Mi42NjY2NjctNDIuNjY2NjY3bDkzOC42NjY2NjY5OSAwYzI1LjYgMCA0Mi42NjY2NjcgMTcuMDY2NjY3IDQyLjY2NjY2NzAxIDQyLjY2NjY2N1MxMDA2LjkzMzMzMyAzNDEuMzMzMzMzIDk4MS4zMzMzMzMgMzQxLjMzMzMzM3pcXFwiIHAtaWQ9XFxcIjExNTdcXFwiIC8+PHBhdGggZD1cXFwiTTE3MC42NjY2NjcgMTcwLjY2NjY2N20tNDIuNjY2NjY3IDBhMSAxIDAgMSAwIDg1LjMzMzMzMyAwIDEgMSAwIDEgMC04NS4zMzMzMzMgMFpcXFwiIHAtaWQ9XFxcIjExNThcXFwiIC8+PHBhdGggZD1cXFwiTTE3MC42NjY2NjcgMjM0LjY2NjY2N0MxMzYuNTMzMzMzIDIzNC42NjY2NjcgMTA2LjY2NjY2NyAyMDQuOCAxMDYuNjY2NjY3IDE3MC42NjY2NjdTMTM2LjUzMzMzMyAxMDYuNjY2NjY3IDE3MC42NjY2NjcgMTA2LjY2NjY2NyAyMzQuNjY2NjY3IDEzNi41MzMzMzMgMjM0LjY2NjY2NyAxNzAuNjY2NjY3IDIwNC44IDIzNC42NjY2NjcgMTcwLjY2NjY2NyAyMzQuNjY2NjY3ek0xNzAuNjY2NjY3IDE0OS4zMzMzMzNDMTU3Ljg2NjY2NyAxNDkuMzMzMzMzIDE0OS4zMzMzMzMgMTU3Ljg2NjY2NyAxNDkuMzMzMzMzIDE3MC42NjY2NjdTMTU3Ljg2NjY2NyAxOTIgMTcwLjY2NjY2NyAxOTIgMTkyIDE4My40NjY2NjcgMTkyIDE3MC42NjY2NjcgMTgzLjQ2NjY2NyAxNDkuMzMzMzMzIDE3MC42NjY2NjcgMTQ5LjMzMzMzM3pcXFwiIHAtaWQ9XFxcIjExNTlcXFwiIC8+PHBhdGggZD1cXFwiTTI5OC42NjY2NjcgMTcwLjY2NjY2N20tNDIuNjY2NjY3IDBhMSAxIDAgMSAwIDg1LjMzMzMzMyAwIDEgMSAwIDEgMC04NS4zMzMzMzMgMFpcXFwiIHAtaWQ9XFxcIjExNjBcXFwiIC8+PHBhdGggZD1cXFwiTTI5OC42NjY2NjcgMjM0LjY2NjY2N0MyNjQuNTMzMzMzIDIzNC42NjY2NjcgMjM0LjY2NjY2NyAyMDQuOCAyMzQuNjY2NjY3IDE3MC42NjY2NjdTMjY0LjUzMzMzMyAxMDYuNjY2NjY3IDI5OC42NjY2NjcgMTA2LjY2NjY2NyAzNjIuNjY2NjY3IDEzNi41MzMzMzMgMzYyLjY2NjY2NyAxNzAuNjY2NjY3IDMzMi44IDIzNC42NjY2NjcgMjk4LjY2NjY2NyAyMzQuNjY2NjY3ek0yOTguNjY2NjY3IDE0OS4zMzMzMzNDMjg1Ljg2NjY2NyAxNDkuMzMzMzMzIDI3Ny4zMzMzMzMgMTU3Ljg2NjY2NyAyNzcuMzMzMzMzIDE3MC42NjY2NjdTMjg1Ljg2NjY2NyAxOTIgMjk4LjY2NjY2NyAxOTIgMzIwIDE4My40NjY2NjcgMzIwIDE3MC42NjY2NjcgMzExLjQ2NjY2NyAxNDkuMzMzMzMzIDI5OC42NjY2NjcgMTQ5LjMzMzMzM3pcXFwiIHAtaWQ9XFxcIjExNjFcXFwiIC8+PHBhdGggZD1cXFwiTTQyNi42NjY2NjcgMTcwLjY2NjY2N20tNDIuNjY2NjY3IDBhMSAxIDAgMSAwIDg1LjMzMzMzMyAwIDEgMSAwIDEgMC04NS4zMzMzMzMgMFpcXFwiIHAtaWQ9XFxcIjExNjJcXFwiIC8+PHBhdGggZD1cXFwiTTQyNi42NjY2NjcgMjM0LjY2NjY2N0MzOTIuNTMzMzMzIDIzNC42NjY2NjcgMzYyLjY2NjY2NyAyMDQuOCAzNjIuNjY2NjY3IDE3MC42NjY2NjdTMzkyLjUzMzMzMyAxMDYuNjY2NjY3IDQyNi42NjY2NjcgMTA2LjY2NjY2N3M2NCAyOS44NjY2NjcgNjQgNjRTNDYwLjggMjM0LjY2NjY2NyA0MjYuNjY2NjY3IDIzNC42NjY2Njd6TTQyNi42NjY2NjcgMTQ5LjMzMzMzM0M0MTMuODY2NjY3IDE0OS4zMzMzMzMgNDA1LjMzMzMzMyAxNTcuODY2NjY3IDQwNS4zMzMzMzMgMTcwLjY2NjY2N1M0MTMuODY2NjY3IDE5MiA0MjYuNjY2NjY3IDE5MnMyMS4zMzMzMzMtOC41MzMzMzMgMjEuMzMzMzMzLTIxLjMzMzMzM1M0MzkuNDY2NjY3IDE0OS4zMzMzMzMgNDI2LjY2NjY2NyAxNDkuMzMzMzMzelxcXCIgcC1pZD1cXFwiMTE2M1xcXCIgLz48L3N5bWJvbD5cIlxufSk7XG52YXIgcmVzdWx0ID0gc3ByaXRlLmFkZChzeW1ib2wpO1xuZXhwb3J0IGRlZmF1bHQgc3ltYm9sIiwiaW1wb3J0IFwiLi9pY29uLnN2Z1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAnLi9hbmltYXRlLmNzcyc7XHJcbmltcG9ydCAnLi9jb21tb24uY3NzJztcclxuaW1wb3J0ICcuL2ljb24uY3NzJztcclxuaW1wb3J0ICcuL3Rvb2wtYmFyLmNzcyc7XHJcbmltcG9ydCAnLi93aW5kb3cuY3NzJztcclxuXHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCB7IEV2ZW50QnVzIH0gZnJvbSAnLi4vY29yZS9ldmVudC1idXMnO1xyXG5pbXBvcnQgeyBKU09OT2JqZWN0IH0gZnJvbSAnLi4vY29yZS9oZWxwZXIvdHlwZSc7XHJcbmltcG9ydCB7IEVudHJ5IH0gZnJvbSAnLi4vZW50cnknO1xyXG5cclxuLyoqXHJcbiAqIOe7hOS7tuexu++8jOaJgOacieeahOe7hOS7tumDveW/hemhu+e7p+aJv+ivpeexu1xyXG4gKiBAdGVtcGxhdGUgVE9wdGlvbiDnu4Tku7blj4LmlbBcclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDb21wb25lbnQ8VE9wdGlvbj4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiDlhaXlj6Plr7nosaFcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGVudHJ5OiBFbnRyeSA9IEVudHJ5LmdldEluc3RhbmNlKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDkuovku7bmgLvnur/lr7nosaFcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGV2ZW50QnVzOiBFdmVudEJ1cyA9IEV2ZW50QnVzLmdldEluc3RhbmNlKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnu4Tku7bllK/kuIDmoIfor4ZcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzeW1ib2w6IHN5bWJvbCA9IFN5bWJvbChcIm1vbmtzb3VsXCIpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5aSE55CG5Yid5aeL5Lyg5YWl5Y+C5pWwXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyDlj6/pgInlj4LmlbBcclxuICAgICAqIEByZXR1cm5zIHZvaWRcclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgaGFuZGxlck9wdGlvbnMob3B0aW9uczogVE9wdGlvbik6IHZvaWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlj5HpgIHkuovku7ZcclxuICAgICAqIEBwYXJhbSBldmVudE5hbWUg5LqL5Lu25ZCN56ewXHJcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSDmtojmga9cclxuICAgICAqIEByZXR1cm5zIHZvaWRcclxuICAgICAqL1xyXG4gICAgc2VuZEV2ZW50KGV2ZW50TmFtZTogc3RyaW5nLCBtZXNzYWdlOiBKU09OT2JqZWN0ID0ge30pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmV2ZW50QnVzLmVtaXQoZXZlbnROYW1lLCB7XHJcbiAgICAgICAgICAgIGRhdGFzZXQ6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIGV2ZW50VGFyZ2V0OiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBldmVudE5hbWUsXHJcbiAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudmFsdWVPZigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuoeeul+WkmuWxguW1jOWll+S4reexu+Wei+WxnuaAp+WAvFxyXG4gICAgICogQHBhcmFtIGtleSDot6/lvoTvvIzmoLzlvI/vvJp3aW5kb3cvdG9vbEJhci9zaXplXHJcbiAgICAgKiBAcGFyYW0gZGVmYXVsdFZhbHVlIOm7mOiupOWAvFxyXG4gICAgICogQHBhcmFtIFtzdGFyT2JqZWN0XSDotbflp4vlr7nosaFcclxuICAgICAqIEByZXR1cm5zIGFueSBcclxuICAgICAqL1xyXG4gICAgZnJvbUpTT05QYXRoKGtleTogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IGFueSwgc3Rhck9iamVjdDogSlNPTk9iamVjdCA9IHRoaXMuZW50cnkpOiBhbnkge1xyXG4gICAgICAgIGlmIChrZXkuaW5kZXhPZihcIi9cIikgPiAtMSkge1xyXG4gICAgICAgICAgICBjb25zdCBrZXlzID0ga2V5LnNwbGl0KFwiL1wiKTtcclxuICAgICAgICAgICAgbGV0IHRpZXIgPSB0aGlzLmZyb21KU09OUGF0aChrZXlzWzBdLCBkZWZhdWx0VmFsdWUpO1xyXG4gICAgICAgICAgICBpZiAoIXRpZXIpIHJldHVybiBkZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgKyAxIDwga2V5cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aWVyID0gdGhpcy5mcm9tSlNPTlBhdGgoa2V5c1tpICsgMV0sIGRlZmF1bHRWYWx1ZSwgdGllcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHJldHVybiB0aWVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aWVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHJldHVybiBzdGFyT2JqZWN0W2tleV0gPz8gZGVmYXVsdFZhbHVlO1xyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIOWGhee9ruWbvuagh1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGVudW0gU3VwcG9ydEljb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiDpu5jorqTlm77moIdcclxuICAgICAqL1xyXG4gICAgSUNPTiA9IFwiaWNvblwiXHJcbn1cclxuXHJcblxyXG4vKipcclxuICog6buY6K6k5Zu+5qCHXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9JQ09OOiBzdHJpbmcgPSBTdXBwb3J0SWNvbi5JQ09OO1xyXG5cclxuLyoqXHJcbiAqIOm7mOiupOWbvuagh+minOiJslxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfSUNPTl9DT0xPUjogc3RyaW5nID0gXCIjMDAwMDAwXCI7XHJcblxyXG4vKipcclxuICog6buY6K6k5Zu+5qCH5aSn5bCPXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9JQ09OX1NJWkU6IG51bWJlciA9IDE0OyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uLyc7XHJcbmltcG9ydCB7IGlzQ29sb3IsIGlzTm9FbXB0eU9yTnVsbCwgaXNQc3RJbnQgfSBmcm9tICcuLi8uLi9jb3JlL2RlY29yYXRvci9wcm9wZXJ0eS1kZWNvcmF0b3InO1xyXG5pbXBvcnQgeyBhZGRDU1NDbGFzc2VzLCBjcmVhdGVEaXZFbGVtZW50LCBjcmVhdGVTdmdFbGVtZW50IH0gZnJvbSAnLi4vLi4vY29yZS9oZWxwZXIvZWxlbWVudC1oZWxwZXInO1xyXG5pbXBvcnQgeyBVSUNvbXBvbmVudCB9IGZyb20gJy4uL3VpLWNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbXBvbmVudEVsZW1lbnQgfSBmcm9tICcuLi91aS1jb21wb25lbnQvdHlwZSc7XHJcbmltcG9ydCB7IERFRkFVTFRfSUNPTiwgREVGQVVMVF9JQ09OX0NPTE9SLCBERUZBVUxUX0lDT05fU0laRSB9IGZyb20gJy4vY29uc3QnO1xyXG5pbXBvcnQgeyBoYW5kbGVyT3B0aW9ucyB9IGZyb20gJy4vcGFydGlhbCc7XHJcbmltcG9ydCB7IFVJSWNvbk9wdGlvbiB9IGZyb20gJy4vdHlwZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgVUlJQ29uIGV4dGVuZHMgQ29tcG9uZW50PFVJSWNvbk9wdGlvbj4gaW1wbGVtZW50cyBVSUNvbXBvbmVudDxVSUljb25PcHRpb24+IHtcclxuICAgIC8qKlxyXG4gICAgKiDmnoTpgKDlh73mlbBcclxuICAgICogQHBhcmFtIG9wdGlvbnMg5Y+v6YCJ5Y+C5pWwXHJcbiAgICAqL1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG9wdGlvbnM6IFVJSWNvbk9wdGlvbikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVyT3B0aW9ucyhvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWkhOeQhuWIneWni+S8oOWFpeWPguaVsFxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMg5Y+v6YCJ5Y+C5pWwXHJcbiAgICAgKiBAcmV0dXJucyB2b2lkXHJcbiAgICAgKi9cclxuICAgIGhhbmRsZXJPcHRpb25zOiAob3B0aW9uczogVUlJY29uT3B0aW9uKSA9PiB2b2lkID0gaGFuZGxlck9wdGlvbnM7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlm77moIflkI3np7BcclxuICAgICAqL1xyXG4gICAgQGlzTm9FbXB0eU9yTnVsbCgpXHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nID0gREVGQVVMVF9JQ09OO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Zu+5qCH6aKc6ImyXHJcbiAgICAgKi9cclxuICAgIEBpc0NvbG9yKClcclxuICAgIHB1YmxpYyBjb2xvcjogc3RyaW5nID0gREVGQVVMVF9JQ09OX0NPTE9SO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Zu+5qCH5aSn5bCPXHJcbiAgICAgKi9cclxuICAgIEBpc1BzdEludCgpXHJcbiAgICBwdWJsaWMgc2l6ZTogbnVtYmVyID0gREVGQVVMVF9JQ09OX1NJWkU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJvlu7rnu4Tku7blhYPntKDlr7nosaFcclxuICAgICAqIEByZXR1cm5zIENvbXBvbmVudEVsZW1lbnRcclxuICAgICAqL1xyXG4gICAgcHJlc2VudCgpOiBDb21wb25lbnRFbGVtZW50IHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRlRGl2RWxlbWVudCgpO1xyXG5cclxuICAgICAgICBhZGRDU1NDbGFzc2VzKGVsZW1lbnQsXHJcbiAgICAgICAgICAgIFwiaWNvblwiKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3ZnRWxlbWVudCA9IGNyZWF0ZVN2Z0VsZW1lbnQodGhpcy5uYW1lKTtcclxuICAgICAgICBzdmdFbGVtZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIGAke3RoaXMuZW50cnkucHJlZml4fXN2Z2ApO1xyXG4gICAgICAgIHN2Z0VsZW1lbnQuc3R5bGUuZm9udFNpemUgPSBgJHt0aGlzLnNpemV9cHhgO1xyXG4gICAgICAgIHN2Z0VsZW1lbnQuc3R5bGUuY29sb3IgPSBgJHt0aGlzLmNvbG9yfWA7XHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChzdmdFbGVtZW50KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBVSUlDb24gfSBmcm9tICcuJztcclxuaW1wb3J0IHsgVUlJY29uT3B0aW9uIH0gZnJvbSAnLi90eXBlJztcclxuXHJcbi8qKlxyXG4gKiDlpITnkIbliJ3lp4vkvKDlhaXlj4LmlbBcclxuICogQHBhcmFtIG9wdGlvbnMg5Y+v6YCJ5Y+C5pWwXHJcbiAqIEByZXR1cm5zIHZvaWRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVyT3B0aW9ucyh0aGlzOiBVSUlDb24sIG9wdGlvbnM6IFVJSWNvbk9wdGlvbik6IHZvaWQge1xyXG4gICAgdGhpcy5uYW1lID0gb3B0aW9ucz8ubmFtZSA/PyB0aGlzLm5hbWU7XHJcbiAgICB0aGlzLmNvbG9yID0gb3B0aW9ucz8uY29sb3IgPz8gdGhpcy5jb2xvcjtcclxuICAgIHRoaXMuc2l6ZSA9IG9wdGlvbnM/LnNpemUgPz8gdGhpcy5zaXplO1xyXG59IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vJztcclxuaW1wb3J0IHsgY29tYmluZSwgaXNDb2xvciwgaXNQc3ROdW1iZXIgfSBmcm9tICcuLi8uLi9jb3JlL2RlY29yYXRvci9wcm9wZXJ0eS1kZWNvcmF0b3InO1xyXG5pbXBvcnQgeyBhZGRDU1NDbGFzc2VzLCBhZGRDU1NTdHlsZXMsIGNyZWF0ZURpdkVsZW1lbnQgfSBmcm9tICcuLi8uLi9jb3JlL2hlbHBlci9lbGVtZW50LWhlbHBlcic7XHJcbmltcG9ydCB7IGNoZWNrQ29sb3IsIGNoZWNrTm9FbXB0eU9yTnVsbCwgY2hlY2tQc3RJbnQsIGNoZWNrU3RyaW5nIH0gZnJvbSAnLi4vLi4vY29yZS92YWxpZGF0b3InO1xyXG5pbXBvcnQgeyBERUZBVUxUX1RPT0xCQVJfQkFDS0dST1VORF9DT0xPUiwgREVGQVVMVF9UT09MQkFSX0hFSUdIVCB9IGZyb20gJy4uLy4uL2VudHJ5L2NvbnN0JztcclxuaW1wb3J0IHsgVUlDb21wb25lbnQgfSBmcm9tICcuLi91aS1jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRFbGVtZW50IH0gZnJvbSAnLi4vdWktY29tcG9uZW50L3R5cGUnO1xyXG5pbXBvcnQgeyBVSUlDb24gfSBmcm9tICcuLi91aS1pY29uJztcclxuaW1wb3J0IHsgVUlJY29uT3B0aW9uIH0gZnJvbSAnLi4vdWktaWNvbi90eXBlJztcclxuaW1wb3J0IHsgQWxpZ24gfSBmcm9tICcuL2NvbnN0JztcclxuaW1wb3J0IHsgaGFuZGxlck9wdGlvbnMgfSBmcm9tICcuL3BhcnRpYWwnO1xyXG5pbXBvcnQgeyBUaXRsZUJhck9wdGlvbiwgVUlUb29sQmFyT3B0aW9uIH0gZnJvbSAnLi90eXBlJztcclxuXHJcbi8qKlxyXG4gKiDlt6XlhbfmoI/nsbtcclxuICovXHJcbmV4cG9ydCBjbGFzcyBVSVRvb2xCYXIgZXh0ZW5kcyBDb21wb25lbnQ8VUlUb29sQmFyT3B0aW9uPiBpbXBsZW1lbnRzIFVJQ29tcG9uZW50PFVJVG9vbEJhck9wdGlvbj4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiDmnoTpgKDlh73mlbBcclxuICAgICAqIEBwYXJhbSBvcHRpb25zIOWPr+mAieWPguaVsFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Iob3B0aW9uczogVUlUb29sQmFyT3B0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmhhbmRsZXJPcHRpb25zKG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5aSE55CG5Yid5aeL5Lyg5YWl5Y+C5pWwXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyDlj6/pgInlj4LmlbBcclxuICAgICAqIEByZXR1cm5zIHZvaWRcclxuICAgICAqL1xyXG4gICAgaGFuZGxlck9wdGlvbnM6IChvcHRpb25zOiBVSVRvb2xCYXJPcHRpb24pID0+IHZvaWQgPSBoYW5kbGVyT3B0aW9ucztcclxuXHJcbiAgICAvKipcclxuICAgICAqIOagh+mimFxyXG4gICAgICovXHJcbiAgICBAY29tYmluZSh7XHJcbiAgICAgICAgbGFiZWw6IGNoZWNrU3RyaW5nLFxyXG4gICAgICAgIGNvbG9yOiBjaGVja0NvbG9yLFxyXG4gICAgICAgIGFsaWduOiBbQWxpZ24uTEVGVCwgQWxpZ24uQ0VOVEVSLCBBbGlnbi5SSUdIVF0sXHJcbiAgICAgICAgZm9udFNpemU6IGNoZWNrUHN0SW50XHJcbiAgICB9LCBmYWxzZSlcclxuICAgIHB1YmxpYyB0aXRsZUJhcjogVGl0bGVCYXJPcHRpb24gfCBmYWxzZSA9IDxUaXRsZUJhck9wdGlvbiB8IGZhbHNlPnRoaXMuZnJvbUpTT05QYXRoKFwid2luZG93L3Rvb2xCYXIvdGl0bGVCYXJcIiwgZmFsc2UpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6buY6K6k6auY5bqmXHJcbiAgICAgKi9cclxuICAgIEBpc1BzdE51bWJlcigpXHJcbiAgICBwdWJsaWMgaGVpZ2h0OiBudW1iZXIgPSB0aGlzLmZyb21KU09OUGF0aChcIndpbmRvdy90b29sQmFyL2hlaWdodFwiLCBERUZBVUxUX1RPT0xCQVJfSEVJR0hUKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOiDjOaZr+minOiJslxyXG4gICAgICovXHJcbiAgICBAaXNDb2xvcigpXHJcbiAgICBwdWJsaWMgYmFja2dyb3VuZENvbG9yOiBzdHJpbmcgPSB0aGlzLmZyb21KU09OUGF0aChcIndpbmRvdy90b29sQmFyL2JhY2tncm91bmRDb2xvclwiLCBERUZBVUxUX1RPT0xCQVJfQkFDS0dST1VORF9DT0xPUilcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWbvuagh1xyXG4gICAgICovXHJcbiAgICBAY29tYmluZSh7XHJcbiAgICAgICAgbmFtZTogY2hlY2tOb0VtcHR5T3JOdWxsLFxyXG4gICAgICAgIHNpemU6IGNoZWNrUHN0SW50LFxyXG4gICAgICAgIGNvbG9yOiBjaGVja0NvbG9yXHJcbiAgICB9LCBmYWxzZSlcclxuICAgIHB1YmxpYyBpY29uOiBVSUljb25PcHRpb24gfCBmYWxzZSA9IDxVSUljb25PcHRpb24gfCBmYWxzZT50aGlzLmZyb21KU09OUGF0aChcIndpbmRvdy90b29sQmFyL2ljb25cIiwgZmFsc2UpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yib5bu657uE5Lu25YWD57Sg5a+56LGhXHJcbiAgICAgKiBAcmV0dXJucyBDb21wb25lbnRFbGVtZW50XHJcbiAgICAgKi9cclxuICAgIHByZXNlbnQoKTogQ29tcG9uZW50RWxlbWVudCB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZURpdkVsZW1lbnQoKTtcclxuXHJcbiAgICAgICAgYWRkQ1NTQ2xhc3NlcyhlbGVtZW50LFxyXG4gICAgICAgICAgICBcInRvb2wtYmFyXCIsXHJcbiAgICAgICAgICAgIFwiZmxleC1ib3hcIixcclxuICAgICAgICAgICAgXCJ2ZXJ0aWNhbC1taWRkbGVcIik7XHJcblxyXG4gICAgICAgIGFkZENTU1N0eWxlcyhlbGVtZW50LFxyXG4gICAgICAgICAgICA8Q1NTU3R5bGVEZWNsYXJhdGlvbj57XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGAke3RoaXMuaGVpZ2h0fXB4YCxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcblxyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6L+95Yqg5a2Q5YWD57SgXHJcbiAgICAgKiBAcGFyYW0gZWxlbWVudCDniLblhYPntKBcclxuICAgICAqIEByZXR1cm5zIHZvaWRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhcHBlbmRDaGlsZChlbGVtZW50OiBIVE1MRGl2RWxlbWVudCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmljb24gIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVpSWNvbiA9IG5ldyBVSUlDb24odGhpcy5pY29uKTtcclxuICAgICAgICAgICAgY29uc3QgdWlJY29uRWxlbWVudCA9IHVpSWNvbi5wcmVzZW50KCk7XHJcbiAgICAgICAgICAgIGFkZENTU0NsYXNzZXModWlJY29uRWxlbWVudCwgXCJ0b29sLWJhci1pY29uXCIpO1xyXG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHVpSWNvbkVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMudGl0bGVCYXIgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlQmFyRWxlbWVudCA9IGNyZWF0ZURpdkVsZW1lbnQoKTtcclxuXHJcbiAgICAgICAgICAgIGFkZENTU0NsYXNzZXModGl0bGVCYXJFbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgXCJ0aXRsZS1iYXJcIixcclxuICAgICAgICAgICAgICAgIFwiZmxleC1pdGVtXCIpO1xyXG5cclxuICAgICAgICAgICAgYWRkQ1NTU3R5bGVzKHRpdGxlQmFyRWxlbWVudCxcclxuICAgICAgICAgICAgICAgIDxDU1NTdHlsZURlY2xhcmF0aW9uPntcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogYCR7dGhpcy50aXRsZUJhci5jb2xvcn1gLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogYCR7dGhpcy50aXRsZUJhci5hbGlnbn1gLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBgJHt0aGlzLnRpdGxlQmFyLmZvbnRTaXplfXB4YFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aXRsZUJhckVsZW1lbnQudGV4dENvbnRlbnQgPSA8c3RyaW5nPnRoaXMudGl0bGVCYXIubGFiZWw7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHRpdGxlQmFyRWxlbWVudCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IFVJSWNvbk9wdGlvbiB9IGZyb20gJy4uL3VpLWljb24vdHlwZSc7XHJcbmltcG9ydCB7IFVJVG9vbEJhciB9IGZyb20gJy4vJztcclxuaW1wb3J0IHsgVGl0bGVCYXJPcHRpb24sIFVJVG9vbEJhck9wdGlvbiB9IGZyb20gJy4vdHlwZSc7XHJcblxyXG4vKipcclxuICog5aSE55CG5Yid5aeL5Lyg5YWl5Y+C5pWwXHJcbiAqIEBwYXJhbSBvcHRpb25zIOWPr+mAieWPguaVsFxyXG4gKiBAcmV0dXJucyB2b2lkXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlck9wdGlvbnModGhpczogVUlUb29sQmFyLCBvcHRpb25zOiBVSVRvb2xCYXJPcHRpb24pOiB2b2lkIHtcclxuICAgIHRoaXMuaGVpZ2h0ID0gb3B0aW9ucz8uaGVpZ2h0ID8/IHRoaXMuaGVpZ2h0O1xyXG4gICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSBvcHRpb25zPy5iYWNrZ3JvdW5kQ29sb3IgPz8gdGhpcy5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICB0aGlzLnRpdGxlQmFyID0gPFRpdGxlQmFyT3B0aW9uIHwgZmFsc2U+b3B0aW9ucz8udGl0bGVCYXIgPz8gdGhpcy50aXRsZUJhcjtcclxuICAgIHRoaXMuaWNvbiA9IDxVSUljb25PcHRpb24gfCBmYWxzZT5vcHRpb25zPy5pY29uID8/IHRoaXMuaWNvbjtcclxufSIsIi8qKlxyXG4gKiDovrnmoYbmoLflvI9cclxuICovXHJcbmV4cG9ydCBjb25zdCBlbnVtIEJvcmRlclN0eWxlIHtcclxuICAgIC8qKlxyXG4gICAgICog54K554q2XHJcbiAgICAgKi9cclxuICAgIERPVFRFRCA9IFwiZG90dGVkXCIsXHJcbiAgICAvKipcclxuICAgICAqIOiZmue6v1xyXG4gICAgICovXHJcbiAgICBEQVNIRUQgPSBcImRhc2hlZFwiLFxyXG4gICAgLyoqXHJcbiAgICAgKiDlrp7nur9cclxuICAgICAqL1xyXG4gICAgU09MSUQgPSBcInNvbGlkXCIsXHJcbiAgICAvKipcclxuICAgICAqIOWPjOe6v1xyXG4gICAgICovXHJcbiAgICBET1VCTEUgPSBcImRvdWJsZVwiXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmlK/mjIHliqjnlLtcclxuICovXHJcbmV4cG9ydCBjb25zdCBlbnVtIEFuaW1hdGlvbiB7XHJcbiAgICAvKipcclxuICAgICAqIOe8qeaUvlxyXG4gICAgICovXHJcbiAgICBaT09NID0gXCJ6b29tXCJcclxufVxyXG5cclxuLyoqXHJcbiAqIOWBj+enu1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGVudW0gT2Zmc2V0IHtcclxuICAgIC8qKlxyXG4gICAgICog5Lit6Ze0XHJcbiAgICAgKi9cclxuICAgIENFTlRFUiA9IFwiY2VudGVyXCIsXHJcbiAgICAvKipcclxuICAgICAqIOmhtumDqOS4remXtFxyXG4gICAgICovXHJcbiAgICBUT1BfQ0VOVEVSID0gXCJ0b3AtY2VudGVyXCIsXHJcbiAgICAvKipcclxuICAgICAqIOW6lemDqOS4remXtFxyXG4gICAgICovXHJcbiAgICBCT1RUT01fQ0VOVEVSID0gXCJib3R0b20tY2VudGVyXCIsXHJcbiAgICAvKipcclxuICAgICAqIOW3puS4iuinklxyXG4gICAgICovXHJcbiAgICBMRUZUX1RPUCA9IFwibGVmdC10b3BcIixcclxuICAgIC8qKlxyXG4gICAgICog5bem5Lit6Ze0XHJcbiAgICAgKi9cclxuICAgIExFRlRfTUlERExFID0gXCJsZWZ0LW1pZGRsZVwiLFxyXG4gICAgLyoqXHJcbiAgICAgKiDlt6bkuIvop5JcclxuICAgICAqL1xyXG4gICAgTEVGVF9CT1RUT00gPSBcImxlZnQtYm90dG9tXCIsXHJcbiAgICAvKipcclxuICAgICAqIOWPs+S4iuinklxyXG4gICAgICovXHJcbiAgICBSSUdIVF9UT1AgPSBcInJpZ2h0LXRvcFwiLFxyXG4gICAgLyoqXHJcbiAgICAgKiDlj7PkuK3pl7RcclxuICAgICAqL1xyXG4gICAgUklHSFRfTUlERExFID0gXCJyaWdodC1taWRkbGVcIixcclxuICAgIC8qKlxyXG4gICAgICog5Y+z5LiL6KeSXHJcbiAgICAgKi9cclxuICAgIFJJR0hUX0JPVFRPTSA9IFwicmlnaHQtYm90dG9tXCJcclxufVxyXG5cclxuLyoqXHJcbiAqIOm7mOiupOacgOWwj+WuveW6plxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfTUlOX1dJRFRIOiBudW1iZXIgPSAyMDA7XHJcblxyXG4vKipcclxuICog6buY6K6k5pyA5bCP6auY5bqmXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9NSU5fSEVJR0hUOiBudW1iZXIgPSAyMDA7XHJcblxyXG4vKipcclxuICog6buY6K6k5pyA5aSn5a695bqmXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9NQVhfV0lEVEg6IG51bWJlciA9IGlubmVyV2lkdGg7XHJcblxyXG4vKipcclxuICog6buY6K6k5pyA5aSn6auY5bqmXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9NQVhfSEVJR0hUOiBudW1iZXIgPSBpbm5lckhlaWdodDtcclxuXHJcbi8qKlxyXG4gKiDpu5jorqTovrnmoYblrr3luqZcclxuICovXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX0JPUkRFUl9XSURUSDogbnVtYmVyID0gMTtcclxuXHJcbi8qKlxyXG4gKiDpu5jorqTovrnmoYbmoLflvI9cclxuICovXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX0JPUkRFUl9TVFlMRTogQm9yZGVyU3R5bGUgPSBCb3JkZXJTdHlsZS5TT0xJRDtcclxuXHJcbi8qKlxyXG4gKiDpu5jorqTovrnmoYbpopzoibJcclxuICovXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX0JPUkRFUl9DT0xPUjogc3RyaW5nID0gXCIjM2JhY2VkXCI7XHJcblxyXG4vKipcclxuICog6buY6K6k6L655qGG5ZyG6KeSXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9CT1JERVJfUkFESVVTOiBudW1iZXIgPSA0OyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uLyc7XHJcbmltcG9ydCB7XHJcbiAgICBjb21iaW5lLFxyXG4gICAgaW5WYWx1ZU9wdGlvbnMsXHJcbiAgICBpc0Jvb2xlYW4sXHJcbiAgICBpc0NvbG9yLFxyXG4gICAgaXNOb0VtcHR5T3JOdWxsLFxyXG4gICAgaXNQc3ROdW1iZXIsXHJcbn0gZnJvbSAnLi4vLi4vY29yZS9kZWNvcmF0b3IvcHJvcGVydHktZGVjb3JhdG9yJztcclxuaW1wb3J0IHtcclxuICAgIGFkZENTU0NsYXNzZXMsXHJcbiAgICBhZGRDU1NTdHlsZXMsXHJcbiAgICBjcmVhdGVEaXZFbGVtZW50LFxyXG4gICAgaGFzQ1NTQ2xhc3MsXHJcbiAgICByZW1vdmVDU1NDbGFzc2VzLFxyXG59IGZyb20gJy4uLy4uL2NvcmUvaGVscGVyL2VsZW1lbnQtaGVscGVyJztcclxuaW1wb3J0IHsgY2hlY2tDb2xvciwgY2hlY2tOb0VtcHR5T3JOdWxsLCBjaGVja1BzdEludCwgY2hlY2tQc3ROdW1iZXIsIGNoZWNrU3RyaW5nIH0gZnJvbSAnLi4vLi4vY29yZS92YWxpZGF0b3InO1xyXG5pbXBvcnQgeyBERUZBVUxUX1dJTkRPV19CQUNLR1JPVU5EX0NPTE9SLCBERUZBVUxUX1dJTkRPV19IRUlHSFQsIERFRkFVTFRfV0lORE9XX1dJRFRIIH0gZnJvbSAnLi4vLi4vZW50cnkvY29uc3QnO1xyXG5pbXBvcnQgeyBVSUNvbXBvbmVudCB9IGZyb20gJy4uL3VpLWNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbXBvbmVudEVsZW1lbnQgfSBmcm9tICcuLi91aS1jb21wb25lbnQvdHlwZSc7XHJcbmltcG9ydCB7IFVJVG9vbEJhciB9IGZyb20gJy4uL3VpLXRvb2wtYmFyJztcclxuaW1wb3J0IHsgQWxpZ24gfSBmcm9tICcuLi91aS10b29sLWJhci9jb25zdCc7XHJcbmltcG9ydCB7IFVJVG9vbEJhck9wdGlvbiB9IGZyb20gJy4uL3VpLXRvb2wtYmFyL3R5cGUnO1xyXG5pbXBvcnQge1xyXG4gICAgQW5pbWF0aW9uLFxyXG4gICAgQm9yZGVyU3R5bGUsXHJcbiAgICBERUZBVUxUX0JPUkRFUl9DT0xPUixcclxuICAgIERFRkFVTFRfQk9SREVSX1JBRElVUyxcclxuICAgIERFRkFVTFRfQk9SREVSX1NUWUxFLFxyXG4gICAgREVGQVVMVF9CT1JERVJfV0lEVEgsXHJcbiAgICBERUZBVUxUX01BWF9IRUlHSFQsXHJcbiAgICBERUZBVUxUX01BWF9XSURUSCxcclxuICAgIERFRkFVTFRfTUlOX0hFSUdIVCxcclxuICAgIERFRkFVTFRfTUlOX1dJRFRILFxyXG59IGZyb20gJy4vY29uc3QnO1xyXG5pbXBvcnQgeyBoYW5kbGVyT3B0aW9ucyB9IGZyb20gJy4vcGFydGlhbCc7XHJcbmltcG9ydCB7IEJvcmRlck9wdGlvbiwgVUlXaW5kb3dPcHRpb24gfSBmcm9tICcuL3R5cGUnO1xyXG5cclxuLyoqXHJcbiAqIOeql+WPo+e7hOS7tuexu1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFVJV2luZG93IGV4dGVuZHMgQ29tcG9uZW50PFVJV2luZG93T3B0aW9uPiBpbXBsZW1lbnRzIFVJQ29tcG9uZW50PFVJV2luZG93T3B0aW9uPiB7XHJcbiAgICAvKipcclxuICAgICAqIOaehOmAoOWHveaVsFxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMg5Y+v6YCJ5Y+C5pWwXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihvcHRpb25zOiBVSVdpbmRvd09wdGlvbikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuaWQgPSBvcHRpb25zPy5pZDtcclxuICAgICAgICB0aGlzLmhhbmRsZXJPcHRpb25zKG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5aSE55CG5Yid5aeL5Lyg5YWl5Y+C5pWwXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyDlj6/pgInlj4LmlbBcclxuICAgICAqIEByZXR1cm5zIHZvaWRcclxuICAgICAqL1xyXG4gICAgaGFuZGxlck9wdGlvbnM6IChvcHRpb25zOiBVSVdpbmRvd09wdGlvbikgPT4gdm9pZCA9IGhhbmRsZXJPcHRpb25zO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5ZSv5LiASWRcclxuICAgICAqL1xyXG4gICAgQGlzTm9FbXB0eU9yTnVsbCgpXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgaWQ6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWuveW6plxyXG4gICAgICovXHJcbiAgICBAaXNQc3ROdW1iZXIoKVxyXG4gICAgcHVibGljIHdpZHRoOiBudW1iZXIgPSA8bnVtYmVyPnRoaXMuZnJvbUpTT05QYXRoKFwid2luZG93L3dpZHRoXCIsIERFRkFVTFRfV0lORE9XX1dJRFRIKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOmrmOW6plxyXG4gICAgICovXHJcbiAgICBAaXNQc3ROdW1iZXIoKVxyXG4gICAgcHVibGljIGhlaWdodDogbnVtYmVyID0gPG51bWJlcj50aGlzLmZyb21KU09OUGF0aChcIndpbmRvdy9oZWlnaHRcIiwgREVGQVVMVF9XSU5ET1dfSEVJR0hUKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOacgOWwj+WuveW6plxyXG4gICAgICovXHJcbiAgICBAaXNQc3ROdW1iZXIoKVxyXG4gICAgcHVibGljIG1pbldpZHRoOiBudW1iZXIgPSBERUZBVUxUX01JTl9XSURUSDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOacgOWwj+mrmOW6plxyXG4gICAgICovXHJcbiAgICBAaXNQc3ROdW1iZXIoKVxyXG4gICAgcHVibGljIG1pbkhlaWdodDogbnVtYmVyID0gREVGQVVMVF9NSU5fSEVJR0hUO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pyA5aSn5a695bqmXHJcbiAgICAgKi9cclxuICAgIEBpc1BzdE51bWJlcigpXHJcbiAgICBwdWJsaWMgbWF4V2lkdGg6IG51bWJlciA9IERFRkFVTFRfTUFYX1dJRFRIO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pyA5aSn6auY5bqmXHJcbiAgICAgKi9cclxuICAgIEBpc1BzdE51bWJlcigpXHJcbiAgICBwdWJsaWMgbWF4SGVpZ2h0OiBudW1iZXIgPSBERUZBVUxUX01BWF9IRUlHSFQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlt6bovrnovrnot51cclxuICAgICAqL1xyXG4gICAgQGlzUHN0TnVtYmVyKClcclxuICAgIHB1YmxpYyBsZWZ0OiBudW1iZXIgPSAoREVGQVVMVF9NQVhfV0lEVEggLSB0aGlzLndpZHRoKSAvIDI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlj7Povrnovrnot51cclxuICAgICAqL1xyXG4gICAgQGlzUHN0TnVtYmVyKClcclxuICAgIHB1YmxpYyB0b3A6IG51bWJlciA9IChERUZBVUxUX01BWF9IRUlHSFQgLSB0aGlzLmhlaWdodCkgLyAyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6L655qGG5qC35byPXHJcbiAgICAgKi9cclxuICAgIEBjb21iaW5lKHtcclxuICAgICAgICB3aWR0aDogY2hlY2tQc3RJbnQsIC8qKiDmraPmlbTmlbAgKi9cclxuICAgICAgICBzdHlsZTogW0JvcmRlclN0eWxlLlNPTElELCBCb3JkZXJTdHlsZS5ET1VCTEUsIEJvcmRlclN0eWxlLkRPVFRFRCwgQm9yZGVyU3R5bGUuREFTSEVEXSwgLyoqIOWPr+mAieWAvCAqL1xyXG4gICAgICAgIGNvbG9yOiBjaGVja0NvbG9yLCAgLyoqIOmdnuepuuWtl+espuS4siAqL1xyXG4gICAgICAgIHJhZGl1czogY2hlY2tQc3RJbnQgLyoqIOato+aVtOaVsCAqL1xyXG4gICAgfSwgZmFsc2UpXHJcbiAgICBwdWJsaWMgYm9yZGVyOiBCb3JkZXJPcHRpb24gfCBmYWxzZSA9IDxCb3JkZXJPcHRpb24+e1xyXG4gICAgICAgIHdpZHRoOiBERUZBVUxUX0JPUkRFUl9XSURUSCxcclxuICAgICAgICBzdHlsZTogREVGQVVMVF9CT1JERVJfU1RZTEUsXHJcbiAgICAgICAgY29sb3I6IERFRkFVTFRfQk9SREVSX0NPTE9SLFxyXG4gICAgICAgIHJhZGl1czogREVGQVVMVF9CT1JERVJfUkFESVVTXHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6Zi05b2xXHJcbiAgICAgKi9cclxuICAgIEBpc0Jvb2xlYW4oKVxyXG4gICAgcHVibGljIGJveFNoYWRvdzogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqjnlLtcclxuICAgICAqL1xyXG4gICAgQGluVmFsdWVPcHRpb25zKEFuaW1hdGlvbi5aT09NLCBmYWxzZSlcclxuICAgIHB1YmxpYyBhbmltYXRlOiBmYWxzZSB8IEFuaW1hdGlvbiA9IEFuaW1hdGlvbi5aT09NO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6IOM5pmv6aKc6ImyXHJcbiAgICAgKi9cclxuICAgIEBpc0NvbG9yKClcclxuICAgIHB1YmxpYyBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZyA9IDxzdHJpbmc+dGhpcy5mcm9tSlNPTlBhdGgoXCJ3aW5kb3cvYmFja2dyb3VuZENvbG9yXCIsIERFRkFVTFRfV0lORE9XX0JBQ0tHUk9VTkRfQ09MT1IpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5bel5YW35qCPXHJcbiAgICAgKi9cclxuICAgIEBjb21iaW5lKHtcclxuICAgICAgICBoZWlnaHQ6IGNoZWNrUHN0TnVtYmVyLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogY2hlY2tDb2xvcixcclxuICAgICAgICB0aXRsZUJhcjoge1xyXG4gICAgICAgICAgICBkZWNvcmF0b3I6IHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBjaGVja1N0cmluZyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBjaGVja0NvbG9yLFxyXG4gICAgICAgICAgICAgICAgYWxpZ246IFtBbGlnbi5MRUZULCBBbGlnbi5DRU5URVIsIEFsaWduLlJJR0hUXSxcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBjaGVja1BzdEludFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvcHRpb25zOiBbZmFsc2VdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpY29uOiB7XHJcbiAgICAgICAgICAgIGRlY29yYXRvcjoge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogY2hlY2tOb0VtcHR5T3JOdWxsLFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogY2hlY2tQc3RJbnQsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogY2hlY2tDb2xvclxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvcHRpb25zOiBbZmFsc2VdXHJcbiAgICAgICAgfVxyXG4gICAgfSwgZmFsc2UpXHJcbiAgICBwdWJsaWMgdG9vbEJhcjogVUlUb29sQmFyT3B0aW9uIHwgZmFsc2UgPSA8VUlUb29sQmFyT3B0aW9uIHwgZmFsc2U+dGhpcy5mcm9tSlNPTlBhdGgoXCJ3aW5kb3cvdG9vbEJhclwiLCBmYWxzZSk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnqpflj6PlhYPntKDlr7nosaFcclxuICAgICAqL1xyXG4gICAgcHVibGljIHdpbmRvd0VsZW1lbnQ6IEhUTUxEaXZFbGVtZW50IHwgbnVsbCA9IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJvlu7rnu4Tku7blhYPntKDlr7nosaFcclxuICAgICAqIEByZXR1cm5zIENvbXBvbmVudEVsZW1lbnRcclxuICAgICAqL1xyXG4gICAgcHJlc2VudCgpOiBDb21wb25lbnRFbGVtZW50IHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRlRGl2RWxlbWVudChgJHt0aGlzLmVudHJ5LnByZWZpeCArIHRoaXMuaWR9YCk7XHJcbiAgICAgICAgdGhpcy53aW5kb3dFbGVtZW50ID0gZWxlbWVudDtcclxuXHJcbiAgICAgICAgYWRkQ1NTQ2xhc3NlcyhlbGVtZW50LFxyXG4gICAgICAgICAgICBcIndpbmRvd1wiLFxyXG4gICAgICAgICAgICBcImZsZXgtYm94XCIsXHJcbiAgICAgICAgICAgIFwiY29sLWRpcmVjdGlvblwiLFxyXG4gICAgICAgICAgICB0aGlzLmJveFNoYWRvdyA/IFwiYm94LXNoYWRvd1wiIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGUgIT09IGZhbHNlID8gXCJhbmltYXRlXCIgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZSAhPT0gZmFsc2UgPyBgYW5pbWF0ZS0ke3RoaXMuYW5pbWF0ZX0tc2hvd2AgOiB1bmRlZmluZWQpO1xyXG5cclxuICAgICAgICBhZGRDU1NTdHlsZXMoZWxlbWVudCxcclxuICAgICAgICAgICAgPENTU1N0eWxlRGVjbGFyYXRpb24+e1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBgJHt0aGlzLmJhY2tncm91bmRDb2xvcn1gLFxyXG4gICAgICAgICAgICAgICAgekluZGV4OiBgJHt0aGlzLmVudHJ5LnpJbmRleH1gLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGAke3RoaXMud2lkdGh9cHhgLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBgJHt0aGlzLmhlaWdodH1weGAsXHJcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogdGhpcy5tYXhXaWR0aCAhPT0gaW5uZXJXaWR0aCA/IGAke3RoaXMubWF4V2lkdGh9cHhgIDogbnVsbCxcclxuICAgICAgICAgICAgICAgIG1heEhlaWdodDogdGhpcy5tYXhIZWlnaHQgIT09IGlubmVySGVpZ2h0ID8gYCR7dGhpcy5tYXhIZWlnaHR9cHhgIDogbnVsbCxcclxuICAgICAgICAgICAgICAgIG1pbldpZHRoOiBgJHt0aGlzLm1pbldpZHRofXB4YCxcclxuICAgICAgICAgICAgICAgIG1pbkhlaWdodDogYCR7dGhpcy5taW5IZWlnaHR9cHhgLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogYCR7dGhpcy5sZWZ0fXB4YCxcclxuICAgICAgICAgICAgICAgIHRvcDogYCR7dGhpcy50b3B9cHhgLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLmJvcmRlciA9PT0gZmFsc2UgPyBudWxsIDpcclxuICAgICAgICAgICAgICAgICAgICBgJHt0aGlzLmJvcmRlci53aWR0aH1weCAke3RoaXMuYm9yZGVyLnN0eWxlfSAke3RoaXMuYm9yZGVyLmNvbG9yfWAsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IHRoaXMuYm9yZGVyID09PSBmYWxzZSA/IG51bGwgOlxyXG4gICAgICAgICAgICAgICAgICAgIGAke3RoaXMuYm9yZGVyLnJhZGl1c31weGAsXHJcbiAgICAgICAgICAgICAgICB3ZWJraXRCb3JkZXJSYWRpdXM6IHRoaXMuYm9yZGVyID09PSBmYWxzZSA/IG51bGwgOlxyXG4gICAgICAgICAgICAgICAgICAgIGAke3RoaXMuYm9yZGVyLnJhZGl1c31weGAsXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG5cclxuICAgICAgICB0aGlzLm1vbml0b3JFdmVudCgpO1xyXG5cclxuICAgICAgICB0aGlzLnNlbmRFdmVudChcIndpbmRvdzpjcmVhdGVcIiwgeyBpZDogdGhpcy5pZCB9KTtcclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOi/veWKoOWtkOWFg+e0oFxyXG4gICAgICogQHBhcmFtIGVsZW1lbnQg54i25YWD57SgXHJcbiAgICAgKiBAcmV0dXJucyB2b2lkXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYXBwZW5kQ2hpbGQoZWxlbWVudDogSFRNTERpdkVsZW1lbnQpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy50b29sQmFyICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBjb25zdCB1aVRvb2xCYXIgPSBuZXcgVUlUb29sQmFyKHRoaXMudG9vbEJhcik7XHJcbiAgICAgICAgICAgIGNvbnN0IHVpVG9vbEJhckVsZW1lbnQgPSB1aVRvb2xCYXIucHJlc2VudCgpO1xyXG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHVpVG9vbEJhckVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOebkeWQrOS6i+S7tlxyXG4gICAgICogQHJldHVybnMgdm9pZCBcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBtb25pdG9yRXZlbnQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLndpbmRvd0VsZW1lbnQpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0ZSAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy53aW5kb3dFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgKGV2OiBBbmltYXRpb25FdmVudCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIOaWsOW7uuaIluaYvuekuueql+WPo1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYW5pbWF0ZVNob3dOYW1lID0gYGFuaW1hdGUtJHt0aGlzLmFuaW1hdGV9LXNob3dgO1xyXG4gICAgICAgICAgICAgICAgaWYgKGhhc0NTU0NsYXNzKHRoaXMud2luZG93RWxlbWVudCwgYW5pbWF0ZVNob3dOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUNTU0NsYXNzZXModGhpcy53aW5kb3dFbGVtZW50LCBhbmltYXRlU2hvd05hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VuZEV2ZW50KFwid2luZG93OnNob3dcIiwgeyBpZDogdGhpcy5pZCB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IHZhbGlkYXRlRmFpbCB9IGZyb20gJy4uLy4uL2NvcmUvZXhjZXB0aW9uJztcclxuaW1wb3J0IHsgY2hlY2tBcnJheSwgY2hlY2tJblZhbHVlT3B0aW9ucywgY2hlY2tPZlR5cGUgfSBmcm9tICcuLi8uLi9jb3JlL3ZhbGlkYXRvcic7XHJcbmltcG9ydCB7IFVJVG9vbEJhck9wdGlvbiB9IGZyb20gJy4uL3VpLXRvb2wtYmFyL3R5cGUnO1xyXG5pbXBvcnQgeyBVSVdpbmRvdyB9IGZyb20gJy4vJztcclxuaW1wb3J0IHsgQW5pbWF0aW9uLCBPZmZzZXQgfSBmcm9tICcuL2NvbnN0JztcclxuaW1wb3J0IHsgQm9yZGVyT3B0aW9uLCBVSVdpbmRvd09wdGlvbiB9IGZyb20gJy4vdHlwZSc7XHJcblxyXG4vKipcclxuICog5aSE55CG5Yid5aeL5Lyg5YWl5Y+C5pWwXHJcbiAqIEBwYXJhbSBvcHRpb25zIOWPr+mAieWPguaVsFxyXG4gKiBAcmV0dXJucyB2b2lkXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlck9wdGlvbnModGhpczogVUlXaW5kb3csIG9wdGlvbnM6IFVJV2luZG93T3B0aW9uKTogdm9pZCB7XHJcbiAgICB0aGlzLndpZHRoID0gb3B0aW9ucz8ud2lkdGggPz8gdGhpcy53aWR0aDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gb3B0aW9ucz8uaGVpZ2h0ID8/IHRoaXMuaGVpZ2h0O1xyXG4gICAgdGhpcy5tYXhXaWR0aCA9IG9wdGlvbnM/Lm1heFdpZHRoID8/IHRoaXMubWF4V2lkdGg7XHJcbiAgICB0aGlzLm1heEhlaWdodCA9IG9wdGlvbnM/Lm1heEhlaWdodCA/PyB0aGlzLm1heEhlaWdodDtcclxuICAgIHRoaXMubWluV2lkdGggPSBvcHRpb25zPy5taW5XaWR0aCA/PyB0aGlzLm1pbldpZHRoO1xyXG4gICAgdGhpcy5taW5IZWlnaHQgPSBvcHRpb25zPy5taW5IZWlnaHQgPz8gdGhpcy5taW5IZWlnaHQ7XHJcbiAgICB0aGlzLndpZHRoID0gTWF0aC5tYXgodGhpcy5taW5XaWR0aCwgdGhpcy53aWR0aCk7XHJcbiAgICB0aGlzLndpZHRoID0gTWF0aC5taW4odGhpcy5tYXhXaWR0aCwgdGhpcy53aWR0aCk7XHJcbiAgICB0aGlzLmhlaWdodCA9IE1hdGgubWF4KHRoaXMubWluSGVpZ2h0LCB0aGlzLmhlaWdodCk7XHJcbiAgICB0aGlzLmhlaWdodCA9IE1hdGgubWluKHRoaXMubWF4SGVpZ2h0LCB0aGlzLmhlaWdodCk7XHJcbiAgICB0aGlzLmJvcmRlciA9IDxCb3JkZXJPcHRpb24gfCBmYWxzZT5vcHRpb25zPy5ib3JkZXIgPz8gdGhpcy5ib3JkZXI7XHJcbiAgICB0aGlzLmJveFNoYWRvdyA9IG9wdGlvbnM/LmJveFNoYWRvdyA/PyB0aGlzLmJveFNoYWRvdztcclxuICAgIHRoaXMuYW5pbWF0ZSA9IDxBbmltYXRpb24gfCBmYWxzZT5vcHRpb25zPy5hbmltYXRlID8/IHRoaXMuYW5pbWF0ZTtcclxuICAgIFt0aGlzLmxlZnQsIHRoaXMudG9wXSA9IGNhbGNPZmZzZXQodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIG9wdGlvbnM/Lm9mZnNldCk7XHJcbiAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9IG9wdGlvbnM/LmJhY2tncm91bmRDb2xvciA/PyB0aGlzLmJhY2tncm91bmRDb2xvcjtcclxuICAgIHRoaXMudG9vbEJhciA9IDxVSVRvb2xCYXJPcHRpb24gfCBmYWxzZT5vcHRpb25zPy50b29sQmFyID8/IHRoaXMudG9vbEJhcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIOiuoeeul+eql+WPo+WBj+enu+mHj1xyXG4gKiBAcGFyYW0gd2lkdGgg5a695bqmXHJcbiAqIEBwYXJhbSBoZWlnaHQg6auY5bqmXHJcbiAqIEBwYXJhbSBbb2Zmc2V0XSDlgY/np7tcclxuICogQHJldHVybnMgW251bWJlciwgbnVtYmVyXSBcclxuICovXHJcbmZ1bmN0aW9uIGNhbGNPZmZzZXQod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIG9mZnNldD86IFtudW1iZXIsIG51bWJlcl0gfCBPZmZzZXQpOiBbbnVtYmVyLCBudW1iZXJdIHtcclxuICAgIGlmIChvZmZzZXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIFsoaW5uZXJXaWR0aCAtIHdpZHRoKSAvIDIsIChpbm5lckhlaWdodCAtIGhlaWdodCkgLyAyXTtcclxuICAgIGlmIChjaGVja0FycmF5KG9mZnNldCkpIHtcclxuICAgICAgICBpZiAob2Zmc2V0Lmxlbmd0aCAhPT0gMiB8fFxyXG4gICAgICAgICAgICAhY2hlY2tPZlR5cGUob2Zmc2V0WzBdLCBcIm51bWJlclwiKSB8fFxyXG4gICAgICAgICAgICAhY2hlY2tPZlR5cGUob2Zmc2V0WzFdLCBcIm51bWJlclwiKSkgdmFsaWRhdGVGYWlsKGBcIiR7W29mZnNldF19XCIg5LiN5piv5pyJ5pWI55qEIFwiW251bWJlcixudW1iZXJdXCIg57G75Z6LYCk7XHJcblxyXG4gICAgICAgIHJldHVybiBbPG51bWJlcj5vZmZzZXRbMF0sIDxudW1iZXI+b2Zmc2V0WzFdXTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgY3Jvb2RzOiBbbnVtYmVyLCBudW1iZXJdID0gWzAsIDBdO1xyXG4gICAgY29uc3Qgb2Zmc2V0T3B0aW9ucyA9IFtcclxuICAgICAgICBPZmZzZXQuQ0VOVEVSLFxyXG4gICAgICAgIE9mZnNldC5UT1BfQ0VOVEVSLFxyXG4gICAgICAgIE9mZnNldC5CT1RUT01fQ0VOVEVSLFxyXG4gICAgICAgIE9mZnNldC5MRUZUX1RPUCxcclxuICAgICAgICBPZmZzZXQuTEVGVF9NSURETEUsXHJcbiAgICAgICAgT2Zmc2V0LkxFRlRfQk9UVE9NLFxyXG4gICAgICAgIE9mZnNldC5SSUdIVF9UT1AsXHJcbiAgICAgICAgT2Zmc2V0LlJJR0hUX01JRERMRSxcclxuICAgICAgICBPZmZzZXQuUklHSFRfQk9UVE9NXHJcbiAgICBdO1xyXG4gICAgaWYgKGNoZWNrSW5WYWx1ZU9wdGlvbnMob2Zmc2V0LCAuLi5vZmZzZXRPcHRpb25zKSkge1xyXG4gICAgICAgIHN3aXRjaCAoPE9mZnNldD5vZmZzZXQpIHtcclxuICAgICAgICAgICAgY2FzZSBPZmZzZXQuQ0VOVEVSOlxyXG4gICAgICAgICAgICAgICAgY3Jvb2RzID0gWyhpbm5lcldpZHRoIC0gd2lkdGgpIC8gMiwgKGlubmVySGVpZ2h0IC0gaGVpZ2h0KSAvIDJdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgT2Zmc2V0LlRPUF9DRU5URVI6XHJcbiAgICAgICAgICAgICAgICBjcm9vZHMgPSBbKGlubmVyV2lkdGggLSB3aWR0aCkgLyAyLCAwXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIE9mZnNldC5CT1RUT01fQ0VOVEVSOlxyXG4gICAgICAgICAgICAgICAgY3Jvb2RzID0gWyhpbm5lcldpZHRoIC0gd2lkdGgpIC8gMiwgaW5uZXJIZWlnaHQgLSBoZWlnaHRdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgT2Zmc2V0LkxFRlRfVE9QOlxyXG4gICAgICAgICAgICAgICAgY3Jvb2RzID0gWzAsIDBdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgT2Zmc2V0LkxFRlRfTUlERExFOlxyXG4gICAgICAgICAgICAgICAgY3Jvb2RzID0gWzAsIChpbm5lckhlaWdodCAtIGhlaWdodCkgLyAyXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIE9mZnNldC5MRUZUX0JPVFRPTTpcclxuICAgICAgICAgICAgICAgIGNyb29kcyA9IFswLCBpbm5lckhlaWdodCAtIGhlaWdodF07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBPZmZzZXQuUklHSFRfVE9QOlxyXG4gICAgICAgICAgICAgICAgY3Jvb2RzID0gW2lubmVyV2lkdGggLSB3aWR0aCwgMF07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBPZmZzZXQuUklHSFRfTUlERExFOlxyXG4gICAgICAgICAgICAgICAgY3Jvb2RzID0gW2lubmVyV2lkdGggLSB3aWR0aCwgKGlubmVySGVpZ2h0IC0gaGVpZ2h0KSAvIDJdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgT2Zmc2V0LlJJR0hUX0JPVFRPTTpcclxuICAgICAgICAgICAgICAgIGNyb29kcyA9IFtpbm5lcldpZHRoIC0gd2lkdGgsIGlubmVySGVpZ2h0IC0gaGVpZ2h0XTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY3Jvb2RzO1xyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkYXRlRmFpbChgXCIke29mZnNldH1cIiDkuI3mmK/mnInmlYjnmoQgXCJbbnVtYmVyLG51bWJlcl0g5oiWIFske29mZnNldE9wdGlvbnN9XVwiIOexu+Wei2ApO1xyXG59IiwiaW1wb3J0IHsgdmFsaWRhdGVGYWlsIH0gZnJvbSAnLi4vZXhjZXB0aW9uJztcclxuaW1wb3J0IHsgbWVyZ2VKU09OT2JqZWN0IH0gZnJvbSAnLi4vaGVscGVyL29iamVjdC1oZWxwZXInO1xyXG5pbXBvcnQgeyBKU09OT2JqZWN0IH0gZnJvbSAnLi4vaGVscGVyL3R5cGUnO1xyXG5pbXBvcnQge1xyXG4gICAgY2hlY2tBcnJheSxcclxuICAgIGNoZWNrQ29sb3IsXHJcbiAgICBjaGVja0luVmFsdWVPcHRpb25zLFxyXG4gICAgY2hlY2tKU09OT2JqZWN0LFxyXG4gICAgY2hlY2tNaW4sXHJcbiAgICBjaGVja05vRW1wdHlPck51bGwsXHJcbiAgICBjaGVja09mVHlwZSxcclxuICAgIGNoZWNrUHN0SW50LFxyXG4gICAgY2hlY2tQc3ROdW1iZXIsXHJcbiAgICBjaGVja1JlZ0V4cCxcclxuICAgIGNoZWNrU3RyaW5nLFxyXG59IGZyb20gJy4uL3ZhbGlkYXRvcic7XHJcbmltcG9ydCB7IFZhbHVlT3B0aW9uIH0gZnJvbSAnLi4vdmFsaWRhdG9yL3R5cGUnO1xyXG5pbXBvcnQgeyBQcm9wZXJ0eURlY29yYXRvciwgUHJvcGVydHlTZXR0ZXIgfSBmcm9tICcuL3R5cGUnO1xyXG5cclxuLyoqXHJcbiAqIOajgOafpeaYr+WQpuaYr+ato+aVsOWAvOexu+Wei1xyXG4gKiBAcmV0dXJucyBQcm9wZXJ0eURlY29yYXRvciBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1BzdE51bWJlcigpOiBQcm9wZXJ0eURlY29yYXRvciB7XHJcbiAgICByZXR1cm4gZ2VuZXJhdGVEZWNvcmF0b3IoKG5ld1ZhbHVlKSA9PiB7XHJcbiAgICAgICAgaWYgKCFjaGVja1BzdE51bWJlcihuZXdWYWx1ZSkpIHZhbGlkYXRlRmFpbChgXCIke25ld1ZhbHVlfVwiIOS4jeaYr+S4gOS4quacieaViOeahOato+aVsOWAvOexu+Wei2ApO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3VmFsdWU7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeaYr+WQpuaYr+aMh+WumuWPr+mAieWAvOexu+Wei1xyXG4gKiBAcGFyYW0gdmFsdWVPcHRpb25zIOWPr+mAieWAvFxyXG4gKiBAcmV0dXJucyBQcm9wZXJ0eURlY29yYXRvciBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpblZhbHVlT3B0aW9ucyguLi52YWx1ZU9wdGlvbnM6IFZhbHVlT3B0aW9uKTogUHJvcGVydHlEZWNvcmF0b3Ige1xyXG4gICAgcmV0dXJuIGdlbmVyYXRlRGVjb3JhdG9yKChuZXdWYWx1ZSkgPT4ge1xyXG4gICAgICAgIGlmICghY2hlY2tJblZhbHVlT3B0aW9ucyhuZXdWYWx1ZSwgLi4udmFsdWVPcHRpb25zKSkgdmFsaWRhdGVGYWlsKGBcIiR7bmV3VmFsdWV9XCIg5LiN5ZyoIFske3ZhbHVlT3B0aW9ucy50b1N0cmluZygpfV0g5YC86IyD5Zu05YaFYCk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXdWYWx1ZTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l6Z2e56m65oiW6Z2eTlVMTOWtl+espuS4slxyXG4gKiBAcmV0dXJucyBQcm9wZXJ0eURlY29yYXRvciBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc05vRW1wdHlPck51bGwoKTogUHJvcGVydHlEZWNvcmF0b3Ige1xyXG4gICAgcmV0dXJuIGdlbmVyYXRlRGVjb3JhdG9yKChuZXdWYWx1ZSkgPT4ge1xyXG4gICAgICAgIGlmICghY2hlY2tOb0VtcHR5T3JOdWxsKG5ld1ZhbHVlKSkgdmFsaWRhdGVGYWlsKGBcIiR7bmV3VmFsdWV9XCIg5LiN5piv5LiA5Liq5pyJ5pWI55qE6Z2e56m65a2X56ym5LiyYCk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXdWYWx1ZTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5biD5bCU57G75Z6L5YC8XHJcbiAqIEByZXR1cm5zIFByb3BlcnR5RGVjb3JhdG9yIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQm9vbGVhbigpOiBQcm9wZXJ0eURlY29yYXRvciB7XHJcbiAgICByZXR1cm4gZ2VuZXJhdGVEZWNvcmF0b3IoKG5ld1ZhbHVlKSA9PiB7XHJcbiAgICAgICAgaWYgKCFjaGVja09mVHlwZShuZXdWYWx1ZSwgXCJib29sZWFuXCIpKSB2YWxpZGF0ZUZhaWwoYFwiJHtuZXdWYWx1ZX1cIiDkuI3mmK/kuIDkuKrmnInmlYjnmoTluIPlsJTlgLxgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ld1ZhbHVlO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XlrZfnrKbkuLLnsbvlnovlgLxcclxuICogQHJldHVybnMgUHJvcGVydHlEZWNvcmF0b3IgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmcoKTogUHJvcGVydHlEZWNvcmF0b3Ige1xyXG4gICAgcmV0dXJuIGdlbmVyYXRlRGVjb3JhdG9yKChuZXdWYWx1ZSkgPT4ge1xyXG4gICAgICAgIGlmICghY2hlY2tTdHJpbmcobmV3VmFsdWUpKSB2YWxpZGF0ZUZhaWwoYFwiJHtuZXdWYWx1ZX1cIiDkuI3mmK/kuIDkuKrmnInmlYjnmoTlrZfnrKbkuLJgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ld1ZhbHVlO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XpopzoibLlgLxcclxuICogQHJldHVybnMgUHJvcGVydHlEZWNvcmF0b3IgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNDb2xvcigpOiBQcm9wZXJ0eURlY29yYXRvciB7XHJcbiAgICByZXR1cm4gZ2VuZXJhdGVEZWNvcmF0b3IoKG5ld1ZhbHVlKSA9PiB7XHJcbiAgICAgICAgaWYgKCFjaGVja0NvbG9yKG5ld1ZhbHVlKSkgdmFsaWRhdGVGYWlsKGBcIiR7bmV3VmFsdWV9XCIg5LiN5piv5LiA5Liq5pyJ5pWI55qEQ1NT6aKc6Imy5YC8YCk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXdWYWx1ZTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5q2j5pW05pWwXHJcbiAqIEByZXR1cm5zIFByb3BlcnR5RGVjb3JhdG9yIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzUHN0SW50KCk6IFByb3BlcnR5RGVjb3JhdG9yIHtcclxuICAgIHJldHVybiBnZW5lcmF0ZURlY29yYXRvcigobmV3VmFsdWUpID0+IHtcclxuICAgICAgICBpZiAoIWNoZWNrUHN0SW50KG5ld1ZhbHVlKSkgdmFsaWRhdGVGYWlsKGBcIiR7bmV3VmFsdWV9XCIg5LiN5piv5LiA5Liq5pyJ5pWI55qE5q2j5pW05pWwYCk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXdWYWx1ZTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5pyA5bCP5YC8XHJcbiAqIEBwYXJhbSB0aHJlc2hvbGQg5pyA5bCP6ZiI5YC8XHJcbiAqIEByZXR1cm5zIFByb3BlcnR5RGVjb3JhdG9yXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWluKHRocmVzaG9sZDogbnVtYmVyKTogUHJvcGVydHlEZWNvcmF0b3Ige1xyXG4gICAgcmV0dXJuIGdlbmVyYXRlRGVjb3JhdG9yKChuZXdWYWx1ZSkgPT4ge1xyXG4gICAgICAgIGlmICghY2hlY2tNaW4obmV3VmFsdWUsIHRocmVzaG9sZCkpIHZhbGlkYXRlRmFpbChgXCIke25ld1ZhbHVlfVwiIOW/hemhu+aYr+aVsOWAvOexu+Wei+W5tuS4lOWAvOS4jeiDveWwj+S6jiBcIiR7dGhyZXNob2xkfVwiYCk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXdWYWx1ZTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICog57uE5ZCI5qOA5p+l6aqM6K+BXHJcbiAqIEBwYXJhbSBqc29uRGVjb3JhdG9yIOWPguaVsOavj+S4gOmhueijhemlsOWZqO+8jOaUr+aMgUFycmF5fEZ1bmN0aW9ufFJlZ0V4cHx7ZGVjb3JhdG9yOiB7fSxvcHRpb25zOiBbXX1cclxuICogQHBhcmFtIGl0ZW1zIOWFtuS9meWPr+mAieWAvO+8jOWPquaUr+aMgeWfuuacrOaVsOaNruexu+Wei1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmUoanNvbkRlY29yYXRvcjogSlNPTk9iamVjdCA9IHt9LCAuLi5pdGVtczogQXJyYXk8YW55Pik6IFByb3BlcnR5RGVjb3JhdG9yIHtcclxuICAgIHJldHVybiBnZW5lcmF0ZURlY29yYXRvcigobmV3VmFsdWUsIHByb3BlcnR5S2V5LCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgIG5ld1ZhbHVlID0gY2hlY2tDb21iaW5lKG5ld1ZhbHVlLCBqc29uRGVjb3JhdG9yLCAuLi5pdGVtcyk7XHJcbiAgICAgICAgaWYgKGNoZWNrSlNPTk9iamVjdChuZXdWYWx1ZSkpIHtcclxuICAgICAgICAgICAgbmV3VmFsdWUgPSBtZXJnZUpTT05PYmplY3QodmFsdWUgPz8ge30sIG5ld1ZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ld1ZhbHVlO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlkIjlubbpqozor4HmoLjlv4Pku6PnoIFcclxuICogQHBhcmFtIG5ld1ZhbHVlIOW9k+WJjeWAvFxyXG4gKiBAcGFyYW0ganNvbkRlY29yYXRvciDlj4LmlbDmr4/kuIDpobnoo4XppbDlmajvvIzmlK/mjIFBcnJheXxGdW5jdGlvbnxSZWdFeHB8e2RlY29yYXRvcjoge30sb3B0aW9uczogW119XHJcbiAqIEBwYXJhbSBpdGVtcyDlhbbkvZnlj6/pgInlgLzvvIzlj6rmlK/mjIHln7rmnKzmlbDmja7nsbvlnotcclxuICogQHJldHVybnMgdm9pZFxyXG4gKi9cclxuZnVuY3Rpb24gY2hlY2tDb21iaW5lKG5ld1ZhbHVlOiBhbnksIGpzb25EZWNvcmF0b3I6IEpTT05PYmplY3QgPSB7fSwgLi4uaXRlbXM6IEFycmF5PGFueT4pOiBhbnkge1xyXG4gICAgaWYgKCFjaGVja0pTT05PYmplY3QobmV3VmFsdWUpICYmIChpdGVtcy5sZW5ndGggPiAwICYmIGl0ZW1zLmluZGV4T2YobmV3VmFsdWUpID09PSAtMSkpIHZhbGlkYXRlRmFpbChgXCIke25ld1ZhbHVlfVwiIOS4jeaYr+S4gOS4quacieaViOeahOWPguaVsOWAvGApO1xyXG4gICAgaWYgKGl0ZW1zLmluZGV4T2YobmV3VmFsdWUpID4gLTEpIHJldHVybiBuZXdWYWx1ZTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBuZXdWYWx1ZSkge1xyXG4gICAgICAgIGxldCBrZXlWYWx1ZSA9IG5ld1ZhbHVlW2tleV07XHJcbiAgICAgICAgY29uc3QgZGVjb3JhdG9yID0ganNvbkRlY29yYXRvcltrZXldO1xyXG4gICAgICAgIGlmICghZGVjb3JhdG9yKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgaWYgKGNoZWNrQXJyYXkoZGVjb3JhdG9yKSAmJiBkZWNvcmF0b3IuaW5kZXhPZihrZXlWYWx1ZSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRlRmFpbChgXCIke2tleVZhbHVlfVwiIOS4jeWcqCBbJHtkZWNvcmF0b3IudG9TdHJpbmcoKX1dIOWAvOiMg+WbtOWGhWApO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNoZWNrT2ZUeXBlKGRlY29yYXRvciwgXCJmdW5jdGlvblwiKSAmJiAhZGVjb3JhdG9yKGtleVZhbHVlKSkge1xyXG4gICAgICAgICAgICB2YWxpZGF0ZUZhaWwoYFwiJHtrZXlWYWx1ZX1cIiDkuI3mmK/kuIDkuKrmnInmlYjnmoTlj4LmlbDlgLxgKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaGVja1JlZ0V4cChkZWNvcmF0b3IpICYmICFkZWNvcmF0b3IudGVzdChrZXlWYWx1ZSkpIHtcclxuICAgICAgICAgICAgdmFsaWRhdGVGYWlsKGBcIiR7a2V5VmFsdWV9XCIg5LiN5piv5LiA5Liq5pyJ5pWI55qE5Y+C5pWw5YC8YCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hlY2tKU09OT2JqZWN0KGRlY29yYXRvcikpIHtcclxuICAgICAgICAgICAgY29uc3QgY2hpbGREZWNvcmF0b3IgPSBkZWNvcmF0b3I/LmRlY29yYXRvciA/PyB7fTtcclxuICAgICAgICAgICAgY29uc3QgY2hpbGRJdGVtcyA9IGRlY29yYXRvcj8ub3B0aW9ucyA/PyBbXTtcclxuICAgICAgICAgICAga2V5VmFsdWUgPSBjaGVja0NvbWJpbmUoa2V5VmFsdWUsIGNoaWxkRGVjb3JhdG9yLCAuLi5jaGlsZEl0ZW1zKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ld1ZhbHVlO1xyXG59XHJcblxyXG4vKipcclxuICog55Sf5oiQ6KOF6aWw5Zmo5qC45b+D5Luj56CBXHJcbiAqIEBwYXJhbSBwcm9wZXJ0eVNldHRlciDlsZ7mgKforr7nva7lmahcclxuICogQHJldHVybnMgUHJvcGVydHlEZWNvcmF0b3IgXHJcbiAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZURlY29yYXRvcihwcm9wZXJ0eVNldHRlcjogUHJvcGVydHlTZXR0ZXIpOiBQcm9wZXJ0eURlY29yYXRvciB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogYW55LCBwcm9wZXJ0eUtleTogc3RyaW5nIHwgbnVtYmVyIHwgc3ltYm9sKSB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gdGFyZ2V0W3Byb3BlcnR5S2V5XTtcclxuXHJcbiAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgcHJvcGVydHlLZXkpO1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5S2V5LCB7XHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgZ2V0OiAoKSA9PiB2YWx1ZSxcclxuICAgICAgICAgICAgc2V0OiAobmV3VmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3Iuc2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRvci5zZXQobmV3VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBwcm9wZXJ0eVNldHRlcihuZXdWYWx1ZSwgcHJvcGVydHlLZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgY2hlY2tBcnJheSwgY2hlY2tPZlR5cGUgfSBmcm9tICcuLi92YWxpZGF0b3InO1xyXG5pbXBvcnQgeyBFdmVudEhhbmRsZXIsIE1lc3NhZ2VRdWV1ZXMgfSBmcm9tICcuL3R5cGUnO1xyXG5cclxuLyoqXHJcbiAqIOS6i+S7tuaAu+e6v+exu1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEV2ZW50QnVzIHtcclxuICAgIC8qKlxyXG4gICAgICog56eB5pyJ5YyW5p6E6YCg5Ye95pWw77yM5a6e546w5Y2V5L6LXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmtojmga/pmJ/liJdcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBtZXNzYWdlUXVldWVzOiBNZXNzYWdlUXVldWVzID0gPE1lc3NhZ2VRdWV1ZXM+e307XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnu5Hlrprkuovku7ZcclxuICAgICAqIEBwYXJhbSBldmVudEtleSDkuovku7blkI3np7BcclxuICAgICAqIEBwYXJhbSBldmVudEhhbmRsZXIg5LqL5Lu25aSE55CG5Ye95pWw5oiW5Ye95pWw5pWw57uEXHJcbiAgICAgKiBAcmV0dXJucyB2b2lkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvbihldmVudEtleTogc3RyaW5nLCBldmVudEhhbmRsZXI6IEV2ZW50SGFuZGxlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLm1lc3NhZ2VRdWV1ZXMuaGFzT3duUHJvcGVydHkoZXZlbnRLZXkpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50VmFsdWUgPSB0aGlzLm1lc3NhZ2VRdWV1ZXNbZXZlbnRLZXldO1xyXG4gICAgICAgICAgICBpZiAoY2hlY2tPZlR5cGUoZXZlbnRWYWx1ZSwgXCJmdW5jdGlvblwiKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlUXVldWVzW2V2ZW50S2V5XSA9IFs8RXZlbnRIYW5kbGVyPmV2ZW50VmFsdWUsIGV2ZW50SGFuZGxlcl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2tBcnJheShldmVudFZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlUXVldWVzW2V2ZW50S2V5XSA9IFsuLi48QXJyYXk8RXZlbnRIYW5kbGVyPj5ldmVudFZhbHVlLCBldmVudEhhbmRsZXJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VRdWV1ZXNbZXZlbnRLZXldID0gZXZlbnRIYW5kbGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWPque7keWumuS4gOasoVxyXG4gICAgICogQHBhcmFtIGV2ZW50S2V5IOS6i+S7tuWQjeensFxyXG4gICAgICogQHBhcmFtIGV2ZW50SGFuZGxlciDkuovku7blpITnkIblh73mlbDmiJblh73mlbDmlbDnu4RcclxuICAgICAqIEByZXR1cm5zIHZvaWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIG9uZShldmVudEtleTogc3RyaW5nLCBldmVudEhhbmRsZXI6IEV2ZW50SGFuZGxlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZVF1ZXVlc1tldmVudEtleV0gPSBldmVudEhhbmRsZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlj5HpgIHkuovku7ZcclxuICAgICAqIEBwYXJhbSBldmVudEtleSDkuovku7blkI3np7BcclxuICAgICAqIEBwYXJhbSBtZXNzYWdlIOS6i+S7tuWkhOeQhuWHveaVsOaIluWHveaVsOaVsOe7hFxyXG4gICAgICogQHBhcmFtIGlzU3luYyDmmK/lkKblkIzmraXmiafooYzvvIzpu5jorqRmYWxzZVxyXG4gICAgICogQHJldHVybnMgdm9pZCBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGVtaXQoZXZlbnRLZXk6IHN0cmluZywgbWVzc2FnZTogYW55LCBpc1N5bmM6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5tZXNzYWdlUXVldWVzLmhhc093blByb3BlcnR5KGV2ZW50S2V5KSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBldmVudFZhbHVlID0gdGhpcy5tZXNzYWdlUXVldWVzW2V2ZW50S2V5XTtcclxuICAgICAgICBpZiAoY2hlY2tPZlR5cGUoZXZlbnRWYWx1ZSwgXCJmdW5jdGlvblwiKSkge1xyXG4gICAgICAgICAgICAhaXNTeW5jID8gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAoPEV2ZW50SGFuZGxlcj5ldmVudFZhbHVlKShtZXNzYWdlKTtcclxuICAgICAgICAgICAgfSwgMCkgOiAoPEV2ZW50SGFuZGxlcj5ldmVudFZhbHVlKShtZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY2hlY2tBcnJheShldmVudFZhbHVlKSkge1xyXG4gICAgICAgICAgICAoPEFycmF5PEV2ZW50SGFuZGxlcj4+ZXZlbnRWYWx1ZSkubWFwKGhhbmRsZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgIWlzU3luYyA/IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXIobWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9LCAwKSA6IGhhbmRsZXIobWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOenu+mZpOS6i+S7tlxyXG4gICAgICogQHBhcmFtIGV2ZW50S2V5IOS6i+S7tuWQjeensFxyXG4gICAgICogQHJldHVybnMgdm9pZCBcclxuICAgICAqL1xyXG4gICAgcHVibGljIG9mZihldmVudEtleTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1lc3NhZ2VRdWV1ZXMuaGFzT3duUHJvcGVydHkoZXZlbnRLZXkpKSByZXR1cm47XHJcbiAgICAgICAgZGVsZXRlIHRoaXMubWVzc2FnZVF1ZXVlc1tldmVudEtleV1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOS6i+S7tuaAu+e6v+WunuS+i1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogRXZlbnRCdXM7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bllK/kuIDlj6/nlKjlr7nosaFcclxuICAgICAqIEByZXR1cm5zIEV2ZW50QnVzIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IEV2ZW50QnVzIHtcclxuICAgICAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBFdmVudEJ1cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiDmipvlh7rnqIvluo/lvILluLjkv6Hmga9cclxuICogQHBhcmFtIG1lc3NhZ2Ug5byC5bi4566A6KaBXHJcbiAqIEByZXR1cm5zIG5ldmVyIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFwcEVycm9yKG1lc3NhZ2U6IHN0cmluZyk6IG5ldmVyIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihgXFxu57G75Z6L77ya56iL5bqP5byC5bi4XFxu5byC5bi45L+h5oGv77yaJHttZXNzYWdlfVxcbuWghuagiOS/oeaBr++8mmApO1xyXG59XHJcblxyXG4vKipcclxuICog5oqb5Ye66aqM6K+B5aSx6LSl5L+h5oGvXHJcbiAqIEBwYXJhbSBtZXNzYWdlIOmUmeivr+S/oeaBr1xyXG4gKiBAcmV0dXJucyBuZXZlciBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUZhaWwobWVzc2FnZTogc3RyaW5nKTogbmV2ZXIge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBcXG7nsbvlnovvvJrpqozor4HplJnor69cXG7plJnor6/kv6Hmga/vvJoke21lc3NhZ2V9XFxu5aCG5qCI5L+h5oGv77yaYCk7XHJcbn0iLCJpbXBvcnQgeyBQUkVGSVggfSBmcm9tICcuLi8uLi9lbnRyeS9jb25zdCc7XHJcbmltcG9ydCB7IGNoZWNrT2ZUeXBlIH0gZnJvbSAnLi4vdmFsaWRhdG9yJztcclxuXHJcbi8qKlxyXG4gKiDmibnph4/mt7vliqDlhYPntKDmoLflvI9cclxuICogQHBhcmFtIGVsZW1lbnQg5YWD57Sg5a+56LGhXHJcbiAqIEBwYXJhbSBjc3NTdHlsZXMg5qC35byP6KGo5a+56LGhXHJcbiAqIEByZXR1cm5zIHZvaWQgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWRkQ1NTU3R5bGVzKGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCwgY3NzU3R5bGVzOiBDU1NTdHlsZURlY2xhcmF0aW9uKTogdm9pZCB7XHJcbiAgICBpZiAoIWVsZW1lbnQpIHJldHVybjtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGNzc1Byb3AgaW4gY3NzU3R5bGVzKSB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZVtjc3NQcm9wXSA9IGNzc1N0eWxlc1tjc3NQcm9wXSA/PyBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICog5re75YqgQ1NTIENsYXNzXHJcbiAqIOm7mOiupOWJjee8gOS4uiBfX1BSRUZJWF9f77yM5aaC5p6cY2xhc3PliY3pnaLluKYgISDliJnml6DpnIDmt7vliqDliY3nvIBcclxuICogQHBhcmFtIGVsZW1lbnQg5YWD57Sg5a+56LGhXHJcbiAqIEBwYXJhbSBjbGFzc2VzIGNsYXNz5YiX6KGoXHJcbiAqIEByZXR1cm5zIEhUTUxFbGVtZW50IHwgbnVsbCBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRDU1NDbGFzc2VzKGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCwgLi4uY2xhc3NlczogQXJyYXk8c3RyaW5nIHwgdW5kZWZpbmVkPik6IEhUTUxFbGVtZW50IHwgbnVsbCB7XHJcbiAgICBpZiAoIWVsZW1lbnQpIHJldHVybiBudWxsO1xyXG5cclxuICAgIHJldHVybiB1cGRhdGVDU1NDbGFzc2VzKGVsZW1lbnQsIGZ1bmN0aW9uIChjdXJyZW50Q2xhc3Nlczogc3RyaW5nW10sIGluZGV4OiBudW1iZXIsIGl0ZW1DbGFzczogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF+aW5kZXgpIHtcclxuICAgICAgICAgICAgY3VycmVudENsYXNzZXMucHVzaChpdGVtQ2xhc3MpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFBSRUZJWCwgLi4uY2xhc3Nlcyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDnp7vpmaRDU1MgQ2xhc3NcclxuICog6buY6K6k5YmN57yA5Li6IF9fUFJFRklYX1/vvIzlpoLmnpxjbGFzc+WJjemdouW4piAhIOWImeaXoOmcgOa3u+WKoOWJjee8gFxyXG4gKiBAcGFyYW0gZWxlbWVudCDlhYPntKDlr7nosaFcclxuICogQHBhcmFtIGNsYXNzZXMgY2xhc3PliJfooahcclxuICogQHJldHVybnMgSFRNTEVsZW1lbnQgfCBudWxsIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNTU0NsYXNzZXMoZWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsLCAuLi5jbGFzc2VzOiBzdHJpbmdbXSk6IEhUTUxFbGVtZW50IHwgbnVsbCB7XHJcbiAgICBpZiAoIWVsZW1lbnQpIHJldHVybiBudWxsO1xyXG5cclxuICAgIHJldHVybiB1cGRhdGVDU1NDbGFzc2VzKGVsZW1lbnQsIGZ1bmN0aW9uIChjdXJyZW50Q2xhc3Nlczogc3RyaW5nW10sIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAofmluZGV4KSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRDbGFzc2VzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgUFJFRklYLCAuLi5jbGFzc2VzKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIpOaWreaYr+WQpuWMheWQq0NTUyBDbGFzc1xyXG4gKiDpu5jorqTliY3nvIDkuLogX19QUkVGSVhfX++8jOWmguaenGNsYXNz5YmN6Z2i5bimICEg5YiZ5peg6ZyA5re75Yqg5YmN57yAXHJcbiAqIEBwYXJhbSBlbGVtZW50IOWFg+e0oOWvueixoVxyXG4gKiBAcGFyYW0gY2xhc3NOYW1lIGNsYXNz5YiX6KGoXHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaGFzQ1NTQ2xhc3MoZWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsLCBjbGFzc05hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCFlbGVtZW50KSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgY29uc3QgY3VycmVudENsYXNzZXMgPSBlbGVtZW50LmNsYXNzTmFtZS5zcGxpdCgvXFxzKy9nKTtcclxuICAgIGNvbnN0IGNscyA9IGNsYXNzTmFtZS5pbmRleE9mKFwiIVwiKSA9PT0gMCA/IGNsYXNzTmFtZS5zdWJzdHIoMSkgOiBQUkVGSVggKyBjbGFzc05hbWU7XHJcbiAgICBjb25zdCBpbmRleCA9IGN1cnJlbnRDbGFzc2VzLmluZGV4T2YoY2xzKTtcclxuICAgIHJldHVybiAhIX5pbmRleDtcclxufVxyXG5cclxuLyoqXHJcbiAqIOabtOaWsENTUyBDbGFzc++8jOWMheaLrOaWsOWinuOAgeabtOaWsOOAgeWIoOmZpFxyXG4gKiDpu5jorqTliY3nvIDkuLogX19QUkVGSVhfX++8jOWmguaenGNsYXNz5YmN6Z2i5bimICEg5YiZ5peg6ZyA5re75Yqg5YmN57yAXHJcbiAqIEBwYXJhbSBlbGVtZW50IOWFg+e0oOWvueixoVxyXG4gKiBAcGFyYW0gaGFuZGxlciDmm7TmlrDmlrnlvI9cclxuICogQHBhcmFtIFtwcmVmaXhdIOWJjee8gOesplxyXG4gKiBAcGFyYW0gY2xhc3NlcyBjbGFzc+WIl+ihqFxyXG4gKiBAcmV0dXJucyBIVE1MRWxlbWVudCB8IG51bGwgXHJcbiAqL1xyXG5mdW5jdGlvbiB1cGRhdGVDU1NDbGFzc2VzKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBoYW5kbGVyOiAoY3VycmVudENsYXNzZXM6IHN0cmluZ1tdLCBpbmRleDogbnVtYmVyLCBpdGVtQ2xhc3M6IHN0cmluZykgPT4gdm9pZCwgcHJlZml4OiBzdHJpbmcgPSBQUkVGSVgsIC4uLmNsYXNzZXM6IEFycmF5PHN0cmluZyB8IHVuZGVmaW5lZD4pOiBIVE1MRWxlbWVudCB8IG51bGwge1xyXG4gICAgaWYgKCFlbGVtZW50KSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50Q2xhc3NlcyA9IGVsZW1lbnQuY2xhc3NOYW1lLnNwbGl0KC9cXHMrL2cpO1xyXG4gICAgY2xhc3Nlcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW0pIHtcclxuICAgICAgICAgICAgY29uc3QgY2xzID0gaXRlbS5pbmRleE9mKFwiIVwiKSA9PT0gMCA/IGl0ZW0uc3Vic3RyKDEpIDogcHJlZml4ICsgaXRlbTtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBjdXJyZW50Q2xhc3Nlcy5pbmRleE9mKGNscyk7XHJcbiAgICAgICAgICAgIGhhbmRsZXIoY3VycmVudENsYXNzZXMsIGluZGV4LCBjbHMpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gY3VycmVudENsYXNzZXMuam9pbihcIiBcIikudHJpbSgpO1xyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliJvlu7pkaXbmoIfnrb5cclxuICogQHBhcmFtIFtpZF0gaWRcclxuICogQHJldHVybnMgSFRNTERpdkVsZW1lbnQgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGl2RWxlbWVudChpZD86IHN0cmluZyk6IEhUTUxEaXZFbGVtZW50IHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaWYgKGNoZWNrT2ZUeXBlKGlkLCBcInN0cmluZ1wiKSkge1xyXG4gICAgICAgIGVsZW1lbnQuaWQgPSA8c3RyaW5nPmlkO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliJvlu7pzdmfmoIfnrb5cclxuICogQHBhcmFtIG5hbWUgc3Zn5Zu+5qCH5ZCN56ewXHJcbiAqIEByZXR1cm5zIFNWR1NWR0VsZW1lbnRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdmdFbGVtZW50KG5hbWU6IHN0cmluZyk6IFNWR1NWR0VsZW1lbnQge1xyXG4gICAgY29uc3Qgc3ZnRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwic3ZnXCIpO1xyXG4gICAgY29uc3QgdXNlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwidXNlXCIpO1xyXG4gICAgdXNlRWxlbWVudC5zZXRBdHRyaWJ1dGVOUyhcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiwgXCJ4bGluazpocmVmXCIsIGAjJHtuYW1lfWApO1xyXG4gICAgc3ZnRWxlbWVudC5hcHBlbmRDaGlsZCh1c2VFbGVtZW50KTtcclxuICAgIHJldHVybiBzdmdFbGVtZW50O1xyXG59IiwiaW1wb3J0IHsgY2hlY2tKU09OT2JqZWN0IH0gZnJvbSAnLi4vdmFsaWRhdG9yJztcclxuaW1wb3J0IHsgSlNPTk9iamVjdCB9IGZyb20gJy4vdHlwZSc7XHJcblxyXG4vKipcclxuICog5YWL6ZqGSlNPTuWvueixoVxyXG4gKiBAcGFyYW0gc291cmNlIOWOn0pTT07nsbvlnovlr7nosaFcclxuICogQHJldHVybnMg5YWL6ZqG5ZCO55qESlNPTuexu+Wei+WvueixoVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lSlNPTk9iamVjdDxUIGV4dGVuZHMgSlNPTk9iamVjdD4oc291cmNlOiBUKTogVCB7XHJcbiAgICBjb25zdCBuZXdPYmplY3QgPSA8YW55Pnt9O1xyXG5cclxuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHNvdXJjZSkpIHtcclxuICAgICAgICBuZXdPYmplY3Rba2V5XSA9IGNoZWNrSlNPTk9iamVjdChzb3VyY2Vba2V5XSkgPyBjbG9uZUpTT05PYmplY3Qoc291cmNlW2tleV0pIDogc291cmNlW2tleV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3T2JqZWN0IGFzIFQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlkIjlubZKU09O5a+56LGhXHJcbiAqIEBwYXJhbSBzb3VyY2Ug5rqQSlNPTuexu+Wei+WvueixoVxyXG4gKiBAcGFyYW0gZGVzdCDnm67moIdKU09O57G75Z6L5a+56LGhXHJcbiAqIEByZXR1cm5zIOWQiOW5tuWQjueahEpTT07nsbvlnovlr7nosaFcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUpTT05PYmplY3Q8VCBleHRlbmRzIEpTT05PYmplY3Q+KHNvdXJjZTogVCwgZGVzdDogVCk6IFQge1xyXG4gICAgY29uc3QgbmV3T2JqZWN0ID0gPGFueT5jbG9uZUpTT05PYmplY3Qoc291cmNlKTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhkZXN0KSkge1xyXG4gICAgICAgIGlmIChuZXdPYmplY3Rba2V5XSA9PT0gdW5kZWZpbmVkIHx8ICFjaGVja0pTT05PYmplY3QoZGVzdFtrZXldKSkge1xyXG4gICAgICAgICAgICBuZXdPYmplY3Rba2V5XSA9IGRlc3Rba2V5XTtcclxuXHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBuZXdPYmplY3Rba2V5XSA9IG1lcmdlSlNPTk9iamVjdChuZXdPYmplY3Rba2V5XSwgZGVzdFtrZXldKTtcclxuICAgIH1cclxuICAgIHJldHVybiBuZXdPYmplY3QgYXMgVDtcclxufVxyXG4iLCJpbXBvcnQgeyBDYW5UeXBlb2YsIFZhbHVlT3B0aW9uIH0gZnJvbSAnLi90eXBlJztcclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6Xog73lpJ/ooqsgdHlwZW9mIOeahOexu+Wei1xyXG4gKiBAcGFyYW0gZGF0YSDmlbDmja5cclxuICogQHBhcmFtIHR5cGVOYW1lcyDnsbvlnovpm4blkIhcclxuICogQHJldHVybnMgYm9vbGVhbiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja09mVHlwZShkYXRhOiBhbnksIC4uLnR5cGVOYW1lczogQXJyYXk8Q2FuVHlwZW9mPik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHR5cGVOYW1lcy5pbmRleE9mKHR5cGVvZiBkYXRhKSA+IC0xO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIOajgOafpeaYr+WQpuaYr+Wtl+espuS4suexu+Wei1xyXG4gKiBAcGFyYW0gZGF0YSDmlbDmja5cclxuICogQHJldHVybnMgYm9vbGVhbiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja1N0cmluZyhkYXRhOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBjaGVja09mVHlwZShkYXRhLCBcInN0cmluZ1wiKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeaYr+WQpuaYr+aVtOaVsOexu+Wei1xyXG4gKiBAcGFyYW0gZGF0YSDmlbDmja5cclxuICogQHJldHVybnMgYm9vbGVhbiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0ludChkYXRhOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBjaGVja09mVHlwZShkYXRhLCBcIm51bWJlclwiKSAmJiAoL15cXC0/WzAtOV0rJC8udGVzdChkYXRhKSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XmmK/lkKbmmK/mraPmlbTmlbDnsbvlnotcclxuICogQHBhcmFtIGRhdGEg5pWw5o2uXHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tQc3RJbnQoZGF0YTogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gY2hlY2tJbnQoZGF0YSkgJiYgZGF0YSA+PSAwO1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5piv5ZCm5piv5q2j5pWw5YC857G75Z6LXHJcbiAqIEBwYXJhbSBkYXRhIOaVsOaNrlxyXG4gKiBAcmV0dXJucyBib29sZWFuIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrUHN0TnVtYmVyKGRhdGE6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGNoZWNrT2ZUeXBlKGRhdGEsIFwibnVtYmVyXCIpICYmIGRhdGEgPj0gMDtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeaYr+WQpuaYr0pTT07lr7nosaHnsbvlnotcclxuICogQHBhcmFtIGRhdGEg5pWw5o2uXHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tKU09OT2JqZWN0KGRhdGE6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGNoZWNrT2ZUeXBlKGRhdGEsIFwib2JqZWN0XCIpICYmXHJcbiAgICAgICAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGRhdGEpLnRvTG93ZXJDYXNlKCkgPT09IFwiW29iamVjdCBvYmplY3RdXCIgJiZcclxuICAgICAgICAhY2hlY2tBcnJheShkYXRhKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeaYr+WQpuaYr+aVsOe7hOWvueixoeexu+Wei1xyXG4gKiBAcGFyYW0gZGF0YSDmlbDmja5cclxuICogQHJldHVybnMgYm9vbGVhbiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0FycmF5KGRhdGE6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoZGF0YSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XmmK/lkKbmmK/mjIflrprnsbvlnovmlbDnu4Tlr7nosaHnsbvlnotcclxuICogQHBhcmFtIGRhdGEg5pWw5o2uXHJcbiAqIEBwYXJhbSBjaGVja0l0ZW0g5pWw57uE6aG55qOA5p+l5Ye95pWwXHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tBcnJheUVhY2hTYW1lKGRhdGE6IGFueSwgY2hlY2tJdGVtOiAoaXRlbTogYW55KSA9PiBib29sZWFuKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YSkpIHJldHVybiBmYWxzZTtcclxuICAgIGlmIChkYXRhLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgbGV0IGlzU2FtZUFycmF5ID0gdHJ1ZTtcclxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XHJcbiAgICAgICAgaWYgKCFjaGVja0l0ZW0oaXRlbSkpIHtcclxuICAgICAgICAgICAgaXNTYW1lQXJyYXkgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpc1NhbWVBcnJheTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeWtl+espuS4suaYr+WQpuWMheWQq+aMh+WumuWtl+esplxyXG4gKiBAcGFyYW0gZGF0YSDmlbDlgLxcclxuICogQHBhcmFtIGNoYXJhY3RlciDlrZfnrKZcclxuICogQHJldHVybnMgYm9vbGVhbiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0NvbnRhaW5zKGRhdGE6IGFueSwgY2hhcmFjdGVyOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBjaGVja09mVHlwZShkYXRhLCBcInN0cmluZ1wiKSAmJiBkYXRhLmluZGV4T2YoY2hhcmFjdGVyKSA+IC0xO1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5piv5ZCm5piv5oyH5a6a5Y+v6YCJ5YC857G75Z6LXHJcbiAqIEBwYXJhbSBkYXRhIOaVsOaNrlxyXG4gKiBAcGFyYW0gdmFsdWVPcHRpb25zIOWPr+mAieWAvFxyXG4gKiBAcmV0dXJucyBib29sZWFuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tJblZhbHVlT3B0aW9ucyhkYXRhOiBhbnksIC4uLnZhbHVlT3B0aW9uczogVmFsdWVPcHRpb24pOiBib29sZWFuIHtcclxuICAgIHJldHVybiBjaGVja09mVHlwZShkYXRhLCBcImJvb2xlYW5cIiwgXCJudW1iZXJcIiwgXCJzdHJpbmdcIiwgXCJ1bmRlZmluZWRcIiwgXCJvYmplY3RcIikgJiYgdmFsdWVPcHRpb25zLmluZGV4T2YoZGF0YSkgPiAtMTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeWtl+espuS4sumVv+W6puaYr+WQpua7oei2s+acgOWwj+mVv+W6plxyXG4gKiBAcGFyYW0gZGF0YSDmlbDmja5cclxuICogQHBhcmFtIHRocmVzaG9sZCDpmIjlgLxcclxuICogQHJldHVybnMgYm9vbGVhbiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja01pbkxlbmd0aChkYXRhOiBhbnksIHRocmVzaG9sZDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gY2hlY2tPZlR5cGUoZGF0YSwgXCJzdHJpbmdcIikgJiYgZGF0YS5sZW5ndGggPj0gdGhyZXNob2xkO1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5a2X56ym5Liy6ZW/5bqm5piv5ZCm5ruh6Laz5pyA5aSn6ZW/5bqmXHJcbiAqIEBwYXJhbSBkYXRhIOaVsOaNrlxyXG4gKiBAcGFyYW0gdGhyZXNob2xkIOmYiOWAvFxyXG4gKiBAcmV0dXJucyBib29sZWFuIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTWF4TGVuZ3RoKGRhdGE6IGFueSwgdGhyZXNob2xkOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBjaGVja09mVHlwZShkYXRhLCBcInN0cmluZ1wiKSAmJiBkYXRhLmxlbmd0aCA8PSB0aHJlc2hvbGQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XlrZfnrKbkuLLplb/luqbmmK/lkKbmu6HotrPljLrpl7Tplb/luqZcclxuICogQHBhcmFtIGRhdGEg5pWw5o2uXHJcbiAqIEBwYXJhbSBtaW5UaHJlc2hvbGQg5pyA5bCP6ZiI5YC8XHJcbiAqIEBwYXJhbSBtYXhUaHJlc2hvbGQg5pyA5aSn6ZiI5YC8XHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tMZW5ndGgoZGF0YTogYW55LCBtaW5UaHJlc2hvbGQ6IG51bWJlciwgbWF4VGhyZXNob2xkOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBjaGVja01pbkxlbmd0aChkYXRhLCBtaW5UaHJlc2hvbGQpICYmIGNoZWNrTWF4TGVuZ3RoKGRhdGEsIG1heFRocmVzaG9sZCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XmlbDlgLzmmK/lkKblpKfkuo7mn5DkuKrlgLxcclxuICogQHBhcmFtIGRhdGEg5pWw5o2uXHJcbiAqIEBwYXJhbSB0aHJlc2hvbGQg6ZiI5YC8XHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tNaW4oZGF0YTogYW55LCB0aHJlc2hvbGQ6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGNoZWNrT2ZUeXBlKGRhdGEsIFwibnVtYmVyXCIpICYmIGRhdGEgPj0gdGhyZXNob2xkO1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5pWw5YC85piv5ZCm5bCP5LqO5p+Q5Liq5YC8XHJcbiAqIEBwYXJhbSBkYXRhIOaVsOaNrlxyXG4gKiBAcGFyYW0gdGhyZXNob2xkIOmYiOWAvFxyXG4gKiBAcmV0dXJucyBib29sZWFuIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTWF4KGRhdGE6IGFueSwgdGhyZXNob2xkOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBjaGVja09mVHlwZShkYXRhLCBcIm51bWJlclwiKSAmJiBkYXRhIDw9IHRocmVzaG9sZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeaVsOWAvOaYr+WQpuWcqOafkOS4quWMuumXtOWGhVxyXG4gKiBAcGFyYW0gZGF0YSDmlbDmja5cclxuICogQHBhcmFtIG1pblRocmVzaG9sZCDmnIDlsI/pmIjlgLxcclxuICogQHBhcmFtIG1heFRocmVzaG9sZCDmnIDlpKfpmIjlgLxcclxuICogQHJldHVybnMgYm9vbGVhbiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja1JhbmdlKGRhdGE6IGFueSwgbWluVGhyZXNob2xkOiBudW1iZXIsIG1heFRocmVzaG9sZDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gY2hlY2tNaW4oZGF0YSwgbWluVGhyZXNob2xkKSAmJiBjaGVja01heChkYXRhLCBtYXhUaHJlc2hvbGQpO1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l56m65oiWTlVMTOWtl+espuS4slxyXG4gKiBAcGFyYW0gZGF0YSDmlbDlgLxcclxuICogQHJldHVybnMgYm9vbGVhbiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0VtcHR5T3JOdWxsKGRhdGE6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGRhdGEgPT09IG51bGwgfHwgKGNoZWNrT2ZUeXBlKGRhdGEsIFwic3RyaW5nXCIpICYmIGRhdGEubGVuZ3RoID09PSAwKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpemdnuepuuaIlumdnk5VTEzlrZfnrKbkuLJcclxuICogQHBhcmFtIGRhdGEg5pWw5YC8XHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tOb0VtcHR5T3JOdWxsKGRhdGE6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGNoZWNrT2ZUeXBlKGRhdGEsIFwic3RyaW5nXCIpICYmIGRhdGEubGVuZ3RoID4gMDtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeaYr+WQpuaYr+ato+WImeihqOi+vuW8j1xyXG4gKiBAcGFyYW0gZGF0YSDmlbDlgLxcclxuICogQHJldHVybnMgYm9vbGVhbiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja1JlZ0V4cChkYXRhOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBkYXRhIGluc3RhbmNlb2YgUmVnRXhwO1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5piv5ZCm5piv6aKc6Imy5YC8XHJcbiAqIEBwYXJhbSBkYXRhIOaVsOWAvFxyXG4gKiBAcmV0dXJucyBib29sZWFuIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQ29sb3IoZGF0YTogYW55KTogYm9vbGVhbiB7XHJcbiAgICB2YXIgYmluYXJ5UmVnID0gL14jKFswLTlhLWZdezZ9fFswLTlhLWZdezN9KSQvaTtcclxuICAgIHZhciByZ2JSZXggPSAvXnJnYlxcKChbMC05XXxbMC05XVswLTldfDI1WzAtNV18MlswLTRdWzAtOV18WzAtMV1bMC05XVswLTldKVxcLChbMC05XXxbMC05XVswLTldfDI1WzAtNV18MlswLTRdWzAtOV18WzAtMV1bMC05XVswLTldKVxcLChbMC05XXxbMC05XVswLTldfDI1WzAtNV18MlswLTRdWzAtOV18WzAtMV1bMC05XVswLTldKVxcKSQvaTtcclxuICAgIHZhciByZ2JhUmV4ID0gL15yZ2JhXFwoKFswLTldfFswLTldWzAtOV18MjVbMC01XXwyWzAtNF1bMC05XXxbMC0xXVswLTldWzAtOV0pXFwsKFswLTldfFswLTldWzAtOV18MjVbMC01XXwyWzAtNF1bMC05XXxbMC0xXVswLTldWzAtOV0pXFwsKFswLTldfFswLTldWzAtOV18MjVbMC01XXwyWzAtNF1bMC05XXxbMC0xXVswLTldWzAtOV0pXFwsKDF8MS4wfDAuWzAtOV0pXFwpJC9pO1xyXG5cclxuICAgIHJldHVybiBiaW5hcnlSZWcudGVzdChkYXRhKSB8fCByZ2JSZXgudGVzdChkYXRhKSB8fCByZ2JhUmV4LnRlc3QoZGF0YSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgQWxpZ24gfSBmcm9tICcuLi9jb21wb25lbnQvdWktdG9vbC1iYXIvY29uc3QnO1xyXG5cclxuLyoqXHJcbiAqIOeJiOacrOWPt1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFZFUlNJT046IHN0cmluZyA9IFwiMy4wLjBcIjtcclxuXHJcbi8qKlxyXG4gKiDliY3nvIDnrKZcclxuICovXHJcbmV4cG9ydCBjb25zdCBQUkVGSVg6IHN0cmluZyA9IFwibGF5eC1cIjtcclxuXHJcbi8qKlxyXG4gKiDpu5jorqTlvIDlp4vlsYLmlbBcclxuICovXHJcbmV4cG9ydCBjb25zdCBTVEFSVF9aSU5ERVg6IG51bWJlciA9IDEwMDAwMDAwO1xyXG5cclxuLyoqXHJcbiAqIOm7mOiupOeql+WPo+WuveW6plxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfV0lORE9XX1dJRFRIOiBudW1iZXIgPSA4MDA7XHJcblxyXG4vKipcclxuICog6buY6K6k56qX5Y+j6auY5bqmXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9XSU5ET1dfSEVJR0hUOiBudW1iZXIgPSA2MDA7XHJcblxyXG4vKipcclxuICog6buY6K6k56qX5Y+j6IOM5pmv6aKc6ImyXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9XSU5ET1dfQkFDS0dST1VORF9DT0xPUjogc3RyaW5nID0gXCIjZmZmZmZmXCI7XHJcblxyXG4vKipcclxuICog6buY6K6k5bel5YW35qCP6IOM5pmv6aKc6ImyXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9UT09MQkFSX0JBQ0tHUk9VTkRfQ09MT1I6IHN0cmluZyA9IFwiI2ZmZmZmZlwiO1xyXG5cclxuLyoqXHJcbiAqIOm7mOiupOW3peWFt+agj+mrmOW6plxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfVE9PTEJBUl9IRUlHSFQ6IG51bWJlciA9IDMwO1xyXG5cclxuLyoqXHJcbiAqIOagh+mimOagj+m7mOiupOaWh+acrFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfVElUTEVCQVJfTEFCRUwgPSBcIuacquWRveWQjVwiO1xyXG5cclxuLyoqXHJcbiAqIOagh+mimOagj+m7mOiupOminOiJslxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfVElUTEVCQVJfQ09MT1IgPSBcIiMwMDAwMDBcIjtcclxuXHJcbi8qKlxyXG4gKiDmoIfpopjmoI/pu5jorqTlr7npvZDmlrnlvI9cclxuICovXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX1RJVExFQkFSX0FMSUdOID0gQWxpZ24uTEVGVDtcclxuXHJcbi8qKlxyXG4gKiDmoIfpopjmoI/pu5jorqTlrZfkvZPlpKflsI9cclxuICovXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX1RJVExFQkFSX0ZPTlRTSVpFID0gMTQ7XHJcblxyXG4vKipcclxuICog5YaF572u5pSv5oyB6K+t6KiAXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZW51bSBTdXBwb3J0TGFuZ3VhZ2Uge1xyXG4gICAgLyoqXHJcbiAgICAgKiDkuK3mlodcclxuICAgICAqL1xyXG4gICAgWkhfQ04gPSBcIlpIX0NOXCIsXHJcbiAgICAvKipcclxuICAgICAqIOiLseaWh1xyXG4gICAgICovXHJcbiAgICBFTl9VUyA9IFwiRU5fVVNcIlxyXG59IiwiaW1wb3J0ICcuLi9hc3NldC9pY29uJztcclxuaW1wb3J0ICcuLi9hc3NldC9zdHlsZSc7XHJcblxyXG5pbXBvcnQgeyBERUZBVUxUX0lDT04sIERFRkFVTFRfSUNPTl9DT0xPUiwgREVGQVVMVF9JQ09OX1NJWkUgfSBmcm9tICcuLi9jb21wb25lbnQvdWktaWNvbi9jb25zdCc7XHJcbmltcG9ydCB7IFVJSWNvbk9wdGlvbiB9IGZyb20gJy4uL2NvbXBvbmVudC91aS1pY29uL3R5cGUnO1xyXG5pbXBvcnQgeyBBbGlnbiB9IGZyb20gJy4uL2NvbXBvbmVudC91aS10b29sLWJhci9jb25zdCc7XHJcbmltcG9ydCB7IFRpdGxlQmFyT3B0aW9uIH0gZnJvbSAnLi4vY29tcG9uZW50L3VpLXRvb2wtYmFyL3R5cGUnO1xyXG5pbXBvcnQgeyBVSVdpbmRvdyB9IGZyb20gJy4uL2NvbXBvbmVudC91aS13aW5kb3cnO1xyXG5pbXBvcnQgeyBVSVdpbmRvd09wdGlvbiB9IGZyb20gJy4uL2NvbXBvbmVudC91aS13aW5kb3cvdHlwZSc7XHJcbmltcG9ydCB7IGNvbWJpbmUsIGluVmFsdWVPcHRpb25zLCBpc05vRW1wdHlPck51bGwsIGlzUHN0SW50LCBtaW4gfSBmcm9tICcuLi9jb3JlL2RlY29yYXRvci9wcm9wZXJ0eS1kZWNvcmF0b3InO1xyXG5pbXBvcnQgeyBFdmVudEJ1cyB9IGZyb20gJy4uL2NvcmUvZXZlbnQtYnVzJztcclxuaW1wb3J0IHsgRXZlbnRTZXR0ZXIgfSBmcm9tICcuLi9jb3JlL2V2ZW50LWJ1cy90eXBlJztcclxuaW1wb3J0IHsgY2hlY2tDb2xvciwgY2hlY2tOb0VtcHR5T3JOdWxsLCBjaGVja09mVHlwZSwgY2hlY2tQc3RJbnQsIGNoZWNrUHN0TnVtYmVyLCBjaGVja1N0cmluZyB9IGZyb20gJy4uL2NvcmUvdmFsaWRhdG9yJztcclxuaW1wb3J0IHtcclxuICAgIERFRkFVTFRfVElUTEVCQVJfQUxJR04sXHJcbiAgICBERUZBVUxUX1RJVExFQkFSX0NPTE9SLFxyXG4gICAgREVGQVVMVF9USVRMRUJBUl9GT05UU0laRSxcclxuICAgIERFRkFVTFRfVElUTEVCQVJfTEFCRUwsXHJcbiAgICBERUZBVUxUX1RPT0xCQVJfQkFDS0dST1VORF9DT0xPUixcclxuICAgIERFRkFVTFRfVE9PTEJBUl9IRUlHSFQsXHJcbiAgICBERUZBVUxUX1dJTkRPV19CQUNLR1JPVU5EX0NPTE9SLFxyXG4gICAgREVGQVVMVF9XSU5ET1dfSEVJR0hULFxyXG4gICAgREVGQVVMVF9XSU5ET1dfV0lEVEgsXHJcbiAgICBQUkVGSVgsXHJcbiAgICBTVEFSVF9aSU5ERVgsXHJcbiAgICBTdXBwb3J0TGFuZ3VhZ2UsXHJcbiAgICBWRVJTSU9OLFxyXG59IGZyb20gJy4vY29uc3QnO1xyXG5pbXBvcnQgeyBoYW5kbGVyT3B0aW9ucyB9IGZyb20gJy4vcGFydGlhbCc7XHJcbmltcG9ydCB7IEVudHJ5T3B0aW9uLCBUb29sQmFyRGVmYXVsdCwgV2luZG93RGVmYXVsdCB9IGZyb20gJy4vdHlwZSc7XHJcblxyXG4vKipcclxuICog5YWl5Y+j5Y2V5L6L57G777yM5om/6L29552A5YWo5bGA5pWw5o2u5a2Y5YKoXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRW50cnkge1xyXG4gICAgLyoqXHJcbiAgICAgKiDnp4HmnInljJbmnoTpgKDlh73mlbDvvIzlrp7njrDljZXkvotcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcihvcHRpb25zOiBFbnRyeU9wdGlvbikge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlck9wdGlvbnMob3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlpITnkIbliJ3lp4vkvKDlhaXlj4LmlbBcclxuICAgICAqIEBwYXJhbSBvcHRpb25zIOWPr+mAieWPguaVsFxyXG4gICAgICogQHJldHVybnMgdm9pZFxyXG4gICAgICovXHJcbiAgICBoYW5kbGVyT3B0aW9uczogKG9wdGlvbnM6IEVudHJ5T3B0aW9uKSA9PiB2b2lkID0gaGFuZGxlck9wdGlvbnM7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDniYjmnKzlj7dcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IHZlcnNpb246IHN0cmluZyA9IFZFUlNJT047XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDotbflp4vlsYLmlbAs5LiN6IO95bCP5LqOMTAwMFxyXG4gICAgICovXHJcbiAgICBAaXNQc3RJbnQoKVxyXG4gICAgQG1pbigxMDAwKVxyXG4gICAgcHVibGljIHN0YXJ0WkluZGV4OiBudW1iZXIgPSBTVEFSVF9aSU5ERVg7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliY3nvIDnrKZcclxuICAgICAqL1xyXG4gICAgQGlzTm9FbXB0eU9yTnVsbCgpXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgcHJlZml4OiBzdHJpbmcgPSBQUkVGSVg7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpu5jorqTor63oqIBcclxuICAgICAqL1xyXG4gICAgQGluVmFsdWVPcHRpb25zKFN1cHBvcnRMYW5ndWFnZS5aSF9DTiwgU3VwcG9ydExhbmd1YWdlLkVOX1VTKVxyXG4gICAgcHVibGljIGxhbmc6IFN1cHBvcnRMYW5ndWFnZSA9IFN1cHBvcnRMYW5ndWFnZS5aSF9DTjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOeql+WPo+m7mOiupOmFjee9rlxyXG4gICAgICovXHJcbiAgICBAY29tYmluZSh7XHJcbiAgICAgICAgd2lkdGg6IGNoZWNrUHN0TnVtYmVyLFxyXG4gICAgICAgIGhlaWdodDogY2hlY2tQc3ROdW1iZXIsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjaGVja0NvbG9yLFxyXG4gICAgICAgIHRvb2xCYXI6IHtcclxuICAgICAgICAgICAgZGVjb3JhdG9yOiB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGNoZWNrUHN0TnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjaGVja0NvbG9yLFxyXG4gICAgICAgICAgICAgICAgdGl0bGVCYXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBkZWNvcmF0b3I6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGNoZWNrU3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogY2hlY2tDb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ246IFtBbGlnbi5MRUZULCBBbGlnbi5DRU5URVIsIEFsaWduLlJJR0hUXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IGNoZWNrUHN0SW50XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBbZmFsc2VdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaWNvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlY29yYXRvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBjaGVja05vRW1wdHlPck51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IGNoZWNrUHN0SW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogY2hlY2tDb2xvclxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogW2ZhbHNlXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvcHRpb25zOiBbZmFsc2VdXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIHB1YmxpYyB3aW5kb3c6IFdpbmRvd0RlZmF1bHQgPSA8V2luZG93RGVmYXVsdD57XHJcbiAgICAgICAgd2lkdGg6IERFRkFVTFRfV0lORE9XX1dJRFRILCAvLyDpu5jorqTlrr3luqZcclxuICAgICAgICBoZWlnaHQ6IERFRkFVTFRfV0lORE9XX0hFSUdIVCwgIC8vIOm7mOiupOmrmOW6plxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogREVGQVVMVF9XSU5ET1dfQkFDS0dST1VORF9DT0xPUiwgICAgLy/pu5jorqTog4zmma/popzoibJcclxuICAgICAgICB0b29sQmFyOiA8VG9vbEJhckRlZmF1bHQgfCBmYWxzZT57XHJcbiAgICAgICAgICAgIGhlaWdodDogREVGQVVMVF9UT09MQkFSX0hFSUdIVCwgLy8g6buY6K6k5bel5YW35qCP6auY5bqmXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogREVGQVVMVF9UT09MQkFSX0JBQ0tHUk9VTkRfQ09MT1IsIC8vIOm7mOiupOW3peWFt+agj+iDjOaZr+minOiJslxyXG4gICAgICAgICAgICB0aXRsZUJhcjogPFRpdGxlQmFyT3B0aW9uIHwgZmFsc2U+e1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6IERFRkFVTFRfVElUTEVCQVJfTEFCRUwsICAvLyDpu5jorqTmoIfpopjmoI/mlofmnKxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBERUZBVUxUX1RJVExFQkFSX0NPTE9SLCAvLyDpu5jorqTmoIfpopjmoI/popzoibJcclxuICAgICAgICAgICAgICAgIGFsaWduOiBERUZBVUxUX1RJVExFQkFSX0FMSUdOLCAvLyDpu5jorqTmoIfpopjmoI/lr7npvZDmlrnlvI9cclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBERUZBVUxUX1RJVExFQkFSX0ZPTlRTSVpFIC8vIOm7mOiupOagh+mimOagj+Wtl+S9k+Wkp+Wwj1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpY29uOiA8VUlJY29uT3B0aW9uIHwgZmFsc2U+e1xyXG4gICAgICAgICAgICAgICAgbmFtZTogREVGQVVMVF9JQ09OLCAvLyDpu5jorqTlm77moIflkI3np7BcclxuICAgICAgICAgICAgICAgIHNpemU6IERFRkFVTFRfSUNPTl9TSVpFLCAvLyDpu5jorqTlm77moIflpKflsI9cclxuICAgICAgICAgICAgICAgIGNvbG9yOiBERUZBVUxUX0lDT05fQ09MT1IgLy8g6buY6K6k5Zu+5qCH6aKc6ImyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5b2T5YmN5bGC57qn5pWwXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX3pJbmRleDogbnVtYmVyID0gdGhpcy5zdGFydFpJbmRleDtcclxuICAgIGdldCB6SW5kZXgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3pJbmRleCA9IHRoaXMuX3pJbmRleCArIDI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnm5HlkKzkuovku7ZcclxuICAgICAqIEBwYXJhbSBxdWV1ZXMg5LqL5Lu26Zif5YiXXHJcbiAgICAgKi9cclxuICAgIG9uKHF1ZXVlczogRXZlbnRTZXR0ZXIgPSB7fSk6IHZvaWQge1xyXG4gICAgICAgIGZvciAoY29uc3QgZXZlbnRLZXkgaW4gcXVldWVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZXIgPSBxdWV1ZXNbZXZlbnRLZXldO1xyXG4gICAgICAgICAgICBpZiAoY2hlY2tPZlR5cGUoaGFuZGxlciwgXCJmdW5jdGlvblwiKSkge1xyXG4gICAgICAgICAgICAgICAgRXZlbnRCdXMuZ2V0SW5zdGFuY2UoKS5vbihldmVudEtleSwgaGFuZGxlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmiZPlvIDmlrDnqpflj6NcclxuICAgICAqIEBwYXJhbSBvcHRpb25zIOeql+WPo+WPguaVsFxyXG4gICAgICogQHJldHVybnMgdm9pZFxyXG4gICAgICovXHJcbiAgICBvcGVuKG9wdGlvbnM6IFVJV2luZG93T3B0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgdWlXaW5kb3cgPSBuZXcgVUlXaW5kb3cob3B0aW9ucyk7XHJcbiAgICAgICAgY29uc3QgdWlXaW5kb3dFbGVtZW50ID0gdWlXaW5kb3cucHJlc2VudCgpO1xyXG4gICAgICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKHVpV2luZG93RWxlbWVudCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh1aVdpbmRvd0VsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6Z2Z5oCB5a6e5L6L5Y+Y6YePXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBFbnRyeTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluWUr+S4gOWPr+eUqOWvueixoVxyXG4gICAgICogQHBhcmFtIFtvcHRpb25zXSDlhaXlj6Plj4LmlbBcclxuICAgICAqIEByZXR1cm5zIEVudHJ5IFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKG9wdGlvbnM6IEVudHJ5T3B0aW9uID0gPEVudHJ5T3B0aW9uPnt9KTogRW50cnkge1xyXG4gICAgICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IEVudHJ5KG9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5oYW5kbGVyT3B0aW9ucyhvcHRpb25zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBFbnRyeSB9IGZyb20gJy4vJztcclxuaW1wb3J0IHsgU3VwcG9ydExhbmd1YWdlIH0gZnJvbSAnLi9jb25zdCc7XHJcbmltcG9ydCB7IEVudHJ5T3B0aW9uLCBXaW5kb3dEZWZhdWx0IH0gZnJvbSAnLi90eXBlJztcclxuXHJcbi8qKlxyXG4gKiDlpITnkIbliJ3lp4vkvKDlhaXlj4LmlbBcclxuICogQHBhcmFtIG9wdGlvbnMg5o6n5Lu25pSv5oyB5Lyg5YWl5Y+v6YCJ5Y+C5pWwXHJcbiAqIEByZXR1cm5zIHZvaWRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVyT3B0aW9ucyh0aGlzOiBFbnRyeSwgb3B0aW9uczogRW50cnlPcHRpb24pOiB2b2lkIHtcclxuICAgIHRoaXMubGFuZyA9IG9wdGlvbnM/LmxhbmcgPz8gU3VwcG9ydExhbmd1YWdlLlpIX0NOO1xyXG4gICAgdGhpcy5zdGFydFpJbmRleCA9IG9wdGlvbnM/LnN0YXJ0WkluZGV4ID8/IHRoaXMuc3RhcnRaSW5kZXg7XHJcbiAgICB0aGlzLndpbmRvdyA9IDxXaW5kb3dEZWZhdWx0Pm9wdGlvbnM/LndpbmRvdyA/PyB0aGlzLndpbmRvdztcclxufSIsImltcG9ydCB7IEVudHJ5IH0gZnJvbSAnLi9hcHAvZW50cnknO1xyXG5pbXBvcnQgeyBFbnRyeU9wdGlvbiwgRW50cnlPdmVydCB9IGZyb20gJy4vYXBwL2VudHJ5L3R5cGUnO1xyXG5cclxuLyoqXHJcbiAqIOWvueWkluWFrOW8gOaWueazlVxyXG4gKi9cclxuZnVuY3Rpb24gb3ZlcnQoKTogRW50cnlPdmVydCB7XHJcbiAgICBjb25zdCBlbnRyeSA9IEVudHJ5LmdldEluc3RhbmNlKCk7XHJcblxyXG4gICAgY29uc3QgZW50cnlPdmVydCA9IDxFbnRyeU92ZXJ0PmZ1bmN0aW9uIChvcHRpb25zOiBFbnRyeU9wdGlvbik6IHZvaWQge1xyXG4gICAgICAgIEVudHJ5LmdldEluc3RhbmNlKG9wdGlvbnMpO1xyXG4gICAgfTtcclxuXHJcbiAgICBlbnRyeU92ZXJ0Lm9uID0gZW50cnkub247XHJcbiAgICBlbnRyeU92ZXJ0LnZlcnNpb24gPSBlbnRyeS52ZXJzaW9uO1xyXG4gICAgZW50cnlPdmVydC5vcGVuID0gZW50cnkub3BlbjtcclxuXHJcbiAgICByZXR1cm4gZW50cnlPdmVydDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgb3ZlcnQoKTsiXSwic291cmNlUm9vdCI6IiJ9