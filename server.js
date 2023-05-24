const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const path = require("path");
const connectDb = require("./config/connectDb");

// config dotenv file
dotenv.config();
// database call
connectDb();
//rest object
const app = express();
//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
//routes
//user routes
// app.get("/", (req,res) => {res.send("<h1>Hello from server</h1>");});
app.use("/api/v1/users", require("./routes/userRoute"));
//transection routes
app.use("/api/v1/transections", require("./routes/transectionRoutes"));

//static files
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//port
const PORT = 8080 || process.env.PORT;

//listen server
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
