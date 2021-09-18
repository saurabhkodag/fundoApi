const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    "title": {
        type: String,
        required: true
    },
    "description": {
        type: String,
        required: true
    },
    "isPinned": {
        type: Boolean
    },
    "isArchived": {
        type: Boolean
    },
    "isDeleted": {
        type: Boolean
    },
    "color": {
        type: String
    },
    "user_id":{
        type: String
    }
})

module.exports = mongoose.model('Note', noteSchema)