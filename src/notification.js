const nodemailer = require("nodemailer");
const { smtp } = require("./setting");

let transport = nodemailer.createTransport(smtp);

const notification = {
  email: function(url) {
    const message = {
      from: smtp.from, // Sender address
      to: smtp.to, // List of recipients
      subject: `Changes has been Detected on ${url}`, // Subject line
      text: `Changes has been Detected on ${url}` // Plain text body
    };
    transport.sendMail(message, function(err, info) {
      if (err) {
        console.log(err);
      } else {
        console.log(info);
      }
    });
  }
};

module.exports = notification;
