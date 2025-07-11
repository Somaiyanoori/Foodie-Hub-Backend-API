import {
  getAllCustomers,
  addCustomer,
  updateCustomer,
  deleteCustomer,
} from "../models/customerModel.js";

// all customer
export const getAllCustomersController = async (req, res) => {
  try {
    const customers = await getAllCustomers();
    res.json(customers);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch customers" });
  }
};

// add customer
export const addCustomerController = async (req, res) => {
  try {
    const { name, phone } = req.body;
    if (!name || !phone) {
      return res.status(400).json({ error: "Name and phone are required" });
    }

    const newCustomer = await addCustomer({ name, phone });
    res.status(201).json(newCustomer);
  } catch (err) {
    res.status(500).json({ error: "Failed to add customer" });
  }
};

// updated
export const updateCustomerController = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, phone } = req.body;
    const updated = await updateCustomer(id, { name, phone });

    if (!updated) return res.status(404).json({ error: "Customer not found" });

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Failed to update customer" });
  }
};
// delete customer
export const deleteCustomerController = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await deleteCustomer(id);

    if (!deleted) return res.status(404).json({ error: "Customer not found" });

    res.json({ message: "Customer deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete customer" });
  }
};
