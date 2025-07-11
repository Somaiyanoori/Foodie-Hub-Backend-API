import pool from "../db/index.js";

// Get all menu items for a specific restaurant
export const getMenuItemsByRestaurant = async (restaurantId) => {
  const result = await pool.query(
    "SELECT * FROM menu_items WHERE restaurant_id = $1",
    [restaurantId]
  );
  return result.rows;
};

// Add new menu item
export const addMenuItem = async ({
  name,
  price,
  available = true,
  restaurant_id,
}) => {
  const result = await pool.query(
    `INSERT INTO menu_items (name, price, available, restaurant_id)
     VALUES ($1, $2, $3, $4)
     RETURNING *`,
    [name, price, available, restaurant_id]
  );
  return result.rows[0];
};

// Update it
export const updateMenuItem = async (id, { name, price, available }) => {
  const result = await pool.query(
    `UPDATE menu_items
     SET name = $1, price = $2, available = $3
     WHERE id = $4
     RETURNING *`,
    [name, price, available, id]
  );
  return result.rows[0];
};

// Delete it
export const deleteMenuItem = async (id) => {
  const result = await pool.query(
    `DELETE FROM menu_items
     WHERE id = $1
     RETURNING *`,
    [id]
  );
  return result.rows[0];
};

// Set availability (true/false)
export const setMenuItemAvailable = async (id, available) => {
  const result = await pool.query(
    `UPDATE menu_items
     SET available = $1
     WHERE id = $2
     RETURNING *`,
    [available, id]
  );
  return result.rows[0];
};
