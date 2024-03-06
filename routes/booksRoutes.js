const express = require("express");
const router = express.Router();
const fs = require("fs");
// Read JSON file
const jsonData = fs.readFileSync("books.json");
const data = JSON.parse(jsonData);

// Define a route to serve JSON data
router.get("/", (req, res) => {
  res.json(data);
});
router.get("/bookById", (req, res) => {
  try {
    if (req?.query?.id) {
      let newData = data.filter((item) => item.id == req.query.id);
      if (!newData.length) {
        return res.send("Book id doesn't exists!!");
      }
      res.json(newData);
    } else {
      return res.send("Book id is required");
    }
  } catch (error) {
    return res.send("Internal Server Error");
  }
});
function validateUser(req, res, next) {
    const { title, author ,year} = req.body;
    if (!title || !year || !author) {
      return res.status(400).json({ error: 'Name, author and year are required fields' });
    }
  
    next();
  }
router.post("/addBooks", validateUser, (req, res) => {
  try {
    if (req.body.title && req.body.author && req.body.year) {
      let newData = {
        id: data.length + 1,
        ...req.body,
      };
      data.push(newData);
      fs.writeFile("books.json", JSON.stringify(data), (err) => {
        if (err) {
          console.error("Error writing JSON file:", err);
          res.status(500).send("Error writing JSON file");
          return;
        }
        res.status(201).json(data);
      });
      res.json(data);
    } else {
    }
  } catch (error) {
    return res.send("Internal Server Error");
  }

  //   let data = {
  //     fullName: req.body.firstName + " " + req.body.lastName,
  //   };
  //   res.send({ data });
});

module.exports = router;
