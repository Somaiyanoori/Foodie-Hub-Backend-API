import pool from "../db/index.js";

// list of  customer
export const getAllCustomers = async () => {
  const result = await pool.query("SELECT * FROM customers");
  return result.rows;
};

// add customer
export const addCustomer = async ({ name, phone }) => {
  const result = await pool.query(
    `INSERT INTO customers (name, phone)
     VALUES ($1, $2)
     RETURNING *`,
    [name, phone]
  );
  return result.rows[0];
};

// update
export const updateCustomer = async (id, { name, phone }) => {
  const result = await pool.query(
    `UPDATE customers
     SET name = $1, phone = $2
     WHERE id = $3
     RETURNING *`,
    [name, phone, id]
  );
  return result.rows[0];
};

// delete
export const deleteCustomer = async (id) => {
  const result = await pool.query(
    `DELETE FROM customers
     WHERE id = $1
     RETURNING *`,
    [id]
  );
  return result.rows[0];
};
