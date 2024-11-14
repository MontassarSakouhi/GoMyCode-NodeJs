var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'montassarsakouhi2001@gmail.com',
    pass: 'kgbp kwll htfc bcip'
  }
});

var mailOptions = {
  from: 'montassarsakouhi2001@gmail.com',
  to: 'montassa015@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});