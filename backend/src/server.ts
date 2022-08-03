import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import User from "./models/user.model";
import jwt from "jsonwebtoken";
const app = express();
const port = process.env.PORT || 8080;
const APP_SECRET = process.env.SECRET || "tesst123";
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
      const token = jwt.sign(
        {
          email: email,
        },
        APP_SECRET
      );
      return res.json({ loginStatus: "ok", user: token });
    }

    return res.json({ loginStatus: "error", user: false });
  } catch (error) {
    return res.json({ loginStatus: "error", description: error });
  }
});

app.post("/api/login-check", async (req, res) => {
  const { token } = req.body;
  try {
    /*
     * I made the decision of disable type checking here due
     * to it seems an error in "jsonwebtoken" library typings
     */
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { email } = jwt.verify(token, APP_SECRET);

    if (email) {
      const user = await User.findOne({
        email: email,
      });

      if (user) {
        return res.json({ loginStatus: "ok", user: token });
      }
    }

    return res.json({ loginStatus: "error", user: false });
  } catch (error) {
    return res.json({ loginStatus: "error", description: error });
  }
});

app.listen(port, () =>
  console.log("API is running on http://localhost:8080/api")
);
