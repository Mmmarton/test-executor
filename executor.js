const shell = require("shelljs");

function execute() {
  if (!shell.which("git")) {
    shell.echo("This script requires git");
    shell.exit(1);
  }

  shell.exec("npm run test");
}

module.exports = { execute };
