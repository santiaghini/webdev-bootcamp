var tag = document.getDocumentByID("title");

//Only text
tag.textContent = "Hello my friend!";

//innerHTML
//returns a string of all the HTML contained in a given element

tag.innerHTML
//Hello my <strong>friend</strong>

//Renders as HTML
document.body.textContent = "<h1>Goodbye</h1>"

//Doesn't render as HTML, but text
document.body.innerHTML = "<h1>Goodbye</h1>"