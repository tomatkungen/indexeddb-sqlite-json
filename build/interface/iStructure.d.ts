import { cDocument } from "../class/cDocument";
import { cPackage } from "../class/cPackage";
import { cProperty } from "../class/cProperty";
interface iDocument {
    merge<T extends {}>(json: T): boolean;
    toJson(): object | null;
    append<T extends {
        [property: string]: any;
    }>(json: T): boolean;
    removeProperty(property: string): boolean;
    removePropertys(...propertys: string[]): boolean;
    property(property: string): cProperty;
}
interface iPackage {
    add(...documentName: string[]): cPackage;
    toJson(): {
        [key: string]: any;
    };
    toArray(): {
        [column: string]: any;
    }[];
    Document(documentName: string): cDocument;
}
declare type tValueType = 'object' | 'array' | 'integer' | 'real' | 'true' | 'false' | 'null' | 'text' | 'NULL';
interface iProperty {
    Property(property: string): cProperty;
    value(): {
        [key: string]: any;
    };
    insert<T extends {}>(json: T): boolean;
    replace<T extends {}>(json: T): boolean;
    set<T extends {}>(json: T): boolean;
    removeProperty(property: string): boolean;
    removePropertys(...propertys: string[]): boolean;
    pushEnd<T extends {}>(json: T): boolean;
    removeAtIndex(index: number): boolean;
    removeAtIndexes(...index: number[]): boolean;
    valueType(): tValueType;
}
export { iDocument, iPackage, tValueType, iProperty };
