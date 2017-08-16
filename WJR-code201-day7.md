Will J. Reid's Learning Journal
...a markdown file
===============================
# WJR Code 201 - Day 6

Today I learned...

a little more about elements.  I'm going to need some more practice at the concepts of:
1. select the element with a document.getElementById method,
2. create a new tag as a child or sibling element of the first element
3. put data into the new tag
4. append the tag into the element you referenced in step one.

In fact, being able to write that out is probably the big takeaway from today.  

To restate the issue: the challenge for tonight's assignment is to run some functions that deposit data into a table, but the table needs to be flexible enough to respond to new store data being added or removed, and to dynamically calculate subtotals.  Here is my approach:
* select the table entity with JS using a document.getElementById method
* for each store, make a new table row (tr) using a document.create.Element method
  * for each hour:
    * create a table data element
    * put data for this store in this table data element
    * append the table data element into the table row
  * append the row into the table.  

  Let's do this!
