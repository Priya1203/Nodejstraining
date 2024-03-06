const express = require("express");
const router = express.Router();
const { concatNames } = require("../controllers/users");

// Define user routes
console.log("I M in user file");
router.get("/", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});
router.post("/", concatNames)
// router.post("/", concatNames, (req, res) => {
//   console.log(req.data);
//   return res.send(req.data);
// });

// router.post("/", (req, res) => {
//   console.log(req.body.firstName);
//   let data = {
//     fullName: req.body.firstName + " " + req.body.lastName,
//   };
//   res.send({ data });
// });
module.exports = router;
