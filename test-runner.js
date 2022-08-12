const shell = require("shelljs");

function setupGit() {
  if (!shell.which("git")) {
    shell.echo("This script requires git");
    shell.exit(1);
  }
}

function runTests() {
  shell.exec("npm run test");
  const results = require("./test-results.json");
  const failedTests = results.testResults[0].assertionResults
    .filter(({ status }) => status === "failed")
    .map((test) => test.fullName);

  return {
    total: results.numTotalTests,
    passed: results.numPassedTests,
    failedTests,
  };
}

module.exports = { setupGit, runTests };
