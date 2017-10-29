console.log('starting app.js.');

const fs = require('fs'); //fectch all the object in fs module
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');
var filteredArray = _.uniq(['Evelyn',1,'Evelyn',1,2,2,3]);

console.log(_.uniq(filteredArray));

console.log('Result',notes.add(9,-2));



//var user = os.userInfo();
//fs.appendFileSync('greetings.txt','Hello world!\n');
//console.log(user);
//fs.appendFileSync('greetings.txt',`Hello ${user.username}!`);
