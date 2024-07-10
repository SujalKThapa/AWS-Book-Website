# Cloud-Resources

A website made using Next.js and AWS for the distribution of my book, The AWS Flash Guide.


<br/>

# Website Architecture Diagram

![book-Site-3](https://github.com/SujalKThapa/Cloud-Resources/assets/136220535/96384123-3689-4409-aec4-467ce9b85573)

<br/>


# How the Website Works:
When the user accesses the website URL, either directly or through a link, Route 53 performs DNS resolution, directing the request to the nearest CloudFront edge location.

CloudFront then, in turn, serves the website from the linked S3 bucket, where the Next.js application is hosted.

The Next.js application includes connections to AWS Lambda functions both through direct function URLs and through an API Gateway fir the implementation of the necessary dynamic functionality, namely: sending emails and fetching/updating the website's view count.

<br/>

## How The Emails Are Sent:

- **User Interaction:** The user enters their email into a textbox and clicks the send button.
- **Request to Lambda:** An HTTP request containing the email value is sent to the Lambda Function URL.
- **Email Sending:** The Lambda function, using the Nodemailer module, sends the PDF to the provided email address while a loading pop-up window is displayed to the user.
- **Feedback to User:** If the email was successfully sent, the loading pop-up window transitions to a success window. Otherwise, if there is an error, it shows an error window instead.
<br/>

**Website View Count Management**:
- **API call on Initialization:** Upon landing on the page, a REST API request is sent to AWS Lambda through an API Gateway.
- **Update and Return:** The Lambda function fetches the current visitor count from DynamoDB as a local variable, increments it and both returns the updated value and updates the corresponding value in DynamoDB.
<br/>

# Infrastructure and CI/CD:
Some of the Cloud infrastructure, like the S3 bucket itself, its assosciated CloudFront distribution was originally created and partially configured using a Terraform script.
<br/>
<br/>
A CI/CD pipeline was then created for the population of the S3 bucket using GitHub Actions. A seperate "Production" GitHub repository with the Next.js files was then created. Then, the uploading of Next.js files into the S3 bucket is done with AWS CLI commands specified in a YAML file executed by GitHub Actions. This forms the crux of the CI/CD pipeline for the website, updating the S3 bucket whenever changes from the development repository are transferred over to the production repository.
<br/>
<br/>
(This was done manually in my case, though automation for the same can be done using a simple bash/powershell script.)
