const inquirer = require("inquirer");
const fs = require("fs");
const template = require("./readmetemplate");

inquirer
    .prompt([{
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'location',
            message: 'Where do you live?',
        },
        {
            type: 'input',
            name: 'hobby',
            message: 'What is your hobby?',
        },
        {
            type: 'input',
            name: 'food',
            message: 'What is your favorite food?',
        },
        {
            type: "list",
            message: "Choose a license to create your badge:",
            name: "license",
            choices: [{
                    name: "MIT license",
                    value: "MIT"
                },
                {
                    name: "Apache License 2.0",
                    value: "Apache"
                },
                {
                    name: 'BSD 3-Clause "New" or "Revised" license',
                    value: "BSD3"
                },
                {
                    name: "GNU General Public License (GPL)",
                    value: "GPL"
                },
            ],
        },
    ])
    .then(({
        license
    }) => {
        // Create a license string
        let badge;
        switch (license) {
            case "MIT":
                badge =
                    "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
                break;
            case "Apache":
                badge =
                    "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
                break;
            case "BSD3":
                badge =
                    "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
                break;
            case "GPL":
                badge =
                    "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
                break;

            default:
                throw new Error(`Invalid license ${license}`);
        }

        const markdown = `# License Badge

${badge}`;

        // Save to file
        fs.writeFile("badge.md", markdown, (err) =>
            err ? console.error(err) : console.log("Created badge.md")
        );
    });