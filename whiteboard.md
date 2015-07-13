FLASHCARDS PROJECT REQUIREMENTS:
Pre-load your app with some data, and let the user flip through them quickly (back or front), and use the keyboard flip the card, and to mark whether they got it right or not. Track which cards were incorrect, and re-display them until the user gets them right!

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
  flaschards data is entered in key value pairs of a question and its answer
  Miscellaneous:
  - q+a pairs are saved with each value as a string;
  - in order in which they are entered?;


VIEWS =
  viewQuestion = displays question
                - should offer flip key instruction to reveal answer (A)
  viewAnswer = displays answer
                - should display answer below question
                - should offer marking key instruction (Y or N)
                - should offer next direction key instruction (Forwards or Backwards)

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
