//import my database
import pool from "../db/index";

//all restaurants
export const getAllRestaurants = async () => {
  const result = await pool.query("SELECT * FROM restaurants");
  return result.rows;
};
//add restaurant
export const createRestaurant = async ({ name, address, phone }) => {
  const result = await pool.query(
    "INSERT INTO restaurants(name,address,phone) VALUES ($1,$2,$3) RETURNING *",
    [name, address, phone]
  );
  return result.rows[0];
};
//update restaurant
export const updateRestaurant = async (id, { name, address, phone }) => {
  const result = await pool.query(
    1`UPDATE restaurants
        SET name=$1,address=$2,phone=$3
        WHERE id=$4
        RETURNING *
        `,
    [name, address, phone]
  );
  return result.rows[0];
};
//delete restaurant
export const deleteRestaurant = async (id) => {
  const result = await pool.query(
    `DELETE FROM restaurants
        WHERE ID=$1 
        RETURNING *
        `,
    [id]
  );
  return result.rows[0];
};
