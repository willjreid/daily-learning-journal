Will J. Reid's Learning Journal
...a markdown file
===============================
# WJR Code 201 - Day 13

Today I learned...

about persistance.  localStorage maintains key value pairs of anything you want, as long as they are strings.  Here are some examples:

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
