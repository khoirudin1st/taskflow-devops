# TaskFlow DevOps

Task management application built with Node.js, PostgreSQL, Docker, Monitoring, and CI/CD.

## Features

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Task CRUD Operations
- React Frontend
- Dashboard UI
- Logout Functionality
- PostgreSQL Database
- Docker Containerization
- Prometheus Monitoring
- Grafana Dashboard
- GitHub Actions CI Pipeline

---

## Tech Stack

### Architecture

![Architecture](docs/architecture/taskflow-devops-architecture.png)

### Frontend

- React
- React Router DOM
- Axios
- Bootstrap

### Backend

- Node.js
- Express.js
- PostgreSQL
- JWT
- bcrypt

### DevOps

- Docker
- Docker Compose
- Prometheus
- Grafana
- GitHub Actions
- Railway

---

## Project Structure

```text
taskflow-devops/
├── backend/
│   ├── src/
│   ├── Dockerfile
│   └── package.json
│
├── monitoring/
│   ├── prometheus.yml
│   └── grafana/
│
├── docs/
│   └── screenshots/
│
├── docker-compose.yml
└── README.md
```

---

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|----------|----------|----------|
| POST | /api/auth/register | Register User |
| POST | /api/auth/login | Login User |

### Tasks

| Method | Endpoint | Description |
|----------|----------|----------|
| POST | /api/tasks | Create Task |
| GET | /api/tasks | Get Tasks |
| PUT | /api/tasks/:id | Update Task |
| DELETE | /api/tasks/:id | Delete Task |

---
## Deployment

Application deployed using Railway:

https://taskflow-devops-production.up.railway.app

## Monitoring

### Prometheus

Application metrics exposed through:

http://localhost:5000/metrics

### Grafana

Dashboard monitoring available through Grafana.

---

## CI/CD

GitHub Actions automatically runs on:

- Push to main
- Pull Request to main

Workflow:

```text
Install Dependencies
↓
Verify Packages
↓
Success
```

---

## Screenshots

### User Registration

![Register](docs/screenshots/04-register-api-success.png)

### Login API

![Login](docs/screenshots/06-login-api-success.png)

### JWT Protected Route

![JWT](docs/screenshots/07-jwt-protected-route.png)

### Create Task

![Create Task](docs/screenshots/08-create-task-success.png)

### Get Tasks

![Get Tasks](docs/screenshots/09-get-tasks-success.png)

### Update Task

![Update Task](docs/screenshots/10-update-task-success.png)

### Delete Task

![Delete Task](docs/screenshots/11-delete-task-success.png)

### Docker

![Docker](docs/screenshots/13-docker-containers-running.png)

### Railway Deployment

![Railway](docs/screenshots/21-railway-api-online.png)

### Prometheus

![Prometheus](docs/screenshots/14-prometheus-container-running.png)

### Grafana

![Grafana](docs/screenshots/17-grafana-cpu-monitoring.png)

### GitHub Actions

![GitHub Actions](docs/screenshots/18-github-actions-success.png)

### Frontend Login

![Frontend Login](docs/screenshots/22-frontend-login-page.png)

### Frontend Dashboard

![Dashboard](docs/screenshots/23-frontend-dashboard-crud.png)

---

## Conclusion

TaskFlow DevOps successfully implements:

- JWT Authentication
- Task CRUD Operations
- PostgreSQL Database
- React Frontend
- Docker Containerization
- CI/CD with GitHub Actions
- Railway Deployment
- Monitoring with Prometheus and Grafana

This project demonstrates the implementation of modern DevOps practices in a full-stack web application.

---

## Author

Khoirudin