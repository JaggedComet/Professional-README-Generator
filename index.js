const inquirer = require("inquirer");
const fs = require("fs");
const template = require("./readmetemplate");

const init = () => {
    inquirer
        .prompt([{
                type: 'input',
                name: 'title',
                message: 'What is the title of your project?',
            },
            {
                type: 'input',
                name: 'description',
                message: 'Describe the functionality of your product (motivation, problem it solved, what did you learn).',
            },
            {
                type: 'input',
                name: 'installation',
                message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
            },
            {
                type: 'input',
                name: 'usage',
                message: 'What are the instructions and examples for use? Include screenshots as needed.',
            },
            {
                type: 'input',
                name: 'contribution',
                message: 'List your collaborators if you had any.',
            },
            {
                type: 'input',
                name: 'features',
                message: 'What are the features in your project?',
            },
            {
                type: 'input',
                name: 'third',
                message: 'If you would like anyone to contribute, please put how they can.',
            },
            {
                type: 'input',
                name: 'test',
                message: 'If you have any tests for your application, put them here.',
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
            {
                type: 'input',
                name: 'github',
                message: 'What is your github link?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email that developers can reach you at?',
            },
        ])
        .then(data => {
            // Create a license string
            let badge;
            switch (data.license) {
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
            }

            const readMeDocument = template(data, badge);

            // Save to file
            fs.writeFile("README.md", readMeDocument, (err) =>
                err ? console.error(err) : console.log("Created README.md")
            );
        });
}

init ();