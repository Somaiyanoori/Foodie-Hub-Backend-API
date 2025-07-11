# Foodie Hub – Backend API

Foodie Hub is a public food ordering system built with Node.js, Express, and PostgreSQL. It allows users to browse restaurants, place food orders, and track order status — no login required!

---

## Features

### Restaurant Management

- Add new restaurants
- View all restaurants
- Edit restaurant details
- Delete restaurants

### Menu Management

- Add menu items to a restaurant
- Edit or remove menu items
- List all menu items for a restaurant
- Mark items as available/unavailable

### Customer Management

- Add new customers (name & phone only)
- View all customers
- Edit or delete customer info

### Order System

- Place an order with:
  - Selected menu items
  - Quantity for each item
  - Restaurant selection
- View all orders
- View orders by customer
- Update order status (e.g., pending → completed)
- Delete or cancel orders

---

## Technologies

- Node.js + Express
- PostgreSQL
- pg (PostgreSQL client)
- dotenv for environment config
- MVC folder structure

---

## 📂 Project Structure

.
├── controllers/
│ ├── restaurantController.js
│ ├── menuController.js
│ ├── orderController.js
│ └── customerController.js
│
├── models/
│ ├── restaurantModel.js
│ ├── menuModel.js
│ ├── orderModel.js
│ └── customerModel.js
│
├── routes/
│ ├── restaurantRoutes.js
│ ├── menuRoutes.js
│ ├── orderRoutes.js
│ └── customerRoutes.js
│
├── db.js
├── server.js
├── .env
└── README.md

---

## ⚙️ Getting Started

### 1. Clone the repo

git clone https://github.com/Somaiyanoori/Foodie-Hub-Backend-API.git
cd foodie-hub-backend

### 2. Install dependencies

npm install

### 3. Setup the PostgreSQL database

Import the SQL schema:
psql -U postgres -d foodie-hub -f schema.sql

### 4. Start the server

npm start

Server will run at: http://localhost:3008

---

## 🧪 API Endpoints

### 📦 Restaurants

GET /restaurants
POST /restaurants
PUT /restaurants/:id
DELETE /restaurants/:id

### 🍕 Menu Items

GET /menu-items/restaurant/:restaurantId
POST /menu-items
PUT /menu-items/:id
PATCH /menu-items/:id/availability
DELETE /menu-items/:id

### 👤 Customers

GET /customers
POST /customers
PUT /customers/:id
DELETE /customers/:id

### 🛒 Orders

GET /orders
POST /orders
GET /orders/customer/:customerId
PATCH /orders/:id/status
DELETE /orders/:id

---

## Notes

- No authentication or login system is required.
- No ORMs (like Sequelize) were used — raw SQL only.
- Designed using clean MVC architecture.

---

## 👩‍💻 Author

Made with Somaiya Noori  
A passionate full stack learner building real-world projects with Node.js & PostgreSQL.
