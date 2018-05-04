/*
 * gitee : https://gitee.com/monksoul/LayX
 * author : 百小僧/MonkSoul
 * version : v1.0.0
 * create time : 2018.05.03
 * update time : 2018.05.04
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
        title: '',
        bgColor: '#fff',
        borderColor: '#3baced',
        opacity: 1,
        type: 'iframe',
        url: '',
        content: 'about:blank',
        width: 800,
        height: 600,
        position: 'center',
        useFrameTitle: false,
        minWidth: 50,
        minHeight: 50,
        shadable: false,
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
                before: function(windowDom, winform) {},
                after: function(windowDom, winform, iframe) {}
            },
            min: {
                before: function(windowDom, winform) {},
                after: function(windowDom, winform) {}
            },
            max: {
                before: function(windowDom, winform) {},
                after: function(windowDom, winform) {}
            },
            restore: {
                before: function(windowDom, winform) {},
                after: function(windowDom, winform) {}
            },
            destroy: {
                before: function(windowDom, winform) {},
                after: function(windowDom, winform) {}
            }
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
        getClientArea: function() {
            return { width: window.innerWidth, height: window.innerHeight };
        },
        compilePositionParams: function(width, height, params) {
            var that = this;
            var posOptions = ['center', 'lt', 'rt', 'lb', 'rb'];
            var clientArea = that.getClientArea();
            var position = { top: 0, left: 0 };
            if (that.isArray(params) && params.length === 2) {
                position.top = params[0];
                position.left = params[1];
            } else {
                params = posOptions.indexOf(params.toString()) > -1 ? params.toString() : 'center';
                switch (params) {
                    case 'center':
                        position.top = Math.floor(Math.floor(clientArea.height - height) / 2);
                        position.left = Math.floor(Math.floor(clientArea.width - width) / 2);
                        break;
                    case 'lt':
                        position.top = 0;
                        position.left = 0;
                        break;
                    case 'rt':
                        position.top = 0;
                        position.left = Math.floor(clientArea.width - width);
                        break;
                    case 'lb':
                        position.top = Math.floor(clientArea.height - height);
                        position.left = 0;
                        break;
                    case 'rb':
                        position.top = Math.floor(clientArea.height - height);
                        position.left = Math.floor(clientArea.width - width);
                        break;
                }
            }
            if (typeof position.top !== 'number') {
                position.top = Math.floor(Math.floor(clientArea.height - height) / 2);
            }
            if (typeof position.left !== 'number') {
                position.left = Math.floor(Math.floor(clientArea.width - width) / 2);
            }

            return position;
        },
        createIframe: function(id, src, onload) {
            var that = this,
                iframe = document.createElement("iframe");

            src = src || 'about:blank';
            iframe.setAttribute("id", id);
            iframe.setAttribute("allowtransparency", true);
            iframe.setAttribute("frameborder", 0);
            iframe.setAttribute("scrolling", "auto");

            if (that.isFunction(onload)) {
                if (iframe.attachEvent) {
                    iframe.attachEvent('onload', onload);
                } else if (iframe.addEventListener) {
                    iframe.addEventListener('load', onload);
                } else {
                    iframe.onload = onload;
                }
            }
            iframe.src = src;
            return iframe;
        },
        destroyIframe: function(iframe) {
            iframe.src = 'about:blank';
            try {
                iframe.contentWindow.document.write('');
                iframe.contentWindow.document.clear();
            } catch (error) {}
            iframe.parentNode.removeChild(iframe);
        },
        poll: function(fn, callback, errback, timeout, interval) {
            var endTime = Number(new Date()) + (timeout || 2000);
            interval = interval || 100;
            (function p() {
                if (fn()) {
                    callback();
                } else if (Number(new Date()) < endTime) {
                    setTimeout(p, interval);
                } else {
                    errback(new Error('timed out for ' + fn + ': ' + arguments));
                }
            })();
        }
    };

    var Drag = function(el) {
        var options = arguments[1] || {},
            limit = false || options.limit,
            lockX = false || options.lockX,
            lockY = false || options.lockY;

        var drag = function(e) {
            e = e || window.event;

            var button = e.button || e.which;
            if (button == 1 && e.shiftKey == false) {}
        }

        var dragend = function(e) {
            e = e || window.event;

            document.onmouseup = null;
            document.onmousemove = null;
        }

        var dragstart = function(e) {
            e = e || window.event;
            var button = e.button || e.which;

            var windowDom = el.parentElement.parentElement;
            Layx.setZindex(windowDom, Layx.windows[windowDom.id.substr(5)]);
            el.windowDom = windowDom;

            if (button == 1 && e.shiftKey == false) {}

            return false;
        };
        el.onmousedown = dragstart;
    }

    // Layx class define
    var Layx = {
        zIndex: 19920527,
        windows: {},
        create: function(options) {
            var config = utils.extend({}, defaults, options || {});
            if (!Layx.windows.hasOwnProperty(config.id)) {
                if (config.url) {
                    config.type = 'iframe';
                } else {
                    config.type = 'html';
                }

                var winform = {};
                winform.id = config.id;
                winform.title = config.title;
                winform.type = config.type;
                winform.config = config;
                winform.status = 'normal';
                winform.createDate = new Date();

                var position = utils.compilePositionParams(config.width, config.height, config.position);
                winform.defaultAreaInfo = {
                    width: config.width,
                    height: config.height,
                    top: position.top,
                    left: position.left,
                    position: config.position
                };

                // create window dom
                var winTemplate = `
                ` + (config.shadable === true ? `
                <div class="layx-shade" id="layx-` + config.id + `-shade" style="z-index:` + (++Layx.zIndex) + `"></div>
                ` : ``) + `
                <div class="layx-window" id="layx-` + config.id + `" style="width:` + config.width + `px;height:` + config.height + `px;top:` + position.top + `px;left:` + position.left + `px;z-index: ` + (++Layx.zIndex) + `;background-color:` + (config.bgColor ? config.bgColor : 'transparent') + `;border-color:` + config.borderColor + `;opacity:` + config.opacity + `">
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
                var windowDom = utils.getElementById('layx-' + config.id);
                winform.windowDom = windowDom;
                winform.zIndex = Layx.zIndex;
                Layx.windows[config.id] = winform;

                var layxBody = utils.querySelector('.layx-body', windowDom);

                if (utils.isFunction(config.intercept.load.before) && config.intercept.load.before(winform, windowDom) !== false) {
                    if (config.type === "iframe") {
                        var iframe = utils.createIframe("layx-" + config.id + '-content', (config.url ? config.url : config.content), function() {
                            try {
                                var iframeDoc = iframe.contentWindow;
                                if (config.useFrameTitle === true) {
                                    var frameTitle = iframe.contentDocument.querySelector('title');
                                    Layx.setTitle(config.id, frameTitle ? frameTitle.innerText : config.title);
                                }
                                if (config.focusable === true) {
                                    iframeDoc.onclick = function(e) {
                                        var that = this.self;
                                        if (that != over && that.frameElement && that.frameElement.tagName == "IFRAME") {
                                            var windowDom = that.frameElement.parentNode.parentElement;
                                            Layx.setZindex(windowDom, winform);
                                        }
                                    };
                                }
                                if (utils.isFunction(config.intercept.load.after)) {
                                    config.intercept.load.after(winform, windowDom, iframeDoc);
                                }
                            } catch (error) {
                                if (config.useFrameTitle === true) {
                                    Layx.setTitle(config.id, config.title);
                                }
                                console.warn(error);
                            }
                        });
                        iframe.classList.add("layx-iframe");
                        layxBody.appendChild(iframe);
                    } else {
                        var div = document.createElement('div');
                        div.classList.add('layx-html');
                        div.innerHTML = config.content;
                        div.setAttribute("id", "layx-" + config.id + '-content');
                        layxBody.appendChild(div);
                        windowDom.onclick = function(e) {
                            Layx.setZindex(this, winform);
                        }
                    }
                }

                // bind events
                var destroyMenu = utils.querySelector('.layx-destroy-menu', windowDom);
                if (destroyMenu) destroyMenu.onclick = function(e) { Layx.triggerMethod('destroy', config.id, winform, e); };

                var maxMenu = utils.querySelector('.layx-max-menu', windowDom);
                if (maxMenu) maxMenu.onclick = function(e) { Layx.triggerMethod('max', config.id, winform, e); };

                var minMenu = utils.querySelector('.layx-min-menu', windowDom);
                if (minMenu) minMenu.onclick = function(e) { Layx.triggerMethod('min', config.id, winform, e); };

                var title = utils.querySelector('.layx-title', windowDom);
                if (title) {
                    if (config.movable) {
                        new Drag(title);
                    }
                    title.ondblclick = function(e) {
                        if (winform.status === "normal") {
                            Layx.triggerMethod('max', config.id, winform, e);
                        } else {
                            Layx.triggerMethod('restore', config.id, winform, e);
                        }
                    };
                }

                var shade = utils.querySelector('.layx-shade');
                if (shade) {
                    shade.onclick = function(e) {
                        var that = this,
                            id = this.id,
                            windowId = id.substr(0, id.length - '-shade'.length);
                        Layx.setFlicker(windowId.substr(5));
                    }
                }

                return winform;
            } else {
                Layx.ExistShow(config.id);
                return Layx.windows[config.id];
            }
        },
        destroy: function(id) {
            var windowDom = utils.getElementById("layx-" + id),
                winform = Layx.windows[id];

            var shade = utils.getElementById('layx-' + id + '-shade');
            if (windowDom) {
                windowDom.parentNode.removeChild(windowDom);
                if (shade) {
                    shade.parentNode.removeChild(shade);
                }
            }
            if (Layx.windows.hasOwnProperty(id)) {
                delete Layx.windows[id];
            }
        },
        max: function(id) {
            var windowDom = utils.getElementById("layx-" + id),
                winform = Layx.windows[id];

            if (windowDom) {
                var maxMenu = utils.querySelector('.layx-max-menu', windowDom);
                if (maxMenu) {
                    maxMenu.innerHTML = `
                    <svg class="layx-iconfont" aria-hidden="true">
                        <use xlink:href="#layx-icon-restore"></use>
                    </svg>
                    `;
                    maxMenu.classList.remove('layx-max-menu');
                    maxMenu.classList.add('layx-restore-menu');
                    maxMenu.setAttribute('data-ref', 'max');

                    var restoreMenu = utils.querySelector('.layx-restore-menu[data-ref="max"]', windowDom);
                    if (restoreMenu) restoreMenu.onclick = function(e) { Layx.triggerMethod('restore', id, winform, e); };
                }

                var minMenu = utils.querySelector('.layx-restore-menu[data-ref="min"]', windowDom);
                if (minMenu) {
                    minMenu.innerHTML = `
                    <svg class="layx-iconfont" aria-hidden="true">
                        <use xlink:href="#layx-icon-min"></use>
                    </svg>
                    `;
                    minMenu.classList.remove('layx-restore-menu');
                    minMenu.classList.add('layx-min-menu');
                    minMenu.removeAttribute('data-ref');
                    minMenu.removeAttribute('data-restore-statu');

                    minMenu.onclick = function(e) { Layx.triggerMethod('min', id, winform, e); };
                }

                var resizePanel = utils.querySelector('.layx-resizes', windowDom);
                if (resizePanel) {
                    resizePanel.setAttribute('data-enable', '0');
                }

                var clientArea = utils.getClientArea();
                windowDom.style.width = clientArea.width + 'px';
                windowDom.style.height = clientArea.height + 'px';
                windowDom.style.top = '0px';
                windowDom.style.left = '0px';

                Layx.windows[id].status = 'max';
            }
        },
        restore: function(id) {
            var windowDom = utils.getElementById("layx-" + id),
                winform = Layx.windows[id];

            if (windowDom) {

                var maxMenu = utils.querySelector('.layx-restore-menu[data-ref="max"]', windowDom);
                if (maxMenu) {
                    maxMenu.innerHTML = `
                        <svg class="layx-iconfont" aria-hidden="true">
                            <use xlink:href="#layx-icon-max"></use>
                        </svg>
                        `;
                    maxMenu.classList.remove('layx-restore-menu');
                    maxMenu.classList.add('layx-max-menu');
                    maxMenu.removeAttribute('data-ref');

                    maxMenu.onclick = function(e) { Layx.triggerMethod('max', id, winform, e); };

                    var defaultAreaInfo = winform.defaultAreaInfo;
                    windowDom.style.width = defaultAreaInfo.width + 'px';
                    windowDom.style.height = defaultAreaInfo.height + 'px';
                    windowDom.style.top = defaultAreaInfo.top + 'px';
                    windowDom.style.left = defaultAreaInfo.left + 'px';

                    Layx.windows[id].status = 'normal';
                }

                var minMenu = utils.querySelector('.layx-restore-menu[data-ref="min"]', windowDom);
                if (minMenu) {
                    minMenu.innerHTML = `
                        <svg class="layx-iconfont" aria-hidden="true">
                            <use xlink:href="#layx-icon-min"></use>
                        </svg>
                        `;
                    minMenu.classList.remove('layx-restore-menu');
                    minMenu.classList.add('layx-min-menu');
                    minMenu.removeAttribute('data-ref');

                    minMenu.onclick = function(e) { Layx.triggerMethod('min', id, winform, e); };

                    var resizePanel = utils.querySelector('.layx-resizes', windowDom);
                    if (resizePanel) {
                        resizePanel.removeAttribute('data-enable');
                    }

                    var restoreStatu = minMenu.getAttribute("data-restore-statu");
                    if (restoreStatu === "normal") {
                        var defaultAreaInfo = winform.defaultAreaInfo;
                        windowDom.style.width = defaultAreaInfo.width + 'px';
                        windowDom.style.height = defaultAreaInfo.height + 'px';
                        windowDom.style.top = defaultAreaInfo.top + 'px';
                        windowDom.style.left = defaultAreaInfo.left + 'px';

                        Layx.windows[id].status = 'normal';
                    } else if (restoreStatu === "max") {
                        Layx.triggerMethod(restoreStatu, id, winform);
                    }
                }
            }
        },
        min: function(id) {
            var windowDom = utils.getElementById("layx-" + id),
                winform = Layx.windows[id];
            if (windowDom) {
                var minMenu = utils.querySelector('.layx-min-menu', windowDom);
                if (minMenu) {
                    minMenu.innerHTML = `
                    <svg class="layx-iconfont" aria-hidden="true">
                        <use xlink:href="#layx-icon-restore"></use>
                    </svg>
                    `;
                    minMenu.classList.remove('layx-min-menu');
                    minMenu.classList.add('layx-restore-menu');
                    minMenu.setAttribute('data-ref', 'min');
                    minMenu.setAttribute('data-restore-statu', winform.status);

                    var restoreMenu = utils.querySelector('.layx-restore-menu[data-ref="min"]', windowDom);
                    if (restoreMenu) restoreMenu.onclick = function(e) { Layx.triggerMethod('restore', id, e); };
                }

                var maxMenu = utils.querySelector('.layx-restore-menu[data-ref="max"]', windowDom);
                if (maxMenu) {
                    maxMenu.innerHTML = `
                    <svg class="layx-iconfont" aria-hidden="true">
                        <use xlink:href="#layx-icon-max"></use>
                    </svg>
                    `;
                    maxMenu.classList.remove('layx-restore-menu');
                    maxMenu.classList.add('layx-max-menu');
                    maxMenu.removeAttribute('data-ref');

                    maxMenu.onclick = function(e) { Layx.triggerMethod('max', id, winform, e); };
                }

                var resizePanel = utils.querySelector('.layx-resizes', windowDom);
                if (resizePanel) {
                    resizePanel.setAttribute('data-enable', '0');
                }

                Layx.windows[id].status = 'min';
                Layx.minManager();
            }
        },
        triggerMethod: function(methodName, id, winform, e) {
            e = e || window.event;
            Layx[methodName](id);
            e.stopPropagation();
        },
        minManager: function() {
            var clientArea = utils.getClientArea(),
                paddingLeft = 10,
                paddingBottom = 10,
                minStatuWidth = 200,
                minStatuHeight = 30,
                lineMaxCount = Math.floor(clientArea.width / (minStatuWidth + paddingLeft)),
                stepIndex = 0;
            var windows = Layx.windows;
            if (windows) {
                for (var id in windows) {
                    if (windows[id].status === 'min') {
                        windows[id].windowDom.style.width = minStatuWidth + 'px';
                        windows[id].windowDom.style.height = minStatuHeight + 'px';
                        windows[id].windowDom.style.top = clientArea.height - (Math.floor(stepIndex / lineMaxCount) + 1) * (minStatuHeight + paddingBottom) + 'px';
                        windows[id].windowDom.style.left = (stepIndex % lineMaxCount) * (minStatuWidth + paddingLeft) + paddingLeft + 'px';
                        stepIndex++;
                    }
                }
            }
        },
        ExistShow: function(id) {
            var windowDom = utils.getElementById("layx-" + id),
                winform = Layx.windows[id];
            Layx.setZindex(windowDom, winform);
            if (windowDom) {
                if (winform.status === "min") {
                    Layx.triggerMethod('restore', id, winform);
                }
            }
        },
        setZindex: function(windowDom, winform) {
            if (windowDom && winform) {
                windowDom.style.zIndex = ++Layx.zIndex;
                winform.zIndex = Layx.zIndex;
            }
        },
        setTitle: function(id, txt) {
            var windowDom = utils.getElementById("layx-" + id),
                winform = Layx.windows[id];
            if (windowDom) {
                var title = utils.querySelector('.layx-title', windowDom);
                title.innerHTML = txt;
                winform.title = txt;
            }
        },
        setUrl: function(id, url) {
            var windowDom = utils.getElementById("layx-" + id),
                winform = Layx.windows[id];
            if (windowDom) {
                if (winform.type === "iframe") {
                    var iframe = utils.querySelector('#layx-' + id + '-content', windowDom);
                    iframe.setAttribute("src", url);
                }
            }
        },
        setFlicker: function(id) {
            var filcker = null;
            var windowDom = utils.getElementById("layx-" + id),
                winform = Layx.windows[id];
            if (windowDom) {
                if (windowDom.classList.contains('shadowFlicker')) windowDom.classList.remove('shadowFlicker');
                windowDom.classList.add('shadowFlicker');
                filcker = setTimeout(function() {
                    clearTimeout(filcker);
                    windowDom.classList.remove('shadowFlicker');
                }, 120 * 8);
            }
        }
    };

    over.layx = win.layx = {
        open: function(options) {
            Layx.create(options);
        },
        destroy: function(id) {
            Layx.destroy(id);
        },
        min: function(id) {},
        max: function(id) {},
        restore: function(id) {},
        getWindow: function(id) {
            return Layx.windows[id];
        },
        getWindows: function() {
            return Layx.windows;
        },
        setTitle: function(id, title) {
            Layx.setTitle(id, title);
        },
        setUrl: function(id, url) {
            Layx.setUrl(id, url);
        },
        setPosition: function(id, position) {},
        setContent: function(id, content) {},
        setAlwaysOnTop: function(id) {}
    };

})(top, window);