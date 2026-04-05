# 📚 School Library Management API

A RESTful API for managing a school library system.  
This project handles authors, books, students, library attendants, and book borrowing/return operations.

---

## 🚀 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose

---

## 🎯 Objective

Build a backend API that manages:

- Authors
- Books
- Students
- Library Attendants
- Book Borrowing & Returns

The API follows REST principles and uses MongoDB for data persistence.

---

## 🧱 Core Entities (Models)

### 1️⃣ Author

Each author can have multiple books.

**Fields:**

- `name` *(String, required)*
- `bio` *(String)*
- `createdAt` *(Date)*

---

### 2️⃣ Book

Each book:
- Can have one or more authors
- Can be available (`IN`) or borrowed (`OUT`)

**Fields:**

- `title` *(String, required)*
- `isbn` *(String, unique)*
- `authors` *(Array of ObjectId → Author)*
- `status` *(Enum: `IN` | `OUT`, default: `IN`)*
- `borrowedBy` *(ObjectId → Student, nullable)*
- `issuedBy` *(ObjectId → Library Attendant, nullable)*
- `returnDate` *(Date, nullable)*
- `createdAt` *(Date)*

---

### 3️⃣ Student

Library users who can borrow books.

**Fields:**

- `name` *(String, required)*
- `email` *(String, unique)*
- `studentId` *(String, unique)*
- `createdAt` *(Date)*

---

### 4️⃣ Library Attendant

Staff responsible for issuing books.

**Fields:**

- `name` *(String, required)*
- `staffId` *(String, unique)*
- `createdAt` *(Date)*

---

## 🔗 Relationships

- A **Book** has many **Authors**
- A **Book** belongs to one **Student** when borrowed
- A **Book** is issued by one **Library Attendant**

---

## 🔌 API Endpoints

### 📘 Author Endpoints

| Method | Endpoint           | Description            |
|--------|------------------|------------------------|
| POST   | `/api/authors`   | Create a new author    |
| GET    | `/api/authors`   | Get all authors        |
| GET    | `/api/authors/:id` | Get single author   |
| PUT    | `/api/authors/:id` | Update author       |
| DELETE | `/api/authors/:id` | Delete author       |

---

### 📚 Book Endpoints

| Method | Endpoint         | Description              |
|--------|----------------|--------------------------|
| POST   | `/api/books`   | Add a new book           |
| GET    | `/api/books`   | Get all books            |
| GET    | `/api/books/:id` | Get single book       |
| PUT    | `/api/books/:id` | Update book           |
| DELETE | `/api/books/:id` | Delete book           |

---

### 🎓 Student Endpoints

| Method | Endpoint            | Description             |
|--------|-------------------|-------------------------|
| POST   | `/api/students`   | Register a student      |
| GET    | `/api/students`   | Get all students        |
| GET    | `/api/students/:id` | Get single student   |
| PUT    | `/api/students/:id` | Update student       |
| DELETE | `/api/students/:id` | Delete student       |

---

### 👨‍🏫 Library Attendant Endpoints

| Method | Endpoint                | Description               |
|--------|-----------------------|---------------------------|
| POST   | `/api/attendants`     | Add attendant             |
| GET    | `/api/attendants`     | Get all attendants        |
| GET    | `/api/attendants/:id` | Get single attendant      |
| PUT    | `/api/attendants/:id` | Update attendant          |
| DELETE | `/api/attendants/:id` | Delete attendant          |

---

### 🔄 Borrow & Return

| Method | Endpoint                | Description             |
|--------|-----------------------|-------------------------|
| POST   | `/api/books/borrow`   | Borrow a book           |
| POST   | `/api/books/return`   | Return a book           |

---

## 🧠 Future Improvements

- Authentication (JWT)
- Role-based access (Admin / Attendant)
- Pagination & filtering
- Book search functionality
- Fine/penalty system

---

