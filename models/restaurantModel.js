// models/restaurantModel.js
import pool from "../db/index.js";

// GET all restaurants
export const getAllRestaurants = async () => {
  const result = await pool.query("SELECT * FROM restaurants");
  return result.rows;
};

// POST add a new restaurant
export const createRestaurant = async ({ name, address, phone }) => {
  const result = await pool.query(
    "INSERT INTO restaurants (name, address, phone) VALUES ($1, $2, $3) RETURNING *",
    [name, address, phone]
  );
  return result.rows[0];
};

// PUT update a restaurant
export const updateRestaurant = async (id, { name, address, phone }) => {
  const result = await pool.query(
    `UPDATE restaurants
     SET name = $1, address = $2, phone = $3
     WHERE id = $4
     RETURNING *`,
    [name, address, phone, id]
  );
  return result.rows[0];
};

// DELETE a restaurant
export const deleteRestaurant = async (id) => {
  const result = await pool.query(
    `DELETE FROM restaurants
     WHERE id = $1
     RETURNING *`,
    [id]
  );
  return result.rows[0];
};
