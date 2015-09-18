
var playBottlesSong = function(numberOfBottles) {
debugger;
  return "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall."
};

$(document).ready(function() {
  $("form#beer-bottles").submit(function(event) {
    var numberOfBottles = parseInt($("input#number").val());

    var result = playBottlesSong(numberOfBottles);

    $(".answer").text(result);


    $("#result").show();
    event.preventDefault();
  });
});
