const fs = require("fs");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }
  return; //license badge based on which license what passed in;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  }
  return; //license link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }
  return; //license section of read me ;
}

const generateCredit = (creditArr) => {
  if (!creditArr) {
    return "";
  }
  return `
    ## Credits
    ${creditArr}`;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
          ##Description
          ${data.description}
          ##Installation
          ${data.install}
          ##Usage
          ${data.usage}
`;
}

module.exports = generateMarkdown;
