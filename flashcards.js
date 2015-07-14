$(document).ready(function() {
//  console.log ("jq working")
//this one returns the values by index:
  var statesCapitals = [
    [["Connecticut"], ["Hartford"]],
    [["New Jersey"], ["Trenton"]],
    [["New York"], ["Albany"]],
    [["Ohio"], ["Columbus"]],
    [["Pennsylvania"], ["Harrisburg"]],
  ];
  i = 0;

  $("#next").on("click", function(){
    if (i != statesCapitals.length) {
      $(".qBox").html("What is the state capital of " + statesCapitals[i][0] + "?");
      $(".aBox").html(" ");
      }
    else {
      $(".qBox").html("You've reached the end!");
      $(".aBox").html(" ");
        }
    })

  $("#answer").on("click", function(){
      $(".aBox").html(statesCapitals[i][1]);
   i++;
   })
})
  // $("#previous").on("click", function(){
    // if (i = -1) {
      // $(".qBox").html("What is the state capital of " + statesCapitals[i][0] + "?");
       //$(".aBox").html(" ");
      // }
     //else {
    //   $(".qBox").html("You've reached the beginning!");
      // $(".aBox").html(" ");
        // }
    // })

  // $("#answer").on("click", function(){
    //   $(".aBox").html(statesCapitals[i][1]);
  //  i--;
  //  })

//})

//var array = [8, 1, 2, 3, 4, 5, 6, 7];
//array.push(array.shift());
//maybe instead of .shift use .indexOf and .splice

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


    //when I tested i = i -1; here, I lower console.log([i]) no longer showed
    //[3] ("Pennsylvania" index less one), but ["4"] instead.

    //console.log("next is firing")
    //for (var i = 0; i < statesCapitals.length; i++) not working - only produces last
    //element in array, Pennsylvania.
    //PROBLEM TO SOLVE:
    //when user starts flashcards, index of first card should be 0; every subsequent
    //click of "next" button should add 1 to the index of the current card
    //returning the next flashcard.
    //need to findIndex of current element, add 1 to it as the instruction to pull next
    //element
    //var i = i-1;
    //if statesCapitals.indexOf{
    //for (var i = statesCapitals.length - 1; i >= 0; i--) {
      //for (statesCapitals[i]) {
        //var i = 0;
      //for (i in statesCapitals) {

      //console.log("answer is firing")
      //var i = 0;

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

   //tried and abandoned key event after clarification from Jesse about project req's
   // var e = jQuery.Event("keydown");
   // e.which = 70; // # Some key code value
   // $("input").trigger(e);
