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

})

$("#letter").on("keydown", function(evt){
    if(evt.keyCode === 13){

$(".qBox").html(statesCapitals[0][0])
