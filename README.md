# HelpDesk Chatbot

A modern, containerized chatbot application with a glassmorphism UI design, built using React, Node.js, and MongoDB.

![HelpDesk Chatbot Screenshot](screenshot.png)

## 🌟 Features

- Real-time chat interface with glassmorphism design
- Rule-based chatbot responses
- MongoDB message persistence
- Docker containerization
- CI/CD pipeline with GitHub Actions
- Cloud-ready deployment configurations
- Rate limiting and security features
- Comprehensive logging system

## 🛠️ Technology Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Containerization**: Docker
- **CI/CD**: GitHub Actions
- **Cloud**: AWS/Azure/GCP configurations provided

## 🚀 Quick Start

### Local Development

1. Clone the repository:

```bash
git clone https://github.com/yourusername/helpdesk-chatbot.git
cd helpdesk-chatbot
```

2. Install dependencies:

```bash
# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install
```

3. Set up environment variables:

```bash
# Frontend (.env)
REACT_APP_API_URL=http://localhost:3001

# Backend (.env)
PORT=3001
MONGODB_URI=mongodb://localhost:27017/helpdesk-chat
```

4. Run the application:

```bash
# Terminal 1 - Frontend
cd frontend
npm start

# Terminal 2 - Backend
cd backend
npm start

# Terminal 3 - MongoDB (if not using Docker)
mongod
```

### Docker Deployment

1. Build and run with Docker Compose:

```bash
docker-compose up --build
```

2. Access the application:

- Frontend: http://localhost:3000
- Backend API: http://localhost:3001

## ☁️ Cloud Deployment Guide

### AWS Deployment

1. ECR Setup:

```bash
# Login to AWS ECR
aws ecr get-login-password --region region | docker login --username AWS --password-stdin aws_account_id.dkr.ecr.region.amazonaws.com

# Create ECR repositories
aws ecr create-repository --repository-name helpdesk-frontend
aws ecr create-repository --repository-name helpdesk-backend

# Tag and push images
docker tag helpdesk-frontend:latest aws_account_id.dkr.ecr.region.amazonaws.com/helpdesk-frontend
docker tag helpdesk-backend:latest aws_account_id.dkr.ecr.region.amazonaws.com/helpdesk-backend
docker push aws_account_id.dkr.ecr.region.amazonaws.com/helpdesk-frontend
docker push aws_account_id.dkr.ecr.region.amazonaws.com/helpdesk-backend
```

### Azure Deployment

1. Create Azure Container Registry:

```bash
# Create resource group
az group create --name helpdesk-rg --location eastus

# Create container registry
az acr create --resource-group helpdesk-rg --name helpdeskregistry --sku Basic

# Build and push images
az acr build --registry helpdeskregistry --image helpdesk-frontend:latest ./frontend
az acr build --registry helpdeskregistry --image helpdesk-backend:latest ./backend
```

2. Deploy to Azure Container Apps:

```bash
# Create Container Apps environment
az containerapp env create \
  --name helpdesk-env \
  --resource-group helpdesk-rg \
  --location eastus

# Deploy frontend
az containerapp create \
  --name helpdesk-frontend \
  --resource-group helpdesk-rg \
  --environment helpdesk-env \
  --image helpdeskregistry.azurecr.io/helpdesk-frontend:latest \
  --target-port 80 \
  --ingress external

# Deploy backend
az containerapp create \
  --name helpdesk-backend \
  --resource-group helpdesk-rg \
  --environment helpdesk-env \
  --image helpdeskregistry.azurecr.io/helpdesk-backend:latest \
  --target-port 3001 \
  --ingress external
```

## 🤖 AI-Assisted Development

During the development of this project, we utilized GitHub Copilot to enhance our development workflow. Here's how AI assisted in various aspects:

1. **Code Generation**:

   - Helped generate boilerplate code for React components
   - Assisted with MongoDB schema definition
   - Suggested Docker configurations

2. **Code Refactoring**:

   - Identified potential performance improvements
   - Suggested better error handling patterns
   - Helped optimize database queries

3. **Testing**:
   - Generated test cases for API endpoints
   - Suggested edge cases for chatbot responses
   - Helped with test setup and teardown

The AI suggestions were always reviewed and modified to ensure they met our specific requirements and maintained code quality standards.

## 🔍 Testing

```bash
# Run frontend tests
cd frontend
npm test

# Run backend tests
cd backend
npm test
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

Aryan - aryan23062001@gmail.com
