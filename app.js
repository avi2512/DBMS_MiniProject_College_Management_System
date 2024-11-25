const express = require("express");
const connectDB = require("./config/db"); // Import the connectDB function
const collegeRoutes = require("./routes/collegeRoutes");

const app = express();

// Connect to MongoDB
connectDB();

app.use(express.json());

// Use the routes for the app
app.use("/api", collegeRoutes);

const port = process.env.PORT || 5000;
app.get('/', (req, res) => {
    res.send("Express App, now working");
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});