import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('Here is your PDF document.');
  const [subject, setSubject] = useState('Your AWS Document');

  const handleSend = async (email1) => {
    try {
      const response = await fetch('https://obzyzblvsyacryqnviixt3qgma0dllld.lambda-url.us-east-1.on.aws', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ toEmail: email1, subject: 'Your AWS Document', text: 'Here is your PDF document.' }),
      });

      if (response.ok) {
        alert('Email sent successfully');
      } else {
        const errorText = await response.text();
        alert(`Error sending email: ${errorText}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending email');
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header2}>
        <img src="https://i.postimg.cc/g2XCJk7W/1mc0KI.jpg" />
      </header>

      <main>
        <h1 className={styles.title}>
          Get Flash Notes, Tips and Tricks on 100+ <b className={styles.boldAws}>AWS</b> Topics
        </h1>
        <div className={styles.thinPara1}>
          My curated All-In-One AWS study document, just a single E-Mail away.
        </div>
        <div className={styles.emailContainer}>
          <input
            type="email"
            placeholder="Enter email here to receive the full document"
            className={styles.emailInput}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className={styles.sendButton} onClick={() => handleSend(email)}>
            Send
          </button>
        </div>

        <header className={styles.header}>
          <div className={styles.headerOut}>Site Views: &nbsp;</div>
          <div className={styles.headerIn}>1000</div>
        </header>

        <div className={styles.SampleDoc}>
          <div className={styles.thinPara}>Not sure about the full document?</div>
          <a href="/organized.pdf" target="_blank" rel="noopener noreferrer" className={styles.anew}>
            <button className={styles.downloadButton}>
              <div>
                <img
                  src="https://i.postimg.cc/kgTDsD5b/download-button-on-transparent-background-free-png.webp"
                  alt="Download"
                />
              </div>
              Get a Free PDF Sample
            </button>
          </a>
        </div>

        <div className={styles.finalSection}>
          <a href="">How this site works</a>
        </div>
      </main>

      <style jsx>
        {`
          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          footer {
            width: 100%;
            height: 100px;
            border-top: 1px solid #eaeaea;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          footer img {
            margin-left: 0.5rem;
          }
          footer a {
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            color: inherit;
          }
          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono,
              Courier New, monospace;
          }
        `}
      </style>

      <style jsx global>
        {`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
              Droid Sans, Helvetica Neue, sans-serif;
          }
          * {
            box-sizing: border-box;
          }
        `}
      </style>
    </div>
  );
}
