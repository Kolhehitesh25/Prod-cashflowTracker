const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDb = require("./config/connectDB");
const path = require("path");

//config dotenv
dotenv.config();

connectDb();

//rest object
const app = express();

//middleware
app.use(morgan("dev")); //identity res,req in trml
app.use(express.json());
app.use(cors());

//routes

app.use("/api/v1/users", require("./routes/userRoute"));

//trans routes

app.use("/api/v1/transactions", require("./routes/transactionRoute"));

//static files ko read krna he
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//port
const PORT = 8080 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
