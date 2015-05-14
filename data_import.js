// MongoDB's `load` directive allows for an external JavaScript file to be
// loaded, scoped to the same level as this file (global). In this case
// the variable `productData` is introduced, which is an Array of
// JavaScript objects
load("data_set.js");

// connect to the local mongoDB, `exploring_mongodb` database
var db = connect("localhost:27017/exploring_mongodb");

// create a new collection named "products"
db.createCollection("products");

// get a handle on the products collection
var interestingDocuments = db.getCollection("products");

// print is mongo's version of `console.log` and prints to the standard
// output stream
print();

print("Clearing existing documents");
// providing no search criteria (an empty object) removes all
// documents in the collection
interestingDocuments.remove({});
print("Number of documents in collection: " + interestingDocuments.count());

print();

print("Creating new documents");
// MongoDB's collection object's `insert` method accepts an array or a single JS object
// to insert into the collection that is the receiver of the call to `insert`.
// This variable, productData is defined in the `data_set.js` file. Rather than trying
// to open this (rather large) file up in a graphical text editor, at the command line
// use something like `head` or `tail` to look at the beginning or end of the file,
// respectively. Or any other unix tool of your choice for examining files (`vim`, etc)
interestingDocuments.insert(productData);
print("Number of documents in collection: " + interestingDocuments.count());

print();

print("Import complete!");