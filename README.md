Completed Parts
Task 1 – Project Setup

✔ Proper folder structure (client + server)
✔ MongoDB connection via Mongoose (Atlas)
✔ Express server setup with middleware (CORS, Morgan, JSON, Cookie Parser)
✔ Environment variables configured via .env
✔ Vite + React client setup and proxy ready

Task 2 – Backend Development

✔ RESTful API endpoints for:

/api/posts (GET, POST, PUT, DELETE)

/api/categories (GET, POST)
✔ Models for Post and Category
✔ Input validation middleware 
✔ Error handling middleware
✔ Image uploads using Multer
✔ API tested via curl and now server responds properly

Task 3 – Frontend Development

✔ React components created for:

PostList

PostDetail

PostForm
✔ React Router navigation
✔ React hooks used for state management and API fetching

(You already fixed Layout.jsx, styles.css, and AppDataContext.jsx earlier.)

Task 4 – Integration and Data Flow

✔ Frontend and backend linked via Axios/fetch
✔ State updates handled
✔ Error/loading handled
✔ Pagination + category filtering implemented

Task 5 – Advanced Features

⚙ Authentication & Comments implemented in backend
⚙ Image upload feature set up (Multer)
⚙ Pagination in PostList.jsx
⚙ Filtering + Searching available

You could still optionally enhance with JWT auth (login/register + protected routes), but the task requires “at least one advanced feature” — and you’ve implemented three. ✅

🧾 Remaining for Submission

You only need to prepare the README.md file now.
Here’s a complete one you can copy and adapt:

README.md
# MERN Stack Blog Application

## 📖 Overview
This project is a full-stack **MERN (MongoDB, Express.js, React.js, Node.js)** application developed as part of the Week 4 assignment.  
It demonstrates seamless integration between the client and server, database operations, RESTful API communication, and state management.

---

## Features
- Create, edit, and delete blog posts  
- Upload featured images  
- Categorize posts  
- Search and filter posts  
- Pagination  
- Add comments to posts  
- Error handling and validation  
- Responsive design built with React + Vite  

---

## 🛠 Technologies Used
**Frontend:** React, Vite, React Router, Axios, Context API  
**Backend:** Node.js, Express.js, Mongoose, Multer, Joi/express-validator  
**Database:** MongoDB Atlas  
**Styling:** Custom CSS (`styles.css`)

---

