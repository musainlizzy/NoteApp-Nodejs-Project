
const fs = require('fs'); //fectch all the object in fs module
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');
const yargs = require('yargs');
const titleOptions = {
  describe:'Title of note',
  demande: true,
  alias:'t'
};
const argv= yargs
.command('add','Add note', {
  title:titleOptions,
  body:{
    describe:'Body of note',
    demande: true,
    alias:'b'
  }
})
.command('list','List all notes')
.command('read','Read note', {
  title:titleOptions,
})
.command('remove','Remove note', {
  title:titleOptions,
})
.help()
.argv;
var command = argv._[0];


if(command === 'add') {
  console.log('adding new note');
  var note = notes.addNote(argv.title,argv.body);
  if (note) {
    console.log('Note created');
    notes.logNote(note);

  }
} else if (command ==='list'){
  console.log('list all notes');
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} notes.`);
  allNotes.forEach((note)=>notes.logNote(note));

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
