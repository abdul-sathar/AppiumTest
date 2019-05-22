const fs = require('fs');
const path = require('path');
const semver = require('semver');
const beautify = require('js-beautify').js;
const packageJson = require('../../package.json');

/**
 * Set release candidate tag on package.json
 */
function bumpMinorVersionToBeta () {
  const major = semver.major(packageJson.version);
  const minor = semver.minor(packageJson.version);
  const patch = semver.patch(packageJson.version);
  packageJson.version = `${major}.${minor + 1}.${patch}-beta.0`;
  fs.writeFileSync(path.resolve('package.json'), beautify(JSON.stringify(packageJson)));
}

bumpMinorVersionToBeta();