$(document).ready(function() {
//  console.log ("jq working")
//
// var statesCapitals = [
//   {"Connecticut": "Hartford"},
//   {"New Jersey": "Trenton"},
//   {"New York": "Albany"},
//   {"Ohio": "Columbus"},
//   {"Pennsylvania": "Harrisburg"}]

  // var statesCapitals =
    // [["Connecticut", "Hartford"],
    // ["New Jersey", "Trenton"],
    // ["New York", "Albany"],
    // ["Ohio", "Columbus"],
    // ["Pennsylvania", "Harrisburg"]];

//this one returns the values by index:
  var statesCapitals = [
    [["Connecticut"], ["Hartford"]],
    [["New Jersey"], ["Trenton"]],
    [["New York"], ["Albany"]],
    [["Ohio"], ["Columbus"]],
    [["Pennsylvania"], ["Harrisburg"]],
  ];
  //var i = i - 1; when I tested this here, I lower console.log([i]) no longer showed
  //[3] ("Pennsylvania" index less one), but ["4"] instead.

  //tried and abandoned key event after clarification from Jesse about project req's
  // var e = jQuery.Event("keydown");
  // e.which = 70; // # Some key code value
  // $("input").trigger(e);

  $("#next").on("click", function(){
      //console.log("next is firing")
      //for (var i = 0; i < statesCapitals.length; i++) not working - only produces last
      //element in array, Pennsylvania.
      //PROBLEM TO SOLVE:
      //when user starts flashcards, index of first card should be 0; every subsequent
      //click of "next" button should add 1 to the index of the current card
      //returning the next flashcard.
      //need to findIndex of current element, add 1 to it as the instruction to pull next
      //element
      //var i = [i-1]
      //if statesCapitals.indexOf{
      //for (var i = statesCapitals.length - 1; i >= 0; i--) {
        //for (statesCapitals[i]) {
          //var i = 0;
          for (i in statesCapitals) {
          $(".qBox").html("What is the state capital of " + statesCapitals[i][0] + "?")
          }
          //var i = i - 1;
          console.log([i]);
      })
    //var array = [8, 1, 2, 3, 4, 5, 6, 7];
    //array.push(array.shift());
    //maybe instead of .shift use .indexOf and .splice


  $("#answer").on("click", function(){
        //console.log("forwards is firing")
        //var i = 0;
        for (i in statesCapitals)
        $(".qBox").html("What is the state capital of " + statesCapitals[i][0] + "?  " + statesCapitals[i][1])
   })

   var
   
   //abandoned key event experiments:
    //     if (event.keyCode === 65) {
    //       $(".qBox").val("What is the state capital of " + statesCapitals[0][0] + "?  " + statesCapitals[0][1])
    //   }
    // })

  // $(".div").on("keydown", function(evt){
  //   if(evt.keyCode === 70){
  //     console.log("f key firing")
  //     }
      //$(".qBox").html(statesCapitals[0][0])
  //  })

})
