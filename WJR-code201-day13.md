Will J. Reid's Learning Journal
...a markdown file
===============================
# WJR Code 201 - Day 13

Today I learned...

about persistance.  localStorage maintains key value pairs of anything you want, as long as they are strings.  

Implementing them is actually more straightforward than you first suspect, as long as you understand the workflow.  I initially tried adding local storage by writing to local storage with each image display and each click, then pulling from that to render the chart, but that is way harder than necessary.  If the rest of the code works in a loop-like workflow, then the easiest way to deliver the feature was to take whatever your totals were at the end of the loop and write them to persistance, and look to update your Object properties at the begining of the loop from stored persistance values if appropriate.  Just make sure your if logic is sound around whether you should start a fresh (base 0) loop or whether you should populate your loop with values from persistance.


========================
Here are some examples:

localStorage.setItem('name', 'Will J. Reid')
then
localStorage.getItem('name') returns 'Will J. Reid'
and
localStorage.name also returns 'Will J. Reid'

I can store a number:
localStorage.setItem('someNum', 5)
then
localStorage.getItem('someNum') returns "5"

Your key must always be a string.

JSON - javascript object notation
JSON.stringify ([2,3,4,5]) returns "[2,3,4,5]"
JSON.parse("[2,3,4,5]") returns [2, 3, 4, 5]

so you can do: localStorage.setItem('someArray', JSON.stringify([2,3,4,5]))


var me = [
name: 'Will',
age: 34
car: 'Subaru'
]
JSON.stringify(me)
JSON objects use double quotes

localStorage.setItem('myself', JSON.stringify(me));
JSON.parse(localStorage.getItem('myself'));
