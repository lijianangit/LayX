/*
 * file : layx.js
 * gitee : https://gitee.com/monksoul/LayX
 * author : 百小僧/MonkSoul
 * version : v2.0.0
 * create time : 2018.05.09
 * update time : 2018.05.09
 */

;
!(function(_top_, _window_, _self_) {

})(top, window, self);

;
!
(function(window) {
    var svgSprite = '<svg><symbol id="layx-icon-restore" viewBox="0 0 1157 1024"><path d="M1016.52185234 724.44050175L833.87364805 724.44050175 833.87364805 898.52098643 833.87364805 960.05279112 833.87364805 961.2211168 772.34184336 961.2211168 772.34184336 960.05279112 124.31068789 960.05279112 124.31068789 961.2211168 62.7788832 961.2211168 62.7788832 960.05279112 62.7788832 898.52098643 62.7788832 360.31241885 62.7788832 298.78061416 124.31068789 298.78061416 298.78061416 298.78061416 298.78061416 62.7788832 303.06447442 62.7788832 360.31241885 62.7788832 1016.52185234 62.7788832 1074.15923838 62.7788832 1078.05365615 62.7788832 1078.05365615 662.90869795 1078.05365615 724.44050175 1016.52185234 724.44050175ZM124.31068789 898.52098643L772.34184336 898.52098643 772.34184336 724.44050175 772.34184336 662.90869795 772.34184336 360.31241885 124.31068789 360.31241885 124.31068789 898.52098643ZM1016.52185234 124.31068789L360.31241885 124.31068789 360.31241885 298.78061416 772.34184336 298.78061416 833.87364805 298.78061416 833.87364805 360.31241885 833.87364805 662.90869795 1016.52185234 662.90869795 1016.52185234 124.31068789Z"  ></path></symbol><symbol id="layx-icon-default-icon" viewBox="0 0 1024 1024"><path d="M891.88743395 61.93952995L132.11256605 61.93952995c-38.92547129 0-70.60411733 31.65534435-70.60411734 70.5924665L61.50844871 891.46800355c0 38.91382045 31.67864605 70.59246649 70.60411734 70.5924665l759.7748679 0c38.92547129 0 70.60411733-31.67864605 70.60411734-70.5924665L962.49155129 132.53199645C962.49155129 93.59487431 930.81290525 61.93952995 891.88743395 61.93952995zM844.02576498 142.29540409c16.71896178 0 30.25724302 13.54993209 30.25724302 30.26889386 0 16.70731093-13.53828125 30.25724302-30.25724302 30.25724303s-30.25724302-13.54993209-30.25724303-30.25724303C813.76852195 155.84533618 827.3068032 142.29540409 844.02576498 142.29540409zM735.60300658 142.29540409c16.71896178 0 30.25724302 13.54993209 30.25724302 30.26889386 0 16.70731093-13.53828125 30.25724302-30.25724302 30.25724303s-30.25724302-13.54993209-30.25724303-30.25724303C705.34576355 155.84533618 718.8840448 142.29540409 735.60300658 142.29540409zM881.80945351 881.37837227L142.19054649 881.37837227 142.19054649 277.92288427l739.60725618 0L881.79780267 881.37837227zM758.85809209 638.26020125l-0.01165084-180.19196018 90.09598008 90.09598008L758.85809209 638.26020125zM265.15355875 638.26020125l-90.09598008-90.0959801 90.08432924-90.08432924L265.15355875 638.26020125z"  ></path></symbol><symbol id="layx-icon-min" viewBox="0 0 1024 1024"><path d="M65.23884 456.152041 958.760137 456.152041l0 111.695918L65.23884 567.847959 65.23884 456.152041z"  ></path></symbol><symbol id="layx-icon-max" viewBox="0 0 1024 1024"><path d="M75.74912227 948.24738475L75.74912227 75.75145131l872.50059037 0 0 872.49593344L75.74912227 948.24738475zM839.18786674 184.81446115L184.81213326 184.81446115l0 654.37573462 654.37573461 0L839.18786674 184.81446115z"  ></path></symbol><symbol id="layx-icon-destroy" viewBox="0 0 1024 1024"><path d="M933.89254819 139.71606348L884.23129279 90.08990363 511.96490363 462.39138834 140.40044113 90.82692583 90.84447403 140.34779656 462.40893653 511.91225907 90.10745181 884.2137446 139.73361166 933.875 512.03509637 561.53841892 883.59955887 933.10288141 933.15552597 883.58201068 561.59106347 512.01754819Z"  ></path></symbol><symbol id="layx-icon-stick" viewBox="0 0 1024 1024"><path d="M863.92416068 184.3484319H160.07583932a50.27488011 50.27488011 0 0 1 0-100.5497602h703.84832136a50.27488011 50.27488011 0 0 1 0 100.5497602z m-50.27488007 804.39808157a50.22460522 50.22460522 0 0 1-35.69516489-14.57971521L512 708.21268254l-265.95411572 265.95411572A50.27488011 50.27488011 0 0 1 160.07583932 938.47163339V335.1730722a50.27488011 50.27488011 0 0 1 50.27488007-50.27488013h603.29856122a50.27488011 50.27488011 0 0 1 50.27488007 50.27488013v603.29856119a50.27488011 50.27488011 0 0 1-50.27488007 50.27488008z m-301.64928061-402.19904078a50.22460522 50.22460522 0 0 1 35.69516487 14.57971522L763.37440051 816.80642355V385.44795228H260.62559949v431.86122007l215.67923564-215.67923564A50.27488011 50.27488011 0 0 1 512 586.54747269z"  ></path></symbol></svg>';
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