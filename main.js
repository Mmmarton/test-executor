var shell = require('shelljs');

if (!shell.which('git')) {
    shell.echo('This script requires git');
    shell.exit(1);
}

if (shell.exec('git pull').code !== 0) {
    shell.echo('Error: Git pull failed');
    shell.exit(1);
}

shell.exec('npm run test');