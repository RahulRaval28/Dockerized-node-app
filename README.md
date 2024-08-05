# Node.js Dockerized Application
This repository contains a Node.js application that is Dockerized for ease of deployment and consistency across different environments.



## Prerequisites


Before you start, make sure you have the following installed on your machine:

node.js(version 14.x or higher)

Docker

# Getting Started

1.clone the Repo
```bash
git clone https://github.com/yourusername/your-node-app.git
cd your-node-app
```

2. Build the Docker image:

```bash
docker build -t your-node-app .
```

2. Run the Docker container:

```bash
docker run -p 3000:3000 your-node-app
```
By default, the application will be accessible at http://localhost:3000.


