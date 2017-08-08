Will J. Reid's Learning Journal
...a markdown file
===============================
# WJR Code 201 - Day 1

Today I learned...

Going in reverse chronological order: I learned where the Armory is, as I walked across the street to the Pacific Science Center with Jacob.  I met Jacob's brother, a 401 JS student who started here at CodeFellows in April and has progressed quickly to the capstone course, where he and his learning team developed a multi-family property inspection app which is entirely browser-based, but which has a local DB so it should be able to perform offline to capture and write new data, then sync with the main DB when signal is restored.  This is very similar to the custom app that I just developed with a team at Pivotal, and I will need to discuss his solution in more detail.

In class, we covered html chapter 15, which we hadn't read in advance.  This discussed several formatting items like spans and floats.  We learned that items with the clear designation ignore the wrapper.  We learned about relative position, which offsets an element from its original spot but preserves that space; we learned about absolute position, which offsets an element relative to the last positioned element and no longer preserves the space; and we learned about fixed position, which roots an element in a particular place on the window.  Depending on the z-index of the elements on the page, this fixed-position element may appear in front of or behind other elements when scrolling.

To adjust which elements are presented closest to the webpage viewer, assign those elements a higher z-index; to move an element further "back" give it a lower (or even a negative) z-index.

We were advised always to use semantic html, where we could declare page sections as header or aside or footer or article rather than using a declarative div class, which you might employ by declaring div class='article'.  

We have done several examples in class where we run am <html> file, but declare a segment of the file as script to embed some javascript or a style element to embed some CSS formatting, but Nick made it very clear that this is not a best practice, and he may have suggested that if we use this structure, instead of creating seperate files for the .html, .js, and .css files that role together to control the user experience, Nick might challenge us to a dual.  On second thought, he'd probably be cool with it personally, but he would consider it a very serious professional breach of protocal.  In the real world, always use seperate .html, .js and .css files, and link them together.

We talked about selectors--the more specific the selector, the more importance is placed on its action.  And finally, we should consider adding a CSS Reset file at the beginning of our projects so we can be in full control of all styling on the page.
