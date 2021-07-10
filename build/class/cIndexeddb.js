"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.cIndexedDB = void 0;
var aIndexeddb_1 = require("../abstract/aIndexeddb");
var cIndexedDB = (function (_super) {
    __extends(cIndexedDB, _super);
    function cIndexedDB() {
        return _super.call(this) || this;
    }
    return cIndexedDB;
}(aIndexeddb_1.aIndexedDB));
exports.cIndexedDB = cIndexedDB;
