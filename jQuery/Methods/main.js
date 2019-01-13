$("h1").text("jQuery Methods Demo Page");
console.log($("ul").html());


//IMGs
$("img").css("width", "200px");

//get
$("img").attr("src");
//set
$("img").attr("src", "http://www.temaiken.org.ar/files/items/imagenes/Suricatas_03.jpg");

$("input").attr("type", "color");

//change first img
$("img:first-of-type").attr("src", "https://s3.pixers.pics/pixers/700/FO/61/81/35/00/700_FO61813500_54a8df6200f6cb9eaf20646ff787bce8.jpg");
//change last
$("img").last().attr("src", "https://s3.pixers.pics/pixers/700/FO/61/81/35/00/700_FO61813500_54a8df6200f6cb9eaf20646ff787bce8.jpg");

//Value from input
$("input").val();

//add class
$("h1").addClass("correct big");

//remove class
$("h1").removeClass("correct");
$("li").addClass("done");

//toggle classes
$("h1").toggleClass("wrong");