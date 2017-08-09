Will J. Reid's Learning Journal
...a markdown file
===============================
# WJR Code 201 - Day 3

Today I learned...

About the importance of not modifying the user's inputs before capturing them.

We discussed truth vs truthyness.  You don't need absolutely true or absolutely false values in your if statements, you just need truthy or fasley statements.

Loops:
A function that runs repeatedly as long as the inputs allow.
Use break to break out of a loop that is in danger of running infinitely. Use continue to keep running the loop and not leave to execute a next-loop feature, such as running a command.log.

Boxes:
Every element in your html page is a box. Your list is a box.  Block items have a width of the entire container they live in.  Use CSS rules to determine what you do with overflowing content -- by default yo udon nothing with it.  Try overflow-y: scroll; or overflow: hidden;
Margin is the space between my box and other elements on the page. try Margin-bottom: 80px; to add more space below my box. Padding is the space between my box edge and the content i am displaying in it.
Change absolute size of the box with box-sizing: consider border-box. That way if you use  something like width: 50% to set two columns, the border width you have added will be included when setting the columns side by side.  What about setting borders as a percentage?  Padding shrinks your content, as does setting a border.

Use a clearfix when you have floated some elements and you want some elements to flow in behind them, and a box of 0 height with div class="clearfix" then open your styel sheet and clear: both; for the .clearfix class.

Visibility: try using display: none. This removes the element from the page.  By default, all elements are visible. Display: none removes it from the DOM. Display: hidden keeps the space there but hides the element.
Or you could mess with the background. Changing opacity: by itself changes the opacity of the entire element; changing opacity within rgba only changes it for the background.

Border-radius: from 0% to 50% to round your corners. You don't have to set a radius on all corners at once.

BRANCHING IN GIT

use git branch to review all available branches, similar to ls
us git checkout (branch) to move to a new branch. use git checkout -b newname to create a new branch.
