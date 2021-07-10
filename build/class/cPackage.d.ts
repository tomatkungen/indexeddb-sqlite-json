import { iPackage } from "../interface/iStructure";
import { cDocument } from "./cDocument";
declare class cPackage implements iPackage {
    private _packageName;
    private _documentName;
    constructor(packageName: string, ...documentNames: string[]);
    add(...documentName: string[]): cPackage;
    toJson(): {
        [key: string]: any;
    };
    toArray(): {
        [column: string]: any;
    }[];
    Document(documentName?: string): cDocument;
}
export { cPackage };
