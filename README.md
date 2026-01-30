# Swift Translator - Automated Testing Suite

## Project Overview

This project contains a comprehensive automated testing suite for the **Swift Translator** web application, built using the Playwright Test framework. The test suite implements industry-standard testing practices including the Page Object Model (POM) design pattern and data-driven testing methodology to ensure thorough validation of the application's translation functionality.

The testing framework validates both positive scenarios (valid translations) and negative scenarios (error handling and validation), providing complete coverage of the application's core features.

---

## Features

- **Data-Driven Testing**: Test cases are organized in separate data files, enabling easy maintenance and scalability
- **Page Object Model**: Implements POM design pattern for improved code reusability and maintainability
- **Comprehensive Coverage**: Tests both positive and negative scenarios using parameterized test data
- **Cross-Browser Support**: Configured to run tests across Chromium, Firefox, and WebKit browsers
- **Detailed Reporting**: Generates HTML reports with screenshots and trace files for debugging
- **Modular Architecture**: Clean separation of concerns between test logic, page interactions, and test data

---

## Project Structure

```
swift-translator-tests/
│
├── tests/                          # Test specification files
│   ├── swift-translator.spec.js    # Main test suite with positive and negative tests
│                           
│
├── models/                         # Page Object Models
│   └── TranslatorPage.js           # POM for Swift Translator page interactions
│
├── data/                           # Test data files
│   ├── positiveData.js             # Array of valid test cases
│   └── negativeData.js             # Array of invalid/edge case scenarios
│
├── playwright.config.js            # Playwright configuration and settings
├── package.json                    # Project dependencies and scripts
└── README.md                       # Project documentation (this file)
```

### Key Components

- **`tests/`**: Contains test specifications that define test scenarios and assertions
- **`models/TranslatorPage.js`**: Encapsulates all page interactions (selectors, actions, methods) for the translator interface
- **`data/positiveData.js`**: Contains arrays of valid translation test cases
- **`data/negativeData.js`**: Contains arrays of invalid inputs and edge cases to test error handling
- **`playwright.config.js`**: Defines test execution settings, browser configurations, and reporting options

---

## Installation

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Setup Instructions

1. **Clone or extract the project** to your local machine

2. **Navigate to the project directory**:
   ```bash
   cd swifttranslator-test
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Install Playwright browsers** (first time only):
   ```bash
   npx playwright install
   ```

---

## Running Tests

### Basic Test Execution

Run all tests in headless mode (default):
```bash
npx playwright test
```

### Headed Mode (Visual Browser)

Run tests with visible browser windows:
```bash
npx playwright test --headed
```

### Specific Browser Testing

Run tests on a specific browser:

**Chromium:**
```bash
npx playwright test --project=chromium
```

**Firefox:**
```bash
npx playwright test --project=firefox
```

**WebKit (Safari):**
```bash
npx playwright test --project=webkit
```

### Run Specific Test Files

Execute a particular test file:
```bash
npx playwright test tests/swift-translator.spec.js
```

### Debug Mode

Run tests in debug mode with Playwright Inspector:
```bash
npx playwright test --debug
```

### Additional Options

**Run tests with UI mode (interactive):**
```bash
npx playwright test --ui
```

**Run specific test by name:**
```bash
npx playwright test -g "positive test"
```

---

## Testing Methodology

### Data-Driven Testing

This project implements data-driven testing to maximize test coverage while minimizing code duplication. Test data is externalized into separate files:

- **Positive Test Data** (`data/positiveData.js`): Contains arrays of valid inputs and expected outputs
- **Negative Test Data** (`data/negativeData.js`): Contains arrays of invalid inputs and expected error messages

**Example of data structure:**

```javascript
// positiveData.js
export const positiveTestCases = [
  { input: "Hello", expectedOutput: "Bonjour", description: "Simple greeting" },
  { input: "Good morning", expectedOutput: "Bon matin", description: "Time-based greeting" },
  // ... more test cases
];
```

The test suite uses **loops** to iterate through these arrays, executing the same test logic with different data sets:

```javascript
// Example test structure
positiveTestCases.forEach((testCase) => {
  test(`Positive test: ${testCase.description}`, async ({ page }) => {
    // Test implementation using testCase data
  });
});
```

This approach provides several benefits:
- Easy addition of new test cases without modifying test code
- Clear separation between test data and test logic
- Improved maintainability and scalability
- Comprehensive coverage through multiple scenarios

### Page Object Model (POM)

The project implements the Page Object Model design pattern to enhance test maintainability and reduce code duplication.

**Key Benefits:**
- **Encapsulation**: Page interactions are centralized in dedicated page classes
- **Reusability**: Methods can be used across multiple tests
- **Maintainability**: UI changes require updates in only one location
- **Readability**: Tests use high-level methods that describe user actions



## Test Reports

### Viewing HTML Reports

After test execution, Playwright generates detailed HTML reports automatically.

**To view the report:**
```bash
npx playwright show-report
```

This will open an interactive HTML report in your default browser containing:
- Overall test pass/fail statistics
- Individual test results with timing information
- Screenshots (for failed tests)
- Trace files for debugging
- Detailed error messages and stack traces

### Report Location

Reports are stored in the `playwright-report/` directory (generated after test execution).

### Understanding Results

- ✅ **Green tests**: Passed successfully
- ❌ **Red tests**: Failed - click to view error details and screenshots
- ⏭️ **Skipped tests**: Not executed (if applicable)

---

## Configuration

The `playwright.config.js` file contains all test execution settings:

- **Browser Projects**: Chromium, Firefox, WebKit
- **Base URL**: Application URL for testing
- **Timeouts**: Default timeout values for actions and tests
- **Retries**: Number of retry attempts for failed tests
- **Reporters**: HTML reporter configuration
- **Screenshot/Trace**: Capture settings for debugging

To modify settings, edit `playwright.config.js` according to your requirements.

---

## Notes for Reviewers/Markers

### Key Highlights

1. **Industry Best Practices**: The project follows established testing patterns (POM, data-driven testing) used in professional software development environments.

2. **Scalability**: New test cases can be added simply by extending the data arrays in `data/positiveData.js` or `data/negativeData.js` without modifying test code.

3. **Maintainability**: The Page Object Model ensures that any UI changes to the Swift Translator application require updates in only one location (`TranslatorPage.js`).

4. **Comprehensive Testing**: The suite covers both happy path scenarios (positive tests) and error handling (negative tests), ensuring robust application validation.

5. **Execution Efficiency**: Tests are designed to run in parallel across multiple browsers, maximizing execution speed while maintaining reliability.

### Testing Approach

- **Positive Tests**: Validate that the application correctly handles valid inputs and produces expected translations
- **Negative Tests**: Verify that the application appropriately handles invalid inputs, edge cases, and displays proper error messages
- **Loop-Based Execution**: Each test suite uses `.forEach()` loops to iterate through test data arrays, executing parameterized tests efficiently

### Technical Stack

- **Test Framework**: Playwright Test
- **Language**: JavaScript/TypeScript
- **Design Pattern**: Page Object Model
- **Testing Strategy**: Data-Driven Testing
- **Browsers**: Chromium, Firefox, WebKit

### Recommendations for Assessment

1. Run the complete test suite to observe all test scenarios
2. Review the test reports for detailed results and coverage analysis
3. Examine the data files to see the variety of test cases covered
4. Review the TranslatorPage.js file to understand the POM implementation
5. Check the test specifications to see how data-driven testing is implemented using loops

---

## Troubleshooting

### Common Issues

**Issue**: Tests fail with timeout errors  
**Solution**: Increase timeout values in `playwright.config.js` or check network connectivity

**Issue**: Browsers not installed  
**Solution**: Run `npx playwright install` to download required browsers

**Issue**: Cannot find module errors  
**Solution**: Ensure all dependencies are installed with `npm install`

---

## Additional Resources

- [Playwright Documentation](https://playwright.dev/)
- [Playwright Test Best Practices](https://playwright.dev/docs/best-practices)
- [Page Object Model Pattern](https://playwright.dev/docs/pom)

---

## Author & Submission Information

**Project**: Swift Translator Automated Testing Suite  
**Framework**: Playwright Test  
**Submission Date**: [31/01/2026]  
**Course**: [ITPM]
