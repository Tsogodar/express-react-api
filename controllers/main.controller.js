const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send('<h1>API used in React learning projects</h1>');
});

module.exports = router;
