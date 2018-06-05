$(document).ready(function(){

$("#sentance-form").submit(function(event) {
  event.preventDefault();

  var sentanceInput = $("#sentance").val();
  var words = sentanceInput.split(" ");
  var newWords = [];

  words.forEach(function(word){
    var wordLength = word.length;
    if (wordLength >= 4) {
      newWords.push(word);
    }
  });

  var reverseWords = newWords.reverse().join(" ");

  $(".simple").text(reverseWords);
  $("#sentance-scramble").show();

});
















});
