import mongoose from "mongoose";

const User = new mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    logged: { type: Boolean },
  },
  { collection: "user-data" }
);

const model = mongoose.model("UserData", User);

export default model;
