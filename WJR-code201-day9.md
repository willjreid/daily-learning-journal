Will J. Reid's Learning Journal
...a markdown file
===============================
# WJR Code 201 - Day 9

Today I learned...

About building and destroying elements.  It turns out that the key to handling the addition of a new row into the table and recalculation of totals is to blow away the footer row by setting the footer to a variable like oldRow, then setting a variable like container equal to oldRow.parentNode, then running container.removeChild(oldRow).  It should interesting to implement.  
Jake and I worked extensively with Brian to refactor our code and get it performing properly.  I spent quite a bit of time refactoring Tuesday's nested For loops to build the body of the table, only to learn that we needed to refactor yet again to build each row one at a time rather than building the whole row, so that new rows could be added one at a time.
In constructing my form, I had omitted a pretty crucial aspect which was to tag the area where I wanted my form as a form rather than a section.  Suddenly that allowed my inputs and button to function a lot more like inputs and a button.

At least I have been dominating my git work this week.
