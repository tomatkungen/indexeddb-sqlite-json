import { iDocument } from "../interface/iStructure";
import { cIndexedDB } from "./cIndexeddb";
import { cProperty } from "./cProperty";

class cDocument implements iDocument {

    private _packageName: string;
    private _documentName: string;
    private _cIndexedDB: cIndexedDB;

    constructor(documentName: string, packageName?: string) {
        this._cIndexedDB = new cIndexedDB();
        
        this._packageName = packageName || cIndexedDB.documentName();
        this._documentName = documentName || cIndexedDB.packageName();;
    }

    merge<T extends {}>(json: T): boolean {
        throw new Error("Method not implemented.");
    }

    toJson(): object | null {
        throw new Error("Method not implemented.");
    }

    append<T extends { [property: string]: any; }>(json: T): boolean {
        throw new Error("Method not implemented.");
    }

    removeProperty(property: string): boolean {
        throw new Error("Method not implemented.");
    }

    removePropertys(...propertys: string[]): boolean {
        throw new Error("Method not implemented.");
    }

    property(property: string): cProperty {
        throw new Error("Method not implemented.");
    }
}

export { cDocument };