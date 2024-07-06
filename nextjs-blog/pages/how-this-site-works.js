import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css'; // Adjust the path if your styles are in a different directory

export default function HowThisSiteWorks() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Site Architecture</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>How This Site Works</h1>
        <img src="https://i.postimg.cc/Mp0WXYWN/book-Site-3.png" alt="Site Architecture" className="circularImage" />
        <h3 className={styles.title3}>From The User Perspective:</h3>
        <div className={styles.normalWhiteText}>
        <p>
  When the user accesses the website URL, either directly or through a link, Route 53 performs DNS resolution, directing the request to the nearest CloudFront edge location. <br/><br/>CloudFront then, in turn, serves the website from the linked S3 bucket, where the Next.js application is hosted.
</p>
<p>
  The Next.js application includes connections to AWS Lambda functions both through direct function URLs and through an API Gateway fir the implementation of the necessary dynamic functionality, namely: sending emails and fetching/updating the website's view count.
</p>
<br/>
<p><b>How The Emails Are Sent:</b></p>
<ul>
  <li><b>User Interaction:</b> The user enters their email into a textbox and clicks the send button.</li>
  <li><b>Request to Lambda:</b> An HTTP request containing the email value is sent to the Lambda Function URL.</li>
  <li><b>Email Sending:</b> The Lambda function, using the Nodemailer module, sends the PDF to the provided email address while a loading pop-up window is displayed to the user.</li>
  <li><b>Feedback to User:</b> If the email was successfully sent, the loading pop-up window transitions to a success window. Otherwise, if there is an error, it shows an error window instead.</li>
</ul>
<br/>
<p><b>Website View Count Management:</b></p>
<ul>
  <li><b>API call on Initialization:</b> Upon landing on the page, a REST API request is sent to AWS Lambda through an API Gateway.</li>
  <li><b>Update and Return:</b> The Lambda function fetches the current visitor count from DynamoDB as a local variable, increments it and both returns the updated value and updates the corresponding value in DynamoDB.</li>
</ul>

        </div>
        <h3 className={styles.title3}>Infrastructure and CI/CD:</h3>
        <div className={styles.normalWhiteText}>
        <p>Some of the Cloud infrastructure, like the S3 bucket itself, its assosciated CloudFront distribution was originally created and partially configured using a Terraform script. <br/><br/>A CI/CD pipeline was then created for the population of the S3 bucket using GitHub Actions. A seperate "Production" GitHub repository with the Next.js files was then created. Then, the uploading of Next.js files into the S3 bucket is done with AWS CLI commands specified in a YAML file executed by GitHub Actions. This forms the crux of the CI/CD pipeline for the website, updating the S3 bucket whenever changes from the development repository are transferred over to the production repository.<br/><br/>(This was done manually in my case, though automation for the same can be done using a simple bash/powershell script.)</p>
        </div>
        <div className={styles.finalSection}>
          <Link href="/">
            ← Back to home
          </Link>
        </div>
      </main>

      <style jsx>
        {`
          main {
          
            font-family: Arial, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono,
              Courier New, monospace;
            padding: 3rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .description {
            margin: 2rem 0;
            line-height: 1.5;
            text-align: center;
          }
          .backToHome {
            margin-top: 3rem;
          }

          .circularImage {
            width: 57rem; /* Adjust the size as needed */
            height: 35rem; /* Adjust the size as needed */
            border-radius: 2%;
            border: 0.2rem solid; /* Gray border */
            margin: 20px 0; /* Space between image and other elements */
          }
          @media (max-width: 800px) {
          .circularImage {
            width: 85%; /* Adjust the size as needed */
            height: 60%; /* Adjust the size as needed */
            border-radius: 5%;
            border: 0.2rem solid; /* Gray border */
            margin: 20px 0; /* Space between image and other elements */
          }
          }
        `}
      </style>
    </div>
  );
}
