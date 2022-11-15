const express = require("express");

const router = express.Router();

router.get("/admin", (req, res) => {
	console.log("GET ADMINS");
	res.send("get admins");
});

router.post("/admin", (req, res) => {
	console.log("ADMIN POST");
	res.send("post");
});

module.exports = router;
