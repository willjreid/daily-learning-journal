# Will J Reid's Learning Journal#
##*All the thoughts that are fit to commit*##
### Day 15 -- Nov 11 ###

Today we finally succesfully added Details buttons to each book on our book-app, but we managed to break the app about 40 minutes before class and didn't get it activated by 2:00.  When Jeff reloaded it and changed the DB reference in the server.js file to a DB in his name, the books loaded fine.  So I didn't make any changes in the code that had broken things, but somehow I had severed the link to the DB through one of my terminal tabs.

We are so close to finishing out the functionality from the second day of the lab--we can add a book and see it in the page.  The routes.js file eliminates the need to add jQuery event listeners on the bookview.js file, which is a bummer because I had just been getting good at them.

I think we just need to adjust the map() method on the GET call to '/books/:book_id' to make sure we are returning the req.param[0] of the element clicked on.  I'll give that a try over the weekend.
