const config = require('config')
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: config.get('email'),
        pass: config.get('password')
    }
})

function mail(req, res){
    const {username, useremail, usertext} = req.body

    const mailOptions = {
        from: config.get('email'),
        to: 'reactorit.tag.info@gmail.com',
        subject: `from ${useremail}`,
        text: `This is mail from ${username}. ${usertext}`
    }

    transporter.sendMail(mailOptions)
}

exports.mail = mail