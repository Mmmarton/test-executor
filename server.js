const express = require("express");
const executor = require("./executor");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is up!");
});

app.post("/", (req, res) => {
  setTimeout(() => handlePush(req.body));
  res.send();
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

function handlePush(body) {
  const branch = body.ref.replace("refs/heads/", "");
  const pusher = body.pusher;

  console.log({ branch, pusher });

  executor.execute();

  const results = require("./test-results.json");
  const failedTests = results.testResults[0].assertionResults
    .filter(({ status }) => status === "failed")
    .map((test) => test.fullName);

  console.log({
    total: results.numTotalTests,
    passed: results.numPassedTests,
    failedTests,
  });
}
