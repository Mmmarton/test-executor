const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is up!");
});

app.post("/", (req, res) => {
  const push = req.body;
  const branch = push.ref.replace("refs/heads/", "");
  console.log({ pusher: push.pusher.name, branch });
  res.send();
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
