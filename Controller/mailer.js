
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
module.exports = {
async sendM(temp,token) {
    console.log('hi send');
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    // host: "smtp.ethereal.email",
    // port: 587,
    // secure: false, // true for 465, false for other ports
    service:"Gmail",
    auth: {
      user: 'kodag.saurabh6@gmail.com', // generated ethereal user
      pass: 'Micromax@1', // generated ethereal password
    },
  });
  let url =`http://localhost:3200/reset/${token}`
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Sourabh Kodag" <kodag.saurabh6@gmail.com>', // sender address
    to: "kodag.saurabh6@gmail.com", // list of receivers
    subject: "Reset Password", // Subject line
    //text: "Hello world?", // plain text body
    html: "<b>Click the link to reset password</b>"+url, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
}

// sendM().catch(console.error);
// module.exports={sendM}