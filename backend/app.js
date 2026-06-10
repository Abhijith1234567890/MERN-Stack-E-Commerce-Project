import express from "express"
import product from "./routes/productRoutes.js"
import user from "./routes/userRoutes.js"
import order from "./routes/orderRoutes.js"
import payment from "./routes/paymentRoute.js"
import errorHandleMiddleware from "./middleware/error.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import dotenv from "dotenv"

const app = express()

app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true,
}))

// Middleware
app.use(express.json())
app.use(cookieParser())

// Route
app.use("/api/v1", product)
app.use("/api/v1", user)
app.use("/api/v1", order)
app.use("/api/v1", payment)

app.use(errorHandleMiddleware)

export default app