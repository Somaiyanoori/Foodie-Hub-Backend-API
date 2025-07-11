import pool from "../db/index.js";
//get all order
export const getAllOrders = async () => {
  const result = await pool.query("SELECT * FROM orders");
  return result.rows;
};

//order by customer
export const getOrdersByCustomer = async (customerId) => {
  const result = await pool.query(
    "SELECT * FROM orders WHERE customer_id = $1",
    [customerId]
  );
  return result.rows;
};

//create order
export const createOrder = async ({ customer_id, restaurant_id, items }) => {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");

    const orderResult = await client.query(
      `INSERT INTO orders (customer_id, restaurant_id)
       VALUES ($1, $2)
       RETURNING *`,
      [customer_id, restaurant_id]
    );

    const orderId = orderResult.rows[0].id;
    // add item
    for (let item of items) {
      await client.query(
        `INSERT INTO order_items (order_id, menu_item_id, quantity)
         VALUES ($1, $2, $3)`,
        [orderId, item.menu_item_id, item.quantity]
      );
    }

    await client.query("COMMIT");
    return orderResult.rows[0];
  } catch (err) {
    await client.query("ROLLBACK");
    throw err;
  } finally {
    client.release();
  }
};

//update
export const updateOrderStatus = async (id, status) => {
  const result = await pool.query(
    `UPDATE orders
     SET status = $1
     WHERE id = $2
     RETURNING *`,
    [status, id]
  );
  return result.rows[0];
};

//cancel order
export const deleteOrder = async (id) => {
  const result = await pool.query(
    "DELETE FROM orders WHERE id = $1 RETURNING *",
    [id]
  );
  return result.rows[0];
};
