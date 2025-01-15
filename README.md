# Backend API Documentation

This document provides a detailed overview of the backend API, including available routes, their purposes, and authentication requirements. The project is built using Node.js, Express, and MongoDB.

## Table of Contents
- [Getting Started](#getting-started)
- [Database Configuration](#database-configuration)
- [Routes Overview](#routes-overview)
  - [Root Route](#root-route)
  - [User Routes](#user-routes)
  - [Employee Routes](#employee-routes)
  - [Attendance Routes](#attendance-routes)
- [Authentication](#authentication)

---

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file with the following variables:
   ```env
   PORT=5353
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

3. Start the server:
   ```bash
   npm run dev
   ```

The server will run on `http://localhost:5353` by default.

---

## Database Configuration

The database connection is established in the `db/db.js` file using Mongoose. Ensure the `MONGO_URI` environment variable is correctly configured.

---

## Routes Overview

### Root Route

- **GET `/`**
  - **Description:** Basic server health check.
  - **Authentication:** Not required.
  - **Response:**
    ```json
    "helloworld"
    ```

### User Routes

**Base URL:** `/user`

1. **POST `/v1/api/register`**
   - **Description:** Register a new user.
   - **Authentication:** Required.
   - **Request Body:**
     ```json
     {
       "username": "string",
       "password": "string",
       "designation": "string",
       "employeeId": "string"
     }
     ```
   - **Response:**
     ```json
     {
       "username": "string",
       "designation": "string",
       "employeeId": "string"
     }
     ```

2. **POST `/v1/api/login`**
   - **Description:** User login to obtain a JWT token.
   - **Authentication:** Not required.
   - **Request Body:**
     ```json
     {
       "username": "string",
       "password": "string"
     }
     ```
   - **Response:**
     ```json
     {
       "message": "Login successful",
       "token": "string"
     }
     ```

### Employee Routes

**Base URL:** `/employee`

1. **POST `/v1/api/register`**
   - **Description:** Register a new employee.
   - **Authentication:** Not required.
   - **Request Body:**
     ```json
     {
       "employeeId": "string",
       "name": "string",
       "fatherName": "string",
       "dateOfJoining": "date",
       "designation": "string",
       "department": "string",
       "personalNumber": "string",
       "dob": "date",
       "mailId": "string",
       "currentAddress": "string",
       "permanentAddress": "string",
       "salary": "number",
       "bankDetails": {
         "bankName": "string",
         "accountNo": "string",
         "ifscCode": "string"
       },
       "reportingManager": "string",
       "highestQualification": "string"
     }
     ```

2. **GET `/v1/api/all`**
   - **Description:** Retrieve all employees.
   - **Authentication:** Not required.
   - **Response:**
     ```json
     {
       "employees": [ ... ]
     }
     ```

3. **PATCH `/v1/api/update/:employeeId`**
   - **Description:** Update an employee's details.
   - **Authentication:** Not required.

4. **DELETE `/v1/api/delete/:employeeId`**
   - **Description:** Delete an employee.
   - **Authentication:** Not required.

### Attendance Routes

**Base URL:** `/attendance`

1. **POST `/v1/api/punch-in`**
   - **Description:** Record an employee's punch-in time.
   - **Authentication:** Required.
   - **Request Body:**
     ```json
     {
       "userId": "string",
       "punchInTime": "date"
     }
     ```
   - **Response:**
     ```json
     {
       "message": "Punch-in saved successfully"
     }
     ```

2. **POST `/v1/api/punch-out`**
   - **Description:** Record an employee's punch-out time.
   - **Authentication:** Required.
   - **Request Body:**
     ```json
     {
       "userId": "string",
       "punchOutTime": "date"
     }
     ```
   - **Response:**
     ```json
     {
       "message": "Punch-out saved successfully",
       "totalHours": "number"
     }
     ```

---

## Authentication

### JWT Implementation

- JWT tokens are used for protecting specific routes (e.g., punch-in/punch-out, user registration).
- Include the token in the `Authorization` header as:
  ```
  Bearer <token>
  ```

---

Feel free to reach out for clarifications or additional updates!

