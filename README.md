📚 Test Suite Documentation

This repository contains test files designed to validate different functionality aspects of various JavaScript functions. The tests are written using Mocha and Chai frameworks for unit testing and assertion validation.

📝 Test Files
1. 1_EvenOrOddTests.js 🧮

Tests the isOddOrEven function:

    ✅ Verifies the function returns "odd" for odd-length strings.
    ✅ Verifies the function returns "even" for even-length strings.
    ❌ Ensures the function returns undefined for non-string or invalid inputs (numbers, arrays, objects, etc.).

2. 2_CharLookupTests.js 🔠

Tests the lookupChar function:

    ✅ Verifies the function returns the correct character at the specified index for a string.
    ❌ Ensures the function returns undefined for incorrect first parameters (non-strings).
    ❌ Ensures the function returns undefined for incorrect second parameters (non-integer or out-of-bound indexes).
    🔴 Checks that an "Incorrect index" message is returned for an index greater than the string length or a negative index outside the string bounds.

3. 3_MathEnforcerTests.js ➗

Tests the mathEnforcer object functions: addFive, subtractTen, and sum:

    addFive: ✅ Verifies the function adds 5 to the given number or returns undefined for invalid inputs.
    subtractTen: ✅ Verifies the function subtracts 10 from the given number or returns undefined for invalid inputs.
    sum: ✅ Verifies the function correctly sums two numbers or returns undefined for invalid inputs.

4. 4_ArrayAnalyzerTests.js 🧑‍💻

Tests the analyzeArray function:

    ❌ Ensures the function returns undefined for non-array inputs.
    ✅ Verifies the function returns undefined for an empty array.
    ✅ Validates the correct response for arrays with numeric values (minimum, maximum, and length).
    🔴 Handles edge cases like single-element arrays and arrays with equal elements.

5. 5_ArtGalleryTests.js 🖼️

Tests the artGallery object functions: addArtwork, calculateCosts, and organizeExhibits:

    addArtwork: ✅ Tests adding artwork with valid inputs and throws errors for invalid titles, dimensions, and artist names.
    calculateCosts: ✅ Ensures valid pricing for exhibition and insurance costs based on sponsorship and error handling for invalid input types or negative costs.
    organizeExhibits: ✅ Verifies that exhibits are organized correctly based on artwork and display space counts and returns appropriate messages for each scenario.

6. 6_FoodDeliveryTests.js 🍲

Tests the foodDelivery object functions: getCategory, addMenuItem, and calculateOrderCost:

    getCategory: ✅ Verifies category retrieval and throws errors for invalid categories.
    addMenuItem: ✅ Tests adding menu items with valid inputs and handles errors for invalid data types or constraints.
    calculateOrderCost: ✅ Calculates order costs with and without discounts, including validation for shipping, addons, and discount inputs.

7. 7_WorkforceManagementTests.js 🧑‍💼

Tests the workforceManagement object functions: recruitStaff, computeWages, and dismissEmployee:

    recruitStaff: ✅ Checks for successful recruitment based on experience and role requirements and handles invalid roles.
    computeWages: ✅ Calculates wages, including bonuses for overtime, and validates input for hours worked.
    dismissEmployee: ✅ Manages employee dismissal by index with error handling for invalid inputs.

⚙️ Test Execution

To run the tests in this repository:

    Install dependencies:

npm install

Run the tests using Mocha:

    npm test

🆕 Changes & Updates
📅 Feb 25, 2025

    Added Unit Tests for:
        EvenOrOddTests.js: Functionality for checking the odd/even string lengths.
        CharLookupTests.js: Functionality for character lookup at specified index.
        MathEnforcerTests.js: Addition, subtraction, and summation operations with valid number inputs.
        ArrayAnalyzerTests.js: Array analysis including length, minimum, and maximum values.
        ArtGalleryTests.js: Gallery artwork management, including artwork addition, cost calculation, and exhibit organization.
        FoodDeliveryTests.js: Food delivery functionalities including category retrieval, menu item addition, and order cost calculation.
        WorkforceManagementTests.js: Workforce management functionalities including staff recruitment, wage computation, and employee dismissal.

