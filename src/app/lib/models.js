import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
    },
    img: {
      type: String,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const productSchema = new Schema(
  {
    title: {
      type: String,
      unique: true,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
      min: 0,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    img: {
      type: String,
    },
    color: {
      type: String,
    },
    size: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Product = mongoose.models.Product || mongoose.model("Product", productSchema);
