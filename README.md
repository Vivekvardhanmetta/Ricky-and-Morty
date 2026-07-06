# Rick and Morty API Clone

A RESTful Backend API built using Node.js, Express.js, MongoDB Atlas, and JWT Authentication following the MVC Architecture.

---

## Features

- User Registration
- User Login with JWT Authentication
- Character CRUD Operations
- Episode CRUD Operations
- Location CRUD Operations
- Character Image Upload using Cloudinary
- Search Characters by Name
- Filter Characters by Status
- Filter Characters by Species
- Sort Characters
- Pagination
- MongoDB Atlas Integration
- MVC Architecture

---

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- bcrypt
- Multer
- Cloudinary
- dotenv
- CORS

---

## Folder Structure

```text
backend/
│
├── config/
│   ├── db.js
│   ├── cloudinary.js
│
├── controllers/
│   ├── authController.js
│   ├── characterController.js
│   ├── episodeController.js
│   └── locationController.js
│
├── middleware/
│   ├── auth.js
│   └── upload.js
│
├── models/
│   ├── User.js
│   ├── Character.js
│   ├── Episode.js
│   └── Location.js
│
├── routes/
│   ├── authRoutes.js
│   ├── characterRoutes.js
│   ├── episodeRoutes.js
│   └── locationRoutes.js
│
├── utils/
│   └── generateToken.js
│
├── app.js
├── server.js
├── package.json
└── README.md
```

---

## Installation

Clone the repository

```bash
git clone <repository-url>
```

Move into the project

```bash
cd API-Clone
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=5000

MONGO_URL=Your_MongoDB_URL

JWT_SECRET=Your_JWT_SECRET key

CLOUD_NAME=Your_Cloudinary_Name

API_KEY=Your_API_Key

API_SECRET=Your_API_Secret
```

Start the server

```bash
npm run dev
```

Server

```
http://localhost:5000
```

---

# API Endpoints

# Authentication

| Method | Endpoint |
|---------|----------|
| POST | `/api/auth/register` |
| POST | `/api/auth/login` |

---

# Characters

| Method | Endpoint |
|---------|----------|
| POST | `/api/characters` |
| GET | `/api/characters` |
| GET | `/api/characters/:id` |
| PUT | `/api/characters/:id` |
| DELETE | `/api/characters/:id` |

---

# Episodes

| Method | Endpoint |
|---------|----------|
| POST | `/api/episodes` |
| GET | `/api/episodes` |
| GET | `/api/episodes/:id` |
| PUT | `/api/episodes/:id` |
| DELETE | `/api/episodes/:id` |

---

# Locations

| Method | Endpoint |
|---------|----------|
| POST | `/api/locations` |
| GET | `/api/locations` |
| GET | `/api/locations/:id` |
| PUT | `/api/locations/:id` |
| DELETE | `/api/locations/:id` |

---

# Character Search

```
GET /api/characters?search=Rick
```

---

# Character Filter

```
GET /api/characters?status=Alive
```

```
GET /api/characters?species=Human
```

---

# Character Sorting

```
GET /api/characters?sort=name
```

```
GET /api/characters?sort=-name
```

```
GET /api/characters?sort=new
```

```
GET /api/characters?sort=old
```

---

# Pagination

```
GET /api/characters?page=1&limit=5
```

---

# Authentication

Protected routes require a JWT token.

Example:

```
Authorization: Bearer <your_jwt_token>
```

---

# Author

**Vivek Vardhan**