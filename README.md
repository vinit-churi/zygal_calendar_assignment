# Zygal Frontend Test

This project is a solution to the Zygal Frontend Test. It is a simple calendar application built with HTML, CSS, and JavaScript. The application does not use any third-party calendar libraries.

## Live Demo

You can view the live demo of the application [here](https://vercel.com/vinit-churi/zygal-calendar-assignment/BV9gA8zCuGbsw7XTotwWsG94vijk).

## Features

- The application loads the current month's calendar as soon as the page loads. The current date is selected by default and is highlighted in blue with white text.
- The application provides 'Prev' and 'Next' toggle buttons to navigate between different months. The calendar increments by 1 month when the "Next" button is pressed and decrements by 1 month when the "Prev" button is pressed.
- Users can click the dates to select them. Selected dates are pushed into an array and displayed on the webpage. Clicking the same date again will deselect it and remove it from the array.
- If the 'Next' or 'Prev' buttons are clicked, the selected dates remain as they are. When the user navigates back to the same month, the selected dates are highlighted.

## Technical Rules

- The application is built using HTML, CSS, and JS. JS-based frameworks like Vue can be used.
- No third-party calendar library is used for the calendar UI and its functionalities.
- The UI is responsive and is kept at the center of the screen.

## Functionality Explanation

1. The application loads the current month's calendar as soon as the page loads. The current date is selected by default and is highlighted in blue with white text.
2. The application provides 'Prev' and 'Next' toggle buttons to navigate between different months. The calendar increments by 1 month when the "Next" button is pressed and decrements by 1 month when the "Prev" button is pressed.
3. Users can click the dates to select them. Selected dates are pushed into an array and displayed on the webpage. Clicking the same date again will deselect it and remove it from the array.
4. If the 'Next' or 'Prev' buttons are clicked, the selected dates remain as they are. When the user navigates back to the same month, the selected dates are highlighted.