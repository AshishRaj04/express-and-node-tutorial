// modules
// Every JS file is a module (by default) 
// Modules -  Encapsulated code (only share minimum)

const names = require('./names');
const sayHii = require('./utils');
const sports = require('./alter');
require('./mind');

console.log(names);

sayHii('Ritu');
sayHii(names.Name );
sayHii(names.Roll_no);

console.log(sports.items);
console.log(sports.about);