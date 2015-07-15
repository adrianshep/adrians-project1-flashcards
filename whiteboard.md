FLASHCARDS PROJECT REQUIREMENTS:
Pre-load your app with some data, and let the user flip through them quickly (back or front), and use the keyboard (to) flip the card, and to mark whether they got it right or not. Track which cards were incorrect, and re-display them until the user gets them right!

BONUS:
+ Track scores over time (even if the page is reloaded)
+ Include images on one or both sides of the flash card
+ Let the user add flash cards (don't need to be saved across refreshes)

REQUIREMENTS BROKEN OUT:
- question and answer data can be entered by app creator; bonus if enterable by user
- user can determine direction in which to travel over cards, front to back or back to front (assume they need to be able to use keyboard for this, too)
- user can use keyboard to flip the cards for the answer
- user can use keyboard to mark whether or not they were correct on answer
- program keeps track of incorrect cards and re-displays them (at back or front depending on direction user is heading in) until user marks each as correct


DATA =
  flashcards data is entered in key value pairs of a question and its answer
  Miscellaneous:
  - q+a pairs are saved with each value as a string;
  - in order in which they are entered?;
  var statesCapitals = {
  "Connecticut": "Hartford",
  "New Jersey": "Trenton",
  "New York": "Albany",
  "Ohio": "Columbus",
  "Pennsylvania": "Harrisburg",
}


VIEWS =
  viewQuestion = displays question
                - should offer flip key instruction to reveal answer (A)(65)
  viewAnswer = displays answer
                - should display answer below question
                - should offer marking key instruction (Y(89) or N(78))
                - should offer next direction key instruction (Forwards(70) or Backwards(66))

  Bonus VIEWS:
  viewStandings = display number of correct answers on 1st, 2nd, nth circuits tied to user name and date and time
  viewDataLoader = accepts question value and answer value from app operator or user

views def.:
any output representation of information,
such as a chart or a diagram; multiple views of
the same information are possible, such as a bar
chart for management and a tabular view for accountants.


BEHAVIORS =
  - flashcards are removed from the user's flow when user marks them correct?


PRESENTATION = presentation of content to users;
size, color, margins, borders, layout, location,
etc.; to change the view's presentation of
the model (e.g., by scrolling through a document)

STYLE =

DOM manipulation

var statesCapitals = [
  ["Alabama", "Montgomery"],
  ["Alaska", "Juneau"],
  ["Arizona", "Phoenix"],
  ["Arkansas", "Little Rock"],
  ["California", "Sacramento"],
  ["Colorado"], "Denver"],
  ["Connecticut", "Hartford"],
  ["Delaware", "Dover"],
  ["Florida", "Tallahassee"],
  ["Georgia", "Atlanta"],
  ["Hawaii", "Honolulu"],
  ["Idaho", "Boise"],
  ["Illinois", "Springfield"],
  ["Indiana", "Indianapolis"],
  ["Iowa", "Des Moines"],
  ["Kansas", "Topeka"],
  ["Kentucky", "Frankfort"],
  ["Louisiana", "Baton Rouge"],
  ["Maine", "Augusta"],
  ["Maryland", "Annapolis"],
  ["Massachusetts", "Boston"],
  ["Michigan", "Lansing"],
  ["Minnesota", "Saint Paul"],
  ["Mississippi", "Jackson"],
  ["Missouri", "Jefferson City"],
  ["Montana", "Helena"],
  ["Nebraska", "Lincoln"],
  ["Nevada", "Carson City"],
  ["New Hampshire", "Concord"],
  ["New Jersey", "Trenton"],
  ["New Mexico", "Santa Fe"],
  ["New York", "Albany"],
  ["North Carolina", "Raleigh"],
  ["North Dakota", "Bismarck"],
  ["Ohio", "Columbus"],
  ["Oklahoma", "Oklahoma City"],
  ["Oregon", "Salem"],
  ["Pennsylvania", "Harrisburg"],
  ["Rhode Island", "Providence"],
  ["South Carolina", "Columbia"],
  ["South Dakota", "Pierre"],
  ["Tennessee", "Nashville"],
  ["Texas", "Austin"],
  ["Utah", "Salt Lake City"],
  ["Vermont", "Montpelier"],
  ["Virginia", "Richmond"],
  ["Washington", "Olympia"],
  ["West Virginia", "Charleston"],
  ["Wisconsin", "Madison"],
  ["Wyoming", "Cheyenne"]
];

var statesCapitals = [
  [["Alabama"], ["Montgomery"]],
  [["Alaska"], ["Juneau"]],
  [["Arizona"], ["Phoenix"]],
  [["Arkansas"], ["Little Rock"]],
  [["California"], ["Sacramento"]],
  [["Colorado"], ["Denver"]],
  [["Connecticut"], ["Hartford"]],
  [["Delaware"], ["Dover"]],
  [["Florida"], ["Tallahassee"]],
  [["Georgia"], ["Atlanta"]],
  [["Hawaii"], ["Honolulu"]],
  [["Idaho"], ["Boise"]],
  [["Illinois"], ["Springfield"]],
  [["Indiana"], ["Indianapolis"]],
  [["Iowa"], ["Des Moines"]],
  [["Kansas"], ["Topeka"]],
  [["Kentucky"], ["Frankfort"]],
  [["Louisiana"], ["Baton Rouge"]],
  [["Maine"], ["Augusta"]],
  [["Maryland"], ["Annapolis"]],
  [["Massachusetts"], ["Boston"]],
  [["Michigan"], ["Lansing"]],
  [["Minnesota"], ["Saint Paul"]],
  [["Mississippi"], ["Jackson"]],
  [["Missouri"], ["Jefferson City"]],
  [["Montana"], ["Helena"]],
  [["Nebraska"], ["Lincoln"]],
  [["Nevada"], ["Carson City"]],
  [["New Hampshire"], ["Concord"]],
  [["New Jersey"], ["Trenton"]],
  [["New Mexico"], ["Santa Fe"]],
  [["New York"], ["Albany"]],
  [["North Carolina"], ["Raleigh"]],
  [["North Dakota"], ["Bismarck"]],
  [["Ohio"], ["Columbus"]],
  [["Oklahoma"], ["Oklahoma City"]],
  [["Oregon"], ["Salem"]],
  [["Pennsylvania"], ["Harrisburg"]],
  [["Rhode Island"], ["Providence"]],
  [["South Carolina"], ["Columbia"]],
  [["South Dakota"], ["Pierre"]],
  [["Tennessee"], ["Nashville"]],
  [["Texas"], ["Austin"]],
  [["Utah"],["Salt Lake City"]],
  [["Vermont"], ["Montpelier"]],
  [["Virginia"], ["Richmond"]],
  [["Washington"], ["Olympia"]],
  [["West Virginia"], ["Charleston"]],
  [["Wisconsin"], ["Madison"]],
  [["Wyoming"], ["Cheyenne"]]
];

[["Hawaii"], ["Honolulu"]],
[["Idaho"], ["Boise"]],
[["Illinois"], ["Springfield"]],
[["Indiana"], ["Indianapolis"]],
[["Iowa"], ["Des Moines"]],
[["Kansas"], ["Topeka"]],
[["Kentucky"], ["Frankfort"]],
[["Louisiana"], ["Baton Rouge"]],
[["Maine"], ["Augusta"]],
[["Maryland"], ["Annapolis"]],
[["Massachusetts"], ["Boston"]],
[["Michigan"], ["Lansing"]],
[["Minnesota"], ["Saint Paul"]],
[["Mississippi"], ["Jackson"]],
[["Missouri"], ["Jefferson City"]],
[["Montana"], ["Helena"]],
[["Nebraska"], ["Lincoln"]],
[["Nevada"], ["Carson City"]],
[["New Hampshire"], ["Concord"]],

[["New Mexico"], ["Santa Fe"]],
[["North Carolina"], ["Raleigh"]],
[["North Dakota"], ["Bismarck"]],

[["Oklahoma"], ["Oklahoma City"]],
[["Oregon"], ["Salem"]],
[["Rhode Island"], ["Providence"]],
[["South Carolina"], ["Columbia"]],
[["South Dakota"], ["Pierre"]],
[["Tennessee"], ["Nashville"]],
[["Texas"], ["Austin"]],

[["Utah"],["Salt Lake City"]],
[["Vermont"], ["Montpelier"]],
[["Virginia"], ["Richmond"]],
[["Washington"], ["Olympia"]],
[["West Virginia"], ["Charleston"]],
[["Wisconsin"], ["Madison"]],
[["Wyoming"], ["Cheyenne"]]
