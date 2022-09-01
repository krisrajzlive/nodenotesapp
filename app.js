const add = require('./utils.js')
const getNotes = require('./notes.js')
const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')

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
        console.log("Title: " + argv.title)
        console.log("Body: " + argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(){
        console.log('Removing a note')
    }
})

// Creating read command
yargs.command({
    command: 'read',
    describe: 'Reading a note',
    handler(){
        console.log('Reading a note')
    }
})

// Creating list command
yargs.command({
    command: 'list',
    describe: 'Listing notes',
    handler(){
        console.log('Listing notes')
    }
})
   
yargs.parse() // To set above changes