const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

// Routes
const contactRoutes = require("./routes/contactRoutes");
const careerRoutes = require("./routes/careerRoutes");
const adminLoginRoutes = require("./routes/adminRoutes");
const adminContentRoutes = require("./routes/adminContentRoutes");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/api/contact", contactRoutes);
app.use("/api/career", careerRoutes);
app.use("/api/admin", adminLoginRoutes);          // login
app.use("/api/admin/content", adminContentRoutes); // content CRUD


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
