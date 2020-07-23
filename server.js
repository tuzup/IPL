const express = require("express");
//const fs = require("fs");
//const https = require("https");
const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API Running"));

// Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));

/* code dedicated to https

https
  .createServer(
    {
      key: fs.readFileSync("./ssl/server.key"),
      cert: fs.readFileSync("./ssl/server.cert"),
    },
    app
  )
  .listen(5000, function () {
    console.log(
      "Example app listening on port 3000! Go to https://localhost:3000/"
    );
  });*/

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
