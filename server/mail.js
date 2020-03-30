const mailer = require("nodemailer");



const getEmailData = (from, name, message, template) => {
    let data = null;

    switch (template) {
        case "Appointment":
            data = {
                from,
                to: "gilberto.beier@ethereal.email",
                subject: `Appointment Request`,
                text: message
            }
            break;

        case "Contact":
            data = {
                from: "Munish <munisht06@gmail.com>",
                to,
                subject: `Thanks`,
                text: message
            }
            break;
        default:
            data;
    }
    return data;
}


const sendemail = (from, name, message, type, cb) => {

    const smtpTransport = mailer.createTransport({
        // service: "Gmail",
        // auth: {
        //     user: "",
        //     pass: ""
        // }
        host: 'smtp.ethereal.email',
            port:587,
            auth:{
                user: "gilberto.beier@ethereal.email", 
                pass: "y39F2CWFZq8tfyyPbe"
            }
    })

    const mail = getEmailData(from, name, message, type)

    smtpTransport.sendMail(mail, function(error, response) {
        if(error) {
            cb(err, null);
        } else {
            cb(null,response)
        }
        smtpTransport.close();
    })


}

module.exports = { sendemail }