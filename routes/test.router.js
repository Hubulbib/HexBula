const { Router } = require('express');
const User = require('../models/User');
const tests = require('../controllers/test')

const router = Router()

// составление теста
router.post('/', (req, res) => {
    const {testNumber} = req.body
    if(testNumber === 1) return res.send(tests.test1())
    if(testNumber === 2) return res.send(tests.test2())
    if(testNumber === 3) return res.send(tests.test3())
    if(testNumber === 4) return res.send(tests.test4())
    if(testNumber === 5) return res.send(tests.test5())
    if(testNumber === 6) return res.send(tests.test6())
})

// непосредственно сам тест
router.post('/test', (req, res) => {
    const {answer, testNumber} = req.body

    if(testNumber === 1){
        for(let i in answer){
            if(answer[i] !== '0' && answer[i] !== '1') return res.status(400).json({message: 'вводите только цифры двоичной системы счисления'})
        }
    }
    if(testNumber === 2){
        for(let i in answer){
            if(answer[i] !== '0' && answer[i] !== '1' && answer[i] !== '2' && answer[i] !== '3'
            && answer[i] !== '4' && answer[i] !== '5' && answer[i] !== '6' && answer[i] !== '7'
            && answer[i] !== '8' && answer[i] !== '9') return res.status(400).json({message: 'вводите только цифры десятичной системы счисления'})
        }
    }
    if(testNumber === 3){
        for(let i in answer){
            if(answer[i] !== '0' && answer[i] !== '1' && answer[i] !== '2' && answer[i] !== '3'
            && answer[i] !== '4' && answer[i] !== '5' && answer[i] !== '6' && answer[i] !== '7'
            && answer[i] !== '8' && answer[i] !== '9' && answer[i] !== 'A' && answer[i] !== 'B'
            && answer[i] !== 'C' && answer[i] !== 'D' && answer[i] !== 'E' && answer[i] !== 'F')
            return res.status(400).json({message: 'вводите только цифры шестнадцатиричной системы счисления'})
        }
    }
    if(testNumber === 4){
        for(let i in answer){
            if(answer[i] !== '0' && answer[i] !== '1' && answer[i] !== '2' && answer[i] !== '3'
            && answer[i] !== '4' && answer[i] !== '5' && answer[i] !== '6' && answer[i] !== '7')
            return res.status(400).json({message: 'вводите только цифры восьмиричной системы счисления'})
        }
    }
    if(testNumber === 5){
        for(let i in answer){
            if(answer[i] !== '0' && answer[i] !== '1' && answer[i] !== '2' && answer[i] !== '3'
            && answer[i] !== '4' && answer[i] !== '5' && answer[i] !== '6' && answer[i] !== '7')
            return res.status(400).json({message: 'вводите только цифры восьмиричной системы счисления'})
        }
    }
    if(testNumber === 6){
        for(let i in answer){
            if(answer[i] !== '0' && answer[i] !== '1' && answer[i] !== '2' && answer[i] !== '3'
            && answer[i] !== '4' && answer[i] !== '5' && answer[i] !== '6' && answer[i] !== '7'
            && answer[i] !== '8' && answer[i] !== '9' && answer[i] !== 'A' && answer[i] !== 'B'
            && answer[i] !== 'C' && answer[i] !== 'D' && answer[i] !== 'E' && answer[i] !== 'F')
            return res.status(400).json({message: 'вводите только цифры шестнадцатиричной системы счисления'})
        }
    }
})

router.post('/testResult', async (req, res) => {
    const {time} = req.body

    let isNewLider = false
    const leaders = await User.find().sort({time: 1})
    for(let i = 0; i < 5; i++){
        if(time < leaders[i]['time']){
            isNewLider = true
            break
        }
    }
    let candidates = []
    for(let i = 0; i < 5; i++){
        candidates.push({name: leaders[i]['name'], time: leaders[i]['time'], test: leaders[i]['test']})
    }
    return res.status(202).json({isNewLider, table: candidates})
})

router.post('/createNewLeader', async(req, res) => {
    const {name, time, testNumber} = req.body

    const leader = new User({name, time, test: testNumber})

    await leader.save()
    return res.status(201).json({message: 'В скором времени вы будете добавлены в список лидеров'})
})

router.post('/getRecord', async(req, res) => {
    try{
        const {testNumber} = req.body
        const usersRecord = await User.find({test: testNumber}).sort({time: 1})
        let record = 0, minutes = '', seconds = ''

        if(usersRecord == 0) return res.status(202).json({record: null})
        else {
            const record_candidate = usersRecord[0]['time']
            minutes = (Math.floor(record_candidate / 60)).toString()
            seconds = (record_candidate % 60).toString()
            if(seconds === '0') seconds = '00'
            record = minutes + ' : ' + seconds
        }
        
        return res.status(200).json({record})
    } catch(e){
        res.status(400).json({message: e.message})
    }
})

module.exports = router;