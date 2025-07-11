import express from "express";
import {
  getAllCustomersController,
  addCustomerController,
  updateCustomerController,
  deleteCustomerController,
} from "../controllers/customerController.js";

const router = express.Router();

//all customer
router.get("/", getAllCustomersController);

// add
router.post("/", addCustomerController);

// update
router.put("/:id", updateCustomerController);

// delete
router.delete("/:id", deleteCustomerController);

export default router;
