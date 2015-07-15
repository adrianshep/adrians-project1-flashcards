# adrians-project1-flashcards

Explanations, Approaches, Unsolved Problems:

My first challenge was settling on the best way to organize my data, in this
case, states and their capitals. I did not want to hard code them into the html.
I experimented with turning these binary data points into key value pairs, but
couldn't find a way to access them. I finally found that organizing the
individual elements each as its own array, then combining individual
arrays into state and capital arrays worked. Within each state and capital array  
I was able to access the state with a [0] and the capital with a [1], so that
meant I could use [i] to call up the combined state and capital arrays.

(Until Jesse set me straight, I also spun my wheels a bit in the belief that the
app had to work off of key down or up events, but got a lot practical experience
with them in the process.)

I'd hoped to be able to manipulate the arrays within arrays with logic and only
managed to succeed with two functions (with some timely and skillful guidance from
Adrian M.): the "Start/Next" button click which would call up
the first question (and clear the answer window of any previous answer value still
there) and the "Answer" button which would give the user the answer to the question.

I'd hoped to be able to get the "Incorrect Answer" function working, but was unable
to. I wanted a function that would pluck the current marked array from the larger
array and then place it at the end of the larger array. The solution I was trying
(found on Stack Overflow) was, what seemed to me, an
elegant splice and push but has kept on returning undefineds to the console.
When console logging the "incorrect" variable, I found that it was excising the
state and capital array ahead of the one meant to be marked and not pushing it to
the end of the array. This will take some more experimentation to figure out.

Similarly, I was unable to crack the function for powering the "Previous" button.
I set up what I believed was the reverse code of the "Start/Next" button function,
but when I tested the "Previous" button, I came up with with "cannot read property
0" errors which I didn't have time to figure out.

Other problems: the display message "You've reached the end!" meant to deploy when
the user ran through all the questions only works if the "Incorrect Answer" button
hasn't been used during the runthrough of questions. Also, even when the message
does deploy successfully, it throws the same "cannot read property 0" errors as
"Previous" button does. I feel that the answer is somewhere in that similarity.







User Stories for Flashcards Project:

1) As the parent of a school-aged child, I want online, virtual flashcards which cannot be mangled, destroyed or lost.

2) As the parent of a school-aged child or as a self-directed student myself, I want to control the progression of the flashcards after I've given a correct or incorrect answer so that I can create a customized learning experience for my child or myself.

3) As a user of the flashcards, I want the ability to change out their content so they can display the content I most want or need to learn at the time I use them.

4) As a user of the flashcards, I want to able to create a history of my correct and incorrect answers so I may track my progress in learning the material on the cards.

5) As a user of the flashcards who's on the go, I want a version of the flashcards that easily loads and displays on my mobile device so I can test myself during commutes, lunches and any opportunity where I have a moment or two.
