import express from "express";
//my function that i create in controller
import {
  getRestaurants,
  addRestaurant,
  editRestaurant,
  removeRestaurant,
} from "../controllers/restaurantController.js";

const router = express.Router();
//all show restaurant
router.get("/", getRestaurants);
//you can add restaurant
router.post("/", addRestaurant);
//you can edited it
router.put("/:id", editRestaurant);
//also you can deleted
router.delete("/:id", removeRestaurant);

export default router;
