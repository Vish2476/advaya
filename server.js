const express = require("express");
const bodyparser = require("body-parser");
const nodemailer = require("nodemailer");
const mailer = require("./privacy/config");
const app = express();
const firebase = require("firebase/app");
app.use(express.static('./'));
firebase.initializeApp(mailer.firebaseConfig());
require("firebase/firestore");
app.use(bodyparser.json());
app.use(
  bodyparser.urlencoded({
    extended: true
  })
);
const db = firebase.firestore();

const transporter = nodemailer.createTransport({
  service: "smtp.gmail.com",
  secure: false,
  auth: {
    user: mailer.getMail(),
    pass: mailer.getPass()
  }
});
app.post("/register", (req, res) => {
  req.body.fee = 2500;
  req.body.id = 100;
  db.collection("registered_user")
    .doc(req.body.email)
    .set({
      phone: req.body.ph_no,
      email: req.body.email,
      fullname: req.body.name,
      college: req.body.college,
      branch: req.body.Branch,
      semester: req.body.semester,
      referal_code: req.body.referal,
      id: req.body.id,
      fee: req.body.fee,
      university_regNo: req.body.regno
    });

  sendEmail(req.body.email);
  res.end();
});

sendEmail = email => {
  mail = {
    to: email,
    subject: "test nodemailer",
    text: "success"
  };
  var mailOption = {
    from: mailer.getMail(),
    to: mail.to,
    subject: mail.subject,
    text: mail.text
  };
  transporter.sendMail(mailOption, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info.response);
    }
  });
};
app.listen(1100, () => {
  console.log("server start 1100");
});
