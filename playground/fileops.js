const fs = require('fs')

const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book)
console.log(bookJSON)

//fs.writeFileSync('data.json',bookJSON)

const parsedData = JSON.parse(bookJSON)
console.log(parsedData.author)

const bufferdata = fs.readFileSync("data.json")
fs.closeAsync
const stringdata = bufferdata.toString()
const jsondata = JSON.parse(stringdata)
jsondata.name = 'Raj'
jsondata.age='50'
const stringdata2 = JSON.stringify(jsondata)
fs.writeFileSync('data.json',stringdata2)