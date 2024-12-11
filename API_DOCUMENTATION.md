
# API Documentation

Welcome to the API documentation for **Current Glimpse**! This document outlines the available endpoints, their purpose, and how to use them.

---

## Base URL
**Backend URL**: `http://localhost:5000`

---

## Authentication
### Login
**Endpoint**: `/auth/login`
- **Method**: POST
- **Request Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  ```json
  {
    "token": "your-authentication-token",
    "user": {
      "id": "12345",
      "name": "John Doe",
      "email": "user@example.com"
    }
  }
  ```

---

## Articles
### Get All Articles
**Endpoint**: `/articles`
- **Method**: GET
- **Query Parameters**:
  - `page` (optional): Page number for pagination.
  - `limit` (optional): Number of articles per page.
- **Response**:
  ```json
  {
    "data": [
      {
        "id": "1",
        "title": "Breaking News",
        "content": "Details of the news...",
        "status": "verified",
        "timestamp": "2024-12-01T10:00:00Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 100
    }
  }
  ```

### Get Article by ID
**Endpoint**: `/articles/:id`
- **Method**: GET
- **Response**:
  ```json
  {
    "id": "1",
    "title": "Breaking News",
    "content": "Details of the news...",
    "status": "verified",
    "timestamp": "2024-12-01T10:00:00Z"
  }
  ```

---

## Verification
### Submit for Verification
**Endpoint**: `/verification/submit`
- **Method**: POST
- **Request Body**:
  ```json
  {
    "articleId": "1"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Verification submitted successfully.",
    "status": "pending"
  }
  ```

### Get Verification Status
**Endpoint**: `/verification/:id/status`
- **Method**: GET
- **Response**:
  ```json
  {
    "articleId": "1",
    "status": "verified",
    "details": "Verified using blockchain on 2024-12-01"
  }
  ```

---

## Users
### Register
**Endpoint**: `/users/register`
- **Method**: POST
- **Request Body**:
  ```json
  {
    "name": "John Doe",
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  ```json
  {
    "message": "User registered successfully.",
    "user": {
      "id": "12345",
      "name": "John Doe",
      "email": "user@example.com"
    }
  }
  ```

### Get User Profile
**Endpoint**: `/users/profile`
- **Method**: GET
- **Headers**:
  - `Authorization`: Bearer `<your-authentication-token>`
- **Response**:
  ```json
  {
    "id": "12345",
    "name": "John Doe",
    "email": "user@example.com",
    "articles": [
      {
        "id": "1",
        "title": "Breaking News",
        "status": "verified"
      }
    ]
  }
  ```

---

## Error Handling
All endpoints return error responses in the following format:
```json
{
  "error": {
    "code": 400,
    "message": "Bad Request",
    "details": "Specific details about the error."
  }
}
```

---

## Notes
- Ensure that the backend server is running on `http://localhost:5000`.
- For authenticated routes, include the `Authorization` header with a valid token.

For more details, visit the [GitHub repository](https://github.com/jtdietzer/Current-Glimpse).
