# TeamGenerator

[![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Description

The motivation for this project was to create a command line program that would dynamically generate an HTML webpage based on user inputs. The two Javascript libraries used to achieve this were inquirer and fs. By utilizing Javascript alone a quick file generator was able to be created that utilized new concepts like command line user interaction and file creation. I learned how to effectively use template literals to make a simple user experience. The thing I'm most proud of for this project is that it did not take me as long as I thought it would have to create the test files and be able to pass them. In the future I'd like to be able to integrate this site with a backend database so that each time it is generated a file on the computer does not grow. With the completion of this project I fulfilled the following user story and acceptance criteria.

[Link to Application Video](https://drive.google.com/file/d/17TJx9MYir0-_XyZ2jdBcG0AcJp5jDdop/view)

## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

Run the following command in order to be able to install the package for this code:

    npm install

## Usage

To run this code from the parent directory use the following command:

    node index.js

## License

This project is covered under the following license: [![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Contributing

To contribute to this project please clone the repo locally and commit your code using a separate branch. Please have unit tests for your code and make sure all tests pass using the test command before opening a pull request.

## Tests

Run the following command to initiate tests on the code:

    npm test

## Questions

If there are any questions on the work provided in this repository please use the following contact information:

GitHub: [heatherknoyes](https://github.com/heatherknoyes)

Email: heatherknoyes@gmail.com
