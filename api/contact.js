// Contact endpoint for sending email to the portfolio owner.
// This endpoint is used by the contact form in the portfolio website.

const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

router.post("/contact", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const number = req.body.number;
  const message = req.body.message;

  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "portfolio.vikash@gmail.com",
        pass: "csrqhzdajvzpxung",
      },
    });

    let mailOptions = {
      from: "'Vikash Kumar',<portfolio.vikash@gmail.com>",
      to: "vikash.18.dev@gmail.com",
      subject: `Message from ${name}`,
      text: `Name: ${name} \nEmail: ${email} \nPhone: ${number} \nMessage: ${message}`,
    };
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
        res.status(200).json({
          status: "FAILED",
          message: err,
        });
      } else {
        console.log(info);
        res.status(200).json({
          status: "SUCCESS",
          message: "Message Sent",
          moreInfo: info,
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "FAILED",
      error: err,
    });
  }
});

module.exports = router;
