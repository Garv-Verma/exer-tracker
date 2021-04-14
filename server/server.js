const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

const URI = process.env.DB_URI;
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

mongoose.connection.once("open", () => {
  console.log("connection to db made successfully");
});

app.use("/users", require("./routes/userRoutes"));
app.use("/exercises", require("./routes/exerciseRoutes"));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`server is running on PORT:${PORT}`);
});
