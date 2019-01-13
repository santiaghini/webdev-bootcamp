//.click() method

//prints when item id 'submit' is clicked
$("#submit").click(function() {
    console.log("Another click");
});

//alerts when any button is clicked
$("button").click(function() {
    console.log("Someone clicked a button");
    $(this).css("background", "pink");
});

//.keypress() method
//check javascript char codes
$("input[type='text']").keypress(function(event) {
    console.log(event);
    //if enter is pressed
    if (event.which === 13) {
        alert("you hit enter");
    }
});