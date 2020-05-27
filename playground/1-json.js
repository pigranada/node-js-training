// const fs = require('fs')

// const book = {
//     title: "The Lightning Thief",
//     author: "Rick Riordan"
// }

// let stringJson = JSON.stringify(book)

// fs.writeFileSync('1-json.json', stringJson)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataString = dataBuffer.toString()
// const dataJson = dataBuffer.toJSON()
// console.log(dataString)
// console.log(dataJson)

const fs = require('fs')

const buffer = fs.readFileSync('1-json.json')
const stringBuffer = buffer.toString()
let jsonBuffer = JSON.parse(stringBuffer)

jsonBuffer.name = 'Ivann'
jsonBuffer.age = 25

const stringData = JSON.stringify(jsonBuffer)
fs.writeFileSync('1-json.json', stringData)