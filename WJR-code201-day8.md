Will J. Reid's Learning Journal
...a markdown file
===============================
# WJR Code 201 - Day 8

Today I learned...

Still more about elements.  I'm going to restate the process from yesterday's journal entry:
1. select the element with a document.getElementById method,
2. create a new tag as a child or sibling element of the first element (createElement)
3. put data into the new tag (innerText)
4. append the tag into the element you referenced in step one. (.append)

I was able to build the header dynamically and include the central body of the table dynamically using the select/create/put/append process after some very significant trial and error, and some executive guidance.

Some other things to try:

* document.body.appendChild()
* figure out why my Emmet package isn't auto-building files at creation
* figure out how to use render to get tables to be created--though that may have been a canard.

We learned about forms today and input options.  Building the inputs themselves seem straightforward since the browsers do so much of the heavy lifting for you.  The harvest process to tag your new data.  The big two steps will be:
1) select an element
2) add a listener to the element.

And be advised: every form with fire a submit event and re-load, so be sure to use an event.preventDefault to make sure the page does not reload but the JS renders the result of what you tried to push through the input via the listener.  
