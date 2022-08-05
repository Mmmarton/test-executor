const shell = require('shelljs');

if (!shell.which('git')) {
    shell.echo('This script requires git');
    shell.exit(1);
}

shell.exec('npm run test');

const results = require('./test-results.json');
const failedTests = results.testResults[0].assertionResults.filter(({ status }) => status === 'failed').map(test => test.fullName);

console.log({ total: results.numTotalTests, passed: results.numPassedTests, failedTests });