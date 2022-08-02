import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import User from "./models/user.model";
const app = express();
const port = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/rick-and-morty-auth");

app.post("/api/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    await User.create({
      name: name,
      email: email,
      password: password,
    });
    return res.json({ status: "ok" });
  } catch (error) {
    return res.json({ status: "error" });
  }
});

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({
      email: email,
      password: password,
    });

    if (user) {
      return res.json({ status: "ok", user: true });
    }

    return res.json({ status: "error", user: false });
  } catch (error) {
    return res.json({ status: "error", description: error });
  }
});

app.listen(port, () =>
  console.log("API is running on http://localhost:8080/api")
);
