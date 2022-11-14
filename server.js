const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

const loginRoutes = require("./routes/login");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(loginRoutes);

app.listen(port, () => {
	console.log(`App Listening On Port ${port}`);
});
