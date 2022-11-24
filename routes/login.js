const express = require("express");

const router = express.Router();

router.get("/signin", (req, res) => {
	console.log("LOGIN GET");
	res.send("GET LOGGINS");
});

router.post("/signin", (req, res) => {
	console.log(req.body);
	res.send("LOGIN POST");
});

router.post("/signup", (req, res) => {
	console.log(req.body);
	res.send("SIGNUP POST");
});

module.exports = router;
