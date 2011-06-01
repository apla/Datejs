file build order

culture
core.js
parser.js
sugarpak.js

All the files within the /build/ folder are generated with a custom 
built command line .exe that we created. The builder loops through the 
.js files (culture, core.js, parser.js, sugarpak.js) in the /src/ 
folder, compresses them all together using JSMin and then copies a 
version of each culture-specific date.js file to the /build/ folder.
