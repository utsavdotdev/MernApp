const express = require("express");
const cors = require("cors");
const empModel = require("./models/employee");
const empRouter = require("./routers/emp");
const app = express();
const port = process.env.PORT || 3001;

//connecting to mongoDb
require("./db/conn");

app.use(express.json({ extented: false }));
app.use(cors());
app.use(empRouter);
app.get("/", async (req, res) => {
  try {
    const emp = await empModel.find();
    res.send(emp);
  } catch (error) {
    res.send(error);
  }
});
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
