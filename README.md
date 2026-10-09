# Premium Developer Portfolio

A production-ready full-stack developer portfolio built with the MERN stack (MongoDB, Express, React, Node.js) and Docker.

## Features
- Dynamic content managed through an Admin Dashboard
- Premium dark theme design with Bootstrap 5
- Fully responsive on all devices
- Swagger API documentation
- JWT Authentication
- Dockerized setup

## Tech Stack
- **Frontend:** React, Vite, Bootstrap 5, React Router
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **DevOps:** Docker, Docker Compose, Swagger/OpenAPI

## Setup Instructions

### Environment Variables
1. Copy `.env.example` to `.env` in the root directory.
2. Fill in the variables:
   - `MONGO_URI`: MongoDB connection string
   - `JWT_SECRET`: Secret key for JWT
   - `GITHUB_USERNAME`: Your GitHub username
   - `GITHUB_TOKEN`: Your GitHub personal access token (optional, for higher rate limits)

### Running Locally (Without Docker)

1. **Backend:**
   ```bash
   cd server
   npm install
   npm run dev
   ```

2. **Frontend:**
   ```bash
   cd client
   npm install
   npm run dev
   ```

### Running with Docker

1. Ensure Docker and Docker Compose are installed.
2. Build and start the containers:
   ```bash
   docker compose up --build
   ```
3. To stop the application:
   ```bash
   docker compose down
   ```

## Accessing the Application
- **Frontend:** http://localhost:5173 (or http://localhost if using Docker Nginx)
- **Backend API:** http://localhost:5000
- **Swagger Documentation:** http://localhost:5000/api-docs
- **Admin Dashboard:** Go to `/admin/login` on the frontend

## Database
MongoDB is used as the database. If running via Docker, a named volume is used to persist data across container restarts.
