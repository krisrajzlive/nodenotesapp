const add = require('./utils.js')
const getNotes = require('./notes.js')
const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')

yargs.version('1.1.0')

yargs.command({
    command: 'add',
    description: 'Add a new note',
    handler: function() {
        console.log('Adding a new note')
    }
})
console.log(process.argv)
console.log(yargs)
