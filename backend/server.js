import app from "./app.js"
import dotenv from "dotenv"
import { connectMongoDatabase } from "./config/db.js"
import { v2 as cloudinary } from "cloudinary"
import Razorpay from "razorpay"

connectMongoDatabase()

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})

const PORT = process.env.PORT || 3000

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET
});

const server = app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
})