const express = require("express");

const router = express.Router();

router.get("/signin", (req, res) => {
	console.log("SIGN IN GET");
	res.send("GET SIGN IN");
});

router.post("/signin", (req, res) => {
	console.log(req.body);
	res.send("SIGN IN POST");
});

router.get("/signup", (req, res) => {
	console.log("SIGN UP GET");
	res.send("GET SIGN UP");
});

router.post("/signup", (req, res) => {
	console.log(req.body);
	res.send("SIGN UP POST");
});

module.exports = router;
