const express = require("express");

const router = express.Router();

router.post("/login", (req, res) => {
	console.log(req.body);
	res.send("LOGGING IN");
});

router.post("/signup", (req, res) => {
	console.log(req.body);
	res.send("SIGNING UP");
});

module.exports = router;
