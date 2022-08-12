const express = require("express");
const { setupGit, runTests } = require("./test-runner");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is up!");
});

app.post("/", (req, res) => {
  const push = req.body;
  handlePush(push);
  res.send();
});

function startApp() {
  setupGit();

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

function handlePush(push) {
  setTimeout(() => {
    const pusher = push.pusher.name;
    const branch = push.ref.replace("refs/heads/", "");

    const testResults = runTests();
    const failCount = testResults.total - testResults.passed;

    if (failCount) {
      const fails = testResults.failedTests.join();
      console.log(
        `The last push on ${branch} made by ${pusher} has ${failCount} tests failing. Check out them: \`${fails}\``
      );
    } else {
      console.log(`Push on ${branch} by ${pusher}. All good.`);
    }
  });
}

startApp();
