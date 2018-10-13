/*!
 * file : layx.js
 * gitee : https://gitee.com/monksoul/LayX
 * github : https://github.com/MonkSoul/Layx/
 * author : 百小僧/MonkSoul
 * version : v3.0.0
 * create time : 2018.10.14
 * update time : 2018.10.14
 */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.layx = factory();
    }
}(this, function () {
    return {};
}));