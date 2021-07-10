import { iDocument } from "../interface/iStructure";
import { cProperty } from "./cProperty";
declare class cDocument implements iDocument {
    private _packageName;
    private _documentName;
    private _cIndexedDB;
    constructor(documentName: string, packageName?: string);
    merge<T extends {}>(json: T): boolean;
    toJson(): object | null;
    append<T extends {
        [property: string]: any;
    }>(json: T): boolean;
    removeProperty(property: string): boolean;
    removePropertys(...propertys: string[]): boolean;
    property(property: string): cProperty;
}
export { cDocument };
