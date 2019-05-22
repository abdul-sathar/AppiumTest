const semver = require('semver');

/**
 * Parses the package.json with what the prerelease is
 *
 * e.g.) If the package.json has version 1.13.4-alpha.0 the prerelease is alpha
 */
function outputNextMinorVersion () {
  const {version} = require('../../package.json');
  // eslint-disable-next-line no-console
  console.log(semver.parse(version).prerelease[0] || 'latest');
}

outputNextMinorVersion();