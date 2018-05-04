"use strict";

/*
 * file : layx.js
 * gitee : https://gitee.com/monksoul/LayX
 * author : 百小僧/MonkSoul
 * version : v1.0.0
 * create time : 2018.05.03
 * update time : 2018.05.04
 */
;
! function(over, win) {
    "use strict";

    // layx defaults define

    var defaults = {
        id: 'layx', // 唯一id
        icon: '', // 图标
        title: '', // 窗口标题
        bgColor: '#fff', // 背景颜色
        borderColor: '#3baced', // 边框颜色
        opacity: 1, // 透明度
        type: 'iframe', // 窗口类型：支持iframe,alert,confirm,error,load,prompt
        url: '', // iframe类型地址，type=iframe 时有效
        content: '', // 非iframe类型内容，支持text,html
        width: 800, // 初始化宽度
        height: 600, // 初始化高度
        position: 'center', // 初始化位置，支持'center', 'lt', 'rt', 'lb', 'rb'以及 [top,left]数组
        useFrameTitle: false, // 是否自动获取iframe页面标题填充窗口标题
        minWidth: 50, // 拖曳大小最小宽度
        minHeight: 50, // 拖曳大小最大宽度
        shadable: false, // 是否启用窗口阻隔
        minimizable: true, // 是否允许最小化
        maximizable: true, // 是否允许最大化
        closable: true, // 是否允许关闭
        resizable: true, // 是否允许拖曳大小
        movable: true, // 是否允许拖动窗口
        // 拖动窗口显示，vertical为true表示禁止水平拖动，horizontal为true表示禁止垂直拖动
        moveLimit: {
            vertical: false, // 是否禁止垂直拖动，false不禁止
            horizontal: false, // 是否禁止水平拖动，false不禁止
            leftOut: true, // 是否允许左边拖出，true允许
            rightOut: true, // 是否允许右边拖出，true允许
            topOut: true, // 是否允许上边拖出，true允许，此设置不管是false还是true，窗口都不能拖出窗体
            bottomOut: true, // 是否允许下边拖出，true允许
        },
        alwaysOnTop: false, // 是否总是置顶
        focusable: true, // 是否启用iframe页面点击置顶
        scaleAnimatable: false, // 是否启用窗口缩放动画
        allowTitleDblclickToRestore: true, // 是否允许标题双击恢复窗体
        parent: null, // 父窗体id，设置此选项时，关闭父窗体将会关闭所有子窗体
        controlMenus: [], // 自定义标题栏按钮
        menuItems: [], // 自定义顶部菜单，支持无限极
        intercept: {
            // 加载监听
            load: {
                before: function(windowDom, winform) {},
                after: function(windowDom, winform, iframe) {}
            },
            // 最小化监听
            min: {
                before: function(windowDom, winform) {},
                after: function(windowDom, winform) {}
            },
            // 最大化监听
            max: {
                before: function(windowDom, winform) {},
                after: function(windowDom, winform) {}
            },
            // 恢复监听
            restore: {
                before: function(windowDom, winform) {},
                after: function(windowDom, winform) {}
            },
            // 关闭监听
            destroy: {
                before: function(windowDom, winform) {},
                after: function(windowDom, winform) {}
            }
        }
    };

    var utils = {
        extend: function(target) {
            for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                sources[_key - 1] = arguments[_key];
            }

            sources.forEach(function(source) {
                var descriptors = Object.keys(source).reduce(function(descriptors, key) {
                    descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
                    return descriptors;
                }, {});

                if (Object["getOwnPropertySymbols"]) {
                    Object.getOwnPropertySymbols(source).forEach(function(sym) {
                        var descriptor = Object.getOwnPropertyDescriptor(source, sym);
                        if (descriptor.enumerable) {
                            descriptors[sym] = descriptor;
                        }
                    });
                }

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
            return (el && el.nodeType == 1 ? el : document).getElementById(id);
        },
        querySelector: function(selector, el) {
            return (el && el.nodeType == 1 ? el : document).querySelector(selector);
        },
        InsertAfter: function(html, el) {
            (el && el.nodeType == 1 ? el : document.body).lastElementChild.insertAdjacentHTML('afterend', html);
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
        embedLayxCss: function(cssUrl) {
            var that = this;
            var layxCss = utils.getElementById('layx-css');
            if (!layxCss) {
                layxCss = document.createElement('link');
                layxCss.setAttribute('id', 'layx-css');
                layxCss.setAttribute('rel', 'stylesheet');
                layxCss.setAttribute('charset', 'utf-8');
                layxCss.setAttribute('type', 'text/css');
                layxCss.href = cssUrl;
                var head = utils.querySelector("head");
                head.appendChild(layxCss);
            }
            return layxCss;
        },
        cssReady: function(fn, link) {
            var d = document,
                t = d.createStyleSheet,
                r = t ? 'rules' : 'cssRules',
                s = t ? 'styleSheet' : 'sheet',
                l = d.getElementsByTagName('link');
            // passed link or last link node
            link || (link = l[l.length - 1]);

            function check() {
                try {
                    return link && link[s] && link[s][r] && link[s][r][0];
                } catch (e) {
                    console.log('load layx.css fail.');
                    return false;
                }
            }
            (function poll() {
                check() && setTimeout(fn, 0) || setTimeout(poll, 100);
            })();
        },
        loadCss: function(fn) {
            var that = this;
            var link = that.embedLayxCss('layx.css');
            that.cssReady(fn, link);
        },
        getMousePosition: function(e) {
            e = event || window.event;
            var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
            var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
            var x = e.pageX || e.clientX + scrollX;
            var y = e.pageY || e.clientY + scrollY;
            return { 'x': x, 'y': y };
        },
        getNodeByClassName: function(node, className) {
            var that = this;
            if (node === document.body) {
                return null;
            }
            var cls = node.classList;
            if (cls.contains(className)) {
                return node;
            } else {
                return that.getNodeByClassName(node.parentNode, className);
            }
        }
    };

    var Drag = function(el, moveLimit) {
        var drag = function(e) {
            e = e || window.event;

            var button = e.button || e.which;
            if (button == 1 && e.shiftKey == false) {
                Drag.isMove = true;
                var currentPosition = utils.getMousePosition(e);
                var currentX = currentPosition.x,
                    currentY = currentPosition.y,
                    distX = currentX - el.startX,
                    distY = currentY - el.startY,
                    _top = el.windowStartTop + distY,
                    _left = el.windowStartLeft + distX;

                // limit
                moveLimit.horizontal === true && (_left = el.windowStartLeft);
                moveLimit.vertical === true && (_top = el.windowStartTop);

                // move out limit
                moveLimit.leftOut === false && (_left = Math.max(_left, 0));
                moveLimit.rightOut === false && (_left = Math.min(_left, el.clientArea.width - el.windowStartWidth));
                moveLimit.bottomOut === false && (_top = Math.min(_top, el.clientArea.height - el.windowStartHeight));

                _top = Math.max(_top, 0);
                _top = Math.min(el.clientArea.height - 15, _top);

                el.windowDom.style.top = _top + 'px';
                el.windowDom.style.left = _left + 'px';
            }
        };

        var dragend = function(e) {
            e = e || window.event;

            document.onmouseup = null;
            document.onmousemove = null;

            if (Drag.isMove === true) {
                Drag.isMove = false;
                if (el.windowDom.offsetTop === 0) {
                    Layx.triggerMethod('max', el.windowId, Layx.windows[el.windowId], e);
                }
            }
            el.layxFixed.removeAttribute('data-enable');
        };

        var dragstart = function(e) {
            e = e || window.event;

            var windowDom = utils.getNodeByClassName(el, 'layx-window'),
                layxFixed = utils.querySelector('.layx-fixed', windowDom),
                clientArea = utils.getClientArea(),
                windowId = windowDom.id.substr(5);
            Layx.setZindex(windowDom, Layx.windows[windowId]);
            el.windowDom = windowDom;
            el.windowId = windowId;
            el.layxFixed = layxFixed;
            el.windowStartLeft = windowDom.offsetLeft;
            el.windowStartTop = windowDom.offsetTop;
            el.windowStartWidth = windowDom.offsetWidth;
            el.windowStartHeight = windowDom.offsetHeight;

            var startPosition = utils.getMousePosition(e);
            el.startX = startPosition.x;
            el.startY = startPosition.y;
            el.clientArea = clientArea;
            layxFixed.setAttribute('data-enable', '1');

            document.onmouseup = dragend;
            document.onmousemove = drag;

            return false;
        };
        Drag.isMove = false;
        el.onmousedown = dragstart;
    };

    // Layx class define
    var Layx = {
        v: '1.0.0',
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

                var clientArea = utils.getClientArea();
                var position = utils.compilePositionParams(config.width, config.height, config.position);
                if (config.width > clientArea.width) {
                    position.left = 0;
                }
                if (config.height > clientArea.height) {
                    position.top = 0;
                }
                config.width = Math.min(config.width, clientArea.width);
                config.height = Math.min(config.height, clientArea.height);

                winform.defaultAreaInfo = {
                    width: config.width,
                    height: config.height,
                    top: position.top,
                    left: position.left
                };

                // create window dom
                var winTemplate = "\n                " + (config.shadable === true ? "\n                <div class=\"layx-shade\" id=\"layx-" + config.id + "-shade\" style=\"z-index:" + ++Layx.zIndex + "\"></div>\n                " : "") + "\n                <div class=\"layx-window\" id=\"layx-" + config.id + "\" style=\"width:" + config.width + "px;height:" + config.height + "px;top:" + position.top + "px;left:" + position.left + "px;z-index: " + ++Layx.zIndex + ";background-color:" + (config.bgColor ? config.bgColor : 'transparent') + ";border-color:" + config.borderColor + ";opacity:" + config.opacity + "\">\n                    <div class=\"layx-control-bar\">\n                        <div class=\"layx-icons\">\n                            <div class=\"layx-icon\">\n                                <svg class=\"layx-iconfont\" aria-hidden=\"true\">\n                                    <use xlink:href=\"#layx-icon-windows\"></use>\n                                </svg>\n                            </div>\n                        </div>\n                        <div class=\"layx-title\">" + config.title + "</div>\n                        <div class=\"layx-menus\">\n                        " + (config.minimizable === true ? "\n                            <div class=\"layx-operator layx-min-menu\">\n                                <svg class=\"layx-iconfont\" aria-hidden=\"true\">\n                                    <use xlink:href=\"#layx-icon-min\"></use>\n                                </svg>\n                            </div>\n                            " : "") + "\n                            \n                            " + (config.maximizable === true ? "\n                            <div class=\"layx-operator layx-max-menu\">\n                                <svg class=\"layx-iconfont\" aria-hidden=\"true\">\n                                    <use xlink:href=\"#layx-icon-max\"></use>\n                                </svg>\n                            </div>\n                                " : "") + "\n                            \n                            " + (config.closable === true ? "\n                                <div class=\"layx-operator layx-destroy-menu\">\n                                <svg class=\"layx-iconfont\" aria-hidden=\"true\">\n                                    <use xlink:href=\"#layx-icon-destroy\"></use>\n                                </svg>\n                            </div>\n                                " : "") + "\n                            \n                        </div>\n                    </div>\n                    <div class=\"layx-body\">\n                        <div class=\"layx-fixed\" data-enable=\"0\"></div>\n                    </div>\n                    " + (config.resizable === true ? "\n                        <div class=\"layx-resizes\">\n                        <div class=\"layx-resize-top\"></div>\n                        <div class=\"layx-resize-right\"></div>\n                        <div class=\"layx-resize-bottom\"></div>\n                        <div class=\"layx-resize-left\"></div>\n                        <div class=\"layx-resize-left-top\"></div>\n                        <div class=\"layx-resize-right-top\"></div>\n                        <div class=\"layx-resize-left-bottom\"></div>\n                        <div class=\"layx-resize-right-bottom\"></div>\n                    </div>\n                        " : "") + "\n                </div>\n                ";

                // append to body
                utils.InsertAfter(winTemplate);
                var windowDom = utils.getElementById('layx-' + config.id);
                winform.windowDom = windowDom;
                winform.zIndex = Layx.zIndex;
                Layx.windows[config.id] = winform;

                var layxBody = utils.querySelector('.layx-body', windowDom);

                if (utils.isFunction(config.intercept.load.before) && config.intercept.load.before(winform, windowDom) !== false) {
                    if (config.type === "iframe") {
                        var iframe = utils.createIframe("layx-" + config.id + '-content', config.url ? config.url : config.content, function() {
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
                        };
                    }
                }

                // bind events
                var destroyMenu = utils.querySelector('.layx-destroy-menu', windowDom);
                if (destroyMenu) destroyMenu.onclick = function(e) {
                    Layx.triggerMethod('destroy', config.id, winform, e);
                };

                var maxMenu = utils.querySelector('.layx-max-menu', windowDom);
                if (maxMenu) maxMenu.onclick = function(e) {
                    Layx.triggerMethod('max', config.id, winform, e);
                };

                var minMenu = utils.querySelector('.layx-min-menu', windowDom);
                if (minMenu) minMenu.onclick = function(e) {
                    Layx.triggerMethod('min', config.id, winform, e);
                };

                var title = utils.querySelector('.layx-title', windowDom);
                if (title) {
                    if (config.movable) {
                        new Drag(title, config.moveLimit);
                    }
                    if (config.allowTitleDblclickToRestore === true) {
                        title.ondblclick = function(e) {
                            if (winform.status === "normal") {
                                Layx.triggerMethod('max', config.id, winform, e);
                            } else {
                                Layx.triggerMethod('restore', config.id, winform, e);
                            }
                        };
                    }
                }

                var shade = utils.querySelector('.layx-shade');
                if (shade) {
                    shade.onclick = function(e) {
                        var that = this,
                            id = this.id,
                            windowId = id.substr(0, id.length - '-shade'.length);
                        Layx.setFlicker(windowId.substr(5));
                    };
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
                var parentFrame = utils.querySelector("#layx-" + id + "-content", windowDom);
                if (parentFrame) {
                    // 关闭嵌套子窗体，递归
                    if (parentFrame.tagName === "IFRAME") {
                        if (parentFrame["contentWindow"]) {
                            // 没有实现
                        }
                    }
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
                    maxMenu.innerHTML = "\n                    <svg class=\"layx-iconfont\" aria-hidden=\"true\">\n                        <use xlink:href=\"#layx-icon-restore\"></use>\n                    </svg>\n                    ";
                    maxMenu.classList.remove('layx-max-menu');
                    maxMenu.classList.add('layx-restore-menu');
                    maxMenu.setAttribute('data-ref', 'max');

                    var restoreMenu = utils.querySelector('.layx-restore-menu[data-ref="max"]', windowDom);
                    if (restoreMenu) restoreMenu.onclick = function(e) {
                        Layx.triggerMethod('restore', id, winform, e);
                    };
                }

                var minMenu = utils.querySelector('.layx-restore-menu[data-ref="min"]', windowDom);
                if (minMenu) {
                    minMenu.innerHTML = "\n                    <svg class=\"layx-iconfont\" aria-hidden=\"true\">\n                        <use xlink:href=\"#layx-icon-min\"></use>\n                    </svg>\n                    ";
                    minMenu.classList.remove('layx-restore-menu');
                    minMenu.classList.add('layx-min-menu');
                    minMenu.removeAttribute('data-ref');
                    minMenu.removeAttribute('data-restore-statu');

                    minMenu.onclick = function(e) {
                        Layx.triggerMethod('min', id, winform, e);
                    };
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
                    maxMenu.innerHTML = "\n                        <svg class=\"layx-iconfont\" aria-hidden=\"true\">\n                            <use xlink:href=\"#layx-icon-max\"></use>\n                        </svg>\n                        ";
                    maxMenu.classList.remove('layx-restore-menu');
                    maxMenu.classList.add('layx-max-menu');
                    maxMenu.removeAttribute('data-ref');

                    maxMenu.onclick = function(e) {
                        Layx.triggerMethod('max', id, winform, e);
                    };

                    var defaultAreaInfo = winform.defaultAreaInfo;
                    windowDom.style.width = defaultAreaInfo.width + 'px';
                    windowDom.style.height = defaultAreaInfo.height + 'px';
                    windowDom.style.top = defaultAreaInfo.top + 'px';
                    windowDom.style.left = defaultAreaInfo.left + 'px';

                    Layx.windows[id].status = 'normal';
                }

                var minMenu = utils.querySelector('.layx-restore-menu[data-ref="min"]', windowDom);
                if (minMenu) {
                    minMenu.innerHTML = "\n                        <svg class=\"layx-iconfont\" aria-hidden=\"true\">\n                            <use xlink:href=\"#layx-icon-min\"></use>\n                        </svg>\n                        ";
                    minMenu.classList.remove('layx-restore-menu');
                    minMenu.classList.add('layx-min-menu');
                    minMenu.removeAttribute('data-ref');

                    minMenu.onclick = function(e) {
                        Layx.triggerMethod('min', id, winform, e);
                    };

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
                    minMenu.innerHTML = "\n                    <svg class=\"layx-iconfont\" aria-hidden=\"true\">\n                        <use xlink:href=\"#layx-icon-restore\"></use>\n                    </svg>\n                    ";
                    minMenu.classList.remove('layx-min-menu');
                    minMenu.classList.add('layx-restore-menu');
                    minMenu.setAttribute('data-ref', 'min');
                    minMenu.setAttribute('data-restore-statu', winform.status);

                    var restoreMenu = utils.querySelector('.layx-restore-menu[data-ref="min"]', windowDom);
                    if (restoreMenu) restoreMenu.onclick = function(e) {
                        Layx.triggerMethod('restore', id, winform, e);
                    };
                }

                var maxMenu = utils.querySelector('.layx-restore-menu[data-ref="max"]', windowDom);
                if (maxMenu) {
                    maxMenu.innerHTML = "\n                    <svg class=\"layx-iconfont\" aria-hidden=\"true\">\n                        <use xlink:href=\"#layx-icon-max\"></use>\n                    </svg>\n                    ";
                    maxMenu.classList.remove('layx-restore-menu');
                    maxMenu.classList.add('layx-max-menu');
                    maxMenu.removeAttribute('data-ref');

                    maxMenu.onclick = function(e) {
                        Layx.triggerMethod('max', id, winform, e);
                    };
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
            var beforeReval = true;
            if (winform && winform.config && winform.config.intercept[methodName] && utils.isFunction(winform.config.intercept[methodName].before) && winform.config.intercept[methodName].before(winform.windowDom, winform) === false) {
                beforeReval = false;
            }
            if (beforeReval) {
                Layx[methodName] && Layx[methodName](id);
            }
            if (winform && winform.config && winform.config.intercept[methodName] && utils.isFunction(winform.config.intercept[methodName].after)) {
                winform.config.intercept[methodName].after(winform.windowDom, winform);
            }
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
                        windows[id].windowDom.style.left = stepIndex % lineMaxCount * (minStatuWidth + paddingLeft) + paddingLeft + 'px';
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
        // 打开窗口
        open: function(options) {
            Layx.create(options);
        },
        // 打开窗口并自动检测是否加载了layx.css，如果没有加载就自动加载，只适合非file:///协议环境
        openl: function(options) {
            //自动加载css，目前不支持非本地环境（file:///)使用，还未找到解决方案
            utils.loadCss(function() {
                Layx.create(options);
            });
        },
        // 关闭窗口
        destroy: function(id) {
            Layx.destroy(id);
        },
        // 关闭所有窗口，调用此接口将不能执行 intercept定义的拦截器
        destroyAll: function() {},
        // 最小化窗口
        min: function(id) {
            Layx.min(id);
        },
        // 最大化窗口
        max: function(id) {
            Layx.max(id);
        },
        // 恢复窗口
        restore: function(id) {
            Layx.restore(id);
        },
        // 获取窗口信息
        getWindow: function(id) {
            return Layx.windows[id];
        },
        // 获取所有窗口信息
        getWindows: function() {
            return Layx.windows;
        },
        // 设置窗口标题
        setTitle: function(id, title) {
            Layx.setTitle(id, title);
        },
        // 设置窗口地址，只对iframe有效
        setUrl: function(id, url) {
            Layx.setUrl(id, url);
        },
        // 设置窗口位置
        setPosition: function(id, position) {},
        // 设置窗口内容
        setContent: function(id, content) {},
        // 设置置顶
        setAlwaysOnTop: function(id) {},
        // 取消置顶
        cancelOnTop: function(id) {}
    };
}(top, window);

;
! function(window) {
    "use strict";

    var svgSprite = '<svg><symbol id="layx-icon-restore" viewBox="0 0 1157 1024"><path d="M1016.52185234 724.44050175L833.87364805 724.44050175 833.87364805 898.52098643 833.87364805 960.05279112 833.87364805 961.2211168 772.34184336 961.2211168 772.34184336 960.05279112 124.31068789 960.05279112 124.31068789 961.2211168 62.7788832 961.2211168 62.7788832 960.05279112 62.7788832 898.52098643 62.7788832 360.31241885 62.7788832 298.78061416 124.31068789 298.78061416 298.78061416 298.78061416 298.78061416 62.7788832 303.06447442 62.7788832 360.31241885 62.7788832 1016.52185234 62.7788832 1074.15923838 62.7788832 1078.05365615 62.7788832 1078.05365615 662.90869795 1078.05365615 724.44050175 1016.52185234 724.44050175ZM124.31068789 898.52098643L772.34184336 898.52098643 772.34184336 724.44050175 772.34184336 662.90869795 772.34184336 360.31241885 124.31068789 360.31241885 124.31068789 898.52098643ZM1016.52185234 124.31068789L360.31241885 124.31068789 360.31241885 298.78061416 772.34184336 298.78061416 833.87364805 298.78061416 833.87364805 360.31241885 833.87364805 662.90869795 1016.52185234 662.90869795 1016.52185234 124.31068789Z"  ></path></symbol><symbol id="layx-icon-windows" viewBox="0 0 1024 1024"><path d="M128 512 128 288 384 231.68 384 508.16 128 512M853.333333 128 853.333333 501.333333 426.666667 507.733333 426.666667 222.293333 853.333333 128M128 554.666667 384 558.506667 384 849.066667 128 800 128 554.666667M853.333333 565.333333 853.333333 938.666667 426.666667 857.173333 426.666667 558.933333 853.333333 565.333333Z"  ></path></symbol><symbol id="layx-icon-min" viewBox="0 0 1024 1024"><path d="M65.23884 456.152041 958.760137 456.152041l0 111.695918L65.23884 567.847959 65.23884 456.152041z"  ></path></symbol><symbol id="layx-icon-max" viewBox="0 0 1024 1024"><path d="M75.74912227 948.24738475L75.74912227 75.75145131l872.50059037 0 0 872.49593344L75.74912227 948.24738475zM839.18786674 184.81446115L184.81213326 184.81446115l0 654.37573462 654.37573461 0L839.18786674 184.81446115z"  ></path></symbol><symbol id="layx-icon-destroy" viewBox="0 0 1024 1024"><path d="M933.89254819 139.71606348L884.23129279 90.08990363 511.96490363 462.39138834 140.40044113 90.82692583 90.84447403 140.34779656 462.40893653 511.91225907 90.10745181 884.2137446 139.73361166 933.875 512.03509637 561.53841892 883.59955887 933.10288141 933.15552597 883.58201068 561.59106347 512.01754819Z"  ></path></symbol></svg>';
    var script = function() {
        var scripts = document.getElementsByTagName("script");
        return scripts[scripts.length - 1];
    }();
    var shouldInjectCss = script.getAttribute("data-injectcss");
    var ready = function(fn) {
        if (document.addEventListener) {
            if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
                setTimeout(fn, 0);
            } else {
                var loadFn = function() {
                    document.removeEventListener("DOMContentLoaded", loadFn, false);
                    fn();
                };
                document.addEventListener("DOMContentLoaded", loadFn, false);
            }
        } else if (document.attachEvent) {
            IEContentLoaded(window, fn);
        }

        function IEContentLoaded(w, fn) {
            var d = w.document,
                done = false,
                init = function() {
                    if (!done) {
                        done = true;
                        fn();
                    }
                };
            var polling = function() {
                try {
                    d.documentElement.doScroll("left");
                } catch (e) {
                    setTimeout(polling, 50);
                    return;
                }
                init();
            };
            polling();
            d.onreadystatechange = function() {
                if (d.readyState == "complete") {
                    d.onreadystatechange = null;
                    init();
                }
            };
        }
    };
    var before = function(el, target) {
        target.parentNode.insertBefore(el, target);
    };
    var prepend = function(el, target) {
        if (target.firstChild) {
            before(el, target.firstChild);
        } else {
            target.appendChild(el);
        }
    };

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
            prepend(svg, document.body);
        }
    }
    if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
        window.__iconfont__svg__cssinject__ = true;
        try {
            document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
        } catch (e) {
            console && console.log(e);
        }
    }
    ready(appendSvg);
}(window);