console.log('starting app.js.');

const fs = require('fs'); //fectch all the object in fs module
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');
const yargs = require('yargs');

const argv= yargs.argv;
var command = process.argv[2];
console.log('Command :',command);

if(command === 'add') {
  console.log('adding new note');
  var note = notes.addNote(argv.title,argv.body);
  if (note) {
    console.log('Note created');
    notes.logNote(note);

  }
} else if (command ==='list'){
  console.log('list all notes');
  notes.getAll();

} else if (command === 'read'){
  console.log('read');
  var note = notes.getNote(argv.title);
  if (note) {
    console.log('Note found');
    notes.logNote(note);
  } else {
    console.log('Note not found');
  }
} else if (command === 'remove'){
  console.log('remove');
  var remove = notes.removeNote(argv.title);
  var message = remove? 'Note has been removed.':'Note can not be removed.';
  console.log(message);
} else {
  console.log('Command is not recognized');
}



//var user = os.userInfo();
//fs.appendFileSync('greetings.txt','Hello world!\n');
//console.log(user);
//fs.appendFileSync('greetings.txt',`Hello ${user.username}!`);
