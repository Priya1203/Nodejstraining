// Import required modules
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// Import Routes
// const userRoutes = require('./routes/userRoutes');
// const productRoutes = require('./routes/productRoutes');
const indexRoute = require("./routes/");
// Create an instance of Express
const app = express();

// Middleware setup
app.use(bodyParser.json()); // Parse incoming requests with JSON payloads
app.use(bodyParser.urlencoded({ extended: true })); // Parse incoming requests with URL-encoded payloads
app.use(cors()); // Enable Cross-Origin Resource Sharing

// Use routes
// app.use('/users', userRoutes); // Mount the user routes at /users
// app.use('/products', productRoutes); // Mount the product routes at /products
app.use("/api", indexRoute);
// Define routes
app.get("/", (req, res) => {
  res.send("Hello, World!"); // Basic route returning a message
});

// Start the server
const port = process.env.PORT || 3000; // Use environment port or 3000 if not specified
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
