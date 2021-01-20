# AWS Cloud Notes

## Intro Cloud Computing
- OnDemand delivery of apps via internet.
  - Instead of having to design a data center, the external data center design and provides services and necessary infraestructure.
- Reduce Risk
  - Cloud computing helps this. All services are like building blocks and you can add and reduce as needed.
  - Scalability with AWS you can add or remove services as needed, per season or to accomodate strategy.
- AWS user can create using:
  - The AWS terminal
  - AWS console
    - Flexibility to create scripts. 
  - Software Dev Kits (SDKs).
    - Use AWS in existsing applications.
- Infraestructure as code through SDKs


## AWS Core Services
- EC2 (Elastic Compute Cloud)
  - Elastic Compute Cloud. It can increase or decrease ammount of servers automatically according needs. They are not called servers but EC2 instances.
  - In order to connect with instance you need a key pair so you can connect through SSH.
  - Connect with Putty.
- EBS (Elastic Block Store)
  - Like storage as HDD or SDD.
  - Availability and replicated across multiple servers.
  - Can create snapshots of volumnes.
- Amazon Simple Storage (Amazon S3)
  - Simple API to store data.
  - No infraestructure to manage.
  - Store virtually anything you need. 
  - Data storage grows as your needs grow.
- AWS Global Infraestructure
  - AWS Regions
    - When regions think about what suits your business needs.
  - Availability Zones
    - Data Centers in a specific region. Physically and logically separate. Protected from failures in other zones.
  - Edge Locations
    - CDN with Amazon CloudFront. Request for content is routed to closest edge location. 
- Amazon Virtual Private Cloud (VPC)
  - VPC can create a private network as on premise network.
  - Most complexity of setting up network abstracted.
- AWS Security Groups
  - Act like built-in firewals
  - Control how accessible your instances are.
  - Filter traffic on your instances. 
  - Determine who or constrains to access to your instances. 

## AWS Integrated Services
- Application Load Balancer
  - Second type of load balancer after Classic load balancer with enhancements.
- Auto Scaling
  - Lets you ensure that you have the correct num of EC2 instances to handle your application.
  - Monitor the performance with CloudWatch.
  - Makes environment scalable and automates as possible.
- Amazon Route 53
  - Is the DNS service to route end users to end-points like an app that needs to be translated as ip address for computers to talk to each other.
  - Route 53 does the translation. You can create a hosted zone.
- Amazon Relational Databases (RDS)
  - Many challenges in running your own relational database.
  - Amazon RDS automatize many tasks so you can focus on application and your data.
    - Manage db install, patching, maintenance etc.
- AWS Lambda
  - Serverless compute, continuous scaling and subsecond metering.
  - Again zero administration.
  - Supports most programming languages. Good for event driven technology.
  - An example will be create a lambda function that will create thumbnails for images uploaded.
  - Can use CloudWatch events to trigger lambda function.
- AWS Elastic Beanstalk
  - How can I quickly have my environment ready? With Elastic Beanstalk
  - Platform as a Service. Put code over the system as required.
  - Update app as easy as deployed.
- Amazon CloudWatch
  - Monitoring service
  - Monitors AWS resources.
  - Collects metrics, set alarms, automatically react to changes by notifying you.
- Amazon Simple Notification Service
  - Pub/sub messaging and mobile comm service
  - Delivery of message to subscribing enpoints and clients.
- Amazon CloudFront
  - AWS Global Infraestructure is related to CloudFront.
  - CloudFront caches content close to them.
  - You can set and configure a CDN in CloudFront.
- AWS CloudFormation
  - Simplifies the task of repedeatly creating groups related to resources tha power your apps.

## AWS Architecture

- AWS Well Architected Framework / Guide
  - Helps customers to assess their achitectures.
  - AWS have qs to help customers analyise and think about their architectures and if it follows best practices.
  - There's a guide to help you with. It has 5 pillars:
    1. **Security**: 
       - IAM. Detective controls. Data protection. Logs, auditing controls. AWS recommends apply security at all levels, automate etc.
    1. **Reliability**: Recover from infraestructure issues / failures. Anticipate, respond and prevent failures. This with monitoring and acting appropiately. AWS recommends testing recovery procedures and trigger automated responses.
    2. **Performance efficiency**: Impt. to choose best tool for right job. Select customizable solutions. AWS recommends serverless architectures, experiment while considering trade offs.
    3. **Cost optimization**: Use cost-effective resources, match supply with demand. Optimize over time. AWS recommends reduce spending on data center opeations. Measure overall efficiency and adopt a consumption model.
    4. **Operational Excellence**: Manage / automate changes, response to events and define standards to succesfuly manage daily operations.
- Fault Tolerance and High Availability
  - Fault T: Ability of system to remain operational even if some components fail.
  - High Availability: always running. Minimal human intervention.
  - Amazon does this by:
    - Multiple servers, availability zones, regions and fault tolerant services.
  - High Availability Tools:
    - Elastic load balancers, Elastic IP Addresses
    - Amazon Route 53
    - Auto Scaling
    - Amazon CloudWatch
- Web Hosting:
  - AWS offers low cost hosting. Can host company website, Sharepoint etc.
  - AWS allow to provision virtual servers and delete when needed.

## AWS Pricing and Support
- Fundamentals of Pricing:
  - Like paying for utilities like water. Also has pay as you go.
- Pricing details:
  - You pay for:
    - Computer
    - Storage
    - Outbound data transfer
  - **No charge for inbound data transfer**
- AWS Trusted Advisor
  - As your needs grow it can be hard to manage.
  - AWS Trusted Advisor provides best practices / checks in 4 categories real-time:
    - Cost Optimization
    - Performance
    - Security
    - Fault Tolerance
- AWS Support Plans
  - Many plans depending on your needs.
  - Support is provided for all account levels.
  - AWS Support
    - Technical Account Manager (TAM)
    - Trusted Advisor
    - AWS Support Concierge

## AWS Security
- Introduction to AWS Security
  - Advanced security services and **pay what you need**
  - By using AWS you'll inherit AWS security controls.
- AWS Shared Responsibility Model
  - Takes both parties to work toguether to secure entire application.
  - Some of the pieces of the app the customer is responsible other AWS is responsible.
  - Example IAM is responsibility of user. Protection of global infraestructure of AWS.
- Identity and Access Management (**IAM**):
  - Define who is a user, group, role.
  - A role can be a temporary user etc.
- Amazon Inspector:
  - Amazon Inspector assesses applications for vulnerabilities, deviations from best practices.
  - Provides detailed report on findings and steps for remediations.
- AWS Shield - for DDos Attack.
  - Managed Distributed Denail of Service (DDoS) that safeguards apps running on AWS.
  - Always on detection and automatic in line mitigations.
  - Most of the time no need to engage AWS support.
- AWS Security Compliance
  - AWS shares security info by obtaining industry certifications, publishing security and control practices and compliance reports.

## Summary
- This is the foundational knowledge related to AWS Cloud