declare class aIndexedDB {
    constructor();
    static databaseName(): string;
    static packageName(): string;
    static documentName(): string;
    static idColumn(): string;
    static columns(): string[];
    Version(): string;
    Execute(database: string, rawQuery: string): any;
    Select(database: string, rawQuery: string): any[];
}
export { aIndexedDB };
