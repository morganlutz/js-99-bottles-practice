
//this became quite large because I wasn't sure how to deal with the "bottle" vs. "bottles" problem
//that you get to when bottle reaches 1.

var playBottlesSong = function(numberOfBottles) {
  //debugger;
  if(numberOfBottles > 2) {
    return ("\n" + numberOfBottles + " bottles of beer on the wall, "
    + numberOfBottles + " bottles of beer. Take one down and pass it around, "
    + (numberOfBottles -1) + " bottles of beer on the wall.")
    + playBottlesSong(numberOfBottles - 1);
    } if(numberOfBottles === 2) {
      return ("\n2 bottles of beer on the wall, 2 bottles of beer."
      + " Take one down and pass it around, 1 bottle of beer on the wall.")
      + playBottlesSong(numberOfBottles - 1);
    } if(numberOfBottles === 1) {
      return ("\n1 bottle of beer on the wall, 1 bottle of beer."
      + " Take one down and pass it around, 0 bottles of beer on the wall.")
      + playBottlesSong(numberOfBottles - 1);
    } else {
      return ("\nNo more bottles of beer on the wall, no more bottles of beer."
      + " Go to the store and buy some more, 99 bottles of beer on the wall.");
    }
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
