const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

exports.handler = async (event) => {
  const { toEmail, subject, text } = event;

  const zohoUser = process.env.ZOHO_EMAIL;
  const zohoPass = process.env.ZOHO_PASSWORD;
  const smtpHost = process.env.ZOHO_SMTP_HOST;
  const smtpPort = parseInt(process.env.ZOHO_SMTP_PORT);

  let transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: false, // true for 465, false for other ports
    auth: {
      user: zohoUser,
      pass: zohoPass,
    },
  });

  // Read PDF file
  const pdfAttachment = fs.readFileSync(path.resolve('./', 'awsbook.pdf'));

  // Setup email options
  let mailOptions = {
    from: zohoUser,
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
      headers: {
        'Access-Control-Allow-Origin': '*', // Allow all origins or specify specific origins
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'OPTIONS,POST,GET', // Allowed methods
      },
      body: JSON.stringify('Email sent successfully!'),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*', // Allow all origins or specify specific origins
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'OPTIONS,POST,GET', // Allowed methods
      },
      body: JSON.stringify('Failed to send email.'),
    };
  }
};