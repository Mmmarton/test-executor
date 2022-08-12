const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is up!");
});

app.post("/", (req, res) => {
  console.log(req.body);
  const push = req.body;
  console.log({ pusher: push.pusher.name });
  res.send();
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
