const express = require("express");
const router = express.Router();
const fs = require("fs");
const { getBooksById } = require("../controllers/books");
const { addBooks } = require("../controllers/books");
// Read JSON file
const jsonData = fs.readFileSync("books.json");
const data = JSON.parse(jsonData);

// Define a route to serve JSON data
router.get("/", (req, res) => {
  res.json(data);
});
router.get("/bookById", getBooksById);

function validateUser(req, res, next) {
  const { title, author, year } = req.body;
  if (!title || !year || !author) {
    return res
      .status(400)
      .json({ error: "Name, author and year are required fields" });
  }

  next();
}
router.post("/addBooks", validateUser, addBooks);

module.exports = router;
