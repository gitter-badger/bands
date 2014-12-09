My buddy was trying to grab the band tour date info from bandsintowns.com facebook widget, and it was coming back with a script tag include if you wanted to show that on your blog.

This wouldn't work in email, since the script won't execute.

This is an attempt at a front end that generates the HTML someone would need for an email, so they can copy and paste it into an email html and not rely on javascript generators for facebook.

---

Helpful links:
http://stackoverflow.com/questions/6209161/extract-the-current-dom-and-print-it-as-a-string-with-styles-intact
http://stackoverflow.com/questions/5963182/how-to-remove-spaces-from-a-string-using-javascript

Shout out to O'reillys **Javascript Patterns** book for the fake $() "jQuery selector function" that wraps getElementById();
`var $ = function(id) {return document.getElementById(id);};`.  I should do that more often for casual DOM querying.

This was helpful for doing a get request with the node server
http://stackoverflow.com/questions/20304862/nodejs-httpget-to-a-url-with-json-response - install `npm install request --save`

should comb through this for email styles tips: http://24ways.org/2009/rock-solid-html-emails (havent yet)

http://stackoverflow.com/questions/2092696/how-to-fix-height-of-tr