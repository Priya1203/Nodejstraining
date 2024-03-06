const fs = require("fs");
const jsonData = fs.readFileSync("books.json");
const data = JSON.parse(jsonData);
const getBooksById = async (req, res) => {
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
  };

  const addBooks = async (req, res) => {
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
  };
  module.exports = {
    getBooksById,
    addBooks
  };
  