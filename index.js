const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const PORT = config.get('PORT') || 5000
const app = express()

app.use(express.json())
app.use('/api/tests', require('./routes/test.router'))
app.use('/api/converter', require('./routes/converter'))
app.use('/api/calculator', require('./routes/calculator'))
app.use('/api/mail', require('./routes/mail'))

mongoose.connect(config.get('mongoUri'), {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(app.listen(PORT, () => console.log(`Server has been started on ${PORT}`)))
.catch(error => console.log(error.message))