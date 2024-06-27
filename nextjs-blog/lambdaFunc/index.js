const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

exports.handler = async (event) => {
  const { toEmail, subject, text, pdfPath } = event;

  const yahooUser = process.env.YAHOO_EMAIL;
  const yahooPass = process.env.YAHOO_PASSWORD;

  let transporter = nodemailer.createTransport({
    service: 'yahoo',
    auth: {
      user: yahooUser,
      pass: yahooPass,
    },
  });

  // Read PDF file
  const pdfAttachment = fs.readFileSync(path.resolve('./', 'awsbook.pdf'));

  // Setup email options
  let mailOptions = {
    from: yahooUser,
    to: toEmail,
    subject: subject,
    text: text,
    attachments: [
      {
        filename: 'awsbook.pdf',
        content: pdfAttachment,
        contentType: 'application/pdf',
      },
    ],
  };

  try {
    // Send email
    let info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
    return {
      statusCode: 200,
      body: JSON.stringify('Email sent successfully!'),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify('Failed to send email.'),
    };
  }
};
