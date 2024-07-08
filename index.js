require("dotenv").config();
const express = require("express");
const app = express();
const PORT = Number(process.env.PORT) || 8000;

const indexRouter = require("./routes");

app.use(express.json());
app.use("/", indexRouter);

app.use((err, req, res, next) => {
  const errMsg = err.toString() || "Something went wrong";
  res.status(500).json({ msg: errMsg });
});

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
