# Cloud-Resources
A repo that serves as a hub for guides, tutorial videos. PDFs and other resources. Useful for people getting started with as well as heavily involved in Cloud computing and related fields.

Helpful YouTube videos:

1) EC2 VS ECS VS Lambda (Serverless)
   https://www.youtube.com/watch?v=-L6g9J9_zB8


# Different types of EC2 Instances
![image](https://github.com/SujalKThapa/Cloud-Resources/assets/136220535/defa2235-eb91-4801-9ba6-c5b27d13c828)
Memory Optimized Instances: These instances are designed to deliver fast performance for workloads that process large data sets in memory. They typically have a higher amount of RAM compared to other instance types, making them suitable for memory-intensive applications like in-memory databases, real-time big data analytics, and high-performance computing.

Compute Optimized Instances: These instances are optimized for compute-bound applications that require high-performance processors. They typically have a high ratio of vCPUs to memory, making them suitable for applications that require intensive computational processing such as gaming servers, scientific modeling, batch processing, and media transcoding.

Storage Optimized Instances: These instances are designed to deliver high storage performance for workloads that require high I/O performance. They come with local instance storage optimized for high-speed, low-latency access, making them suitable for applications that require frequent and fast access to large data sets, such as NoSQL databases, data warehousing, and data processing.


# EC2 vs ECS vs Lamda
EC2 (Elastic Compute Cloud): EC2 provides virtual machines in the cloud, known as instances, offering a wide range of flexibility. These instances can be optimized for various use cases, including memory, compute, or storage. EC2 instances are highly customizable, allowing users to configure CPU, memory, storage, and networking capacity according to their needs. They also come with security features like security groups and IAM roles for access control.

ECS (Elastic Container Service): ECS is a managed container orchestration service designed for running containerized applications. While it supports Docker containers, it's not limited to them; it also accommodates containers built to the Open Container Initiative (OCI) image format. Users can manage ECS clusters themselves on EC2 instances or opt for AWS Fargate, a serverless option that abstracts away infrastructure management. With Fargate, users focus solely on deploying and managing containers, without dealing with server provisioning.

Lambda: Lambda is a serverless compute service that allows users to run code without managing servers. Users upload their code, and Lambda handles scaling and infrastructure management automatically. When a Lambda function is invoked, users receive an ARN (Amazon Resource Name) that uniquely identifies the function. Lambda is commonly used with API Gateway to create serverless REST APIs, enabling infinitely scalable endpoints. Lambda prioritizes simplicity, offering a streamlined development experience without the burden of managing infrastructure.

