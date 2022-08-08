import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import {
  registerController,
  loginController,
  findUserController,
} from "./controllers/registerController/userControllers";

const app = express();
const port = process.env.PORT || 8080;
const APP_SECRET = process.env.SECRET || "tesst123";
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://mongodb:27018/rick-and-morty-auth");

app.post("/api/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const response = await registerController(name, email, password);
    if (response.status === "ok") {
      return res.json({ status: "ok" });
    }
    return res.json({ status: "error", description: response.description });
  } catch (error) {
    return res.json({ status: "error" });
  }
});

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const isUser = await loginController(email, password);

    if (isUser) {
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
      const user = await findUserController(email);

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
