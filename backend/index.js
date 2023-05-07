const express = require("express");
const connectDB = require("./config/mongoConn");
const userRegisterRoute = require("./routes/userRegisrerRoute");

const app = express();
connectDB();
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("hello from express!");
});

app.use("/api/user", userRegisterRoute);

app.listen(5000, () => console.log("Server started at localhost 5000"));
