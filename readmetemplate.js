const template = ({ description, installation, usage, contribution, license, features, third, tests, title }, badge) =>

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

${tests}

`

module.exports = template;