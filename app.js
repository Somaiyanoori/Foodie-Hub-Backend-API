import express from "express";
import dotenv from "dotenv";
import restaurantRoutes from "./routes/restaurantRoutes.js";
import menuRoutes from "./routes/menuRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import customerRoutes from "./routes/customerRoutes.js";

dotenv.config();
//EXPRESS
const app = express();
const PORT = process.env.PORT || 3008;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Foodie Hub API is running...");
});

app.use("/api/restaurants", restaurantRoutes);
app.use("/api", menuRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/customers", customerRoutes);

app.listen(PORT, () => {
  console.log(`server is running on this PORT ${PORT}`);
});
