const nodemailer = require('nodemailer')
const sgMail = require('@sendgrid/mail')


const sendEmailEthereal = async(req, res) => {
    let testAccount = await nodemailer.createTestAccount()
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'everardo65@ethereal.email',
            pass: 'rg4PP2efyErMtAd1Ry'
        }
    });

    let info = await transporter.sendMail({
        from: `"Srishti parti"<srishtiparti97@gmail.com>`,
        to: 'bar@example.com',
        subject: "Hello",
        html: '<h2>Sending Emails with Node</h2>'
    })

    res.json(info)
}

const sendEmail = async(req, res) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
        to: 'srishtiparti97@gmail.com', // Change to your recipient
        from: 'sriparti97@gmail.com', // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }
    const info = await sgMail.send(msg)
    res.json(info)

}

module.exports = { sendEmail }