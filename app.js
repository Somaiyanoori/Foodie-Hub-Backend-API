import express from "express";
import dotenv from "dotenv";
import restaurantRoutes from "./routes/restaurantRoutes.js";
dotenv.config();
//EXPRESS
const app = express();
const PORT = process.env.PORT || 3008;

app.get("/", (req, res) => {
  res.send("Foodie Hub API is running...");
});

app.listen(PORT, () => {
  console.log(`server is running on this PORT ${PORT}`);
});
