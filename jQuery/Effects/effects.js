// Fade out
$("#out").on("click", function(){
    //default
    //$("div").fadeOut();
    //one sec with callback
    $("div").fadeOut(1000, function() {
        console.log("FadeOut Completed");
        //delete html
        //$(this).remove();
    });
});

// Fade in
$("#in").on("click", function(){
    //default
    //$("div").fadeIn();
    //one sec with callback
    $("div").fadeIn(1000, function() {
        console.log("FadeIn Completed");
        //delete html
        //$(this).remove();
    });
});

// Fade toggle
$("#toggle").on("click", function(){
    $("div").fadeToggle(500);
});

// Slide Up / Slide Down / Slide Toggle
$("#slide").on("click", function(){
    $("div").slideToggle();
});