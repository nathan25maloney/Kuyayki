const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const flash = require("connect-flash");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("assets"));

app.use(cookieParser());
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(cors());
app.use(flash());

app.listen(PORT, function() {
    console.log(`App listening on http://localhost:${PORT}`);
});
