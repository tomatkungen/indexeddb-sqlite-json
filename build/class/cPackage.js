"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cPackage = void 0;
var cDocument_1 = require("./cDocument");
var cPackage = (function () {
    function cPackage(packageName) {
        var documentNames = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            documentNames[_i - 1] = arguments[_i];
        }
        this._documentName = '';
        this._packageName = packageName || '';
    }
    cPackage.prototype.add = function () {
        var documentName = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            documentName[_i] = arguments[_i];
        }
        throw new Error("Method not implemented.");
    };
    cPackage.prototype.toJson = function () {
        throw new Error("Method not implemented.");
    };
    cPackage.prototype.toArray = function () {
        throw new Error("Method not implemented.");
    };
    cPackage.prototype.Document = function (documentName) {
        if (documentName === void 0) { documentName = this._documentName; }
        return new cDocument_1.cDocument(documentName, this._packageName);
    };
    return cPackage;
}());
exports.cPackage = cPackage;
