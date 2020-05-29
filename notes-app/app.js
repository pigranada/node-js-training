const yargs = require('yargs')
const chalk = require('chalk')
const notes = require('./notes.js')

// Add command

yargs.command({
    command: 'add',
    description: 'Add notes',
    builder: {
        title:{
            description: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            description: 'Body of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Remove command

yargs.command({
    command: 'remove',
    description: 'Remove notes',
    builder: {
        title: {
            description: 'Remove the notes based on title',
            type: 'string',
            demandOption: true
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// List command

yargs.command({
    command: 'list',
    description: 'List all notes',
    handler() {
        notes.listNotes()        
    }
})

// Read notes

yargs.command({
    command: 'read',
    description: 'Reading notes',
    builder: {
        title: {
            demandOption: true,
            style: 'string',
            description: 'The title of the note to be read'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

yargs.parse()
    