// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  } else if (license == "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license == "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license == "GPL") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license == "BSD(2-clause)") {
    return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
  } else if (license == "BSD(3-clause") {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  } else if (license == "MIT") {
    return `[${license}](https://opensource.org/licenses/MIT)`;
  } else if (license == "Apache") {
    return `[${license}](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license == "GPL") {
    return `[${license}](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license == "BSD(2-clause)") {
    return `[${license}](https://opensource.org/licenses/BSD-2-Clause)`;
  } else if (license == "BSD(3-clause") {
    return `[${license}](https://opensource.org/licenses/BSD-3-Clause)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }
  return `## License`;
}

const generateCredit = (creditArr) => {
  let creditString = "## Credits";
  if (!creditArr) {
    return "";
  }
  console.log("***!!!", creditArr);
  const projCollab = creditArr.split(",");
  console.log("!!!!!", projCollab.length);
  for (let i = 0; i < projCollab.length; i++) {
    console.log("!!!!!", creditString);
    creditString = creditString.concat(
      "<br>",
      `- [${projCollab[i]}](https://github.com/${projCollab[i]})`
    );
  }
  return creditString;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
* [Installation](#-Installation)
* [Usage](#-Usage)
* [Credits](#-Credits)
* [Questions](#-Questions)
* [License](#-License)

## Installation
${data.install}

## Usage
${data.usage}

${generateCredit(data.credits)}

## Questions
- Feel free to reach me at ${data.github}

${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}
${renderLicenseBadge(data.license)}
`;
}

module.exports = generateMarkdown;
