//require('./date-concat.js');

var datejs = require('./date.js');

console.log(datejs.today().add(1).day());
console.log(Date.prototype);
console.log(Date.today());
