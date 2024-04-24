# Cloud-Resources
A repo that serves as a hub for guides, tutorial videos. PDFs and other resources. Useful for people getting started with as well as heavily involved in Cloud computing and related fields.

Helpful YouTube videos:

1) EC2 VS ECS VS Lambda (Serverless)
   https://www.youtube.com/watch?v=-L6g9J9_zB8
2) GoCloudCarreers AWS explainer videos
   https://www.youtube.com/watch?v=FCtX3-4W8_U&t=53s

### Different types of EC2 Instances
![image](https://github.com/SujalKThapa/Cloud-Resources/assets/136220535/defa2235-eb91-4801-9ba6-c5b27d13c828)
Memory Optimized Instances: These instances are designed to deliver fast performance for workloads that process large data sets in memory. They typically have a higher amount of RAM compared to other instance types, making them suitable for memory-intensive applications like in-memory databases, real-time big data analytics, and high-performance computing.

Compute Optimized Instances: These instances are optimized for compute-bound applications that require high-performance processors. They typically have a high ratio of vCPUs to memory, making them suitable for applications that require intensive computational processing such as gaming servers, scientific modeling, batch processing, and media transcoding.

Storage Optimized Instances: These instances are designed to deliver high storage performance for workloads that require high I/O performance. They come with local instance storage optimized for high-speed, low-latency access, making them suitable for applications that require frequent and fast access to large data sets, such as NoSQL databases, data warehousing, and data processing.


### EC2 vs ECS vs Lamda
EC2 (Elastic Compute Cloud): EC2 provides virtual machines in the cloud, known as instances, offering a wide range of flexibility. These instances can be optimized for various use cases, including memory, compute, or storage. EC2 instances are highly customizable, allowing users to configure CPU, memory, storage, and networking capacity according to their needs. They also come with security features like security groups and IAM roles for access control.

ECS (Elastic Container Service): ECS is a managed container orchestration service designed for running containerized applications. While it supports Docker containers, it's not limited to them; it also accommodates containers built to the Open Container Initiative (OCI) image format. Users can manage ECS clusters themselves on EC2 instances or opt for AWS Fargate, a serverless option that abstracts away infrastructure management. With Fargate, users focus solely on deploying and managing containers, without dealing with server provisioning.

Lambda: Lambda is a serverless compute service that allows users to run code without managing servers. Users upload their code, and Lambda handles scaling and infrastructure management automatically. When a Lambda function is invoked, users receive an ARN (Amazon Resource Name) that uniquely identifies the function. Lambda is commonly used with API Gateway to create serverless REST APIs, enabling infinitely scalable endpoints. Lambda prioritizes simplicity, offering a streamlined development experience without the burden of managing infrastructure.

### CloudFront
AWS CloudFront is an Amazon branded content delivery network, CloudFront can be used to improve web hosting by providing the AWS Client with Caching, improved global reach and routing efficiency. CloudFront is often used alongside S3 Object Storage buckets to provide reliable, cheap and efficient static web hosting. Additionally, CloudFront comes with AWS Shield Advanced pre-installed which adds an extra layer of security to the whole architecture, especially against DDoS attacks.

## Machine Learning with AWS

### Amazon Rekognition
An image recognition tool developed and made readily available by Amazon themselves. Can find objects, people, text, scenes in images and videos using Machine Learning. Use cases: Labelling,  Content moderation, text detection, face detection and analysis, face search and verification, celebrity recognition and pathing.

### Amazon transcribe
Used to transcibe/turn speech into text using machine learning. Has a feature called redaction which can automatically remove PII (Personally Identifiable Information from the audio recordings).

### Amazon Polly
Used to turn text into human-like speech using machine learning, a TTS (Text-To-Speech) service developed and made readily available by Amazon.

### Amazon Translate
Used to translate text from one language to another, allows you to localize content - such as websites and applications - for international users, and easily translate large volumes of text efficiently.

### Amazon Lex
The same technology that powers Alexa, and is used to create conversational AI chatbots. Uses ASR (Automatic Speech Recognition) to convert speech to text.

### Amazon Connect
Used to create virtual call centers, i.e. services that can recieve calls, create contact flows, etc. Can integreate with other CRM Systems or AWS.

### Amazon Comprehend
A serverless service for Natural Language Processing (NLP) tasks such as sentiment analysis, text classification/grouping, etc.

### Amazon Comprehend Medical
Amazon Comprehend Medical detects and returns useful information in unstructured clinical text. **Uses NLP to detect Protected Health Information (PHI).**
From an architecture POV, you could store your medical documents in S3, stream real-time medical data through Kinesis Data Firehose or use Amazon Transcribe to transcibe patient narratives into text and then use Amazon Comprehend Medical for analyzing it.

### Amazon SageMaker
Fully managed service for developers/data scienctists to build ML models.

### Amazon Forecast
Fully managed service that uses ML to deliver highly accurate forecasts.

### Amazon Kendra
Fully managed document search service powered using Machine Learning, can be used to say...Extract answers from within a document (text, pdf, HTML, ppt, etc). It gives users the ability to integrate documents with natural language search capabilities. Additionally, it learns from user interactions/feedbacks to promote preferred results and also has the ability to manually fine-tune search results.

### Amazon Personalize
Fully-Managed ML-Service to build apps with real-time personalized reccomendations using the same reccomendation algorithms that is used for the suggestion of products to customers on Amazon.com

### Amazon Textract
Automatically extracts text, handwriting and data from any scanned documents using AI and ML.

# To do Topics
1) Clusters
2) SR-IOV
3) Lambda@Edge
