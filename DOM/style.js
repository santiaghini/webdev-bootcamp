//Select
var tag = document.getElementById("highlight");

//Manipulate
tag.style.color = "blue";
tag.style.border = "10 px solid red";

//INSTEAD OF DEFINING EACH PROPERTY:
//We can define a CSS class and then toggle it on or off with JS

// 1. Define a class in CSS
//.some-class {
//    color: blue,
//    border: 10px solid read;
//}

var tag = document.getElementById("highlight");
// Add the new class to the selected element
tag.classList.add("some-class");
// Remove class
tag.classList.remove("another-class");
// Toggle class: if on then off, if off then on
tag.classList.toggle("another-class");