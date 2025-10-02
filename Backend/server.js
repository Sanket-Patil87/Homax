// import express from "express";
// import connectDB from "./config/db.js";
// import dotenv from "dotenv";
// import cors from "cors";
// import authRoutes from "./routes/auth.js";

// dotenv.config();
// connectDB();

// const app = express();
// app.use(cors({ origin: "http://localhost:5173" })); // Allow frontend origin
// app.use(express.json());

// app.use("/api/auth", authRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import bookingRoutes from "./routes/booking.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json()); // ✅ parse JSON

app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
