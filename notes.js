const fs = require('fs')
const chalk = require('chalk')
const { match } = require('assert')

const addNote = (title, body) => { 
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title )

    if (!duplicateNote)
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

const removeNote = (title) =>
{
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title != title)
    
    if (notes.length > notesToKeep.length != 0)
    {
        saveNotes(notesToKeep);
        console.log(chalk.green.inverse('Removed note'))
    }
    else
        console.log(chalk.red('Title does not exist!'))
}

const listNotes = () =>
{
    const notes = loadNotes()

    console.log(chalk.inverse('Your notes'))

    notes.forEach((note) => {
        console.log(note.title)
    })
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)

    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
        
    } catch (error) {
        return []
    }
}

const readNotes = (title) => {
    const notes = loadNotes()
    const matchNote = notes.find((note) => note.title === title )

    if (matchNote)
    {
        console.log(chalk.inverse('Title: ' + matchNote.title))
        console.log('Body: ' + matchNote.title)
    }
    else
        console.log(chalk.red('Note does not exist'))
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}