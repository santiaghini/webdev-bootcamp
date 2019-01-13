var person = {
    name: "Michael",
    lastname: "Jordan",
    age: 34,
    city: "LA",
}

// RETRIEVING DATA
// Bracket notation
console.log(person["name"]);
// Dot notation
console.log(person.name);

// You cannot use dot notation if the property starts wuth a number
someObject.1blah; // INVALID
someObject["1blah"]; // VALID

// You can lookup using a variable using bracket notation
var str = "name";
someObject.str // looks for "str"
someObjetct[str]  // looks for name

// UPDATING DATA
person.name = "Miguel";
person.age += 1;

// Create object

// All at once
var person = {
    name: "Michael",
    lastname: "Jordan",
    age: 34,
    city: "LA",
}

// One by one
var person = {}
person.name = "Michael";
person.lastname = "Jordan";
person.age = 34;
person.city = "LA";