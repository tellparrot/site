<<<<<<< HEAD
# Parrot Website

Parrot Website is a comprehensive platform designed to streamline role management, maintain data governance standards, and ensure compliance through task automation. The website offers a unified interface for managing roles, domains, policies, and tasks, providing robust solutions for enterprise role management, governance implementation, and compliance reporting.

## Overview

The Parrot Website is built using a modern web stack with a ReactJS frontend and an ExpressJS backend. The frontend leverages Vite for development and Tailwind CSS for styling, while the backend uses MongoDB for data storage and Mongoose for ORM. The project is structured into two main parts:

1. **Frontend**:
    - Located in the `client/` directory.
    - Built with ReactJS and Vite.
    - Uses `shadcn-ui` component library and Tailwind CSS.
    - Client-side routing with `react-router-dom`.
    - Pages and components are organized under `client/src/pages/` and `client/src/components/`.

2. **Backend**:
    - Located in the `server/` directory.
    - Built with ExpressJS.
    - Uses MongoDB for database and Mongoose for data modeling.
    - Implements REST API endpoints.
    - Token-based authentication using JWT.

## Features

The Parrot Website includes the following features:

### Core Value Propositions

1. **Role Management**:
    - Role assignment workflows
    - Lifecycle tracking
    - Clear ownership model
    - Automated onboarding
    - Role attestation

2. **Domain-Driven Governance**:
    - Domain organization
    - Owner/steward assignment
    - Policy definition
    - Data product management
    - Governance standards

3. **Task Automation**:
    - Workflow creation
    - Approval processes
    - Progress tracking
    - Audit trails
    - Compliance documentation

### Product Features

- **Role Management**:
    - Role request workflows
    - Automated approvals
    - User onboarding automation
    - Role reviews and attestation
    - Historical tracking
- **Task Management**:
    - Workflow automation
    - Multi-step approvals
    - Progress monitoring
    - Task notifications
    - Compliance tracking

### New Features

- **Stop Current Epics and Tasks**:
    - Allows deletion of existing epics and tasks.
    - Enables creation of new, accurate sets tailored for the project.
    - Enhances project management flexibility.

- **Messaging System**:
    - Mechanism for sending emails to support and contact teams.
    - Backend support for handling contact form submissions.

## Getting started

### Requirements

To run the project, ensure you have the following technologies installed:

- Node.js (>= 14.x)
- npm (>= 6.x)
- MongoDB (>= 4.x)

### Quickstart

1. **Clone the repository**:
    ```sh
    git clone <repository-url>
    cd parrot-website
    ```

2. **Install dependencies**:
    ```sh
    # Install frontend dependencies
    cd client
    npm install
    
    # Install backend dependencies
    cd ../server
    npm install
    ```

3. **Set up environment variables**:
    - Create a `.env` file in the `server/` directory with the following content:
        ```env
        PORT=3000
        DATABASE_URL=mongodb://localhost/parrot
        JWT_SECRET=your_jwt_secret
        REFRESH_TOKEN_SECRET=your_refresh_token_secret
        SMTP_HOST=smtp.gmail.com
        SMTP_PORT=465
        SMTP_USER=your-email@gmail.com
        SMTP_PASS=your-app-specific-password
        SUPPORT_EMAIL=support@yourcompany.com
        ```

4. **Run the project**:
    ```sh
    # Start both frontend and backend servers
    npm run start
    ```

    - The frontend will be available at `http://localhost:5173`.
    - The backend will run on `http://localhost:3000`.

### License

The project is proprietary (not open source). 

```
Copyright (c) 2024.
```
=======
# site
>>>>>>> origin/main
