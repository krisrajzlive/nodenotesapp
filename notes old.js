const fs = require('fs')
const chalk = require('chalk')

const getNotes = function(){
    return 'This is the notes'
}

const addNote = function(title, body){
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(note){
        return note.title === title
    })

    if (duplicateNotes.length === 0)
    {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log(chalk.green.inverse('New note added'))
    }
    else
        console.log(chalk.red('Note title taken!'))
}

const removeNote = function(title)
{
    const notes = loadNotes()
    const notesToKeep = notes.filter(function (note){
        return note.title != title
    })
    
    if (notes.length > notesToKeep.length != 0)
    {
        saveNotes(notesToKeep);
        console.log(chalk.green.inverse('Removed note'))
    }
    else
        console.log(chalk.red('Title does not exist!'))
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = function (){

    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
        
    } catch (error) {
        return []
    }

    
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}