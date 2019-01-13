// Check off specific todos by clicking
// Problem with this code is that click only applies to existing elements, not the ones created dinamically
// $("li").click(function(){
//     $(this).toggleClass("done");
// });

//this one works: apply to parent and then to the children -> li
$("ul").on("click", "li", function(){
    $(this).toggleClass("done");
});


// Click on X to delete todo
$("ul").on("click", "span", function(event){
    // Remove parent element
    $(this).parent().fadeOut(200, function(){
        // Remove parent element (now this)
        $(this).remove();
    });
    //Stop bubble propagation: methods of parent elements (li, ul, body)
    event.stopPropagation();
});

//Create new todos
$("#todoInput").keypress(function(event) {
    console.log($(this).val());
     //if enter is pressed
    if (event.which === 13) {
        $("#todoUl").append("<li><span><i class='fas fa-trash-alt'></i></span> " + $(this).val() + "</li>");
        $(this).val("");
    }
});

$("#plus").click(function(){
    $("#todoInput").fadeToggle();
});