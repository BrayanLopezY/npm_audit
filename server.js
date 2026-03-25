const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const audioRoute = require("./routes/audio");

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(express.static("public"));

app.use("/api/audio", audioRoute);

app.listen(3000, () => {
    console.log("Servidor en puerto 3000");
});
