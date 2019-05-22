/**
 * Print the package version
 *
 */
function outputNextMinorVersion () {
  console.log(require('../../package.json').version);
}

outputNextMinorVersion();