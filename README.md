# 🌍 LocalVibe

A full-stack MERN application for discovering, creating, and exploring hyperlocal events.

## 🚀 Live Demo

Frontend:
https://localvibe-nine.vercel.app/

Backend:
https://localvibe-1c6t.onrender.com/

---

# 📖 Overview

LocalVibe is a hyperlocal event discovery platform that enables users to discover events happening nearby, create their own events, and explore them on an interactive map.

The application uses browser geolocation and MongoDB geospatial queries to recommend nearby events.

---

# ✨ Features

## Authentication

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Logout

## Event Management

- Create Event
- View All Events
- Update Event
- Delete Event

## Maps

- Interactive Leaflet Map
- Browser Geolocation
- Nearby Event Search

## UI

- Responsive Design
- Hero Landing Page
- Event Cards
- Profile Page

---

# 🛠 Tech Stack

## Frontend

- React.js
- React Router
- Axios
- HTML5
- CSS3
- JavaScript

## Backend

- Node.js
- Express.js

## Database

- MongoDB Atlas
- Mongoose

## Authentication

- JWT
- bcryptjs

## Maps

- Leaflet
- React Leaflet

## Deployment

- Vercel
- Render

---

# 📂 Folder Structure

```
LocalVibe
│
├── client
│   ├── src
│   ├── assets
│   ├── components
│   ├── pages
│   └── services
│
├── server
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── config
│   └── server.js
│
└── README.md
```

---

# ⚙ Installation

## Clone Repository

```bash
git clone <repository-url>
```

## Backend

```bash
cd server
npm install
npm run dev
```

## Frontend

```bash
cd client
npm install
npm run dev
```

---

# 🌐 Deployment

Frontend:
Vercel

Backend:
Render

Database:
MongoDB Atlas

---

# 📡 API Endpoints

## Authentication

POST /api/auth/register

POST /api/auth/login

## Events

GET /api/events

POST /api/events

GET /api/events/:id

PUT /api/events/:id

DELETE /api/events/:id

GET /api/events/nearby

---

# 🔒 Authentication

Passwords are securely hashed using bcryptjs.

JWT tokens are generated during login and used to access protected routes.

---

# 🗺 Geolocation

The application requests browser location permission.

MongoDB geospatial queries are used to find nearby events within a specified radius.

Leaflet displays the results on an interactive map.

---

# 📸 Screenshots

Add screenshots of:

- Home
- Register
- Login
- Create Event
- Event List
- Nearby Events
- Interactive Map
- Profile

---

# 🚀 Future Enhancements

- RSVP System
- AI Event Recommendations
- Featured Events
- Notifications
- Reviews & Ratings
- Address Autocomplete
- Search & Filters

---

# 👩‍💻 Developer

**Hasini Panjala**

Built as part of the Persevex MERN Stack Internship Project. During development, official documentation, online learning resources, and AI-assisted tools were used for learning, debugging, and implementation support.