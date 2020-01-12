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

/***/ "./src/app/asset/icon/destroy.svg":
/*!****************************************!*\
  !*** ./src/app/asset/icon/destroy.svg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/svg-baker-runtime/browser-symbol.js */ "./node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ "./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "destroy",
  "use": "destroy-usage",
  "viewBox": "0 0 1024 1024",
  "content": "<symbol class=\"icon\" viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" id=\"destroy\"><defs><style type=\"text/css\"></style></defs><path d=\"M933.89254819 139.71606348L884.23129279 90.08990363 511.96490363 462.39138834 140.40044113 90.82692583 90.84447403 140.34779656 462.40893653 511.91225907 90.10745181 884.2137446 139.73361166 933.875 512.03509637 561.53841892 883.59955887 933.10288141 933.15552597 883.58201068 561.59106347 512.01754819Z\" p-id=\"4833\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

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
__webpack_require__(/*! ./destroy.svg */ "./src/app/asset/icon/destroy.svg");


/***/ }),

/***/ "./src/app/asset/style/action-bar.css":
/*!********************************************!*\
  !*** ./src/app/asset/style/action-bar.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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
__webpack_require__(/*! ./action-bar.css */ "./src/app/asset/style/action-bar.css");


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

/***/ "./src/app/component/ui-action-button/index.ts":
/*!*****************************************************!*\
  !*** ./src/app/component/ui-action-button/index.ts ***!
  \*****************************************************/
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
var partial_1 = __webpack_require__(/*! ./partial */ "./src/app/component/ui-action-button/partial.ts");
var ui_icon_1 = __webpack_require__(/*! ../ui-icon */ "./src/app/component/ui-icon/index.ts");
var UIActionButton = (function (_super) {
    __extends(UIActionButton, _super);
    function UIActionButton(options) {
        var _this = _super.call(this) || this;
        _this.handlerOptions = partial_1.handlerOptions;
        _this.disabled = false;
        _this.width = 45;
        _this.name = options.name;
        _this.handlerOptions(options);
        return _this;
    }
    UIActionButton.prototype.present = function () {
        var _this = this;
        var element = element_helper_1.createDivElement();
        element_helper_1.addCSSClasses(element, "action-button", "action-" + this.name, "flex-box", "center-all", this.disabled ? "action-button-disabled" : undefined);
        element_helper_1.addCSSStyles(element, {
            width: this.width + "px"
        });
        if (this.handler) {
            element.addEventListener("click", function (ev) { return _this.handler(ev); }, true);
        }
        var uiIcon = new ui_icon_1.UIICon({
            name: this.name
        });
        var svgElement = uiIcon.present();
        element.appendChild(svgElement);
        return element;
    };
    __decorate([
        property_decorator_1.isNoEmptyOrNull()
    ], UIActionButton.prototype, "name", void 0);
    __decorate([
        property_decorator_1.isBoolean()
    ], UIActionButton.prototype, "disabled", void 0);
    __decorate([
        property_decorator_1.admix(validator_1.checkFunction, undefined)
    ], UIActionButton.prototype, "handler", void 0);
    __decorate([
        property_decorator_1.isPstInt()
    ], UIActionButton.prototype, "width", void 0);
    return UIActionButton;
}(__1.Component));
exports.UIActionButton = UIActionButton;


/***/ }),

/***/ "./src/app/component/ui-action-button/partial.ts":
/*!*******************************************************!*\
  !*** ./src/app/component/ui-action-button/partial.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function handlerOptions(options) {
    var _a, _b, _c, _d;
    this.disabled = (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.disabled, (_b !== null && _b !== void 0 ? _b : this.disabled));
    this.handler = (_d = (_c = options) === null || _c === void 0 ? void 0 : _c.handler, (_d !== null && _d !== void 0 ? _d : this.handler));
}
exports.handlerOptions = handlerOptions;


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
    SupportIcon["DESTROY"] = "destroy";
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
var validator_1 = __webpack_require__(/*! ../../core/validator */ "./src/app/core/validator/index.ts");
var const_1 = __webpack_require__(/*! ./const */ "./src/app/component/ui-icon/const.ts");
var partial_1 = __webpack_require__(/*! ./partial */ "./src/app/component/ui-icon/partial.ts");
var UIICon = (function (_super) {
    __extends(UIICon, _super);
    function UIICon(options) {
        var _a;
        var _this = _super.call(this) || this;
        _this.handlerOptions = partial_1.handlerOptions;
        _this.color = null;
        _this.size = const_1.DEFAULT_ICON_SIZE;
        _this.name = (_a = options) === null || _a === void 0 ? void 0 : _a.name;
        _this.handlerOptions(options);
        return _this;
    }
    UIICon.prototype.present = function () {
        var element = element_helper_1.createDivElement();
        element_helper_1.addCSSClasses(element, "icon");
        var svgElement = element_helper_1.createSvgElement(this.name);
        svgElement.setAttribute("class", this.entry.prefix + "svg");
        svgElement.style.fontSize = this.size + "px";
        svgElement.style.color = this.color;
        element.appendChild(svgElement);
        return element;
    };
    __decorate([
        property_decorator_1.isNoEmptyOrNull()
    ], UIICon.prototype, "name", void 0);
    __decorate([
        property_decorator_1.admix(validator_1.checkColor, null)
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
    var _a, _b, _c, _d;
    this.color = (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.color, (_b !== null && _b !== void 0 ? _b : this.color));
    this.size = (_d = (_c = options) === null || _c === void 0 ? void 0 : _c.size, (_d !== null && _d !== void 0 ? _d : this.size));
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
        property_decorator_1.admix({
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
        property_decorator_1.admix({
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
var ui_action_button_1 = __webpack_require__(/*! ../ui-action-button */ "./src/app/component/ui-action-button/index.ts");
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
        _this._windowElement = null;
        _this.id = (_a = options) === null || _a === void 0 ? void 0 : _a.id;
        _this.handlerOptions(options);
        return _this;
    }
    Object.defineProperty(UIWindow.prototype, "windowElement", {
        get: function () {
            return document.getElementById("" + (this.entry.prefix + this.id));
        },
        enumerable: true,
        configurable: true
    });
    UIWindow.prototype.present = function () {
        var element = element_helper_1.createDivElement("" + (this.entry.prefix + this.id));
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
        this.monitorEvent(element);
        this.sendEvent("window:create", { id: this.id });
        return element;
    };
    UIWindow.prototype.appendChild = function (element) {
        var _this = this;
        var actionBarElement = element_helper_1.createDivElement();
        element_helper_1.addCSSClasses(actionBarElement, "action-bar");
        var uiActionButton = new ui_action_button_1.UIActionButton({
            name: "destroy",
            handler: function (ev) { return _this.destroy(); }
        });
        var uiActionButtonElement = uiActionButton.present();
        actionBarElement.appendChild(uiActionButtonElement);
        element.appendChild(actionBarElement);
        if (this.toolBar !== false) {
            var uiToolBar = new ui_tool_bar_1.UIToolBar(this.toolBar);
            var uiToolBarElement = uiToolBar.present();
            element.appendChild(uiToolBarElement);
        }
    };
    UIWindow.prototype.destroy = function () {
        if (this.animate !== false) {
            element_helper_1.addCSSClasses(this.windowElement, "animate-" + this.animate + "-destroy");
        }
        else {
            this.remove();
        }
    };
    UIWindow.prototype.remove = function () {
        element_helper_1.removeDivElement(this.windowElement);
        this.sendEvent("window:destroy", { id: this.id });
    };
    UIWindow.prototype.monitorEvent = function (element) {
        var _this = this;
        if (!element)
            return;
        if (this.animate !== false) {
            element.addEventListener("animationend", function (ev) {
                var animateShowName = "animate-" + _this.animate + "-show";
                if (element_helper_1.hasCSSClass(element, animateShowName)) {
                    element_helper_1.removeCSSClasses(element, animateShowName);
                    _this.sendEvent("window:show", { id: _this.id });
                }
                var animateDestroyName = "animate-" + _this.animate + "-destroy";
                if (element_helper_1.hasCSSClass(element, animateDestroyName)) {
                    _this.remove();
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
        property_decorator_1.admix({
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
        property_decorator_1.admix({
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
function admix() {
    var admixes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        admixes[_i] = arguments[_i];
    }
    return generateDecorator(function (newValue, propertyKey, value) {
        var valueOptions = [];
        var functionOptions = [];
        var regexOptions = [];
        var decorators = [];
        for (var _i = 0, admixes_1 = admixes; _i < admixes_1.length; _i++) {
            var item = admixes_1[_i];
            if (validator_1.checkOfType(item, "string", "bigint", "boolean", "symbol", "undefined") || item === null) {
                valueOptions.push(item);
            }
            else if (validator_1.checkArray(item)) {
                valueOptions.push.apply(valueOptions, item);
            }
            else if (validator_1.checkFunction(item)) {
                functionOptions.push(item);
            }
            else if (validator_1.checkRegExp(item)) {
                regexOptions.push(item);
            }
            else {
                if (decorators.length > 0)
                    exception_1.appError("\u5BF9\u8C61\u9A8C\u8BC1\u4E0D\u80FD\u5B58\u5728\u591A\u4E2A");
                decorators.push(item);
            }
        }
        if (validator_1.checkInValueOptions.apply(void 0, __spreadArrays([newValue], valueOptions)))
            return newValue;
        if (decorators.length > 0) {
            newValue = checkCombine.apply(void 0, __spreadArrays([newValue, decorators[0]], valueOptions));
        }
        if (!validator_1.checkJSONObject(newValue)) {
            functionOptions.map(function (func) {
                if (!func(newValue))
                    exception_1.validateFail("\"" + newValue + "\" \u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684\u53C2\u6570\u503C");
            });
            regexOptions.map(function (reg) {
                if (!reg.test(newValue))
                    exception_1.validateFail("\"" + newValue + "\" \u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684\u53C2\u6570\u503C");
            });
        }
        else {
            newValue = object_helper_1.mergeJSONObject((value !== null && value !== void 0 ? value : {}), newValue);
        }
        return newValue;
    });
}
exports.admix = admix;
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
function removeDivElement(element) {
    if (!element)
        return;
    if (!element.parentElement)
        return;
    element.parentElement.removeChild(element);
}
exports.removeDivElement = removeDivElement;


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
function checkFunction(data) {
    return checkOfType(data, "function");
}
exports.checkFunction = checkFunction;
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
        !checkArray(data) && data !== null;
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
        return uiWindow;
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
        property_decorator_1.admix({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYXl4L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9sYXl4L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xheXgvLi9ub2RlX21vZHVsZXMvc3ZnLWJha2VyLXJ1bnRpbWUvYnJvd3Nlci1zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vbGF5eC8uL25vZGVfbW9kdWxlcy9zdmctc3ByaXRlLWxvYWRlci9ydW50aW1lL2Jyb3dzZXItc3ByaXRlLmJ1aWxkLmpzIiwid2VicGFjazovL2xheXgvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL2xheXgvLi9zcmMvYXBwL2Fzc2V0L2ljb24vZGVzdHJveS5zdmciLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvYXNzZXQvaWNvbi9pY29uLnN2ZyIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9hc3NldC9pY29uL2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9zcmMvYXBwL2Fzc2V0L3N0eWxlL2FjdGlvbi1iYXIuY3NzPzViNTAiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvYXNzZXQvc3R5bGUvYW5pbWF0ZS5jc3M/OWIzZiIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9hc3NldC9zdHlsZS9jb21tb24uY3NzPzM5NDYiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvYXNzZXQvc3R5bGUvaWNvbi5jc3M/ODFlNiIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9hc3NldC9zdHlsZS9pbmRleC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9hc3NldC9zdHlsZS90b29sLWJhci5jc3M/ZTlkYiIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9hc3NldC9zdHlsZS93aW5kb3cuY3NzPzFhNmUiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvY29tcG9uZW50L2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9zcmMvYXBwL2NvbXBvbmVudC91aS1hY3Rpb24tYnV0dG9uL2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9zcmMvYXBwL2NvbXBvbmVudC91aS1hY3Rpb24tYnV0dG9uL3BhcnRpYWwudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvY29tcG9uZW50L3VpLWljb24vY29uc3QudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvY29tcG9uZW50L3VpLWljb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvY29tcG9uZW50L3VpLWljb24vcGFydGlhbC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9jb21wb25lbnQvdWktdG9vbC1iYXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvY29tcG9uZW50L3VpLXRvb2wtYmFyL3BhcnRpYWwudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvY29tcG9uZW50L3VpLXdpbmRvdy9jb25zdC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9jb21wb25lbnQvdWktd2luZG93L2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9zcmMvYXBwL2NvbXBvbmVudC91aS13aW5kb3cvcGFydGlhbC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9jb3JlL2RlY29yYXRvci9wcm9wZXJ0eS1kZWNvcmF0b3IudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvY29yZS9ldmVudC1idXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvY29yZS9leGNlcHRpb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvY29yZS9oZWxwZXIvZWxlbWVudC1oZWxwZXIudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvY29yZS9oZWxwZXIvb2JqZWN0LWhlbHBlci50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9jb3JlL3ZhbGlkYXRvci9pbmRleC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9lbnRyeS9jb25zdC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9lbnRyeS9pbmRleC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9lbnRyeS9wYXJ0aWFsLnRzIiwid2VicGFjazovL2xheXgvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLENBQUMsS0FBNEQ7QUFDN0QsQ0FBQyxTQUN3QztBQUN6QyxDQUFDLHFCQUFxQjs7QUFFdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7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Q0osQ0FBQzt5Q0FvQkE7SUF5RE4sWUFBQztDQUFBO0FBbkpZLHNCQUFLOzs7Ozs7Ozs7Ozs7Ozs7QUN6QmxCLFNBQWdCLGNBQWMsQ0FBYyxPQUFvQjs7SUFDNUQsSUFBSSxDQUFDLElBQUksZUFBRyxPQUFPLDBDQUFFLElBQUksZ0RBQXlCLENBQUM7SUFDbkQsSUFBSSxDQUFDLFdBQVcsZUFBRyxPQUFPLDBDQUFFLFdBQVcsdUNBQUksSUFBSSxDQUFDLFdBQVcsR0FBQztJQUM1RCxJQUFJLENBQUMsTUFBTSxTQUFHLE1BQWUsT0FBTywwQ0FBRSxNQUFNLHVDQUFJLElBQUksQ0FBQyxNQUFNLEdBQUM7QUFDaEUsQ0FBQztBQUpELHdDQUlDOzs7Ozs7Ozs7Ozs7Ozs7QUNiRCxpRkFBb0M7QUFNcEMsU0FBUyxLQUFLO0lBQ1YsSUFBTSxLQUFLLEdBQUcsYUFBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBRWxDLElBQU0sVUFBVSxHQUFlLFVBQVUsT0FBb0I7UUFDekQsYUFBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDLENBQUM7SUFFRixVQUFVLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUM7SUFDekIsVUFBVSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQ25DLFVBQVUsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztJQUU3QixPQUFPLFVBQVUsQ0FBQztBQUN0QixDQUFDO0FBRUQsa0JBQWUsS0FBSyxFQUFFLENBQUMiLCJmaWxlIjoibGF5eC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImxheXhcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wibGF5eFwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuXHR0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG5cdHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG5cdChnbG9iYWwuQnJvd3NlclNwcml0ZVN5bWJvbCA9IGZhY3RvcnkoKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxudmFyIFNwcml0ZVN5bWJvbCA9IGZ1bmN0aW9uIFNwcml0ZVN5bWJvbChyZWYpIHtcbiAgdmFyIGlkID0gcmVmLmlkO1xuICB2YXIgdmlld0JveCA9IHJlZi52aWV3Qm94O1xuICB2YXIgY29udGVudCA9IHJlZi5jb250ZW50O1xuXG4gIHRoaXMuaWQgPSBpZDtcbiAgdGhpcy52aWV3Qm94ID0gdmlld0JveDtcbiAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbn07XG5cbi8qKlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5TcHJpdGVTeW1ib2wucHJvdG90eXBlLnN0cmluZ2lmeSA9IGZ1bmN0aW9uIHN0cmluZ2lmeSAoKSB7XG4gIHJldHVybiB0aGlzLmNvbnRlbnQ7XG59O1xuXG4vKipcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuU3ByaXRlU3ltYm9sLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nICgpIHtcbiAgcmV0dXJuIHRoaXMuc3RyaW5naWZ5KCk7XG59O1xuXG5TcHJpdGVTeW1ib2wucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95ICgpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICBbJ2lkJywgJ3ZpZXdCb3gnLCAnY29udGVudCddLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHsgcmV0dXJuIGRlbGV0ZSB0aGlzJDFbcHJvcF07IH0pO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29udGVudFxuICogQHJldHVybiB7RWxlbWVudH1cbiAqL1xudmFyIHBhcnNlID0gZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgdmFyIGhhc0ltcG9ydE5vZGUgPSAhIWRvY3VtZW50LmltcG9ydE5vZGU7XG4gIHZhciBkb2MgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKGNvbnRlbnQsICdpbWFnZS9zdmcreG1sJykuZG9jdW1lbnRFbGVtZW50O1xuXG4gIC8qKlxuICAgKiBGaXggZm9yIGJyb3dzZXIgd2hpY2ggYXJlIHRocm93aW5nIFdyb25nRG9jdW1lbnRFcnJvclxuICAgKiBpZiB5b3UgaW5zZXJ0IGFuIGVsZW1lbnQgd2hpY2ggaXMgbm90IHBhcnQgb2YgdGhlIGRvY3VtZW50XG4gICAqIEBzZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzk4NjUxOS80NjI0NDAzXG4gICAqL1xuICBpZiAoaGFzSW1wb3J0Tm9kZSkge1xuICAgIHJldHVybiBkb2N1bWVudC5pbXBvcnROb2RlKGRvYywgdHJ1ZSk7XG4gIH1cblxuICByZXR1cm4gZG9jO1xufTtcblxudmFyIGNvbW1vbmpzR2xvYmFsID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB7fTtcblxuXG5cblxuXG5mdW5jdGlvbiBjcmVhdGVDb21tb25qc01vZHVsZShmbiwgbW9kdWxlKSB7XG5cdHJldHVybiBtb2R1bGUgPSB7IGV4cG9ydHM6IHt9IH0sIGZuKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMpLCBtb2R1bGUuZXhwb3J0cztcbn1cblxudmFyIGRlZXBtZXJnZSA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMpIHtcbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuICAgIGlmICh0eXBlb2YgdW5kZWZpbmVkID09PSAnZnVuY3Rpb24nICYmIHVuZGVmaW5lZC5hbWQpIHtcbiAgICAgICAgdW5kZWZpbmVkKGZhY3RvcnkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICAgIH1cbn0oY29tbW9uanNHbG9iYWwsIGZ1bmN0aW9uICgpIHtcblxuZnVuY3Rpb24gaXNNZXJnZWFibGVPYmplY3QodmFsKSB7XG4gICAgdmFyIG5vbk51bGxPYmplY3QgPSB2YWwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCc7XG5cbiAgICByZXR1cm4gbm9uTnVsbE9iamVjdFxuICAgICAgICAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKSAhPT0gJ1tvYmplY3QgUmVnRXhwXSdcbiAgICAgICAgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbCkgIT09ICdbb2JqZWN0IERhdGVdJ1xufVxuXG5mdW5jdGlvbiBlbXB0eVRhcmdldCh2YWwpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWwpID8gW10gOiB7fVxufVxuXG5mdW5jdGlvbiBjbG9uZUlmTmVjZXNzYXJ5KHZhbHVlLCBvcHRpb25zQXJndW1lbnQpIHtcbiAgICB2YXIgY2xvbmUgPSBvcHRpb25zQXJndW1lbnQgJiYgb3B0aW9uc0FyZ3VtZW50LmNsb25lID09PSB0cnVlO1xuICAgIHJldHVybiAoY2xvbmUgJiYgaXNNZXJnZWFibGVPYmplY3QodmFsdWUpKSA/IGRlZXBtZXJnZShlbXB0eVRhcmdldCh2YWx1ZSksIHZhbHVlLCBvcHRpb25zQXJndW1lbnQpIDogdmFsdWVcbn1cblxuZnVuY3Rpb24gZGVmYXVsdEFycmF5TWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnNBcmd1bWVudCkge1xuICAgIHZhciBkZXN0aW5hdGlvbiA9IHRhcmdldC5zbGljZSgpO1xuICAgIHNvdXJjZS5mb3JFYWNoKGZ1bmN0aW9uKGUsIGkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkZXN0aW5hdGlvbltpXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2ldID0gY2xvbmVJZk5lY2Vzc2FyeShlLCBvcHRpb25zQXJndW1lbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzTWVyZ2VhYmxlT2JqZWN0KGUpKSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltpXSA9IGRlZXBtZXJnZSh0YXJnZXRbaV0sIGUsIG9wdGlvbnNBcmd1bWVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LmluZGV4T2YoZSkgPT09IC0xKSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbi5wdXNoKGNsb25lSWZOZWNlc3NhcnkoZSwgb3B0aW9uc0FyZ3VtZW50KSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZGVzdGluYXRpb25cbn1cblxuZnVuY3Rpb24gbWVyZ2VPYmplY3QodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnNBcmd1bWVudCkge1xuICAgIHZhciBkZXN0aW5hdGlvbiA9IHt9O1xuICAgIGlmIChpc01lcmdlYWJsZU9iamVjdCh0YXJnZXQpKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHRhcmdldCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltrZXldID0gY2xvbmVJZk5lY2Vzc2FyeSh0YXJnZXRba2V5XSwgb3B0aW9uc0FyZ3VtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmICghaXNNZXJnZWFibGVPYmplY3Qoc291cmNlW2tleV0pIHx8ICF0YXJnZXRba2V5XSkge1xuICAgICAgICAgICAgZGVzdGluYXRpb25ba2V5XSA9IGNsb25lSWZOZWNlc3Nhcnkoc291cmNlW2tleV0sIG9wdGlvbnNBcmd1bWVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltrZXldID0gZGVlcG1lcmdlKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSwgb3B0aW9uc0FyZ3VtZW50KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBkZXN0aW5hdGlvblxufVxuXG5mdW5jdGlvbiBkZWVwbWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnNBcmd1bWVudCkge1xuICAgIHZhciBhcnJheSA9IEFycmF5LmlzQXJyYXkoc291cmNlKTtcbiAgICB2YXIgb3B0aW9ucyA9IG9wdGlvbnNBcmd1bWVudCB8fCB7IGFycmF5TWVyZ2U6IGRlZmF1bHRBcnJheU1lcmdlIH07XG4gICAgdmFyIGFycmF5TWVyZ2UgPSBvcHRpb25zLmFycmF5TWVyZ2UgfHwgZGVmYXVsdEFycmF5TWVyZ2U7XG5cbiAgICBpZiAoYXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodGFyZ2V0KSA/IGFycmF5TWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnNBcmd1bWVudCkgOiBjbG9uZUlmTmVjZXNzYXJ5KHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBtZXJnZU9iamVjdCh0YXJnZXQsIHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KVxuICAgIH1cbn1cblxuZGVlcG1lcmdlLmFsbCA9IGZ1bmN0aW9uIGRlZXBtZXJnZUFsbChhcnJheSwgb3B0aW9uc0FyZ3VtZW50KSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSB8fCBhcnJheS5sZW5ndGggPCAyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZmlyc3QgYXJndW1lbnQgc2hvdWxkIGJlIGFuIGFycmF5IHdpdGggYXQgbGVhc3QgdHdvIGVsZW1lbnRzJylcbiAgICB9XG5cbiAgICAvLyB3ZSBhcmUgc3VyZSB0aGVyZSBhcmUgYXQgbGVhc3QgMiB2YWx1ZXMsIHNvIGl0IGlzIHNhZmUgdG8gaGF2ZSBubyBpbml0aWFsIHZhbHVlXG4gICAgcmV0dXJuIGFycmF5LnJlZHVjZShmdW5jdGlvbihwcmV2LCBuZXh0KSB7XG4gICAgICAgIHJldHVybiBkZWVwbWVyZ2UocHJldiwgbmV4dCwgb3B0aW9uc0FyZ3VtZW50KVxuICAgIH0pXG59O1xuXG5yZXR1cm4gZGVlcG1lcmdlXG5cbn0pKTtcbn0pO1xuXG52YXIgbmFtZXNwYWNlc18xID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xudmFyIG5hbWVzcGFjZXMgPSB7XG4gIHN2Zzoge1xuICAgIG5hbWU6ICd4bWxucycsXG4gICAgdXJpOiAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gIH0sXG4gIHhsaW5rOiB7XG4gICAgbmFtZTogJ3htbG5zOnhsaW5rJyxcbiAgICB1cmk6ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJ1xuICB9XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBuYW1lc3BhY2VzO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG59KTtcblxuLyoqXG4gKiBAcGFyYW0ge09iamVjdH0gYXR0cnNcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xudmFyIG9iamVjdFRvQXR0cnNTdHJpbmcgPSBmdW5jdGlvbiAoYXR0cnMpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGF0dHJzKS5tYXAoZnVuY3Rpb24gKGF0dHIpIHtcbiAgICB2YXIgdmFsdWUgPSBhdHRyc1thdHRyXS50b1N0cmluZygpLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKTtcbiAgICByZXR1cm4gKGF0dHIgKyBcIj1cXFwiXCIgKyB2YWx1ZSArIFwiXFxcIlwiKTtcbiAgfSkuam9pbignICcpO1xufTtcblxudmFyIHN2ZyA9IG5hbWVzcGFjZXNfMS5zdmc7XG52YXIgeGxpbmsgPSBuYW1lc3BhY2VzXzEueGxpbms7XG5cbnZhciBkZWZhdWx0QXR0cnMgPSB7fTtcbmRlZmF1bHRBdHRyc1tzdmcubmFtZV0gPSBzdmcudXJpO1xuZGVmYXVsdEF0dHJzW3hsaW5rLm5hbWVdID0geGxpbmsudXJpO1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29udGVudF1cbiAqIEBwYXJhbSB7T2JqZWN0fSBbYXR0cmlidXRlc11cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xudmFyIHdyYXBJblN2Z1N0cmluZyA9IGZ1bmN0aW9uIChjb250ZW50LCBhdHRyaWJ1dGVzKSB7XG4gIGlmICggY29udGVudCA9PT0gdm9pZCAwICkgY29udGVudCA9ICcnO1xuXG4gIHZhciBhdHRycyA9IGRlZXBtZXJnZShkZWZhdWx0QXR0cnMsIGF0dHJpYnV0ZXMgfHwge30pO1xuICB2YXIgYXR0cnNSZW5kZXJlZCA9IG9iamVjdFRvQXR0cnNTdHJpbmcoYXR0cnMpO1xuICByZXR1cm4gKFwiPHN2ZyBcIiArIGF0dHJzUmVuZGVyZWQgKyBcIj5cIiArIGNvbnRlbnQgKyBcIjwvc3ZnPlwiKTtcbn07XG5cbnZhciBCcm93c2VyU3ByaXRlU3ltYm9sID0gKGZ1bmN0aW9uIChTcHJpdGVTeW1ib2wkJDEpIHtcbiAgZnVuY3Rpb24gQnJvd3NlclNwcml0ZVN5bWJvbCAoKSB7XG4gICAgU3ByaXRlU3ltYm9sJCQxLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBpZiAoIFNwcml0ZVN5bWJvbCQkMSApIEJyb3dzZXJTcHJpdGVTeW1ib2wuX19wcm90b19fID0gU3ByaXRlU3ltYm9sJCQxO1xuICBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIFNwcml0ZVN5bWJvbCQkMSAmJiBTcHJpdGVTeW1ib2wkJDEucHJvdG90eXBlICk7XG4gIEJyb3dzZXJTcHJpdGVTeW1ib2wucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQnJvd3NlclNwcml0ZVN5bWJvbDtcblxuICB2YXIgcHJvdG90eXBlQWNjZXNzb3JzID0geyBpc01vdW50ZWQ6IHt9IH07XG5cbiAgcHJvdG90eXBlQWNjZXNzb3JzLmlzTW91bnRlZC5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICEhdGhpcy5ub2RlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IG5vZGVcbiAgICogQHJldHVybiB7QnJvd3NlclNwcml0ZVN5bWJvbH1cbiAgICovXG4gIEJyb3dzZXJTcHJpdGVTeW1ib2wuY3JlYXRlRnJvbUV4aXN0aW5nTm9kZSA9IGZ1bmN0aW9uIGNyZWF0ZUZyb21FeGlzdGluZ05vZGUgKG5vZGUpIHtcbiAgICByZXR1cm4gbmV3IEJyb3dzZXJTcHJpdGVTeW1ib2woe1xuICAgICAgaWQ6IG5vZGUuZ2V0QXR0cmlidXRlKCdpZCcpLFxuICAgICAgdmlld0JveDogbm9kZS5nZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnKSxcbiAgICAgIGNvbnRlbnQ6IG5vZGUub3V0ZXJIVE1MXG4gICAgfSk7XG4gIH07XG5cbiAgQnJvd3NlclNwcml0ZVN5bWJvbC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3kgKCkge1xuICAgIGlmICh0aGlzLmlzTW91bnRlZCkge1xuICAgICAgdGhpcy51bm1vdW50KCk7XG4gICAgfVxuICAgIFNwcml0ZVN5bWJvbCQkMS5wcm90b3R5cGUuZGVzdHJveS5jYWxsKHRoaXMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR8c3RyaW5nfSB0YXJnZXRcbiAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICovXG4gIEJyb3dzZXJTcHJpdGVTeW1ib2wucHJvdG90eXBlLm1vdW50ID0gZnVuY3Rpb24gbW91bnQgKHRhcmdldCkge1xuICAgIGlmICh0aGlzLmlzTW91bnRlZCkge1xuICAgICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgICB9XG5cbiAgICB2YXIgbW91bnRUYXJnZXQgPSB0eXBlb2YgdGFyZ2V0ID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KSA6IHRhcmdldDtcbiAgICB2YXIgbm9kZSA9IHRoaXMucmVuZGVyKCk7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcblxuICAgIG1vdW50VGFyZ2V0LmFwcGVuZENoaWxkKG5vZGUpO1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH07XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAqL1xuICBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIgKCkge1xuICAgIHZhciBjb250ZW50ID0gdGhpcy5zdHJpbmdpZnkoKTtcbiAgICByZXR1cm4gcGFyc2Uod3JhcEluU3ZnU3RyaW5nKGNvbnRlbnQpKS5jaGlsZE5vZGVzWzBdO1xuICB9O1xuXG4gIEJyb3dzZXJTcHJpdGVTeW1ib2wucHJvdG90eXBlLnVubW91bnQgPSBmdW5jdGlvbiB1bm1vdW50ICgpIHtcbiAgICB0aGlzLm5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLm5vZGUpO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZSwgcHJvdG90eXBlQWNjZXNzb3JzICk7XG5cbiAgcmV0dXJuIEJyb3dzZXJTcHJpdGVTeW1ib2w7XG59KFNwcml0ZVN5bWJvbCkpO1xuXG5yZXR1cm4gQnJvd3NlclNwcml0ZVN5bWJvbDtcblxufSkpKTtcbiIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG5cdHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcblx0dHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcblx0KGdsb2JhbC5Ccm93c2VyU3ByaXRlID0gZmFjdG9yeSgpKTtcbn0odGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG52YXIgY29tbW9uanNHbG9iYWwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHt9O1xuXG5cblxuXG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZuLCBtb2R1bGUpIHtcblx0cmV0dXJuIG1vZHVsZSA9IHsgZXhwb3J0czoge30gfSwgZm4obW9kdWxlLCBtb2R1bGUuZXhwb3J0cyksIG1vZHVsZS5leHBvcnRzO1xufVxuXG52YXIgZGVlcG1lcmdlID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG4gICAgaWYgKHR5cGVvZiB1bmRlZmluZWQgPT09ICdmdW5jdGlvbicgJiYgdW5kZWZpbmVkLmFtZCkge1xuICAgICAgICB1bmRlZmluZWQoZmFjdG9yeSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gICAgfVxufShjb21tb25qc0dsb2JhbCwgZnVuY3Rpb24gKCkge1xuXG5mdW5jdGlvbiBpc01lcmdlYWJsZU9iamVjdCh2YWwpIHtcbiAgICB2YXIgbm9uTnVsbE9iamVjdCA9IHZhbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0JztcblxuICAgIHJldHVybiBub25OdWxsT2JqZWN0XG4gICAgICAgICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWwpICE9PSAnW29iamVjdCBSZWdFeHBdJ1xuICAgICAgICAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKSAhPT0gJ1tvYmplY3QgRGF0ZV0nXG59XG5cbmZ1bmN0aW9uIGVtcHR5VGFyZ2V0KHZhbCkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbCkgPyBbXSA6IHt9XG59XG5cbmZ1bmN0aW9uIGNsb25lSWZOZWNlc3NhcnkodmFsdWUsIG9wdGlvbnNBcmd1bWVudCkge1xuICAgIHZhciBjbG9uZSA9IG9wdGlvbnNBcmd1bWVudCAmJiBvcHRpb25zQXJndW1lbnQuY2xvbmUgPT09IHRydWU7XG4gICAgcmV0dXJuIChjbG9uZSAmJiBpc01lcmdlYWJsZU9iamVjdCh2YWx1ZSkpID8gZGVlcG1lcmdlKGVtcHR5VGFyZ2V0KHZhbHVlKSwgdmFsdWUsIG9wdGlvbnNBcmd1bWVudCkgOiB2YWx1ZVxufVxuXG5mdW5jdGlvbiBkZWZhdWx0QXJyYXlNZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KSB7XG4gICAgdmFyIGRlc3RpbmF0aW9uID0gdGFyZ2V0LnNsaWNlKCk7XG4gICAgc291cmNlLmZvckVhY2goZnVuY3Rpb24oZSwgaSkge1xuICAgICAgICBpZiAodHlwZW9mIGRlc3RpbmF0aW9uW2ldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgZGVzdGluYXRpb25baV0gPSBjbG9uZUlmTmVjZXNzYXJ5KGUsIG9wdGlvbnNBcmd1bWVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNNZXJnZWFibGVPYmplY3QoZSkpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2ldID0gZGVlcG1lcmdlKHRhcmdldFtpXSwgZSwgb3B0aW9uc0FyZ3VtZW50KTtcbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQuaW5kZXhPZihlKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uLnB1c2goY2xvbmVJZk5lY2Vzc2FyeShlLCBvcHRpb25zQXJndW1lbnQpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBkZXN0aW5hdGlvblxufVxuXG5mdW5jdGlvbiBtZXJnZU9iamVjdCh0YXJnZXQsIHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KSB7XG4gICAgdmFyIGRlc3RpbmF0aW9uID0ge307XG4gICAgaWYgKGlzTWVyZ2VhYmxlT2JqZWN0KHRhcmdldCkpIHtcbiAgICAgICAgT2JqZWN0LmtleXModGFyZ2V0KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2tleV0gPSBjbG9uZUlmTmVjZXNzYXJ5KHRhcmdldFtrZXldLCBvcHRpb25zQXJndW1lbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgaWYgKCFpc01lcmdlYWJsZU9iamVjdChzb3VyY2Vba2V5XSkgfHwgIXRhcmdldFtrZXldKSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltrZXldID0gY2xvbmVJZk5lY2Vzc2FyeShzb3VyY2Vba2V5XSwgb3B0aW9uc0FyZ3VtZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2tleV0gPSBkZWVwbWVyZ2UodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldLCBvcHRpb25zQXJndW1lbnQpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGRlc3RpbmF0aW9uXG59XG5cbmZ1bmN0aW9uIGRlZXBtZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KSB7XG4gICAgdmFyIGFycmF5ID0gQXJyYXkuaXNBcnJheShzb3VyY2UpO1xuICAgIHZhciBvcHRpb25zID0gb3B0aW9uc0FyZ3VtZW50IHx8IHsgYXJyYXlNZXJnZTogZGVmYXVsdEFycmF5TWVyZ2UgfTtcbiAgICB2YXIgYXJyYXlNZXJnZSA9IG9wdGlvbnMuYXJyYXlNZXJnZSB8fCBkZWZhdWx0QXJyYXlNZXJnZTtcblxuICAgIGlmIChhcnJheSkge1xuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh0YXJnZXQpID8gYXJyYXlNZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KSA6IGNsb25lSWZOZWNlc3Nhcnkoc291cmNlLCBvcHRpb25zQXJndW1lbnQpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG1lcmdlT2JqZWN0KHRhcmdldCwgc291cmNlLCBvcHRpb25zQXJndW1lbnQpXG4gICAgfVxufVxuXG5kZWVwbWVyZ2UuYWxsID0gZnVuY3Rpb24gZGVlcG1lcmdlQWxsKGFycmF5LCBvcHRpb25zQXJndW1lbnQpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpIHx8IGFycmF5Lmxlbmd0aCA8IDIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmaXJzdCBhcmd1bWVudCBzaG91bGQgYmUgYW4gYXJyYXkgd2l0aCBhdCBsZWFzdCB0d28gZWxlbWVudHMnKVxuICAgIH1cblxuICAgIC8vIHdlIGFyZSBzdXJlIHRoZXJlIGFyZSBhdCBsZWFzdCAyIHZhbHVlcywgc28gaXQgaXMgc2FmZSB0byBoYXZlIG5vIGluaXRpYWwgdmFsdWVcbiAgICByZXR1cm4gYXJyYXkucmVkdWNlKGZ1bmN0aW9uKHByZXYsIG5leHQpIHtcbiAgICAgICAgcmV0dXJuIGRlZXBtZXJnZShwcmV2LCBuZXh0LCBvcHRpb25zQXJndW1lbnQpXG4gICAgfSlcbn07XG5cbnJldHVybiBkZWVwbWVyZ2VcblxufSkpO1xufSk7XG5cbi8vICAgICAgXG4vLyBBbiBldmVudCBoYW5kbGVyIGNhbiB0YWtlIGFuIG9wdGlvbmFsIGV2ZW50IGFyZ3VtZW50XG4vLyBhbmQgc2hvdWxkIG5vdCByZXR1cm4gYSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4vLyBBbiBhcnJheSBvZiBhbGwgY3VycmVudGx5IHJlZ2lzdGVyZWQgZXZlbnQgaGFuZGxlcnMgZm9yIGEgdHlwZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbi8vIEEgbWFwIG9mIGV2ZW50IHR5cGVzIGFuZCB0aGVpciBjb3JyZXNwb25kaW5nIGV2ZW50IGhhbmRsZXJzLlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBcblxuLyoqIE1pdHQ6IFRpbnkgKH4yMDBiKSBmdW5jdGlvbmFsIGV2ZW50IGVtaXR0ZXIgLyBwdWJzdWIuXG4gKiAgQG5hbWUgbWl0dFxuICogIEByZXR1cm5zIHtNaXR0fVxuICovXG5mdW5jdGlvbiBtaXR0KGFsbCAgICAgICAgICAgICAgICAgKSB7XG5cdGFsbCA9IGFsbCB8fCBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG5cdHJldHVybiB7XG5cdFx0LyoqXG5cdFx0ICogUmVnaXN0ZXIgYW4gZXZlbnQgaGFuZGxlciBmb3IgdGhlIGdpdmVuIHR5cGUuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0gIHtTdHJpbmd9IHR5cGVcdFR5cGUgb2YgZXZlbnQgdG8gbGlzdGVuIGZvciwgb3IgYFwiKlwiYCBmb3IgYWxsIGV2ZW50c1xuXHRcdCAqIEBwYXJhbSAge0Z1bmN0aW9ufSBoYW5kbGVyIEZ1bmN0aW9uIHRvIGNhbGwgaW4gcmVzcG9uc2UgdG8gZ2l2ZW4gZXZlbnRcblx0XHQgKiBAbWVtYmVyT2YgbWl0dFxuXHRcdCAqL1xuXHRcdG9uOiBmdW5jdGlvbiBvbih0eXBlICAgICAgICAsIGhhbmRsZXIgICAgICAgICAgICAgICkge1xuXHRcdFx0KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBSZW1vdmUgYW4gZXZlbnQgaGFuZGxlciBmb3IgdGhlIGdpdmVuIHR5cGUuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0gIHtTdHJpbmd9IHR5cGVcdFR5cGUgb2YgZXZlbnQgdG8gdW5yZWdpc3RlciBgaGFuZGxlcmAgZnJvbSwgb3IgYFwiKlwiYFxuXHRcdCAqIEBwYXJhbSAge0Z1bmN0aW9ufSBoYW5kbGVyIEhhbmRsZXIgZnVuY3Rpb24gdG8gcmVtb3ZlXG5cdFx0ICogQG1lbWJlck9mIG1pdHRcblx0XHQgKi9cblx0XHRvZmY6IGZ1bmN0aW9uIG9mZih0eXBlICAgICAgICAsIGhhbmRsZXIgICAgICAgICAgICAgICkge1xuXHRcdFx0aWYgKGFsbFt0eXBlXSkge1xuXHRcdFx0XHRhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogSW52b2tlIGFsbCBoYW5kbGVycyBmb3IgdGhlIGdpdmVuIHR5cGUuXG5cdFx0ICogSWYgcHJlc2VudCwgYFwiKlwiYCBoYW5kbGVycyBhcmUgaW52b2tlZCBhZnRlciB0eXBlLW1hdGNoZWQgaGFuZGxlcnMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSAgVGhlIGV2ZW50IHR5cGUgdG8gaW52b2tlXG5cdFx0ICogQHBhcmFtIHtBbnl9IFtldnRdICBBbnkgdmFsdWUgKG9iamVjdCBpcyByZWNvbW1lbmRlZCBhbmQgcG93ZXJmdWwpLCBwYXNzZWQgdG8gZWFjaCBoYW5kbGVyXG5cdFx0ICogQG1lbWJlcm9mIG1pdHRcblx0XHQgKi9cblx0XHRlbWl0OiBmdW5jdGlvbiBlbWl0KHR5cGUgICAgICAgICwgZXZ0ICAgICApIHtcblx0XHRcdChhbGxbdHlwZV0gfHwgW10pLm1hcChmdW5jdGlvbiAoaGFuZGxlcikgeyBoYW5kbGVyKGV2dCk7IH0pO1xuXHRcdFx0KGFsbFsnKiddIHx8IFtdKS5tYXAoZnVuY3Rpb24gKGhhbmRsZXIpIHsgaGFuZGxlcih0eXBlLCBldnQpOyB9KTtcblx0XHR9XG5cdH07XG59XG5cbnZhciBuYW1lc3BhY2VzXzEgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlLCBleHBvcnRzKSB7XG52YXIgbmFtZXNwYWNlcyA9IHtcbiAgc3ZnOiB7XG4gICAgbmFtZTogJ3htbG5zJyxcbiAgICB1cmk6ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgfSxcbiAgeGxpbms6IHtcbiAgICBuYW1lOiAneG1sbnM6eGxpbmsnLFxuICAgIHVyaTogJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnXG4gIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG5hbWVzcGFjZXM7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbn0pO1xuXG4vKipcbiAqIEBwYXJhbSB7T2JqZWN0fSBhdHRyc1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG52YXIgb2JqZWN0VG9BdHRyc1N0cmluZyA9IGZ1bmN0aW9uIChhdHRycykge1xuICByZXR1cm4gT2JqZWN0LmtleXMoYXR0cnMpLm1hcChmdW5jdGlvbiAoYXR0cikge1xuICAgIHZhciB2YWx1ZSA9IGF0dHJzW2F0dHJdLnRvU3RyaW5nKCkucmVwbGFjZSgvXCIvZywgJyZxdW90OycpO1xuICAgIHJldHVybiAoYXR0ciArIFwiPVxcXCJcIiArIHZhbHVlICsgXCJcXFwiXCIpO1xuICB9KS5qb2luKCcgJyk7XG59O1xuXG52YXIgc3ZnID0gbmFtZXNwYWNlc18xLnN2ZztcbnZhciB4bGluayA9IG5hbWVzcGFjZXNfMS54bGluaztcblxudmFyIGRlZmF1bHRBdHRycyA9IHt9O1xuZGVmYXVsdEF0dHJzW3N2Zy5uYW1lXSA9IHN2Zy51cmk7XG5kZWZhdWx0QXR0cnNbeGxpbmsubmFtZV0gPSB4bGluay51cmk7XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb250ZW50XVxuICogQHBhcmFtIHtPYmplY3R9IFthdHRyaWJ1dGVzXVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG52YXIgd3JhcEluU3ZnU3RyaW5nID0gZnVuY3Rpb24gKGNvbnRlbnQsIGF0dHJpYnV0ZXMpIHtcbiAgaWYgKCBjb250ZW50ID09PSB2b2lkIDAgKSBjb250ZW50ID0gJyc7XG5cbiAgdmFyIGF0dHJzID0gZGVlcG1lcmdlKGRlZmF1bHRBdHRycywgYXR0cmlidXRlcyB8fCB7fSk7XG4gIHZhciBhdHRyc1JlbmRlcmVkID0gb2JqZWN0VG9BdHRyc1N0cmluZyhhdHRycyk7XG4gIHJldHVybiAoXCI8c3ZnIFwiICsgYXR0cnNSZW5kZXJlZCArIFwiPlwiICsgY29udGVudCArIFwiPC9zdmc+XCIpO1xufTtcblxudmFyIHN2ZyQxID0gbmFtZXNwYWNlc18xLnN2ZztcbnZhciB4bGluayQxID0gbmFtZXNwYWNlc18xLnhsaW5rO1xuXG52YXIgZGVmYXVsdENvbmZpZyA9IHtcbiAgYXR0cnM6ICggb2JqID0ge1xuICAgIHN0eWxlOiBbJ3Bvc2l0aW9uOiBhYnNvbHV0ZScsICd3aWR0aDogMCcsICdoZWlnaHQ6IDAnXS5qb2luKCc7ICcpXG4gIH0sIG9ialtzdmckMS5uYW1lXSA9IHN2ZyQxLnVyaSwgb2JqW3hsaW5rJDEubmFtZV0gPSB4bGluayQxLnVyaSwgb2JqIClcbn07XG52YXIgb2JqO1xuXG52YXIgU3ByaXRlID0gZnVuY3Rpb24gU3ByaXRlKGNvbmZpZykge1xuICB0aGlzLmNvbmZpZyA9IGRlZXBtZXJnZShkZWZhdWx0Q29uZmlnLCBjb25maWcgfHwge30pO1xuICB0aGlzLnN5bWJvbHMgPSBbXTtcbn07XG5cbi8qKlxuICogQWRkIG5ldyBzeW1ib2wuIElmIHN5bWJvbCB3aXRoIHRoZSBzYW1lIGlkIGV4aXN0cyBpdCB3aWxsIGJlIHJlcGxhY2VkLlxuICogQHBhcmFtIHtTcHJpdGVTeW1ib2x9IHN5bWJvbFxuICogQHJldHVybiB7Ym9vbGVhbn0gYHRydWVgIC0gc3ltYm9sIHdhcyBhZGRlZCwgYGZhbHNlYCAtIHJlcGxhY2VkXG4gKi9cblNwcml0ZS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gYWRkIChzeW1ib2wpIHtcbiAgdmFyIHJlZiA9IHRoaXM7XG4gICAgdmFyIHN5bWJvbHMgPSByZWYuc3ltYm9scztcbiAgdmFyIGV4aXN0aW5nID0gdGhpcy5maW5kKHN5bWJvbC5pZCk7XG5cbiAgaWYgKGV4aXN0aW5nKSB7XG4gICAgc3ltYm9sc1tzeW1ib2xzLmluZGV4T2YoZXhpc3RpbmcpXSA9IHN5bWJvbDtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzeW1ib2xzLnB1c2goc3ltYm9sKTtcbiAgcmV0dXJuIHRydWU7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBzeW1ib2wgJiBkZXN0cm95IGl0XG4gKiBAcGFyYW0ge3N0cmluZ30gaWRcbiAqIEByZXR1cm4ge2Jvb2xlYW59IGB0cnVlYCAtIHN5bWJvbCB3YXMgZm91bmQgJiBzdWNjZXNzZnVsbHkgZGVzdHJveWVkLCBgZmFsc2VgIC0gb3RoZXJ3aXNlXG4gKi9cblNwcml0ZS5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlIChpZCkge1xuICB2YXIgcmVmID0gdGhpcztcbiAgICB2YXIgc3ltYm9scyA9IHJlZi5zeW1ib2xzO1xuICB2YXIgc3ltYm9sID0gdGhpcy5maW5kKGlkKTtcblxuICBpZiAoc3ltYm9sKSB7XG4gICAgc3ltYm9scy5zcGxpY2Uoc3ltYm9scy5pbmRleE9mKHN5bWJvbCksIDEpO1xuICAgIHN5bWJvbC5kZXN0cm95KCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBpZFxuICogQHJldHVybiB7U3ByaXRlU3ltYm9sfG51bGx9XG4gKi9cblNwcml0ZS5wcm90b3R5cGUuZmluZCA9IGZ1bmN0aW9uIGZpbmQgKGlkKSB7XG4gIHJldHVybiB0aGlzLnN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzKSB7IHJldHVybiBzLmlkID09PSBpZDsgfSlbMF0gfHwgbnVsbDtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGlkXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5TcHJpdGUucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIGhhcyAoaWQpIHtcbiAgcmV0dXJuIHRoaXMuZmluZChpZCkgIT09IG51bGw7XG59O1xuXG4vKipcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuU3ByaXRlLnByb3RvdHlwZS5zdHJpbmdpZnkgPSBmdW5jdGlvbiBzdHJpbmdpZnkgKCkge1xuICB2YXIgcmVmID0gdGhpcy5jb25maWc7XG4gICAgdmFyIGF0dHJzID0gcmVmLmF0dHJzO1xuICB2YXIgc3RyaW5naWZpZWRTeW1ib2xzID0gdGhpcy5zeW1ib2xzLm1hcChmdW5jdGlvbiAocykgeyByZXR1cm4gcy5zdHJpbmdpZnkoKTsgfSkuam9pbignJyk7XG4gIHJldHVybiB3cmFwSW5TdmdTdHJpbmcoc3RyaW5naWZpZWRTeW1ib2xzLCBhdHRycyk7XG59O1xuXG4vKipcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuU3ByaXRlLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nICgpIHtcbiAgcmV0dXJuIHRoaXMuc3RyaW5naWZ5KCk7XG59O1xuXG5TcHJpdGUucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95ICgpIHtcbiAgdGhpcy5zeW1ib2xzLmZvckVhY2goZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHMuZGVzdHJveSgpOyB9KTtcbn07XG5cbnZhciBTcHJpdGVTeW1ib2wgPSBmdW5jdGlvbiBTcHJpdGVTeW1ib2wocmVmKSB7XG4gIHZhciBpZCA9IHJlZi5pZDtcbiAgdmFyIHZpZXdCb3ggPSByZWYudmlld0JveDtcbiAgdmFyIGNvbnRlbnQgPSByZWYuY29udGVudDtcblxuICB0aGlzLmlkID0gaWQ7XG4gIHRoaXMudmlld0JveCA9IHZpZXdCb3g7XG4gIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG59O1xuXG4vKipcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuU3ByaXRlU3ltYm9sLnByb3RvdHlwZS5zdHJpbmdpZnkgPSBmdW5jdGlvbiBzdHJpbmdpZnkgKCkge1xuICByZXR1cm4gdGhpcy5jb250ZW50O1xufTtcblxuLyoqXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblNwcml0ZVN5bWJvbC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyAoKSB7XG4gIHJldHVybiB0aGlzLnN0cmluZ2lmeSgpO1xufTtcblxuU3ByaXRlU3ltYm9sLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSAoKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgWydpZCcsICd2aWV3Qm94JywgJ2NvbnRlbnQnXS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7IHJldHVybiBkZWxldGUgdGhpcyQxW3Byb3BdOyB9KTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnRcbiAqIEByZXR1cm4ge0VsZW1lbnR9XG4gKi9cbnZhciBwYXJzZSA9IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gIHZhciBoYXNJbXBvcnROb2RlID0gISFkb2N1bWVudC5pbXBvcnROb2RlO1xuICB2YXIgZG9jID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhjb250ZW50LCAnaW1hZ2Uvc3ZnK3htbCcpLmRvY3VtZW50RWxlbWVudDtcblxuICAvKipcbiAgICogRml4IGZvciBicm93c2VyIHdoaWNoIGFyZSB0aHJvd2luZyBXcm9uZ0RvY3VtZW50RXJyb3JcbiAgICogaWYgeW91IGluc2VydCBhbiBlbGVtZW50IHdoaWNoIGlzIG5vdCBwYXJ0IG9mIHRoZSBkb2N1bWVudFxuICAgKiBAc2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc5ODY1MTkvNDYyNDQwM1xuICAgKi9cbiAgaWYgKGhhc0ltcG9ydE5vZGUpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuaW1wb3J0Tm9kZShkb2MsIHRydWUpO1xuICB9XG5cbiAgcmV0dXJuIGRvYztcbn07XG5cbnZhciBCcm93c2VyU3ByaXRlU3ltYm9sID0gKGZ1bmN0aW9uIChTcHJpdGVTeW1ib2wkJDEpIHtcbiAgZnVuY3Rpb24gQnJvd3NlclNwcml0ZVN5bWJvbCAoKSB7XG4gICAgU3ByaXRlU3ltYm9sJCQxLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBpZiAoIFNwcml0ZVN5bWJvbCQkMSApIEJyb3dzZXJTcHJpdGVTeW1ib2wuX19wcm90b19fID0gU3ByaXRlU3ltYm9sJCQxO1xuICBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIFNwcml0ZVN5bWJvbCQkMSAmJiBTcHJpdGVTeW1ib2wkJDEucHJvdG90eXBlICk7XG4gIEJyb3dzZXJTcHJpdGVTeW1ib2wucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQnJvd3NlclNwcml0ZVN5bWJvbDtcblxuICB2YXIgcHJvdG90eXBlQWNjZXNzb3JzID0geyBpc01vdW50ZWQ6IHt9IH07XG5cbiAgcHJvdG90eXBlQWNjZXNzb3JzLmlzTW91bnRlZC5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICEhdGhpcy5ub2RlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IG5vZGVcbiAgICogQHJldHVybiB7QnJvd3NlclNwcml0ZVN5bWJvbH1cbiAgICovXG4gIEJyb3dzZXJTcHJpdGVTeW1ib2wuY3JlYXRlRnJvbUV4aXN0aW5nTm9kZSA9IGZ1bmN0aW9uIGNyZWF0ZUZyb21FeGlzdGluZ05vZGUgKG5vZGUpIHtcbiAgICByZXR1cm4gbmV3IEJyb3dzZXJTcHJpdGVTeW1ib2woe1xuICAgICAgaWQ6IG5vZGUuZ2V0QXR0cmlidXRlKCdpZCcpLFxuICAgICAgdmlld0JveDogbm9kZS5nZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnKSxcbiAgICAgIGNvbnRlbnQ6IG5vZGUub3V0ZXJIVE1MXG4gICAgfSk7XG4gIH07XG5cbiAgQnJvd3NlclNwcml0ZVN5bWJvbC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3kgKCkge1xuICAgIGlmICh0aGlzLmlzTW91bnRlZCkge1xuICAgICAgdGhpcy51bm1vdW50KCk7XG4gICAgfVxuICAgIFNwcml0ZVN5bWJvbCQkMS5wcm90b3R5cGUuZGVzdHJveS5jYWxsKHRoaXMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR8c3RyaW5nfSB0YXJnZXRcbiAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICovXG4gIEJyb3dzZXJTcHJpdGVTeW1ib2wucHJvdG90eXBlLm1vdW50ID0gZnVuY3Rpb24gbW91bnQgKHRhcmdldCkge1xuICAgIGlmICh0aGlzLmlzTW91bnRlZCkge1xuICAgICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgICB9XG5cbiAgICB2YXIgbW91bnRUYXJnZXQgPSB0eXBlb2YgdGFyZ2V0ID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KSA6IHRhcmdldDtcbiAgICB2YXIgbm9kZSA9IHRoaXMucmVuZGVyKCk7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcblxuICAgIG1vdW50VGFyZ2V0LmFwcGVuZENoaWxkKG5vZGUpO1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH07XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAqL1xuICBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIgKCkge1xuICAgIHZhciBjb250ZW50ID0gdGhpcy5zdHJpbmdpZnkoKTtcbiAgICByZXR1cm4gcGFyc2Uod3JhcEluU3ZnU3RyaW5nKGNvbnRlbnQpKS5jaGlsZE5vZGVzWzBdO1xuICB9O1xuXG4gIEJyb3dzZXJTcHJpdGVTeW1ib2wucHJvdG90eXBlLnVubW91bnQgPSBmdW5jdGlvbiB1bm1vdW50ICgpIHtcbiAgICB0aGlzLm5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLm5vZGUpO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZSwgcHJvdG90eXBlQWNjZXNzb3JzICk7XG5cbiAgcmV0dXJuIEJyb3dzZXJTcHJpdGVTeW1ib2w7XG59KFNwcml0ZVN5bWJvbCkpO1xuXG52YXIgZGVmYXVsdENvbmZpZyQxID0ge1xuICAvKipcbiAgICogU2hvdWxkIGZvbGxvd2luZyBvcHRpb25zIGJlIGF1dG9tYXRpY2FsbHkgY29uZmlndXJlZDpcbiAgICogLSBgc3luY1VybHNXaXRoQmFzZVRhZ2BcbiAgICogLSBgbG9jYXRpb25DaGFuZ2VBbmd1bGFyRW1pdHRlcmBcbiAgICogLSBgbW92ZUdyYWRpZW50c091dHNpZGVTeW1ib2xgXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgYXV0b0NvbmZpZ3VyZTogdHJ1ZSxcblxuICAvKipcbiAgICogRGVmYXVsdCBtb3VudGluZyBzZWxlY3RvclxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgbW91bnRUbzogJ2JvZHknLFxuXG4gIC8qKlxuICAgKiBGaXggZGlzYXBwZWFyaW5nIFNWRyBlbGVtZW50cyB3aGVuIDxiYXNlIGhyZWY+IGV4aXN0cy5cbiAgICogRXhlY3V0ZXMgd2hlbiBzcHJpdGUgbW91bnRlZC5cbiAgICogQHNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xODI2NTMzNi83OTYxNTJcbiAgICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vZXZlcmRpbWVuc2lvbi9hbmd1bGFyLXN2Zy1iYXNlLWZpeFxuICAgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIuanMvaXNzdWVzLzg5MzQjaXNzdWVjb21tZW50LTU2NTY4NDY2XG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgc3luY1VybHNXaXRoQmFzZVRhZzogZmFsc2UsXG5cbiAgLyoqXG4gICAqIFNob3VsZCBzcHJpdGUgbGlzdGVuIGN1c3RvbSBsb2NhdGlvbiBjaGFuZ2UgZXZlbnRcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBsaXN0ZW5Mb2NhdGlvbkNoYW5nZUV2ZW50OiB0cnVlLFxuXG4gIC8qKlxuICAgKiBDdXN0b20gd2luZG93IGV2ZW50IG5hbWUgd2hpY2ggc2hvdWxkIGJlIGVtaXR0ZWQgdG8gdXBkYXRlIHNwcml0ZSB1cmxzXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBsb2NhdGlvbkNoYW5nZUV2ZW50OiAnbG9jYXRpb25DaGFuZ2UnLFxuXG4gIC8qKlxuICAgKiBFbWl0IGxvY2F0aW9uIGNoYW5nZSBldmVudCBpbiBBbmd1bGFyIGF1dG9tYXRpY2FsbHlcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBsb2NhdGlvbkNoYW5nZUFuZ3VsYXJFbWl0dGVyOiBmYWxzZSxcblxuICAvKipcbiAgICogU2VsZWN0b3IgdG8gZmluZCBzeW1ib2xzIHVzYWdlcyB3aGVuIHVwZGF0aW5nIHNwcml0ZSB1cmxzXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICB1c2FnZXNUb1VwZGF0ZTogJ3VzZVsqfGhyZWZdJyxcblxuICAvKipcbiAgICogRml4IEZpcmVmb3ggYnVnIHdoZW4gZ3JhZGllbnRzIGFuZCBwYXR0ZXJucyBkb24ndCB3b3JrIGlmIHRoZXkgYXJlIHdpdGhpbiBhIHN5bWJvbC5cbiAgICogRXhlY3V0ZXMgd2hlbiBzcHJpdGUgaXMgcmVuZGVyZWQsIGJ1dCBub3QgbW91bnRlZC5cbiAgICogQHNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0zMDY2NzRcbiAgICogQHNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0zNTM1NzVcbiAgICogQHNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xMjM1MzY0XG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgbW92ZUdyYWRpZW50c091dHNpZGVTeW1ib2w6IGZhbHNlXG59O1xuXG4vKipcbiAqIEBwYXJhbSB7Kn0gYXJyYXlMaWtlXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xudmFyIGFycmF5RnJvbSA9IGZ1bmN0aW9uIChhcnJheUxpa2UpIHtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFycmF5TGlrZSwgMCk7XG59O1xuXG52YXIgYnJvd3NlciA9IHtcbiAgaXNDaHJvbWU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIC9jaHJvbWUvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpOyB9LFxuICBpc0ZpcmVmb3g6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIC9maXJlZm94L2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTsgfSxcblxuICAvLyBodHRwczovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L21zNTM3NTAzKHY9dnMuODUpLmFzcHhcbiAgaXNJRTogZnVuY3Rpb24gKCkgeyByZXR1cm4gL21zaWUvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpIHx8IC90cmlkZW50L2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTsgfSxcbiAgaXNFZGdlOiBmdW5jdGlvbiAoKSB7IHJldHVybiAvZWRnZS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7IH1cbn07XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7Kn0gZGF0YVxuICovXG52YXIgZGlzcGF0Y2hFdmVudCA9IGZ1bmN0aW9uIChuYW1lLCBkYXRhKSB7XG4gIHZhciBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICBldmVudC5pbml0Q3VzdG9tRXZlbnQobmFtZSwgZmFsc2UsIGZhbHNlLCBkYXRhKTtcbiAgd2luZG93LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xufTtcblxuLyoqXG4gKiBJRSBkb2Vzbid0IGV2YWx1YXRlIDxzdHlsZT4gdGFncyBpbiBTVkdzIHRoYXQgYXJlIGR5bmFtaWNhbGx5IGFkZGVkIHRvIHRoZSBwYWdlLlxuICogVGhpcyB0cmljayB3aWxsIHRyaWdnZXIgSUUgdG8gcmVhZCBhbmQgdXNlIGFueSBleGlzdGluZyBTVkcgPHN0eWxlPiB0YWdzLlxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vaWNvbmljL1NWR0luamVjdG9yL2lzc3Vlcy8yM1xuICogQHNlZSBodHRwczovL2RldmVsb3Blci5taWNyb3NvZnQuY29tL2VuLXVzL21pY3Jvc29mdC1lZGdlL3BsYXRmb3JtL2lzc3Vlcy8xMDg5ODQ2OS9cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IG5vZGUgRE9NIEVsZW1lbnQgdG8gc2VhcmNoIDxzdHlsZT4gdGFncyBpblxuICogQHJldHVybiB7QXJyYXk8SFRNTFN0eWxlRWxlbWVudD59XG4gKi9cbnZhciBldmFsU3R5bGVzSUVXb3JrYXJvdW5kID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgdmFyIHVwZGF0ZWROb2RlcyA9IFtdO1xuXG4gIGFycmF5RnJvbShub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3N0eWxlJykpXG4gICAgLmZvckVhY2goZnVuY3Rpb24gKHN0eWxlKSB7XG4gICAgICBzdHlsZS50ZXh0Q29udGVudCArPSAnJztcbiAgICAgIHVwZGF0ZWROb2Rlcy5wdXNoKHN0eWxlKTtcbiAgICB9KTtcblxuICByZXR1cm4gdXBkYXRlZE5vZGVzO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gW3VybF0gSWYgbm90IHByb3ZpZGVkIC0gY3VycmVudCBVUkwgd2lsbCBiZSB1c2VkXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbnZhciBnZXRVcmxXaXRob3V0RnJhZ21lbnQgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHJldHVybiAodXJsIHx8IHdpbmRvdy5sb2NhdGlvbi5ocmVmKS5zcGxpdCgnIycpWzBdO1xufTtcblxuLyogZ2xvYmFsIGFuZ3VsYXIgKi9cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZVxuICovXG52YXIgbG9jYXRpb25DaGFuZ2VBbmd1bGFyRW1pdHRlciA9IGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHJvb3RTY29wZScsIGZ1bmN0aW9uICgkcm9vdFNjb3BlKSB7XG4gICAgJHJvb3RTY29wZS4kb24oJyRsb2NhdGlvbkNoYW5nZVN1Y2Nlc3MnLCBmdW5jdGlvbiAoZSwgbmV3VXJsLCBvbGRVcmwpIHtcbiAgICAgIGRpc3BhdGNoRXZlbnQoZXZlbnROYW1lLCB7IG9sZFVybDogb2xkVXJsLCBuZXdVcmw6IG5ld1VybCB9KTtcbiAgICB9KTtcbiAgfV0pO1xufTtcblxudmFyIGRlZmF1bHRTZWxlY3RvciA9ICdsaW5lYXJHcmFkaWVudCwgcmFkaWFsR3JhZGllbnQsIHBhdHRlcm4nO1xuXG4vKipcbiAqIEBwYXJhbSB7RWxlbWVudH0gc3ZnXG4gKiBAcGFyYW0ge3N0cmluZ30gW3NlbGVjdG9yXVxuICogQHJldHVybiB7RWxlbWVudH1cbiAqL1xudmFyIG1vdmVHcmFkaWVudHNPdXRzaWRlU3ltYm9sID0gZnVuY3Rpb24gKHN2Zywgc2VsZWN0b3IpIHtcbiAgaWYgKCBzZWxlY3RvciA9PT0gdm9pZCAwICkgc2VsZWN0b3IgPSBkZWZhdWx0U2VsZWN0b3I7XG5cbiAgYXJyYXlGcm9tKHN2Zy5xdWVyeVNlbGVjdG9yQWxsKCdzeW1ib2wnKSkuZm9yRWFjaChmdW5jdGlvbiAoc3ltYm9sKSB7XG4gICAgYXJyYXlGcm9tKHN5bWJvbC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSkuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgc3ltYm9sLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5vZGUsIHN5bWJvbCk7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gc3ZnO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge05vZGVMaXN0fSBub2Rlc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gW21hdGNoZXJdXG4gKiBAcmV0dXJuIHtBdHRyW119XG4gKi9cbmZ1bmN0aW9uIHNlbGVjdEF0dHJpYnV0ZXMobm9kZXMsIG1hdGNoZXIpIHtcbiAgdmFyIGF0dHJzID0gYXJyYXlGcm9tKG5vZGVzKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgbm9kZSkge1xuICAgIGlmICghbm9kZS5hdHRyaWJ1dGVzKSB7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH1cblxuICAgIHZhciBhcnJheWZpZWQgPSBhcnJheUZyb20obm9kZS5hdHRyaWJ1dGVzKTtcbiAgICB2YXIgbWF0Y2hlZCA9IG1hdGNoZXIgPyBhcnJheWZpZWQuZmlsdGVyKG1hdGNoZXIpIDogYXJyYXlmaWVkO1xuICAgIHJldHVybiBhY2MuY29uY2F0KG1hdGNoZWQpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIGF0dHJzO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Tm9kZUxpc3R8Tm9kZX0gbm9kZXNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Nsb25lPXRydWVdXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblxudmFyIHhMaW5rTlMgPSBuYW1lc3BhY2VzXzEueGxpbmsudXJpO1xudmFyIHhMaW5rQXR0ck5hbWUgPSAneGxpbms6aHJlZic7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWVzY2FwZVxudmFyIHNwZWNpYWxVcmxDaGFyc1BhdHRlcm4gPSAvW3t9fFxcXFxcXF5cXFtcXF1gXCI8Pl0vZztcblxuZnVuY3Rpb24gZW5jb2Rlcih1cmwpIHtcbiAgcmV0dXJuIHVybC5yZXBsYWNlKHNwZWNpYWxVcmxDaGFyc1BhdHRlcm4sIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgIHJldHVybiAoXCIlXCIgKyAobWF0Y2hbMF0uY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKSkpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCBcIlxcXFwkJlwiKTsgLy8gJCYgbWVhbnMgdGhlIHdob2xlIG1hdGNoZWQgc3RyaW5nXG59XG5cbi8qKlxuICogQHBhcmFtIHtOb2RlTGlzdH0gbm9kZXNcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdGFydHNXaXRoXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVwbGFjZVdpdGhcbiAqIEByZXR1cm4ge05vZGVMaXN0fVxuICovXG5mdW5jdGlvbiB1cGRhdGVSZWZlcmVuY2VzKG5vZGVzLCBzdGFydHNXaXRoLCByZXBsYWNlV2l0aCkge1xuICBhcnJheUZyb20obm9kZXMpLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICB2YXIgaHJlZiA9IG5vZGUuZ2V0QXR0cmlidXRlKHhMaW5rQXR0ck5hbWUpO1xuICAgIGlmIChocmVmICYmIGhyZWYuaW5kZXhPZihzdGFydHNXaXRoKSA9PT0gMCkge1xuICAgICAgdmFyIG5ld1VybCA9IGhyZWYucmVwbGFjZShzdGFydHNXaXRoLCByZXBsYWNlV2l0aCk7XG4gICAgICBub2RlLnNldEF0dHJpYnV0ZU5TKHhMaW5rTlMsIHhMaW5rQXR0ck5hbWUsIG5ld1VybCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbm9kZXM7XG59XG5cbi8qKlxuICogTGlzdCBvZiBTVkcgYXR0cmlidXRlcyB0byB1cGRhdGUgdXJsKCkgdGFyZ2V0IGluIHRoZW1cbiAqL1xudmFyIGF0dExpc3QgPSBbXG4gICdjbGlwUGF0aCcsXG4gICdjb2xvclByb2ZpbGUnLFxuICAnc3JjJyxcbiAgJ2N1cnNvcicsXG4gICdmaWxsJyxcbiAgJ2ZpbHRlcicsXG4gICdtYXJrZXInLFxuICAnbWFya2VyU3RhcnQnLFxuICAnbWFya2VyTWlkJyxcbiAgJ21hcmtlckVuZCcsXG4gICdtYXNrJyxcbiAgJ3N0cm9rZScsXG4gICdzdHlsZSdcbl07XG5cbnZhciBhdHRTZWxlY3RvciA9IGF0dExpc3QubWFwKGZ1bmN0aW9uIChhdHRyKSB7IHJldHVybiAoXCJbXCIgKyBhdHRyICsgXCJdXCIpOyB9KS5qb2luKCcsJyk7XG5cbi8qKlxuICogVXBkYXRlIFVSTHMgaW4gc3ZnIGltYWdlIChsaWtlIGBmaWxsPVwidXJsKC4uLilcImApIGFuZCB1cGRhdGUgcmVmZXJlbmNpbmcgZWxlbWVudHNcbiAqIEBwYXJhbSB7RWxlbWVudH0gc3ZnXG4gKiBAcGFyYW0ge05vZGVMaXN0fSByZWZlcmVuY2VzXG4gKiBAcGFyYW0ge3N0cmluZ3xSZWdFeHB9IHN0YXJ0c1dpdGhcbiAqIEBwYXJhbSB7c3RyaW5nfSByZXBsYWNlV2l0aFxuICogQHJldHVybiB7dm9pZH1cbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3Qgc3ByaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3ZnLnNwcml0ZScpO1xuICogY29uc3QgdXNhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndXNlJyk7XG4gKiB1cGRhdGVVcmxzKHNwcml0ZSwgdXNhZ2VzLCAnIycsICdwcmVmaXgjJyk7XG4gKi9cbnZhciB1cGRhdGVVcmxzID0gZnVuY3Rpb24gKHN2ZywgcmVmZXJlbmNlcywgc3RhcnRzV2l0aCwgcmVwbGFjZVdpdGgpIHtcbiAgdmFyIHN0YXJ0c1dpdGhFbmNvZGVkID0gZW5jb2RlcihzdGFydHNXaXRoKTtcbiAgdmFyIHJlcGxhY2VXaXRoRW5jb2RlZCA9IGVuY29kZXIocmVwbGFjZVdpdGgpO1xuXG4gIHZhciBub2RlcyA9IHN2Zy5xdWVyeVNlbGVjdG9yQWxsKGF0dFNlbGVjdG9yKTtcbiAgdmFyIGF0dHJzID0gc2VsZWN0QXR0cmlidXRlcyhub2RlcywgZnVuY3Rpb24gKHJlZikge1xuICAgIHZhciBsb2NhbE5hbWUgPSByZWYubG9jYWxOYW1lO1xuICAgIHZhciB2YWx1ZSA9IHJlZi52YWx1ZTtcblxuICAgIHJldHVybiBhdHRMaXN0LmluZGV4T2YobG9jYWxOYW1lKSAhPT0gLTEgJiYgdmFsdWUuaW5kZXhPZigoXCJ1cmwoXCIgKyBzdGFydHNXaXRoRW5jb2RlZCkpICE9PSAtMTtcbiAgfSk7XG5cbiAgYXR0cnMuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikgeyByZXR1cm4gYXR0ci52YWx1ZSA9IGF0dHIudmFsdWUucmVwbGFjZShuZXcgUmVnRXhwKGVzY2FwZVJlZ0V4cChzdGFydHNXaXRoRW5jb2RlZCksICdnJyksIHJlcGxhY2VXaXRoRW5jb2RlZCk7IH0pO1xuICB1cGRhdGVSZWZlcmVuY2VzKHJlZmVyZW5jZXMsIHN0YXJ0c1dpdGhFbmNvZGVkLCByZXBsYWNlV2l0aEVuY29kZWQpO1xufTtcblxuLyoqXG4gKiBJbnRlcm5hbCBlbWl0dGVyIGV2ZW50c1xuICogQGVudW1cbiAqIEBwcml2YXRlXG4gKi9cbnZhciBFdmVudHMgPSB7XG4gIE1PVU5UOiAnbW91bnQnLFxuICBTWU1CT0xfTU9VTlQ6ICdzeW1ib2xfbW91bnQnXG59O1xuXG52YXIgQnJvd3NlclNwcml0ZSA9IChmdW5jdGlvbiAoU3ByaXRlJCQxKSB7XG4gIGZ1bmN0aW9uIEJyb3dzZXJTcHJpdGUoY2ZnKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG4gICAgaWYgKCBjZmcgPT09IHZvaWQgMCApIGNmZyA9IHt9O1xuXG4gICAgU3ByaXRlJCQxLmNhbGwodGhpcywgZGVlcG1lcmdlKGRlZmF1bHRDb25maWckMSwgY2ZnKSk7XG5cbiAgICB2YXIgZW1pdHRlciA9IG1pdHQoKTtcbiAgICB0aGlzLl9lbWl0dGVyID0gZW1pdHRlcjtcbiAgICB0aGlzLm5vZGUgPSBudWxsO1xuXG4gICAgdmFyIHJlZiA9IHRoaXM7XG4gICAgdmFyIGNvbmZpZyA9IHJlZi5jb25maWc7XG5cbiAgICBpZiAoY29uZmlnLmF1dG9Db25maWd1cmUpIHtcbiAgICAgIHRoaXMuX2F1dG9Db25maWd1cmUoY2ZnKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnN5bmNVcmxzV2l0aEJhc2VUYWcpIHtcbiAgICAgIHZhciBiYXNlVXJsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2Jhc2UnKVswXS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgIGVtaXR0ZXIub24oRXZlbnRzLk1PVU5ULCBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzJDEudXBkYXRlVXJscygnIycsIGJhc2VVcmwpOyB9KTtcbiAgICB9XG5cbiAgICB2YXIgaGFuZGxlTG9jYXRpb25DaGFuZ2UgPSB0aGlzLl9oYW5kbGVMb2NhdGlvbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2hhbmRsZUxvY2F0aW9uQ2hhbmdlID0gaGFuZGxlTG9jYXRpb25DaGFuZ2U7XG5cbiAgICAvLyBQcm92aWRlIHdheSB0byB1cGRhdGUgc3ByaXRlIHVybHMgZXh0ZXJuYWxseSB2aWEgZGlzcGF0Y2hpbmcgY3VzdG9tIHdpbmRvdyBldmVudFxuICAgIGlmIChjb25maWcubGlzdGVuTG9jYXRpb25DaGFuZ2VFdmVudCkge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoY29uZmlnLmxvY2F0aW9uQ2hhbmdlRXZlbnQsIGhhbmRsZUxvY2F0aW9uQ2hhbmdlKTtcbiAgICB9XG5cbiAgICAvLyBFbWl0IGxvY2F0aW9uIGNoYW5nZSBldmVudCBpbiBBbmd1bGFyIGF1dG9tYXRpY2FsbHlcbiAgICBpZiAoY29uZmlnLmxvY2F0aW9uQ2hhbmdlQW5ndWxhckVtaXR0ZXIpIHtcbiAgICAgIGxvY2F0aW9uQ2hhbmdlQW5ndWxhckVtaXR0ZXIoY29uZmlnLmxvY2F0aW9uQ2hhbmdlRXZlbnQpO1xuICAgIH1cblxuICAgIC8vIEFmdGVyIHNwcml0ZSBtb3VudGVkXG4gICAgZW1pdHRlci5vbihFdmVudHMuTU9VTlQsIGZ1bmN0aW9uIChzcHJpdGVOb2RlKSB7XG4gICAgICBpZiAoY29uZmlnLm1vdmVHcmFkaWVudHNPdXRzaWRlU3ltYm9sKSB7XG4gICAgICAgIG1vdmVHcmFkaWVudHNPdXRzaWRlU3ltYm9sKHNwcml0ZU5vZGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gQWZ0ZXIgc3ltYm9sIG1vdW50ZWQgaW50byBzcHJpdGVcbiAgICBlbWl0dGVyLm9uKEV2ZW50cy5TWU1CT0xfTU9VTlQsIGZ1bmN0aW9uIChzeW1ib2xOb2RlKSB7XG4gICAgICBpZiAoY29uZmlnLm1vdmVHcmFkaWVudHNPdXRzaWRlU3ltYm9sKSB7XG4gICAgICAgIG1vdmVHcmFkaWVudHNPdXRzaWRlU3ltYm9sKHN5bWJvbE5vZGUucGFyZW50Tm9kZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChicm93c2VyLmlzSUUoKSB8fCBicm93c2VyLmlzRWRnZSgpKSB7XG4gICAgICAgIGV2YWxTdHlsZXNJRVdvcmthcm91bmQoc3ltYm9sTm9kZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpZiAoIFNwcml0ZSQkMSApIEJyb3dzZXJTcHJpdGUuX19wcm90b19fID0gU3ByaXRlJCQxO1xuICBCcm93c2VyU3ByaXRlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIFNwcml0ZSQkMSAmJiBTcHJpdGUkJDEucHJvdG90eXBlICk7XG4gIEJyb3dzZXJTcHJpdGUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQnJvd3NlclNwcml0ZTtcblxuICB2YXIgcHJvdG90eXBlQWNjZXNzb3JzID0geyBpc01vdW50ZWQ6IHt9IH07XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBwcm90b3R5cGVBY2Nlc3NvcnMuaXNNb3VudGVkLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gISF0aGlzLm5vZGU7XG4gIH07XG5cbiAgLyoqXG4gICAqIEF1dG9tYXRpY2FsbHkgY29uZmlndXJlIGZvbGxvd2luZyBvcHRpb25zXG4gICAqIC0gYHN5bmNVcmxzV2l0aEJhc2VUYWdgXG4gICAqIC0gYGxvY2F0aW9uQ2hhbmdlQW5ndWxhckVtaXR0ZXJgXG4gICAqIC0gYG1vdmVHcmFkaWVudHNPdXRzaWRlU3ltYm9sYFxuICAgKiBAcGFyYW0ge09iamVjdH0gY2ZnXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBCcm93c2VyU3ByaXRlLnByb3RvdHlwZS5fYXV0b0NvbmZpZ3VyZSA9IGZ1bmN0aW9uIF9hdXRvQ29uZmlndXJlIChjZmcpIHtcbiAgICB2YXIgcmVmID0gdGhpcztcbiAgICB2YXIgY29uZmlnID0gcmVmLmNvbmZpZztcblxuICAgIGlmICh0eXBlb2YgY2ZnLnN5bmNVcmxzV2l0aEJhc2VUYWcgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWcuc3luY1VybHNXaXRoQmFzZVRhZyA9IHR5cGVvZiBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYmFzZScpWzBdICE9PSAndW5kZWZpbmVkJztcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNmZy5sb2NhdGlvbkNoYW5nZUFuZ3VsYXJFbWl0dGVyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnLmxvY2F0aW9uQ2hhbmdlQW5ndWxhckVtaXR0ZXIgPSAnYW5ndWxhcicgaW4gd2luZG93O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY2ZnLm1vdmVHcmFkaWVudHNPdXRzaWRlU3ltYm9sID09PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnLm1vdmVHcmFkaWVudHNPdXRzaWRlU3ltYm9sID0gYnJvd3Nlci5pc0ZpcmVmb3goKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudC5kZXRhaWxcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50LmRldGFpbC5vbGRVcmxcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50LmRldGFpbC5uZXdVcmxcbiAgICogQHByaXZhdGVcbiAgICovXG4gIEJyb3dzZXJTcHJpdGUucHJvdG90eXBlLl9oYW5kbGVMb2NhdGlvbkNoYW5nZSA9IGZ1bmN0aW9uIF9oYW5kbGVMb2NhdGlvbkNoYW5nZSAoZXZlbnQpIHtcbiAgICB2YXIgcmVmID0gZXZlbnQuZGV0YWlsO1xuICAgIHZhciBvbGRVcmwgPSByZWYub2xkVXJsO1xuICAgIHZhciBuZXdVcmwgPSByZWYubmV3VXJsO1xuICAgIHRoaXMudXBkYXRlVXJscyhvbGRVcmwsIG5ld1VybCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFkZCBuZXcgc3ltYm9sLiBJZiBzeW1ib2wgd2l0aCB0aGUgc2FtZSBpZCBleGlzdHMgaXQgd2lsbCBiZSByZXBsYWNlZC5cbiAgICogSWYgc3ByaXRlIGFscmVhZHkgbW91bnRlZCAtIGBzeW1ib2wubW91bnQoc3ByaXRlLm5vZGUpYCB3aWxsIGJlIGNhbGxlZC5cbiAgICogQGZpcmVzIEV2ZW50cyNTWU1CT0xfTU9VTlRcbiAgICogQHBhcmFtIHtCcm93c2VyU3ByaXRlU3ltYm9sfSBzeW1ib2xcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gYHRydWVgIC0gc3ltYm9sIHdhcyBhZGRlZCwgYGZhbHNlYCAtIHJlcGxhY2VkXG4gICAqL1xuICBCcm93c2VyU3ByaXRlLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiBhZGQgKHN5bWJvbCkge1xuICAgIHZhciBzcHJpdGUgPSB0aGlzO1xuICAgIHZhciBpc05ld1N5bWJvbCA9IFNwcml0ZSQkMS5wcm90b3R5cGUuYWRkLmNhbGwodGhpcywgc3ltYm9sKTtcblxuICAgIGlmICh0aGlzLmlzTW91bnRlZCAmJiBpc05ld1N5bWJvbCkge1xuICAgICAgc3ltYm9sLm1vdW50KHNwcml0ZS5ub2RlKTtcbiAgICAgIHRoaXMuX2VtaXR0ZXIuZW1pdChFdmVudHMuU1lNQk9MX01PVU5ULCBzeW1ib2wubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzTmV3U3ltYm9sO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBdHRhY2ggdG8gZXhpc3RpbmcgRE9NIG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmd8RWxlbWVudH0gdGFyZ2V0XG4gICAqIEByZXR1cm4ge0VsZW1lbnR8bnVsbH0gYXR0YWNoZWQgRE9NIEVsZW1lbnQuIG51bGwgaWYgbm9kZSB0byBhdHRhY2ggbm90IGZvdW5kLlxuICAgKi9cbiAgQnJvd3NlclNwcml0ZS5wcm90b3R5cGUuYXR0YWNoID0gZnVuY3Rpb24gYXR0YWNoICh0YXJnZXQpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIHZhciBzcHJpdGUgPSB0aGlzO1xuXG4gICAgaWYgKHNwcml0ZS5pc01vdW50ZWQpIHtcbiAgICAgIHJldHVybiBzcHJpdGUubm9kZTtcbiAgICB9XG5cbiAgICAvKiogQHR5cGUgRWxlbWVudCAqL1xuICAgIHZhciBub2RlID0gdHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCkgOiB0YXJnZXQ7XG4gICAgc3ByaXRlLm5vZGUgPSBub2RlO1xuXG4gICAgLy8gQWxyZWFkeSBhZGRlZCBzeW1ib2xzIG5lZWRzIHRvIGJlIG1vdW50ZWRcbiAgICB0aGlzLnN5bWJvbHMuZm9yRWFjaChmdW5jdGlvbiAoc3ltYm9sKSB7XG4gICAgICBzeW1ib2wubW91bnQoc3ByaXRlLm5vZGUpO1xuICAgICAgdGhpcyQxLl9lbWl0dGVyLmVtaXQoRXZlbnRzLlNZTUJPTF9NT1VOVCwgc3ltYm9sLm5vZGUpO1xuICAgIH0pO1xuXG4gICAgLy8gQ3JlYXRlIHN5bWJvbHMgZnJvbSBleGlzdGluZyBET00gbm9kZXMsIGFkZCBhbmQgbW91bnQgdGhlbVxuICAgIGFycmF5RnJvbShub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3N5bWJvbCcpKVxuICAgICAgLmZvckVhY2goZnVuY3Rpb24gKHN5bWJvbE5vZGUpIHtcbiAgICAgICAgdmFyIHN5bWJvbCA9IEJyb3dzZXJTcHJpdGVTeW1ib2wuY3JlYXRlRnJvbUV4aXN0aW5nTm9kZShzeW1ib2xOb2RlKTtcbiAgICAgICAgc3ltYm9sLm5vZGUgPSBzeW1ib2xOb2RlOyAvLyBoYWNrIHRvIHByZXZlbnQgc3ltYm9sIG1vdW50aW5nIHRvIHNwcml0ZSB3aGVuIGFkZGluZ1xuICAgICAgICBzcHJpdGUuYWRkKHN5bWJvbCk7XG4gICAgICB9KTtcblxuICAgIHRoaXMuX2VtaXR0ZXIuZW1pdChFdmVudHMuTU9VTlQsIG5vZGUpO1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH07XG5cbiAgQnJvd3NlclNwcml0ZS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3kgKCkge1xuICAgIHZhciByZWYgPSB0aGlzO1xuICAgIHZhciBjb25maWcgPSByZWYuY29uZmlnO1xuICAgIHZhciBzeW1ib2xzID0gcmVmLnN5bWJvbHM7XG4gICAgdmFyIF9lbWl0dGVyID0gcmVmLl9lbWl0dGVyO1xuXG4gICAgc3ltYm9scy5mb3JFYWNoKGZ1bmN0aW9uIChzKSB7IHJldHVybiBzLmRlc3Ryb3koKTsgfSk7XG5cbiAgICBfZW1pdHRlci5vZmYoJyonKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihjb25maWcubG9jYXRpb25DaGFuZ2VFdmVudCwgdGhpcy5faGFuZGxlTG9jYXRpb25DaGFuZ2UpO1xuXG4gICAgaWYgKHRoaXMuaXNNb3VudGVkKSB7XG4gICAgICB0aGlzLnVubW91bnQoKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBmaXJlcyBFdmVudHMjTU9VTlRcbiAgICogQHBhcmFtIHtzdHJpbmd8RWxlbWVudH0gW3RhcmdldF1cbiAgICogQHBhcmFtIHtib29sZWFufSBbcHJlcGVuZD1mYWxzZV1cbiAgICogQHJldHVybiB7RWxlbWVudHxudWxsfSByZW5kZXJlZCBzcHJpdGUgbm9kZS4gbnVsbCBpZiBtb3VudCBub2RlIG5vdCBmb3VuZC5cbiAgICovXG4gIEJyb3dzZXJTcHJpdGUucHJvdG90eXBlLm1vdW50ID0gZnVuY3Rpb24gbW91bnQgKHRhcmdldCwgcHJlcGVuZCkge1xuICAgIGlmICggdGFyZ2V0ID09PSB2b2lkIDAgKSB0YXJnZXQgPSB0aGlzLmNvbmZpZy5tb3VudFRvO1xuICAgIGlmICggcHJlcGVuZCA9PT0gdm9pZCAwICkgcHJlcGVuZCA9IGZhbHNlO1xuXG4gICAgdmFyIHNwcml0ZSA9IHRoaXM7XG5cbiAgICBpZiAoc3ByaXRlLmlzTW91bnRlZCkge1xuICAgICAgcmV0dXJuIHNwcml0ZS5ub2RlO1xuICAgIH1cblxuICAgIHZhciBtb3VudE5vZGUgPSB0eXBlb2YgdGFyZ2V0ID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KSA6IHRhcmdldDtcbiAgICB2YXIgbm9kZSA9IHNwcml0ZS5yZW5kZXIoKTtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuXG4gICAgaWYgKHByZXBlbmQgJiYgbW91bnROb2RlLmNoaWxkTm9kZXNbMF0pIHtcbiAgICAgIG1vdW50Tm9kZS5pbnNlcnRCZWZvcmUobm9kZSwgbW91bnROb2RlLmNoaWxkTm9kZXNbMF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBtb3VudE5vZGUuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgfVxuXG4gICAgdGhpcy5fZW1pdHRlci5lbWl0KEV2ZW50cy5NT1VOVCwgbm9kZSk7XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfTtcblxuICAvKipcbiAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICovXG4gIEJyb3dzZXJTcHJpdGUucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIHBhcnNlKHRoaXMuc3RyaW5naWZ5KCkpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEZXRhY2ggc3ByaXRlIGZyb20gdGhlIERPTVxuICAgKi9cbiAgQnJvd3NlclNwcml0ZS5wcm90b3R5cGUudW5tb3VudCA9IGZ1bmN0aW9uIHVubW91bnQgKCkge1xuICAgIHRoaXMubm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMubm9kZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBVUkxzIGluIHNwcml0ZSBhbmQgdXNhZ2UgZWxlbWVudHNcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9sZFVybFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3VXJsXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IGB0cnVlYCAtIFVSTHMgd2FzIHVwZGF0ZWQsIGBmYWxzZWAgLSBzcHJpdGUgaXMgbm90IG1vdW50ZWRcbiAgICovXG4gIEJyb3dzZXJTcHJpdGUucHJvdG90eXBlLnVwZGF0ZVVybHMgPSBmdW5jdGlvbiB1cGRhdGVVcmxzJDEgKG9sZFVybCwgbmV3VXJsKSB7XG4gICAgaWYgKCF0aGlzLmlzTW91bnRlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciB1c2FnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuY29uZmlnLnVzYWdlc1RvVXBkYXRlKTtcblxuICAgIHVwZGF0ZVVybHMoXG4gICAgICB0aGlzLm5vZGUsXG4gICAgICB1c2FnZXMsXG4gICAgICAoKGdldFVybFdpdGhvdXRGcmFnbWVudChvbGRVcmwpKSArIFwiI1wiKSxcbiAgICAgICgoZ2V0VXJsV2l0aG91dEZyYWdtZW50KG5ld1VybCkpICsgXCIjXCIpXG4gICAgKTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCBCcm93c2VyU3ByaXRlLnByb3RvdHlwZSwgcHJvdG90eXBlQWNjZXNzb3JzICk7XG5cbiAgcmV0dXJuIEJyb3dzZXJTcHJpdGU7XG59KFNwcml0ZSkpO1xuXG52YXIgcmVhZHkkMSA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUpIHtcbi8qIVxuICAqIGRvbXJlYWR5IChjKSBEdXN0aW4gRGlheiAyMDE0IC0gTGljZW5zZSBNSVRcbiAgKi9cbiFmdW5jdGlvbiAobmFtZSwgZGVmaW5pdGlvbikge1xuXG4gIHsgbW9kdWxlLmV4cG9ydHMgPSBkZWZpbml0aW9uKCk7IH1cblxufSgnZG9tcmVhZHknLCBmdW5jdGlvbiAoKSB7XG5cbiAgdmFyIGZucyA9IFtdLCBsaXN0ZW5lclxuICAgICwgZG9jID0gZG9jdW1lbnRcbiAgICAsIGhhY2sgPSBkb2MuZG9jdW1lbnRFbGVtZW50LmRvU2Nyb2xsXG4gICAgLCBkb21Db250ZW50TG9hZGVkID0gJ0RPTUNvbnRlbnRMb2FkZWQnXG4gICAgLCBsb2FkZWQgPSAoaGFjayA/IC9ebG9hZGVkfF5jLyA6IC9ebG9hZGVkfF5pfF5jLykudGVzdChkb2MucmVhZHlTdGF0ZSk7XG5cblxuICBpZiAoIWxvYWRlZClcbiAgeyBkb2MuYWRkRXZlbnRMaXN0ZW5lcihkb21Db250ZW50TG9hZGVkLCBsaXN0ZW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcihkb21Db250ZW50TG9hZGVkLCBsaXN0ZW5lcik7XG4gICAgbG9hZGVkID0gMTtcbiAgICB3aGlsZSAobGlzdGVuZXIgPSBmbnMuc2hpZnQoKSkgeyBsaXN0ZW5lcigpOyB9XG4gIH0pOyB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChmbikge1xuICAgIGxvYWRlZCA/IHNldFRpbWVvdXQoZm4sIDApIDogZm5zLnB1c2goZm4pO1xuICB9XG5cbn0pO1xufSk7XG5cbnZhciBzcHJpdGVOb2RlSWQgPSAnX19TVkdfU1BSSVRFX05PREVfXyc7XG52YXIgc3ByaXRlR2xvYmFsVmFyTmFtZSA9ICdfX1NWR19TUFJJVEVfXyc7XG52YXIgaXNTcHJpdGVFeGlzdHMgPSAhIXdpbmRvd1tzcHJpdGVHbG9iYWxWYXJOYW1lXTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1tdXRhYmxlLWV4cG9ydHNcbnZhciBzcHJpdGU7XG5cbmlmIChpc1Nwcml0ZUV4aXN0cykge1xuICBzcHJpdGUgPSB3aW5kb3dbc3ByaXRlR2xvYmFsVmFyTmFtZV07XG59IGVsc2Uge1xuICBzcHJpdGUgPSBuZXcgQnJvd3NlclNwcml0ZSh7IGF0dHJzOiB7IGlkOiBzcHJpdGVOb2RlSWQgfSB9KTtcbiAgd2luZG93W3Nwcml0ZUdsb2JhbFZhck5hbWVdID0gc3ByaXRlO1xufVxuXG52YXIgbG9hZFNwcml0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIENoZWNrIGZvciBwYWdlIGFscmVhZHkgY29udGFpbnMgc3ByaXRlIG5vZGVcbiAgICogSWYgZm91bmQgLSBhdHRhY2ggdG8gYW5kIHJldXNlIGl0J3MgY29udGVudFxuICAgKiBJZiBub3QgLSByZW5kZXIgYW5kIG1vdW50IHRoZSBuZXcgc3ByaXRlXG4gICAqL1xuICB2YXIgZXhpc3RpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzcHJpdGVOb2RlSWQpO1xuXG4gIGlmIChleGlzdGluZykge1xuICAgIHNwcml0ZS5hdHRhY2goZXhpc3RpbmcpO1xuICB9IGVsc2Uge1xuICAgIHNwcml0ZS5tb3VudChkb2N1bWVudC5ib2R5LCB0cnVlKTtcbiAgfVxufTtcblxuaWYgKGRvY3VtZW50LmJvZHkpIHtcbiAgbG9hZFNwcml0ZSgpO1xufSBlbHNlIHtcbiAgcmVhZHkkMShsb2FkU3ByaXRlKTtcbn1cblxudmFyIHNwcml0ZSQxID0gc3ByaXRlO1xuXG5yZXR1cm4gc3ByaXRlJDE7XG5cbn0pKSk7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJpbXBvcnQgU3ByaXRlU3ltYm9sIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3ZnLWJha2VyLXJ1bnRpbWUvYnJvd3Nlci1zeW1ib2wuanNcIjtcbmltcG9ydCBzcHJpdGUgZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdmctc3ByaXRlLWxvYWRlci9ydW50aW1lL2Jyb3dzZXItc3ByaXRlLmJ1aWxkLmpzXCI7XG52YXIgc3ltYm9sID0gbmV3IFNwcml0ZVN5bWJvbCh7XG4gIFwiaWRcIjogXCJkZXN0cm95XCIsXG4gIFwidXNlXCI6IFwiZGVzdHJveS11c2FnZVwiLFxuICBcInZpZXdCb3hcIjogXCIwIDAgMTAyNCAxMDI0XCIsXG4gIFwiY29udGVudFwiOiBcIjxzeW1ib2wgY2xhc3M9XFxcImljb25cXFwiIHZpZXdCb3g9XFxcIjAgMCAxMDI0IDEwMjRcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIGlkPVxcXCJkZXN0cm95XFxcIj48ZGVmcz48c3R5bGUgdHlwZT1cXFwidGV4dC9jc3NcXFwiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9XFxcIk05MzMuODkyNTQ4MTkgMTM5LjcxNjA2MzQ4TDg4NC4yMzEyOTI3OSA5MC4wODk5MDM2MyA1MTEuOTY0OTAzNjMgNDYyLjM5MTM4ODM0IDE0MC40MDA0NDExMyA5MC44MjY5MjU4MyA5MC44NDQ0NzQwMyAxNDAuMzQ3Nzk2NTYgNDYyLjQwODkzNjUzIDUxMS45MTIyNTkwNyA5MC4xMDc0NTE4MSA4ODQuMjEzNzQ0NiAxMzkuNzMzNjExNjYgOTMzLjg3NSA1MTIuMDM1MDk2MzcgNTYxLjUzODQxODkyIDg4My41OTk1NTg4NyA5MzMuMTAyODgxNDEgOTMzLjE1NTUyNTk3IDg4My41ODIwMTA2OCA1NjEuNTkxMDYzNDcgNTEyLjAxNzU0ODE5WlxcXCIgcC1pZD1cXFwiNDgzM1xcXCIgLz48L3N5bWJvbD5cIlxufSk7XG52YXIgcmVzdWx0ID0gc3ByaXRlLmFkZChzeW1ib2wpO1xuZXhwb3J0IGRlZmF1bHQgc3ltYm9sIiwiaW1wb3J0IFNwcml0ZVN5bWJvbCBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N2Zy1iYWtlci1ydW50aW1lL2Jyb3dzZXItc3ltYm9sLmpzXCI7XG5pbXBvcnQgc3ByaXRlIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3ZnLXNwcml0ZS1sb2FkZXIvcnVudGltZS9icm93c2VyLXNwcml0ZS5idWlsZC5qc1wiO1xudmFyIHN5bWJvbCA9IG5ldyBTcHJpdGVTeW1ib2woe1xuICBcImlkXCI6IFwiaWNvblwiLFxuICBcInVzZVwiOiBcImljb24tdXNhZ2VcIixcbiAgXCJ2aWV3Qm94XCI6IFwiMCAwIDEwMjQgMTAyNFwiLFxuICBcImNvbnRlbnRcIjogXCI8c3ltYm9sIGNsYXNzPVxcXCJpY29uXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTAyNCAxMDI0XFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiBpZD1cXFwiaWNvblxcXCI+PGRlZnM+PHN0eWxlIHR5cGU9XFxcInRleHQvY3NzXFxcIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPVxcXCJNODUzLjMzMzMzMyAxMDI0TDE3MC42NjY2NjcgMTAyNGMtOTMuODY2NjY3IDAtMTcwLjY2NjY2Ny03Ni44LTE3MC42NjY2NjctMTcwLjY2NjY2N0wwIDE3MC42NjY2NjdjMC05My44NjY2NjcgNzYuOC0xNzAuNjY2NjY3IDE3MC42NjY2NjctMTcwLjY2NjY2N2w2ODIuNjY2NjY2OTkgMGM5My44NjY2NjcgMCAxNzAuNjY2NjY3IDc2LjggMTcwLjY2NjY2NzAxIDE3MC42NjY2NjdsMCA2ODIuNjY2NjY2OTlDMTAyNCA5NDcuMiA5NDcuMiAxMDI0IDg1My4zMzMzMzMgMTAyNHpNMTcwLjY2NjY2NyA4NS4zMzMzMzNDMTIzLjczMzMzMyA4NS4zMzMzMzMgODUuMzMzMzMzIDEyMy43MzMzMzMgODUuMzMzMzMzIDE3MC42NjY2NjdsMCA2ODIuNjY2NjY2OTljMCA0Ni45MzMzMzMgMzguNCA4NS4zMzMzMzMgODUuMzMzMzMzMDEgODUuMzMzMzMzMDFsNjgyLjY2NjY2Njk5IDBjNDYuOTMzMzMzIDAgODUuMzMzMzMzLTM4LjQgODUuMzMzMzMzMDEtODUuMzMzMzMzMDFMOTM4LjY2NjY2NyAxNzAuNjY2NjY3YzAtNDYuOTMzMzMzLTM4LjQtODUuMzMzMzMzLTg1LjMzMzMzMzAxLTg1LjMzMzMzMzAxTDE3MC42NjY2NjcgODUuMzMzMzMzelxcXCIgcC1pZD1cXFwiMTE1NlxcXCIgLz48cGF0aCBkPVxcXCJNOTgxLjMzMzMzMyAzNDEuMzMzMzMzTDQyLjY2NjY2NyAzNDEuMzMzMzMzQzE3LjA2NjY2NyAzNDEuMzMzMzMzIDAgMzI0LjI2NjY2NyAwIDI5OC42NjY2NjdzMTcuMDY2NjY3LTQyLjY2NjY2NyA0Mi42NjY2NjctNDIuNjY2NjY3bDkzOC42NjY2NjY5OSAwYzI1LjYgMCA0Mi42NjY2NjcgMTcuMDY2NjY3IDQyLjY2NjY2NzAxIDQyLjY2NjY2N1MxMDA2LjkzMzMzMyAzNDEuMzMzMzMzIDk4MS4zMzMzMzMgMzQxLjMzMzMzM3pcXFwiIHAtaWQ9XFxcIjExNTdcXFwiIC8+PHBhdGggZD1cXFwiTTE3MC42NjY2NjcgMTcwLjY2NjY2N20tNDIuNjY2NjY3IDBhMSAxIDAgMSAwIDg1LjMzMzMzMyAwIDEgMSAwIDEgMC04NS4zMzMzMzMgMFpcXFwiIHAtaWQ9XFxcIjExNThcXFwiIC8+PHBhdGggZD1cXFwiTTE3MC42NjY2NjcgMjM0LjY2NjY2N0MxMzYuNTMzMzMzIDIzNC42NjY2NjcgMTA2LjY2NjY2NyAyMDQuOCAxMDYuNjY2NjY3IDE3MC42NjY2NjdTMTM2LjUzMzMzMyAxMDYuNjY2NjY3IDE3MC42NjY2NjcgMTA2LjY2NjY2NyAyMzQuNjY2NjY3IDEzNi41MzMzMzMgMjM0LjY2NjY2NyAxNzAuNjY2NjY3IDIwNC44IDIzNC42NjY2NjcgMTcwLjY2NjY2NyAyMzQuNjY2NjY3ek0xNzAuNjY2NjY3IDE0OS4zMzMzMzNDMTU3Ljg2NjY2NyAxNDkuMzMzMzMzIDE0OS4zMzMzMzMgMTU3Ljg2NjY2NyAxNDkuMzMzMzMzIDE3MC42NjY2NjdTMTU3Ljg2NjY2NyAxOTIgMTcwLjY2NjY2NyAxOTIgMTkyIDE4My40NjY2NjcgMTkyIDE3MC42NjY2NjcgMTgzLjQ2NjY2NyAxNDkuMzMzMzMzIDE3MC42NjY2NjcgMTQ5LjMzMzMzM3pcXFwiIHAtaWQ9XFxcIjExNTlcXFwiIC8+PHBhdGggZD1cXFwiTTI5OC42NjY2NjcgMTcwLjY2NjY2N20tNDIuNjY2NjY3IDBhMSAxIDAgMSAwIDg1LjMzMzMzMyAwIDEgMSAwIDEgMC04NS4zMzMzMzMgMFpcXFwiIHAtaWQ9XFxcIjExNjBcXFwiIC8+PHBhdGggZD1cXFwiTTI5OC42NjY2NjcgMjM0LjY2NjY2N0MyNjQuNTMzMzMzIDIzNC42NjY2NjcgMjM0LjY2NjY2NyAyMDQuOCAyMzQuNjY2NjY3IDE3MC42NjY2NjdTMjY0LjUzMzMzMyAxMDYuNjY2NjY3IDI5OC42NjY2NjcgMTA2LjY2NjY2NyAzNjIuNjY2NjY3IDEzNi41MzMzMzMgMzYyLjY2NjY2NyAxNzAuNjY2NjY3IDMzMi44IDIzNC42NjY2NjcgMjk4LjY2NjY2NyAyMzQuNjY2NjY3ek0yOTguNjY2NjY3IDE0OS4zMzMzMzNDMjg1Ljg2NjY2NyAxNDkuMzMzMzMzIDI3Ny4zMzMzMzMgMTU3Ljg2NjY2NyAyNzcuMzMzMzMzIDE3MC42NjY2NjdTMjg1Ljg2NjY2NyAxOTIgMjk4LjY2NjY2NyAxOTIgMzIwIDE4My40NjY2NjcgMzIwIDE3MC42NjY2NjcgMzExLjQ2NjY2NyAxNDkuMzMzMzMzIDI5OC42NjY2NjcgMTQ5LjMzMzMzM3pcXFwiIHAtaWQ9XFxcIjExNjFcXFwiIC8+PHBhdGggZD1cXFwiTTQyNi42NjY2NjcgMTcwLjY2NjY2N20tNDIuNjY2NjY3IDBhMSAxIDAgMSAwIDg1LjMzMzMzMyAwIDEgMSAwIDEgMC04NS4zMzMzMzMgMFpcXFwiIHAtaWQ9XFxcIjExNjJcXFwiIC8+PHBhdGggZD1cXFwiTTQyNi42NjY2NjcgMjM0LjY2NjY2N0MzOTIuNTMzMzMzIDIzNC42NjY2NjcgMzYyLjY2NjY2NyAyMDQuOCAzNjIuNjY2NjY3IDE3MC42NjY2NjdTMzkyLjUzMzMzMyAxMDYuNjY2NjY3IDQyNi42NjY2NjcgMTA2LjY2NjY2N3M2NCAyOS44NjY2NjcgNjQgNjRTNDYwLjggMjM0LjY2NjY2NyA0MjYuNjY2NjY3IDIzNC42NjY2Njd6TTQyNi42NjY2NjcgMTQ5LjMzMzMzM0M0MTMuODY2NjY3IDE0OS4zMzMzMzMgNDA1LjMzMzMzMyAxNTcuODY2NjY3IDQwNS4zMzMzMzMgMTcwLjY2NjY2N1M0MTMuODY2NjY3IDE5MiA0MjYuNjY2NjY3IDE5MnMyMS4zMzMzMzMtOC41MzMzMzMgMjEuMzMzMzMzLTIxLjMzMzMzM1M0MzkuNDY2NjY3IDE0OS4zMzMzMzMgNDI2LjY2NjY2NyAxNDkuMzMzMzMzelxcXCIgcC1pZD1cXFwiMTE2M1xcXCIgLz48L3N5bWJvbD5cIlxufSk7XG52YXIgcmVzdWx0ID0gc3ByaXRlLmFkZChzeW1ib2wpO1xuZXhwb3J0IGRlZmF1bHQgc3ltYm9sIiwiaW1wb3J0ICcuL2ljb24uc3ZnJztcclxuaW1wb3J0ICcuL2Rlc3Ryb3kuc3ZnJztcclxuXHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAnLi9hbmltYXRlLmNzcyc7XHJcbmltcG9ydCAnLi9jb21tb24uY3NzJztcclxuaW1wb3J0ICcuL2ljb24uY3NzJztcclxuaW1wb3J0ICcuL3Rvb2wtYmFyLmNzcyc7XHJcbmltcG9ydCAnLi93aW5kb3cuY3NzJztcclxuaW1wb3J0ICcuL2FjdGlvbi1iYXIuY3NzJztcclxuXHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCB7IEV2ZW50QnVzIH0gZnJvbSAnLi4vY29yZS9ldmVudC1idXMnO1xyXG5pbXBvcnQgeyBKU09OT2JqZWN0IH0gZnJvbSAnLi4vY29yZS9oZWxwZXIvdHlwZSc7XHJcbmltcG9ydCB7IEVudHJ5IH0gZnJvbSAnLi4vZW50cnknO1xyXG5cclxuLyoqXHJcbiAqIOe7hOS7tuexu++8jOaJgOacieeahOe7hOS7tumDveW/hemhu+e7p+aJv+ivpeexu1xyXG4gKiBAdGVtcGxhdGUgVE9wdGlvbiDnu4Tku7blj4LmlbBcclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDb21wb25lbnQ8VE9wdGlvbj4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiDlhaXlj6Plr7nosaFcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGVudHJ5OiBFbnRyeSA9IEVudHJ5LmdldEluc3RhbmNlKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDkuovku7bmgLvnur/lr7nosaFcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGV2ZW50QnVzOiBFdmVudEJ1cyA9IEV2ZW50QnVzLmdldEluc3RhbmNlKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnu4Tku7bllK/kuIDmoIfor4ZcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzeW1ib2w6IHN5bWJvbCA9IFN5bWJvbChcIm1vbmtzb3VsXCIpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5aSE55CG5Yid5aeL5Lyg5YWl5Y+C5pWwXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyDlj6/pgInlj4LmlbBcclxuICAgICAqIEByZXR1cm5zIHZvaWRcclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgaGFuZGxlck9wdGlvbnMob3B0aW9uczogVE9wdGlvbik6IHZvaWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlj5HpgIHkuovku7ZcclxuICAgICAqIEBwYXJhbSBldmVudE5hbWUg5LqL5Lu25ZCN56ewXHJcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSDmtojmga9cclxuICAgICAqIEByZXR1cm5zIHZvaWRcclxuICAgICAqL1xyXG4gICAgc2VuZEV2ZW50KGV2ZW50TmFtZTogc3RyaW5nLCBtZXNzYWdlOiBKU09OT2JqZWN0ID0ge30pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmV2ZW50QnVzLmVtaXQoZXZlbnROYW1lLCB7XHJcbiAgICAgICAgICAgIGRhdGFzZXQ6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIGV2ZW50VGFyZ2V0OiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBldmVudE5hbWUsXHJcbiAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudmFsdWVPZigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuoeeul+WkmuWxguW1jOWll+S4reexu+Wei+WxnuaAp+WAvFxyXG4gICAgICogQHBhcmFtIGtleSDot6/lvoTvvIzmoLzlvI/vvJp3aW5kb3cvdG9vbEJhci9zaXplXHJcbiAgICAgKiBAcGFyYW0gZGVmYXVsdFZhbHVlIOm7mOiupOWAvFxyXG4gICAgICogQHBhcmFtIFtzdGFyT2JqZWN0XSDotbflp4vlr7nosaFcclxuICAgICAqIEByZXR1cm5zIGFueSBcclxuICAgICAqL1xyXG4gICAgZnJvbUpTT05QYXRoKGtleTogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IGFueSwgc3Rhck9iamVjdDogSlNPTk9iamVjdCA9IHRoaXMuZW50cnkpOiBhbnkge1xyXG4gICAgICAgIGlmIChrZXkuaW5kZXhPZihcIi9cIikgPiAtMSkge1xyXG4gICAgICAgICAgICBjb25zdCBrZXlzID0ga2V5LnNwbGl0KFwiL1wiKTtcclxuICAgICAgICAgICAgbGV0IHRpZXIgPSB0aGlzLmZyb21KU09OUGF0aChrZXlzWzBdLCBkZWZhdWx0VmFsdWUpO1xyXG4gICAgICAgICAgICBpZiAoIXRpZXIpIHJldHVybiBkZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgKyAxIDwga2V5cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aWVyID0gdGhpcy5mcm9tSlNPTlBhdGgoa2V5c1tpICsgMV0sIGRlZmF1bHRWYWx1ZSwgdGllcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHJldHVybiB0aWVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aWVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHJldHVybiBzdGFyT2JqZWN0W2tleV0gPz8gZGVmYXVsdFZhbHVlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vJztcclxuaW1wb3J0IHtcclxuICAgIGFkbWl4LCBpc0Jvb2xlYW4sIGlzTm9FbXB0eU9yTnVsbCwgaXNQc3RJbnRcclxufSBmcm9tICcuLi8uLi9jb3JlL2RlY29yYXRvci9wcm9wZXJ0eS1kZWNvcmF0b3InO1xyXG5pbXBvcnQge1xyXG4gICAgYWRkQ1NTQ2xhc3NlcywgYWRkQ1NTU3R5bGVzLCBjcmVhdGVEaXZFbGVtZW50LCBjcmVhdGVTdmdFbGVtZW50XHJcbn0gZnJvbSAnLi4vLi4vY29yZS9oZWxwZXIvZWxlbWVudC1oZWxwZXInO1xyXG5pbXBvcnQgeyBjaGVja0Z1bmN0aW9uIH0gZnJvbSAnLi4vLi4vY29yZS92YWxpZGF0b3InO1xyXG5pbXBvcnQgeyBVSUNvbXBvbmVudCB9IGZyb20gJy4uL3VpLWNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbXBvbmVudEVsZW1lbnQgfSBmcm9tICcuLi91aS1jb21wb25lbnQvdHlwZSc7XHJcbmltcG9ydCB7IGhhbmRsZXJPcHRpb25zIH0gZnJvbSAnLi9wYXJ0aWFsJztcclxuaW1wb3J0IHsgVUlBY3Rpb25CdXR0b25PcHRpb24gfSBmcm9tICcuL3R5cGUnO1xyXG5pbXBvcnQgeyBVSUlDb24gfSBmcm9tICcuLi91aS1pY29uJztcclxuaW1wb3J0IHsgVUlJY29uT3B0aW9uIH0gZnJvbSAnLi4vdWktaWNvbi90eXBlJztcclxuXHJcbi8qKlxyXG4gKiDmk43kvZzmjInpkq5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBVSUFjdGlvbkJ1dHRvbiBleHRlbmRzIENvbXBvbmVudDxVSUFjdGlvbkJ1dHRvbk9wdGlvbj4gaW1wbGVtZW50cyBVSUNvbXBvbmVudDxVSUFjdGlvbkJ1dHRvbk9wdGlvbj57XHJcbiAgICAvKipcclxuICAgICAqIOaehOmAoOWHveaVsFxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMg5Y+v6YCJ5Y+C5pWwXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihvcHRpb25zOiBVSUFjdGlvbkJ1dHRvbk9wdGlvbikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gb3B0aW9ucy5uYW1lO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlck9wdGlvbnMob3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlpITnkIbliJ3lp4vkvKDlhaXlj4LmlbBcclxuICAgICAqIEBwYXJhbSBvcHRpb25zIOWPr+mAieWPguaVsFxyXG4gICAgICogQHJldHVybnMgdm9pZFxyXG4gICAgICovXHJcbiAgICBoYW5kbGVyT3B0aW9uczogKG9wdGlvbnM6IFVJQWN0aW9uQnV0dG9uT3B0aW9uKSA9PiB2b2lkID0gaGFuZGxlck9wdGlvbnM7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlkI3np7BcclxuICAgICAqL1xyXG4gICAgQGlzTm9FbXB0eU9yTnVsbCgpXHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5piv5ZCm56aB55SoXHJcbiAgICAgKi9cclxuICAgIEBpc0Jvb2xlYW4oKVxyXG4gICAgcHVibGljIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlk43lupTlpITnkIblh73mlbBcclxuICAgICAqL1xyXG4gICAgQGFkbWl4KGNoZWNrRnVuY3Rpb24sIHVuZGVmaW5lZClcclxuICAgIHB1YmxpYyBoYW5kbGVyPzogKGV2OiBNb3VzZUV2ZW50KSA9PiB2b2lkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5a695bqmXHJcbiAgICAgKi9cclxuICAgIEBpc1BzdEludCgpXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgd2lkdGg6IG51bWJlciA9IDQ1O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yib5bu657uE5Lu25YWD57Sg5a+56LGhXHJcbiAgICAgKiBAcmV0dXJucyBDb21wb25lbnRFbGVtZW50XHJcbiAgICAgKi9cclxuICAgIHByZXNlbnQoKTogQ29tcG9uZW50RWxlbWVudCB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZURpdkVsZW1lbnQoKTtcclxuXHJcbiAgICAgICAgYWRkQ1NTQ2xhc3NlcyhlbGVtZW50LFxyXG4gICAgICAgICAgICBcImFjdGlvbi1idXR0b25cIixcclxuICAgICAgICAgICAgYGFjdGlvbi0ke3RoaXMubmFtZX1gLFxyXG4gICAgICAgICAgICBcImZsZXgtYm94XCIsXHJcbiAgICAgICAgICAgIFwiY2VudGVyLWFsbFwiLFxyXG4gICAgICAgICAgICB0aGlzLmRpc2FibGVkID8gXCJhY3Rpb24tYnV0dG9uLWRpc2FibGVkXCIgOiB1bmRlZmluZWQpO1xyXG5cclxuICAgICAgICBhZGRDU1NTdHlsZXMoZWxlbWVudCwgPENTU1N0eWxlRGVjbGFyYXRpb24+e1xyXG4gICAgICAgICAgICB3aWR0aDogYCR7dGhpcy53aWR0aH1weGBcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBpZiAodGhpcy5oYW5kbGVyKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldjogTW91c2VFdmVudCkgPT4gKDxhbnk+dGhpcy5oYW5kbGVyKShldiksIHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdWlJY29uID0gbmV3IFVJSUNvbig8VUlJY29uT3B0aW9uPntcclxuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3Qgc3ZnRWxlbWVudCA9IHVpSWNvbi5wcmVzZW50KCk7XHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChzdmdFbGVtZW50KTtcclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFVJQWN0aW9uQnV0dG9uIH0gZnJvbSAnLic7XHJcbmltcG9ydCB7IFVJQWN0aW9uQnV0dG9uT3B0aW9uIH0gZnJvbSAnLi90eXBlJztcclxuXHJcbi8qKlxyXG4gKiDlpITnkIbliJ3lp4vkvKDlhaXlj4LmlbBcclxuICogQHBhcmFtIG9wdGlvbnMg5Y+v6YCJ5Y+C5pWwXHJcbiAqIEByZXR1cm5zIHZvaWRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVyT3B0aW9ucyh0aGlzOiBVSUFjdGlvbkJ1dHRvbiwgb3B0aW9uczogVUlBY3Rpb25CdXR0b25PcHRpb24pOiB2b2lkIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBvcHRpb25zPy5kaXNhYmxlZCA/PyB0aGlzLmRpc2FibGVkO1xyXG4gICAgdGhpcy5oYW5kbGVyID0gb3B0aW9ucz8uaGFuZGxlciA/PyB0aGlzLmhhbmRsZXI7XHJcbn0iLCIvKipcclxuICog5YaF572u5Zu+5qCHXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZW51bSBTdXBwb3J0SWNvbiB7XHJcbiAgICAvKipcclxuICAgICAqIOm7mOiupOWbvuagh1xyXG4gICAgICovXHJcbiAgICBJQ09OID0gXCJpY29uXCIsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliKDpmaTlm77moIdcclxuICAgICAqL1xyXG4gICAgREVTVFJPWSA9IFwiZGVzdHJveVwiXHJcbn1cclxuXHJcblxyXG4vKipcclxuICog6buY6K6k5Zu+5qCHXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9JQ09OOiBzdHJpbmcgPSBTdXBwb3J0SWNvbi5JQ09OO1xyXG5cclxuLyoqXHJcbiAqIOm7mOiupOWbvuagh+minOiJslxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfSUNPTl9DT0xPUjogc3RyaW5nID0gXCIjMDAwMDAwXCI7XHJcblxyXG4vKipcclxuICog6buY6K6k5Zu+5qCH5aSn5bCPXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9JQ09OX1NJWkU6IG51bWJlciA9IDE0OyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uLyc7XHJcbmltcG9ydCB7IGFkbWl4LCBpc0NvbG9yLCBpc05vRW1wdHlPck51bGwsIGlzUHN0SW50IH0gZnJvbSAnLi4vLi4vY29yZS9kZWNvcmF0b3IvcHJvcGVydHktZGVjb3JhdG9yJztcclxuaW1wb3J0IHtcclxuICAgIGFkZENTU0NsYXNzZXMsIGNyZWF0ZURpdkVsZW1lbnQsIGNyZWF0ZVN2Z0VsZW1lbnRcclxufSBmcm9tICcuLi8uLi9jb3JlL2hlbHBlci9lbGVtZW50LWhlbHBlcic7XHJcbmltcG9ydCB7IGNoZWNrQ29sb3IgfSBmcm9tICcuLi8uLi9jb3JlL3ZhbGlkYXRvcic7XHJcbmltcG9ydCB7IFVJQ29tcG9uZW50IH0gZnJvbSAnLi4vdWktY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tcG9uZW50RWxlbWVudCB9IGZyb20gJy4uL3VpLWNvbXBvbmVudC90eXBlJztcclxuaW1wb3J0IHsgREVGQVVMVF9JQ09OLCBERUZBVUxUX0lDT05fQ09MT1IsIERFRkFVTFRfSUNPTl9TSVpFIH0gZnJvbSAnLi9jb25zdCc7XHJcbmltcG9ydCB7IGhhbmRsZXJPcHRpb25zIH0gZnJvbSAnLi9wYXJ0aWFsJztcclxuaW1wb3J0IHsgVUlJY29uT3B0aW9uIH0gZnJvbSAnLi90eXBlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBVSUlDb24gZXh0ZW5kcyBDb21wb25lbnQ8VUlJY29uT3B0aW9uPiBpbXBsZW1lbnRzIFVJQ29tcG9uZW50PFVJSWNvbk9wdGlvbj4ge1xyXG4gICAgLyoqXHJcbiAgICAqIOaehOmAoOWHveaVsFxyXG4gICAgKiBAcGFyYW0gb3B0aW9ucyDlj6/pgInlj4LmlbBcclxuICAgICovXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Iob3B0aW9uczogVUlJY29uT3B0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBvcHRpb25zPy5uYW1lO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlck9wdGlvbnMob3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlpITnkIbliJ3lp4vkvKDlhaXlj4LmlbBcclxuICAgICAqIEBwYXJhbSBvcHRpb25zIOWPr+mAieWPguaVsFxyXG4gICAgICogQHJldHVybnMgdm9pZFxyXG4gICAgICovXHJcbiAgICBoYW5kbGVyT3B0aW9uczogKG9wdGlvbnM6IFVJSWNvbk9wdGlvbikgPT4gdm9pZCA9IGhhbmRsZXJPcHRpb25zO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Zu+5qCH5ZCN56ewXHJcbiAgICAgKi9cclxuICAgIEBpc05vRW1wdHlPck51bGwoKVxyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWbvuagh+minOiJslxyXG4gICAgICovXHJcbiAgICBAYWRtaXgoY2hlY2tDb2xvciwgbnVsbClcclxuICAgIHB1YmxpYyBjb2xvcjogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlm77moIflpKflsI9cclxuICAgICAqL1xyXG4gICAgQGlzUHN0SW50KClcclxuICAgIHB1YmxpYyBzaXplOiBudW1iZXIgPSBERUZBVUxUX0lDT05fU0laRTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIm+W7uue7hOS7tuWFg+e0oOWvueixoVxyXG4gICAgICogQHJldHVybnMgQ29tcG9uZW50RWxlbWVudFxyXG4gICAgICovXHJcbiAgICBwcmVzZW50KCk6IENvbXBvbmVudEVsZW1lbnQge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVEaXZFbGVtZW50KCk7XHJcblxyXG4gICAgICAgIGFkZENTU0NsYXNzZXMoZWxlbWVudCxcclxuICAgICAgICAgICAgXCJpY29uXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBzdmdFbGVtZW50ID0gY3JlYXRlU3ZnRWxlbWVudCh0aGlzLm5hbWUpO1xyXG4gICAgICAgIHN2Z0VsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgYCR7dGhpcy5lbnRyeS5wcmVmaXh9c3ZnYCk7XHJcbiAgICAgICAgc3ZnRWxlbWVudC5zdHlsZS5mb250U2l6ZSA9IGAke3RoaXMuc2l6ZX1weGA7XHJcbiAgICAgICAgc3ZnRWxlbWVudC5zdHlsZS5jb2xvciA9IHRoaXMuY29sb3I7XHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChzdmdFbGVtZW50KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBVSUlDb24gfSBmcm9tICcuJztcclxuaW1wb3J0IHsgVUlJY29uT3B0aW9uIH0gZnJvbSAnLi90eXBlJztcclxuXHJcbi8qKlxyXG4gKiDlpITnkIbliJ3lp4vkvKDlhaXlj4LmlbBcclxuICogQHBhcmFtIG9wdGlvbnMg5Y+v6YCJ5Y+C5pWwXHJcbiAqIEByZXR1cm5zIHZvaWRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVyT3B0aW9ucyh0aGlzOiBVSUlDb24sIG9wdGlvbnM6IFVJSWNvbk9wdGlvbik6IHZvaWQge1xyXG4gICAgdGhpcy5jb2xvciA9IG9wdGlvbnM/LmNvbG9yID8/IHRoaXMuY29sb3I7XHJcbiAgICB0aGlzLnNpemUgPSBvcHRpb25zPy5zaXplID8/IHRoaXMuc2l6ZTtcclxufSIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uLyc7XHJcbmltcG9ydCB7IGFkbWl4LCBpc0NvbG9yLCBpc1BzdE51bWJlciB9IGZyb20gJy4uLy4uL2NvcmUvZGVjb3JhdG9yL3Byb3BlcnR5LWRlY29yYXRvcic7XHJcbmltcG9ydCB7IGFkZENTU0NsYXNzZXMsIGFkZENTU1N0eWxlcywgY3JlYXRlRGl2RWxlbWVudCB9IGZyb20gJy4uLy4uL2NvcmUvaGVscGVyL2VsZW1lbnQtaGVscGVyJztcclxuaW1wb3J0IHsgY2hlY2tDb2xvciwgY2hlY2tOb0VtcHR5T3JOdWxsLCBjaGVja1BzdEludCwgY2hlY2tTdHJpbmcgfSBmcm9tICcuLi8uLi9jb3JlL3ZhbGlkYXRvcic7XHJcbmltcG9ydCB7IERFRkFVTFRfVE9PTEJBUl9CQUNLR1JPVU5EX0NPTE9SLCBERUZBVUxUX1RPT0xCQVJfSEVJR0hUIH0gZnJvbSAnLi4vLi4vZW50cnkvY29uc3QnO1xyXG5pbXBvcnQgeyBVSUNvbXBvbmVudCB9IGZyb20gJy4uL3VpLWNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbXBvbmVudEVsZW1lbnQgfSBmcm9tICcuLi91aS1jb21wb25lbnQvdHlwZSc7XHJcbmltcG9ydCB7IFVJSUNvbiB9IGZyb20gJy4uL3VpLWljb24nO1xyXG5pbXBvcnQgeyBVSUljb25PcHRpb24gfSBmcm9tICcuLi91aS1pY29uL3R5cGUnO1xyXG5pbXBvcnQgeyBBbGlnbiB9IGZyb20gJy4vY29uc3QnO1xyXG5pbXBvcnQgeyBoYW5kbGVyT3B0aW9ucyB9IGZyb20gJy4vcGFydGlhbCc7XHJcbmltcG9ydCB7IFRpdGxlQmFyT3B0aW9uLCBVSVRvb2xCYXJPcHRpb24gfSBmcm9tICcuL3R5cGUnO1xyXG5cclxuLyoqXHJcbiAqIOW3peWFt+agj+exu1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFVJVG9vbEJhciBleHRlbmRzIENvbXBvbmVudDxVSVRvb2xCYXJPcHRpb24+IGltcGxlbWVudHMgVUlDb21wb25lbnQ8VUlUb29sQmFyT3B0aW9uPiB7XHJcbiAgICAvKipcclxuICAgICAqIOaehOmAoOWHveaVsFxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMg5Y+v6YCJ5Y+C5pWwXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihvcHRpb25zOiBVSVRvb2xCYXJPcHRpb24pIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlck9wdGlvbnMob3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlpITnkIbliJ3lp4vkvKDlhaXlj4LmlbBcclxuICAgICAqIEBwYXJhbSBvcHRpb25zIOWPr+mAieWPguaVsFxyXG4gICAgICogQHJldHVybnMgdm9pZFxyXG4gICAgICovXHJcbiAgICBoYW5kbGVyT3B0aW9uczogKG9wdGlvbnM6IFVJVG9vbEJhck9wdGlvbikgPT4gdm9pZCA9IGhhbmRsZXJPcHRpb25zO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5qCH6aKYXHJcbiAgICAgKi9cclxuICAgIEBhZG1peCh7XHJcbiAgICAgICAgbGFiZWw6IGNoZWNrU3RyaW5nLFxyXG4gICAgICAgIGNvbG9yOiBjaGVja0NvbG9yLFxyXG4gICAgICAgIGFsaWduOiBbQWxpZ24uTEVGVCwgQWxpZ24uQ0VOVEVSLCBBbGlnbi5SSUdIVF0sXHJcbiAgICAgICAgZm9udFNpemU6IGNoZWNrUHN0SW50XHJcbiAgICB9LCBmYWxzZSlcclxuICAgIHB1YmxpYyB0aXRsZUJhcjogVGl0bGVCYXJPcHRpb24gfCBmYWxzZSA9IDxUaXRsZUJhck9wdGlvbiB8IGZhbHNlPnRoaXMuZnJvbUpTT05QYXRoKFwid2luZG93L3Rvb2xCYXIvdGl0bGVCYXJcIiwgZmFsc2UpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6buY6K6k6auY5bqmXHJcbiAgICAgKi9cclxuICAgIEBpc1BzdE51bWJlcigpXHJcbiAgICBwdWJsaWMgaGVpZ2h0OiBudW1iZXIgPSB0aGlzLmZyb21KU09OUGF0aChcIndpbmRvdy90b29sQmFyL2hlaWdodFwiLCBERUZBVUxUX1RPT0xCQVJfSEVJR0hUKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOiDjOaZr+minOiJslxyXG4gICAgICovXHJcbiAgICBAaXNDb2xvcigpXHJcbiAgICBwdWJsaWMgYmFja2dyb3VuZENvbG9yOiBzdHJpbmcgPSB0aGlzLmZyb21KU09OUGF0aChcIndpbmRvdy90b29sQmFyL2JhY2tncm91bmRDb2xvclwiLCBERUZBVUxUX1RPT0xCQVJfQkFDS0dST1VORF9DT0xPUilcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWbvuagh1xyXG4gICAgICovXHJcbiAgICBAYWRtaXgoe1xyXG4gICAgICAgIG5hbWU6IGNoZWNrTm9FbXB0eU9yTnVsbCxcclxuICAgICAgICBzaXplOiBjaGVja1BzdEludCxcclxuICAgICAgICBjb2xvcjogY2hlY2tDb2xvclxyXG4gICAgfSwgZmFsc2UpXHJcbiAgICBwdWJsaWMgaWNvbjogVUlJY29uT3B0aW9uIHwgZmFsc2UgPSA8VUlJY29uT3B0aW9uIHwgZmFsc2U+dGhpcy5mcm9tSlNPTlBhdGgoXCJ3aW5kb3cvdG9vbEJhci9pY29uXCIsIGZhbHNlKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIm+W7uue7hOS7tuWFg+e0oOWvueixoVxyXG4gICAgICogQHJldHVybnMgQ29tcG9uZW50RWxlbWVudFxyXG4gICAgICovXHJcbiAgICBwcmVzZW50KCk6IENvbXBvbmVudEVsZW1lbnQge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVEaXZFbGVtZW50KCk7XHJcblxyXG4gICAgICAgIGFkZENTU0NsYXNzZXMoZWxlbWVudCxcclxuICAgICAgICAgICAgXCJ0b29sLWJhclwiLFxyXG4gICAgICAgICAgICBcImZsZXgtYm94XCIsXHJcbiAgICAgICAgICAgIFwidmVydGljYWwtbWlkZGxlXCIpO1xyXG5cclxuICAgICAgICBhZGRDU1NTdHlsZXMoZWxlbWVudCxcclxuICAgICAgICAgICAgPENTU1N0eWxlRGVjbGFyYXRpb24+e1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBgJHt0aGlzLmhlaWdodH1weGAsXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG5cclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOi/veWKoOWtkOWFg+e0oFxyXG4gICAgICogQHBhcmFtIGVsZW1lbnQg54i25YWD57SgXHJcbiAgICAgKiBAcmV0dXJucyB2b2lkXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYXBwZW5kQ2hpbGQoZWxlbWVudDogSFRNTERpdkVsZW1lbnQpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5pY29uICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBjb25zdCB1aUljb24gPSBuZXcgVUlJQ29uKHRoaXMuaWNvbik7XHJcbiAgICAgICAgICAgIGNvbnN0IHVpSWNvbkVsZW1lbnQgPSB1aUljb24ucHJlc2VudCgpO1xyXG4gICAgICAgICAgICBhZGRDU1NDbGFzc2VzKHVpSWNvbkVsZW1lbnQsIFwidG9vbC1iYXItaWNvblwiKTtcclxuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh1aUljb25FbGVtZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnRpdGxlQmFyICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBjb25zdCB0aXRsZUJhckVsZW1lbnQgPSBjcmVhdGVEaXZFbGVtZW50KCk7XHJcblxyXG4gICAgICAgICAgICBhZGRDU1NDbGFzc2VzKHRpdGxlQmFyRWxlbWVudCxcclxuICAgICAgICAgICAgICAgIFwidGl0bGUtYmFyXCIsXHJcbiAgICAgICAgICAgICAgICBcImZsZXgtaXRlbVwiKTtcclxuXHJcbiAgICAgICAgICAgIGFkZENTU1N0eWxlcyh0aXRsZUJhckVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICA8Q1NTU3R5bGVEZWNsYXJhdGlvbj57XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGAke3RoaXMudGl0bGVCYXIuY29sb3J9YCxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IGAke3RoaXMudGl0bGVCYXIuYWxpZ259YCxcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogYCR7dGhpcy50aXRsZUJhci5mb250U2l6ZX1weGBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGl0bGVCYXJFbGVtZW50LnRleHRDb250ZW50ID0gPHN0cmluZz50aGlzLnRpdGxlQmFyLmxhYmVsO1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aXRsZUJhckVsZW1lbnQpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBVSUljb25PcHRpb24gfSBmcm9tICcuLi91aS1pY29uL3R5cGUnO1xyXG5pbXBvcnQgeyBVSVRvb2xCYXIgfSBmcm9tICcuLyc7XHJcbmltcG9ydCB7IFRpdGxlQmFyT3B0aW9uLCBVSVRvb2xCYXJPcHRpb24gfSBmcm9tICcuL3R5cGUnO1xyXG5cclxuLyoqXHJcbiAqIOWkhOeQhuWIneWni+S8oOWFpeWPguaVsFxyXG4gKiBAcGFyYW0gb3B0aW9ucyDlj6/pgInlj4LmlbBcclxuICogQHJldHVybnMgdm9pZFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZXJPcHRpb25zKHRoaXM6IFVJVG9vbEJhciwgb3B0aW9uczogVUlUb29sQmFyT3B0aW9uKTogdm9pZCB7XHJcbiAgICB0aGlzLmhlaWdodCA9IG9wdGlvbnM/LmhlaWdodCA/PyB0aGlzLmhlaWdodDtcclxuICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gb3B0aW9ucz8uYmFja2dyb3VuZENvbG9yID8/IHRoaXMuYmFja2dyb3VuZENvbG9yO1xyXG4gICAgdGhpcy50aXRsZUJhciA9IDxUaXRsZUJhck9wdGlvbiB8IGZhbHNlPm9wdGlvbnM/LnRpdGxlQmFyID8/IHRoaXMudGl0bGVCYXI7XHJcbiAgICB0aGlzLmljb24gPSA8VUlJY29uT3B0aW9uIHwgZmFsc2U+b3B0aW9ucz8uaWNvbiA/PyB0aGlzLmljb247XHJcbn0iLCIvKipcclxuICog6L655qGG5qC35byPXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZW51bSBCb3JkZXJTdHlsZSB7XHJcbiAgICAvKipcclxuICAgICAqIOeCueeKtlxyXG4gICAgICovXHJcbiAgICBET1RURUQgPSBcImRvdHRlZFwiLFxyXG4gICAgLyoqXHJcbiAgICAgKiDomZrnur9cclxuICAgICAqL1xyXG4gICAgREFTSEVEID0gXCJkYXNoZWRcIixcclxuICAgIC8qKlxyXG4gICAgICog5a6e57q/XHJcbiAgICAgKi9cclxuICAgIFNPTElEID0gXCJzb2xpZFwiLFxyXG4gICAgLyoqXHJcbiAgICAgKiDlj4znur9cclxuICAgICAqL1xyXG4gICAgRE9VQkxFID0gXCJkb3VibGVcIlxyXG59XHJcblxyXG4vKipcclxuICog5pSv5oyB5Yqo55S7XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZW51bSBBbmltYXRpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiDnvKnmlL5cclxuICAgICAqL1xyXG4gICAgWk9PTSA9IFwiem9vbVwiXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlgY/np7tcclxuICovXHJcbmV4cG9ydCBjb25zdCBlbnVtIE9mZnNldCB7XHJcbiAgICAvKipcclxuICAgICAqIOS4remXtFxyXG4gICAgICovXHJcbiAgICBDRU5URVIgPSBcImNlbnRlclwiLFxyXG4gICAgLyoqXHJcbiAgICAgKiDpobbpg6jkuK3pl7RcclxuICAgICAqL1xyXG4gICAgVE9QX0NFTlRFUiA9IFwidG9wLWNlbnRlclwiLFxyXG4gICAgLyoqXHJcbiAgICAgKiDlupXpg6jkuK3pl7RcclxuICAgICAqL1xyXG4gICAgQk9UVE9NX0NFTlRFUiA9IFwiYm90dG9tLWNlbnRlclwiLFxyXG4gICAgLyoqXHJcbiAgICAgKiDlt6bkuIrop5JcclxuICAgICAqL1xyXG4gICAgTEVGVF9UT1AgPSBcImxlZnQtdG9wXCIsXHJcbiAgICAvKipcclxuICAgICAqIOW3puS4remXtFxyXG4gICAgICovXHJcbiAgICBMRUZUX01JRERMRSA9IFwibGVmdC1taWRkbGVcIixcclxuICAgIC8qKlxyXG4gICAgICog5bem5LiL6KeSXHJcbiAgICAgKi9cclxuICAgIExFRlRfQk9UVE9NID0gXCJsZWZ0LWJvdHRvbVwiLFxyXG4gICAgLyoqXHJcbiAgICAgKiDlj7PkuIrop5JcclxuICAgICAqL1xyXG4gICAgUklHSFRfVE9QID0gXCJyaWdodC10b3BcIixcclxuICAgIC8qKlxyXG4gICAgICog5Y+z5Lit6Ze0XHJcbiAgICAgKi9cclxuICAgIFJJR0hUX01JRERMRSA9IFwicmlnaHQtbWlkZGxlXCIsXHJcbiAgICAvKipcclxuICAgICAqIOWPs+S4i+inklxyXG4gICAgICovXHJcbiAgICBSSUdIVF9CT1RUT00gPSBcInJpZ2h0LWJvdHRvbVwiXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDpu5jorqTmnIDlsI/lrr3luqZcclxuICovXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX01JTl9XSURUSDogbnVtYmVyID0gMjAwO1xyXG5cclxuLyoqXHJcbiAqIOm7mOiupOacgOWwj+mrmOW6plxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfTUlOX0hFSUdIVDogbnVtYmVyID0gMjAwO1xyXG5cclxuLyoqXHJcbiAqIOm7mOiupOacgOWkp+WuveW6plxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfTUFYX1dJRFRIOiBudW1iZXIgPSBpbm5lcldpZHRoO1xyXG5cclxuLyoqXHJcbiAqIOm7mOiupOacgOWkp+mrmOW6plxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfTUFYX0hFSUdIVDogbnVtYmVyID0gaW5uZXJIZWlnaHQ7XHJcblxyXG4vKipcclxuICog6buY6K6k6L655qGG5a695bqmXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9CT1JERVJfV0lEVEg6IG51bWJlciA9IDE7XHJcblxyXG4vKipcclxuICog6buY6K6k6L655qGG5qC35byPXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9CT1JERVJfU1RZTEU6IEJvcmRlclN0eWxlID0gQm9yZGVyU3R5bGUuU09MSUQ7XHJcblxyXG4vKipcclxuICog6buY6K6k6L655qGG6aKc6ImyXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9CT1JERVJfQ09MT1I6IHN0cmluZyA9IFwiIzNiYWNlZFwiO1xyXG5cclxuLyoqXHJcbiAqIOm7mOiupOi+ueahhuWchuinklxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfQk9SREVSX1JBRElVUzogbnVtYmVyID0gNDsiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8nO1xyXG5pbXBvcnQge1xyXG4gICAgYWRtaXgsIGluVmFsdWVPcHRpb25zLCBpc0Jvb2xlYW4sIGlzQ29sb3IsIGlzTm9FbXB0eU9yTnVsbCwgaXNQc3ROdW1iZXJcclxufSBmcm9tICcuLi8uLi9jb3JlL2RlY29yYXRvci9wcm9wZXJ0eS1kZWNvcmF0b3InO1xyXG5pbXBvcnQge1xyXG4gICAgYWRkQ1NTQ2xhc3NlcywgYWRkQ1NTU3R5bGVzLCBjcmVhdGVEaXZFbGVtZW50LCBoYXNDU1NDbGFzcywgcmVtb3ZlQ1NTQ2xhc3NlcywgcmVtb3ZlRGl2RWxlbWVudFxyXG59IGZyb20gJy4uLy4uL2NvcmUvaGVscGVyL2VsZW1lbnQtaGVscGVyJztcclxuaW1wb3J0IHtcclxuICAgIGNoZWNrQ29sb3IsIGNoZWNrTm9FbXB0eU9yTnVsbCwgY2hlY2tQc3RJbnQsIGNoZWNrUHN0TnVtYmVyLCBjaGVja1N0cmluZ1xyXG59IGZyb20gJy4uLy4uL2NvcmUvdmFsaWRhdG9yJztcclxuaW1wb3J0IHtcclxuICAgIERFRkFVTFRfV0lORE9XX0JBQ0tHUk9VTkRfQ09MT1IsIERFRkFVTFRfV0lORE9XX0hFSUdIVCwgREVGQVVMVF9XSU5ET1dfV0lEVEhcclxufSBmcm9tICcuLi8uLi9lbnRyeS9jb25zdCc7XHJcbmltcG9ydCB7IFVJQWN0aW9uQnV0dG9uIH0gZnJvbSAnLi4vdWktYWN0aW9uLWJ1dHRvbic7XHJcbmltcG9ydCB7IFVJQWN0aW9uQnV0dG9uT3B0aW9uIH0gZnJvbSAnLi4vdWktYWN0aW9uLWJ1dHRvbi90eXBlJztcclxuaW1wb3J0IHsgVUlDb21wb25lbnQgfSBmcm9tICcuLi91aS1jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRFbGVtZW50IH0gZnJvbSAnLi4vdWktY29tcG9uZW50L3R5cGUnO1xyXG5pbXBvcnQgeyBVSVRvb2xCYXIgfSBmcm9tICcuLi91aS10b29sLWJhcic7XHJcbmltcG9ydCB7IEFsaWduIH0gZnJvbSAnLi4vdWktdG9vbC1iYXIvY29uc3QnO1xyXG5pbXBvcnQgeyBVSVRvb2xCYXJPcHRpb24gfSBmcm9tICcuLi91aS10b29sLWJhci90eXBlJztcclxuaW1wb3J0IHtcclxuICAgIEFuaW1hdGlvbiwgQm9yZGVyU3R5bGUsIERFRkFVTFRfQk9SREVSX0NPTE9SLCBERUZBVUxUX0JPUkRFUl9SQURJVVMsIERFRkFVTFRfQk9SREVSX1NUWUxFLFxyXG4gICAgREVGQVVMVF9CT1JERVJfV0lEVEgsIERFRkFVTFRfTUFYX0hFSUdIVCwgREVGQVVMVF9NQVhfV0lEVEgsIERFRkFVTFRfTUlOX0hFSUdIVCxcclxuICAgIERFRkFVTFRfTUlOX1dJRFRIXHJcbn0gZnJvbSAnLi9jb25zdCc7XHJcbmltcG9ydCB7IGhhbmRsZXJPcHRpb25zIH0gZnJvbSAnLi9wYXJ0aWFsJztcclxuaW1wb3J0IHsgQm9yZGVyT3B0aW9uLCBVSVdpbmRvd09wdGlvbiB9IGZyb20gJy4vdHlwZSc7XHJcbmltcG9ydCB7IFN1cHBvcnRJY29uIH0gZnJvbSAnLi4vdWktaWNvbi9jb25zdCc7XHJcblxyXG4vKipcclxuICog56qX5Y+j57uE5Lu257G7XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVUlXaW5kb3cgZXh0ZW5kcyBDb21wb25lbnQ8VUlXaW5kb3dPcHRpb24+IGltcGxlbWVudHMgVUlDb21wb25lbnQ8VUlXaW5kb3dPcHRpb24+IHtcclxuICAgIC8qKlxyXG4gICAgICog5p6E6YCg5Ye95pWwXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyDlj6/pgInlj4LmlbBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG9wdGlvbnM6IFVJV2luZG93T3B0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmlkID0gb3B0aW9ucz8uaWQ7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVyT3B0aW9ucyhvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWkhOeQhuWIneWni+S8oOWFpeWPguaVsFxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMg5Y+v6YCJ5Y+C5pWwXHJcbiAgICAgKiBAcmV0dXJucyB2b2lkXHJcbiAgICAgKi9cclxuICAgIGhhbmRsZXJPcHRpb25zOiAob3B0aW9uczogVUlXaW5kb3dPcHRpb24pID0+IHZvaWQgPSBoYW5kbGVyT3B0aW9ucztcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWUr+S4gElkXHJcbiAgICAgKi9cclxuICAgIEBpc05vRW1wdHlPck51bGwoKVxyXG4gICAgcHVibGljIHJlYWRvbmx5IGlkOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlrr3luqZcclxuICAgICAqL1xyXG4gICAgQGlzUHN0TnVtYmVyKClcclxuICAgIHB1YmxpYyB3aWR0aDogbnVtYmVyID0gPG51bWJlcj50aGlzLmZyb21KU09OUGF0aChcIndpbmRvdy93aWR0aFwiLCBERUZBVUxUX1dJTkRPV19XSURUSCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpq5jluqZcclxuICAgICAqL1xyXG4gICAgQGlzUHN0TnVtYmVyKClcclxuICAgIHB1YmxpYyBoZWlnaHQ6IG51bWJlciA9IDxudW1iZXI+dGhpcy5mcm9tSlNPTlBhdGgoXCJ3aW5kb3cvaGVpZ2h0XCIsIERFRkFVTFRfV0lORE9XX0hFSUdIVCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmnIDlsI/lrr3luqZcclxuICAgICAqL1xyXG4gICAgQGlzUHN0TnVtYmVyKClcclxuICAgIHB1YmxpYyBtaW5XaWR0aDogbnVtYmVyID0gREVGQVVMVF9NSU5fV0lEVEg7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmnIDlsI/pq5jluqZcclxuICAgICAqL1xyXG4gICAgQGlzUHN0TnVtYmVyKClcclxuICAgIHB1YmxpYyBtaW5IZWlnaHQ6IG51bWJlciA9IERFRkFVTFRfTUlOX0hFSUdIVDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOacgOWkp+WuveW6plxyXG4gICAgICovXHJcbiAgICBAaXNQc3ROdW1iZXIoKVxyXG4gICAgcHVibGljIG1heFdpZHRoOiBudW1iZXIgPSBERUZBVUxUX01BWF9XSURUSDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOacgOWkp+mrmOW6plxyXG4gICAgICovXHJcbiAgICBAaXNQc3ROdW1iZXIoKVxyXG4gICAgcHVibGljIG1heEhlaWdodDogbnVtYmVyID0gREVGQVVMVF9NQVhfSEVJR0hUO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5bem6L656L656LedXHJcbiAgICAgKi9cclxuICAgIEBpc1BzdE51bWJlcigpXHJcbiAgICBwdWJsaWMgbGVmdDogbnVtYmVyID0gKERFRkFVTFRfTUFYX1dJRFRIIC0gdGhpcy53aWR0aCkgLyAyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Y+z6L656L656LedXHJcbiAgICAgKi9cclxuICAgIEBpc1BzdE51bWJlcigpXHJcbiAgICBwdWJsaWMgdG9wOiBudW1iZXIgPSAoREVGQVVMVF9NQVhfSEVJR0hUIC0gdGhpcy5oZWlnaHQpIC8gMjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOi+ueahhuagt+W8j1xyXG4gICAgICovXHJcbiAgICBAYWRtaXgoe1xyXG4gICAgICAgIHdpZHRoOiBjaGVja1BzdEludCwgLyoqIOato+aVtOaVsCAqL1xyXG4gICAgICAgIHN0eWxlOiBbQm9yZGVyU3R5bGUuU09MSUQsIEJvcmRlclN0eWxlLkRPVUJMRSwgQm9yZGVyU3R5bGUuRE9UVEVELCBCb3JkZXJTdHlsZS5EQVNIRURdLCAvKiog5Y+v6YCJ5YC8ICovXHJcbiAgICAgICAgY29sb3I6IGNoZWNrQ29sb3IsICAvKiog6Z2e56m65a2X56ym5LiyICovXHJcbiAgICAgICAgcmFkaXVzOiBjaGVja1BzdEludCAvKiog5q2j5pW05pWwICovXHJcbiAgICB9LCBmYWxzZSlcclxuICAgIHB1YmxpYyBib3JkZXI6IEJvcmRlck9wdGlvbiB8IGZhbHNlID0gPEJvcmRlck9wdGlvbj57XHJcbiAgICAgICAgd2lkdGg6IERFRkFVTFRfQk9SREVSX1dJRFRILFxyXG4gICAgICAgIHN0eWxlOiBERUZBVUxUX0JPUkRFUl9TVFlMRSxcclxuICAgICAgICBjb2xvcjogREVGQVVMVF9CT1JERVJfQ09MT1IsXHJcbiAgICAgICAgcmFkaXVzOiBERUZBVUxUX0JPUkRFUl9SQURJVVNcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpmLTlvbFcclxuICAgICAqL1xyXG4gICAgQGlzQm9vbGVhbigpXHJcbiAgICBwdWJsaWMgYm94U2hhZG93OiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKqOeUu1xyXG4gICAgICovXHJcbiAgICBAaW5WYWx1ZU9wdGlvbnMoQW5pbWF0aW9uLlpPT00sIGZhbHNlKVxyXG4gICAgcHVibGljIGFuaW1hdGU6IGZhbHNlIHwgQW5pbWF0aW9uID0gQW5pbWF0aW9uLlpPT007XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDog4zmma/popzoibJcclxuICAgICAqL1xyXG4gICAgQGlzQ29sb3IoKVxyXG4gICAgcHVibGljIGJhY2tncm91bmRDb2xvcjogc3RyaW5nID0gPHN0cmluZz50aGlzLmZyb21KU09OUGF0aChcIndpbmRvdy9iYWNrZ3JvdW5kQ29sb3JcIiwgREVGQVVMVF9XSU5ET1dfQkFDS0dST1VORF9DT0xPUik7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlt6XlhbfmoI9cclxuICAgICAqL1xyXG4gICAgQGFkbWl4KHtcclxuICAgICAgICBoZWlnaHQ6IGNoZWNrUHN0TnVtYmVyLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogY2hlY2tDb2xvcixcclxuICAgICAgICB0aXRsZUJhcjoge1xyXG4gICAgICAgICAgICBkZWNvcmF0b3I6IHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBjaGVja1N0cmluZyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBjaGVja0NvbG9yLFxyXG4gICAgICAgICAgICAgICAgYWxpZ246IFtBbGlnbi5MRUZULCBBbGlnbi5DRU5URVIsIEFsaWduLlJJR0hUXSxcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBjaGVja1BzdEludFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvcHRpb25zOiBbZmFsc2VdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpY29uOiB7XHJcbiAgICAgICAgICAgIGRlY29yYXRvcjoge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogY2hlY2tOb0VtcHR5T3JOdWxsLFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogY2hlY2tQc3RJbnQsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogY2hlY2tDb2xvclxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvcHRpb25zOiBbZmFsc2VdXHJcbiAgICAgICAgfVxyXG4gICAgfSwgZmFsc2UpXHJcbiAgICBwdWJsaWMgdG9vbEJhcjogVUlUb29sQmFyT3B0aW9uIHwgZmFsc2UgPSA8VUlUb29sQmFyT3B0aW9uIHwgZmFsc2U+dGhpcy5mcm9tSlNPTlBhdGgoXCJ3aW5kb3cvdG9vbEJhclwiLCBmYWxzZSk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnqpflj6PlhYPntKDlr7nosaFcclxuICAgICAqL1xyXG4gICAgcHVibGljIF93aW5kb3dFbGVtZW50OiBIVE1MRGl2RWxlbWVudCB8IG51bGwgPSBudWxsO1xyXG4gICAgZ2V0IHdpbmRvd0VsZW1lbnQoKTogSFRNTERpdkVsZW1lbnQgfCBudWxsIHtcclxuICAgICAgICByZXR1cm4gPEhUTUxEaXZFbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aGlzLmVudHJ5LnByZWZpeCArIHRoaXMuaWR9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJvlu7rnu4Tku7blhYPntKDlr7nosaFcclxuICAgICAqIEByZXR1cm5zIENvbXBvbmVudEVsZW1lbnRcclxuICAgICAqL1xyXG4gICAgcHJlc2VudCgpOiBDb21wb25lbnRFbGVtZW50IHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRlRGl2RWxlbWVudChgJHt0aGlzLmVudHJ5LnByZWZpeCArIHRoaXMuaWR9YCk7XHJcblxyXG4gICAgICAgIGFkZENTU0NsYXNzZXMoZWxlbWVudCxcclxuICAgICAgICAgICAgXCJ3aW5kb3dcIixcclxuICAgICAgICAgICAgXCJmbGV4LWJveFwiLFxyXG4gICAgICAgICAgICBcImNvbC1kaXJlY3Rpb25cIixcclxuICAgICAgICAgICAgdGhpcy5ib3hTaGFkb3cgPyBcImJveC1zaGFkb3dcIiA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRlICE9PSBmYWxzZSA/IFwiYW5pbWF0ZVwiIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGUgIT09IGZhbHNlID8gYGFuaW1hdGUtJHt0aGlzLmFuaW1hdGV9LXNob3dgIDogdW5kZWZpbmVkKTtcclxuXHJcbiAgICAgICAgYWRkQ1NTU3R5bGVzKGVsZW1lbnQsXHJcbiAgICAgICAgICAgIDxDU1NTdHlsZURlY2xhcmF0aW9uPntcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYCR7dGhpcy5iYWNrZ3JvdW5kQ29sb3J9YCxcclxuICAgICAgICAgICAgICAgIHpJbmRleDogYCR7dGhpcy5lbnRyeS56SW5kZXh9YCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBgJHt0aGlzLndpZHRofXB4YCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogYCR7dGhpcy5oZWlnaHR9cHhgLFxyXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6IHRoaXMubWF4V2lkdGggIT09IGlubmVyV2lkdGggPyBgJHt0aGlzLm1heFdpZHRofXB4YCA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IHRoaXMubWF4SGVpZ2h0ICE9PSBpbm5lckhlaWdodCA/IGAke3RoaXMubWF4SGVpZ2h0fXB4YCA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBtaW5XaWR0aDogYCR7dGhpcy5taW5XaWR0aH1weGAsXHJcbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IGAke3RoaXMubWluSGVpZ2h0fXB4YCxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IGAke3RoaXMubGVmdH1weGAsXHJcbiAgICAgICAgICAgICAgICB0b3A6IGAke3RoaXMudG9wfXB4YCxcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5ib3JkZXIgPT09IGZhbHNlID8gbnVsbCA6XHJcbiAgICAgICAgICAgICAgICAgICAgYCR7dGhpcy5ib3JkZXIud2lkdGh9cHggJHt0aGlzLmJvcmRlci5zdHlsZX0gJHt0aGlzLmJvcmRlci5jb2xvcn1gLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiB0aGlzLmJvcmRlciA9PT0gZmFsc2UgPyBudWxsIDpcclxuICAgICAgICAgICAgICAgICAgICBgJHt0aGlzLmJvcmRlci5yYWRpdXN9cHhgLFxyXG4gICAgICAgICAgICAgICAgd2Via2l0Qm9yZGVyUmFkaXVzOiB0aGlzLmJvcmRlciA9PT0gZmFsc2UgPyBudWxsIDpcclxuICAgICAgICAgICAgICAgICAgICBgJHt0aGlzLmJvcmRlci5yYWRpdXN9cHhgLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuXHJcbiAgICAgICAgdGhpcy5tb25pdG9yRXZlbnQoZWxlbWVudCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2VuZEV2ZW50KFwid2luZG93OmNyZWF0ZVwiLCB7IGlkOiB0aGlzLmlkIH0pO1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6L+95Yqg5a2Q5YWD57SgXHJcbiAgICAgKiBAcGFyYW0gZWxlbWVudCDniLblhYPntKBcclxuICAgICAqIEByZXR1cm5zIHZvaWRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhcHBlbmRDaGlsZChlbGVtZW50OiBIVE1MRGl2RWxlbWVudCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGFjdGlvbkJhckVsZW1lbnQgPSBjcmVhdGVEaXZFbGVtZW50KCk7XHJcbiAgICAgICAgYWRkQ1NTQ2xhc3NlcyhhY3Rpb25CYXJFbGVtZW50LFxyXG4gICAgICAgICAgICBcImFjdGlvbi1iYXJcIik7XHJcbiAgICAgICAgY29uc3QgdWlBY3Rpb25CdXR0b24gPSBuZXcgVUlBY3Rpb25CdXR0b24oPFVJQWN0aW9uQnV0dG9uT3B0aW9uPntcclxuICAgICAgICAgICAgbmFtZTogU3VwcG9ydEljb24uREVTVFJPWSxcclxuICAgICAgICAgICAgaGFuZGxlcjogZXYgPT4gdGhpcy5kZXN0cm95KClcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCB1aUFjdGlvbkJ1dHRvbkVsZW1lbnQgPSB1aUFjdGlvbkJ1dHRvbi5wcmVzZW50KCk7XHJcbiAgICAgICAgYWN0aW9uQmFyRWxlbWVudC5hcHBlbmRDaGlsZCh1aUFjdGlvbkJ1dHRvbkVsZW1lbnQpO1xyXG5cclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGFjdGlvbkJhckVsZW1lbnQpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy50b29sQmFyICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBjb25zdCB1aVRvb2xCYXIgPSBuZXcgVUlUb29sQmFyKHRoaXMudG9vbEJhcik7XHJcbiAgICAgICAgICAgIGNvbnN0IHVpVG9vbEJhckVsZW1lbnQgPSB1aVRvb2xCYXIucHJlc2VudCgpO1xyXG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHVpVG9vbEJhckVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIoOmZpOeql+WPo1xyXG4gICAgICogQHJldHVybnMgdm9pZFxyXG4gICAgICovXHJcbiAgICBkZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGUgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGFkZENTU0NsYXNzZXModGhpcy53aW5kb3dFbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgYGFuaW1hdGUtJHt0aGlzLmFuaW1hdGV9LWRlc3Ryb3lgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog56e76Zmk56qX5Y+jXHJcbiAgICAgKiBAcmV0dXJucyB2b2lkXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVtb3ZlKCk6IHZvaWQge1xyXG4gICAgICAgIHJlbW92ZURpdkVsZW1lbnQodGhpcy53aW5kb3dFbGVtZW50KTtcclxuICAgICAgICB0aGlzLnNlbmRFdmVudChcIndpbmRvdzpkZXN0cm95XCIsIHsgaWQ6IHRoaXMuaWQgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnm5HlkKzkuovku7ZcclxuICAgICAqIEByZXR1cm5zIHZvaWQgXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgbW9uaXRvckV2ZW50KGVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50IHwgbnVsbCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghZWxlbWVudCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5hbmltYXRlICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgKGV2OiBBbmltYXRpb25FdmVudCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIOaWsOW7uuaIluaYvuekuueql+WPo1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYW5pbWF0ZVNob3dOYW1lID0gYGFuaW1hdGUtJHt0aGlzLmFuaW1hdGV9LXNob3dgO1xyXG4gICAgICAgICAgICAgICAgaWYgKGhhc0NTU0NsYXNzKGVsZW1lbnQsIGFuaW1hdGVTaG93TmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVDU1NDbGFzc2VzKGVsZW1lbnQsIGFuaW1hdGVTaG93TmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZW5kRXZlbnQoXCJ3aW5kb3c6c2hvd1wiLCB7IGlkOiB0aGlzLmlkIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIOWIoOmZpOeql+WPo1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYW5pbWF0ZURlc3Ryb3lOYW1lID0gYGFuaW1hdGUtJHt0aGlzLmFuaW1hdGV9LWRlc3Ryb3lgO1xyXG4gICAgICAgICAgICAgICAgaWYgKGhhc0NTU0NsYXNzKGVsZW1lbnQsIGFuaW1hdGVEZXN0cm95TmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyB2YWxpZGF0ZUZhaWwgfSBmcm9tICcuLi8uLi9jb3JlL2V4Y2VwdGlvbic7XHJcbmltcG9ydCB7IGNoZWNrQXJyYXksIGNoZWNrSW5WYWx1ZU9wdGlvbnMsIGNoZWNrT2ZUeXBlIH0gZnJvbSAnLi4vLi4vY29yZS92YWxpZGF0b3InO1xyXG5pbXBvcnQgeyBVSVRvb2xCYXJPcHRpb24gfSBmcm9tICcuLi91aS10b29sLWJhci90eXBlJztcclxuaW1wb3J0IHsgVUlXaW5kb3cgfSBmcm9tICcuLyc7XHJcbmltcG9ydCB7IEFuaW1hdGlvbiwgT2Zmc2V0IH0gZnJvbSAnLi9jb25zdCc7XHJcbmltcG9ydCB7IEJvcmRlck9wdGlvbiwgVUlXaW5kb3dPcHRpb24gfSBmcm9tICcuL3R5cGUnO1xyXG5cclxuLyoqXHJcbiAqIOWkhOeQhuWIneWni+S8oOWFpeWPguaVsFxyXG4gKiBAcGFyYW0gb3B0aW9ucyDlj6/pgInlj4LmlbBcclxuICogQHJldHVybnMgdm9pZFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZXJPcHRpb25zKHRoaXM6IFVJV2luZG93LCBvcHRpb25zOiBVSVdpbmRvd09wdGlvbik6IHZvaWQge1xyXG4gICAgdGhpcy53aWR0aCA9IG9wdGlvbnM/LndpZHRoID8/IHRoaXMud2lkdGg7XHJcbiAgICB0aGlzLmhlaWdodCA9IG9wdGlvbnM/LmhlaWdodCA/PyB0aGlzLmhlaWdodDtcclxuICAgIHRoaXMubWF4V2lkdGggPSBvcHRpb25zPy5tYXhXaWR0aCA/PyB0aGlzLm1heFdpZHRoO1xyXG4gICAgdGhpcy5tYXhIZWlnaHQgPSBvcHRpb25zPy5tYXhIZWlnaHQgPz8gdGhpcy5tYXhIZWlnaHQ7XHJcbiAgICB0aGlzLm1pbldpZHRoID0gb3B0aW9ucz8ubWluV2lkdGggPz8gdGhpcy5taW5XaWR0aDtcclxuICAgIHRoaXMubWluSGVpZ2h0ID0gb3B0aW9ucz8ubWluSGVpZ2h0ID8/IHRoaXMubWluSGVpZ2h0O1xyXG4gICAgdGhpcy53aWR0aCA9IE1hdGgubWF4KHRoaXMubWluV2lkdGgsIHRoaXMud2lkdGgpO1xyXG4gICAgdGhpcy53aWR0aCA9IE1hdGgubWluKHRoaXMubWF4V2lkdGgsIHRoaXMud2lkdGgpO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBNYXRoLm1heCh0aGlzLm1pbkhlaWdodCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBNYXRoLm1pbih0aGlzLm1heEhlaWdodCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgdGhpcy5ib3JkZXIgPSA8Qm9yZGVyT3B0aW9uIHwgZmFsc2U+b3B0aW9ucz8uYm9yZGVyID8/IHRoaXMuYm9yZGVyO1xyXG4gICAgdGhpcy5ib3hTaGFkb3cgPSBvcHRpb25zPy5ib3hTaGFkb3cgPz8gdGhpcy5ib3hTaGFkb3c7XHJcbiAgICB0aGlzLmFuaW1hdGUgPSA8QW5pbWF0aW9uIHwgZmFsc2U+b3B0aW9ucz8uYW5pbWF0ZSA/PyB0aGlzLmFuaW1hdGU7XHJcbiAgICBbdGhpcy5sZWZ0LCB0aGlzLnRvcF0gPSBjYWxjT2Zmc2V0KHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCBvcHRpb25zPy5vZmZzZXQpO1xyXG4gICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSBvcHRpb25zPy5iYWNrZ3JvdW5kQ29sb3IgPz8gdGhpcy5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICB0aGlzLnRvb2xCYXIgPSA8VUlUb29sQmFyT3B0aW9uIHwgZmFsc2U+b3B0aW9ucz8udG9vbEJhciA/PyB0aGlzLnRvb2xCYXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDorqHnrpfnqpflj6PlgY/np7vph49cclxuICogQHBhcmFtIHdpZHRoIOWuveW6plxyXG4gKiBAcGFyYW0gaGVpZ2h0IOmrmOW6plxyXG4gKiBAcGFyYW0gW29mZnNldF0g5YGP56e7XHJcbiAqIEByZXR1cm5zIFtudW1iZXIsIG51bWJlcl0gXHJcbiAqL1xyXG5mdW5jdGlvbiBjYWxjT2Zmc2V0KHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBvZmZzZXQ/OiBbbnVtYmVyLCBudW1iZXJdIHwgT2Zmc2V0KTogW251bWJlciwgbnVtYmVyXSB7XHJcbiAgICBpZiAob2Zmc2V0ID09PSB1bmRlZmluZWQpIHJldHVybiBbKGlubmVyV2lkdGggLSB3aWR0aCkgLyAyLCAoaW5uZXJIZWlnaHQgLSBoZWlnaHQpIC8gMl07XHJcbiAgICBpZiAoY2hlY2tBcnJheShvZmZzZXQpKSB7XHJcbiAgICAgICAgaWYgKG9mZnNldC5sZW5ndGggIT09IDIgfHxcclxuICAgICAgICAgICAgIWNoZWNrT2ZUeXBlKG9mZnNldFswXSwgXCJudW1iZXJcIikgfHxcclxuICAgICAgICAgICAgIWNoZWNrT2ZUeXBlKG9mZnNldFsxXSwgXCJudW1iZXJcIikpIHZhbGlkYXRlRmFpbChgXCIke1tvZmZzZXRdfVwiIOS4jeaYr+acieaViOeahCBcIltudW1iZXIsbnVtYmVyXVwiIOexu+Wei2ApO1xyXG5cclxuICAgICAgICByZXR1cm4gWzxudW1iZXI+b2Zmc2V0WzBdLCA8bnVtYmVyPm9mZnNldFsxXV07XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGNyb29kczogW251bWJlciwgbnVtYmVyXSA9IFswLCAwXTtcclxuICAgIGNvbnN0IG9mZnNldE9wdGlvbnMgPSBbXHJcbiAgICAgICAgT2Zmc2V0LkNFTlRFUixcclxuICAgICAgICBPZmZzZXQuVE9QX0NFTlRFUixcclxuICAgICAgICBPZmZzZXQuQk9UVE9NX0NFTlRFUixcclxuICAgICAgICBPZmZzZXQuTEVGVF9UT1AsXHJcbiAgICAgICAgT2Zmc2V0LkxFRlRfTUlERExFLFxyXG4gICAgICAgIE9mZnNldC5MRUZUX0JPVFRPTSxcclxuICAgICAgICBPZmZzZXQuUklHSFRfVE9QLFxyXG4gICAgICAgIE9mZnNldC5SSUdIVF9NSURETEUsXHJcbiAgICAgICAgT2Zmc2V0LlJJR0hUX0JPVFRPTVxyXG4gICAgXTtcclxuICAgIGlmIChjaGVja0luVmFsdWVPcHRpb25zKG9mZnNldCwgLi4ub2Zmc2V0T3B0aW9ucykpIHtcclxuICAgICAgICBzd2l0Y2ggKDxPZmZzZXQ+b2Zmc2V0KSB7XHJcbiAgICAgICAgICAgIGNhc2UgT2Zmc2V0LkNFTlRFUjpcclxuICAgICAgICAgICAgICAgIGNyb29kcyA9IFsoaW5uZXJXaWR0aCAtIHdpZHRoKSAvIDIsIChpbm5lckhlaWdodCAtIGhlaWdodCkgLyAyXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIE9mZnNldC5UT1BfQ0VOVEVSOlxyXG4gICAgICAgICAgICAgICAgY3Jvb2RzID0gWyhpbm5lcldpZHRoIC0gd2lkdGgpIC8gMiwgMF07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBPZmZzZXQuQk9UVE9NX0NFTlRFUjpcclxuICAgICAgICAgICAgICAgIGNyb29kcyA9IFsoaW5uZXJXaWR0aCAtIHdpZHRoKSAvIDIsIGlubmVySGVpZ2h0IC0gaGVpZ2h0XTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIE9mZnNldC5MRUZUX1RPUDpcclxuICAgICAgICAgICAgICAgIGNyb29kcyA9IFswLCAwXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIE9mZnNldC5MRUZUX01JRERMRTpcclxuICAgICAgICAgICAgICAgIGNyb29kcyA9IFswLCAoaW5uZXJIZWlnaHQgLSBoZWlnaHQpIC8gMl07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBPZmZzZXQuTEVGVF9CT1RUT006XHJcbiAgICAgICAgICAgICAgICBjcm9vZHMgPSBbMCwgaW5uZXJIZWlnaHQgLSBoZWlnaHRdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgT2Zmc2V0LlJJR0hUX1RPUDpcclxuICAgICAgICAgICAgICAgIGNyb29kcyA9IFtpbm5lcldpZHRoIC0gd2lkdGgsIDBdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgT2Zmc2V0LlJJR0hUX01JRERMRTpcclxuICAgICAgICAgICAgICAgIGNyb29kcyA9IFtpbm5lcldpZHRoIC0gd2lkdGgsIChpbm5lckhlaWdodCAtIGhlaWdodCkgLyAyXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIE9mZnNldC5SSUdIVF9CT1RUT006XHJcbiAgICAgICAgICAgICAgICBjcm9vZHMgPSBbaW5uZXJXaWR0aCAtIHdpZHRoLCBpbm5lckhlaWdodCAtIGhlaWdodF07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNyb29kcztcclxuICAgIH1cclxuXHJcbiAgICB2YWxpZGF0ZUZhaWwoYFwiJHtvZmZzZXR9XCIg5LiN5piv5pyJ5pWI55qEIFwiW251bWJlcixudW1iZXJdIOaIliBbJHtvZmZzZXRPcHRpb25zfV1cIiDnsbvlnotgKTtcclxufSIsImltcG9ydCB7IGFwcEVycm9yLCB2YWxpZGF0ZUZhaWwgfSBmcm9tICcuLi9leGNlcHRpb24nO1xyXG5pbXBvcnQgeyBtZXJnZUpTT05PYmplY3QgfSBmcm9tICcuLi9oZWxwZXIvb2JqZWN0LWhlbHBlcic7XHJcbmltcG9ydCB7IEpTT05PYmplY3QgfSBmcm9tICcuLi9oZWxwZXIvdHlwZSc7XHJcbmltcG9ydCB7XHJcbiAgICBjaGVja0FycmF5LFxyXG4gICAgY2hlY2tDb2xvcixcclxuICAgIGNoZWNrRnVuY3Rpb24sXHJcbiAgICBjaGVja0luVmFsdWVPcHRpb25zLFxyXG4gICAgY2hlY2tKU09OT2JqZWN0LFxyXG4gICAgY2hlY2tNaW4sXHJcbiAgICBjaGVja05vRW1wdHlPck51bGwsXHJcbiAgICBjaGVja09mVHlwZSxcclxuICAgIGNoZWNrUHN0SW50LFxyXG4gICAgY2hlY2tQc3ROdW1iZXIsXHJcbiAgICBjaGVja1JlZ0V4cCxcclxuICAgIGNoZWNrU3RyaW5nLFxyXG59IGZyb20gJy4uL3ZhbGlkYXRvcic7XHJcbmltcG9ydCB7IFZhbHVlT3B0aW9uIH0gZnJvbSAnLi4vdmFsaWRhdG9yL3R5cGUnO1xyXG5pbXBvcnQgeyBQcm9wZXJ0eURlY29yYXRvciwgUHJvcGVydHlTZXR0ZXIgfSBmcm9tICcuL3R5cGUnO1xyXG5cclxuLyoqXHJcbiAqIOajgOafpeaYr+WQpuaYr+ato+aVsOWAvOexu+Wei1xyXG4gKiBAcmV0dXJucyBQcm9wZXJ0eURlY29yYXRvciBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1BzdE51bWJlcigpOiBQcm9wZXJ0eURlY29yYXRvciB7XHJcbiAgICByZXR1cm4gZ2VuZXJhdGVEZWNvcmF0b3IoKG5ld1ZhbHVlKSA9PiB7XHJcbiAgICAgICAgaWYgKCFjaGVja1BzdE51bWJlcihuZXdWYWx1ZSkpIHZhbGlkYXRlRmFpbChgXCIke25ld1ZhbHVlfVwiIOS4jeaYr+S4gOS4quacieaViOeahOato+aVsOWAvOexu+Wei2ApO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3VmFsdWU7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeaYr+WQpuaYr+aMh+WumuWPr+mAieWAvOexu+Wei1xyXG4gKiBAcGFyYW0gdmFsdWVPcHRpb25zIOWPr+mAieWAvFxyXG4gKiBAcmV0dXJucyBQcm9wZXJ0eURlY29yYXRvciBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpblZhbHVlT3B0aW9ucyguLi52YWx1ZU9wdGlvbnM6IFZhbHVlT3B0aW9uKTogUHJvcGVydHlEZWNvcmF0b3Ige1xyXG4gICAgcmV0dXJuIGdlbmVyYXRlRGVjb3JhdG9yKChuZXdWYWx1ZSkgPT4ge1xyXG4gICAgICAgIGlmICghY2hlY2tJblZhbHVlT3B0aW9ucyhuZXdWYWx1ZSwgLi4udmFsdWVPcHRpb25zKSkgdmFsaWRhdGVGYWlsKGBcIiR7bmV3VmFsdWV9XCIg5LiN5ZyoIFske3ZhbHVlT3B0aW9ucy50b1N0cmluZygpfV0g5YC86IyD5Zu05YaFYCk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXdWYWx1ZTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l6Z2e56m65oiW6Z2eTlVMTOWtl+espuS4slxyXG4gKiBAcmV0dXJucyBQcm9wZXJ0eURlY29yYXRvciBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc05vRW1wdHlPck51bGwoKTogUHJvcGVydHlEZWNvcmF0b3Ige1xyXG4gICAgcmV0dXJuIGdlbmVyYXRlRGVjb3JhdG9yKChuZXdWYWx1ZSkgPT4ge1xyXG4gICAgICAgIGlmICghY2hlY2tOb0VtcHR5T3JOdWxsKG5ld1ZhbHVlKSkgdmFsaWRhdGVGYWlsKGBcIiR7bmV3VmFsdWV9XCIg5LiN5piv5LiA5Liq5pyJ5pWI55qE6Z2e56m65a2X56ym5LiyYCk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXdWYWx1ZTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5biD5bCU57G75Z6L5YC8XHJcbiAqIEByZXR1cm5zIFByb3BlcnR5RGVjb3JhdG9yIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQm9vbGVhbigpOiBQcm9wZXJ0eURlY29yYXRvciB7XHJcbiAgICByZXR1cm4gZ2VuZXJhdGVEZWNvcmF0b3IoKG5ld1ZhbHVlKSA9PiB7XHJcbiAgICAgICAgaWYgKCFjaGVja09mVHlwZShuZXdWYWx1ZSwgXCJib29sZWFuXCIpKSB2YWxpZGF0ZUZhaWwoYFwiJHtuZXdWYWx1ZX1cIiDkuI3mmK/kuIDkuKrmnInmlYjnmoTluIPlsJTlgLxgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ld1ZhbHVlO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XlrZfnrKbkuLLnsbvlnovlgLxcclxuICogQHJldHVybnMgUHJvcGVydHlEZWNvcmF0b3IgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmcoKTogUHJvcGVydHlEZWNvcmF0b3Ige1xyXG4gICAgcmV0dXJuIGdlbmVyYXRlRGVjb3JhdG9yKChuZXdWYWx1ZSkgPT4ge1xyXG4gICAgICAgIGlmICghY2hlY2tTdHJpbmcobmV3VmFsdWUpKSB2YWxpZGF0ZUZhaWwoYFwiJHtuZXdWYWx1ZX1cIiDkuI3mmK/kuIDkuKrmnInmlYjnmoTlrZfnrKbkuLJgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ld1ZhbHVlO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XpopzoibLlgLxcclxuICogQHJldHVybnMgUHJvcGVydHlEZWNvcmF0b3IgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNDb2xvcigpOiBQcm9wZXJ0eURlY29yYXRvciB7XHJcbiAgICByZXR1cm4gZ2VuZXJhdGVEZWNvcmF0b3IoKG5ld1ZhbHVlKSA9PiB7XHJcbiAgICAgICAgaWYgKCFjaGVja0NvbG9yKG5ld1ZhbHVlKSkgdmFsaWRhdGVGYWlsKGBcIiR7bmV3VmFsdWV9XCIg5LiN5piv5LiA5Liq5pyJ5pWI55qEQ1NT6aKc6Imy5YC8YCk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXdWYWx1ZTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5q2j5pW05pWwXHJcbiAqIEByZXR1cm5zIFByb3BlcnR5RGVjb3JhdG9yIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzUHN0SW50KCk6IFByb3BlcnR5RGVjb3JhdG9yIHtcclxuICAgIHJldHVybiBnZW5lcmF0ZURlY29yYXRvcigobmV3VmFsdWUpID0+IHtcclxuICAgICAgICBpZiAoIWNoZWNrUHN0SW50KG5ld1ZhbHVlKSkgdmFsaWRhdGVGYWlsKGBcIiR7bmV3VmFsdWV9XCIg5LiN5piv5LiA5Liq5pyJ5pWI55qE5q2j5pW05pWwYCk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXdWYWx1ZTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5pyA5bCP5YC8XHJcbiAqIEBwYXJhbSB0aHJlc2hvbGQg5pyA5bCP6ZiI5YC8XHJcbiAqIEByZXR1cm5zIFByb3BlcnR5RGVjb3JhdG9yXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWluKHRocmVzaG9sZDogbnVtYmVyKTogUHJvcGVydHlEZWNvcmF0b3Ige1xyXG4gICAgcmV0dXJuIGdlbmVyYXRlRGVjb3JhdG9yKChuZXdWYWx1ZSkgPT4ge1xyXG4gICAgICAgIGlmICghY2hlY2tNaW4obmV3VmFsdWUsIHRocmVzaG9sZCkpIHZhbGlkYXRlRmFpbChgXCIke25ld1ZhbHVlfVwiIOW/hemhu+aYr+aVsOWAvOexu+Wei+W5tuS4lOWAvOS4jeiDveWwj+S6jiBcIiR7dGhyZXNob2xkfVwiYCk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXdWYWx1ZTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICog5re35ZCI6aqM6K+BXHJcbiAqIEBwYXJhbSBhZG1peGVzIOaUr+aMgUFycmF5fEZ1bmN0aW9ufFJlZ0V4cHx7ZGVjb3JhdG9yOiB7fSxvcHRpb25zOiBbXX185Lu75oSP5YC877yM5L2GT2JqZWN057G75Z6L5Y+q6IO95pyJ5LiA5LiqXHJcbiAqIEByZXR1cm5zIFByb3BlcnR5RGVjb3JhdG9yXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWRtaXgoLi4uYWRtaXhlczogQXJyYXk8YW55Pik6IFByb3BlcnR5RGVjb3JhdG9yIHtcclxuICAgIHJldHVybiBnZW5lcmF0ZURlY29yYXRvcigobmV3VmFsdWUsIHByb3BlcnR5S2V5LCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlT3B0aW9ucyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGZ1bmN0aW9uT3B0aW9ucyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHJlZ2V4T3B0aW9ucyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGRlY29yYXRvcnMgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGFkbWl4ZXMpIHtcclxuICAgICAgICAgICAgaWYgKGNoZWNrT2ZUeXBlKGl0ZW0sIFwic3RyaW5nXCIsIFwiYmlnaW50XCIsIFwiYm9vbGVhblwiLCBcInN5bWJvbFwiLCBcInVuZGVmaW5lZFwiKSB8fCBpdGVtID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZU9wdGlvbnMucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjaGVja0FycmF5KGl0ZW0pKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZU9wdGlvbnMucHVzaCguLi48QXJyYXk8YW55Pj5pdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjaGVja0Z1bmN0aW9uKGl0ZW0pKSB7XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbk9wdGlvbnMucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjaGVja1JlZ0V4cChpdGVtKSkge1xyXG4gICAgICAgICAgICAgICAgcmVnZXhPcHRpb25zLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGVjb3JhdG9ycy5sZW5ndGggPiAwKSBhcHBFcnJvcihg5a+56LGh6aqM6K+B5LiN6IO95a2Y5Zyo5aSa5LiqYCk7XHJcbiAgICAgICAgICAgICAgICBkZWNvcmF0b3JzLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNoZWNrSW5WYWx1ZU9wdGlvbnMobmV3VmFsdWUsIC4uLnZhbHVlT3B0aW9ucykpIHJldHVybiBuZXdWYWx1ZTtcclxuXHJcbiAgICAgICAgaWYgKGRlY29yYXRvcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBuZXdWYWx1ZSA9IGNoZWNrQ29tYmluZShuZXdWYWx1ZSwgZGVjb3JhdG9yc1swXSwgLi4udmFsdWVPcHRpb25zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghY2hlY2tKU09OT2JqZWN0KG5ld1ZhbHVlKSkge1xyXG4gICAgICAgICAgICBmdW5jdGlvbk9wdGlvbnMubWFwKGZ1bmMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFmdW5jKG5ld1ZhbHVlKSkgdmFsaWRhdGVGYWlsKGBcIiR7bmV3VmFsdWV9XCIg5LiN5piv5LiA5Liq5pyJ5pWI55qE5Y+C5pWw5YC8YCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJlZ2V4T3B0aW9ucy5tYXAocmVnID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghcmVnLnRlc3QobmV3VmFsdWUpKSB2YWxpZGF0ZUZhaWwoYFwiJHtuZXdWYWx1ZX1cIiDkuI3mmK/kuIDkuKrmnInmlYjnmoTlj4LmlbDlgLxgKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gbWVyZ2VKU09OT2JqZWN0KHZhbHVlID8/IHt9LCBuZXdWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3VmFsdWU7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOWQiOW5tumqjOivgeaguOW/g+S7o+eggVxyXG4gKiBAcGFyYW0gbmV3VmFsdWUg5b2T5YmN5YC8XHJcbiAqIEBwYXJhbSBqc29uRGVjb3JhdG9yIOWPguaVsOavj+S4gOmhueijhemlsOWZqO+8jOaUr+aMgUFycmF5fEZ1bmN0aW9ufFJlZ0V4cHx7ZGVjb3JhdG9yOiB7fSxvcHRpb25zOiBbXX1cclxuICogQHBhcmFtIGl0ZW1zIOWFtuS9meWPr+mAieWAvO+8jOWPquaUr+aMgeWfuuacrOaVsOaNruexu+Wei1xyXG4gKiBAcmV0dXJucyB2b2lkXHJcbiAqL1xyXG5mdW5jdGlvbiBjaGVja0NvbWJpbmUobmV3VmFsdWU6IGFueSwganNvbkRlY29yYXRvcjogSlNPTk9iamVjdCA9IHt9LCAuLi5pdGVtczogQXJyYXk8YW55Pik6IGFueSB7XHJcbiAgICBpZiAoIWNoZWNrSlNPTk9iamVjdChuZXdWYWx1ZSkgJiYgKGl0ZW1zLmxlbmd0aCA+IDAgJiYgaXRlbXMuaW5kZXhPZihuZXdWYWx1ZSkgPT09IC0xKSkgdmFsaWRhdGVGYWlsKGBcIiR7bmV3VmFsdWV9XCIg5LiN5piv5LiA5Liq5pyJ5pWI55qE5Y+C5pWw5YC8YCk7XHJcbiAgICBpZiAoaXRlbXMuaW5kZXhPZihuZXdWYWx1ZSkgPiAtMSkgcmV0dXJuIG5ld1ZhbHVlO1xyXG5cclxuICAgIGZvciAoY29uc3Qga2V5IGluIG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgbGV0IGtleVZhbHVlID0gbmV3VmFsdWVba2V5XTtcclxuICAgICAgICBjb25zdCBkZWNvcmF0b3IgPSBqc29uRGVjb3JhdG9yW2tleV07XHJcbiAgICAgICAgaWYgKCFkZWNvcmF0b3IpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICBpZiAoY2hlY2tBcnJheShkZWNvcmF0b3IpICYmIGRlY29yYXRvci5pbmRleE9mKGtleVZhbHVlKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgdmFsaWRhdGVGYWlsKGBcIiR7a2V5VmFsdWV9XCIg5LiN5ZyoIFske2RlY29yYXRvci50b1N0cmluZygpfV0g5YC86IyD5Zu05YaFYCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hlY2tPZlR5cGUoZGVjb3JhdG9yLCBcImZ1bmN0aW9uXCIpICYmICFkZWNvcmF0b3Ioa2V5VmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRlRmFpbChgXCIke2tleVZhbHVlfVwiIOS4jeaYr+S4gOS4quacieaViOeahOWPguaVsOWAvGApO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNoZWNrUmVnRXhwKGRlY29yYXRvcikgJiYgIWRlY29yYXRvci50ZXN0KGtleVZhbHVlKSkge1xyXG4gICAgICAgICAgICB2YWxpZGF0ZUZhaWwoYFwiJHtrZXlWYWx1ZX1cIiDkuI3mmK/kuIDkuKrmnInmlYjnmoTlj4LmlbDlgLxgKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaGVja0pTT05PYmplY3QoZGVjb3JhdG9yKSkge1xyXG4gICAgICAgICAgICBjb25zdCBjaGlsZERlY29yYXRvciA9IGRlY29yYXRvcj8uZGVjb3JhdG9yID8/IHt9O1xyXG4gICAgICAgICAgICBjb25zdCBjaGlsZEl0ZW1zID0gZGVjb3JhdG9yPy5vcHRpb25zID8/IFtdO1xyXG4gICAgICAgICAgICBrZXlWYWx1ZSA9IGNoZWNrQ29tYmluZShrZXlWYWx1ZSwgY2hpbGREZWNvcmF0b3IsIC4uLmNoaWxkSXRlbXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3VmFsdWU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDnlJ/miJDoo4XppbDlmajmoLjlv4Pku6PnoIFcclxuICogQHBhcmFtIHByb3BlcnR5U2V0dGVyIOWxnuaAp+iuvue9ruWZqFxyXG4gKiBAcmV0dXJucyBQcm9wZXJ0eURlY29yYXRvciBcclxuICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlRGVjb3JhdG9yKHByb3BlcnR5U2V0dGVyOiBQcm9wZXJ0eVNldHRlcik6IFByb3BlcnR5RGVjb3JhdG9yIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5OiBzdHJpbmcgfCBudW1iZXIgfCBzeW1ib2wpIHtcclxuICAgICAgICBsZXQgdmFsdWUgPSB0YXJnZXRbcHJvcGVydHlLZXldO1xyXG5cclxuICAgICAgICB2YXIgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBwcm9wZXJ0eUtleSk7XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHlLZXksIHtcclxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBnZXQ6ICgpID0+IHZhbHVlLFxyXG4gICAgICAgICAgICBzZXQ6IChuZXdWYWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci5zZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdG9yLnNldChuZXdWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHByb3BlcnR5U2V0dGVyKG5ld1ZhbHVlLCBwcm9wZXJ0eUtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBjaGVja0FycmF5LCBjaGVja09mVHlwZSB9IGZyb20gJy4uL3ZhbGlkYXRvcic7XHJcbmltcG9ydCB7IEV2ZW50SGFuZGxlciwgTWVzc2FnZVF1ZXVlcyB9IGZyb20gJy4vdHlwZSc7XHJcblxyXG4vKipcclxuICog5LqL5Lu25oC757q/57G7XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRXZlbnRCdXMge1xyXG4gICAgLyoqXHJcbiAgICAgKiDnp4HmnInljJbmnoTpgKDlh73mlbDvvIzlrp7njrDljZXkvotcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa2iOaBr+mYn+WIl1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIG1lc3NhZ2VRdWV1ZXM6IE1lc3NhZ2VRdWV1ZXMgPSA8TWVzc2FnZVF1ZXVlcz57fTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOe7keWumuS6i+S7tlxyXG4gICAgICogQHBhcmFtIGV2ZW50S2V5IOS6i+S7tuWQjeensFxyXG4gICAgICogQHBhcmFtIGV2ZW50SGFuZGxlciDkuovku7blpITnkIblh73mlbDmiJblh73mlbDmlbDnu4RcclxuICAgICAqIEByZXR1cm5zIHZvaWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIG9uKGV2ZW50S2V5OiBzdHJpbmcsIGV2ZW50SGFuZGxlcjogRXZlbnRIYW5kbGVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubWVzc2FnZVF1ZXVlcy5oYXNPd25Qcm9wZXJ0eShldmVudEtleSkpIHtcclxuICAgICAgICAgICAgY29uc3QgZXZlbnRWYWx1ZSA9IHRoaXMubWVzc2FnZVF1ZXVlc1tldmVudEtleV07XHJcbiAgICAgICAgICAgIGlmIChjaGVja09mVHlwZShldmVudFZhbHVlLCBcImZ1bmN0aW9uXCIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VRdWV1ZXNbZXZlbnRLZXldID0gWzxFdmVudEhhbmRsZXI+ZXZlbnRWYWx1ZSwgZXZlbnRIYW5kbGVyXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjaGVja0FycmF5KGV2ZW50VmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VRdWV1ZXNbZXZlbnRLZXldID0gWy4uLjxBcnJheTxFdmVudEhhbmRsZXI+PmV2ZW50VmFsdWUsIGV2ZW50SGFuZGxlcl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZVF1ZXVlc1tldmVudEtleV0gPSBldmVudEhhbmRsZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Y+q57uR5a6a5LiA5qyhXHJcbiAgICAgKiBAcGFyYW0gZXZlbnRLZXkg5LqL5Lu25ZCN56ewXHJcbiAgICAgKiBAcGFyYW0gZXZlbnRIYW5kbGVyIOS6i+S7tuWkhOeQhuWHveaVsOaIluWHveaVsOaVsOe7hFxyXG4gICAgICogQHJldHVybnMgdm9pZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb25lKGV2ZW50S2V5OiBzdHJpbmcsIGV2ZW50SGFuZGxlcjogRXZlbnRIYW5kbGVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlUXVldWVzW2V2ZW50S2V5XSA9IGV2ZW50SGFuZGxlcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWPkemAgeS6i+S7tlxyXG4gICAgICogQHBhcmFtIGV2ZW50S2V5IOS6i+S7tuWQjeensFxyXG4gICAgICogQHBhcmFtIG1lc3NhZ2Ug5LqL5Lu25aSE55CG5Ye95pWw5oiW5Ye95pWw5pWw57uEXHJcbiAgICAgKiBAcGFyYW0gaXNTeW5jIOaYr+WQpuWQjOatpeaJp+ihjO+8jOm7mOiupGZhbHNlXHJcbiAgICAgKiBAcmV0dXJucyB2b2lkIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZW1pdChldmVudEtleTogc3RyaW5nLCBtZXNzYWdlOiBhbnksIGlzU3luYzogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1lc3NhZ2VRdWV1ZXMuaGFzT3duUHJvcGVydHkoZXZlbnRLZXkpKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGV2ZW50VmFsdWUgPSB0aGlzLm1lc3NhZ2VRdWV1ZXNbZXZlbnRLZXldO1xyXG4gICAgICAgIGlmIChjaGVja09mVHlwZShldmVudFZhbHVlLCBcImZ1bmN0aW9uXCIpKSB7XHJcbiAgICAgICAgICAgICFpc1N5bmMgPyBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICg8RXZlbnRIYW5kbGVyPmV2ZW50VmFsdWUpKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9LCAwKSA6ICg8RXZlbnRIYW5kbGVyPmV2ZW50VmFsdWUpKG1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjaGVja0FycmF5KGV2ZW50VmFsdWUpKSB7XHJcbiAgICAgICAgICAgICg8QXJyYXk8RXZlbnRIYW5kbGVyPj5ldmVudFZhbHVlKS5tYXAoaGFuZGxlciA9PiB7XHJcbiAgICAgICAgICAgICAgICAhaXNTeW5jID8gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcihtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIH0sIDApIDogaGFuZGxlcihtZXNzYWdlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog56e76Zmk5LqL5Lu2XHJcbiAgICAgKiBAcGFyYW0gZXZlbnRLZXkg5LqL5Lu25ZCN56ewXHJcbiAgICAgKiBAcmV0dXJucyB2b2lkIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb2ZmKGV2ZW50S2V5OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMubWVzc2FnZVF1ZXVlcy5oYXNPd25Qcm9wZXJ0eShldmVudEtleSkpIHJldHVybjtcclxuICAgICAgICBkZWxldGUgdGhpcy5tZXNzYWdlUXVldWVzW2V2ZW50S2V5XVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5LqL5Lu25oC757q/5a6e5L6LXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBFdmVudEJ1cztcclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluWUr+S4gOWPr+eUqOWvueixoVxyXG4gICAgICogQHJldHVybnMgRXZlbnRCdXMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogRXZlbnRCdXMge1xyXG4gICAgICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IEV2ZW50QnVzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIOaKm+WHuueoi+W6j+W8guW4uOS/oeaBr1xyXG4gKiBAcGFyYW0gbWVzc2FnZSDlvILluLjnroDopoFcclxuICogQHJldHVybnMgbmV2ZXIgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYXBwRXJyb3IobWVzc2FnZTogc3RyaW5nKTogbmV2ZXIge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBcXG7nsbvlnovvvJrnqIvluo/lvILluLhcXG7lvILluLjkv6Hmga/vvJoke21lc3NhZ2V9XFxu5aCG5qCI5L+h5oGv77yaYCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmipvlh7rpqozor4HlpLHotKXkv6Hmga9cclxuICogQHBhcmFtIG1lc3NhZ2Ug6ZSZ6K+v5L+h5oGvXHJcbiAqIEByZXR1cm5zIG5ldmVyIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlRmFpbChtZXNzYWdlOiBzdHJpbmcpOiBuZXZlciB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFxcbuexu+Wei++8mumqjOivgemUmeivr1xcbumUmeivr+S/oeaBr++8miR7bWVzc2FnZX1cXG7loIbmoIjkv6Hmga/vvJpgKTtcclxufSIsImltcG9ydCB7IFBSRUZJWCB9IGZyb20gJy4uLy4uL2VudHJ5L2NvbnN0JztcclxuaW1wb3J0IHsgY2hlY2tPZlR5cGUgfSBmcm9tICcuLi92YWxpZGF0b3InO1xyXG5cclxuLyoqXHJcbiAqIOaJuemHj+a3u+WKoOWFg+e0oOagt+W8j1xyXG4gKiBAcGFyYW0gZWxlbWVudCDlhYPntKDlr7nosaFcclxuICogQHBhcmFtIGNzc1N0eWxlcyDmoLflvI/ooajlr7nosaFcclxuICogQHJldHVybnMgdm9pZCBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRDU1NTdHlsZXMoZWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsLCBjc3NTdHlsZXM6IENTU1N0eWxlRGVjbGFyYXRpb24pOiB2b2lkIHtcclxuICAgIGlmICghZWxlbWVudCkgcmV0dXJuO1xyXG5cclxuICAgIGZvciAoY29uc3QgY3NzUHJvcCBpbiBjc3NTdHlsZXMpIHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlW2Nzc1Byb3BdID0gY3NzU3R5bGVzW2Nzc1Byb3BdID8/IG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmt7vliqBDU1MgQ2xhc3NcclxuICog6buY6K6k5YmN57yA5Li6IF9fUFJFRklYX1/vvIzlpoLmnpxjbGFzc+WJjemdouW4piAhIOWImeaXoOmcgOa3u+WKoOWJjee8gFxyXG4gKiBAcGFyYW0gZWxlbWVudCDlhYPntKDlr7nosaFcclxuICogQHBhcmFtIGNsYXNzZXMgY2xhc3PliJfooahcclxuICogQHJldHVybnMgSFRNTEVsZW1lbnQgfCBudWxsIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZENTU0NsYXNzZXMoZWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsLCAuLi5jbGFzc2VzOiBBcnJheTxzdHJpbmcgfCB1bmRlZmluZWQ+KTogSFRNTEVsZW1lbnQgfCBudWxsIHtcclxuICAgIGlmICghZWxlbWVudCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgcmV0dXJuIHVwZGF0ZUNTU0NsYXNzZXMoZWxlbWVudCwgZnVuY3Rpb24gKGN1cnJlbnRDbGFzc2VzOiBzdHJpbmdbXSwgaW5kZXg6IG51bWJlciwgaXRlbUNsYXNzOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIX5pbmRleCkge1xyXG4gICAgICAgICAgICBjdXJyZW50Q2xhc3Nlcy5wdXNoKGl0ZW1DbGFzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgUFJFRklYLCAuLi5jbGFzc2VzKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOenu+mZpENTUyBDbGFzc1xyXG4gKiDpu5jorqTliY3nvIDkuLogX19QUkVGSVhfX++8jOWmguaenGNsYXNz5YmN6Z2i5bimICEg5YiZ5peg6ZyA5re75Yqg5YmN57yAXHJcbiAqIEBwYXJhbSBlbGVtZW50IOWFg+e0oOWvueixoVxyXG4gKiBAcGFyYW0gY2xhc3NlcyBjbGFzc+WIl+ihqFxyXG4gKiBAcmV0dXJucyBIVE1MRWxlbWVudCB8IG51bGwgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ1NTQ2xhc3NlcyhlbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwsIC4uLmNsYXNzZXM6IHN0cmluZ1tdKTogSFRNTEVsZW1lbnQgfCBudWxsIHtcclxuICAgIGlmICghZWxlbWVudCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgcmV0dXJuIHVwZGF0ZUNTU0NsYXNzZXMoZWxlbWVudCwgZnVuY3Rpb24gKGN1cnJlbnRDbGFzc2VzOiBzdHJpbmdbXSwgaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICh+aW5kZXgpIHtcclxuICAgICAgICAgICAgY3VycmVudENsYXNzZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBQUkVGSVgsIC4uLmNsYXNzZXMpO1xyXG59XHJcblxyXG4vKipcclxuICog5Yik5pat5piv5ZCm5YyF5ZCrQ1NTIENsYXNzXHJcbiAqIOm7mOiupOWJjee8gOS4uiBfX1BSRUZJWF9f77yM5aaC5p6cY2xhc3PliY3pnaLluKYgISDliJnml6DpnIDmt7vliqDliY3nvIBcclxuICogQHBhcmFtIGVsZW1lbnQg5YWD57Sg5a+56LGhXHJcbiAqIEBwYXJhbSBjbGFzc05hbWUgY2xhc3PliJfooahcclxuICogQHJldHVybnMgYm9vbGVhbiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBoYXNDU1NDbGFzcyhlbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwsIGNsYXNzTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIWVsZW1lbnQpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50Q2xhc3NlcyA9IGVsZW1lbnQuY2xhc3NOYW1lLnNwbGl0KC9cXHMrL2cpO1xyXG4gICAgY29uc3QgY2xzID0gY2xhc3NOYW1lLmluZGV4T2YoXCIhXCIpID09PSAwID8gY2xhc3NOYW1lLnN1YnN0cigxKSA6IFBSRUZJWCArIGNsYXNzTmFtZTtcclxuICAgIGNvbnN0IGluZGV4ID0gY3VycmVudENsYXNzZXMuaW5kZXhPZihjbHMpO1xyXG4gICAgcmV0dXJuICEhfmluZGV4O1xyXG59XHJcblxyXG4vKipcclxuICog5pu05pawQ1NTIENsYXNz77yM5YyF5ous5paw5aKe44CB5pu05paw44CB5Yig6ZmkXHJcbiAqIOm7mOiupOWJjee8gOS4uiBfX1BSRUZJWF9f77yM5aaC5p6cY2xhc3PliY3pnaLluKYgISDliJnml6DpnIDmt7vliqDliY3nvIBcclxuICogQHBhcmFtIGVsZW1lbnQg5YWD57Sg5a+56LGhXHJcbiAqIEBwYXJhbSBoYW5kbGVyIOabtOaWsOaWueW8j1xyXG4gKiBAcGFyYW0gW3ByZWZpeF0g5YmN57yA56ymXHJcbiAqIEBwYXJhbSBjbGFzc2VzIGNsYXNz5YiX6KGoXHJcbiAqIEByZXR1cm5zIEhUTUxFbGVtZW50IHwgbnVsbCBcclxuICovXHJcbmZ1bmN0aW9uIHVwZGF0ZUNTU0NsYXNzZXMoZWxlbWVudDogSFRNTEVsZW1lbnQsIGhhbmRsZXI6IChjdXJyZW50Q2xhc3Nlczogc3RyaW5nW10sIGluZGV4OiBudW1iZXIsIGl0ZW1DbGFzczogc3RyaW5nKSA9PiB2b2lkLCBwcmVmaXg6IHN0cmluZyA9IFBSRUZJWCwgLi4uY2xhc3NlczogQXJyYXk8c3RyaW5nIHwgdW5kZWZpbmVkPik6IEhUTUxFbGVtZW50IHwgbnVsbCB7XHJcbiAgICBpZiAoIWVsZW1lbnQpIHJldHVybiBudWxsO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRDbGFzc2VzID0gZWxlbWVudC5jbGFzc05hbWUuc3BsaXQoL1xccysvZyk7XHJcbiAgICBjbGFzc2VzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpZiAoaXRlbSkge1xyXG4gICAgICAgICAgICBjb25zdCBjbHMgPSBpdGVtLmluZGV4T2YoXCIhXCIpID09PSAwID8gaXRlbS5zdWJzdHIoMSkgOiBwcmVmaXggKyBpdGVtO1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGN1cnJlbnRDbGFzc2VzLmluZGV4T2YoY2xzKTtcclxuICAgICAgICAgICAgaGFuZGxlcihjdXJyZW50Q2xhc3NlcywgaW5kZXgsIGNscyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBjdXJyZW50Q2xhc3Nlcy5qb2luKFwiIFwiKS50cmltKCk7XHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIm+W7umRpduagh+etvlxyXG4gKiBAcGFyYW0gW2lkXSBpZFxyXG4gKiBAcmV0dXJucyBIVE1MRGl2RWxlbWVudCBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEaXZFbGVtZW50KGlkPzogc3RyaW5nKTogSFRNTERpdkVsZW1lbnQge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBpZiAoY2hlY2tPZlR5cGUoaWQsIFwic3RyaW5nXCIpKSB7XHJcbiAgICAgICAgZWxlbWVudC5pZCA9IDxzdHJpbmc+aWQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIm+W7unN2Z+agh+etvlxyXG4gKiBAcGFyYW0gbmFtZSBzdmflm77moIflkI3np7BcclxuICogQHJldHVybnMgU1ZHU1ZHRWxlbWVudFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN2Z0VsZW1lbnQobmFtZTogc3RyaW5nKTogU1ZHU1ZHRWxlbWVudCB7XHJcbiAgICBjb25zdCBzdmdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJzdmdcIik7XHJcbiAgICBjb25zdCB1c2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJ1c2VcIik7XHJcbiAgICB1c2VFbGVtZW50LnNldEF0dHJpYnV0ZU5TKFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLCBcInhsaW5rOmhyZWZcIiwgYCMke25hbWV9YCk7XHJcbiAgICBzdmdFbGVtZW50LmFwcGVuZENoaWxkKHVzZUVsZW1lbnQpO1xyXG4gICAgcmV0dXJuIHN2Z0VsZW1lbnQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDnp7vpmaRkaXblhYPntKBcclxuICogQHBhcmFtIGVsZW1lbnQg5YWD57Sg5a+56LGhXHJcbiAqIEByZXR1cm5zIHZvaWQgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRGl2RWxlbWVudChlbGVtZW50OiBIVE1MRGl2RWxlbWVudCB8IG51bGwpOiB2b2lkIHtcclxuICAgIGlmICghZWxlbWVudCkgcmV0dXJuO1xyXG4gICAgaWYgKCFlbGVtZW50LnBhcmVudEVsZW1lbnQpIHJldHVybjtcclxuXHJcbiAgICBlbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XHJcbn0iLCJpbXBvcnQgeyBjaGVja0pTT05PYmplY3QgfSBmcm9tICcuLi92YWxpZGF0b3InO1xyXG5pbXBvcnQgeyBKU09OT2JqZWN0IH0gZnJvbSAnLi90eXBlJztcclxuXHJcbi8qKlxyXG4gKiDlhYvpmoZKU09O5a+56LGhXHJcbiAqIEBwYXJhbSBzb3VyY2Ug5Y6fSlNPTuexu+Wei+WvueixoVxyXG4gKiBAcmV0dXJucyDlhYvpmoblkI7nmoRKU09O57G75Z6L5a+56LGhXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2xvbmVKU09OT2JqZWN0PFQgZXh0ZW5kcyBKU09OT2JqZWN0Pihzb3VyY2U6IFQpOiBUIHtcclxuICAgIGNvbnN0IG5ld09iamVjdCA9IDxhbnk+e307XHJcblxyXG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoc291cmNlKSkge1xyXG4gICAgICAgIG5ld09iamVjdFtrZXldID0gY2hlY2tKU09OT2JqZWN0KHNvdXJjZVtrZXldKSA/IGNsb25lSlNPTk9iamVjdChzb3VyY2Vba2V5XSkgOiBzb3VyY2Vba2V5XTtcclxuICAgIH1cclxuICAgIHJldHVybiBuZXdPYmplY3QgYXMgVDtcclxufVxyXG5cclxuLyoqXHJcbiAqIOWQiOW5tkpTT07lr7nosaFcclxuICogQHBhcmFtIHNvdXJjZSDmupBKU09O57G75Z6L5a+56LGhXHJcbiAqIEBwYXJhbSBkZXN0IOebruagh0pTT07nsbvlnovlr7nosaFcclxuICogQHJldHVybnMg5ZCI5bm25ZCO55qESlNPTuexu+Wei+WvueixoVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlSlNPTk9iamVjdDxUIGV4dGVuZHMgSlNPTk9iamVjdD4oc291cmNlOiBULCBkZXN0OiBUKTogVCB7XHJcbiAgICBjb25zdCBuZXdPYmplY3QgPSA8YW55PmNsb25lSlNPTk9iamVjdChzb3VyY2UpO1xyXG5cclxuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGRlc3QpKSB7XHJcbiAgICAgICAgaWYgKG5ld09iamVjdFtrZXldID09PSB1bmRlZmluZWQgfHwgIWNoZWNrSlNPTk9iamVjdChkZXN0W2tleV0pKSB7XHJcbiAgICAgICAgICAgIG5ld09iamVjdFtrZXldID0gZGVzdFtrZXldO1xyXG5cclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5ld09iamVjdFtrZXldID0gbWVyZ2VKU09OT2JqZWN0KG5ld09iamVjdFtrZXldLCBkZXN0W2tleV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ld09iamVjdCBhcyBUO1xyXG59XHJcbiIsImltcG9ydCB7IENhblR5cGVvZiwgVmFsdWVPcHRpb24gfSBmcm9tICcuL3R5cGUnO1xyXG5cclxuLyoqXHJcbiAqIOajgOafpeiDveWkn+iiqyB0eXBlb2Yg55qE57G75Z6LXHJcbiAqIEBwYXJhbSBkYXRhIOaVsOaNrlxyXG4gKiBAcGFyYW0gdHlwZU5hbWVzIOexu+Wei+mbhuWQiFxyXG4gKiBAcmV0dXJucyBib29sZWFuIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrT2ZUeXBlKGRhdGE6IGFueSwgLi4udHlwZU5hbWVzOiBBcnJheTxDYW5UeXBlb2Y+KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdHlwZU5hbWVzLmluZGV4T2YodHlwZW9mIGRhdGEpID4gLTE7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XmmK/lkKbmmK/lrZfnrKbkuLLnsbvlnotcclxuICogQHBhcmFtIGRhdGEg5pWw5o2uXHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tTdHJpbmcoZGF0YTogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gY2hlY2tPZlR5cGUoZGF0YSwgXCJzdHJpbmdcIik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XmmK/lkKbmmK/lh73mlbDnsbvlnotcclxuICogQHBhcmFtIGRhdGEg5pWw5o2uXHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tGdW5jdGlvbihkYXRhOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBjaGVja09mVHlwZShkYXRhLCBcImZ1bmN0aW9uXCIpO1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5piv5ZCm5piv5pW05pWw57G75Z6LXHJcbiAqIEBwYXJhbSBkYXRhIOaVsOaNrlxyXG4gKiBAcmV0dXJucyBib29sZWFuIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSW50KGRhdGE6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGNoZWNrT2ZUeXBlKGRhdGEsIFwibnVtYmVyXCIpICYmICgvXlxcLT9bMC05XSskLy50ZXN0KGRhdGEpKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeaYr+WQpuaYr+ato+aVtOaVsOexu+Wei1xyXG4gKiBAcGFyYW0gZGF0YSDmlbDmja5cclxuICogQHJldHVybnMgYm9vbGVhbiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja1BzdEludChkYXRhOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBjaGVja0ludChkYXRhKSAmJiBkYXRhID49IDA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XmmK/lkKbmmK/mraPmlbDlgLznsbvlnotcclxuICogQHBhcmFtIGRhdGEg5pWw5o2uXHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tQc3ROdW1iZXIoZGF0YTogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gY2hlY2tPZlR5cGUoZGF0YSwgXCJudW1iZXJcIikgJiYgZGF0YSA+PSAwO1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5piv5ZCm5pivSlNPTuWvueixoeexu+Wei1xyXG4gKiBAcGFyYW0gZGF0YSDmlbDmja5cclxuICogQHJldHVybnMgYm9vbGVhbiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0pTT05PYmplY3QoZGF0YTogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gY2hlY2tPZlR5cGUoZGF0YSwgXCJvYmplY3RcIikgJiZcclxuICAgICAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZGF0YSkudG9Mb3dlckNhc2UoKSA9PT0gXCJbb2JqZWN0IG9iamVjdF1cIiAmJlxyXG4gICAgICAgICFjaGVja0FycmF5KGRhdGEpICYmIGRhdGEgIT09IG51bGw7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XmmK/lkKbmmK/mlbDnu4Tlr7nosaHnsbvlnotcclxuICogQHBhcmFtIGRhdGEg5pWw5o2uXHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tBcnJheShkYXRhOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGRhdGEpO1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5piv5ZCm5piv5oyH5a6a57G75Z6L5pWw57uE5a+56LGh57G75Z6LXHJcbiAqIEBwYXJhbSBkYXRhIOaVsOaNrlxyXG4gKiBAcGFyYW0gY2hlY2tJdGVtIOaVsOe7hOmhueajgOafpeWHveaVsFxyXG4gKiBAcmV0dXJucyBib29sZWFuIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQXJyYXlFYWNoU2FtZShkYXRhOiBhbnksIGNoZWNrSXRlbTogKGl0ZW06IGFueSkgPT4gYm9vbGVhbik6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGRhdGEpKSByZXR1cm4gZmFsc2U7XHJcbiAgICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHJldHVybiB0cnVlO1xyXG5cclxuICAgIGxldCBpc1NhbWVBcnJheSA9IHRydWU7XHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YSkge1xyXG4gICAgICAgIGlmICghY2hlY2tJdGVtKGl0ZW0pKSB7XHJcbiAgICAgICAgICAgIGlzU2FtZUFycmF5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaXNTYW1lQXJyYXk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XlrZfnrKbkuLLmmK/lkKbljIXlkKvmjIflrprlrZfnrKZcclxuICogQHBhcmFtIGRhdGEg5pWw5YC8XHJcbiAqIEBwYXJhbSBjaGFyYWN0ZXIg5a2X56ymXHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tDb250YWlucyhkYXRhOiBhbnksIGNoYXJhY3Rlcjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gY2hlY2tPZlR5cGUoZGF0YSwgXCJzdHJpbmdcIikgJiYgZGF0YS5pbmRleE9mKGNoYXJhY3RlcikgPiAtMTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeaYr+WQpuaYr+aMh+WumuWPr+mAieWAvOexu+Wei1xyXG4gKiBAcGFyYW0gZGF0YSDmlbDmja5cclxuICogQHBhcmFtIHZhbHVlT3B0aW9ucyDlj6/pgInlgLxcclxuICogQHJldHVybnMgYm9vbGVhblxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSW5WYWx1ZU9wdGlvbnMoZGF0YTogYW55LCAuLi52YWx1ZU9wdGlvbnM6IFZhbHVlT3B0aW9uKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gY2hlY2tPZlR5cGUoZGF0YSwgXCJib29sZWFuXCIsIFwibnVtYmVyXCIsIFwic3RyaW5nXCIsIFwidW5kZWZpbmVkXCIsIFwib2JqZWN0XCIpICYmIHZhbHVlT3B0aW9ucy5pbmRleE9mKGRhdGEpID4gLTE7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XlrZfnrKbkuLLplb/luqbmmK/lkKbmu6HotrPmnIDlsI/plb/luqZcclxuICogQHBhcmFtIGRhdGEg5pWw5o2uXHJcbiAqIEBwYXJhbSB0aHJlc2hvbGQg6ZiI5YC8XHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tNaW5MZW5ndGgoZGF0YTogYW55LCB0aHJlc2hvbGQ6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGNoZWNrT2ZUeXBlKGRhdGEsIFwic3RyaW5nXCIpICYmIGRhdGEubGVuZ3RoID49IHRocmVzaG9sZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeWtl+espuS4sumVv+W6puaYr+WQpua7oei2s+acgOWkp+mVv+W6plxyXG4gKiBAcGFyYW0gZGF0YSDmlbDmja5cclxuICogQHBhcmFtIHRocmVzaG9sZCDpmIjlgLxcclxuICogQHJldHVybnMgYm9vbGVhbiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja01heExlbmd0aChkYXRhOiBhbnksIHRocmVzaG9sZDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gY2hlY2tPZlR5cGUoZGF0YSwgXCJzdHJpbmdcIikgJiYgZGF0YS5sZW5ndGggPD0gdGhyZXNob2xkO1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5a2X56ym5Liy6ZW/5bqm5piv5ZCm5ruh6Laz5Yy66Ze06ZW/5bqmXHJcbiAqIEBwYXJhbSBkYXRhIOaVsOaNrlxyXG4gKiBAcGFyYW0gbWluVGhyZXNob2xkIOacgOWwj+mYiOWAvFxyXG4gKiBAcGFyYW0gbWF4VGhyZXNob2xkIOacgOWkp+mYiOWAvFxyXG4gKiBAcmV0dXJucyBib29sZWFuIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTGVuZ3RoKGRhdGE6IGFueSwgbWluVGhyZXNob2xkOiBudW1iZXIsIG1heFRocmVzaG9sZDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gY2hlY2tNaW5MZW5ndGgoZGF0YSwgbWluVGhyZXNob2xkKSAmJiBjaGVja01heExlbmd0aChkYXRhLCBtYXhUaHJlc2hvbGQpO1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5pWw5YC85piv5ZCm5aSn5LqO5p+Q5Liq5YC8XHJcbiAqIEBwYXJhbSBkYXRhIOaVsOaNrlxyXG4gKiBAcGFyYW0gdGhyZXNob2xkIOmYiOWAvFxyXG4gKiBAcmV0dXJucyBib29sZWFuIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTWluKGRhdGE6IGFueSwgdGhyZXNob2xkOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBjaGVja09mVHlwZShkYXRhLCBcIm51bWJlclwiKSAmJiBkYXRhID49IHRocmVzaG9sZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeaVsOWAvOaYr+WQpuWwj+S6juafkOS4quWAvFxyXG4gKiBAcGFyYW0gZGF0YSDmlbDmja5cclxuICogQHBhcmFtIHRocmVzaG9sZCDpmIjlgLxcclxuICogQHJldHVybnMgYm9vbGVhbiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja01heChkYXRhOiBhbnksIHRocmVzaG9sZDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gY2hlY2tPZlR5cGUoZGF0YSwgXCJudW1iZXJcIikgJiYgZGF0YSA8PSB0aHJlc2hvbGQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XmlbDlgLzmmK/lkKblnKjmn5DkuKrljLrpl7TlhoVcclxuICogQHBhcmFtIGRhdGEg5pWw5o2uXHJcbiAqIEBwYXJhbSBtaW5UaHJlc2hvbGQg5pyA5bCP6ZiI5YC8XHJcbiAqIEBwYXJhbSBtYXhUaHJlc2hvbGQg5pyA5aSn6ZiI5YC8XHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tSYW5nZShkYXRhOiBhbnksIG1pblRocmVzaG9sZDogbnVtYmVyLCBtYXhUaHJlc2hvbGQ6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGNoZWNrTWluKGRhdGEsIG1pblRocmVzaG9sZCkgJiYgY2hlY2tNYXgoZGF0YSwgbWF4VGhyZXNob2xkKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeepuuaIlk5VTEzlrZfnrKbkuLJcclxuICogQHBhcmFtIGRhdGEg5pWw5YC8XHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tFbXB0eU9yTnVsbChkYXRhOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBkYXRhID09PSBudWxsIHx8IChjaGVja09mVHlwZShkYXRhLCBcInN0cmluZ1wiKSAmJiBkYXRhLmxlbmd0aCA9PT0gMCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XpnZ7nqbrmiJbpnZ5OVUxM5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBkYXRhIOaVsOWAvFxyXG4gKiBAcmV0dXJucyBib29sZWFuIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTm9FbXB0eU9yTnVsbChkYXRhOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBjaGVja09mVHlwZShkYXRhLCBcInN0cmluZ1wiKSAmJiBkYXRhLmxlbmd0aCA+IDA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XmmK/lkKbmmK/mraPliJnooajovr7lvI9cclxuICogQHBhcmFtIGRhdGEg5pWw5YC8XHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tSZWdFeHAoZGF0YTogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZGF0YSBpbnN0YW5jZW9mIFJlZ0V4cDtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeaYr+WQpuaYr+minOiJsuWAvFxyXG4gKiBAcGFyYW0gZGF0YSDmlbDlgLxcclxuICogQHJldHVybnMgYm9vbGVhbiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0NvbG9yKGRhdGE6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgdmFyIGJpbmFyeVJlZyA9IC9eIyhbMC05YS1mXXs2fXxbMC05YS1mXXszfSkkL2k7XHJcbiAgICB2YXIgcmdiUmV4ID0gL15yZ2JcXCgoWzAtOV18WzAtOV1bMC05XXwyNVswLTVdfDJbMC00XVswLTldfFswLTFdWzAtOV1bMC05XSlcXCwoWzAtOV18WzAtOV1bMC05XXwyNVswLTVdfDJbMC00XVswLTldfFswLTFdWzAtOV1bMC05XSlcXCwoWzAtOV18WzAtOV1bMC05XXwyNVswLTVdfDJbMC00XVswLTldfFswLTFdWzAtOV1bMC05XSlcXCkkL2k7XHJcbiAgICB2YXIgcmdiYVJleCA9IC9ecmdiYVxcKChbMC05XXxbMC05XVswLTldfDI1WzAtNV18MlswLTRdWzAtOV18WzAtMV1bMC05XVswLTldKVxcLChbMC05XXxbMC05XVswLTldfDI1WzAtNV18MlswLTRdWzAtOV18WzAtMV1bMC05XVswLTldKVxcLChbMC05XXxbMC05XVswLTldfDI1WzAtNV18MlswLTRdWzAtOV18WzAtMV1bMC05XVswLTldKVxcLCgxfDEuMHwwLlswLTldKVxcKSQvaTtcclxuXHJcbiAgICByZXR1cm4gYmluYXJ5UmVnLnRlc3QoZGF0YSkgfHwgcmdiUmV4LnRlc3QoZGF0YSkgfHwgcmdiYVJleC50ZXN0KGRhdGEpO1xyXG59XHJcbiIsImltcG9ydCB7IEFsaWduIH0gZnJvbSAnLi4vY29tcG9uZW50L3VpLXRvb2wtYmFyL2NvbnN0JztcclxuXHJcbi8qKlxyXG4gKiDniYjmnKzlj7dcclxuICovXHJcbmV4cG9ydCBjb25zdCBWRVJTSU9OOiBzdHJpbmcgPSBcIjMuMC4wXCI7XHJcblxyXG4vKipcclxuICog5YmN57yA56ymXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgUFJFRklYOiBzdHJpbmcgPSBcImxheXgtXCI7XHJcblxyXG4vKipcclxuICog6buY6K6k5byA5aeL5bGC5pWwXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgU1RBUlRfWklOREVYOiBudW1iZXIgPSAxMDAwMDAwMDtcclxuXHJcbi8qKlxyXG4gKiDpu5jorqTnqpflj6Plrr3luqZcclxuICovXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX1dJTkRPV19XSURUSDogbnVtYmVyID0gODAwO1xyXG5cclxuLyoqXHJcbiAqIOm7mOiupOeql+WPo+mrmOW6plxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfV0lORE9XX0hFSUdIVDogbnVtYmVyID0gNjAwO1xyXG5cclxuLyoqXHJcbiAqIOm7mOiupOeql+WPo+iDjOaZr+minOiJslxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfV0lORE9XX0JBQ0tHUk9VTkRfQ09MT1I6IHN0cmluZyA9IFwiI2ZmZmZmZlwiO1xyXG5cclxuLyoqXHJcbiAqIOm7mOiupOW3peWFt+agj+iDjOaZr+minOiJslxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfVE9PTEJBUl9CQUNLR1JPVU5EX0NPTE9SOiBzdHJpbmcgPSBcIiNmZmZmZmZcIjtcclxuXHJcbi8qKlxyXG4gKiDpu5jorqTlt6XlhbfmoI/pq5jluqZcclxuICovXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX1RPT0xCQVJfSEVJR0hUOiBudW1iZXIgPSAzMDtcclxuXHJcbi8qKlxyXG4gKiDmoIfpopjmoI/pu5jorqTmlofmnKxcclxuICovXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX1RJVExFQkFSX0xBQkVMID0gXCLmnKrlkb3lkI1cIjtcclxuXHJcbi8qKlxyXG4gKiDmoIfpopjmoI/pu5jorqTpopzoibJcclxuICovXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX1RJVExFQkFSX0NPTE9SID0gXCIjMDAwMDAwXCI7XHJcblxyXG4vKipcclxuICog5qCH6aKY5qCP6buY6K6k5a+56b2Q5pa55byPXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9USVRMRUJBUl9BTElHTiA9IEFsaWduLkxFRlQ7XHJcblxyXG4vKipcclxuICog5qCH6aKY5qCP6buY6K6k5a2X5L2T5aSn5bCPXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9USVRMRUJBUl9GT05UU0laRSA9IDE0O1xyXG5cclxuLyoqXHJcbiAqIOWGhee9ruaUr+aMgeivreiogFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGVudW0gU3VwcG9ydExhbmd1YWdlIHtcclxuICAgIC8qKlxyXG4gICAgICog5Lit5paHXHJcbiAgICAgKi9cclxuICAgIFpIX0NOID0gXCJaSF9DTlwiLFxyXG4gICAgLyoqXHJcbiAgICAgKiDoi7HmlodcclxuICAgICAqL1xyXG4gICAgRU5fVVMgPSBcIkVOX1VTXCJcclxufSIsImltcG9ydCAnLi4vYXNzZXQvaWNvbic7XHJcbmltcG9ydCAnLi4vYXNzZXQvc3R5bGUnO1xyXG5cclxuaW1wb3J0IHsgREVGQVVMVF9JQ09OLCBERUZBVUxUX0lDT05fQ09MT1IsIERFRkFVTFRfSUNPTl9TSVpFIH0gZnJvbSAnLi4vY29tcG9uZW50L3VpLWljb24vY29uc3QnO1xyXG5pbXBvcnQgeyBVSUljb25PcHRpb24gfSBmcm9tICcuLi9jb21wb25lbnQvdWktaWNvbi90eXBlJztcclxuaW1wb3J0IHsgQWxpZ24gfSBmcm9tICcuLi9jb21wb25lbnQvdWktdG9vbC1iYXIvY29uc3QnO1xyXG5pbXBvcnQgeyBUaXRsZUJhck9wdGlvbiB9IGZyb20gJy4uL2NvbXBvbmVudC91aS10b29sLWJhci90eXBlJztcclxuaW1wb3J0IHsgVUlXaW5kb3cgfSBmcm9tICcuLi9jb21wb25lbnQvdWktd2luZG93JztcclxuaW1wb3J0IHsgVUlXaW5kb3dPcHRpb24gfSBmcm9tICcuLi9jb21wb25lbnQvdWktd2luZG93L3R5cGUnO1xyXG5pbXBvcnQgeyBhZG1peCwgaW5WYWx1ZU9wdGlvbnMsIGlzTm9FbXB0eU9yTnVsbCwgaXNQc3RJbnQsIG1pbiB9IGZyb20gJy4uL2NvcmUvZGVjb3JhdG9yL3Byb3BlcnR5LWRlY29yYXRvcic7XHJcbmltcG9ydCB7IEV2ZW50QnVzIH0gZnJvbSAnLi4vY29yZS9ldmVudC1idXMnO1xyXG5pbXBvcnQgeyBFdmVudFNldHRlciB9IGZyb20gJy4uL2NvcmUvZXZlbnQtYnVzL3R5cGUnO1xyXG5pbXBvcnQgeyBjaGVja0NvbG9yLCBjaGVja05vRW1wdHlPck51bGwsIGNoZWNrT2ZUeXBlLCBjaGVja1BzdEludCwgY2hlY2tQc3ROdW1iZXIsIGNoZWNrU3RyaW5nIH0gZnJvbSAnLi4vY29yZS92YWxpZGF0b3InO1xyXG5pbXBvcnQge1xyXG4gICAgREVGQVVMVF9USVRMRUJBUl9BTElHTixcclxuICAgIERFRkFVTFRfVElUTEVCQVJfQ09MT1IsXHJcbiAgICBERUZBVUxUX1RJVExFQkFSX0ZPTlRTSVpFLFxyXG4gICAgREVGQVVMVF9USVRMRUJBUl9MQUJFTCxcclxuICAgIERFRkFVTFRfVE9PTEJBUl9CQUNLR1JPVU5EX0NPTE9SLFxyXG4gICAgREVGQVVMVF9UT09MQkFSX0hFSUdIVCxcclxuICAgIERFRkFVTFRfV0lORE9XX0JBQ0tHUk9VTkRfQ09MT1IsXHJcbiAgICBERUZBVUxUX1dJTkRPV19IRUlHSFQsXHJcbiAgICBERUZBVUxUX1dJTkRPV19XSURUSCxcclxuICAgIFBSRUZJWCxcclxuICAgIFNUQVJUX1pJTkRFWCxcclxuICAgIFN1cHBvcnRMYW5ndWFnZSxcclxuICAgIFZFUlNJT04sXHJcbn0gZnJvbSAnLi9jb25zdCc7XHJcbmltcG9ydCB7IGhhbmRsZXJPcHRpb25zIH0gZnJvbSAnLi9wYXJ0aWFsJztcclxuaW1wb3J0IHsgRW50cnlPcHRpb24sIFRvb2xCYXJEZWZhdWx0LCBXaW5kb3dEZWZhdWx0IH0gZnJvbSAnLi90eXBlJztcclxuXHJcbi8qKlxyXG4gKiDlhaXlj6PljZXkvovnsbvvvIzmib/ovb3nnYDlhajlsYDmlbDmja7lrZjlgqhcclxuICovXHJcbmV4cG9ydCBjbGFzcyBFbnRyeSB7XHJcbiAgICAvKipcclxuICAgICAqIOengeacieWMluaehOmAoOWHveaVsO+8jOWunueOsOWNleS+i1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKG9wdGlvbnM6IEVudHJ5T3B0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVyT3B0aW9ucyhvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWkhOeQhuWIneWni+S8oOWFpeWPguaVsFxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMg5Y+v6YCJ5Y+C5pWwXHJcbiAgICAgKiBAcmV0dXJucyB2b2lkXHJcbiAgICAgKi9cclxuICAgIGhhbmRsZXJPcHRpb25zOiAob3B0aW9uczogRW50cnlPcHRpb24pID0+IHZvaWQgPSBoYW5kbGVyT3B0aW9ucztcclxuXHJcbiAgICAvKipcclxuICAgICAqIOeJiOacrOWPt1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgdmVyc2lvbjogc3RyaW5nID0gVkVSU0lPTjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOi1t+Wni+WxguaVsCzkuI3og73lsI/kuo4xMDAwXHJcbiAgICAgKi9cclxuICAgIEBpc1BzdEludCgpXHJcbiAgICBAbWluKDEwMDApXHJcbiAgICBwdWJsaWMgc3RhcnRaSW5kZXg6IG51bWJlciA9IFNUQVJUX1pJTkRFWDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWJjee8gOesplxyXG4gICAgICovXHJcbiAgICBAaXNOb0VtcHR5T3JOdWxsKClcclxuICAgIHB1YmxpYyByZWFkb25seSBwcmVmaXg6IHN0cmluZyA9IFBSRUZJWDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOm7mOiupOivreiogFxyXG4gICAgICovXHJcbiAgICBAaW5WYWx1ZU9wdGlvbnMoU3VwcG9ydExhbmd1YWdlLlpIX0NOLCBTdXBwb3J0TGFuZ3VhZ2UuRU5fVVMpXHJcbiAgICBwdWJsaWMgbGFuZzogU3VwcG9ydExhbmd1YWdlID0gU3VwcG9ydExhbmd1YWdlLlpIX0NOO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog56qX5Y+j6buY6K6k6YWN572uXHJcbiAgICAgKi9cclxuICAgIEBhZG1peCh7XHJcbiAgICAgICAgd2lkdGg6IGNoZWNrUHN0TnVtYmVyLFxyXG4gICAgICAgIGhlaWdodDogY2hlY2tQc3ROdW1iZXIsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjaGVja0NvbG9yLFxyXG4gICAgICAgIHRvb2xCYXI6IHtcclxuICAgICAgICAgICAgZGVjb3JhdG9yOiB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGNoZWNrUHN0TnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjaGVja0NvbG9yLFxyXG4gICAgICAgICAgICAgICAgdGl0bGVCYXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBkZWNvcmF0b3I6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGNoZWNrU3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogY2hlY2tDb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ246IFtBbGlnbi5MRUZULCBBbGlnbi5DRU5URVIsIEFsaWduLlJJR0hUXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IGNoZWNrUHN0SW50XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBbZmFsc2VdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaWNvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlY29yYXRvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBjaGVja05vRW1wdHlPck51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IGNoZWNrUHN0SW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogY2hlY2tDb2xvclxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogW2ZhbHNlXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvcHRpb25zOiBbZmFsc2VdXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIHB1YmxpYyB3aW5kb3c6IFdpbmRvd0RlZmF1bHQgPSA8V2luZG93RGVmYXVsdD57XHJcbiAgICAgICAgd2lkdGg6IERFRkFVTFRfV0lORE9XX1dJRFRILCAvLyDpu5jorqTlrr3luqZcclxuICAgICAgICBoZWlnaHQ6IERFRkFVTFRfV0lORE9XX0hFSUdIVCwgIC8vIOm7mOiupOmrmOW6plxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogREVGQVVMVF9XSU5ET1dfQkFDS0dST1VORF9DT0xPUiwgICAgLy/pu5jorqTog4zmma/popzoibJcclxuICAgICAgICB0b29sQmFyOiA8VG9vbEJhckRlZmF1bHQgfCBmYWxzZT57XHJcbiAgICAgICAgICAgIGhlaWdodDogREVGQVVMVF9UT09MQkFSX0hFSUdIVCwgLy8g6buY6K6k5bel5YW35qCP6auY5bqmXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogREVGQVVMVF9UT09MQkFSX0JBQ0tHUk9VTkRfQ09MT1IsIC8vIOm7mOiupOW3peWFt+agj+iDjOaZr+minOiJslxyXG4gICAgICAgICAgICB0aXRsZUJhcjogPFRpdGxlQmFyT3B0aW9uIHwgZmFsc2U+e1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6IERFRkFVTFRfVElUTEVCQVJfTEFCRUwsICAvLyDpu5jorqTmoIfpopjmoI/mlofmnKxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBERUZBVUxUX1RJVExFQkFSX0NPTE9SLCAvLyDpu5jorqTmoIfpopjmoI/popzoibJcclxuICAgICAgICAgICAgICAgIGFsaWduOiBERUZBVUxUX1RJVExFQkFSX0FMSUdOLCAvLyDpu5jorqTmoIfpopjmoI/lr7npvZDmlrnlvI9cclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBERUZBVUxUX1RJVExFQkFSX0ZPTlRTSVpFIC8vIOm7mOiupOagh+mimOagj+Wtl+S9k+Wkp+Wwj1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpY29uOiA8VUlJY29uT3B0aW9uIHwgZmFsc2U+e1xyXG4gICAgICAgICAgICAgICAgbmFtZTogREVGQVVMVF9JQ09OLCAvLyDpu5jorqTlm77moIflkI3np7BcclxuICAgICAgICAgICAgICAgIHNpemU6IERFRkFVTFRfSUNPTl9TSVpFLCAvLyDpu5jorqTlm77moIflpKflsI9cclxuICAgICAgICAgICAgICAgIGNvbG9yOiBERUZBVUxUX0lDT05fQ09MT1IgLy8g6buY6K6k5Zu+5qCH6aKc6ImyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5b2T5YmN5bGC57qn5pWwXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX3pJbmRleDogbnVtYmVyID0gdGhpcy5zdGFydFpJbmRleDtcclxuICAgIGdldCB6SW5kZXgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3pJbmRleCA9IHRoaXMuX3pJbmRleCArIDI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnm5HlkKzkuovku7ZcclxuICAgICAqIEBwYXJhbSBxdWV1ZXMg5LqL5Lu26Zif5YiXXHJcbiAgICAgKi9cclxuICAgIG9uKHF1ZXVlczogRXZlbnRTZXR0ZXIgPSB7fSk6IHZvaWQge1xyXG4gICAgICAgIGZvciAoY29uc3QgZXZlbnRLZXkgaW4gcXVldWVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZXIgPSBxdWV1ZXNbZXZlbnRLZXldO1xyXG4gICAgICAgICAgICBpZiAoY2hlY2tPZlR5cGUoaGFuZGxlciwgXCJmdW5jdGlvblwiKSkge1xyXG4gICAgICAgICAgICAgICAgRXZlbnRCdXMuZ2V0SW5zdGFuY2UoKS5vbihldmVudEtleSwgaGFuZGxlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmiZPlvIDmlrDnqpflj6NcclxuICAgICAqIEBwYXJhbSBvcHRpb25zIOeql+WPo+WPguaVsFxyXG4gICAgICogQHJldHVybnMgdm9pZFxyXG4gICAgICovXHJcbiAgICBvcGVuKG9wdGlvbnM6IFVJV2luZG93T3B0aW9uKTogVUlXaW5kb3cge1xyXG4gICAgICAgIGNvbnN0IHVpV2luZG93ID0gbmV3IFVJV2luZG93KG9wdGlvbnMpO1xyXG4gICAgICAgIGNvbnN0IHVpV2luZG93RWxlbWVudCA9IHVpV2luZG93LnByZXNlbnQoKTtcclxuICAgICAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZCh1aVdpbmRvd0VsZW1lbnQpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodWlXaW5kb3dFbGVtZW50KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHVpV2luZG93O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6Z2Z5oCB5a6e5L6L5Y+Y6YePXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBFbnRyeTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluWUr+S4gOWPr+eUqOWvueixoVxyXG4gICAgICogQHBhcmFtIFtvcHRpb25zXSDlhaXlj6Plj4LmlbBcclxuICAgICAqIEByZXR1cm5zIEVudHJ5IFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKG9wdGlvbnM6IEVudHJ5T3B0aW9uID0gPEVudHJ5T3B0aW9uPnt9KTogRW50cnkge1xyXG4gICAgICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IEVudHJ5KG9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5oYW5kbGVyT3B0aW9ucyhvcHRpb25zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBFbnRyeSB9IGZyb20gJy4vJztcclxuaW1wb3J0IHsgU3VwcG9ydExhbmd1YWdlIH0gZnJvbSAnLi9jb25zdCc7XHJcbmltcG9ydCB7IEVudHJ5T3B0aW9uLCBXaW5kb3dEZWZhdWx0IH0gZnJvbSAnLi90eXBlJztcclxuXHJcbi8qKlxyXG4gKiDlpITnkIbliJ3lp4vkvKDlhaXlj4LmlbBcclxuICogQHBhcmFtIG9wdGlvbnMg5o6n5Lu25pSv5oyB5Lyg5YWl5Y+v6YCJ5Y+C5pWwXHJcbiAqIEByZXR1cm5zIHZvaWRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVyT3B0aW9ucyh0aGlzOiBFbnRyeSwgb3B0aW9uczogRW50cnlPcHRpb24pOiB2b2lkIHtcclxuICAgIHRoaXMubGFuZyA9IG9wdGlvbnM/LmxhbmcgPz8gU3VwcG9ydExhbmd1YWdlLlpIX0NOO1xyXG4gICAgdGhpcy5zdGFydFpJbmRleCA9IG9wdGlvbnM/LnN0YXJ0WkluZGV4ID8/IHRoaXMuc3RhcnRaSW5kZXg7XHJcbiAgICB0aGlzLndpbmRvdyA9IDxXaW5kb3dEZWZhdWx0Pm9wdGlvbnM/LndpbmRvdyA/PyB0aGlzLndpbmRvdztcclxufSIsImltcG9ydCB7IEVudHJ5IH0gZnJvbSAnLi9hcHAvZW50cnknO1xyXG5pbXBvcnQgeyBFbnRyeU9wdGlvbiwgRW50cnlPdmVydCB9IGZyb20gJy4vYXBwL2VudHJ5L3R5cGUnO1xyXG5cclxuLyoqXHJcbiAqIOWvueWkluWFrOW8gOaWueazlVxyXG4gKi9cclxuZnVuY3Rpb24gb3ZlcnQoKTogRW50cnlPdmVydCB7XHJcbiAgICBjb25zdCBlbnRyeSA9IEVudHJ5LmdldEluc3RhbmNlKCk7XHJcblxyXG4gICAgY29uc3QgZW50cnlPdmVydCA9IDxFbnRyeU92ZXJ0PmZ1bmN0aW9uIChvcHRpb25zOiBFbnRyeU9wdGlvbik6IHZvaWQge1xyXG4gICAgICAgIEVudHJ5LmdldEluc3RhbmNlKG9wdGlvbnMpO1xyXG4gICAgfTtcclxuXHJcbiAgICBlbnRyeU92ZXJ0Lm9uID0gZW50cnkub247XHJcbiAgICBlbnRyeU92ZXJ0LnZlcnNpb24gPSBlbnRyeS52ZXJzaW9uO1xyXG4gICAgZW50cnlPdmVydC5vcGVuID0gZW50cnkub3BlbjtcclxuXHJcbiAgICByZXR1cm4gZW50cnlPdmVydDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgb3ZlcnQoKTsiXSwic291cmNlUm9vdCI6IiJ9