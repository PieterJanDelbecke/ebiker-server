const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

const loginRoutes = require("./routes/login");
const adminRoutes = require("./routes/admin");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(loginRoutes);
app.use(adminRoutes);

app.listen(port, () => {
	console.log(`App Listening On Port ${port}`);
});
