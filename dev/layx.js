/*
 * gitee : https://gitee.com/monksoul/LayX
 * author : 百小僧/MonkSoul
 * version : v1.0.0
 * create time : 2018.05.03
 */

;
!(function(window) {
    "use strict";

    var svgSprite = '<svg><symbol id="layx-icon-restore" viewBox="0 0 1157 1024"><path d="M1016.52185234 724.44050175L833.87364805 724.44050175 833.87364805 898.52098643 833.87364805 960.05279112 833.87364805 961.2211168 772.34184336 961.2211168 772.34184336 960.05279112 124.31068789 960.05279112 124.31068789 961.2211168 62.7788832 961.2211168 62.7788832 960.05279112 62.7788832 898.52098643 62.7788832 360.31241885 62.7788832 298.78061416 124.31068789 298.78061416 298.78061416 298.78061416 298.78061416 62.7788832 303.06447442 62.7788832 360.31241885 62.7788832 1016.52185234 62.7788832 1074.15923838 62.7788832 1078.05365615 62.7788832 1078.05365615 662.90869795 1078.05365615 724.44050175 1016.52185234 724.44050175ZM124.31068789 898.52098643L772.34184336 898.52098643 772.34184336 724.44050175 772.34184336 662.90869795 772.34184336 360.31241885 124.31068789 360.31241885 124.31068789 898.52098643ZM1016.52185234 124.31068789L360.31241885 124.31068789 360.31241885 298.78061416 772.34184336 298.78061416 833.87364805 298.78061416 833.87364805 360.31241885 833.87364805 662.90869795 1016.52185234 662.90869795 1016.52185234 124.31068789Z"  ></path></symbol><symbol id="layx-icon-windows" viewBox="0 0 1024 1024"><path d="M128 512 128 288 384 231.68 384 508.16 128 512M853.333333 128 853.333333 501.333333 426.666667 507.733333 426.666667 222.293333 853.333333 128M128 554.666667 384 558.506667 384 849.066667 128 800 128 554.666667M853.333333 565.333333 853.333333 938.666667 426.666667 857.173333 426.666667 558.933333 853.333333 565.333333Z"  ></path></symbol><symbol id="layx-icon-min" viewBox="0 0 1024 1024"><path d="M65.23884 456.152041 958.760137 456.152041l0 111.695918L65.23884 567.847959 65.23884 456.152041z"  ></path></symbol><symbol id="layx-icon-max" viewBox="0 0 1024 1024"><path d="M75.74912227 948.24738475L75.74912227 75.75145131l872.50059037 0 0 872.49593344L75.74912227 948.24738475zM839.18786674 184.81446115L184.81213326 184.81446115l0 654.37573462 654.37573461 0L839.18786674 184.81446115z"  ></path></symbol><symbol id="layx-icon-destroy" viewBox="0 0 1024 1024"><path d="M933.89254819 139.71606348L884.23129279 90.08990363 511.96490363 462.39138834 140.40044113 90.82692583 90.84447403 140.34779656 462.40893653 511.91225907 90.10745181 884.2137446 139.73361166 933.875 512.03509637 561.53841892 883.59955887 933.10288141 933.15552597 883.58201068 561.59106347 512.01754819Z"  ></path></symbol></svg>';
    var script = function() { var scripts = document.getElementsByTagName("script"); return scripts[scripts.length - 1] }();
    var shouldInjectCss = script.getAttribute("data-injectcss");
    var ready = function(fn) {
        if (document.addEventListener) {
            if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) { setTimeout(fn, 0) } else {
                var loadFn = function() {
                    document.removeEventListener("DOMContentLoaded", loadFn, false);
                    fn()
                };
                document.addEventListener("DOMContentLoaded", loadFn, false)
            }
        } else if (document.attachEvent) { IEContentLoaded(window, fn) }

        function IEContentLoaded(w, fn) {
            var d = w.document,
                done = false,
                init = function() {
                    if (!done) {
                        done = true;
                        fn()
                    }
                };
            var polling = function() {
                try { d.documentElement.doScroll("left") } catch (e) { setTimeout(polling, 50); return }
                init()
            };
            polling();
            d.onreadystatechange = function() {
                if (d.readyState == "complete") {
                    d.onreadystatechange = null;
                    init()
                }
            }
        }
    };
    var before = function(el, target) { target.parentNode.insertBefore(el, target) };
    var prepend = function(el, target) { if (target.firstChild) { before(el, target.firstChild) } else { target.appendChild(el) } };

    function appendSvg() {
        var div, svg;
        div = document.createElement("div");
        div.innerHTML = svgSprite;
        svgSprite = null;
        svg = div.getElementsByTagName("svg")[0];
        if (svg) {
            svg.setAttribute("aria-hidden", "true");
            svg.style.position = "absolute";
            svg.style.width = 0;
            svg.style.height = 0;
            svg.style.overflow = "hidden";
            prepend(svg, document.body)
        }
    }
    if (shouldInjectCss && !window.__iconfont__svg__cssinject__) { window.__iconfont__svg__cssinject__ = true; try { document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>") } catch (e) { console && console.log(e) } }
    ready(appendSvg)
})(window);

;
!(function(over, win) {
    "use strict";

    // layx defaults define
    var defaults = {
        id: 'layx',
        icon: '',
        title: '未命名标题',
        bgColor: '#fff',
        borderColor: '#3baced',
        opacity: 1,
        type: 'iframe',
        content: 'about:blank',
        width: 800,
        height: 600,
        position: 'center',
        minWidth: 50,
        minHeight: 50,
        shade: false,
        minimizable: true,
        maximizable: true,
        closable: true,
        resizable: true,
        movable: true,
        moveLimit: { x: false, y: false },
        alwaysOnTop: false,
        focusable: true,
        parent: null,
        controlMenus: [],
        menuItems: [],
        intercept: {
            load: {
                before: function() {},
                after: function() {}
            },
            min: {
                before: function() {},
                after: function() {}
            },
            max: {
                before: function() {},
                after: function() {}
            },
            restore: {
                before: function() {},
                after: function() {}
            },
            destroy: {
                before: function() {},
                after: function() {}
            }
        }
    };

    // Event define
    var EventTarget = function() {
        this._listener = {};
    };

    EventTarget.prototype = {
        constructor: this,
        addEvent: function(type, fn) {
            if (typeof type === "string" && typeof fn === "function") {
                if (typeof this._listener[type] === "undefined") {
                    this._listener[type] = [fn];
                } else {
                    this._listener[type].push(fn);
                }
            }
            return this;
        },
        addEvents: function(obj) {
            obj = typeof obj === "object" ? obj : {};
            var type;
            for (type in obj) {
                if (type && typeof obj[type] === "function") {
                    this.addEvent(type, obj[type]);
                }
            }
            return this;
        },
        fireEvent: function(type) {
            if (type && this._listener[type]) {
                var events = {
                    type: type,
                    target: this
                };

                for (var length = this._listener[type].length, start = 0; start < length; start += 1) {
                    this._listener[type][start].call(this, events);
                }
            }
            return this;
        },
        fireEvents: function(array) {
            if (array instanceof Array) {
                for (var i = 0, length = array.length; i < length; i += 1) {
                    this.fireEvent(array[i]);
                }
            }
            return this;
        },
        removeEvent: function(type, key) {
            var listeners = this._listener[type];
            if (listeners instanceof Array) {
                if (typeof key === "function") {
                    for (var i = 0, length = listeners.length; i < length; i += 1) {
                        if (listeners[i] === listener) {
                            listeners.splice(i, 1);
                            break;
                        }
                    }
                } else if (key instanceof Array) {
                    for (var lis = 0, lenkey = key.length; lis < lenkey; lis += 1) {
                        this.removeEvent(type, key[lenkey]);
                    }
                } else {
                    delete this._listener[type];
                }
            }
            return this;
        },
        removeEvents: function(params) {
            if (params instanceof Array) {
                for (var i = 0, length = params.length; i < length; i += 1) {
                    this.removeEvent(params[i]);
                }
            } else if (typeof params === "object") {
                for (var type in params) {
                    this.removeEvent(type, params[type]);
                }
            }
            return this;
        }
    };

    var utils = {
        extend: function(target, ...sources) {
            sources.forEach(source => {
                let descriptors = Object.keys(source).reduce((descriptors, key) => {
                    descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
                    return descriptors;
                }, {});

                Object.getOwnPropertySymbols(source).forEach(sym => {
                    let descriptor = Object.getOwnPropertyDescriptor(source, sym);
                    if (descriptor.enumerable) {
                        descriptors[sym] = descriptor;
                    }
                });
                Object.defineProperties(target, descriptors);
            });
            return target;
        },
        isArray: function(o) {
            return Object.prototype.toString.call(o) == '[object Array]';
        },
        isFunction: function(func) {
            return func && Object.prototype.toString.call(func) === '[object Function]';
        },
        getElementById: function(id, el) {
            return ((el && el.nodeType == 1) ? el : document).getElementById(id);
        },
        querySelector: function(selector, el) {
            return ((el && el.nodeType == 1) ? el : document).querySelector(selector);
        },
        InsertAfter: function(html, el) {
            ((el && el.nodeType == 1) ? el : document.body).lastElementChild.insertAdjacentHTML('afterend', html);
        },
    };

    // layx window events define
    var winEvents = new EventTarget();
    winEvents.addEvents({
        destroy: function(winform, options) {}
    });

    // Layx class define
    var Layx = {
        zIndex: 19920527,
        windows: {},
        create: function(options) {
            var config = utils.extend({}, defaults, options || {});
            if (!Layx.windows.hasOwnProperty(config.id)) {
                var winform = {};
                winform.id = config.id;
                winform.title = config.title;
                winform.type = config.type;

                // create window dom
                var winTemplate = `
                <div class="layx-window" id="layx-` + config.id + `" style="width:` + config.width + `px;height:` + config.height + `px;top:50px;left:50px;z-index: ` + (++Layx.zIndex) + `;background-color:` + config.bgColor + `;border-color:` + config.borderColor + `;opacity:` + config.opacity + `">
                    <div class="layx-control-bar">
                        <div class="layx-icons">
                            <div class="layx-icon">
                                <svg class="layx-iconfont" aria-hidden="true">
                                    <use xlink:href="#layx-icon-windows"></use>
                                </svg>
                            </div>
                        </div>
                        <div class="layx-title">` + config.title + `</div>
                        <div class="layx-menus">
                        ` + (config.minimizable === true ?
                    `
                            <div class="layx-operator layx-min-menu">
                                <svg class="layx-iconfont" aria-hidden="true">
                                    <use xlink:href="#layx-icon-min"></use>
                                </svg>
                            </div>
                            ` : ``) + `
                            
                            ` + (config.maximizable === true ?
                    `
                            <div class="layx-operator layx-max-menu">
                                <svg class="layx-iconfont" aria-hidden="true">
                                    <use xlink:href="#layx-icon-max"></use>
                                </svg>
                            </div>
                                ` : ``) + `
                            
                            ` + (config.closable === true ?
                    `
                                <div class="layx-operator layx-destroy-menu">
                                <svg class="layx-iconfont" aria-hidden="true">
                                    <use xlink:href="#layx-icon-destroy"></use>
                                </svg>
                            </div>
                                ` : ``) + `
                            
                        </div>
                    </div>
                    <div class="layx-body">
                        <div class="layx-fixed" data-enable="0"></div>
                        <iframe class="layx-iframe" allowtransparency="true" frameborder="0" scrolling="auto" src="./iframe.html"></iframe>
                    </div>
                    ` + (config.resizable === true ?
                    `
                        <div class="layx-resizes">
                        <div class="layx-resize-top"></div>
                        <div class="layx-resize-right"></div>
                        <div class="layx-resize-bottom"></div>
                        <div class="layx-resize-left"></div>
                        <div class="layx-resize-left-top"></div>
                        <div class="layx-resize-right-top"></div>
                        <div class="layx-resize-left-bottom"></div>
                        <div class="layx-resize-right-bottom"></div>
                    </div>
                        ` :
                    ``) + `
                </div>
                `;

                // append to body
                utils.InsertAfter(winTemplate);

                Layx.windows[winform.id] = winform;
            }
            return winform;
        },
        destroy: function(id) {
            if (Layx.windows.hasOwnProperty(id)) {
                delete Layx.windows.id;
            }
            var windowDom = utils.getElementById("layx-" + id);
            if (windowDom) {
                windowDom.parentNode.removeChild(windowDom);
            }
        }
    };

    win.layx = {
        open: function(options) {
            return Layx.create(options);
        },
        destroy: function(id) {
            Layx.destroy(id);
        },
        min: function(id) {},
        max: function(id) {},
        restore: function(id) {},
        setAlwaysOnTop: function(id) {},
        getWindow: function(id) {},
        setTitle: function(id, title) {},
        setPosition: function(id, position) {},
        getWindows: function() {}
    };

})(top, window);