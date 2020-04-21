const mailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

const auth = {
    auth:{
        api_key:'08b5a013a4cc24180bb8cdffcc520ecc-ed4dc7c4-4120f187',
        domain:'sandboxd053b95b6d644a72be141643dff5b43d.mailgun.org'

    }
};


const getEmailData = (to, name, message, template) => {
    let data = null;

    switch (template) {
        case "Appointment":
            data = {
                from: "gilberto.beier@ethereal.email",
                to: to ,
                subject: `Appointment Reminder`,
                text: message
            }
            break;

        case "ClientReminder":
            data = {
                from: "munisht06@gmail.com",
                to: "munisht06@gmail.com",
                subject: `Appointment Reminder`,
                text: message
            }
            break;
        default:
            data;
    }
    return data;
}


const sendemail = (from, name, message, type, cb) => {

    // const smtpTransport = mailer.createTransport({
    //     // service: "Gmail",
    //     // auth: {
    //     //     user: "",
    //     //     pass: ""
    //     // }
    //     host: 'smtp.ethereal.email',
    //         port:587,
    //         auth:{
    //             user: "gilberto.beier@ethereal.email", 
    //             pass: "y39F2CWFZq8tfyyPbe"
    //         }
    // })

    const smtpTransport = mailer.createTransport(mailGun(auth));

    const mail = getEmailData(from, name, message, type)

    // smtpTransport.sendMail(mail, function(error, response) {
    //     if(error) {
    //         cb(error, null);
    //     } else {
    //         cb(null,response)
    //     }
    //     smtpTransport.close();
    // })
    smtpTransport.sendMail(mail) .then(function(response) {
       
        smtpTransport.close()
    }).catch(err => {
        console.error(err);
    });
    


}

module.exports = { sendemail }