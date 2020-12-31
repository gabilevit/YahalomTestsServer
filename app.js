const express = require("express");
const app = express();
const port = 3000;
const questionRouter = require("./routes/questionRoutes");
const cors = require("cors");

app.use(cors());
app.listen(port, () =>
  console.log(`YahalomTests server is running at http://localhost:${port}`)
);

app.use("/api/Questions", questionRouter);
