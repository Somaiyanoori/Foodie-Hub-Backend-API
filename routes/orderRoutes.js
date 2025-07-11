import express from "express";
import {
  getAllOrdersController,
  getCustomerOrdersController,
  createOrderController,
  updateOrderStatusController,
  deleteOrderController,
} from "../controllers/orderController.js";

const router = express.Router();

// create order
router.post("/", createOrderController);

// all order
router.get("/", getAllOrdersController);

// get order by customer
router.get("/customer/:customerId", getCustomerOrdersController);

// statues
router.patch("/:id/status", updateOrderStatusController);

// delete order
router.delete("/:id", deleteOrderController);

export default router;
