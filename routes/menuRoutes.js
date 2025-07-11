import express from "express";
import {
  getMenu,
  createMenuItem,
  editMenuItem,
  removeMenuItem,
  changeAvailability,
} from "../controllers/menuController.js";

const router = express.Router();

//  all menu items
router.get("/restaurants/:id/menu", getMenu);

// new menu item
router.post("/restaurants/:id/menu", createMenuItem);

// update
router.put("/menu/:id", editMenuItem);

// DELETE
router.delete("/menu/:id", removeMenuItem);

// PATCH
router.patch("/menu/:id/availability", changeAvailability);

export default router;
