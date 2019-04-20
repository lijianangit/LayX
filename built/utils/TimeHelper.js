"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringHelper = require("./StringHelper");
function getDatetime() {
    var date = new Date();
    var year = date.getFullYear();
    var month = StringHelper.mendZero("" + (date.getMonth() + 1), 2);
    var day = StringHelper.mendZero("" + date.getDate(), 2);
    var hour = StringHelper.mendZero("" + date.getHours(), 2);
    var minutes = StringHelper.mendZero("" + date.getMinutes(), 2);
    var seconds = StringHelper.mendZero("" + date.getSeconds(), 2);
    return year + "-" + month + "-" + day + " " + hour + ":" + minutes + ":" + seconds;
}
exports.getDatetime = getDatetime;
