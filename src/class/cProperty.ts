import { iProperty, tValueType } from "../interface/iStructure";

class cProperty implements iProperty {
    Property(property: string): cProperty {
        throw new Error("Method not implemented.");
    }
    value(): { [key: string]: any; } {
        throw new Error("Method not implemented.");
    }
    insert<T extends {}>(json: T): boolean {
        throw new Error("Method not implemented.");
    }
    replace<T extends {}>(json: T): boolean {
        throw new Error("Method not implemented.");
    }
    set<T extends {}>(json: T): boolean {
        throw new Error("Method not implemented.");
    }
    removeProperty(property: string): boolean {
        throw new Error("Method not implemented.");
    }
    removePropertys(...propertys: string[]): boolean {
        throw new Error("Method not implemented.");
    }
    pushEnd<T extends {}>(json: T): boolean {
        throw new Error("Method not implemented.");
    }
    removeAtIndex(index: number): boolean {
        throw new Error("Method not implemented.");
    }
    removeAtIndexes(...index: number[]): boolean {
        throw new Error("Method not implemented.");
    }
    valueType(): tValueType {
        throw new Error("Method not implemented.");
    }
}

export { cProperty };