import {
  getAllRestaurants,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
} from "../models/restaurantModel.js";

// GET restaurants
export const getRestaurants = async (req, res) => {
  try {
    const restaurants = await getAllRestaurants();
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch restaurants" });
  }
};

// POST restaurants
export const addRestaurant = async (req, res) => {
  try {
    const { name, address, phone } = req.body;
    const newRestaurant = await createRestaurant({ name, address, phone });
    res.status(201).json(newRestaurant);
  } catch (error) {
    res.status(500).json({ error: "Failed to create restaurant" });
  }
};

// PUT restaurants
export const editRestaurant = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, address, phone } = req.body;
    const updated = await updateRestaurant(id, { name, address, phone });

    if (!updated) {
      return res.status(404).json({ error: "Restaurant not found" });
    }

    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: "Failed to update restaurant" });
  }
};

// DELETE restaurants
export const removeRestaurant = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await deleteRestaurant(id);

    if (!deleted) {
      return res.status(404).json({ error: "Restaurant not found" });
    }

    res.json({ message: "Restaurant deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete restaurant" });
  }
};
