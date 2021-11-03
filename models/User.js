const {Schema, model} = require('mongoose')

const schema = new Schema([
    {
        name : {type: String, required: true},
        time: {type: Number, required: true},
        test: {type: Number, required: true}
    }
])

module.exports = model('User', schema)