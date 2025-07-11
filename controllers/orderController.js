import {
  getAllOrders,
  getOrdersByCustomer,
  createOrder,
  updateOrderStatus,
  deleteOrder,
} from "../models/orderModel.js";

//create order
export const createOrderController = async (req, res) => {
  try {
    const { customer_id, restaurant_id, items } = req.body;
    if (!items || items.length === 0) {
      return res
        .status(400)
        .json({ error: "Order must contain at least one item" });
    }

    const newOrder = await createOrder({ customer_id, restaurant_id, items });
    res.status(201).json(newOrder);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to create order", detail: err.message });
  }
};

//all order
export const getAllOrdersController = async (req, res) => {
  try {
    const orders = await getAllOrders();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
};
// order by customer
export const getCustomerOrdersController = async (req, res) => {
  try {
    const { customerId } = req.params;
    const orders = await getOrdersByCustomer(customerId);
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch customer orders" });
  }
};

// change status
export const updateOrderStatusController = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const updated = await updateOrderStatus(id, status);

    if (!updated) return res.status(404).json({ error: "Order not found" });

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Failed to update order status" });
  }
};

// delete order
export const deleteOrderController = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await deleteOrder(id);

    if (!deleted) return res.status(404).json({ error: "Order not found" });

    res.json({ message: "Order cancelled/deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete order" });
  }
};
