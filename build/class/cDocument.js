"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cDocument = void 0;
var cIndexeddb_1 = require("./cIndexeddb");
var cDocument = (function () {
    function cDocument(documentName, packageName) {
        this._cIndexedDB = new cIndexeddb_1.cIndexedDB();
        this._packageName = packageName || cIndexeddb_1.cIndexedDB.documentName();
        this._documentName = documentName || cIndexeddb_1.cIndexedDB.packageName();
        ;
    }
    cDocument.prototype.merge = function (json) {
        throw new Error("Method not implemented.");
    };
    cDocument.prototype.toJson = function () {
        throw new Error("Method not implemented.");
    };
    cDocument.prototype.append = function (json) {
        throw new Error("Method not implemented.");
    };
    cDocument.prototype.removeProperty = function (property) {
        throw new Error("Method not implemented.");
    };
    cDocument.prototype.removePropertys = function () {
        var propertys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            propertys[_i] = arguments[_i];
        }
        throw new Error("Method not implemented.");
    };
    cDocument.prototype.property = function (property) {
        throw new Error("Method not implemented.");
    };
    return cDocument;
}());
exports.cDocument = cDocument;
