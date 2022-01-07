const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

const { selectAll, addAll } = require("./user.js");

app.get("/user", async (req, res) => {
  //   res.send("hello");
  const list = await selectAll();
  res.json(list);
  //   console.log(list);
});

app.put("/add-user", async (req, res) => {
  let user = req.body;
  await addAll(user);
  res.json({ message: "added" });

  //   console.log(list);
});

app.listen(4000, console.log("server started"));
