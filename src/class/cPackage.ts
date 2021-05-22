import { iPackage } from "../interface/iStructure";
import { cDocument } from "./cDocument";

class cPackage implements iPackage {

    private _packageName: string;
    private _documentName: string;

    constructor(packageName: string, ...documentNames: string[]) {
        this._documentName  = '';
        this._packageName   = packageName || '';
    }

    public add(...documentName: string[]): cPackage {
        throw new Error("Method not implemented.");
    }

    public toJson(): { [key: string]: any; } {
        throw new Error("Method not implemented.");
    }

    public toArray(): { [column: string]: any; }[] {
        throw new Error("Method not implemented.");
    }

    public Document(documentName: string = this._documentName): cDocument {
        return new cDocument(documentName, this._packageName);
    }
}

export { cPackage };