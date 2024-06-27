import axios from 'axios';
import FormData from 'form-data';
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    const form = new FormData();
    form.append('from', 'Your Name <you@yourdomain.com>');
    form.append('to', email);
    form.append('subject', 'Your PDF Document');
    form.append('text', 'Please find attached the PDF document.');

    const pdfPath = path.join(process.cwd(), 'public', 'yourfile.pdf');
    const pdfFile = fs.createReadStream(pdfPath);
    form.append('attachment', pdfFile);

    try {
      const response = await axios.post('https://api.mailgun.net/v3/YOUR_DOMAIN/messages', form, {
        auth: {
          username: 'api',
          password: 'YOUR_API_KEY'
        },
        headers: {
          ...form.getHeaders()
        }
      });

      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      res.status(500).json({ message: 'Error sending email', error });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} not allowed`);
  }
}
