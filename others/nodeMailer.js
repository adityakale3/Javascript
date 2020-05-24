var nodemailer = require('nodemailer');
// npm install nodemailer
var transporter = nodemailer.createTransport({
  service: 'mail.badvemgmtsystem.com',
  port: 26,
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'admin@badvemgmtsystem.com',
    pass: 'xxx'
  }
});

// transporter.verify((err, success) => {
//     if (err) console.error(err);
//     console.log('Your config is correct');
// });

var mailOptions = {
  from: 'admin@badvemgmtsystem.com',
  to: 'adityakale3@gmail.com',
  subject: 'Sending Email using Node.js',
  text: `Sending a normal email from nodejs`
  // html: '<h1>Hi Smartherd</h1><p>Your Messsage</p>'        
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});