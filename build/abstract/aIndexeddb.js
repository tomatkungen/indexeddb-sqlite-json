"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aIndexedDB = void 0;
var aIndexedDB = (function () {
    function aIndexedDB() {
    }
    aIndexedDB.databaseName = function () {
        return 'sandra.db';
    };
    aIndexedDB.packageName = function () {
        return 'package';
    };
    aIndexedDB.documentName = function () {
        return 'document';
    };
    aIndexedDB.idColumn = function () {
        return 'id';
    };
    aIndexedDB.columns = function () {
        return [];
    };
    aIndexedDB.prototype.Version = function () {
        return '';
    };
    aIndexedDB.prototype.Execute = function (database, rawQuery) {
        return 'sqliteBridge.Execute(database, rawQuery)';
    };
    ;
    aIndexedDB.prototype.Select = function (database, rawQuery) {
        return ['sqliteBridge.Select(database, rawQuery)'];
    };
    ;
    return aIndexedDB;
}());
exports.aIndexedDB = aIndexedDB;
