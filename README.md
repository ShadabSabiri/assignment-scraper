# MERN Scraper Assignment

This is a full-stack MERN application that scrapes top stories from Hacker News, stores them in MongoDB, and provides authentication and bookmarking functionality.

---

## Features

Backend:
- JWT authentication (register/login)
- Web scraper for Hacker News top stories
- REST APIs for stories
- Bookmark/unbookmark functionality
- MongoDB integration
- Pagination support

Frontend:
- React application with routing
- Login and registration pages
- Story listing with pagination
- Bookmark functionality
- Persistent login using localStorage
- Global state management using Context API

---

## Project Structure

Backend:
src/
  controllers/
  models/
  routes/
  middleware/
  utils/
  server.js

Frontend:
src/
  components/
  pages/
  context/
  services/

---

## Tech Stack

Backend:
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Axios
- Cheerio
- dotenv

Frontend:
- React.js
- React Router DOM
- Context API
- Axios
- Tailwind CSS
- Vite

---

## Setup Instructions

### 1. Clone the repository

git clone [<repo-url>](https://github.com/ShadabSabiri/assignment-scraper.git)


---

### 2. Backend setup

cd backend
npm install

Create a .env file inside backend:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Run backend:

npm run dev

Backend runs on:
http://localhost:5000

---

### 3. Frontend setup

cd frontend
npm install

Create a .env file inside frontend:

VITE_API_URL=http://localhost:5000/api

Run frontend:

npm run dev

Frontend runs on:
http://localhost:5173

---

## API Endpoints

Auth:
POST /api/auth/register
POST /api/auth/login

Stories:
GET /api/stories?page=1&limit=10
GET /api/stories/:id
POST /api/stories/:id/bookmark

Scraper:
POST /api/scrape

---

## Scraper Details

- Source: https://news.ycombinator.com
- Scrapes top 10 stories
- Stores:
  - title
  - url
  - points
  - author
  - posted time

Scraper runs automatically on server start and can also be triggered via API.

---

## Authentication Flow

- JWT token stored in localStorage
- Context API manages user state
- Protected routes for bookmark feature
- Token sent via axios headers

---

## Bookmark Feature

- Users can bookmark/unbookmark stories
- Stored in MongoDB under user collection
- Persists after refresh and login
