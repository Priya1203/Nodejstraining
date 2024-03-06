const express = require('express');
const router = express.Router();

// Define product routes
router.get('/', (req, res) => {
  res.send('Product route');
});

module.exports = router;
