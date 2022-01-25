const template = ({ description, installation, usage, contribution, license, features, third, test, title, github, email }, badge) =>

`# ${title}
${badge}

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${installation}

## Usage

${usage}

## Credits

${contribution}

## License

${license}

---

## Features

${features}

## How to Contribute

${third}

## Tests

${test}


${github}
${email}

`

module.exports = template;