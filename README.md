# Playwright_Resource - Automating with Playwright on an E-commerce Website: Beginner to Intermediate level.
The E-commerce Testing Suite is a project built from the ground up, starting with the basics, to provide a beginner-friendly resource for diving into automation testing with Playwright.
It includes test cases covering various aspects of the website, such as user authentication, product browsing, and cart management.

## Key Features:
### Authentication Suite: 
Contains test cases related to user authentication, including logging in with valid and invalid credentials, and logging out.
### Product Browsing Suite: 
Includes test cases for browsing products on the website, such as navigating to different product categories, searching for specific products, and filtering products by price or category.
### Cart Management Suite: 
Covers test cases related to managing the shopping cart, such as adding items to the cart, updating the quantity of items, and removing items from the cart.

## Technologies Used:
### Playwright: 
A Node.js library for automating browser interactions, used for writing and executing the test cases.
### Node.js:
A JavaScript runtime environment, used for running the testing framework and managing dependencies.
### npm: 
The package manager for Node.js, used for installing dependencies and managing project configuration.

## Purpose:
The E-commerce Testing Suite is a project built from the ground up, starting with the basics, to provide a beginner-friendly resource for diving into automation testing with Playwright. Its purpose is to share tthe overall idea of the QA'ing an e-commerce website by automating the testing process. By covering key functionalities such as user authentication, product browsing, and cart management, this project aims to serve as a comprehensive learning tool for aspiring automation testerion.

### Installation
Install Node.js and npm:
If Node.js and npm are not installed on your system, follow the instructions below to install them:
Windows/macOS:
Download the installer from the official Node.js website from here https://nodejs.org/.
Run the installer and follow the prompts to install Node.js and npm.

### Clone the repository:
git clone https://github.com/akhiltodecode/Playwright_Resource.git

### Setting Up Playwright Environment
Install Playwright as a development dependency:
npm install playwright --save-dev

Test Runner
npm install @playwright/test --save-dev

Initialize Playwright in your project:
npx playwright install

Test Runner
npm install @playwright/test --save-dev

### Navigate to test suite:
cd tests

# Playwright Documentation for the project
## Test Suites
### Authentication Suite:
Test cases related to user authentication, such as logging in and logging out.
npx playwright test tests/authentication.spec

a.Test logging in with valid credentials:

b.Test logging in with invalid credentials:

c.Test logging out:

### Product Browsing Suite:
Test cases related to browsing products on the website.
npx playwright test tests/product-browsing-test.spec.js

a.Test navigating to different product categories:

b.Test to search / browser a product

### Cart Management Suite:
Test cases related to managing the shopping cart.
npx playwright test tests/adding-items-to-cart.spec.js

a.Test adding items to the cart:

b.Test updating the quantity of items in the cart:

c.Test removing items from the cart:

## Running Tests
Instructions on how to run tests -> TO-DO before running authentication suite input password field

### Run tests:

### >Run particular test suite like an authentication suite
npx playwright test tests/authentication.spec.js

### >Run all the test suites
npx playwright test 

## Contributing
Branching: Create descriptive branches from main.
Coding: Follow coding standards and write tests.
Documentation: Update as needed.
Pull Requests: Clearly explain changes in PRs.
Reviews: Be open to feedback.

## Additional Resources
Any additional resources - https://playwright.dev/

This README file provides comprehensive instructions for installing Playwright and setting up your test environment, along with descriptions of the test suites and instructions for running tests and generating reports. Feel free to customize it further to suit your project's needs.


### Contribution:
Contributions to the project are welcome! Developers can contribute by adding new test cases, improving existing ones, enhancing the testing framework, or providing feedback and suggestions for improvement.

#### Contact:
For questions, please reach out to me @ akhileshkeerthi@gmail.com.
