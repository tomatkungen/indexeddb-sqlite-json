# indexeddb-sqlite-json

### sqlite3 Json1 Extension Wrapper for Indexeddb

Install minor

* IE 10, Edge 79, Firefox 10, Chrome 23, Safari 10

### Create Package

```Javascript
/*
    Package

    Class.Package

    Return Class.Package
 */

// Create { <p1>: null } 
// No override Class.Package if exist, Create Class.Package if not exist
nDocument.Package('<PackageName>');
// or with documents
nDocument.Package('<PackageName>', '<DocumentName1>', '<DocumentName2>', ...);

// Add Class.Documents to Class.Package { <p1>: { <d1>: .., <d2>: .., ...} }
// No override document if exist, Create document if not exist
nDocument.Package('<PackageName>')
        .add('<DocumentName1>')
        .add('<DocumentName2>', '<DocumentName3>')

// Return value as Json { <d1>:..., <d2>:.. }
nDocument.Package('<PackageName>').toJson();

// Return value as Array [{d1}, {d2}...]
nDocument.Package('<PackageName>').toArray();

// Return Class.Document
nDocument.Package('<PackageName>').Document('<DocumentName>');
```

### Create Document


```Javascript
/*
    Document

    Class.Document

    Return Class.Document
*/
nDocument.Document('<documentName>');
// or 
nDocument.Document('<documentName>', '<PackageName>');

// Append Json on document, No override if exist, append if not exist
nDocument.Document('<documentName>').append('<Json>');

// Return json from Class.Document
nDocument.Document('<documentName>').toJson();

// Return Class.Document.Property
nDocument.Document('<documentName>').property('<property>');
nDocument.Document('<documentName>').Property('<propery>').property('<property>');

// Return Value from Class.Document.Property
nDocument.Document('<documentName>').Property('<property>').value();

// Insert Json  to Class.Document.Property No override if exist, Create if not exist
nDocument.Document('<documentName>').Property('<property>').insert('<Json>');

// Replace Json to Class.Document.Property Override if exist, No create if not exist
nDocument.Document('<documentName>').Property('<property>').replace('<Json>');

// Set Json to Class.Document.property Override if exist, Create if not exist
nDocument.Document('<documentName>').Property('<property>').set('<Json>');

// Merge Json into Document
nDocument.Document('<documentName>').merge('<Json>');

// Remove Property in Json Class.Document
nDocument.Document('<documentName>').removeProperty('<property>');
nDocument.Document('<documentName>').removePropertys('<property>', '<property>');

// Insert Json at Beginning of Array by Class.Document.Property (Not implemented)
nDocument.Document('<documentName>').Property('<property>').pushFront('<Json>');

// Insert Json at Ent of Array by Class.Document.Property
nDocument.Document('<documentName>').Property('<property>').pushEnd('<Json>');

// Remove Item at Index in Array Class.Document.Property
nDocument.Document('<documentName>').Property('<property>').removeAtIndex('<number>');
nDocument.Document('<documentName>').Property('<property>').removeAtIndexes('<number>', '<number>');

// Remove Property in Json Class.Document.property
nDocument.Document('<documentName>').Property('<property>').removeProperty('<property>');
nDocument.Document('<documentName>').Property('<property>').removePropertys('<property>', '<property>');

// Return value type  <Object | Array | Integer | real | true | false | null | text | NULL>
nDocument.Document('<documentName>').Property('<property>').valueType();

```
