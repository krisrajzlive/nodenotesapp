const add = require('./utils.js')
const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')
   
// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,  // Required
            type: 'string'     
        },
        body: {  
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
  
    // Function for your command
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

// Creating read command
yargs.command({
    command: 'read',
    describe: 'Reading a note',
    builder:{
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNotes(argv.title)
    }
})

// Creating list command
yargs.command({
    command: 'list',
    describe: 'Listing notes',
    handler(){
        notes.listNotes()
    }
})
   
yargs.parse() // To set above changes