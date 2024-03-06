const express = require('express');
const router = express.Router();
console.log("I M in index file");
const userRoutes = require('./userRoutes');
const booksRoutes = require('./booksRoutes');
// Define user routes
router.use('/user', userRoutes )
router.use('/books', booksRoutes )
// router.get('/user', userRoutes )

module.exports = router;