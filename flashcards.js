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

  // var e = jQuery.Event("keydown");
  // e.which = 70; // # Some key code value
  // $("input").trigger(e);

  $(".qBox").on("keyup", function(event){
      if (event.keyCode === 70) {
        $(".qBox").val("What is the state capital of " + statesCapitals[0][0] + "?")
      }
    })

  // $(".div").on("keydown", function(evt){
  //   if(evt.keyCode === 70){
  //     console.log("f key firing")
  //     }
      //$(".qBox").html(statesCapitals[0][0])
  //  })

})
