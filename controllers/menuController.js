import {
  getMenuItemsByRestaurant,
  addMenuItem,
  updateMenuItem,
  deleteMenuItem,
  setMenuItemAvailable,
} from "../models/menuModel.js";
//get menuItem from one restaurant
export const getMenu = async (req, res) => {
  try {
    const { restaurantId } = req.params;
    const items = await getMenuItemsByRestaurant(restaurantId);
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch menu items" });
  }
};
//add
export const createMenuItem = async (req, res) => {
  try {
    const { name, price, available, restaurant_id } = req.body;
    const newItem = await addMenuItem({
      name,
      price,
      available,
      restaurant_id,
    });
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: "Failed to create menu item" });
  }
};
// update
export const editMenuItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, available } = req.body;
    const updated = await updateMenuItem(id, { name, price, available });

    if (!updated) {
      return res.status(404).json({ error: "Menu item not found" });
    }

    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: "Failed to update menu item" });
  }
};
//delete
export const removeMenuItem = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await deleteMenuItem(id);

    if (!deleted) {
      return res.status(404).json({ error: "Menu item not found" });
    }

    res.json({ message: "Menu item deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete menu item" });
  }
};

// change states
export const changeAvailability = async (req, res) => {
  try {
    const { id } = req.params;
    const { available } = req.body;
    const updated = await setMenuItemAvailable(id, available);

    if (!updated) {
      return res.status(404).json({ error: "Menu item not found" });
    }

    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: "Failed to update availability" });
  }
};
