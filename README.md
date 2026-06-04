# NexCart - MERN E-Commerce Project

NexCart is a full-stack e-commerce web application built with MongoDB, Express, React, Node.js, Redux Toolkit, Cloudinary, and Razorpay. It includes product browsing, user authentication, cart and checkout flow, online payment processing, order management, and an admin dashboard.

## Features

- User registration, login, logout, and cookie-based authentication
- Forgot password and reset password flow using email
- Product listing with search, filters, pagination, ratings, and reviews
- Product details page with image support
- Shopping cart, shipping form, order confirmation, and checkout
- Razorpay payment integration and payment verification
- User profile, profile update, password update, and order history
- Admin dashboard for products, orders, users, roles, and reviews
- Cloudinary integration for image uploads
- Protected routes and role-based access control

## Tech Stack

**Frontend**

- React
- Vite
- Redux Toolkit
- React Router
- Axios
- Material UI
- React Toastify

**Backend**

- Node.js
- Express
- MongoDB
- Mongoose
- JSON Web Token
- bcryptjs
- Cloudinary
- Razorpay
- Nodemailer

## Project Structure

```text
MERN Stack E-Commerce Project/
+-- backend/
|   +-- config/
|   +-- controller/
|   +-- middleware/
|   +-- models/
|   +-- routes/
|   +-- utils/
|   +-- app.js
|   +-- server.js
+-- frontend/
    +-- public/
    +-- src/
    |   +-- Admin/
    |   +-- Cart/
    |   +-- Orders/
    |   +-- components/
    |   +-- features/
    |   +-- pages/
    |   +-- user/
    +-- vite.config.js
```

## Getting Started

### Prerequisites

- Node.js
- npm
- MongoDB database
- Cloudinary account
- Razorpay account
- Email account or SMTP credentials

### Backend Setup

1. Install backend dependencies:

```bash
cd backend
npm install
```

2. Create a `config/config.env` file inside the `backend` folder:

```env
PORT=3000
NODE_ENV=development
CLIENT_URL=http://localhost:5173

MONGO_URI=your_mongodb_connection_string

JWT_SECRET_KEY=your_jwt_secret_key
JWT_EXPIRE=7d
EXPIRE_COOKIE=7

CLOUDINARY_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret

SMTP_SERVICE=gmail
SMTP_MAIL=your_email@example.com
SMTP_PASSWORD=your_email_app_password

RAZORPAY_API_KEY=your_razorpay_key_id
RAZORPAY_API_SECRET=your_razorpay_key_secret
```

3. Start the backend server:

```bash
npm run dev
```

The backend runs on `http://localhost:3000`.

### Frontend Setup

1. Install frontend dependencies:

```bash
cd frontend
npm install
```

2. Create a `.env` file inside the `frontend` folder:

```env
VITE_API_URL=http://localhost:3000/api/v1
```

3. Start the frontend development server:

```bash
npm run dev
```

The frontend runs on `http://localhost:5173`.

## Available Scripts

### Backend

```bash
npm run dev
```

Starts the backend using nodemon.

```bash
npm start
```

Starts the backend using Node.js.

### Frontend

```bash
npm run dev
```

Starts the Vite development server.

```bash
npm run build
```

Builds the frontend for production.

```bash
npm run preview
```

Previews the production build locally.

```bash
npm run lint
```

Runs ESLint on the frontend source code.

## API Overview

All backend routes are prefixed with:

```text
/api/v1
```

Main route groups:

- Products: product listing, details, reviews, and admin product management
- Users: authentication, profile, password reset, and admin user management
- Orders: checkout orders, user orders, and admin order management
- Payments: Razorpay payment processing and verification

## Deployment Notes

- Build the frontend with `npm run build` inside the `frontend` folder.
- Set all backend environment variables on your hosting platform.
- Set `CLIENT_URL` to your deployed frontend URL.
- Set `VITE_API_URL` to your deployed backend API URL ending with `/api/v1`.
- Make sure cookies, CORS, and production environment settings match your deployment domain.

## Author

Created as a MERN stack final project.
